import {
    ActivityIndicator,
    FlatList,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TextInput,
    TextInputChangeEventData,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useApi from '../hooks/useApi';
import { IPokemonList } from '../interface/PokemonInterface';
import PokemonApi from '../api/PokemonApi';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/StackNavigator';
import ListItem from '../components/List/ListItem';
import { ListItemSeperator } from '../components/List/ListItemSeperator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from '../navigators/TabNavigator';

const SearchScreen = ({
    route,
}: NativeStackScreenProps<RootTabParamList, 'Search'>) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const {
        data: pokemonList,
        loading,
        error,
        request: getAll,
    } = useApi<IPokemonList>(PokemonApi.getAll);

    const [list, setList] = useState<string[]>([]);
    const [search, setSearch] = useState<string[]>([]);

    useEffect(() => {
        getAll();
    }, []);

    useEffect(() => {
        setSearch(list);
    }, [list]);

    useEffect(() => {
        if (pokemonList) {
            let _list = pokemonList.results.map((pokemon) => pokemon.name);
            setList(_list);
        }
    }, [pokemonList]);

    const handleChange = (
        e: NativeSyntheticEvent<TextInputChangeEventData>
    ) => {
        let text = e.nativeEvent.text.toLowerCase();
        let _search = [...list];
        _search = _search.filter((pokemon) => pokemon.includes(text));
        setSearch(_search);
    };

    const onPress = (name: string) => {
        navigation.navigate('DetailView', { name: name });
    };

    return (
        <View style={styles.container}>
            <ActivityIndicator animating={loading} size='large' />
            <TextInput
                style={styles.input}
                placeholder='Search'
                onChange={(e) => handleChange(e)}
            />
            {error && (
                <SafeAreaView>
                    <Text>Error happened</Text>
                </SafeAreaView>
            )}
            {!!list && (
                <FlatList
                    data={search}
                    keyExtractor={(item, index) => index + item}
                    renderItem={({ item }) => (
                        <ListItem title={item} onPress={() => onPress(item)} />
                    )}
                    ItemSeparatorComponent={() => <ListItemSeperator />}
                />
            )}
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    input: { height: 40, fontSize: 30, margin: 12, borderWidth: 1 },
});
