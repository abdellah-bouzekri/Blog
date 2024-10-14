import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/blogs", async (req, res) => {
  const blogs = await prisma.blog.findMany();
  res.json(blogs);
});

app.post("/api/blogs", async (req, res) => {
  const { title, description, image, author, date } = req.body;
  const newBlog = await prisma.blog.create({
    data: { title, description, image, author, date: new Date(date) },
  });
  res.json(newBlog);
});

app.delete("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.blog.delete({ where: { id: parseInt(id) } });
  res.status(204).end();
});

app.put("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, image, author, date } = req.body;
  try {
    const updatedBlog = await prisma.blog.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        image,
        author,
        date: new Date(date),
      },
    });
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
