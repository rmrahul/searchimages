import React from 'react';
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'

class App extends React.Component{
    state = { images : []}

     onSearchSubmit = async (searchedText) => {
        const response  = await unsplash.get('https://api.unsplash.com/search/photos',{
            params : {
                query : searchedText,
            },
            headers : {
                Authorization :"Client-ID aYojKNVnYf9onnbD4ZNb4GE_rQ0Pq_w60JZuTWZZ9n0"
            }
        })
        console.log(response.data.results);

        this.setState({images : response.data.results});
    }

    render(){
        return (
            <div className="ui container" style={{marginTop : "30px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                Found images  : {this.state.images.length}
                <ImageList imagelist={this.state.images}></ImageList>
            </div>
        )
    }
}

export default App;
