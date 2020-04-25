import React, { useState, useEffect, useCallback, SFC } from 'react'
import { useTypedSelector } from "../store";
import { useDispatch } from 'react-redux';

import { View, Text, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native'
import Loading from '../components/Loading';
import Card from '../components/Card';

import { setCamerasLoadingStatus, setCameras, setActiveCamera } from '../store/cameras/actions';
import * as camerasApi from '../api/cameras';
import { ChooseCameraScreenNavigationProp } from '../types/navigation';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

interface IChooseCameraProps {
  navigation: ChooseCameraScreenNavigationProp
}

const ChooseCamera: SFC<IChooseCameraProps> = ({ navigation }) => {
  const { cameras, isLoading } = useTypedSelector(state => state.cameras)
  const dispatch = useDispatch();


  const fetchCameras = useCallback(async () => {
    dispatch(setCamerasLoadingStatus(true))

    const cameras = await camerasApi.getCameras();

    if (cameras) {
      dispatch(setCameras(cameras));
      dispatch(setCamerasLoadingStatus(false));
    }
  }, [dispatch])

  const choose = useCallback((camera) => {
    dispatch(setActiveCamera(camera))

    navigation.navigate('ChooseLens')
  }, [dispatch, navigation])

  useEffect(() => {
    fetchCameras()
  }, [fetchCameras])

  if (isLoading)
    return (<Loading />)

  return (
    <View style={styles.container}>
      {cameras.map(camera => (
        <View key={camera.id} style={styles.cardContainer}>
          <TouchableNativeFeedback
            key={camera.id}
            onPress={() => choose(camera)}
          >
            <Card
              title={camera.name}
              img={camera?.image}
            />
          </TouchableNativeFeedback>
        </View>
      ))}

      <View style={styles.button}>
        <Button title="Add new camera" onPress={() => navigation.navigate('AddCamera')} />
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
