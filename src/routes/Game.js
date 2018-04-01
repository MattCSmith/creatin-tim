import React, { Component } from 'react';
import Modals from '../components/Modals'
import swal from 'sweetalert';
import './Game.css'
import tim from '../assets/tim.png'

import Panelhome from '../components/panels/Panelhome'
import Panelscavenge from '../components/panels/Panelscavenge'
import Panelinventory from '../components/panels/Panelinventory'
import Panelbuild from '../components/panels/Panelbuild'
import Panelassembly from '../components/panels/Panelassembly'
import Paneldrill from '../components/panels/Paneldrill'

import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone'

const myArray = ["Silicon", "Processor", "Screw", "HDD", "Servo", "Pump", "Fluid", "Tubes", "Rods", "Batteries", "Wire", "Lube", "Tracks", "Sensors", "Gyro", "RFID"];
const myInv = {'Silicon':0, 'Processor':0, 'Screw':0, 'HDD':0, 'Servo':0, 'Pump': 0, "Fluid": 0, "Tubes": 0, "Rods": 0, "Batteries": 0, "Wire": 0, "Lube": 0, "Tracks": 0, "Sensors": 0, "Gyro": 0, "RFID": 0};
let foundItem123 = {};
let text = [];


class Game extends Component {
  constructor() {
    super()
    this.state = {
      money: 0,
      moneymult: 1,
      level: 1,
      upgradeCost: 30,
      route: 'home',
      builtHead: 0,
      builtTorso: 0,
      builtLegs: 0,
      builtFeet: 0,
      text: '',
      diff: 'easy',
      statsGems: 0,
      statsUpgrades: 0,
      statsScav: 0
    }
    this.onListenClick = this.onListenClick.bind(this);
  }
   
  onListenClick() {

    fetch('/api/speech-to-text/token')
      .then(function(response) {
          return response.text();
      }).then((token) => {
        console.log('token is', token)
        var stream = recognizeMic({
            token: token,
            objectMode: false, // send objects instead of text
            extractResults: false, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
            format: false // optional - performs basic formatting on the results such as capitals an periods
        });
        stream.setEncoding('utf8');
        stream.on('data', (data) => {
          text = data
          
            if( text.indexOf('dashboard') >= 0){
                this.setState({route: 'home'});
              } if( text.indexOf('drill') >= 0) {
                this.setState({route: 'drill'});
              } if( text.indexOf('junkyard') >= 0) {
                this.setState({route: 'scavenge'});
              } if( text.indexOf('inventory') >= 0) {
                this.setState({route: 'inventory'});
              } if( text.indexOf('build') >= 0) {
                this.setState({route: 'build'});
              } if( text.indexOf('assembly') >= 0) {
                this.setState({route: 'assembly'});
              }  if( text.indexOf('money') >= 0) {
                this.money()
              }  if( text.indexOf('scavenge') >= 0) {
                this.Scav()
              }
                      });

                      stream.on('error', function(err) {
                          console.log(err);
                      });
                      
                    }).catch(function(error) {
                        console.log(error);
                    });
  }
  money = () => {
    this.setState({ money: this.state.money + (this.state.moneymult * 1) });
    this.setState({statsGems: this.state.statsGems + (this.state.moneymult * 1) })
  }
  upgrade = () => {
    if (this.state.money >= this.state.upgradeCost) {
      this.setState({ level: this.state.level + 1 })
      this.setState({money: this.state.money - this.state.upgradeCost})
      this.setState({upgradeCost: this.state.upgradeCost + 10})
      this.setState({moneymult: this.state.moneymult + 1})
      this.setState({statsUpgrades: this.state.statsUpgrades + 1})
    } else {
      this.notEnough()
    }
    
  }
  onRouteChange = (menuroute) => {
    this.setState({route: menuroute}); 
  }
  mode = () => {
    {this.state.diff === 'easy' ? this.setState({diff: 'hard'}) : this.setState({diff: 'easy'}) }
    
  }
  menuSwitch(menuid) {
    switch(this.state.route) {
      case 'home':
        return <Panelhome mode={this.mode} whatmode={this.state.diff}/>;
      case 'drill':
        return <Paneldrill gems={this.state.money} money={this.money} moneymult={this.state.moneymult} upgrade={this.upgrade} upgradeCost={this.state.upgradeCost} level={this.state.level}/>;
      case 'scavenge':
        return <Panelscavenge Scav={this.Scav} itemss={foundItem123}/>;
      case 'inventory':
        return <Panelinventory myInv={myInv}/>;
      case 'build':
        return <Panelbuild diff={this.state.diff} myInv={myInv} buildHead={this.buildHead} buildTorso={this.buildTorso} buildLegs={this.buildLegs} buildFeet={this.buildFeet} builtHead={this.state.builtHead} builtTorso={this.state.builtTorso} builtLegs={this.state.builtLegs} builtFeet={this.state.builtFeet}/>;
      case 'assembly':
        return <Panelassembly builtHead={this.state.builtHead} builtTorso={this.state.builtTorso} builtLegs={this.state.builtLegs} builtFeet={this.state.builtFeet} buildTim={this.buildTim}/>;
      default:
        return 'home';
    }
  }
  notEnough = () => {
    swal({
      title: "Nice Try!",
      text: "You dont have enough!",
      icon: "warning",
      button: "Aww!",
    })
  }

