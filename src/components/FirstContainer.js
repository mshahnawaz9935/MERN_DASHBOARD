import React, { Component } from 'react';
import { Card , CardGroup ,Button  } from 'react-bootstrap';


var cardStyle = {
    backgroundColor : '#ebf0f4',
     height: '800px'
}


class FirstContainer extends Component{

    showAlert() {
        alert("I'm an alert");
      }

  render() {
      return(
    <div className="FirstContainer">

        <div class="container-fluid">

        <div class="row" >
        <div class="col-xl-4 " >
            <div class="card row1" >
                <div class="settings">
                    <a href="#">
                        <img src="settings2.svg" alt="settings" />
                    </a>
                </div>
                <div class="card-body">
                    <span class="card_title" onClick={this.showAlert}>
                        Herd Overview
                    </span>
                    <hr />
                    <div id="new" class="overviewpie" ></div>
                </div>
            </div>

        </div>
        <div class="col-xl-8" >
            <div class="card row1" >
                <div class="settings">
                    <a href="#">
                        <img src="settings2.svg" alt="settings" />
                    </a>
                </div>
                <div class="card-body">
                    <span class="card_title">
                        Milking Stats
                    </span>
                    <hr />
                    <div id="new" class="overviewpie" ></div>
                </div>
            </div>

        </div>
          
    </div>
    </div>
    </div>
      )
 }
}

export default FirstContainer;