import { View, Text,TouchableOpacity, Image, FlatList } from 'react-native'
import React,{useState} from 'react'
import styles from '../Styles'
import { categoryData } from '../../../common/Contant';

export default function Categories() {
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
        <View style={styles.menu_icon}>
            <Text style={styles.menu_icon_text}>Main</Text>
            <Text style={styles.menu_icon_text}>Categories</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categoryData}
                renderItem={renderItemOne}
                keyExtractor={item => item.id}
                style={styles.menu_icon_content}
            />
        </View>
    )
}