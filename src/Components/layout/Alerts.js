import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.alert.error("It works");
  }
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      console.log(error);
      if (error.msg.error.errors.Name) {
        alert.error(error.msg.error.errors.Name.message);
      }

      if (error.msg.error.errors.StartDate) {
        alert.error(error.msg.error.errors.StartDate.message);
      }

      if (error.msg.error.errors.EndDate) {
        alert.error(error.msg.error.errors.EndDate.message);
      }

      if (error.msg.error.errors.NameProduct) {
        alert.error(error.msg.error.errors.NameProduct.message);
      }

      if (error.msg.error.errors.DressingType) {
        alert.error(error.msg.error.errors.DressingType.message);
      }
    }
    /*  if (error !== prevProps.error) {
      if (error.msg.error.errors.Name) alert.error(`Name: ${error.msg.error.errors.Name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }

    if (message !== prevProps.message) {
      if (message.deleteLead) alert.success(message.deleteLead);
      if (message.addLead) alert.success(message.addLead);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    } */
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
