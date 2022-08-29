import { ItemType } from "antd/lib/menu/hooks/useItems";

export interface IAppRoute {
  path: string;
  component: any;
  children?: Array<IAppRoute>;
  label: string;
  index: boolean;
}

export interface IAppRoutedMenuItem {
  label: JSX.Element;
  key: string;
  routeIndex: boolean;
}
