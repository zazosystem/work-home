import { View, Text, Image, ScrollView,FlatList } from 'react-native'
import React from 'react'
import styles from './styles'

export default function NewsFeed() {
    const data = [
        {
            'id': '1',
            'name': 'Sahara',
            'avata': require('./../../assets/feed/image1.jpeg'),
            'title': 'Lorem Ipsum is simply dummy text',
            'time': '8 minutes',
            'heart': '3',
            'comment': '5',
            'desc': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            'id': '2',
            'name': 'Titana',
            'avata': require('./../../assets/feed/image2.jpeg'),
            'title': 'Lorem Ipsum is simply dummy text',
            'time': '8 minutes',
            'heart': '3',
            'comment': '5',
            'desc': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            'id': '3',
            'name': 'Sofala',
            'avata': require('./../../assets/feed/image3.jpeg'),
            'title': 'Lorem Ipsum is simply dummy text',
            'time': '8 minutes',
            'heart': '3',
            'comment': '5',
            'desc': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            'id': '4',
            'name': 'Ikara',
            'avata': require('./../../assets/feed/image4.jpeg'),
            'title': 'Lorem Ipsum is simply dummy text',
            'time': '8 minutes',
            'heart': '3',
            'comment': '5',
            'desc': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            'id': '5',
            'name': 'Tokyo',
            'avata': require('./../../assets/feed/image5.jpeg'),
            'title': 'Lorem Ipsum is simply dummy text',
            'time': '8 minutes',
            'heart': '3',
            'comment': '5',
            'desc': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            'id': '6',
            'name': 'Navada',
            'avata': require('./../../assets/feed/image6.jpeg'),
            'title': 'Lorem Ipsum is simply dummy text',
            'time': '8 minutes',
            'heart': '3',
            'comment': '5',
            'desc': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
    ];
    const renderItemTop = ({ item }) => (
        <View style={styles.body_icon_view_item}>
            <Image style={styles.feed_icon} source={item.avata}/>
            <Text style={styles.body_icon_view_item_text}>{item.name}</Text>
        </View>
      );
      const renderItemInfo = ({ item }) => (
        <View style={styles.body_info_view_item}>
            <View style={styles.body_info_view_item_top}>
                <Image style={styles.body_info_view_item_top_left} source={item.avata}/>
                <View style={styles.body_info_view_item_top_center}>
                    <Text style={styles.body_info_view_item_top_center_text}>{item.title}</Text>
                    <View style={styles.body_info_view_item_center_bottom}>
                        <Text style={styles.body_info_view_item_center_bottom_text}>{item.name}</Text>
                        <Text style={styles.body_info_view_item_center_bottom_text}>{item.time}</Text>
                    </View>
                </View>
                <Text style={styles.body_info_view_item_top_right}>...</Text>
            </View>
            <Text style={styles.body_info_view_item_center}>{item.desc}</Text>
            <View style={styles.body_info_view_item_bottom}>
                <Image style={styles.body_info_view_item_bottom_icon} source={require('./../../assets/icons/heart.png')}/>
                <Text>{item.heart}</Text>
                <Image style={styles.body_info_view_item_bottom_icon} source={require('./../../assets/icons/comment.png')}/>
                <Text>{item.comment}</Text>
            </View>
        </View>
    );
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.header_icon} source={require('./../../assets/icons/camera.png')}/>
            <Text style={styles.header_text}>Feed</Text>
            <Image style={styles.header_icon} source={require('./../../assets/icons/pen.png')}/>
        </View>
        <View style={styles.body}>
            <FlatList
                data={data}
                renderItem={renderItemTop}
                keyExtractor={item => item.id}
                horizontal={true}
                style={styles.body_icon_view}
            />
            <FlatList
                data={data}
                renderItem={renderItemInfo}
                keyExtractor={item => item.id}
                style={styles.body_info_view}
            />
        </View>
    </View>
  )
}
