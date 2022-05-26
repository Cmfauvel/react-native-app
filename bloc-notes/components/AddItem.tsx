import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export interface IItem {
  title: string;
  id: number;
  description: string;
  status: 'To do' | 'On doing' | 'Done';
}

interface Props {
  setBlocNotes: React.Dispatch<React.SetStateAction<IItem[]>>;
  blocNotes: IItem[];
  item?: IItem;
  type?: "edit" | "add";
}

const AddItem: React.FC<Props> = ({blocNotes, setBlocNotes, item, type="add"}) => {
  console.log(blocNotes, item)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addItem = () => {
    if (!title) {
      Alert.alert('No Item!', 'You need to enter an item');
    } else {
      setBlocNotes([
        ...blocNotes,
        {
          title,
          description: description || '1',
          status: 'To do',
          id: 1
        },
      ]);
      setTitle('');
      setDescription('');
    }
  };
  return (
    <View>
      <Text style={styles.heading}>{type.toLocaleUpperCase()} Notes Item</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={type === "add" ? "Enter title": item?.title}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={type === "add" ? "Enter description": item?.description}
          keyboardType="numeric"
          value={description}
          onChangeText={q => {
            setDescription(q);
          }}
        />
        <TouchableOpacity style={styles.addItemButton} onPress={addItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: "#54A487"
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  addItemButton: {
    backgroundColor: '#54A487',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});
export default AddItem;
