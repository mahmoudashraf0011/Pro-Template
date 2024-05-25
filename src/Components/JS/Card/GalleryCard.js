import React from 'react'
import '../../Styles/Card//GalleryCard.css'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import product1 from '../../../images/other/mobile1.png'
import product2 from '../../../images/other/mobile2.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';
export default function GalleryCard() {
    const images = [
        {
            original: `${product1}`,
            thumbnail: `${product1}`
        },
        {
            original: `${product2}`,
            thumbnail: `${product2}`
        },
        {
            original: `${product1}`,
            thumbnail: `${product1}`
        },
    ];

  return (
        <div div className="product-gallary-card d-flex justfiy-content-center  align-items-center
            pt-2">
                <ImageGallery items={images}
                    defaultImage={product1}
                    showFullscreenButton={false}
                    isRTL={true}
                    showPlayButton={false}
                    showThumbnails={true}
                    renderLeftNav={LeftButton}
                    renderRightNav={RightButton}
                
                />
        </div>
  )
}
