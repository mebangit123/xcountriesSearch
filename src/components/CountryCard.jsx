import React from 'react'
import style from './CountryCard.module.css'

function CountryCard({country}) {
  return (
   <div className={style.countryCard}>
        <img src={country.png} alt={country.common} height='100' width='100' />
        <h1>{country.common}</h1>
    </div>
  )
}

export default CountryCard
