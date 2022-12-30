import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles"

export function Home() {
  const [participants, setParticipants] = useState(["Francisco Maik"]);

  function handleParticipantAdd() {
    if(participants.includes("Pedro")){
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.")
    }

    setParticipants(prev => [...prev, "Ana"]);
    console.log(participants);
  }

  function handleParticipantRemove() {
    Alert.alert(
      "Remover",
      "Deseja remover o participante Francisco Maik?",
      [
        {
          text: "Sim",
          onPress: () => Alert.alert("Deletado!")
        },
        {
          text: "Não",
          style: "cancel"
        }
      ]
    )
    console.log("Você clicou em remover o participante");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />)}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}
