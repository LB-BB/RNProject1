import React from "react"
import { Text, View } from "react-native"
import style from './style'

const Item = ({lyric, response}) => {
  const handleTextClick = () => {
    alert(response)
  }

  return (
    <View style={style.textWrapper}>
      <Text onPress={() => handleTextClick()} style={style.text}>{lyric}</Text>
    </View>
  )
}

export default Item