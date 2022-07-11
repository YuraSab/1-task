import React, {Component} from 'react';
import {users} from "./database/dbUsers";
import User from "./components/User";

class App extends Component {

    render() {
        return (
            <div>
                {
                    users.map((value, index) => {

                        let backGround = value.status === true ? "green" : "red";

                        return (
                            <User
                                item = {value}
                                key = {index}
                                background = {backGround}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default App;