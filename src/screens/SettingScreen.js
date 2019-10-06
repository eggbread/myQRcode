import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Picker } from "react-native";

class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 60,
      chance: 3
    };
  }
  render() {
    return (
      <View>
        <View>
          <Text>시간변경</Text>
          <Picker
            selectedValue={this.state.time}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ time: itemValue })
            }
          >
            <Picker.Item label="60" value={60} />
            <Picker.Item label="70" value={70} />
            <Picker.Item label="80" value={80} />
            <Picker.Item label="90" value={90} />
            <Picker.Item label="100" value={100} />
          </Picker>
        </View>

        <Text>실패 횟수 설정</Text>
        <Picker
          selectedValue={this.state.chance}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ chance: itemValue })
          }
        >
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
          <Picker.Item label="5" value={5} />
        </Picker>
        <Button
          title="설정 저장"
          onPress={() =>
            this.props.navigation.navigate("List", { time: this.state.time })
          }
        />
      </View>
    );
  }
}

export default SettingScreen;
