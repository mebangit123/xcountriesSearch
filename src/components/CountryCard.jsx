import React from 'react'
import'./CountryCard.css'

function CountryCard({country}) {
  return (
   <div className='countryCard'>
        <img src={country.png} alt={country.common} height='100' width='100' />
        <h1>{country.common}</h1>
    </div>
  )
}

export default CountryCard
