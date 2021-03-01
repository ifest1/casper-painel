import axios from 'axios';
import React, { Component } from 'react';
import baseUrl from '../api';
import {
      newsContainer, 
      buttonContainer,
      dataContainer,
      titleContainer,
      itemStyle,
      dataStyle,
    } from './styles';
import Button from './button';
import Label from './label';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      loading: true,
      headers: {
        'x-access-token': localStorage.getItem('jwt')
      }
    }

    //this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  /*
  async handleUpdate(e) {
    const headers = this.state.headers;
    const id = e.target.id;
    await axios.patch(`${baseUrl}/news/${id}`, toUpdate, {headers: headers})
    .then(
      (result) => {
        this.setState({
          loading: false,
          news: result.data
        });
      },
    )
  }

  */

  async handleDelete(e) {
    const id = e.target.id;
    const headers = this.state.headers;

    await axios.delete(`${baseUrl}/news/${id}`, {headers: headers})
    .then(
      (result) => {
        this.setState({
          news: this.state.news.filter((e, i) => {
            console.log(e, i);
            return e != id;
          })
        })
      }
    ).catch((error) => {
      console.log(error); 
    })
  }
  
  async componentDidMount() {
    const headers = this.state.headers;
    

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
    
      return (
        <div style={newsContainer}>
          {loading ? (<h1>loading</h1>
          ) : (
            <div>
              <ul style={{listStyleType: 'none'}}>
                {news.map((item) =>
                <li key={item._id}>
                    <div style={itemStyle}>
                      <div style={titleContainer}>
                        <h2 contentEditable={true}>{item.title}</h2>
                      </div>
                      <div style={dataContainer}>
                        <div style={dataStyle}>
                          <Label>category</Label>
                          <span contentEditable={true}>{item.category}</span>
                        </div>
                        <div style={dataStyle}>
                          <Label>description</Label>
                          <span contentEditable={true}>{item.category}</span>
                        </div>
                        <div style={dataStyle}>
                          <Label>img_url</Label>
                          <span contentEditable={true}>{item.img_url}</span>
                        </div>
                        <div style={dataStyle}>
                          <Label>news_url</Label>
                          <span contentEditable={true}>{item.news_url}</span>
                        </div>
                      </div>
                      <div style={buttonContainer}>
                        <Button id={item._id} handler={() => {}} name="update"/>
                        <Button id={item._id} handler={this.handleDelete} name="delete"/>
                      </div>
                    </div>
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