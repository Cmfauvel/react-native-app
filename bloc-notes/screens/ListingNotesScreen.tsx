import React, { useState } from 'react';
import { FlatList, ListViewBase, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AddItem, { IItem } from '../components/AddItem';
import Item from '../components/Item';

const items = [
  { title: 'Native app', description: 'Build a app with react native', status: 'On doing' as 'On doing', id: 1},
  { title: 'Cdc', description: 'Write the folder wich will support final project', status: 'To do' as 'To do', id: 2}
]

export default function ListingNotesScreen({ navigation }: RootTabScreenProps<'Listing'>) {
  const [blocNotes, setBlocNotes] = useState<IItem[]>([]);
  return (
    
    <View style={styles.contentWrapper}>
        <FlatList data={items} style={styles.list}
        renderItem={
          ({item}) => 
            <Item id={item.id} title={item.title} description={item.description} status={item.status} ></Item>
        }>
        </FlatList>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: 0
  },
  listItem: {
    flexDirection: 'row',
    width: '100%'
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
