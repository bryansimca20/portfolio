import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../animation.css";
import Home from "./Home";
import Experience from "./Experience";

const Content = ({ location }) => {
  return (
    <div className="container-lg">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          timeout={{
            enter: 300,
            exit: 300,
          }}
          classNames={"fade"}
        >
            <section className="content-wrapper py-3">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/Experience" component={Experience} />
              </Switch>
            </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(Content);
