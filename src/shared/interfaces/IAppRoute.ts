export interface IAppRoute {
  path: string;
  component: any;
  children?: Array<IAppRoute>;
  label: string;
  index: boolean;
}
