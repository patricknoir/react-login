import React from 'react';
import Drawer from 'material-ui/Drawer';

export default class SideMenu extends React.Component {

    constructor(props) {
        super(props);
        this.setState({open: props.isOpen});
    }

    render() {
        return(
            <Drawer
                open={this.state.open}
                docked={false}
            >
                <MenuItem>Element 1</MenuItem>
            </Drawer>
        );
    }
}
