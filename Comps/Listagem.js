import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';

const Listagem = (props) => {

    const [id_user, setIdUser] = useState()
    const [entrada, setEntradas] = useState({entradas: []});    

    var url = 'https://danielapi.herokuapp.com/public_html/api';
    axios.get(url+'/user/'+props.login)
    .then(function (res) {
        setIdUser(res.data['data']['id'])
        //console.log(res.data)
    }
    )
    
    var url = 'https://danielapi.herokuapp.com/public_html/api';
    axios.get(url+'/transaction/'+id_user)
    .then((res) => {

        for (let i=0; i < (res.data['data']).length; i++) {

            const id_trans = res.data['data'][i]['id'];
            const desc = res.data['data'][i]['description'];
            const valor = res.data['data'][i]['value_u'];
            const data = res.data['data'][i]['updated_at'];
            const tipo = res.data['data'][i]['type'];

            setEntradas({ entradas: [...entrada,
                {id: id_trans, valor: valor, desc: desc, tipo: tipo, horario: data }
            ]})
        }

        console.log(entrada)
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

            <ScrollView>
              <View style={styles.card}>
                <Text style={styles.descCard}>Exemplo da Transação</Text>
                <Text>
                    R$ 50,00
                </Text>
                <Text>
                    05/06/2022 14:15:34
                </Text>
              </View>

              
              <View style={styles.card}>
                <Text style={styles.descCard}>Exemplo da Transação</Text>
                <Text>
                    R$ 50,00
                </Text>
                <Text>
                    05/06/2022 14:15:34
                </Text>
              </View>

              
              <View style={styles.card}>
                <Text style={styles.descCard}>Exemplo da Transação</Text>
                <Text>
                    R$ 50,00
                </Text>
                <Text>
                    05/06/2022 14:15:34
                </Text>
              </View>

              
              <View style={styles.card}>
                <Text style={styles.descCard}>Exemplo da Transação</Text>
                <Text>
                    R$ 50,00
                </Text>
                <Text>
                    05/06/2022 14:15:34
                </Text>
              </View>

              
              <View style={styles.card}>
                <Text style={styles.descCard}>Exemplo da Transação</Text>
                <Text>
                    R$ 50,00
                </Text>
                <Text>
                    05/06/2022 14:15:34
                </Text>
              </View>

              
              <View style={styles.card}>
                <Text style={styles.descCard}>Exemplo da Transação</Text>
                <Text>
                    R$ 50,00
                </Text>
                <Text>
                    05/06/2022 14:15:34
                </Text>
              </View>

              
              <View style={styles.card}>
                <Text style={styles.descCard}>Exemplo da Transação</Text>
                <Text>
                    R$ 50,00
                </Text>
                <Text>
                    05/06/2022 14:15:34
                </Text>
              </View>

              
              <View style={styles.card}>
                <Text style={styles.descCard}>Exemplo da Transação</Text>
                <Text>
                    R$ 50,00
                </Text>
                <Text>
                    05/06/2022 14:15:34
                </Text>
              </View>

              
              <View style={styles.card}>
                <Text style={styles.descCard}>Exemplo da Transação</Text>
                <Text>
                    R$ 50,00
                </Text>
                <Text>
                    05/06/2022 14:15:34
                </Text>
              </View>

              
              <View style={styles.card}>
                <Text style={styles.descCard}>Exemplo da Transação</Text>
                <Text>
                    R$ 50,00
                </Text>
                <Text>
                    05/06/2022 14:15:34
                </Text>
              </View>

              <View style={{height:150}}></View>
            </ScrollView>

            <View style={styles.navbar}>
                <Text style={styles.textobranco}>MENU AQUI</Text>
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
  },
  card: {
      backgroundColor: '#FFF',
      marginTop: 10,
      minWidth:'100%', 
      alignItems: 'center',
      padding:10
  },
  descCard: {
      fontSize:16,
      fontWeight:'bold',
  },
  navbar: {
      width:'100%',
      padding:15,
      paddingBottom:90,
      backgroundColor: '#0c4a97',
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
  },
  textobranco: {
      color:'white'
  }


});

export default Listagem;