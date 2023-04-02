
import { StyleSheet, Text, View,Image,ScrollView,Pressable} from 'react-native';
import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useRoute } from "@react-navigation/native";
import MaterialCard from '../components/card';
import {BackHandler} from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

let globalusername=''
let globaldata =[]

axios.post('http://192.168.18.99:3000/card')
  .then(response => {

      // console.log('new resp'+JSON.stringify(response.data));
      
      // console.log(response.data[2]);

      // const data = JSON.stringify(response);
      // console.log(response.data.length);s
       globaldata = [...response.data];
       
      //  console.log(globaldata);
      
  })
  .catch(error => {
      console.log(error);
});
 
export default function Feed({navigation}) {

// const [globalusername,setun]=useState('')
  useEffect(() => {

    const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
              return true;
            },
          );
          return () => backHandler.remove();
    });
  
  // const [value, setValue] = myState;
console.log(globaldata);


  const route = useRoute()
  const formdata = route.params?.formData;
  const newf = JSON.stringify(formdata);
  let jsonObject;

if(newf!= null){
   jsonObject = JSON.parse(newf);
   let key = "username";
  globalusername=jsonObject[key];
}
    console.log('newf'+newf);
  //   
  // AsyncStorage.setItem('Displayprof',JSON.stringify({formdata}));

  console.log('username: '+globalusername);
   
    // var abc=globalusername;
    
    //  console.log('Glovaluser:' + globalusername);
    // globaldata=globaldata.reverse()
    for(let i=0;i<globaldata.length;i++)
    {
      if(globaldata[i].username==globalusername)
      {
       globaldata.splice(i,1)
      }
    }
    console.log(globaldata);
  return (
    
    <View style={styles.body}>  
   
    
    
    
    <ScrollView>
      
    
    {globaldata.map( item =>(
      <MaterialCard data={item} navigation={navigation}/>
    ))}

  
  
       
      

  {/* <MaterialCard12 data={''} />
  <MaterialCard12 data={''} />
  <MaterialCard12  data={''}/> */}
  </ScrollView>

  </View> 

  );

}

const styles = StyleSheet.create({
  body: {
    // marginTop:50,
    // backgroundColor:'#EF3D4E',
 },
 actionButton1: {
   padding: 0,
   height: 36,
   justifyContent:"center",
   color: '#FFFFFF',
   fontSize:15
   
   
 },
 actionText1: {
  fontSize: 13,
  backgroundColor: '#EF3D4E',
paddingRight: 7,
paddingBottom: 6,

paddingTop: 6,
paddingLeft: 7,
borderRadius:25,
// fontWeight: "500",
  color: "#FFFFFF",
  opacity: 1,

alignSelf:'center'
  
},
})

