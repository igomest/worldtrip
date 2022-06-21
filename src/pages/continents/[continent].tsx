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
  WrapItem,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { CityCard } from "../../components/CityCard";
import { Header } from "../../components/Header";
import { ContinentProps, ContinentTypes } from "../../interfaces/types";
import { api } from "../../services/api";

const Continent = ({ continent }: ContinentProps) => {
  return (
    <Flex direction="column" h="100vh" align="center">
      <Header />

      <Flex w="100%" h="70%" marginTop={5}>
        <Image
          src={`url(${continent.bannerImage})`}
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
          {continent.name}
        </Text>
      </Flex>

      <Flex
        w="60%"
        h="20%"
        justify="space-between"
        align="center"
        marginTop={7}
      >
        <Text textAlign="justify" w="45%" color="silver.100" fontSize={"xl"}>
          {continent.description}
        </Text>

        <Image src={"/images/Info.png"} alt="Info" w="490px" h="99px" />
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
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params;

  const response = await api.get(`/continents?slug=${continent}`);

  return {
    props: {
      continent: response.data
    },
  };
};

export default Continent;