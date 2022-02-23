import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigators/StackNavigator';
import PokemonItem from '../components/Pokemon/PokemonItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import useApi from '../hooks/useApi';
import { IPokemon, IPokemonList } from '../interface/PokemonInterface';
import PokemonApi from '../api/PokemonApi';
import ListItem from '../components/List/ListItem';
import { ListItemSeperator } from '../components/List/ListItemSeperator';
import {
    NavigationProp,
    NavigationRouteContext,
    useNavigation,
} from '@react-navigation/native';
import ErrorView from '../components/ErrorView';

const ListPokemonsScreen = ({
    route,
}: NativeStackScreenProps<RootStackParamList, 'RegionList'>) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const {
        data: pokemonList,
        loading,
        error,
        request: getRegion,
    } = useApi<IPokemonList>(PokemonApi.getRegion);

    useEffect(() => {
        getRegion(route.params.region);
    }, []);

    const [pokemons, setPokemons] = useState<IPokemon[]>([]);

    useEffect(() => {
        if (pokemonList) {
            setPokemons(pokemonList.results);
        }
    }, [pokemonList]);

    const onPress = (name: string) => {
        navigation.navigate('DetailView', { name: name });
    };

    return (
        <SafeAreaView>
            <View>
                <ActivityIndicator animating={loading} size='large' />
                {error && <ErrorView />}
                {!!pokemons && (
                    <FlatList
                        data={pokemons}
                        keyExtractor={(item, index) => index + item.name}
                        renderItem={({ item }) => (
                            <ListItem title={item.name} onPress={onPress} />
                        )}
                        ItemSeparatorComponent={() => <ListItemSeperator />}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default ListPokemonsScreen;

const styles = StyleSheet.create({});
