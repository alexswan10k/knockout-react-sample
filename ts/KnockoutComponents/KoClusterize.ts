import * as ko from "knockout";
import * as Clusterize from "clusterize.js";

/*!
* Clusterize.js (https://github.com/NeXTs/Clusterize.js) binding
* (c) Denis Gulin <denis.gulin@gmail.com> 
* License: MIT (http://www.opensource.org/licenses/mit-license.php)
*/

export class KoClusterize {
    public items: number[];
    constructor(params: {length: number}){
        var data = [];
        const len = (params && params.length) ? params.length : 1000;
		for(var i = 0; i < len; i++){
			data.push(i);
		}
		this.items = data;
    }
    
    static template = "<div data-bind='clusterize:{data: items}' ><div>placeholder</div> </div>"
}


var mapForWrapping = {
    thead: 1,
    tbody: 1,
    tfoot: 1,
    tr: 1,
    td: 1,
    th: 1,
    option: 1,
    optgroup: 1
}, arraySlice = Array.prototype.slice, tagNameLower = function (node) { return node && node.tagName && node.tagName.toLowerCase(); }, getStyle = function (node, property) {
    var view = (node.ownerDocument || document).defaultView;
    return (view && view.getComputedStyle)
        ? view.getComputedStyle(node, null)[property]
        : node.currentStyle[property];
}, getScrollElement = function (node) {
    var html = document.documentElement || document.body;
    while (node && node !== html && getStyle(node, 'overflowY') === 'visible') {
        node = node.parentNode;
    }
    return node === html && (document as any).scrollingElement || node;
}, isArraySame = function (a, b) { return (a.length === b.length) && null === ko.utils.arrayFirst(a, <any>function (_, i) { return (_ && b[i] && _.nodeType) ? (_.outerHTML !== b[i].outerHTML) : (_ !== b[i]); }); }, cloneNodes = function (nodes) { return ko.utils.arrayMap(nodes, function (node) { return (node as any).cloneNode(true); }); }, getTagName = function (element) {
    while (element && element.nodeType !== 1) {
        element = ko.virtualElements.firstChild(element);
    }
    return tagNameLower(element);
}, createElement = function (element) { return (element.ownerDocument || document).createElement(element.tagName); }, ensureWrapper = function (childNodes, tags, element) {
    for (var node = childNodes[0]; node; node = node.nextSibling) {
        if (node && tags[tagNameLower(node)]) {
            for (var base = createElement(element), current = base, next; element && tags[tagNameLower(element)];) {
                next = createElement(element = element.parentNode);
                next.appendChild(current);
                current = next;
            }
            return base;
        }
    }
}, replaceDomNodes = function (nodesToReplaceArray, newNodesArray) {
    if (nodesToReplaceArray.length > 0) {
        var insertionPoint = nodesToReplaceArray[0];
        var parent = insertionPoint.parentNode;
        for (var i = 0, j = newNodesArray.length; i < j; i++)
            parent.insertBefore(newNodesArray[i], insertionPoint);
        for (var i = 0, j = nodesToReplaceArray.length; i < j; i++) {
            ko.removeNode(nodesToReplaceArray[i]);
        }
    }
}, hideNodes = function (nodes) {
    return ko.utils.arrayForEach(nodes, function (node) {
        node && (node as any).style && extend((node as any).style, { visibility: 'hidden', position: 'absolute' });
    });
}, updateArray = function (oldArray, newArray) {
    for (var i = 0, j = oldArray.length = (newArray = ko.unwrap(newArray)).length, empty = {}; i < j; i++) {
        if (newArray[i] === undefined) {
            oldArray[i] = { $index: i };
        }
        else if ((oldArray[i] || empty).$data !== newArray[i]) {
            oldArray[i] = { $index: i, $data: newArray[i] };
        }
    }
    return oldArray;
}, ensureRange = function (array, offset, limit) {
    for (var j = offset + limit; undefined !== (array[offset] || '').$data && offset < j; offset++) {
        limit--;
    }
    return limit > 0 && { 0: offset, 1: limit, length: 2, offset: offset, limit: limit };
}, getY = function (node) {
    var y = 0;
    while (node) {
        y += node.offsetTop || 0;
        node = node.offsetParent;
    }
    return y;
}, extend = ko.utils.extend;
(ko.bindingHandlers as any).clusterize = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var scrollElement = getScrollElement(element), elevation = getY(scrollElement) - getY(element), childNodes = cloneNodes(ko.virtualElements.childNodes(element)), wrapper = ensureWrapper(childNodes, mapForWrapping, element) || createElement(element), template = (function (node, childNodes) {
            ko.virtualElements.setDomNodeChildren(node, childNodes);
            return node;
        })(ensureWrapper(childNodes, mapForWrapping, element) || createElement(element), childNodes), clusterize, mapped = [], lastSource, probeSent = false, scrollHandler, ownerDocument = element.ownerDocument || document, eventArgs = function (event) { return [(element.attachEvent ? 'on' : '') + event, scrollHandler, false]; }, evaluator = ko.computed(function () {
            var options : any = extend({}, ko.unwrap(valueAccessor())), data = (options.rows || options.data || options), source = ko.unwrap(data), scrollTo = ko.unwrap(options.scrollTo || options.scroll_to);
            if (!clusterize) {
                var prototype = Clusterize.prototype, getRowsHeight = prototype.getRowsHeight, exploreEnvironment = prototype.exploreEnvironment, buggy = /\.ceil/.test(String(getRowsHeight));
                prototype.getRowsHeight = prototype.exploreEnvironment = function () { };
                if (scrollElement) {
                    var on = !!scrollElement.attachEvent, name = (on) ? 'attachEvent' : 'addEventListener', fn = document[name];
                    scrollElement[name] = function (eventName, handler) {
                        if (/scroll/i.test(eventName)) {
                            scrollHandler = handler;
                        }
                        return fn.apply(this, arguments);
                    };
                }
                clusterize = Clusterize(extend(extend({
                    keep_parity: false,
                    verify_change: true
                }, options), {
                        rows: [],
                        contentElem: element,
                        tag: getTagName(ko.utils.arrayFirst(template.childNodes, function (child) { return !!getTagName(child); })),
                        content_tag: getTagName(element),
                        scrollElem: scrollElement
                    }));
                if (scrollHandler) {
                    delete (scrollElement[name]);
                    fn.apply(scrollElement, eventArgs('wheel'));
                    fn.apply(document, eventArgs('scroll'));
                }
                prototype.getRowsHeight = getRowsHeight;
                prototype.exploreEnvironment = exploreEnvironment;
                if (buggy) {
                    clusterize.getRowsHeight = function () {
                        var ceil = [Math.ceil, Math.ceil = Math.floor][0];
                        return [getRowsHeight.apply(this, arguments), Math.ceil = ceil][0];
                    };
                }
                if (elevation && element.parentNode !== scrollElement) {
                    clusterize.getClusterNum = (function (getClusterNum) {
                        return function () {
                            var scroll_elem = [this.scroll_elem, this.scroll_elem = { scrollTop: (ownerDocument.documentElement && ownerDocument.documentElement.scrollTop || this.scroll_elem.scrollTop) + elevation }][0];
                            return [getClusterNum.apply(this, arguments), this.scroll_elem = scroll_elem][0];
                        };
                    })(clusterize.getClusterNum);
                    clusterize.renderExtraTag = (function (renderExtraTag) {
                        return function (className, height) {
                            if (className === 'top-space' || className === 'bottom-space') {
                                height += elevation;
                            }
                            return renderExtraTag.apply(this, arguments);
                        };
                    })(clusterize.renderExtraTag);
                    clusterize.update = (function (update) {
                        return function () {
                            elevation = getY(scrollElement) - getY(element);
                            return update.apply(this, arguments);
                        };
                    })(clusterize.update);
                }
                else if (scrollElement === ownerDocument.body && ownerDocument.documentElement) {
                    clusterize.getClusterNum = (function (getClusterNum) {
                        return function () {
                            return (this.scroll_elem === scrollElement && this.scroll_elem.scrollTop !== (ownerDocument.documentElement.scrollTop || scrollElement.scrollTop))
                                ? [this.scroll_elem = ownerDocument.documentElement, getClusterNum.apply(this, arguments), this.scroll_elem = scrollElement][1]
                                : getClusterNum.apply(this, arguments);
                        };
                    })(clusterize.getClusterNum);
                }
                clusterize.exploreEnvironment = function (rows) {
                    while (rows.length && (element.children || '').length <= 1) {
                        var nodes = arraySlice.call(template.cloneNode(true).childNodes);
                        hideNodes(nodes);
                        ko.utils.arrayForEach(nodes, function (node) {
                            return (element.firstChild)
                                ? element.insertBefore(node, element.firstChild)
                                : element.appendChild(node);
                        });
                    }
                    return exploreEnvironment.apply(this, arguments);
                };
                element.removeAttribute('tabindex');
                clusterize.options.loading_class = 'clusterize-loading';
                clusterize.renderExtraTag = function (className, height) {
                    var child = ((this.content_elem || {}).ownerDocument || document).createElement(this.options.tag), clusterizePrefix = 'clusterize-';
                    child.className = clusterizePrefix + 'extra-row ' + clusterizePrefix + className;
                    if (height) {
                        child.style.height = height + 'px';
                    }
                    return child;
                };
                clusterize.scrollTo = function (dataEntryOrIndex) {
                    var index = dataEntryOrIndex;
                    if (index !== +index) {
                        ko.utils.arrayFirst(mapped, <any>function (row, i) {
                            return ((row || {}).$data === dataEntryOrIndex) && (index = i) >= 0;
                        });
                    }
                    if (index >= 0 && index < mapped.length) {
                        var scrollTop = (this.getRowsHeight(mapped), this.getClusterNum(), this.options.scroll_top), maxHeight = scrollTop + scrollElement.offsetHeight, itemHeight = this.options.item_height, lowerY = itemHeight * (index - 0.5), upperY = itemHeight * (index + 1.5);
                        if (lowerY < scrollTop) {
                            scrollTop -= Math.floor((scrollTop - lowerY) / itemHeight) * itemHeight;
                        }
                        else if (maxHeight < upperY) {
                            scrollTop += Math.ceil((upperY - maxHeight) / itemHeight) * itemHeight;
                        }
                        if (this.options.scroll_top !== scrollTop) {
                            scrollElement.scrollTop = scrollTop;
                        }
                    }
                    else {
                        index = -1;
                    }
                    return index;
                };
                clusterize.insertToDOM = (function (insertToDOM) {
                    return function (rows) {
                        var _this = this;
                        var meta = this.generate(rows, this.getClusterNum()), populated = !ko.utils.arrayFirst(meta.rows, function (row : any) { return !row.nodeType && row.$data === undefined; }), toggleClass = function (toggle) { return ko.utils.toggleDomNodeCssClass(_this.scroll_elem, _this.options.loading_class, toggle); };
                        if (!populated) {
                            var isNode = function (entry) { return entry && entry.nodeType || 0; }, firstNode = isNode(meta.rows[0]), rowsCount = meta.rows.length - firstNode - isNode(meta.rows[meta.rows.length - 1]), offset = Math.max(0, meta.rows_above - (1 - firstNode)), limit = Math.min(rowsCount, rows.length - offset), range = ensureRange(rows, offset, limit);
                            toggleClass(!!range);
                            if (range && options.range) {
                                return !isArraySame(range, ko.unwrap(options.range) || []) && ko.tasks.schedule(function () { return options.range(range); });
                            }
                        }
                        toggleClass(false);
                        options.range && options.range(undefined);
                        return insertToDOM.apply(this, arguments);
                    };
                })(clusterize.insertToDOM);
                clusterize.generate = (function (generate) {
                    return function () {
                        var returnValue = generate.apply(this, arguments);
                        returnValue.rows.join = function () { return this; };
                        return returnValue;
                    };
                })(clusterize.generate);
                clusterize.dataChanged = function (data, cache) {
                    return !isArraySame(data, cache.data || []) && !!(cache.data = data.slice());
                };
                clusterize.html = function (rows) {
                    var contentElement = this.content_elem, boundData = this.bound_data || [], firstPass = null === ko.utils.arrayFirst(boundData, function (data: any) { return data && data.context; }), source = (rows instanceof Array) ? rows : [rows];
                    if (firstPass) {
                        ko.virtualElements.emptyNode(contentElement);
                        boundData.length = 0;
                    }
                    else if (boundData.length > source.length) {
                        ko.utils.arrayForEach(boundData.slice(source.length), function (data : any) {
                            data.nodes && ko.utils.arrayForEach(data.nodes, ko.removeNode);
                        });
                    }
                    this.bound_data = ko.utils.arrayMap(source, <any>function (meta : any, i) {
                        var data = boundData[i] || { nodes: false, context: false }, nodes = data.nodes, context = data.context;
                        if (meta) {
                            if (meta.hasOwnProperty('$data')) {
                                if (context) {
                                    context.$rawData(meta.$data);
                                    context.$index(meta.$index);
                                }
                                else {
                                    wrapper.innerHTML = '';
                                    ko.virtualElements.setDomNodeChildren(wrapper, arraySlice.call(template.cloneNode(true).childNodes));
                                    context = bindingContext.createChildContext(ko.observable(meta.$data), null, function ($context) {
                                        ($context.$index ? $context.$index : ($context.$index = ko.observable(meta.$index)))(meta.$index);
                                    });
                                    ko.applyBindingsToDescendants(context, wrapper);
                                    nodes = wrapper.childNodes;
                                }
                            }
                            else if (typeof (meta) === 'string') {
                                wrapper.innerHTML = meta;
                                nodes = wrapper.childNodes;
                                context = null;
                            }
                            else {
                                nodes = (meta instanceof Array) ? meta : meta.nodeType && [meta];
                                context = null;
                            }
                            if (nodes && nodes !== data.nodes) {
                                nodes = arraySlice.call(nodes);
                                (data.nodes)
                                    ? replaceDomNodes(data.nodes, nodes)
                                    : ko.utils.arrayForEach(nodes, function (node) { return contentElement.appendChild(node); });
                            }
                            return { context: context, nodes: nodes };
                        }
                    });
                };
            }
            if (!(options instanceof Array)) {
                ko.utils.objectForEach(options, function (key, value) {
                    if ((key in clusterize.options) && (value = ko.unwrap(value)) !== undefined) {
                        clusterize.options[key] = value;
                    }
                });
                if (scrollTo !== undefined) {
                    clusterize.scrollTo(scrollTo);
                }
            }
            if ((source instanceof Array) && !isArraySame(source, lastSource || [{}])) {
                clusterize.update(updateArray(mapped, lastSource = source.slice()));
                if (data !== source && source.length === 0 && options.range) {
                    !probeSent && ko.tasks.schedule(function () {
                        var size = (clusterize.options.rows_in_block * clusterize.options.blocks_in_cluster);
                        if (ko.unwrap(options.range)) {
                            try {
                                data(new Array(size));
                            }
                            catch (e) { }
                        }
                        else {
                            if (source.length) {
                                size = source.length;
                            }
                            options.range({ 0: 0, 1: size, length: 2, offset: 0, limit: size });
                        }
                        probeSent = true;
                    });
                }
                else {
                    probeSent = false;
                }
            }
        });
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            evaluator.dispose();
            if (clusterize && scrollElement) {
                var on = !!scrollElement.attachEvent, fn = document[(on) ? 'detachEvent' : 'removeEventListener'];
                fn.apply(scrollElement, eventArgs('wheel'));
                fn.apply(document, eventArgs('scroll'));
                clusterize.destroy(true);
            }
        });
        return { controlsDescendantBindings: true };
    }
};

