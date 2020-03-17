import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { Root } from 'native-base';
import { name as appName } from './app.json';
export default class MainComponent extends Component {
    render() {
        return (
            <Root>
                <App />
            </Root>
        );
    }
}
AppRegistry.registerComponent(appName, () => MainComponent);
