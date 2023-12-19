import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Platform, StatusBar, Image, TouchableOpacity } from "react-native"

var prancheta = require("../assets/prancheta.png")
var check = require("../assets/check.png")
var titulo = require("../assets/título.png")

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.titleContainer}>
                    <Image source={titulo} style={styles.title} />
                </View>
                <View style={styles.buttonContainer} >
                    <TouchableOpacity style={styles.button}
                        onPress={() => { this.props.navigation.navigate("HandleTask") }}>
                        <Text style={styles.buttonText}>Começar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { this.props.navigation.navigate("CreateTask") }}>
                        <Text style={styles.buttonText}>Criar Conquistas</Text>
                    </TouchableOpacity>
                </View>
                <Image style={[styles.imageIcon,{top: 350}]} source={prancheta} />
                <Image style={[styles.imageIcon,{top: 600, left: 290}]} source={check} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    title: {
        width: "100%",
        resizeMode: "contain"
    },
    titleContainer: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
       // height: 200,
       // backgroundColor: "pink",   
    },
    buttonContainer: {
        flex: 0.4,
       // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
        
    },
    button: {
        backgroundColor: "#F4C01E",
        height: 60,
        margin: 12,
        width: 160,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "900",
        fontSize: 18
    },
    imageIcon: {
        width: 100,
        height: 120,
        position: "absolute"
    },

})