import {Rateable, Score} from "../model/Rating";
import {Text, View} from "./Themed";
import {Box, Center, Heading, HStack, VStack} from "native-base";
import { AntDesign } from '@expo/vector-icons';



function ScoreView({ score }: { score: Score }) {
    let rate = [];
    for (let i = 0; i <5; i++) {
        if (i < score.value)
            rate.push(<AntDesign key={i} name="star" size={24} color="white" />);
        else
            rate.push(<AntDesign key={i} name="staro" size={24} color="white" />);
    }

    return (
        <HStack>
            <Center size={8} w="20%"><Text>{score.category.name}</Text></Center>
            <Center size={8} w="80%"><Text>{rate}</Text></Center>
        </HStack>
    )
}

export default function RatingView({ rateable }: { rateable: Rateable }) {
    return (
        <Center h="25%" bg="gray.900">
            <VStack w="100%" h="100%">
            <Heading>Ratings:</Heading>
            <ScoreView score={rateable.ratingCollection.average.scores[0]}/>
            <ScoreView score={rateable.ratingCollection.average.scores[1]}/>
            <ScoreView score={rateable.ratingCollection.average.scores[2]}/>
            <ScoreView score={rateable.ratingCollection.average.scores[3]}/>
            </VStack>
        </Center>
    )

}
