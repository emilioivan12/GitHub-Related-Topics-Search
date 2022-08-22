import Grid from "@mui/material/Grid";
import { useNavigate, useParams } from "react-router-dom";

import HomeContainer from "./HomeContainer";
import NotFound from "../NotFound/NotFound";
import { useDocumentTitle, useGetGitHubTopic } from "../../hooks";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

const Home = () => {
  const navigate = useNavigate();
  const { topic: query } = useParams();
  const { topic, loading } = useGetGitHubTopic(query);
  useDocumentTitle(query);

  const handleClickRelatedTopic = (topic: string) => {
    navigate(`/${topic}`);
  };

  if (loading) return <Loading />;
  if (!topic) return <NotFound />;

  return (
    <HomeContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={4}>
          {topic && (
            <Card
              title={topic.name}
              subtitle="Main Topic"
              description={"Stargazer connections: " + topic.stargazerCount}
              primary
            />
          )}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {topic &&
          topic.relatedTopics.map((topic) => {
            return (
              <Grid item xs={12} sm={4} key={topic.id}>
                <Card
                  title={topic.name}
                  subtitle="Related Topic"
                  onClick={() => handleClickRelatedTopic(topic.name)}
                  description={"Stargazer connections: " + topic.stargazerCount}
                  primary={false}
                />
              </Grid>
            );
          })}
      </Grid>
    </HomeContainer>
  );
};

export default Home;
