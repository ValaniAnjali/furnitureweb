import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Shopping.css';

const Shopping = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/shopping')
      .then(res => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);



  return (
    <div className='flex'>
      {data.length > 0 ? (
        data.map((productItem, productIndex) => (
          <div key={productIndex} className='card'>
            <div className='title'>{productItem?.title}</div>
            <img src={`http://localhost:5000/${productItem?.imageUrl}`} alt={productItem?.title} />
            <div className='desc'>{productItem?.description}</div>
            <div className='price'>Price: {productItem?.price}</div>
            <div className='count'>Count: {productItem?.count}</div>
            
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

export default Shopping;
