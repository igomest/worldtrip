export type ContinentTypes = {
    id: number;
    name: string;
    description: string;
    bannerImage: string;
}

export interface ContinentProps {
    continent: ContinentTypes
}