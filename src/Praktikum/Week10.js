import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';

class Week10 extends Component {
  constructor(){
    super();
    this.state = { todos: [] }
  }

  removeTodo = (i) => {
    this.state.todos.splice(i,1);
    this.setState({ todos: this.state.todos });
    this.refs.formulir.reset();
    this.refs.jam.focus();
  }

  addTodo = (e) => {
    e.preventDefault();
    let jam = this.refs.jam.value;
    let aktivitas = this.refs.aktivitas.value;
    this.state.todos.push({ jam, aktivitas });
    this.setState({ todos: this.state.todos });
    this.refs.formulir.reset();
    this.refs.jam.focus();
  }

  render() {
    return(
      <div className="App container">
        <div className="card">
          
          <form ref="formulir" className="gy-2 gx-3 align-items-center">
            <input type="text" className="col-auto" ref="jam" placeholder="Pukul" />
            <input type="text" className="col-auto" ref="aktivitas" placeholder="Jenis" />
            <button onClick={this.addTodo} className="col-auto btn btn-info">Simpan</button>
          </form>

          <table class="container table table-striped">
            <thead>
              <tr>
                <th scope="col">Pukul</th>
                <th scope="col">Nama Kegiatan</th>
                <th scope="col"></th>
              </tr>
            </thead>
            
            <tbody>
              {this.state.todos.map((data, i) =>
              <tr key={i}>
                <th scope="col">{data.jam}</th>
                <th scope="col">{data.aktivitas}</th>
                <th scope="col">
                  <button onClick={() => this.removeTodo(i)} className="btn btn-outline-danger">Hapus</button>
                </th>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Week10;