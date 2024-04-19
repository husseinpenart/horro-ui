import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import Icon_button from '../../../../types/Type';

const IconButton = ({
    children,
    style,
    bc,
    bw,
    bg,
    align,
    br,
    underlay,
    Pressing,
    icon,
    size,
  }: Icon_button) => {
  return (
    <TouchableHighlight
      style={[
        {
          borderColor: !bc ? 'transparent' : bc,
          borderWidth: !bw ? 0 : bw,
          backgroundColor: !bg ? '#A55AFA' : bg,
          alignSelf: !align ? 'center' : align,
          borderRadius: !br ? 5 : br,
          ...style,
        },
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
      underlayColor={!underlay ? 'transparent' : underlay}
      onPress={Pressing}>
      <>
        {icon}
        {children}
      </>
    </TouchableHighlight>
  )
}

export default IconButton