const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    // console.log(country.country.name.common)
    return (
        <div>
            <p>Country Data: <small>{country.country.name.common}</small></p>
        </div>
    );
};

export default CountryData;