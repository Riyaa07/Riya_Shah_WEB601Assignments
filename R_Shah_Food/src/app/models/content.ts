export interface Content {
    readonly id: number;
  name: string;
  title: string;
  body?: string;
  imageLink?: string;
  type: string;
  hashtags: string[];
  
}
