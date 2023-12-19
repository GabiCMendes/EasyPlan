import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class CreateTask extends React.Component {
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

    },
    headerContainer:{

    },
    headerText:{

    },
    headerScore:{

    },
    icon:{

    },
    taskContainer:{

    },
    checkTask:{

    },
    nameTask:{

    },
    pointsTask:{
        
    }

});
