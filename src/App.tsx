import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { client } from "./services/graphqlService";
import { ThemeColorModeProvider } from "./hooks";
import NotFound from "./screens/NotFound";
import Home from "./screens/Home";
import Container from "./components/Container";
import ErrorHandler from "./components/ErrorHandler";
import Nav from "./screens/Nav";

const App = () => {
  return (
    <ErrorHandler>
      <ThemeColorModeProvider>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Container>
              <Nav />
              <Routes>
                <Route index element={<Home />} />
                <Route path=":topic" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </BrowserRouter>
        </ApolloProvider>
      </ThemeColorModeProvider>
    </ErrorHandler>
  );
};

export default App;
