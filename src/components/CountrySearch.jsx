import { useEffect, useState } from 'react'
import style from './CountrySearch.module.css'
import CountryCard from './CountryCard'
import axios from "axios";

export default function Countries() {
    const API_ENDPOINT = 'https://countries-search-data-prod-812920491762.asia-south1.run.app/countries';
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCountries, setFilterCountries] = useState([]);
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    useEffect(() => {
        getAllCountries();
    },[]);

    //Effect for searching countries
    useEffect(() => {
        if(searchTerm !== '') {
        const time = setTimeout(() =>{
            performSearch(searchTerm);
        },500);
        setDebounceTimeout(time);
        } else {
            setFilterCountries(countries);
        }
    },[searchTerm]);

    // Get All countries
    const getAllCountries = async () => {
        try {
         const response = await axios.get(API_ENDPOINT);
         setCountries(response.data); 
         setFilterCountries(response.data);  
        } catch (error) {
            console.error('Error fetching data:',error);
        }        
    }

    //Perform search
    const performSearch = async (text) => {
        const c = countries.filter(country => country.common.toLowerCase().includes(text.toLowerCase()));
        setFilterCountries(c);
    };
    
    //Debounce search
    const debounceSearch = (event, debounceTimeout) => {
        if(debounceTimeout) {
        clearTimeout(debounceTimeout);
        }
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <div className={style.searchbar}>
                <input type="text" onChange={(e) => debounceSearch(e, debounceTimeout)} placeholder='Search for countries'/>
            </div>            
            <div className={style.wrapper}>
                {
                        filterCountries.map((country, idx) => (
                            <div className={style.CountryCard}>
                                <CountryCard country={country} key={idx}/>
                            </div>                            
                        ))
                } 
            </div>
        </div>        
    )     
}