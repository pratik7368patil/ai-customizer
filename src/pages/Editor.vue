<script setup lang="ts">
import createStudioEditor from '@grapesjs/studio-sdk';
import '@grapesjs/studio-sdk/style';

// ...
createStudioEditor({
  licenseKey: 'your-license-key',
  project: {
    type: 'web',
    // The default project to use for new projects
    default: {
      pages: [
        { name: 'Home', component: '<h1>Home page</h1>' },
        { name: 'About', component: '<h1>About page</h1>' },
        { name: 'Contact', component: '<h1>Contact page</h1>' },
      ]
    },
  }
})
</script>

<template>
  <div>
    <h1>Editor</h1>
  </div>
</template>


