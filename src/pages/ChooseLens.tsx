import React, { useEffect, useCallback, SFC } from 'react'
import { useTypedSelector } from "../store";
import { useDispatch } from 'react-redux';

import { View, StyleSheet, Button } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Loading from '../components/Loading';
import Card from '../components/Card';

import { setLensesLoadingStatus, setLenses, setActiveLens } from '../store/lenses/actions';

import * as lensesApi from '../api/lenses';

import { ChooseLensScreenNavigationProp } from '../types/navigation';

interface IChooseLensProps {
  navigation: ChooseLensScreenNavigationProp
}

const ChooseCamera: SFC<IChooseLensProps> = ({ navigation }) => {
  const {
    lenses: { lenses, isLoading },
    cameras: { activeCamera }
  } = useTypedSelector(state => state)
  const dispatch = useDispatch();

  const fetchLenses = useCallback(async () => {
    dispatch(setLensesLoadingStatus(true))

    if (!activeCamera) return navigation.navigate('ChooseCamera')

    const lenses = await lensesApi.getLenses(activeCamera.id);

    if (lenses) {
      dispatch(setLenses(lenses));
    }

    dispatch(setLensesLoadingStatus(false));
  }, [dispatch])

  const choose = useCallback((lens) => {
    dispatch(setActiveLens(lens))

    navigation.navigate('ChooseFilm')
  }, [dispatch, navigation])

  useEffect(() => {
    fetchLenses()
  }, [fetchLenses])


  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      {lenses.map(lens => (
        <View key={lens.id} style={styles.cardContainer}>
          <TouchableNativeFeedback
            key={lens.id}
            onPress={() => choose(lens)}
          >
            <Card
              title={lens.name}
              img={lens?.image}
            />
          </TouchableNativeFeedback>
        </View>
      ))}

      <View style={styles.button}>
        <Button title="Add new lens" onPress={() => navigation.navigate('AddLens')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  button: {
    marginTop: 20
  },
  cardContainer: {
    marginTop: 20
  }
})

export default ChooseCamera
