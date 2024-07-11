import { DialogueLine } from './dialogue.interface';

export interface Chapter {
  chapterTitle: string;
  chapterDescription: string | null;
  previousChapter: null | string;
  nextChapter: null | string;
  sections: Section[];
}

export interface Section {
  backgroundImage?: string;
  leftCharacterImage?: string;
  rightCharacterImage?: string;
  characterImage?: string;
  dialogueLines?: DialogueLine[];
  gridOptionIndexes?: number[];
  sectionType?: string;
  previousSectionIndex?: number;
  name?: string;
  description?: string;
  price?: string;
  effectiveness?: string;
  duration_short?: string;
  duration_long?: string;
  periods?: string;
  privacy?: string;
}

export interface Chapters {
  [key: string]: Chapter;
}
