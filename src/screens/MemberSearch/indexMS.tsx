import React, {useState} from 'react';
import {View, Text, Button, TextInput, SafeAreaView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Heading from '../../components/heading';
import styles from './stylesMS'; //Add style for Menu screen

const MemberSearch = ({navigation}) => {
  //Declaration state

  const [policy, setPolicy] = useState<string>('');
  const [memberCardNumber, setMemberCardNumber] = useState<string>('');
  const [serviceDate, setServiceDate] = useState<string>('');
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    var dt = new Date(date);
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const formattedDate =
      dt.getDate() + months[dt.getMonth()] + ' ' + dt.getFullYear();
    setServiceDate(formattedDate);
    hideDatePicker();
  };

  //Reset Button function
  const clear = () => {
    setPolicy('');
    setMemberCardNumber('');
    setServiceDate('');
  };

  //Search Button Function
  const searchByPolicy = () => {
    const checkNumber = /^[0-9]+$/;
    if (policy === '' || serviceDate === '' || !checkNumber.test(policy)) {
      Alert.alert('Please write correct Policy Number and Service Date');
    } else {
      navigation.navigate('SearchResult', {policy});
    }
  };

  //Render Member Search Screen
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
      <View style={styles.body}>
        <Text style={styles.pageTitle}>Service Date</Text>
      </View>
      <View style={styles.datePicker}>
        <TextInput style={styles.date}>{serviceDate}</TextInput>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Icon.Button
          name="calendar"
          color="black"
          size={50}
          backgroundColor="lightgray"
          onPress={showDatePicker}
        />
      </View>
      <Text style={styles.pageTitle}>Serching Using</Text>
      <Text style={styles.label}>Policy Number</Text>
      <TextInput
        style={styles.input}
        value={policy}
        onChangeText={text => setPolicy(text)}
        keyboardType="numeric"
        autoFocus={true}
        clearTextOnFocus={true}
      />
      <Text style={styles.label}>Member Card Number</Text>
      <TextInput
        style={styles.input}
        value={memberCardNumber}
        onChangeText={text => setMemberCardNumber(text)}
        keyboardType="numeric"
      />
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          title="Search"
          onPress={() => searchByPolicy()}
        />
        <Button style={styles.button} title="Reset" onPress={clear} />
      </View>
    </SafeAreaView>
  );
};

export default MemberSearch;
