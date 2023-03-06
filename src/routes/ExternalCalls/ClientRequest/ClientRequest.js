import axios from 'axios'


const clientLoginEndpoint = 'http://192.168.56.1:8090/clientLogin'
const getClientByIdEndpoint = 'http://192.168.56.1:8090/getClientById/'
const registerClientEndpoint = 'http://192.168.56.1:8090/registerClient'
const updateClientDataEndpoint = 'http://192.168.56.1:8090/updateClientData'


const clientLogin = async (email, password) => {
  const body = {
    email,
    password,
  }
  let result
  await axios.post(clientLoginEndpoint, body)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = errors.message
    })
  // console.log(result)
  return result
}

const getClientById = async (id) => {
  let result
  await axios.get(getClientByIdEndpoint + id)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = errors.message
    })
  console.log(result)
  return result
}
// newClient
// {
//   Name: 'testAxios',
//   LastName: 'testAxios',
//   ClientGroup: 'testAxios',
//   Email: 'testAxios',
//   Password: 'testAxios',
// }
const registerClient = async (newClient) => {
  let result
  await axios
    .put(registerClientEndpoint, newClient)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = errors.message
    })
  return result
}

// newClient
// {
//   Id: 1
//   Name: 'testAxios',
//   LastName: 'testAxios',
//   ClientGroup: 'testAxios',
//   Email: 'testAxios',
//   Password: 'testAxios',
// }
const updateClientData = async (newClient) => {
  let result
  await axios
    .post(updateClientDataEndpoint, newClient)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = errors.message
    })
  return result
}

export {
  clientLogin, getClientById, registerClient, updateClientData,
}
