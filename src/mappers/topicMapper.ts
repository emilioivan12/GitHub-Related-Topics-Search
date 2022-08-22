import { Topic } from "../entities/Topic";

export interface TopicDTO {
  topic: Topic;
}

export const mapFromDTOtoTopic = (topicDTO?: TopicDTO): Topic | undefined => {
  return topicDTO?.topic;
};
