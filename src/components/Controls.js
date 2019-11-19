import React, { Component } from 'react'
import { View, Text , Image,
    SafeAreaView, ScrollView, TouchableOpacity,
    ProgressBarAndroid} from 'react-native-tailwind'
import { StyleSheet } from 'react-native'
 
class Control extends Component {
    render() {
        return (
            <View className="items-center pt-2">
                <View className="w-full items-center">
                    <Text className="text-center font-bold">
                        Controls
                    </Text>
                    <View className="shadow w-4 h-24 mt-4 mb-2 bg-grey-light rounded">
                        <Text className="bg-blue text-xs leading-none py-1 text-center text-white"
                        >45%</Text>
                    </View>
                    <Image
                        source={require('../images/controls/pauseButton.png')}
                        className="h-2 w-8 p-4 mt-5"
                    />
                </View>
            </View>
        )
    }
 
}

export default Control