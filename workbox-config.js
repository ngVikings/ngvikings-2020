module.exports = {
    "globDirectory": "public",
    "globPatterns": [
      "**/*.html",
      "styles/**/*.css",
      "images/**/*.{png,webp,jpg,gif}",
      "manifest/**/*.{png,webp,jpg,gif}",
      "*.{js,svg,ico,png}"
    ],
    "swDest": "public/sw.js",
    "swSrc": "themes/ngvikings-2020/static/sw.js"
  };