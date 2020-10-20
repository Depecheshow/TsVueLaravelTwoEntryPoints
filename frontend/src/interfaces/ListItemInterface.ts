export default interface ListItemInterface {
    name: string;
    minerals: number;
    gas: number;
    buildTime: number;
    require?: string[];
    supplyCost?: number;
    supplyValue?: number;
};
