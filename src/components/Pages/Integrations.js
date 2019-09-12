import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "../../includes";

class Integrations extends Component {
  render() {
    return (
      <Typography variant="display1" gutterBottom component="h2">
        Text 4
      </Typography>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Integrations);
