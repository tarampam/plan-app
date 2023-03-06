import React, {useEffect, useState} from 'react'
import {
  Input,
  IconButton,
  Checkbox,
  Text,
  Box,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  NativeBaseProvider,
  useToast
} from 'native-base'
import { Feather, Entypo } from '@expo/vector-icons'
import TaskRequest from '../../routes/ExternalCalls/TaskRequest'
import { colors,fonts } from 'theme'

export const Example = () => {
  /*const [state, setState] = useState([]);
  useEffect(()=>{
    async function fetchData() {
      const response = await TaskRequest.getClientTasks(1);
      setState(response);
    }
    fetchData();
  },[])
  console.log('statestate')
  console.log(state)
  const [inputValue, setInputValue] = React.useState('')
  const addItem = async (Name: string) => {
    const newTask = {
      Name: Name,
      ClientId: 1,
      Priority: 'testAxios'
    }
    await TaskRequest.createTask(newTask);
    const response = await TaskRequest.getClientTasks(1);
    setState(response);
  }

  const handleDelete = (index: number) => {
    const temp = state.filter((_, itemI) => itemI !== index)
    setState(temp)
  }

  const handleStatusChange = async (index: number) => {
    const elementToUpdate = state[index];
    await TaskRequest.updateTask({
        Id: elementToUpdate.Id,
        Name: elementToUpdate.Name,
        Priority: elementToUpdate.Priority,
        Done: !elementToUpdate.Done
      }
    );

    // const temp = state.map((item, itemI) => (itemI == index ? item : { ...item, Done: !item.Done }))
    setState(await TaskRequest.getClientTasks(1))
  }
*/
  const instState = [{
    title: "Code",
    isCompleted: true
  }, {
    title: "Meeting with team at 9",
    isCompleted: false
  }, {
    title: "Check Emails",
    isCompleted: false
  }, {
    title: "Write an article",
    isCompleted: false
  }];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");
  const toast = useToast();

  const addItem = title => {
    if (title === "") {
      toast.show({
        title: "Please Enter Text",
        status: "warning"
      });
      return;
    }

    setList(prevList => {
      return [...prevList, {
        title: title,
        isCompleted: false
      }];
    });
  };

  const handleDelete = index => {
    setList(prevList => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleStatusChange = index => {
    setList(prevList => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };
  return <Center w="100%">
    <Box maxW="300" w="100%">
      <Heading mb="30" fontSize="35" color={colors.darkPurple} fontFamily={fonts.alfaSlabOne.regular} fontWeight="light" alignSelf="center">
        To Do List
      </Heading>
      <VStack space={4}>
        <HStack space={2}>
          <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
          <IconButton borderRadius="sm" variant="solid" backgroundColor={colors.darkPurple} icon={<Icon as={Feather} name="plus" size="sm" color={"warmGray.50"} />} onPress={() => {
            addItem(inputValue);
            setInputValue("");
          }} />
        </HStack>
        <VStack space={2}>
          {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
            <Checkbox isChecked={item.isCompleted} backgroundColor={colors.darkPurple} onChange={() => handleStatusChange(itemI)} value={item.title}></Checkbox>
            <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
              color: item.isCompleted ? "gray.400" : "coolGray.800"
            }} _dark={{
              color: item.isCompleted ? "gray.400" : "coolGray.50"
            }} onPress={() => handleStatusChange(itemI)}>
              {item.title}
            </Text>
            <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
          </HStack>)}
        </VStack>
      </VStack>
    </Box>
  </Center>;
};
  /*return (
    <Box>
      <Heading mb="30">To Do List</Heading>
      <VStack space={4}>
        <HStack space={2}>
          <Input
            flex={1}
            onChangeText={(v) => setInputValue(v)}
            value={inputValue}
            placeholder="Add Task"
            border-style="rgb(249.0, 214.0, 124.0)"
          />
          <IconButton
            backgroundColor="#f9d67d"
            borderRadius="sm"
            variant="solid"
            icon={
              <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
            }
            onPress={() => {
              addItem(inputValue)
              setInputValue('')
            }}
          />
        </HStack>
        <VStack space={2}>
          {state.map((item, itemI) => (
            <HStack
              w="60%"
              padding="5%"
              justifyContent="space-between"
              alignItems="center"
              key={item.Name + itemI.toString()}
            >

              <Checkbox
                colorScheme="rgba(249.0, 214.0, 124.0, 1.0)"
                defaultIsChecked
                isChecked={item.Done}
                onChange={() => handleStatusChange(itemI)}
                value={item.Name}
              >
                <Text
                  fontWeight="400"
                  mx="2"
                  strikeThrough={item.Done}
                  _light={{
                    color: item.Done ? 'gray.400' : 'coolGray.800',
                  }}
                  _dark={{
                    color: item.Done ? 'gray.400' : 'coolGray.50',
                  }}
                >
                  {item.Name}
                </Text>
              </Checkbox>
              <IconButton
                size="sm"
                colorScheme="trueGray"
                icon={(
                  <Icon
                    as={Entypo}
                    name="minus"
                    size="xs"
                    color="trueGray.400"
                  />
                )}
                onPress={() => handleDelete(itemI)}
              />

            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  )
}
*/

// const styles = StyleSheet.create({
//   checkboxStyle: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 2,
//     borderRadius: 4,
//     borderColor: "#089f9d67d1b2",
//     backgroundColor: "#f9d67d",
//     color: true
//   }
// });

export default () => (
  <NativeBaseProvider>
    <Center flex={1} px="3">
      <Example  />
    </Center>
  </NativeBaseProvider>
)
