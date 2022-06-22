export type ContinentTypes = {
    id: number;
    name: string;
    description: string;
    bannerImage: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    amountMostPopularCities: number;
    mostPopularCities: [{
        cityName: string;
        countryName: string;
        cityImage: string;
        countryCode: string;
    }]
}

export type ContinentSliderTypes = {
    slug: string;
    name: string;
    info: string;
    bannerImage: string;
}
export interface ContinentProps {
    continent: ContinentTypes
}