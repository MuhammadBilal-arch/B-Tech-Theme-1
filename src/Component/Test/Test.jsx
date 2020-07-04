import React, { Component } from 'react'
import "./Test.css"
// import apipath from "../../Const/Const";
import TestCard from "./TestCard"
export default class Test extends Component {

        state = 
        {
            data: [],
            datatype: "",
            value: ""
        }

        static getDerivedStateFromProps(props,state)
        {
            // if(props.value === state.value)
            // {
            //     return {
            //         value: "Yellow"
            //     } 
            // }
            // else
            // {
            //     return {value:props.value}
            // }
            return {value: "green"};
        }


        GetAip = (apipath) =>
        {
            fetch(apipath)
            .then((data) =>
            {
                return data.json();
            })
            .then((data) =>
            {
                return this.setState({data:data.data || data})
            })
            .catch((err) =>
            {
                console.log(err);
            })
        }

        SelectUCard = () =>
        {
            console.log("Api Called");
            this.GetAip("https://api.openbrewerydb.org/breweries");
            this.setState({datatype: "Users Data"});
        }

        SelectECard = () =>
        {
            console.log("Api Called");
            this.GetAip("http://dummy.restapiexample.com/api/v1/employees");
            this.setState({datatype: "Employes Data"});
        }

        
        render() {
        return (
            <div className='SButtoncard'>
                {this.state.value}
                <div>
                    <button className='TcardButton' onClick = {this.SelectUCard}>User Data</button >
                    <button className='TcardButton' onClick = {this.SelectECard}>Employes Data</button>
                </div>
                <h1>{this.state.datatype}</h1>
                <TestCard>{this.state.data}</TestCard>
            </div>
        )
    }
}
