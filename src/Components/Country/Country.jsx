import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country, handleVisitedCountry, handleVisitedFlags }) => {
    const {flags, name, population, area, cca3} = country.country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParams = handleVisitedCountry(country.country);
    // console.log(handleVisitedCountry)
    // console.log(country)
    return (
        <div className={`country ${!visited && 'going-country'}`}>
            <img src={flags.png} alt="" />
            <h4 style={{color: visited ? 'aqua' : 'white'}}>Name: {name?.common}</h4>
            <p>Area: <small>{area}</small></p>
            <p>Population: <small>{population}</small></p>
            <small>Code: {cca3}</small> <br/>
            <button onClick={() => handleVisitedCountry(country.country)} className='visited-btn'>Mark Visited</button> <br />
            <button onClick={() => handleVisitedFlags(country.country.flags.png)} className='visited-btn'>Add Flag</button> <br />
            <button onClick={handleVisited} className={`${visited ? 'visited-btn': 'going-btn'}`}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited' : 'Loading...'}
            <hr />
            <CountryDetail
                country = {country}
                handleVisitedCountry = {handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;