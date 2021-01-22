import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Alert ,TouchableOpacity, Key, Image   } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';




export default class App extends React.Component {

   state = {
       inputvalue: '',
       todos: []

   }
   
   onPress = () => {}
  
   changetext = value => {
     this.setState({
       inputvalue : value
     })
   }

  additem = () => {
    if (this.state.inputvalue !=='') {
      this.setState(prevState => {
      const newToDo = {
       title: this.state.inputvalue,
       createdAt:Date.now()
      };
      var todos = this.state.todos.concat(newToDo);
      this.setState({
       todos:todos
      });

      });

      }
    }
   
  render () {

    const todos = this.state.todos.reverse().map ((todo,key) =>
   
    <View>
  <Text
    style ={styles.tocolor}

  > {todo.title} </Text>
    </View>
    )
     
     return (   
       
     
    <LinearGradient
      colors={['#660066', '#ffb3ff']} style={{ flex:1 }}>
      <StatusBar barstyle="light-content" />  
 
      <View>
              <TextInput
     style={styles.input}
     onSubmitEditing={this.additem}
      placeholder="Type Here to Add ToDo Notes."
      placeholderTextColor={'#bfbfbf'}
      multiline={true}
      autoCapitalize="sentences"
      underlineColorAndroid="transperent"
      selectionColor={'white'}
      maxLength={30}
      returnKeyType="done"
      autoCorrect={false}
      blurOnSubmit={true}
      value = {this.state.inputvalue}
      onChangeText = {this.changetext}
      />

      <View
        style ={styles.todocolor}
      >

       {todos}
      </View>


       <Button
        style={styles.button}
        title="Add ToDO"
        onPress={() => todo.title('Your ToDo Submit to the list')}
      />

      <Image
          style={styles.applogo}
          source={{uri: 'https://amdt.lk/wp-content/uploads/amdt_logo.png'}}
        />

      <View>
      <Text 
      style ={styles.logo}
      >
      ToDo Notes
      </Text>
      </View>

<TextInput
      
    />
          </View>
         
         </LinearGradient>
   
    );

  } 

}

const styles = StyleSheet.create({

  container: {
     flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 50,
  },
  
  input: 
    {
     marginTop: 80,
     marginVertical: 40,
     paddingEnd: 10,
     paddingRight: 15,
     paddingLeft: 15,
     fontSize: 20,
     backgroundColor: "#f2f2f2",
     color:"#404040",
     fontWeight: '500',
     textAlign: "center"
    },

   button:
   {
     backgroundColor: 'white'
   },

   applogo:{
      width: 100,
      height: 150,
      marginTop: 120,
      paddingLeft:250,
      alignContent: "center"
      
   },

   logo:{
     
     paddingLeft:90,
   },

   todocolor:{
     color:'white'
   },
   tocolor:{
     color: 'white',
     fontSize: 20,
   }
   
})