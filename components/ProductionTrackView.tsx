//import {View} from "./Themed";
import {ProductionProject} from "../model/ProductionProject";
import {Track} from "../model/Track";
import {Box, ScrollView, Text, View, VStack, Flex, Heading, Center, HStack, Spacer, Modal, Button} from "native-base";
import { Entypo } from '@expo/vector-icons';
import {useState} from "react";
import RatingView from "./RatingView";

function SingleTrack({ track }: { track: Track }) {
    const [showModal, setShowModal] = useState(false);

    let artists: any[] = [];
    track.production.forEach(value => artists.push(<Center rounded="sm" bg={"gray.100"} pr={1} key={value.name}><Text>{value.name}</Text></Center>));

    let remixers: any[] = [];
    if (track.remixProduction)
        track.remixProduction.forEach(value => remixers.push(<Center rounded="sm" bg={"gray.100"} pr={1} key={value.name}><Text>{value.name}</Text></Center>));

    return (
        <Button justifyContent="center" onPress={() => setShowModal(true)} w="150" h="100" bg="gray.100" rounded="sm" shadow={3} mr={1}>
            {track.name}
            <Entypo name="music" size={24} color="black" />
            {track.genre?.name}
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>{track.name}</Modal.Header>
                    <Modal.Body>
                        <Flex>
                            <HStack>
                                <Text justifyContent="center">Artist: </Text>
                                {artists}
                            </HStack>
                            <HStack>
                                <Text justifyContent="center">Genre: </Text>
                                <Text justifyContent="center">{track.genre?.name} </Text>
                            </HStack>
                            <HStack>
                                <Text justifyContent="center">Label: </Text>
                                <Text justifyContent="center">{track.label?.name} </Text>
                            </HStack>
                            <RatingView rateable={track} bg={"white"} fg={"black"}/>
                        </Flex>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </Button>
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
