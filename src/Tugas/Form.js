import React, { Component } from 'react';
import "../App"
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            nama: "",
            usia: "",
            asalInstansi: "",
            jenisKelamin: "",
            berhasil:''
        };
    }

    nama = (event) => {
        this.setState({ nama: event.target.value });
    };

    usia = (event) => {
        this.setState({ usia: event.target.value });
    };
    
    instansi = (event) => {
        this.setState({ asalInstansi: event.target.value});
    };

    jenisKelamin = (event) => {
        this.setState({ jenisKelamin: event.target.value});
    };

    render() {
        return(
            <div className="container">
                <h1 className="text-center"> Form Tony Stark Internship </h1>
                <br/>
                <form>
                    <div className="mb-3">
                        <input type="text" 
                            className="form-control" 
                            placeholder="Nama" 
                            onChange={this.nama}>
                        </input>
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" 
                                onChange={this.usia} 
                                className="form-control" 
                                placeholder="Usia">
                        </input>
                        <span class="input-group-text" 
                                id="basic-addon2">Tahun</span>
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" 
                                onChange={this.instansi} 
                                className="form-control" 
                                placeholder="Asal Instansi">
                        </input>
                    </div>

                    <div className="input-group mb-3">
                        <span class="input-group-text" 
                                id="basic-addon2">Jenis Kelamin
                        </span>

                        <select onChange={this.jenisKelamin} className="form-control">
                            <option value="-">-</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>

                    <div class="card text-center">
                        <div class="card-header blue">
                            PENGUMUMAN HASIL SELEKSI
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Tony Stark Industries Internship</h5>
                            <div class="alert alert-success" role="alert">
                            Selamat, {this.state.nama}! Kamu dinyatakan lulus 
                            Intern di Tony Stark Industries Internship
                            </div>

                            <p class="card-text">
                                Nama : {this.state.nama}, <br/>
                                Usia : {this.state.usia} tahun, <br/>
                                Asal Instansi : {this.state.asalInstansi}, <br/>
                                Jenis Kelamin : {this.state.jenisKelamin} <br/> <br/>
                                Diharapkan untuk segera mempersiapkan segala dokumen 
                                dan perlengkapan administrasi lainnya
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;