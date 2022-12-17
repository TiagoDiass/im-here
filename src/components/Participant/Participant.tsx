import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Participant.styles";

type ParticipantProps = {
  participantName: string;
  handleRemoveParticipant: () => void;
};

export function Participant({
  participantName,
  handleRemoveParticipant,
}: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>{participantName}</Text>

      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
