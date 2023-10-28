const express = require("express");
const db = require("..//models/db");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

app.use(cors()); // This will enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/info/:dynamic", async (req, res) => {
  const { dynamic } = req.params;
  const { key } = req.query;
  console.log(dynamic, key);
  res.status(200).json({ info: "preset text 🐝" });
});

app.post("/", (req, res) => {
  const { parcel } = req.body;
  console.log(parcel);
  if (!parcel) {
    return res.status(400).send({ status: "Failed" });
  }
  res.status(200).send({ status: "Recevied" });
});

app.get("/home", async (req, res) => {
  try {
    let result = await db.query(
      `SELECT (users.firstname || ' ' || users.lastname) AS username, blogs.blog_id, blogs.blog_title, blogs.blog_description, blogs.blog_image FROM users INNER JOIN blogs ON users.user_id = blogs.user_id;`
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("error in getting the home page");
  }
});

app.post("/Register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const checkQuery = "SELECT user_id FROM users WHERE email = $1";
    const checkResult = await db.query(checkQuery, [email]);

    if (checkResult.rows.length > 0) {
      return res.status(409).json({ error: "User already exists" });
    }

    const insertQuery = `INSERT INTO users (firstname, lastname, email, password)
                            VALUES ($1, $2, $3, $4)
                            RETURNING user_id`;

    const insertValues = [firstname, lastname, email, password];
    const result = await db.query(insertQuery, insertValues);
    const newUserId = result.rows[0].user_id;

    res
      .status(201)
      .json({ message: "User added successfully", user_id: newUserId });
  } catch (error) {
    console.error("Failed to register : ", error);
    res.status(500).json({ error: "Failed to register" });
  }
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkQuery =
      "SELECT user_id, firstname, lastname, email FROM users WHERE email = $1 AND password = $2";
    const checkResult = await db.query(checkQuery, [email, password]);

    if (checkResult.rows.length === 1) {
      res
        .status(200)
        .json({ message: "Login successful", user: checkResult.rows[0] });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login failed: ", error);
    res.status(500).json({ error: "Login failed" });
  }
});

app.post("/AddBlog", async (req, res) => {
  const { author, blog_title, blog_description, blog_image } = req.body;
  try {
    const query = `INSERT INTO blogs (author, blog_title, blog_description, blog_image)
            values ($1, $2, $3, $4)
            RETURNING blog_id`;
    const values = [author, blog_title, blog_description, blog_image];
    const result = await db.query(query, values);
    const newBlogId = result.rows[0].blog_id;

    res
      .status(201)
      .json({ message: "Blog added successfully", blog_id: newBlogId });
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ error: "Failed to add the blog" });
  }
});

app.get("/GetBlog/:id", async (req, res) => {
  try {
    const query = "SELECT * FROM blogs WHERE blog_id = $1";
    const blogId = req.params.id;
    const result = await db.query(query, [blogId]);
    res.json(result.rows);
  } catch (error) {
    console.error("Failed to get one blog: ", error);
    res.status(500).json({ error: "Failed to get one blog" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
