import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import PersonalInfo from './components/PersonalInfo';
import MovieBooking from './components/MovieBooking';


export default function App() {
  
  return (
    <View style={styles.screencontainer}>
      <View style={styles.imgview}><Image source={require('./assets/4f829e85866bd52d062ca58b4e1ecef5.png')}/></View>
      <Swiper showsButtons={true}>
          <PersonalInfo screenstyle={styles.screen}/>
          <MovieBooking screenstyle={styles.screen}/>

      </Swiper>
    </View>
  )
}
var width = Dimensions.get('window');
const styles = StyleSheet.create({
  imgview: {
    flexDirection: "row",
    justifyContent: "center",
    flex: .5,
    marginTop: "8%"
  }, 
  screencontainer: {
    flexDirection:"column",
    flex: 1,
    padding: "1%",
    backgroundColor: "lightgrey"
  },
  screen: {
    flex: 1,
    alignItems: "start",
    padding: "10%"
  }

});