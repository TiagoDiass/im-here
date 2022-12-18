import { useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant/Participant";
import { AddParticipantForm } from "./Elements/AddParticipantForm/AddParticipantForm";
import { styles } from "./Home.styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);

  const handleAddParticipant = (newParticipantName: string) => {
    if (participants.includes(newParticipantName)) {
      Alert.alert("Ops", "Você já cadastrou um participante com esse nome");
      return;
    }

    setParticipants((prev) => [...prev, newParticipantName]);
  };

  const handleRemoveParticipant = (participantIndex: number) => {
    Alert.alert(
      "Atenção",
      `Deseja remover o participante ${participants[participantIndex]}?`,
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim, tenho certeza",
          style: "destructive",
          onPress: () => {
            const newParticipants = [...participants];
            newParticipants.splice(participantIndex, 1);

            setParticipants(newParticipants);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>ReactConf 2022</Text>
      <Text style={styles.eventDate}>Sexta, 16 de Dezembro de 2022</Text>

      <AddParticipantForm handleAddParticipant={handleAddParticipant} />

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <Participant
            participantName={item}
            handleRemoveParticipant={() => handleRemoveParticipant(index)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Seu evento ainda não tem nenhum participante
          </Text>
        )}
      />
    </View>
  );
}
