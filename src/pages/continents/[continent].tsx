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
import { ParsedUrlQuery } from "querystring";

interface GetStaticPropsParams extends ParsedUrlQuery {
  continent: string
}

const Continent = ({ continent }: ContinentProps) => {
  return (
    <Flex direction="column" h="100vh" align="center">
      <Header />

      <Flex w="100%" h="660px" marginTop={5}>
        <Image
          src={continent.bannerImage}
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
          {continent.mostPopularCities.map((city, index) => (
            <CityCard 
             key={index}
             name={city.cityName}
             image={city.cityImage}
             cityName={city.cityName}
             cityImage={city.cityImage}
             countryName={city.countryName}
            />
          ))}
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
  const { continent } = params as GetStaticPropsParams;


  const response = await api.get(`/continents?slug=${continent}`);
  const continentInfos: ContinentTypes = response.data[0]

  return {
    props: {
      continent: continentInfos
    },
  };
};

export default Continent;
