import { Chapter } from "../../shared/models/chapter.interface";

export const intro: Chapter = {
    backgroundImage: 'assets/images/Park.png',
    characterImage: 'assets/images/Alex.png',
    dialogueLines: [
        { speaker: 0, message: "Hey! I'm Sam!", params: []},
        { speaker: 0, message: "Before we begin, note that this quick exit button in the bottom right will take you to the Weather Channel homepage.", params: []},
        { speaker: 0, message: "Use it if you ever need to escape, and use the link in your email to return here.", params: []},
        { speaker: 0, message: "Also, consider using a safe device and clearing your browser history if you think a partner may be monitoring you.", params: []}
    ],
    nextChapterId: '1.0',
    chapterType: "default"
};