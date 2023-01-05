import { View, Text, FlatList, Dimensions, Platform } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonPaginate';
import { styles } from '../theme/AppTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

export default function SearchScreen() {
    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [pokemonFiltred, setPokemonFiltred] = useState<SimplePokemon[]>([]);

    const [termino, setTermino] = useState('');

    useEffect(() => {
        if (isNaN(Number(termino))) {
            setPokemonFiltred(
                simplePokemonList.filter(poke =>
                    poke.name
                        .toLocaleLowerCase()
                        .includes(termino.toLocaleLowerCase()),
                ),
            );
        } else {
            setPokemonFiltred([
                simplePokemonList.find(poke => poke.id === termino)!,
            ]);
        }

        if (termino.length === 0) {
            return setPokemonFiltred([]);
        }
    }, [termino]);

    if (isFetching) {
        return <Loading />;
    }

    return (
        <View style={{ flex: 1, marginHorizontal: 20 }}>
            <SearchInput
                onDebounce={value => setTermino(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: Platform.OS === 'ios' ? top : top + 30,
                }}
            />
            {/* RESULTADO DE BUSQUEDA USANDO EL FLATLIST */}
            <FlatList
                data={pokemonFiltred}
                keyExtractor={pokemon => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                // header
                ListHeaderComponent={
                    <Text
                        style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 60,
                            marginTop: Platform.OS === 'ios' ? top : top + 60,
                        }}>
                        {termino}
                    </Text>
                }
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
            />
        </View>
    );
}
