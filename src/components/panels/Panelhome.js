import React from 'react'
const Panelhome = ({listen, mode, whatmode, stats}) => {



return ( 
  <div className="text-center panelbase dash" id="collapseh">
    <h1>Dashboard</h1>
    <h2>Creating Tim</h2>

    <div className="col-md-12">
      <button type="button" className="btn btn-outline-danger w-25 m-2" data-toggle="modal" data-target="#instructions">Instructions</button><br/>
      <button type="button" className="btn btn-outline-danger w-25 m-2" data-toggle="modal" data-target="#voiceControl">Voice Controls</button><br />
      <button type="button" className="btn btn-outline-danger w-25 m-2" data-toggle="modal" data-target="#options">Options</button><br />
      <button type="button" className="btn btn-outline-danger w-25 m-2" data-toggle="modal" data-target="#stats">Statistics</button>
    </div>
  </div>
)
}

export default Panelhome;