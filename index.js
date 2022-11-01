/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import NewsFeed from './screens/feed/NewsFeed';
//import Zalo from './screens/zalo/Zalo';
import Food from './screens/food/Food';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Food);
