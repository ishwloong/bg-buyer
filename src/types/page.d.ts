import { ComponentType } from "./comp-type.d";

export type PageType = {
  page_id: string;
  page_name: string;
  page_route: string;
  components: ComponentType[];
};
