// src/routes.jsx
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import DetailChapterPodcast from "./pages/DetailChapterPodcast/DetailChapterPodcast";
import PrincipalPodcasts from "./pages/PrincipalPodcasts/PrincipalPodcasts";
import DetailPodcast from "./pages/DetailPodcast/DetailPodcast";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<PrincipalPodcasts />} />
        <Route path="/podcast/:podcastId" element={<DetailPodcast />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<DetailChapterPodcast />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
