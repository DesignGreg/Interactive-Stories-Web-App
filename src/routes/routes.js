import Board from '../components/coreGenerator/Board';
import WordProcessor from '../components/coreGenerator/WordProcessor';
import ReaderWrapper from '../components/coreReader/ReaderWrapper';


export const routes = [
  { path: '/board/:storyID', component: Board },
  { path: '/word-processor/:storyID', component: WordProcessor },
  { path: '/reader/:storyID', component: ReaderWrapper },
];