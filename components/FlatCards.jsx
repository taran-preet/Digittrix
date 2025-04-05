import { StyleSheet, Text, View, ScrollView, SafeAreaView,Image } from "react-native";

export default function FlatCards() {
  return (
    <>
        <Text style={styles.text}>Hi!! This is Taran</Text>
       <View style={styles.container}>
            <View style={[styles.cards,styles.cardOne]}>  
                <Image source={{ uri: "https://tse1.mm.bing.net/th?id=OIP.PA_USRL68UjTfF0kRo5ImQHaEo&pid=Api&P=0&h=180" }} style={{ width: 80, height: 80,borderRadius: 40, }} alt=""/>
                <Text>Card one</Text>
            </View>
              <View style={[styles.cards,styles.cardTwo]}><Text>Card Two</Text></View>
              <View style={[styles.cards,styles.cardThree]}><Text>Card Three</Text></View>
              <View style={[styles.cards,styles.cardTwo]}><Text>Card Four</Text></View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection:"row", //flex:1 and flexDirection:"row", only works for <View> tag targetted
    backgroundColor:'pink',
    paddingVertical:20,
    padding:8
  },
  text: {
    color: "white",
    fontSize:25,
    paddingHorizontal:100,
    paddingVertical:10,
    backgroundColor:"black",
  },
  cards:{
    // width:90,
    height:100,
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    margin:3,
    borderRadius:10,
  },
  cardOne:{
    backgroundColor:"red",
    // flexDirection:"row"
  },  
  cardTwo:{
    backgroundColor:"green",
  },
  cardThree:{
    backgroundColor:"blue",
  }

});
