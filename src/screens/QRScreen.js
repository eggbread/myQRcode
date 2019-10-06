import React, { Component } from "react";
import {
  Text,
  View,
  Share,
  StyleSheet,
  TouchableOpacity,
  Picker,
  Dimensions,
  Button,
  FlatList
} from "react-native";
import QRCode from "react-native-qrcode";
import { Feather } from "@expo/vector-icons";
import ProgressBar from "react-native-progress-bar-animated";
import * as Sharing from 'expo-sharing'
// import { pathToFileURL } from "url";
import * as FileSystem from "expo-file-system"
class QRScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "https://www.google.com",
      time: 0,
      max:this.props.navigation.state.params.time,
      qrcode:''
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  }

  render() {
    return (
      <View>
        <QRCode value={this.state.text1} size={200} bgColor={"#9c32fe"}/>
        
        <Text>{this.state.time}/{this.state.max}</Text>
        <ProgressBar
          value={this.state.time}
          maxValue={100}
          width={Dimensions.get("screen").width - 30}
        />
        <Button
          title="공유하기"
          onPress={() => {
            //   FileSystem.getInfoAsync("./qrcode.PNG").then(uri=>{
            //       console.log(uri)
            //   })
           Share.share({
               message:"https://cdn.qrstuff.com/images/default_qrcode.png"
           })
          }}
        />
      </View>
    );
  }
}

// QRScreen.navigationOptions = ({ navigation }) => {
//   return {
//     headerRight: (
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate("Setting");
//         }}
//       >
//         <Feather name="settings" size={30} />
//       </TouchableOpacity>
//     )
//   };
// };
export default QRScreen;
