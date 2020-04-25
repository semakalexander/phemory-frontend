import React, { SFC } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

interface IInput {
  key: string;
  value: string;
  onChange: (value: string) => void;
}

interface IInputsProps {
  inputs: IInput[]
}

const Inputs: SFC<IInputsProps> = ({ inputs }) => (
  <View style={styles.inputs}>
    {
      inputs.map(input => (
        <TextInput
          key={input.key}
          value={input.value}
          placeholder={input.key}
          style={styles.input}
          onChangeText={input.onChange}
        />
      ))
    }
  </View>
)

const styles = StyleSheet.create({
  inputs: {
    marginTop: 20,
    backgroundColor: "#fff",
    width: 180,
  },
  input: {
    height: 40,
    paddingLeft: 6,
    paddingRight: 6
  },
  inputContainer: {
    marginTop: 20,
  }
})

export default Inputs
