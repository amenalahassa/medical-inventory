import { IAppRoute, IAppRoutedMenuItem } from "../../shared/interfaces/IAppRoute";
import { Link, Route } from "react-router-dom";
import React from "react";

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function formatRouteToMenuItems(
  routes: Array<IAppRoute>
): IAppRoutedMenuItem[] {
  return routes.map((route, index) => {
    function MenuLink() {
      return <Link to={route.path}>{route.label}</Link>;
    }

    return {
      label: MenuLink(),
      key: String(index),
      routeIndex: route.index,
    };
  });
}

export function renderRoute(route: IAppRoute) {
  const RoutedComponent = route.component;
  return (
    <Route
      key={route.path}
      index={route.index}
      path={route.path}
      element={<RoutedComponent />}
    />
  );
}
