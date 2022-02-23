import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ListPokemonsScreen from '../screens/ListPokemonsScreen';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';
import RegionsScreen from '../screens/RegionsScreen';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParamList = {
    Regions: undefined;
    RegionList: { region: string };
    DetailView: { name: string };
    SearchScreen: undefined;
};

const RegionStack = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator initialRouteName='Regions'>
            <Stack.Screen name='Regions' component={RegionsScreen} />
            <Stack.Screen
                name='RegionList'
                component={ListPokemonsScreen}
                options={({ route }) => ({ title: route.params.region })}
            />
            <Stack.Screen
                name='DetailView'
                component={PokemonDetailsScreen}
                options={({ route }) => ({
                    title: `Details about ${
                        route.params.name.charAt(0).toUpperCase() +
                        route.params.name.slice(1)
                    }`,
                })}
            />
            {/* <Stack.Screen name='LocationScreen' component={LocationScreen} /> */}
        </Stack.Navigator>
    );
};
const SearchStack = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator initialRouteName='SearchScreen'>
            <Stack.Screen name='SearchScreen' component={SearchScreen} />
            <Stack.Screen
                name='DetailView'
                component={PokemonDetailsScreen}
                options={({ route }) => ({
                    title: `Details about ${
                        route.params.name.charAt(0).toUpperCase() +
                        route.params.name.slice(1)
                    }`,
                })}
            />
            {/* <Stack.Screen name='LocationScreen' component={LocationScreen} /> */}
        </Stack.Navigator>
    );
};

export { RegionStack, SearchStack };
