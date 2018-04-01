import React from 'react'
import './Panels.css'

const Panelbuild = ({diff, myInv, buildHead, buildTorso, buildLegs, buildFeet, builtHead, builtTorso, builtLegs, builtFeet}) => {

let headqty = {...diff === 'easy' ? [1, 2, 3, 4] : [5, 6, 7, 8]}
let torsoqty = {...diff === 'easy' ? [1, 2, 3, 4] : [5, 6, 7, 8]}
let legsqty = {...diff === 'easy' ? [1, 2, 3, 4] : [5, 6, 7, 8]}
let feetqty = {...diff === 'easy' ? [1, 2, 3, 4] : [5, 6, 7, 8]}

return ( 
   <div className="text-center panelbase build" >
        <h1>Build Parts</h1>
        <h2>Construct components Tim needs</h2>
        
        <div className="row container" id="collapseb">
          <div className="col-md-4 bmenucon">
            <button type="button" className="btn btn-outline-danger bmenu" data-toggle="collapse" data-target="#headBuild" aria-expanded="false" aria-controls="headBuild" data-parent="#collapseb">Head</button>
            <button type="button" className="btn btn-outline-danger bmenu" data-toggle="collapse" data-target="#torsoBuild" aria-expanded="false" aria-controls="torsoBuild" data-parent="#collapseb">Torso</button>
            <button type="button" className="btn btn-outline-danger bmenu"data-toggle="collapse" data-target="#legsBuild" aria-expanded="false" aria-controls="legsBuild" data-parent="#collapseb">Legs</button>
            <button type="button" className="btn btn-outline-danger bmenu" data-toggle="collapse" data-target="#feetBuild" aria-expanded="false" aria-controls="feetBuild" data-parent="#collapseb">Feet</button>
          </div>

          <div className="col-md-8">
            
            {/* Build Head */}
            <div className="collapse show" id="headBuild">
            { builtHead === 0 ?
              <div>
              <h4> For the head </h4>
              <p> You will need... </p>

              <ul className="list-group">

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Silicon
                  { myInv.Silicon >= headqty[0] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ headqty[0] - myInv.Silicon }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Processor
                  { myInv.Processor >= headqty[1] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ headqty[1] - myInv.Processor }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Screws
                  { myInv.Screw >= headqty[2] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ headqty[2] - myInv.Screw }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Hard Drives
                  { myInv.HDD >= headqty[3] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ headqty[3] - myInv.HDD }</span>}
                </li>
                
              </ul>
              { myInv.Silicon >= headqty[0] && myInv.Processor >= headqty[1] && myInv.Screw >= headqty[2] && myInv.HDD >= headqty[3] ? <button onClick={buildHead} type="button" className="btn btn-outline-warning btn-round">Build Head</button> : <button type="button" className="btn btn-outline-default btn-round" disabled>Items Needed!</button> }
              </div>
              : <p className="alreadyBuilt">You have already constructed the head </p> }
            </div>
            
            {/* Build Torso */}
            <div className="collapse" id="torsoBuild">
            { builtTorso === 0 ?
              <div>
              <h4> For the torso </h4>
              <p> You will need... </p>

              <ul className="list-group">

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Servo
                  { myInv.Servo >= torsoqty[0] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ torsoqty[0] - myInv.Servo }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Hydraulic Pump
                  { myInv.Pump >= torsoqty[1] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ torsoqty[1] - myInv.Pump }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Hydraulic Fluid
                  { myInv.Fluid >= torsoqty[2] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ torsoqty[2] - myInv.Fluid }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Steel Tubes
                  { myInv.Tubes >= torsoqty[3] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ torsoqty[3] - myInv.Tubes }</span>}
                </li>
                
              </ul>
              { myInv.Servo >= torsoqty[0] && myInv.Pump >= torsoqty[1] && myInv.Fluid >= torsoqty[2] && myInv.Tubes >= torsoqty[3] ? <button onClick={buildTorso} type="button" className="btn btn-outline-warning btn-round">Build Torso</button> : <button type="button" className="btn btn-outline-default btn-round" disabled>Items Needed!</button> }
              </div>
              : <p className="alreadyBuilt">You have already constructed the torso</p> }
            </div>
            
            {/* Build Legs */}
            <div className="collapse" id="legsBuild">
            { builtLegs === 0 ?
              <div>
              <h4> For the legs </h4>
              <p> You will need... </p>

              <ul className="list-group">

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Titanium Rods
                  { myInv.Rods >= legsqty[0] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ legsqty[0] - myInv.Rods }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  12v Batteries
                  { myInv.Batteries >= legsqty[1] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ legsqty[1] - myInv.Batteries }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Wire <small>(meters)</small>
                  { myInv.Wire >= legsqty[2] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ legsqty[2] - myInv.Wire }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Lubricant
                  { myInv.Lube >= legsqty[3] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ legsqty[3] - myInv.Lube }</span>}
                </li>
                
              </ul>
              { myInv.Rods >= legsqty[0] && myInv.Batteries >= legsqty[1] && myInv.Wire >= legsqty[2] && myInv.Lube >= legsqty[3] ? <button onClick={buildLegs} type="button" className="btn btn-outline-warning btn-round">Build Legs</button> : <button type="button" className="btn btn-outline-default btn-round" disabled>Items Needed!</button> }
              </div>
            : <p className="alreadyBuilt">You have already constructed the legs!</p> }
            </div>

            {/* Build Feet */}
            <div className="collapse" id="feetBuild">
            { builtFeet === 0 ?
              <div>
              <h4> For the Feet </h4>
              <p> You will need... </p>

              <ul className="list-group">

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Tracks
                  { myInv.Tracks >= feetqty[0] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ feetqty[0] - myInv.Tracks }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Sensors
                  { myInv.Sensors >= feetqty[1] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ feetqty[1] - myInv.Sensors }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Gyro Accelerometer
                  { myInv.Gyro >= feetqty[2] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ feetqty[2] - myInv.Gyro }</span>}
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  RFID Chips
                  { myInv.RFID >= feetqty[3] ? <i className="fa fa-check check"></i> : <span className="badge badge-primary badge-pill">{ feetqty[3] - myInv.RFID }</span>}
                </li>
                
              </ul>
              { myInv.Tracks >= feetqty[0] && myInv.Sensors >= feetqty[1] && myInv.Gyro >= feetqty[2] && myInv.RFID >= feetqty[3] ? <button onClick={buildFeet} type="button" className="btn btn-outline-warning btn-round">Build Feet</button> : <button type="button" className="btn btn-outline-default btn-round" disabled>Items Needed!</button> }
              </div>
            : <p className="alreadyBuilt">You have already constructed the Feet!</p> }
            </div>
          </div>
        </div>
  </div>

)
}

export default Panelbuild;