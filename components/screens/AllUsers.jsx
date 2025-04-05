import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import UserCard from '../digitrixx/UserCard';

const AllUsers = ({ favorites, toggleFavorite }) => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${pageNum}`);
      const data = await res.json();

      setUsers(data.data); // Replace users instead of appending
      setFiltered(data.data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredUsers = users.filter((user) =>
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filteredUsers);
  };

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View style={styles.searchBar}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search users by name"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserCard
              user={item}
              isFavorite={favorites.some((fav) => fav.id === item.id)}
              onToggleFavorite={toggleFavorite}
            />
          )}
          ListFooterComponent={
            <View style={styles.paginationContainer}>
              {[1, 2].map((pg) => (
                <TouchableOpacity
                  key={pg}
                  onPress={() => setPage(pg)}
                  style={[
                    styles.pageButton,
                    page === pg && styles.activePageButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.pageText,
                      page === pg && styles.activePageText,
                    ]}
                  >
                    {pg}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          }
        />
      )}
    </View>
  );
};

export default AllUsers;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
    color: '#888',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  pageButton: {
    marginHorizontal: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  activePageButton: {
    backgroundColor: 'gold',
  },
  pageText: {
    color: '#fff',
    fontWeight: '600',
  },
  activePageText: {
    color: '#000',
  },
});
