import React from 'react'
import BarraLateral from "../components/BarraLateral.jsx";
import FiltroDropDown from "../components/FiltroDropDown.jsx";
import CardRequisicaoPeca from "../components/CardRequisicaoPeca.jsx";
function RequesicaoPeca() {
  return (
    <>
     <div className='header-container'>
       <h1>Requisiçoes de peças</h1>

       <FiltroDropDown />
     </div>

     <CardRequisicaoPeca />
    </>
  )
}

export default RequesicaoPeca