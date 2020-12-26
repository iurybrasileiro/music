/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import { setDefaultFontFamily } from './setDefaultFontFamily';

setDefaultFontFamily();

AppRegistry.registerComponent(appName, () => App);
