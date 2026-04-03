import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const insss = "border px-2 py-2 bg-white rounded-lg";
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    rating: "",
    image: null
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImgChange = (e) => {
    const files = e.target.files;
    if (files) {
      setProduct({ ...product, image: files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", product.title);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("category", product.category);
      formData.append("rating", product.rating);
      if (product.image) formData.append("image", product.image);

      await axios.post("http://localhost:3000/api/createProduct", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      alert("Product created successfully!");
      setProduct({
        title: "",
        description: "",
        price: "",
        category: "",
        rating: "",
        image: ""
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-center items-start p-5 bg-black min-h-screen">
      <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={handleSubmit}>

        <div className="flex flex-col w-full">
          <label className="text-white mb-1">Image</label>
          <input
            type="file"
            className={insss}
            multiple
            accept="image/*"
            onChange={handleImgChange}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-white mb-1">Title</label>
          <input
            className={insss}
            placeholder="Enter title"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-white mb-1">Description</label>
          <input
            className={insss}
            placeholder="Enter description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-white mb-1">Price</label>
          <input
            className={insss}
            placeholder="Enter price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-white mb-1">Rating</label>
          <input
            className={insss}
            placeholder="Enter rating"
            name="rating"
            value={product.rating}
            onChange={handleChange}
          />
        </div>
  <div className="flex flex-col w-full">
          <label className="text-white mb-1">category</label>
          <input
            className={insss}
            placeholder="Enter category"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <button className="px-5 py-2 bg-white text-black font-medium rounded-2xl hover:bg-gray-200 transition-all">
          Submit
        </button>

      </form>
    </div>
  );
};

export default Sell;