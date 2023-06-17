import { View, Text, Pressable, Image,StyleSheet, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import MealDetails from "../MealDetails"
const MealItem = ({id, title, imageUrl, duration, complexity, affordability}) =>{
    const navigation = useNavigation()
    const selectMealItemHandler = () =>{
        navigation.navigate("MealDetail",{
            mealId: id,
        })
    }

    return (
      <View style={styles.mealItem}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
          onPress={selectMealItemHandler}
        >
          <View style={styles.innerContainer}>
            <View>
              {/* NEW: get image from website */}
              <Image source={{ uri: imageUrl }} style={styles.image} />
              <Text style={styles.title}>{title}</Text>
            </View>
            {/* CtrlK + Ctrl F*/}
            <MealDetails
              duration={duration}
              complexity={complexity}
              affordability={affordability}
            />
          </View>
        </Pressable>
      </View>
    );
}
export default MealItem
const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },

})