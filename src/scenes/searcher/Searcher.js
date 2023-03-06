import React, {useEffect, useState} from 'react'
import {
  Select,
  VStack,
  Heading,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Input,
  FormControl,
  Divider, Flex, Text, Icon, Box, HStack, Avatar, Spacer, FlatList,
} from 'native-base';
import { colors, fonts } from 'theme';
import {StyleSheet, Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import lecturers from "../../data/lectures.json"
import initialValues from "../../data/dane.json"

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  unselctedtextinbutton: {
    color: '#ADADAD',
    textAlign: "center",
    fontSize: 20,
  },
  selctedtextinbutton: {
    color: colors.darkPurple,
    textAlign: "center",
    fontSize: 20,
  },
  hStack: {
    flex: 1,
    backgroundColor: colors.darkPurple,
    alignContent:"space-evenly",
    flexDirection: "row",
    padding: 10,
    borderRadius:5,
  },
  vStack: {
    flex: 1,
    flexGrow:3,
    flexDirection: "column",
  },
  text: {
    flexWrap: "wrap",
  }
})


export const Example = () => {
  const [service, setService] = useState("Group");
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setList(initialValues);
  }, [])

  const clearString = (value) => {
    console.log('clearString ' + value);
    return value?.replace(/\s/g, '').toLowerCase();
  }

  const checkFullName = (value) => {
    if (service == "Group")
      return clearString(value.Group).indexOf(clearString(filter)) >= 0
    else if (service == "Class")
      return clearString(value.Class).indexOf(clearString(filter)) >= 0
    else if (service == "LecturerList")
      return clearString(value.LecturerList).indexOf(clearString(filter)) >= 0
  }

  const searchPoint = (value) => {
    setService(value);
  }
  const filterlist = (value) => {
    setFilter(value);
  }
  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

  return (
    <Box
      style = {styles.box}
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <Heading fontWeight="light" fontSize="30" mb="30" mt="30" alignSelf="center" fontFamily={fonts.alfaSlabOne.regular} color={colors.darkPurple} >Wyszukaj</Heading>
      <Flex bg="#EAE9E9" direction="row" borderRadius="20" mb="5">
        <Pressable style = {styles.button}
                   onPress={() => {
                     searchPoint("Group");
                   }}>
          {({ focused }) => (
          <Text style= {focused ? styles.selctedtextinbutton : styles.unselctedtextinbutton }> Grupa </Text>
          )}
        </Pressable>
        <Pressable style = {styles.button}
                   onPress={() => {
                     searchPoint("Class");
                   }}>
          {({ focused }) => (
            <Text style= {focused ? styles.selctedtextinbutton : styles.unselctedtextinbutton }> Sala </Text>
          )}
        </Pressable>
        <Pressable style = {styles.button}
                   onPress={() => {
                     searchPoint("LecturerList");
                   }}>
          {({ focused }) => (
            <Text style= {focused ? styles.selctedtextinbutton : styles.unselctedtextinbutton }> Prowadzący </Text>
          )}
        </Pressable>
      </Flex>
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
                <VStack style={styles.vStack}>
                  <Text style={styles.text} _dark={{
                    color: "warmGray.50"
                  }} color="coolGray.800" bold>
                    {item.Name}
                  </Text>
                  <Text style={styles.text} color="coolGray.600" _dark={{
                    color: "warmGray.200"
                  }}>
                    {item.LecturerList}
                  </Text>
                  <Text style={styles.text} color="coolGray.600" _dark={{
                    color: "warmGray.200"
                  }}>
                    <B>Sala:</B> {item.Class}
                  </Text>
                </VStack>
                <Spacer />
                <div  alignSelf="flex-start">
                  <Text fontSize="xs" _dark={{
                    color: "warmGray.50"
                  }} color="coolGray.800" bold>
                    Dzień:{"\n"}
                  </Text>
                  <Text fontSize="xs" _dark={{
                    color: "white"
                  }} color="white">
                    {item.Day}{"\n"}
                  </Text>
                  <Text fontSize="xs" _dark={{
                    color: "warmGray.50"
                  }} color="coolGray.800" bold>
                    Godzina:{"\n"}
                  </Text>
                  <Text fontSize="xs" _dark={{
                    color: "white"
                  }} color="white">
                    {item.StartHours} - {item.EndHours}{"\n"}
                  </Text>
                  <Text fontSize="xs" _dark={{
                    color: "warmGray.50"
                  }} color="coolGray.800" bold>
                    Grupa:{"\n"}
                  </Text>
                  <Text fontSize="xs" _dark={{
                    color: "white"
                  }} color="white">
                    {item.Group}
                  </Text>
                </div>
              </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}

export default () => (
  <NativeBaseProvider>
    <Center flex={1} px="3">
      <Example />
    </Center>
  </NativeBaseProvider>
)