  Scav = () => {
    foundItem123 = {};
    myArray.sort(function() { return 0.5 - Math.random() });
    const randmizr = myArray.slice(0,Math.floor(Math.random() * 10) + 1);
   
   
    if (this.state.money > 29) {
      this.setState({statsScav: this.state.statsScav + 1 })
      this.setState({money: this.state.money - 30})
      this.setState({itemss: randmizr});
      randmizr.forEach(myFunction1)
        function myFunction1(item, index) {
          if (randmizr.includes(item)) {
          myInv[item] = myInv[item] + 1
          
          foundItem123[item] = foundItem123[item] + 1
            }
          }
    } else {
      this.notEnough()
    }
  }
  builtAnnounce = (part) => {
    swal({
      title: "Congrats",
      text: "You made Tim's " + part,
      icon: "success",
      button: "Ok",
    })
  }
  buildHead = () => {
    this.builtAnnounce('Head');
    this.setState({builtHead: 1});
  }
  buildTorso = () => {
    this.builtAnnounce('Torso');
    this.setState({builtTorso: 1});
  }
  buildLegs = () => {
    this.builtAnnounce('Legs');
    this.setState({builtLegs: 1});
  } 
  buildFeet = () => {
    this.builtAnnounce('Feet');
    this.setState({builtFeet: 1});
  }
  buildTim = () => {
    swal({
      title: "Congratulations",
      text: "You Completed Tim",
      icon: "success",
      button: "Ok",
    })
  }
  
  render() {
    return (
      
      <div className="container game">
      <Modals diff={this.state.diff} mode={this.mode} gems={this.state.statsGems} ups={this.state.statsUpgrades} statsScav={this.state.statsScav}/>

      {this.onListenClick()}
        <div className="row">
          <div className="col-md-3">
            <div className="stats-sidebar">
              <div className="sidebar-img text-center">
                <img src={tim} alt="tim" width="150px" height="150px" />
              </div>

              <div className="sidebar-menu">
                <ul className="list-group">
                  <li className="menulist active" data-toggle="tab" onClick={(menuroute) => this.onRouteChange('home')}>
                    <i className="nc-icon nc-atom"></i>
                    Dashboard
                  </li>
                  <li className="menulist" data-toggle="tab" onClick={(menuroute) => this.onRouteChange('drill')}>
                    <i className="nc-icon nc-atom"></i>
                    Drill
                  </li>
                  <li className="menulist" data-toggle="tab" onClick={(menuroute) => this.onRouteChange('scavenge')}>
                    <i className="nc-icon nc-atom"></i>
                    Junkyard
                  </li>
                  <li className="menulist" data-toggle="tab" onClick={(menuroute) => this.onRouteChange('inventory')}>
                    <i className="nc-icon nc-atom"></i>
                    Inventory
                  </li>
                  <li className="menulist" data-toggle="tab" onClick={(menuroute) => this.onRouteChange('build')}>
                    <i className="nc-icon nc-atom"></i>
                    Build
                  </li>
                  <li className="menulist" data-toggle="tab" onClick={(menuroute) => this.onRouteChange('assembly')}>
                    <i className="nc-icon nc-atom"></i>
                    Assembly
                  </li>
                </ul>
              </div>
              {/* <!-- END MENU --> */}
            </div>
          </div>
          <div className="col-md-9">
            <div className="main-content">
                {this.menuSwitch()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
