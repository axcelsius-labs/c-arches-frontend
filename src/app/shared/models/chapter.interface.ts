import { DialogueLine } from "../components/dialogue/dialogue-line.inferface";

export interface Chapter {
    backgroundImage: string;
    leftCharacterImage?: string;
    rightCharacterImage?: string;
    characterImage?: string;
    dialogueLines?: DialogueLine[];
    data?: any;
    chapterType: string;
    nextPage: string;
}

export interface Chapters {
    [key: string]: Chapter;
}