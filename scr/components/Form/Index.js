import React, { useState } from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import styles from './style';
import ResultImc from './ResultImc/Index';

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o Peso e a Altura')
    const [Imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    function imcCalculator(){
        const retornoAuxiliar = weight/(height**2)
        return setImc(retornoAuxiliar.toFixed(2))
    }

    function validationImc(){
        if (height != null && weight !== null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu IMC é igual a:')
            setTextButton('Calcular novamente')
            return           
        }
        setImc(null)
        setMessageImc('Preencha o Peso e a Altura')
        setTextButton('Calcular')
    }


    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}> Digite aqui a sua altura: </Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex. 1.75'
                keyboardType='numeric'/>
                <Text style={styles.formLabel} > Digite aqui o seu peso: </Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 80.25'
                keyboardType='numeric'/>
                <TouchableOpacity
                 style={styles.ButtonCalculator}
                 onPress={validationImc}>
                <Text style={styles.textButtonCalculator}>
                    {textButton}
                </Text>             
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={Imc}/>
        </View>
    )
}