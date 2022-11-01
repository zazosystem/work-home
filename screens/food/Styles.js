import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS,STYLES } from "../../common/Theme";

const styles = StyleSheet.create({
    tab_icon: {
        width: 24,
        height: 24
    },
    menu:{
        paddingHorizontal: 15,
        paddingTop: 20,
        backgroundColor: '#fff'
    },
    app_bar:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    app_bar_icon:{
        height: 24,
        width: 24
    },
    app_bar_center:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: COLORS.lightGray4,
        width: 240,
        alignItems: 'center'
    },
    app_bar_center_text:{
        fontWeight: 'bold',
        color: COLORS.black
    },
    menu_icon:{
        marginTop: 25
    },
    menu_icon_text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: COLORS.black
    },
    menu_icon_content:{
        flexDirection: 'row'
    },
    menu_icon_item:{
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 5,
        padding: 8,
        ...STYLES.shadow
    },
    menu_icon_item_active:{
        backgroundColor: COLORS.primary,
    },
    menu_icon_item_icon:{
        backgroundColor: COLORS.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30
    },
    menu_icon_item_icon_active:{
        backgroundColor: COLORS.white
    },
    menu_icon_item_text:{
        marginBottom: 10
    },
    menu_icon_item_text_active:{
        color: COLORS.white
    }
});
export default styles;