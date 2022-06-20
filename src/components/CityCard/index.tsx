import { Box, Flex, Wrap, WrapItem, Image, Heading, Text, Divider, Button, Stack, HStack } from "@chakra-ui/react";

export const CityCard = () => {
    return (
        <Box
            display="flex"
            bg="white"
            w="256px"
            h="279px"
            margin={8}
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            borderRadius={4}
            borderColor="orange.100"
            borderWidth='1px'
        >

            <Box w="256px" h="279px">
                <Image
                    src="/images/Foto.svg"
                    alt="Cidade"
                    w="100%"
                    h="100%"
                />
            </Box>

            <Box display="flex" w="100%" h="70%" justifyContent="space-between" p={5}>
                <Box display="flex" flexDirection="column" w="50%">
                    <Stack spacing="1">
                        <Heading fontSize="md" color="silver.100">Londres</Heading>
                        <Text
                            fontSize="sm"
                            color="silver.200"
                        >
                            Reino Unido
                        </Text>
                    </Stack>
                </Box>

                <Box w="30px" h="30px">
                    <Image
                        src="/images/Londres.png"
                        alt="Bird"
                        w="30px"
                        h="30px"
                    />
                </Box>
            </Box>
        </Box>
    );
};
