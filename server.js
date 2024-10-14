import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to get all blogs
app.get("/api/blogs", async (req, res) => {
  const blogs = await prisma.blog.findMany();
  res.json(blogs);
});

// Endpoint to create a new blog
app.post("/api/blogs", async (req, res) => {
  const { title, description, image, author, date } = req.body;
  const newBlog = await prisma.blog.create({
    data: { title, description, image, author, date: new Date(date) },
  });
  res.json(newBlog);
});

// Endpoint to delete a blog post
app.delete("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.blog.delete({ where: { id: parseInt(id) } });
  res.status(204).end();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
