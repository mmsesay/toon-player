import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux';

class Home extends Component {

    // state
    state = {
        name: '',
    };

    // render method
    render() {
        return (
            <View>
                <Text 
                // style={styles.title}
                >
                    Enter your name:
                </Text>
                <TextInput 
                    // style={styles.nameInput}
                    placeholder='John Doe'
                    onChangeText={(text) => {
                        this.setState({
                            name: text
                        });
                    }}
                    value={this.state.name}
                />
                <TouchableOpacity
                    onPress={() => {
                        // navigate to the second screen
                        // console.log(this.state.name);
                        Actions.chat({
                            name: this.state.name
                        })
                    }}
                >
                    <Text 
                    // style={styles.buttonText}
                    >
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
 
}

// custom styles
// const styles = StyleSheet.create({
//     title: {
//         marginTop: 20,
//         marginLeft: 20,
//         fontSize: 20
//     },
//     nameInput: {
//         height: 40,
//         borderColor: 'black',
//         borderWidth: 2,
//         margin: 20,
//         padding: 4
//     },
//     buttonText: {
//         marginLeft: 20,
//         fontSize: 20
//     }
// });

export default Home;