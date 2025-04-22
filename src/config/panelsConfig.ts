// Panels configuration
export const panelsConfig = {
  defaults: [{
    id: 'commands',
    el: '.panel__basic-actions',
    buttons: [
      {
        id: 'visibility',
        active: true,
        className: 'fa fa-eye',
        command: 'sw-visibility',
        attributes: { title: 'Show Borders' }
      },
      {
        id: 'export',
        className: 'fa fa-code',
        command: 'export-template',
        attributes: { title: 'View Code' }
      },
      {
        id: 'preview',
        className: 'fa fa-eye',
        command: 'preview',
        attributes: { title: 'Preview' }
      },
      {
        id: 'fullscreen',
        className: 'fa fa-expand',
        command: 'fullscreen',
        attributes: { title: 'Fullscreen' }
      },
      {
        id: 'undo',
        className: 'fa fa-undo',
        command: 'undo',
        attributes: { title: 'Undo' }
      },
      {
        id: 'redo',
        className: 'fa fa-repeat',
        command: 'redo',
        attributes: { title: 'Redo' }
      },
      {
        id: 'clean-all',
        className: 'fa fa-trash',
        command: 'canvas-clear',
        attributes: { title: 'Clear Canvas' }
      },
      {
        id: 'ai-generate',
        className: 'fa fa-magic',
        command: 'open-ai-modal',
        attributes: { title: 'Generate with AI' }
      }
    ]
  }]
};
