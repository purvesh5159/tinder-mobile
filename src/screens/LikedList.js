import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';
import { currentUserIdAtom } from '../atoms/userAtom';
import { useLikedPeople } from '../hooks/useLikedPeople';
import PersonCard from '../components/molecules/PersonCard';

export default function LikedList() {
  const userId = useRecoilValue(currentUserIdAtom);
  const { data, isLoading } = useLikedPeople(userId);

  if (isLoading) return <View style={styles.center}><Text>Loading liked people...</Text></View>;
  if (!data || data.length === 0) return <View style={styles.center}><Text>No liked people yet!</Text></View>;

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <PersonCard person={item} />}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex:1, justifyContent:'center', alignItems:'center' },
  list: { padding:16, alignItems:'center' },
});
