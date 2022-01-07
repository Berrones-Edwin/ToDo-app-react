import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Active from '../components/Active'
import AddToDo from '../components/AddToDo'
import All from '../components/All'
import Completed from '../components/Completed'
import NavBar from '../ui/NavBar'
const AppRoutes = () => {
  return (
    <Stack
      minW={'100vw'}
      display="flex"
      direction="column"
      alignItems={'center'}
      minH={'100vh'}
    >
     
        <NavBar />
        <Heading
          mb="8"
          fontWeight="extrabold"
          size="2xl"
          bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
          bgClip="text"
        >
          TODO Application
        </Heading>
        <Stack w={'80%'} padding={3}>
          <AddToDo />
          <Routes>
            <Route exact path="/" element={<All />} />
            <Route exact path="/All" element={<All />} />
            <Route exact path="/Active" element={<Active />} />
            <Route exact path="/Completed" element={<Completed />} />
          </Routes>
        </Stack>
  
    </Stack>
  )
}

export default AppRoutes
