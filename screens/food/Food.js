import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu from './Menu';
import Search from './Search';
import { ICONS } from '../../common/Images';
import styles from './Styles';
import { screens } from '../../common/Contant';
import { COLORS } from '../../common/Theme';
import Like from './Like';
import User from './User';

const Tab = createBottomTabNavigator();
export default function Food() {
  returnIcon = (focused,icon) => {
    let color = focused ? COLORS.primary : COLORS.secondary;
    return <Image style={[styles.tab_icon,{'tintColor':color}]} source={icon}/>;
  }
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown:false,
          tabBarShowLabel:false
        }}>
        <Tab.Screen name={screens.tab_home} component={Menu} options={{
          tabBarIcon:({focused}) => returnIcon(focused,ICONS.cutlery)
        }}/>
        <Tab.Screen name={screens.tab_search} component={Search} options={{
          tabBarIcon:({focused}) => returnIcon(focused,ICONS.search)
        }}/>
        <Tab.Screen name={screens.tab_like} component={Like} options={{
          tabBarIcon:({focused}) => returnIcon(focused,ICONS.like)
        }}/>
        <Tab.Screen name={screens.tab_user} component={User} options={{
          tabBarIcon:({focused}) => returnIcon(focused,ICONS.user)
        }}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}