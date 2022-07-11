import React, {Component} from 'react';
import {users} from "./database/db";
import User from "./components/User";

class App extends Component {

    render() {
        return (
            <div>
                {
                    users.map((value, index) => {
                        return (
                            <User
                                item = {value}
                                key = {index}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default App;