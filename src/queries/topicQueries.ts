import { gql } from "@apollo/client";

export const getTopicQueryByName = (name = "react") => {
  return gql`
  query getTopic {
  topic(name: "${name}") {
    name
    id
    stargazerCount
    relatedTopics {
      id
      name
      stargazerCount
    }
  }
}
`;
};
