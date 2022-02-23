import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Button,
    Alert,
    Linking,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';

const HomeScreen = () => {
    const [sound, setSound] = useState<Sound>();

    const width = Dimensions.get('window').width / 2;

    const getPermission = async (): Promise<Boolean> => {
        const { granted } = await Audio.requestPermissionsAsync();
        if (granted) return true;

        Alert.alert('Missing access', 'Need access to use images', [
            { text: 'Go to settings', onPress: Linking.openSettings },
        ]);
        Linking.openSettings();
        return false;
    };

    const startMusic = async () => {
        const granted = getPermission();
        if (!granted) return;
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/sounds/PokemonIntro.mp3')
        );
        setSound(sound);
        await sound.playAsync();
    };
    const stopMusic = () => {
        sound?.pauseAsync();
    };

    useEffect(() => {
        startMusic();
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Image
                    source={require('../../assets/images/pokemonLogo.png')}
                    style={{
                        width: '100%',
                        height: width / 1.3,
                        marginTop: '5%',
                    }}
                />
                <Text style={styles.text}>
                    Create your own team, and get info about your current top
                    pokemon!
                </Text>
                <Button title={'Play music'} onPress={startMusic} />
                <Button title={'Stop music'} onPress={stopMusic} />
            </SafeAreaView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#a6dcff' },
    text: { fontSize: 24, color: 'black' },
    image: { width: 500 },
});
