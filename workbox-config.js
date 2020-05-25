module.exports = {
    "globDirectory": "public",
    "globPatterns": [
      "**/*.html",
      "styles/**/*.css",
      "images/logos/*.png",
      "manifest/**/*.{png,webp,jpg,gif}",
      "*.{js,svg,ico}",
      "social-share.png"
    ],
    "swDest": "public/sw.js",
    "swSrc": "themes/ngvikings-2020/static/sw.js"
  };