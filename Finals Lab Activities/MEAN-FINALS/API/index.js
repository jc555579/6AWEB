const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const CONNECTION_STRING = "mongodb://localhost:27017";
const DATABASENAME = "MyDB";
let database;

app.use((req, res, next) => {
  if (!database) {
    return res.status(503).json({ error: "Database not connected yet." });
  }
  next();
});

async function start() {
  try {
    const client = new MongoClient(CONNECTION_STRING);
    await client.connect();
    database = client.db(DATABASENAME);
    console.log("MongoDB Connected Successfully");
    app.listen(5038, () => console.log("Server running on port 5038"));
  } catch (error) {
    console.error("Connection failed", error);
  }
}
start();

// Get Books
app.get("/api/books/GetBooks", async (req, res) => {
  const result = await database.collection("Books").find({}).toArray();
  res.send(result);
});

// Add Book
app.post("/api/books/AddBook", multer().none(), async (req, res) => {
  const numOfDocs = await database.collection("Books").countDocuments();
  await database.collection("Books").insertOne({
    id: String(numOfDocs + 1),
    title: req.body.title,
    desc: req.body.description,
    price: Number(req.body.price),
    author: req.body.author,
    publishedYear: Number(req.body.publishedYear)
  });
  res.json("Added Successfully");
});

app.put("/api/books/UpdateBook", multer().none(), async (req, res) => {
  await database.collection("Books").updateOne(
    { id: String(req.body.id) },
    { $set: {
        title: req.body.title,
        desc: req.body.description,
        price: Number(req.body.price),
        author: req.body.author,
        publishedYear: Number(req.body.publishedYear)
      }
    }
  );
  res.json("Updated Successfully");
});

// Delete Book - Ensure the query parameter is handled correctly
app.delete("/api/books/DeleteBook", async (req, res) => {
  const bookId = req.query.id;
  if (!bookId) return res.status(400).json("ID is required");
  
  await database.collection("Books").deleteOne({ id: String(bookId) });
  res.json("Deleted Successfully");
});