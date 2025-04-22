<script setup lang="ts">
import { onMounted } from 'vue';
import createStudioEditor from '@grapesjs/studio-sdk';
import '@grapesjs/studio-sdk/style';

onMounted(() => {
  createStudioEditor({
    root: '#root',
    licenseKey: '8f99be65657b44c48b01ce7e24de1c3958d47894b56a46d38ca84dd7a63e2e15',
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
})

</script>

<template>
  <div id="root">
    <h1>Editor</h1>
  </div>
</template>


