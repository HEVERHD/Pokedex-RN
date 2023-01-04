import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
import React from 'react';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useState, useEffect, useRef } from 'react';

import ImageColors from 'react-native-image-colors';

const windowsWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export default function PokemonCard({ pokemon }: Props) {
    const [bgColor, setbgColor] = useState('grey');
    const isMounted = useRef(true);

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, { fallback: 'grey' }).then(
            colors => {
                if (!isMounted.current) return;

                colors.platform === 'android'
                    ? setbgColor(colors.vibrant || 'grey')
                    : setbgColor(colors.platform || 'grey');
            },
        );
        return () => {
            isMounted.current = false;
        };
    }, []);
    return (
        <TouchableOpacity activeOpacity={0.6}>
            <View
                style={{
                    ...styles.cardCOntainer,
                    width: windowsWidth * 0.4,
                    backgroundColor: bgColor,
                }}>
                {/* Nombre del pokemon y ID */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name} {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View style={styles.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardCOntainer: {
        marginHorizontal: 10,
        // backgroundColor: 'grey',
        height: 120,
        width: 150,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -20,
        bottom: -20,
        opacity: 0.5,
    },

    pokemonImage: {
        width: 110,
        height: 110,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
});
