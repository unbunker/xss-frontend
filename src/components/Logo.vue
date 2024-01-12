<template>
    <div class="flex-column justify-center" style="height: 40px; width: 40px;">
      <svg :style="{ fill: logoColor }" viewBox="0 0 106 105" xml:space="preserve">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3,76.8V36.8l28.3-16.2L81,36.8v32.3L52.6,85.3l-15-8.6V44.6l15-8.6l15,8.6v16.8l-15,8.6L51,69V52.3l8.4-4.8
        l-6.7-3.8l-8.3,4.8v24.4l8.3,4.8l21.7-12.4V40.7L52.6,28.3L31,40.7v39.9L52.6,93l35-20V33l-35-20l-35,20v40L24.3,76.8z" />
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      logoColor() {
        return this.$vuetify.theme.global.current.dark ? '#FFFFFF' : '#454545'; 
      },
    },
  };
  </script>