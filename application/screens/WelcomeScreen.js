import React from 'react';
import { StyleSheet, Text, SafeAreaView , StatusBar , TextInput, View , Image , Alert} from 'react-native';
import { Icon } from '@rneui/themed';
import { TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  axios  from 'axios';
import { useNavigation } from '@react-navigation/native';
function WelcomeScreen(props) {
    const navigation = useNavigation();
    const [city , onPressed] = React.useState() ;
    const [text, setText] = React.useState('');
    const [weatherData , setData] = React.useState();

    let getUrl = () => {
       if(city != null){
        if(city.toLowerCase() == 'gaza'){
            return 'https://api.openweathermap.org/data/2.5/weather?q=gaza&appid=' + apiKey + '&units=metric'
        }else{
            return 'https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=' + apiKey + '&units=metric'
        }
       }else{
        return 'https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=' + apiKey + '&units=metric'
       }
      }

    let icon =   weatherData? weatherData.weather[0].icon : '';
    let apiKey = '12b0d29eea3924fbb1bff44827d78f5c'
    
    axios.get(getUrl())
    .then(res => setData(res.data))
    .catch(error => console.log(error))
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>

           <LinearGradient colors={["#7edfff" ,"#80b3c4"]} style={styles.container}>

           <Text style={styles.header}>
                Current Weather
            </Text>

            <View style={styles.searchSection}>
                <TextInput 
                    style={styles.input}
                    onChangeText={setText}
                    placeholder="Search city name"
                    placeholderTextColor={'#3c6c81'}/>
           
           <TouchableHighlight
           underlayColor='#e9f5f9'
           onPress={()=> onPressed(text)}>
           <Icon
                    name='search'
                    color='#041928'/>
                   
           </TouchableHighlight>
           
                    
            
               

            </View>    
            
        

           <View style={styles.firstContainer}>

           <View style={styles.cityContainer}>
                    <Text style={styles.cityText}>{weatherData? weatherData.name : ""}</Text>
                    <Text style={styles.sky}>{weatherData? weatherData.weather[0].description : ''}</Text>
                    <View style={styles.horizontalView}>
                        <Text style={styles.highAndLowTemp}>
                            <Text style={styles.hAndL}>L </Text>
                            {weatherData? weatherData.main.temp_max: ''}°C
                        </Text>
                        <Text style={styles.highAndLowTemp}>
                            <Text style={styles.hAndL}>H </Text>
                            {weatherData? weatherData.main.temp_min : ''}°C
                        </Text>
                    </View>
                </View>

                <View style={styles.cloudContainer}>
                    <Image source={{uri:"http://openweathermap.org/img/wn/"+ icon +"@2x.png"}} style={styles.imageCloudy}/> 
                    <Text style={styles.temperature}>{weatherData? weatherData.main.temp: ''}°C</Text>
                </View>
                    
           </View>

           <View style={styles.secondContainer}>

                <View style={styles.detailContainer}>

                    <View style={styles.secondSubContainer}>
                        <Text style={styles.hAndL}>Height</Text>
                        <Text>{weatherData? weatherData.main.temp_max: ''}°C</Text>
                    </View>

                    <View style={styles.secondSubContainer}>
                        <Text style={styles.hAndL}>Sea lavel</Text>
                        <Text>{weatherData? weatherData.main.sea_level :  'not found'}</Text>
                    </View>

                </View>

                <View style={styles.detailContainer}>

                    <View style={styles.secondSubContainer}>
                        <Text style={styles.hAndL}>Low</Text>
                        <Text>{weatherData? weatherData.main.temp_min : ''}°C</Text>
                    </View>

                    <View style={styles.secondSubContainer}>
                        <Text style={styles.hAndL}>Humidity</Text>
                        <Text>{weatherData? weatherData.main.humidity : ''}%</Text>
                    </View>

                </View>

                <View style={styles.detailContainer}>

                    <View style={styles.secondSubContainer}>
                        <Text style={styles.hAndL}>Feels</Text>
                        <Text>{weatherData? weatherData.main.feels_like : ''}°C</Text>
                    </View>
                    
                    <View style={styles.secondSubContainer}>
                        <Text style={styles.hAndL}>Pressure</Text>
                        <Text>{weatherData? weatherData.main.pressure : ''}hPa</Text>
                    </View>

                </View>

           </View>

           <TouchableHighlight style={styles.locationButton}
                    underlayColor='#82828e'
                    onPress={() => navigation.navigate('WeatherMap' , 
                    {long: weatherData? weatherData.coord.lon : '',
                     lat: weatherData? weatherData.coord.lat : ''})}>
                    <Text style={styles.searchText}>Go to The Location</Text>
                </TouchableHighlight>

           </LinearGradient>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header:{
        color: 'white',
        fontSize: 22,
        marginVertical:18,
        marginHorizontal: 25,
        fontWeight: 'bold'
    },
    input: {
        color:'#3c6c81',
        flex: 1,
        fontSize: 18,
        marginHorizontal: 10 ,
    },

    searchSection: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height:60,
        borderRadius: 30,
        marginHorizontal: 20 ,
        paddingHorizontal: 10,
        backgroundColor:'#c5effd'
    },
    locationButton : {
        height: 60,
        borderRadius: 30,
        borderWidth:1,
        borderColor:'white',
        marginHorizontal: 50,
        marginTop:50,
        backgroundColor:'#cacd63',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchText:{
        color:'white',
        fontWeight: 'bold'
    },
    cityText:{
        textAlign:'center',
        color:'black',
        fontSize: 40,
        fontWeight: '500'
    },
    temperature:{
        textAlign:'center',
        color:'black',
        fontSize: 28,
        fontWeight: 'bold'
    },
    sky:{
        textAlign:'center',
        color:'black',
        fontSize: 12,
        fontWeight: 'bold'
    },
    highAndLowTemp:{
        flex:1,
        textAlign:'center',
        color:'black',
        fontSize: 12,
        fontWeight: 'bold'
    },
    hAndL:{
        color:'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    horizontalView:{
        flexDirection: 'row',
        marginTop:20
    },
    firstContainer:{
        height: 180,
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop:20,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#6c89a0',
        backgroundColor:"#c5effd",
        paddingHorizontal: 20
    },
    cloudContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cityContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageCloudy:{
        height:90,
        width: 90
    },
    secondContainer:{
        height: 180,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop:20,
        borderRadius: 30,
        borderWidth:  1,
        borderColor: '#6c89a0',
        backgroundColor:"#c5effd",
        padding: 20,
    },
    detailContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondSubContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

export default WelcomeScreen;