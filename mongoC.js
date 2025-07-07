// import { MongoClient } from "mongodb";

// console.log(" Connecting to MongoDB Atlas...");

// const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
// // const connectionString = `mongodb+srv://integrationninjas:${password}@devcluster.hu5pjmi.mongodb.net/?retryWrites=true&w=majority`; // cluster url
// const connectionString = `mongodb+srv://vishal:${password}@mernprojectcluster.ygj2gl8.mongodb.net/?retryWrites=true&w=majority&appName=mernprojectcluster`; // cluster url

// // mongodb+srv://vishal:${password}@mernprojectcluster.ygj2gl8.mongodb.net/?retryWrites=true&w=majority&appName=mernprojectcluster
// const client = new MongoClient(connectionString);
// let conn;
// try {
//   conn = await client.connect();
//   console.log("connection successful");
// } catch (e) {
//   console.error(e);
// }
// let db = conn.db("userdata");
// export default db;

// mongoC.js
import { MongoClient } from "mongodb";

console.log("Connecting to MongoDB Atlas...");

const password = encodeURIComponent(process.env.MONGO_PASSWORD?.trim() || "");
const connectionString = `mongodb+srv://vishal:${password}@mernprojectcluster.ygj2gl8.mongodb.net/?retryWrites=true&w=majority&tls=true&appName=mernprojectcluster`;

const client = new MongoClient(connectionString, {
  // useUnifiedTopology: true,  // Not needed for latest MongoDB Node driver
});

let db = null;

try {
  const conn = await client.connect();
  console.log("✅ MongoDB connection successful");
  db = conn.db("userdata");
} catch (error) {
  console.error("❌ MongoDB connection failed:", error.message);
  process.exit(1); // Optional: Stop execution if DB is critical
}

export default db;
