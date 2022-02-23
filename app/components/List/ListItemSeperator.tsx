import React from 'react';
import { View, StyleSheet } from 'react-native';

export const ListItemSeperator = () => {
    return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
    container: { width: '100%', height: 1, backgroundColor: 'blue' },
});
