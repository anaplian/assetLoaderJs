# assetLoader.js

Javascript helper module that loads images asynchronously from their URLs.
Allows you to wait until all the images are loaded before starting your program, without blocking.

## Example Usage
```Javascript
var imageURLs = {
    firstImage: 'path/to/image.jpg',
    secondImage: 'path/to/image2.jpg'
};

assetLoader(imageURLs, function(images){
    /*
     * Object {firstImage: img, secondImage: img}
});
```