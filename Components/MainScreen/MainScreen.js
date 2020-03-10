import React from 'react';
import {
    View,
    Text,
    Button,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements'


class App extends React.Component {
    state = {
        userName : ''
    }

    render() {
        const navigation = this.props.navigation
        return (
            <ImageBackground source={require('../../src/BACKGROUND.png')} resizeMode='cover' style={{ width: '100%', height: '100%', flex: 1 }}>
                <StatusBar hidden />
                <View style={{ marginTop: 150, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 81 }}>Hi!</Text>
                    <Text style={{ fontWeight: '100', letterSpacing: 5, marginTop: 15, fontSize: 15 }}>Enter{'\n'}to your{'\n'}nick name</Text>
                </View>
                <View style={{ marginTop: 144, alignItems: 'center', justifyContent: 'space-between', flex: 0.5 }}>
                    <View style={styles.inputElement}>
                        <View style={{ marginLeft: 16, marginTop: 4 }}>
                            <Icon
                                name='person-outline'
                                size={36}
                            />
                        </View>
                        <TextInput
                            style={{ width: '70%', marginLeft: 'auto' }}
                            placeholder='Jack'
                            onChangeText = {(value)=>this.setState({userName:value})}
                        />
                    </View>
                    <TouchableOpacity
                    onPress = {()=>navigation.navigate('Choose',{userName : this.state.userName})}
                        style={styles.goChatButton}>
                        <Text style={{ padding: 8, color: '#B29292', fontWeight: 'bold', marginLeft: 16, marginTop: 4, fontSize: 16 }}>GO TO CHAT</Text>
                        <View style={{ marginLeft: 'auto', justifyContent: 'center', width: 50 }}>
                            <Icon
                                name='arrow-forward'
                                size={36}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
};

const styles = StyleSheet.create({
    inputElement: {
        backgroundColor: 'white',
        borderRadius: 180,
        flexDirection: 'row',
        width: '70%',
        shadowOpacity: 0.46,
        shadowColor: '#000',
        shadowOffset: { height: 5, width: 0 },
        shadowRadius: 11.14,
        elevation: 10
    },
    goChatButton: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 180,
        flexDirection: 'row',
        borderColor: '#F6DF8B',
        borderWidth: 1,
        marginTop: 121,
        width: '50%',
        shadowOpacity: 0.26,
        shadowColor: '#000',
        shadowOffset: { height: 5, width: 0 },
        shadowRadius: 11.14,
        elevation: 4
    }
})

export default App;
