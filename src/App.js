import React,{Component} from 'react';
import SearchBox from '../src/components/SearchBox';
import Card from '../src/components/Card';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      username: 'Pokharel-sujan',
      realName: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      url: '',
      notFound: ''
    }
  }
  render() {
    return (
      <div>
        <SearchBox fetchUser={this.fetchUser.bind(this)}/>
        <Card data={this.state} />
      </div>
    )
  }
  
  // the api request function
  fetchApi(url) { 
    
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        
        // update state with API data
        this.setState({
          username: data.login,
          realName: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          url: data.html_url,
          notFound: data.message
        })
      })
      .catch((err) => console.log('oh no!') )
  }
  
  fetchUser(username) {
    let url = `https://api.github.com/users/${username}`
    this.fetchApi(url)
  }
  
  componentDidMount() {
    let url = `https://api.github.com/users/${this.state.username}`
    this.fetchApi(url)
  }
}

export default App;
