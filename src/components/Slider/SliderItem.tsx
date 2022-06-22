import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SliderItemProps {
  title: string;
  info: string;
  imageUrl: string;
  slug: string;
}

export const SliderItem = ({
  title,
  imageUrl,
  slug,
  info,
}: SliderItemProps) => {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={`url('${imageUrl}')`}
      bgPosition="100% 30%"
      bgSize="cover"
      textAlign="center"
    >
      <Link href={`/continents/${slug}`}>
        <a>
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color="gray.100"
            fontWeight="bold"
          >
            {title}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.300"
            fontSize={["0.8rem", "1xl", "2xl"]}
            mt={["2", "4"]}
          >
            {info}
          </Text>
        </a>
      </Link>
    </Flex>
  );
};
