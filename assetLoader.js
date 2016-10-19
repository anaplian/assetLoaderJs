"use strict";
var assetLoader =
    (function () {

        function assetLoader(imageMap, callback) {
            var numUnloadedImages = 0,
                loadedAssets = {},
                img,
                imageName;

            for (imageName in imageMap) {
                if (imageMap.hasOwnProperty(imageName)) {
                    numUnloadedImages += 1;
                    loadedAssets[imageName] = "";
                }
            }

            function onImageLoad() {
                numUnloadedImages -= 1;
                if (numUnloadedImages === 0) {
                    callback(loadedAssets);
                }
            }

            for (imageName in imageMap) {
                if (imageMap.hasOwnProperty(imageName)) {
                    img = new Image();
                    img.onload = onImageLoad;
                    img.src = imageMap[imageName];
                    loadedAssets[imageName] = img;
                }
            }
        }

        return assetLoader;
    }());