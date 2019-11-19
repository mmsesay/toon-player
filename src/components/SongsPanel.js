import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { View, Text, Image,
    TouchableOpacity} from 'react-native-tailwind'
import Albums from './AlbumPanel'
 
class Songs extends Component {
    // state 
    state = {
        count: 0,
        artworks: [
            {
                id: 1,
                title: 'JAZZ',
                image: require('../images/artworks/picOne.jpg')
            },
            {
                id: 2,
                title: 'VINTAGE',
                image: require('../images/artworks/picTwo.jpg')
            },
            {
                id: 3,
                title: 'FOLK',
                image: require('../images/artworks/picThree.jpg')
            },
            {
                id: 4,
                title: 'POP',
                image: require('../images/artworks/picFour.jpg')
            },
            {
                id: 5,
                title: 'REGGAE',
                image: require('../images/artworks/picFive.jpg')
            },
            {
                id: 6,
                title: 'HIP-HOP',
                image: require('../images/artworks/picSix.jpg')
            }
        ]
    }

    render() {
        // creating a state variable
        const { artworks } = this.state

        return (
            <View className="items-center">
                { 
                    // looping through the artworks
                    artworks.map(el => {
                        return (
                            <TouchableOpacity 
                            key={el.id}
                            onPress={this._onPressButton}
                            className="shadow-2xl"
                            >
                                <Image
                                    source={el.image}
                                    className="w-10 h-10 m-4 shadow-xl rounded"
                                    style={styles.thumbnails}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
 
}

// styles
const styles = StyleSheet.create({
    thumbnailContainer: {
        height: 100,
    },
    thumbnails: {
        // elevation:4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "red",
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }
})

export default Songs;