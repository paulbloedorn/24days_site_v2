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
    publicFolder: "client/public",
  },
  media: {
    tina: {
      mediaRoot: "attached_assets",
      publicFolder: "client/public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return "/";
            }
            return `/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Main Title",
                required: true,
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
              {
                type: "image",
                name: "posterImage",
                label: "Poster Image",
              },
              {
                type: "string",
                name: "posterAlt",
                label: "Poster Alt Text",
              },
            ],
          },
          {
            type: "object",
            name: "screeningsCTA",
            label: "Screenings CTA Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
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
            name: "testimonials",
            label: "Testimonials Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
              },
              {
                type: "object",
                name: "items",
                label: "Testimonials",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "type",
                    label: "Type",
                    options: ["conference", "hospital", "education"],
                  },
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
                    name: "title",
                    label: "Author Title",
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
            name: "metrics",
            label: "Impact Metrics",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
              },
              {
                type: "object",
                name: "stats",
                label: "Statistics",
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
                ],
              },
            ],
          },
          {
            type: "object",
            name: "audienceCards",
            label: "Audience Cards Section",
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
              },
              {
                type: "object",
                name: "cards",
                label: "Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "type",
                    label: "Type",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Card Title",
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
                    name: "features",
                    label: "Features",
                    list: true,
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon",
                  },
                  {
                    type: "string",
                    name: "href",
                    label: "Link",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "faq",
        label: "FAQ",
        path: "content/faq",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "FAQ Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "FAQ Subtitle",
          },
          {
            type: "object",
            name: "categories",
            label: "FAQ Categories",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Category Title",
              },
              {
                type: "object",
                name: "questions",
                label: "Questions",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Question",
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Answer",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "screening",
        label: "Screening Types",
        path: "content/screenings",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Page Subtitle",
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
            type: "object",
            name: "benefits",
            label: "Benefits",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Benefits Title",
              },
              {
                type: "string",
                name: "items",
                label: "Benefit Items",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "process",
            label: "How It Works",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Process Title",
              },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Step Title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Step Description",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});