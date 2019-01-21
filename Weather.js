import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {LinearGradient} from "expo";
import LinearGradient from 'react-native-linear-gradient';
//import { MaterialCommunityIcons } from "@expo/vector-icons";
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from "prop-types";

const WeatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "비가오니 우울해져요",
    subtitle: "비가오면 막걸리에 파전 환장조합....",
    icon: "ios-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "오늘 날씨가 맑으니까 기분 굿",
    subtitle: "맑은 날에는 참치회에 소주한잔이 딱이죠",
    icon: "ios-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "번개가 치는날이니 방콕하세요",
    subtitle: "치맥하면서 번개를 감상해요~",
    icon: "ios-thunderstorm"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "구름낀 하늘을 보면 우울해져요",
    subtitle: "우울할땐 매콤함 쭈꾸미삼겹살에 소주한잔이죠 크핫!!! ",
    icon: "ios-cloud"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "눈이오니 감기조심하세요",
    subtitle: "Do you want to build a snowman?~~~ feat:겨울왕국",
    icon: "ios-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "안개가 심하니 운전조심해요",
    subtitle: "앞이 안보일때는 족발 보쌈~",
    icon: "ios-umbrella"
  },
  Haze: {
    colors: ["#78F7AE", "#55A6DD"],
    title: "What is Haze??? ",
    subtitle: "Haze is Wine",
    icon: "ios-cloud-done"
  }
}

function Weather({ weatherName, temp }) {
  return (
      <LinearGradient colors={WeatherCases[weatherName].colors} style={styles.container}>
        <View style={styles.upper}>
          <Icon color="white" size={144} name={WeatherCases[weatherName].icon} />
          <Text style={styles.temp}>{temp}도</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>{WeatherCases[weatherName].title}</Text>
          <Text style={styles.subtitle}>{WeatherCases[weatherName].subtitle}</Text>
        </View>
      </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create ({
  container: {
    flex: 1
  },
  upper: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  temp: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 10
  },
  lower: {
    flex:1,
    alignItems:'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  title:{
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle:{
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 124
  }
})
