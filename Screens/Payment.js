import React,{useEffect}from "react";
import { StyleSheet, View, Text,Pressable } from "react-native";
import MaterialButtonPink from "../components/matbutton";
import { ScrollView } from "react-native-gesture-handler";
import { Globalstyles } from '../Styles/global';
import {BackHandler} from 'react-native';


export default function Payment(props) {

  useEffect(() => {

    const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
              return true;
            },
          );
          return () => backHandler.remove();
    });


  return (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titletext}>MONTHLY PLAN</Text>
      <Text style={styles.offertext}>
        REGULAR PRICE: {"\t"}200 PKR{"\n"}OFFER PRICE:{"\t"} 100 PKR
      </Text>
      <View style={styles.buttoncontainer}>
            <Pressable style={styles.profButton}  onPress={() => setModalVisible(true)}>
              <Text style={Globalstyles.buttontext}  > Plan 1 </Text>
            </Pressable>
            </View>
            

            <Text style={styles.titletext}>3 MONTHS PLAN</Text>
            <Text style={styles.offertext}>
              REGULAR PRICE: 500 PKR{"\n"}OFFER PRICE :{"\t"} 200 PKR
            </Text>
            <View style={styles.buttoncontainer}>
                  <Pressable style={styles.profButton}  onPress={() => setModalVisible(true)}>
                    <Text style={Globalstyles.buttontext}  > Plan 2 </Text>
                  </Pressable>
            </View>

            <Text style={styles.titletext}>Half Year PLAN</Text>
            <Text style={styles.offertext}>
              REGULAR PRICE: 1000 PKR{"\n"}OFFER PRICE :{"\t"} 300 PKR
            </Text>
            <View style={styles.buttoncontainer}>
                  <Pressable style={styles.profButton}  onPress={() => setModalVisible(true)}>
                    <Text style={Globalstyles.buttontext}  > Plan 3 </Text>
                  </Pressable>
            </View>

            <Text style={styles.titletext}>12 Months PLAN</Text>
            <Text style={styles.offertext}>
              REGULAR PRICE: 1500 PKR{"\n"}OFFER PRICE :{"\t"} 500 PKR
            </Text>
            <View style={styles.buttoncontainer}>
                  <Pressable style={styles.profButton1}  onPress={() => setModalVisible(true)}>
                    <Text style={Globalstyles.buttontext}  > Plan 4 </Text>
                  </Pressable>
            </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  titletext: {
    // fontFamily: "impact-regular",
    color: "black",
    fontWeight:'bold',
    fontSize: 20,
    marginTop: 20,
    // marginLeft: 94
  },
  offertext: {
    // fontFamily: "roboto-700",
    color: "#333",
    fontSize: 15,
    marginTop: 10,
    // marginLeft: 71
  },
  profButton:{
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    width:150,
    elevation: 3,
    backgroundColor: '#EF3D4E',
  },
  profButton1:{
    marginTop:30,
    marginBottom:50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    width:150,
    elevation: 3,
    backgroundColor: '#EF3D4E',
  }
});