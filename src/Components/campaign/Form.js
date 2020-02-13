import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCampaign } from "../../Redux/actions/campaign";

export class Form extends Component {
  state = {
    userId: "5e41733286a6520c8c116ad6",
    Name: "",
    BirthDate: "",
    PersonalEmail: ""
  };

  static propTypes = {
    addCampaign: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onChangeselection = e => {
    var index = e.nativeEvent.target.selectedIndex;
    this.setState({ [e.target.name]: e.nativeEvent.target[index].value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { userId, Name, BirthDate, PersonalEmail } = this.state;
    const campaign = {
      userId,
      Name,
      BirthDate,
      PersonalEmail
    };
    this.props.addCampaign(campaign);
    this.setState({
      userId: "5e41733286a6520c8c116ad6",
      Name: "",
      BirthDate: "",
      PersonalEmail: ""
    });
  };

  render() {
    const { userId, Name, BirthDate, PersonalEmail } = this.state;
    return (
      <div className="card card-body col-12 mt-4 mb-4">
        <h2>Add Campaign</h2>
        <form onSubmit={this.onSubmit}>
          <input type="hidden" value={userId} />
          <div className="form-group col-5" style={{ display: "inline-block" }}>
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="Name"
              onChange={this.onChange}
              value={Name}
            />
          </div>
          <div
            className="form-group col-5 "
            style={{ display: "inline-block" }}
          >
            <label>BirthDate</label>
            <input
              className="form-control"
              type="date"
              name="BirthDate"
              onChange={this.onChange}
              value={BirthDate}
            />
          </div>
          <div
            className="form-group col-5 "
            style={{ display: "inline-block" }}
          >
            <label>PersonalEmail</label>
            <input
              className="form-control"
              type="email"
              name="PersonalEmail"
              onChange={this.onChange}
              value={PersonalEmail}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addCampaign })(Form);
