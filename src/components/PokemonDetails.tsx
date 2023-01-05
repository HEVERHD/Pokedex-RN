import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { ScrollView } from 'react-native-gesture-handler';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

export default function PokemonDetails({ pokemon }: Props) {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}>
            <View style={{ ...styles.container, marginTop: 370 }}>
                <Text style={{ ...styles.title }}> Types </Text>

                <View style={{ flexDirection: 'row' }}>
                    {pokemon.types.map(({ type }) => (
                        <Text
                            key={type.name}
                            style={{ ...styles.regularText, marginRight: 10 }}>
                            {type.name}
                        </Text>
                    ))}
                </View>
                {/* Peso Pokemon */}
                <Text style={{ ...styles.title }}> Peso </Text>
                <Text style={{ ...styles.regularText }}>
                    {pokemon.weight}kg{' '}
                </Text>
            </View>

            {/* Sprites */}
            <View style={{ ...styles.container, marginTop: 20 }}>
                <Text style={{ ...styles.title }}> Sprites </Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basciSrpite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={styles.basciSrpite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={styles.basciSrpite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={styles.basciSrpite}
                    />
                </ScrollView>
            </View>
            {/* Habilidades */}
            <View style={{ ...styles.container }}>
                <Text style={{ ...styles.title }}> Habilidades </Text>
                <View style={{ flexDirection: 'row' }}>
                    {pokemon.abilities.map(({ ability }) => (
                        <Text
                            key={ability.name}
                            style={{ ...styles.regularText, marginRight: 10 }}>
                            {ability.name}
                        </Text>
                    ))}
                </View>
            </View>
            {/* Movimientos */}
            <View style={{ ...styles.container }}>
                <Text style={{ ...styles.title }}> Movimientos </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {pokemon.moves.map(({ move }) => (
                        <Text
                            key={move.name}
                            style={{ ...styles.regularText, marginRight: 10 }}>
                            {move.name}
                        </Text>
                    ))}
                </View>
            </View>
            {/* Stats */}
            <View style={{ ...styles.container }}>
                <Text style={{ ...styles.title }}> Stats </Text>
                <View>
                    {pokemon.stats.map((stat, i) => (
                        <View
                            style={{ flexDirection: 'row' }}
                            key={stat.stat.name + i}>
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                    width: 150,
                                }}>
                                {stat.stat.name}
                            </Text>

                            <Text
                                key={stat.base_stat}
                                style={{
                                    ...styles.regularText,
                                    fontWeight: 'bold',
                                }}>
                                {stat.effort}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: -5,
    },

    regularText: {
        fontSize: 20,
    },
    basciSrpite: {
        width: 120,
        height: 120,
        top: -10,
    },
});
