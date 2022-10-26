import { View, Text, FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Zalo() {
    hisroty = [
        {
            'name': 'Blackwidow',
            'avata': require('../../assets/zalo/blackwidow.jpeg')
        },
        {
            'name': 'Captain',
            'avata': require('../../assets/zalo/captain.jpg')
        },
        {
            'name': 'Flash',
            'avata': require('../../assets/zalo/flash.jpg')
        },
        {
            'name': 'Ironman',
            'avata': require('../../assets/zalo/ironman.jpeg')
        },
        {
            'name': 'Suppergirl',
            'avata': require('../../assets/zalo/suppergirl.jpg')
        },
        {
            'name': 'Yasuo',
            'avata': require('../../assets/zalo/yasuo.jpg')
        }
    ];
    suggest = [
        {
            'name': 'Wanda',
            'avata': require('../../assets/zalo/wanda.jpg'),
            'friend': '10 bạn chung'
        },
        {
            'name': 'Wonderwoman',
            'avata': require('../../assets/zalo/wonderwoman.jpg'),
            'friend': '12 bạn chung'
        },
        {
            'name': 'Ironman',
            'avata': require('../../assets/zalo/ironman.jpeg'),
            'friend': '15 bạn chung'
        },
        {
            'name': 'Suppergirl',
            'avata': require('../../assets/zalo/suppergirl.jpg'),
            'friend': '18 bạn chung'
        },
        {
            'name': 'Yasuo',
            'avata': require('../../assets/zalo/yasuo.jpg'),
            'friend': '5 bạn chung'
        },
        {
            'name': 'Strange',
            'avata': require('../../assets/zalo/strange.jpg'),
            'friend': '1 bạn chung'
        }
    ]
    const renderHistory = ({ item }) => (
        <View style={styles.history_item}>
            <Image style={styles.history_item_icon} source={item.avata}/>
            <Text style={styles.history_item_text}>{item.name}</Text>
        </View>
      );
      const renderSuggest = ({ item }) => (
        <View style={styles.suggest_item}>
          <Image style={styles.suggest_item_avata} source={item.avata}/>
          <View style={styles.suggest_item_center}>
              <Text style={styles.suggest_item_center_name}>{item.name}</Text>
              <Text>{item.friend}</Text>
          </View>
          <TouchableOpacity style={styles.suggest_item_right}>
              <Text style={styles.suggest_item_right_text}>Kết bạn</Text>
          </TouchableOpacity>
        </View>
        );
  return (
    <View style={styles.container}>
      <View style={styles.section_title}>
        <Icon name="history" size={20}/>
        <Text style={styles.section_title_text}>Danh sách tìm kiếm gần đây</Text>
      </View>
      <View style={styles.history}>
        <FlatList
                horizontal={true}
                data={hisroty}
                renderItem={renderHistory}
                keyExtractor={item => item.name}
            />
      </View>
      <View style={styles.section_title}>
        <Icon name="users" size={20}/>
        <Text style={styles.section_title_text}>Gợi ý kết bạn</Text>
      </View>
      <FlatList
            showsVerticalScrollIndicator={false}
            data={suggest}
            renderItem={renderSuggest}
            keyExtractor={item => item.name}
        />
    </View>
  )
}