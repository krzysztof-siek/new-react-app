import React, { Component } from 'react';
import '../scss/main.scss';
import Serials from './Serials';
import MoviesList from '../components/List/MoviesList';
import Top from './Top';
import Login from './Login';
import {Switch, Route, withRouter } from "react-router-dom"
import MovieDetails from '../components/details/MovieDetails';

const list = [
  {id:1,
      name: "Czterej Pancerni i pies",
      opcja: "link do czterej pancerni i pies",
      opcja1: "opis tego filmu o czterech pancernych",
      description: "dodatkowy opis filmy o czterech pancernych"
  },
  {id:2,
      name: "Blow",
      opcja: "link do blow",
      opcja1: "Opis blow",
      description: "Opis filmu blow"
  },
  {id:3,
      name: "Gwiezdne wojny",
      opcja: "link do gwiezdne wojny",
      opcja1: "Opis gwiezdne wojny",
      description: "Opis filmu gwiezdne wojny"
  }]

  class Main extends Component {
    state = { 
      items: [],
     }

    fetchData = () => {
      console.log('fetch działa')
      fetch('https://jsonplaceholder.typicode.com/users')
      // fetch('https://api.themoviedb.org/3/trending/all/day?api_key=77731e0cef7708f81c46f924efbac553')

  .then(response => response.json())
  .then(json => this.setState({ items: json}))
    }

    componentDidMount() {
      this.fetchData()
    }

    render() { 
      return ( 
        <div className="main">
        <Switch>
          <Route path="/Filmy">
            <MoviesList list={this.state.items}/>
          </Route>
          <Route path="/Seriale">
            <Serials />
          </Route>
          <Route path="/Top">
            <Top />
          </Route>
          <Route path="/Zaloguj">
            <Login />
          </Route>
          <Route path="/Film/:id">
            <MovieDetails list={this.state.items}/>
          </Route>
        </Switch>
        </div>
       );
    }
  }
   
  export default Main;


