import { Image, Text, View , StyleSheet, ScrollView, Button} from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/MealDetail/List"
import { useContext, useLayoutEffect } from "react"
import IconButton from "../components/IconButton"
import { FavoritesContext } from "../store/context/favorites-context"
const MealDetailScreen = ({route, navigation}) =>{
    //CONTEXT 
    const favoriteMealsCtx = useContext(FavoritesContext)
    const mealId = route.params.mealId

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    const changeFavoriteStatusHandler = () =>{
        if(mealIsFavorite){
          favoriteMealsCtx.removeFavorite(mealId)
        }
        else{
          favoriteMealsCtx.addFavorite(mealId)
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () =>{
                return (
                  <IconButton
                    onPress={changeFavoriteStatusHandler}
                    icon= {mealIsFavorite? 'star' : 'star-outline'}
                    color="white"
                  />
                );
            }
        })
    }, [navigation, changeFavoriteStatusHandler])
    return (
      <ScrollView style={styles.rootContainer}>
        {/* You need to specify width and height when using uri as react-native can't get height and width from uri */}
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    );
}
export default MealDetailScreen
const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },

    listContainer: {
        width: '80%'
    }
})