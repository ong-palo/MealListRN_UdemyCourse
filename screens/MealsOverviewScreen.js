import {MEALS, CATEGORIES} from "../data/dummy-data";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import MealItem from "../components/MealsList/MealItem";
import {useEffect, useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";
function MealsOverviewScreen({navigation}) {
    const route = useRoute();
    const { categoryId } = route.params

    const displayMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find((cat) => cat.id === categoryId).title
        })
    }, [categoryId, navigation]);

    // function renderMealItem(itemData) {
    //     const {
    //         id,
    //         title,
    //         imageUrl,
    //         duration,
    //         affordability,
    //         complexity,
    //     } = itemData.item
    //     const mealItemProps = {
    //         id,
    //         title,
    //         imageUrl,
    //         duration,
    //         affordability,
    //         complexity
    //     };
    //     return (
    //         <MealItem
    //             {...mealItemProps}
    //         />
    //     )
    // }

    // return (
    //     <View style={styles.container}>
    //         <FlatList data={displayMeals} renderItem={renderMealItem} keyExtractor={(item) => item.id} />
    //     </View>
    // )

    return (
        <MealsList items={displayMeals} />
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     }
// })

export default MealsOverviewScreen;