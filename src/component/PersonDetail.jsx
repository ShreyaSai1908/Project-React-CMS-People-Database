import React from 'react';

class PersonDetail extends React.Component
{    
    render() 
    {
        const {personDetails} = this.props
        return(
                <div>
                    <table class="table table-dark table-striped table-hover table-sm">
                        <thead>
                            <tr>
                               <th colSpan="2">Person Details</th>
                            </tr>
                        </thead>
                        <tr>
                            <th>First Name</th>
                            <th>{personDetails.firstName}</th>
                        </tr>
                        <tr>
                            <th>Last Name</th>
                            <th>{personDetails.lastName}</th>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <th>{personDetails.address}</th>
                        </tr>
                        <tr>
                            <th>Phone Number</th>
                            <th>{personDetails.phoneNumber}</th>
                        </tr>                    
                    </table>                      
                </div>
        )

    }
}

export default PersonDetail;