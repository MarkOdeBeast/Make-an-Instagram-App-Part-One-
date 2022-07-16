import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';

function App() {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [confirmPassword, setConfirmPassword] = useState(' ');
  const [name, setName] = useState(' ');
  const [birthday, setBirthday] = useState(' ');
  const [breed, setBreed] = useState(' ');
  const [toy, setToy] = useState(' ');

  function confirmPasswordsMatch() {
    const { nativeEvent: text } = props;
    if(text !== password) {
      alert('Passwords do not match, please try again.');
    }
  }

  return (
    <ScrollView style={{ 
      flex: 1, 
      justifyContent: 'center', 
      backgroundColor: '#ecf0f1' 
    }}>
      <InputWithLabel
        label='Email'
        placeholder="Enter your pet's email here."
        value={email}
        onChangeText={setEmail}
       />
      <InputWithLabel
        label='Password'
        placeholder="Enter your pet's password here."
        value={password}
        onChangeText={setPassword}
        secureTextEntry
       />
      <InputWithLabel
        label='Confirm Password'
        placeholder="Confirm your pet's password here."
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        onSubmitEditing={() => {}}
       />
      <InputWithLabel
        label='Name'
        placeholder="Enter your pet's name here."
        value={name}
        onChangeText={setName}
       />
      <InputWithLabel
        label='Birthday'
        placeholder="Enter your pet's birthday here."
        value={birthday}
        onChangeText={setBirthday}
       />
      <InputWithLabel
        label='Breed'
        placeholder="Enter the breed type here."
        value={breed}
        onChangeText={setBreed}
       />
      <InputWithLabel
        label='Toy'
        placeholder="Enter your pet's favourite toy here."
        value={toy}
        onChangeText={setToy}
       />
    </ScrollView>
  )
}

function InputWithLabel(props) {
  const { label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing } = props;
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ padding: 8, fontSize: 18 }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        style={{ padding: 8, fontSize: 18 }}
       />
    </View>
  )
}

export default App;
