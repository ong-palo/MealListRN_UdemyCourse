import MealItem from "./MealItem";
import {FlatList, StyleSheet, View} from "react-native";

function MealsList({items}) {
    function renderMealItem(itemData) {
        const {
            id,
            title,
            imageUrl,
            duration,
            affordability,
            complexity,
        } = itemData.item
        const mealItemProps = {
            id,
            title,
            imageUrl,
            duration,
            affordability,
            complexity
        };
        return (
            <MealItem
                {...mealItemProps}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={items} renderItem={renderMealItem} keyExtractor={(item) => item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

export default MealsList;