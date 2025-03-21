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
})({"bilY3":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "3b932fd81db5b64e";
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

},{}],"lRQYT":[function(require,module,exports,__globalThis) {
!function(t, e) {
    module.exports = e(require("92e5488426ccab57"));
}(this, function(t) {
    "use strict";
    var e = "undefined" != typeof window && "undefined" != typeof document, n = !!e && !!window.msCrypto, r = {
        passive: !0,
        capture: !0
    }, o = function() {
        return document.body;
    };
    function i(t, e, n) {
        if (Array.isArray(t)) {
            var r = t[e];
            return null == r ? Array.isArray(n) ? n[e] : n : r;
        }
        return t;
    }
    function a(t, e) {
        var n = ({}).toString.call(t);
        return 0 === n.indexOf("[object") && n.indexOf(e + "]") > -1;
    }
    function s(t, e) {
        return "function" == typeof t ? t.apply(void 0, e) : t;
    }
    function u(t, e) {
        var n;
        return 0 === e ? t : function(r) {
            clearTimeout(n), n = setTimeout(function() {
                t(r);
            }, e);
        };
    }
    function p(t, e) {
        var n = Object.assign({}, t);
        return e.forEach(function(t) {
            delete n[t];
        }), n;
    }
    function c(t) {
        return [].concat(t);
    }
    function f(t, e) {
        -1 === t.indexOf(e) && t.push(e);
    }
    function l(t) {
        return t.split("-")[0];
    }
    function d(t) {
        return [].slice.call(t);
    }
    function v(t) {
        return Object.keys(t).reduce(function(e, n) {
            return void 0 !== t[n] && (e[n] = t[n]), e;
        }, {});
    }
    function m() {
        return document.createElement("div");
    }
    function g(t) {
        return [
            "Element",
            "Fragment"
        ].some(function(e) {
            return a(t, e);
        });
    }
    function h(t) {
        return a(t, "MouseEvent");
    }
    function b(t) {
        return !(!t || !t._tippy || t._tippy.reference !== t);
    }
    function y(t) {
        return g(t) ? [
            t
        ] : function(t) {
            return a(t, "NodeList");
        }(t) ? d(t) : Array.isArray(t) ? t : d(document.querySelectorAll(t));
    }
    function w(t, e) {
        t.forEach(function(t) {
            t && (t.style.transitionDuration = e + "ms");
        });
    }
    function x(t, e) {
        t.forEach(function(t) {
            t && t.setAttribute("data-state", e);
        });
    }
    function E(t) {
        var e, n = c(t)[0];
        return null != n && null != (e = n.ownerDocument) && e.body ? n.ownerDocument : document;
    }
    function O(t, e, n) {
        var r = e + "EventListener";
        [
            "transitionend",
            "webkitTransitionEnd"
        ].forEach(function(e) {
            t[r](e, n);
        });
    }
    function C(t, e) {
        for(var n = e; n;){
            var r;
            if (t.contains(n)) return !0;
            n = null == n.getRootNode || null == (r = n.getRootNode()) ? void 0 : r.host;
        }
        return !1;
    }
    var T = {
        isTouch: !1
    }, A = 0;
    function L() {
        T.isTouch || (T.isTouch = !0, window.performance && document.addEventListener("mousemove", D));
    }
    function D() {
        var t = performance.now();
        t - A < 20 && (T.isTouch = !1, document.removeEventListener("mousemove", D)), A = t;
    }
    function k() {
        var t = document.activeElement;
        if (b(t)) {
            var e = t._tippy;
            t.blur && !e.state.isVisible && t.blur();
        }
    }
    var R = Object.assign({
        appendTo: o,
        aria: {
            content: "auto",
            expanded: "auto"
        },
        delay: 0,
        duration: [
            300,
            250
        ],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [
            0,
            10
        ],
        onAfterUpdate: function() {},
        onBeforeUpdate: function() {},
        onCreate: function() {},
        onDestroy: function() {},
        onHidden: function() {},
        onHide: function() {},
        onMount: function() {},
        onShow: function() {},
        onShown: function() {},
        onTrigger: function() {},
        onUntrigger: function() {},
        onClickOutside: function() {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null
    }, {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1
    }, {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999
    }), P = Object.keys(R);
    function j(t) {
        var e = (t.plugins || []).reduce(function(e, n) {
            var r, o = n.name, i = n.defaultValue;
            o && (e[o] = void 0 !== t[o] ? t[o] : null != (r = R[o]) ? r : i);
            return e;
        }, {});
        return Object.assign({}, t, e);
    }
    function M(t, e) {
        var n = Object.assign({}, e, {
            content: s(e.content, [
                t
            ])
        }, e.ignoreAttributes ? {} : function(t, e) {
            return (e ? Object.keys(j(Object.assign({}, R, {
                plugins: e
            }))) : P).reduce(function(e, n) {
                var r = (t.getAttribute("data-tippy-" + n) || "").trim();
                if (!r) return e;
                if ("content" === n) e[n] = r;
                else try {
                    e[n] = JSON.parse(r);
                } catch (t) {
                    e[n] = r;
                }
                return e;
            }, {});
        }(t, e.plugins));
        return n.aria = Object.assign({}, R.aria, n.aria), n.aria = {
            expanded: "auto" === n.aria.expanded ? e.interactive : n.aria.expanded,
            content: "auto" === n.aria.content ? e.interactive ? null : "describedby" : n.aria.content
        }, n;
    }
    function V(t, e) {
        t.innerHTML = e;
    }
    function I(t) {
        var e = m();
        return !0 === t ? e.className = "tippy-arrow" : (e.className = "tippy-svg-arrow", g(t) ? e.appendChild(t) : V(e, t)), e;
    }
    function S(t, e) {
        g(e.content) ? (V(t, ""), t.appendChild(e.content)) : "function" != typeof e.content && (e.allowHTML ? V(t, e.content) : t.textContent = e.content);
    }
    function B(t) {
        var e = t.firstElementChild, n = d(e.children);
        return {
            box: e,
            content: n.find(function(t) {
                return t.classList.contains("tippy-content");
            }),
            arrow: n.find(function(t) {
                return t.classList.contains("tippy-arrow") || t.classList.contains("tippy-svg-arrow");
            }),
            backdrop: n.find(function(t) {
                return t.classList.contains("tippy-backdrop");
            })
        };
    }
    function N(t) {
        var e = m(), n = m();
        n.className = "tippy-box", n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
        var r = m();
        function o(n, r) {
            var o = B(e), i = o.box, a = o.content, s = o.arrow;
            r.theme ? i.setAttribute("data-theme", r.theme) : i.removeAttribute("data-theme"), "string" == typeof r.animation ? i.setAttribute("data-animation", r.animation) : i.removeAttribute("data-animation"), r.inertia ? i.setAttribute("data-inertia", "") : i.removeAttribute("data-inertia"), i.style.maxWidth = "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth, r.role ? i.setAttribute("role", r.role) : i.removeAttribute("role"), n.content === r.content && n.allowHTML === r.allowHTML || S(a, t.props), r.arrow ? s ? n.arrow !== r.arrow && (i.removeChild(s), i.appendChild(I(r.arrow))) : i.appendChild(I(r.arrow)) : s && i.removeChild(s);
        }
        return r.className = "tippy-content", r.setAttribute("data-state", "hidden"), S(r, t.props), e.appendChild(n), n.appendChild(r), o(t.props, t.props), {
            popper: e,
            onUpdate: o
        };
    }
    N.$$tippy = !0;
    var H = 1, U = [], _ = [];
    function z(e, a) {
        var p, g, b, y, A, L, D, k, P = M(e, Object.assign({}, R, j(v(a)))), V = !1, I = !1, S = !1, N = !1, z = [], F = u(wt, P.interactiveDebounce), W = H++, X = (k = P.plugins).filter(function(t, e) {
            return k.indexOf(t) === e;
        }), Y = {
            id: W,
            reference: e,
            popper: m(),
            popperInstance: null,
            props: P,
            state: {
                isEnabled: !0,
                isVisible: !1,
                isDestroyed: !1,
                isMounted: !1,
                isShown: !1
            },
            plugins: X,
            clearDelayTimeouts: function() {
                clearTimeout(p), clearTimeout(g), cancelAnimationFrame(b);
            },
            setProps: function(t) {
                if (Y.state.isDestroyed) return;
                at("onBeforeUpdate", [
                    Y,
                    t
                ]), bt();
                var n = Y.props, r = M(e, Object.assign({}, n, v(t), {
                    ignoreAttributes: !0
                }));
                Y.props = r, ht(), n.interactiveDebounce !== r.interactiveDebounce && (pt(), F = u(wt, r.interactiveDebounce));
                n.triggerTarget && !r.triggerTarget ? c(n.triggerTarget).forEach(function(t) {
                    t.removeAttribute("aria-expanded");
                }) : r.triggerTarget && e.removeAttribute("aria-expanded");
                ut(), it(), J && J(n, r);
                Y.popperInstance && (Ct(), At().forEach(function(t) {
                    requestAnimationFrame(t._tippy.popperInstance.forceUpdate);
                }));
                at("onAfterUpdate", [
                    Y,
                    t
                ]);
            },
            setContent: function(t) {
                Y.setProps({
                    content: t
                });
            },
            show: function() {
                var t = Y.state.isVisible, e = Y.state.isDestroyed, n = !Y.state.isEnabled, r = T.isTouch && !Y.props.touch, a = i(Y.props.duration, 0, R.duration);
                if (t || e || n || r) return;
                if (et().hasAttribute("disabled")) return;
                if (at("onShow", [
                    Y
                ], !1), !1 === Y.props.onShow(Y)) return;
                Y.state.isVisible = !0, tt() && ($.style.visibility = "visible");
                it(), dt(), Y.state.isMounted || ($.style.transition = "none");
                if (tt()) {
                    var u = rt(), p = u.box, c = u.content;
                    w([
                        p,
                        c
                    ], 0);
                }
                L = function() {
                    var t;
                    if (Y.state.isVisible && !N) {
                        if (N = !0, $.offsetHeight, $.style.transition = Y.props.moveTransition, tt() && Y.props.animation) {
                            var e = rt(), n = e.box, r = e.content;
                            w([
                                n,
                                r
                            ], a), x([
                                n,
                                r
                            ], "visible");
                        }
                        st(), ut(), f(_, Y), null == (t = Y.popperInstance) || t.forceUpdate(), at("onMount", [
                            Y
                        ]), Y.props.animation && tt() && function(t, e) {
                            mt(t, e);
                        }(a, function() {
                            Y.state.isShown = !0, at("onShown", [
                                Y
                            ]);
                        });
                    }
                }, function() {
                    var t, e = Y.props.appendTo, n = et();
                    t = Y.props.interactive && e === o || "parent" === e ? n.parentNode : s(e, [
                        n
                    ]);
                    t.contains($) || t.appendChild($);
                    Y.state.isMounted = !0, Ct();
                }();
            },
            hide: function() {
                var t = !Y.state.isVisible, e = Y.state.isDestroyed, n = !Y.state.isEnabled, r = i(Y.props.duration, 1, R.duration);
                if (t || e || n) return;
                if (at("onHide", [
                    Y
                ], !1), !1 === Y.props.onHide(Y)) return;
                Y.state.isVisible = !1, Y.state.isShown = !1, N = !1, V = !1, tt() && ($.style.visibility = "hidden");
                if (pt(), vt(), it(!0), tt()) {
                    var o = rt(), a = o.box, s = o.content;
                    Y.props.animation && (w([
                        a,
                        s
                    ], r), x([
                        a,
                        s
                    ], "hidden"));
                }
                st(), ut(), Y.props.animation ? tt() && function(t, e) {
                    mt(t, function() {
                        !Y.state.isVisible && $.parentNode && $.parentNode.contains($) && e();
                    });
                }(r, Y.unmount) : Y.unmount();
            },
            hideWithInteractivity: function(t) {
                nt().addEventListener("mousemove", F), f(U, F), F(t);
            },
            enable: function() {
                Y.state.isEnabled = !0;
            },
            disable: function() {
                Y.hide(), Y.state.isEnabled = !1;
            },
            unmount: function() {
                Y.state.isVisible && Y.hide();
                if (!Y.state.isMounted) return;
                Tt(), At().forEach(function(t) {
                    t._tippy.unmount();
                }), $.parentNode && $.parentNode.removeChild($);
                _ = _.filter(function(t) {
                    return t !== Y;
                }), Y.state.isMounted = !1, at("onHidden", [
                    Y
                ]);
            },
            destroy: function() {
                if (Y.state.isDestroyed) return;
                Y.clearDelayTimeouts(), Y.unmount(), bt(), delete e._tippy, Y.state.isDestroyed = !0, at("onDestroy", [
                    Y
                ]);
            }
        };
        if (!P.render) return Y;
        var q = P.render(Y), $ = q.popper, J = q.onUpdate;
        $.setAttribute("data-tippy-root", ""), $.id = "tippy-" + Y.id, Y.popper = $, e._tippy = Y, $._tippy = Y;
        var G = X.map(function(t) {
            return t.fn(Y);
        }), K = e.hasAttribute("aria-expanded");
        return ht(), ut(), it(), at("onCreate", [
            Y
        ]), P.showOnCreate && Lt(), $.addEventListener("mouseenter", function() {
            Y.props.interactive && Y.state.isVisible && Y.clearDelayTimeouts();
        }), $.addEventListener("mouseleave", function() {
            Y.props.interactive && Y.props.trigger.indexOf("mouseenter") >= 0 && nt().addEventListener("mousemove", F);
        }), Y;
        function Q() {
            var t = Y.props.touch;
            return Array.isArray(t) ? t : [
                t,
                0
            ];
        }
        function Z() {
            return "hold" === Q()[0];
        }
        function tt() {
            var t;
            return !(null == (t = Y.props.render) || !t.$$tippy);
        }
        function et() {
            return D || e;
        }
        function nt() {
            var t = et().parentNode;
            return t ? E(t) : document;
        }
        function rt() {
            return B($);
        }
        function ot(t) {
            return Y.state.isMounted && !Y.state.isVisible || T.isTouch || y && "focus" === y.type ? 0 : i(Y.props.delay, t ? 0 : 1, R.delay);
        }
        function it(t) {
            void 0 === t && (t = !1), $.style.pointerEvents = Y.props.interactive && !t ? "" : "none", $.style.zIndex = "" + Y.props.zIndex;
        }
        function at(t, e, n) {
            var r;
            (void 0 === n && (n = !0), G.forEach(function(n) {
                n[t] && n[t].apply(n, e);
            }), n) && (r = Y.props)[t].apply(r, e);
        }
        function st() {
            var t = Y.props.aria;
            if (t.content) {
                var n = "aria-" + t.content, r = $.id;
                c(Y.props.triggerTarget || e).forEach(function(t) {
                    var e = t.getAttribute(n);
                    if (Y.state.isVisible) t.setAttribute(n, e ? e + " " + r : r);
                    else {
                        var o = e && e.replace(r, "").trim();
                        o ? t.setAttribute(n, o) : t.removeAttribute(n);
                    }
                });
            }
        }
        function ut() {
            !K && Y.props.aria.expanded && c(Y.props.triggerTarget || e).forEach(function(t) {
                Y.props.interactive ? t.setAttribute("aria-expanded", Y.state.isVisible && t === et() ? "true" : "false") : t.removeAttribute("aria-expanded");
            });
        }
        function pt() {
            nt().removeEventListener("mousemove", F), U = U.filter(function(t) {
                return t !== F;
            });
        }
        function ct(t) {
            if (!T.isTouch || !S && "mousedown" !== t.type) {
                var n = t.composedPath && t.composedPath()[0] || t.target;
                if (!Y.props.interactive || !C($, n)) {
                    if (c(Y.props.triggerTarget || e).some(function(t) {
                        return C(t, n);
                    })) {
                        if (T.isTouch) return;
                        if (Y.state.isVisible && Y.props.trigger.indexOf("click") >= 0) return;
                    } else at("onClickOutside", [
                        Y,
                        t
                    ]);
                    !0 === Y.props.hideOnClick && (Y.clearDelayTimeouts(), Y.hide(), I = !0, setTimeout(function() {
                        I = !1;
                    }), Y.state.isMounted || vt());
                }
            }
        }
        function ft() {
            S = !0;
        }
        function lt() {
            S = !1;
        }
        function dt() {
            var t = nt();
            t.addEventListener("mousedown", ct, !0), t.addEventListener("touchend", ct, r), t.addEventListener("touchstart", lt, r), t.addEventListener("touchmove", ft, r);
        }
        function vt() {
            var t = nt();
            t.removeEventListener("mousedown", ct, !0), t.removeEventListener("touchend", ct, r), t.removeEventListener("touchstart", lt, r), t.removeEventListener("touchmove", ft, r);
        }
        function mt(t, e) {
            var n = rt().box;
            function r(t) {
                t.target === n && (O(n, "remove", r), e());
            }
            if (0 === t) return e();
            O(n, "remove", A), O(n, "add", r), A = r;
        }
        function gt(t, n, r) {
            void 0 === r && (r = !1), c(Y.props.triggerTarget || e).forEach(function(e) {
                e.addEventListener(t, n, r), z.push({
                    node: e,
                    eventType: t,
                    handler: n,
                    options: r
                });
            });
        }
        function ht() {
            var t;
            Z() && (gt("touchstart", yt, {
                passive: !0
            }), gt("touchend", xt, {
                passive: !0
            })), (t = Y.props.trigger, t.split(/\s+/).filter(Boolean)).forEach(function(t) {
                if ("manual" !== t) switch(gt(t, yt), t){
                    case "mouseenter":
                        gt("mouseleave", xt);
                        break;
                    case "focus":
                        gt(n ? "focusout" : "blur", Et);
                        break;
                    case "focusin":
                        gt("focusout", Et);
                }
            });
        }
        function bt() {
            z.forEach(function(t) {
                var e = t.node, n = t.eventType, r = t.handler, o = t.options;
                e.removeEventListener(n, r, o);
            }), z = [];
        }
        function yt(t) {
            var e, n = !1;
            if (Y.state.isEnabled && !Ot(t) && !I) {
                var r = "focus" === (null == (e = y) ? void 0 : e.type);
                y = t, D = t.currentTarget, ut(), !Y.state.isVisible && h(t) && U.forEach(function(e) {
                    return e(t);
                }), "click" === t.type && (Y.props.trigger.indexOf("mouseenter") < 0 || V) && !1 !== Y.props.hideOnClick && Y.state.isVisible ? n = !0 : Lt(t), "click" === t.type && (V = !n), n && !r && Dt(t);
            }
        }
        function wt(t) {
            var e = t.target, n = et().contains(e) || $.contains(e);
            "mousemove" === t.type && n || function(t, e) {
                var n = e.clientX, r = e.clientY;
                return t.every(function(t) {
                    var e = t.popperRect, o = t.popperState, i = t.props.interactiveBorder, a = l(o.placement), s = o.modifiersData.offset;
                    if (!s) return !0;
                    var u = "bottom" === a ? s.top.y : 0, p = "top" === a ? s.bottom.y : 0, c = "right" === a ? s.left.x : 0, f = "left" === a ? s.right.x : 0, d = e.top - r + u > i, v = r - e.bottom - p > i, m = e.left - n + c > i, g = n - e.right - f > i;
                    return d || v || m || g;
                });
            }(At().concat($).map(function(t) {
                var e, n = null == (e = t._tippy.popperInstance) ? void 0 : e.state;
                return n ? {
                    popperRect: t.getBoundingClientRect(),
                    popperState: n,
                    props: P
                } : null;
            }).filter(Boolean), t) && (pt(), Dt(t));
        }
        function xt(t) {
            Ot(t) || Y.props.trigger.indexOf("click") >= 0 && V || (Y.props.interactive ? Y.hideWithInteractivity(t) : Dt(t));
        }
        function Et(t) {
            Y.props.trigger.indexOf("focusin") < 0 && t.target !== et() || Y.props.interactive && t.relatedTarget && $.contains(t.relatedTarget) || Dt(t);
        }
        function Ot(t) {
            return !!T.isTouch && Z() !== t.type.indexOf("touch") >= 0;
        }
        function Ct() {
            Tt();
            var n = Y.props, r = n.popperOptions, o = n.placement, i = n.offset, a = n.getReferenceClientRect, s = n.moveTransition, u = tt() ? B($).arrow : null, p = a ? {
                getBoundingClientRect: a,
                contextElement: a.contextElement || et()
            } : e, c = [
                {
                    name: "offset",
                    options: {
                        offset: i
                    }
                },
                {
                    name: "preventOverflow",
                    options: {
                        padding: {
                            top: 2,
                            bottom: 2,
                            left: 5,
                            right: 5
                        }
                    }
                },
                {
                    name: "flip",
                    options: {
                        padding: 5
                    }
                },
                {
                    name: "computeStyles",
                    options: {
                        adaptive: !s
                    }
                },
                {
                    name: "$$tippy",
                    enabled: !0,
                    phase: "beforeWrite",
                    requires: [
                        "computeStyles"
                    ],
                    fn: function(t) {
                        var e = t.state;
                        if (tt()) {
                            var n = rt().box;
                            [
                                "placement",
                                "reference-hidden",
                                "escaped"
                            ].forEach(function(t) {
                                "placement" === t ? n.setAttribute("data-placement", e.placement) : e.attributes.popper["data-popper-" + t] ? n.setAttribute("data-" + t, "") : n.removeAttribute("data-" + t);
                            }), e.attributes.popper = {};
                        }
                    }
                }
            ];
            tt() && u && c.push({
                name: "arrow",
                options: {
                    element: u,
                    padding: 3
                }
            }), c.push.apply(c, (null == r ? void 0 : r.modifiers) || []), Y.popperInstance = t.createPopper(p, $, Object.assign({}, r, {
                placement: o,
                onFirstUpdate: L,
                modifiers: c
            }));
        }
        function Tt() {
            Y.popperInstance && (Y.popperInstance.destroy(), Y.popperInstance = null);
        }
        function At() {
            return d($.querySelectorAll("[data-tippy-root]"));
        }
        function Lt(t) {
            Y.clearDelayTimeouts(), t && at("onTrigger", [
                Y,
                t
            ]), dt();
            var e = ot(!0), n = Q(), r = n[0], o = n[1];
            T.isTouch && "hold" === r && o && (e = o), e ? p = setTimeout(function() {
                Y.show();
            }, e) : Y.show();
        }
        function Dt(t) {
            if (Y.clearDelayTimeouts(), at("onUntrigger", [
                Y,
                t
            ]), Y.state.isVisible) {
                if (!(Y.props.trigger.indexOf("mouseenter") >= 0 && Y.props.trigger.indexOf("click") >= 0 && [
                    "mouseleave",
                    "mousemove"
                ].indexOf(t.type) >= 0 && V)) {
                    var e = ot(!1);
                    e ? g = setTimeout(function() {
                        Y.state.isVisible && Y.hide();
                    }, e) : b = requestAnimationFrame(function() {
                        Y.hide();
                    });
                }
            } else vt();
        }
    }
    function F(t, e) {
        void 0 === e && (e = {});
        var n = R.plugins.concat(e.plugins || []);
        document.addEventListener("touchstart", L, r), window.addEventListener("blur", k);
        var o = Object.assign({}, e, {
            plugins: n
        }), i = y(t).reduce(function(t, e) {
            var n = e && z(e, o);
            return n && t.push(n), t;
        }, []);
        return g(t) ? i[0] : i;
    }
    F.defaultProps = R, F.setDefaultProps = function(t) {
        Object.keys(t).forEach(function(e) {
            R[e] = t[e];
        });
    }, F.currentInput = T;
    var W = Object.assign({}, t.applyStyles, {
        effect: function(t) {
            var e = t.state, n = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow);
        }
    }), X = {
        mouseover: "mouseenter",
        focusin: "focus",
        click: "click"
    };
    var Y = {
        name: "animateFill",
        defaultValue: !1,
        fn: function(t) {
            var e;
            if (null == (e = t.props.render) || !e.$$tippy) return {};
            var n = B(t.popper), r = n.box, o = n.content, i = t.props.animateFill ? function() {
                var t = m();
                return t.className = "tippy-backdrop", x([
                    t
                ], "hidden"), t;
            }() : null;
            return {
                onCreate: function() {
                    i && (r.insertBefore(i, r.firstElementChild), r.setAttribute("data-animatefill", ""), r.style.overflow = "hidden", t.setProps({
                        arrow: !1,
                        animation: "shift-away"
                    }));
                },
                onMount: function() {
                    if (i) {
                        var t = r.style.transitionDuration, e = Number(t.replace("ms", ""));
                        o.style.transitionDelay = Math.round(e / 10) + "ms", i.style.transitionDuration = t, x([
                            i
                        ], "visible");
                    }
                },
                onShow: function() {
                    i && (i.style.transitionDuration = "0ms");
                },
                onHide: function() {
                    i && x([
                        i
                    ], "hidden");
                }
            };
        }
    };
    var q = {
        clientX: 0,
        clientY: 0
    }, $ = [];
    function J(t) {
        var e = t.clientX, n = t.clientY;
        q = {
            clientX: e,
            clientY: n
        };
    }
    var G = {
        name: "followCursor",
        defaultValue: !1,
        fn: function(t) {
            var e = t.reference, n = E(t.props.triggerTarget || e), r = !1, o = !1, i = !0, a = t.props;
            function s() {
                return "initial" === t.props.followCursor && t.state.isVisible;
            }
            function u() {
                n.addEventListener("mousemove", f);
            }
            function p() {
                n.removeEventListener("mousemove", f);
            }
            function c() {
                r = !0, t.setProps({
                    getReferenceClientRect: null
                }), r = !1;
            }
            function f(n) {
                var r = !n.target || e.contains(n.target), o = t.props.followCursor, i = n.clientX, a = n.clientY, s = e.getBoundingClientRect(), u = i - s.left, p = a - s.top;
                !r && t.props.interactive || t.setProps({
                    getReferenceClientRect: function() {
                        var t = e.getBoundingClientRect(), n = i, r = a;
                        "initial" === o && (n = t.left + u, r = t.top + p);
                        var s = "horizontal" === o ? t.top : r, c = "vertical" === o ? t.right : n, f = "horizontal" === o ? t.bottom : r, l = "vertical" === o ? t.left : n;
                        return {
                            width: c - l,
                            height: f - s,
                            top: s,
                            right: c,
                            bottom: f,
                            left: l
                        };
                    }
                });
            }
            function l() {
                t.props.followCursor && ($.push({
                    instance: t,
                    doc: n
                }), function(t) {
                    t.addEventListener("mousemove", J);
                }(n));
            }
            function d() {
                0 === ($ = $.filter(function(e) {
                    return e.instance !== t;
                })).filter(function(t) {
                    return t.doc === n;
                }).length && function(t) {
                    t.removeEventListener("mousemove", J);
                }(n);
            }
            return {
                onCreate: l,
                onDestroy: d,
                onBeforeUpdate: function() {
                    a = t.props;
                },
                onAfterUpdate: function(e, n) {
                    var i = n.followCursor;
                    r || void 0 !== i && a.followCursor !== i && (d(), i ? (l(), !t.state.isMounted || o || s() || u()) : (p(), c()));
                },
                onMount: function() {
                    t.props.followCursor && !o && (i && (f(q), i = !1), s() || u());
                },
                onTrigger: function(t, e) {
                    h(e) && (q = {
                        clientX: e.clientX,
                        clientY: e.clientY
                    }), o = "focus" === e.type;
                },
                onHidden: function() {
                    t.props.followCursor && (c(), p(), i = !0);
                }
            };
        }
    };
    var K = {
        name: "inlinePositioning",
        defaultValue: !1,
        fn: function(t) {
            var e, n = t.reference;
            var r = -1, o = !1, i = [], a = {
                name: "tippyInlinePositioning",
                enabled: !0,
                phase: "afterWrite",
                fn: function(o) {
                    var a = o.state;
                    t.props.inlinePositioning && (-1 !== i.indexOf(a.placement) && (i = []), e !== a.placement && -1 === i.indexOf(a.placement) && (i.push(a.placement), t.setProps({
                        getReferenceClientRect: function() {
                            return function(t) {
                                return function(t, e, n, r) {
                                    if (n.length < 2 || null === t) return e;
                                    if (2 === n.length && r >= 0 && n[0].left > n[1].right) return n[r] || e;
                                    switch(t){
                                        case "top":
                                        case "bottom":
                                            var o = n[0], i = n[n.length - 1], a = "top" === t, s = o.top, u = i.bottom, p = a ? o.left : i.left, c = a ? o.right : i.right;
                                            return {
                                                top: s,
                                                bottom: u,
                                                left: p,
                                                right: c,
                                                width: c - p,
                                                height: u - s
                                            };
                                        case "left":
                                        case "right":
                                            var f = Math.min.apply(Math, n.map(function(t) {
                                                return t.left;
                                            })), l = Math.max.apply(Math, n.map(function(t) {
                                                return t.right;
                                            })), d = n.filter(function(e) {
                                                return "left" === t ? e.left === f : e.right === l;
                                            }), v = d[0].top, m = d[d.length - 1].bottom;
                                            return {
                                                top: v,
                                                bottom: m,
                                                left: f,
                                                right: l,
                                                width: l - f,
                                                height: m - v
                                            };
                                        default:
                                            return e;
                                    }
                                }(l(t), n.getBoundingClientRect(), d(n.getClientRects()), r);
                            }(a.placement);
                        }
                    })), e = a.placement);
                }
            };
            function s() {
                var e;
                o || (e = function(t, e) {
                    var n;
                    return {
                        popperOptions: Object.assign({}, t.popperOptions, {
                            modifiers: [].concat(((null == (n = t.popperOptions) ? void 0 : n.modifiers) || []).filter(function(t) {
                                return t.name !== e.name;
                            }), [
                                e
                            ])
                        })
                    };
                }(t.props, a), o = !0, t.setProps(e), o = !1);
            }
            return {
                onCreate: s,
                onAfterUpdate: s,
                onTrigger: function(e, n) {
                    if (h(n)) {
                        var o = d(t.reference.getClientRects()), i = o.find(function(t) {
                            return t.left - 2 <= n.clientX && t.right + 2 >= n.clientX && t.top - 2 <= n.clientY && t.bottom + 2 >= n.clientY;
                        }), a = o.indexOf(i);
                        r = a > -1 ? a : r;
                    }
                },
                onHidden: function() {
                    r = -1;
                }
            };
        }
    };
    var Q = {
        name: "sticky",
        defaultValue: !1,
        fn: function(t) {
            var e = t.reference, n = t.popper;
            function r(e) {
                return !0 === t.props.sticky || t.props.sticky === e;
            }
            var o = null, i = null;
            function a() {
                var s = r("reference") ? (t.popperInstance ? t.popperInstance.state.elements.reference : e).getBoundingClientRect() : null, u = r("popper") ? n.getBoundingClientRect() : null;
                (s && Z(o, s) || u && Z(i, u)) && t.popperInstance && t.popperInstance.update(), o = s, i = u, t.state.isMounted && requestAnimationFrame(a);
            }
            return {
                onMount: function() {
                    t.props.sticky && a();
                }
            };
        }
    };
    function Z(t, e) {
        return !t || !e || t.top !== e.top || t.right !== e.right || t.bottom !== e.bottom || t.left !== e.left;
    }
    return e && function(t) {
        var e = document.createElement("style");
        e.textContent = t, e.setAttribute("data-tippy-stylesheet", "");
        var n = document.head, r = document.querySelector("head>style,head>link");
        r ? n.insertBefore(e, r) : n.appendChild(e);
    }('.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}'), F.setDefaultProps({
        plugins: [
            Y,
            G,
            K,
            Q
        ],
        render: N
    }), F.createSingleton = function(t, e) {
        var n;
        void 0 === e && (e = {});
        var r, o = t, i = [], a = [], s = e.overrides, u = [], f = !1;
        function l() {
            a = o.map(function(t) {
                return c(t.props.triggerTarget || t.reference);
            }).reduce(function(t, e) {
                return t.concat(e);
            }, []);
        }
        function d() {
            i = o.map(function(t) {
                return t.reference;
            });
        }
        function v(t) {
            o.forEach(function(e) {
                t ? e.enable() : e.disable();
            });
        }
        function g(t) {
            return o.map(function(e) {
                var n = e.setProps;
                return e.setProps = function(o) {
                    n(o), e.reference === r && t.setProps(o);
                }, function() {
                    e.setProps = n;
                };
            });
        }
        function h(t, e) {
            var n = a.indexOf(e);
            if (e !== r) {
                r = e;
                var u = (s || []).concat("content").reduce(function(t, e) {
                    return t[e] = o[n].props[e], t;
                }, {});
                t.setProps(Object.assign({}, u, {
                    getReferenceClientRect: "function" == typeof u.getReferenceClientRect ? u.getReferenceClientRect : function() {
                        var t;
                        return null == (t = i[n]) ? void 0 : t.getBoundingClientRect();
                    }
                }));
            }
        }
        v(!1), d(), l();
        var b = {
            fn: function() {
                return {
                    onDestroy: function() {
                        v(!0);
                    },
                    onHidden: function() {
                        r = null;
                    },
                    onClickOutside: function(t) {
                        t.props.showOnCreate && !f && (f = !0, r = null);
                    },
                    onShow: function(t) {
                        t.props.showOnCreate && !f && (f = !0, h(t, i[0]));
                    },
                    onTrigger: function(t, e) {
                        h(t, e.currentTarget);
                    }
                };
            }
        }, y = F(m(), Object.assign({}, p(e, [
            "overrides"
        ]), {
            plugins: [
                b
            ].concat(e.plugins || []),
            triggerTarget: a,
            popperOptions: Object.assign({}, e.popperOptions, {
                modifiers: [].concat((null == (n = e.popperOptions) ? void 0 : n.modifiers) || [], [
                    W
                ])
            })
        })), w = y.show;
        y.show = function(t) {
            if (w(), !r && null == t) return h(y, i[0]);
            if (!r || null != t) {
                if ("number" == typeof t) return i[t] && h(y, i[t]);
                if (o.indexOf(t) >= 0) {
                    var e = t.reference;
                    return h(y, e);
                }
                return i.indexOf(t) >= 0 ? h(y, t) : void 0;
            }
        }, y.showNext = function() {
            var t = i[0];
            if (!r) return y.show(0);
            var e = i.indexOf(r);
            y.show(i[e + 1] || t);
        }, y.showPrevious = function() {
            var t = i[i.length - 1];
            if (!r) return y.show(t);
            var e = i.indexOf(r), n = i[e - 1] || t;
            y.show(n);
        };
        var x = y.setProps;
        return y.setProps = function(t) {
            s = t.overrides || s, x(t);
        }, y.setInstances = function(t) {
            v(!0), u.forEach(function(t) {
                return t();
            }), o = t, v(!1), d(), l(), u = g(y), y.setProps({
                triggerTarget: a
            });
        }, u = g(y), y;
    }, F.delegate = function(t, e) {
        var n = [], o = [], i = !1, a = e.target, s = p(e, [
            "target"
        ]), u = Object.assign({}, s, {
            trigger: "manual",
            touch: !1
        }), f = Object.assign({
            touch: R.touch
        }, s, {
            showOnCreate: !0
        }), l = F(t, u);
        function d(t) {
            if (t.target && !i) {
                var n = t.target.closest(a);
                if (n) {
                    var r = n.getAttribute("data-tippy-trigger") || e.trigger || R.trigger;
                    if (!n._tippy && !("touchstart" === t.type && "boolean" == typeof f.touch || "touchstart" !== t.type && r.indexOf(X[t.type]) < 0)) {
                        var s = F(n, f);
                        s && (o = o.concat(s));
                    }
                }
            }
        }
        function v(t, e, r, o) {
            void 0 === o && (o = !1), t.addEventListener(e, r, o), n.push({
                node: t,
                eventType: e,
                handler: r,
                options: o
            });
        }
        return c(l).forEach(function(t) {
            var e = t.destroy, a = t.enable, s = t.disable;
            t.destroy = function(t) {
                void 0 === t && (t = !0), t && o.forEach(function(t) {
                    t.destroy();
                }), o = [], n.forEach(function(t) {
                    var e = t.node, n = t.eventType, r = t.handler, o = t.options;
                    e.removeEventListener(n, r, o);
                }), n = [], e();
            }, t.enable = function() {
                a(), o.forEach(function(t) {
                    return t.enable();
                }), i = !1;
            }, t.disable = function() {
                s(), o.forEach(function(t) {
                    return t.disable();
                }), i = !0;
            }, function(t) {
                var e = t.reference;
                v(e, "touchstart", d, r), v(e, "mouseover", d), v(e, "focusin", d), v(e, "click", d);
            }(t);
        }), l;
    }, F.hideAll = function(t) {
        var e = void 0 === t ? {} : t, n = e.exclude, r = e.duration;
        _.forEach(function(t) {
            var e = !1;
            if (n && (e = b(n) ? t.reference === n : t.popper === n.popper), !e) {
                var o = t.props.duration;
                t.setProps({
                    duration: r
                }), t.hide(), t.state.isDestroyed || t.setProps({
                    duration: o
                });
            }
        });
    }, F.roundArrow = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>', F;
}); //# sourceMappingURL=tippy-bundle.umd.min.js.map

},{"92e5488426ccab57":"k6y2B"}]},["bilY3","lRQYT"], "lRQYT", "parcelRequire94c2")

//# sourceMappingURL=catalog.1db5b64e.js.map
