import React, { useState, useMemo, useCallback, SFC } from 'react'
import { useTypedSelector } from '../store'
import { useDispatch } from 'react-redux'

import { Text, View, StyleSheet, ActivityIndicator, Button } from 'react-native'
import Inputs from '../components/Inputs'

import * as lensesApi from '../api/lenses'

import { addLens } from '../store/lenses/actions'

import { AddLensScreenNavigationProp } from '../types/navigation'

interface IAddLensProps {
  navigation: AddLensScreenNavigationProp
}

const AddLens: SFC<IAddLensProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const { activeCamera } = useTypedSelector(state => state.cameras)

  const inputs = useMemo(() => [
    { key: 'name', value: name, onChange: setName }
  ], [name, setName])

  const submit = useCallback(async () => {
    setIsLoading(true)

    const lens = await lensesApi.createLens({ name, cameraId: activeCamera?.id })

    if (lens) dispatch(addLens(lens))

    setIsLoading(false)

    navigation.navigate('ChooseLens')
  }, [dispatch, name])

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator style={styles.loader} />
      )}

      <Inputs inputs={inputs} />

      <View style={styles.submitButton}>
        <Button title="Submit" onPress={submit} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  loader: { marginTop: 10 },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  uploadZone: {
    marginTop: 20,
    width: 256,
    height: 256,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: "#fff"
  },
  image: {
    width: 256,
    height: 256
  },
  removeButton: {
    marginTop: 6
  },
  submitButton: {
    marginTop: 12
  }
})

export default AddLens
