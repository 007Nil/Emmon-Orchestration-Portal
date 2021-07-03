import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SidePanel from "./SidePanel";
import MomNodes from "./MomNodes";
import FileManager from "./FileManager";
import JobSubmit from "./JobSubmit";
import Footer from "./Footer";

const SideNav = () => {
  return (
    <div id="layoutSidenav">
      <SidePanel />
      <div id="layoutSidenav_content">
        <Router>
          <Switch>
            <Route path="/mom_nodes">
              <MomNodes />
            </Route>
            <Route path="/file_manager">
              <FileManager />
            </Route>
            <Route path="/job_submit">
              <JobSubmit />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
};

export default SideNav;
