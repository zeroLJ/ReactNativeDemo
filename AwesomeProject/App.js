/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// import React, { Component } from 'react';
// import { Text } from 'react-native';
// import { Image, View } from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//   	let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };

//     return (
//     	<View>
//  			<Text>Hello world!</Text>
//  			<Text>Hello world!</Text>
//       		// <Image source={pic} style={{width: 193, height: 110}}/>
//     	</view>
     
//     );
//   }
// }
//

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View,ScrollView } from 'react-native';
import Hello from "./js/Hello";
import Test2 from "./js/Test2";
import Test3 from "./js/Test3";
import TabBarItem from "./js/navigator/TabBarItem";
import FlatListBasics from "./js/FlatListBasics";
import SectionListBasics from "./js/SectionListBasics";
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import MainScreen from "./js/navigator/MainScreen";



// const M = StackNavigator(
//
//     {
//         // Tab:{screen:Tab},
//         // Product:{screen:Test3}
//         screen:Tab
//     },
//
//     {
//         navigationOptions:{
//             title:"222",
//             headerBackTitle:"返回",
//             headerTintColor:'#111111',
//             showIcon:false,
//             swipeEnabled:false,
//             animationEnabled:false,
//         },
//
//         mode:'card',
//     });




export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '',text2:'22222'};
    }
      render() {
         return (
//             <Text style={{padding: 10, fontSize: 42}}>呵呵</Text>
             /*<View style={{padding: 10}}>
                 <Hello
                    // name="小明"
                 />
                 <Test2/>
                 <Test3/>
                 <TextInput
                     style={{padding:0}}
                     underlineColorAndroid="transparent"
                     onChangeText={(text)=>{
                     this.setState({text:text})
                 }}/>
                 <Text>{this.state.text2}</Text>

             </View>*/


             <MainScreen/>
         );
      }
}

