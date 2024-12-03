import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Product.css'; 
import 'swiper/css';

import balenci1 from '../assets/balenci1.jpg'; 
import swampgod1 from '../assets/swampgod1.jpg';
import prada1 from '../assets/prada1.jpg';

const Products = () => {
  const [products] = useState([
    { id: 1, image: balenci1, title: 'Automobili Lamborghini Long Sleeve Oversized T-shirt ', price: '750 €', brand: 'BALENCIAGA' },
    { id: 2, image: swampgod1, title: 'DESTROYED FISOLO', price: '1,100 €', brand: 'SWAMPGOD' },
    { id: 3, image: prada1, title: 'Medium-length Re-Nylon down jacket', price: '3,950 $', brand: 'PRADA' },
    { id: 4, image: balenci1, title: 'Automobili Lamborghini Long Sleeve Oversized T-shirt', price: '750 €', brand: 'BALENCIAGA' },
    { id: 5, image: swampgod1, title: 'DESTROYED FISOLO', price: '1,100 €', brand: 'SWAMPGOD' },
    { id: 6, image: prada1, title: 'Medium-length Re-Nylon down jacket', price: '3,950 $', brand: 'PRADA' },
    { id: 7, image: balenci1, title: 'Automobili Lamborghini Long Sleeve Oversized T-shirt', price: '750 €', brand: 'BALENCIAGA' },
    { id: 8, image: swampgod1, title: 'DESTROYED FISOLO', price: '1,100 €', brand: 'SWAMPGOD' },
    { id: 9, image: prada1, title: 'Medium-length Re-Nylon down jacket', price: '3,950 $', brand: 'PRADA' },
  ]);

  return (
    <section className="product-slider">
      <h2 className="product-slider__title">The most swag</h2>
      <Swiper
        spaceBetween={30} 
        slidesPerView={3.5} 
        navigation 
        loop
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="product-slider__item">
            <div className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-card__image"
              />
              <h3 className="product-card__title">{product.title}</h3>
              <p className="product-card__price">{product.price}</p>
              <p className="product-card__brand">{product.brand}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;
