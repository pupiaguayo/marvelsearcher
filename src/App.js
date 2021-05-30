import styled from "styled-components";
import Footer from "./components/footer";
import HeroDetails from "./pages/heroDetails";
import PageHome from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComicSelected from "./pages/comicSelected";
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
`;
function App() {
  return (
    <Router>
      <Grid>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/heroDetails" component={HeroDetails} />
          <Route exact path="/comicChoose" component={ComicSelected} />
        </Switch>
        <Footer />
      </Grid>
    </Router>
  );
}
export default App;
