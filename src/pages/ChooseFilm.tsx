import React, { useEffect, useCallback, SFC } from 'react'
import { useTypedSelector } from "../store";
import { useDispatch } from 'react-redux';

import { View, StyleSheet, Button } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Loading from '../components/Loading';
import Card from '../components/Card';

import { setFilmsLoadingStatus, setFilms, setActiveFilm } from '../store/films/actions';

import * as filmsApi from '../api/films';

import { ChooseFilmScreenNavigationProp } from '../types/navigation';

interface IChooseFilmProps {
  navigation: ChooseFilmScreenNavigationProp
}

const ChooseFilm: SFC<IChooseFilmProps> = ({ navigation }) => {
  const {
    films: { films, isLoading },
    lenses: { activeLens }
  } = useTypedSelector(state => state)
  const dispatch = useDispatch();

  const fetchFilms = useCallback(async () => {
    dispatch(setFilmsLoadingStatus(true))

    if (!activeLens) return navigation.navigate('ChooseLens')

    const films = await filmsApi.getFilms(activeLens.id);

    if (films) {
      dispatch(setFilms(films));
    }

    dispatch(setFilmsLoadingStatus(false));
  }, [dispatch])

  const choose = useCallback((film) => {
    dispatch(setActiveFilm(film))

    navigation.navigate('Home')
  }, [dispatch, navigation])

  useEffect(() => {
    fetchFilms()
  }, [fetchFilms])


  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      {films.map(film => (
        <View key={film.id} style={styles.cardContainer}>
          <TouchableNativeFeedback
            key={film.id}
            onPress={() => choose(film)}
          >
            <Card
              title={film.name}
              img={film?.image}
            />
          </TouchableNativeFeedback>
        </View>
      ))}

      <View style={styles.button}>
        <Button title="Add new film" onPress={() => navigation.navigate('AddFilm')} />
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

export default ChooseFilm
