import { Flex, Image } from "@chakra-ui/react"
// import Image from "next/image"
import { Header } from "../components/Header"


const Home = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        w="100%"
        h="368.21"
        align="center"
        justify="center"
        marginTop={14}
      >
        <Image
          priority
          src={'/images/Banner.svg'}
          alt="Logo"
          w="100%"
        />
      </Flex>

      <Flex w="100%" h="30vh" justify="center" align="center" marginTop={50}>
        <Image
          priority
          src={'/images/travelTypes.svg'}
          alt="Logo"
          // w="50%"
        />
      </Flex>
    </Flex>
  )
}

export default Home
