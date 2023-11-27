import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function ResultImc(props){
    return(
        <View>
            <Text style={styles.messageImc}>{props.messageResultImc}</Text>
            <Text style={styles.resultImc}>{props.ResultImc}</Text>
        </View>
    )
}