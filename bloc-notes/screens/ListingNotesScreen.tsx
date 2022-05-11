import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AddItem, { IItem } from '../components/AddItem';
import Item from '../components/Item';

export default function ListingNotesScreen({ navigation }: RootTabScreenProps<'Listing'>) {
  const [blocNotes, setBlocNotes] = useState<IItem[]>([]);
  return (
    
    <View style={styles.contentWrapper}>
    <AddItem setBlocNotes={setBlocNotes} blocNotes={blocNotes} /><FlatList
        data={blocNotes}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => (
          <Item title={item.title} description={item.description} />
        )} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  contentWrapper: {
    padding: 20,
  },
});
