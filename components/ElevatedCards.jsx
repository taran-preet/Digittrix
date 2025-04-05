import React from 'react'
import {View,Text,SafeAreaView,StyleSheet,ScrollView} from "react-native"

function ElevatedCards() {
  return (
    <SafeAreaView>
        <View>
              <Text style={styles.headingText}>Elevated cards</Text>
                <ScrollView horizontal={true} style={styles.container}>
                    {/* horizontal={true} works only on <ScrollView> tag  */}
                    <View style={[styles.card,styles.cardEleveted]}>
                        <Text>Touch</Text>
                    </View>
                    <View style={[styles.card,styles.cardEleveted]}>
                        <Text>me</Text>
                    </View>
                    <View style={[styles.card,styles.cardEleveted]}>
                        <Text>to</Text>
                    </View>
                    <View style={[styles.card,styles.cardEleveted]}>
                        <Text>Scroll</Text>
                    </View>
                    <View style={[styles.card,styles.cardEleveted]}>
                        <Text>Done</Text>
                    </View>
                </ScrollView>
        </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    headingText:{
        fontSize:25,
        fontWeight:"bold",
        paddingHorizontal:80,
        
    },
    container:{
         padding:8,
    },
    card:{
        justifyContent:"center", //top-down
        alignItems:"center",//left-right
        marginRight:2,
        borderRadius:5,
        height:100,
        width:100,
    },
    cardEleveted:{
        backgroundColor:"#CAD5E2",
        elevation:4,
        shadowOffset:{
            height:1,
            width:1,
        },
        shadowColor:"red",
        shadowRadius:4,
        shadowOpacity:0.7


    }

})

export default ElevatedCards
