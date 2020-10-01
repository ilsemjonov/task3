import React, { Component } from "react";
import ReactDOM from "react-dom";

import Category from "./category";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  componentDidMount() {

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://lumav.net/dummy/categories.json'

    const getResource = async (url) => {
      const res = await fetch(url);
      const body = await res.json();
      return body;
    }

    getResource(proxyUrl + targetUrl)
      .then((body) => {
        const { categories } = body;
        this.setState({
          items: categories
        });
      })


  }
  render() {

    var { items } = this.state;

    return items.map((item, i) => {
      return (
        <Category key={i} data={item}/>
      )
    })

  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);