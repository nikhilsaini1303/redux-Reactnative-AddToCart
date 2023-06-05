import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Data } from './src/Helper/Data';
import Header from './src/components/Header';
import Products from './src/components/Products';


function App() {
  

  return (
    <SafeAreaView style={styles.root}>
        <Header />
        <ScrollView>
        {
          Data.map((item) => (
            <Products 
                key={item.id}
                item={item}
            />
          ))
        }
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    root: {
      flex: 1
    }
});

export default App;
