import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const Listagem = (props) => {

    const [id_user, setIdUser] = useState()

    var url = 'https://danielapi.herokuapp.com/public_html/api';
    axios.get(url+'/user/'+props.login)
    .then(function (res) {
        setIdUser(res.data['data']['id'])
        console.log(res.data['data']['username'])
    }
    )
    
    var url = 'https://danielapi.herokuapp.com/public_html/api';
    axios.get(url+'/transaction/'+id_user)
    .then((res) => {
        console.log(res.data['data'])
    })

    

    return (
        <View style={styles.wrap}>
           
            <View style={styles.subheader}>
                <View style={styles.coluna2}>
                    <Text style={styles.userbar}>Olá, {props.login}!</Text>
                </View>
                <View style={styles.coluna2}>
                    <Text style={styles.saldo}>R$ 00,00</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
  wrap: {
    width:'100%', 
    alignItems: 'center',
  },
  subheader: {
      flexDirection: "row",
  },
  coluna2: {
      width:'50%',
      alignSelf: "flex-start",
      textAlign:'center',
      alignItems: 'center',
      backgroundColor:'white',
      paddingRight:5,
  },
  userbar: {
      backgroundColor:'white',
      textAlign:'center',
      width:'100%',
      padding:10,
      fontWeight:'bold',
      fontSize:16,
  },
  saldo: {
    color:'white',
    backgroundColor:'green',
    textAlign:'center',
    width:'100%',
    padding:5,
    margin:5,
    fontWeight:'bold',
    fontSize:16,
    borderRadius:5,
  }


});

export default Listagem;