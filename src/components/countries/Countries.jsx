import { addToLocalStorage, getDataFromLocalStorage, removeDataFromLocalStorage } from "../../utilities/localstorage";
import Country from "../country/Country";
import Cart from "../cart/Cart";
import './Countries.css';
import { useEffect, useState } from "react";

export default function Countries(props) {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setvisitedCountries] = useState([]);

    const [visitedFlags, setvisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            });
    }, []);

    useEffect(() => {
        const lsCountries = getDataFromLocalStorage();
        const savedDatas = [];
        if (lsCountries.length) {
            for (const id of lsCountries) {
                const localStorageData = countries.find((country) => country.cca3 === id);
                if (localStorageData) {
                    savedDatas.push(localStorageData);
                }
            }
        }
        setvisitedCountries(savedDatas);
    }, [countries]);

    const addVisitedCountries = (country) => {
        if (!visitedCountries.includes(country)) {
            const newVisitedCountries = [...visitedCountries, country];
            setvisitedCountries(newVisitedCountries);
            addToLocalStorage(country.cca3);
        }
    }

    const removeVisitedCountry = (id) => {
        const remainingData = visitedCountries.filter(data => data.cca3 !== id);
        removeDataFromLocalStorage(id);
        setvisitedCountries(remainingData);
    }

    const addVisitedFlags = (flag) => {
        console.log(flag);
        if (!visitedFlags.includes(flag)) {
            const newFlags = [...visitedFlags, flag];
            setvisitedFlags(newFlags);
        }
    }



    return (
        <div>
            <div className="wrapper">
                <h2>All Countries : {countries.length}</h2>
                <Cart cart={visitedCountries} removeVisitedCountry={removeVisitedCountry}></Cart>
            </div>
            <div className="img-wrapper">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag} alt="" />)
                }
            </div>
            <div className="countries-container">
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            country={country}
                            addVisitedCountries={addVisitedCountries}
                            addVisitedFlags={addVisitedFlags}
                        ></Country>
                    )
                }
            </div>
        </div>
    )
}