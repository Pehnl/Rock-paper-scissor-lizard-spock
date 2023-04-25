import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [user, setUser] = useState('');
  const [bot, setBot] = useState('');
  const [result, setResult] = useState('');

  function getResult(userMove) {
    const choices = ['✌', '✋', '👊','🖖','🦎'];
    const random = Math.floor(Math.random() * 3);
    const botMove = choices[random];

    setBot(botMove);
    setUser(userMove);

    if (userMove === botMove) {
      return setResult('Empate');
    }

    if (
      userMove === '✌' && botMove === '✋' ||
      userMove === '✋' && botMove === '👊' ||
      userMove === '👊' && botMove === '✌' ||
      userMove === '✌' && botMove === '🦎' ||
      userMove === '✋' && botMove === '🖖' ||
      userMove === '👊' && botMove === '🦎' ||
      userMove === '🖖' && botMove === '✌' || 
      userMove === '🖖' && botMove === '👊' ||
      userMove === '🦎' && botMove === '🖖' ||
      userMove === '🦎' && botMove === '✋'
    ) {
      return setResult('Você ganhou!');
    }

    return setResult('Você perdeu!');
  }

  return (
    <View style={styles.container}>
      <Text>Voce: { user }</Text>
      <Text>Computador: { bot }</Text>
      <Text>Resultado: { result }</Text>

      <View style={styles.choices}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => getResult('✌')}
        >
          <Text style={styles.btnText}>✌</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => getResult('✋')}
        >
          <Text style={styles.btnText}>✋</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => getResult('👊')}
        >
          <Text style={styles.btnText}>👊</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => getResult('🖖')}
        >
          <Text style={styles.btnText}>🖖</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => getResult('🦎')}
        >
          <Text style={styles.btnText}>🦎</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  choices: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  btn: {
    backgroundColor: '#555',
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 30
  }
});
