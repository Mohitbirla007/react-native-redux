import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { increaseCounter, decreseCounter } from '../redux/ReduxToolkit/store/slices/userSlice';

export const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state: any) => state.users)
    const counterSelector = useSelector((state: any) => state.counter)

    const handleOnpress = () => {
        dispatch(decreseCounter())
    }

    return(
        <SafeAreaView>
            <Text style={styles.blackText}>User name : {selector.userName}</Text>
            <CustomButton text={`Pressable ${counterSelector.counter}`} handlePress={handleOnpress} buttonStyle={styles.buttonWidth40} textStyle={styles.whiteText}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    blackText: {color: 'black'},
    whiteText: {color: 'white'},
    buttonWidth40: {width: '40%'}
})