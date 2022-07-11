import React, {Component} from 'react';
import {users} from "./database/dbUsers";
import User from "./components/User";
import {cars} from "./database/dbCars";
import Car from "./components/Car";

class App extends Component {



    render() {
        return (
            <div>
                {
                    // users.map((value, index) => {
                    //
                    //     let backGround = value.status === true ? "green" : "red";
                    //
                    //     return (
                    //         <User
                    //             item = {value}
                    //             key = {index}
                    //             background = {backGround}
                    //         />
                    //     )
                    // })

                    cars.map((value, index) => {



                        return(
                            <Car
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