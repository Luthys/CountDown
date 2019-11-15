import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput
} from "react-native";

import DatePicker from 'react-native-datepicker'


class CreateCount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            startDate:"",
            endDate:""
        }
    }

    onChangeName(value) {
        this.setState({name: value})
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>Ajouter un compte à rebours</Text>
                <View style={styles.form}>
                    <TextInput 
                        style={styles.name}
                        placeholder="Nom" 
                        onChangeText={text => this.onChangeName(text)} 
                        value={this.state.name}
                    />
                    <View style={styles.container__datepicker}>
                        <DatePicker
                            style={styles.start}
                            date={this.state.startDate}
                            mode="date"
                            placeholder="Date de début"
                            format="DD-MM-YYYY"
                            minDate="01-01-1970"
                            confirmBtnText="Valider"
                            cancelBtnText="Fermer"
                            showIcon={false}
                            onDateChange={(date) => {this.setState({startDate: date})}}
                        />
                        <DatePicker
                            style={styles.end}
                            date={this.state.endDate}
                            mode="date"
                            placeholder="Date de fin"
                            format="DD-MM-YYYY"
                            minDate="01-01-1970"
                            confirmBtnText="Valider"
                            cancelBtnText="Fermer"
                            showIcon={false}
                            onDateChange={(date) => {this.setState({endDate: date})}}
                        />
                    </View>
                </View>
            </View>
        );   
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",

        fontSize: 25,
        fontWeight: "bold"
    },
    form: {
        flex: 2,
        flexDirection: "column",
        padding: 20,
    },
    name: {
        borderWidth: 1,
        alignSelf: "stretch",
        height: 40
    },
    container__datepicker: {
        flexDirection: "row",

        paddingTop: 10,
    },
    start: {
        flex: 1,
        alignSelf: "stretch",

        paddingRight: 5
    },
    end: {
        flex: 1,
        
        paddingLeft: 5
    },
});

export default CreateCount