import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';
import Auth from './Comps/Auth';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
      />
      </View>
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#0c4a97',
    width: "100%",
    padding:15,
    paddingTop:35,
    color:'#FFF',
    alignItems: 'center',
  },
  logo: {
    height:40,
    width:180
  }
});
