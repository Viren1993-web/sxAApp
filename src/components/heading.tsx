import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
interface HeadingProps {


}
const Heading = () => {
    return (
        <View style={styles.page}>
            <View style={styles.root}>
                <Icon style={styles.dots} name="circle" size={20} color="orange" />
                <Icon style={styles.dots} name="circle" size={20} color="white" />
                <Icon style={styles.dots} name="circle" size={20} color="green" />

                <Text style={styles.text}>sx app</Text>

            </View >
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 1,
    },
    root: {
        borderWidth: 2,
        borderRightColor: 'black',
        flexDirection: 'row',

    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        alignContent:'center',
        justifyContent:'center',
    },
    dots: {
        padding: 5,
    },
});
export default Heading;
