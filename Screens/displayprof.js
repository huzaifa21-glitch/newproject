// import React from 'react';
import { Modal,Text, Image, View, StyleSheet,ScrollView, Alert,Pressable,Dimensions} from 'react-native';
import { Globalstyles } from '../Styles/global';
import axios from 'axios';
import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import {BackHandler} from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';


let globaldata =[]
var myd={
  name:'',
  age: '',
  work: "",
  hobbies: "",
  education: "",
  description: "",
  city: ""
}

export default function DisplayProf ({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
    // console.log("BEOFRE");
    const route = useRoute()
    const formdata = route.params?.data1
    // console.log("Display prof "+formdata);
    // const newf = JSON.stringify(formdata);
    //   console.log('display'+newf);
    
//     AsyncStorage.getItem('Feed').then(item => {
//       const list = JSON.parse(item);
//       console.log(list);
      
// })




      
      const data3={
        username:   formdata
        
      }
  //   render() {
    useEffect(() => {

      const backHandler = BackHandler.addEventListener(
              'hardwareBackPress',
              () => {
                return true;
              },
            );
            return () => backHandler.remove();
      });
  
  const [elite, setElite] = useState('')
  const [datax, setData] = useState(
    {
    //   name:'',
    // age: '',
    // work: "",
    // hobbies: "",
    // education: "",
    // description: "",
    // city: "",
    // phone:''


    }
  );

  useEffect(() => {


    axios.post('http://192.168.18.99:3000/displayprof',{data3},{maxContentLength: 1000000})
    .then(response => {
   
  // console.log("TOP");
  // console.log(response.data[0].description);
  // console.log("low");
        // console.log('new resp'+JSON.stringify(response.data));
        if(response.data=="0")
        {
          Alert.alert("Error!","Try Again Later!")
          console.log("NO DATA FOUND "+response.data);
        }
        else{
  
          // console.log("DATA CUM"+response.data);
          globaldata = [...response.data];
          // console.log(globaldata);
          globaldata[0].hobbies= globaldata[0].hobbies.replace(/\n/g, '');
          globaldata[0].hobbies= globaldata[0].hobbies.replace(',', ' ');

          myd={
            ...globaldata[0]
          }
          setData({
            ...globaldata[0]
          })
          setElite(globaldata[0].elite)
 
          // console.log(globaldata[0].description);
         
          
        }
        // console.log(response.data);
  
        // // const data = JSON.stringify(response);
        // console.log(response.data.length);
        //  globaldata = [...response.data];
        
    })
    .catch(error => {
        console.log(error);
  });





  }, []);
 
    // console.log("COMPLETED DONE");
    // console.log(datax.description);
   
     
    // console.log(myd);
// console.log(datax);

  
const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width;

    return (


      <View style={styles.container}>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Contact Details!</Text>
            <Text style={styles.modalText1}>Name: {datax.name}</Text>
            <Text style={styles.modalText1}>Phone No: {datax.phoneno} </Text>
            <Text style={styles.modalText1}>Email: {datax.email} </Text>
            
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    


       

      <View style={styles.containerx}>
      <ScrollView>
        <Image
          source={{
            uri:
              datax.profilepicurl,
          }}
          style={{ width: imageWidth, height: 300, borderBottomLeftRadius:50,borderBottomRightRadius:50,}}
        />
        <View style={styles.hobbiesContainer}>
        <Text style={Globalstyles.nameText}>{datax.name+","} </Text>
        <Text style={Globalstyles.ageText}>{datax.age} </Text>
        
        </View>
        <View style={styles.workContainer}>
        <Image source={require("../assets/work.png")}
            style={styles.image}></Image>
        <Text style={Globalstyles.eduText}>{datax.work}</Text>
        </View>
        <View style={styles.workContainer}>
        <Image source={require("../assets/edu.png")}
            style={styles.image}></Image>
        <Text style={Globalstyles.eduText}>{datax.education}</Text>
        </View>
        <View style={styles.workContainer}>
        <Image source={require("../assets/location.png")}
            style={styles.image}></Image>
        <Text style={Globalstyles.eduText}>{datax.city}</Text>
        </View>
        <Text style={Globalstyles.aboutText}>Hobbies</Text>
        <View style={styles.hobbiesContainer}> 
            <Text style={Globalstyles.hobbiesText}>{datax.hobbies}</Text>
            
        </View>
        <View style={Globalstyles.aboutcontainer}>
        <Text style={Globalstyles.aboutText}>About</Text> 

        <Text  style={styles.descText}>{datax.description}</Text>
        </View>
        <View style={styles.buttoncontainer}>
            <Pressable style={Globalstyles.profButton}  onPress={() => {
             if(datax.elite=='1')
           
             setModalVisible(true)
           
             else
             Alert.alert("Buy a Plan!", "Please Subscribe to plan to see contact details!")
            
            }
            }>
              <Text style={Globalstyles.buttontext}  > Get Contact </Text>
            </Pressable>
            </View>

        </ScrollView>
      </View>









       
      </View>
   
  
    );
    
  }
// }

const styles = StyleSheet.create({
  
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    width: 70
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:25,
    fontWeight:'700',

  },
  modalText1: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:16,
  },


  containerx: {
    // marginTop:20,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  hobbiesContainer:{
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop: 10,
  },
  workContainer:{
    marginTop:5,
    flexDirection:'row',
  },
  image:{
    marginLeft:10,
    height:20,
    width:20,
  },
  descText:{
    color: "#121212",
    fontSize: 16,
    marginTop:10,
    fontWeight:'500',
    marginLeft:10,
    marginRight:10,
    // fontFamily:'sans-Regular'
  },
  buttoncontainer:{
    alignItems: 'center',
    marginBottom:40
  },
  container: {
    // marginTop:20,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  hobbiesContainer:{
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop: 10,
  },
  workContainer:{
    marginTop:5,
    flexDirection:'row',
  },
  image:{
    marginLeft:10,
    height:20,
    width:20,
  },
  descText:{
    color: "#121212",
    fontSize: 16,
    marginTop:10,
    fontWeight:'500',
    marginLeft:10,
    marginRight:10,
    // fontFamily:'sans-Regular'
  },
  buttoncontainer:{
    alignItems: 'center',
    marginBottom:40
}
});