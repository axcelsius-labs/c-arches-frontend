export interface Dialogue {
    lineIndex?: number;
    isAnimating?: boolean;
    lines?: DialogueLine[]
}

export interface DialogueLine {
    speaker: number;
    message: string;
    params: string[];
}