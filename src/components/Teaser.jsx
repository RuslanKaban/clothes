import React from 'react';
import './Teaser.css'; 
import Collections from '../assets/teaserCollections.jpg';
import Swag from '../assets/teaserSwag.jpg';
import Prices from '../assets/teaserPrices.jpg';

const Teaser = () => {
  return (
    <section className="teaser">
      <div className="teaser__content">
        <div className='teaser__collections'style={{ backgroundImage: `url(${Collections})` }}>
            <h2 className='teaser__collections--text'>new collections</h2>
        </div>
        <div className='teaser__swag'style={{ backgroundImage: `url(${Swag})` }}>
            <h2 className='teaser__collections--text'>big swag</h2>
        </div>
        <div className='teaser__prices'style={{ backgroundImage: `url(${Prices})` }}>
            <h2 className='teaser__collections--text'>reasonable prices</h2>
        </div>

      </div>
    </section>
  );
};

export default Teaser;
