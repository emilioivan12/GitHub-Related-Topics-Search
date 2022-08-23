import * as apolloClient from "@apollo/client";
import { QueryResult } from "@apollo/client";
import { renderHook } from "@testing-library/react-hooks";
import { topicMock } from "../../__mocks__/Topic";
import { useGetGitHubTopic } from "../useGetGitHubTopic";

jest.mock("@apollo/client");

describe("useGetGitHubTopic", () => {
  const topic = topicMock;
  const loading = false;
  const useQueryMock = jest.spyOn(apolloClient, "useQuery");

  beforeEach(() => {
    useQueryMock.mockImplementation(
      () =>
        ({
          data: { topic },
          loading,
        } as QueryResult<any, any>)
    );
  });

  test("Always return the data and loading returned by useQuery", () => {
    const input = "react";
    const result = renderHook(() => useGetGitHubTopic(input));

    expect(result.result.current.topic).toBe(topic);
    expect(result.result.current.loading).toBe(loading);
  });
  
});
