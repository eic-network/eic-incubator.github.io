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
                    return { label: item?.name };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Title",
                    isTitle: true,
                    required: true,
                  },
                  {
                    type: "string",
                    name: "url",
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
            label: "Team initiators"
          },
          {
            type: "rich-text",
            name: "team_participants",
            label: "Team participants"
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
            slugify: values => {
              const date = new Date();
              const day = `0${date.getDate()}`.slice(-2);
              const month = `0${(date.getMonth() + 1)}`.slice(-2);
              const year = date.getFullYear();
        
              let currentDate = `${year}-${month}-${day}`;
        
              return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
            }
          }
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
        ]
      }
    ],
  },
});
