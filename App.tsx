import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { TeamProvider } from './app/context/TeamContext';
import TabNavigation from './app/navigators/TabNavigator';

export default function App() {
    return (
        <TeamProvider>
            <NavigationContainer>
                <TabNavigation />
            </NavigationContainer>
        </TeamProvider>
    );
}
