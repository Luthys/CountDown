import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from "react-native";

import ItemCount from "./ItemCount"
import CreateCount from "./CreateCount"

class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countList: [                    
            {key: "Pierre t'es moche", value: 2.7},
            {key: 'Seb', value: 0.1}
        ]
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Compte à rebours</Text>
                <FlatList
                    style={styles.list}
                    data={this.state.countList}
                    renderItem={({item}) => <ItemCount item={item}></ItemCount>}
                />
                <View style={styles.form}>
                    <CreateCount/>
                </View>
            </View>
        );   
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'flex-start',
      justifyContent: 'center',

      padding: 10,
      paddingTop: 35,
      paddingBottom: 30,

      backgroundColor: '#fff'
    },
    title: {
        alignSelf: "stretch",
        
        fontSize: 40,
        fontWeight: "bold",
        
    },
    list: {
        flex: 1,
        alignSelf: "stretch",
    },
    form: {
        flex: 1,
        alignSelf: "stretch",
        borderWidth: 1,
        borderRadius: 5,
    }
});

export default CountDown