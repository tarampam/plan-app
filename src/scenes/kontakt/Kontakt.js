import React, {useState, useEffect} from "react";
import lecturers from "../../data/lectures.json"
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Input,
  Icon,
} from "native-base"

import { Ionicons } from '@expo/vector-icons';
import {StyleSheet} from "react-native";
import { colors, fonts} from 'theme';

export const Example = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setList(lecturers.list);
  }, [])

  const clearString = (value) => {
    return value.replace(/\s/g, '').toLowerCase();
  }

  const checkFullName = (value) => {
    return clearString(value.fullName).indexOf(clearString(filter)) >= 0
  }

  const filterlist = (value) => {
    setFilter(value);
  }

  const styles = StyleSheet.create({
    box: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
    },
    hStack: {
      backgroundColor: colors.darkPurple,
      justifyContent: "space-between",
      padding: 10,
      borderRadius:5,
    },
  })

  return (
    <Box
      style = {styles.box}
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <VStack><Heading fontSize="30" width="100%" p="5px"
                       color={colors.darkPurple} marginTop="10" fontFamily={fonts.alfaSlabOne.regular} fontWeight="light">
        WYKŁADOWCY
      </Heading></VStack>
      <VStack width="100%" space="15" alignItems="center"  >
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.200"
          borderRadius="10"
          py="1"
          px="2"
          placeholderTextColor="gray.500"
          _hover={{ bg: 'gray.200', borderWidth: 0 }}
          borderWidth="1"
          _web={{
            _focus: { style: { boxShadow: 'none' } },
          }}
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.500"
              as={<Ionicons name="ios-search" />}
            />
          }
          onChangeText = {filterlist}
        />
      </VStack>

      <FlatList
        data={list.filter(checkFullName)}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} style={styles.hStack}>
              <Avatar
                size="60px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack color="#FFF7DC" >
                <Text

                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}

                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.email}

                </Text>

                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.classroom}

                </Text>
              </VStack>
              <Spacer />
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
