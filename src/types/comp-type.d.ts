import { ComponentSettingType } from "./comp-settings";

export type ComponentType = {
  heading: string;
  id: string;
  template_type: string;
  position: number;
  visible: boolean;
  style: string;
  settings: {
    [key: string]: ComponentSettingType;
  };
  children_items: ChildrenItemType[];
};
