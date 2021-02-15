import React, { Component } from 'react';
import DataGrid, { Column, Editing, Paging, Lookup } from 'devextreme-react/data-grid';
import { Card , CardGroup ,Button  } from 'react-bootstrap';

const users = [];

const renderTitleHeader = (data) => {
  return <div class='grid-headers'>{data.column.caption}</div>;
}
class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users : [],
      selectedRow : [],
      errors : false
  
    }; 
  
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.onContentReady = this.onContentReady.bind(this);
  }

  componentDidMount() {
    //  GET request using fetch
    fetch('https://dashboard-api.bounceinsights.com/misc/sampleUsers')
        .then(response =>  { 
        
            if(response.status == 200)
            return response.json(); 
            else 
            {
              console.log(response.status);
              throw new Error(response.status);
            }
         })
        .then(data => {
              if(data!=null)
              this.setState({ users : data.users  })
        })
         .catch((error) => {
              this.setState({ errors : error + ' Error Occured ' })
        })
}

  render() {
    return (
      <div className="HomeContainer" >
        <div class="row" style={{ padding: '2%'  }}>
            <div class="col-7">
            <Card style={{borderRadius:'15px',height:'80vh' }}>
            <Card.Body style={{marginLeft:'10px',marginRight:'11px',marginTop:'9px'}}>
                <Card.Title class="card_title" style={{textAlign : 'left',paddingBottom:'5px'}}><span style={{ borderBottom: '2px solid #ebf0f4'}}>Users</span></Card.Title>
                <Card.Text>
                <DataGrid
                  dataSource={this.state.users}
                  selection={{ mode: 'single' }}
                  showBorders={true}
                  hoverStateEnabled={true}
                  keyExpr="userId"
                  onSelectionChanged={this.onSelectionChanged}
                  onContentReady={this.onContentReady}
                 >
                
                <Editing
                  mode="row"
                  allowUpdating={true}
                  allowDeleting={true}
                  allowAdding={true} />
                  <Column dataField="name" headerCellRender={renderTitleHeader} />
                  <Column dataField="gender" headerCellRender={renderTitleHeader}/>
                  <Column dataField="registeredAt" dataType="date" headerCellRender={renderTitleHeader}/>
                  <Column dataField="surveys"  headerCellRender={renderTitleHeader}/>
                  <Column dataField="email" headerCellRender={renderTitleHeader}/>
                </DataGrid>
                </Card.Text>
                <div class="row" style={{paddingTop:'7%'}}>
                          <div class="col-12" style={{textAlign : 'left'}}>
                              <span class="card_title" style={{fontSize:'18px',height:'30px'}}><span style={{borderBottom: '2px solid #dfdd07',paddingBottom:'5px'}}>{this.state.errors}</span>
                              </span>
                                </div>
              </div>
               
            </Card.Body>
            </Card>
            </div>
            <div class="col-5">
            <Card style={{borderRadius:'15px',height:'80vh' }}>
            <Card.Body style={{marginLeft:'10px',marginRight:'11px',marginTop:'9px'}}>
                <div class="row" >
                    <div class="col-12"  style={{textAlign : 'left'}}>
                          <span className="card_title"><span style={{borderBottom: '2px solid #ebf0f4',fontSize:'23px',paddingBottom:'5px'}}>Details</span></span>
                    </div>
              </div>
              <div class="row" style={{paddingTop:'7%'}}>
                          <div class="col-12" style={{textAlign : 'left'}}>
                              <span class="card_title" style={{fontSize:'18px',height:'30px'}}>User Info</span>
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
                              <div style={{textAlign:'right',color :'#0060b2',fontWeight:'bold',fontStretch:'normal',letterSpacing: '1.33px',fontSize: '14px'}}>{this.state.Register }</div>

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

  onContentReady(e) {
    var grid = e.component;
    var selection = grid.getSelectedRowKeys();
    if (selection.length == 0) {
        grid.selectRowsByIndexes([0]);
    }
  }

  onSelectionChanged({ selectedRowsData }) {
    const data = selectedRowsData[0];

    this.setState({
      name: data && data.name,
      Gender : data && data.gender,
      Register : data &&  new Date().toLocaleString(),
      email : data && data.email,
      surveys : data && data.surveys,
      id : data && data.userId
    });
  }
}

export default HomeContainer;

