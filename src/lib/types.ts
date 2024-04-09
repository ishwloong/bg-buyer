export type TResponse<T> = {
  code: number;
  message: string;
  data: T;
  error: any;
};

export type TStorageIcon = {
  id: string;
  name: string;
  svg: string;
};

export type THeaderBar = {
  id: string;
  heading: string;
  settings: {
    [key: string]: {
      id: string;
      heading: null;
      value: string;
      data_settings?: null;
    };
  };
  children_items: null;
  visible: boolean;
  style: string;
  template_type:
    | "bg_header_bar_inline"
    | "bg_header_bar_rich"
    | "bg_header_bar_minimal";
};

export type TFooterChild = {
  id: string;
  heading: string;
  visible: boolean;
  style: string;
  template_type: string;
  settings: {
    [key: string]: {
      id: string;
      heading: string;
      value: string;
      data_settings?: null;
    };
  };
  children_items: TFooterChild;
};

export type TFooterConfig = {
  id: string;
  heading: string;
  children_items: TFooterChild[];
};

export type TAnnouncement = {
  heading: string;
  id: string;
  visible: boolean;
  style: string;
  template_type: string;
  settings: {
    [key: string]: {
      id: string;
      heading: string;
      value: string;
      data_settings?: null;
    };
  };
};

export type THeaderConfig = {
  announcement: TAnnouncement;
  header_bar: THeaderBar;
};

