import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { userActions } from '../actions';
import { connect } from 'react-redux';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          username: '',
          password: '',
          submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        //if username and password are not null then perform login
        if(username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        return (
            <Card className="container">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="card-heading">Login</h2>
                    <div className="field-line">
                        <TextField
                            floatingLabelText="Name"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="field-line">
                        <TextField
                            floatingLabelText="Password"
                            name="password"
                            value={this.state.password}
                            type="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="button-line">
                        <RaisedButton type="submit" label="Log in" primary />
                    </div>
                    <CardText>Don't have an account? <a href=".">Create one</a>.</CardText>
                </form>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(LoginPage);