import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Purchase = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'Credit Card',
    amount: location.state.totalAmount || 0, // Default to 0 if totalAmount is not defined
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <>
      <div>
        <h2>Thank you for purchase!</h2>
        <p>Your order has been successfully processed. We appreciate your choice.</p>
        <h3>Provide Your Information</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input type="text" id="amount" name="amount" value={formData.amount} onChange={handleChange} required readOnly />
          </div>
          <button type="submit">Submit</button>
          <button onClick={()=> navigate('/')}>Back</button>
        </form>
      </div>
    </>
  );
};

export default Purchase;
