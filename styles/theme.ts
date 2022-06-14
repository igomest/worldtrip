import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
    colors: {
        white: '#FFFFFF',
        gray: '#F5F8FA',
        silver: '#DADADA'
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray'
            }
        }
    },
})