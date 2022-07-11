import React, {Component} from 'react';

class User extends Component {
    render() {

        let {item, background} = this.props;

        return (
            <div style={{background: background}}>
                {item.name} - {item.age} - {item.status.toString()}
            </div>
        );
    }
}

export default User;