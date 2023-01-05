import {
    View,
    StyleSheet,
    TextInput,
    Platform,
    StyleProp,
    ViewStyle,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

interface Props {
    onDebounce: (value: string) => void;
    style?: StyleProp<ViewStyle>;
}

export default function SearchInput({ style, onDebounce }: Props) {
    const [textValue, setTextValue] = useState('');
    const debounce = useDebounce(textValue);

    useEffect(() => {
        onDebounce(debounce);
    }, [debounce]);

    console.log(textValue);

    return (
        <View style={{ ...styles.container, ...(style as any) }}>
            <View style={styles.textBackground}>
                <TextInput
                    style={{
                        ...styles.textInput,
                        top: Platform.OS === 'ios' ? 0 : 2,
                    }}
                    placeholder="Buscar pokemon ..."
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />

                <Icon name="search-outline" color="grey" size={19} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 10,
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 4,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    },
});
