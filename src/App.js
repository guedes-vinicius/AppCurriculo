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
import Card from './components/Card';

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

        <Card titulo="Tecnologias">
          <Text style={style.card_content_text}>
            MOBILE - Dart(Flutter), Javascript(React Native)
          </Text>
          <Text style={style.card_content_text}>
            BANCO DE DADOS - SQL Server, SQFlite(sqlite para Flutter)
          </Text>
          <Text style={style.card_content_text}>EXTRA - Python</Text>
        </Card>
        <Card titulo="Experiencias Profissionais">
          <Text style={style.card_content_text}>
            Suporte TI - Enter Consultoria
          </Text>
          <Text style={style.card_content_text}>
            Suporte TI - Integral Sistemas
          </Text>
        </Card>
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
  card_content_tex: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
