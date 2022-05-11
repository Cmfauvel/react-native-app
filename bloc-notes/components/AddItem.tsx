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
  description: string;
}

interface Props {
  setBlocNotes: React.Dispatch<React.SetStateAction<IItem[]>>;
  blocNotes: IItem[];
}

const AddItem: React.FC<Props> = ({blocNotes, setBlocNotes}) => {
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
        },
      ]);
      setTitle('');
      setDescription('');
    }
  };
  return (
    <View>
      <Text style={styles.heading}>Add Notes Item</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter description"
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
  },
  addItemButton: {
    backgroundColor: '#eb8634',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});
export default AddItem;
