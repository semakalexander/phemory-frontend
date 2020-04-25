import React, { SFC } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

interface ICardProps {
  title?: string;
  img?: string;
}

const DEFAULT_IMAGE = 'https://i.ibb.co/xXV8kJ9/pngfuel-com.png'

const Card: SFC<ICardProps> = ({ title = '', img }) => (
  <View style={styles.card}>
    <Image style={styles.image} source={{ uri: img || DEFAULT_IMAGE }} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 24,
    width: 24
  },
  title: {
    marginLeft: 6
  }
})

export { ICardProps }
export default Card
