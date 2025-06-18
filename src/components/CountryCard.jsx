import React from 'react'
import'./CountryCard.css'

function CountryCard({country}) {
  return (
   <div className='countryCard'>
        <img src={country.png} alt={country.common} height='100' width='100' />
        <h2>{country.common}</h2>
    </div>
  )
}

export default CountryCard
