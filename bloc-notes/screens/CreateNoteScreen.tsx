import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AddItem, { IItem } from '../components/AddItem';

import EditScreenInfo from '../components/EditScreenInfo';
import Item from '../components/Item';
import { Text, View } from '../components/Themed';

export default function CreateNoteScreen() {
  const [blocNotes, setBlocNotes] = useState<IItem[]>([]);
  return (
    
    <View style={styles.contentWrapper}>
    <AddItem setBlocNotes={setBlocNotes} blocNotes={blocNotes} /><FlatList
        data={blocNotes}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => (
          <Item title={item.title} description={item.description} status={item.status} id={item.id}/>
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
