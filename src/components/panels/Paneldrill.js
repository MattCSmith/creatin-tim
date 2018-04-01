import React from 'react'
const Paneldrill = ({gems, money, moneymult, upgrade, level, upgradeCost}) => {


return ( 
    <div className="text-center panelbase drill" id="collapsedrill">
    <h1>Drill</h1>
    <h2>Gem Excavation</h2>
  
    <button className="btn btn-outline-danger w-25 invmenu" type="button" data-toggle="collapse" data-target="#drill" aria-expanded="false" aria-controls="drill" data-parent="#collapsedrill">
      Drill
    </button> 

    <button className="btn btn-outline-danger w-25 invmenu" type="button" data-toggle="collapse" data-target="#upgrade" aria-expanded="false" aria-controls="upgrade" data-parent="#collapsedrill">
      Upgrades
    </button> 

    <div>
      {/* Drill Panel */}
      <div className="collapse show" id="drill">
        <div className="row">
          <div className="col-md-12">

            <div className="d-inline-block align-middle">
                <button className="btn btn-outline-secondary drill-btn" type="button" onClick={money}>
                  <i className="nc-icon nc-diamond"></i> <p>Drill</p>
                </button> 
            </div>

            <div className="d-inline-block drilldata align-bottom">
                <span className="d-inline-block">Current Gems</span> <p>{gems}</p>
            </div>
            <div className="d-inline-block drilldata align-bottom">
                <span className="d-inline-block">Gems P/Click</span> <p>{moneymult * 1}</p>
            </div>

          </div>
        </div>
      </div>

      {/* Upgrade Panel */}
      <div className="collapse" id="upgrade">
        <div className="row">
          <div className="col-md-12">

            <div className="d-inline-block align-middle">
                <button className="btn btn-outline-warning drill-btn" type="button" onClick={upgrade}>
                  <i className="nc-icon nc-settings"></i> <p>Upgrade</p>
                </button> 
            </div>

            <div className="d-inline-block drilldata align-bottom">
                <span className="d-inline-block">Current Level</span> <p>{level}</p>
            </div>
            <div className="d-inline-block drilldata align-bottom">
                <span className="d-inline-block">Upgrade Cost</span> <p>{upgradeCost}</p>
            </div>

          </div>
        </div>
      </div>

    </div>
      
   
</div>
      


)
}

export default Paneldrill;