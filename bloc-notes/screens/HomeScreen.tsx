import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AddItem, { IItem } from '../components/AddItem';

import Item from '../components/Item';
import { Text, View } from '../components/Themed';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../types';

const items = [
    { title: 'Native app', description: 'Build a app with react native', status: 'On doing' as 'On doing', id: 1},
    { title: 'Cdc', description: 'Write the folder wich will support final project', status: 'To do' as 'To do', id: 2},
    { title: 'UML', description: 'Do all UML schemes for conception', status: 'Done' as 'Done', id: 3},
    { title: 'Another story front', description: 'Build front', status: 'On doing' as 'On doing', id: 4},
    { title: 'Another story server', description: 'Build api', status: 'On doing' as 'On doing', id: 5},
    { title: 'Pro folder', description: 'Write the folder wich will support final project', status: 'To do' as 'To do', id: 6}
  ]

//NAVIGATION
type ScreenNavigationProp<
  T extends keyof RootStackParamList
> = StackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

export default function HomeScreen() {
  const [blocNotes, setBlocNotes] = useState<IItem[]>([]);
  return (
    
    <ScrollView>
        <View style={styles.contentWrapper}>
            <Text style={styles.title}>Task to do</Text>
        <FlatList data={items.filter(item => item.status === 'To do')} style={styles.list}
        renderItem={
          ({item}) => 
            <Item id={item.id} title={item.title} description={item.description} status={item.status} ></Item>
        }> 
        </FlatList>
        <Text style={styles.title}>Task on doing</Text>
        <FlatList data={items.filter(item => item.status === 'On doing')} style={styles.list}
        renderItem={
          ({item}) => 
            <Item id={item.id} title={item.title} description={item.description} status={item.status} ></Item>
        }> 
        </FlatList>...
        </View>
        
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 0,
    minHeight: 240,
    width: '100%'
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    backgroundColor: '#54A487',
    padding: '0.7rem',
    borderRadius: 2.5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
  contentWrapper: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '100%',
    overflow: 'scroll'
  },
});
