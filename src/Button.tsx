import React, { memo } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
const Button = ({
  buttons,
  operator,
  saveExpression,
  calcResult,
  clearResult
}) => (
  <View style={styles.btnContainer}>
    <View style={styles.rowContainer}>
      {buttons.map((row, index) => (
        <View key={index} style={styles.contRow}>
          {row.map((col, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                col === "C" ? clearResult() : saveExpression(col)
              }
              style={styles.contButton}
            >
              <Text style={styles.txtDefault}>{col}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
    <View style={styles.operatorContainer}>
      {operator.map((item, index) => (
        <TouchableOpacity
          style={styles.contButton}
          key={index}
          onPress={() => (item === "=" ? calcResult() : saveExpression(item))}
        >
          <Text style={styles.txtDefault}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default memo(Button);
