/* load */
var loads = 0
function awaitload(endkey) {
  if( window.onresize) { window.onresize() }
  if(!loads && endkey != "") { try { hand.innerHTML = ""; } catch{} }
  if(!endkey) { loads++ }
  else if(endkey) { loads-- }
  if(!loads) {
   try {
      var color = getouter("theme", __head__)
      var image = getouter("background", __head__)
      var style = getouter("style", __head__)
      var plan = searchplans( getouter("layout", __head__), "relative 0.8")
      console.log("layout: ", plan)
      background(color, image)
      hand.style = style
      document.getElementById("content").style.display = "block";
      document.getElementById("load").style.display = "none";
      if(!nods.length) {
        hand.innerHTML = `<p style="font-size: 35px; text-align: center; color: maroon">Document Empy</p>`
       }
      if(window.onresize) { window.onresize(); window.onresize(); }  
    } catch { console.warn("iterations run was not standart") }
   console.groupEnd("compilation")
  }
};

/* core */
class keyword {
  constructor(start=[], end=[], recall=function() {}, name) {
    const that = this
    this.ends = end
    this.starts = start
    this.name = name
    this.start = function(compl) {
      for(var i = 0; i < start.length; i++) { if(start[i]==compl) { return this } }
        return false
       }
    this.end = function(compl, result) {
      for(var i = 0; i < end.length; i++) {
        var includes = false
        for(var e = 0; e < start.length; e++) {
          if(end.includes(start[e]) ) { includes = true }
         }
        if(end[i]==compl && (result != "" || !includes) ) { return this }
         }
        return false
      }
    this.recall = function(event, response) { 
      if(response) { console.log(event) }   
        recall(event)
       }
     }
 };

var keywords = []
function pushkeyword(start_symbol, end_symbol, result, name) {
  keywords.push( new keyword(start_symbol, end_symbol, result, name) )
 };

function read(data, response) {
  if(!read.pos) { read.pos = -1; awaitload() }
  read.data = data
  read.response = response
  read.iteration = null
  read.last_iteration  = null
  read.res = ""
  while(read.data[read.pos+1]) {
    if(read.await) { console.log("Reading paused"); break }
    read.pos++; read.change = null; 
    if(response) {console.log(read.data[read.pos], read.iteration)}
    for(var i = 0; i < keywords.length; i++) {
      if(read.iteration && keywords[i] == read.iteration && keywords[i].end( read.data[read.pos], read.res ) == read.iteration) {
        read.iteration.recall(read.res, response); read.res = ""; read.last_iteration = read.iteration; read.iteration = null;
       }
      if(!read.iteration && keywords[i].start( read.data[read.pos] ) && keywords[i].start( read.data[read.pos] ) != read.last_iteration) { 
        read.iteration = keywords[i]; read.change = true; break;
       }
    }
    if(read.iteration && !read.change) { read.res += read.data[read.pos] }
    if(read.change) { read.change = null }
  }
  if(!read.await) {
    if(read.iteration) { read.iteration.recall(read.res, response) }
    awaitload(true)
    }
 };
function awaitReading() {
  console.warn("awaiting")
  read.await = true
  }
function continueReading() {
  console.log("Reading continued")
  read.await = false; read.pos += 1
  read(read.data, read.response)
  }

/* syntax */
var tempovar = null
var tempotext = null
var tempotype = null
var tempowrite = null
var keycode = null
var childhood = 0
var nods = new Array()
var styles = new Array()

function cssmodify(style) {
  var adition = true;
  for(var i = style.length-1; i > 0; i--) {
    if(style[i] == ";") { adition = false;}
    if(style[i] != " ") { break }
   }
  if(adition) { return style+";" } else { return style }
};

function getvalue(name, err) {
   for(var i = 0; i < styles.length; i++) {
      if(styles[i].name == name) { return cssmodify(styles[i].data) }
    }
   if(err) { console.error("Can't find link @" + res) }
};

 function setvalue(name, data) {
    if( !getvalue(name) ) {
      styles.push({ name: name, data: data })
    } else { console.error("variable didn't created: double name error") }
 };

function groupitem(element, command) {
  var num = 1
  var prop = 1
  var margin = 0
  var cnt = 1
  var res = ""
   for(var i = 0; i < command.length; i++) {
    res += command[i]
    if(command[i] == " " && cnt == 1) { cnt++;
      try{ margin=eval(res); res = "" } catch {}
     }
    else if(command[i] == " " && cnt == 2) { cnt++;
      try{ prop=eval(res); res = "" } catch {}
     }
    else if(command[i] == " " && cnt == 3) { cnt++;
      try{ num=eval(res); res = "" } catch {}
    }
   if(cnt == 1) { try{ margin=eval(res) } catch {} }
   else if(cnt == 2) { try{ prop=eval(res) } catch {} }
   else if(cnt == 3) { try{ num=eval(res) } catch {} }
  }
   var parent = element.parentElement
   var header = document.createElement("div");
   var brothers = new Array()
   if(!element.id || num == 1) {
       for(var i = 0; i < num; i++) {
        var broth = element.clone()
        broth.num = i
        broth.style.marginLeft = margin + "px"
        broth.style.position = "absolute"
        brothers.push(broth)
     }
  } 
  else { console.error("failed to clone element with id") }
   onResize(brothers, function(e, i) {
       var ewidth = ( parent.offsetWidth-margin*(brothers.length+1) )/brothers.length  
        e.style.width = ewidth + "px"
        var ehight = ewidth/prop
        e.style.height = ehight + "px"
        e.style.marginLeft = (e.num + 1) * margin + ewidth*e.num + "px"    
    })
   onResize([header], function(e) {
    if(e.children.length) {
      e.style.height = e.children[0].offsetHeight + "px"
      e.style.width = parent.offsetWidth + "px"
       }
    }) 
   parent.removeChild(element)
   for(var i = 0; i < brothers.length; i++) {
    header.append(brothers[i])
     }
   parent.appendChild(header)
  };

