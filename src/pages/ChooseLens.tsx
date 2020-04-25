import React from 'react'
import { View, Text } from 'react-native'

import { useTypedSelector } from '../store'

const ChooseLens = () => {
  const { activeCamera } = useTypedSelector(state => state.cameras)

  return (
    <View>
      <Text>Choose Lens for {activeCamera?.name}</Text>
    </View>
  )
}

export default ChooseLens
