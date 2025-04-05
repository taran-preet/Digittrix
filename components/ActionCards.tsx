import React from 'react'
import {View,Text,SafeAreaView,StyleSheet,Image, Linking,TouchableOpacity} from "react-native"

function ActionCards() {

    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }

  return (
    <SafeAreaView style={{marginTop:30}}>
        <View style={styles.card}>
            <Text style={styles.heading}>Blog 🔥 Card</Text>
            <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        what's new in Javascript 12
                    </Text>
            </View>
            <Image style={styles.cardImage} source={{uri:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LyZcwuLWv2FArOumCxobpA.png"}}  />
            <View style={styles.bodyContainer}>
                <Text style={{color:"white"}} numberOfLines={3}>
                    JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS.
                    99% of websites use JavaScript on the client side for webpage behavior. 
                    Web browsers have a dedicated JavaScript engine that executes the client code.
                    JavaScript is a cross-platform, object-oriented programming language used by developers to make web pages interactive.
                    It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia.
                </Text>     
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={()=>{openWebsite("https://www.geeksforgeeks.org/javascript/")}}>
                    <Text style={styles.socialLinks}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{openWebsite("https://www.linkedin.com/in/taranpreet-singh-baweja/")}}>
                    <Text style={styles.socialLinks}>Follow me</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}


const styles= StyleSheet.create({
    heading:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:8,
        color:"white",
    },
    card:{
        width:350, 
        height:350,
        backgroundColor:"black",
        marginHorizontal:16,
        paddingVertical:12,
        elevation:3, 
        shadowOffset:{
            height:1,
            width:1
        },
        shadowColor:"orange",
        shadowOpacity:0.8,
        shadowRadius:20
        
    },
    headingContainer:{
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:6,
        borderColor:"red",
        borderTopColor:"green",
        borderBottomColor:"pink",
        borderRadius:30,

    },
    headerText:{
        fontSize:18,
        fontWeight:"bold",
        color:"white",
    },
    cardImage:{
        height:120,
    },
    bodyContainer:{
        padding:15,
        
    },
    footerContainer:{
        // backgroundColor:"orange",
        padding:15,
        flexDirection:"row",
        justifyContent:"space-evenly",
        color:"white",
        elevation:3, 
        shadowOffset:{
            height:2,
            width:2,
        },
        shadowColor:"white",
        shadowRadius:10,
        shadowOpacity:1,
    },
    socialLinks:{
        backgroundColor:"white",
        padding:7,
        borderRadius:10,
        color:"black",
    },
});


export default ActionCards
