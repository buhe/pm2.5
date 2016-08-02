/**
 * Created by buhe on 16/6/2.
 */

import React ,{Component}from 'react';
import ReactNative from 'react-native-desktop';
const {
    AppRegistry,
    StyleSheet,
  //Text,
    Image,
    View,
    Dimensions,
    ScrollView,
    } = ReactNative;

import Base from 'native-base-desktop';
//import CheckBox from 'react-native-checkbox';
//import { Col, Row, Grid } from "react-native-easy-grid";  TODO

const {List,ListItem,CheckBox,Button,Text,H1,Switch,Badge,Container,Content,Header,Title,Footer,Card,CardItem,Thumbnail, InputGroup, Input} = Base;
var deviceScreen = Dimensions.get('window');

import {observer} from 'mobx-react/native';

class CityItem extends Component {
  constructor(props){
    super();
  }


  render() {
    return (
        <View style={{flexDirection:'column'}}>
          <View><Text>{ this.props.city.c+" | "+ this.props.city.p}</Text></View>
          <View style={{borderBottomColor:'gray', borderBottomWidth:1}}></View>
          <View style={{flexDirection:'row'}}>
            <View><Text style={{fontSize:60, paddingTop:40}}>{this.props.aqi.get(this.props.city.c)}</Text></View>
            <View><Text>全市</Text><View style={{backgroundColor:'green'}}><Text>空气质量优</Text></View></View>
          </View>
          <View><Text>PM 2.5 16 PM10 31 0 57</Text></View>
        </View>)
  }
}

@observer class App extends Component {
  constructor(props) {
    super();
    //this.state = {
    //  check: true
    //}
    //props.store.fetchCurrentPM25();
  }

  componentWillReact() {
    console.log("I will re-render, since the todo has changed!");
  }

  fetch() {
    //this.props.store.fetch();
    //this.props.store.getCitiesList();
    this.props.store.fetchCurrentPM25();
  }

  render() {
    let aqi = this.props.store.aqi;
    let citiesList = this.props.store.cities.map((city)=>{
      let cityName = city.c;
      return <CityItem
                aqi={aqi}
                city={city}
              />;
    });

    return (
        <Container>
          <Header>
            <Button transparent>
              <Title>菜单</Title>
            </Button>
            <Title>空气质量</Title>
            <Button onPress={this.fetch.bind(this)}><Title>刷新</Title></Button>
          </Header>
          <Content style={{backgroundColor:'white',width:800}}>
            <ScrollView>
              <Text>{this.props.store.cities.length}</Text>
              <Text>{JSON.stringify(this.props.store.aqi)}</Text>
              {citiesList}
            </ScrollView>
          </Content>
        </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
