import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import React, { FC, useEffect } from 'react';
import useApi from '../../hooks/useApi';
import { IPokemon } from '../../interface/PokemonInterface';
import PokemonApi from '../../api/PokemonApi';

interface IPokemonItem {
    pokemon: IPokemon;
}

const PokemonItem: FC<IPokemonItem> = ({ pokemon }) => {
    const width = Dimensions.get('window').width / 2;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.character}>{pokemon.name}</Text>
            </View>
            <Text>{pokemon.order} </Text>
            <Image
                source={{
                    uri: pokemon.sprites?.front_default,
                    width,
                    height: width,
                }}
            />
            <Text>Weight: {pokemon.weight}</Text>
        </View>
    );
};

export default PokemonItem;

const styles = StyleSheet.create({
    container: { alignItems: 'center' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    character: { fontSize: 34, textTransform: 'capitalize', marginBottom: 8 },
});
