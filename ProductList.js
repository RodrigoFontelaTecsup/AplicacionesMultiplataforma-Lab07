import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const ProductList = ({ data, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Productos:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetail', { product: item })
            }
          >
            <View style={styles.productContainer}>
              <Text style={styles.productTitle}>Name: {item.title}</Text>
              <Text style={styles.productPrice}>Price: ${item.price}</Text>
              <Image
                source={{ uri: item.image }}
                style={{ width: 100, height: 100 }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productContainer: {
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ProductList;