export type TObjConfig = {
  theme_id: string;
  theme_name: string;
  header: THeaderConfig;
  pages: [
    {
      page_id: string;
      page_name: string;
      page_route: string;
      components: [
        {
          heading: string;
          id: string;
          template_type: string;
          position: 0.0;
          visible: boolean;
          style: string;
          settings: {
            item_btn_link: {
              id: string;
              value: string;
              heading: null;
            };
            item_position: {
              id: string;
              value: string;
              heading: null;
            };
            item_btn_as_link: {
              id: string;
              label: null;
              value: boolean;
            };
            full_width: {
              id: string;
              label: null;
              value: boolean;
            };
            item_image_url: {
              id: string;
              value: string;
              heading: null;
            };
            item_heading: {
              id: string;
              value: string;
              heading: null;
            };
            item_btn_label: {
              id: string;
              value: string;
              heading: null;
            };
            item_text: {
              id: string;
              value: string;
              heading: string;
            };
            item_layout: {
              id: string;
              value: string;
              heading: null;
            };
            item_description: {
              id: string;
              value: string;
              heading: null;
            };
            item_align: {
              id: string;
              value: string;
              heading: null;
            };
            item_ratio: {
              id: string;
              value: string;
              heading: null;
            };
          };
          children_items: [];
        },
        {
          heading: string;
          id: string;
          template_type: string;
          position: 1.0;
          visible: boolean;
          style: string;
          settings: {
            fc_limit_product: {
              id: string;
              value: 8.0;
              heading: string;
            };
            fc_heading: {
              id: string;
              value: string;
              heading: string;
            };
            fc_description: {
              id: string;
              value: string;
              heading: string;
            };
            fc_uri: {
              id: string;
              value: string;
              heading: null;
            };
            fc_text_link: {
              id: string;
              value: string;
              heading: string;
            };
            btn_product: {
              id: string;
              value: string;
              heading: null;
            };
            fc_product_per_row: {
              id: string;
              value: 4.0;
              heading: string;
            };
            fc_ratio: {
              id: string;
              value: string;
              heading: string;
            };
            fc_add_collection: {
              id: string;
              value: string;
              heading: string;
            };
            fc_btn_as_link: {
              id: string;
              label: null;
              value: boolean;
            };
            heading_centered: {
              id: string;
              label: null;
              value: boolean;
            };
          };
          children_items: [];
        },
        {
          heading: string;
          id: string;
          template_type: string;
          position: 2.0;
          visible: boolean;
          style: string;
          settings: {
            collection_heading: {
              id: string;
              heading: string;
              value: string;
            };
            collection_desc: {
              id: string;
              heading: string;
              value: string;
            };
            collection_link: {
              id: string;
              heading: string;
              value: string;
            };
            btn_as_text_link: {
              id: string;
              heading: string;
              value: boolean;
            };
            collection_layout: {
              id: string;
              value: string;
            };
            collection_ratio: {
              id: string;
              value: string;
            };
            collection_per_row: {
              id: string;
              value: 4.0;
            };
            full_width: {
              id: string;
              value: boolean;
            };
            heading_centered: {
              id: string;
              value: boolean;
            };
            section_style: {
              id: string;
              value: string;
            };
            cst_rounded: {
              id: string;
              value: string;
            };
          };
          children_items: [
            {
              id: string;
              heading: string;
              position: 1.0;
              settings: {
                collection_image: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_text: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item: {
                  id: string;
                  value: null;
                  heading: string;
                };
                collection_item_uri: {
                  id: string;
                  value: string;
                  heading: null;
                };
                collection_item_ratio: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item_name: {
                  id: string;
                  value: string;
                  heading: null;
                };
              };
            },
            {
              id: string;
              heading: string;
              position: 2.0;
              settings: {
                collection_image: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_text: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item: {
                  id: string;
                  value: null;
                  heading: string;
                };
                collection_item_uri: {
                  id: string;
                  value: string;
                  heading: null;
                };
                collection_item_ratio: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item_name: {
                  id: string;
                  value: string;
                  heading: null;
                };
              };
            },
            {
              id: string;
              heading: string;
              position: 3.0;
              settings: {
                collection_image: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_text: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item: {
                  id: string;
                  value: null;
                  heading: string;
                };
                collection_item_uri: {
                  id: string;
                  value: string;
                  heading: null;
                };
                collection_item_ratio: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item_name: {
                  id: string;
                  value: string;
                  heading: null;
                };
              };
            },
            {
              id: string;
              heading: string;
              position: 4.0;
              settings: {
                collection_image: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_text: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item: {
                  id: string;
                  value: null;
                  heading: string;
                };
                collection_item_uri: {
                  id: string;
                  value: string;
                  heading: null;
                };
                collection_item_ratio: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item_name: {
                  id: string;
                  value: string;
                  heading: null;
                };
              };
            }
          ];
        },
        {
          heading: string;
          id: string;
          template_type: string;
          position: 3.0;
          visible: boolean;
          style: string;
          settings: {
            ratio_slides: {
              id: string;
              value: string;
              heading: string;
            };
            full_width: {
              id: string;
              label: string;
              value: boolean;
            };
            btn_as_text: {
              id: string;
              label: string;
              value: boolean;
            };
          };
          children_items: [
            {
              id: string;
              heading: string;
              position: 0.0;
              settings: {
                item_text: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_image_url: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_ratio: {
                  id: string;
                  value: string;
                  heading: null;
                };
                item_heading: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_description: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_position: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_align: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_btn_label: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_btn_link: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_btn_outline: {
                  id: string;
                  label: string;
                  value: boolean;
                };
              };
            }
          ];
        },
        {
          heading: string;
          id: string;
          template_type: string;
          position: 4.0;
          visible: boolean;
          style: string;
          settings: {
            full_width: {
              id: string;
              value: boolean;
            };
          };
          children_items: [
            {
              id: string;
              heading: string;
              position: 1.0;
              settings: {
                box_icon: {
                  id: string;
                  value: string;
                  heading: string;
                };
                box_alt_text: {
                  id: string;
                  value: string;
                  heading: string;
                };
                box_heading: {
                  id: string;
                  value: string;
                  heading: string;
                };
                box_desc: {
                  id: string;
                  value: string;
                  heading: string;
                };
              };
            },
            {
              id: string;
              heading: string;
              position: 2.0;
              settings: {
                box_icon: {
                  id: string;
                  value: string;
                  heading: string;
                };
                box_alt_text: {
                  id: string;
                  value: string;
                  heading: string;
                };
                box_heading: {
                  id: string;
                  value: string;
                  heading: string;
                };
                box_desc: {
                  id: string;
                  value: string;
                  heading: string;
                };
              };
            },
            {
              id: string;
              heading: string;
              position: 3.0;
              settings: {
                box_icon: {
                  id: string;
                  value: string;
                  heading: string;
                };
                box_alt_text: {
                  id: string;
                  value: string;
                  heading: string;
                };
                box_heading: {
                  id: string;
                  value: string;
                  heading: string;
                };
                box_desc: {
                  id: string;
                  value: string;
                  heading: string;
                };
              };
            }
          ];
        },
        {
          heading: string;
          id: string;
          template_type: string;
          position: 5.0;
          visible: boolean;
          style: string;
          settings: {
            fc_limit_product: {
              id: string;
              value: 8.0;
              heading: string;
            };
            fc_heading: {
              id: string;
              value: string;
              heading: string;
            };
            fc_description: {
              id: string;
              value: string;
              heading: string;
            };
            fc_uri: {
              id: string;
              value: string;
              heading: null;
            };
            fc_text_link: {
              id: string;
              value: string;
              heading: string;
            };
            btn_product: null;
            fc_product_per_row: {
              id: string;
              value: 4.0;
              heading: string;
            };
            fc_ratio: {
              id: string;
              value: string;
              heading: string;
            };
            fc_add_collection: {
              id: string;
              value: string;
              heading: string;
            };
            fc_btn_as_link: {
              id: string;
              label: null;
              value: boolean;
            };
            heading_centered: {
              id: string;
              label: null;
              value: boolean;
            };
          };
          children_items: [];
        },
        {
          heading: string;
          id: string;
          template_type: string;
          position: 6.0;
          visible: boolean;
          style: string;
          settings: {
            ratio_slides: {
              id: string;
              value: string;
              heading: string;
            };
            full_width: {
              id: string;
              label: string;
              value: boolean;
            };
            btn_as_text: {
              id: string;
              label: string;
              value: boolean;
            };
          };
          children_items: [
            {
              id: string;
              heading: string;
              position: 0.0;
              settings: {
                item_text: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_image_url: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_ratio: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_heading: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_description: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_position: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_align: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_btn_label: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_btn_link: {
                  id: string;
                  value: string;
                  heading: string;
                };
                item_btn_outline: {
                  id: string;
                  label: string;
                  value: boolean;
                };
              };
            }
          ];
        },
        {
          heading: string;
          id: string;
          template_type: string;
          position: 7.0;
          visible: boolean;
          style: string;
          settings: {
            collection_heading: {
              id: string;
              heading: string;
              value: string;
            };
            collection_desc: {
              id: string;
              heading: string;
              value: string;
            };
            collection_link: {
              id: string;
              heading: string;
              value: string;
            };
            btn_as_text_link: {
              id: string;
              heading: string;
              value: boolean;
            };
            collection_layout: {
              id: string;
              value: string;
            };
            collection_ratio: {
              id: string;
              value: string;
            };
            collection_per_row: {
              id: string;
              value: 2.0;
            };
            full_width: {
              id: string;
              value: boolean;
            };
            heading_centered: {
              id: string;
              value: boolean;
            };
            section_style: {
              id: string;
              value: string;
            };
            cst_rounded: {
              id: string;
              value: string;
            };
          };
          children_items: [
            {
              id: string;
              heading: string;
              position: 1.0;
              settings: {
                collection_image: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_text: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item: {
                  id: string;
                  value: null;
                  heading: string;
                };
                collection_item_uri: {
                  id: string;
                  value: string;
                  heading: null;
                };
                collection_item_ratio: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item_name: {
                  id: string;
                  value: string;
                  heading: null;
                };
              };
            },
            {
              id: string;
              heading: string;
              position: 2.0;
              settings: {
                collection_image: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_text: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item: {
                  id: string;
                  value: null;
                  heading: string;
                };
                collection_item_uri: {
                  id: string;
                  value: string;
                  heading: null;
                };
                collection_item_ratio: {
                  id: string;
                  value: string;
                  heading: string;
                };
                collection_item_name: {
                  id: string;
                  value: string;
                  heading: null;
                };
              };
            }
          ];
        }
      ];
    },
    {
      page_id: string;
      page_name: string;
      page_route: string;
      components: [
        {
          heading: string;
          id: string;
          template_type: string;
          position: 1.0;
          visible: boolean;
          style: string;
          settings: {
            show_unavailable_variant: {
              id: string;
              label: string;
              value: boolean;
            };
            position_thumb_list: {
              data_settings: [
                {
                  id: string;
                  label: string;
                  value: string;
                },
                {
                  id: string;
                  label: string;
                  value: string;
                }
              ];
              heading: string;
              id: string;
              value: string;
            };
            option_0: {
              id: string;
              heading: string;
              value: string;
              data_settings: [
                {
                  id: string;
                  name: string;
                  value: string;
                },
                {
                  id: string;
                  name: string;
                  value: string;
                },
                {
                  id: string;
                  name: string;
                  value: string;
                }
              ];
            };
            limit_0: {
              id: string;
              value: 9.0;
              heading: string;
            };
            option_1: {
              id: string;
              value: string;
              heading: string;
              data_settings: [
                {
                  id: string;
                  name: string;
                  value: string;
                },
                {
                  id: string;
                  name: string;
                  value: string;
                },
                {
                  id: string;
                  name: string;
                  value: string;
                }
              ];
            };
            limit_1: {
              id: string;
              value: 20.0;
              heading: string;
            };
            option_2: {
              id: string;
              heading: string;
              value: string;
              data_settings: [
                {
                  id: string;
                  name: string;
                  value: string;
                },
                {
                  id: string;
                  name: string;
                  value: string;
                },
                {
                  id: string;
                  name: string;
                  value: string;
                }
              ];
            };
            limit_2: {
              id: string;
              value: 12.0;
              heading: string;
            };
            display_quantity_input: {
              id: string;
              label: string;
              value: boolean;
            };
            display_secondary_btn: {
              id: string;
              label: string;
              value: boolean;
            };
            price_saving: {
              id: string;
              label: string;
              value: boolean;
            };
            compare_price: {
              id: string;
              value: string;
              heading: string;
              data_settings: [
                {
                  id: string;
                  name: string;
                }
              ];
            };
            sale_type: {
              data_settings: [
                {
                  id: string;
                  value: string;
                  label: string;
                },
                {
                  id: string;
                  value: string;
                  label: string;
                }
              ];
              heading: string;
              id: string;
              value: string;
            };
            display_countdown_timer: {
              id: string;
              label: string;
              value: boolean;
            };
            position_desc: {
              data_settings: [
                {
                  id: string;
                  value: string;
                  label: string;
                },
                {
                  id: string;
                  value: string;
                  label: string;
                }
              ];
              heading: string;
              id: string;
              value: string;
            };
            trust_badge: {
              id: string;
              value: string;
              heading: string;
            };
            pos_countdown: {
              id: string;
              value: string;
              data_settings: [
                {
                  id: string;
                  label: string;
                },
                {
                  id: string;
                  label: string;
                }
              ];
            };
            pos_countdown_txt: {
              id: string;
              value: string;
              data_settings: [
                {
                  id: string;
                  label: string;
                },
                {
                  id: string;
                  label: string;
                }
              ];
            };
            countdown_txt: {
              id: string;
              value: string;
              heading: string;
            };
            enable_sticky_atc: {
              id: string;
              label: string;
              value: boolean;
            };
            share_fb: {
              id: string;
              label: string;
              value: boolean;
            };
            share_x: {
              id: string;
              label: string;
              value: boolean;
            };
            share_email: {
              id: string;
              label: string;
              value: boolean;
            };
            share_ptr: {
              id: string;
              label: string;
              value: boolean;
            };
            share_linkedin: {
              id: string;
              label: string;
              value: boolean;
            };
            share_tele: {
              id: string;
              label: string;
              value: boolean;
            };
            secondary_btn_txt: {
              heading: string;
              id: string;
              value: string;
            };
            secondary_btn_icon: {
              heading: string;
              id: string;
              value: null;
            };
            primary_btn_txt: {
              heading: string;
              id: string;
              value: string;
            };
            primary_btn_icon: {
              heading: string;
              id: string;
              value: null;
            };
          };
          children_items: null;
        }
      ];
    },
    {
      page_id: string;
      page_name: string;
      page_route: string;
      components: [
        {
          heading: string;
          id: string;
          template_type: string;
          position: 1.0;
          visible: boolean;
          style: string;
          settings: {
            show_layout: {
              id: string;
              value: boolean;
            };
            default_sort: {
              id: string;
              value: string;
            };
            show_price: {
              id: string;
              value: boolean;
            };
            show_genders: {
              id: string;
              value: boolean;
            };
            filter_position: {
              id: string;
              value: string;
            };
            show_opt_1: {
              id: string;
              value: boolean;
            };
            show_opt_2: {
              id: string;
              value: boolean;
            };
            show_opt_3: {
              id: string;
              value: boolean;
            };
          };
          children_items: null;
        }
      ];
    },
    {
      page_id: string;
      page_name: string;
      page_route: string;
      components: [
        {
          heading: string;
          id: string;
          template_type: string;
          position: 1.0;
          visible: boolean;
          style: string;
          settings: {
            logo: {
              id: string;
              value: string;
            };
          };
          children_items: null;
        }
      ];
    }
  ];
  footer: TFooterConfig;
  theme_settings: {
    id: string;
    heading: string;
    children_items: [
      {
        id: string;
        heading: string;
        children_items: [
          {
            id: string;
            heading: string;
            settings: {
              font_family: {
                id: string;
                value: string;
              };
              font_variant: {
                id: string;
                value: string;
              };
              font_base_size: {
                id: string;
                value: 32.0;
              };
              capitalize_heading: {
                id: string;
                label: string;
                value: boolean;
              };
            };
          },
          {
            id: string;
            heading: string;
            settings: {
              font_family: {
                id: string;
                value: string;
              };
              font_variant: {
                id: string;
                value: string;
              };
              font_base_size: {
                id: string;
                value: 16.0;
              };
            };
          },
          {
            id: string;
            heading: string;
            settings: {
              font_family: {
                id: string;
                value: string;
              };
              font_variant: {
                id: string;
                value: string;
              };
              font_base_size: {
                id: string;
                value: 18.0;
              };
              capitalize_heading: {
                id: string;
                label: string;
                value: boolean;
              };
            };
          }
        ];
        settings: {
          font_url: {
            id: string;
            value: string;
          };
        };
      },
      {
        id: string;
        heading: string;
        children_items: null;
        settings: {
          primary_color: {
            id: string;
            value: string;
            heading: string;
          };
          heading_text_color: {
            id: string;
            value: string;
            heading: string;
          };
          body_text_color: {
            id: string;
            value: string;
            heading: string;
          };
          button_color: {
            id: string;
            value: string;
            heading: string;
            readonly: boolean;
            share_by: string;
          };
          button_color_hover: {
            id: string;
            value: string;
          };
          button_text_color: {
            id: string;
            value: string;
            heading: string;
          };
        };
      },
      {
        id: string;
        heading: string;
        children_items: null;
        settings: {
          favicon: {
            id: string;
            value: string;
            heading: string;
          };
        };
      },
      {
        id: string;
        heading: string;
        children_items: null;
        settings: {
          show_breadcrumb: {
            id: string;
            value: boolean;
            heading: string;
          };
          show_searchbar: {
            id: string;
            heading: string;
            value: boolean;
          };
          show_account: {
            id: string;
            heading: string;
            value: boolean;
          };
          heading_centered: {
            id: string;
            value: boolean;
            heading: string;
          };
          default_redirect_after_success: {
            id: string;
            heading: string;
            value: boolean;
          };
          border_radius: {
            id: string;
            value: 0.0;
          };
          cart_type: {
            id: string;
            value: string;
            heading: string;
          };
          show_back_to_top_btn: {
            id: string;
            heading: string;
            value: boolean;
          };
        };
      },
      {
        id: string;
        heading: string;
        children_items: null;
        settings: {
          style_dk: {
            id: string;
            value: string;
          };
          style_tl: {
            id: string;
            value: string;
          };
          style_mb: {
            id: string;
            value: string;
          };
        };
      },
      {
        id: string;
        heading: string;
        children_items: [
          {
            id: string;
            heading: string;
            visible: boolean;
            style: string;
            template_type: string;
            settings: {
              url: {
                id: string;
                heading: string;
                value: string;
                label: string;
                data_settings: null;
              };
              icon: {
                id: string;
                heading: string;
                value: string;
                data_settings: null;
              };
            };
            children_items: null;
          },
          {
            id: string;
            heading: string;
            visible: boolean;
            style: string;
            template_type: string;
            settings: {
              url: {
                id: string;
                heading: string;
                value: string;
                label: string;
                data_settings: null;
              };
              icon: {
                id: string;
                heading: string;
                value: string;
                data_settings: null;
              };
            };
            children_items: null;
          },
          {
            id: string;
            heading: string;
            visible: boolean;
            style: string;
            template_type: string;
            settings: {
              url: {
                id: string;
                heading: string;
                label: string;
                value: string;
                data_settings: null;
              };
              icon: {
                id: string;
                heading: string;
                value: string;
                data_settings: null;
              };
            };
            children_items: null;
          },
          {
            id: string;
            heading: string;
            visible: boolean;
            style: string;
            template_type: string;
            settings: {
              url: {
                id: string;
                heading: string;
                label: string;
                value: string;
                data_settings: null;
              };
              icon: {
                id: string;
                heading: string;
                value: string;
                data_settings: null;
              };
            };
            children_items: null;
          },
          {
            id: string;
            heading: string;
            visible: boolean;
            style: string;
            template_type: string;
            settings: {
              url: {
                id: string;
                heading: string;
                label: string;
                value: string;
                data_settings: null;
              };
              icon: {
                id: string;
                heading: string;
                value: string;
                data_settings: null;
              };
            };
            children_items: null;
          },
          {
            id: string;
            heading: string;
            visible: boolean;
            style: string;
            template_type: string;
            settings: {
              url: {
                id: string;
                heading: string;
                value: string;
                label: string;
                data_settings: null;
              };
              icon: {
                id: string;
                heading: string;
                value: string;
                data_settings: null;
              };
            };
            children_items: null;
          },
          {
            id: string;
            heading: string;
            visible: boolean;
            style: string;
            template_type: string;
            settings: {
              url: {
                id: string;
                heading: string;
                value: string;
                label: string;
                data_settings: null;
              };
              icon: {
                id: string;
                heading: string;
                value: string;
                data_settings: null;
              };
            };
            children_items: null;
          },
          {
            id: string;
            heading: string;
            visible: boolean;
            style: string;
            template_type: string;
            settings: {
              url: {
                id: string;
                heading: string;
                label: string;
                value: string;
                data_settings: null;
              };
              icon: {
                id: string;
                heading: string;
                value: string;
                data_settings: null;
              };
            };
            children_items: null;
          },
          {
            id: string;
            heading: string;
            visible: boolean;
            style: string;
            template_type: string;
            settings: {
              url: {
                id: string;
                heading: string;
                value: string;
                label: string;
                data_settings: null;
              };
              icon: {
                id: string;
                heading: string;
                value: string;
                data_settings: null;
              };
            };
            children_items: null;
          }
        ];
        settings: null;
      },
      {
        id: string;
        heading: string;
        settings: {
          script: {
            id: string;
            value: string;
          };
        };
      }
    ];
  };
  root: string;
  storage: {
    icons: TStorageIcon[];
  };
};

export type TThemeConfig = {
  state: string;
  desc: string;
  tags: string;
  settings: any;
  theme_id: string;
  origin_id: string;
  domain_id: string;
  store_id: string;
  user_id: string;
  create_at: number;
  update_at: number;
  object_config: TObjConfig;
  theme_name: string;
  img_url: string;
};
