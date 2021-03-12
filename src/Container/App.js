import React, { Component }   from 'react';
import CardComponent from '../Component/CardComponent.js';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchfield:'',
      robots: []
    }
  }
 
componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          return response.json();
        })
        .then(users => {
          this.setState({ robots: users })
        });
}

 SearchChange = (event) => {
    const searchfield = event.target.value
    this.setState( { searchfield : searchfield })
  }

 render(){
  const { robots, searchfield } = this.state;
     const filteredRobots = robots.filter((robot) =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
})
    
    return !robots.length ?
       ( <h1 className="tc"> Loading..... </h1>) :
     ( 
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1> 
        <SearchBox searchChange={ this.SearchChange }/>
        <Scroll>
          <CardComponent robots={ filteredRobots } />
        </Scroll>
      </div>
      );
    }
  }

export default App;
