export type ChildrenItemType = {
  id: string;
  heading: string;
  position: number;
  settings: {
    [key: string]: ComponentSettingType;
  };
};
