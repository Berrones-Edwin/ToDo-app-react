import { Badge } from '@chakra-ui/layout'
import React, { useContext } from 'react'
import TodoContext from '../context/ToDoContextProvider'
import ToDoList from './ToDoList'

const Completed = () => {
  const { list, setList } = useContext(TodoContext)

  const listFiltered = list.filter((item) => item.completed !== false)

  if (listFiltered.length === 0)
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No ToDos Completed
      </Badge>
    )

  return (
    <div>
      <ToDoList list={listFiltered} setList={setList} />
    </div>
  )
}

export default Completed
