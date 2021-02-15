import React, { Component } from 'react';
import DataGrid, { Column, Editing, Paging, Lookup } from 'devextreme-react/data-grid';
import { Card , CardGroup ,Button  } from 'react-bootstrap';


const users = [];
class HomeContainer extends Component {


  constructor(props) {
    super(props);
    this.state = {
      users : [],
      selectedRow : []
  
    }; 
  
     

    this.onSelectionChanged = this.onSelectionChanged.bind(this);
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch('https://dashboard-api.bounceinsights.com/misc/sampleUsers')
        .then(response => response.json())
        .then(data => {
       
          this.setState({ users : data.users  })
        }
         );
}



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
                  dataSource={this.state.users}
                  selection={{ mode: 'single' }}
                  showBorders={true}
                  hoverStateEnabled={true}
                  keyExpr="userId"
                  onSelectionChanged={this.onSelectionChanged}
                  onEditingStart={this.onEditingStart}
                  onInitNewRow={this.onInitNewRow}
                  onRowInserting={this.onRowInserting}
                  onRowInserted={this.onRowInserted}
                  onRowUpdating={this.onRowUpdating}
                  onRowUpdated={this.onRowUpdated}
                  onRowRemoving={this.onRowRemoving}
                  onRowRemoved={this.onRowRemoved}
                  onSaving={this.onSaving}
                  onSaved={this.onSaved}
                  onEditCanceling={this.onEditCanceling}
                  onEditCanceled={this.onEditCanceled}>
                >
                <Editing
                  mode="row"
                  allowUpdating={true}
                  allowDeleting={true}
                  allowAdding={true} />
                  <Column dataField="name" />
                  <Column dataField="gender" />
                  <Column dataField="registeredAt" dataType="date" />
                  <Column dataField="surveys"  />
                  <Column dataField="email" />
                </DataGrid>
                </Card.Text>
               
            </Card.Body>
            </Card>
            </div>
            <div class="col-4">
            <Card style={{borderRadius:'15px',height:'80vh' }}>
            <Card.Body style={{marginLeft:'10px',marginRight:'11px',marginTop:'9px'}}>
                <div class="row" >
                    <div class="col-12"  style={{textAlign : 'left'}}>
                          <span className="card_title"><span style={{borderBottom: '2px solid #ebf0f4',fontSize:'23px',paddingBottom:'5px'}}>Details</span></span>
                    </div>
              </div>
              <div class="row" style={{paddingTop:'7%'}}>
                          <div class="col-12" style={{textAlign : 'left'}}>
                              <span class="card_title" style={{fontSize:'18px',height:'30px'}}><span style={{borderBottom: '2px solid #dfdd07',paddingBottom:'5px'}}>User</span> Info</span>
                                </div>
              </div>

              <div class="row card_text_header" style={{paddingTop: '8%',textAlign : 'left' }}>

                  <div class="col-md-12" >
                      <div class="row" style={{borderBottom:'1px solid #ebf0f4',height:'25px',marginRight:'-1px',marginLeft:'0%'}}>
                          <div class="col-sm-6">
                              <a class="dashboard_link" href="#" style={{marginLeft:'-13px'}}>
                                  User Id
                              </a>
                          </div>
                          <div class="col-6">
                              <div style={{textAlign:'right',color :'#0060b2',fontWeight:'bold',fontStretch:'normal',letterSpacing: '1.33px',fontSize: '14px'}}>{this.state.id}</div>

                          </div>
                      </div>
                  </div>
                  <div class="col-md-12" style={{paddingTop: '5%'}}>
                      <div class="row" style={{borderBottom:'1px solid #ebf0f4',height:'25px',marginRight:'-1px',marginLeft:'0%'}}>
                          <div class="col-sm-6">
                              <a class="dashboard_link" href="#" style={{marginLeft:'-13px'}}>
                                  Name
                              </a>
                          </div>
                          <div class="col-6">
                              <div style={{textAlign:'right',color :'#0060b2',fontWeight:'bold',fontStretch:'normal',letterSpacing: '1.33px',fontSize: '14px'}}>{this.state.name}</div>

                          </div>
                      </div>
                  </div>

            
            
            
                  <div class="col-md-12" style={{paddingTop: '5%'}}>
                      <div class="row" style={{borderBottom:'1px solid #ebf0f4',height:'25px',marginRight:'-1px',marginLeft:'0%'}}>
                          <div class="col-sm-6">
                              <a class="dashboard_link" href="#" style={{marginLeft:'-13px'}}>
                                  Gender
                              </a>
                          </div>
                          <div class="col-md-6">
                              <div style={{textAlign:'right',color :'#0060b2',fontWeight:'bold',fontStretch:'normal',letterSpacing: '1.33px',fontSize: '14px'}}>{this.state.Gender}</div>

                          </div>
                      </div>
                  </div>
                  <div class="col-md-12" style={{paddingTop: '5%'}}>
                      <div class="row" style={{borderBottom:'1px solid #ebf0f4',height:'25px',marginRight:'-1px',marginLeft:'0%'}}>
                          <div class="col-sm-6">
                              <a class="dashboard_link" href="#" style={{marginLeft:'-13px'}}>
                                  Registered At
                              </a>
                          </div>
                          <div class="col-6">
                              <div style={{textAlign:'right',color :'#0060b2',fontWeight:'bold',fontStretch:'normal',letterSpacing: '1.33px',fontSize: '14px'}}>{this.state.Register}</div>

                          </div>
                      </div>
                  </div>
              
                <div class="xxl-6 col-md-12" style={{paddingTop: '5%'}}>
                    <div class="row" style={{borderBottom:'1px solid #ebf0f4',height:'25px',marginRight:'-1px',marginLeft:'0%'}}>
                        <div class="col-sm-2">
                            <a class="dashboard_link" href="#" style={{marginLeft:'-13px'}}>
                                Surveys
                            </a>
                        </div>
                        <div class="col-10">
                            <div style={{textAlign:'right',color :'#0060b2',fontWeight:'bold',fontStretch:'normal',letterSpacing: '1.33px',fontSize: '13px'}}>{this.state.surveys}</div>

                        </div>
                    </div>
                </div>
                <div class="col-md-12" style={{paddingTop: '5%'}}>
                    <div class="row" style={{borderBottom:'1px solid #ebf0f4',height:'25px',marginRight:'-1px',marginLeft:'0%'}}>
                        <div class="col-sm-6">
                            <a class="dashboard_link" href="#" style={{marginLeft:'-13px'}}>
                                Email
                            </a>
                        </div>
                        <div class="col-6">
                            <div style={{textAlign:'right',color :'#0060b2',fontWeight:'bold',fontStretch:'normal',letterSpacing: '1.33px',fontSize: '14px'}}>{this.state.email}</div>

                        </div>
                    </div>
                </div>


                </div>



           
               
            

               
              
            </Card.Body>
            </Card>
            </div>
        </div>
       
      
      </div>
    );
  }

  onSelectionChanged({ selectedRowsData }) {
    const data = selectedRowsData[0];
    console.log(data);

    this.setState({
      name: data && data.name,
      Gender : data && data.gender,
      Register : data && data.registeredAt,
      email : data && data.email,
      surveys : data && data.surveys,
      id : data && data.userId
    
    });
  }
}

export default HomeContainer;

