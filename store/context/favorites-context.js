import { createContext, useState } from "react";
// Tao truoc bo khung de de autocompletion tren file khac
export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})
// wrap this provider with component that want to interact with context
const FavoritesContextProvider = ({children}) =>{
    const [favoriteMealIds, setFavoriteMealIds] = useState([])
    const addFavorite = (id) =>{
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
    }
    const removeFavorite = (id) =>{
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id))
    }
    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }
    //when the value change all of component register to use this context will re-render
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
export default FavoritesContextProvider