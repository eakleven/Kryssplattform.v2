import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { IPokemon } from '../../interface/PokemonInterface';
import PokemonApi from '../../api/PokemonApi';

interface ITeamStats {
    team: IPokemon[];
}

const TeamStats: FC<ITeamStats> = ({ team }) => {
    const width = Dimensions.get('window').width / 2;

    const [topPokemon, setTopPokemon] = useState<IPokemon>();

    const calculateTopPokemon = () => {
        let _topPokemon = 0;
        if (topPokemon) {
            if (topPokemon.stats) {
                _topPokemon = topPokemon.stats?.reduce(
                    (a, b) => a + b.base_stat,
                    0
                );
            }
            if (!team.includes(topPokemon)) {
                _topPokemon = 0;
            }
        }
        team.forEach((pokemon) => {
            let value = 0;
            if (pokemon.stats) {
                value = pokemon.stats.reduce((a, b) => a + b.base_stat, 0);
            }
            if (value > _topPokemon) {
                setTopPokemon(pokemon);
            }
        });
    };

    useEffect(() => {
        calculateTopPokemon();
    }, [team]);

    return (
        <View style={styles.container}>
            {topPokemon && (
                <>
                    <Text style={styles.text}>Top pokemon</Text>
                    <Text style={styles.text}>
                        {topPokemon.name[0].toUpperCase() +
                            topPokemon.name.slice(1)}
                    </Text>
                    <Image
                        source={{
                            uri: topPokemon.sprites?.front_default,
                            width,
                            height: width,
                        }}
                    />
                </>
            )}
        </View>
    );
};

export default TeamStats;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', flexDirection: 'column' },
    text: { color: 'white', fontSize: 20, textAlign: 'center' },
});
