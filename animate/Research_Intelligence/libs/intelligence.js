(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.3,0,-4.2).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAFIAAgBIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgDgBgGQABgEADgEIAkgeQADgDADADIAkAeQAFAEAAAEQAAAGgFADIgkAeIgDABIgDgBg");
	this.shape.setTransform(4.35,4.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgfQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIAAABIgkAeIgDABIgDgBg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrApIAAhRIBXAAIAABRg");
	mask.setTransform(4.35,4.075);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAGgFADIgkAeQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape.setTransform(4.35,4.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(0,0,8.7,8.2), null);


(lib.ClipGroup_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgfQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAFIgkAeIgDABIgDgBg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgeQgDgEgBgGQABgEADgEIAkgeQADgDADADIAkAeQAFAEAAAFQAAAFgFAEIgkAeIgDABIgDgBg");
	this.shape.setTransform(4.35,4.0375);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgfQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAFIgkAeIgDABIgDgBg");
	this.shape.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrApIAAhRIBXAAIAABRg");
	mask.setTransform(4.35,4.075);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAGgFADIgkAeQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape.setTransform(4.35,4.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,8.7,8.2), null);


(lib.ClipGroup_35_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.3,0,-4.2).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAFIAAgBIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_33_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgDgBgGQABgEADgEIAkgeQADgDADADIAkAeQAFAEAAAEQAAAGgFADIgkAeIgDABIgDgBg");
	this.shape_1.setTransform(4.35,4.075);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_31_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_29_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_27_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_25_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgfQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIAAABIgkAeIgDABIgDgBg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_23_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrApIAAhRIBXAAIAABRg");
	mask_1.setTransform(4.35,4.075);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAGgFADIgkAeQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_1.setTransform(4.35,4.075);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_1, new cjs.Rectangle(0,0,8.7,8.2), null);


(lib.ClipGroup_22_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgfQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAFIgkAeIgDABIgDgBg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_20_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_18_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_16_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_14_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgeQgDgEgBgGQABgEADgEIAkgeQADgDADADIAkAeQAFAEAAAFQAAAFgFAEIgkAeIgDABIgDgBg");
	this.shape_1.setTransform(4.35,4.0375);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgfQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAFIgkAeIgDABIgDgBg");
	this.shape_1.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrApIAAhRIBXAAIAABRg");
	mask_1.setTransform(4.35,4.075);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAGgFADIgkAeQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_1.setTransform(4.35,4.075);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,8.7,8.2), null);


(lib.ClipGroup_35_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.3,0,-4.2).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAFIAAgBIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_33_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgDgBgGQABgEADgEIAkgeQADgDADADIAkAeQAFAEAAAEQAAAGgFADIgkAeIgDABIgDgBg");
	this.shape_2.setTransform(4.35,4.075);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_31_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_29_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_27_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_25_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgfQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIAAABIgkAeIgDABIgDgBg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_23_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrApIAAhRIBXAAIAABRg");
	mask_2.setTransform(4.35,4.075);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAGgFADIgkAeQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_2.setTransform(4.35,4.075);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_2, new cjs.Rectangle(0,0,8.7,8.2), null);


(lib.ClipGroup_22_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgfQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAFIgkAeIgDABIgDgBg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_20_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_18_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_16_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_14_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_12_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgeQgDgEgBgGQABgEADgEIAkgeQADgDADADIAkAeQAFAEAAAFQAAAFgFAEIgkAeIgDABIgDgBg");
	this.shape_2.setTransform(4.35,4.0375);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_10_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgFIAkgeQADgCADACIAkAfQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAEIgkAeQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAoIgkgfQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAFgFAFIgkAeIgDABIgDgBg");
	this.shape_2.setTransform(4.35,4.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrApIAAhRIBXAAIAABRg");
	mask_2.setTransform(4.35,4.075);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,4.4,0,-4.3).s().p("AgDAnIgkgeQgDgEgBgFQABgEADgEIAkgeQADgEADAEIAkAeQAFAEAAAEQAAAGgFADIgkAeQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_2.setTransform(4.35,4.075);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(0,0,8.7,8.2), null);


(lib.ClipGroup_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az+IUIAAwnMAn9AAAIAAQng");
	mask.setTransform(127.925,53.225);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-128.2,0,127.7).s().p("AuFF4Qi4hMhihkQhehggBhoQgBhnBchgQBhhkC3hMQF1icITAAQIQAAF5CcIgBAAQC5BMBiBkQBeBgABBnQABBohdBgQhgBki4BMQl2CcoRAAQoRAAl4icg");
	this.shape.setTransform(127.95,53.225);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(0,0,255.9,106.5), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax8HlIAAvJMAj5AAAIAAPJg");
	mask.setTransform(114.9,48.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-116.4,0,113.4).s().p("AsoFYQimhGhYhbQhVhYgBhfQAAheBThXQBWhbClhGQFPiPHcAAQHbAAFSCPQCmBGBXBbQBVBXABBeQABBfhUBYQhWBbilBGQlQCOnbAAQnbAAlRiOg");
	this.shape.setTransform(114.8754,48.575);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(0,0.1,229.8,97.10000000000001), null);


(lib.ClipGroup_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av6G3IAAttIf0AAIAANtg");
	mask.setTransform(101.85,43.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-98.8,0,99.8).s().p("ArNE3QiThAhNhSQhLhPgBhWQgBhVBKhPQBNhTCSg+QEpiBGmAAQGlAAErCBQCTA+BOBTQBLBPAABVQABBWhKBQQhNBRiSBAQkpCAmmAAQmlAAkriAg");
	this.shape.setTransform(101.875,43.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0.1,0,203.6,87.8), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At3GIIAAsQIbvAAIAAMQg");
	mask.setTransform(88.825,39.25);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-89.6,0,88).s().p("ApxEWQiAg5hEhJQhChHAAhNQgBhMBAhHQBDhJCAg5QEDhzFwAAQFvAAEFBzQCAA5BEBJQBBBHABBMQABBNhBBHQhDBJh/A5QkEBzlvAAQlvAAkFhzg");
	this.shape.setTransform(88.8244,39.275);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0,0,177.7,78.5), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ar1FaIAAqzIXqAAIAAKzg");
	mask.setTransform(75.75,34.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-74.8,0,76.7).s().p("AoVD0QjfhkAAiQQgCiODdhmQDdhlE6AAQE5AADeBlQDfBmACCOQAACQjdBkQjcBmk7AAQk5AAjehmg");
	this.shape.setTransform(75.8,34.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0.1,0,151.4,69.2), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApyEsIAApXITlAAIAAJXg");
	mask.setTransform(62.725,29.95);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-60.8,0,61.4).s().p("Am5DTQi4hYgBh7QgBh8C3hXQC3hYEEABQEDgBC4BYQC4BXABB8QABB7i3BYQi3BZkEgBQkDABi4hZg");
	this.shape.setTransform(62.7248,30);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0,0.1,125.5,59.8), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnwD9IAAn5IPhAAIAAH5g");
	mask.setTransform(49.675,25.35);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-47.1,0,52.2).s().p("AldCzQiShLAAhoQgChoCShKQCRhKDNAAQDNAACSBKQCSBKABBoQAABpiRBKQiQBKjOAAQjNAAiShKg");
	this.shape.setTransform(49.6997,25.35);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0.1,0.1,99.30000000000001,50.6), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmzD9Qi2hpgBiUQgBiUC1hoQBZg0BzgbQBwgbB5AAQB4AABwAbQB0AbBZA0QC2BoABCUQABCUi1BpQi1BqkAAAIgCAAQj/gBi0hpg");
	mask.setTransform(68.025,35.8501);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007EE1").s().p("AqnF4IAArvIVPAAIAALvg");
	this.shape.setTransform(68,37.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(6.1,0,123.9,71.7), null);


(lib.ClipGroup_6_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgqAqIAAhUIBUAAIAABUg");
	mask_3.setTransform(4.25,4.25);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-2.9,0,5.5).s().p("AgdAeQgNgMAAgSQAAgQANgNQANgNAQAAQASAAAMANQAMANAAAQQAAASgMAMQgMAMgSAAQgQAAgNgMg");
	this.shape_3.setTransform(4.25,4.25);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_3, new cjs.Rectangle(0,0,8.5,8.5), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag7A8IAAh3IB3AAIAAB3g");
	mask.setTransform(6,6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-4.6,0,7.3).s().p("AgqArQgRgSAAgZQAAgXARgTQASgRAYAAQAZAAASARQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRg");
	this.shape.setTransform(6.025,6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,12,12), null);


(lib.ClipGroup_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhMBNIAAiaICZAAIAACag");
	mask_3.setTransform(7.725,7.75);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-6.4,0,9).s().p("Ag2A3QgWgXAAggQAAgfAWgWQAXgXAfgBQAgAAAXAYQAWAWAAAfQAAAhgWAWQgXAXgggBQgfABgXgXg");
	this.shape_3.setTransform(7.725,7.75);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_3, new cjs.Rectangle(0,0,15.5,15.5), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AheBfIAAi9IC9AAIAAC9g");
	mask.setTransform(9.475,9.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-10.5,0,8).s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(9.475,9.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,19,19), null);


