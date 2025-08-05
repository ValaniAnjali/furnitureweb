import React, { useState, useEffect } from 'react';
import './CustomerDetails.css';
import Adminheader from './Adminheader';

const CustomerDetails = () => {
  const [customers, setCustomers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch customer data from backend when the component mounts
    fetch('http://localhost:5000/api/contact')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch customer data');
        }
        return response.json();
      })
      .then(data => setCustomers(data))
      .catch(error => setError(error.message));
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="customer-details">
      <Adminheader />
      {/* Render headings */}
      <div className="customer-row heading-row">
        <div className="customer-cell"><strong>Customer Data (JSON Format)</strong></div>
      </div>
      {/* Render customer details */}
      <div className="customer-row">
        <pre>{JSON.stringify(customers, null, 2)}</pre>
      </div>
    </div>
  );
};

export default CustomerDetails;
