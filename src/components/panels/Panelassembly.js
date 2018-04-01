import React from 'react'
import './Panels.css'

const Panelassembly = ({builtHead, builtTorso, builtLegs, builtFeet, buildTim}) => {

    
return ( 
  <div className="text-center panelbase assembly">
      <h1>Assembly</h1>
      <h2>Time to assemble Tim!</h2>
      <hr/>

      <div className="row">
      <div className="col-md-12">

        <div className="d-inline-block">
            <button className={builtHead === 0 ?  'btn btn-outline-danger drill-btn' : 'btn btn-outline-success drill-btn'} type="button">
              <i className={builtHead === 0 ?  'nc-icon nc-simple-remove' : 'nc-icon nc-check-2'}></i> <p>Head</p>
            </button> 
        </div>

        <div className="d-inline-block">
            <button className={builtTorso === 0 ?  'btn btn-outline-danger drill-btn' : 'btn btn-outline-success drill-btn'} type="button">
              <i className={builtTorso === 0 ?  'nc-icon nc-simple-remove' : 'nc-icon nc-check-2'}></i> <p>Torso</p>
            </button> 
        </div>

        <div className="d-inline-block">
            <button className={builtLegs === 0 ?  'btn btn-outline-danger drill-btn' : 'btn btn-outline-success drill-btn'} type="button">
              <i className={builtLegs === 0 ?  'nc-icon nc-simple-remove' : 'nc-icon nc-check-2'}></i> <p>Legs</p>
            </button> 
        </div>

        <div className="d-inline-block">
            <button className={builtFeet === 0 ?  'btn btn-outline-danger drill-btn' : 'btn btn-outline-success drill-btn'} type="button">
              <i className={builtFeet === 0 ?  'nc-icon nc-simple-remove' : 'nc-icon nc-check-2'}></i> <p>Feet</p>
            </button> 
        </div>


      </div></div>

      <br />

      { builtHead === 1 && builtTorso === 1 && builtLegs === 1 && builtFeet === 1 ? <button onClick={buildTim} type="button" className="btn btn-outline-warning btn-round">Build Tim!</button> : <button type="button" className="btn btn-outline-default btn-round" disabled>Items Needed</button> }
  </div>
)
}
 
export default Panelassembly;