import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:'100%',
        height:'100%',
        alignItems: 'center',
        bottom: 0,
        marginTop: 30,
        borderRadius: 30,
        backgroundColor: '#FFF'
    },
    form: {
        width:'100%',
        height:'auto',
        marginTop: 10,
        padding: 30,
    },
    formLabel: {
        fontSize: 18,
        fontFamily: 'Nunito-Sans',
        paddingBottom: 2,
    },
    formInput:{
       width:'90%', 
       backgroundColor: '#E6E7ED',
       borderRadius: 10,
       paddingVertical: 10,
       paddingLeft:10,
       margin: 10,
    },
    textButtonCalculator:{
        fontFamily:'Nunito-Sans',
        fontSize:20,
        color:'#FFF',
        fontWeight:'bold',
    },
    ButtonCalculator: {
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width:'90%',
        backgroundColor: '#73628A',
        paddingVertical: 14,
        marginLeft: 14,
        margin: 12,
    }
  });

export default styles