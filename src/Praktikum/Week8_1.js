import React, { Component } from 'react';

class Week8_1 extends Component {
    constructor() {
        super();
        this.state = {
            member: [
                {
                    id:1,
                    nama: 'Uchiha Udin',
                },
                {
                    id:2,
                    nama: 'Kazakage Jablay',
                },
                {
                    id:3,
                    nama: 'Uzumaki Binomo',
                }
            ]
        }
    }
    render() {
        return(
            <div>
                <h1>Top Global Shopee Tanam:</h1> {

                    this.state.member.map((dinamis, key)=>

                    <div>
                        <h2>{dinamis.id} {dinamis.nama} </h2>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default Week8_1;