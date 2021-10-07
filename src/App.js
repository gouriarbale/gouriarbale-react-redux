import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import ProductList from "./product/ProductList";
import FrontendLayout from "./Layout/FrontendLayout";

function App() {
  return (
    <>
      {/* <ProductList /> */}
      <Switch>
        <Route path="/">
          <FrontendLayout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
