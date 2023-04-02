import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text ,TextInput,Pressable, Alert,Keyboard,TouchableWithoutFeedback } from "react-native";
import { Globalstyles } from "../Styles/global";
import MaterialButtonDanger from "../components/matbutton";
import axios from 'axios';
import {user1} from './Feed';
import {BackHandler} from 'react-native';

// import { myState } from "./Feed";
// import { Text     Input } from "react-native-gesture-handler";

// let a=abc
// const tah = ()=> a

let globaldata =[]
let globalusername=''


export default function Transaction(props) {

  useEffect(() => {

    const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
              return true;
            },
          );
          return () => backHandler.remove();
    });
    
  const [username1,setuser]=useState()
  const [id1,setid]=useState()
  // console.log(username);
  
const data1={
  username: username1,
  id: id1
  
}
function handle({navigation}){
  console.log(data1);
  axios.post('http://192.168.18.99:3000/verifytrans',{data1})
  .then(response => {

      // console.log('new resp'+JSON.stringify(response.data));
      
      console.log("RES IS: "+response.data);
if(response.data=='00')
{
  Alert.alert("Invalid Username","Please Enter Valid Username")
}
else if(response.data=='0')
{
  Alert.alert("No Transaction Found!","Please Make Sure you have done the transaction and entered correct TRX ID")
}
else if(response.data=='1')
{
  Alert.alert("Verification Sucessfull!","Your Transation has been verified Sucessfully now you can acesss all the details! Thanks!")
  navigation.navigate('Feed');

}
else
{
  Alert.alert("Network Error!","Cant connect to Server!")
}


      // const data = JSON.stringify(response);
      
      
  })
  .catch(error => {
      console.log(error);
});
}
  // const newf = JSON.stringify(user);
  // console.log(user);
 
  return (
      
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      {/* <View style={styles.rect}>
        <Text style={styles.transferAmount}>Transfer Amount</Text>
      </View> */}
      <Text style={styles.note}>NOTE</Text>
      <Text style={styles.loremIpsum}>
        1. Please send amount for respective plan.{"\n"}2. After making payment
        verify your payment{"\n"} by entering easypaida TID (Trasaction ID) in{" "}
        {"\n"} transations section.{"\n"}3. After verification your account will
        be approved.{"\n"}4. Only Easypaisa transactions are supported yet.
      </Text>
     
     
        
        <TextInput onChangeText={(text) => setuser(text)}
        style={styles.input1}
               
        placeholder="Username"  ></TextInput>

        <TextInput onChangeText={(text) => setid(text)} keyboardType="numeric" placeholder="Easypaisa Transaction ID" style={styles.input1}></TextInput>
        
   
      {/* <Text style={styles.easypaisaAccount}>EASYPAISA ACCOUNT</Text> */}
      <View style={Globalstyles.imgcontainer}>
              <Pressable style={Globalstyles.profButton}  onPress={handle} >
                <Text style={Globalstyles.buttontext}>Verify </Text>
              </Pressable>
              </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  rect: {
    width: 167,
    height: 40,
    backgroundColor: "#EF3D4E",
    marginTop: 50,
    // marginLeft: 104
  },
  transferAmount: {
   
    color: "#FFF",
    fontSize: 20,
    marginTop: 8,
    marginLeft: 8,
    fontWeight:600,
  },
  note: {
   
    color: "black",
    fontWeight:'bold',
    fontSize:24,
    // marginTop: 10,
    // marginLeft: 170
  },
  loremIpsum: {
    
    color: "#121212",
    marginTop: 15,
    // marginLeft: 33
  },
 
  input1:{
    borderWidth:1,
    borderColor:'#ddd',
    backgroundColor:'#ddd',
    padding:10,
    fontSize:18,
    borderRadius:6, 
    width:320,
    marginBottom:20,
    marginTop:20,
},
});

