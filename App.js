import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllUsers from "./components/screens/AllUsers";
import FavoriteUsers from "./components/screens/FavoriteUsers";

const Tab = createBottomTabNavigator();

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (user) => {
    const exists = favorites.find((fav) => fav.id === user.id);
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== user.id));
    } else {
      setFavorites([...favorites, user]);
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="All Users">
          {() => (
            <AllUsers favorites={favorites} toggleFavorite={toggleFavorite} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Favorites">
          {() => (
            <FavoriteUsers
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
