import {
    Box,
    Center,
    Flex,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
    Wrap,
    WrapItem
} from "@chakra-ui/react"
import { CityCard } from "../../components/CityCard"
// import Image from "next/image"
import { Header } from "../../components/Header"



const Continent = () => {
    return (
        <Flex direction="column" h="100vh" align="center">
            <Header />

            <Flex
                w="100%"
                h="70%"
                marginTop={5}
            >
                <Image
                    src={'/images/Europe2.jpeg'}
                    alt="Banner"
                    w="100%"
                    h="100%"
                />
                <Text
                    position="absolute"
                    color="white"
                    fontWeight="bold"
                    fontSize={"4xl"}
                    p={120}
                    marginTop={360}
                >
                    Europa
                </Text>
            </Flex>

            <Flex w="60%" h="20%" justify="space-between" align="center" marginTop={7}>
                <Text
                    textAlign="justify"
                    w="45%"
                    color="silver.100"
                    fontSize={'xl'}
                >
                    A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>

                <Image
                    src={'/images/Info.png'}
                    alt="Info"
                    w="490px"
                    h="99px"
                // marginRight={70}
                />
            </Flex>

            <Flex
                w="100%"
                h="100%"
                direction="column"
                marginTop="20"
                alignItems="flex-start"
            >

                <Flex w="14%" marginLeft="94px">
                    <Heading color="silver.100">Cidades +100</Heading>
                </Flex>

                <Flex
                    h="100%"
                    flexWrap="wrap"
                    justify="center"
                    align="center"
                    marginLeft="60px"
                    marginTop={5}
                >
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                    <CityCard />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Continent
