import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hitung: 1
        }
        console.log('constructor')
    }
    static getDeliveredStateFromProps(props, state) {
        console.log('getDeliveredStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('componentDidMount')
        setTimeout(() =>{
            this.setState({ hitung:2 })
        }, 3000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(preProps, preState) {
        console.log('getSnapshotBeforeUpdate')
        return true
    }

    componentDidUpdate(preProps, preState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render(){
        console.log('render');
        return (
            <button>Analisa -{'>'} {this.state.hitung}</button>
        );
    }
}

export default Lifecycle;