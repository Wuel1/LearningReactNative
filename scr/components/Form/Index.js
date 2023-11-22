import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import ResultImc from './ResultImc/Index';

export default function Form(){
    return(
        <View>
            <View>
                <Text> Digite aqui a sua altura: </Text>
                <TextInput
                placeholder='Ex. 1.75'
                keyboardType='numeric'/>
                <Text> Digite aqui o seu peso: </Text>
                <TextInput
                placeholder='Ex. 80.25'
                keyboardType='numeric'/>
                <Button title='Calcular IMC'/>
            </View>
            {/* <ResultImc messageResultImc={messageImc} ResultImc={Imc}/> */}
        </View>
    )
}