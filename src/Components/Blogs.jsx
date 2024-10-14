import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = ({ blogs, deletePost }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addNewPost");
  };

  return (
    <>
      <div className="w-full py-8 px-4">
        {blogs.length === 0 ? (
          <p className="text-center text-stone-600">No blogs available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="shadow-md rounded-md text-stone-600 bg-transparent">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    console.error("Image failed to load:", blog.image);
                    e.target.src = "https://via.placeholder.com/300x200";
                  }}
                />
                <div className="px-4 font-medium text-slate-200">
                  <p className="text-sm py-1">
                    Date: {new Date(blog.date).toLocaleDateString()}
                  </p>
                  <h2 className="text-lg font-bold text-stone-400">
                    {blog.title}
                  </h2>
                  <p className="text-sm">{blog.description}</p>
                  <p className="text-sm">Author: {blog.author}</p>
                  <div className="flex justify-end pb-2">
                    <button
                      className="py-2 px-2 bg-pink-400 text-white rounded"
                      onClick={() => deletePost(blog.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex mt-4 justify-center">
          <button
            onClick={handleClick}
            className="py-3 px-3 bg-slate-800 text-white font-medium rounded hover:bg-indigo-800">
            Add Blog
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
