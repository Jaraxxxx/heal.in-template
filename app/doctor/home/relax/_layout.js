import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'

function _layout() {
    const name = useLocalSearchParams();
  return (
    <Stack>
            <Stack.Screen 
                name="index" 
                options={{
                    headerTitle: "Breathing Exercise",
                    headerShown: true,
                    headerBackTitleVisible: false,
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "white",
                    },
                    headerTintColor: "black",
                }}
            />
            <Stack.Screen 
                name="breathingCircle" 
                options={{
                    headerTitle: "Breathing Exercise",
                    headerShown: true,
                    headerBackTitleVisible: false,
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "white",
                    },
                    headerTintColor: "black",
                }}
            />
            <Stack.Screen 
                name="breathingSquare" 
                options={{
                    headerTitle: "Breathing Exercise",
                    headerShown: true,
                    headerBackTitleVisible: false,
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "white",
                    },
                    headerTintColor: "black",
                }}
            />
            <Stack.Screen 
                name="breathing4-7-8" 
                options={{
                    headerTitle: "Breathing Exercise",
                    headerShown: true,
                    headerBackTitleVisible: false,
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "white",
                    },
                    headerTintColor: "black",
                }}
            />
    </Stack>
  )
}

export default _layout