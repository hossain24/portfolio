import React, { Component } from "react";
import "./fetchdata.css";

class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                });
            });
    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container main">
                    <h4 className="center">API Consumption</h4>
                    {items.map(item => (
                        <div className="post card">
                            <p className="card-content">Name: {item.name} | Email: {item.email}</p>
                        </div>


                    ))}

                </div>
            );
        }
    }
}

export default FetchData;
