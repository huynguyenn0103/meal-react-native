import {FlatList} from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';

// NEW: provide prop by bounded by Stack.Screen
// NEW: BUT if i want to use Navigate but it is not direct component (means children of children)
// c1: transfer navigation as a props.
// c2: use hook useNavigation in that children of children component
const CategoriesScreen = ({navigation}) =>{
    //Child component
    const renderCategoryItem = (itemData) =>{
        const pressHandler = () =>{
            //NEW: navigate to name of other screens + pass props
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id
            })
        }
        return  (<CategoryGridTile 
                    title={itemData.item.title} 
                    color={itemData.item.color} 
                    onPress={pressHandler}
                />
                );
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            // NEW: flatList with 2 columns
            numColumns={2}
        />
    )
}
export default CategoriesScreen