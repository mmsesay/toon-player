import React, { Component } from 'react'
import { View, Text , Image,
    SafeAreaView, ScrollView, TouchableOpacity,
    ProgressBarAndroid} from 'react-native-tailwind'
import { StyleSheet } from 'react-native';
import Albums from './AlbumPanel'
import Songs from './SongsPanel'
import Control from './Controls'

class ThemeOne extends Component {


    render() {

        return (
            <View className="flex flex-wrap">
                {/* left panel */}
                <View className="flex h-full w-2/5 items-center p-4 border-r-2 border-orange-light">
                    {/* must start loop here */}
                    <Text className="font-bold m-4 text-lg">left side</Text>
                    {/* className="h-48 bg-red-light" */}
                    <View className="bg-gray-light"
                        style={styles.outerScrollView}
                    >
                        <ScrollView style={styles.leftScrollView}>
                            {/* incldude the songs component */}
                            <Songs />
                        </ScrollView>
                    </View>
                    
                    {/* controls section */}
                    <View className="content-end shadow-xl z-30 h-48">
                        {/* include the controls component */}
                        <Control />
                    </View>
                    {/* end of controls sections */}
                </View>
                {/* end of left panel */}

                {/* right panel */}
                <View className="flex h-full">
                    <View className="flex-1 bg-green-lighter">
                        <ScrollView>
                            {/* incldude the albums component */}
                            <Albums />
                        </ScrollView>
                    </View>
                    {/* bottom section */}
                    <View className="content-end shadow-xl z-30 h-32">
                        <Text className="text-center border-b-2 border-red-lighter mx-auto w-24 -mt-2 mb-6"></Text>
                        <View className="flex-row items-center pt-2">
                            
                            {/* song title */}
                            <View className="w-3/5">
                                <Text className="text-center font-bold">
                                    Song Title
                                </Text>
                            </View>
                            {/* song artwork */}
                            <View className="w-1/5">
                                <Image className="w-10 h-10 ml-4 rounded-full" 
                                source={require('../images/man.png')}
                                // style = {{ width: 200, height: 200 }}
                                />
                            </View>
                        </View>
                    </View>
                    {/* end of bottom section */}
                </View>
                {/* end of right panel */}
            </View>
        )
    }
 
}

const styles = StyleSheet.create({
    outerScrollView: {
        height: 350
    },
    leftScrollView: {
        width: 150,
    },  
    bigPicContianer: {
        width: 110,
        height: 150,
        borderRadius: 20,   
    },
    bigPicContianerTwo: {
        width: 110,
        height: 150,
        borderRadius: 20,
        marginTop: -170
    },
    bigPicContianerThree: {
        width: 110,
        height: 150,
        borderRadius: 20,
        marginTop: -170
    },
    frameOne: {
        marginTop: -50
    }
})

export default ThemeOne