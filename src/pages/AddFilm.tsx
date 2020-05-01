import React, { useState, useMemo, useCallback, SFC } from 'react'
import { useTypedSelector } from '../store'
import { useDispatch } from 'react-redux'

import { View, StyleSheet, ActivityIndicator, Button } from 'react-native'
import Inputs from '../components/Inputs'

import * as filmsApi from '../api/films'

import { addFilm } from '../store/films/actions'

import { AddFilmScreenNavigationProp } from '../types/navigation'

interface IAddFilmProps {
  navigation: AddFilmScreenNavigationProp
}

const AddFilm: SFC<IAddFilmProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const { activeLens } = useTypedSelector(state => state.lenses)

  const inputs = useMemo(() => [
    { key: 'name', value: name, onChange: setName }
  ], [name, setName])

  const submit = useCallback(async () => {
    setIsLoading(true)

    if (!activeLens) return navigation.navigate('ChooseLens')

    const film = await filmsApi.createFilm({ name, lensId: activeLens.id })

    if (film) dispatch(addFilm(film))

    setIsLoading(false)

    navigation.navigate('ChooseFilm')
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

export default AddFilm
