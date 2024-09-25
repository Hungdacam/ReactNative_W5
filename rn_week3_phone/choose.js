import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import HomeScreen from './App'


export default function ChooseScreen({onColorSelect, onDone}) {
  const [selectedColor, setSelectedColor] = useState('lightblue');
  
  // Map each color to an image
  const colorImages = {
    lightblue: require('./vs_blue.png'), 
    red: require('./vs_red.png'), 
    black: require('./vs_black.png'), 
    silver: require('./vs_silver.png'), 
  };

  const colors = [
    { id: 1, colorName: 'lightblue', borderColor: 'purple' },
    { id: 2, colorName: 'red', borderColor: 'transparent' },
    { id: 3, colorName: 'black', borderColor: 'transparent' },
    { id: 4, colorName: 'silver', borderColor: 'transparent' },
  ];

  const handleColorPress = (colorName) => {
    setSelectedColor(colorName);
    onColorSelect(colorName);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Product Image Section */}
      <View style={styles.productContainer}>
        <Image source={colorImages[selectedColor]} style={styles.productImage} />
        <Text style={styles.productName}>Điện Thoại Vsmart Joy 3{"\n"}Hàng chính hãng</Text>
      </View>

      {/* Color Selection Section */}
      <View style={styles.colorSelectionContainer}>
        <Text style={styles.colorSelectionText}>Chọn một màu bên dưới:</Text>
        {colors.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.colorBlock,
              {
                backgroundColor: item.colorName,
                borderColor: selectedColor === item.colorName ? item.borderColor : 'transparent',
              },
            ]}
            onPress={() => handleColorPress(item.colorName)}
          />
        ))}
      </View>

      {/* Confirm Button */}
      <TouchableOpacity 
      style={styles.doneButton}
      onPress={onDone}>
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  colorSelectionContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorSelectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorBlock: {
    width: 60,
    height: 60,
    marginVertical: 10,
    borderWidth: 3,
    borderRadius: 8,
  },
  doneButton: {
    backgroundColor: '#4169E1',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 6,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'purple',
  },
  doneButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
