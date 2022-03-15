import { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from './colors';

import { Fontisto } from '@expo/vector-icons'; 

const STORAGE_KEY="@toDos";

export default function Todo({navigation}) {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  
  useEffect(() => {
    loadToDos();
  },[]);

  const onChangeText = (payload) => setText(payload);
  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    s !== null ? setToDos(JSON.parse(s)) : null; 
  }
  const addToDo = async () => {
    if(text === ""){
      return 
    }

    const newToDos = {...toDos, [Date.now()]: {text, working}};
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  }
  const deleteToDo = (key) => {
    Alert.alert("Delete To Do", "Are you sure?", [
      {text: "Cancel"},
      {text: "Confirm", onPress: () => {
        const newToDos = {...toDos};
        delete newToDos[key];
        setToDos(newToDos);
        saveToDos(newToDos);
      }},
    ]);
    return;
  }
  const tapClick = () => {
    navigation.navigate('WEATHER');
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btnText, color: working ? theme.white : theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{...styles.btnText, color: working ? theme.grey : theme.white}}>Travel</Text>
        </TouchableOpacity>
      </View>
      <TextInput
      onSubmitEditing={addToDo} 
      onChangeText={onChangeText} 
      value={text} 
      returnKeyType='done' 
      keyboardType='default' 
      placeholder={working ? "Add a to do" : "Where do you want to go?"} 
      style={styles.input}/>
      <ScrollView>{Object.keys(toDos).map((key) =>
      toDos[key].working === working ? (
      <View style={styles.toDo} key={key}>
        <Text style={styles.toDoText}>{toDos[key].text}</Text>
        <TouchableOpacity onPress={() => deleteToDo(key)}>
          <Fontisto name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>
      ) : null
      )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 30,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 25,
    fontWeight: "900",
  },
});
