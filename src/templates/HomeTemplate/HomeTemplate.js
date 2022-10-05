import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React, { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";

function HomeTemplate(props) {
  // path, exact, Component
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        // props.location, props.history, props.match
        return (
          <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
}

export default HomeTemplate;
