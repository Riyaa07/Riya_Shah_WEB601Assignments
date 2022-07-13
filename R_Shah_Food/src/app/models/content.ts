export interface Content {
 id: number | null;
  name: string;
  title: string;
  body?: string;
  author: string;
  imageLink?: string;
  type: string;
  hashtags?: string[];
  
}
