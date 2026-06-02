export default {
  "*.{md,json,yaml}": [
    "prettier --write"
  ],
  "*.{html,css,vue,ts,tsx,js,jsx}": ["rslint --fix", "prettier --write"],
}