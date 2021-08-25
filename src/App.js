import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'likedin':
        Alert.alert(
          'Meu Likedin',
          'https://likedin.com.br/in/vinicius-guedes-841b47194',
        );
        break;
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/vinicius777');
        break;
      case 'facebok':
        Alert.alert(
          'Meu Facebook',
          'https://m.facebook.com/vinicius.guedes.100',
        );
        break;
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabeçalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>VINICIUS GUEDES</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('likedin')}>
              <Icon name="likedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Experiencia Profissional</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>
                ENTER CONSULTORIA Suporte sistema ERP
              </Text>
              <Text style={style.card_content_text}>
                INTEGRAL CS suporte sistema ERP
              </Text>
            </View>
          </View>
        </View>
        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Linguagens e tecnologias</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>
                WEB - Wix, HTML5+CSS3, Javascript
              </Text>
              <Text style={style.card_content_text}>
                MOBILE - Dart(Flutter), Javascript(React Native)
              </Text>
              <Text style={style.card_content_text}>
                BANCO DE DADOS - SQL Server, SQFlite(sqlite para Flutter)
              </Text>
              <Text style={style.card_content_text}>EXTRA - Python</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabeçalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backfaceVisibility: '#FFF',
  },
  card_content: {
    marginTop: 20,
  },
  card_content_tex: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
