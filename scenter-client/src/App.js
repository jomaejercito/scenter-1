import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BrandsContainer from './containers/BrandsContainer'
import Home from './components/Home';
import NavBar from './components/NavBar'

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/brands/', {
      method: 'GET'
    })
    .then (response => response.json())
    .then(data => console.log(data))
  }
  
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/brands" component={BrandsContainer} />
        </div>
      </Router>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     brands: state.brands
//   }
// }

export default connect()(App);
