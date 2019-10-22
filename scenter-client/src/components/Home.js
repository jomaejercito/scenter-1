import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Home = () => {

  return (
    <div className="home">
      <h1>Scenter</h1>
      <h3>A Luxury Fragrance Database</h3>
      <Link to="/brands">
        <Button className="ui red button">
          See Brands
        </Button>
      </Link>
    </div>
  );
}

export default Home;