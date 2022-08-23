import { Topic } from "../entities/Topic";

export const topicMock: Topic = {
  name: "react",
  id: "MDU6VG9waWNyZWFjdA==",
  stargazerCount: 76515,
  relatedTopics: [
    {
      id: "MDU6VG9waWNhbmd1bGFy",
      name: "angular",
      stargazerCount: 45053,
      relatedTopics: [],
    },
    {
      id: "MDU6VG9waWNuZXh0anM=",
      name: "nextjs",
      stargazerCount: 708,
      relatedTopics: [],
    },
    {
      id: "MDU6VG9waWNyZWFjdC1uYXRpdmU=",
      name: "react-native",
      stargazerCount: 25782,
      relatedTopics: [],
    },
  ],
};
