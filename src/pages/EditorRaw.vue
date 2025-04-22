<script setup lang="ts">
import "grapesjs/dist/css/grapes.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { onMounted } from "vue";
import styles from "./EditorRaw.module.css";
import { EditorController } from "../controllers/EditorController";
import type { BlockModel } from "../models/BlockModel";

// Define sample blocks
const sampleBlocks: BlockModel[] = [
  {
    id: "sample-text",
    label: "Sample Text",
    content: '<div class="sample-block">Sample Text Block</div>',
  },
  {
    id: "sample-image",
    label: "Sample Image",
    content:
      '<div class="sample-block"><img src="https://placekitten.com/200/200" alt="Sample" /></div>',
  },
];

const controller = new EditorController("#gjs", sampleBlocks);

onMounted(() => {
  controller.init();
});
</script>
<template>
  <div class="editor-wrapper" style="height: 100vh; overflow: hidden; display: flex; flex-direction: column;">
    <div class="panel__top" style="flex-shrink: 0;">
      <div class="panel__basic-actions" style="display: flex; gap: 5px"></div>
    </div>
    <div
      class="editor-container"
      style="flex: 1; min-height: 0; display: flex;"
    >
      <!-- Left panel with blocks -->
      <div
        class="panel__left"
        style="width: 250px; border-right: 1px solid #e2e8f0; overflow: hidden; display: flex; flex-direction: column;"
      >
        <div
          id="blocks"
          style="padding: 10px; flex: 1; overflow-y: auto;"
        ></div>
      </div>

      <!-- Main editor area -->
      <div
        class="editor-canvas"
        style="flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden;"
      >
        <div id="gjs" :class="styles.gjs">
          <!-- This content will be replaced by the editor -->
          <div style="padding: 25px">
            <h1>Welcome to the AI Website Builder</h1>
            <p>
              Start by dragging blocks from the left panel or use the AI
              generator!
            </p>
          </div>
        </div>
      </div>

      <!-- Right panel for styles and layers -->
      <div
        class="panel__right"
        style="width: 280px; border-left: 1px solid #e2e8f0; overflow: hidden; display: flex; flex-direction: column;"
      >
        <div
          class="right-panels"
          style="flex: 1; display: flex; flex-direction: column; overflow: hidden;"
        >
          <!-- Layers panel -->
          <div style="flex: 1; min-height: 30%; display: flex; flex-direction: column; overflow: hidden;">
            <div
              class="panel-header"
              style="
                padding: 5px 10px;
                background-color: #f8f9fa;
                border-bottom: 1px solid #e2e8f0;
                flex-shrink: 0;
              "
            >
              <h3 style="margin: 0; font-size: 14px; color: #4a5568">Layers</h3>
            </div>
            <div
              class="layers-container"
              style="padding: 10px; flex: 1; overflow-y: auto;"
            ></div>
          </div>

          <!-- Styles panel -->
          <div style="flex: 2; display: flex; flex-direction: column; overflow: hidden;">
            <div
              class="panel-header"
              style="
                padding: 5px 10px;
                background-color: #f8f9fa;
                border-bottom: 1px solid #e2e8f0;
                flex-shrink: 0;
              "
            >
              <h3 style="margin: 0; font-size: 14px; color: #4a5568">Styles</h3>
            </div>
            <div
              id="style-manager"
              style="padding: 10px; flex: 1; overflow-y: auto;"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
