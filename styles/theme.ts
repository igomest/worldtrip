import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
    colors: {
        white: '#FFFFFF',
        gray: '#F5F8FA',
        silver: {
            "50": '#DADADA',
            "100": '#47585B'
        }
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