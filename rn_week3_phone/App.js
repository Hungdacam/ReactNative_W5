import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, {useState} from 'react';
import ChooseScreen from './choose'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home')
  const [selectedColor, setSelectedColor]=useState('lightblue');
  const colorsImages={
    lightblue:require('./vs_blue.png'),
    red: require('./vs_red.png'),
    black: require('./vs_black.png'),
    silver: require('./vs_silver.png')
  }
  if (currentScreen==='Choose'){
    return <ChooseScreen 
    onColorSelect={setSelectedColor}
    onDone={()=>setCurrentScreen('Home')} />;
  }
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageProductContainer}>
        <Image source={colorsImages[selectedColor]} style={styles.image} />
      </View>
      
      <View style={styles.nameProductContainer}>
        <Text style={styles.textNameProduct}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>

      <View style={styles.rating}>
        <View style={styles.starContainer}>
          {/* Các icon sao */}
          <FontAwesome name="star" size={20} color="gold" />
          <FontAwesome name="star" size={20} color="gold" />
          <FontAwesome name="star" size={20} color="gold" />
          <FontAwesome name="star" size={20} color="gold" />
          <FontAwesome name="star" size={20} color="gold" />
        </View>
        {/* Đánh giá */}
        <View style={styles.seeRating}>
          <Text style={styles.seeRatingText}>(Xem 828 đánh giá)</Text>
        </View>
      </View>
      {/* Giá tiền */}
      <View style={styles.priceContainer}>
        <View style={styles.discount}>
          <Text style={styles.textDiscount}>1.790.000 đ</Text>
        </View>
        <View style={styles.textprice}>
          <Text style={styles.textPrice}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      </View>

      <View style={styles.chooseBtn}>
        <TouchableOpacity
         style={styles.buttonContainer} 
         onPress={()=>setCurrentScreen('Choose')}>
          <Text style={styles.buttonText}>4 MÀU - CHỌN MÀU</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buyBtn}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonBuyText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  imageProductContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250, 
    resizeMode: 'contain', 
  },
  nameProductContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textNameProduct: { 
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    marginVertical: 10,
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  seeRating: {
    justifyContent: 'center',
  },
  seeRatingText: {
    fontSize: 14,
    color: '#000',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  discount: {
    marginRight: 20,
  },
  textDiscount: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24,
  },
  textprice: {
    textDecorationLine: 'line-through',
  },
  textPrice: {
    color: '#888',
    fontSize: 18,
  },
  bannerContainer: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
  },
  chooseBtn: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  buyBtn: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'red',
  },
  buttonBuyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});
