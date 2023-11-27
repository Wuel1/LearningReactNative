import React, { useState } from 'react';
import {View, Text, TextInput, Button} from 'react-native';
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
        <View>
            <View>
                <Text> Digite aqui a sua altura: </Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder='Ex. 1.75'
                keyboardType='numeric'/>
                <Text> Digite aqui o seu peso: </Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 80.25'
                keyboardType='numeric'/>
                <Button onPress={validationImc}  title={textButton}/>
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={Imc}/>
        </View>
    )
}