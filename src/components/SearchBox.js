import React, {Component} from 'react';

class SearchBox extends Component {
    render() {
      return (
        <form 
          className="searchbox" 
          onSubmit={this.handleClick.bind(this)}>
          <input
            ref="search"
            className="searchbox__input" 
            type="text" 
            placeholder="type username..."/>
          
          <input
            type="submit"
            className="searchbox__button"
            value="Search GitHub User" />
        </form>
      )
    };
    handleClick(e) {
        e.preventDefault();
        
        let username = this.refs.search.value
        // sending the username value to parent component to fetch new data from API
        this.props.fetchUser(username)
        this.refs.search.value = ''
      }
    }
    export default SearchBox;
    