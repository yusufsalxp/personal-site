import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
          beforeSubmit: async ({ values }) => {
            return {
              ...values,
              lastUpdated: new Date().toISOString(),
            };
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
            name: "lastUpdated",
            type: "datetime",
            ui: {
              component: "hidden",
            },
          },
          {
            type: "string",
            label: "Topic",
            name: "topic",
            options: [
              "programming",
              "javascript",
              "typescript",
              "react",
              "nextjs",
              "c#",
              "asp.net",
              "dotnet",
              "dotnetcore",
              "postgresql",
              "sql",
              "database",
              "docker",
              "mongodb",
              "git",
              "misc",
            ],
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
