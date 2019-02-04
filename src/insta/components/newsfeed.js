import React from 'react';

import {globalVars} from '../utils/common';
import NavigationBar from './navigationBar';


class Newsfeed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newsfeed:{},
        };
    }

    componentWillMount(){
        fetch(globalVars.urls.baseURL+globalVars.urls.newsfeed, {
            method: 'get',
        //    Pass the token
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })
    }

    render(){
        return(
            <div>
                <NavigationBar/>
                <div className="container-fluid col-sm-12 main-container">
                    <h4>Newsfeed..</h4>
                </div>
            </div>
        )
    }
}

export default Newsfeed;