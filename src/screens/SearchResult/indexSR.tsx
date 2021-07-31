import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import styles from './stylesSR'; //style for Search Result screen
import Heading from '../../components/heading';
import axios from 'react-native-axios'; //import Axiox for fetch data
import { Alert } from 'react-native';


const SearchResult = ({route,navigation}) => {
  //Declare state
  const {policy} = route.params;
  const [data, setData] = useState<any>([]);

  //Fetch data from API
  useEffect(() => {
    axios
      .get(`https://rcvp3-api.azurewebsites.net/members?policyNumber=${policy}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [policy]);

  //Search match policy data
  function search() {
    const policies = data.map(p => p.policyNumber);
    for (var i = 0; i < policies.length; i++) {
      if (policies[i] !== policy) {
        Alert.alert("Please Enter Correct Policy Number ");
        setData('');
      } else {
        return data;
      }
    }
  }

  //render Search Result screen
  return (
    <SafeAreaView>
      <Heading />
      <View style={styles.page}>
        <Icon.Button
          style={styles.lines}
          name="menu-outline"
          size={40}
          color="black"
          backgroundColor="lightgray"
          onPress={() => navigation.openDrawer()}
        />

        <Text style={styles.title}>Search Results</Text>
      </View>
      <View>
        {/* Disply the match data result */}
        <FlatList
          data={search()}
          renderItem={({item}) => (
            <Text style={styles.item}>
              First name: {item.firstName}
              {'\n'}
              Last name: {item.lastName}
              {'\n'}
              Date of birth: {item.dataOfBirth}
              {'\n'}
            </Text>
          )}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchResult;
