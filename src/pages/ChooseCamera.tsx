import React, { useState, useEffect, useCallback } from 'react'
import { useTypedSelector } from "../store";
import { useDispatch } from 'react-redux';

import { View, Text, StyleSheet } from 'react-native'
import Loading from '../components/Loading';

import { setCamerasLoadingStatus, setCameras } from '../store/cameras/actions';
import * as camerasApi from '../api/cameras';

const ChooseCamera = () => {
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

  useEffect(() => {
    fetchCameras()
  }, [fetchCameras])

  if (isLoading) return <Loading />
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(cameras)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
})

export default ChooseCamera
