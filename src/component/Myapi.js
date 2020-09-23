import React, { Component } from 'react';

class MyApi extends Component {
    state = { data: [] };

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/data')
            .then(response => response.json())
            .then(json => this.setState({ data: json }))
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div >
                {
                    this.state.data && this.state.data.map(allData => {
                        const { id, nama, alamat, umur } = allData;

                        return<div className="data">
                         <table className="table">
                            
                                <tr>
                                    <th scope="row" key={id}>{id}</th>
                                    <td>{nama}</td>
                                    <td>{alamat}</td>
                                    <td>{umur}</td>
                                </tr>
                            
                        </table>
                        </div>
                    })
                }
                
            </div>
        )
    }


}


export default MyApi;