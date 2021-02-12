import React, { Component } from 'react';
import DataGrid from 'devextreme-react/data-grid';
import { customers } from '../data.js';
import { Card , CardGroup ,Button  } from 'react-bootstrap';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

class HomeContainer extends Component {
  render() {
    return (
      <div className="HomeContainer" >
        <div class="row" style={{ padding: '2%'  }}>
            <div class="col-8">
            <Card style={{borderRadius:'15px',height:'80vh' }}>
            <Card.Body>
                <Card.Title className="card_title">All Users</Card.Title>
                <Card.Text>
                <DataGrid
                    dataSource={customers}
                    defaultColumns={columns}
                    showBorders={true}
                />
                </Card.Text>
               
            </Card.Body>
            </Card>
            </div>
            <div class="col-4">
            <Card style={{borderRadius:'15px',height:'80vh' }}>
            <Card.Body>
                <Card.Title className="card_title">Details</Card.Title>
                <Card.Text>
                
                </Card.Text>
              
            </Card.Body>
            </Card>
            </div>
        </div>
       
      
      </div>
    );
  }
}

export default HomeContainer;