function attribute(element, res, oneprop) {
  if(!element.property) { element.property = [] }
  if(!oneprop) { 
      var atr = ""
      for(var i = 0; i < res.length; i++) {
         if(res[i] == "|") { make(atr); atr="" }
         else { atr += res[i] }
          }; if(atr) { make(atr) }
      } else { make(res) }  
           function make(a) {
               element.property.push(a)
               try {  eval("element." + a) } 
               catch { console.error("failed to attribute", element, res) }
           } 
 };
 
function importitem(command) {
  var ext = ""
  for(var i = command.length-1; i > 0; i--) {
    if(command[i] == ".") { break } else { ext+=command[i] }
   }
  if(ext == "sj") {
//  try {
    awaitReading()
    var script = document.createElement("script")
    script.src = command
    script.onload = function() { console.log("imported script", this); continueReading() }
    script.onerror = function() { console.error("failed to import", command); continueReading() }
    document.body.append(script)
  //   } catch { console.error("import went wrong") }
   }
  else if(ext == "ssc") {
    var style = document.createElement("link")
    style.rel="stylesheet"
    style.src = command
    document.head.append(style)
   }
 };
 
pushkeyword(["~"], ["~"], function(res) { console.log(res) })
pushkeyword(["l"], ['"'], function(res) {
   if(res[0]+res[1]+res[2]+res[3]+res[4] == "ocal ") {
     keycode = "local"
     var name = ""
     for(var i = 4; i < res.length; i++) {
       if(res[i]!=" ") { name += res[i] }
      }; tempovar = name
    }
 }, "local");
pushkeyword(["i"], ['"'], function(res) {
   if(res[0]+res[1]+res[2]+res[3]+res[4]+res[5] == "mport ") {
     keycode = "import"
    }
 }, "import");
pushkeyword(['"'], ['"'], function(res) {
  if(keycode == "local") {
    setvalue(tempovar, res)
    tempovar = null; keycode = null
   }
  else if(keycode=="import") {
    importitem(res); keycode = null; //tempovar = null
    }
 }, "value");
pushkeyword(["-"], ["#"], function(res) {
  var result = 1;
  for(var i = 0; i < res.length; i++) {
    if(res[i] == "-") { result++ }
   }; childhood = result;
 }, "child");
pushkeyword(["#"], ["*"], function(res) { tempotext = res; }, "element")
pushkeyword(["*"], [" ", "@"], function(res) { tempotype = res;  }, "type")
pushkeyword(["@"], ["."], function(res) {
    function separate(variables) {
      var variable = ""
      var result = ""
      for(var i = 0; i < variables.length; i++) {
        if(variables[i] == " ") { result += getvalue(variable); variable = "" }
        else { variable += variables[i] }
       }; if(variable) { result += getvalue(variable) }
      return result
     }
  tempowrite = write(tempotext, tempotype, separate(res))
  nods.push({ node: tempowrite, childhood: childhood })
  truewrite()
  tempotext = null; tempotype = null; childhood = 0 
}, "draw");
pushkeyword(["{"], ["}"], function(res) { if(tempowrite) { attribute(tempowrite, res) }}, "attribute")
pushkeyword(["["], ["]"], function(res) { if(tempowrite) { groupitem(tempowrite, res) }}, "group")
  
function write(text, type, style) { 
  var element = (function () {
  try { 
    var res = document.createElement(type)
    if(res.tagName == "IMG" || res.tagName == "frame" || res.tagName == "irame") {
       awaitload()
       res.onload = function() { awaitload(true) }
     }
    if(text) { res.innerHTML = text }
    if(style) { res.style = style }
    return res
   } catch { 
     console.warn("Element creation failed *" + type)
     var err = document.createElement("p"); err.innerHTML = "creation error"
     return err
    }
  })(); return element
};
/* writing */       
function truewrite(i) {
   (i!=undefined) ? (i=i) : (i = nods.length-1)
    if(nods[i].childhood) {
       try {
         for(var e = 1;  e <= i; e++) {
              if(nods[i-e].childhood == nods[i].childhood-1) {
                 nods[i-e].node.append(nods[i].node); break
              }
           }   
        } catch { console.error("failed to create child", nods[i]) }
     } else { try{ hand.append(nods[i].node) } catch { console.err(nods[i].node) }
   }
};