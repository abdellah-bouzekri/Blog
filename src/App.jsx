import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import AddBlog from "./Components/AddBlog";
import Blogs from "./Components/Blogs";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://blog-sooty-alpha.vercel.app/api/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const addBlog = (newBlog) => {
    fetch("https://blog-sooty-alpha.vercel.app/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then((response) => response.json())
      .then((data) => setBlogs((prevBlogs) => [...prevBlogs, data]))
      .catch((error) => console.error("Error adding blog:", error));
  };

  const deletePost = (id) => {
    fetch(`https://blog-sooty-alpha.vercel.app/api/blogs/${id}`, {
      method: "DELETE",
    })
      .then(() =>
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id))
      )
      .catch((error) => console.error("Error deleting blog:", error));
  };

  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden text-slate-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-8">
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Blogs blogs={blogs} deletePost={deletePost} />
                  </>
                }
              />
              <Route
                path="/addNewPost"
                element={<AddBlog addBlog={addBlog} />}
              />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
