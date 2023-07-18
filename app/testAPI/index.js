import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { test } from '../../src/api/testAPI'

export default function TestAPI() {
  const { data: pokemon, isLoading, isError } = useQuery({
    queryKey: ['pokemon', 'jsonplaceholder'],
    queryFn: () => test(),
    staleTime: 10000,
    cacheTime: 10000
  })

  return (
    <View>
      {
        isLoading ?
          <Text>Waiting Data</Text>
          :
          <Text className="text-red-500">{JSON.stringify(pokemon)}</Text>
      }
    </View>
  )
}