export interface DialogueLine {
  speaker: number;
  segments: DialogueLineSegment[];
  params: string[];
}

export interface DialogueLineSegment {
  message: string;
  characters?: string[];
  params: string[];
}
