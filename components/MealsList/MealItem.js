import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetail from "../MealDetail";

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
    const navigation = useNavigation();

    function handleNavigation() {
        return navigation.navigate('MealDetail', {
            mealId: id,
        })
    }
    return (
        <View style={styles.mealItem}>
            <Pressable style={({ pressed }) => pressed ? styles.buttonPress : null}
                       android_ripple={{color: '#CCC'}}
                       onPress={handleNavigation}
            >
                <View style={styles.innerContainer} >
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetail duration={duration} complexity={complexity} affordability={affordability} />
                    {/*<View style={styles.details}>*/}
                    {/*    <Text style={styles.detailItem}>{duration}min</Text>*/}
                    {/*    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>*/}
                    {/*    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>*/}
                    {/*</View>*/}
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    buttonPress: {
        opacity: 0.5
    }
})

export default MealItem