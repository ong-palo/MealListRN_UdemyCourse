import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import {Ionicons} from "@expo/vector-icons";
import FavouritesContextProvider from "./store/context/favourites-context";
import {Provider} from "react-redux";
import {store} from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{
            // headerStyle: {
            //     backgroundColor: '#351401',
            // },
            // headerTintColor: 'white',
            sceneContainerStyle: {
                backgroundColor: '#351401',
            }
        }}>
            <Drawer.Screen name={'MealCategories'} component={CategoriesScreen} options={{
                title: 'All Categories',
                drawerIcon: ({color, size}) => (
                    <Ionicons name={'list'} size={size} color={color} />
                )
            }}/>
            <Drawer.Screen name={'Favourites'}  component={FavouritesScreen} options={{
                drawerIcon: ({color,size}) => (
                    <Ionicons name={'star-outline'} size={size} color={color}/>
                )
            }}/>
        </Drawer.Navigator>
    )
}

export default function App() {
  return (
      <>
        <StatusBar style='auto'/>
          <Provider store={store}>
          {/*<FavouritesContextProvider>*/}
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    contentStyle: {
                        backgroundColor: '#3f2f25'
                    },
                }}>
                    {/*<Stack.Screen name='MealsCategories' component={CategoriesScreen} options={{*/}
                    {/*    title: 'All Categories'*/}
                    {/*}}/>*/}
                    <Stack.Screen name='Drawer' component={DrawerNavigator} options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} options={{
                        headerBackTitle: 'Back',
                    }}/>
                    <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{
                        title: 'About the Meal'
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
          {/*</FavouritesContextProvider>*/}
          </Provider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
