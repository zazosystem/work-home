import { StyleSheet,Platform } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    feed_icon:{
        width: 65,
        height: 65,
        borderRadius: 65
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: Platform.OS === 'ios' ? 50 : 0,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    header_icon:{
        width: 24,
        height: 24
    },
    header_text:{
        fontWeight: 'bold',
        fontSize: 18
    },
    body:{
        flex: 1,
        flexGrow: 9
    },
    body_icon_view:{
        flex: 1,
        flexDirection: 'row',
        flexGrow: 2
    },
    body_icon_view_item:{
        justifyContent:'center',
        alignItems:'center',
        padding: 15
    },
    body_icon_view_item_text:{
        fontWeight: 'bold'
    },
    body_info_view:{
        flex: 1,
        flexGrow: 8
    },
    body_info_view_item:{
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingHorizontal: 15,
        marginBottom: 15
    },
    body_info_view_item_top:{
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    body_info_view_item_top_left:{
        width: 60,
        height: 60,
        borderRadius: 60,
        marginTop:15
    },
    body_info_view_item_top_center:{
        marginHorizontal: 10,
        flexGrow: 6,
        paddingTop:15
    },
    body_info_view_item_top_center_text:{
        fontWeight: 'bold'
    },
    body_info_view_item_center_bottom:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    body_info_view_item_center_bottom_text:{
        color: '#ddd'
    },
    body_info_view_item_top_right:{
        fontWeight: 'bold',
        justifyContent: 'center',
        paddingLeft: 20,
        fontSize: 25
    },
    body_info_view_item_center:{
        marginVertical: 15,
        justifyContent: 'space-around'
    },
    body_info_view_item_bottom:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    body_info_view_item_bottom_icon:{
        width: 30,
        height: 30,
        marginHorizontal: 5
    }
});