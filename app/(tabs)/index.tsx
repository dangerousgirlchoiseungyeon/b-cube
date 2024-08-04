import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';

const TabOneScreen =() => {
  
  const [namePressed, setNamePressed] = useState(false);
  const [emailPressed, setEmailPressed] = useState(false);
  const [agePressed, setAgePressed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(''); 
  const [hobby, setHobby] = useState('');
  

  const [isNameCompleted, setIsNameCompleted] = useState(false);
  const [isEmailCompleted, setIsEmailCompleted] = useState(false);
  const [isAgeCompleted, setIsAgeCompleted] = useState(false);
  const [displayHobby, setDisplayHobby] = useState('');


  const handleNamePress = () => {
    setIsNameCompleted(!isNameCompleted);
    Alert.alert(isNameCompleted ? '이름 수정 완료' : '이름 입력 완료', `이름: ${name}`);
  };

  const handleEmailPress = () => {
    setIsEmailCompleted(!isEmailCompleted);
    Alert.alert(isEmailCompleted ? '이메일 수정 완료' : '이메일 입력 완료', `이메일: ${email}`);
  };

  const handleAgePress = () => {
    setIsAgeCompleted(!isAgeCompleted);
    Alert.alert(isAgeCompleted ? '나이 수정 완료' : '나이 입력 완료', `나이: ${age}`);
  };

  const handleHobbyPress = () => {
    setDisplayHobby(hobby);
  };


  return (
  <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    
    <Text>본인 소개 페이지</Text>

    <View> 

      <Text>이름: {name}</Text>
      <TextInput
        style={{ borderWidth:1, borderColor: '#000', padding: 3, margin: 10}}
        value={name}
        onChangeText={(text)=>setName(text)}
        />

      <Button
      title={isNameCompleted ? '수정' : '완료'}
      onPress={handleNamePress}
    
    />
    </View>
  

    <View>
      <Text>이메일: {email}</Text>
      <TextInput 
        style={{ borderWidth:1, borderColor: '#000', padding: 3, margin: 10}}
        value={email}
        onChangeText={(text)=>setEmail(text)}  
        />

      <Button
      title={isEmailCompleted ? '수정' : '완료'}
      onPress={handleEmailPress}
    
    />
    </View>

    <View>
      <Text>나이: {age}</Text>
      <TextInput 
      style={{ borderWidth:1, borderColor: '#000', padding: 3, margin: 10}}
      value={age}
      onChangeText={(text)=>setAge(text)}
      />

      <Button
      title={isAgeCompleted ? '수정' : '완료'}
      onPress={handleAgePress}
      
    />
    </View>
    <View>
    <Text>취미: {hobby}</Text>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#000', padding: 3, marginBottom: 10 }}
          value={hobby}
          onChangeText={(text) => setHobby(text)}
          placeholder='새로운 추가'
        />
        
        <Button 
          title='추가' 
          onPress={handleHobbyPress} 
        />
        
        <Text style={{ fontSize: 16, marginTop: 5 }}>{displayHobby}</Text>
      </View>



  </View>  
  )


}

export default TabOneScreen 
