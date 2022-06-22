import { Divider, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
// import Image from "next/image"
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { api } from "../services/api";

const Home = () => {
  useEffect(() => {
    api.get("/continents").then((response) => console.log(response.data));
  }, []);

  return (
    <Flex direction="column" h="100%">
      <Stack spacing={14}>
        <Header />

        <Flex w="100%" h="368.21" align="center" justify="center">
          <Image src={"/images/Banner.svg"} alt="Banner" w="100%" />
        </Flex>

        <Flex w="100%" h="30vh" justify="center" align="center">
          <Image src={"/images/travelTypes.svg"} alt="Travel Types" />
        </Flex>
      </Stack>

      <Stack spacing={8}>
        <Flex justify="center" align="center">
          <Divider border="silver.100" h="2px" bg="silver.100" w="90px" />
        </Flex>

        <Flex
          justify="center"
          align="center"
          flexDirection="column"
          color="silver.100"
        >
          <Text fontSize="4xl" fontWeight={500}>
            Vamos nessa?
          </Text>
          <Text fontSize="4xl" fontWeight={500}>
            Então escolha seu continente
          </Text>
        </Flex>

        <Flex w="100%" justify="center" align="center">
          <Slider />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Home;
