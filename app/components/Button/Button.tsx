import { JSX } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type ButtonProps = {
    onPress?: () => void;
    title?: string;
}
export default function Button({ onPress, title }: ButtonProps): JSX.Element {
    
    return(
        <TouchableOpacity style={styles.button } onPress={onPress} >
              <View style={styles.titleContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' , color:'white'}}>{title}</Text>
              </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        width: 150,
        height: 50,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
})