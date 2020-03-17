import React, { Component } from 'react';
import { store } from './utils/store';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/home/index';
import BookScreen from './screens/books/index';
import BookDetailScreen from './screens/bookDetail/index';
import CounterIncrementScreen from './screens/counterIncrement/index';
import CounterDecrementScreen from './screens/counterDecrement/index';
import CustomDrawer from './components/customDrawer';
import AddBook from './screens/books/AddBook';


const HomeNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen },
  CounterIncrement: { screen: CounterIncrementScreen },
  CounterDecrement: { screen: CounterDecrementScreen },
  Book: { screen: BookScreen },
}, {
  initialRouteName: "Home",
  contentComponent: props => <CustomDrawer{...props} />
});

const Navigator = createStackNavigator({
  HomeNavigator,
  BookDetail: { screen: BookDetailScreen },
  AddBook: { screen: AddBook }
}, {
  initialRouteName: 'HomeNavigator',
  headerMode: 'none'

});



const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}