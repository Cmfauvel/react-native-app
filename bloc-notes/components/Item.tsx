import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../types';
import { IItem } from './AddItem';
import { FeatherIcon } from './Icon';

//NAVIGATION
type PropsNavigation = {
  target: keyof RootStackParamList;
  copy: string;
  navigationParams?: {};
};

type genericScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  PropsNavigation['target']
>;

const Item: React.FC<IItem> = ({ title, description, status, id }) => {
  const navigation = useNavigation<genericScreenProp>();
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemName}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.itemRight}>
        <TouchableOpacity style={styles.editButton} onPress={() =>
          navigation.navigate('EditNoteScreen', {
            itemId: id,
            otherParam: 'anything you want here',
          })
        }>
          <FeatherIcon size="large" color='#54A487' name='edit'></FeatherIcon>
        </TouchableOpacity>
        <FeatherIcon size="large" color='#54A487' name={status === 'To do' ? 'eye' : status === 'On doing' ? 'activity' : 'check'}></FeatherIcon>
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: '#54A487',
    marginBottom: 10,
    borderRadius: 5
  },
  editButton: {

  },
  itemLeft: {
    flexDirection: 'column',
    width: '90%'
  },
  itemRight: {
    flexDirection: 'column'
  },
  itemName: {
    fontWeight: '500',
    color: 'white',
  },
  description: {
    color: 'white',
    flexWrap: 'wrap',
    borderWidth: 1,
    overflowEllipsis: 'ellipsis',
    opacity: 0.7
  },
});
export default Item;
