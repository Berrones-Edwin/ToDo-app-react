import {
  Box,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'

const Links = ['All', 'Completed', 'Active']

const NavLink = ({ children }) => (
  <Link
    as={LinkRouter}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
    to={children}
  >
    {children}
  </Link>
)

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Stack p={4} w={'100%'}>
      <HStack spacing={8} alignItems={'center'}>
        <Box>
          <IconButton
            isRound="true"
            icon={colorMode === 'dark' ? <FaMoon /> : <FaSun />}
            size="lg"
            alignSelf="flex-end"
            onClick={toggleColorMode}
          />
        </Box>
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink as key={link}>
              {link}
            </NavLink>
          ))}
        </HStack>
      </HStack>
    </Stack>
  )
}

export default NavBar
