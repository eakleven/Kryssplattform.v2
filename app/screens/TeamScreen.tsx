import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { TeamContext, TeamContextType } from '../context/TeamContext';
import ListItem from '../components/List/ListItem';
import { ListItemSeperator } from '../components/List/ListItemSeperator';
import { IPokemon } from '../interface/PokemonInterface';
import TeamStats from '../components/Pokemon/TopPokemon';
import SelectedPokemon from '../components/Pokemon/SelectedPokemon';
import TopPokemon from '../components/Pokemon/TopPokemon';

const TeamScreen = () => {
    const { team, deleteFromTeam } = useContext(TeamContext) as TeamContextType;
    const [activePokemon, setActivePokemon] = useState<IPokemon>();

    const onPress = (name: string) => {
        let pokemon = team.find((pokemon) => pokemon.name === name);
        if (pokemon) {
            setActivePokemon(pokemon);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.bestPokemon}>
                    {activePokemon && (
                        <SelectedPokemon pokemon={activePokemon} />
                    )}
                </View>
                <View style={styles.teamStats}>
                    <TopPokemon team={team} />
                </View>
            </View>
            <View style={styles.teamList}>
                <FlatList
                    data={team}
                    keyExtractor={(item, index) => index + item.name}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.name}
                            onPress={onPress}
                            deleteFromFavourite={deleteFromTeam}
                            imageUri={item.sprites?.front_default}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListItemSeperator />}
                />
            </View>
        </View>
    );
};

export default TeamScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#7dd87d',
    },
    bestPokemon: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
    },
    teamStats: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#4c9173',
    },
    teamList: { flex: 1 },
});
