import React, { Component } from 'react';
import { Text,View,StyleSheet,Button,TextInput} from 'react-native'

class LoginScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          userId: "",
          userPw: "",
          user:{
              userId:"admin",
              userPw:"admin"
          }
        };
      }
      render(){
          return(
              <View>
                  <View>
                    <Text>아이디</Text>
                    <TextInput onChangeText={(value)=>{this.setState({userId:value})}}/>
                  </View>
                  <View>
                  <Text>비밀번호</Text>
                    <TextInput onChangeText={(value)=>{this.setState({userPw:value})}}/>
                  </View>
                
                  <Button title="로그인" onPress={()=>{
                    if(this.state.userId===this.state.user.userId&&this.state.userPw===this.state.user.userPw){
                      this.props.navigation.navigate("List")
                    }else{
                      alert("일치하지않습니다")
                    }
                  }}/>
                  <Button title="회원가입" onPress={()=>this.props.navigation.navigate("Signup")} />
                 
              </View>
          )
      }
}

export default LoginScreen