//Image
const url = 'https://api.ixiaowai.cn/api/api.php?return=json'
//{"code":"200","imgurl":"https:pd.jpg","width":"1920","height":"1080"}
const req = new Request(url)
const res = await req.loadJSON()
//const code = res.code
//const width = res.width
//const height = res.height
//console.log("code:" + res.code)
const i = new Request(res.imgurl);
const img = await i.loadImage();


let widget = createWidget(img, res.imgurl)
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


