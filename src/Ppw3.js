import React, { Component } from 'react';
import './App.css';

class Ppw3 extends Component {
    constructor(props) {
        super(props);
        this.state = { join: 'Apakah Anda yakin akan membeli ' }
    }

    yes = () => {
        this.setState({ join: 'Terima Kasih sudah membeli ' })
    }

    cancel = () => {
        this.setState({ join: 'Anda batal membeli ' })
    }

    render(){
        return (
            <div className="warna">
                {this.state.join}
                {this.props.barang} {this.props.jenis}
                <br/>
                <button className = "button" onClick={this.cancel}>
                    Batal
                </button>

                <button className = "button1" onClick={this.yes}>
                    OK
                </button>
            </div>
        );
    }
}

export default Ppw3;