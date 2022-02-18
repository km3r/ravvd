import {Rateable, Score} from "../model/Rating";
import {Box, Center, Heading, Text, View, VStack} from 'native-base';
import {MusicEvent} from "../model/MusicEvent";
import {ProductionProject} from "../model/ProductionProject";


function SingleEvent({ event }: { event: MusicEvent }) {
    return (
        <Center w="150" h="100" bg="gray.100" rounded="sm" shadow={3} mr={1}>
            <Text color="gray.900">{event.name}</Text>
            <Text color="gray.900">{event.date.toDateString()}</Text>
        </Center>
    )
}

export default function ProductionEventsView({ production }: { production: ProductionProject }) {

    return (
        <Box w="100%" h="20%" bg="black">
            <VStack>
            <Heading>Events:</Heading>
            <SingleEvent event={production.sets.map(value => value.event)[0]}/>
            </VStack>
        </Box>
)

}
