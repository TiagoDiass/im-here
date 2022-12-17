import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Participant.styles";

type ParticipantProps = {
  participantName: string;
  handleDeleteParticipant: () => void;
};

export function Participant({
  participantName,
  handleDeleteParticipant,
}: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>{participantName}</Text>

      <TouchableOpacity style={styles.button} onPress={handleDeleteParticipant}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
