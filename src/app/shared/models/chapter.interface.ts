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
  characterImage?: string;
  characterImageCircle?: string;
  leftCharacterImage?: string;
  rightCharacterImage?: string;
  dialogueLines?: DialogueLine[];
  sectionType?: string;
  previousSectionIndex?: number;
  nextSectionIndex?: number;
  overlay?: boolean;
  layout?: string;
  gridOptionIndexes?: number[];
  contraception?: Contraception;
  bullets?: string[];
}

export interface Contraception {
  name?: string;
  preview?: string;
  description?: string;
  use_within_short?: string;
  use_within_long?: string;
  effectiveness_short?: string;
  effectiveness_long?: string;
  duration_short?: string;
  duration_long?: string;
  periods?: string;
  privacy?: string;
}

export interface Chapters {
  [key: string]: Chapter;
}
