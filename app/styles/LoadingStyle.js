import { StyleSheet } from "react-native";
import colors from "./colors.js";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.Thalloorange,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: 280,
    height: 280,
    marginTop: "-30%",
  },
  loader: {
    width: 64,
    height: 17,
  },
});
