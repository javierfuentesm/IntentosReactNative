import React from 'react';
import { Button, View, Text,TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenido</Text>

        <TextInput
          style={{height: 40}}
          placeholder="Ingresa tu nombre completo"
          onChangeText={(nombre) =>  this.setState({text:nombre})}
          
        />
        <Button
          title="Ingresar"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              otherParam: this.state.text,
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenido</Text>
      
        <Text>
        
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
     
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export default createAppContainer(RootStack);
