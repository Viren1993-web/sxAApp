import { create } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import SearchResult from '../screens/SearchResult/indexSR';
import MemberSearch from '../screens/MemberSearch/indexMS';

const screens = {
  MemberSearch: {
    screen: MemberSearch
  },
  SearchResult: {
    screen: SearchResult
  },
};

const menuStack = createStackNavigator(screens);
export default createAppContainer(menuStack);
