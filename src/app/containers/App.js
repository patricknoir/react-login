import React from 'react';
import { Router, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import { connect } from 'react-redux';
import { alertActions } from '../actions';
import { history } from '../helpers';


class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Route path="/" component={LoginPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);
