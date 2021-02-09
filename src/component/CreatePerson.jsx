import React from 'react';

class CreatePerson extends React.Component
{
    initialState = {
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
      }
    
      state = this.initialState


      handleChange = (event) => {
        const {name, value} = event.target
      
        this.setState({
          [name]: value,
        })
      }

      submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }

    render() 
    {
        const { firstName, lastName,address,phoneNumber } = this.state;
        return(
                <form className="form-vertical">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" className="form-control" id="form-firstName" placeholder="Jack" value={firstName} onChange={this.handleChange}/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" className="form-control" id="form-lastName" placeholder="Pearson" value={lastName} onChange={this.handleChange}/>
                    </div>
                        

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" className="form-control" id="form-Address" placeholder="Torngatan 18B" value={address} onChange={this.handleChange}/>
                        </div>
                        

                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" name="phoneNumber" className="form-control" id="form-phoneNumber" placeholder="073917421" value={phoneNumber} onChange={this.handleChange}/>   
                        </div>     
                        <div className="form-group">
                            <input type="button" value="Submit" className="form-control btn-primary" href="#create-person-form" data-toggle="collapse" onClick={this.submitForm} />  
                        </div>
                                                      
                 </form>
        )

    }
}

export default CreatePerson;