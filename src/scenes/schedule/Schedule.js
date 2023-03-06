import React, {useEffect, useState} from "react";
import { Box, FlatList, Heading, Select, HStack, VStack, Text, Spacer, Center, NativeBaseProvider, CheckIcon } from "native-base";
import initialValues from "../../data/dane.json"
import {StyleSheet} from "react-native";
import { colors, fonts} from 'theme'

const Schedule = () => {
  const [data, setData] = useState([]);
  let [service, setService] = React.useState("");
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setData(initialValues);
  }, [])

  const clearString = (value) => {
    return value.replace(/\s/g, '').toLowerCase();
  }

  const checkDay = (value) => {
    return clearString(value.Day).indexOf(clearString(filter)) >= 0
  }

  const filterList = (value) => {
    setFilter(value);
  }

  const styles = StyleSheet.create({
    hStack: {
      flex: 1,
      backgroundColor: colors.darkPurple,
      alignContent:"space-between",
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
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" alignItems="center">
      <Box alignItems="center">
        <Heading fontSize="40" p="4" pb="3" color="#f9d67d" fontFamily={fonts.alfaSlabOne.regular} fontWeight="light">
          Plan zajęć
        </Heading>
        <Box w="3/4" maxW="300" >
          <Select selectedValue={service} minWidth="200"  accessibilityLabel="Dzień tygodnia" placeholder="Dzień tygodnia" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />
          }} mt={1} onValueChange={filterList}>
            <Select.Item label="Poniedziałek" value="Poniedziałek" />
            <Select.Item label="Wtorek" value="Wtorek" />
            <Select.Item label="Środa" value="Środa" />
            <Select.Item label="Czwartek" value="Czwartek" />
            <Select.Item label="Piątek" value="Piątek" />
          </Select>
        </Box>
        <FlatList data={data.filter(checkDay)} renderItem={({
                                             item
                                           }) => <Box borderBottomWidth="1" _dark={{
          borderColor: "gray.600"
        }} borderColor="coolGray.200" pl="4" pr="5" py="2">
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
            </VStack>
            <Spacer />
            <div  alignSelf="flex-start">
              <Text fontSize="xs" _dark={{
                color: "warmGray.50"
              }} color="coolGray.800">
                Godzina:{"\n"}
              </Text>
              <Text fontSize="xs" _dark={{
                color: "white"
              }} color="white">
                {item.StartHours} - {item.EndHours}{"\n"}
              </Text>
              <Text fontSize="xs" _dark={{
                color: "warmGray.50"
              }} color="coolGray.800">
                Sala:{"\n"}
              </Text>
              <Text fontSize="xs" _dark={{
                color: "white"
              }} color="white">
                {item.Class}
              </Text>
            </div>
          </HStack>
        </Box>}
                  keyExtractor={item => item.id} />
      </Box>
      </Center>
    </NativeBaseProvider>
);
};

export default Schedule;
