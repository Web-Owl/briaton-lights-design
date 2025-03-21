// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"3E3yu":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5687d663397c74d2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            if (err.message) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"agb61":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _initJs = require("./components/Init.js");
var _initJsDefault = parcelHelpers.interopDefault(_initJs);
window.addEventListener('DOMContentLoaded', function() {
    (0, _initJsDefault.default)();
});

},{"./components/Init.js":"dBYvM","@parcel/transformer-js/src/esmodule-helpers.js":"9mtWf"}],"dBYvM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>init);
var _productJs = require("./Product.js");
var _productJsDefault = parcelHelpers.interopDefault(_productJs);
var _productListJs = require("./ProductList.js");
var _productListJsDefault = parcelHelpers.interopDefault(_productListJs);
var _accordionJs = require("./Accordion.js");
var _accordionJsDefault = parcelHelpers.interopDefault(_accordionJs);
var _apiJs = require("../api.js");
var _apiJsDefault = parcelHelpers.interopDefault(_apiJs);
var _burgerMenuJs = require("./BurgerMenu.js");
var _burgerMenuJsDefault = parcelHelpers.interopDefault(_burgerMenuJs);
var _locationCityJs = require("./LocationCity.js");
var _sliderJs = require("./Slider.js");
var _sliderJsDefault = parcelHelpers.interopDefault(_sliderJs);
var _validateJs = require("./Validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
const productList = new (0, _productListJsDefault.default)();
async function init() {
    const cardsData = await (0, _apiJsDefault.default)();
    const mainMenuEl = document.querySelector('.main-menu');
    const headerCatalogBtn = document.querySelector('.header__catalog-btn');
    const mainMenuCloseBtn = document.querySelector('.main-menu__close');
    const locationCityBtn = document.querySelector('.location__city');
    const locationsList = document.querySelectorAll('.location__sublink');
    const locationCityNameEl = document.querySelector('.location__city-name');
    const catalogListEl = document.querySelector('.catalog__list');
    const catalogCheckboxes = document.querySelectorAll('.catalog-form__item-col .custom-checkbox__field');
    const catalogSelect = document.querySelector('.catalog__sort-select');
    const catalogRadioButtons = document.querySelectorAll('.catalog-form__item-row .custom-radio__field');
    const headerUserBtn = document.querySelector('.header__user-btn');
    const basketEl = document.querySelector('.basket');
    const accordionItems = document.querySelectorAll('.accordion__element');
    mainMenuEl.addEventListener('click', function(e) {
        const target = e.target;
        if (target === mainMenuEl) (0, _burgerMenuJsDefault.default)(mainMenuEl);
    });
    headerCatalogBtn.addEventListener('click', function() {
        (0, _burgerMenuJsDefault.default)(mainMenuEl);
    });
    mainMenuCloseBtn.addEventListener('click', function() {
        (0, _burgerMenuJsDefault.default)(mainMenuEl);
    });
    locationCityBtn.addEventListener('click', function() {
        (0, _locationCityJs.toggleLocationCity)(locationCityBtn);
    });
    locationsList.forEach((link)=>{
        link.addEventListener('click', function() {
            (0, _locationCityJs.updateCityName)(locationCityNameEl, link.textContent);
            (0, _locationCityJs.toggleLocationCity)(locationCityBtn);
        });
    });
    renderList(catalogListEl, cardsData);
    getProductsCount(catalogCheckboxes, cardsData);
    catalogCheckboxes.forEach((input)=>input.addEventListener('change', function() {
            filterProducts(catalogCheckboxes, catalogSelect, catalogRadioButtons, catalogListEl);
            productList.currentPage = 1;
        }));
    catalogSelect.addEventListener('change', function() {
        filterProducts(catalogCheckboxes, catalogSelect, catalogRadioButtons, catalogListEl);
    });
    catalogRadioButtons.forEach((radio)=>{
        radio.addEventListener('change', function() {
            filterProducts(catalogCheckboxes, catalogSelect, catalogRadioButtons, catalogListEl);
            productList.currentPage = 1;
        });
    });
    headerUserBtn.addEventListener('click', function() {
        basketEl.classList.toggle('basket--active');
    });
    accordionItems.forEach((accordion)=>{
        new (0, _accordionJsDefault.default)(accordion);
    });
    (0, _sliderJsDefault.default)(cardsData);
    (0, _validateJsDefault.default)();
}
async function renderList(containerEl, products = null) {
    containerEl.innerHTML = '';
    products = products.map((product)=>new (0, _productJsDefault.default)(product));
    products.forEach((product)=>{
        containerEl.appendChild(product.getElement());
    });
    productList._products = [];
    products.forEach((productData)=>{
        const product = new (0, _productJsDefault.default)(productData);
        productList.addProduct(product);
    });
}
async function getProductsCount(inputsList, products) {
    let count = 0;
    inputsList.forEach((input)=>{
        count = products.filter((product)=>product.type.includes(input.value)).length;
        const countSpanEl = input.nextElementSibling.querySelector('.custom-checkbox__count');
        countSpanEl.textContent = count;
    });
}
async function filterProducts(catalogCheckboxes, catalogSelect, catalogRadioButtons, catalogListEl) {
    const selectedCategories = [];
    const sortBy = catalogSelect.value;
    let availability = null;
    catalogCheckboxes.forEach((checkbox)=>{
        if (checkbox.checked) selectedCategories.push(checkbox.value);
    });
    catalogRadioButtons.forEach((radio)=>{
        if (radio.checked) availability = radio.value;
    });
    let products = await (0, _apiJsDefault.default)();
    if (selectedCategories.length > 0) products = products.filter((product)=>selectedCategories.some((category)=>product.type.includes(category)));
    if (availability === 'instock') products = products.filter((product)=>Object.values(product.availability).some((count)=>count > 0));
    switch(sortBy){
        case 'price-min':
            products.sort((a, b)=>a.price.new - b.price.new);
            break;
        case 'price-max':
            products.sort((a, b)=>b.price.new - a.price.new);
            break;
        case 'rating-max':
            products.sort((a, b)=>b.rating - a.rating);
            break;
        default:
            break;
    }
    renderList(catalogListEl, products);
}

},{"./Product.js":"cNvrn","./ProductList.js":"fKdOK","./Accordion.js":"bTB5i","../api.js":"jDkOf","./BurgerMenu.js":"k3GAy","./LocationCity.js":"1KPVx","./Slider.js":"dHMNT","./Validate.js":"7Irsr","@parcel/transformer-js/src/esmodule-helpers.js":"9mtWf"}],"cNvrn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basketJs = require("./Basket.js");
var _basketJsDefault = parcelHelpers.interopDefault(_basketJs);
const basket = new (0, _basketJsDefault.default)();
class Product {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
        this.image = data.image;
        this.availability = data.availability;
        this.type = data.type;
        this.rating = data.rating;
        this.goodsOfDay = data.goodsOfDay;
    }
    getElement() {
        const liItem = document.createElement('li');
        liItem.classList.add('catalog__item');
        this.cardEl = document.createElement('div');
        this.cardEl.classList.add('product-card');
        this.cardVisualEl = document.createElement('div');
        this.cardVisualEl.classList.add('product-card__visual');
        this.cardImage = document.createElement('img');
        this.cardImage.classList.add('product-card__img');
        this.cardImage.src = this.image;
        this.cardImage.width = '290';
        this.cardImage.height = '436';
        this.cardImage.alt = `\u{418}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} ${this.name}`;
        this.cardMoreEl = document.createElement('div');
        this.cardMoreEl.classList.add('product-card__more');
        this.cardLinkBucket = document.createElement('a');
        this.cardLinkBucket.classList.add('product-card__link', 'btn', 'btn--icon');
        this.cardLinkBucket.setAttribute('data-id', this.id);
        this.cardLinkBucket.href = '#';
        this.cardLinkBucket.innerHTML = `
      <span class="btn__text">\u{412} \u{43A}\u{43E}\u{440}\u{437}\u{438}\u{43D}\u{443}</span>
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="images/sprite.svg#icon-basket"></use>
      </svg>
    `;
        this.cardLinkBucket.addEventListener('click', (e)=>{
            e.preventDefault();
            basket.addItem(this);
        });
        this.cardLinkMore = document.createElement('a');
        this.cardLinkMore.classList.add('product-card__link', 'btn', 'btn--secondary');
        this.cardLinkMore.href = '#';
        this.cardBtnTextMoreEl = document.createElement('span');
        this.cardBtnTextMoreEl.classList.add('btn__text');
        this.cardBtnTextMoreEl.textContent = "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435";
        this.cardInfoEl = document.createElement('div');
        this.cardInfoEl.classList.add('product-card__info');
        this.cardTitleEl = document.createElement('h2');
        this.cardTitleEl.classList.add('product-card__title');
        this.cardTitleEl.textContent = this.name;
        this.cardOldPriceEl = document.createElement('div');
        this.cardOldPriceEl.classList.add('product-card__old');
        this.cardOldPriceNumberEl = document.createElement('span');
        this.cardOldPriceNumberEl.classList.add('product-card__old-number');
        this.cardOldPriceNumberEl.textContent = this.price.old;
        this.cardOldPriceAddEl = document.createElement('span');
        this.cardOldPriceAddEl.classList.add('product-card__old-add');
        this.cardOldPriceAddEl.textContent = "\u20BD";
        this.cardOldPriceEl.append(this.cardOldPriceNumberEl, this.cardOldPriceAddEl);
        this.cardPriceEl = document.createElement('div');
        this.cardPriceEl.classList.add('product-card__price');
        this.cardPriceNumberEl = document.createElement('span');
        this.cardPriceNumberEl.classList.add('product-card__price-number');
        this.cardPriceNumberEl.textContent = this.price.new;
        this.cardPriceAddEl = document.createElement('span');
        this.cardPriceAddEl.classList.add('product-card__price-add');
        this.cardPriceAddEl.textContent = "\u20BD";
        this.cardPriceEl.append(this.cardPriceNumberEl, this.cardPriceAddEl);
        this.cardTooltipEl = document.createElement('div');
        this.cardTooltipEl.classList.add('product-card__tooltip', 'tooltip');
        this.cardTooltipBtnEl = document.createElement('button');
        this.cardTooltipBtnEl.classList.add('tooltip__btn');
        this.cardTooltipBtnEl.setAttribute('aria-label', "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443");
        this.cardTooltipBtnEl.setAttribute('type', 'button');
        this.cardTooltipBtnEl.innerHTML = `
      <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
        <use xlink:href="images/sprite.svg#icon-i"></use>
      </svg>
    `;
        this.cardTooltipContentEl = document.createElement('div');
        this.cardTooltipContentEl.classList.add('tooltip__content');
        this.cardTooltipTextEl = document.createElement('span');
        this.cardTooltipTextEl.classList.add('tooltip__text');
        this.cardTooltipTextEl.textContent = "\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430 \u043F\u043E \u0433\u043E\u0440\u043E\u0434\u0430\u043C:";
        this.cardTooltipListEl = document.createElement('ul');
        this.cardTooltipListEl.classList.add('tooltip__list');
        this.citiesArr = {
            moscow: "\u041C\u043E\u0441\u043A\u0432\u0430",
            orenburg: "\u041E\u0440\u0435\u043D\u0431\u0443\u0440\u0433",
            saintPetersburg: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"
        };
        for(const property in this.citiesArr){
            const liItem = document.createElement('li');
            liItem.classList.add('tooltip__item');
            const spanEl = document.createElement('span');
            spanEl.classList.add('tooltip__text');
            spanEl.textContent = this.citiesArr[property] + ': ';
            const countEl = document.createElement('span');
            countEl.classList.add('tooltip__count');
            countEl.textContent = this.availability[property];
            spanEl.appendChild(countEl);
            liItem.appendChild(spanEl);
            this.cardTooltipListEl.appendChild(liItem);
        }
        this.cardTooltipContentEl.append(this.cardTooltipTextEl, this.cardTooltipListEl);
        this.cardTooltipEl.append(this.cardTooltipBtnEl, this.cardTooltipContentEl);
        this.cardLinkMore.appendChild(this.cardBtnTextMoreEl);
        this.cardMoreEl.append(this.cardLinkBucket, this.cardLinkMore);
        this.cardVisualEl.append(this.cardImage, this.cardMoreEl);
        this.cardInfoEl.append(this.cardTitleEl, this.cardOldPriceEl, this.cardPriceEl, this.cardTooltipEl);
        this.cardEl.append(this.cardVisualEl, this.cardInfoEl);
        liItem.appendChild(this.cardEl);
        tippy(this.cardTooltipBtnEl, {
            theme: 'lightwhite',
            content (reference) {
                return reference.nextElementSibling.innerHTML;
            },
            allowHTML: true
        });
        return liItem;
    }
}
exports.default = Product;

},{"./Basket.js":"7DzZs","@parcel/transformer-js/src/esmodule-helpers.js":"9mtWf"}],"7DzZs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Basket {
    _items = [];
    constructor(){
        this.headerCountEl = document.querySelector('.header__user-count');
        this.headerCountEl.textContent = this.itemCount;
        this.headerBasketEl = document.querySelector('.header__basket');
        this.basketEmptyBlock = document.querySelector('.basket__empty-block');
        this.basketLinkEl = document.querySelector('.basket__link');
        this.updateEmptyBasket();
    }
    addItem(product) {
        this._items.push(product);
        this.addCount += 1;
        this.updateUI();
    }
    removeItem(id) {
        const index = this._items.findIndex((item)=>item.id === id);
        if (index !== -1) this._items.splice(index, 1);
        this.addCount -= 1;
        this.updateUI();
    }
    updateUI() {
        const basketList = document.querySelector('.basket__list');
        basketList.innerHTML = '';
        this._items.forEach((item)=>{
            const liEl = document.createElement('li');
            liEl.classList.add('basket__item');
            const imgWrapEl = document.createElement('div');
            imgWrapEl.classList.add('basket__img');
            const imgEl = document.createElement('img');
            imgEl.src = item.image;
            imgEl.alt = "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430 " + item.name;
            imgEl.height = '60';
            imgEl.width = '60';
            imgWrapEl.appendChild(imgEl);
            const nameEl = document.createElement('span');
            nameEl.classList.add('basket__name');
            nameEl.textContent = item.name;
            const priceEl = document.createElement('span');
            priceEl.classList.add('basket__price');
            priceEl.textContent = item.price.new;
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('basket__close');
            removeBtn.type = 'button';
            removeBtn.ariaLabel = "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B";
            removeBtn.innerHTML = `
        <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
          <use xlink:href="images/sprite.svg#icon-close"></use>
        </svg>
      `;
            removeBtn.addEventListener('click', ()=>{
                this.removeItem(item.id);
            });
            liEl.append(imgWrapEl, nameEl, priceEl, removeBtn);
            basketList.appendChild(liEl);
        });
        this.headerCountEl.textContent = this.itemCount;
        this.updateEmptyBasket();
    }
    updateEmptyBasket() {
        if (this.itemCount > 0) {
            this.basketEmptyBlock.style.display = 'none';
            this.basketLinkEl.style.display = 'flex';
        } else {
            this.basketEmptyBlock.style.display = '';
            this.basketLinkEl.style.display = 'none';
        }
    }
    get itemCount() {
        return this._items.length;
    }
}
exports.default = Basket;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9mtWf"}],"9mtWf":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fKdOK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ProductList {
    _currentPage = 1;
    constructor(){
        this._products = [];
        this._itemsPerPage = 6;
        this._paginationContainer = document.querySelector('.catalog__pagination');
        this._productsContainer = document.querySelector('.catalog__list');
    }
    addProduct(product) {
        this._products.push(product);
        this.renderProducts();
    }
    renderProducts() {
        const start = (this._currentPage - 1) * this._itemsPerPage;
        const end = start + this._itemsPerPage;
        const productsToRender = this._products.slice(start, end);
        this._productsContainer.innerHTML = '';
        productsToRender.forEach((product)=>{
            const productHTML = product.getElement();
            this._productsContainer.appendChild(productHTML);
        });
        this.renderPagination();
    }
    renderPagination() {
        const totalPages = Math.ceil(this._products.length / this._itemsPerPage);
        this._paginationContainer.innerHTML = '';
        for(let i = 1; i <= totalPages; i++){
            const liEl = document.createElement('li');
            liEl.classList.add('catalog__pagination-item');
            const pageButton = document.createElement('button');
            pageButton.classList.add('catalog__pagination-link');
            pageButton.textContent = i;
            pageButton.addEventListener('click', ()=>{
                this._currentPage = i;
                this.renderProducts();
            });
            if (i === this._currentPage) pageButton.classList.add('active');
            liEl.appendChild(pageButton);
            this._paginationContainer.appendChild(liEl);
        }
        if (this._products.length <= this._itemsPerPage) this._paginationContainer.style.display = 'none';
        else this._paginationContainer.style.display = 'flex';
    }
    set currentPage(value) {
        this._currentPage = value;
    }
    get currentPage() {
        return this._currentPage;
    }
}
exports.default = ProductList;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9mtWf"}],"bTB5i":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Accordion {
    static _activeEl = null;
    constructor(element){
        this.element = element;
        this.btn = element.querySelector('.accordion__btn');
        this.isOpen = false;
        this.btn.addEventListener('click', ()=>{
            this.toggle();
        });
    }
    toggle() {
        if (this.isOpen) this.close();
        else this.open();
    }
    open() {
        if (Accordion._activeEl) Accordion._activeEl.close();
        this.btn.classList.add('accordion__btn--active');
        this.isOpen = true;
        Accordion._activeEl = this;
    }
    close() {
        this.btn.classList.remove('accordion__btn--active');
        this.isOpen = false;
        if (Accordion._activeEl === this) Accordion._activeEl = null;
    }
}
exports.default = Accordion;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9mtWf"}],"jDkOf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getProducts);
const BASE_URL = './data/data.json';
async function getProducts() {
    try {
        const response = await fetch(BASE_URL);
        return await response.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9mtWf"}],"k3GAy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toggleMenu);
function toggleMenu(menuEl) {
    menuEl.classList.toggle('main-menu--active');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9mtWf"}],"1KPVx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleLocationCity", ()=>toggleLocationCity);
parcelHelpers.export(exports, "updateCityName", ()=>updateCityName);
function toggleLocationCity(cityBtn) {
    cityBtn.classList.toggle('location__city--active');
}
function updateCityName(locationCityNameEl, cityName) {
    locationCityNameEl.textContent = cityName;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9mtWf"}],"dHMNT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>initSlider);
async function initSlider(cardsData) {
    const products = await cardsData;
    const dayProductsList = products.filter((item)=>item.goodsOfDay === true);
    const dayProductsListEl = document.querySelector('.day-products__list');
    renderList(dayProductsListEl, dayProductsList);
    setSlider();
}
function renderList(containerEl, list = []) {
    containerEl.innerHTML = '';
    list.forEach((item)=>{
        const liItem = document.createElement('li');
        liItem.classList.add('day-products__item', 'swiper-slide');
        const cardEl = document.createElement('div');
        cardEl.classList.add('product-card', 'product-card--small');
        const cardVisualEl = document.createElement('div');
        cardVisualEl.classList.add('product-card__visual');
        const cardImage = document.createElement('img');
        cardImage.classList.add('product-card__img');
        cardImage.src = item.image;
        cardImage.width = '290';
        cardImage.height = '344';
        cardImage.alt = `\u{418}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} ${item.name}`;
        const cardMoreEl = document.createElement('div');
        cardMoreEl.classList.add('product-card__more');
        const cardLinkMore = document.createElement('a');
        cardLinkMore.classList.add('product-card__link', 'btn', 'btn--secondary');
        cardLinkMore.href = '#';
        const cardBtnTextMoreEl = document.createElement('span');
        cardBtnTextMoreEl.classList.add('btn__text');
        cardBtnTextMoreEl.textContent = "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435";
        const cardInfoEl = document.createElement('div');
        cardInfoEl.classList.add('product-card__info');
        const cardTitleEl = document.createElement('h2');
        cardTitleEl.classList.add('product-card__title');
        cardTitleEl.textContent = item.name;
        const cardOldPriceEl = document.createElement('div');
        cardOldPriceEl.classList.add('product-card__old');
        const cardOldPriceNumberEl = document.createElement('span');
        cardOldPriceNumberEl.classList.add('product-card__old-number');
        cardOldPriceNumberEl.textContent = item.price.old;
        const cardOldPriceAddEl = document.createElement('span');
        cardOldPriceAddEl.classList.add('product-card__old-add');
        cardOldPriceAddEl.textContent = "\u20BD";
        cardOldPriceEl.append(cardOldPriceNumberEl, cardOldPriceAddEl);
        const cardPriceEl = document.createElement('div');
        cardPriceEl.classList.add('product-card__price');
        const cardPriceNumberEl = document.createElement('span');
        cardPriceNumberEl.classList.add('product-card__price-number');
        cardPriceNumberEl.textContent = item.price.new;
        const cardPriceAddEl = document.createElement('span');
        cardPriceAddEl.classList.add('product-card__price-add');
        cardPriceAddEl.textContent = "\u20BD";
        cardPriceEl.append(cardPriceNumberEl, cardPriceAddEl);
        const cardTooltipEl = document.createElement('div');
        cardTooltipEl.classList.add('product-card__tooltip', 'tooltip');
        const cardTooltipBtnEl = document.createElement('button');
        cardTooltipBtnEl.classList.add('tooltip__btn');
        cardTooltipBtnEl.setAttribute('aria-label', "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443");
        cardTooltipBtnEl.setAttribute('type', 'button');
        cardTooltipBtnEl.innerHTML = `
      <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
        <use xlink:href="images/sprite.svg#icon-i"></use>
      </svg>
    `;
        const cardTooltipContentEl = document.createElement('div');
        cardTooltipContentEl.classList.add('tooltip__content');
        const cardTooltipTextEl = document.createElement('span');
        cardTooltipTextEl.classList.add('tooltip__text');
        cardTooltipTextEl.textContent = "\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430 \u043F\u043E \u0433\u043E\u0440\u043E\u0434\u0430\u043C:";
        const cardTooltipListEl = document.createElement('ul');
        cardTooltipListEl.classList.add('tooltip__list');
        const citiesArr = {
            moscow: "\u041C\u043E\u0441\u043A\u0432\u0430",
            orenbrg: "\u041E\u0440\u0435\u043D\u0431\u0443\u0440\u0433",
            saintPetersburg: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"
        };
        for(const property in citiesArr){
            const liItem = document.createElement('li');
            liItem.classList.add('tooltip__item');
            const spanEl = document.createElement('span');
            spanEl.classList.add('tooltip__text');
            spanEl.textContent = citiesArr[property] + ':';
            const countEl = document.createElement('span');
            countEl.classList.add('tooltip__count');
            countEl.textContent = item.availability[property];
            spanEl.appendChild(countEl);
            liItem.appendChild(spanEl);
            cardTooltipListEl.appendChild(liItem);
        }
        cardTooltipContentEl.append(cardTooltipTextEl, cardTooltipListEl);
        cardTooltipEl.append(cardTooltipBtnEl, cardTooltipContentEl);
        cardLinkMore.appendChild(cardBtnTextMoreEl);
        cardMoreEl.append(cardLinkMore);
        cardVisualEl.append(cardImage, cardMoreEl);
        cardInfoEl.append(cardTitleEl, cardOldPriceEl, cardPriceEl, cardTooltipEl);
        cardEl.append(cardVisualEl, cardInfoEl);
        liItem.appendChild(cardEl);
        containerEl.appendChild(liItem);
    });
}
function setSlider() {
    return new Swiper('.day-products__slider', {
        navigation: {
            nextEl: '.day-products__navigation-btn--next',
            prevEl: '.day-products__navigation-btn--prev'
        },
        spaceBetween: 33,
        slidesPerView: 4
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9mtWf"}],"7Irsr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>initValidate);
const formEl = document.querySelector('.questions__form');
const validate = new window.JustValidate(formEl);
function initValidate() {
    validate.addField('#name', [
        {
            rule: 'required',
            errorMessage: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F"
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: "\u0418\u043C\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"
        },
        {
            rule: 'maxLength',
            value: 20,
            errorMessage: "\u0418\u043C\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 20 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
        }
    ]).addField('#email', [
        {
            rule: 'required',
            errorMessage: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443"
        },
        {
            rule: 'email',
            errorMessage: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441"
        }
    ]).addField('#agree', [
        {
            rule: 'required',
            errorMessage: "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445"
        }
    ]).onSuccess(async (event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const response = await fetch('https://httpbin.org/post', {
                method: 'POST',
                body: formData
            });
            formEl.reset();
            if (!response.ok) throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0434\u0430\u043D\u043D\u044B\u0445");
            showModal("\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0437\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435!");
        } catch (error) {
            showModal("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435");
        }
    });
}
function showModal(title) {
    const modal = document.createElement('div');
    modal.className = 'message';
    modal.innerHTML = `
    <div class="message__content">
      <button class="message__close">&times;</button>
      <h2>${title}</h2>
    </div>
  `;
    document.body.appendChild(modal);
    modal.querySelector('.message__close').addEventListener('click', ()=>{
        modal.remove();
    });
    modal.addEventListener('click', (e)=>{
        if (e.target === modal) modal.remove();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9mtWf"}]},["3E3yu","agb61"], "agb61", "parcelRequire94c2")

//# sourceMappingURL=catalog.397c74d2.js.map
