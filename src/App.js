import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import { NativeBaseProvider } from 'native-base'
import Router from './routes'
// import ClientRequest from './routes/ExternalCalls/ClientRequest'
// import TaskRequest from './routes/ExternalCalls/TaskRequest'

const App = () => {
  // state
  // ClientRequest.registerClient({
  //   Name: 'testAxios',
  //   LastName: 'testAxios',
  //   ClientGroup: 'testAxios',
  //   Email: 'testAxios',
  //   Password: 'testAxios',
  // });

  // ClientRequest.clientLogin({
  //   Email: 'testAxios',
  //   Password: 'testAxios',
  // });

  // ClientRequest.getClientById(1);
  // ClientRequest.updateClientData({
  //   Id: 1,
  //   Name: 'testAxios1',
  //   LastName: 'testAxios1',
  //   ClientGroup: 'testAxios1',
  //   Email: 'testAxios1',
  //   Password: 'testAxios1',
  // });
  // ClientRequest.getClientById(1);
  // TaskRequest.getClientTasks(1)
  // TaskRequest.createTask({
  //   ClientId: 1,
  //   Name: 'testAxios',
  //   Priority: 'testAxios'
  // });
  // TaskRequest.updateTask({
  //   Id: 1,
  //   Name: 'testAxios',
  //   Priority: 'testAxios',
  //   Done: true
  // });
  const [didLoad, setDidLoad] = useState(false)

  // handler
  const handleLoadAssets = async () => {
    // assets preloading
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  // lifecycle
  useEffect(() => {
    handleLoadAssets()
  }, [])

  // rendering
  if (!didLoad) return <View />
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </NativeBaseProvider>
  )
}

export default App
