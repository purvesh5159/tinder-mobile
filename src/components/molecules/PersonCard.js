import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from '../atoms/Avatar';

export default function PersonCard({ person }) {
  const photo = person.photos?.[0]?.url || null;

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {photo ? (
          <Avatar uri={photo} size={200} />
        ) : (
          <View style={styles.placeholder}>
            <Text>No photo</Text>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.name}>
          {person.name}, <Text style={{ fontWeight: '600' }}>{person.age}</Text>
        </Text>
        <Text style={styles.location}>
          {person.latitude ? `${person.latitude.toFixed(2)}, ${person.longitude.toFixed(2)}` : ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 4,
    marginBottom: 0,
  },
  imageContainer: {
    paddingTop: 10, // adds space between card top and image
  },
  placeholder: {
    width: 250,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  footer: {
    padding: 7,
    width: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  location: {
    color: '#666',
    marginTop: 4,
  },
});
