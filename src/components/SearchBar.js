import React from 'react';

class SeachBar extends React.Component{
    state = {text : ''}

    onInputChange = (e) => {
        this.setState({
            text : e.target.value
        })        
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        //console.log
        this.props.onSubmit(this.state.text);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Image</label>
                        <input value={this.state.text} type="text" onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SeachBar;
