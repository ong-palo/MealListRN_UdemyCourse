import {StyleSheet, Text, View} from "react-native";

function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12 ,
        marginVertical: 4
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        textAlign: 'center',
    },
})

export default Subtitle;