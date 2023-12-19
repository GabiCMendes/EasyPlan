import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

export default class HandleTask extends React.Component {
    constructor() {
        super();
        this.state = {
          score: 0,
          isPressed: false
        };
      }
      render() {
        return (
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Vamos Começar</Text>
              <Text style={styles.headerScore}>{this.state.score}</Text>
              <Text style={styles.icon}>*</Text>
            </View>
            <View style={styles.taskContainer}>
                <TouchableOpacity style={styles.checkTask}>
                    <Text> </Text>
                </TouchableOpacity>
                <Text style={styles.nameTask}>Tomar Água</Text>
                <Text style={styles.pointsTask}>5+</Text>
                <Text style={styles.icon}>*</Text>
            </View>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"#fff"
        },
        headerContainer:{
            flex:0.2,
            justifyContent:"space-evenly",
            alignItems:"center",
            flexDirection:"row"
        },
        headerText:{
            color: "#004A70",
            fontWeight: "900",
            fontSize: 40
        },
        headerScore:{
            fontSize: 30
        },
        icon:{
            fontSize: 60,
            color: "gold",
        },
        taskContainer:{
            flex:0.8,
            justifyContent:"space-evenly",
            alignItems:"center",
            flexDirection:"row",
            borderColor:"black",
            borderWidth:1
        },
        checkTask:{
            backgroundColor:"#00A5AB",
            width:50,
            height:50,
            borderRadius:100,
            borderWidth:2,
            borderStyle: "double"
            
        },
        nameTask:{
            backgroundColor:"#00A5AB"
        },
        pointsTask:{
            
        }
    
    });