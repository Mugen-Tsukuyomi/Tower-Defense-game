(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("data",
{ "compressionlevel":-1,
 "height":12,
 "infinite":false,
 "layers":[
        {
         "data":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
            101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
            121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
            141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
            161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
            181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
            201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
            221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
         "height":12,
         "id":1,
         "name":"map",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":3,
         "name":"Object Layer 1",
         "objects":[
                {
                 "height":0,
                 "id":1,
                 "name":"",
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":-113.333333333333,
                         "y":476
                        }, 
                        {
                         "x":278.666666666667,
                         "y":476
                        }, 
                        {
                         "x":281.333333333333,
                         "y":150.666666666667
                        }, 
                        {
                         "x":736,
                         "y":153.333333333333
                        }, 
                        {
                         "x":733.333333333333,
                         "y":409.333333333333
                        }, 
                        {
                         "x":598.666666666667,
                         "y":406.666666666667
                        }, 
                        {
                         "x":602.666666666667,
                         "y":672
                        }, 
                        {
                         "x":1062.66666666667,
                         "y":674.666666666667
                        }, 
                        {
                         "x":1057.33333333333,
                         "y":285.333333333333
                        }, 
                        {
                         "x":1366.66666666667,
                         "y":286.666666666667
                        }],
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":0,
                 "y":0
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":4,
 "nextobjectid":2,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":64,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/assets\/tiled\/game mappp.tsx"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.10",
 "width":20
});