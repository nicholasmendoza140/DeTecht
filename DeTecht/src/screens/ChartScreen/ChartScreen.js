import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView,
  Dimensions, ScrollView, } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { TextInput } from 'react-native-paper';
import axios from 'axios';

// can use city inside of this component to search the api results
const ChartScreen = () => {

  const [city, setCity] = useState('Santa Clara');
  const [deaths, setDeaths] = useState('');
  const [cases, setCases] = useState('');

  
  const options = {
    method: 'GET',
    url: 'https://covid-19-statistics.p.rapidapi.com/reports',
    params: {
      city_name: city,
    },
    headers: {
      'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
      'X-RapidAPI-Key': 'a15a7341b7mshb5044f6d53a029fp156349jsn6d783a999094'
    }
  };
  
  axios.request(options).then(function (response) {
    //Check the data is not there / empty object
    if (response.data.data.length == 0) {
      console.log("bad object");
    } else {
      console.log(response.data.data[0].region.cities[0]);
    }

    //Checking for multiple cities 
    var arr = response.data.data;
    for (var i = 0; i < arr.length; i++) {
      if ("region" in arr[i] && "cities" in arr[i].region) {
        for (var j = 0; j < arr[i].region.cities.length; j++) {
          console.log("the loop is working");
          setDeaths(response.data.data[i].region.cities[j].deaths);
          setCases(response.data.data[i].region.cities[j].confirmed);

        }
      }
    }
  }).catch(function (error) {
    console.error(error);
  });

  const MyBarChart = () => {
    return (
      <>
        <Text style={styles.header}>Cases and Deaths</Text>
        <BarChart
          data={{
            labels: ['Cases', 'Deaths'],
            datasets: [
              {
                data: [cases, deaths],
              },
            ],
          }}
          width={Dimensions.get('window').width}
          height={220}
          fromZero = 'true'
          //yAxisLabel={'Rs'}
          chartConfig={{
            backgroundColor: '#1F53DE',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(31, 83, 222, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            paddingLeft: 10
          }}
        />
        <Text style={styles.text}> Cases: {cases} </Text>
        <Text style={styles.text}> Deaths: {deaths} </Text>
      </>
    );
  };

  //want to use this to display stats before clicking on the screen
  //useEffect(() => {
    //ChartScreen(city = 'San Francisco');
  //}, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style = {styles.view} >
          <Text style = {styles.text}> Enter a city or county: </Text>
           <TextInput 
            placeholder = "Search"
            style={styles.input}
            left={<TextInput.Icon name="magnify" />}
            activeUnderlineColor = "#1992FF"
            underlineColor="#1992FF"
            value={city}
            onChangeText={(newValue) => setCity(newValue)}
            onEndEditing = {() => console.log("input worked")}
          />
          <Text style = {styles.text}> Search for cases in {city}</Text>
        </View>
        <View>
            <MyBarChart />            
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  input: {
    margin: 5,
    marginHorizontal: 30,
    borderColor: 'black',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    fontSize: 18,
    //padding: 19
     
  },
  text: {
      fontSize: 17,
      margin: 5,
  },
  view: {
    //flexDirection: 'row',

  },
  feather: {
    fontSize: 25,
    top: 37,
    left: 35,
    zIndex: 1,
    alignSelf: 'flex-start'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 15,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },

});

export default ChartScreen;