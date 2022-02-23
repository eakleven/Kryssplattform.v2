import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';
import React, { FC } from 'react';
import { IPokemon } from '../../interface/PokemonInterface';

interface IBestPokemon {
    pokemon: IPokemon;
}

const BestPokemon: FC<IBestPokemon> = ({ pokemon }) => {
    const width = Dimensions.get('window').width / 2;

    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={[styles.text, { textAlign: 'center' }]}>
                    {pokemon.name.charAt(0).toUpperCase() +
                        pokemon.name.slice(1)}
                </Text>

                <Image
                    source={{
                        uri: pokemon.sprites?.front_default,
                        width,
                        height: width,
                    }}
                />
            </View>
            <View style={styles.stats}>
                {pokemon.stats?.map((stat, key: number) => {
                    return (
                        <Text style={styles.text} key={key}>
                            {stat.stat.name}: {stat.base_stat}
                        </Text>
                    );
                })}
                <Text style={styles.text}></Text>
            </View>
        </View>
    );
};

export default BestPokemon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    upperContainer: {
        flex: 1,
        flexDirection: 'column',
        top: '10%',
        justifyContent: 'space-around',
    },
    text: { color: 'white', fontSize: 20, textAlign: 'left' },
    stats: { flex: 1 },
});
