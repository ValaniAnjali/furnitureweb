import React from 'react';
import furnitureStore from '../components/image/FurnitureStore.jpg'; // Change the image path accordingly

const AboutUs = () => {
  return (
    <div className="container">
      <div className='my-3'>
      <h2 className="text-center mb-4">About Av's Furniture Shop</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={furnitureStore}
            alt="Furniture Shop"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <p>
            Welcome to Av's Furniture Shop, your ultimate destination for premium furniture. Since our establishment in [Year], we have been committed to providing top-quality furniture solutions to enhance your living spaces.
          </p>
          <p>
            Our goal is to offer a diverse range of furniture options, from classic to contemporary, ensuring that every piece reflects style and comfort. Av's Furniture Shop is your go-to place for furnishing your home with elegance and functionality.
          </p>
          <p>
            At Av's Furniture Shop, we are driven by a passion for craftsmanship and design. Our team is dedicated to curating a collection that not only meets but exceeds your expectations. We prioritize quality materials and sustainable practices to ensure your furniture stands the test of time.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