(lib.ClipGroup_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhvBxIAAjhIDfAAIAADhg");
	mask_3.setTransform(11.225,11.25);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-12.3,0,9.6).s().p("AhOBPQghghAAguQgBgtAhghQAhghAugBIAAAAQAuAAAhAiQAhAhAAAtQAAAuggAhQghAigvAAQguAAgggig");
	this.shape_3.setTransform(11.2746,11.25);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_3, new cjs.Rectangle(0.1,0,22.4,22.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiBCCIAAkDIEDAAIAAEDg");
	mask.setTransform(12.975,13.025);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-14.3,0,11.7).s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA1AAAnAmQAmAmAAA1QAAA2gmAmQgnAmg1AAQg1AAgmgmg");
	this.shape.setTransform(13,13);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0.1,26,25.9), null);


(lib.ClipGroup_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiTCTIAAklIEnAAIAAElg");
	mask_3.setTransform(14.75,14.725);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-13.2,0,16.2).s().p("AhnBoQgrgrgBg9QABg8ArgrQArgrA8gBQA9ABArArQArArABA8QgBA9grArQgrAsg9AAQg8AAgrgsg");
	this.shape_3.setTransform(14.75,14.75);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_3, new cjs.Rectangle(0,0,29.5,29.5), null);


(lib.ClipGroup_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Ap4F5IAArxITxAAIAALxg");
	mask_4.setTransform(63.3,37.65);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D4FCF4").s().p("AlEF4QhFgChIgjQhFghgugxQgwg0gDgyQgCghACgcQAwBLBGAqQByBFCLgrQB7gnBug8QAkgVATgFQAbgIAlAFQBvANAkgEQBHgGAvgzIBEhGQA0g2AgguQBgiNgoh9QBSBrgRBzQgUCOiqB8QABAogmAlQhLBKjBgQQgygChDALQiEAVhUA/QgvAjhEAAIgLAAg");
	this.shape_4.setTransform(63.2811,37.636);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_4, new cjs.Rectangle(0,0,126.6,75.3), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApmGrIAAtVITNAAIAANVg");
	mask.setTransform(61.525,42.725);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmpGqQhPgJhOguQgbgjgFgrQgHh3BCiRQBGiaB9hyQCPiCCygoQDMgvDlBQQBgAgBVA0QBFBdgxBvQg1B0i4CHQABAogmAlQhLBKjBgQQgygChCALQiFAVhUBAQgvAjhEAAQgOAAgQgBg");
	this.shape.setTransform(61.5163,42.7305);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,123.1,85.5), null);


(lib.Group8846 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_35();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8846, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8840 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_33();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8840, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8834 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_31();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8834, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8828 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_29();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8828, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8822 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_27();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8822, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8816 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_25();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8816, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.Group8846();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance.alpha = 0.0898;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.Group8840();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance.alpha = 0.25;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.Group8834();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance.alpha = 0.3984;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.Group8828();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance.alpha = 0.5508;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.Group8822();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance.alpha = 0.6992;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.Group8816();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance.alpha = 0.8516;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_21_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.ClipGroup_22();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_19_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.ClipGroup_20();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_17_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.ClipGroup_18();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_15_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.ClipGroup_16();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_13_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.ClipGroup_14();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.ClipGroup_12();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.ClipGroup_10();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8846_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_35_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8846_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8840_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_33_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8840_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8834_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_31_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8834_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8828_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_29_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8828_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8822_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_27_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8822_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8816_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_25_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8816_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_34_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.Group8846_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_1.alpha = 0.0898;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_32_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.Group8840_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_1.alpha = 0.25;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_30_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.Group8834_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_1.alpha = 0.3984;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_28_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.Group8828_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_1.alpha = 0.5508;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_26_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.Group8822_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_1.alpha = 0.6992;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_24_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_1.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.Group8816_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_1.alpha = 0.8516;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_21_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_22_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_19_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_20_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_17_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_18_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_15_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_16_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_13_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_14_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_11_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_12_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_9_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_10_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_8_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_6_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_4_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_2_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8846_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_35_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8846_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8840_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_33_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8840_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8834_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_31_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8834_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8828_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_29_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8828_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8822_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_27_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8822_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8816_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_25_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8816_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_34_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.Group8846_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_2.alpha = 0.0898;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_32_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.Group8840_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_2.alpha = 0.25;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_30_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.Group8834_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_2.alpha = 0.3984;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_28_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.Group8828_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_2.alpha = 0.5508;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_26_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.Group8822_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_2.alpha = 0.6992;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_24_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_2.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.Group8816_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);
	this.instance_2.alpha = 0.8516;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_21_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_3.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_22_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_3, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_19_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_3.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_20_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_3, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_17_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_3.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_18_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_3, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_15_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_3.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_16_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_3, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_13_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_3.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_14_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_3, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_11_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_3.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_12_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_3, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_9_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_3.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_10_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_3, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_7_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_3.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_8_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_3, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_5_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_3.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_6_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_3, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_3.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_4_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_3, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrAoIAAhQIBXAAIAABQg");
	mask_3.setTransform(4.35,4.05);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_2_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8350 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(6,6,1,1,0,0,0,6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8350, new cjs.Rectangle(0,0,12.1,12), null);


