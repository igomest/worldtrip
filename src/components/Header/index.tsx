import { Flex } from "@chakra-ui/react"
import Image from "next/image"

export const Header = () => {
    return (
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
                src={'/images/Logo.svg'}
                alt="Logo"
                width={184.06}
                height={45.92}
            />
        </Flex>
    )
}