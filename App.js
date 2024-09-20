import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native'
import Item from './components/Item/Item'

const lyric1 = 'Coming out of my cage...'
const response1 = 'And I\'ve been doing just fine!'

const App = () =>{
  return (
    <SafeAreaView>
        <View>
          <Item lyric={lyric1} response={response1} />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
