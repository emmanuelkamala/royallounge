import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef 

    if (direction === 'left'){
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  const galleryImages = [ images.gallery01, images.gallery02, images.gallery03, images.gallery04 ];

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <p className="headtext__cormorant">Photo Gallery</p>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>
          For more view of our delicious meals and the ambiance at The Royal Lounge, visit our Instagram page.
        </p>
        <button type="button" className="custom__button">View Our Page</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {
            galleryImages.map((image, index) => (
              <div className="app__gallery-images_card flex__center key={`gallery_image-${index+1}`}">
                <img src={image} alt="gallery image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))
          }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
