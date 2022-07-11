import React, {Component} from 'react';

class Car extends Component {
    render() {

        let {item} = this.props;

        let background = item.color;


        return (
            <div style={{height: 40 ,background: background, color: background === "black" ? "white" : "black", margin: 5}}>
                {item.model}, {item.year} - {item.color}
            </div>
        );
    }
}

export default Car;