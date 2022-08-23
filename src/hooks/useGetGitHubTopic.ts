import { useQuery } from "@apollo/client";
import { mapFromDTOtoTopic, TopicDTO } from "../mappers/topicMapper";
import { getTopicQueryByName } from "../queries/topicQueries";

export const useGetGitHubTopic = (query="react") => {
  const { data, loading } = useQuery<TopicDTO>(getTopicQueryByName(query));
  const topic = mapFromDTOtoTopic(data);
  return { topic, loading };
};
