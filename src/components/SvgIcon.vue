<script>
import { defineAsyncComponent, watch, ref } from 'vue';

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const icons = import.meta.glob('/src/assets/svgs/*.svg');
    const iconComponent = ref(null);

    function loadIcon() {
      console.log(`Loading icon for: ${props.name}`);

      const normalizedName = props.name.replace(/\s+/g, '-').toLowerCase();
      const matchingPath = Object.keys(icons).find(path => path.includes(`${normalizedName}.svg`));

      if (!matchingPath) {
        console.warn(`SVG '${props.name}' not found.`);
        iconComponent.value = null;
        return;
      }

      console.log(`Found SVG: ${matchingPath}`);
      iconComponent.value = defineAsyncComponent(() => icons[matchingPath]());
    }

    watch(() => props.name, loadIcon, { immediate: true });

    return { iconComponent };
  }
};
</script>

<template>
  <component v-if="iconComponent" :is="iconComponent" :class="className" />
  <span v-else class="text-red-500">⚠ Icon not found</span>
</template>
