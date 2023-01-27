import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const foodListItem = ({ item }) => (
<View style={styles.food_list_item}>
<Image
    style={styles.food_image}
    source={{uri: item.food_image}}
    />
</View>
  );

const FoodList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.food_list}
    data={item}
    renderItem={foodListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default FoodList;

const styles = StyleSheet.create({
food_image: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  }
});