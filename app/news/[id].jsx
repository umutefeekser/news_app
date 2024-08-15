import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const News = () => {
  
  const local = useLocalSearchParams();
  const item = require("../../assets/news_data.json").find(item => item.u_id == local.id)

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link style={styles.goBack_text} href="/" >
          <AntDesign name="leftsquareo" size={36} color="black" />
        </Link>
        <Text style={styles.navbar_text}>News</Text>
      </View>
        
      <View style={styles.inner_container}>
        <Text style={styles.title}>{item.title}</Text>

        <Image style={styles.image} source={{uri: item.imageUrl}} />

        <Text style={styles.description}>{item.description}</Text>

        <Text style={styles.author_container}>
          <FontAwesome5 name="user-alt" size={30} color="black" /> Author: <Text style={styles.author}>{item.author}</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  navbar: {
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },

  goBack_text: {
    position: 'absolute',
    left: 10,
    fontSize: 20,
    alignItems: 'center'
  },
  
  navbar_text:{
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  inner_container: {
    padding: 10
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5
  },

  image: {
    height: Dimensions.get('window').height / 4,
    marginBottom: 5
  },

  description: {
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 10
  },

  author_container: {
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },

  author: {
    fontWeight: 'normal'
  }
})

export default News