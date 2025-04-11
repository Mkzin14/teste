import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const time = {
  nome: "Santos",
  escudo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png",
}

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{time.nome}</Text>
      <Image source={{ uri: time.escudo }} style={styles.escudo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  escudo: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
})