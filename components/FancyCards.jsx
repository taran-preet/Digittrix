import React from 'react'
import {View,Text,SafeAreaView,StyleSheet,Image,ScrollView} from "react-native"

function FancyCards() {
  return (
    <SafeAreaView>
        <Text style={styles.headingText}>Trending places</Text>
        <ScrollView horizontal={true}>
              {/* horizontal={true} works only on <ScrollView> tag  */}
        <View style={[styles.card,styles.cardElevated]}>
            <Image source={{ uri: "https://tse1.mm.bing.net/th?id=OIP.PA_USRL68UjTfF0kRo5ImQHaEo&pid=Api&P=0&h=180" }} style={styles.cardImage}  alt=""/>
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLable} >Pink city, jaipur</Text>
                <Text style={styles.cardDescription} > Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. Hawa Mahal famously known as the “ palace of winds “ has one of the best architecture in Jaipur, Rajasthan.</Text>
                <Text style={styles.cardFooter} >12 mins away</Text>
            </View>
         </View> 
         
         <View style={[styles.card,styles.cardElevated]}>
            <Image source={{ uri: "https://tse1.mm.bing.net/th?id=OIP.PA_USRL68UjTfF0kRo5ImQHaEo&pid=Api&P=0&h=180" }} style={styles.cardImage}  alt=""/>
                <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLable} >Pink city, jaipur</Text>
                <Text style={styles.cardDescription} > Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. Hawa Mahal famously known as the “ palace of winds “ has one of the best architecture in Jaipur, Rajasthan.</Text>
                <Text style={styles.cardFooter} >12 mins away</Text>
                </View>
         </View> 
         </ScrollView>
    </SafeAreaView>
  )
}

    const styles= StyleSheet.create({
        headingText:{
            color:"white",
            fontSize:25,
            fontWeight:"bold",
            paddingHorizontal:20,
        },
        card:{
            width:350,
            height:330,
            borderRadius:6,
            marginVertical:12,
            marginHorizontal:16,
            // backgroundColor:"pink",
            // justifyContent:"center",
            // alignItems:"center"
        },
        cardImage:{
            width: 350, 
            height: 150,
            borderRadius:10,
            marginBottom:10,
        },
        cardElevated:{
            backgroundColor:"black",
            elevation:20,
            shadowOffset:{
                height:1,
                width:1,
            },
            shadowColor:"red",
            shadowRadius:10,
            shadowOpacity:1,
    
        },
        cardBody:{
            flex:1,
            flexGrow:1,
            paddingHorizontal:12,
        },
        cardTitle:{
            color:"white",
            fontSize:22,
            fontWeight:"bold",
            marginBottom:6,
        },
        cardLable:{
            color:"white",
            fontSize:16,
            marginBottom:6,
        },
        cardDescription:{
            color:"white",
            fontSize:12,
            marginTop:6,
            marginBottom:4,
        },
        cardFooter:{
            color:"white",
            textAlign: 'right'
            
        },

    })

export default FancyCards
