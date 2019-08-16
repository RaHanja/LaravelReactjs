import  React , { Component} from 'react';
// import { ReactDOM } from 'react-dom';
import { browserHistory } from 'react-router';



export default class ShowLocale extends Component{


    render(){
        return(
            <h1>Show locale { this.props.match.params.locale}</h1>
        )
    }

}


// if ( document.getElementById('root')){
//     ReactDOM.render( <ShowLocale />, document.getElementById('root')) ;
// }