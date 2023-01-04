import { FlatList, Image, Text, ActivityIndicator, View } from 'react-native';
import React from 'react';
import { styles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePokemonPaginate from '../hooks/usePokemonPaginate';
import PokemonCard from '../components/PokemonCard';

export default function HomeScreen() {
    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginate();

    usePokemonPaginate();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <View
                style={{
                    alignItems: 'center',
                }}>
                <FlatList
                    data={simplePokemonList}
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
                                marginBottom: top + 20,
                                paddingBottom: 15,
                            }}>
                            Pokedex
                        </Text>
                    }
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    // infiniteScroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    // footer
                    ListFooterComponent={
                        <ActivityIndicator
                            style={{ height: 100 }}
                            color="grey"
                            size={30}
                        />
                    }
                />
            </View>

            {/*  */}
        </>
    );
}
