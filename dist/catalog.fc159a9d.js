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
})({"4xzb5":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ca99703ffc159a9d";
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

},{}],"2OK9T":[function(require,module,exports,__globalThis) {
var __defProp = Object.defineProperty, __defNormalProp = (e, i, t)=>i in e ? __defProp(e, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[i] = t, __publicField = (e, i, t)=>(__defNormalProp(e, "symbol" != typeof i ? i + "" : i, t), t);
!function(e, i) {
    module.exports = i();
}(this, function() {
    "use strict";
    const e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, i = /^-?[0-9]\d*$/, t = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/, s = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, l = (e)=>"string" != typeof e || "" === e;
    var r = ((e)=>(e.Required = "required", e.Email = "email", e.MinLength = "minLength", e.MaxLength = "maxLength", e.Password = "password", e.Number = "number", e.Integer = "integer", e.MaxNumber = "maxNumber", e.MinNumber = "minNumber", e.StrongPassword = "strongPassword", e.CustomRegexp = "customRegexp", e.MinFilesCount = "minFilesCount", e.MaxFilesCount = "maxFilesCount", e.Files = "files", e))(r || {}), o = ((e)=>(e.Required = "required", e))(o || {}), a = ((e)=>(e.Label = "label", e.LabelArrow = "labelArrow", e))(a || {});
    const n = [
        {
            key: r.Required,
            dict: {
                en: "The field is required"
            }
        },
        {
            key: r.Email,
            dict: {
                en: "Email has invalid format"
            }
        },
        {
            key: r.MaxLength,
            dict: {
                en: "The field must contain a maximum of :value characters"
            }
        },
        {
            key: r.MinLength,
            dict: {
                en: "The field must contain a minimum of :value characters"
            }
        },
        {
            key: r.Password,
            dict: {
                en: "Password must contain minimum eight characters, at least one letter and one number"
            }
        },
        {
            key: r.StrongPassword,
            dict: {
                en: "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
            }
        },
        {
            key: r.Number,
            dict: {
                en: "Value should be a number"
            }
        },
        {
            key: r.MaxNumber,
            dict: {
                en: "Number should be less or equal than :value"
            }
        },
        {
            key: r.MinNumber,
            dict: {
                en: "Number should be more or equal than :value"
            }
        },
        {
            key: r.MinFilesCount,
            dict: {
                en: "Files count should be more or equal than :value"
            }
        },
        {
            key: r.MaxFilesCount,
            dict: {
                en: "Files count should be less or equal than :value"
            }
        },
        {
            key: r.Files,
            dict: {
                en: "Uploaded files have one or several invalid properties (extension/size/type etc)."
            }
        }
    ], d = (e)=>"object" == typeof e && null !== e && "then" in e && "function" == typeof e.then, c = (e)=>Array.isArray(e) ? e.filter((e)=>e.length > 0) : "string" == typeof e && e.trim() ? [
            ...e.split(" ").filter((e)=>e.length > 0)
        ] : [], u = (e)=>e instanceof Element || e instanceof HTMLDocument, h = {
        errorFieldStyle: {
            color: "#b81111",
            border: "1px solid #B81111"
        },
        errorFieldCssClass: "just-validate-error-field",
        successFieldCssClass: "just-validate-success-field",
        errorLabelStyle: {
            color: "#b81111"
        },
        errorLabelCssClass: "just-validate-error-label",
        successLabelCssClass: "just-validate-success-label",
        focusInvalidField: !0,
        lockForm: !0,
        testingMode: !1,
        validateBeforeSubmitting: !1,
        submitFormAutomatically: !1
    };
    return class {
        constructor(e, i, t){
            __publicField(this, "form", null), __publicField(this, "fields", {}), __publicField(this, "groupFields", {}), __publicField(this, "errors", {}), __publicField(this, "isValid", !1), __publicField(this, "isSubmitted", !1), __publicField(this, "globalConfig", h), __publicField(this, "errorLabels", {}), __publicField(this, "successLabels", {}), __publicField(this, "eventListeners", []), __publicField(this, "dictLocale", n), __publicField(this, "currentLocale", "en"), __publicField(this, "customStyleTags", {}), __publicField(this, "onSuccessCallback"), __publicField(this, "onFailCallback"), __publicField(this, "onValidateCallback"), __publicField(this, "tooltips", []), __publicField(this, "lastScrollPosition"), __publicField(this, "isScrollTick"), __publicField(this, "fieldIds", new Map), __publicField(this, "getKeyByFieldSelector", (e)=>this.fieldIds.get(e)), __publicField(this, "getFieldSelectorByKey", (e)=>{
                for (const [i, t] of this.fieldIds)if (e === t) return i;
            }), __publicField(this, "getCompatibleFields", ()=>{
                const e = {};
                return Object.keys(this.fields).forEach((i)=>{
                    let t = i;
                    const s = this.getFieldSelectorByKey(i);
                    "string" == typeof s && (t = s), e[t] = {
                        ...this.fields[i]
                    };
                }), e;
            }), __publicField(this, "setKeyByFieldSelector", (e)=>{
                if (this.fieldIds.has(e)) return this.fieldIds.get(e);
                const i = String(this.fieldIds.size + 1);
                return this.fieldIds.set(e, i), i;
            }), __publicField(this, "refreshAllTooltips", ()=>{
                this.tooltips.forEach((e)=>{
                    e.refresh();
                });
            }), __publicField(this, "handleDocumentScroll", ()=>{
                this.lastScrollPosition = window.scrollY, this.isScrollTick || (window.requestAnimationFrame(()=>{
                    this.refreshAllTooltips(), this.isScrollTick = !1;
                }), this.isScrollTick = !0);
            }), __publicField(this, "formSubmitHandler", (e)=>{
                e.preventDefault(), this.isSubmitted = !0, this.validateHandler(e);
            }), __publicField(this, "handleFieldChange", (e)=>{
                let i;
                for(const t in this.fields)if (this.fields[t].elem === e) {
                    i = t;
                    break;
                }
                i && (this.fields[i].touched = !0, this.validateField(i, !0));
            }), __publicField(this, "handleGroupChange", (e)=>{
                let i;
                for(const t in this.groupFields)if (this.groupFields[t].elems.find((i)=>i === e)) {
                    i = t;
                    break;
                }
                i && (this.groupFields[i].touched = !0, this.validateGroup(i, !0));
            }), __publicField(this, "handlerChange", (e)=>{
                e.target && (this.handleFieldChange(e.target), this.handleGroupChange(e.target), this.renderErrors());
            }), this.initialize(e, i, t);
        }
        initialize(e, i, t) {
            if (this.form = null, this.errors = {}, this.isValid = !1, this.isSubmitted = !1, this.globalConfig = h, this.errorLabels = {}, this.successLabels = {}, this.eventListeners = [], this.customStyleTags = {}, this.tooltips = [], this.currentLocale = "en", "string" == typeof e) {
                const i = document.querySelector(e);
                if (!i) throw Error(`Form with ${e} selector not found! Please check the form selector`);
                this.setForm(i);
            } else {
                if (!(e instanceof HTMLFormElement)) throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");
                this.setForm(e);
            }
            if (this.globalConfig = {
                ...h,
                ...i
            }, t && (this.dictLocale = [
                ...t,
                ...n
            ]), this.isTooltip()) {
                const e = document.createElement("style");
                e.textContent = ".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}", this.customStyleTags[a.Label] = document.head.appendChild(e), this.addListener("scroll", document, this.handleDocumentScroll);
            }
        }
        getLocalisedString(e, i, t) {
            var s;
            const l = null != t ? t : e;
            let o = null == (s = this.dictLocale.find((e)=>e.key === l)) ? void 0 : s.dict[this.currentLocale];
            if (o || t && (o = t), o && void 0 !== i) switch(e){
                case r.MaxLength:
                case r.MinLength:
                case r.MaxNumber:
                case r.MinNumber:
                case r.MinFilesCount:
                case r.MaxFilesCount:
                    o = o.replace(":value", String(i));
            }
            return o || t || "Value is incorrect";
        }
        getFieldErrorMessage(e, i) {
            const t = "function" == typeof e.errorMessage ? e.errorMessage(this.getElemValue(i), this.fields) : e.errorMessage;
            return this.getLocalisedString(e.rule, e.value, t);
        }
        getFieldSuccessMessage(e, i) {
            const t = "function" == typeof e ? e(this.getElemValue(i), this.fields) : e;
            return this.getLocalisedString(void 0, void 0, t);
        }
        getGroupErrorMessage(e) {
            return this.getLocalisedString(e.rule, void 0, e.errorMessage);
        }
        getGroupSuccessMessage(e) {
            if (e.successMessage) return this.getLocalisedString(void 0, void 0, e.successMessage);
        }
        setFieldInvalid(e, i) {
            this.fields[e].isValid = !1, this.fields[e].errorMessage = this.getFieldErrorMessage(i, this.fields[e].elem);
        }
        setFieldValid(e, i) {
            this.fields[e].isValid = !0, void 0 !== i && (this.fields[e].successMessage = this.getFieldSuccessMessage(i, this.fields[e].elem));
        }
        setGroupInvalid(e, i) {
            this.groupFields[e].isValid = !1, this.groupFields[e].errorMessage = this.getGroupErrorMessage(i);
        }
        setGroupValid(e, i) {
            this.groupFields[e].isValid = !0, this.groupFields[e].successMessage = this.getGroupSuccessMessage(i);
        }
        getElemValue(e) {
            switch(e.type){
                case "checkbox":
                    return e.checked;
                case "file":
                    return e.files;
                default:
                    return e.value;
            }
        }
        validateGroupRule(e, i, t) {
            if (t.rule === o.Required) i.every((e)=>!e.checked) ? this.setGroupInvalid(e, t) : this.setGroupValid(e, t);
        }
        validateFieldRule(o, a, n, c = !1) {
            const u = n.value, h = this.getElemValue(a);
            if (n.plugin) n.plugin(h, this.getCompatibleFields()) || this.setFieldInvalid(o, n);
            else {
                switch(n.rule){
                    case r.Required:
                        ((e)=>{
                            let i = e;
                            return "string" == typeof e && (i = e.trim()), !i;
                        })(h) && this.setFieldInvalid(o, n);
                        break;
                    case r.Email:
                        if (l(h)) break;
                        f = h, e.test(f) || this.setFieldInvalid(o, n);
                        break;
                    case r.MaxLength:
                        if (void 0 === u) {
                            console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(o, n);
                            break;
                        }
                        if ("number" != typeof u) {
                            console.error(`Value for ${n.rule} rule for [${o}] should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
                            break;
                        }
                        if (l(h)) break;
                        ((e, i)=>e.length > i)(h, u) && this.setFieldInvalid(o, n);
                        break;
                    case r.MinLength:
                        if (void 0 === u) {
                            console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(o, n);
                            break;
                        }
                        if ("number" != typeof u) {
                            console.error(`Value for ${n.rule} rule for [${o}] should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
                            break;
                        }
                        if (l(h)) break;
                        ((e, i)=>e.length < i)(h, u) && this.setFieldInvalid(o, n);
                        break;
                    case r.Password:
                        if (l(h)) break;
                        ((e)=>t.test(e))(h) || this.setFieldInvalid(o, n);
                        break;
                    case r.StrongPassword:
                        if (l(h)) break;
                        ((e)=>s.test(e))(h) || this.setFieldInvalid(o, n);
                        break;
                    case r.Number:
                        if (l(h)) break;
                        ((e)=>"string" == typeof e && !isNaN(+e) && !isNaN(parseFloat(e)))(h) || this.setFieldInvalid(o, n);
                        break;
                    case r.Integer:
                        if (l(h)) break;
                        ((e)=>i.test(e))(h) || this.setFieldInvalid(o, n);
                        break;
                    case r.MaxNumber:
                        {
                            if (void 0 === u) {
                                console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(o, n);
                                break;
                            }
                            if ("number" != typeof u) {
                                console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
                                break;
                            }
                            if (l(h)) break;
                            const e = +h;
                            (Number.isNaN(e) || ((e, i)=>e > i)(e, u)) && this.setFieldInvalid(o, n);
                            break;
                        }
                    case r.MinNumber:
                        {
                            if (void 0 === u) {
                                console.error(`Value for ${n.rule} rule for [${o}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(o, n);
                                break;
                            }
                            if ("number" != typeof u) {
                                console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
                                break;
                            }
                            if (l(h)) break;
                            const e = +h;
                            (Number.isNaN(e) || ((e, i)=>e < i)(e, u)) && this.setFieldInvalid(o, n);
                            break;
                        }
                    case r.CustomRegexp:
                        {
                            if (void 0 === u) return console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`), void this.setFieldInvalid(o, n);
                            let e;
                            try {
                                e = new RegExp(u);
                            } catch (b) {
                                console.error(`Value for ${n.rule} rule for [${o}] should be a valid regexp. This field will be always invalid.`), this.setFieldInvalid(o, n);
                                break;
                            }
                            const i = String(h);
                            "" === i || e.test(i) || this.setFieldInvalid(o, n);
                            break;
                        }
                    case r.MinFilesCount:
                        if (void 0 === u) {
                            console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(o, n);
                            break;
                        }
                        if ("number" != typeof u) {
                            console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
                            break;
                        }
                        if (Number.isFinite(null == h ? void 0 : h.length) && h.length < u) {
                            this.setFieldInvalid(o, n);
                            break;
                        }
                        break;
                    case r.MaxFilesCount:
                        if (void 0 === u) {
                            console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(o, n);
                            break;
                        }
                        if ("number" != typeof u) {
                            console.error(`Value for ${n.rule} rule for [${o}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(o, n);
                            break;
                        }
                        if (Number.isFinite(null == h ? void 0 : h.length) && h.length > u) {
                            this.setFieldInvalid(o, n);
                            break;
                        }
                        break;
                    case r.Files:
                        {
                            if (void 0 === u) return console.error(`Value for ${n.rule} rule for [${o}] field is not defined. This field will be always invalid.`), void this.setFieldInvalid(o, n);
                            if ("object" != typeof u) return console.error(`Value for ${n.rule} rule for [${o}] field should be an object. This field will be always invalid.`), void this.setFieldInvalid(o, n);
                            const e = u.files;
                            if ("object" != typeof e) return console.error(`Value for ${n.rule} rule for [${o}] field should be an object with files array. This field will be always invalid.`), void this.setFieldInvalid(o, n);
                            const i = (e, i)=>{
                                const t = Number.isFinite(i.minSize) && e.size < i.minSize, s = Number.isFinite(i.maxSize) && e.size > i.maxSize, l = Array.isArray(i.names) && !i.names.includes(e.name), r = Array.isArray(i.extensions) && !i.extensions.includes(e.name.split(".")[e.name.split(".").length - 1]), o = Array.isArray(i.types) && !i.types.includes(e.type);
                                return t || s || l || r || o;
                            };
                            if ("object" == typeof h && null !== h) for(let t = 0, s = h.length; t < s; ++t){
                                const s = h.item(t);
                                if (!s) {
                                    this.setFieldInvalid(o, n);
                                    break;
                                }
                                if (i(s, e)) {
                                    this.setFieldInvalid(o, n);
                                    break;
                                }
                            }
                            break;
                        }
                    default:
                        {
                            if ("function" != typeof n.validator) return console.error(`Validator for custom rule for [${o}] field should be a function. This field will be always invalid.`), void this.setFieldInvalid(o, n);
                            const e = n.validator(h, this.getCompatibleFields());
                            if ("boolean" != typeof e && "function" != typeof e && console.error(`Validator return value for [${o}] field should be boolean or function. It will be cast to boolean.`), "function" == typeof e) {
                                if (!c) {
                                    this.fields[o].asyncCheckPending = !1;
                                    const i = e();
                                    return d(i) ? i.then((e)=>{
                                        e || this.setFieldInvalid(o, n);
                                    }).catch(()=>{
                                        this.setFieldInvalid(o, n);
                                    }) : (console.error(`Validator function for custom rule for [${o}] field should return a Promise. This field will be always invalid.`), void this.setFieldInvalid(o, n));
                                }
                                this.fields[o].asyncCheckPending = !0;
                            }
                            e || this.setFieldInvalid(o, n);
                        }
                }
                var f;
            }
        }
        isFormValid() {
            let e = !0;
            for(let i = 0, t = Object.values(this.fields).length; i < t; ++i){
                const t = Object.values(this.fields)[i];
                if (void 0 === t.isValid) {
                    e = void 0;
                    break;
                }
                if (!1 === t.isValid) {
                    e = !1;
                    break;
                }
            }
            for(let i = 0, t = Object.values(this.groupFields).length; i < t; ++i){
                const t = Object.values(this.groupFields)[i];
                if (void 0 === t.isValid) {
                    e = void 0;
                    break;
                }
                if (!1 === t.isValid) {
                    e = !1;
                    break;
                }
            }
            return e;
        }
        validateField(e, i = !1) {
            var t;
            const s = this.fields[e];
            s.isValid = !0;
            const l = [];
            return [
                ...s.rules
            ].reverse().forEach((t)=>{
                const r = this.validateFieldRule(e, s.elem, t, i);
                d(r) && l.push(r);
            }), s.isValid && this.setFieldValid(e, null == (t = s.config) ? void 0 : t.successMessage), Promise.allSettled(l).finally(()=>{
                var e;
                i && (null == (e = this.onValidateCallback) || e.call(this, {
                    isValid: this.isFormValid(),
                    isSubmitted: this.isSubmitted,
                    fields: this.getCompatibleFields(),
                    groups: {
                        ...this.groupFields
                    }
                }));
            });
        }
        revalidateField(e) {
            if ("string" != typeof e && !u(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
            const i = this.getKeyByFieldSelector(e);
            return i && this.fields[i] ? new Promise((e)=>{
                this.validateField(i, !0).finally(()=>{
                    this.clearFieldStyle(i), this.clearFieldLabel(i), this.renderFieldError(i, !0), e(!!this.fields[i].isValid);
                });
            }) : (console.error("Field not found. Check the field selector."), Promise.reject());
        }
        revalidateGroup(e) {
            if ("string" != typeof e && !u(e)) throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");
            const i = this.getKeyByFieldSelector(e);
            return i && this.groupFields[i] ? new Promise((e)=>{
                this.validateGroup(i).finally(()=>{
                    this.clearFieldLabel(i), this.renderGroupError(i, !0), e(!!this.groupFields[i].isValid);
                });
            }) : (console.error("Group not found. Check the group selector."), Promise.reject());
        }
        validateGroup(e, i = !1) {
            const t = this.groupFields[e], s = [];
            return [
                ...t.rules
            ].reverse().forEach((i)=>{
                const l = this.validateGroupRule(e, t.elems, i);
                d(l) && s.push(l);
            }), Promise.allSettled(s).finally(()=>{
                var e;
                i && (null == (e = this.onValidateCallback) || e.call(this, {
                    isValid: this.isFormValid(),
                    isSubmitted: this.isSubmitted,
                    fields: this.getCompatibleFields(),
                    groups: {
                        ...this.groupFields
                    }
                }));
            });
        }
        focusInvalidField() {
            for(const e in this.fields){
                const i = this.fields[e];
                if (!i.isValid) {
                    setTimeout(()=>i.elem.focus(), 0);
                    break;
                }
            }
        }
        afterSubmitValidation(e = !1) {
            this.renderErrors(e), this.globalConfig.focusInvalidField && this.focusInvalidField();
        }
        validate(e = !1) {
            return new Promise((i)=>{
                const t = [];
                Object.keys(this.fields).forEach((e)=>{
                    const i = this.validateField(e);
                    d(i) && t.push(i);
                }), Object.keys(this.groupFields).forEach((e)=>{
                    const i = this.validateGroup(e);
                    d(i) && t.push(i);
                }), Promise.allSettled(t).then(()=>{
                    var s;
                    this.afterSubmitValidation(e), null == (s = this.onValidateCallback) || s.call(this, {
                        isValid: this.isFormValid(),
                        isSubmitted: this.isSubmitted,
                        fields: this.getCompatibleFields(),
                        groups: {
                            ...this.groupFields
                        }
                    }), i(!!t.length);
                });
            });
        }
        revalidate() {
            return new Promise((e)=>{
                this.validateHandler(void 0, !0).finally(()=>{
                    this.globalConfig.focusInvalidField && this.focusInvalidField(), e(this.isValid);
                });
            });
        }
        validateHandler(e, i = !1) {
            return this.globalConfig.lockForm && this.lockForm(), this.validate(i).finally(()=>{
                var i, t, s;
                this.globalConfig.lockForm && this.unlockForm(), this.isValid ? (null == (i = this.onSuccessCallback) || i.call(this, e), this.globalConfig.submitFormAutomatically && (null == (t = null == e ? void 0 : e.currentTarget) || t.submit())) : null == (s = this.onFailCallback) || s.call(this, this.getCompatibleFields(), this.groupFields);
            });
        }
        setForm(e) {
            this.form = e, this.form.setAttribute("novalidate", "novalidate"), this.removeListener("submit", this.form, this.formSubmitHandler), this.addListener("submit", this.form, this.formSubmitHandler);
        }
        addListener(e, i, t) {
            i.addEventListener(e, t), this.eventListeners.push({
                type: e,
                elem: i,
                func: t
            });
        }
        removeListener(e, i, t) {
            i.removeEventListener(e, t), this.eventListeners = this.eventListeners.filter((t)=>t.type !== e || t.elem !== i);
        }
        addField(e, i, t) {
            if ("string" != typeof e && !u(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
            let s;
            if (s = "string" == typeof e ? this.form.querySelector(e) : e, !s) throw Error("Field doesn't exist in the DOM! Please check the field selector.");
            if (!Array.isArray(i) || !i.length) throw Error("Rules argument should be an array and should contain at least 1 element.");
            i.forEach((e)=>{
                if (!("rule" in e || "validator" in e || "plugin" in e)) throw Error("Rules argument must contain at least one rule or validator property.");
                if (!(e.validator || e.plugin || e.rule && Object.values(r).includes(e.rule))) throw Error(`Rule should be one of these types: ${Object.values(r).join(", ")}. Provided value: ${e.rule}`);
            });
            const l = this.setKeyByFieldSelector(e);
            return this.fields[l] = {
                elem: s,
                rules: i,
                isValid: void 0,
                touched: !1,
                config: t
            }, this.setListeners(s), (this.isSubmitted || this.globalConfig.validateBeforeSubmitting) && this.validateField(l), this;
        }
        removeField(e) {
            if ("string" != typeof e && !u(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
            const i = this.getKeyByFieldSelector(e);
            if (!i || !this.fields[i]) return console.error("Field not found. Check the field selector."), this;
            const t = this.getListenerType(this.fields[i].elem.type);
            return this.removeListener(t, this.fields[i].elem, this.handlerChange), this.clearErrors(), delete this.fields[i], this;
        }
        removeGroup(e) {
            if ("string" != typeof e) throw Error("Group selector is not valid. Please specify a string selector.");
            const i = this.getKeyByFieldSelector(e);
            return i && this.groupFields[i] ? (this.groupFields[i].elems.forEach((e)=>{
                const i = this.getListenerType(e.type);
                this.removeListener(i, e, this.handlerChange);
            }), this.clearErrors(), delete this.groupFields[i], this) : (console.error("Group not found. Check the group selector."), this);
        }
        addRequiredGroup(e, i, t, s) {
            if ("string" != typeof e && !u(e)) throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");
            let l;
            if (l = "string" == typeof e ? this.form.querySelector(e) : e, !l) throw Error("Group selector not found! Please check the group selector.");
            const r = l.querySelectorAll("input"), a = Array.from(r).filter((e)=>{
                const i = ((e, i)=>{
                    const t = [
                        ...i
                    ].reverse();
                    for(let s = 0, l = t.length; s < l; ++s){
                        const i = t[s];
                        for(const t in e){
                            const s = e[t];
                            if (s.groupElem === i) return [
                                t,
                                s
                            ];
                        }
                    }
                    return null;
                })(this.groupFields, ((e)=>{
                    let i = e;
                    const t = [];
                    for(; i;)t.unshift(i), i = i.parentNode;
                    return t;
                })(e));
                return !i || i[1].elems.find((i)=>i !== e);
            }), n = this.setKeyByFieldSelector(e);
            return this.groupFields[n] = {
                rules: [
                    {
                        rule: o.Required,
                        errorMessage: i,
                        successMessage: s
                    }
                ],
                groupElem: l,
                elems: a,
                touched: !1,
                isValid: void 0,
                config: t
            }, r.forEach((e)=>{
                this.setListeners(e);
            }), this;
        }
        getListenerType(e) {
            switch(e){
                case "checkbox":
                case "select-one":
                case "file":
                case "radio":
                    return "change";
                default:
                    return "input";
            }
        }
        setListeners(e) {
            const i = this.getListenerType(e.type);
            this.removeListener(i, e, this.handlerChange), this.addListener(i, e, this.handlerChange);
        }
        clearFieldLabel(e) {
            var i, t;
            null == (i = this.errorLabels[e]) || i.remove(), null == (t = this.successLabels[e]) || t.remove();
        }
        clearFieldStyle(e) {
            var i, t, s, l;
            const r = this.fields[e], o = (null == (i = r.config) ? void 0 : i.errorFieldStyle) || this.globalConfig.errorFieldStyle;
            Object.keys(o).forEach((e)=>{
                r.elem.style[e] = "";
            });
            const a = (null == (t = r.config) ? void 0 : t.successFieldStyle) || this.globalConfig.successFieldStyle || {};
            Object.keys(a).forEach((e)=>{
                r.elem.style[e] = "";
            }), r.elem.classList.remove(...c((null == (s = r.config) ? void 0 : s.errorFieldCssClass) || this.globalConfig.errorFieldCssClass), ...c((null == (l = r.config) ? void 0 : l.successFieldCssClass) || this.globalConfig.successFieldCssClass));
        }
        clearErrors() {
            var e, i;
            Object.keys(this.errorLabels).forEach((e)=>this.errorLabels[e].remove()), Object.keys(this.successLabels).forEach((e)=>this.successLabels[e].remove());
            for(const t in this.fields)this.clearFieldStyle(t);
            for(const t in this.groupFields){
                const s = this.groupFields[t], l = (null == (e = s.config) ? void 0 : e.errorFieldStyle) || this.globalConfig.errorFieldStyle;
                Object.keys(l).forEach((e)=>{
                    s.elems.forEach((i)=>{
                        var t;
                        i.style[e] = "", i.classList.remove(...c((null == (t = s.config) ? void 0 : t.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
                    });
                });
                const r = (null == (i = s.config) ? void 0 : i.successFieldStyle) || this.globalConfig.successFieldStyle || {};
                Object.keys(r).forEach((e)=>{
                    s.elems.forEach((i)=>{
                        var t;
                        i.style[e] = "", i.classList.remove(...c((null == (t = s.config) ? void 0 : t.successFieldCssClass) || this.globalConfig.successFieldCssClass));
                    });
                });
            }
            this.tooltips = [];
        }
        isTooltip() {
            return !!this.globalConfig.tooltip;
        }
        lockForm() {
            const e = this.form.querySelectorAll("input, textarea, button, select");
            for(let i = 0, t = e.length; i < t; ++i)e[i].setAttribute("data-just-validate-fallback-disabled", e[i].disabled ? "true" : "false"), e[i].setAttribute("disabled", "disabled"), e[i].style.pointerEvents = "none", e[i].style.webkitFilter = "grayscale(100%)", e[i].style.filter = "grayscale(100%)";
        }
        unlockForm() {
            const e = this.form.querySelectorAll("input, textarea, button, select");
            for(let i = 0, t = e.length; i < t; ++i)"true" !== e[i].getAttribute("data-just-validate-fallback-disabled") && e[i].removeAttribute("disabled"), e[i].style.pointerEvents = "", e[i].style.webkitFilter = "", e[i].style.filter = "";
        }
        renderTooltip(e, i, t) {
            var s;
            const { top: l, left: r, width: o, height: a } = e.getBoundingClientRect(), n = i.getBoundingClientRect(), d = t || (null == (s = this.globalConfig.tooltip) ? void 0 : s.position);
            switch(d){
                case "left":
                    i.style.top = l + a / 2 - n.height / 2 + "px", i.style.left = r - n.width - 5 + "px";
                    break;
                case "top":
                    i.style.top = l - n.height - 5 + "px", i.style.left = r + o / 2 - n.width / 2 + "px";
                    break;
                case "right":
                    i.style.top = l + a / 2 - n.height / 2 + "px", i.style.left = `${r + o + 5}px`;
                    break;
                case "bottom":
                    i.style.top = `${l + a + 5}px`, i.style.left = r + o / 2 - n.width / 2 + "px";
            }
            i.dataset.direction = d;
            return {
                refresh: ()=>{
                    this.renderTooltip(e, i, t);
                }
            };
        }
        createErrorLabelElem(e, i, t) {
            const s = document.createElement("div");
            s.innerHTML = i;
            const l = this.isTooltip() ? null == t ? void 0 : t.errorLabelStyle : (null == t ? void 0 : t.errorLabelStyle) || this.globalConfig.errorLabelStyle;
            return Object.assign(s.style, l), s.classList.add(...c((null == t ? void 0 : t.errorLabelCssClass) || this.globalConfig.errorLabelCssClass), "just-validate-error-label"), this.isTooltip() && (s.dataset.tooltip = "true"), this.globalConfig.testingMode && (s.dataset.testId = `error-label-${e}`), this.errorLabels[e] = s, s;
        }
        createSuccessLabelElem(e, i, t) {
            if (void 0 === i) return null;
            const s = document.createElement("div");
            s.innerHTML = i;
            const l = (null == t ? void 0 : t.successLabelStyle) || this.globalConfig.successLabelStyle;
            return Object.assign(s.style, l), s.classList.add(...c((null == t ? void 0 : t.successLabelCssClass) || this.globalConfig.successLabelCssClass), "just-validate-success-label"), this.globalConfig.testingMode && (s.dataset.testId = `success-label-${e}`), this.successLabels[e] = s, s;
        }
        renderErrorsContainer(e, i) {
            const t = i || this.globalConfig.errorsContainer;
            if ("string" == typeof t) {
                const i = this.form.querySelector(t);
                if (i) return i.appendChild(e), !0;
                console.error(`Error container with ${t} selector not found. Errors will be rendered as usual`);
            }
            return t instanceof Element ? (t.appendChild(e), !0) : (void 0 !== t && console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"), !1);
        }
        renderGroupLabel(e, i, t, s) {
            if (!s) {
                if (this.renderErrorsContainer(i, t)) return;
            }
            e.appendChild(i);
        }
        renderFieldLabel(e, i, t, s) {
            var l, r, o, a, n, d, c;
            if (!s) {
                if (this.renderErrorsContainer(i, t)) return;
            }
            if ("checkbox" === e.type || "radio" === e.type) {
                const t = document.querySelector(`label[for="${e.getAttribute("id")}"]`);
                "label" === (null == (r = null == (l = e.parentElement) ? void 0 : l.tagName) ? void 0 : r.toLowerCase()) ? null == (a = null == (o = e.parentElement) ? void 0 : o.parentElement) || a.appendChild(i) : t ? null == (n = t.parentElement) || n.appendChild(i) : null == (d = e.parentElement) || d.appendChild(i);
            } else null == (c = e.parentElement) || c.appendChild(i);
        }
        showLabels(e, i) {
            Object.keys(e).forEach((t, s)=>{
                const l = e[t], r = this.getKeyByFieldSelector(t);
                if (!r || !this.fields[r]) return void console.error("Field not found. Check the field selector.");
                const o = this.fields[r];
                o.isValid = !i, this.clearFieldStyle(r), this.clearFieldLabel(r), this.renderFieldError(r, !1, l), 0 === s && this.globalConfig.focusInvalidField && setTimeout(()=>o.elem.focus(), 0);
            });
        }
        showErrors(e) {
            if ("object" != typeof e) throw Error("[showErrors]: Errors should be an object with key: value format");
            this.showLabels(e, !0);
        }
        showSuccessLabels(e) {
            if ("object" != typeof e) throw Error("[showSuccessLabels]: Labels should be an object with key: value format");
            this.showLabels(e, !1);
        }
        renderFieldError(e, i = !1, t) {
            var s, l, r, o, a, n;
            const d = this.fields[e];
            if (!1 === d.isValid && (this.isValid = !1), void 0 === d.isValid || !i && !this.isSubmitted && !d.touched && void 0 === t) return;
            if (d.isValid) {
                if (!d.asyncCheckPending) {
                    const i = this.createSuccessLabelElem(e, void 0 !== t ? t : d.successMessage, d.config);
                    i && this.renderFieldLabel(d.elem, i, null == (s = d.config) ? void 0 : s.errorsContainer, !0), d.elem.classList.add(...c((null == (l = d.config) ? void 0 : l.successFieldCssClass) || this.globalConfig.successFieldCssClass));
                }
                return;
            }
            d.elem.classList.add(...c((null == (r = d.config) ? void 0 : r.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
            const u = this.createErrorLabelElem(e, void 0 !== t ? t : d.errorMessage, d.config);
            this.renderFieldLabel(d.elem, u, null == (o = d.config) ? void 0 : o.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(d.elem, u, null == (n = null == (a = d.config) ? void 0 : a.tooltip) ? void 0 : n.position));
        }
        renderGroupError(e, i = !0) {
            var t, s, l, r;
            const o = this.groupFields[e];
            if (!1 === o.isValid && (this.isValid = !1), void 0 === o.isValid || !i && !this.isSubmitted && !o.touched) return;
            if (o.isValid) {
                o.elems.forEach((e)=>{
                    var i, t;
                    Object.assign(e.style, (null == (i = o.config) ? void 0 : i.successFieldStyle) || this.globalConfig.successFieldStyle), e.classList.add(...c((null == (t = o.config) ? void 0 : t.successFieldCssClass) || this.globalConfig.successFieldCssClass));
                });
                const i = this.createSuccessLabelElem(e, o.successMessage, o.config);
                return void (i && this.renderGroupLabel(o.groupElem, i, null == (t = o.config) ? void 0 : t.errorsContainer, !0));
            }
            this.isValid = !1, o.elems.forEach((e)=>{
                var i, t;
                Object.assign(e.style, (null == (i = o.config) ? void 0 : i.errorFieldStyle) || this.globalConfig.errorFieldStyle), e.classList.add(...c((null == (t = o.config) ? void 0 : t.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
            });
            const a = this.createErrorLabelElem(e, o.errorMessage, o.config);
            this.renderGroupLabel(o.groupElem, a, null == (s = o.config) ? void 0 : s.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(o.groupElem, a, null == (r = null == (l = o.config) ? void 0 : l.tooltip) ? void 0 : r.position));
        }
        renderErrors(e = !1) {
            if (this.isSubmitted || e || this.globalConfig.validateBeforeSubmitting) {
                this.clearErrors(), this.isValid = !0;
                for(const e in this.groupFields)this.renderGroupError(e);
                for(const e in this.fields)this.renderFieldError(e);
            }
        }
        destroy() {
            this.eventListeners.forEach((e)=>{
                this.removeListener(e.type, e.elem, e.func);
            }), Object.keys(this.customStyleTags).forEach((e)=>{
                this.customStyleTags[e].remove();
            }), this.clearErrors(), this.globalConfig.lockForm && this.unlockForm();
        }
        refresh() {
            this.destroy(), this.form ? (this.initialize(this.form, this.globalConfig), Object.keys(this.fields).forEach((e)=>{
                const i = this.getFieldSelectorByKey(e);
                i && this.addField(i, [
                    ...this.fields[e].rules
                ], this.fields[e].config);
            })) : console.error("Cannot initialize the library! Form is not defined");
        }
        setCurrentLocale(e) {
            "string" == typeof e || void 0 === e ? (this.currentLocale = e, this.isSubmitted && this.validate()) : console.error("Current locale should be a string");
        }
        onSuccess(e) {
            return this.onSuccessCallback = e, this;
        }
        onFail(e) {
            return this.onFailCallback = e, this;
        }
        onValidate(e) {
            return this.onValidateCallback = e, this;
        }
    };
});

},{}]},["4xzb5","2OK9T"], "2OK9T", "parcelRequire94c2")

//# sourceMappingURL=catalog.fc159a9d.js.map
