import { useState } from 'react';
import './Country.css';

export default function Country(props) {

    const { country, addVisitedCountries, addVisitedFlags } = props;

    const { name, flags, population, area } = country;

    const [visited, setVisited] = useState(false);



    const handleClick = () => {
        setVisited(!visited);
    }

    const handleMarkVisited = (country) => {
        addVisitedCountries(country);
    }

    return (
        <div className='country'>
            <img className='' src={flags.png} alt="" />
            <p style={
                {
                    color: visited ? '#23ad3a' : '#2321b8',
                    fontStyle: visited ? 'normal' : 'strong',
                }
            }>Country Name: {name.common}</p>
            <p>Country Code : {country.cca3}</p>
            <p>Country Population : {population}</p>
            <p>Country Area : {area}</p>
            <button
                className={visited ? 'visited' : 'going'}
                onClick={handleClick}>
                {visited ? 'Visited' : 'Going'}
            </button>
            
            <button
                onClick={() => addVisitedFlags(country.flags.png)}>
                Add Flag
            </button>

            <button
                onClick={() => handleMarkVisited(country)}>
                Mark As Visited
            </button>
        </div>
    )
}