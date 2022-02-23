import {
    ActivityIndicator,
    ActivityIndicatorBase,
    Alert,
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import { RootStackParamList } from '../navigators/StackNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useApi from '../hooks/useApi';
import { IPokemon } from '../interface/PokemonInterface';
import PokemonApi from '../api/PokemonApi';
import PokemonItem from '../components/Pokemon/PokemonItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TeamContext, TeamContextType } from '../context/TeamContext';

const PokemonDetailsScreen = ({
    route,
}: NativeStackScreenProps<RootStackParamList, 'DetailView'>) => {
    const { addToTeam } = useContext(TeamContext) as TeamContextType;

    const {
        data: pokemon,
        loading,
        error,
        request: getPokemon,
    } = useApi<IPokemon>(PokemonApi.getPokemon);

    useEffect(() => {
        getPokemon(route.params.name);
    }, []);

    const addToFavourite = () => {
        addToTeam(pokemon as IPokemon);
        Alert.alert(
            `New favourite added! ${pokemon?.name} is now part of your team!`
        );
    };

    return (
        <View>
            <ActivityIndicator animating={loading} size='large' />
            {error && (
                <>
                    <Text>An Error has occured.</Text>
                </>
            )}
            {!error && !loading && pokemon && (
                <>
                    <PokemonItem pokemon={pokemon} />
                    <View>
                        <Button
                            title='Add to favourite'
                            onPress={addToFavourite}
                        />
                    </View>
                </>
            )}
        </View>
    );
};

export default PokemonDetailsScreen;

const styles = StyleSheet.create({});
