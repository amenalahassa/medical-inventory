import { IAppRoute } from "../../shared/interfaces/IAppRoute";
import { Link, Route } from "react-router-dom";
import React from "react";
import { ItemType } from "antd/lib/menu/hooks/useItems";

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function formatRouteToMenuItems(routes: Array<IAppRoute>): ItemType[] {
  return routes.map((route, index) => {
    function MenuLink() {
      return <Link to={route.path}>{route.label}</Link>;
    }

    return {
      label: MenuLink(),
      key: String(index),
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
