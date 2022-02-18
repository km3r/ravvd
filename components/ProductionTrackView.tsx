//import {View} from "./Themed";
import {ProductionProject} from "../model/ProductionProject";
import {Track} from "../model/Track";
import {Box, ScrollView, Text, View, VStack, Flex, Heading, Center, HStack, Spacer} from "native-base";
import { Entypo } from '@expo/vector-icons';

function SingleTrack({ track }: { track: Track }) {


    return (
        <Center w="150" h="100" bg="gray.100" rounded="sm" shadow={3} mr={1}>
            {track.name}
            <Entypo name="music" size={24} color="black" />
            {track.genre?.name}
        </Center>
    )
}


export default function ProductionTrackView({ productionProject }: { productionProject: ProductionProject }) {


    return (
        <Center h="20%" w="100%">

                <VStack space={4.5} maxW="300%" h="100%" >
                    <Heading>Tracks:</Heading>
                    <Box>
                    <ScrollView horizontal={true} _contentContainerStyle={{
                        m: "0",
                        minW: "72",
                        mb: "15",
                    }}>
                        <HStack flex={1} p={0}>
                        <SingleTrack track={productionProject.tracks[0]}/>
                            <Spacer/>
                        <SingleTrack track={productionProject.tracks[1]}/>
                            <Spacer/>
                        <SingleTrack track={productionProject.tracks[2]}/>
                        <SingleTrack track={productionProject.tracks[2]}/>
                        <SingleTrack track={productionProject.tracks[2]}/>
                        </HStack>
                    </ScrollView>
                    </Box>
                </VStack>
        </Center>
    )
}
