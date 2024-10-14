// main.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create a new blog
  const newBlog = await prisma.blog.create({
    data: {
      title: "Sample Blog",
      description: "This is a sample blog post.",
      image: "http://example.com/image.jpg",
      author: "Author Name",
      date: new Date(),
    },
  });
  //   console.log(newBlog);

  // Fetch all blogs
  const allBlogs = await prisma.blog.findMany();
  console.log(allBlogs);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
