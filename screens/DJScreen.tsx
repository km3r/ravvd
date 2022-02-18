import { StyleSheet } from 'react-native';

import DJCard from '../components/DJCard';
import {Box, Text, View} from "native-base";
import { RootTabScreenProps } from '../types';
import {ProductionProject} from "../model/ProductionProject";
import {Label, Promoter} from "../model/OrgProject";
import {Artist} from "../model/Artist";
import {Track} from "../model/Track";
import {MusicEvent} from "../model/MusicEvent";
import {Performance} from "../model/Performance";
import { NativeBaseProvider } from 'native-base';

export default function DJScreen({ navigation }: RootTabScreenProps<'TabDJ'>) {
  let p1 = new ProductionProject("Diplo");
  let p2 = new ProductionProject("Major Lazer");
  let p3 = new ProductionProject("SIDEPIECE");
  let label = new Label("Higher Grounds")
  let promoter = new Promoter("Do Lab");
  let artist = new Artist();
  artist.name = "Diplo";
  artist.project = [p1,p2, label];
  p1.artists = [artist];
  let track = new Track("On My Mind",new Set<ProductionProject>([p1,p3]),new Set<ProductionProject>(), {name:"Tech House", id:1},label);
  let track2 = new Track("Turn Back Time",new Set<ProductionProject>([p1]),new Set<ProductionProject>(), {name:"House", id:1},label);
  let track3 = new Track("Where are U Now",new Set<ProductionProject>([p1]),new Set<ProductionProject>(),  {name:"Bass House", id:1},label);
  p1.tracks.push(track);
  p1.tracks.push(track2);
  p1.tracks.push(track3);
  track.ratingCollection.average.scores[0].value = 2;
  track.ratingCollection.average.scores[1].value = 4;
  track.ratingCollection.average.scores[2].value = 4;
  track.ratingCollection.average.scores[3].value = 3;
  let event = new MusicEvent("Lightning in a Bottle", [promoter], new Date());
  let performance = new Performance(event,[p1]);
  event.lineup.push(performance);
  p1.sets.push(performance);




  return (
        <NativeBaseProvider>
          <DJCard prodProject={p1}/>
        </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 0,
    marginHorizontal: 40,
    height: 1,
    width: '80%',
  },
});