(lib.Group8347 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_4_3();
	this.instance.setTransform(7.7,7.8,1,1,0,0,0,7.7,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8347, new cjs.Rectangle(0,0,15.5,15.5), null);


(lib.Group8344 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(9.5,9.5,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8344, new cjs.Rectangle(0,0,19,19), null);


(lib.Group8341 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_2_3();
	this.instance.setTransform(11.2,11.2,1,1,0,0,0,11.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8341, new cjs.Rectangle(0,0,22.5,22.5), null);


(lib.Group8338 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(13,13,1,1,0,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8338, new cjs.Rectangle(0,0,26,26), null);


(lib.Group8335 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_0_3();
	this.instance.setTransform(14.8,14.8,1,1,0,0,0,14.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8335, new cjs.Rectangle(0,0,29.5,29.5), null);


(lib.ClipGroup_20_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Az+IUIAAwnMAn9AAAIAAQng");
	mask_3.setTransform(127.925,53.225);

	// Layer_3
	this.instance = new lib.ClipGroup_21();
	this.instance.setTransform(128,53.2,1,1,0,0,0,128,53.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_3, new cjs.Rectangle(0,0,255.9,106.5), null);


(lib.ClipGroup_18_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ax8HlIAAvJMAj5AAAIAAPJg");
	mask_3.setTransform(114.9,48.6);

	// Layer_3
	this.instance = new lib.ClipGroup_19();
	this.instance.setTransform(114.9,48.6,1,1,0,0,0,114.9,48.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_3, new cjs.Rectangle(0,0.1,229.8,97.10000000000001), null);


(lib.ClipGroup_16_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Av6G3IAAttIf0AAIAANtg");
	mask_3.setTransform(101.85,43.9);

	// Layer_3
	this.instance = new lib.ClipGroup_17();
	this.instance.setTransform(101.9,43.9,1,1,0,0,0,101.9,43.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_3, new cjs.Rectangle(0,0,203.7,87.8), null);


(lib.ClipGroup_14_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("At3GIIAAsQIbvAAIAAMQg");
	mask_3.setTransform(88.825,39.25);

	// Layer_3
	this.instance = new lib.ClipGroup_15();
	this.instance.setTransform(88.8,39.2,1,1,0,0,0,88.8,39.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_3, new cjs.Rectangle(0,0,177.7,78.5), null);


(lib.ClipGroup_12_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ar1FaIAAqzIXqAAIAAKzg");
	mask_3.setTransform(75.75,34.6);

	// Layer_3
	this.instance = new lib.ClipGroup_13();
	this.instance.setTransform(75.8,34.6,1,1,0,0,0,75.8,34.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_3, new cjs.Rectangle(0,0,151.5,69.2), null);


(lib.ClipGroup_10_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("ApyEsIAApXITlAAIAAJXg");
	mask_3.setTransform(62.725,29.95);

	// Layer_3
	this.instance = new lib.ClipGroup_11();
	this.instance.setTransform(62.7,29.9,1,1,0,0,0,62.7,29.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_3, new cjs.Rectangle(0,0,125.5,59.9), null);


(lib.ClipGroup_36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiTCTIAAklIEnAAIAAElg");
	mask_1.setTransform(14.75,14.725);

	// Layer_3
	this.instance = new lib.ClipGroup_6_3();
	this.instance.setTransform(14.95,15.55,1,1,0,0,0,4.2,4.2);

	this.instance_1 = new lib.Group8350();
	this.instance_1.setTransform(14.95,15.45,1,1,0,0,0,6,6);
	this.instance_1.alpha = 0.8281;

	this.instance_2 = new lib.Group8347();
	this.instance_2.setTransform(14.9,15.35,1,1,0,0,0,7.7,7.8);
	this.instance_2.alpha = 0.6719;

	this.instance_3 = new lib.Group8344();
	this.instance_3.setTransform(14.9,15.15,1,1,0,0,0,9.5,9.5);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Group8341();
	this.instance_4.setTransform(14.8,14.95,1,1,0,0,0,11.2,11.2);
	this.instance_4.alpha = 0.3281;

	this.instance_5 = new lib.Group8338();
	this.instance_5.setTransform(14.8,14.85,1,1,0,0,0,13,13);
	this.instance_5.alpha = 0.1719;

	this.instance_6 = new lib.Group8335();
	this.instance_6.setTransform(14.8,14.8,1,1,0,0,0,14.8,14.8);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36, new cjs.Rectangle(0,0,29.5,29.5), null);


(lib.Group8366 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_0_4();
	this.instance.setTransform(63.3,37.6,1,1,0,0,0,63.3,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8366, new cjs.Rectangle(0,0,126.6,75.3), null);


(lib.Group8363 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(61.5,42.7,1,1,0,0,0,61.5,42.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8363, new cjs.Rectangle(0,0,123.1,85.5), null);


(lib.Group8849 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_34();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8849, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8843 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_32();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8843, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8837 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_30();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8837, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8831 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_28();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8831, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8825 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_26();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8825, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8819 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_24();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8819, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8810 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_21_1();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8810, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8804 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_19_1();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8804, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8798 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_17_1();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8798, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8792 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_15_1();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8792, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8786 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_13_1();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8786, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8780 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_11_1();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8780, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8774 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_9_1();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8774, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8768 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_7_1();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8768, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8762 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_5_1();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8762, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8756 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3_1();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8756, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8750 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_1_1();
	this.instance.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8750, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrCXIAAktIBXAAIAAEtg");
	mask_2.setTransform(4.35,15.125);

	// Layer_3
	this.instance_7 = new lib.Group8849();
	this.instance_7.setTransform(4.4,25.85,1,1,0,0,0,4.4,4);
	this.instance_7.alpha = 0.1016;

	this.instance_8 = new lib.Group8843();
	this.instance_8.setTransform(4.4,22.2,1,1,0,0,0,4.4,4);
	this.instance_8.alpha = 0.25;

	this.instance_9 = new lib.Group8837();
	this.instance_9.setTransform(4.4,18.6,1,1,0,0,0,4.4,4);
	this.instance_9.alpha = 0.3984;

	this.instance_10 = new lib.Group8831();
	this.instance_10.setTransform(4.4,14.95,1,1,0,0,0,4.4,4);
	this.instance_10.alpha = 0.5508;

	this.instance_11 = new lib.Group8825();
	this.instance_11.setTransform(4.4,11.3,1,1,0,0,0,4.4,4);
	this.instance_11.alpha = 0.6992;

	this.instance_12 = new lib.Group8819();
	this.instance_12.setTransform(4.4,7.65,1,1,0,0,0,4.4,4);
	this.instance_12.alpha = 0.8516;

	this.instance_13 = new lib.ClipGroup_23();
	this.instance_13.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.instance_14 = new lib.Group8810();
	this.instance_14.setTransform(4.4,7.7,1,1,0,0,0,4.4,4);
	this.instance_14.alpha = 0.8281;

	this.instance_15 = new lib.Group8804();
	this.instance_15.setTransform(4.4,11.4,1,1,0,0,0,4.4,4);
	this.instance_15.alpha = 0.6719;

	this.instance_16 = new lib.Group8798();
	this.instance_16.setTransform(4.4,15.1,1,1,0,0,0,4.4,4);
	this.instance_16.alpha = 0.5;

	this.instance_17 = new lib.Group8792();
	this.instance_17.setTransform(4.4,18.8,1,1,0,0,0,4.4,4);
	this.instance_17.alpha = 0.3281;

	this.instance_18 = new lib.Group8786();
	this.instance_18.setTransform(4.4,22.5,1,1,0,0,0,4.4,4);
	this.instance_18.alpha = 0.1719;

	this.instance_19 = new lib.Group8780();
	this.instance_19.setTransform(4.4,26.15,1,1,0,0,0,4.4,4);
	this.instance_19.alpha = 0;

	this.instance_20 = new lib.Group8774();
	this.instance_20.setTransform(4.4,22.5,1,1,0,0,0,4.4,4);
	this.instance_20.alpha = 0.1719;

	this.instance_21 = new lib.Group8768();
	this.instance_21.setTransform(4.4,18.8,1,1,0,0,0,4.4,4);
	this.instance_21.alpha = 0.3281;

	this.instance_22 = new lib.Group8762();
	this.instance_22.setTransform(4.4,15.1,1,1,0,0,0,4.4,4);
	this.instance_22.alpha = 0.5;

	this.instance_23 = new lib.Group8756();
	this.instance_23.setTransform(4.4,11.4,1,1,0,0,0,4.4,4);
	this.instance_23.alpha = 0.6719;

	this.instance_24 = new lib.Group8750();
	this.instance_24.setTransform(4.4,7.7,1,1,0,0,0,4.4,4);
	this.instance_24.alpha = 0.8281;

	this.instance_25 = new lib.ClipGroup_0();
	this.instance_25.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37, new cjs.Rectangle(0,0,8.7,30.3), null);


(lib.Group8849_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_34_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8849_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8843_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_32_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8843_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8837_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_30_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8837_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8831_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_28_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8831_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8825_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_26_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8825_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8819_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_24_1();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8819_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8810_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_21_2();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8810_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8804_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_19_2();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8804_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8798_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_17_2();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8798_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8792_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_15_2();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8792_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8786_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_13_2();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8786_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8780_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_11_2();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8780_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8774_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_9_2();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8774_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8768_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_7_2();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8768_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8762_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_5_2();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8762_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8756_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_3_2();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8756_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8750_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8750_1, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgrCXIAAktIBXAAIAAEtg");
	mask_3.setTransform(4.35,15.125);

	// Layer_3
	this.instance_26 = new lib.Group8849_1();
	this.instance_26.setTransform(4.4,25.85,1,1,0,0,0,4.4,4);
	this.instance_26.alpha = 0.1016;

	this.instance_27 = new lib.Group8843_1();
	this.instance_27.setTransform(4.4,22.2,1,1,0,0,0,4.4,4);
	this.instance_27.alpha = 0.25;

	this.instance_28 = new lib.Group8837_1();
	this.instance_28.setTransform(4.4,18.6,1,1,0,0,0,4.4,4);
	this.instance_28.alpha = 0.3984;

	this.instance_29 = new lib.Group8831_1();
	this.instance_29.setTransform(4.4,14.95,1,1,0,0,0,4.4,4);
	this.instance_29.alpha = 0.5508;

	this.instance_30 = new lib.Group8825_1();
	this.instance_30.setTransform(4.4,11.3,1,1,0,0,0,4.4,4);
	this.instance_30.alpha = 0.6992;

	this.instance_31 = new lib.Group8819_1();
	this.instance_31.setTransform(4.4,7.65,1,1,0,0,0,4.4,4);
	this.instance_31.alpha = 0.8516;

	this.instance_32 = new lib.ClipGroup_23_1();
	this.instance_32.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.instance_33 = new lib.Group8810_1();
	this.instance_33.setTransform(4.4,7.7,1,1,0,0,0,4.4,4);
	this.instance_33.alpha = 0.8281;

	this.instance_34 = new lib.Group8804_1();
	this.instance_34.setTransform(4.4,11.4,1,1,0,0,0,4.4,4);
	this.instance_34.alpha = 0.6719;

	this.instance_35 = new lib.Group8798_1();
	this.instance_35.setTransform(4.4,15.1,1,1,0,0,0,4.4,4);
	this.instance_35.alpha = 0.5;

	this.instance_36 = new lib.Group8792_1();
	this.instance_36.setTransform(4.4,18.8,1,1,0,0,0,4.4,4);
	this.instance_36.alpha = 0.3281;

	this.instance_37 = new lib.Group8786_1();
	this.instance_37.setTransform(4.4,22.5,1,1,0,0,0,4.4,4);
	this.instance_37.alpha = 0.1719;

	this.instance_38 = new lib.Group8780_1();
	this.instance_38.setTransform(4.4,26.15,1,1,0,0,0,4.4,4);
	this.instance_38.alpha = 0;

	this.instance_39 = new lib.Group8774_1();
	this.instance_39.setTransform(4.4,22.5,1,1,0,0,0,4.4,4);
	this.instance_39.alpha = 0.1719;

	this.instance_40 = new lib.Group8768_1();
	this.instance_40.setTransform(4.4,18.8,1,1,0,0,0,4.4,4);
	this.instance_40.alpha = 0.3281;

	this.instance_41 = new lib.Group8762_1();
	this.instance_41.setTransform(4.4,15.1,1,1,0,0,0,4.4,4);
	this.instance_41.alpha = 0.5;

	this.instance_42 = new lib.Group8756_1();
	this.instance_42.setTransform(4.4,11.4,1,1,0,0,0,4.4,4);
	this.instance_42.alpha = 0.6719;

	this.instance_43 = new lib.Group8750_1();
	this.instance_43.setTransform(4.4,7.7,1,1,0,0,0,4.4,4);
	this.instance_43.alpha = 0.8281;

	this.instance_44 = new lib.ClipGroup_0_1();
	this.instance_44.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38, new cjs.Rectangle(0,0,8.7,30.3), null);


(lib.Group8849_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_34_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8849_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8843_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_32_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8843_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8837_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_30_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8837_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8831_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_28_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8831_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8825_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_26_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8825_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8819_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_24_2();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8819_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8810_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_21_3();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8810_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8804_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_19_3();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8804_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8798_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_17_3();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8798_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8792_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_15_3();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8792_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8786_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_13_3();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8786_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8780_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_11_3();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8780_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8774_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_9_3();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8774_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8768_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_7_3();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8768_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8762_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_5_3();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8762_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8756_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_3_3();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8756_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.Group8750_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_1_3();
	this.instance_2.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8750_2, new cjs.Rectangle(0,0,8.7,8.1), null);


(lib.ClipGroup_39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgrCXIAAktIBXAAIAAEtg");
	mask_4.setTransform(4.35,15.125);

	// Layer_3
	this.instance_45 = new lib.Group8849_2();
	this.instance_45.setTransform(4.4,25.85,1,1,0,0,0,4.4,4);
	this.instance_45.alpha = 0.1016;

	this.instance_46 = new lib.Group8843_2();
	this.instance_46.setTransform(4.4,22.2,1,1,0,0,0,4.4,4);
	this.instance_46.alpha = 0.25;

	this.instance_47 = new lib.Group8837_2();
	this.instance_47.setTransform(4.4,18.6,1,1,0,0,0,4.4,4);
	this.instance_47.alpha = 0.3984;

	this.instance_48 = new lib.Group8831_2();
	this.instance_48.setTransform(4.4,14.95,1,1,0,0,0,4.4,4);
	this.instance_48.alpha = 0.5508;

	this.instance_49 = new lib.Group8825_2();
	this.instance_49.setTransform(4.4,11.3,1,1,0,0,0,4.4,4);
	this.instance_49.alpha = 0.6992;

	this.instance_50 = new lib.Group8819_2();
	this.instance_50.setTransform(4.4,7.65,1,1,0,0,0,4.4,4);
	this.instance_50.alpha = 0.8516;

	this.instance_51 = new lib.ClipGroup_23_2();
	this.instance_51.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	this.instance_52 = new lib.Group8810_2();
	this.instance_52.setTransform(4.4,7.7,1,1,0,0,0,4.4,4);
	this.instance_52.alpha = 0.8281;

	this.instance_53 = new lib.Group8804_2();
	this.instance_53.setTransform(4.4,11.4,1,1,0,0,0,4.4,4);
	this.instance_53.alpha = 0.6719;

	this.instance_54 = new lib.Group8798_2();
	this.instance_54.setTransform(4.4,15.1,1,1,0,0,0,4.4,4);
	this.instance_54.alpha = 0.5;

	this.instance_55 = new lib.Group8792_2();
	this.instance_55.setTransform(4.4,18.8,1,1,0,0,0,4.4,4);
	this.instance_55.alpha = 0.3281;

	this.instance_56 = new lib.Group8786_2();
	this.instance_56.setTransform(4.4,22.5,1,1,0,0,0,4.4,4);
	this.instance_56.alpha = 0.1719;

	this.instance_57 = new lib.Group8780_2();
	this.instance_57.setTransform(4.4,26.15,1,1,0,0,0,4.4,4);
	this.instance_57.alpha = 0;

	this.instance_58 = new lib.Group8774_2();
	this.instance_58.setTransform(4.4,22.5,1,1,0,0,0,4.4,4);
	this.instance_58.alpha = 0.1719;

	this.instance_59 = new lib.Group8768_2();
	this.instance_59.setTransform(4.4,18.8,1,1,0,0,0,4.4,4);
	this.instance_59.alpha = 0.3281;

	this.instance_60 = new lib.Group8762_2();
	this.instance_60.setTransform(4.4,15.1,1,1,0,0,0,4.4,4);
	this.instance_60.alpha = 0.5;

	this.instance_61 = new lib.Group8756_2();
	this.instance_61.setTransform(4.4,11.4,1,1,0,0,0,4.4,4);
	this.instance_61.alpha = 0.6719;

	this.instance_62 = new lib.Group8750_2();
	this.instance_62.setTransform(4.4,7.7,1,1,0,0,0,4.4,4);
	this.instance_62.alpha = 0.8281;

	this.instance_63 = new lib.ClipGroup_0_2();
	this.instance_63.setTransform(4.4,4,1,1,0,0,0,4.4,4);

	var maskedShapeInstanceList = [this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39, new cjs.Rectangle(0,0,8.7,30.3), null);


(lib.Group8405 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_20_3();
	this.instance.setTransform(128,53.2,1,1,0,0,0,128,53.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8405, new cjs.Rectangle(0,0,255.9,106.5), null);


(lib.Group8399 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_18_3();
	this.instance.setTransform(114.9,48.6,1,1,0,0,0,114.9,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8399, new cjs.Rectangle(0,0,229.8,97.2), null);


(lib.Group8393 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_16_3();
	this.instance.setTransform(101.9,43.9,1,1,0,0,0,101.9,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8393, new cjs.Rectangle(0,0,203.7,87.8), null);


(lib.Group8387 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_14_3();
	this.instance.setTransform(88.8,39.2,1,1,0,0,0,88.8,39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8387, new cjs.Rectangle(0,0,177.7,78.6), null);


(lib.Group8381 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_12_3();
	this.instance.setTransform(75.8,34.6,1,1,0,0,0,75.8,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8381, new cjs.Rectangle(0,0,151.6,69.2), null);


(lib.Group8375 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_10_3();
	this.instance.setTransform(62.7,29.9,1,1,0,0,0,62.7,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8375, new cjs.Rectangle(0,0,125.5,60), null);


(lib.ClipGroup_8_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Az+Q+MAAAgh8MAn9AAAMAAAAh8g");
	mask_3.setTransform(127.925,108.65);

	// Layer_3
	this.instance = new lib.Group8405();
	this.instance.setTransform(128,53.2,1,1,0,0,0,128,53.2);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Group8399();
	this.instance_1.setTransform(127.95,76.35,1,1,0,0,0,114.9,48.6);
	this.instance_1.alpha = 0.1719;

	this.instance_2 = new lib.Group8393();
	this.instance_2.setTransform(127.95,99.5,1,1,0,0,0,101.9,43.9);
	this.instance_2.alpha = 0.3281;

	this.instance_3 = new lib.Group8387();
	this.instance_3.setTransform(127.9,122.55,1,1,0,0,0,88.8,39.2);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Group8381();
	this.instance_4.setTransform(127.95,145.75,1,1,0,0,0,75.8,34.6);
	this.instance_4.alpha = 0.6719;

	this.instance_5 = new lib.Group8375();
	this.instance_5.setTransform(127.9,168.8,1,1,0,0,0,62.7,29.9);
	this.instance_5.alpha = 0.8281;

	this.instance_6 = new lib.ClipGroup_9();
	this.instance_6.setTransform(127.85,192.05,1,1,0,0,0,49.6,25.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_3, new cjs.Rectangle(0,0,255.9,217.3), null);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_37();
	this.instance.setTransform(0.05,0,1,1,0,0,0,4.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-15.1,8.7,30.299999999999997);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_38();
	this.instance.setTransform(0.05,0,1,1,0,0,0,4.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-15.1,8.7,30.299999999999997);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_39();
	this.instance.setTransform(0.05,0,1,1,0,0,0,4.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-15.1,8.7,30.299999999999997);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_37();
	this.instance.setTransform(4.4,15.1,1,1,0,0,0,4.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,8.7,30.3), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_38();
	this.instance.setTransform(4.4,15.1,1,1,0,0,0,4.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,8.7,30.3), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_39();
	this.instance.setTransform(4.4,15.1,1,1,0,0,0,4.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,8.7,30.3), null);


(lib.Group8408 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_8_3();
	this.instance.setTransform(128,108.7,1,1,0,0,0,128,108.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group8408, new cjs.Rectangle(0,0,255.9,217.3), null);


// stage content:
(lib.intelligence = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// strelice1_svg
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(368.35,337.45);
	this.instance._off = true;

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(368.4,270.65,1,1,0,0,0,4.4,15.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},35).to({state:[{t:this.instance_1}]},60).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({_off:true,regX:4.4,regY:15.1,x:368.4,y:270.65,alpha:0,mode:"independent"},60).wait(1));

	// strelice1_svg
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(199.7,351.35);

	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(199.75,228.55,1,1,0,0,0,4.4,15.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},82).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regX:4.4,regY:15.1,x:199.75,y:228.55,alpha:0,mode:"independent"},82).wait(14));

	// strelice1_svg
	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.setTransform(286.9,395);
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(286.95,298.2,1,1,0,0,0,4.4,15.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},13).to({state:[{t:this.instance_5}]},56).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({_off:true,regX:4.4,regY:15.1,x:286.95,y:298.2,alpha:0,mode:"independent"},56).wait(27));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_43 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_44 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_45 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_46 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_47 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_48 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_49 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_50 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_51 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_52 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_53 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_54 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_55 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_56 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_57 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_58 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_59 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_60 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_61 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_62 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_63 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_64 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_65 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_66 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_67 = new cjs.Graphics().p("AvoBDIVPvsIKCNnI1PPsg");
	var mask_graphics_68 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_69 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_70 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");
	var mask_graphics_71 = new cjs.Graphics().p("AvpBDIVPvsIKENnI1PPsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(43).to({graphics:mask_graphics_43,x:322.3,y:283.925}).wait(1).to({graphics:mask_graphics_44,x:318.25,y:279.075}).wait(1).to({graphics:mask_graphics_45,x:314.2,y:274.225}).wait(1).to({graphics:mask_graphics_46,x:310.15,y:269.375}).wait(1).to({graphics:mask_graphics_47,x:306.05,y:264.525}).wait(1).to({graphics:mask_graphics_48,x:302,y:259.675}).wait(1).to({graphics:mask_graphics_49,x:297.95,y:254.825}).wait(1).to({graphics:mask_graphics_50,x:293.9,y:249.975}).wait(1).to({graphics:mask_graphics_51,x:289.85,y:245.125}).wait(1).to({graphics:mask_graphics_52,x:285.8,y:240.275}).wait(1).to({graphics:mask_graphics_53,x:281.75,y:235.425}).wait(1).to({graphics:mask_graphics_54,x:277.65,y:230.575}).wait(1).to({graphics:mask_graphics_55,x:273.6,y:225.725}).wait(1).to({graphics:mask_graphics_56,x:269.55,y:220.875}).wait(1).to({graphics:mask_graphics_57,x:265.5,y:216.025}).wait(1).to({graphics:mask_graphics_58,x:261.45,y:211.125}).wait(1).to({graphics:mask_graphics_59,x:257.4,y:206.275}).wait(1).to({graphics:mask_graphics_60,x:253.35,y:201.425}).wait(1).to({graphics:mask_graphics_61,x:249.25,y:196.575}).wait(1).to({graphics:mask_graphics_62,x:245.2,y:191.725}).wait(1).to({graphics:mask_graphics_63,x:241.15,y:186.875}).wait(1).to({graphics:mask_graphics_64,x:237.1,y:182.025}).wait(1).to({graphics:mask_graphics_65,x:233.05,y:177.175}).wait(1).to({graphics:mask_graphics_66,x:229,y:172.325}).wait(1).to({graphics:mask_graphics_67,x:224.95,y:167.475}).wait(1).to({graphics:mask_graphics_68,x:220.85,y:162.625}).wait(1).to({graphics:mask_graphics_69,x:216.8,y:157.775}).wait(1).to({graphics:mask_graphics_70,x:212.75,y:152.925}).wait(1).to({graphics:mask_graphics_71,x:208.7,y:148.075}).wait(25));

	// neuron2_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#64BBFF").s().p("AgugiQgIgXgCgYQgCgQABgCIAagEIgDANQgCAIAaA4QAeBCAmAiIgMAfQhDg/gZhMg");
	this.shape.setTransform(228.6727,258.0636,1.128,1.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#64BBFF").s().p("AhFgDQAnggA5AEQAgACAWAKIgJAXQgbgIghgBQhAgCgcAng");
	this.shape_1.setTransform(223.5871,236.9776,1.128,1.132);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#64BBFF").s().p("AhMDmQgggbgWglQgshIAfg/QAeg4AwgrQAZgYAJgLQANgSgBgSQgBgeAYgeQAWgaAggPQAdgNAaACQAZABATARIgRATQgagXguAUQgbANgSAWQgSAWABAUQAAAZgPAYQgKAOgcAcQguApgbAzQgaA0A1BUQAbAqAhAgg");
	this.shape_2.setTransform(233.5428,249.219,1.128,1.132);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#64BBFF").s().p("AgZgsQAlgqA0gcIAMAXQgrAXgiAkQhHBHAhBAIgXALQgohNBNhRg");
	this.shape_3.setTransform(242.7096,206.1619,1.128,1.132);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#64BBFF").s().p("Ai2A/QA4gMAugSQASgGAQgPQAKgJARgUQAVgbANgMQAYgUAegIQAkgLAkANQAkANAUAgIgVANQgRgYgbgKQgcgKgcAJQgZAGgUARQgMALgTAYQgTAWgLAKQgTASgXAIQg+AWg+ALg");
	this.shape_4.setTransform(242.5099,215.074,1.128,1.132);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#64BBFF").s().p("AiCBOQAdgqBEg0QBAgzAxgVIASgIIAgANIgnASQguAUg+AzQg8AzgcAog");
	this.shape_5.setTransform(273.2771,196.8796,1.128,1.132);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#64BBFF").s().p("ABEAmIgCgOQgGgLgigOQgugUhIgLIApgJQBHAMAeAMQAfAMAJAUQAGANgHANg");
	this.shape_6.setTransform(289.0848,181.5978,1.128,1.132);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#64BBFF").s().p("AEuAXQhWg0hXgEQhLgChJAIQhvAIhLgEQhrgHhMggIAdgNQBIAdBgACQArABB/gKQBKgHBNACQBeADBaA3QA4AjATAYIgSASQgagbgrgbg");
	this.shape_7.setTransform(304.8621,190.9367,1.128,1.132);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},44).wait(52));

	// Layer_8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("A8KFVMAsfgc4IL2SQMgsfAc3g");
	var mask_1_graphics_1 = new cjs.Graphics().p("A8GFUMAsYgczIL1SNMgsYAcyg");
	var mask_1_graphics_2 = new cjs.Graphics().p("A8BFSMAsRgcuILySKMgsRAcug");
	var mask_1_graphics_3 = new cjs.Graphics().p("A79FSMAsLgcqILwSIMgsLAcpg");
	var mask_1_graphics_4 = new cjs.Graphics().p("A74FRMAsDgclILuSEMgsDAclg");
	var mask_1_graphics_5 = new cjs.Graphics().p("A70FQMAr8gcgILtSBMgr8Acgg");
	var mask_1_graphics_6 = new cjs.Graphics().p("A7vFPMAr1gcbILqR+Mgr1Acbg");
	var mask_1_graphics_7 = new cjs.Graphics().p("A7rFOMArugcXILpR8MgruAcXg");
	var mask_1_graphics_8 = new cjs.Graphics().p("A7mFOMArmgcTILnR5MgrmAcSg");
	var mask_1_graphics_9 = new cjs.Graphics().p("A7iFNMArggcOILlR1MgrgAcOg");
	var mask_1_graphics_10 = new cjs.Graphics().p("A7dFMMArYgcKILjR0MgrYAcIg");
	var mask_1_graphics_11 = new cjs.Graphics().p("A7ZFLMArRgcFILiRwMgrRAcEg");
	var mask_1_graphics_12 = new cjs.Graphics().p("A7UFKMArKgcAILfRtMgrKAcAg");
	var mask_1_graphics_13 = new cjs.Graphics().p("A7QFKMArEgb8ILdRqMgrDAb7g");
	var mask_1_graphics_14 = new cjs.Graphics().p("A7LFJMAq8gb3ILbRnMgq8Ab2g");
	var mask_1_graphics_15 = new cjs.Graphics().p("A7HFIMAq1gbzILaRlMgq1Abyg");
	var mask_1_graphics_16 = new cjs.Graphics().p("A7CFHMAqugbuILXRiMgqtAbtg");
	var mask_1_graphics_17 = new cjs.Graphics().p("A6+FHMAqngbqILWReMgqnAbpg");
	var mask_1_graphics_18 = new cjs.Graphics().p("A65FFMAqfgbkILURbMgqfAbkg");
	var mask_1_graphics_19 = new cjs.Graphics().p("A61FEMAqZgbfILSRYMgqZAbgg");
	var mask_1_graphics_20 = new cjs.Graphics().p("A6wFDMAqRgbbILQRWMgqRAbbg");
	var mask_1_graphics_21 = new cjs.Graphics().p("A6sFDMAqKgbXILPRTMgqLAbWg");
	var mask_1_graphics_22 = new cjs.Graphics().p("A6nFCMAqDgbSILMRQMgqDAbRg");
	var mask_1_graphics_23 = new cjs.Graphics().p("A6jFBMAp9gbOILKRNMgp8AbOg");
	var mask_1_graphics_24 = new cjs.Graphics().p("A6eFAMAp1gbJILIRKMgp1AbJg");
	var mask_1_graphics_25 = new cjs.Graphics().p("A6aE/MApugbEILHRHMgpuAbEg");
	var mask_1_graphics_26 = new cjs.Graphics().p("A6VE/MApngbAILEREMgpmAa/g");
	var mask_1_graphics_27 = new cjs.Graphics().p("A6RE+MApgga7ILDRBMgpgAa6g");
	var mask_1_graphics_28 = new cjs.Graphics().p("A6ME9MApYga3ILBQ/MgpYAa2g");
	var mask_1_graphics_29 = new cjs.Graphics().p("A6IE8MApSgayIK/Q7MgpRAayg");
	var mask_1_graphics_30 = new cjs.Graphics().p("A6DE7MApKgatIK9Q4MgpKAatg");
	var mask_1_graphics_31 = new cjs.Graphics().p("A5/E7MApDgaqIK8Q2MgpEAapg");
	var mask_1_graphics_32 = new cjs.Graphics().p("A56E5MAo8gakIK5QzMgo8Aakg");
	var mask_1_graphics_33 = new cjs.Graphics().p("A52E5MAo2gagIK3QwMgo1Aafg");
	var mask_1_graphics_34 = new cjs.Graphics().p("A5xE4MAougabIK1QtMgotAaag");
	var mask_1_graphics_35 = new cjs.Graphics().p("A5tE3MAongaWIK0QqMgonAaVg");
	var mask_1_graphics_36 = new cjs.Graphics().p("A5oE2MAoggaSIKxQnMgofAaSg");
	var mask_1_graphics_37 = new cjs.Graphics().p("A5kE1MAoZgaNIKwQkMgoZAaNg");
	var mask_1_graphics_38 = new cjs.Graphics().p("A5fE0MAoRgaIIKuQhMgoRAaIg");
	var mask_1_graphics_39 = new cjs.Graphics().p("A5bEzMAoLgaDIKsQeMgoKAaDg");
	var mask_1_graphics_40 = new cjs.Graphics().p("A5WEzMAoDgZ/IKqQbMgoDAZ+g");
	var mask_1_graphics_41 = new cjs.Graphics().p("A5SEyMAn8gZ7IKpQZMgn8AZ6g");
	var mask_1_graphics_42 = new cjs.Graphics().p("A5NExMAn1gZ2IKmQVMgn1AZ2g");
	var mask_1_graphics_43 = new cjs.Graphics().p("A5JEwMAnvgZxIKkQTMgnuAZwg");
	var mask_1_graphics_44 = new cjs.Graphics().p("A5EEvMAnngZtIKiQQMgnmAZsg");
	var mask_1_graphics_45 = new cjs.Graphics().p("A5AEvMAnggZpIKhQNMgnfAZog");
	var mask_1_graphics_46 = new cjs.Graphics().p("A47EuMAnZgZkIKeQKMgnYAZjg");
	var mask_1_graphics_47 = new cjs.Graphics().p("A43EtMAnSgZfIKdQHMgnRAZeg");
	var mask_1_graphics_71 = new cjs.Graphics().p("A5YEyMAoFgaAIKrQcMgoEAaAg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A5NEwMAn1gZ1IKmQVMgn1AZ2g");
	var mask_1_graphics_73 = new cjs.Graphics().p("A5EEvMAnmgZsIKjQQMgnmAZqg");
	var mask_1_graphics_74 = new cjs.Graphics().p("A45EtMAnVgZhIKeQIMgnVAZhg");
	var mask_1_graphics_75 = new cjs.Graphics().p("A4vErMAnFgZXIKaQCMgnFAZXg");
	var mask_1_graphics_76 = new cjs.Graphics().p("A4lEpMAm1gZMIKWP7Mgm1AZMg");
	var mask_1_graphics_77 = new cjs.Graphics().p("A4bEnMAmmgZCIKRP1MgmmAZCg");
	var mask_1_graphics_78 = new cjs.Graphics().p("A4RElMAmWgY4IKNPvMgmWAY3g");
	var mask_1_graphics_79 = new cjs.Graphics().p("A4HEkMAmGgYuIKJPnMgmGAYug");
	var mask_1_graphics_80 = new cjs.Graphics().p("A39EhMAl2gYjIKFPhMgl2AYkg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A3zEfMAlmgYYIKBPaMglmAYag");
	var mask_1_graphics_82 = new cjs.Graphics().p("A3pEeMAlWgYPIJ9PUMglWAYPg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A3fEcMAlGgYFIJ5PPMglHAYEg");
	var mask_1_graphics_84 = new cjs.Graphics().p("A3VEaMAk3gX6IJ0PHMgk3AX6g");
	var mask_1_graphics_85 = new cjs.Graphics().p("A3LEYMAkngXwIJwPBMgknAXwg");
	var mask_1_graphics_86 = new cjs.Graphics().p("A3BEWMAkXgXlIJsO6MgkXAXlg");
	var mask_1_graphics_87 = new cjs.Graphics().p("A22EUMAkGgXbIJoO0MgkHAXbg");
	var mask_1_graphics_88 = new cjs.Graphics().p("A2sESMAj2gXRIJjOtMgj2AXSg");
	var mask_1_graphics_89 = new cjs.Graphics().p("A2jERMAjngXHIJgOmMgjnAXHg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A2YEOMAjXgW8IJaOgMgjXAW8g");
	var mask_1_graphics_91 = new cjs.Graphics().p("A2OEMMAjHgWxIJWOZMgjHAWyg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A2EEKMAi3gWnIJSOTMgi3AWog");
	var mask_1_graphics_93 = new cjs.Graphics().p("A16EJMAingWdIJOOMMginAWdg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A1wEHMAiXgWTIJKOGMgiXAWTg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A1mEFMAiHgWJIJGOAMgiIAWIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:379.775,y:345}).wait(1).to({graphics:mask_1_graphics_1,x:378.1,y:343.125}).wait(1).to({graphics:mask_1_graphics_2,x:376.425,y:341.3}).wait(1).to({graphics:mask_1_graphics_3,x:374.75,y:339.425}).wait(1).to({graphics:mask_1_graphics_4,x:373.075,y:337.6}).wait(1).to({graphics:mask_1_graphics_5,x:371.4,y:335.725}).wait(1).to({graphics:mask_1_graphics_6,x:369.725,y:333.875}).wait(1).to({graphics:mask_1_graphics_7,x:368.05,y:332.025}).wait(1).to({graphics:mask_1_graphics_8,x:366.375,y:330.15}).wait(1).to({graphics:mask_1_graphics_9,x:364.7,y:328.3}).wait(1).to({graphics:mask_1_graphics_10,x:363.025,y:326.45}).wait(1).to({graphics:mask_1_graphics_11,x:361.35,y:324.6}).wait(1).to({graphics:mask_1_graphics_12,x:359.675,y:322.75}).wait(1).to({graphics:mask_1_graphics_13,x:358,y:320.9}).wait(1).to({graphics:mask_1_graphics_14,x:356.325,y:319.025}).wait(1).to({graphics:mask_1_graphics_15,x:354.65,y:317.175}).wait(1).to({graphics:mask_1_graphics_16,x:352.975,y:315.325}).wait(1).to({graphics:mask_1_graphics_17,x:351.3,y:313.45}).wait(1).to({graphics:mask_1_graphics_18,x:349.625,y:311.625}).wait(1).to({graphics:mask_1_graphics_19,x:347.95,y:309.75}).wait(1).to({graphics:mask_1_graphics_20,x:346.275,y:307.925}).wait(1).to({graphics:mask_1_graphics_21,x:344.6,y:306.05}).wait(1).to({graphics:mask_1_graphics_22,x:342.925,y:304.175}).wait(1).to({graphics:mask_1_graphics_23,x:341.25,y:302.35}).wait(1).to({graphics:mask_1_graphics_24,x:339.575,y:300.475}).wait(1).to({graphics:mask_1_graphics_25,x:337.9,y:298.65}).wait(1).to({graphics:mask_1_graphics_26,x:336.225,y:296.775}).wait(1).to({graphics:mask_1_graphics_27,x:334.55,y:294.9}).wait(1).to({graphics:mask_1_graphics_28,x:332.875,y:293.075}).wait(1).to({graphics:mask_1_graphics_29,x:331.2,y:291.2}).wait(1).to({graphics:mask_1_graphics_30,x:329.525,y:289.375}).wait(1).to({graphics:mask_1_graphics_31,x:327.85,y:287.5}).wait(1).to({graphics:mask_1_graphics_32,x:326.175,y:285.65}).wait(1).to({graphics:mask_1_graphics_33,x:324.5,y:283.8}).wait(1).to({graphics:mask_1_graphics_34,x:322.825,y:281.925}).wait(1).to({graphics:mask_1_graphics_35,x:321.15,y:280.075}).wait(1).to({graphics:mask_1_graphics_36,x:319.475,y:278.225}).wait(1).to({graphics:mask_1_graphics_37,x:317.8,y:276.375}).wait(1).to({graphics:mask_1_graphics_38,x:316.125,y:274.525}).wait(1).to({graphics:mask_1_graphics_39,x:314.45,y:272.675}).wait(1).to({graphics:mask_1_graphics_40,x:312.775,y:270.8}).wait(1).to({graphics:mask_1_graphics_41,x:311.1,y:268.95}).wait(1).to({graphics:mask_1_graphics_42,x:309.425,y:267.1}).wait(1).to({graphics:mask_1_graphics_43,x:307.75,y:265.225}).wait(1).to({graphics:mask_1_graphics_44,x:306.075,y:263.4}).wait(1).to({graphics:mask_1_graphics_45,x:304.4,y:261.525}).wait(1).to({graphics:mask_1_graphics_46,x:302.725,y:259.7}).wait(1).to({graphics:mask_1_graphics_47,x:301.05,y:257.825}).wait(24).to({graphics:mask_1_graphics_71,x:293.85,y:261.8}).wait(1).to({graphics:mask_1_graphics_72,x:297.325,y:264.4}).wait(1).to({graphics:mask_1_graphics_73,x:300.8,y:267}).wait(1).to({graphics:mask_1_graphics_74,x:304.275,y:269.625}).wait(1).to({graphics:mask_1_graphics_75,x:307.775,y:272.2}).wait(1).to({graphics:mask_1_graphics_76,x:311.225,y:274.8}).wait(1).to({graphics:mask_1_graphics_77,x:314.7,y:277.4}).wait(1).to({graphics:mask_1_graphics_78,x:318.175,y:280}).wait(1).to({graphics:mask_1_graphics_79,x:321.65,y:282.6}).wait(1).to({graphics:mask_1_graphics_80,x:325.125,y:285.225}).wait(1).to({graphics:mask_1_graphics_81,x:328.6,y:287.8}).wait(1).to({graphics:mask_1_graphics_82,x:332.075,y:290.4}).wait(1).to({graphics:mask_1_graphics_83,x:335.575,y:293}).wait(1).to({graphics:mask_1_graphics_84,x:339.025,y:295.6}).wait(1).to({graphics:mask_1_graphics_85,x:342.5,y:298.2}).wait(1).to({graphics:mask_1_graphics_86,x:345.975,y:300.825}).wait(1).to({graphics:mask_1_graphics_87,x:349.45,y:303.4}).wait(1).to({graphics:mask_1_graphics_88,x:352.925,y:306}).wait(1).to({graphics:mask_1_graphics_89,x:356.4,y:308.6}).wait(1).to({graphics:mask_1_graphics_90,x:359.875,y:311.2}).wait(1).to({graphics:mask_1_graphics_91,x:363.325,y:313.8}).wait(1).to({graphics:mask_1_graphics_92,x:366.825,y:316.425}).wait(1).to({graphics:mask_1_graphics_93,x:370.3,y:319}).wait(1).to({graphics:mask_1_graphics_94,x:373.775,y:321.6}).wait(1).to({graphics:mask_1_graphics_95,x:377.25,y:324.2}).wait(1));

	// neuron3_svg
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3F3FB").s().p("AgRgCIgmgCIgDgZIAxACQAxAKASAjIgWAMQgOgagngGg");
	this.shape_8.setTransform(289.6217,269.8936,1.1316,1.1347);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3F3FB").s().p("AgVgWQAIgmARggIAWAMQgOAbgIAgQgNA/AhAhIgSASQgqgpAPhKg");
	this.shape_9.setTransform(342.7458,222.3501,1.1316,1.1347);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3F3FB").s().p("AAwANQgsgfgjAAIgBAAQggABgVAXIgTgQQAcghAsgBQAqABAyAiQAaARATATIgTASQgQgQgWgQg");
	this.shape_10.setTransform(308.8305,234.2076,1.1316,1.1347);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C3F3FB").s().p("AAAgFQgdgFgaAOIgOgUQAigVAoAHQArALAWAmIgWAOQgQgegggIg");
	this.shape_11.setTransform(329.8781,269.7268,1.1316,1.1347);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3F3FB").s().p("Ag5B0QgIgJANgMIAAAAIA7g2QAegcgCgeQgCgcgcgeIgcgYIAOgVIAiAdQAhAkADAkQADAqgnAkIg8A3IgCACIgBgBQgFAFgGACQgEgBgEgFg");
	this.shape_12.setTransform(317.4223,269.1844,1.1316,1.1347);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C3F3FB").s().p("AhCASIAPgVIAVALQAaAKATgFQALgDARgRQAOgQAKgQIgDAnQgLAUgHAGQgJAIgRAEQgIACgKAAQgkgCgggUg");
	this.shape_13.setTransform(369.4272,237.4698,1.1316,1.1347);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3F3FB").s().p("AhWB6QARgiAQgRQAMgMAmgbIAegVQAngbgGg3IgOgyIAXgLQATAmgCApQgBA1grAfIggAXQgiAYgLALQgNAOgPAeg");
	this.shape_14.setTransform(358.7681,235.938,1.1316,1.1347);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C3F3FB").s().p("AgGBYQAcgvgYhDIggg7IAUgPIAOAVQANAXAJAZQAcBMgjA4g");
	this.shape_15.setTransform(265.2471,227.5697,1.1316,1.1347);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C3F3FB").s().p("ABABHQAGg9hOgiQgZgLgegHIgagEIADgaIAgAGQAjAJAbANQBYAqgHBLg");
	this.shape_16.setTransform(263.0867,240.7604,1.1316,1.1347);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C3F3FB").s().p("AAUBwQgMgUgKgkQgKgogHgUIgMgqQgHgXgJgMQgegqgjgPQgWgJgqgCIAEgZQAdgDAeAKQA7ARAeA5QATAqAKAoQA2CtB1ALIgyADQhLgHgfg5g");
	this.shape_17.setTransform(254.3726,277.9203,1.1316,1.1347);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C3F3FB").s().p("AhiAjIAQgSQATgUAXgPQBFgwBGAcIgKAYQg6gYg7ApQgTANgRASIgOAQg");
	this.shape_18.setTransform(294.6573,216.6304,1.1316,1.1347);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C3F3FB").s().p("AgeBVQAsgqgKhGQgDgXgHgWQgGgRgCgCIAWgMQAFAKAEAOQAKAaADAbQAKBRg1Awg");
	this.shape_19.setTransform(281.1875,270.2624,1.1316,1.1347);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C3F3FB").s().p("AhlCbQCZg8AWiGQALhEgVg+IAXgJQAXBBgLBMQgXCWioBCg");
	this.shape_20.setTransform(274.5621,253.7243,1.1316,1.1347);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C3F3FB").s().p("AgVgWQgWgIgWgEIgUgCIAFgaIAWACQAaAEAXAJQBKAeAVBIIgYAIQgTg9hAgYg");
	this.shape_21.setTransform(342.9197,214.691,1.1316,1.1347);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C3F3FB").s().p("Ah7BgQADgOAIgUQAOgnAXgfQBJhnB+AGIAAAcQhygFhABaQgVAdgOAkQgHAUgDANg");
	this.shape_22.setTransform(334.1781,215.4948,1.1316,1.1347);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C3F3FB").s().p("Ah8BSQALhuB3gmQA8gTA7ADIgCAZQg4gCg0AQQhoAhgJBeg");
	this.shape_23.setTransform(322.551,258.4956,1.1316,1.1347);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C3F3FB").s().p("AH/EHQAHgwgPgYQgUgfhCACIgSABQhfADgigDQg1gHgXgbQgggmAUhdQAlixg3hAQglgqhTAGQhSAHgkBBQglBCgMClQgDAigcAiQgdAigsAXQhCAhguAEQheAJhohCIAIgYQBiA9BYgHQAugDA6geQAqgVAZgeQAWgcABgZQAMilAlhGQArhTBkgIQBfgHAtA0QBABIgoC+QgSBSAYAcQASAVAxAEQAgADBWgEIASAAQBQgDAcArQAUAhgIApQgEAVgJARIgWARQAHgUADgXg");
	this.shape_24.setTransform(298.436,233.2244,1.1316,1.1347);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C3F3FB").s().p("AhBAGQAbgYAlgEQAjgEAgARIgLAWQgZgNgcACQgcADgVATg");
	this.shape_25.setTransform(264.9821,287.6412,1.1316,1.1347);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(96));

	// Group_9969_svg
	this.instance_6 = new lib.Group8366();
	this.instance_6.setTransform(305.65,255.45,1.1304,1.1304,0,0,0,63.5,37.8);
	this.instance_6.alpha = 0.5;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#53D5EA").s().p("AgRgCIgmgCIgCgZIAwACQAwAKAUAjIgXAMQgOgagngGg");
	this.shape_26.setTransform(289.6791,269.9293,1.1304,1.1304);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#53D5EA").s().p("AhBAGQAbgYAlgEQAjgEAgARIgLAWQgZgNgcACQgcADgVATg");
	this.shape_27.setTransform(265.0636,287.607,1.1304,1.1304);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#53D5EA").s().p("AgVgWQAFgYALgYQAFgPAEgHIAWAMIgWA7QgNA/AhAhIgSASQgqgpAPhKg");
	this.shape_28.setTransform(342.7496,222.5636,1.1304,1.1304);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#53D5EA").s().p("AAwAMQgsgegjAAIgBAAQggABgVAXIgTgQQAcghAsgBQAqABAyAiQAaARATATIgTASQgQgRgWgQg");
	this.shape_29.setTransform(308.8685,234.3767,1.1304,1.1304);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#53D5EA").s().p("AAAgFQgdgFgaAOIgOgUQAigVAoAHQArALAWAmIgWAOQgQgegggIg");
	this.shape_30.setTransform(329.8948,269.7631,1.1304,1.1304);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#53D5EA").s().p("AgxB5QgEAAgEgEQgIgKANgNIAAABIA7g3QAegbgCgeQgCgcgcgeIgcgYIAOgWIAiAfQAhAjADAkQADAqgnAkIg8A2IgCADIgBAAQgFAEgGABg");
	this.shape_31.setTransform(317.4516,269.2228,1.1304,1.1304);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#53D5EA").s().p("AhCARIAPgTIAVAKQAaAKATgFQALgDARgRQAOgQAKgQIgDAnQgLATgHAHQgJAIgRAEIgSACQgkgBgggWg");
	this.shape_32.setTransform(369.4039,237.6268,1.1304,1.1304);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#53D5EA").s().p("AhWB7QARgjAQgRQAMgMAmgaIAegXQAngbgGg2IgOgyIAXgMQATAmgCApQgBA2grAfIggAWQgiAZgLALQgNAOgPAeg");
	this.shape_33.setTransform(358.7557,236.1007,1.1304,1.1304);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#53D5EA").s().p("AgGBYQAcgvgYhDIggg7IAUgPIAOAVQANAXAJAZQAcBLgjA5g");
	this.shape_34.setTransform(265.3292,227.7636,1.1304,1.1304);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#53D5EA").s().p("ABABHQAGg9hOgiQgZgLgegGIgagGIADgZIAgAGQAjAIAbAOQBYApgHBMg");
	this.shape_35.setTransform(263.171,240.9051,1.1304,1.1304);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#53D5EA").s().p("AAUBwQgMgUgJgkQgLgogGgUIgNgqQgHgXgJgMQgegqgjgPQgWgJgqgCIAFgZQAcgDAeAKQA7ARAeA5QAUAqAJAoQA2CtB2ALIgzADQhLgHgfg5g");
	this.shape_36.setTransform(254.4374,277.926,1.1304,1.1304);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#53D5EA").s().p("AhiAjIAPgSQAVgUAWgPQBFgwBGAcIgKAXQg6gXg7ApQgTANgRASIgNAQg");
	this.shape_37.setTransform(294.7096,216.8652,1.1304,1.1304);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#53D5EA").s().p("AgeBVQAsgqgKhGQgDgXgHgWQgGgRgCgCIAWgLQAFAKAEANQAKAaADAaQAKBRg1Ayg");
	this.shape_38.setTransform(281.2535,270.2967,1.1304,1.1304);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#53D5EA").s().p("AhlCbQCZg8AWiGQAHgrgHguQgEgUgGgVIAXgJIAKAqQAJAzgHAwQgXCWioBCg");
	this.shape_39.setTransform(274.5968,253.8204,1.1304,1.1304);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#53D5EA").s().p("AgVgXQgWgIgWgDIgUgCIAAgaIAWACQAbAEAZAKQBLAeAWBHIgZAIQgRg+hBgYg");
	this.shape_40.setTransform(342.9232,214.9896,1.1304,1.1304);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#53D5EA").s().p("Ah7BkQAMg3AkgzQBJhoB+AGIgBAaQhygGg/BaQgVAdgNAkQgHATgDAOIAAABg");
	this.shape_41.setTransform(334.0774,215.8754,1.1304,1.1304);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#53D5EA").s().p("Ah7BSQAKhuB2gmQA8gTA7ADIgBAZQg4gCg0AQQhoAhgJBeg");
	this.shape_42.setTransform(322.5751,258.574,1.1304,1.1304);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#53D5EA").s().p("AH/EHQAHgwgPgYQgUgfhCACIgSABQhfADgigDQg1gHgXgbQgggmAUhdQAlixg3hAQglgqhTAGQhSAHgkBBQglBCgMClQgDAigcAiQgdAigsAXQhCAhguAEQheAJhohCIAIgYQBiA9BYgHQAugDA6geQAqgVAZgfQAWgbABgZQAMilAlhGQArhTBkgIQBfgHAtA0QBABIgoC+QgSBSAYAcQASAVAxAEQAgADBWgEIASAAQBQgDAcArQAUAhgIApQgEAVgJAQIAAABIgWARQAHgUADgXg");
	this.shape_43.setTransform(298.4845,233.3972,1.1304,1.1304);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#DFFEFF","#01B0F9"],[0,1],0,63.3,0,-63.3).s().p("AlFHSQhEgChIgjQhFghgugyQgxg0gDgyQgHh6A3iJQA9iZB1htQCGh/C3gqQDRgwEABGQA/ASBCA5QBLBBAgBRQBXDYkEC9QABApglAlQhMBKjBgQQgxgChDAKQiEAVhUBAQgwAjhEAAIgLAAg");
	this.shape_44.setTransform(305.4337,245.1132,1.1304,1.1304);

	this.instance_7 = new lib.Group8363();
	this.instance_7.setTransform(293.3,234.7,1.1304,1.1304,0,0,0,61.8,42.9);
	this.instance_7.alpha = 0.1016;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#007EE1").s().p("AgtghQgIgYgDgXIgBgSIAbgGIgDAPQgDAHAaA4QAeBCAmAiIgMAfQhCg/gZhLg");
	this.shape_45.setTransform(228.6067,258.0596,1.1304,1.1304);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#007EE1").s().p("AhFgCQAnghA5AEQAgADAWAKIgJAWQgbgIghgBQhAgBgcAmg");
	this.shape_46.setTransform(223.5197,236.9745,1.1304,1.1304);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#007EE1").s().p("AhMDmQgggbgWglQgshIAfg/QAeg3AwgsQAZgYAJgLQAMgSAAgSQgBgeAYgeQAWgbAggOQAcgNAaACQAaABATARIgRATQgagXguAUQgbAMgSAXQgSAWAAAUQABAZgPAYQgKAPgcAbQgtAogcAzQgaA0A1BUQAbArAhAgg");
	this.shape_47.setTransform(233.5064,249.2553,1.1304,1.1304);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#007EE1").s().p("AgZgsQAmgpA0gdIAMAXQgrAYgjAjQhHBHAhBAIgWAMQgphOBNhRg");
	this.shape_48.setTransform(242.6951,206.2286,1.1304,1.1304);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#007EE1").s().p("Ai3A/QA2gLAxgTQASgHAQgPQAKgJARgUQAUgaAOgMQAYgUAegIQAkgLAkANQAjANAVAgIgVANQgRgYgbgKQgcgKgcAJQgZAGgUARQgMAKgTAZQgTAWgLAKQgTASgXAIQg5AVhDAMg");
	this.shape_49.setTransform(242.5112,215.1568,1.1304,1.1304);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#007EE1").s().p("AiBBPQAcgqBEg1QBAgzAxgVIASgIIAgANIgoASQgtAUg9AzQg+AzgaAog");
	this.shape_50.setTransform(273.3442,196.9307,1.1304,1.1304);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#007EE1").s().p("ABDAmQABgGgCgIQgHgKghgOQgugVhIgLIApgIQBHALAeAMQAfAMAJAUQAHANgIAOg");
	this.shape_51.setTransform(289.1997,181.6696,1.1304,1.1304);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#007EE1").s().p("AEuAXQhWg0hXgEQhJgBhMAHQhuAIhKgEQhsgGhNghIAfgOQBHAeBfACQAoABCCgJQBMgIBMACQBeAEBaA3QAuAcAeAeIgSASQgbgbgrgbg");
	this.shape_52.setTransform(304.9967,191.0241,1.1304,1.1304);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,64.9,0,-64.8).s().p("AllHXQhFgDhHgjQhGghgugyQgwg0gDgxQgHh3BCiQQBHibB9hyQCOiCCygoQDMgvDlBQQEjBmAbCZQAeCkkdDPQABApglAlQhMBKjBgQQgygChBAKQiGAWhUA/QguAkhFAAIgLAAg");
	this.shape_53.setTransform(287.4804,229.5511,1.1304,1.1304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_7},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_6}]}).wait(96));

	// pppostolje_svg
	this.instance_8 = new lib.Group8408();
	this.instance_8.setTransform(292.2,284.95,1,1,0,0,0,128,108.7);
	this.instance_8.alpha = 0.6406;

	this.instance_9 = new lib.ClipGroup_7();
	this.instance_9.setTransform(291.8,375.1,1,1,0,0,0,68,37.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-85.6,0,83.7).s().p("ApTFaQh7hGhAhcQg/hYAAhgQgBhfA+hZQA/hbB6hHQD3iPFeAAQFeAAD5CPQB6BHBABbQA/BZAABfQABBgg9BZQhABbh5BHQj3CPlfAAQldAAj5iQg");
	this.shape_54.setTransform(292.625,373.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-85.9,0,83.4).s().p("AjGGlIhUgPIh2geQgagJgagJIhRgiQgfgOgfgTQh7hGhBhdQg+hZAAhfIABl5QACBdA8BWQBBBdB7BHQAeARAgAPICXA6IA/AQIA6ALICkAVIAsADICPgBQAegCAmgDIB8gUIAvgKIBNgVIA8gUIAIgDQAVgJAhgOIAPgIQAngTASgLIAUgMIBGgxIA6g3QAKgLAMgPIAggvIANgXIASgvIALguIABgKIgCF9IgEAcIgCAHIgMApIgWAwIgiAzIgBABIgWAZIgGAGQgKAMgKAHIgEAFIgcAZIhZA8QgWANgjARIgQAHQggAPgWAIIg6AVIihApIgUACIg8AJIhVAIIh6ABg");
	this.shape_55.setTransform(292.475,417.4);

	this.instance_10 = new lib.ClipGroup_36();
	this.instance_10.setTransform(291.35,342.2,1,1,0,0,0,14.8,14.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#007EE6","#06D3FE"],[0,1],0,-9,0,5.9).s().p("Ag0AfQgTgLgDgQQgCgOAPgNIAJgGIALgFQAvgTAuAYIABAAQAWANAAAQQAAASgWANQgZANgcAAQgbAAgZgNg");
	this.shape_56.setTransform(291.2571,342.6802);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.instance_10},{t:this.shape_55},{t:this.shape_54},{t:this.instance_9},{t:this.instance_8}]}).wait(96));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(464.2,476.3,-44.099999999999966,-15.400000000000034);
// library properties:
lib.properties = {
	id: '03629AC22E901C40BDC221BF5F2366DA',
	width: 600,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['03629AC22E901C40BDC221BF5F2366DA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;