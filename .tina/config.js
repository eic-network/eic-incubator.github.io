import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "a3c1daad-57df-499f-99ed-91a4e64ddeb7", // Get this from tina.io
  token: "be725d2df80cb3b9c17b2e9bc3e181caf5502b24", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "/",
  },
  media: {
    tina: {
      mediaRoot: "/assets/images",
      publicFolder: "/",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "_templates",
        fields: [
          {
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
            type: "string"
          },
          {
            name: "role",
            label: "Page role",
            required: true,
            type: "string",
            options: [
              { value: "home", label: "Home page (only one possible)" },
              { value: "content", label: "Content page (as many as you need)" }
            ]
          },
          {
            name: "sections",
            label: "Page sections",
            list: true,
            required: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            type: "object",
            fields: [
              {
                name: "title",
                label: "Section title",
                type: "string",
                isTitle: true,
                required: true              
              },
              {
                name: "positioning",
                label: "Position relative to page container",
                type: "string",
                options: [
                  { value: "before", label: "Before content"},
                  { value: "inside", label: "Page content"},
                  { value: "after", label: "After content"},
                ],
                required: true
              },
              {
                name: "displayed",
                label: "Displayed",
                type: "boolean",
                required: true
              },
              // {
              //   name: "section",
              //   label: "Section",
              //   type: "reference",
              //   collections: ['sections']              
              // },
              // {
              //   name: "title",
              //   label: "Title",
              //   isTitle: true,
              //   type: "string",
              //   required: true
              // },
              {
                name: "custom_id",
                label: "Custom ID",
                type: "string",
                required: true
              },
              {
                name: "content",
                label: "Content",
                isBody: false,
                type: "rich-text",
                required: false
              },
              {
                name: "image",
                label: "Background image (optional)",
                type: "image",
                required: false
              },
              {
                name: "color",
                label: "Background color (optional)",
                type: "string",
                required: false,
                ui: {
                  component: 'color',
                  colorFormat: 'hex',
                  // colors: ['#EC4815', '#241748', '#B4F4E0', '#E6FAF8'],
                  widget: 'sketch',
                }
              },
              {
                name: "template",
                label: "Section template",
                type: "string",
                options: [{
                  value: "generic",
                  label: "Generic template"
                }, {
                  value: "sections/intro",
                  label: "EIC branded intro"
                }, {
                  value: "home/projects",
                  label: "Projects template with cards list"
                }, {
                  value: "nav",
                  label: "Navigation menu"
                }, {
                  value: "home/members",
                  label: "List of members with cards and images"
                }, {
                  value: "footer",
                  label: "Footer template"
                }
              ],
                required: true
              },
              {
                name: "collection",
                label: "Embedded collection ID",
                type: "string",
                // options: collections,
                // list: true,
                required: false
              },
              {
                name: "subcollection",
                label: "Embedded subcollection ID",
                type: "string",
                // options: subcollections,
                // list: true,
                required: false
              },
              {
                name: "list_template",
                label: "List template (if applicable)",
                type: "string",
                options: [{
                  value: "home/cards/post",
                  label: "Blog post card"
                }, {
                  value: "home/cards/project",
                  label: "Project card"
                }, {
                  value: "home/cards/team-member",
                  label: "Team member"
                }, {
                  value: "home/cards/partner",
                  label: "Partner card"
                }],
                required: false
              },
              // {
              //   name: "code",
              //   label: "HTML template code",
              //   type: "string",
              //   component: "textarea",
              //   isBody: true
              // }
            ]
          }
        ]
      },
      // {
      //   label: "Page sections",
      //   name: "sections",
      //   path: "_sections",
      //   fields: [
      //     {
      //       name: "title",
      //       label: "Title",
      //       isTitle: true,
      //       type: "string",
      //       required: true
      //     },
      //     {
      //       name: "custom_id",
      //       label: "Custom ID",
      //       type: "string",
      //       required: true
      //     },
      //     {
      //       name: "content",
      //       label: "Content",
      //       isBody: false,
      //       type: "rich-text",
      //       required: false
      //     },
      //     {
      //       name: "image",
      //       label: "Background image (optional)",
      //       type: "image",
      //       required: false
      //     },
      //     {
      //       name: "color",
      //       label: "Background color (optional)",
      //       type: "string",
      //       required: false,
      //       ui: {
      //         component: 'color',
      //         colorFormat: 'hex',
      //         // colors: ['#EC4815', '#241748', '#B4F4E0', '#E6FAF8'],
      //         widget: 'sketch',
      //       }
      //     },
      //     {
      //       name: "template",
      //       label: "Section template",
      //       type: "string",
      //       options: [{
      //         value: "_sections/intro.md",
      //         label: "EIC branded intro"
      //       }, {
      //         value: "_sections/generic.md",
      //         label: "Generic template with optional cards list"
      //       }, {
      //         value: "_sections/navigation.md",
      //         label: "Navigation menu"
      //       }, {
      //         value: "_sections/members.md",
      //         label: "List of members with cards and images"
      //       }, {
      //         value: "_sections/footer.md",
      //         label: "Footer template"
      //       }
      //     ],
      //       required: true
      //     },
      //     {
      //       name: "collection",
      //       label: "Embedded collection ID",
      //       type: "string",
      //       // options: collections,
      //       // list: true,
      //       required: false
      //     },
      //     {
      //       name: "subcollection",
      //       label: "Embedded subcollection ID",
      //       type: "string",
      //       // options: subcollections,
      //       // list: true,
      //       required: false
      //     },
      //     {
      //       name: "list_template",
      //       label: "List template (if applicable)",
      //       type: "string",
      //       options: [{
      //         value: "home/cards/post",
      //         label: "Blog post card"
      //       }, {
      //         value: "home/cards/project",
      //         label: "Project card"
      //       }, {
      //         value: "home/cards/team-member",
      //         label: "Team member"
      //       }, {
      //         value: "home/cards/partner",
      //         label: "Partner card"
      //       }],
      //       required: false
      //     },
      //     {
      //       name: "code",
      //       label: "HTML template code",
      //       type: "string",
      //       component: "textarea",
      //       isBody: true
      //     }
      //   ]
      // },
      {
        label: "Projects archive",
        name: "projects_archive",
        path: "_projects_archive",
        fields: [
          // {
          //   type: "rich-text",
          //   name: "body",
          //   label: "Content",
          //   description: "This is the markdown body",
          //   isBody: true,
          // },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "intro",
            label: "Lead",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: "object",
            name: "publications",
            label: "Publications",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
            fields: [
              {
                type: "string",
                name: "lang",
                label: "Language(s)",
              },
              {
                type: "object",
                name: "links",
                label: "Links",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.link_name };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "link_name",
                    label: "Title",
                    isTitle: true,
                    required: true,
                  },
                  {
                    type: "string",
                    name: "link_url",
                    label: "URL",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
              {
                type: "string",
                name: "name",
                label: "Name",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
          {
            type: "rich-text",
            name: "team_initiators",
            label: "Team initiators",
          },
          {
            type: "rich-text",
            name: "team_participants",
            label: "Team participants",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
        ],
      },      {
        label: "Projects",
        name: "projects",
        path: "_projects",
        fields: [
          // {
          //   type: "rich-text",
          //   name: "body",
          //   label: "Content",
          //   description: "This is the markdown body",
          //   isBody: true,
          // },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "intro",
            label: "Lead",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: "object",
            name: "publications",
            label: "Publications",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
            fields: [
              {
                type: "string",
                name: "lang",
                label: "Language(s)",
              },
              {
                type: "object",
                name: "links",
                label: "Links",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.link_name };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "link_name",
                    label: "Title",
                    isTitle: true,
                    required: true,
                  },
                  {
                    type: "string",
                    name: "link_url",
                    label: "URL",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
              {
                type: "string",
                name: "name",
                label: "Name",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
          {
            type: "rich-text",
            name: "team_initiators",
            label: "Team initiators",
          },
          {
            type: "rich-text",
            name: "team_participants",
            label: "Team participants",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
        ],
      },
      {
        label: "Posts",
        name: "posts",
        path: "_posts",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              const date = new Date();
              const day = `0${date.getDate()}`.slice(-2);
              const month = `0${date.getMonth() + 1}`.slice(-2);
              const year = date.getFullYear();

              let currentDate = `${year}-${month}-${day}`;

              return `${currentDate}-${values?.title
                ?.toLowerCase()
                .replace(/ /g, "-")}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      // {
      //   label: "Home page texts",
      //   name: "home",
      //   path: "_home",
      //   match: {
      //     include: "home"
      //   },
      //   ui: {
      //     // global: true,
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     }
      //   },
      //   format: "md",
      //   fields: [
      //     {
      //       type: "rich-text",
      //       name: "intro",
      //       label: "Intro text"
      //     },
      //     {
      //       type: "rich-text",
      //       name: "about",
      //       label: "About"
      //     },
      //     {
      //       type: "rich-text",
      //       name: "projects",
      //       label: "Projects"
      //     },
      //     {
      //       type: "rich-text",
      //       name: "team",
      //       label: "Team"
      //     },
      //     {
      //       type: "rich-text",
      //       name: "board",
      //       label: "Board"
      //     },
      //     {
      //       type: "rich-text",
      //       name: "research",
      //       label: "Research"
      //     },
      //     {
      //       type: "rich-text",
      //       name: "contact",
      //       label: "Contact"
      //     },
      //     {
      //       type: "rich-text",
      //       name: "footer",
      //       label: "Footer"
      //     },
      //   ]
      // },
      {
        label: "Subcollections",
        name: "subcollections",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          }
        },
        format: "yml",
        fields: [
          {
            type: "object",
            name: "items",
            label: "List",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || item?.url };
              },
            },
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image"
              },
              {
                type: "string",
                name: "title",
                label: "Name"
              },
              {
                type: "string",
                name: "url",
                label: "Website"
              },
            ]
          },

        ]
      }
    ],
  },
});
