import React from 'react'
import './Panels.css'

const Panelinventory = ({myInv}) => {

     
return ( 
   <div className="text-center panelbase inv" id="collapse">
      <h1>Inventory</h1>
      <h2>Check your stock</h2>

      <button className="btn btn-outline-danger invmenu" type="button" data-toggle="collapse" data-target="#headInv" aria-expanded="false" aria-controls="headInv" data-parent="#collapse">
        Head Items
      </button> 

      <button className="btn btn-outline-danger invmenu" type="button" data-toggle="collapse" data-target="#torsoInv" aria-expanded="false" aria-controls="torsoInv" data-parent="#collapse">
        Torso Items
      </button> 

      <button className="btn btn-outline-danger invmenu" type="button" data-toggle="collapse" data-target="#legsInv" aria-expanded="false" aria-controls="legsInv" data-parent="#collapse">
        Legs Items
      </button> 

      <button className="btn btn-outline-danger invmenu" type="button" data-toggle="collapse" data-target="#feetInv" aria-expanded="false" aria-controls="feetInv" data-parent="#collapse">
        Feet Items
      </button>

      <div className="tablepanel">
        {/* Head Panel */}
        <div className="collapse" id="headInv">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Silicon</td>
                <td>{myInv.Silicon}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td >Processor</td>
                <td>{myInv.Processor}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Screw</td>
                <td>{myInv.Screw}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>HDD</td>
                <td>{myInv.HDD}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Torso Panel */}
        <div className="collapse" id="torsoInv">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Servo</td>
                <td>{myInv.Servo}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Hydraulic Pump</td>
                <td>{myInv.Pump}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Hydraulic Fluid</td>
                <td>{myInv.Fluid}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Steel Tubes</td>
                <td>{myInv.Tubes}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Legs Panel */}
        <div className="collapse" id="legsInv">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Titanium Rods</td>
                <td>{myInv.Servo}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>12v Batteries</td>
                <td>{myInv.Pump}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Wire <small> (Meters)</small></td>
                <td>{myInv.Fluid}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Lubricant</td>
                <td>{myInv.Tubes}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Feet Panel */}
        <div className="collapse" id="feetInv">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tracks</td>
                <td>{myInv.Servo}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Sensors</td>
                <td>{myInv.Pump}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Gyro Accelerometer</td>
                <td>{myInv.Fluid}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>RFID Chips</td>
                <td>{myInv.Tubes}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
        
      <p className="invinfo">Choose a part to find out if you have enough to build the part</p>
  </div>

)
}

export default Panelinventory;