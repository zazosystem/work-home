import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../Styles'
import { ICONS } from '../../../common/Images'

export default function Appbar() {
  return (
    <View style={styles.app_bar}>
        <TouchableOpacity>
            <Image style={styles.app_bar_icon} source={ICONS.nearby}/>
        </TouchableOpacity>
        <View style={styles.app_bar_center}>
            <Text style={styles.app_bar_center_text}>745 Lincoin PI</Text>
        </View>
        <TouchableOpacity>
            <Image style={styles.app_bar_icon} source={ICONS.shopping_basket}/>
        </TouchableOpacity>
    </View>
  )
}