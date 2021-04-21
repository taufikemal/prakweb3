import React from "react";
import "../App"
import "bootstrap/dist/css/bootstrap.min.css";

export default class Bio extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div className="container">
        <br/>
        <br/>
        <div class="card mb-3">
          <div class="row g-0 kartu">
            <div class="col-md-3">
              <img src={this.state.person.picture.large}/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  {this.state.person.name.title}. 
                  {this.state.person.name.first}
                  {this.state.person.name.last}
                </h5>

                <p class="card-text">
                Gender : {this.state.person.gender} <br/>
                Date of Birth : {this.state.person.dob.date} <br/>
                Age : {this.state.person.dob.age} <br/>
                Contact : {this.state.person.phone}
                </p>

                <p class="card-text"><small class="text-muted">{this.state.person.email}</small></p>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}