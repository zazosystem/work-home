import { View, Text, Image, SafeAreaView, TouchableOpacity,FlatList } from 'react-native'
import React,{useState} from 'react'
import styles from './Styles'
import { ICONS } from '../../common/Images'
import { categoryData } from '../../common/Contant' 
import Appbar from './components/Appbar'
import Categories from './components/Categories'

export default function Menu() {
  const [active, setActive] = useState(1);
  renderItemOne = ({item}) => (
    <TouchableOpacity onPress={() => setActive(item.id)} style={[styles.menu_icon_item,active==item.id ? styles.menu_icon_item_active : null]}>
      <View style={[styles.menu_icon_item_icon,active==item.id ? styles.menu_icon_item_icon_active: null]}>
        <Image style={styles.tab_icon} source={item.icon}/>
      </View>
      <Text style={[styles.menu_icon_item_text,active==item.id ? styles.menu_icon_item_text_active : null]}>{item.name}</Text>
    </TouchableOpacity>
  )
  return (
    <SafeAreaView style={styles.menu}>
      <Appbar/>
      <Categories/>
    </SafeAreaView>
  )
}