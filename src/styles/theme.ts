import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
    colors: {
        white: '#FFFFFF',
        gray: '#F5F8FA',
        silver: {
            "50": '#DADADA',
            "100": '#47585B',
            "200": "#999999"
        },
        orange: {
            "100": "#FFBA08"
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