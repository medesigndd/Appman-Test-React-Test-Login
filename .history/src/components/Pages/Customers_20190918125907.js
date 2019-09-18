import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "../../includes";
import { addToCart } from 'actions/cartActions'

class Reports extends Component {
  render() {
    return (
      <Typography variant="display1" gutterBottom component="h2">
        Text 1
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
)(Reports);

