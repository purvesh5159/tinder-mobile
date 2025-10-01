import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import SwipeDeck from '../components/organisms/SwipeDeck';
import LikedList from './LikedList';
import { useRecoilState } from 'recoil';
import { currentUserIdAtom } from '../atoms/userAtom';

export default function MainScreen() {
  const [userId, setUserId] = useRecoilState(currentUserIdAtom);
  const [showLiked, setShowLiked] = useState(false);
  const swipeDeckRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Swiping as user_id: {userId}</Text>
        <View style={{flexDirection:'row', marginTop:8}}>
          <TouchableOpacity style={styles.btn} onPress={() => setUserId(1)}><Text>Use 1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => setUserId(2)}><Text>Use 2</Text></TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.btn, {marginTop:10, backgroundColor:'#ffdddd'}]} onPress={() => setShowLiked(!showLiked)}>
          <Text>{showLiked ? "Back to Swipe Deck" : "See Liked People"}</Text>
        </TouchableOpacity>
      </View>

      {showLiked ? <LikedList /> : <SwipeDeck ref={swipeDeckRef} />}

      {!showLiked && (
        <View style={styles.bottom}>
          <TouchableOpacity style={[styles.actionBtn,{backgroundColor:'#f66'}]} onPress={() => swipeDeckRef.current?.swipeLeft()}>
            <Text style={styles.actionText}>👎 Nope</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn,{backgroundColor:'#6f6'}]} onPress={() => swipeDeckRef.current?.swipeRight()}>
            <Text style={styles.actionText}>👍 Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn,{backgroundColor:'#66f'}]} onPress={() => swipeDeckRef.current?.jumpToCardIndex(0)}>
            <Text style={styles.actionText}>🔄 Refresh</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1 },
  top: { padding:12, alignItems:'center' },
  bottom: { flexDirection:'row', justifyContent:'space-around', padding:12 },
  btn: { backgroundColor:'#eee', padding:8, marginHorizontal:6, borderRadius:8 },
  actionBtn: { flex:1, margin:4, padding:12, borderRadius:8, alignItems:'center' },
  actionText: { color:'#fff', fontWeight:'700' }
});
