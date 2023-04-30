import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground } from "react-native";
import interrogacao from "../../assets/game_images/interrogacao.png";
import dedito from "../../assets/game_images/deditos.jpg";
import allstar from "../../assets/game_images/allstar.png";
import myl from "../../assets/game_images/mario-y-luigi.jpg";
import coracion from "../../assets/game_images/coracaozito.jpg";
import gf from "../../assets/game_images/i-love-my-gf.jpg";
import kissy from "../../assets/game_images/kissy.jpg";
import copa from "../../assets/game_images/brasil.jpg";
import dicria from "../../assets/game_images/a-melhor.jpg";
import gloss from "../../assets/game_images/sorreiei-fml.jpg";
import bjbj from "../../assets/game_images/beijinho.jpg";

var cartas = [];

export default function App({ navigation }) {
  const [board, setBoard] = useState([
    { status: 0, image: dedito, id: 0 },
    { status: 0, image: allstar, id: 1 },
    { status: 0, image: myl, id: 2 },
    { status: 0, image: gf, id: 3 },
    { status: 0, image: myl, id: 4 },
    { status: 0, image: kissy, id: 5 },
    { status: 0, image: bjbj, id: 6 },
    { status: 0, image: gloss, id: 7 },
    { status: 0, image: kissy, id: 8 },
    { status: 0, image: allstar, id: 9 },
    { status: 0, image: gf, id: 10 },
    { status: 0, image: dedito, id: 11 },
    { status: 0, image: coracion, id: 12 },
    { status: 0, image: dicria, id: 13 },
    { status: 0, image: gloss, id: 14 },
    { status: 0, image: copa, id: 15 },
    { status: 0, image: bjbj, id: 12 },
    { status: 0, image: dicria, id: 13 },
    { status: 0, image: coracion, id: 14 },
    { status: 0, image: copa, id: 15 }
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
              //console.log(carta.id);
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
      {board.map((card, index, id) => (
        <View style={styles.cartita}>
          <TouchableOpacity key={id} onPress={() => openCard(card, index)}>
            <View style={styles.card}>
              <ImageBackground
                source={card.status === 0 ? interrogacao : card.image}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{ borderRadius: 10 }}
              ></ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: '100vh',
    width: '100vw',
  },
  card: {
    height: 100,
    width: 80,
    margin: 4
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  cartita: {
    width: '21%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
