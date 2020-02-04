import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  contButtons: {
    flex: 3
  },
  contOutput: {
    flex: 3
  },
  btnContainer: {
    flex: 1,
    padding: 5,
    flexDirection: "row"
  },
  rowContainer: { flex: 4.5, alignItems: "center" },
  txtDefault: {
    color: "black",
    fontSize: 30
  },
  contRow: {
    flex: 1,
    flexDirection: "row"
  },
  contButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#DDDDDD",
    borderRadius: 5,
    margin: 5
  },
  operatorContainer: { flex: 1.5 },
  textResult: {
    marginTop: "auto",
    fontSize: 70,
    textAlign: "right",
    marginHorizontal: 10
  }
});
