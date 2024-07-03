export interface Dialogue {
    lineIndex?: number;
    lines?: DialogueLine[]
}

export interface DialogueLine {
    speaker: number;
    message: string;
    params: string[];
  }