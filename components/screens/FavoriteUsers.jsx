import React from 'react';
import { View, FlatList, Text } from 'react-native';
import UserCard from '../digitrixx/UserCard';

const FavoriteUsers = ({ favorites, toggleFavorite }) => {
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      {favorites.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20,fontSize:20 }}>No favorites added.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserCard
              user={item}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          )}
        />
      )}
    </View>
  );
};

export default FavoriteUsers;
