import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    borderWidth: 2,
  },
  lines: {
    padding: 5,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
  },
  pageTitle: {
    padding: 2,
    margin: 10,
    fontSize: 20,
  },
  label: {
    fontSize: 15,
    marginLeft: 15,
    margin: 5,
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#fcfafa',
    margin: 10,
    marginLeft: 10,
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 20,
  },
  error: {
    color: 'red',
    fontSize: 20,
    margin: 10,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  button: {
    color: '#fcfafa',
  },
  datePicker: {
    flexDirection: 'row',
    borderEndColor: 'black',
    borderWidth: 2,
    margin: 20,
    textAlign: 'right',
    justifyContent: 'flex-end',
  },
  date: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default styles;
