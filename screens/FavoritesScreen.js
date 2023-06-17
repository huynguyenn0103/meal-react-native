import { useContext } from "react"
import { Text } from "react-native"
// import { FavoritesContext } from "../store/context/favorites-context"
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
const FavoriteScreen = () =>{
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))
    if(favoriteMeals.length === 0){
        return(
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet</Text>
            </View>
        )
    }
    return <MealsList items={favoriteMeals}/>
}
export default FavoriteScreen
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})