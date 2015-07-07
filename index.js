var createScene = require('gl-plot3d')
var createMesh  = require('gl-mesh3d')
var mergeMeshes = require('merge-meshes')
var Arc = require('geo-arc')
var Box = require('geo-3d-box')

var scene = createScene()

// create box
var box = Box({
  size: [1, 1, 1],
  segments: [2, 2, 2]
})

// create optional sockets
// var sockets = Arc
// TODO

//
// merge meshes of box and sockets
// TODO


console.log("box", box)

// create mesh
var glMesh = createMesh({
  gl: scene.gl,
  cells: box.cells,
  positions: box.positions,
  colormap: 'jet'
})

scene.add(glMesh)
