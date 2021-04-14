import React from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";
import hasAnyAuthority from "../HasAnyAuthority/hasAnyAuthotiry";
import { PrivateRouteReactContext } from "./PrivateRouteReactContext";

export interface PrivateRouteReactProps extends RouteProps {
  /** The authorities to protect the route */
  hasAuthorities: string[];
  /** Route component */
  component?: any;
}

const PrivateRouteReact = (props: PrivateRouteReactProps) => {
  const {
    authorities = [],
    unAuthorizedUrl = "/403",
    loginUrl = "/login",
    isAuthenticated = false,
  } = React.useContext(PrivateRouteReactContext);

  const { hasAuthorities = [], component: Component, ...rest } = props;

  const isAuthorized = hasAnyAuthority(authorities, hasAuthorities);

  const checkAuthoriry = (props: any) => {
    if (isAuthorized) {
      return <Component {...props} />;
    } else {
      return <Redirect to={unAuthorizedUrl} />;
    }
  };

  const renderRedirection = (props: any) => {
    if (isAuthenticated) {
      return checkAuthoriry(props);
    } else {
      return (
        <Redirect
          to={{
            pathname: loginUrl,
            search: props.location.search,
            state: { from: props.location },
          }}
        />
      );
    }
  };

  return (
    <Route {...rest} render={(routeProps) => renderRedirection(routeProps)} />
  );
};

export default PrivateRouteReact;
