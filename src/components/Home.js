import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import './Home.css';
import {  Button } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaTwitter, FaLinkedin  } from 'react-icons/fa'; 
import { useDispatch, useSelector } from 'react-redux';
import {fetchCountries} from "../slices/countrySlice"

const Home = () => {
  const [visibleCountries, setVisibleCountries] = useState(12);
  const [selectedContinent, setSelectedContinent] = useState('All');
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCountries((prev) => prev + 6);
  };

  const filterByContinent = (continent) => {
    setSelectedContinent(continent);
  };

  const filteredCountries = countries.filter((country) =>
    selectedContinent === 'All' ? true : country.region === selectedContinent
  );

  return (
    <div className="home-container">
      <header>
        <h3>Countries</h3>
        <nav>
          <span onClick={() => filterByContinent('All')}>All</span>
          <span onClick={() => filterByContinent('Asia')}>Asia</span>
          <span onClick={() => filterByContinent('Europe')}>Europe</span>
        </nav>
      </header>
      <div className='headerDiv'>
      <h1>WELCOME</h1>
      </div>

      <Slider />

      <div className="country-list">
        {filteredCountries.slice(0, visibleCountries).map((country, index) => (
          <div className="country-card" key={index}>
            <img src={country.flag} alt={`${country.name} flag`} />
            <div>
              <p>{country.name}</p>
              <p>{country.region}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCountries < filteredCountries.length && (
        <div className='loadMore'>
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
        </div>
      )}
       <div className="text-center mt-4">
            
              <div className="d-flex justify-content-center">
                <Button variant="outline-dark" className="mx-2">
                  <FaFacebookF />
                </Button>
                <Button variant="outline-dark" className="mx-2">
                  <FaGoogle />
                </Button>
                <Button variant="outline-dark" className="mx-2">
                  <FaTwitter />
                </Button>
                <Button variant="outline-dark" className="mx-2">
                <FaLinkedin/>
                </Button>
              </div>
              <p></p>
              <p>Example@gmail.com</p>
              <p>Copyright 2020 Name . All rights are reserved.</p>
            </div>
    </div>
  );
};

export default Home;
