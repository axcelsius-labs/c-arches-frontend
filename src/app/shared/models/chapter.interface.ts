import { DialogueLine } from "./dialogue.interface";

export interface Chapter {
    backgroundImage: string;
    leftCharacterImage?: string;
    rightCharacterImage?: string;
    characterImage?: string;
    dialogueLines?: DialogueLine[];
    data?: any;
    chapterType: string;
    nextPage: string | null;
    previousPage?: string | null;
}

export interface ChapterProgress {
    [key: string]: boolean;
}

export interface Chapters {
    [key: string]: Chapter;
}