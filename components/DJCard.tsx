import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import {Divider, Text, View, VStack, Spacer, Flex} from 'native-base';
import ProjectView from "./ProjectView";
import {ProductionProject} from "../model/ProductionProject";
import AliasView from "./AliasView";
import ProductionTrackView from "./ProductionTrackView";
import RatingView from "./RatingView";
import ProductionEventsView from "./ProductionEventsView";
import React from "react";

type Props = {
  prodProject: ProductionProject
}


export default class DJCard extends React.Component<Props, Props>{
  constructor(props: Props) {
    super(props);
    this.state = {prodProject:props.prodProject};
    this.setState({prodProject:props.prodProject});
  }

  render() {
    return (
        <View>
          <Flex h="100%">
            <ProjectView project={this.state.prodProject}/>
            <AliasView productionProject={this.state.prodProject}/>
            <Divider/>
            <ProductionTrackView productionProject={this.state.prodProject}/>
            <Divider/>
            <RatingView rateable={this.state.prodProject.tracks[0]}/>
            <Divider/>
            <ProductionEventsView production={this.state.prodProject}/>
          </Flex>
        </View>
    );
  }
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  productionProjectContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 10,
    paddingTop: 10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
  },
});
