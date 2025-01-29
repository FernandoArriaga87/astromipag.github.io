const config = {
	content: [
	  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	  './node_modules/flowbite/**/*.js', // Agrega esta línea para Flowbite
	],
	theme: {
	  extend: {},
	},
	plugins: [
	  require('flowbite/plugin'), // Agrega esta línea para Flowbite
	],
  };
  
  export default config;