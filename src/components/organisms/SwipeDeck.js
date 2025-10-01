import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import PersonCard from '../molecules/PersonCard';
import { usePeople } from '../../hooks/usePeople';
import { likePerson, dislikePerson } from '../../hooks/useSwipe';
import { useRecoilValue } from 'recoil';
import { currentUserIdAtom } from '../../atoms/userAtom';

const SwipeDeck = forwardRef((props, ref) => {
  const userId = useRecoilValue(currentUserIdAtom);
  const swipeRef = useRef(null);
  const { data, isLoading } = usePeople({ per_page: 30 });

  // ✅ Always call hooks before any returns
  useImperativeHandle(ref, () => ({
    swipeLeft: () => swipeRef.current?.swipeLeft(),
    swipeRight: () => swipeRef.current?.swipeRight(),
  }));

  const people = data?.data ?? [];

  const handleSwipe = async (idx, type) => {
    const target = people[idx];
    if (!target) return;
    try {
      if (type === 'right') {
        await likePerson({ user_id: userId, target_id: target.id });
      } else {
        await dislikePerson({ user_id: userId, target_id: target.id });
      }
    } catch (e) {
      console.warn('Swipe API error', e.response?.data || e.message);
    }
  };

  // 🧨 Moved below all hooks
  if (isLoading) return <ActivityIndicator style={{ marginTop: 40 }} />;

  return (
    <View style={styles.container} >
      <Swiper
        ref={swipeRef}
        cards={people}
        cardIndex={0}
        renderCard={(card) => <PersonCard person={card} />}
        stackSize={3}
        verticalSwipe={false}
        onSwipedLeft={(i) => handleSwipe(i, 'left')}
        onSwipedRight={(i) => handleSwipe(i, 'right')}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: 'red',
                color: 'white',
                fontSize: 24,
              },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: 'green',
                color: 'white',
                fontSize: 24,
              },
            },
          },
        }}
        animateCardOpacity
      />
    </View>
  );
});

export default SwipeDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
