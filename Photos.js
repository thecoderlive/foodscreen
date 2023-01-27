import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import FoodList from './FoodList'
import MentionsList from './MentionsList'

const Photos = () => (
<ScrollView style={styles.photos} showsVerticalScrollIndicator={false}>
<FoodList item={item.food_list}/>
<Image
    style={styles.camera_icon}
    source={{uri: item.camera_icon}}
   />
<Text style={styles.add_photos}>{item.add_photos}</Text>
<Text style={styles.food_taste}>{item.food_taste}</Text>
<Text style={styles.reviews}>{item.reviews}</Text>
<Text style={styles.review_count}>{item.review_count}</Text>
<Text style={styles.restaurant_count}>{item.restaurant_count}</Text>
<Text style={styles.traveler_rating_title}>{item.traveler_rating_title}</Text>
<Text style={styles.rating_type}>{item.rating_type}</Text>
<Text style={styles.rating_count}>{item.rating_count}</Text>
<Text style={styles.rating_type2}>{item.rating_type2}</Text>
<Text style={styles.rating_count2}>{item.rating_count2}</Text>
<Text style={styles.rating_type3}>{item.rating_type3}</Text>
<Text style={styles.rating_count3}>{item.rating_count3}</Text>
<Text style={styles.rating_type4}>{item.rating_type4}</Text>
<Text style={styles.rating_count4}>{item.rating_count4}</Text>
<Text style={styles.popular_mentions}>{item.popular_mentions}</Text>
<MentionsList item={item.mentions_list}/>
</ScrollView>
)

export default Photos;

const styles = StyleSheet.create({
camera_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
add_photos: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
food_taste: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
reviews: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
review_count: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
restaurant_count: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
traveler_rating_title: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_type: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_count: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_type2: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_count2: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_type3: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_count3: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_type4: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
rating_count4: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
popular_mentions: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  }
});