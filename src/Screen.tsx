import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Button from "./Button";
import * as actions from "./actions";

import { buttons, operator } from "./constants";
import { styles } from "./styles";

class Screen extends Component {
  render() {
    const { result } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contOutput}>
          <Text style={styles.textResult}>{result}</Text>
        </View>
        <View style={styles.contButtons}>
          <Button {...this.props} buttons={buttons} operator={operator} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ expression, result }) => ({ expression, result });

const mapDispatchToProps = dispatch => ({
  saveExpression: payload => dispatch(actions.saveExpression(payload)),
  calcResult: () => dispatch(actions.calcResult()),
  clearResult: () => dispatch(actions.clearResult())
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
