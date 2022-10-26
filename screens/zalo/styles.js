import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        marginTop: Platform.OS === 'ios' ? 50 : 0
    },
    section_title:{
        flexDirection: 'row'
    },
    section_title_text:{
        fontWeight: 'bold',
        marginLeft: 5
    },
    history:{
        height: 100,
        marginBottom: 15
    },
    history_item:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    history_item_icon:{
        height: 60,
        width: 60,
        margin: 10,
        borderRadius: 60
    },
    history_item_text:{
        fontWeight: 'bold'
    },
    suggest_item:{
        flexDirection: 'row',
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
        alignItems: 'center'
    },
    suggest_item_avata:{
        height: 60,
        width: 60,
        borderRadius: 60
    },
    suggest_item_center:{
        flexGrow: 3,
        marginHorizontal: 10
    },
    suggest_item_center_name:{
        fontWeight: 'bold'
    },
    suggest_item_right:{
        backgroundColor: '#bbbafe',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20
    },
    suggest_item_right_text:{
        fontWeight: 'bold'
    }
});
export default styles;