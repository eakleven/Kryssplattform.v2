import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { RegionStack, SearchStack } from './StackNavigator';
import { FontAwesome5 } from '@expo/vector-icons';
import TeamScreen from '../screens/TeamScreen';
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';

export type RootTabParamList = {
    Home: undefined;
    Teams: undefined;
    RegionsList: undefined;
    Search: undefined;
};

const TabNavigation = () => {
    const Tab = createBottomTabNavigator<RootTabParamList>();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name='list' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='Teams'
                component={TeamScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome5
                            name={focused ? 'grin-hearts' : 'heart'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchStack}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome5
                            name={focused ? 'frown' : 'search'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='RegionsList'
                component={RegionStack}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome5
                            name={focused ? 'frown' : 'search'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;
