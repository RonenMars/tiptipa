/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// @ts-ignore
import React, { Node } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

import Hello from './src/Components/Hello';

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
                <Header />
                <Hello name="test" baseEnthusiasmLevel={2} />
            </ScrollView>
        </SafeAreaView>
    );
};
export default App;
