import React from 'react';

class ImageCard extends React.Component{


    constructor(props){
        super(props);
        this.state = {spans : 1};
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.imageRef.current.clientHeight); // will be always 0 because it's not loaded it in dom

        this.imageRef.current.addEventListener('load', this.setSpan)

    }

    setSpan = () => {
        var height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);

        this.setState({spans})

    }

    render(){
        return(
            <div style={{gridRowEnd : `span ${this.state.spans}`}}>
                <img
                 ref={this.imageRef}
                 alt={this.props.image.description}
                 src={this.props.image.urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;
