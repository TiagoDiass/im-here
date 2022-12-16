import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AddParticipantForm } from "./Elements/AddParticipantForm/AddParticipantForm";
import { styles } from "./Home.styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([
    "Tiago",
    "Beatriz",
    "Lucas",
  ]);

  const handleAddParticipant = (newParticipantName: string) => {
    setParticipants((prev) => [...prev, newParticipantName]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>ReactConf 2022</Text>
      <Text style={styles.eventDate}>Sexta, 16 de Dezembro de 2022</Text>

      <AddParticipantForm handleAddParticipant={handleAddParticipant} />

      <FlatList
        renderItem={({ item, index }) => (
          <Text key={index} style={styles.list}>
            {item}
          </Text>
        )}
        data={participants}
      />
    </View>
  );
}