import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,TextInput,Button,FlatList,Picker} from "react-native"
import QRCode from "react-native-qrcode"
import {FontAwesome} from "@expo/vector-icons"

class DoorScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            sirial:["D0001","D0002","D0003","D0004"],
            name:"",
            type:"home",
            number:"",
        }
    }
    render(){ 
        return(
            <View>
                <View>
                    <Text>이름</Text>
                    <TextInput onChangeText={(value)=>{this.setState({name:value})}}/>
                </View>
                <View>
                    <Text>종류</Text>
                    <Picker
                    selectedValue={this.state.type}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({type: itemValue})
                    }>
                        <Picker.Item label="집" value="home"/>
                        <Picker.Item label="사무실" value="building"/>
                        <Picker.Item label="기타" value="guitar"/>
                    </Picker>
                    
                </View>
                <View>
                    <Text>고유번호</Text>
                    <TextInput onEndEditing={()=>{
                        found=false;
                        switch(this.state.number){
                            case this.state.sirial[0]:
                            case this.state.sirial[1]:
                            case this.state.sirial[2]:
                            case this.state.sirial[3]:
                                alert("일치하는 고유번호가 있습니다.")
                                break;
                            default:
                                alert("일치하는 고유번호가 없습니다.")
                                                            
                        }
                    }}
                    onChangeText={(value)=>this.setState({number:value})}
                    />
                </View>
                <Button title="생성하기" onPress={()=>{this.props.navigation.navigate("List",{name:this.state.name,type:this.state.type})}}/>
            </View>
        );
    }
    
}

export default DoorScreen;