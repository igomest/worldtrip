import { Box, Flex, HStack, Icon } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

export const Header = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/" ? (
        <Flex as="header" w="100%" h="20" bg="white" align="center">
          <Box
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            w="80%"
            marginTop={2}
          >
            <Link href="/">
              <a>
                <Icon as={IoIosArrowBack} color="silver.100" fontSize="32px" />
              </a>
            </Link>
            <Image
              priority
              src={"/images/Logo.svg"}
              alt="Logo"
              width={184.06}
              height={45.92}
            />
          </Box>
        </Flex>
      ) : (
        <Flex
          as="header"
          w="100%"
          h="20"
          bg="white"
          justify="center"
          align="center"
        >
          <Image
            priority
            src={"/images/Logo.svg"}
            alt="Logo"
            width={184.06}
            height={45.92}
          />
        </Flex>
      )}
    </>
  );
};
