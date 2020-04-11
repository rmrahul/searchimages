import React from 'react';
import './ImageList.css';
import Image from './Image'

const ImageList = (props) => {

    var imageTags = props.imagelist.map((image) => {
        return <Image key={image.id} image={image}></Image>
    });

    return (
        <div className="image-list">

            {imageTags}
        </div>
    )
}

ImageList.defaultProps = {
    imagelist : []
}

export default ImageList;
