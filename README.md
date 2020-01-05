# magicGarden
This is solution to Magic Garden problem https://infinite-peaceful-stream.herokuapp.com/

It creates an infinite shapes of a given height and Width and recursively create inner shapes of same Height - Padding and Width - Padding until there is no space left in the last shape.


### Installation
Clone the project and run `npm i` and `npm start`.
Launch http://localhost:4000/ to see it in your browser.


### Solution
  1. The resulting shape is symmetric across both the axes. So, the computation is done only for one Quadrant and is repeated/mirrored to complete the shape.
  2. The shape is computed row-by-row. Each row is pre-filled with `0` and we insert other characters as needed.
  3. The left-top corner of each box falls into a pattern. As the padding is same on all sides, the coordinates of corners create a *square* and can be tracked using one variable (`currentOrigin`).
  4. A valid position to enter char `1` is when currentIndex is `0` or is a multiple of effective padding(+1 for zero-based counting). It is calculated using formula: 
  ``` index === 0 || index % (effectivePadding + 1) === 0 ```
  5. Each half-row is mirrored to create a full row.
  6. When half of the height is computed, it is mirrored to create the second half.
  
  
### Running
The app can be tested visually using the live-demo.
The array can be found by executing `script.js` file and invoking `draw` method.
  
  
 ### Tools used
  1. Bootstrap is being used via CDN for layout and basic styling. No additional CSS is used in this example.
  2. Express JS for running a local server.
  3. Basic HTML, JS.
  
  
