import React, { useEffect } from 'react'
import '../../Styles/Card//GalleryCard.css'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import product1 from '../../../images/other/mobile1.png'
import product2 from '../../../images/other/mobile2.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import ProductDetailsHook from '../../../LogicHooks/Products/ProductDetailsHook';
import { useParams } from 'react-router-dom';
export default function GalleryCard() {
    const {id}=useParams();
    const [item , imgs]  =ProductDetailsHook(id);




  return (
        <div div className="product-gallary-card d-flex justfiy-content-center  align-items-center
            pt-2">
                <ImageGallery items={imgs}
                    defaultImage={product1}
                    showFullscreenButton={false}
                    isRTL={false}
                    showPlayButton={false}
                    showThumbnails={true}
                    renderLeftNav={LeftButton}
                    renderRightNav={RightButton}
                
                />
        </div>
  )
}
