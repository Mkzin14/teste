import React from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'

const jogadores = [
  {
    nome: "Neymar",
    numero: 10,
    imagem: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/santos-neymar_ce226e-e1738361128243.jpg?w=1200&h=1200&crop=1"
  },
  {
    nome: "Soteldo",
    numero: 7,
    imagem: "https://i.pinimg.com/736x/2e/b8/d3/2eb8d33869a6b8335f33f6bd6342dc00.jpg"
  },
  {
    nome: "Tiquinho",
    numero: 9,
    imagem: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/tiquinho_santos-e1737747119923.jpg?w=1200&h=1200&crop=1"
  },
  {
    nome: "Deivid Washington",
    numero: 36,
    imagem: "https://images.futebolinterior.com.br/2023/05/deivid-washington-santos.png"
  },
  {
    nome: "Guilherme",
    numero: 11,
    imagem: "https://images.futebolinterior.com.br/2023/05/deivid-washington-santos.png"
  },
]

export default function JogadoresScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.numero}>Camisa: {item.numero}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black'
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2
  },
  image: {
    width: 100,
    height: 100
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  numero: {
    fontSize: 16,
    color: 'yellow'
  }
})