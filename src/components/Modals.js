import React from 'react'
import './modal.css'
const Modals = ({mode, diff, gems, ups, statsScav}) => {


return ( 
<div>
    {/* Help Modal */}
    <div className="modal fade" id="helpmodal" tabIndex="-1" role="dialog" aria-labelledby="Help" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">About This App</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body"> 
                    This app was created as a submission for <a href="http://www.zerotomastery.io/"> Zero To Mastery's </a> coding <a href="https://github.com/zero-to-mastery/Coding_Challenge-3"> challenge</a>.
                    <br/><br/> The concept of the challenge was to create a website/app, using a starter theme provided by Creative Tim and intergrate IBM's Watson Speech recognition API.
                    <br/><br/>
                </div>
                <div className="modal-footer">
                    <div className="left-side">
                        <button type="button" className="btn btn-default btn-link" data-dismiss="modal">Never mind</button>
                    </div>
                    <div className="divider"></div>
                    <div className="right-side">
                        <button data-dismiss="modal"  type="button" className="btn btn-danger btn-link">Get Creating!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>



    {/* Instruction */}
    <div className="modal fade" id="instructions" tabIndex="-1" role="dialog" aria-labelledby="Instructions" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">Getting Started</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <span>Drill</span>
                    <p>Drill to harvest gems - Upgrade to harvest more!</p>
                    <span>Junkyard</span>
                    <p>Visit the junkyard to scavenge parts</p>
                    <span>Build</span>
                    <p>Recondition the parts to build Tim's limbs</p>
                    <span>Assemble</span>
                    <p>Assembly the limbs to create Tim</p>
                </div>
            </div>
        </div>
    </div>

    {/* Voice Controls */}
    <div className="modal fade" id="voiceControl" tabIndex="-1" role="dialog" aria-labelledby="Voice Controls" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">Voice Commands</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>You may use the following commands to control the game:</p>
                    <div className="ilist">
                        <i className="nc-icon nc-atom"></i> Dashboard <br/>
                        <i className="nc-icon nc-atom"></i> Drill <br/>
                        <i className="nc-icon nc-atom"></i> Junkyard <br/>
                        <i className="nc-icon nc-atom"></i> Inventory <br/>
                        <i className="nc-icon nc-atom"></i> Build <br/>
                        <i className="nc-icon nc-atom"></i> Assembly <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Options Controls */}
    <div className="modal fade" id="options" tabIndex="-1" role="dialog" aria-labelledby="Options" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">Options</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body text-center">
                <span className="optspan">Current Difficulty:</span> <p className="optp">{diff}</p><br/>
                <button onClick={mode} className="btn btn-outline-danger" type="button">Change Mode</button> 
                </div>
            </div>
        </div>
    </div>

    {/* Stats Modal */}
    <div className="modal fade" id="stats" tabIndex="-1" role="dialog" aria-labelledby="Stats" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center">Stats</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body text-center">
                    <table className="table table-striped table-dark"> 
                      
                        <tbody>
                            <tr>
                                <td>Total Gems</td>
                                <td>{gems}</td>
                            </tr>
                            <tr>
                                <td >Total Upgrades</td>
                                <td>{ups}</td>
                            </tr>
                            <tr>
                                <td>Total Scavenges</td>
                                <td>{statsScav}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>  

    </div>

  )
}

export default Modals;