import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './NewsCard.style'
import { Link, useRouter } from 'expo-router';

const NewsCard = ({item}) => {

    const router = useRouter();

    return (
    <TouchableOpacity onPress={()=>router.replace(`/news/${item.u_id}`)} style={styles.container}>

        <Image style={styles.image} source={{uri: item.imageUrl}}/>
        
        <View style={styles.inner_container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    </TouchableOpacity>
    )
}

export default NewsCard