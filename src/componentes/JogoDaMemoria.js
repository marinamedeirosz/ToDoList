import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";
import interrogacao from "../assets/interrogacao.png";
import lua from "../assets/lua.png";
import sol from "../assets/sol.png";
import venus from "../assets/venus.png";
import marte from "../assets/marte.png";
import mercurio from "../assets/mercurio.png";
import saturno from "../assets/saturno.png";
import terra from "../assets/terra.png";
import sapinho from "../assets/sapinho.png";

var cartas = [];

export default function JogoDaMemoria() {
  const [board, setBoard] = useState([
    { status: 0, image: lua, id: 0 },
    { status: 0, image: venus, id: 1 },
    { status: 0, image: sol, id: 2 },
    { status: 0, image: mercurio, id: 3 },
    { status: 0, image: sol, id: 4 },
    { status: 0, image: saturno, id: 5 },
    { status: 0, image: sapinho, id: 6 },
    { status: 0, image: terra, id: 7 },
    { status: 0, image: saturno, id: 8 },
    { status: 0, image: venus, id: 9 },
    { status: 0, image: mercurio, id: 10 },
    { status: 0, image: lua, id: 11 },
    { status: 0, image: marte, id: 12 },
    { status: 0, image: sapinho, id: 13 },
    { status: 0, image: marte, id: 14 },
    { status: 0, image: terra, id: 15 }
  ]);

  const openCard = (card, index) => {
    if (card.status === 0) {
      let newBoard = [...board];
      let item = { ...newBoard[index] };
      item.status = 1;
      newBoard[index] = item;
      setBoard(newBoard);
      cartas.push(board[index]);
      setTimeout(() => {
        if (cartas.length === 2) {
          if (cartas[0].image !== cartas[1].image) {
            cartas.forEach((carta) => {
              let newBoard = [...board];
              console.log(carta.id);
              newBoard[carta.id].status = 0;
              setTimeout(() => {
                setBoard(newBoard);
              }, 250);
            });
          }
          cartas = [];
        }
      }, 250);
    } else {
      let newBoard = [...board];
      let item = { ...newBoard[index] };
      item.status = 0;
      newBoard[index] = item;
      setBoard(newBoard);
    }
  };

  return (
    <View style={styles.container}>
      {board.map((card, index) => (
        <TouchableOpacity key={card.id} onPress={() => openCard(card, index)}>
          <View style={styles.card}>
            <ImageBackground
              source={card.status === 0 ? interrogacao : card.image}
              resizeMode="stretch"
              style={styles.image}
            ></ImageBackground>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    height: 100,
    width: 80,
    borderRadius: 4,
    margin: 4
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
