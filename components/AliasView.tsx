import {Box, Center, HStack, Text, View} from "native-base";
import {ProductionProject} from "../model/ProductionProject";

export default function AliasView({ productionProject }: { productionProject: ProductionProject }) {

    let aliasList = productionProject.artists.flatMap(value => value.project).filter(value => value != productionProject && value instanceof ProductionProject)
        .reduce<string>((previousValue, currentValue, currentIndex) => previousValue + "," + currentValue.name,"");
    aliasList = aliasList.substring(1);

    return (
        <Box pb={2} pl={8}>
            <HStack>
            <Text color="#fff">a.k.a. </Text>
            <Text color="#fff">{aliasList}</Text>
            </HStack>
        </Box>
    )
}
