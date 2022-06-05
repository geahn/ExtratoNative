import React, { useState } from 'react';
import { StyleSheet, ScrollView, Pressable, Text, TextInput, View } from 'react-native';
import Listagem from './Listagem';

const Auth = () => {
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const [cadLogin, setCadLogin] = useState("")
    const [cadSenha, setCadSenha] = useState("")
    const [estado, setEstado] = useState ("login")

    const mostraCadastro = () => {
        setEstado("cadastro")
    }

    const mostraLogin = () => {
        setEstado("login")
    }

    const validarDados = () => {
        setEstado("listagem")
    }


    return (
        <View style={styles.wrap}>
            <View style={(estado === "login") ? styles.card : styles.cardhide }>
                <Text style={styles.cabecalho}>LOGIN</Text>
                <TextInput
                    id="usuario"
                    style={styles.input}
                    placeholder="Usuário"
                    onChangeText={login => setLogin(login)}
                    defaultValue={login}
                />
                <TextInput
                    id="senha"
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={senha => setSenha(senha)}
                    defaultValue={senha}
                />
                <Pressable style={styles.botao} onPress={() => validarDados()}>
                    <Text style={{color:'#fff'}}>ENTRAR</Text>
                </Pressable>

                <Pressable onPress={() => mostraCadastro()}>
                    <Text style={{marginTop:10}}>Não tem login? Cadastre-se</Text>
                </Pressable>
            </View>

            <View style={(estado === "cadastro") ? styles.card : styles.cardhide }>
            <Text style={styles.cabecalho}>CADASTRO</Text>
                <TextInput
                    id="cadUsuario"
                    style={styles.input}
                    placeholder="Usuário"
                    onChangeText={cadLogin => setCadLogin(cadLogin)}
                    defaultValue={cadLogin}
                />
                <TextInput
                    id="cadSenha"
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={cadSenha => setCadSenha(cadSenha)}
                    defaultValue={cadSenha}
                />
                <Pressable style={styles.botao} onPress={() => alert('Logado!')}>
                    <Text style={{color:'#fff'}}>CADASTRAR</Text>
                </Pressable>

                <Pressable onPress={() => mostraLogin()}>
                    <Text style={{marginTop:10}}>Voltar à tela de login</Text>
                </Pressable>
            </View>

            <View style={(estado === "listagem") ? styles.listagem : styles.cardhide }>
                <Listagem login={login}/>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
  wrap: {
    flex:1,
    width:'100%', 
    alignItems: 'center',
    // justifyContent: 'center',
  },
  listagem: {
      padding:10,
      width:'100%'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 40,
    padding:10,
    borderBottomColor: '#c0c0c0',
    borderBottomWidth: 3,
    width: '80%',
    alignItems: 'center',
  },
  cardhide: {
      display:'none',
  },
  cabecalho: {
      fontSize: 22,
      borderBottomColor: 'orange',
      borderBottomWidth: 4,
      marginBottom: 10,
  },
  input: {
    padding: 7,
    paddingLeft:7,
    margin:3,
    width: '100%',
    borderColor:'#c0c0c0',
    borderWidth:1,
    borderRadius: 5
  },
  botao: {
      backgroundColor: '#009b5f',
      marginTop: 5,
      width:'100%',
      alignItems: 'center',
      padding:10,
      fontWeight:'bold',
      borderRadius:5,
  },

});

export default Auth;