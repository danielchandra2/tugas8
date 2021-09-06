import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.min.css';

class Usingdidmount extends Component{
    constructor(){
        super();
        this.state={
            name:"React"
        };
        this.getTodos = this.getTodos.bind(this);
    }

    componentDidMount(){
        this.getTodos();
    }

    async getTodos(){
        let data= await axios
            .get("https://swapi.dev/api/planets/")
            .then(function(response){
                return response;
            })
            .catch(function(error){
                console.log(error);
            });
        this.setState({ todos : data.data.results });
    }

    render(){
        const {todos} = this.state;

        return(
            <div>
                <h3>
                    Tugas React JS pertemuan 8  
                </h3>
                <hr />

                <div class="container">
                <table class="table table-bordered">
                    <thead class="thead-dark">
                    <tr>
                        <th>name</th>
                        <th>diameter</th>
                        <th>population</th>
                        <th>gravity</th>
                        <th>created</th>
                    </tr>
                    </thead>
                    { todos &&
                    todos.map(todo => {
                        let tanggal = new Date(todo.created);
                        let dateCreated = moment(tanggal).format('DD MMM YYYY');
                        
                        return(
                                <tr>
                                    <td>{todo.name}</td>
                                    <td>{todo.diameter}</td>
                                    <td>{todo.population}</td>
                                    <td>{todo.gravity}</td>
                                    <td>{dateCreated}</td>
                                </tr>
                        );
                    })
                }
                </table> 
            </div>
            </div>
        );
    }
}

export default Usingdidmount;