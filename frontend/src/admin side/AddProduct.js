import React, { useState } from 'react';
import axios from 'axios';
import Adminheader from './Adminheader';

const AddProduct = () => {
    const [productId, setProductId] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [count, setCount] = useState('');
    const [image, setImage] = useState(null);

    const clearFields = () => {
        setProductId('');
        setTitle('');
        setDesc('');
        setPrice('');
        setCount('');
        setImage(null);
        document.getElementById('productImage').value = '';
    };

    const handleFetch = async () => {
        if (!productId) return alert("Enter product ID first!");
        try {
            const res = await axios.get(`https://furniturewebbackend-2.onrender.com/api/shopping/${productId}`);
            const product = res.data;

            setTitle(product.title || '');
            setDesc(product.description || '');
            setPrice(product.price || '');
            setCount(product.count || '');
        } catch (err) {
            console.error("Fetch error:", err);
            alert("Product not found or error occurred.");
        }
    };

    const handleAdd = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', desc);
        formData.append('price', price);
        formData.append('count', count);
        formData.append('image', image);

        axios.post('https://furniturewebbackend-2.onrender.com/api/shopping', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res.data);
            alert("✅ Product added successfully!");
            clearFields();
        }).catch(err => {
            console.error("Add error:", err);
            alert("❌ Error adding product.");
        });
    };

    const handleUpdate = () => {
        if (!productId) return;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', desc);
        formData.append('price', price);
        formData.append('count', count);
        if (image) {
            formData.append('image', image);
        }

        axios.put(`https://furniturewebbackend-2.onrender.com/api/shopping/${productId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            alert("✅ Product updated successfully!");
        }).catch(err => {
            console.error("Update error:", err);
            alert("❌ Error updating product.");
        });
    };

    const handleDelete = () => {
        if (!productId) return;

        if (!window.confirm("Are you sure you want to delete this product?")) return;

        axios.delete(`https://furniturewebbackend-2.onrender.com/api/shopping/${productId}`)
            .then(res => {
                alert("🗑️ Product deleted successfully!");
                clearFields();
            }).catch(err => {
                console.error("Delete error:", err);
                alert("❌ Error deleting product.");
            });
    };

    return (
        <>
        <Adminheader/>
        <div className='admin-card'>
            <h3>Add / Fetch / Update / Delete Product</h3>

            <div>
                <label htmlFor="productId">Product ID:</label><br />
                <input
                    type="text"
                    id="productId"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    placeholder="Enter Product ID"
                />
                <button type="button" onClick={handleFetch}>Fetch Product</button>
                <button
                    type="button"
                    onClick={handleDelete}
                    disabled={!productId}
                    style={{ marginLeft: '10px', backgroundColor: '#e74c3c', color: 'white' }}
                >
                    Delete Product
                </button>
            </div>

            <form id="addProductForm">
                <div>
                    <label>Product Name:</label><br />
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
                </div>
                <div>
                    <label>Product Description:</label><br />
                    <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea><br />
                </div>
                <div>
                    <label>Price:</label><br />
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required /><br />
                </div>
                <div>
                    <label>Count:</label><br />
                    <input type="number" value={count} onChange={(e) => setCount(e.target.value)} required /><br />
                </div>
                <div>
                    <label>Product Image:</label><br />
                    <input
                        type='file'
                        id="productImage"
                        onChange={(e) => setImage(e.target.files[0])}
                    /><br />
                </div>
                <button type="button" onClick={handleAdd}>Add Product</button>
                <button
                    type="button"
                    onClick={handleUpdate}
                    disabled={!productId}
                    style={{ marginLeft: '10px' }}
                >
                    Update Product
                </button>
                <button type="button" onClick={clearFields} style={{ marginLeft: '10px' }}>Clear</button>
            </form>
        </div>
        </>
    );
};

export default AddProduct;
