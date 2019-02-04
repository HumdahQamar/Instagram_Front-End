import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Signup from './insta/components/signup';
import Newsfeed from './insta/components/newsfeed';

const history = createBrowserHistory();

class Routes extends React.Component{
    render() {
        return(
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Signup}/>
                    <Route exact path="/newsfeed" component={Newsfeed}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <Routes/>,
    document.getElementById('root')
);
