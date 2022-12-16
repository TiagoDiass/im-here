import { useState } from "react";
import {
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./AddParticipantForm.styles";

interface AddParticipantFormProps {
  handleAddParticipant: (newParticipantName: string) => void;
}

export function AddParticipantForm({
  handleAddParticipant: handleAddParticipantCallback,
}: AddParticipantFormProps) {
  const [participantName, setParticipantName] = useState("");

  const handleParticipantNameChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setParticipantName(event.nativeEvent.text);
  };

  const handleAddParticipant = () => {
    handleAddParticipantCallback(participantName);
    setParticipantName("");
  };

  return (
    <View style={styles.addParticipantForm}>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        value={participantName}
        onChange={handleParticipantNameChange}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
