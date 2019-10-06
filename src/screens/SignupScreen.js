import React, { Component } from 'react';
import { Text,View,StyleSheet,Button,TextInput} from 'react-native'

class SignupScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          userId: "",
          userPw: "",
          name: "",
        };
      }
      render(){
          return(
            <View>
                <View>
                    <Text>아이디</Text>
                    <TextInput/>
                  </View>
                  <View>
                  <Text>비밀번호</Text>
                    <TextInput/>
                  </View>
                  <View>
                  <Text>이름</Text>
                    <TextInput/>
                  </View>
                  <View>
                  <Text>전화번호</Text>
                    <TextInput/>
                  </View>
                  <Button title="회원가입" onPress={()=>this.props.navigation.navigate("Login")}/>
            </View>
          )
      }
}
export default SignupScreen;