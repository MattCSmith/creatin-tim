import React from 'react'
import './Panels.css'

const Panelscavenge = ({itemss, Scav}) => {
  
  const test = JSON.stringify(itemss).replace(/:null/g, ', ').replace(/"/g, '').replace('{', '').replace('}', '').replace(/, ,/g, ', ')
  
  

return ( 
   <div className="scrap text-center panelbase">
        <h1>Scavenge</h1>
        <h2>Raw Materials</h2>
        <br/>
        <p> Visiting the junkyard costs 30 Gems </p>
        <button onClick={Scav} type="button" className="btn btn-outline-danger invmenu" data-toggle="tooltip" data-placement="top" title="Costs 30 gems">Scavenge</button>
        <br/>

        {test !== '' ? <div className="scrapfound"> <h4> You have found ... </h4> <p>{test}</p></div>
          : ''

      }

      
 
  </div>

)
}

export default Panelscavenge;