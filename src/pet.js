import React, { Component } from 'react';
import './pet.css';

class Pet extends Component {
    render() {
        const liStyle = {fontSize: '1.5em'};
        return (
                <div className="card">
                  <h2 className="name">Moxie</h2>
                  <img  src="https://github.com/tigarcia/Moxie/raw/master/moxie.png"
                        alt="Stupid cat"
                  />
                  <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies</h5>
                  <ul>
                    <li style={liStyle}>Eat</li>
                    <li style={liStyle}>Sleep</li>
                    <li style={liStyle}>Rave</li>
                  </ul>
                </div>
                );
            }
        };
        

export { Pet }; 