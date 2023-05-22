import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const Header = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.username}>
        Hi Imam
      </Text>
      <Text style={styles.pendingTask}>
        10 task pending
      </Text>
    </View>

    <Image
      style={styles.thumbnail}
      source={{ 
        uri: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/2c/2c18366fc14a3e8107f48a8159412ce09a89d86f.jpg'
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  username: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  pendingTask: {
    color: colors.primary
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
});

export default Header;
