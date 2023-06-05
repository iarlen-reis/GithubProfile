import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

const Search = () => {
  return (
    <View className="relative mt-5 w-full flex-row items-center">
      <Feather
        name="search"
        color="#0079FF"
        size={30}
        style={{ position: 'absolute', left: 10, zIndex: 5 }}
      />
      <TextInput
        placeholder="Search Github username..."
        className="w-full rounded-2xl bg-primary px-[45] py-[18] font-body text-[12px] text-white"
        placeholderTextColor="#FFF"
      />
      <TouchableOpacity className="absolute right-2 rounded-xl bg-link px-4 py-3">
        <Text className="font-title text-sm text-white">Search</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Search
