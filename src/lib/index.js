// This file exists so that running npm run package generates dist/index.d.ts and dist/index.js files

// This file can be empty since we are only exporting svelte component
// MPlayer component is exported via package.json exports property using "./dist/MPlayer.svelte" key
// The component can be imported like: import MPlayer from "package-name/dist/MPlayer.svelte"

// If we need to expose internal API we can declare it here
// Then we can allow imports like: import { method } from "package-name"

// Reexport your entry components here