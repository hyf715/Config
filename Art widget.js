//Department ID = 11 is paintings ; use other if you wish

const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=11&q=Painting'
const req = new Request(url)
const res = await req.loadJSON()
const max = res.total-1
console.log("Max: "+max);
const min = 0
const random = Math.floor(Math.random() * (max - min + 1)) + min
console.log("Random: "+random);
const picked = res.objectIDs[random]
console.log("Picked: "+picked);
const req2 = new Request('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+picked)
const res2 = await req2.loadJSON()
const i = new Request(res2.primaryImageSmall);
const img = await i.loadImage();

let widget = createWidget(img, res2.objectURL)
if (config.runsInWidget) {
  // create and show widget
  Script.setWidget(widget)
  Script.complete()
}
else {
  widget.presentMedium()
}


function createWidget(img, widgeturl) {
  let w = new ListWidget()
  w.backgroundColor = new Color("#1A1A1A")
  w.backgroundImage = img
  w.url = widgeturl
  return w
}
