import firebase from 'firebase'

class Fire {
    constructor() {
        this.init()
        this.observeAuth()
    }
    init = () => {
        var firebaseConfig = {
            apiKey: "AIzaSyATE7KRDNUvs_cAv75212ndGzEGNQpwsOg",
            authDomain: "whatsappcloud-9fd23.firebaseapp.com",
            databaseURL: "https://whatsappcloud-9fd23.firebaseio.com",
            projectId: "whatsappcloud-9fd23",
            storageBucket: "whatsappcloud-9fd23.appspot.com",
            messagingSenderId: "411690760684",
            appId: "1:411690760684:web:d08117df0763c8e2e328c9",
            measurementId: "G-YJYZM6LJV4"
        };
        firebase.initializeApp(firebaseConfig)
        
    }
    observeAuth = () => firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    onAuthStateChanged = user => {
        if (!user) {
            try {
                firebase.auth().signInAnonymously()
            } catch ({ message }) {
                alert(message)
            }
        }
    }
    get uid(){
        return(firebase.auth().currentUser || {}).uid
    }
    get refMessages(){
        return firebase.database().ref('messages')
    }
    get refEglenceMessages(){
        return firebase.database().ref('EglenceMessages')
    }
    get refOkulMessages(){
        return firebase.database().ref('OkulMessages')
    }
    get refEtkinlikMessages(){
        return firebase.database().ref('EtkinlikMessages')
    }
    get refIngilizceMessages(){
        return firebase.database().ref('IngilizceMessages')
    }
    get refUser(){
        return firebase.database().ref('users')
    }
    get timestamp(){
        return firebase.database.ServerValue.TIMESTAMP
    }
    appendMessage = message => this.refMessages.push(message)
    appendUser = user => this.refUser.push(user)
    
    parse = snapshot => {
        console.log('dsadsa')
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
          _id,
          timestamp,
          text,
          user,
        };
        return message;
      };
    
      on = callback =>
      this.refMessages
        .limitToLast(20)
        .on('child_added', snapshot => callback(this.parse(snapshot)));

    sendMessage = messages =>{
        for(let i=0; i<messages.length; i++){
            const { text,user } = messages[i];
            const message = {
                text,
                user,
                timestamp : this.timestamp
            }
            this.appendMessage(message)
        }
    }

    offMessages = () =>{
        this.refMessages.off()
    }
    offUser = () =>{
        this.refUser.off()
    }
}
Fire.shared = new Fire()
export default Fire;
