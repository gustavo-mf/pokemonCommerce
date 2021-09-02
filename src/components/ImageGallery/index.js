import styled from 'styled-components';
import ReactImageGallery from 'react-image-gallery';

import './index.css';

const GalleryWrapper = styled.div`
  
  @media screen and (max-width: 1200px) {
    
  }
`;

function ImageGallery(props) {
  const images = props.images || [];

  console.log(images);
  const imagesArray = Object.keys(images).filter((value) => {
    return value !== 'other' && value !== 'versions' && images[value];
  }).map((key) => {
    return {
      original: images[key],
      thumbnail: images[key]
    }
  });

  console.log(imagesArray);

  return (
    <GalleryWrapper>
      <ReactImageGallery 
        items={imagesArray} 
        thumbnailPosition={'left'}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
      />
    </GalleryWrapper>
  );
}

export default ImageGallery;