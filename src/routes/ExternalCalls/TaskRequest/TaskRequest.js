import axios from 'axios'

/*const createTaskEndpoint = 'http://localhost:8090/createTask'
const getClientTasksEndpoint = 'http://localhost:8090/getClientTasks/'
const updateTaskEndpoint = 'http://localhost:8090/updateTask'*/




const getClientTasks = async (id) => {
  let result
  result = {
    Id: 1,
    Name: "example",
    Priority: "high",
    Done: false
  }
  /*await axios.get(getClientTasksEndpoint + id)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = errors.message
    })
  console.log(result)*/
  return result
}

// newClient
// {
//   ClientId: 1,
//   Name: 'testAxios',
//   Priority: 'testAxios'
// }
const createTask = async (newTas) => {
  let result
  /*await axios
    .put(createTaskEndpoint, newTas)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = errors.message
    })
  console.log(result)*/
  return result
}

// newClient
// {
//   Id: 1,
//   Name: 'testAxios',
//   Priority: 'testAxios'
//   Done: true
// }
const updateTask = async (task) => {
  let result
  /*await axios
    .post(updateTaskEndpoint, task)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = errors.message
    })
  console.log(result)*/
  return result
}

export {
  getClientTasks, createTask, updateTask,
}
