import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles'

export default (props) => {

    const doneOrNotStyle = props.doneAt != null ?
        { textDecorationLine: 'line-through' } : {}

    const date = props.doneAt ?? props.estimatedAt;

    const formattedDate = moment(props.estimatedAt).locale('pt-br')
        .format('dddd, D [de] MMMM')
    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>
            <View>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={[styles.date]}>{formattedDate + ""}</Text>
            </View>
        </View>
    )
}

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name='check' size={20}
                    color='#FFF'>
                </Icon>
            </View>
        )
    } else {
        return (
            <View style={styles.pending}>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 12.5,
        borderWidth: 1,
        borderColor: '#AAA',
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 12.5,
        borderWidth: 1,
        backgroundColor: '#4D7031',
        borderColor: '#AAA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12,
    }
})