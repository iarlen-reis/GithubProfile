import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { useProfileContext } from '../contexts/ProfileContext'

import DetailsDefault from './DetailsDefault'

import Toast from 'react-native-toast-message'
import Profile from './Profile'

const Details = () => {
  const { loading, profile, error } = useProfileContext()

  if (loading) return <ActivityIndicator size={40} className="mt-[50%]" />

  if (error)
    return Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Usuário não encontrado.',
    })

  return (
    <View className="relative  mt-4 w-full rounded-2xl bg-primary  px-6 py-8 pb-4">
      {profile && profile ? <Profile profile={profile} /> : <DetailsDefault />}
    </View>
  )
}

export default Details
