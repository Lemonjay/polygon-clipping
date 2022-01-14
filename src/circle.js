const earthRadius = 6378137.0
/**
 * modify from turf
 * @param {*} pos1
 * @param {*} pos2
 * @param {*} slice
 * @returns
 */
export default function createCircle(pos1, radius, slice) {
  let deltaAngle = (Math.PI / slice) * 2
  const positions = []
  for (let i = 0; i <= Math.PI * 2; i += deltaAngle) {
    positions.push(destination(pos1, radius, i))
  }
  return positions
}

/**
 * @param {*} distance
 * @returns
 */
function lengthToRadians(distance) {
  return distance / earthRadius
}

// function radiansToLength(radians) {
//   return radians * earthRadius
// }

function destination(origin, distance, bearing) {
  const radians = lengthToRadians(distance)
  const lat = Math.asin(Math.sin(origin[1]) * Math.cos(radians) + Math.cos(origin[1]) * Math.sin(radians) * Math.cos(bearing))
  const lng =
    origin[0] + Math.atan2(Math.sin(bearing) * Math.sin(radians) * Math.cos(origin[1]), Math.cos(radians) - Math.sin(origin[1]) * Math.sin(lat))
  return [lng, lat]
}

// /**
//  * distance - meters
//  * @param {*} pos1
//  * @param {*} pos2
//  * @returns
//  */
// function distance(pos1, pos2) {
//   let dLat = pos2[1] - pos1[1]
//   let dLon = pos2[0] - pos1[0]
//   let a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(pos1[1]) * Math.cos(pos2[1])
//   return radiansToLength(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)))
// }
