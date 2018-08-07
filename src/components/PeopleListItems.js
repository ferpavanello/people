import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { StringUtils } from '../util';

const PeopleListItems = props => {
    const { people } = props;
    const { title, first, last } = people.name;
    
    return (
        <TouchableOpacity onPress={ () => {} }>
            <View style={ styles.line }>
                <Image style={ styles.avatar } source={{ uri: people.picture.thumbnail }} />
                <Text style={ styles.lineText }>
                    { StringUtils.title(`${title} ${first} ${last}`) }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,

        marginLeft: 15,
        borderRadius: 50,
    }
})

export default PeopleListItems;