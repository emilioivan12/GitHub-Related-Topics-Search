import { gql } from "@apollo/client";
import { getTopicQueryByName } from "../topicQueries";

describe("topicQueries", () => {
  describe("getTopicQueryByName", () => {
    test("if input is undefined then it returns a query with react as the argument", () => {
      const expectedOutput = gql`
        query getTopic {
          topic(name: "react") {
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
      console.log(expectedOutput);
      expect(getTopicQueryByName().loc?.source).toBe(
        expectedOutput.loc?.source
      );
    });

    test("if input is not undefined then it returns a query with the input as the argument", () => {
      const input = "test";
      const expectedOutput = gql`
        query getTopic {
          topic(name: "${input}") {
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
      console.log(expectedOutput);
      expect(getTopicQueryByName(input).loc?.source).toBe(
        expectedOutput.loc?.source
      );
    });
  });
});
