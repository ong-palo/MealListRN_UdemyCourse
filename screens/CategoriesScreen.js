import {CATEGORIES} from "../data/dummy-data";
import {FlatList, View} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
function CategoriesScreen({navigation}) {
    function renderItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            })
        }

        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        )
    }

    return (
        <View>
            <FlatList data={CATEGORIES}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.id}
                      numColumns={2}
            />
        </View>
    )
}

export default CategoriesScreen;