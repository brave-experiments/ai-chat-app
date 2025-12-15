import {AppRegistry} from 'react-native';
import App from '../App';

// Register the app
AppRegistry.registerComponent('BraveChat', () => App);

// Mount to DOM
AppRegistry.runApplication('BraveChat', {
  rootTag: document.getElementById('root'),
});
