import {
    Button,
    GestureResponderEvent,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image,
    Dimensions,
} from 'react-native';
import React, { FC } from 'react';

interface IListItem {
    title: string;
    onPress: (name: string) => void;
    deleteFromFavourite?: (name: string) => void;
    imageUri?: string;
}

const ListItem: FC<IListItem> = ({
    title,
    onPress,
    deleteFromFavourite,
    imageUri,
}) => {
    const { width } = Dimensions.get('window');

    return (
        <TouchableHighlight onPress={() => onPress(title)}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {title[0].toUpperCase() + title.slice(1)}
                </Text>
                {deleteFromFavourite && (
                    <Button
                        title='Delete'
                        onPress={() => deleteFromFavourite(title)}
                    />
                )}
                {imageUri && (
                    <Image
                        source={{
                            width: width * 0.1,
                            height: width * 0.2,
                            uri: imageUri,
                        }}
                    />
                )}
            </View>
        </TouchableHighlight>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'space-evenly',
    },
    text: { fontSize: 24 },
});
