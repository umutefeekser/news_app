import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    },

    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    inner_container: {
        padding: 5
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    description: {
        marginTop: 3
    }
})