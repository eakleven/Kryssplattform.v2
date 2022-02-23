import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { TeamProvider } from './app/context/TeamContext';
import TabNavigation from './app/navigators/TabNavigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
    // const [loaded, setLoaded] = useState<boolean>(false);

    // const fetchFonts = () => {
    //     return Font.loadAsync({
    //         'Pokemon Hollow': require('./assets/fonts/Pokemon Hollow.ttf'),
    //     });
    // };
    // if (!loaded) {
    //     return (
    //         <AppLoading
    //             startAsync={fetchFonts}
    //             onFinish={() => setLoaded(true)}
    //             onError={console.warn}
    //         />
    //     );
    // }
    // if (loaded) {
    return (
        <TeamProvider>
            <NavigationContainer>
                <TabNavigation />
            </NavigationContainer>
        </TeamProvider>
    );
}
// }
