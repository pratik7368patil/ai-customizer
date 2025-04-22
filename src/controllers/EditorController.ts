// EditorController.ts
import grapesjs from "grapesjs";
import type { Editor } from "grapesjs";
import {
  deviceManagerConfig,
  styleManagerConfig,
  layerManagerConfig,
  panelsConfig,
  blockManagerConfig,
  canvasConfig,
} from "../config";

interface BlockModel {
  id: string;
  label: string;
  content: string;
}

export class EditorController {
  private editor: Editor | null;

  constructor(selector: string, blocks: BlockModel[]) {
    this.editor = null;
    this.initEditor(selector, blocks);
  }

  private async initEditor(selector: string, blocks: BlockModel[]) {
    // Wait for DOM to be ready
    await new Promise((resolve) => setTimeout(resolve, 0));

    this.editor = grapesjs.init({
      // Main configuration
      container: selector,
      height: "100%",
      width: "auto",
      protectedCss: "* { box-sizing: border-box; }",
      showOffsets: true,
      noticeOnUnload: false,
      storageManager: false,

      // Manager configurations
      canvas: canvasConfig,
      deviceManager: deviceManagerConfig,
      layerManager: layerManagerConfig,
      styleManager: styleManagerConfig,
      blockManager: blockManagerConfig,
      panels: panelsConfig,

      commands: {
        defaults: {
          "core:preview": {
            run(editor: Editor) {
              editor.runCommand("core:preview");
            },
          },
          fullscreen: {
            run(editor: Editor) {
              const el = editor.getContainer();
              const pfx = editor.getConfig().stylePrefix;
              const cls = pfx + "fullscreen";

              if (el) {
                if (document.fullscreenElement) {
                  document.exitFullscreen();
                  el.classList.remove(cls);
                } else {
                  el.requestFullscreen();
                  el.classList.add(cls);
                }
              }
            },
          },
          "export-template": {
            run(editor: Editor) {
              const modal = editor.Modal;
              const container = document.createElement("div");
              const codeViewer =
                editor.CodeManager.getViewer("CodeMirror").clone();

              codeViewer.set({
                codeName: "htmlmixed",
                theme: "default",
                readOnly: true,
              });

              modal.setTitle("Code Export");
              container.style.padding = "20px";
              container.innerHTML = `
                <div style="margin-bottom: 10px">
                  <button class="copy-btn" style="
                    padding: 8px 16px;
                    background: #4f46e5;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                  ">Copy Code</button>
                </div>
                <div class="code-viewer"></div>
              `;

              modal.setContent(container);
              modal.open();

              const viewer = codeViewer.editor;
              const btnCopy = container.querySelector(".copy-btn");
              if (viewer && btnCopy) {
                viewer.setOption("lineWrapping", true);
                codeViewer.setContent(
                  editor.getHtml() + "<style>" + editor.getCss() + "</style>"
                );
                codeViewer.render(container.querySelector(".code-viewer"));

                btnCopy.addEventListener("click", () => {
                  const code =
                    editor.getHtml() + "<style>" + editor.getCss() + "</style>";
                  navigator.clipboard.writeText(code);
                  btnCopy.textContent = "Copied!";
                  setTimeout(() => {
                    btnCopy.textContent = "Copy Code";
                  }, 1500);
                });
              }
            },
          },
        },
      },
    });

    this.addBlocks([
      {
        id: "section",
        label: "Section",
        content:
          '<section class="section"><div class="container"></div></section>',
      },
      {
        id: "text",
        label: "Text",
        content: '<div class="text">Insert your text here</div>',
      },
      {
        id: "image",
        label: "Image",
        content:
          '<img src="https://via.placeholder.com/350x250" class="img-fluid" alt="Placeholder image"/>',
      },
      {
        id: "button",
        label: "Button",
        content: '<button class="button">Click me</button>',
      },
    ]);
    this.initAICommands();
  }

  private initAICommands() {
    if (!this.editor) return;

    this.editor.Commands.add("open-ai-modal", {
      run: (editor: Editor) => {
        const modal = editor.Modal;
        modal.setTitle("Generate Blocks with AI");

        const container = document.createElement("div");
        container.style.padding = "20px";

        const textarea = document.createElement("textarea");
        textarea.style.width = "100%";
        textarea.style.minHeight = "100px";
        textarea.style.marginBottom = "15px";
        textarea.style.padding = "8px";
        textarea.style.borderRadius = "4px";
        textarea.style.border = "1px solid #e2e8f0";
        textarea.placeholder = "Describe what you want to generate...";

        const generateBtn = document.createElement("button");
        generateBtn.textContent = "Generate";
        generateBtn.style.padding = "8px 16px";
        generateBtn.style.backgroundColor = "#6b46c1";
        generateBtn.style.color = "white";
        generateBtn.style.border = "none";
        generateBtn.style.borderRadius = "4px";
        generateBtn.style.cursor = "pointer";

        generateBtn.addEventListener("click", () => {
          // TODO: Implement AI generation logic here
          console.log("Generating with prompt:", textarea.value);
          modal.close();
        });

        container.appendChild(textarea);
        container.appendChild(generateBtn);
        modal.setContent(container);
        modal.open();
      },
    });
  }

  private addBlocks(blocks: BlockModel[]) {
    if (!this.editor) return;

    blocks.forEach((block) => {
      this.editor?.BlockManager.add(block.id, {
        label: block.label,
        content: block.content,
      });
    });
  }

  init() {
    // Additional initialization if needed
  }
}
