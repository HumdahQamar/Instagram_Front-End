import React from 'react'

import {globalVars} from '../utils/common';


class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        fetch(globalVars.urls.baseURL+globalVars.urls.logout, {
            method: 'get',
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
            window.location = "/"
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return(
            <div className="row">
                <nav className="navbar navbar-main">
                    <div className="col-sm-1">

                    </div>
                    <div className="col-sm-1 nav-bar-logo logo-one">
                        <a className="navbar-brand-left pull-right" href="/newsfeed">
                            <img src = {require("../static/images/logo2.png")} width="30" alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-1 nav-bar-logo logo-two vertical-line">
                        <a className="navbar-brand-right pull-left visible-md visible-lg" href="/newsfeed">
                            <img src = {require("../static/images/logo.png")} width="110" alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-2">

                    </div>
                    <div className="col-lg-2">
                        <SearchBar/>
                    </div>
                    <div className="col-lg-2">

                    </div>
                    <div className="col-lg-1">
                        <a className="pull-right navbar-icon" href="/newsfeed">
                            <img src = {require("../static/images/profile-icon.png")} width="30" alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-1 navbar-icon navbar-icon-right">
                        <a className="navbar-icon-right">
                            <img
                                src = {require("../static/images/logout-icon-2.png")}
                                width="23"
                                alt=""
                                onClick={this.handleLogout}
                            />
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alignment: "text-center",
            value: ""
        };
        this.leftAlignSearchText = this.leftAlignSearchText.bind(this);
        this.centerAlignSearchText = this.centerAlignSearchText.bind(this);
    }

    leftAlignSearchText(){
        this.setState({
            alignment: "text-left"
        })
    }
    centerAlignSearchText(){
        this.setState({
            alignment: "text-center"
        })
    }

    render() {
        return(
            <div className="search-bar text-center">
                <form className="text-center">
                    <div className="search-form">
                        <input
                            className={"form-control search-input "+this.state.alignment}
                            type="text"
                            placeholder="Search"
                            onFocus={this.leftAlignSearchText}
                            onBlur={this.centerAlignSearchText}
                        />
                        <a href="/newsfeed">
                            <img
                                className="search-icon"
                                src={require("../static/images/search-icon.png")}
                                alt = 'insta'
                            />
                        </a>
                    </div>
                </form>
            </div>
        )
    }
}

export default NavigationBar;