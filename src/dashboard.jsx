import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dash.css';

const Dash = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/items');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Delete a product
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/items/${id}`);
            setProducts(products.filter((product) => product._id !== id));
            alert('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product');
        }
    };

    // View a product
    const handleView = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <div className="App">
            <h1>Product List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Filter</th>
                        <th>Page</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.filter}</td>
                            <td>{product.page}</td>
                            <td>{product.category}</td>
                            <td>
                                <button onClick={() => handleView(product)}>View</button>
                                <button onClick={() => handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for viewing product details */}
            {isModalOpen && selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Product Details</h2>
                        <p><strong>Name:</strong> {selectedProduct.name}</p>
                        <p><strong>Category:</strong> {selectedProduct.category}</p>
                        <p><strong>Filter:</strong> {selectedProduct.filter}</p>
                        <p><strong>Page:</strong> {selectedProduct.page}</p>
                        <p><strong>Specifications:</strong> {selectedProduct.specifications}</p>
                        <p><strong>Description:</strong> {selectedProduct.description}</p>
                        <p><strong>PDF:</strong> <a href={selectedProduct.pdfUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
                        <p><strong>Image:</strong></p>
                        <img src={selectedProduct.imageUrl} alt={selectedProduct.name} style={{ width: '100px', height: '100px' }} />
                        <p><strong>Hover Image:</strong></p>
                        <img src={selectedProduct.hoverImageUrl} alt={`${selectedProduct.name} Hover`} style={{ width: '100px', height: '100px' }} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dash;
