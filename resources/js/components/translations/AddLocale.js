import { browserHistory } from 'react-router';
import React , { Component } from 'react';
// import  ReactDOM from 'react-dom';
import axios from 'axios' ;
import { Link } from 'react-router-dom';


export default class AddLocale extends Component {

    constructor(){
        super() ;
        this.state = {
            locales : []
        }
    }

    UNSAFE_componentWillMount(){
        axios.get('/trans').then( response =>{
            this.setState({
                locales : response.data.locales
            })
        }).catch( errors =>{
            console.log(errors)
        })
    }

    onRedirectToShow(locale){
        this.props.history.push('/langage/show/'+ locale) ;
    }

    handleClickEdit( locale){
        console.log(locale)
    }

    
  
    render(){
        const datas = this.state.locales ;
        return (
            <div id="addlocale">               
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Initials</th>
                            <th>Actions</th>
                        </tr>                       
                    </thead>
                    <tbody>
                        {datas != undefined ? datas.map( (locale, index) =>
                            <tr key = {index}>
                                <td > {index} </td>
                                <td > {locale } </td>
                                <td >
                                    <Link
                                        className   = "btn btn-success col-sm-offset-1"
                                        to          = {"/langage/show/"+ locale}
                                    >Show</Link>
                                    <button 
                                        type        = "button"
                                        className   = "btn btn-primary col-sm-offset-1" 
                                        onClick     = { ()=>this.handleClickEdit(locale) }
                                    >Edit</button>
                                    <button className="btn btn-danger col-sm-offset-1">Delete</button>
                                </td>
                            </tr>                           
                        ) : <tr><td colSpan="3"> No records </td></tr>}
                    </tbody>
                </table>    
            </div>
        )
    }
}

// if ( document.getElementById('root') ){
//     ReactDOM.render( <AddLocale />, document.getElementById('root')) ;
// }