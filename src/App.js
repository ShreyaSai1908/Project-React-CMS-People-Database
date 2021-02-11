import './App.css';
import React from 'react';
import TabAllPeople from './component/TabAllPeople';
import PersonDetail from './component/PersonDetail';
import CreatePerson from './component/CreatePerson';

class App extends React.Component  
{
    state = 
    {
      headerData: ["First Name","Last Name"], 
      peopleAllList: [],
      selectedPerson: [],
      sortOrder: false,
      delRespone: 0
    }

    componentDidMount() 
    {
        const url ='https://localhost:44346/api/React/'
  
        fetch(url)
           .then((result) => result.json())
           .then((result) => 
            {
              this.setState
              ({
                peopleAllList: result,
                selectedPerson: result[0]
              })
            })
           
    }

    showDetail = (person) => {

            this.setState
            ({
                selectedPerson: person,
            }) 
    };

    deletePerson = (person) => {

          const url ='https://localhost:44346/api/React/'+person.personID;
          
          fetch(url,{method: 'delete'})
            .then((result) => result.status)
            .then((result) => 
              {
                this.setState
                ({
                  delResponse: result
                })
              })    
          
          var array = this.state.peopleAllList
          var index = array.indexOf(person)     
          if (index !== -1) {
            array.splice(index, 1);
            this.setState({peopleAllList: array});
          } 
     };

     handleSubmit = (person) => {

      const url ='https://localhost:44346/api/React/' 
      
      fetch(url, { method: 'POST',
        body: JSON.stringify(person), 
        headers:{ 'Content-Type': 'application/json' } })
        .catch(error => console.error('Error:', error))
        .then(response => this.setState({peopleAllList: [...this.state.peopleAllList, person]})); 

    }; 
    
    render()
    { 
       return (
                <div>
                        <header>
                            <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                                <div class="container">
                                    <a class="navbar-brand" href="https://localhost:44346/People/Add_View_People">People Web App</a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                                        <ul class="navbar-nav flex-grow-1">
                                          <li class="nav-item">
                                                <a class="nav-link text-dark" href="https://localhost:44346/Account/Login">Login</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-dark" href="https://localhost:44346/Account/SignUp">Sign Up</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav> 
                        </header>                  
                        
                        <div  className="container">
                            <div class="row align-items-center">
                                <div id="PeoplePanel" className="col-sm-8">
                                    <TabAllPeople headerData={this.state.headerData} bodyData={this.state.peopleAllList} sortOrder={this.state.sortOrder} selected={this.showDetail}/>                                  
                                </div>
                                <div id="personPanel" className="col-sm-4">
                                    <div id="person-detail-tab" className="collapse">
                                      <PersonDetail personDetails={this.state.selectedPerson}/>
                                      <a class="btn btn-danger" href="#person-detail-tab" data-toggle="collapse" onClick={() => this.deletePerson(this.state.selectedPerson)}>Delete</a>
                                    </div>                             
                                </div>   
                            </div>
                            <div class="row">
                                  <div id="utilBtnSortPanel" className="col-sm-4 d-flex justify-content-center">
                                      <button id="btnSort" className="btn btn-info" onClick={() => {
                                                                                                  let presentOrder=this.state.sortOrder
                                                                                                  if(!presentOrder)
                                                                                                  { 
                                                                                                    document.getElementById('btnSort').innerHTML="Arrange (Desc)" 
                                                                                                  }
                                                                                                  else
                                                                                                  { 
                                                                                                    document.getElementById('btnSort').innerHTML="Arrange (Asc)"
                                                                                                  }
                                                                                                  this.setState({ sortOrder: !presentOrder})
                                                                                                }
                                                                                        }>
                                          Arrange (Asc)
                                      </button>    
                                </div>  
                                <div id="utilBtnCreatePanel" className="col-sm-4 d-flex justify-content-center">
                                     <a class="btn btn-info" href="#create-person-form" data-toggle="collapse">Create Person</a>                                    
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                              <div id="create-person-form" className="col-sm-8 collapse">
                                <CreatePerson handleSubmit={this.handleSubmit}/>
                              </div>
                            </div>
                          </div> 
                                                     
                </div>
          );
      }
}

export default App;
