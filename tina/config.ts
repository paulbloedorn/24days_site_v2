import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

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
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        format: "json",
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
              },
            ],
          },
          {
            type: "object",
            name: "aboutTheFilm",
            label: "About the Film",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
              },
              {
                type: "string",
                name: "description",
                label: "Section Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "mainContent",
                label: "Main Content",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "description1",
                    label: "Description 1",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "description2",
                    label: "Description 2",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
              {
                type: "object",
                name: "features",
                label: "Features",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "items",
                    label: "Feature Items",
                    list: true,
                  },
                ],
              },
              {
                type: "object",
                name: "howItWorks",
                label: "How It Works",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "object",
                    name: "steps",
                    label: "Steps",
                    list: true,
                    fields: [
                      {
                        type: "number",
                        name: "step",
                        label: "Step Number",
                      },
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: "object",
                name: "packages",
                label: "Packages",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Package Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Package Description",
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Features",
                    list: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
              },
              {
                type: "object",
                name: "items",
                label: "Testimonial Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "quote",
                    label: "Quote",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Author",
                  },
                  {
                    type: "string",
                    name: "badge",
                    label: "Badge",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "audienceCards",
            label: "Audience Cards",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "cards",
                label: "Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Card Title",
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Card Subtitle",
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon",
                  },
                  {
                    type: "string",
                    name: "benefits",
                    label: "Benefits",
                    list: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "metrics",
            label: "Metrics",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
              },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "number",
                    label: "Number",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
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
            label: "Body",
            isBody: true,
          },
        ],
        
      },
    ],
  },
});
