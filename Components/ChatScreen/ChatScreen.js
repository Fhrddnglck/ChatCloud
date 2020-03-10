import React, { Component } from 'react'
import { View, Text, Button, ImageBackground, Image } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from '../../Fire'

var userNamem = ''
class ChatScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || 'Chat!',
    });

    state = {
        messages: [],
    }

    get user() {
        return {
            _id: Fire.shared.uid,
            name: userNamem
        };
    }

    render() {
        return (
            <ImageBackground
                source={require('../../src/CHATBACKGROUND.png')} resizeMode='cover' style={{ width: '100%', height: '100%', flex: 1 }}
            >
                <GiftedChat
                    messages={this.state.messages}
                    onSend={Fire.shared.sendMessage}
                    user={this.user}
                    renderUsernameOnMessage={true}
                />
            </ImageBackground>
        )
    }

    componentDidMount() {
        const route = this.props.route
        const { radioChoose,userName } = route.params
        userNamem = userName
        Fire.shared.on(radioChoose,(message) =>{
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        })
    }
    componentWillUnmount() {
        Fire.shared.offMessages();
    }

}


export default ChatScreen;