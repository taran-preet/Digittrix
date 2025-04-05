import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UserCard = ({ user, isFavorite, onToggleFavorite }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: user.avatar }}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <TouchableOpacity onPress={() => onToggleFavorite(user)} style={styles.favContainer}>
        <Text style={[styles.favIcon, isFavorite ? styles.favActive : null]}>
          {isFavorite ? '★' : '☆'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    margin: 10,
    borderRadius: 10,
    padding: 12,
    elevation: 4,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  email: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  favContainer: {
    padding: 10,
  },
  favIcon: {
    fontSize: 24,
    color: '#fff',
  },
  favActive: {
    color: 'gold',
  },
});
