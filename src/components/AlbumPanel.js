// album sections
import React, { Component } from 'react'
import { View, Text , Image, TouchableOpacity} from 'react-native-tailwind'
import { StyleSheet } from 'react-native'
require('isomorphic-fetch');
 
class Albums extends Component {

    // state 
    state = {
        count: 0,
        artworks: [
            // {
            //     id: '',
            //     title: '',
            //     image: ''
            // }
            // {
            //     id: 2,
            //     title: 'VINTAGE',
            //     image: require('../images/artworks/picTwo.jpg')
            // },
            // {
            //     id: 3,
            //     title: 'FOLK',
            //     image: require('../images/artworks/picThree.jpg')
            // },
            // {
            //     id: 4,
            //     title: 'POP',
            //     image: require('../images/artworks/picFour.jpg')
            // },
            // {
            //     id: 5,
            //     title: 'REGGAE',
            //     image: require('../images/artworks/picFive.jpg')
            // },
            // {
            //     id: 6,
            //     title: 'HIP-HOP',
            //     image: require('../images/artworks/picSix.jpg')
            // }
        ],
        dataSource: []
    }

    componentDidMount(){
        return fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=Eminem", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "088f16937fmsh1dbb97793450985p1bd25fjsn6163fb2da8d9"
                }
            })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                artworks: responseJson.data,
            })
            // , function(){
    
            // });
    
          })
          .catch((error) =>{
            console.error(error);
          });
    }

    onPress = () => {
        this.setState({
          count: this.state.count+1
        })
    }


    render() {
        // creating a state variable
        const { artworks } = this.state

        return (
            <View className="items-center p-4">
                {// looping through the artworks
                    artworks.map(el => {
                        return (
                            
                            <TouchableOpacity 
                                key={el.id}
                                onPress={this._onPressButton}
                                // className="shadow-xl z-40 border-gray-2"
                                // style={styles.thumbnails}
                            >
                                <Text className="pt-2 -ml-8 font-semibold"
                                    style={styles.title}>
                                    {el.album.title}
                                </Text>
                                <Image
                                    source= {{
                                        uri: `${el.album.cover}`,
                                    }}
                                    className="mt-3 mb-6 mt-4 rounded shadow-lg"
                                    // className="mt-3 mb-6 z-40 ml-4 mt-4 rounded shadow-lg"
                                    style={styles.bigPicContianer}
                                />
                                {/* <Image
                                    source={el.image}
                                    className="mb-6 z-20 ml-3 mt-8 rounded shadow-lg"
                                    style={styles.bigPicContianerTwo}
                                />
                                <Image
                                    source={el.image}
                                    className="mt-3 mb-6 z-0 ml-1 rounded shadow-lg"
                                    style={styles.bigPicContianerThree}
                                /> */}
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
 
}

const styles = StyleSheet.create({
    title: {
        marginLeft: -90
    },
    bigPicContianer: {
        width: 110,
        height: 150,
        borderRadius: 20,
        marginLeft: -80 
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
    // thumbnailContainer: {
    //     height: 100
    // },
    // thumbnails: {
    //     // elevation:4,
    //     shadowOffset: { width: 5, height: 5 },
    //     shadowColor: "red",
    //     shadowOpacity: 0.5,
    //     shadowRadius: 10,
    // }
})

export default Albums