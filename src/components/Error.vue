<template>
    <div class="flex-column justify-center" style="margin-top: 20px;">
      <svg  width="150" height="150" viewBox="0 0 465 462"  xml:space="preserve">
        <title>error</title>
        <path :style="{ fill: none, stroke: logoColor, strokeWidth: strokeWidth }" d="M456,231c0,122.5-100,222-223.5,222S9,353.5,9,231S109,9,232.5,9S456,108.4,456,231z"/>
        <path :style="{ fill: logoColor }" d="M127.1,125L127.1,125c5.9-5.9,15.5-5.9,21.5,0l190.2,190.9c5.9,5.9,5.9,15.5,0,21.5l0,0
          c-5.9,5.9-15.5,5.9-21.5,0L127,146.4C121.1,140.5,121.1,130.9,127.1,125z"/>
        <path :style="{ fill: logoColor }" d="M127,315.8l189.7-191.3c5.9-5.9,15.5-6,21.5-0.1l0,0c5.9,5.9,6,15.5,0.1,21.5L148.5,337.1
          c-5.9,5.9-15.5,6-21.5,0.1l0,0C121.1,331.3,121.1,321.7,127,315.8z"/>
        </svg>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      circleStyle() {
        return this.$vuetify.theme.global.current.dark ? 
        {fill:"none", stroke:"#5D87FF", "stroke-width": "18"} : 
        {fill:"none", stroke:"#9155FD", "stroke-width": "18"} 
      },
      strokeWidth() {
        return "18";
      }, 
      none() {
        return "none";
      },
      logoColor() {
        return this.$vuetify.theme.global.current.dark ? '#9155FD' : '#5D87FF'; 
      },
    },
  };
  </script>