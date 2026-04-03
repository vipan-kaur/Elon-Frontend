import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const subCategoriesMap = {
  men: [
    { value: "formal", label: "Formal Wear" },
    { value: "casual", label: "Casual Essentials" },
    { value: "accessories", label: "Accessories" }
  ],
  women: [
    { value: "dresses", label: "Evening Dresses" },
    { value: "outerwear", label: "Outerwear" },
    { value: "handbags", label: "Handbags" }
  ],
  kids: [
    { value: "toddlers", label: "Toddlers" },
    { value: "boys", label: "Boys" },
    { value: "girls", label: "Girls" }
  ],
  baby: [{ value: "general", label: "General" }],
  decor: [{ value: "general", label: "General" }]
};

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "men",
    subCategory: "formal",
    image: null
  });

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/products");
      setProducts(data.product || []);
    } catch (err) {
      console.log(err.message);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "category") {
      setProduct({ 
        ...product, 
        category: e.target.value, 
        subCategory: subCategoriesMap[e.target.value]?.[0]?.value || ""
      });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleImgChange = (e) => {
    if (e.target.files) {
      setProduct({ ...product, image: e.target.files[0] });
    }
  };

  const handleEditInit = (p) => {
    setEditingId(p._id);
    setProduct({
      title: p.title,
      description: p.description,
      price: p.price,
      category: p.category,
      subCategory: p.subCategory || "",
      image: null
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setProduct({ title: "", description: "", price: "", category: "men", subCategory: "formal", image: null });
    document.getElementById('file_input').value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingId) {
        // UPDATE MODE
        const payload = {
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          subCategory: product.subCategory
        };
        await axios.put(`http://localhost:3000/api/updateProduct/${editingId}`, payload);
        alert("Product updated successfully!");
      } else {
        // CREATE MODE
        const formData = new FormData();
        formData.append("title", product.title);
        formData.append("description", product.description);
        formData.append("price", product.price);
        formData.append("category", product.category);
        formData.append("subCategory", product.subCategory);
        if (product.image) formData.append("image", product.image);

        await axios.post("http://localhost:3000/api/createProduct", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        alert("Product created successfully!");
      }
      
      cancelEdit();
      fetchProducts();
    } catch (err) {
      console.log(err.message);
      alert("Error: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:3000/api/deleteProduct/${id}`);
        fetchProducts(); 
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 md:mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* ADD / EDIT PRODUCT FORM */}
        <div className="w-full md:w-1/3 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit sticky top-32">
          <Typography variant="h5" className="font-serif font-bold text-gray-800 mb-6">
            {editingId ? "Update Product" : "Add New Product"}
          </Typography>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1 font-semibold">Title</label>
              <input required name="title" value={product.title} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-black" placeholder="Product Title" />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1 font-semibold">Description</label>
              <textarea required name="description" value={product.description} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-black" placeholder="Short description..." rows={3}></textarea>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1 font-semibold">Price (₹)</label>
              <input required type="number" name="price" value={product.price} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-black" placeholder="Price" />
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col w-full">
                <label className="text-gray-600 text-sm mb-1 font-semibold">Category</label>
                <select required name="category" value={product.category} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-black bg-white">
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                  <option value="baby">Baby</option>
                  <option value="decor">Decor</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-gray-600 text-sm mb-1 font-semibold">Sub-Category</label>
                <select required name="subCategory" value={product.subCategory} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-black bg-white">
                  {subCategoriesMap[product.category || "men"].map((sub) => (
                    <option key={sub.value} value={sub.value}>{sub.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {!editingId && (
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm mb-1 font-semibold">Image</label>
                <input id="file_input" required type="file" accept="image/*" onChange={handleImgChange} className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-black text-sm" />
              </div>
            )}

            <button disabled={loading} className="mt-4 w-full py-3 bg-black text-white font-bold tracking-widest text-xs uppercase rounded hover:bg-neutral-800 transition-all shadow-lg active:scale-95">
              {loading ? "Saving..." : (editingId ? "Update Product" : "Add Product")}
            </button>
            {editingId && (
              <button type="button" onClick={cancelEdit} className="w-full py-3 bg-gray-200 text-black font-bold tracking-widest text-xs uppercase rounded hover:bg-gray-300 transition-all">
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        {/* PRODUCT LIST GRID */}
        <div className="w-full md:w-2/3">
           <Typography variant="h5" className="font-serif font-bold text-gray-800 mb-6 flex justify-between items-center">
             Manage Inventory 
             <span className="text-sm font-sans font-normal text-gray-500 bg-gray-200 px-3 py-1 rounded-full">{products.length} Items</span>
           </Typography>
           
           {products.length === 0 ? (
             <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
                 <div className="text-6xl mb-4 text-gray-200">📭</div>
                 <Typography className="text-gray-400 font-medium">No products found in DB.</Typography>
                 <Typography className="text-gray-400 text-sm mt-2">Use the form on the left to add your first product.</Typography>
             </div>
           ) : (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((p) => (
                   <div key={p._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col relative group hover:shadow-md transition-all">
                      <img src={p.images && p.images.length > 0 ? `http://localhost:3000/uploads/${p.images[0]}` : "https://via.placeholder.com/300?text=No+Image"} alt={p.title} className="w-full h-48 object-cover object-top" />
                      <div className="p-4 flex flex-col flex-grow">
                         <div className="flex justify-between items-start mb-2 gap-2">
                           <div className="flex gap-1 flex-wrap">
                             <span className="text-[10px] font-bold uppercase text-blue-500 bg-blue-50 px-2 py-0.5 rounded tracking-widest">{p.category}</span>
                             {p.subCategory && <span className="text-[10px] font-bold uppercase text-green-600 bg-green-50 px-2 py-0.5 rounded tracking-widest">{p.subCategory}</span>}
                           </div>
                           <span className="text-sm font-bold text-gray-800">₹{p.price}</span>
                         </div>
                         <h3 className="font-bold text-base leading-tight mb-2 text-gray-900 line-clamp-1">{p.title}</h3>
                         <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{p.description}</p>
                      </div>
                      
                      {/* Action Overlay */}
                      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleEditInit(p)} className="bg-blue-500 text-white p-2 text-xs rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center">
                           <EditIcon fontSize="small" />
                        </button>
                        <button onClick={() => handleDelete(p._id)} className="bg-red-500 text-white p-2 text-xs rounded-full shadow-lg hover:bg-red-600 flex items-center justify-center">
                           <DeleteIcon fontSize="small" />
                        </button>
                      </div>
                   </div>
                ))}
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default Admin;