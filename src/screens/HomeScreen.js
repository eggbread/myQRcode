import React, { Component } from 'react';
import {Text,View,StyleSheet,Button} from "react-native"

class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Text>QR</Text>
                <Button title="QR코드만들기" onPress={()=>this.props.navigation.navigate("QR")}></Button>
                <Button title="로그인" onPress={()=>this.props.navigation.navigate("Login")}/>
            </View>
        );
    }
    
}

export default HomeScreen;