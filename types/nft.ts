export type Trait = 'attack' | 'health' | 'speed';

export type NftAttribute = {
    trait_type: Trait;
    value: string;
};

export type NftMetaData = {
    name: string;
    description: string;
    image: string;
    attributes: NftAttribute[];

};