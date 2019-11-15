import React from "react";
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import * as Progress from 'react-native-progress';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


class ItemCount extends React.Component {
    render() {
        const { item } = this.props
        const close = <FontAwesome5 size={20} name={'times'} />;
        
        return (
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <Text style={styles.name}>
                        {item.key}
                    </Text>
                    <TouchableOpacity style={styles.close}>
                        {close}
                    </TouchableOpacity>
                </View>
                <Progress.Bar style={styles.progressBar} progress={item.value} width={300}/>
                <Text style={styles.date}>
                    12/01/2019
                </Text>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flex: 1,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    },
    header_container: {
        flex: 1,
        flexDirection: "row",
    },
    name: {
        flex: 2,

        fontSize: 20,
        fontWeight: "bold",
        paddingRight: 5,
        
        alignItems: 'flex-end',
    },
    close: {
        textAlign: "right"
    },
    progressBar: {
        
    },
    date: {
        textAlign: "right"
    }
})

export default ItemCount