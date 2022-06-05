export interface Content {
    readonly id: number;
  name: string;
  title: string;
  body?: string;
  author: string;
  imageLink?: string;
  type: string;
  hashtags?: string[];
  
}
