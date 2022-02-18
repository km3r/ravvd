import React, {useState} from "react";
import {Box, Text, View} from 'native-base';
import {StyleSheet} from "react-native";
import {Project} from "../model/Project";

export default function ProjectView({ project }: { project: Project }) {

   // const [project] = useState(new Project("Loading"));

    return (<Box>
                <Text
                    style={styles.name}
                    color="rgba(255,255,255,0.8)">
                    {project.name}
                </Text>
            </Box>
    )
}
const styles = StyleSheet.create({
    name: {
        padding: 15,
        fontSize: 34,
        fontWeight: 'bold',
        alignItems: 'center',
        marginHorizontal: 10,
    }
});
