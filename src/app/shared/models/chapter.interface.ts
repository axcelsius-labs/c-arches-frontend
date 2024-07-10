import { DialogueLine } from './dialogue.interface';

export interface Chapter {
  chapterTitle: string;
  chapterDescription: string | null;
  previousChapter: null | string;
  nextChapter: null | string;
  sections: Section[];
}

export interface Section {
  backgroundImage: string;
  leftCharacterImage?: string;
  rightCharacterImage?: string;
  characterImage?: string;
  dialogueLines?: DialogueLine[];
  data?: any;
  sectionType: string;
}

export interface Chapters {
  [key: string]: Chapter;
}
