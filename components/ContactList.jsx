import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';

function ContactList() {
  const contactList = [
    {
      uid: 1,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 2,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 3,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>

        {contactList.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: imageUrl }} style={styles.userImage} />
            <View style={styles.textContainer}>
              <Text style={styles.userNames}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5', // Adds a light background
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  container: {
    paddingBottom: 10,

  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center', //top-bottom movement
    // justifyContent:"center", //left-right movement
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  textContainer: {
    justifyContent: 'center',
  },
  userNames: {
    fontSize: 18,
    fontWeight: '500',
  },
  userStatus: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ContactList;
