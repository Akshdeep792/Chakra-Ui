import { Flex, Heading, IconButton, Spacer, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"
import { useColorMode } from "@chakra-ui/react";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";
function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" font-weight="semibold" color="cyan.400">iamtheakshdeepsingh</Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaGithub />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaLinkedin />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={8} icon={isDark ? < FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack >
  );
}

export default App;
