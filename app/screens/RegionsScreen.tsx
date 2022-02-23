import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigators/StackNavigator';

const RegionsScreen = ({
    navigation,
}: NativeStackScreenProps<RootStackParamList, 'RegionList'>) => {
    const locations: string[] = [
        'Kanto',
        'Johto',
        'Hoenn',
        'Sinnoh',
        'Unova',
        'Kalos',
        'Alola',
        'Galar',
    ];

    return (
        <View style={styles.container}>
            {locations.map((location: string, key: number) => {
                return (
                    <TouchableHighlight
                        key={key}
                        style={[
                            styles.container,
                            { borderColor: 'black', borderBottomWidth: 1 },
                        ]}
                        onPress={() =>
                            navigation.navigate('RegionList', {
                                region: location,
                            })
                        }
                    >
                        <View>
                            <Text style={styles.text}>{location}</Text>
                        </View>
                    </TouchableHighlight>
                );
            })}
        </View>
    );
};

export default RegionsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        textAlignVertical: 'center',
        color: 'black',
    },
});
