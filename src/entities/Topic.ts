export interface Topic {
  name: string;
  id: string;
  stargazerCount: number;
  relatedTopics: Topic[];
}
