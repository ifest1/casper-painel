import axios from 'axios';
import React, { Component } from 'react';
import baseUrl from '../api';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      loading: true,
    }
  }

  async componentDidMount() {
    const headers = {
      'x-access-token': localStorage.getItem('jwt')
    }

    await axios.get(`${baseUrl}/news/`, {headers: headers})
    .then(
      (result) => {
        this.setState({
          loading: false,
          news: result.data
        });
      },
    )
  }

  render() {
    const { loading, news } = this.state;
    
    console.log(news);
      return (
        <div>
          {loading ? (<h1>loading</h1>
          ) : (
            <div>
              <ul>
                {news.map((item) =>
                <li>
                  {item.title}
                  {item.description}
                  {item.category}
                  {item.img_url}
                  {item.news_url}
                  </li>
                )}
              </ul>
            </div>
      )}
        </div>
      )
    }
}

export default Dashboard;