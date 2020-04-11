import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component{
    onSearchSubmit = (searchedText) => {

    }

    render(){
        return (
            <div className="ui container" style={{marginTop : "30px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
            </div>
        )
    }
}

export default App;
