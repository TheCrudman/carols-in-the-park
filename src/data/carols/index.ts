import { silentNight } from './silent-night';

export interface Carol {
  id: string;
  title: string;
  lyrics: string[];
}

export const carols: Carol[] = [
  {
    id: 'once-in-royal',
    title: 'Once in Royal David\'s City',
    lyrics: []
  },
  {
    id: 'o-come-all-ye-faithful',
    title: 'O Come, All Ye Faithful',
    lyrics: []
  },
  {
    id: 'te-harinui',
    title: 'Te Harinui',
    lyrics: []
  },
  {
    id: 'twelve-days',
    title: 'The Twelve Days of Christmas',
    lyrics: []
  },
  silentNight,
  {
    id: 'feliz-navidad',
    title: 'Feliz Navidad',
    lyrics: []
  },
  {
    id: 'o-holy-night',
    title: 'O Holy Night',
    lyrics: []
  },
  {
    id: 'first-noel',
    title: 'The First Noel',
    lyrics: []
  },
  {
    id: 'hark-herald-angels',
    title: 'Hark! The Herald Angels Sing',
    lyrics: []
  },
  {
    id: 'joy-to-the-world',
    title: 'Joy to the World',
    lyrics: []
  }
];