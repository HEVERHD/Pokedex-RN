import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RooStackParams } from '../navigator/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import usePokemonFull from '../hooks/usePokemonFull';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RooStackParams, 'PokemonScreen'> {}

export default function PokemonScreen({ navigation, route }: Props) {
    const { SimplePokemon, color } = route.params;
    const { top } = useSafeAreaInsets();
    const { id, name, picture } = SimplePokemon;
    const { isLoading, pokemon } = usePokemonFull(id);

    const navigate = navigation;

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    ...styles.headerContainer,
                    backgroundColor: color,
                }}>
                {/* Back Bottom */}
                <TouchableOpacity
                    onPress={() => navigate.navigate('HomeScreen')}
                    style={{ ...styles.backBottom, top: top + 20 }}
                    activeOpacity={0.8}>
                    <Icon name="arrow-back-outline" color="white" size={38} />
                </TouchableOpacity>

                {/* Nombre de pokemon */}

                <Text
                    style={{
                        ...styles.pokemonName,
                        top: top + 60,
                    }}>
                    {name + '\n'} # {id}
                </Text>

                {/* Pokebola Blanca */}

                <Image
                    style={{
                        ...styles.pokeballfondo,
                    }}
                    source={require('../assets/pokebola-blanca.png')}
                />
                {/* Imagen del  Pokemon */}

                <FadeInImage uri={picture} style={{ ...styles.pokemonImage }} />
            </View>

            {/* DETALLES Y LOADING */}

            {isLoading ? (
                <View style={styles.loading}>
                    {/* <Image
                    source={require('../assets/pokemon_loading.gif')}
                    style={{}}
                /> */}
                    <ActivityIndicator color={color} size={80} />
                </View>
            ) : (
                <PokemonDetails pokemon={pokemon} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backBottom: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeballfondo: {
        width: 200,
        height: 200,
        bottom: -20,
        opacity: 0.7,
    },

    pokemonImage: {
        position: 'absolute',
        width: 250,
        height: 250,
        bottom: -15,
    },

    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
