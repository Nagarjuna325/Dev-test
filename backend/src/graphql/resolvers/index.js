
const { admin, db } = require('../../config/firebaseConfig');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const resolvers = {
  Query: {
    async getUser(_, { userId }) {
      try {
        // Retrieve user data from Firestore
        const userDoc = await db.collection('users').doc(userId).get();
        if (!userDoc.exists) {
          throw new Error('User not found');
        }
        
        // Return user information
        const userData = userDoc.data();
        return {
          id: userDoc.id,
          email: userData.email,
        };
      } catch (error) {
        console.error("Error retrieving user:", error);
        throw new Error("Failed to retrieve user.");
      }
    },
  },
  Mutation: {
    async createUser(_, { name, email, password }) {
        try {
         
          const userRecord = await admin.auth().createUser({
            email,
            
          });
          
          // Save user data to Firestore
          const passwordHash = bcrypt.hashSync(password, 10);
          const userRef = db.collection('users').doc(userRecord.uid);
          await userRef.set({
            name,
            email,
            passwordHash,
          });

          return {
            id: userRecord.uid,
            email: userRecord.email,
            token: "GeneratedToken"
          };
        } catch (error) {
          console.error("Error creating user:", error);
          throw new Error("Failed to create user.");
        }
      },
      async loginUser(_, { email, password }) {
        try {
          // Get user record from Firebase Authentication
          const userRecord = await admin.auth().getUserByEmail(email);
          const userRef = db.collection('users').doc(userRecord.uid);
          const userDoc = await userRef.get();
          if (!userDoc.exists) {
            throw new Error('No such user found');
          }
          const userData = userDoc.data();
          if (!bcrypt.compareSync(password, userData.passwordHash)) {
            throw new Error('Incorrect password');
          }
          const token = jwt.sign({ userId: userRecord.uid }, 'JWT_SECRET', { expiresIn: '24h' });
          return {
            id: userRecord.uid,
            email: userRecord.email,
            token: "GeneratedToken" 
          };
        } catch (error) {
          console.error("Error logging in:", error);
          throw new Error("Failed to login.");
        }
      },
    },
  };

module.exports = resolvers;
