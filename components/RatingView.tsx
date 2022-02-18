import {Rateable, Score} from "../model/Rating";
import {Text, View} from "./Themed";
import {Box, Center, Heading, HStack, VStack} from "native-base";
import { AntDesign } from '@expo/vector-icons';



function ScoreView({ score, fg }: { score: Score, fg?: string  }) {
    let rate = [];
    for (let i = 0; i <5; i++) {
        if (i < score.value)
            rate.push(<AntDesign key={i} name="star" size={24} color={typeof fg != 'undefined' ? fg : "white" } />);
        else
            rate.push(<AntDesign key={i} name="staro" size={24} color={typeof fg != 'undefined' ? fg : "white" } />);
    }

    return (
        <HStack>
            <Center size={8} w="20%"><Text darkColor={typeof fg != 'undefined' ? fg : "white" }>{score.category.name}</Text></Center>
            <Center size={8} w="80%"><Text>{rate}</Text></Center>
        </HStack>
    )
}

export default function RatingView({ rateable, bg, fg }: { rateable: Rateable, bg?: string, fg?: string }) {
    return (
        <Center h="25%" bg={typeof bg != 'undefined'? bg : "gray.900" }>
            <VStack w="100%" h="100%">
            <Heading>Ratings:</Heading>
            <ScoreView score={rateable.ratingCollection.average.scores[0]} fg={fg}/>
            <ScoreView score={rateable.ratingCollection.average.scores[1]} fg={fg}/>
            <ScoreView score={rateable.ratingCollection.average.scores[2]} fg={fg}/>
            <ScoreView score={rateable.ratingCollection.average.scores[3]} fg={fg}/>
            </VStack>
        </Center>
    )

}
