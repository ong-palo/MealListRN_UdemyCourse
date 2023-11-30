import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useContext, useEffect, useLayoutEffect} from "react";
import IconButton from "../components/IconButton";
import {FavouritesContext} from "../store/context/favourites-context";
import {useDispatch, useSelector} from "react-redux";
import {addFavourite, removeFavourite} from "../store/redux/favourites";

function MealDetailScreen({route, navigation}) {
    const {mealId} = route.params;
    const meal = MEALS.find((meal) => meal.id === mealId)

    const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
    const dispatch = useDispatch();

    //const favouriteMealsContext = useContext(FavouritesContext);

    const mealIsFavourite = favouriteMealIds.includes(mealId) //favouriteMealsContext.ids.includes(mealId);

    function changeFavouriteStatus() {
        if (mealIsFavourite) {
            // favouriteMealsContext.removeFavourite(mealId);
            dispatch(removeFavourite({id: mealId}));
        } else {
            // favouriteMealsContext.addFavourite(mealId);
            dispatch(addFavourite({id: mealId}));
        }
    }

    useLayoutEffect(() => {
        // console.log(mealIsFavourite)
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavourite ? 'star' : 'star-outline'}
                        onPress={changeFavouriteStatus}
                        color={'black'}
                    />
                );
            },
        });
    }, [navigation, changeFavouriteStatus, mealIsFavourite]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: meal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{meal.title}</Text>
            <MealDetail
                affordability={meal.affordability}
                complexity={meal.complexity}
                duration={meal.duration}
                textStyle={styles.detail}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={meal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={meal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 30
    },
    image: {
        width: '100%',
        height: 250
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detail: {
        color: 'white'
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    // subtitleContainer: {
    //     borderBottomColor: '#e2b497',
    //     borderBottomWidth: 2,
    //     padding: 6,
    //     marginHorizontal: 24,
    //     marginVertical: 4
    // },
    // subtitle: {
    //     color: '#e2b497',
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     margin: 4,
    //     padding: 6,
    //     textAlign: 'center',
    // },

})

export default MealDetailScreen;