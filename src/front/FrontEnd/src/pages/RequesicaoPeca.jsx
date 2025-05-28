import React from 'react'
import BarraLateral from "../components/BarraLateral.jsx";
import FiltroDropDown from "../components/FiltroDropDown.jsx";

function RequesicaoPeca() {
  return (
    <>
     <div className='header-container'>
       <h1>Requisiçoes de peças</h1>

       <FiltroDropDown />
     </div>
    </>
  )
}

export default RequesicaoPeca