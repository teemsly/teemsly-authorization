import React from "react";

export interface PrivateRouteReactContextValue {
  /** The user authorities */
  authorities?: string[];
  /** The redirect unauthorize url */
  unAuthorizedUrl?: string;
  /** The login url of the app */
  loginUrl?: string;
  /** Is authenticated or not */
  isAuthenticated?: boolean;
}

export const PrivateRouteReactContext = React.createContext<PrivateRouteReactContextValue>(
  {
    authorities: [],
    unAuthorizedUrl: "/403",
    loginUrl: "login",
    isAuthenticated: false,
  }
);
