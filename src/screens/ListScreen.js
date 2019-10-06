import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
  Image
} from "react-native";
import QRCode from "react-native-qrcode";
import { FontAwesome ,Feather} from "@expo/vector-icons";

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ name: "집", type: "home" },{ name: "사무실", type: "building" }],
      time:60
    };
  }
    componentWillReceiveProps(next){
      if(next.navigation.state.params.time){
        this.setState({time:next.navigation.state.params.time})
      }
      if(next.navigation.state.params.name){
        var data=this.state.data
        this.setState({
          data:data.concat({ name: next.navigation.state.params.name, type: next.navigation.state.params.type })
        })
      }
    }

  render() {

    console.log(this.state.time);
    return (
      <View>
        <View>
          <FlatList
            data={this.state.data}
            keyExtractor={result => result.name}
            renderItem={({ item }) => {
              console.log(item)
              return (
                <View style={{marginBottom:15,flex:1,alignItems:"center"}}>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("QR", { value: item.type,time:this.state.time })
                  }
                  >
                  <Image source={require("../../assets/qrcode.png")} style={{width:100,height:100}}/>
                </TouchableOpacity>
                  <Text>{item.name}</Text>
                  </View>
              );
            }}
          />

        </View>
        <Button
          title="QR코드 추가하기"
          onPress={() => this.props.navigation.navigate("Door")}
        />
      </View>
    );
  }
}
ListScreen.navigationOptions=({navigation})=>{
  return{
      headerRight:(
          <TouchableOpacity onPress={()=>{navigation.navigate("Setting")}}>
              <Feather name="settings" size={30}/>
          </TouchableOpacity>
      )
  }
}
export default ListScreen;
