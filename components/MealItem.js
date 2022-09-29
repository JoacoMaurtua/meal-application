import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';

const MealItem = ({ title, imageUrl, duration, complexity, affordability, onPress }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#dcdcdc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.datailItem}>{duration}m</Text>
            <Text style={styles.datailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.datailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS == 'android' ? 'hidden' : 'auto',
  },

  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 200,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },

  buttonPressed:{
    opacity: 0.5,
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  datailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
