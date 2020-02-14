import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCampaign, deleteCampaign } from "../../Redux/actions/campaign";

export class Campaign extends Component {
  static propTypes = {
    campaign: PropTypes.object.isRequired,
    getCampaign: PropTypes.func.isRequired,
    deleteCampaign: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCampaign();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.campaign !== prevProps.campaign) {
  //     //this.props.getCampaign();
  //   }
  // }

  render() {
    return (
      <Fragment>
        <h2>Users</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>BirthDate</th>
              <th>PersonalEmail</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.campaign &&
              this.props.campaign.user &&
              this.props.campaign.user.map(campaign => (
                <tr key={campaign._id}>
                  <td>{campaign._id}</td>
                  <td>{campaign.Name}</td>
                  <td>{campaign.BirthDate}</td>
                  <td>{campaign.PersonalEmail}</td>
                  <td>
                    <button
                      onClick={() => this.props.deleteCampaign(campaign._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  campaign: state.campaign.campaign
});

export default connect(mapStateToProps, { getCampaign, deleteCampaign })(
  Campaign
);
