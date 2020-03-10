import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native'
import RadioButton from '../CustomRadioButton/RadioButton'

const options = [
    {
        key: 'Eglence',
        text: 'Eğlence',
    },
    {
        key: 'Okul',
        text: 'Okul',
    },
    {
        key: 'Etkinlik',
        text: 'Etkinlik',
    },
    {
        key: 'Ingilizce',
        text: 'İngilizce',
    }
];

class Choose extends React.Component {
    state = {
        currentChoose : ''
    }
    currentChoose = (key) =>{
        this.setState({
            currentChoose:key
        })
    }
    render() {
        const navigation = this.props.navigation
        return (
            <ImageBackground source={require('../../src/BACKGROUND.png')} resizeMode='cover' style={{ width: '100%', height: '100%' }}>
                <View
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 36 }}>
                    <StatusBar hidden />
                    <View style={{ width: '100%' }}>
                        <RadioButton options={options} currentChoose = {(key)=>this.currentChoose(key)}/>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity
                        onPress = {()=>navigation.navigate('Chat',{radioChoose:this.state.currentChoose})}
                            style={{ backgroundColor: '#35D467', width: '50%', height: 49, alignItems: 'center', justifyContent: 'center', borderRadius: 180 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'white' }}>START</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}
export default Choose