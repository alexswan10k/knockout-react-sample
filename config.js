System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "ts/index.js",
      "ts/KnockoutComponents/Generated/registergenerated.js",
      "github:knockout/knockout@3.4.0.js",
      "github:knockout/knockout@3.4.0/dist/knockout.debug.js",
      "ts/KnockoutComponents/KoReactBridge/KoReactBridge.js",
      "ts/ReactComponents/ReactLazy.js",
      "npm:react@15.1.0.js",
      "npm:react@15.1.0/react.js",
      "npm:react@15.1.0/lib/React.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.5.js",
      "npm:process@0.11.5/browser.js",
      "npm:fbjs@0.8.3/lib/warning.js",
      "npm:fbjs@0.8.3/lib/emptyFunction.js",
      "npm:react@15.1.0/lib/onlyChild.js",
      "npm:fbjs@0.8.3/lib/invariant.js",
      "npm:react@15.1.0/lib/ReactElement.js",
      "npm:react@15.1.0/lib/canDefineProperty.js",
      "npm:react@15.1.0/lib/ReactCurrentOwner.js",
      "npm:object-assign@4.1.0.js",
      "npm:object-assign@4.1.0/index.js",
      "npm:react@15.1.0/lib/ReactVersion.js",
      "npm:react@15.1.0/lib/ReactPropTypes.js",
      "npm:react@15.1.0/lib/getIteratorFn.js",
      "npm:react@15.1.0/lib/ReactPropTypeLocationNames.js",
      "npm:react@15.1.0/lib/ReactElementValidator.js",
      "npm:react@15.1.0/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.8.3/lib/keyMirror.js",
      "npm:react@15.1.0/lib/ReactDOMFactories.js",
      "npm:fbjs@0.8.3/lib/mapObject.js",
      "npm:react@15.1.0/lib/ReactClass.js",
      "npm:fbjs@0.8.3/lib/keyOf.js",
      "npm:fbjs@0.8.3/lib/emptyObject.js",
      "npm:react@15.1.0/lib/ReactNoopUpdateQueue.js",
      "npm:react@15.1.0/lib/ReactComponent.js",
      "npm:react@15.1.0/lib/ReactInstrumentation.js",
      "npm:react@15.1.0/lib/ReactDebugTool.js",
      "npm:react@15.1.0/lib/ReactComponentTreeDevtool.js",
      "npm:react@15.1.0/lib/ReactNativeOperationHistoryDevtool.js",
      "npm:react@15.1.0/lib/ReactInvalidSetStateWarningDevTool.js",
      "npm:fbjs@0.8.3/lib/performanceNow.js",
      "npm:fbjs@0.8.3/lib/performance.js",
      "npm:fbjs@0.8.3/lib/ExecutionEnvironment.js",
      "npm:react@15.1.0/lib/ReactChildren.js",
      "npm:react@15.1.0/lib/traverseAllChildren.js",
      "npm:react@15.1.0/lib/KeyEscapeUtils.js",
      "npm:react@15.1.0/lib/PooledClass.js",
      "ts/ReactComponents/ReactTemplate.js",
      "ts/ReactComponents/ReactList.js",
      "ts/ReactComponents/ComponentA.js",
      "npm:react-dom@15.1.0.js",
      "npm:react-dom@15.1.0/index.js",
      "npm:react@15.1.0/lib/ReactDOM.js",
      "npm:react@15.1.0/lib/renderSubtreeIntoContainer.js",
      "npm:react@15.1.0/lib/ReactMount.js",
      "npm:react@15.1.0/lib/shouldUpdateReactComponent.js",
      "npm:react@15.1.0/lib/setInnerHTML.js",
      "npm:react@15.1.0/lib/createMicrosoftUnsafeLocalFunction.js",
      "npm:react@15.1.0/lib/instantiateReactComponent.js",
      "npm:react@15.1.0/lib/ReactNativeComponent.js",
      "npm:react@15.1.0/lib/ReactEmptyComponent.js",
      "npm:react@15.1.0/lib/ReactCompositeComponent.js",
      "npm:react@15.1.0/lib/ReactUpdateQueue.js",
      "npm:react@15.1.0/lib/ReactUpdates.js",
      "npm:react@15.1.0/lib/Transaction.js",
      "npm:react@15.1.0/lib/ReactReconciler.js",
      "npm:react@15.1.0/lib/ReactRef.js",
      "npm:react@15.1.0/lib/ReactOwner.js",
      "npm:react@15.1.0/lib/ReactFeatureFlags.js",
      "npm:react@15.1.0/lib/CallbackQueue.js",
      "npm:react@15.1.0/lib/ReactInstanceMap.js",
      "npm:react@15.1.0/lib/ReactNodeTypes.js",
      "npm:react@15.1.0/lib/ReactErrorUtils.js",
      "npm:react@15.1.0/lib/ReactComponentEnvironment.js",
      "npm:react@15.1.0/lib/ReactMarkupChecksum.js",
      "npm:react@15.1.0/lib/adler32.js",
      "npm:react@15.1.0/lib/ReactDOMFeatureFlags.js",
      "npm:react@15.1.0/lib/ReactDOMContainerInfo.js",
      "npm:react@15.1.0/lib/validateDOMNesting.js",
      "npm:react@15.1.0/lib/ReactDOMComponentTree.js",
      "npm:react@15.1.0/lib/ReactDOMComponentFlags.js",
      "npm:react@15.1.0/lib/DOMProperty.js",
      "npm:react@15.1.0/lib/ReactBrowserEventEmitter.js",
      "npm:react@15.1.0/lib/isEventSupported.js",
      "npm:react@15.1.0/lib/getVendorPrefixedEventName.js",
      "npm:react@15.1.0/lib/ViewportMetrics.js",
      "npm:react@15.1.0/lib/ReactEventEmitterMixin.js",
      "npm:react@15.1.0/lib/EventPluginHub.js",
      "npm:react@15.1.0/lib/forEachAccumulated.js",
      "npm:react@15.1.0/lib/accumulateInto.js",
      "npm:react@15.1.0/lib/EventPluginUtils.js",
      "npm:react@15.1.0/lib/EventConstants.js",
      "npm:react@15.1.0/lib/EventPluginRegistry.js",
      "npm:react@15.1.0/lib/DOMLazyTree.js",
      "npm:react@15.1.0/lib/setTextContent.js",
      "npm:react@15.1.0/lib/escapeTextContentForBrowser.js",
      "npm:react@15.1.0/lib/DOMNamespaces.js",
      "npm:react@15.1.0/lib/getNativeComponentFromComposite.js",
      "npm:react@15.1.0/lib/findDOMNode.js",
      "npm:react@15.1.0/lib/ReactDefaultInjection.js",
      "npm:react@15.1.0/lib/SimpleEventPlugin.js",
      "npm:react@15.1.0/lib/getEventCharCode.js",
      "npm:react@15.1.0/lib/SyntheticWheelEvent.js",
      "npm:react@15.1.0/lib/SyntheticMouseEvent.js",
      "npm:react@15.1.0/lib/getEventModifierState.js",
      "npm:react@15.1.0/lib/SyntheticUIEvent.js",
      "npm:react@15.1.0/lib/getEventTarget.js",
      "npm:react@15.1.0/lib/SyntheticEvent.js",
      "npm:react@15.1.0/lib/SyntheticTransitionEvent.js",
      "npm:react@15.1.0/lib/SyntheticTouchEvent.js",
      "npm:react@15.1.0/lib/SyntheticDragEvent.js",
      "npm:react@15.1.0/lib/SyntheticKeyboardEvent.js",
      "npm:react@15.1.0/lib/getEventKey.js",
      "npm:react@15.1.0/lib/SyntheticFocusEvent.js",
      "npm:react@15.1.0/lib/SyntheticClipboardEvent.js",
      "npm:react@15.1.0/lib/SyntheticAnimationEvent.js",
      "npm:react@15.1.0/lib/EventPropagators.js",
      "npm:fbjs@0.8.3/lib/EventListener.js",
      "npm:react@15.1.0/lib/SelectEventPlugin.js",
      "npm:fbjs@0.8.3/lib/shallowEqual.js",
      "npm:react@15.1.0/lib/isTextInputElement.js",
      "npm:fbjs@0.8.3/lib/getActiveElement.js",
      "npm:react@15.1.0/lib/ReactInputSelection.js",
      "npm:fbjs@0.8.3/lib/focusNode.js",
      "npm:fbjs@0.8.3/lib/containsNode.js",
      "npm:fbjs@0.8.3/lib/isTextNode.js",
      "npm:fbjs@0.8.3/lib/isNode.js",
      "npm:react@15.1.0/lib/ReactDOMSelection.js",
      "npm:react@15.1.0/lib/getTextContentAccessor.js",
      "npm:react@15.1.0/lib/getNodeForCharacterOffset.js",
      "npm:react@15.1.0/lib/SVGDOMPropertyConfig.js",
      "npm:react@15.1.0/lib/ReactReconcileTransaction.js",
      "npm:react@15.1.0/lib/ReactInjection.js",
      "npm:react@15.1.0/lib/ReactEventListener.js",
      "npm:fbjs@0.8.3/lib/getUnboundedScrollPosition.js",
      "npm:react@15.1.0/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@15.1.0/lib/ReactDOMTextComponent.js",
      "npm:react@15.1.0/lib/DOMChildrenOperations.js",
      "npm:react@15.1.0/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@15.1.0/lib/Danger.js",
      "npm:fbjs@0.8.3/lib/getMarkupWrap.js",
      "npm:fbjs@0.8.3/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.8.3/lib/createArrayFromMixed.js",
      "npm:react@15.1.0/lib/ReactDOMTreeTraversal.js",
      "npm:react@15.1.0/lib/ReactDOMEmptyComponent.js",
      "npm:react@15.1.0/lib/ReactDOMComponent.js",
      "npm:react@15.1.0/lib/ReactServerRenderingTransaction.js",
      "npm:react@15.1.0/lib/ReactMultiChild.js",
      "npm:react@15.1.0/lib/flattenChildren.js",
      "npm:react@15.1.0/lib/ReactChildReconciler.js",
      "npm:react@15.1.0/lib/ReactDOMTextarea.js",
      "npm:react@15.1.0/lib/LinkedValueUtils.js",
      "npm:react@15.1.0/lib/DOMPropertyOperations.js",
      "npm:react@15.1.0/lib/quoteAttributeValueForBrowser.js",
      "npm:react@15.1.0/lib/ReactDOMInstrumentation.js",
      "npm:react@15.1.0/lib/ReactDOMDebugTool.js",
      "npm:react@15.1.0/lib/ReactDOMUnknownPropertyDevtool.js",
      "npm:react@15.1.0/lib/DisabledInputUtils.js",
      "npm:react@15.1.0/lib/ReactDOMSelect.js",
      "npm:react@15.1.0/lib/ReactDOMOption.js",
      "npm:react@15.1.0/lib/ReactDOMInput.js",
      "npm:react@15.1.0/lib/ReactDOMButton.js",
      "npm:react@15.1.0/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@15.1.0/lib/ReactDOMIDOperations.js",
      "npm:react@15.1.0/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.8.3/lib/memoizeStringOnly.js",
      "npm:fbjs@0.8.3/lib/hyphenateStyleName.js",
      "npm:fbjs@0.8.3/lib/hyphenate.js",
      "npm:react@15.1.0/lib/dangerousStyleValue.js",
      "npm:react@15.1.0/lib/CSSProperty.js",
      "npm:fbjs@0.8.3/lib/camelizeStyleName.js",
      "npm:fbjs@0.8.3/lib/camelize.js",
      "npm:react@15.1.0/lib/AutoFocusUtils.js",
      "npm:react@15.1.0/lib/HTMLDOMPropertyConfig.js",
      "npm:react@15.1.0/lib/EnterLeaveEventPlugin.js",
      "npm:react@15.1.0/lib/DefaultEventPluginOrder.js",
      "npm:react@15.1.0/lib/ChangeEventPlugin.js",
      "npm:react@15.1.0/lib/BeforeInputEventPlugin.js",
      "npm:react@15.1.0/lib/SyntheticInputEvent.js",
      "npm:react@15.1.0/lib/SyntheticCompositionEvent.js",
      "npm:react@15.1.0/lib/FallbackCompositionState.js",
      "npm:html-to-react@1.0.0.js",
      "npm:html-to-react@1.0.0/index.js",
      "npm:html-to-react@1.0.0/lib/process-node-definitions.js",
      "npm:ent@2.2.0.js",
      "npm:ent@2.2.0/index.js",
      "npm:ent@2.2.0/decode.js",
      "npm:ent@2.2.0/entities.json!github:systemjs/plugin-json@0.1.2.js",
      "github:jspm/nodelibs-punycode@0.1.0.js",
      "github:jspm/nodelibs-punycode@0.1.0/index.js",
      "npm:punycode@1.4.1.js",
      "npm:punycode@1.4.1/punycode.js",
      "npm:ent@2.2.0/encode.js",
      "npm:ent@2.2.0/reversed.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:lodash.includes@4.1.3.js",
      "npm:lodash.includes@4.1.3/index.js",
      "npm:lodash.keys@4.0.7.js",
      "npm:lodash.keys@4.0.7/index.js",
      "npm:lodash.foreach@4.3.0.js",
      "npm:lodash.foreach@4.3.0/index.js",
      "npm:lodash._baseiteratee@4.7.0.js",
      "npm:lodash._baseiteratee@4.7.0/index.js",
      "npm:lodash._stringtopath@4.8.0.js",
      "npm:lodash._stringtopath@4.8.0/index.js",
      "npm:lodash._basetostring@4.12.0.js",
      "npm:lodash._basetostring@4.12.0/index.js",
      "npm:lodash._baseeach@4.1.3.js",
      "npm:lodash._baseeach@4.1.3/index.js",
      "npm:lodash.camelcase@4.1.1.js",
      "npm:lodash.camelcase@4.1.1/index.js",
      "npm:lodash.words@4.1.1.js",
      "npm:lodash.words@4.1.1/index.js",
      "npm:lodash.tostring@4.1.3.js",
      "npm:lodash.tostring@4.1.3/index.js",
      "npm:lodash.deburr@4.0.0.js",
      "npm:lodash.deburr@4.0.0/index.js",
      "npm:lodash.capitalize@4.1.1.js",
      "npm:lodash.capitalize@4.1.1/index.js",
      "npm:lodash.upperfirst@4.2.0.js",
      "npm:lodash.upperfirst@4.2.0/index.js",
      "npm:lodash._baseslice@4.0.0.js",
      "npm:lodash._baseslice@4.0.0/index.js",
      "npm:html-to-react@1.0.0/lib/is-valid-node-definitions.js",
      "npm:html-to-react@1.0.0/lib/processing-instructions.js",
      "npm:html-to-react@1.0.0/lib/should-process-node-definitions.js",
      "npm:html-to-react@1.0.0/lib/parser.js",
      "npm:htmlparser2@3.9.1.js",
      "npm:htmlparser2@3.9.1/lib/index.js",
      "npm:htmlparser2@3.9.1/lib/CollectingHandler.js",
      "npm:domutils@1.5.1.js",
      "npm:domutils@1.5.1/index.js",
      "npm:domutils@1.5.1/lib/helpers.js",
      "npm:domutils@1.5.1/lib/legacy.js",
      "npm:domelementtype@1.3.0.js",
      "npm:domelementtype@1.3.0/index.js",
      "npm:domutils@1.5.1/lib/querying.js",
      "npm:domutils@1.5.1/lib/manipulation.js",
      "npm:domutils@1.5.1/lib/traversal.js",
      "npm:domutils@1.5.1/lib/stringify.js",
      "npm:dom-serializer@0.1.0.js",
      "npm:dom-serializer@0.1.0/index.js",
      "npm:entities@1.1.1.js",
      "npm:entities@1.1.1/index.js",
      "npm:entities@1.1.1/lib/decode.js",
      "npm:entities@1.1.1/lib/decode_codepoint.js",
      "npm:entities@1.1.1/maps/decode.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:entities@1.1.1/maps/xml.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:entities@1.1.1/maps/legacy.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:entities@1.1.1/maps/entities.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:entities@1.1.1/lib/encode.js",
      "npm:domelementtype@1.1.3.js",
      "npm:domelementtype@1.1.3/index.js",
      "npm:htmlparser2@3.9.1/lib/ProxyHandler.js",
      "npm:htmlparser2@3.9.1/lib/WritableStream.js",
      "npm:inherits@2.0.1.js",
      "npm:inherits@2.0.1/inherits_browser.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "github:jspm/nodelibs-string_decoder@0.1.0.js",
      "github:jspm/nodelibs-string_decoder@0.1.0/index.js",
      "npm:string_decoder@0.10.31.js",
      "npm:string_decoder@0.10.31/index.js",
      "github:jspm/nodelibs-stream@0.1.0.js",
      "github:jspm/nodelibs-stream@0.1.0/index.js",
      "npm:stream-browserify@1.0.0.js",
      "npm:stream-browserify@1.0.0/index.js",
      "npm:readable-stream@1.1.14/passthrough.js",
      "npm:readable-stream@1.1.14/lib/_stream_passthrough.js",
      "npm:core-util-is@1.0.2.js",
      "npm:core-util-is@1.0.2/lib/util.js",
      "npm:readable-stream@1.1.14/lib/_stream_transform.js",
      "npm:readable-stream@1.1.14/lib/_stream_duplex.js",
      "npm:readable-stream@1.1.14/lib/_stream_writable.js",
      "npm:readable-stream@1.1.14/lib/_stream_readable.js",
      "github:jspm/nodelibs-events@0.1.1.js",
      "github:jspm/nodelibs-events@0.1.1/index.js",
      "npm:events@1.0.2.js",
      "npm:events@1.0.2/events.js",
      "npm:isarray@0.0.1.js",
      "npm:isarray@0.0.1/index.js",
      "npm:readable-stream@1.1.14/transform.js",
      "npm:readable-stream@1.1.14/duplex.js",
      "npm:readable-stream@1.1.14/writable.js",
      "npm:readable-stream@1.1.14/readable.js",
      "npm:htmlparser2@3.9.1/lib/Parser.js",
      "npm:htmlparser2@3.9.1/lib/Tokenizer.js",
      "npm:htmlparser2@3.9.1/lib/Stream.js",
      "npm:htmlparser2@3.9.1/lib/FeedHandler.js",
      "npm:domhandler@2.3.0.js",
      "npm:domhandler@2.3.0/index.js",
      "npm:domhandler@2.3.0/lib/element.js",
      "npm:domhandler@2.3.0/lib/node.js",
      "npm:lodash.map@4.4.0.js",
      "npm:lodash.map@4.4.0/index.js",
      "npm:lodash.find@4.4.0.js",
      "npm:lodash.find@4.4.0/index.js",
      "npm:lodash._basefindindex@3.6.0.js",
      "npm:lodash._basefindindex@3.6.0/index.js",
      "npm:lodash._basefind@3.0.0.js",
      "npm:lodash._basefind@3.0.0/index.js",
      "npm:lodash.compact@3.0.1.js",
      "npm:lodash.compact@3.0.1/index.js"
    ]
  },

  map: {
    "html-to-react": "npm:html-to-react@1.0.0",
    "knockout": "github:knockout/knockout@3.4.0",
    "react": "npm:react@15.1.0",
    "react-dom": "npm:react-dom@15.1.0",
    "typescript": "npm:typescript@1.8.10",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.4.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:asap@2.0.4": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:dom-serializer@0.1.0": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "entities": "npm:entities@1.1.1"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:domhandler@2.3.0": {
      "domelementtype": "npm:domelementtype@1.3.0"
    },
    "npm:domutils@1.5.1": {
      "dom-serializer": "npm:dom-serializer@0.1.0",
      "domelementtype": "npm:domelementtype@1.3.0"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:ent@2.2.0": {
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:fbjs@0.8.3": {
      "core-js": "npm:core-js@1.2.6",
      "immutable": "npm:immutable@3.8.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:html-to-react@1.0.0": {
      "ent": "npm:ent@2.2.0",
      "htmlparser2": "npm:htmlparser2@3.9.1",
      "lodash.camelcase": "npm:lodash.camelcase@4.1.1",
      "lodash.compact": "npm:lodash.compact@3.0.1",
      "lodash.find": "npm:lodash.find@4.4.0",
      "lodash.foreach": "npm:lodash.foreach@4.3.0",
      "lodash.includes": "npm:lodash.includes@4.1.3",
      "lodash.map": "npm:lodash.map@4.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:htmlparser2@3.9.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "domelementtype": "npm:domelementtype@1.3.0",
      "domhandler": "npm:domhandler@2.3.0",
      "domutils": "npm:domutils@1.5.1",
      "entities": "npm:entities@1.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.5.3",
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "npm:lodash._baseiteratee@4.7.0": {
      "lodash._stringtopath": "npm:lodash._stringtopath@4.8.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._basetostring@4.12.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._stringtopath@4.8.0": {
      "lodash._basetostring": "npm:lodash._basetostring@4.12.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.camelcase@4.1.1": {
      "lodash.capitalize": "npm:lodash.capitalize@4.1.1",
      "lodash.deburr": "npm:lodash.deburr@4.0.0",
      "lodash.words": "npm:lodash.words@4.1.1"
    },
    "npm:lodash.capitalize@4.1.1": {
      "lodash.tostring": "npm:lodash.tostring@4.1.3",
      "lodash.upperfirst": "npm:lodash.upperfirst@4.2.0"
    },
    "npm:lodash.deburr@4.0.0": {
      "lodash.tostring": "npm:lodash.tostring@4.1.3"
    },
    "npm:lodash.find@4.4.0": {
      "lodash._baseeach": "npm:lodash._baseeach@4.1.3",
      "lodash._basefind": "npm:lodash._basefind@3.0.0",
      "lodash._basefindindex": "npm:lodash._basefindindex@3.6.0",
      "lodash._baseiteratee": "npm:lodash._baseiteratee@4.7.0"
    },
    "npm:lodash.foreach@4.3.0": {
      "lodash._baseeach": "npm:lodash._baseeach@4.1.3",
      "lodash._baseiteratee": "npm:lodash._baseiteratee@4.7.0"
    },
    "npm:lodash.includes@4.1.3": {
      "lodash.keys": "npm:lodash.keys@4.0.7",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.map@4.4.0": {
      "lodash._baseeach": "npm:lodash._baseeach@4.1.3",
      "lodash._baseiteratee": "npm:lodash._baseiteratee@4.7.0"
    },
    "npm:lodash.tostring@4.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.upperfirst@4.2.0": {
      "lodash._baseslice": "npm:lodash._baseslice@4.0.0",
      "lodash.tostring": "npm:lodash.tostring@4.1.3"
    },
    "npm:lodash.words@4.1.1": {
      "lodash.tostring": "npm:lodash.tostring@4.1.3"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:node-fetch@1.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:punycode@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@15.1.0": {
      "react": "npm:react@15.1.0"
    },
    "npm:react@15.1.0": {
      "fbjs": "npm:fbjs@0.8.3",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
