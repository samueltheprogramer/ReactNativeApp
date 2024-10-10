import React, {useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

const App = () => {
  const swiperRef = useRef(null);

  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      <Text
        style={{
          color: 'red',
          fontWeight: '600',
          fontSize: 25,
          textAlign: 'center',
        }}>
        react-native-swiper
      </Text>
      <View style={{width: '100%', height: 500}}>
        <Swiper
          ref={swiperRef}
          showsHorizontalScrollIndicator={true}
          showsButtons={true}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={styles.buttonText}>‹</Text>}
          containerStyle={{margin: 5}}
          activeDotColor="red"
          activeDotStyle={{width: 20, height: 20, borderRadius: 50}}
          autoplay={true}
          style={styles.wrapper}
          bounces={true}
          showsPagination={true}
          loop={true}>
          <View style={[styles.slide, {backgroundColor: 'yellow'}]}>
            <Text style={styles.text}>Slide 1</Text>
          </View>
          <View style={[styles.slide, {backgroundColor: 'blue'}]}>
            <Text style={styles.text}>Slide 2</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>Slide 3</Text>
          </View>
          <View style={[styles.slide, {backgroundColor: 'green'}]}>
            <Text style={styles.text}>Slide 4</Text>
          </View>
        </Swiper>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => swiperRef.current.scrollBy(-1)}>
          <Text style={styles.customButton}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => swiperRef.current.scrollBy(1)}>
          <Text style={styles.customButton}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},

  buttonText: {
    color: 'red',
    fontSize: 60,
    fontWeight: 'bold',
  },
  customButton: {
    color: 'gray',
    fontSize: 60,
    fontWeight: 'bold',
  },
  slide: {
    margin: 30,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  indexContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  indexText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
