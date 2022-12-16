import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  addParticipantForm: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 36,
  },

  input: {
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 8,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
