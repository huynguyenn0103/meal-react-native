import { StyleSheet, Text} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
//NEW
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorites-context';
//NEW: Stack is obj with 2 properties: Navigator and Screen
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () =>{
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({color,size}) => <Ionicons name='list' color={color} size={size}/>
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          title: "About the Meal",
          drawerIcon: ({color,size}) => <Ionicons name='star' color={color} size={size}/>
        }}
      />
    </Drawer.Navigator>
  );
}


// Important of Navigation package
//Default:
//Add a nice header
//Add background
//Add safe area that make sure don't colide with notch of ios
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* API CONTEXT */}
      <FavoritesContextProvider>
      {/* NEW: step 1: add NavigationContainer */}
        <NavigationContainer>
          {/* NEW: step 2: add Navigator and Screen => register component*/}
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              //NEW:  apply this option to all screen
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            {/* Screen 1 => by default is main screen*/}
            <Stack.Screen
              // NEW: nice header
              name="Drawer"
              // NEW: NESTED NAVIGATOR **********
              component={DrawerNavigator}
              options={{
                headerShown: false,
                // headerStyle: {backgroundColor: '#351401'},// background of the title
                // headerTintColor: 'white',// color of title
                // contentStyle: {backgroundColor: '#3f2f25'}// background of the rest
              }}
            />
            {/* Screen 2 */}
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              //C1: option with function => dinamyc option
              // options={({route, navigation}) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId
              //   }
              // }}
              //C2: using navigation.setOption({...}) in the component
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              // options={{
              //   headerRight: () =>{
              //     return <Text>In the header</Text>
              //   }
              // }} => not a good choice
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
//NEW
//npm install @react-navigation/native
//expo install react-native-screens react-native-safe-area-context
//expo install @react-navigation/native-stack
//npm install @react-navigation/drawer
//expo install react-native-gesture-handler react-native-reanimated
//npm install react-native-reanimated@1 --save --save-exact