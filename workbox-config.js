module.exports = {
    "globDirectory": "public",
    "globPatterns": [
      "**/*.html",
      "styles/**/*.css",
      "images/backgrounds/*.webp",
      "images/blog/*.webp",
      "images/logos/*.png",
      "images/partners/**/*.webp",
      "images/speakers/*.jpg",
      "images/team/*.webp",
      "manifest/**/*.{png,webp,jpg,gif}",
      "*.{js,svg,ico}",
      "social-share.png"
    ],
    "swDest": "public/sw.js",
    "swSrc": "themes/ngvikings-2020/static/sw.js"
  };