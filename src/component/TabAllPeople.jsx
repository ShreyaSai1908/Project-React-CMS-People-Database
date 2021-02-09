import React from 'react';

class TabAllPeople extends React.Component
{    
    render() 
    {
        const {headerData} = this.props
        const {bodyData}=this.props
        const {sortOrder}=this.props
        const {selected}=this.props

        let tabRow;

        if (sortOrder)
        {
                    tabRow = bodyData
                    .sort((a, b) => a.firstName > b.firstName ? 1 : -1)
                    .map((row, index) => {  
                    return (
                    <tr key={index}> 
                        <td>{row.firstName}</td>
                        <td>{row.lastName}</td>    
                        <td>
                                <a class="btn btn-primary" href={"#person-detail-tab"} data-toggle="collapse" onClick={() => {
                                                                                                                                this.props.selected(row)
                                                                                                                              }
                                                                                                                      }>Details</a>              
                         </td> 
                          {/*       
                            <td>
                                <div class="card-body" id={"detail-tab-"+row.personID}  class="collapse" ><PersonDetail personDetails={row}/></div> 
                           </td>   */}     
                    </tr>
                    )
                    })
        }
        else
        {
                    tabRow = bodyData
                    .sort((a, b) => a.firstName < b.firstName ? 1 : -1)
                    .map((row, index) => {  
                        return (
                        <tr key={index}> 
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>    
                            <td>
                                <a class="btn btn-primary" href={"#person-detail-tab"} data-toggle="collapse" onClick={() => {
                                                                                                                                this.props.selected(row)
                                                                                                                              }
                                                                                                                      }>Details</a>              
                            </td> 
                            {/*       
                            <td>
                                <div class="card-body" id={"detail-tab-"+row.personID}  class="collapse" ><PersonDetail personDetails={row}/></div> 
                            </td>   */}    
                        </tr>
                        )
                    })  
        }        

        return(
            <div>
                <table class="table table-dark table-striped table-hover" >
                        <thead>  
                            <tr>
                                {
                                    headerData.map
                                    (
                                    (row,index) =>
                                        <th key = {index}>
                                            {row}
                                        </th>
                                    )
                                }
                            </tr>
                       </thead>   
                       <tbody>{tabRow}</tbody>               
                </table>                
            </div>
             
        )
    }
}

export default TabAllPeople;