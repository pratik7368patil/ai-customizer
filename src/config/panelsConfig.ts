// Panels configuration
export const panelsConfig = {
  defaults: [
    {
      id: "commands",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "ai-generate",
          className: "fa fa-magic fa-sm",
          command: "open-ai-modal",
          attributes: { title: "Generate with AI" },
        },
        {
          id: "export",
          className: "fa fa-code fa-sm",
          command: "export-template",
          attributes: { title: "View Code" },
        },
        {
          id: "preview",
          className: "fa fa-eye fa-sm",
          command: "preview",
          attributes: { title: "Preview" },
        },
        {
          id: "fullscreen",
          className: "fa fa-expand fa-sm",
          command: "fullscreen",
          attributes: { title: "Fullscreen" },
        },
        {
          id: "undo",
          className: "fa fa-undo fa-sm",
          command: "undo",
          attributes: { title: "Undo" },
        },
        {
          id: "redo",
          className: "fa fa-repeat fa-sm",
          command: "redo",
          attributes: { title: "Redo" },
        },
        {
          id: "clean-all",
          className: "fa fa-trash fa-sm",
          command: "canvas-clear",
          attributes: { title: "Clear Canvas" },
        },
      ],
    },
  ],
};
