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

@observer class CityItem extends Component {


  render() {
    return (
        <View style={{flexDirection:'column'}}>
          <View><Text>{this.props.city['province']}</Text></View>
          <View style={{borderBottomColor:'gray', borderBottomWidth:1}}></View>
          <View style={{flexDirection:'row'}}>
            <View><Text style={{fontSize:60, paddingTop:40}}>35</Text></View>
            <View><Text>全市</Text><View style={{backgroundColor:'green'}}><Text>空气质量优</Text></View></View>
          </View>
          <View><Text>PM 2.5 16 PM10 31 0 57</Text></View>
        </View>)
  }
}

@observer class App extends Component {
  constructor() {
    super();
    //this.state = {
    //  check: true
    //}
  }

  fetch() {
    this.props.store.fetch();
  }

  render() {
    let citiesList = this.props.store.cities.map((city)=>{
      return <CityItem
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
          <Content style={{backgroundColor:'white'}}>
            <ScrollView>
              <Text>{this.props.store.cities.length}</Text>
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
