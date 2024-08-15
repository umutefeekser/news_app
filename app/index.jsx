import { Text, View, FlatList, Image, StyleSheet, Dimensions } from "react-native";
import NewsCard from '../components/NewsCard';

export default function Index() {
  return (
    <View style={styles.container}>

      <Text style={styles.navbar_text}>News</Text>

      <FlatList
      ListHeaderComponent={
        <FlatList
          data={require("../assets/news_banner_data.json")}
          renderItem={({item}) => <Image style={styles.image} source={{uri: item.imageUrl}} />}
          horizontal
        />
      }
      data={require("../assets/news_data.json")}
      keyExtractor={item => item.u_id.toString()}
      renderItem={({item}) => <NewsCard item={item} />}

      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  },

  navbar_text: {
    fontSize: 50,
    fontWeight: 'bold',
    padding: 10
  },

  image: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 5
  }
})
