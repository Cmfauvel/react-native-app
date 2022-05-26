import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import AddItem, { IItem } from "../components/AddItem";
import Item from "../components/Item";
import { View } from "../components/Themed";
import { RootStackParamList } from "../types";

//NAVIGATION
type ScreenNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

export const EditNoteScreen: React.FC<Props<"EditNoteScreen">> = ({
  route,
}) => {
  const { itemId, otherParam } = route.params;
  console.log(itemId)
  const items = [
    { title: 'Native app', description: 'Build a app with react native', status: 'On doing' as 'On doing', id: 1},
    { title: 'Cdc', description: 'Write the folder wich will support final project', status: 'To do' as 'To do', id: 2},
    { title: 'UML', description: 'Do all UML schemes for conception', status: 'Done' as 'Done', id: 3},
    { title: 'Another story front', description: 'Build front', status: 'On doing' as 'On doing', id: 4},
    { title: 'Another story server', description: 'Build api', status: 'On doing' as 'On doing', id: 5},
    { title: 'Pro folder', description: 'Write the folder wich will support final project', status: 'To do' as 'To do', id: 6}
  ]
  const targetItem = items.find(item => item.id === itemId)
  const [blocNotes, setBlocNotes] = useState<IItem[]>([]);
  return (
    <View style={styles.contentWrapper}>
      <AddItem setBlocNotes={setBlocNotes} blocNotes={blocNotes} item={targetItem} type="edit"/>
      <FlatList
        data={blocNotes}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  contentWrapper: {
    padding: 20,
  },
});
