import { MEALS , CATEGORIES} from "../data/dummy-data"
import { useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import MealsList from "../components/MealsList/MealsList"
//NEW: route props here holds the params that other screens pass,.....
//c1: using route prop as parameter of component
//c2: using hook useRoute (use for children of children)
const MealsOverviewScreen = ({navigation, route}) =>{
    //NEW: retrieve props passed
    const catId = route.params.categoryId
    //NEW: c2
    // const route = useRoute()
    // const catId = route.params.categoryId
    useLayoutEffect(() =>{// to make this function excecute at the same time with this component not after like useEffect
        const CategoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: CategoryTitle
        })
    
    },[catId, navigation])

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })
    return <MealsList items = {displayedMeals}/>
}
export default MealsOverviewScreen
