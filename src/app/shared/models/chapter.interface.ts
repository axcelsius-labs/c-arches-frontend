import { DialogueLine } from './dialogue.interface';

export interface Chapter {
  chapterTitle: string;
  chapterDescription: string | null;
  previousChapter: null | string;
  nextChapter: null | string;
  backgroundImage?: string;
  sections: Section[];
}

export interface Section {
  leftCharacterImage?: string;
  rightCharacterImage?: string;
  characterImage?: string;
  dialogueLines?: DialogueLine[];
  gridOptionIndexes?: number[];
  sectionType?: string;
  previousSectionIndex?: number;
  nextSectionIndex?: number;
  name?: string;
  preview?: string;
  description?: string;
  price?: string;
  effectiveness?: string;
  duration_short?: string;
  duration_long?: string;
  periods?: string;
  privacy?: string;
  overlay?: boolean;
}

export interface Chapters {
  [key: string]: Chapter;
}
