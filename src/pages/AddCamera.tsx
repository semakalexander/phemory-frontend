import React, { useState, useCallback, useEffect, SFC } from 'react'
import * as Permissions from 'expo-permissions';

import { Text, StyleSheet, View, Alert, Button, ActivityIndicator, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

import Inputs from '../components/Inputs'

import { AddCameraScreenNavigationProp } from '../types/navigation';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import * as camerasApi from '../api/cameras'
import { useDispatch } from 'react-redux';
import { addCamera } from '../store/cameras/actions';


interface IAddCameraProps {
  navigation: AddCameraScreenNavigationProp
}

const AddCamera: SFC<IAddCameraProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('')
  const [imageUri, setImageUri] = useState<string>('')
  const [imageBase64, setImageBase64] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const askPermission = useCallback(async () => {
    const { status } = await ImagePicker.getCameraRollPermissionsAsync()

    if (status !== ImagePicker.PermissionStatus.GRANTED) {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync()

      if (status !== ImagePicker.PermissionStatus.GRANTED) {
        Alert.alert('Sorry, we need an access to your camera roll')
        return navigation.navigate('ChooseCamera')
      }
    }
  }, [])

  const chooseImage = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      aspect: [1, 1],
      allowsEditing: true
    })

    if (result.cancelled) return

    const { uri, base64 } = result

    base64 && setImageBase64(base64)
    setImageUri(uri)
  }, [])

  useEffect(() => {
    askPermission()
  }, [])

  const removeImage = useCallback(() => {
    setImageUri('')
    setImageBase64('')
  }, [])

  const submit = useCallback(async () => {
    setIsLoading(true)

    const camera = await camerasApi.createCamera({ name, image: imageBase64 })

    dispatch(addCamera(camera))

    setIsLoading(false)

    navigation.navigate('ChooseCamera')
  }, [dispatch, name, imageBase64])

  const withImage = false

  return (
    <View style={styles.container}>
      <Inputs inputs={[{ key: 'name', value: name, onChange: setName }]} />

      {isLoading && (
        <ActivityIndicator style={styles.loader} />
      )}

      {withImage && (
        <TouchableNativeFeedback onPress={chooseImage} >
          <View style={styles.uploadZone}>
            {
              imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image} />
              ) : (
                  <Text>Choose image</Text>
                )
            }
          </View>
        </TouchableNativeFeedback>

      )}
      {
        !!imageUri && (
          <View style={styles.removeButton}>
            <Button
              title="Remove image"
              onPress={removeImage}
            />
          </View>
        )
      }

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

export default AddCamera
