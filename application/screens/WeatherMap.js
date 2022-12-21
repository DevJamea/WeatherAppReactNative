import React from 'react';
import { Text , View , StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
function WeatherMap({ route }) {

    const { long , lat } = route.params;
    
    return (
        <View style={styles.container}>
            <MapView style={styles.map} 
            initialRegion={{
                latitude:  lat ,
                longitude:  long ,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0921,
              }}>

              <Marker
              coordinate={{
                latitude:  lat ,
                longitude:  long ,
              }}/>
            </MapView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    map:{
        width: '100%',
        height: '100%', 
    }
  });

export default WeatherMap;