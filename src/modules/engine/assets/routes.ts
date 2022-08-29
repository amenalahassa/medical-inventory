import { IAppRoute } from "../../../shared/interfaces/IAppRoute";
import Suppliers from "../views/Suppliers/Suppliers";

const EngineModuleRoute: Array<IAppRoute> = [
  {
    path: "/",
    label: "Fournisseurs",
    component: Suppliers,
    index: true,
  },
];

export default EngineModuleRoute;
