import React,{ Component } from "react";

class Card extends Component {
    render() {
      let data = this.props.data
      
      if (data.notFound === 'Not Found') {
        // when username is not found...
        return <h3 className="card__notfound">User not found. Try again!</h3>
      } else {
        // if username found, then...
        return (
          <div className="card">
            <a href={data.url} target="_blank">
              <img className="card__avatar" src={data.avatar} />             
            </a>
            <h2 className="card__username">
              <a className="card__link" href={data.url} target="_blank">{data.username}</a></h2>
            <dl>
              <dt>Real name</dt>
              <dd>{data.realName}</dd>
  
              <dt>Location</dt>
              <dd>{data.location}</dd>
  
              <dt>Number of public repos</dt>
              <dd>{data.repos}</dd>
  
              <dt>Number of followers</dt>
              <dd>{data.followers}</dd>
            </dl>
          </div>
        )
      }
    }
  }

export default Card;