const Fr = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_NITRO_SERVER_PORT: "3030", VITE_POSTHOG_HOST: "https://us.i.posthog.com", VITE_POSTHOG_PROJECT_API_KEY: "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz", VITE_POSTHOG_UI_HOST: "https://us.posthog.com" }, Su = "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz", Tu = "https://k.antikythera.org", Eu = "https://us.posthog.com", Au = "https://api.antikythera.org", Iu = 100, Ni = [
  "email",
  "name",
  "phone",
  "address",
  "username",
  "user_id",
  "userId",
  "customer_id",
  "customerId",
  "ip",
  "$ip",
  "$raw_user_agent"
], $u = {
  dom_event_allowlist: ["click", "submit"],
  element_allowlist: ["a", "button", "form"],
  css_selector_allowlist: ["[data-ph-capture]"],
  element_attribute_ignorelist: [
    "href",
    "value",
    "placeholder",
    "title",
    "aria-label",
    "alt",
    "src",
    "id",
    "class",
    "name"
  ]
}, Ru = "attr__data-ph-";
let De = null, Hn = null, nr = !1, En = !1, Fi = !1, we = null, ka = {}, Di = !1, Xn = null, dr = null, Ca = 0, Yl = 0;
const Dr = /* @__PURE__ */ new Set(), mo = [], Nn = (e) => {
  if (!(typeof globalThis > "u"))
    return globalThis[e];
}, Yo = (e) => Fr == null ? void 0 : Fr[e], Pu = (e) => e || Nn("__ANTIKYTHERA_API_URL__") || Yo("VITE_NITRO_SERVER") || Nn("__ANTIKYTHERA_TEST_SERVER__") || Au, zu = () => typeof window > "u" ? !1 : new URLSearchParams(window.location.search).has("telemetry"), jr = (e) => {
  if (e === "projectApiKey") return "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz";
  if (e === "host") return "https://k.antikythera.org";
  if (e === "uiHost") return "";
}, Mu = (e, { timeout: t = 2500 } = {}) => {
  typeof window > "u" || (typeof window.requestIdleCallback == "function" ? window.requestIdleCallback(e, { timeout: t }) : window.setTimeout(e, 300));
}, ji = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      const t = new URL(e, typeof window < "u" ? window.location.origin : void 0);
      return `${t.origin}${t.pathname}`;
    } catch {
      return;
    }
}, Lu = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      return new URL(e, typeof window < "u" ? window.location.origin : void 0).hostname;
    } catch {
      return;
    }
}, Ou = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      const t = new URL(e);
      return !["http:", "https:"].includes(t.protocol) || t.username || t.password ? void 0 : t.hostname;
    } catch {
      return;
    }
}, Hu = (e, t) => {
  const n = Object.prototype.hasOwnProperty.call(t, "tracingHeaders") ? t.tracingHeaders : t.tracing_headers;
  if (n === !1) return [];
  if (Array.isArray(n)) return n.filter(Boolean);
  const o = Ou(Pu(e));
  return o ? [o] : [];
}, Bu = (e, t) => {
  if (e === !1) return { enabled: !1 };
  const n = typeof e == "object" && e !== null ? e : {}, o = zu() ? "full" : n.mode || n.analyticsMode || "cookieless", r = o === "full", a = !r && n.autocapture !== !1;
  return {
    enabled: !0,
    mode: o,
    fullTracking: r,
    anonymousAutocapture: a,
    projectApiKey: n.projectApiKey || n.posthogProjectApiKey || Yo("VITE_POSTHOG_PROJECT_API_KEY") || Nn("__ANTIKYTHERA_POSTHOG_PROJECT_API_KEY__") || Nn("__ANTIKYTHERA_POSTHOG_KEY__") || jr("projectApiKey") || Su,
    host: n.host || n.posthogHost || Yo("VITE_POSTHOG_HOST") || Nn("__ANTIKYTHERA_POSTHOG_HOST__") || jr("host") || Tu,
    uiHost: n.uiHost || n.posthogUiHost || Yo("VITE_POSTHOG_UI_HOST") || Nn("__ANTIKYTHERA_POSTHOG_UI_HOST__") || jr("uiHost") || Eu,
    autocapture: r ? n.autocapture !== !1 : a ? $u : !1,
    deadClicks: r && n.deadClicks !== !1 && n.dead_clicks !== !1,
    rageclick: r && n.rageclick !== !1,
    sessionReplay: r && n.sessionReplay !== !1,
    heatmaps: r && n.heatmaps !== !1,
    exceptions: r && n.exceptions !== !1,
    pageviews: n.pageviews !== !1,
    pageleave: n.pageleave !== !1,
    apiRequests: n.apiRequests !== !1,
    webVitals: n.webVitals !== !1,
    tracingHeaders: Hu(t, n),
    personProfiles: n.personProfiles || n.person_profiles || (r ? "always" : "identified_only"),
    cookielessMode: n.cookielessMode || n.cookieless_mode || void 0,
    debug: n.debug === !0
  };
}, Ui = (e = {}) => ({
  ...ka,
  ...e
}), Vu = (e) => (e != null && e.properties && (e.properties.$current_url && (e.properties.$current_url = ji(e.properties.$current_url)), e.properties.$referrer && (e.properties.$referrer = ji(e.properties.$referrer)), we != null && we.fullTracking || (e.properties.$host = e.properties.$host || Lu(e.properties.$current_url), delete e.properties.$ip, delete e.properties.$raw_user_agent, delete e.properties.$element_text, delete e.properties.$el_text, delete e.properties.$elements_chain, Array.isArray(e.properties.$elements) && (e.properties.$elements = e.properties.$elements.map(
  (t) => Object.fromEntries(
    Object.entries(t).filter(([n]) => n === "tag_name" || n.startsWith(Ru))
  )
)))), e), Nu = () => {
  var e;
  typeof window > "u" || !((e = window.performance) != null && e.getEntriesByType) || window.setTimeout(() => {
    const [t] = window.performance.getEntriesByType("navigation");
    t && ce("antikythera page performance measured", {
      load_duration_ms: Math.round(t.loadEventEnd || t.duration || 0),
      dom_content_loaded_ms: Math.round(t.domContentLoadedEventEnd || 0),
      transfer_size: t.transferSize || void 0,
      encoded_body_size: t.encodedBodySize || void 0
    });
  }, 0);
}, fn = () => {
  var e, t, n, o, r;
  typeof globalThis > "u" || (globalThis.__ANTIKYTHERA_ANALYTICS__ = {
    enabled: En,
    initialized: nr,
    config: we ? {
      host: we.host,
      uiHost: we.uiHost,
      mode: we.mode,
      fullTracking: we.fullTracking,
      pageviews: we.pageviews,
      pageleave: we.pageleave,
      apiRequests: we.apiRequests,
      webVitals: we.webVitals,
      autocapture: we.autocapture,
      anonymousAutocapture: we.anonymousAutocapture,
      deadClicks: we.deadClicks,
      rageclick: we.rageclick,
      sessionReplay: we.sessionReplay,
      heatmaps: we.heatmaps,
      exceptions: we.exceptions,
      tracingHeaders: we.tracingHeaders,
      cookielessMode: we.cookielessMode,
      personProfiles: we.personProfiles,
      hasProjectApiKey: !!we.projectApiKey
    } : null,
    posthog: nr && De ? {
      isCapturing: typeof De.is_capturing == "function" ? De.is_capturing() : void 0,
      distinctId: typeof De.get_distinct_id == "function" ? De.get_distinct_id() : void 0,
      analyticsEndpoint: De.analyticsDefaultEndpoint,
      requestBatching: (e = De.config) == null ? void 0 : e.request_batching,
      disableCompression: (t = De.config) == null ? void 0 : t.disable_compression,
      cookielessMode: (n = De.config) == null ? void 0 : n.cookieless_mode,
      persistence: (o = De.config) == null ? void 0 : o.persistence,
      personProfiles: (r = De.config) == null ? void 0 : r.person_profiles
    } : null,
    context: ka,
    lastError: Xn,
    lastCapture: dr,
    captureAttemptCount: Ca,
    postHogCaptureCount: Yl,
    pendingCaptureCount: mo.length,
    posthogModuleRequested: !!Hn,
    capture: (a = "antikythera browser smoke test", i = {}) => ce(a, i)
  });
}, Fu = (e, t) => {
  e.init(t.projectApiKey, {
    api_host: t.host,
    ui_host: t.uiHost,
    defaults: "2026-05-30",
    capture_pageview: t.pageviews ? "history_change" : !1,
    capture_pageleave: t.pageleave,
    autocapture: t.autocapture,
    rageclick: t.rageclick,
    disable_session_recording: !t.sessionReplay,
    enable_recording_console_log: t.fullTracking && t.sessionReplay,
    disable_compression: !1,
    disable_persistence: !1,
    persistence: "localStorage+cookie",
    capture_dead_clicks: t.deadClicks,
    capture_exceptions: t.fullTracking && t.exceptions,
    capture_heatmaps: t.fullTracking && t.heatmaps,
    capture_performance: t.webVitals ? { web_vitals: !0, network_timing: !0 } : !1,
    ip: t.fullTracking,
    mask_all_element_attributes: !1,
    mask_all_text: !t.fullTracking,
    mask_personal_data_properties: !t.fullTracking,
    custom_personal_data_properties: t.fullTracking ? [] : Ni,
    property_denylist: t.fullTracking ? [] : Ni,
    request_batching: !0,
    tracing_headers: t.tracingHeaders,
    respect_dnt: !0,
    cookieless_mode: t.fullTracking ? void 0 : t.cookielessMode,
    person_profiles: t.personProfiles,
    before_send: Vu,
    _onCapture: (n) => {
      Yl += 1, dr = {
        event: n,
        acceptedByPostHog: !0,
        at: (/* @__PURE__ */ new Date()).toISOString()
      }, fn();
    }
  }), t.debug && e.debug();
}, Du = () => {
  if (De) {
    for (; mo.length > 0; ) {
      const e = mo.shift();
      try {
        Ca += 1;
        const t = e.kind === "exception" ? De.captureException(e.error, e.properties) : De.capture(e.event, e.properties, { send_instantly: !0, timestamp: e.at });
        dr = {
          event: e.event,
          acceptedByPostHog: !!t,
          at: (/* @__PURE__ */ new Date()).toISOString()
        };
      } catch (t) {
        Xn = (t == null ? void 0 : t.message) || "PostHog capture failed";
      }
    }
    fn();
  }
}, ju = () => Hn || (Hn = new Promise((e) => {
  Mu(() => {
    import("./chunks/posthog-DRTLl3XD.js").then((t) => e(t.default || t.posthog || null)).catch((t) => {
      Hn = null, Xn = (t == null ? void 0 : t.message) || "PostHog failed to load", fn(), e(null);
    });
  });
}), Hn), Uu = () => ju().then((e) => {
  if (!e) return null;
  if (!nr && En && we)
    try {
      Fu(e, we), De = e, nr = !0;
    } catch (t) {
      En = !1, Xn = (t == null ? void 0 : t.message) || "PostHog initialization failed";
    }
  return fn(), Du(), De;
}), Gl = ({
  analytics: e = !0,
  entry: t = "",
  environment: n = "production",
  apiUrl: o = void 0,
  packageVersion: r = void 0,
  explicit: a = !1
} = {}) => typeof window > "u" || typeof document > "u" ? { enabled: !1 } : ((a || !Fi) && (we = Bu(e, o), En = we.enabled && !!we.projectApiKey, a && (Fi = !0), Xn = null), ka = {
  antikythera_entry: t || void 0,
  antikythera_environment: n,
  antikythera_package_version: r,
  antikythera_api_host: o,
  site_origin: typeof window < "u" ? window.location.origin : void 0,
  site_hostname: typeof window < "u" ? window.location.hostname : void 0
}, fn(), En ? (Uu(), we.webVitals && Nu(), Di || (ce("antikythera package initialized"), Di = !0), { enabled: !0 }) : { enabled: !1 }), ce = (e, t = {}, { onceKey: n = void 0 } = {}) => {
  if (!(!En || !e) && !(n && Dr.has(n))) {
    if (!De) {
      mo.length < Iu && (n && Dr.add(n), mo.push({ kind: "event", event: e, properties: Ui(t), at: /* @__PURE__ */ new Date() }), fn());
      return;
    }
    n && Dr.add(n);
    try {
      Ca += 1;
      const o = De.capture(e, Ui(t), { send_instantly: !0 });
      dr = {
        event: e,
        acceptedByPostHog: !!o,
        at: (/* @__PURE__ */ new Date()).toISOString()
      }, fn();
    } catch (o) {
      Xn = (o == null ? void 0 : o.message) || "PostHog capture failed", fn();
    }
  }
}, Ur = (e = {}) => {
  !En || (we == null ? void 0 : we.apiRequests) === !1 || ce("antikythera api request completed", e);
}, qi = "antikythera-fonts", Ki = "https://api.antikythera.org/fonts", qu = [
  ["ESAllianz-Book", "normal", 400],
  ["ESAllianz-BookItalic", "italic", 400],
  ["ESAllianz-Bold", "normal", 700],
  ["ESAllianz-BoldItalic", "italic", 700]
], Ku = () => qu.map(
  ([e, t, n]) => `@font-face{font-family:'ESAllianz-Book';font-style:${t};font-weight:${n};font-display:swap;src:url('${Ki}/${e}.woff2') format('woff2'),url('${Ki}/${e}.woff') format('woff');}`
).join(`
`), Wu = () => {
  if (typeof document > "u" || document.getElementById(qi)) return;
  const e = document.createElement("style");
  e.id = qi, e.appendChild(document.createTextNode(Ku()));
  const t = document.head || document.getElementsByTagName("head")[0];
  t.insertBefore(e, t.firstChild);
}, qr = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_NITRO_SERVER_PORT: "3030", VITE_POSTHOG_HOST: "https://us.i.posthog.com", VITE_POSTHOG_PROJECT_API_KEY: "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz", VITE_POSTHOG_UI_HOST: "https://us.posthog.com" }, io = /* @__PURE__ */ new Map(), Sa = ({
  entry: e = "",
  environment: t = "production",
  customCss: n = !1,
  apiUrl: o = void 0,
  analytics: r = !0,
  packageVersion: a = void 0
} = {}) => {
  Gl({
    analytics: r,
    entry: e,
    environment: t,
    apiUrl: o,
    packageVersion: a
  }), Wu();
  const i = (M) => {
    if (!(!M || typeof M != "string"))
      try {
        const q = new URL(M);
        if (!["https:", "http:"].includes(q.protocol) || q.username || q.password)
          throw new Error("unsupported URL");
        return q.origin;
      } catch {
        console.warn("antikythera API URL override ignored: expected a valid http(s) origin");
        return;
      }
  }, l = i(o) || i(globalThis.__ANTIKYTHERA_API_URL__) || i(qr == null ? void 0 : qr.VITE_NITRO_SERVER) || i(globalThis.__ANTIKYTHERA_TEST_SERVER__) || "https://api.antikythera.org", s = `${l}/api/v1`;
  let f = e, u = null;
  const d = async (M, { textStyle: q = void 0 } = {}) => {
    const j = q ? "&textStyle=" + q : "", K = `${s}${M}?env=${t}${j}`, G = `${l}:${t}:${f}:${M}:${q || "portabletext"}`;
    if (io.has(G)) {
      const V = await io.get(G);
      return Ur({
        api_path: M,
        api_environment: t,
        api_entry: f || void 0,
        api_text_style: q || "portabletext",
        api_success: !(V != null && V.error),
        api_cache: "memory"
      }), V;
    } else {
      const V = typeof performance < "u" ? performance.now() : Date.now();
      io.set(
        G,
        fetch(K).then((te) => {
          const J = typeof performance < "u" ? performance.now() : Date.now(), le = Math.round(J - V);
          if (Ur({
            api_path: M,
            api_environment: t,
            api_entry: f || void 0,
            api_text_style: q || "portabletext",
            api_status: te.status,
            api_success: te.ok,
            api_duration_ms: le,
            api_cache: "miss"
          }), !te.ok) {
            const Z = new Error(`HTTP error! status: ${te.status}`);
            throw Z.antikytheraAnalyticsCaptured = !0, Z.retryable = te.status === 408 || te.status === 429 || te.status >= 500, Z;
          }
          return te.json() ?? {};
        }).catch((te) => {
          const J = typeof performance < "u" ? performance.now() : Date.now();
          return te.antikytheraAnalyticsCaptured || Ur({
            api_path: M,
            api_environment: t,
            api_entry: f || void 0,
            api_text_style: q || "portabletext",
            api_success: !1,
            api_duration_ms: Math.round(J - V),
            api_cache: "miss",
            api_error: te.message
          }), te.retryable !== !1 && io.delete(G), { error: te.message };
        })
      );
    }
    return io.get(G);
  }, g = async ({ textStyle: M = void 0 } = {}) => {
    try {
      return await d("/settings", { textStyle: M });
    } catch (q) {
      return { error: q.message };
    }
  }, y = async ({ textStyle: M = void 0 } = {}) => {
    try {
      return await d(`/entries/${f}`, { textStyle: M });
    } catch (q) {
      return { error: q.message };
    }
  }, k = async ({ textStyle: M = void 0 } = {}) => {
    try {
      return await d(`/entries/${f}/meta`, { textStyle: M });
    } catch (q) {
      return { error: q.message };
    }
  }, T = async ({ textStyle: M = void 0 } = {}) => {
    try {
      return await d(`/annotations/${f}`, { textStyle: M });
    } catch (q) {
      return { error: q.message };
    }
  }, B = (M, q = void 0) => {
    var j, K, G;
    return {
      annotation_id: (M == null ? void 0 : M.id) || q || void 0,
      annotation_title: (M == null ? void 0 : M.title) || void 0,
      annotation_type: (M == null ? void 0 : M.annotationType) || void 0,
      annotation_has_external_link: !!(M != null && M.externalLink),
      annotation_has_featured_image: !!((j = M == null ? void 0 : M.featuredImage) != null && j.url || (K = M == null ? void 0 : M.featuredImageSquare) != null && K.url),
      annotation_scan_enabled: !!((G = M == null ? void 0 : M.scanText) != null && G.enableScanText)
    };
  }, x = (M, q) => {
    !M || !q || (M.setAttribute("data-ph-capture", ""), M.setAttribute("data-ph-component", "antikythera-annotation"), M.setAttribute("data-ph-action", "annotation-click"), M.setAttribute("data-ph-annotation-id", q.id), M.setAttribute("data-ph-entry", f), q.annotationType && M.setAttribute("data-ph-annotation-type", q.annotationType));
  }, U = (M) => String(M || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), Q = async ({ annotationClass: M = "annotation" }) => {
    const q = await T(), j = [], K = [];
    if (!Array.isArray(q)) {
      console.warn("antikythera annotation scan skipped: annotations response is not an array", q);
      return;
    }
    q.forEach((J) => {
      var le, Z;
      !((le = J.scanText) != null && le.enableScanText) || !Array.isArray((Z = J.scanText) == null ? void 0 : Z.scanSegments) || J.scanText.scanSegments.forEach((ue) => {
        j.push({
          id: J.id,
          annotationPalette: J.annotationPalette ? `annotation_${J.annotationPalette}` : "annotation_inherit",
          annotationType: J.annotationType,
          keyword: ue.scanKeyword,
          phrase: ue.scanPhrase
        });
      });
    });
    const G = (J) => {
      J.nodeType === Node.TEXT_NODE ? K.push(J) : J.childNodes.forEach(G);
    };
    G(document.body);
    const V = (J) => {
      const le = (Z) => Z.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
      return j.forEach((Z) => {
        const { keyword: ue, phrase: fe, id: Ce, annotationPalette: st, annotationType: Re } = Z, Ae = new RegExp(`(${le(fe)})`, "gi");
        Ae.test(J) && (Z.found = !0, J = J.replace(Ae, (qe) => {
          const ft = new RegExp(`(${le(ue)})`, "gi");
          return qe.replace(
            ft,
            `<span class="${U(M)} ${U(st)}" id="${U(Ce)}" data-ph-capture data-ph-component="antikythera-annotation" data-ph-action="annotation-click" data-ph-entry="${U(f)}" data-ph-annotation-id="${U(Ce)}" data-ph-annotation-type="${U(Re)}">$1</span>`
          );
        }));
      }), J;
    };
    K.forEach((J) => {
      const le = V(J.nodeValue);
      if (le !== J.nodeValue) {
        const Z = document.createElement("span");
        Z.innerHTML = le, J.replaceWith(...Z.childNodes);
      }
    });
    let te = 0;
    return j.forEach(({ id: J, phrase: le, found: Z }) => {
      Z || (te++, console.error(`Annotation [${J}] with phrase "${le}" could not be found in the document.`), ce("antikythera annotation scan missed", {
        antikythera_entry: f || void 0,
        annotation_id: J,
        annotation_phrase: le
      }));
    }), ce("antikythera annotation scan completed", {
      antikythera_entry: f || void 0,
      scan_total: j.length,
      scan_found: j.length - te,
      scan_missed: te
    }), q;
  }, w = async ({ menuName: M = "antikythera-menu", annotationClass: q = "annotation" } = {}) => {
    let j = [];
    const K = await Q({ annotationClass: q });
    Array.isArray(K) && (j = K);
    const G = new Map(j.map((le) => [le.id, le])), V = (le, Z) => {
      const ue = le.getAttribute("id"), fe = G.get(ue);
      x(le, fe || { id: ue }), le.addEventListener("click", () => {
        var Ce;
        ce("antikythera annotation clicked", {
          antikythera_entry: f || void 0,
          ...B(fe, ue),
          annotation_text: ((Ce = le.textContent) == null ? void 0 : Ce.trim()) || void 0
        }), Z && (Z.setAttribute("activeannotation", "v0_" + ue), setTimeout(() => {
          Z.setAttribute("activeannotation", "");
        }, 150));
      });
    }, te = (le = [], Z) => {
      u && u.disconnect();
      const ue = {
        root: null,
        rootMargin: "0% 0% 0% 0%",
        // top right bottom left
        threshold: 1
      }, fe = (st) => {
        st.forEach((Re) => {
          var yt;
          const Ae = Re.target, qe = Ae.getAttribute("id"), ft = G.get(qe);
          Re.isIntersecting ? (ce(
            "antikythera annotation viewed",
            {
              antikythera_entry: f || void 0,
              ...B(ft, qe),
              annotation_text: ((yt = Ae.textContent) == null ? void 0 : yt.trim()) || void 0
            },
            { onceKey: `annotation-viewed:${f}:${qe}` }
          ), Z.setAttribute("activeannotation", "v1_" + qe), setTimeout(() => {
            Z.setAttribute("activeannotation", "");
          }, 150)) : (Z.setAttribute("inactiveannotation", "v1_" + qe), Z.getAttribute("activeannotation") == "v1_" + qe && Z.setAttribute("activeannotation", ""), setTimeout(() => {
            Z.setAttribute("inactiveannotation", "");
          }, 150));
        });
      };
      u = new IntersectionObserver(fe, ue);
      for (var Ce = 0; Ce < le.length; Ce++)
        u.observe(le[Ce]);
    };
    if (document) {
      const le = document.querySelectorAll(`.${q}`), Z = document.querySelector(M);
      if (!Z) {
        console.warn(`antikythera annotation scan skipped: ${M} was not found`);
        return;
      }
      for (var J = 0; J < le.length; J++)
        V(le[J], Z);
      te(le, Z);
    } else
      console.warn("antikythera initialization: no document present");
  }, z = async ({ menuName: M = "antikythera-menu", annotationClass: q = ".annotation", detectAnnotationsOnInit: j = !0 } = {}) => {
    console.log("antikythera initialization"), ce("antikythera core initialized", {
      antikythera_entry: f || void 0,
      annotation_detection_enabled: j
    });
    const K = () => {
      if (n)
        return;
      const V = `
				${q}{background:black;color:white;border-radius:0.125rem;padding-left:.25rem;padding-right:.25rem;cursor:crosshair;}
				.annotation_whiteOnBlack{background:black;color:white;}
				.annotation_blackOnWhite{background:white;color:black;}
			`;
      if (document) {
        const te = document.head || document.getElementsByTagName("head")[0], J = document.createElement("style");
        te.appendChild(J), J.type = "text/css", J.appendChild(document.createTextNode(V));
      }
    };
    j && await w(), K();
    const G = new CustomEvent("antikythera:initComplete", {
      detail: { entry: f }
    });
    document.dispatchEvent(G);
  }, ee = async (M, q = "antikythera-menu", j = ".annotation", K = !0) => {
    f = M, ce("antikythera core reinitialized", {
      antikythera_entry: f || void 0
    }), await z({ menuName: q, annotationClass: j, detectAnnotationsOnInit: K });
  };
  return {
    entryId: `Antikythera entryId ID: ${f}`,
    getSettings: g,
    getEntry: y,
    getEntryMeta: k,
    getAnnotations: T,
    detectAnnotations: w,
    init: z,
    reinit: ee
  };
};
/**
* @vue/shared v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ta(e, t) {
  const n = new Set(e.split(","));
  return (o) => n.has(o);
}
const Ee = {}, Fn = [], Vt = () => {
}, Xu = () => !1, fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ea = (e) => e.startsWith("onUpdate:"), $e = Object.assign, Aa = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Yu = Object.prototype.hasOwnProperty, ke = (e, t) => Yu.call(e, t), ie = Array.isArray, Dn = (e) => pr(e) === "[object Map]", Zl = (e) => pr(e) === "[object Set]", pe = (e) => typeof e == "function", ze = (e) => typeof e == "string", gn = (e) => typeof e == "symbol", Ie = (e) => e !== null && typeof e == "object", Jl = (e) => (Ie(e) || pe(e)) && pe(e.then) && pe(e.catch), Ql = Object.prototype.toString, pr = (e) => Ql.call(e), Gu = (e) => pr(e).slice(8, -1), hr = (e) => pr(e) === "[object Object]", Ia = (e) => ze(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fo = /* @__PURE__ */ Ta(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), gr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Zu = /-(\w)/g, dt = gr(
  (e) => e.replace(Zu, (t, n) => n ? n.toUpperCase() : "")
), Ju = /\B([A-Z])/g, xt = gr(
  (e) => e.replace(Ju, "-$1").toLowerCase()
), mr = gr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kr = gr(
  (e) => e ? `on${mr(e)}` : ""
), pn = (e, t) => !Object.is(e, t), Wr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, es = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Qu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ia = (e) => {
  const t = ze(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Wi;
const ts = () => Wi || (Wi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Sn(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ze(o) ? od(o) : Sn(o);
      if (r)
        for (const a in r)
          t[a] = r[a];
    }
    return t;
  } else if (ze(e) || Ie(e))
    return e;
}
const ed = /;(?![^(]*\))/g, td = /:([^]+)/, nd = /\/\*[^]*?\*\//g;
function od(e) {
  const t = {};
  return e.replace(nd, "").split(ed).forEach((n) => {
    if (n) {
      const o = n.split(td);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ge(e) {
  let t = "";
  if (ze(e))
    t = e;
  else if (ie(e))
    for (let n = 0; n < e.length; n++) {
      const o = ge(e[n]);
      o && (t += o + " ");
    }
  else if (Ie(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const rd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ad = /* @__PURE__ */ Ta(rd);
function ns(e) {
  return !!e || e === "";
}
const os = (e) => !!(e && e.__v_isRef === !0), de = (e) => ze(e) ? e : e == null ? "" : ie(e) || Ie(e) && (e.toString === Ql || !pe(e.toString)) ? os(e) ? de(e.value) : JSON.stringify(e, rs, 2) : String(e), rs = (e, t) => os(t) ? rs(e, t.value) : Dn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], a) => (n[Xr(o, a) + " =>"] = r, n),
    {}
  )
} : Zl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Xr(n))
} : gn(t) ? Xr(t) : Ie(t) && !ie(t) && !hr(t) ? String(t) : t, Xr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    gn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mt;
class id {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = mt, !t && mt && (this.index = (mt.scopes || (mt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = mt;
      try {
        return mt = this, t();
      } finally {
        mt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    mt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    mt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ld() {
  return mt;
}
let Te;
const Yr = /* @__PURE__ */ new WeakSet();
class as {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.nextEffect = void 0, this.cleanup = void 0, this.scheduler = void 0, mt && mt.active && mt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Yr.has(this) && (Yr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || (this.flags |= 8, this.nextEffect = po, po = this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Xi(this), ls(this);
    const t = Te, n = It;
    Te = this, It = !0;
    try {
      return this.fn();
    } finally {
      ss(this), Te = t, It = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Pa(t);
      this.deps = this.depsTail = void 0, Xi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Yr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    la(this) && this.run();
  }
  get dirty() {
    return la(this);
  }
}
let is = 0, po;
function $a() {
  is++;
}
function Ra() {
  if (--is > 0)
    return;
  let e;
  for (; po; ) {
    let t = po;
    for (po = void 0; t; ) {
      const n = t.nextEffect;
      if (t.nextEffect = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ss(e) {
  let t, n = e.depsTail;
  for (let o = n; o; o = o.prevDep)
    o.version === -1 ? (o === n && (n = o.prevDep), Pa(o), sd(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0;
  e.deps = t, e.depsTail = n;
}
function la(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && cs(t.dep.computed) === !1 || t.dep.version !== t.version)
      return !0;
  return !!e._dirty;
}
function cs(e) {
  if (e.flags & 2)
    return !1;
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === vo))
    return;
  e.globalVersion = vo;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && !la(e)) {
    e.flags &= -3;
    return;
  }
  const n = Te, o = It;
  Te = e, It = !0;
  try {
    ls(e);
    const r = e.fn(e._value);
    (t.version === 0 || pn(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Te = n, It = o, ss(e), e.flags &= -3;
  }
}
function Pa(e) {
  const { dep: t, prevSub: n, nextSub: o } = e;
  if (n && (n.nextSub = o, e.prevSub = void 0), o && (o.prevSub = n, e.nextSub = void 0), t.subs === e && (t.subs = n), !t.subs && t.computed) {
    t.computed.flags &= -5;
    for (let r = t.computed.deps; r; r = r.nextDep)
      Pa(r);
  }
}
function sd(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let It = !0;
const us = [];
function mn() {
  us.push(It), It = !1;
}
function vn() {
  const e = us.pop();
  It = e === void 0 ? !0 : e;
}
function Xi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Te;
    Te = void 0;
    try {
      t();
    } finally {
      Te = n;
    }
  }
}
let vo = 0;
class za {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0;
  }
  track(t) {
    if (!Te || !It || Te === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Te)
      n = this.activeLink = {
        dep: this,
        sub: Te,
        version: this.version,
        nextDep: void 0,
        prevDep: void 0,
        nextSub: void 0,
        prevSub: void 0,
        prevActiveLink: void 0
      }, Te.deps ? (n.prevDep = Te.depsTail, Te.depsTail.nextDep = n, Te.depsTail = n) : Te.deps = Te.depsTail = n, Te.flags & 4 && ds(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = Te.depsTail, n.nextDep = void 0, Te.depsTail.nextDep = n, Te.depsTail = n, Te.deps === n && (Te.deps = o);
    }
    return n;
  }
  trigger(t) {
    this.version++, vo++, this.notify(t);
  }
  notify(t) {
    $a();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify();
    } finally {
      Ra();
    }
  }
}
function ds(e) {
  const t = e.dep.computed;
  if (t && !e.dep.subs) {
    t.flags |= 20;
    for (let o = t.deps; o; o = o.nextDep)
      ds(o);
  }
  const n = e.dep.subs;
  n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
}
const sa = /* @__PURE__ */ new WeakMap(), Tn = Symbol(
  ""
), ca = Symbol(
  ""
), yo = Symbol(
  ""
);
function tt(e, t, n) {
  if (It && Te) {
    let o = sa.get(e);
    o || sa.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = new za()), r.track();
  }
}
function Yt(e, t, n, o, r, a) {
  const i = sa.get(e);
  if (!i) {
    vo++;
    return;
  }
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else {
    const s = ie(e), f = s && Ia(n);
    if (s && n === "length") {
      const u = Number(o);
      i.forEach((d, g) => {
        (g === "length" || g === yo || !gn(g) && g >= u) && l.push(d);
      });
    } else {
      const u = (d) => d && l.push(d);
      switch (n !== void 0 && u(i.get(n)), f && u(i.get(yo)), t) {
        case "add":
          s ? f && u(i.get("length")) : (u(i.get(Tn)), Dn(e) && u(i.get(ca)));
          break;
        case "delete":
          s || (u(i.get(Tn)), Dn(e) && u(i.get(ca)));
          break;
        case "set":
          Dn(e) && u(i.get(Tn));
          break;
      }
    }
  }
  $a();
  for (const s of l)
    s.trigger();
  Ra();
}
function On(e) {
  const t = xe(e);
  return t === e ? t : (tt(t, "iterate", yo), $t(e) ? t : t.map(Ze));
}
function vr(e) {
  return tt(e = xe(e), "iterate", yo), e;
}
const cd = {
  __proto__: null,
  [Symbol.iterator]() {
    return Gr(this, Symbol.iterator, Ze);
  },
  concat(...e) {
    return On(this).concat(
      ...e.map((t) => ie(t) ? On(t) : t)
    );
  },
  entries() {
    return Gr(this, "entries", (e) => (e[1] = Ze(e[1]), e));
  },
  every(e, t) {
    return jt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return jt(this, "filter", e, t, (n) => n.map(Ze), arguments);
  },
  find(e, t) {
    return jt(this, "find", e, t, Ze, arguments);
  },
  findIndex(e, t) {
    return jt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return jt(this, "findLast", e, t, Ze, arguments);
  },
  findLastIndex(e, t) {
    return jt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return jt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zr(this, "includes", e);
  },
  indexOf(...e) {
    return Zr(this, "indexOf", e);
  },
  join(e) {
    return On(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Zr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return jt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return lo(this, "pop");
  },
  push(...e) {
    return lo(this, "push", e);
  },
  reduce(e, ...t) {
    return Yi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Yi(this, "reduceRight", e, t);
  },
  shift() {
    return lo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return jt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return lo(this, "splice", e);
  },
  toReversed() {
    return On(this).toReversed();
  },
  toSorted(e) {
    return On(this).toSorted(e);
  },
  toSpliced(...e) {
    return On(this).toSpliced(...e);
  },
  unshift(...e) {
    return lo(this, "unshift", e);
  },
  values() {
    return Gr(this, "values", Ze);
  }
};
function Gr(e, t, n) {
  const o = vr(e), r = o[t]();
  return o !== e && !$t(e) && (r._next = r.next, r.next = () => {
    const a = r._next();
    return a.value && (a.value = n(a.value)), a;
  }), r;
}
const ud = Array.prototype;
function jt(e, t, n, o, r, a) {
  const i = vr(e), l = i !== e && !$t(e), s = i[t];
  if (s !== ud[t]) {
    const d = s.apply(e, a);
    return l ? Ze(d) : d;
  }
  let f = n;
  i !== e && (l ? f = function(d, g) {
    return n.call(this, Ze(d), g, e);
  } : n.length > 2 && (f = function(d, g) {
    return n.call(this, d, g, e);
  }));
  const u = s.call(i, f, o);
  return l && r ? r(u) : u;
}
function Yi(e, t, n, o) {
  const r = vr(e);
  let a = n;
  return r !== e && ($t(e) ? n.length > 3 && (a = function(i, l, s) {
    return n.call(this, i, l, s, e);
  }) : a = function(i, l, s) {
    return n.call(this, i, Ze(l), s, e);
  }), r[t](a, ...o);
}
function Zr(e, t, n) {
  const o = xe(e);
  tt(o, "iterate", yo);
  const r = o[t](...n);
  return (r === -1 || r === !1) && Ba(n[0]) ? (n[0] = xe(n[0]), o[t](...n)) : r;
}
function lo(e, t, n = []) {
  mn(), $a();
  const o = xe(e)[t].apply(e, n);
  return Ra(), vn(), o;
}
const dd = /* @__PURE__ */ Ta("__proto__,__v_isRef,__isVue"), fs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gn)
);
function fd(e) {
  gn(e) || (e = String(e));
  const t = xe(this);
  return tt(t, "has", e), t.hasOwnProperty(e);
}
class ps {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return o === (r ? a ? Sd : vs : a ? ms : gs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = ie(t);
    if (!r) {
      let s;
      if (i && (s = cd[n]))
        return s;
      if (n === "hasOwnProperty")
        return fd;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Qe(t) ? t : o
    );
    return (gn(n) ? fs.has(n) : dd(n)) || (r || tt(t, "get", n), a) ? l : Qe(l) ? i && Ia(n) ? l : l.value : Ie(l) ? r ? ys(l) : Oa(l) : l;
  }
}
class hs extends ps {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let a = t[n];
    if (!this._isShallow) {
      const s = An(a);
      if (!$t(o) && !An(o) && (a = xe(a), o = xe(o)), !ie(t) && Qe(a) && !Qe(o))
        return s ? !1 : (a.value = o, !0);
    }
    const i = ie(t) && Ia(n) ? Number(n) < t.length : ke(t, n), l = Reflect.set(
      t,
      n,
      o,
      Qe(t) ? t : r
    );
    return t === xe(r) && (i ? pn(o, a) && Yt(t, "set", n, o) : Yt(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = ke(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && o && Yt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!gn(n) || !fs.has(n)) && tt(t, "has", n), o;
  }
  ownKeys(t) {
    return tt(
      t,
      "iterate",
      ie(t) ? "length" : Tn
    ), Reflect.ownKeys(t);
  }
}
class pd extends ps {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const hd = /* @__PURE__ */ new hs(), gd = /* @__PURE__ */ new pd(), md = /* @__PURE__ */ new hs(!0);
const Ma = (e) => e, yr = (e) => Reflect.getPrototypeOf(e);
function Vo(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = xe(e), a = xe(t);
  n || (pn(t, a) && tt(r, "get", t), tt(r, "get", a));
  const { has: i } = yr(r), l = o ? Ma : n ? Va : Ze;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, a))
    return l(e.get(a));
  e !== r && e.get(t);
}
function No(e, t = !1) {
  const n = this.__v_raw, o = xe(n), r = xe(e);
  return t || (pn(e, r) && tt(o, "has", e), tt(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Fo(e, t = !1) {
  return e = e.__v_raw, !t && tt(xe(e), "iterate", Tn), Reflect.get(e, "size", e);
}
function Gi(e, t = !1) {
  !t && !$t(e) && !An(e) && (e = xe(e));
  const n = xe(this);
  return yr(n).has.call(n, e) || (n.add(e), Yt(n, "add", e, e)), this;
}
function Zi(e, t, n = !1) {
  !n && !$t(t) && !An(t) && (t = xe(t));
  const o = xe(this), { has: r, get: a } = yr(o);
  let i = r.call(o, e);
  i || (e = xe(e), i = r.call(o, e));
  const l = a.call(o, e);
  return o.set(e, t), i ? pn(t, l) && Yt(o, "set", e, t) : Yt(o, "add", e, t), this;
}
function Ji(e) {
  const t = xe(this), { has: n, get: o } = yr(t);
  let r = n.call(t, e);
  r || (e = xe(e), r = n.call(t, e)), o && o.call(t, e);
  const a = t.delete(e);
  return r && Yt(t, "delete", e, void 0), a;
}
function Qi() {
  const e = xe(this), t = e.size !== 0, n = e.clear();
  return t && Yt(e, "clear", void 0, void 0), n;
}
function Do(e, t) {
  return function(o, r) {
    const a = this, i = a.__v_raw, l = xe(i), s = t ? Ma : e ? Va : Ze;
    return !e && tt(l, "iterate", Tn), i.forEach((f, u) => o.call(r, s(f), s(u), a));
  };
}
function jo(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, a = xe(r), i = Dn(a), l = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, f = r[e](...o), u = n ? Ma : t ? Va : Ze;
    return !t && tt(
      a,
      "iterate",
      s ? ca : Tn
    ), {
      // iterator protocol
      next() {
        const { value: d, done: g } = f.next();
        return g ? { value: d, done: g } : {
          value: l ? [u(d[0]), u(d[1])] : u(d),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function on(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function vd() {
  const e = {
    get(a) {
      return Vo(this, a);
    },
    get size() {
      return Fo(this);
    },
    has: No,
    add: Gi,
    set: Zi,
    delete: Ji,
    clear: Qi,
    forEach: Do(!1, !1)
  }, t = {
    get(a) {
      return Vo(this, a, !1, !0);
    },
    get size() {
      return Fo(this);
    },
    has: No,
    add(a) {
      return Gi.call(this, a, !0);
    },
    set(a, i) {
      return Zi.call(this, a, i, !0);
    },
    delete: Ji,
    clear: Qi,
    forEach: Do(!1, !0)
  }, n = {
    get(a) {
      return Vo(this, a, !0);
    },
    get size() {
      return Fo(this, !0);
    },
    has(a) {
      return No.call(this, a, !0);
    },
    add: on("add"),
    set: on("set"),
    delete: on("delete"),
    clear: on("clear"),
    forEach: Do(!0, !1)
  }, o = {
    get(a) {
      return Vo(this, a, !0, !0);
    },
    get size() {
      return Fo(this, !0);
    },
    has(a) {
      return No.call(this, a, !0);
    },
    add: on("add"),
    set: on("set"),
    delete: on("delete"),
    clear: on("clear"),
    forEach: Do(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    e[a] = jo(a, !1, !1), n[a] = jo(a, !0, !1), t[a] = jo(a, !1, !0), o[a] = jo(
      a,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  yd,
  bd,
  wd,
  xd
] = /* @__PURE__ */ vd();
function La(e, t) {
  const n = t ? e ? xd : wd : e ? bd : yd;
  return (o, r, a) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    ke(n, r) && r in o ? n : o,
    r,
    a
  );
}
const _d = {
  get: /* @__PURE__ */ La(!1, !1)
}, kd = {
  get: /* @__PURE__ */ La(!1, !0)
}, Cd = {
  get: /* @__PURE__ */ La(!0, !1)
};
const gs = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakMap(), Sd = /* @__PURE__ */ new WeakMap();
function Td(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ed(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Td(Gu(e));
}
function Oa(e) {
  return An(e) ? e : Ha(
    e,
    !1,
    hd,
    _d,
    gs
  );
}
function Ad(e) {
  return Ha(
    e,
    !1,
    md,
    kd,
    ms
  );
}
function ys(e) {
  return Ha(
    e,
    !0,
    gd,
    Cd,
    vs
  );
}
function Ha(e, t, n, o, r) {
  if (!Ie(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = r.get(e);
  if (a)
    return a;
  const i = Ed(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, l), l;
}
function jn(e) {
  return An(e) ? jn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function An(e) {
  return !!(e && e.__v_isReadonly);
}
function $t(e) {
  return !!(e && e.__v_isShallow);
}
function Ba(e) {
  return e ? !!e.__v_raw : !1;
}
function xe(e) {
  const t = e && e.__v_raw;
  return t ? xe(t) : e;
}
function Id(e) {
  return Object.isExtensible(e) && es(e, "__v_skip", !0), e;
}
const Ze = (e) => Ie(e) ? Oa(e) : e, Va = (e) => Ie(e) ? ys(e) : e;
function Qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function X(e) {
  return $d(e, !1);
}
function $d(e, t) {
  return Qe(e) ? e : new Rd(e, t);
}
class Rd {
  constructor(t, n) {
    this.dep = new za(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : xe(t), this._value = n ? t : Ze(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || $t(t) || An(t);
    t = o ? t : xe(t), pn(t, n) && (this._rawValue = t, this._value = o ? t : Ze(t), this.dep.trigger());
  }
}
function Bt(e) {
  return Qe(e) ? e.value : e;
}
const Pd = {
  get: (e, t, n) => t === "__v_raw" ? e : Bt(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Qe(r) && !Qe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function bs(e) {
  return jn(e) ? e : new Proxy(e, Pd);
}
class zd {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new za(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = vo - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    Te !== this && (this.flags |= 16, this.dep.notify());
  }
  get value() {
    const t = this.dep.track();
    return cs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Md(e, t, n = !1) {
  let o, r;
  return pe(e) ? o = e : (o = e.get, r = e.set), new zd(o, r, n);
}
const Uo = {}, or = /* @__PURE__ */ new WeakMap();
let _n;
function Ld(e, t = !1, n = _n) {
  if (n) {
    let o = or.get(n);
    o || or.set(n, o = []), o.push(e);
  }
}
function Od(e, t, n = Ee) {
  const { immediate: o, deep: r, once: a, scheduler: i, augmentJob: l, call: s } = n, f = (w) => r ? w : $t(w) || r === !1 || r === 0 ? dn(w, 1) : dn(w);
  let u, d, g, y, k = !1, T = !1;
  if (Qe(e) ? (d = () => e.value, k = $t(e)) : jn(e) ? (d = () => f(e), k = !0) : ie(e) ? (T = !0, k = e.some((w) => jn(w) || $t(w)), d = () => e.map((w) => {
    if (Qe(w))
      return w.value;
    if (jn(w))
      return f(w);
    if (pe(w))
      return s ? s(w, 2) : w();
  })) : pe(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (g) {
      mn();
      try {
        g();
      } finally {
        vn();
      }
    }
    const w = _n;
    _n = u;
    try {
      return s ? s(e, 3, [y]) : e(y);
    } finally {
      _n = w;
    }
  } : d = Vt, t && r) {
    const w = d, z = r === !0 ? 1 / 0 : r;
    d = () => dn(w(), z);
  }
  const B = ld(), x = () => {
    u.stop(), B && Aa(B.effects, u);
  };
  if (a)
    if (t) {
      const w = t;
      t = (...z) => {
        w(...z), x();
      };
    } else {
      const w = d;
      d = () => {
        w(), x();
      };
    }
  let U = T ? new Array(e.length).fill(Uo) : Uo;
  const Q = (w) => {
    if (!(!(u.flags & 1) || !u.dirty && !w))
      if (t) {
        const z = u.run();
        if (r || k || (T ? z.some((ee, M) => pn(ee, U[M])) : pn(z, U))) {
          g && g();
          const ee = _n;
          _n = u;
          try {
            const M = [
              z,
              // pass undefined as the old value when it's changed for the first time
              U === Uo ? void 0 : T && U[0] === Uo ? [] : U,
              y
            ];
            s ? s(t, 3, M) : (
              // @ts-expect-error
              t(...M)
            ), U = z;
          } finally {
            _n = ee;
          }
        }
      } else
        u.run();
  };
  return l && l(Q), u = new as(d), u.scheduler = i ? () => i(Q, !1) : Q, y = (w) => Ld(w, !1, u), g = u.onStop = () => {
    const w = or.get(u);
    if (w) {
      if (s)
        s(w, 4);
      else
        for (const z of w) z();
      or.delete(u);
    }
  }, t ? o ? Q(!0) : U = u.run() : i ? i(Q.bind(null, !0), !0) : u.run(), x.pause = u.pause.bind(u), x.resume = u.resume.bind(u), x.stop = x, x;
}
function dn(e, t = 1 / 0, n) {
  if (t <= 0 || !Ie(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Qe(e))
    dn(e.value, t, n);
  else if (ie(e))
    for (let o = 0; o < e.length; o++)
      dn(e[o], t, n);
  else if (Zl(e) || Dn(e))
    e.forEach((o) => {
      dn(o, t, n);
    });
  else if (hr(e)) {
    for (const o in e)
      dn(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && dn(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ko(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    br(r, t, n);
  }
}
function Rt(e, t, n, o) {
  if (pe(e)) {
    const r = ko(e, t, n, o);
    return r && Jl(r) && r.catch((a) => {
      br(a, t, n);
    }), r;
  }
  if (ie(e)) {
    const r = [];
    for (let a = 0; a < e.length; a++)
      r.push(Rt(e[a], t, n, o));
    return r;
  }
}
function br(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Ee;
  if (t) {
    let l = t.parent;
    const s = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, s, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (a) {
      mn(), ko(a, null, 10, [
        e,
        s,
        f
      ]), vn();
      return;
    }
  }
  Hd(e, n, r, o, i);
}
function Hd(e, t, n, o = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
let bo = !1, ua = !1;
const it = [];
let Lt = 0;
const Un = [];
let sn = null, Bn = 0;
const ws = /* @__PURE__ */ Promise.resolve();
let Na = null;
function gt(e) {
  const t = Na || ws;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bd(e) {
  let t = bo ? Lt + 1 : 0, n = it.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = it[o], a = wo(r);
    a < e || a === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Fa(e) {
  if (!(e.flags & 1)) {
    const t = wo(e), n = it[it.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= wo(n) ? it.push(e) : it.splice(Bd(t), 0, e), e.flags |= 1, xs();
  }
}
function xs() {
  !bo && !ua && (ua = !0, Na = ws.then(ks));
}
function Vd(e) {
  ie(e) ? Un.push(...e) : sn && e.id === -1 ? sn.splice(Bn + 1, 0, e) : e.flags & 1 || (Un.push(e), e.flags |= 1), xs();
}
function el(e, t, n = bo ? Lt + 1 : 0) {
  for (; n < it.length; n++) {
    const o = it[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid)
        continue;
      it.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags &= -2;
    }
  }
}
function _s(e) {
  if (Un.length) {
    const t = [...new Set(Un)].sort(
      (n, o) => wo(n) - wo(o)
    );
    if (Un.length = 0, sn) {
      sn.push(...t);
      return;
    }
    for (sn = t, Bn = 0; Bn < sn.length; Bn++) {
      const n = sn[Bn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    sn = null, Bn = 0;
  }
}
const wo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ks(e) {
  ua = !1, bo = !0;
  try {
    for (Lt = 0; Lt < it.length; Lt++) {
      const t = it[Lt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ko(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags &= -2);
    }
  } finally {
    for (; Lt < it.length; Lt++) {
      const t = it[Lt];
      t && (t.flags &= -2);
    }
    Lt = 0, it.length = 0, _s(), bo = !1, Na = null, (it.length || Un.length) && ks();
  }
}
let Je = null, Cs = null;
function rr(e) {
  const t = Je;
  return Je = e, Cs = e && e.type.__scopeId || null, t;
}
function Gt(e, t = Je, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && ul(-1);
    const a = rr(t);
    let i;
    try {
      i = e(...r);
    } finally {
      rr(a), o._d && ul(1);
    }
    return i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function bn(e, t, n, o) {
  const r = e.dirs, a = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    a && (l.oldValue = a[i].value);
    let s = l.dir[o];
    s && (mn(), Rt(s, n, 8, [
      e.el,
      l,
      e,
      t
    ]), vn());
  }
}
const Nd = Symbol("_vte"), Ss = (e) => e.__isTeleport, cn = Symbol("_leaveCb"), qo = Symbol("_enterCb");
function Ts() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Co(() => {
    e.isMounted = !0;
  }), ja(() => {
    e.isUnmounting = !0;
  }), e;
}
const wt = [Function, Array], Es = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: wt,
  onEnter: wt,
  onAfterEnter: wt,
  onEnterCancelled: wt,
  // leave
  onBeforeLeave: wt,
  onLeave: wt,
  onAfterLeave: wt,
  onLeaveCancelled: wt,
  // appear
  onBeforeAppear: wt,
  onAppear: wt,
  onAfterAppear: wt,
  onAppearCancelled: wt
}, As = (e) => {
  const t = e.subTree;
  return t.component ? As(t.component) : t;
}, Fd = {
  name: "BaseTransition",
  props: Es,
  setup(e, { slots: t }) {
    const n = nc(), o = Ts();
    return () => {
      const r = t.default && Da(t.default(), !0);
      if (!r || !r.length)
        return;
      const a = Is(r), i = xe(e), { mode: l } = i;
      if (o.isLeaving)
        return Jr(a);
      const s = tl(a);
      if (!s)
        return Jr(a);
      let f = xo(
        s,
        i,
        o,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (g) => f = g
      );
      s.type !== lt && In(s, f);
      const u = n.subTree, d = u && tl(u);
      if (d && d.type !== lt && !kn(s, d) && As(n).type !== lt) {
        const g = xo(
          d,
          i,
          o,
          n
        );
        if (In(d, g), l === "out-in" && s.type !== lt)
          return o.isLeaving = !0, g.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete g.afterLeave;
          }, Jr(a);
        l === "in-out" && s.type !== lt && (g.delayLeave = (y, k, T) => {
          const B = $s(
            o,
            d
          );
          B[String(d.key)] = d, y[cn] = () => {
            k(), y[cn] = void 0, delete f.delayedLeave;
          }, f.delayedLeave = T;
        });
      }
      return a;
    };
  }
};
function Is(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== lt) {
        t = n;
        break;
      }
  }
  return t;
}
const Dd = Fd;
function $s(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function xo(e, t, n, o, r) {
  const {
    appear: a,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: s,
    onEnter: f,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: g,
    onLeave: y,
    onAfterLeave: k,
    onLeaveCancelled: T,
    onBeforeAppear: B,
    onAppear: x,
    onAfterAppear: U,
    onAppearCancelled: Q
  } = t, w = String(e.key), z = $s(n, e), ee = (j, K) => {
    j && Rt(
      j,
      o,
      9,
      K
    );
  }, M = (j, K) => {
    const G = K[1];
    ee(j, K), ie(j) ? j.every((V) => V.length <= 1) && G() : j.length <= 1 && G();
  }, q = {
    mode: i,
    persisted: l,
    beforeEnter(j) {
      let K = s;
      if (!n.isMounted)
        if (a)
          K = B || s;
        else
          return;
      j[cn] && j[cn](
        !0
        /* cancelled */
      );
      const G = z[w];
      G && kn(e, G) && G.el[cn] && G.el[cn](), ee(K, [j]);
    },
    enter(j) {
      let K = f, G = u, V = d;
      if (!n.isMounted)
        if (a)
          K = x || f, G = U || u, V = Q || d;
        else
          return;
      let te = !1;
      const J = j[qo] = (le) => {
        te || (te = !0, le ? ee(V, [j]) : ee(G, [j]), q.delayedLeave && q.delayedLeave(), j[qo] = void 0);
      };
      K ? M(K, [j, J]) : J();
    },
    leave(j, K) {
      const G = String(e.key);
      if (j[qo] && j[qo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      ee(g, [j]);
      let V = !1;
      const te = j[cn] = (J) => {
        V || (V = !0, K(), J ? ee(T, [j]) : ee(k, [j]), j[cn] = void 0, z[G] === e && delete z[G]);
      };
      z[G] = e, y ? M(y, [j, te]) : te();
    },
    clone(j) {
      const K = xo(
        j,
        t,
        n,
        o,
        r
      );
      return r && r(K), K;
    }
  };
  return q;
}
function Jr(e) {
  if (wr(e))
    return e = hn(e), e.children = null, e;
}
function tl(e) {
  if (!wr(e))
    return Ss(e.type) && e.children ? Is(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && pe(n.default))
      return n.default();
  }
}
function In(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, In(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Da(e, t = !1, n) {
  let o = [], r = 0;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
    i.type === be ? (i.patchFlag & 128 && r++, o = o.concat(
      Da(i.children, t, l)
    )) : (t || i.type !== lt) && o.push(l != null ? hn(i, { key: l }) : i);
  }
  if (r > 1)
    for (let a = 0; a < o.length; a++)
      o[a].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Rs(e, t) {
  return pe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    $e({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ps(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function da(e, t, n, o, r = !1) {
  if (ie(e)) {
    e.forEach(
      (k, T) => da(
        k,
        t && (ie(t) ? t[T] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (qn(o) && !r)
    return;
  const a = o.shapeFlag & 4 ? Ya(o.component) : o.el, i = r ? null : a, { i: l, r: s } = e, f = t && t.r, u = l.refs === Ee ? l.refs = {} : l.refs, d = l.setupState, g = xe(d), y = d === Ee ? () => !1 : (k) => ke(g, k);
  if (f != null && f !== s && (ze(f) ? (u[f] = null, y(f) && (d[f] = null)) : Qe(f) && (f.value = null)), pe(s))
    ko(s, l, 12, [i, u]);
  else {
    const k = ze(s), T = Qe(s);
    if (k || T) {
      const B = () => {
        if (e.f) {
          const x = k ? y(s) ? d[s] : u[s] : s.value;
          r ? ie(x) && Aa(x, a) : ie(x) ? x.includes(a) || x.push(a) : k ? (u[s] = [a], y(s) && (d[s] = u[s])) : (s.value = [a], e.k && (u[e.k] = s.value));
        } else k ? (u[s] = i, y(s) && (d[s] = i)) : T && (s.value = i, e.k && (u[e.k] = i));
      };
      i ? (B.id = -1, ht(B, n)) : B();
    }
  }
}
const qn = (e) => !!e.type.__asyncLoader, wr = (e) => e.type.__isKeepAlive;
function jd(e, t) {
  zs(e, "a", t);
}
function Ud(e, t) {
  zs(e, "da", t);
}
function zs(e, t, n = We) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (xr(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      wr(r.parent.vnode) && qd(o, t, n, r), r = r.parent;
  }
}
function qd(e, t, n, o) {
  const r = xr(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Ua(() => {
    Aa(o[t], r);
  }, n);
}
function xr(e, t, n = We, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
      mn();
      const l = So(n), s = Rt(t, n, e, i);
      return l(), vn(), s;
    });
    return o ? r.unshift(a) : r.push(a), a;
  }
}
const Zt = (e) => (t, n = We) => {
  (!Cr || e === "sp") && xr(e, (...o) => t(...o), n);
}, Kd = Zt("bm"), Co = Zt("m"), Wd = Zt(
  "bu"
), Ms = Zt("u"), ja = Zt(
  "bum"
), Ua = Zt("um"), Xd = Zt(
  "sp"
), Yd = Zt("rtg"), Gd = Zt("rtc");
function Zd(e, t = We) {
  xr("ec", e, t);
}
const Jd = "components", Ls = Symbol.for("v-ndc");
function Qd(e) {
  return ze(e) ? ef(Jd, e, !1) || e : e || Ls;
}
function ef(e, t, n = !0, o = !1) {
  const r = Je || We;
  if (r) {
    const a = r.type;
    {
      const l = jf(
        a,
        !1
      );
      if (l && (l === t || l === dt(t) || l === mr(dt(t))))
        return a;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      nl(r[e] || a[e], t) || // global registration
      nl(r.appContext[e], t)
    );
    return !i && o ? a : i;
  }
}
function nl(e, t) {
  return e && (e[t] || e[dt(t)] || e[mr(dt(t))]);
}
function _t(e, t, n, o) {
  let r;
  const a = n, i = ie(e);
  if (i || ze(e)) {
    const l = i && jn(e);
    l && (e = vr(e)), r = new Array(e.length);
    for (let s = 0, f = e.length; s < f; s++)
      r[s] = t(
        l ? Ze(e[s]) : e[s],
        s,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, a);
  } else if (Ie(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, s) => t(l, s, void 0, a)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let s = 0, f = l.length; s < f; s++) {
        const u = l[s];
        r[s] = t(e[u], u, s, a);
      }
    }
  else
    r = [];
  return r;
}
function tf(e, t, n = {}, o, r) {
  if (Je.ce || Je.parent && qn(Je.parent) && Je.parent.ce)
    return C(), et(
      be,
      null,
      [oe("slot", n, o)],
      64
    );
  let a = e[t];
  a && a._c && (a._d = !1), C();
  const i = a && Os(a(n)), l = et(
    be,
    {
      key: (n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && o ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), a && a._c && (a._d = !0), l;
}
function Os(e) {
  return e.some((t) => ir(t) ? !(t.type === lt || t.type === be && !Os(t.children)) : !0) ? e : null;
}
const fa = (e) => e ? oc(e) ? Ya(e) : fa(e.parent) : null, ho = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ $e(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fa(e.parent),
    $root: (e) => fa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => qa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = gt.bind(e.proxy)),
    $watch: (e) => Sf.bind(e)
  })
), Qr = (e, t) => e !== Ee && !e.__isScriptSetup && ke(e, t), nf = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: a, accessCache: i, type: l, appContext: s } = e;
    let f;
    if (t[0] !== "$") {
      const y = i[t];
      if (y !== void 0)
        switch (y) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return a[t];
        }
      else {
        if (Qr(o, t))
          return i[t] = 1, o[t];
        if (r !== Ee && ke(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && ke(f, t)
        )
          return i[t] = 3, a[t];
        if (n !== Ee && ke(n, t))
          return i[t] = 4, n[t];
        pa && (i[t] = 0);
      }
    }
    const u = ho[t];
    let d, g;
    if (u)
      return t === "$attrs" && tt(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Ee && ke(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = s.config.globalProperties, ke(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: a } = e;
    return Qr(r, t) ? (r[t] = n, !0) : o !== Ee && ke(o, t) ? (o[t] = n, !0) : ke(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: a }
  }, i) {
    let l;
    return !!n[i] || e !== Ee && ke(e, i) || Qr(t, i) || (l = a[0]) && ke(l, i) || ke(o, i) || ke(ho, i) || ke(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ol(e) {
  return ie(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let pa = !0;
function of(e) {
  const t = qa(e), n = e.proxy, o = e.ctx;
  pa = !1, t.beforeCreate && rl(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: a,
    methods: i,
    watch: l,
    provide: s,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: g,
    beforeUpdate: y,
    updated: k,
    activated: T,
    deactivated: B,
    beforeDestroy: x,
    beforeUnmount: U,
    destroyed: Q,
    unmounted: w,
    render: z,
    renderTracked: ee,
    renderTriggered: M,
    errorCaptured: q,
    serverPrefetch: j,
    // public API
    expose: K,
    inheritAttrs: G,
    // assets
    components: V,
    directives: te,
    filters: J
  } = t;
  if (f && rf(f, o, null), i)
    for (const ue in i) {
      const fe = i[ue];
      pe(fe) && (o[ue] = fe.bind(n));
    }
  if (r) {
    const ue = r.call(n, n);
    Ie(ue) && (e.data = Oa(ue));
  }
  if (pa = !0, a)
    for (const ue in a) {
      const fe = a[ue], Ce = pe(fe) ? fe.bind(n, n) : pe(fe.get) ? fe.get.bind(n, n) : Vt, st = !pe(fe) && pe(fe.set) ? fe.set.bind(n) : Vt, Re = Y({
        get: Ce,
        set: st
      });
      Object.defineProperty(o, ue, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (Ae) => Re.value = Ae
      });
    }
  if (l)
    for (const ue in l)
      Hs(l[ue], o, n, ue);
  if (s) {
    const ue = pe(s) ? s.call(n) : s;
    Reflect.ownKeys(ue).forEach((fe) => {
      df(fe, ue[fe]);
    });
  }
  u && rl(u, e, "c");
  function Z(ue, fe) {
    ie(fe) ? fe.forEach((Ce) => ue(Ce.bind(n))) : fe && ue(fe.bind(n));
  }
  if (Z(Kd, d), Z(Co, g), Z(Wd, y), Z(Ms, k), Z(jd, T), Z(Ud, B), Z(Zd, q), Z(Gd, ee), Z(Yd, M), Z(ja, U), Z(Ua, w), Z(Xd, j), ie(K))
    if (K.length) {
      const ue = e.exposed || (e.exposed = {});
      K.forEach((fe) => {
        Object.defineProperty(ue, fe, {
          get: () => n[fe],
          set: (Ce) => n[fe] = Ce
        });
      });
    } else e.exposed || (e.exposed = {});
  z && e.render === Vt && (e.render = z), G != null && (e.inheritAttrs = G), V && (e.components = V), te && (e.directives = te), j && Ps(e);
}
function rf(e, t, n = Vt) {
  ie(e) && (e = ha(e));
  for (const o in e) {
    const r = e[o];
    let a;
    Ie(r) ? "default" in r ? a = Go(
      r.from || o,
      r.default,
      !0
    ) : a = Go(r.from || o) : a = Go(r), Qe(a) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (i) => a.value = i
    }) : t[o] = a;
  }
}
function rl(e, t, n) {
  Rt(
    ie(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Hs(e, t, n, o) {
  let r = o.includes(".") ? Gs(n, o) : () => n[o];
  if (ze(e)) {
    const a = t[e];
    pe(a) && Ot(r, a);
  } else if (pe(e))
    Ot(r, e.bind(n));
  else if (Ie(e))
    if (ie(e))
      e.forEach((a) => Hs(a, t, n, o));
    else {
      const a = pe(e.handler) ? e.handler.bind(n) : t[e.handler];
      pe(a) && Ot(r, a, e);
    }
}
function qa(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: a,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = a.get(t);
  let s;
  return l ? s = l : !r.length && !n && !o ? s = t : (s = {}, r.length && r.forEach(
    (f) => ar(s, f, i, !0)
  ), ar(s, t, i)), Ie(t) && a.set(t, s), s;
}
function ar(e, t, n, o = !1) {
  const { mixins: r, extends: a } = t;
  a && ar(e, a, n, !0), r && r.forEach(
    (i) => ar(e, i, n, !0)
  );
  for (const i in t)
    if (!(o && i === "expose")) {
      const l = af[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const af = {
  data: al,
  props: il,
  emits: il,
  // objects
  methods: uo,
  computed: uo,
  // lifecycle
  beforeCreate: at,
  created: at,
  beforeMount: at,
  mounted: at,
  beforeUpdate: at,
  updated: at,
  beforeDestroy: at,
  beforeUnmount: at,
  destroyed: at,
  unmounted: at,
  activated: at,
  deactivated: at,
  errorCaptured: at,
  serverPrefetch: at,
  // assets
  components: uo,
  directives: uo,
  // watch
  watch: sf,
  // provide / inject
  provide: al,
  inject: lf
};
function al(e, t) {
  return t ? e ? function() {
    return $e(
      pe(e) ? e.call(this, this) : e,
      pe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function lf(e, t) {
  return uo(ha(e), ha(t));
}
function ha(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function at(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function uo(e, t) {
  return e ? $e(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function il(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : $e(
    /* @__PURE__ */ Object.create(null),
    ol(e),
    ol(t ?? {})
  ) : t;
}
function sf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = $e(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = at(e[o], t[o]);
  return n;
}
function Bs() {
  return {
    app: null,
    config: {
      isNativeTag: Xu,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let cf = 0;
function uf(e, t) {
  return function(o, r = null) {
    pe(o) || (o = $e({}, o)), r != null && !Ie(r) && (r = null);
    const a = Bs(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let s = !1;
    const f = a.app = {
      _uid: cf++,
      _component: o,
      _props: r,
      _container: null,
      _context: a,
      _instance: null,
      version: qf,
      get config() {
        return a.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return i.has(u) || (u && pe(u.install) ? (i.add(u), u.install(f, ...d)) : pe(u) && (i.add(u), u(f, ...d))), f;
      },
      mixin(u) {
        return a.mixins.includes(u) || a.mixins.push(u), f;
      },
      component(u, d) {
        return d ? (a.components[u] = d, f) : a.components[u];
      },
      directive(u, d) {
        return d ? (a.directives[u] = d, f) : a.directives[u];
      },
      mount(u, d, g) {
        if (!s) {
          const y = f._ceVNode || oe(o, r);
          return y.appContext = a, g === !0 ? g = "svg" : g === !1 && (g = void 0), d && t ? t(y, u) : e(y, u, g), s = !0, f._container = u, u.__vue_app__ = f, Ya(y.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        s && (Rt(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, d) {
        return a.provides[u] = d, f;
      },
      runWithContext(u) {
        const d = Kn;
        Kn = f;
        try {
          return u();
        } finally {
          Kn = d;
        }
      }
    };
    return f;
  };
}
let Kn = null;
function df(e, t) {
  if (We) {
    let n = We.provides;
    const o = We.parent && We.parent.provides;
    o === n && (n = We.provides = Object.create(o)), n[e] = t;
  }
}
function Go(e, t, n = !1) {
  const o = We || Je;
  if (o || Kn) {
    const r = Kn ? Kn._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && pe(t) ? t.call(o && o.proxy) : t;
  }
}
const Vs = {}, Ns = () => Object.create(Vs), Fs = (e) => Object.getPrototypeOf(e) === Vs;
function ff(e, t, n, o = !1) {
  const r = {}, a = Ns();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ds(e, t, r, a);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = o ? r : Ad(r) : e.type.props ? e.props = r : e.props = a, e.attrs = a;
}
function pf(e, t, n, o) {
  const {
    props: r,
    attrs: a,
    vnode: { patchFlag: i }
  } = e, l = xe(r), [s] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let g = u[d];
        if (_r(e.emitsOptions, g))
          continue;
        const y = t[g];
        if (s)
          if (ke(a, g))
            y !== a[g] && (a[g] = y, f = !0);
          else {
            const k = dt(g);
            r[k] = ga(
              s,
              l,
              k,
              y,
              e,
              !1
            );
          }
        else
          y !== a[g] && (a[g] = y, f = !0);
      }
    }
  } else {
    Ds(e, t, r, a) && (f = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !ke(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = xt(d)) === d || !ke(t, u))) && (s ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = ga(
        s,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (a !== l)
      for (const d in a)
        (!t || !ke(t, d)) && (delete a[d], f = !0);
  }
  f && Yt(e.attrs, "set", "");
}
function Ds(e, t, n, o) {
  const [r, a] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let s in t) {
      if (fo(s))
        continue;
      const f = t[s];
      let u;
      r && ke(r, u = dt(s)) ? !a || !a.includes(u) ? n[u] = f : (l || (l = {}))[u] = f : _r(e.emitsOptions, s) || (!(s in o) || f !== o[s]) && (o[s] = f, i = !0);
    }
  if (a) {
    const s = xe(n), f = l || Ee;
    for (let u = 0; u < a.length; u++) {
      const d = a[u];
      n[d] = ga(
        r,
        s,
        d,
        f[d],
        e,
        !ke(f, d)
      );
    }
  }
  return i;
}
function ga(e, t, n, o, r, a) {
  const i = e[n];
  if (i != null) {
    const l = ke(i, "default");
    if (l && o === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && pe(s)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const u = So(r);
          o = f[n] = s.call(
            null,
            t
          ), u();
        }
      } else
        o = s;
      r.ce && r.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (a && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === xt(n)) && (o = !0));
  }
  return o;
}
const hf = /* @__PURE__ */ new WeakMap();
function js(e, t, n = !1) {
  const o = n ? hf : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const a = e.props, i = {}, l = [];
  let s = !1;
  if (!pe(e)) {
    const u = (d) => {
      s = !0;
      const [g, y] = js(d, t, !0);
      $e(i, g), y && l.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!a && !s)
    return Ie(e) && o.set(e, Fn), Fn;
  if (ie(a))
    for (let u = 0; u < a.length; u++) {
      const d = dt(a[u]);
      ll(d) && (i[d] = Ee);
    }
  else if (a)
    for (const u in a) {
      const d = dt(u);
      if (ll(d)) {
        const g = a[u], y = i[d] = ie(g) || pe(g) ? { type: g } : $e({}, g), k = y.type;
        let T = !1, B = !0;
        if (ie(k))
          for (let x = 0; x < k.length; ++x) {
            const U = k[x], Q = pe(U) && U.name;
            if (Q === "Boolean") {
              T = !0;
              break;
            } else Q === "String" && (B = !1);
          }
        else
          T = pe(k) && k.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = T, y[
          1
          /* shouldCastTrue */
        ] = B, (T || ke(y, "default")) && l.push(d);
      }
    }
  const f = [i, l];
  return Ie(e) && o.set(e, f), f;
}
function ll(e) {
  return e[0] !== "$" && !fo(e);
}
const Us = (e) => e[0] === "_" || e === "$stable", Ka = (e) => ie(e) ? e.map(Ht) : [Ht(e)], gf = (e, t, n) => {
  if (t._n)
    return t;
  const o = Gt((...r) => Ka(t(...r)), n);
  return o._c = !1, o;
}, qs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Us(r)) continue;
    const a = e[r];
    if (pe(a))
      t[r] = gf(r, a, o);
    else if (a != null) {
      const i = Ka(a);
      t[r] = () => i;
    }
  }
}, Ks = (e, t) => {
  const n = Ka(t);
  e.slots.default = () => n;
}, Ws = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, mf = (e, t, n) => {
  const o = e.slots = Ns();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ws(o, t, n), n && es(o, "_", r, !0)) : qs(t, o);
  } else t && Ks(e, t);
}, vf = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let a = !0, i = Ee;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? a = !1 : Ws(r, t, n) : (a = !t.$stable, qs(t, r)), i = t;
  } else t && (Ks(e, t), i = { default: 1 });
  if (a)
    for (const l in r)
      !Us(l) && i[l] == null && delete r[l];
}, ht = Pf;
function yf(e) {
  return bf(e);
}
function bf(e, t) {
  const n = ts();
  n.__VUE__ = !0;
  const {
    insert: o,
    remove: r,
    patchProp: a,
    createElement: i,
    createText: l,
    createComment: s,
    setText: f,
    setElementText: u,
    parentNode: d,
    nextSibling: g,
    setScopeId: y = Vt,
    insertStaticContent: k
  } = e, T = (p, m, _, P = null, A = null, $ = null, F = void 0, N = null, O = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !kn(p, m) && (P = Nt(p), Ae(p, A, $, !0), p = null), m.patchFlag === -2 && (O = !1, m.dynamicChildren = null);
    const { type: I, ref: ne, shapeFlag: D } = m;
    switch (I) {
      case kr:
        B(p, m, _, P);
        break;
      case lt:
        x(p, m, _, P);
        break;
      case Zo:
        p == null && U(m, _, P, F);
        break;
      case be:
        V(
          p,
          m,
          _,
          P,
          A,
          $,
          F,
          N,
          O
        );
        break;
      default:
        D & 1 ? z(
          p,
          m,
          _,
          P,
          A,
          $,
          F,
          N,
          O
        ) : D & 6 ? te(
          p,
          m,
          _,
          P,
          A,
          $,
          F,
          N,
          O
        ) : (D & 64 || D & 128) && I.process(
          p,
          m,
          _,
          P,
          A,
          $,
          F,
          N,
          O,
          Ct
        );
    }
    ne != null && A && da(ne, p && p.ref, $, m || p, !m);
  }, B = (p, m, _, P) => {
    if (p == null)
      o(
        m.el = l(m.children),
        _,
        P
      );
    else {
      const A = m.el = p.el;
      m.children !== p.children && f(A, m.children);
    }
  }, x = (p, m, _, P) => {
    p == null ? o(
      m.el = s(m.children || ""),
      _,
      P
    ) : m.el = p.el;
  }, U = (p, m, _, P) => {
    [p.el, p.anchor] = k(
      p.children,
      m,
      _,
      P,
      p.el,
      p.anchor
    );
  }, Q = ({ el: p, anchor: m }, _, P) => {
    let A;
    for (; p && p !== m; )
      A = g(p), o(p, _, P), p = A;
    o(m, _, P);
  }, w = ({ el: p, anchor: m }) => {
    let _;
    for (; p && p !== m; )
      _ = g(p), r(p), p = _;
    r(m);
  }, z = (p, m, _, P, A, $, F, N, O) => {
    m.type === "svg" ? F = "svg" : m.type === "math" && (F = "mathml"), p == null ? ee(
      m,
      _,
      P,
      A,
      $,
      F,
      N,
      O
    ) : j(
      p,
      m,
      A,
      $,
      F,
      N,
      O
    );
  }, ee = (p, m, _, P, A, $, F, N) => {
    let O, I;
    const { props: ne, shapeFlag: D, transition: W, dirs: ae } = p;
    if (O = p.el = i(
      p.type,
      $,
      ne && ne.is,
      ne
    ), D & 8 ? u(O, p.children) : D & 16 && q(
      p.children,
      O,
      null,
      P,
      A,
      ea(p, $),
      F,
      N
    ), ae && bn(p, null, P, "created"), M(O, p, p.scopeId, F, P), ne) {
      for (const ve in ne)
        ve !== "value" && !fo(ve) && a(O, ve, null, ne[ve], $, P);
      "value" in ne && a(O, "value", null, ne.value, $), (I = ne.onVnodeBeforeMount) && Mt(I, P, p);
    }
    ae && bn(p, null, P, "beforeMount");
    const he = wf(A, W);
    he && W.beforeEnter(O), o(O, m, _), ((I = ne && ne.onVnodeMounted) || he || ae) && ht(() => {
      I && Mt(I, P, p), he && W.enter(O), ae && bn(p, null, P, "mounted");
    }, A);
  }, M = (p, m, _, P, A) => {
    if (_ && y(p, _), P)
      for (let $ = 0; $ < P.length; $++)
        y(p, P[$]);
    if (A) {
      let $ = A.subTree;
      if (m === $ || Js($.type) && ($.ssContent === m || $.ssFallback === m)) {
        const F = A.vnode;
        M(
          p,
          F,
          F.scopeId,
          F.slotScopeIds,
          A.parent
        );
      }
    }
  }, q = (p, m, _, P, A, $, F, N, O = 0) => {
    for (let I = O; I < p.length; I++) {
      const ne = p[I] = N ? un(p[I]) : Ht(p[I]);
      T(
        null,
        ne,
        m,
        _,
        P,
        A,
        $,
        F,
        N
      );
    }
  }, j = (p, m, _, P, A, $, F) => {
    const N = m.el = p.el;
    let { patchFlag: O, dynamicChildren: I, dirs: ne } = m;
    O |= p.patchFlag & 16;
    const D = p.props || Ee, W = m.props || Ee;
    let ae;
    if (_ && wn(_, !1), (ae = W.onVnodeBeforeUpdate) && Mt(ae, _, m, p), ne && bn(m, p, _, "beforeUpdate"), _ && wn(_, !0), (D.innerHTML && W.innerHTML == null || D.textContent && W.textContent == null) && u(N, ""), I ? K(
      p.dynamicChildren,
      I,
      N,
      _,
      P,
      ea(m, A),
      $
    ) : F || fe(
      p,
      m,
      N,
      null,
      _,
      P,
      ea(m, A),
      $,
      !1
    ), O > 0) {
      if (O & 16)
        G(N, D, W, _, A);
      else if (O & 2 && D.class !== W.class && a(N, "class", null, W.class, A), O & 4 && a(N, "style", D.style, W.style, A), O & 8) {
        const he = m.dynamicProps;
        for (let ve = 0; ve < he.length; ve++) {
          const ye = he[ve], Ve = D[ye], Me = W[ye];
          (Me !== Ve || ye === "value") && a(N, ye, Ve, Me, A, _);
        }
      }
      O & 1 && p.children !== m.children && u(N, m.children);
    } else !F && I == null && G(N, D, W, _, A);
    ((ae = W.onVnodeUpdated) || ne) && ht(() => {
      ae && Mt(ae, _, m, p), ne && bn(m, p, _, "updated");
    }, P);
  }, K = (p, m, _, P, A, $, F) => {
    for (let N = 0; N < m.length; N++) {
      const O = p[N], I = m[N], ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !kn(O, I) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? d(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      T(
        O,
        I,
        ne,
        null,
        P,
        A,
        $,
        F,
        !0
      );
    }
  }, G = (p, m, _, P, A) => {
    if (m !== _) {
      if (m !== Ee)
        for (const $ in m)
          !fo($) && !($ in _) && a(
            p,
            $,
            m[$],
            null,
            A,
            P
          );
      for (const $ in _) {
        if (fo($)) continue;
        const F = _[$], N = m[$];
        F !== N && $ !== "value" && a(p, $, N, F, A, P);
      }
      "value" in _ && a(p, "value", m.value, _.value, A);
    }
  }, V = (p, m, _, P, A, $, F, N, O) => {
    const I = m.el = p ? p.el : l(""), ne = m.anchor = p ? p.anchor : l("");
    let { patchFlag: D, dynamicChildren: W, slotScopeIds: ae } = m;
    ae && (N = N ? N.concat(ae) : ae), p == null ? (o(I, _, P), o(ne, _, P), q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      ne,
      A,
      $,
      F,
      N,
      O
    )) : D > 0 && D & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (K(
      p.dynamicChildren,
      W,
      _,
      A,
      $,
      F,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || A && m === A.subTree) && Xs(
      p,
      m,
      !0
      /* shallow */
    )) : fe(
      p,
      m,
      _,
      ne,
      A,
      $,
      F,
      N,
      O
    );
  }, te = (p, m, _, P, A, $, F, N, O) => {
    m.slotScopeIds = N, p == null ? m.shapeFlag & 512 ? A.ctx.activate(
      m,
      _,
      P,
      F,
      O
    ) : J(
      m,
      _,
      P,
      A,
      $,
      F,
      O
    ) : le(p, m, O);
  }, J = (p, m, _, P, A, $, F) => {
    const N = p.component = Bf(
      p,
      P,
      A
    );
    if (wr(p) && (N.ctx.renderer = Ct), Vf(N, !1, F), N.asyncDep) {
      if (A && A.registerDep(N, Z, F), !p.el) {
        const O = N.subTree = oe(lt);
        x(null, O, m, _);
      }
    } else
      Z(
        N,
        p,
        m,
        _,
        A,
        $,
        F
      );
  }, le = (p, m, _) => {
    const P = m.component = p.component;
    if ($f(p, m, _))
      if (P.asyncDep && !P.asyncResolved) {
        ue(P, m, _);
        return;
      } else
        P.next = m, P.update();
    else
      m.el = p.el, P.vnode = m;
  }, Z = (p, m, _, P, A, $, F) => {
    const N = () => {
      if (p.isMounted) {
        let { next: D, bu: W, u: ae, parent: he, vnode: ve } = p;
        {
          const Oe = Ys(p);
          if (Oe) {
            D && (D.el = ve.el, ue(p, D, F)), Oe.asyncDep.then(() => {
              p.isUnmounted || N();
            });
            return;
          }
        }
        let ye = D, Ve;
        wn(p, !1), D ? (D.el = ve.el, ue(p, D, F)) : D = ve, W && Wr(W), (Ve = D.props && D.props.onVnodeBeforeUpdate) && Mt(Ve, he, D, ve), wn(p, !0);
        const Me = ta(p), ct = p.subTree;
        p.subTree = Me, T(
          ct,
          Me,
          // parent may have changed if it's in a teleport
          d(ct.el),
          // anchor may have changed if it's in a fragment
          Nt(ct),
          p,
          A,
          $
        ), D.el = Me.el, ye === null && Rf(p, Me.el), ae && ht(ae, A), (Ve = D.props && D.props.onVnodeUpdated) && ht(
          () => Mt(Ve, he, D, ve),
          A
        );
      } else {
        let D;
        const { el: W, props: ae } = m, { bm: he, m: ve, parent: ye, root: Ve, type: Me } = p, ct = qn(m);
        if (wn(p, !1), he && Wr(he), !ct && (D = ae && ae.onVnodeBeforeMount) && Mt(D, ye, m), wn(p, !0), W && bt) {
          const Oe = () => {
            p.subTree = ta(p), bt(
              W,
              p.subTree,
              p,
              A,
              null
            );
          };
          ct && Me.__asyncHydrate ? Me.__asyncHydrate(
            W,
            p,
            Oe
          ) : Oe();
        } else {
          Ve.ce && Ve.ce._injectChildStyle(Me);
          const Oe = p.subTree = ta(p);
          T(
            null,
            Oe,
            _,
            P,
            p,
            A,
            $
          ), m.el = Oe.el;
        }
        if (ve && ht(ve, A), !ct && (D = ae && ae.onVnodeMounted)) {
          const Oe = m;
          ht(
            () => Mt(D, ye, Oe),
            A
          );
        }
        (m.shapeFlag & 256 || ye && qn(ye.vnode) && ye.vnode.shapeFlag & 256) && p.a && ht(p.a, A), p.isMounted = !0, m = _ = P = null;
      }
    };
    p.scope.on();
    const O = p.effect = new as(N);
    p.scope.off();
    const I = p.update = O.run.bind(O), ne = p.job = O.runIfDirty.bind(O);
    ne.i = p, ne.id = p.uid, O.scheduler = () => Fa(ne), wn(p, !0), I();
  }, ue = (p, m, _) => {
    m.component = p;
    const P = p.vnode.props;
    p.vnode = m, p.next = null, pf(p, m.props, P, _), vf(p, m.children, _), mn(), el(p), vn();
  }, fe = (p, m, _, P, A, $, F, N, O = !1) => {
    const I = p && p.children, ne = p ? p.shapeFlag : 0, D = m.children, { patchFlag: W, shapeFlag: ae } = m;
    if (W > 0) {
      if (W & 128) {
        st(
          I,
          D,
          _,
          P,
          A,
          $,
          F,
          N,
          O
        );
        return;
      } else if (W & 256) {
        Ce(
          I,
          D,
          _,
          P,
          A,
          $,
          F,
          N,
          O
        );
        return;
      }
    }
    ae & 8 ? (ne & 16 && Be(I, A, $), D !== I && u(_, D)) : ne & 16 ? ae & 16 ? st(
      I,
      D,
      _,
      P,
      A,
      $,
      F,
      N,
      O
    ) : Be(I, A, $, !0) : (ne & 8 && u(_, ""), ae & 16 && q(
      D,
      _,
      P,
      A,
      $,
      F,
      N,
      O
    ));
  }, Ce = (p, m, _, P, A, $, F, N, O) => {
    p = p || Fn, m = m || Fn;
    const I = p.length, ne = m.length, D = Math.min(I, ne);
    let W;
    for (W = 0; W < D; W++) {
      const ae = m[W] = O ? un(m[W]) : Ht(m[W]);
      T(
        p[W],
        ae,
        _,
        null,
        A,
        $,
        F,
        N,
        O
      );
    }
    I > ne ? Be(
      p,
      A,
      $,
      !0,
      !1,
      D
    ) : q(
      m,
      _,
      P,
      A,
      $,
      F,
      N,
      O,
      D
    );
  }, st = (p, m, _, P, A, $, F, N, O) => {
    let I = 0;
    const ne = m.length;
    let D = p.length - 1, W = ne - 1;
    for (; I <= D && I <= W; ) {
      const ae = p[I], he = m[I] = O ? un(m[I]) : Ht(m[I]);
      if (kn(ae, he))
        T(
          ae,
          he,
          _,
          null,
          A,
          $,
          F,
          N,
          O
        );
      else
        break;
      I++;
    }
    for (; I <= D && I <= W; ) {
      const ae = p[D], he = m[W] = O ? un(m[W]) : Ht(m[W]);
      if (kn(ae, he))
        T(
          ae,
          he,
          _,
          null,
          A,
          $,
          F,
          N,
          O
        );
      else
        break;
      D--, W--;
    }
    if (I > D) {
      if (I <= W) {
        const ae = W + 1, he = ae < ne ? m[ae].el : P;
        for (; I <= W; )
          T(
            null,
            m[I] = O ? un(m[I]) : Ht(m[I]),
            _,
            he,
            A,
            $,
            F,
            N,
            O
          ), I++;
      }
    } else if (I > W)
      for (; I <= D; )
        Ae(p[I], A, $, !0), I++;
    else {
      const ae = I, he = I, ve = /* @__PURE__ */ new Map();
      for (I = he; I <= W; I++) {
        const Xe = m[I] = O ? un(m[I]) : Ht(m[I]);
        Xe.key != null && ve.set(Xe.key, I);
      }
      let ye, Ve = 0;
      const Me = W - he + 1;
      let ct = !1, Oe = 0;
      const H = new Array(Me);
      for (I = 0; I < Me; I++) H[I] = 0;
      for (I = ae; I <= D; I++) {
        const Xe = p[I];
        if (Ve >= Me) {
          Ae(Xe, A, $, !0);
          continue;
        }
        let nt;
        if (Xe.key != null)
          nt = ve.get(Xe.key);
        else
          for (ye = he; ye <= W; ye++)
            if (H[ye - he] === 0 && kn(Xe, m[ye])) {
              nt = ye;
              break;
            }
        nt === void 0 ? Ae(Xe, A, $, !0) : (H[nt - he] = I + 1, nt >= Oe ? Oe = nt : ct = !0, T(
          Xe,
          m[nt],
          _,
          null,
          A,
          $,
          F,
          N,
          O
        ), Ve++);
      }
      const $n = ct ? xf(H) : Fn;
      for (ye = $n.length - 1, I = Me - 1; I >= 0; I--) {
        const Xe = he + I, nt = m[Xe], yn = Xe + 1 < ne ? m[Xe + 1].el : P;
        H[I] === 0 ? T(
          null,
          nt,
          _,
          yn,
          A,
          $,
          F,
          N,
          O
        ) : ct && (ye < 0 || I !== $n[ye] ? Re(nt, _, yn, 2) : ye--);
      }
    }
  }, Re = (p, m, _, P, A = null) => {
    const { el: $, type: F, transition: N, children: O, shapeFlag: I } = p;
    if (I & 6) {
      Re(p.component.subTree, m, _, P);
      return;
    }
    if (I & 128) {
      p.suspense.move(m, _, P);
      return;
    }
    if (I & 64) {
      F.move(p, m, _, Ct);
      return;
    }
    if (F === be) {
      o($, m, _);
      for (let D = 0; D < O.length; D++)
        Re(O[D], m, _, P);
      o(p.anchor, m, _);
      return;
    }
    if (F === Zo) {
      Q(p, m, _);
      return;
    }
    if (P !== 2 && I & 1 && N)
      if (P === 0)
        N.beforeEnter($), o($, m, _), ht(() => N.enter($), A);
      else {
        const { leave: D, delayLeave: W, afterLeave: ae } = N, he = () => o($, m, _), ve = () => {
          D($, () => {
            he(), ae && ae();
          });
        };
        W ? W($, he, ve) : ve();
      }
    else
      o($, m, _);
  }, Ae = (p, m, _, P = !1, A = !1) => {
    const {
      type: $,
      props: F,
      ref: N,
      children: O,
      dynamicChildren: I,
      shapeFlag: ne,
      patchFlag: D,
      dirs: W,
      cacheIndex: ae
    } = p;
    if (D === -2 && (A = !1), N != null && da(N, null, _, p, !0), ae != null && (m.renderCache[ae] = void 0), ne & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const he = ne & 1 && W, ve = !qn(p);
    let ye;
    if (ve && (ye = F && F.onVnodeBeforeUnmount) && Mt(ye, m, p), ne & 6)
      yt(p.component, _, P);
    else {
      if (ne & 128) {
        p.suspense.unmount(_, P);
        return;
      }
      he && bn(p, null, m, "beforeUnmount"), ne & 64 ? p.type.remove(
        p,
        m,
        _,
        Ct,
        P
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($ !== be || D > 0 && D & 64) ? Be(
        I,
        m,
        _,
        !1,
        !0
      ) : ($ === be && D & 384 || !A && ne & 16) && Be(O, m, _), P && qe(p);
    }
    (ve && (ye = F && F.onVnodeUnmounted) || he) && ht(() => {
      ye && Mt(ye, m, p), he && bn(p, null, m, "unmounted");
    }, _);
  }, qe = (p) => {
    const { type: m, el: _, anchor: P, transition: A } = p;
    if (m === be) {
      ft(_, P);
      return;
    }
    if (m === Zo) {
      w(p);
      return;
    }
    const $ = () => {
      r(_), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (p.shapeFlag & 1 && A && !A.persisted) {
      const { leave: F, delayLeave: N } = A, O = () => F(_, $);
      N ? N(p.el, $, O) : O();
    } else
      $();
  }, ft = (p, m) => {
    let _;
    for (; p !== m; )
      _ = g(p), r(p), p = _;
    r(m);
  }, yt = (p, m, _) => {
    const { bum: P, scope: A, job: $, subTree: F, um: N, m: O, a: I } = p;
    sl(O), sl(I), P && Wr(P), A.stop(), $ && ($.flags |= 8, Ae(F, p, m, _)), N && ht(N, m), ht(() => {
      p.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve());
  }, Be = (p, m, _, P = !1, A = !1, $ = 0) => {
    for (let F = $; F < p.length; F++)
      Ae(p[F], m, _, P, A);
  }, Nt = (p) => {
    if (p.shapeFlag & 6)
      return Nt(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = g(p.anchor || p.el), _ = m && m[Nd];
    return _ ? g(_) : m;
  };
  let kt = !1;
  const Jt = (p, m, _) => {
    p == null ? m._vnode && Ae(m._vnode, null, null, !0) : T(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = p, kt || (kt = !0, el(), _s(), kt = !1);
  }, Ct = {
    p: T,
    um: Ae,
    m: Re,
    r: qe,
    mt: J,
    mc: q,
    pc: fe,
    pbc: K,
    n: Nt,
    o: e
  };
  let Qt, bt;
  return {
    render: Jt,
    hydrate: Qt,
    createApp: uf(Jt, Qt)
  };
}
function ea({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function wn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xs(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (ie(o) && ie(r))
    for (let a = 0; a < o.length; a++) {
      const i = o[a];
      let l = r[a];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[a] = un(r[a]), l.el = i.el), !n && l.patchFlag !== -2 && Xs(i, l)), l.type === kr && (l.el = i.el);
    }
}
function xf(e) {
  const t = e.slice(), n = [0];
  let o, r, a, i, l;
  const s = e.length;
  for (o = 0; o < s; o++) {
    const f = e[o];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[o] = r, n.push(o);
        continue;
      }
      for (a = 0, i = n.length - 1; a < i; )
        l = a + i >> 1, e[n[l]] < f ? a = l + 1 : i = l;
      f < e[n[a]] && (a > 0 && (t[o] = n[a - 1]), n[a] = o);
    }
  }
  for (a = n.length, i = n[a - 1]; a-- > 0; )
    n[a] = i, i = t[i];
  return n;
}
function Ys(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ys(t);
}
function sl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const _f = Symbol.for("v-scx"), kf = () => Go(_f);
function Cf(e, t) {
  return Wa(e, null, t);
}
function Ot(e, t, n) {
  return Wa(e, t, n);
}
function Wa(e, t, n = Ee) {
  const { immediate: o, deep: r, flush: a, once: i } = n, l = $e({}, n);
  let s;
  if (Cr)
    if (a === "sync") {
      const g = kf();
      s = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!t || o)
      l.once = !0;
    else
      return {
        stop: Vt,
        resume: Vt,
        pause: Vt
      };
  const f = We;
  l.call = (g, y, k) => Rt(g, f, y, k);
  let u = !1;
  a === "post" ? l.scheduler = (g) => {
    ht(g, f && f.suspense);
  } : a !== "sync" && (u = !0, l.scheduler = (g, y) => {
    y ? g() : Fa(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), u && (g.flags |= 2, f && (g.id = f.uid, g.i = f));
  };
  const d = Od(e, t, l);
  return s && s.push(d), d;
}
function Sf(e, t, n) {
  const o = this.proxy, r = ze(e) ? e.includes(".") ? Gs(o, e) : () => o[e] : e.bind(o, o);
  let a;
  pe(t) ? a = t : (a = t.handler, n = t);
  const i = So(this), l = Wa(r, a.bind(o), n);
  return i(), l;
}
function Gs(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
const Tf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${dt(t)}Modifiers`] || e[`${xt(t)}Modifiers`];
function Ef(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Ee;
  let r = n;
  const a = t.startsWith("update:"), i = a && Tf(o, t.slice(7));
  i && (i.trim && (r = n.map((u) => ze(u) ? u.trim() : u)), i.number && (r = n.map(Qu)));
  let l, s = o[l = Kr(t)] || // also try camelCase event handler (#2249)
  o[l = Kr(dt(t))];
  !s && a && (s = o[l = Kr(xt(t))]), s && Rt(
    s,
    e,
    6,
    r
  );
  const f = o[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Rt(
      f,
      e,
      6,
      r
    );
  }
}
function Zs(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const a = e.emits;
  let i = {}, l = !1;
  if (!pe(e)) {
    const s = (f) => {
      const u = Zs(f, t, !0);
      u && (l = !0, $e(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !a && !l ? (Ie(e) && o.set(e, null), null) : (ie(a) ? a.forEach((s) => i[s] = null) : $e(i, a), Ie(e) && o.set(e, i), i);
}
function _r(e, t) {
  return !e || !fr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ke(e, t[0].toLowerCase() + t.slice(1)) || ke(e, xt(t)) || ke(e, t));
}
function ta(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [a],
    slots: i,
    attrs: l,
    emit: s,
    render: f,
    renderCache: u,
    props: d,
    data: g,
    setupState: y,
    ctx: k,
    inheritAttrs: T
  } = e, B = rr(e);
  let x, U;
  try {
    if (n.shapeFlag & 4) {
      const w = r || o, z = w;
      x = Ht(
        f.call(
          z,
          w,
          u,
          d,
          y,
          g,
          k
        )
      ), U = l;
    } else {
      const w = t;
      x = Ht(
        w.length > 1 ? w(
          d,
          { attrs: l, slots: i, emit: s }
        ) : w(
          d,
          null
        )
      ), U = t.props ? l : Af(l);
    }
  } catch (w) {
    go.length = 0, br(w, e, 1), x = oe(lt);
  }
  let Q = x;
  if (U && T !== !1) {
    const w = Object.keys(U), { shapeFlag: z } = Q;
    w.length && z & 7 && (a && w.some(Ea) && (U = If(
      U,
      a
    )), Q = hn(Q, U, !1, !0));
  }
  return n.dirs && (Q = hn(Q, null, !1, !0), Q.dirs = Q.dirs ? Q.dirs.concat(n.dirs) : n.dirs), n.transition && In(Q, n.transition), x = Q, rr(B), x;
}
const Af = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || fr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, If = (e, t) => {
  const n = {};
  for (const o in e)
    (!Ea(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
};
function $f(e, t, n) {
  const { props: o, children: r, component: a } = e, { props: i, children: l, patchFlag: s } = t, f = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return o ? cl(o, i, f) : !!i;
    if (s & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const g = u[d];
        if (i[g] !== o[g] && !_r(f, g))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? cl(o, i, f) : !0 : !!i;
  return !1;
}
function cl(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const a = o[r];
    if (t[a] !== e[a] && !_r(n, a))
      return !0;
  }
  return !1;
}
function Rf({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Js = (e) => e.__isSuspense;
function Pf(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : Vd(e);
}
const be = Symbol.for("v-fgt"), kr = Symbol.for("v-txt"), lt = Symbol.for("v-cmt"), Zo = Symbol.for("v-stc"), go = [];
let vt = null;
function C(e = !1) {
  go.push(vt = e ? null : []);
}
function zf() {
  go.pop(), vt = go[go.length - 1] || null;
}
let _o = 1;
function ul(e) {
  _o += e, e < 0 && vt && (vt.hasOnce = !0);
}
function Qs(e) {
  return e.dynamicChildren = _o > 0 ? vt || Fn : null, zf(), _o > 0 && vt && vt.push(e), e;
}
function E(e, t, n, o, r, a) {
  return Qs(
    S(
      e,
      t,
      n,
      o,
      r,
      a,
      !0
    )
  );
}
function et(e, t, n, o, r) {
  return Qs(
    oe(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function ir(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function kn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ec = ({ key: e }) => e ?? null, Jo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ze(e) || Qe(e) || pe(e) ? { i: Je, r: e, k: t, f: !!n } : e : null);
function S(e, t = null, n = null, o = 0, r = null, a = e === be ? 0 : 1, i = !1, l = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ec(t),
    ref: t && Jo(t),
    scopeId: Cs,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Je
  };
  return l ? (Xa(s, n), a & 128 && e.normalize(s)) : n && (s.shapeFlag |= ze(n) ? 8 : 16), _o > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  vt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && vt.push(s), s;
}
const oe = Mf;
function Mf(e, t = null, n = null, o = 0, r = null, a = !1) {
  if ((!e || e === Ls) && (e = lt), ir(e)) {
    const l = hn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Xa(l, n), _o > 0 && !a && vt && (l.shapeFlag & 6 ? vt[vt.indexOf(e)] = l : vt.push(l)), l.patchFlag = -2, l;
  }
  if (Uf(e) && (e = e.__vccOpts), t) {
    t = Lf(t);
    let { class: l, style: s } = t;
    l && !ze(l) && (t.class = ge(l)), Ie(s) && (Ba(s) && !ie(s) && (s = $e({}, s)), t.style = Sn(s));
  }
  const i = ze(e) ? 1 : Js(e) ? 128 : Ss(e) ? 64 : Ie(e) ? 4 : pe(e) ? 2 : 0;
  return S(
    e,
    t,
    n,
    o,
    r,
    i,
    a,
    !0
  );
}
function Lf(e) {
  return e ? Ba(e) || Fs(e) ? $e({}, e) : e : null;
}
function hn(e, t, n = !1, o = !1) {
  const { props: r, ref: a, patchFlag: i, children: l, transition: s } = e, f = t ? ma(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && ec(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? ie(a) ? a.concat(Jo(t)) : [a, Jo(t)] : Jo(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== be ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: s,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && hn(e.ssContent),
    ssFallback: e.ssFallback && hn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return s && o && In(
    u,
    s.clone(u)
  ), u;
}
function Ue(e = " ", t = 0) {
  return oe(kr, null, e, t);
}
function tc(e, t) {
  const n = oe(Zo, null, e);
  return n.staticCount = t, n;
}
function re(e = "", t = !1) {
  return t ? (C(), et(lt, null, e)) : oe(lt, null, e);
}
function Ht(e) {
  return e == null || typeof e == "boolean" ? oe(lt) : ie(e) ? oe(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? un(e) : oe(kr, null, String(e));
}
function un(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : hn(e);
}
function Xa(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (ie(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Xa(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Fs(t) ? t._ctx = Je : r === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else pe(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ue(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ma(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = ge([t.class, o.class]));
      else if (r === "style")
        t.style = Sn([t.style, o.style]);
      else if (fr(r)) {
        const a = t[r], i = o[r];
        i && a !== i && !(ie(a) && a.includes(i)) && (t[r] = a ? [].concat(a, i) : i);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Mt(e, t, n, o = null) {
  Rt(e, t, 7, [
    n,
    o
  ]);
}
const Of = Bs();
let Hf = 0;
function Bf(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Of, a = {
    uid: Hf++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new id(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: js(o, r),
    emitsOptions: Zs(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ee,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Ee,
    data: Ee,
    props: Ee,
    attrs: Ee,
    slots: Ee,
    refs: Ee,
    setupState: Ee,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Ef.bind(null, a), e.ce && e.ce(a), a;
}
let We = null;
const nc = () => We || Je;
let lr, va;
{
  const e = ts(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (a) => {
      r.length > 1 ? r.forEach((i) => i(a)) : r[0](a);
    };
  };
  lr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => We = n
  ), va = t(
    "__VUE_SSR_SETTERS__",
    (n) => Cr = n
  );
}
const So = (e) => {
  const t = We;
  return lr(e), e.scope.on(), () => {
    e.scope.off(), lr(t);
  };
}, dl = () => {
  We && We.scope.off(), lr(null);
};
function oc(e) {
  return e.vnode.shapeFlag & 4;
}
let Cr = !1;
function Vf(e, t = !1, n = !1) {
  t && va(t);
  const { props: o, children: r } = e.vnode, a = oc(e);
  ff(e, o, a, t), mf(e, r, n);
  const i = a ? Nf(e, t) : void 0;
  return t && va(!1), i;
}
function Nf(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, nf);
  const { setup: o } = n;
  if (o) {
    const r = e.setupContext = o.length > 1 ? Df(e) : null, a = So(e);
    mn();
    const i = ko(
      o,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (vn(), a(), Jl(i)) {
      if (qn(e) || Ps(e), i.then(dl, dl), t)
        return i.then((l) => {
          fl(e, l, t);
        }).catch((l) => {
          br(l, e, 0);
        });
      e.asyncDep = i;
    } else
      fl(e, i, t);
  } else
    rc(e, t);
}
function fl(e, t, n) {
  pe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ie(t) && (e.setupState = bs(t)), rc(e, n);
}
let pl;
function rc(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && pl && !o.render) {
      const r = o.template || qa(e).template;
      if (r) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: s } = o, f = $e(
          $e(
            {
              isCustomElement: a,
              delimiters: l
            },
            i
          ),
          s
        );
        o.render = pl(r, f);
      }
    }
    e.render = o.render || Vt;
  }
  {
    const r = So(e);
    mn();
    try {
      of(e);
    } finally {
      vn(), r();
    }
  }
}
const Ff = {
  get(e, t) {
    return tt(e, "get", ""), e[t];
  }
};
function Df(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ff),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ya(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bs(Id(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ho)
        return ho[n](e);
    },
    has(t, n) {
      return n in t || n in ho;
    }
  })) : e.proxy;
}
function jf(e, t = !0) {
  return pe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Uf(e) {
  return pe(e) && "__vccOpts" in e;
}
const Y = (e, t) => Md(e, t, Cr);
function Ge(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Ie(t) && !ie(t) ? ir(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && ir(n) && (n = [n]), oe(e, t, n));
}
const qf = "3.5.3";
/**
* @vue/runtime-dom v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ya;
const hl = typeof window < "u" && window.trustedTypes;
if (hl)
  try {
    ya = /* @__PURE__ */ hl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ac = ya ? (e) => ya.createHTML(e) : (e) => e, Kf = "http://www.w3.org/2000/svg", Wf = "http://www.w3.org/1998/Math/MathML", Kt = typeof document < "u" ? document : null, gl = Kt && /* @__PURE__ */ Kt.createElement("template"), Xf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Kt.createElementNS(Kf, e) : t === "mathml" ? Kt.createElementNS(Wf, e) : n ? Kt.createElement(e, { is: n }) : Kt.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Kt.createTextNode(e),
  createComment: (e) => Kt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Kt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, a) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === a || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === a || !(r = r.nextSibling)); )
        ;
    else {
      gl.innerHTML = ac(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = gl.content;
      if (o === "svg" || o === "mathml") {
        const s = l.firstChild;
        for (; s.firstChild; )
          l.appendChild(s.firstChild);
        l.removeChild(s);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, rn = "transition", so = "animation", Wn = Symbol("_vtc"), ic = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, lc = /* @__PURE__ */ $e(
  {},
  Es,
  ic
), Yf = (e) => (e.displayName = "Transition", e.props = lc, e), Gf = /* @__PURE__ */ Yf(
  (e, { slots: t }) => Ge(Dd, sc(e), t)
), xn = (e, t = []) => {
  ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ml = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function sc(e) {
  const t = {};
  for (const V in e)
    V in ic || (t[V] = e[V]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: r,
    enterFromClass: a = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: s = a,
    appearActiveClass: f = i,
    appearToClass: u = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: y = `${n}-leave-to`
  } = e, k = Zf(r), T = k && k[0], B = k && k[1], {
    onBeforeEnter: x,
    onEnter: U,
    onEnterCancelled: Q,
    onLeave: w,
    onLeaveCancelled: z,
    onBeforeAppear: ee = x,
    onAppear: M = U,
    onAppearCancelled: q = Q
  } = t, j = (V, te, J) => {
    an(V, te ? u : l), an(V, te ? f : i), J && J();
  }, K = (V, te) => {
    V._isLeaving = !1, an(V, d), an(V, y), an(V, g), te && te();
  }, G = (V) => (te, J) => {
    const le = V ? M : U, Z = () => j(te, V, J);
    xn(le, [te, Z]), vl(() => {
      an(te, V ? s : a), Ut(te, V ? u : l), ml(le) || yl(te, o, T, Z);
    });
  };
  return $e(t, {
    onBeforeEnter(V) {
      xn(x, [V]), Ut(V, a), Ut(V, i);
    },
    onBeforeAppear(V) {
      xn(ee, [V]), Ut(V, s), Ut(V, f);
    },
    onEnter: G(!1),
    onAppear: G(!0),
    onLeave(V, te) {
      V._isLeaving = !0;
      const J = () => K(V, te);
      Ut(V, d), Ut(V, g), uc(), vl(() => {
        V._isLeaving && (an(V, d), Ut(V, y), ml(w) || yl(V, o, B, J));
      }), xn(w, [V, J]);
    },
    onEnterCancelled(V) {
      j(V, !1), xn(Q, [V]);
    },
    onAppearCancelled(V) {
      j(V, !0), xn(q, [V]);
    },
    onLeaveCancelled(V) {
      K(V), xn(z, [V]);
    }
  });
}
function Zf(e) {
  if (e == null)
    return null;
  if (Ie(e))
    return [na(e.enter), na(e.leave)];
  {
    const t = na(e);
    return [t, t];
  }
}
function na(e) {
  return ia(e);
}
function Ut(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Wn] || (e[Wn] = /* @__PURE__ */ new Set())).add(t);
}
function an(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Wn];
  n && (n.delete(t), n.size || (e[Wn] = void 0));
}
function vl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Jf = 0;
function yl(e, t, n, o) {
  const r = e._endId = ++Jf, a = () => {
    r === e._endId && o();
  };
  if (n)
    return setTimeout(a, n);
  const { type: i, timeout: l, propCount: s } = cc(e, t);
  if (!i)
    return o();
  const f = i + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(f, g), a();
  }, g = (y) => {
    y.target === e && ++u >= s && d();
  };
  setTimeout(() => {
    u < s && d();
  }, l + 1), e.addEventListener(f, g);
}
function cc(e, t) {
  const n = window.getComputedStyle(e), o = (k) => (n[k] || "").split(", "), r = o(`${rn}Delay`), a = o(`${rn}Duration`), i = bl(r, a), l = o(`${so}Delay`), s = o(`${so}Duration`), f = bl(l, s);
  let u = null, d = 0, g = 0;
  t === rn ? i > 0 && (u = rn, d = i, g = a.length) : t === so ? f > 0 && (u = so, d = f, g = s.length) : (d = Math.max(i, f), u = d > 0 ? i > f ? rn : so : null, g = u ? u === rn ? a.length : s.length : 0);
  const y = u === rn && /\b(transform|all)(,|$)/.test(
    o(`${rn}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: g,
    hasTransform: y
  };
}
function bl(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => wl(n) + wl(e[o])));
}
function wl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function uc() {
  return document.body.offsetHeight;
}
function Qf(e, t, n) {
  const o = e[Wn];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const xl = Symbol("_vod"), ep = Symbol("_vsh"), tp = Symbol(""), np = /(^|;)\s*display\s*:/;
function op(e, t, n) {
  const o = e.style, r = ze(n);
  let a = !1;
  if (n && !r) {
    if (t)
      if (ze(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Qo(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Qo(o, i, "");
    for (const i in n)
      i === "display" && (a = !0), Qo(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[tp];
      i && (n += ";" + i), o.cssText = n, a = np.test(n);
    }
  } else t && e.removeAttribute("style");
  xl in e && (e[xl] = a ? o.display : "", e[ep] && (o.display = "none"));
}
const _l = /\s*!important$/;
function Qo(e, t, n) {
  if (ie(n))
    n.forEach((o) => Qo(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = rp(e, t);
    _l.test(n) ? e.setProperty(
      xt(o),
      n.replace(_l, ""),
      "important"
    ) : e[o] = n;
  }
}
const kl = ["Webkit", "Moz", "ms"], oa = {};
function rp(e, t) {
  const n = oa[t];
  if (n)
    return n;
  let o = dt(t);
  if (o !== "filter" && o in e)
    return oa[t] = o;
  o = mr(o);
  for (let r = 0; r < kl.length; r++) {
    const a = kl[r] + o;
    if (a in e)
      return oa[t] = a;
  }
  return t;
}
const Cl = "http://www.w3.org/1999/xlink";
function Sl(e, t, n, o, r, a = ad(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Cl, t.slice(6, t.length)) : e.setAttributeNS(Cl, t, n) : n == null || a && !ns(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : gn(n) ? String(n) : n
  );
}
function ap(e, t, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ac(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const i = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (i !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean" ? n = ns(n) : n == null && i === "string" ? (n = "", a = !0) : i === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(t);
}
function ip(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function lp(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Tl = Symbol("_vei");
function sp(e, t, n, o, r = null) {
  const a = e[Tl] || (e[Tl] = {}), i = a[t];
  if (o && i)
    i.value = o;
  else {
    const [l, s] = cp(t);
    if (o) {
      const f = a[t] = fp(
        o,
        r
      );
      ip(e, l, f, s);
    } else i && (lp(e, l, i, s), a[t] = void 0);
  }
}
const El = /(?:Once|Passive|Capture)$/;
function cp(e) {
  let t;
  if (El.test(e)) {
    t = {};
    let o;
    for (; o = e.match(El); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xt(e.slice(2)), t];
}
let ra = 0;
const up = /* @__PURE__ */ Promise.resolve(), dp = () => ra || (up.then(() => ra = 0), ra = Date.now());
function fp(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Rt(
      pp(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = dp(), n;
}
function pp(e, t) {
  if (ie(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const Al = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hp = (e, t, n, o, r, a) => {
  const i = r === "svg";
  t === "class" ? Qf(e, o, i) : t === "style" ? op(e, n, o) : fr(t) ? Ea(t) || sp(e, t, n, o, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : gp(e, t, o, i)) ? (ap(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Sl(e, t, o, i, a, t !== "value")) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Sl(e, t, o, i));
};
function gp(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Al(t) && pe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Al(t) && ze(n) ? !1 : !!(t in e || e._isVueCE && (/[A-Z]/.test(t) || !ze(n)));
}
const Il = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function dc(e, t, n) {
  const o = /* @__PURE__ */ Rs(e, t);
  hr(o) && $e(o, t);
  class r extends Ga {
    constructor(i) {
      super(o, i, n);
    }
  }
  return r.def = o, r;
}
const mp = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ga extends mp {
  constructor(t, n = {}, o = Pl) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== Pl ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Ga) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, gt(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance.ce = void 0, this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver((o) => {
      for (const r of o)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (o, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: a, styles: i } = o;
      let l;
      if (a && !ie(a))
        for (const s in a) {
          const f = a[s];
          (f === Number || f && f.type === Number) && (s in this._props && (this._props[s] = ia(this._props[s])), (l || (l = /* @__PURE__ */ Object.create(null)))[dt(s)] = !0);
        }
      this._numberProps = l, r && this._resolveProps(o), this.shadowRoot && this._applyStyles(i), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then(
      (o) => t(this._def = o, !0)
    ) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        ke(this, o) || Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Bt(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = ie(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && o.includes(r) && this._setProp(r, this[r]);
    for (const r of o.map(dt))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(a) {
          this._setProp(r, a, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let o = n ? this.getAttribute(t) : Il;
    const r = dt(t);
    n && this._numberProps && this._numberProps[r] && (o = ia(o)), this._setProp(r, o, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, o = !0, r = !1) {
    n !== this._props[t] && (n === Il ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(xt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(xt(t), n + "") : n || this.removeAttribute(xt(t))));
  }
  _update() {
    Ep(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = oe(this._def, $e(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0;
      const r = (a, i) => {
        this.dispatchEvent(
          new CustomEvent(
            a,
            hr(i[0]) ? $e({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      o.emit = (a, ...i) => {
        r(a, i), xt(a) !== a && r(xt(a), i);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const o = this._nonce;
    for (let r = t.length - 1; r >= 0; r--) {
      const a = document.createElement("style");
      o && a.setAttribute("nonce", o), a.textContent = t[r], this.shadowRoot.prepend(a);
    }
  }
  /**
   * Only called when shaddowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const o = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shaddowRoot is false
   */
  _renderSlots() {
    const t = this.querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const r = t[o], a = r.getAttribute("name") || "default", i = this._slots[a], l = r.parentNode;
      if (i)
        for (const s of i) {
          if (n && s.nodeType === 1) {
            const f = n + "-s", u = document.createTreeWalker(s, 1);
            s.setAttribute(f, "");
            let d;
            for (; d = u.nextNode(); )
              d.setAttribute(f, "");
          }
          l.insertBefore(s, r);
        }
      else
        for (; r.firstChild; ) l.insertBefore(r.firstChild, r);
      l.removeChild(r);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const fc = /* @__PURE__ */ new WeakMap(), pc = /* @__PURE__ */ new WeakMap(), sr = Symbol("_moveCb"), $l = Symbol("_enterCb"), vp = (e) => (delete e.props.mode, e), yp = /* @__PURE__ */ vp({
  name: "TransitionGroup",
  props: /* @__PURE__ */ $e({}, lc, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = nc(), o = Ts();
    let r, a;
    return Ms(() => {
      if (!r.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!kp(
        r[0].el,
        n.vnode.el,
        i
      ))
        return;
      r.forEach(wp), r.forEach(xp);
      const l = r.filter(_p);
      uc(), l.forEach((s) => {
        const f = s.el, u = f.style;
        Ut(f, i), u.transform = u.webkitTransform = u.transitionDuration = "";
        const d = f[sr] = (g) => {
          g && g.target !== f || (!g || /transform$/.test(g.propertyName)) && (f.removeEventListener("transitionend", d), f[sr] = null, an(f, i));
        };
        f.addEventListener("transitionend", d);
      });
    }), () => {
      const i = xe(e), l = sc(i);
      let s = i.tag || be;
      if (r = [], a)
        for (let f = 0; f < a.length; f++) {
          const u = a[f];
          u.el && u.el instanceof Element && (r.push(u), In(
            u,
            xo(
              u,
              l,
              o,
              n
            )
          ), fc.set(
            u,
            u.el.getBoundingClientRect()
          ));
        }
      a = t.default ? Da(t.default()) : [];
      for (let f = 0; f < a.length; f++) {
        const u = a[f];
        u.key != null && In(
          u,
          xo(u, l, o, n)
        );
      }
      return oe(s, null, a);
    };
  }
}), bp = yp;
function wp(e) {
  const t = e.el;
  t[sr] && t[sr](), t[$l] && t[$l]();
}
function xp(e) {
  pc.set(e, e.el.getBoundingClientRect());
}
function _p(e) {
  const t = fc.get(e), n = pc.get(e), o = t.left - n.left, r = t.top - n.top;
  if (o || r) {
    const a = e.el.style;
    return a.transform = a.webkitTransform = `translate(${o}px,${r}px)`, a.transitionDuration = "0s", e;
  }
}
function kp(e, t, n) {
  const o = e.cloneNode(), r = e[Wn];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((s) => s && o.classList.remove(s));
  }), n.split(/\s+/).forEach((l) => l && o.classList.add(l)), o.style.display = "none";
  const a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(o);
  const { hasTransform: i } = cc(o);
  return a.removeChild(o), i;
}
const Cp = ["ctrl", "shift", "alt", "meta"], Sp = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Cp.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ko = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...a) => {
    for (let i = 0; i < t.length; i++) {
      const l = Sp[t[i]];
      if (l && l(r, t)) return;
    }
    return e(r, ...a);
  });
}, Tp = /* @__PURE__ */ $e({ patchProp: hp }, Xf);
let Rl;
function hc() {
  return Rl || (Rl = yf(Tp));
}
const Ep = (...e) => {
  hc().render(...e);
}, Pl = (...e) => {
  const t = hc().createApp(...e), { mount: n } = t;
  return t.mount = (o) => {
    const r = Ip(o);
    if (!r) return;
    const a = t._component;
    !pe(a) && !a.render && !a.template && (a.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, Ap(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Ap(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ip(e) {
  return ze(e) ? document.querySelector(e) : e;
}
const zl = (e) => {
  if (!e || typeof e != "string") return !1;
  const t = e.trim();
  return !t || /[;{}]/.test(t) ? !1 : /^[0-9a-fA-F]{3,4}([0-9a-fA-F]{3,4})?$/.test(t) ? `#${t}` : typeof CSS > "u" || typeof CSS.supports != "function" || CSS.supports("color", t) ? t : !1;
}, gc = ({ theme: e = "dark", backgroundColor: t, foregroundColor: n } = {}) => {
  const o = e === "light" ? "#fff" : "#000", r = e === "light" ? "#000" : "#fff", a = zl(t), i = zl(n);
  return {
    "--api-background-color": a || o,
    "--api-foreground-color": i || r,
    "--api-border-color": "color-mix(in srgb, var(--api-foreground-color) 28%, var(--api-background-color))",
    "--api-muted-color": "color-mix(in srgb, var(--api-foreground-color) 40%, var(--api-background-color))",
    "--api-overlay-color": !!a ? "color-mix(in srgb, var(--api-background-color) 25%, transparent)" : e === "light" ? "rgba(0, 0, 0, 0.15)" : "rgba(0, 0, 0, 0.25)",
    "--black": "var(--api-background-color)",
    "--white": "var(--api-foreground-color)",
    "--gray": e === "light" ? "#e7e7e7" : "var(--api-background-color)",
    "--darkgray": "var(--api-border-color)",
    "--graytext": "var(--api-muted-color)",
    "--stroke-light": "color-mix(in srgb, var(--api-foreground-color) 20%, var(--api-background-color))",
    "--stroke-dark": "color-mix(in srgb, var(--api-foreground-color) 40%, var(--api-background-color))"
  };
}, $p = ["width", "viewBox"], Rp = { fill: "currentColor" }, Pp = {
  key: 0,
  d: "M 1.572 23 C 0.948 23 0.299 22.9 0 22.776 L 0 20.43 C 0.125 20.48 0.374 20.505 0.624 20.505 C 1.771 20.505 2.37 20.031 2.37 18.784 L 2.37 5.288 L 5.413 5.288 L 5.413 19.358 C 5.413 21.328 4.316 23 1.572 23 Z M 13.5 17.911 C 9.832 17.911 7.262 15.466 7.262 11.425 C 7.262 7.434 9.857 4.889 13.499 4.889 C 17.166 4.889 19.761 7.434 19.761 11.425 C 19.761 15.466 17.166 17.911 13.499 17.911 Z M 10.356 11.425 C 10.356 14.02 11.603 15.516 13.499 15.516 C 15.395 15.516 16.667 14.02 16.667 11.426 C 16.667 8.781 15.37 7.309 13.499 7.309 C 11.653 7.309 10.356 8.781 10.356 11.425 Z M 25.492 17.911 C 23.047 17.911 21.127 16.24 21.127 13.021 L 21.127 5.289 L 24.195 5.289 L 24.195 12.549 C 24.195 14.245 24.943 15.467 26.415 15.467 C 27.962 15.467 29.06 14.32 29.06 12.524 L 29.06 5.288 L 32.103 5.288 L 32.103 17.462 L 29.084 17.462 L 29.084 16.963 C 29.084 16.589 29.134 16.165 29.209 15.791 C 28.586 16.963 27.513 17.911 25.492 17.911 Z M 34.174 17.462 L 34.174 5.288 L 37.218 5.288 L 37.218 6.211 C 37.218 6.661 37.193 7.035 37.118 7.484 C 37.766 6.112 38.864 4.889 40.685 4.889 C 40.935 4.889 41.135 4.914 41.334 4.964 L 41.334 7.908 C 41.134 7.858 40.86 7.808 40.461 7.808 C 38.59 7.808 37.218 8.756 37.218 11.425 L 37.218 17.462 Z M 42.977 17.462 L 42.977 5.29 L 46.02 5.29 L 46.02 5.838 C 46.02 6.188 45.995 6.562 45.92 7.036 C 46.594 5.813 47.742 4.89 49.662 4.89 C 52.357 4.89 53.953 6.786 53.953 9.78 L 53.953 17.463 L 50.91 17.463 L 50.91 10.229 C 50.91 8.433 50.037 7.31 48.615 7.31 C 47.118 7.31 46.02 8.632 46.02 10.329 L 46.02 17.463 L 42.977 17.463 Z M 60.112 17.912 C 57.992 17.912 55.922 16.515 55.922 14.12 C 55.922 11.376 58.042 10.428 60.662 10.078 L 62.408 9.854 C 63.405 9.729 63.755 9.354 63.755 8.756 C 63.755 7.908 63.056 7.16 61.759 7.16 C 60.337 7.16 59.439 7.958 59.314 9.23 L 56.171 9.23 C 56.371 6.686 58.441 4.89 61.584 4.89 C 65.301 4.89 66.798 6.885 66.798 10.303 L 66.798 17.463 L 63.98 17.463 L 63.98 16.963 C 63.98 16.564 64.03 16.19 64.105 15.791 C 63.456 16.988 62.209 17.911 60.113 17.911 Z M 59.015 13.995 C 59.015 15.068 59.863 15.666 60.935 15.666 C 62.557 15.666 63.855 14.469 63.855 12.748 L 63.855 11.425 C 63.58 11.675 63.156 11.8 62.408 11.949 L 61.41 12.149 C 59.988 12.423 59.015 12.897 59.015 13.995 Z M 68.93 17.463 L 68.93 0 L 71.973 0 L 71.973 17.463 Z",
  transform: "translate(125)"
}, mc = {
  __name: "AntikytheraJournalLogo",
  props: {
    showJournal: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return (t, n) => (C(), E("svg", {
      width: e.showJournal ? 197 : 121,
      height: "23",
      viewBox: e.showJournal ? "0 0 197 23" : "0 0 121 23",
      role: "img",
      "aria-label": "Antikythera Journal",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      S("g", Rp, [
        n[0] || (n[0] = tc('<path d="M 11.058 12.841 C 10.128 12.841 9.205 12.841 8.244 12.841 C 8.244 12.374 8.244 11.908 8.244 11.367 C 8.155 11.472 8.11 11.517 8.066 11.57 C 7.016 12.998 5.542 13.42 3.868 13.299 C 2.662 13.217 1.627 12.735 0.823 11.788 C -0.413 10.344 -0.398 7.359 1.85 6.164 C 2.855 5.63 3.935 5.405 5.044 5.262 C 5.617 5.187 6.197 5.119 6.771 5.036 C 7.463 4.938 7.85 4.645 7.962 4.141 C 8.073 3.608 7.746 2.938 7.217 2.623 C 5.743 1.751 3.905 2.517 3.488 4.187 C 3.466 4.277 3.354 4.42 3.279 4.42 C 2.289 4.435 1.299 4.427 0.28 4.427 C 0.362 3.352 0.726 2.457 1.419 1.69 C 2.349 0.653 3.547 0.149 4.895 0.036 C 5.714 -0.031 6.562 -0.009 7.366 0.142 C 9.554 0.548 10.805 2.036 11.006 4.314 C 11.013 4.412 11.051 4.502 11.073 4.593 C 11.058 7.344 11.058 10.096 11.058 12.841 Z M 8.073 6.826 C 7.433 6.984 6.8 7.134 6.175 7.299 C 5.475 7.487 4.753 7.638 4.083 7.916 C 3.361 8.217 3.079 8.811 3.16 9.54 C 3.235 10.209 3.696 10.765 4.396 10.923 C 5.542 11.186 6.555 10.916 7.359 10.014 C 8.215 9.074 8.088 7.908 8.073 6.826 Z" transform="translate(107.927 4.987)"></path><path d="M 0 17.819 C 0 11.864 0 5.947 0 0 C 1.02 0 2.032 0 3.052 0 C 3.052 2.316 3.052 4.632 3.052 6.955 C 3.268 6.692 3.469 6.406 3.707 6.165 C 4.66 5.188 5.858 4.88 7.168 4.977 C 9.721 5.18 10.987 7.007 11.084 9.271 C 11.195 12.075 11.121 14.887 11.121 17.699 C 11.121 17.737 11.099 17.767 11.084 17.819 C 10.086 17.819 9.089 17.819 8.032 17.819 C 8.032 17.669 8.032 17.526 8.032 17.376 C 8.024 14.925 8.039 12.481 8.002 10.03 C 7.995 9.571 7.861 9.083 7.667 8.669 C 6.938 7.098 4.786 7.007 3.707 8.489 C 3.305 9.037 3.097 9.654 3.097 10.338 C 3.089 12.684 3.089 15.037 3.089 17.383 C 3.089 17.518 3.089 17.654 3.089 17.812 C 2.047 17.819 1.035 17.819 0 17.819 Z" transform="translate(74.233 0)"></path><path d="M 3.059 17.827 C 2.017 17.827 1.02 17.827 0 17.827 C 0 11.88 0 5.955 0 0 C 1.005 0 2.002 0 3.052 0 C 3.052 3.391 3.052 6.789 3.052 10.248 C 3.714 9.511 4.325 8.827 4.943 8.158 C 5.739 7.286 6.543 6.421 7.354 5.556 C 7.429 5.474 7.555 5.383 7.66 5.383 C 8.88 5.368 10.108 5.376 11.433 5.376 C 9.721 7.188 8.069 8.932 6.402 10.699 C 8.218 13.068 10.027 15.421 11.873 17.827 C 11.679 17.834 11.567 17.849 11.448 17.849 C 10.421 17.849 9.386 17.834 8.359 17.857 C 8.054 17.864 7.868 17.774 7.689 17.518 C 6.692 16.09 5.672 14.677 4.66 13.263 C 4.563 13.135 4.466 13.007 4.362 12.872 C 3.945 13.278 3.528 13.661 3.141 14.075 C 3.067 14.158 3.067 14.331 3.067 14.458 C 3.052 15.564 3.059 16.676 3.059 17.827 Z" transform="translate(39.918 0)"></path><path d="M 12.109 8.827 C 11.841 10.73 10.859 12.03 9.199 12.76 C 7.226 13.624 5.217 13.602 3.266 12.677 C 1.45 11.805 0.49 10.233 0.155 8.294 C -0.15 6.512 -0.046 4.76 0.847 3.128 C 1.859 1.279 3.445 0.279 5.522 0.046 C 6.757 -0.09 7.948 0.068 9.057 0.632 C 10.829 1.534 11.7 3.091 12.027 4.985 C 12.161 5.767 12.169 6.564 12.236 7.406 C 9.177 7.406 6.199 7.406 3.184 7.406 C 3.244 8.662 3.609 9.715 4.651 10.391 C 5.656 11.045 6.72 11.075 7.785 10.519 C 8.365 10.218 8.723 9.722 8.909 9.098 C 8.938 8.993 9.057 8.835 9.132 8.835 C 10.107 8.827 11.082 8.827 12.109 8.827 Z M 8.99 5.136 C 8.916 3.316 7.755 2.264 5.924 2.346 C 4.495 2.406 3.125 3.812 3.207 5.136 C 5.135 5.136 7.063 5.136 8.99 5.136 Z" transform="translate(86.651 4.962)"></path><path d="M 0.28 4.5 C 0.437 2.913 1.114 1.695 2.439 0.928 C 4.426 -0.222 6.526 -0.275 8.61 0.612 C 10.069 1.229 10.701 2.522 10.955 4.026 C 11.029 4.47 11.059 4.921 11.059 5.364 C 11.066 7.778 11.066 10.184 11.066 12.597 C 11.066 12.695 11.059 12.793 11.051 12.905 C 10.106 12.905 9.183 12.905 8.208 12.905 C 8.23 12.394 8.253 11.905 8.275 11.357 C 7.784 12.124 7.173 12.672 6.377 13.011 C 4.583 13.778 2.342 13.402 1.084 12.116 C -0.851 10.139 -0.099 6.868 2.573 5.928 C 3.556 5.582 4.613 5.462 5.64 5.259 C 6.012 5.184 6.399 5.161 6.779 5.109 C 7.471 5.011 7.873 4.718 7.985 4.229 C 8.096 3.718 7.791 3.056 7.285 2.718 C 5.871 1.785 3.868 2.597 3.503 4.244 C 3.481 4.342 3.355 4.492 3.273 4.492 C 2.298 4.507 1.315 4.5 0.28 4.5 Z M 8.156 6.853 C 7.538 7.018 7.039 7.154 6.548 7.289 C 5.729 7.515 4.888 7.672 4.099 7.981 C 3.399 8.251 3.087 8.883 3.161 9.522 C 3.243 10.274 3.704 10.815 4.434 10.996 C 5.871 11.342 7.464 10.635 7.895 9.116 C 8.104 8.402 8.081 7.612 8.156 6.853 Z" transform="translate(0 4.92)"></path><path d="M 3.089 12.869 C 2.04 12.869 1.035 12.869 0 12.869 C 0 8.726 0 4.591 0 0.433 C 1.012 0.433 2.025 0.433 3.097 0.433 C 3.067 0.952 3.045 1.463 3.015 2.057 C 3.186 1.824 3.312 1.651 3.446 1.486 C 4.399 0.328 5.657 -0.078 7.086 0.012 C 9.64 0.178 10.816 1.959 11.054 4.005 C 11.106 4.463 11.121 4.922 11.121 5.38 C 11.128 7.726 11.121 10.072 11.121 12.418 C 11.121 12.553 11.121 12.689 11.121 12.854 C 10.086 12.854 9.081 12.854 8.024 12.854 C 8.024 12.704 8.024 12.553 8.024 12.41 C 8.024 10.05 8.039 7.689 8.017 5.335 C 8.009 4.899 7.928 4.441 7.793 4.02 C 7.22 2.238 5.263 2.177 4.25 2.974 C 3.513 3.553 3.119 4.335 3.104 5.268 C 3.082 7.636 3.089 10.012 3.089 12.38 C 3.089 12.531 3.089 12.681 3.089 12.869 Z" transform="translate(13.076 4.965)"></path><path d="M 0 0.001 C 1.124 0.001 2.203 -0.006 3.275 0.016 C 3.372 0.016 3.521 0.197 3.558 0.317 C 4.221 2.34 4.868 4.362 5.531 6.385 C 5.843 7.339 6.163 8.294 6.498 9.302 C 7.474 6.159 8.426 3.084 9.386 0.009 C 10.466 0.009 11.515 0.009 12.617 0.009 C 12.334 0.783 12.066 1.528 11.791 2.272 C 9.952 7.294 8.114 12.317 6.268 17.339 C 6.223 17.452 6.089 17.61 6 17.61 C 4.972 17.633 3.945 17.625 2.866 17.625 C 3.149 16.866 3.409 16.144 3.677 15.422 C 4.02 14.497 4.377 13.588 4.704 12.655 C 4.764 12.475 4.771 12.234 4.704 12.061 C 3.231 8.257 1.734 4.452 0.246 0.655 C 0.164 0.46 0.089 0.249 0 0.001 Z" transform="translate(51.492 5.374)"></path><path d="M 8.85 4.466 C 8.85 5.323 8.85 6.12 8.85 6.955 C 7.846 6.955 6.863 6.955 5.858 6.955 C 5.851 7.12 5.843 7.24 5.843 7.361 C 5.843 9.083 5.843 10.804 5.843 12.526 C 5.843 12.601 5.843 12.676 5.843 12.752 C 5.888 14.285 6.722 14.834 8.21 14.646 C 8.314 14.631 8.426 14.624 8.582 14.601 C 8.582 15.353 8.59 16.075 8.575 16.797 C 8.575 16.872 8.456 16.985 8.374 17 C 7.146 17.27 5.918 17.308 4.734 16.797 C 3.446 16.24 2.873 15.15 2.821 13.834 C 2.739 11.707 2.762 9.571 2.747 7.436 C 2.747 7.286 2.747 7.143 2.747 6.955 C 1.816 6.955 0.916 6.955 0 6.955 C 0 6.12 0 5.331 0 4.496 C 0.886 4.496 1.787 4.496 2.732 4.496 C 2.732 2.985 2.732 1.504 2.732 0 C 3.789 0 4.794 0 5.843 0 C 5.843 1.474 5.843 2.94 5.843 4.451 C 6.841 4.466 7.823 4.466 8.85 4.466 Z" transform="translate(64.347 0.888)"></path><path d="M 8.895 6.955 C 7.875 6.955 6.9 6.955 5.895 6.955 C 5.888 7.105 5.88 7.225 5.88 7.346 C 5.88 9.12 5.873 10.895 5.88 12.669 C 5.88 12.917 5.91 13.165 5.962 13.406 C 6.126 14.18 6.699 14.654 7.496 14.676 C 7.853 14.684 8.21 14.676 8.605 14.676 C 8.612 14.707 8.635 14.804 8.635 14.895 C 8.635 15.458 8.62 16.022 8.642 16.579 C 8.65 16.864 8.583 17.007 8.277 17.052 C 7.354 17.21 6.431 17.263 5.508 17.052 C 3.796 16.669 2.814 15.361 2.806 13.473 C 2.799 11.466 2.806 9.451 2.806 7.443 C 2.806 7.293 2.806 7.15 2.806 6.962 C 1.861 6.962 0.945 6.962 0 6.962 C 0 6.12 0 5.323 0 4.489 C 0.916 4.489 1.824 4.489 2.791 4.489 C 2.791 2.977 2.791 1.504 2.791 0 C 3.834 0 4.831 0 5.858 0 C 5.858 1.474 5.858 2.947 5.858 4.466 C 6.878 4.466 7.875 4.466 8.888 4.466 C 8.895 5.308 8.895 6.105 8.895 6.955 Z" transform="translate(24.875 0.903)"></path><path d="M 3.022 2.456 C 4.213 0.223 5.94 -0.221 7.22 0.087 C 7.22 1.065 7.22 2.042 7.22 3.042 C 6.729 3.042 6.245 2.997 5.761 3.05 C 4.242 3.208 3.305 4.162 3.118 5.704 C 3.074 6.072 3.059 6.448 3.059 6.824 C 3.051 8.824 3.059 10.816 3.059 12.847 C 2.039 12.847 1.027 12.847 0 12.847 C 0 8.726 0 4.599 0 0.441 C 0.997 0.441 2.002 0.441 3.029 0.441 C 3.022 1.11 3.022 1.779 3.022 2.456 Z" transform="translate(100.405 4.965)"></path><path d="M 0 0 C 1.027 0 2.025 0 3.052 0 C 3.052 4.143 3.052 8.271 3.052 12.428 C 2.04 12.428 1.035 12.428 0 12.428 C 0 8.293 0 4.173 0 0 Z" transform="translate(34.73 5.39)"></path>', 11)),
        e.showJournal ? (C(), E("path", Pp)) : re("", !0)
      ])
    ], 8, $p));
  }
}, zp = "text-m font-sans flex w-full items-center justify-center border px-[16px] leading-[1.1] transition-transform duration-300 ease-out", To = {
  __name: "Button",
  props: {
    variant: { type: String, default: "light" },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["default", "large"].includes(e)
    },
    href: { type: String, default: null },
    target: { type: String, default: "_blank" },
    rel: { type: String, default: null },
    type: { type: String, default: "button" },
    disabled: { type: Boolean, default: !1 },
    download: { type: [Boolean, String], default: !1 }
  },
  setup(e) {
    const t = e, n = Y(() => typeof t.href == "string" && t.href.trim() !== ""), o = Y(() => t.disabled || t.variant === "disabled"), r = Y(() => n.value && !o.value ? "a" : "button"), a = Y(() => r.value === "a" ? t.href : void 0), i = Y(() => typeof t.download == "string" ? t.download : ""), l = Y(() => t.size === "large" ? "rounded-lg py-[10px]" : "rounded-[4px] py-[4px]"), s = Y(() => o.value ? "cursor-not-allowed" : "cursor-pointer hover:scale-[0.99] hover:duration-100"), f = Y(() => o.value ? `border-[rgba(204,204,204,0.2)] bg-[rgba(204,204,204,0.2)] ${t.variant === "dark" ? "text-[color-mix(in_srgb,var(--black)_50%,transparent)]" : "text-[color-mix(in_srgb,var(--white)_50%,transparent)]"}` : t.variant === "dark" ? "border-stroke-light bg-black text-white" : "border-stroke-dark bg-white text-black");
    return (u, d) => (C(), et(Qd(r.value), {
      href: r.value === "a" ? a.value : void 0,
      target: r.value === "a" && e.target ? e.target : void 0,
      rel: r.value === "a" && e.target === "_blank" ? "noopener noreferrer" : e.rel,
      download: r.value === "a" && e.download ? i.value : void 0,
      type: r.value === "button" ? e.type : void 0,
      disabled: r.value === "button" ? o.value : void 0,
      "aria-disabled": o.value ? "true" : void 0,
      class: ge([zp, l.value, s.value, f.value])
    }, {
      default: Gt(() => [
        tf(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "target", "rel", "download", "type", "disabled", "aria-disabled", "class"]));
  }
}, Eo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Mp = {}, Lp = {
  width: "14",
  height: "23",
  viewBox: "0 0 14 23",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
function Op(e, t) {
  return C(), E("svg", Lp, t[0] || (t[0] = [
    tc('<path d="M11.7937 4.1625V13.1813V22.2H11.1H10.4062V13.1813V4.1625H11.1H11.7937Z"></path><path d="M1.3875 4.1625V10.7531V17.3438H0.69375H0V10.7531V4.1625H0.69375H1.3875Z"></path><path d="M3.46875 4.1625V10.7531V17.3438H2.775H2.08125V10.7531V4.1625H2.775H3.46875Z"></path><path d="M5.55 4.1625V10.7531V17.3438H4.85625H4.1625V10.7531V4.1625H4.85625H5.55Z"></path><path d="M7.63125 4.1625V10.7531V17.3438H6.9375H6.24375V10.7531V4.1625H6.9375H7.63125Z"></path><path d="M9.7125 0V8.67188V17.3438H9.01875H8.325V8.67188V0H9.01875H9.7125Z"></path><path d="M13.875 4.1625V10.7531V17.3438H13.1813H12.4875V10.7531V4.1625H13.1813H13.875Z"></path>', 7)
  ]));
}
const ba = /* @__PURE__ */ Eo(Mp, [["render", Op]]);
function Ml(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Ll(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ml(Object(n), !0).forEach(function(o) {
      Hp(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ml(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Hp(e, t, n) {
  return t = Bp(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Bp(e) {
  var t = Vp(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Vp(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cr(e) {
  return e._type === "span" && "text" in e && typeof e.text == "string" && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every((t) => typeof t == "string"));
}
function vc(e) {
  return (
    // A block doesn't _have_ to be named 'block' - to differentiate between
    // allowed child types and marks, one might name them differently
    typeof e._type == "string" && // Toolkit-types like nested spans are @-prefixed
    e._type[0] !== "@" && // `markDefs` isn't _required_ per say, but if it's there, it needs to be an array
    (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && // Every mark definition needs to have an `_key` to be mappable in child spans
    e.markDefs.every((t) => typeof t._key == "string")) && // `children` is required and needs to be an array
    "children" in e && Array.isArray(e.children) && // All children are objects with `_type` (usually spans, but can contain other stuff)
    e.children.every((t) => typeof t == "object" && "_type" in t)
  );
}
function yc(e) {
  return vc(e) && "listItem" in e && typeof e.listItem == "string" && (typeof e.level > "u" || typeof e.level == "number");
}
function bc(e) {
  return e._type === "@list";
}
function wc(e) {
  return e._type === "@span";
}
function xc(e) {
  return e._type === "@text";
}
const Ol = ["strong", "em", "code", "underline", "strike-through"];
function Np(e, t, n) {
  if (!cr(e) || !e.marks)
    return [];
  if (!e.marks.length)
    return [];
  const o = e.marks.slice(), r = {};
  return o.forEach((a) => {
    r[a] = 1;
    for (let i = t + 1; i < n.length; i++) {
      const l = n[i];
      if (l && cr(l) && Array.isArray(l.marks) && l.marks.indexOf(a) !== -1)
        r[a]++;
      else
        break;
    }
  }), o.sort((a, i) => Fp(r, a, i));
}
function Fp(e, t, n) {
  const o = e[t], r = e[n];
  if (o !== r)
    return r - o;
  const a = Ol.indexOf(t), i = Ol.indexOf(n);
  return a !== i ? a - i : t.localeCompare(n);
}
function Dp(e) {
  var t;
  const {
    children: n,
    markDefs: o = []
  } = e;
  if (!n || !n.length)
    return [];
  const r = n.map(Np), a = {
    _type: "@span",
    children: [],
    markType: "<unknown>"
  };
  let i = [a];
  for (let l = 0; l < n.length; l++) {
    const s = n[l];
    if (!s)
      continue;
    const f = r[l] || [];
    let u = 1;
    if (i.length > 1)
      for (u; u < i.length; u++) {
        const g = ((t = i[u]) == null ? void 0 : t.markKey) || "", y = f.indexOf(g);
        if (y === -1)
          break;
        f.splice(y, 1);
      }
    i = i.slice(0, u);
    let d = i[i.length - 1];
    if (d) {
      for (const g of f) {
        const y = o.find((B) => B._key === g), k = y ? y._type : g, T = {
          _type: "@span",
          _key: s._key,
          children: [],
          markDef: y,
          markType: k,
          markKey: g
        };
        d.children.push(T), i.push(T), d = T;
      }
      if (cr(s)) {
        const g = s.text.split(`
`);
        for (let y = g.length; y-- > 1; )
          g.splice(y, 0, `
`);
        d.children = d.children.concat(g.map((y) => ({
          _type: "@text",
          text: y
        })));
      } else
        d.children = d.children.concat(s);
    }
  }
  return a.children;
}
function jp(e, t) {
  const n = [];
  let o;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (a) {
      if (!yc(a)) {
        n.push(a), o = void 0;
        continue;
      }
      if (!o) {
        o = Wo(a, r, t), n.push(o);
        continue;
      }
      if (Up(a, o)) {
        o.children.push(a);
        continue;
      }
      if ((a.level || 1) > o.level) {
        const i = Wo(a, r, t);
        if (t === "html") {
          const l = o.children[o.children.length - 1], s = Ll(Ll({}, l), {}, {
            children: [...l.children, i]
          });
          o.children[o.children.length - 1] = s;
        } else
          o.children.push(i);
        o = i;
        continue;
      }
      if ((a.level || 1) < o.level) {
        const i = n[n.length - 1], l = i && wa(i, a);
        if (l) {
          o = l, o.children.push(a);
          continue;
        }
        o = Wo(a, r, t), n.push(o);
        continue;
      }
      if (a.listItem !== o.listItem) {
        const i = n[n.length - 1], l = i && wa(i, {
          level: a.level || 1
        });
        if (l && l.listItem === a.listItem) {
          o = l, o.children.push(a);
          continue;
        } else {
          o = Wo(a, r, t), n.push(o);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", a), n.push(a);
    }
  }
  return n;
}
function Up(e, t) {
  return (e.level || 1) === t.level && e.listItem === t.listItem;
}
function Wo(e, t, n) {
  return {
    _type: "@list",
    _key: `${e._key || `${t}`}-parent`,
    mode: n,
    level: e.level || 1,
    listItem: e.listItem,
    children: [e]
  };
}
function wa(e, t) {
  const n = t.level || 1, o = t.listItem || "normal", r = typeof t.listItem == "string";
  if (bc(e) && (e.level || 1) === n && r && (e.listItem || "normal") === o)
    return e;
  if (!("children" in e))
    return;
  const a = e.children[e.children.length - 1];
  return a && !cr(a) ? wa(a, t) : void 0;
}
function _c(e) {
  let t = "";
  return e.children.forEach((n) => {
    xc(n) ? t += n.text : wc(n) && (t += _c(n));
  }), t;
}
const qp = "html";
function Kp(e, t) {
  const { block: n, list: o, listItem: r, marks: a, types: i, ...l } = t;
  return {
    ...e,
    block: co(e, t, "block"),
    list: co(e, t, "list"),
    listItem: co(e, t, "listItem"),
    marks: co(e, t, "marks"),
    types: co(e, t, "types"),
    ...l
  };
}
function co(e, t, n) {
  const o = t[n], r = e[n];
  return typeof o == "function" || o && typeof r == "function" ? o : o ? {
    ...r,
    ...o
  } : r;
}
const je = (e) => (t, { slots: n }) => {
  var o;
  return Ge(e, (o = n.default) == null ? void 0 : o.call(n));
}, Wp = ({ value: e }, { slots: t }) => {
  var n;
  return Ge("a", { href: e == null ? void 0 : e.href }, (n = t.default) == null ? void 0 : n.call(t));
}, Xp = { textDecoration: "underline" }, Yp = {
  code: je("code"),
  em: je("em"),
  link: Wp,
  "strike-through": je("del"),
  strong: je("strong"),
  underline: (e, { slots: t }) => {
    var n;
    return Ge("span", { style: Xp }, (n = t.default) == null ? void 0 : n.call(t));
  }
}, Gp = {
  number: je("ol"),
  bullet: je("ul")
}, Zp = je("li"), Ao = (e, t) => `[@portabletext/vue] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`, kc = (e) => Ao(`block type "${e}"`, "types"), Jp = (e) => Ao(`mark type "${e}"`, "marks"), Qp = (e) => Ao(`block style "${e}"`, "block"), eh = (e) => Ao(`list style "${e}"`, "list"), th = (e) => Ao(`list item style "${e}"`, "listItem");
function nh(e) {
  console.warn(e);
}
const Hl = { display: "none" }, oh = ({
  value: e,
  isInline: t
}) => {
  const n = kc(e._type);
  return t ? Ge("span", { style: Hl }, n) : Ge("div", { style: Hl }, n);
}, rh = ({ markType: e }, { slots: t }) => {
  var n;
  return Ge("span", { class: `unknown__pt__mark__${e}` }, (n = t.default) == null ? void 0 : n.call(t));
}, ah = je("p"), ih = je("ul"), lh = je("li"), sh = () => Ge("br"), ch = {
  normal: je("p"),
  blockquote: je("blockquote"),
  h1: je("h1"),
  h2: je("h2"),
  h3: je("h3"),
  h4: je("h4"),
  h5: je("h5"),
  h6: je("h6")
}, Bl = {
  types: {},
  block: ch,
  marks: Yp,
  list: Gp,
  listItem: Zp,
  hardBreak: sh,
  unknownType: oh,
  unknownMark: rh,
  unknownList: ih,
  unknownListItem: lh,
  unknownBlockStyle: ah
}, uh = (e, t) => {
  function n(d) {
    const { node: g, index: y, isInline: k } = d, T = g._key || `node-${y}`;
    return bc(g) ? a(g, y, T) : yc(g) ? r(g, y, T) : wc(g) ? i(g, y, T) : o(g) ? u(g, y, T, k) : vc(g) ? l(g, y, T, k) : xc(g) ? s(g, T) : f(g, y, T, k);
  }
  function o(d) {
    return d._type in e.types;
  }
  function r(d, g, y) {
    const k = Vl({ node: d, index: g, isInline: !1, renderNode: n }), T = e.listItem, B = (typeof T == "function" ? T : T[d.listItem]) || e.unknownListItem;
    if (B === e.unknownListItem) {
      const U = d.listItem || "bullet";
      t(th(U), {
        type: U,
        nodeType: "listItemStyle"
      });
    }
    let x = k.children;
    if (d.style && d.style !== "normal") {
      const { listItem: U, ...Q } = d;
      x = n({
        node: Q,
        index: g,
        isInline: !1,
        renderNode: n
      });
    }
    return Ge(
      B,
      {
        key: y,
        value: d,
        index: g,
        isInline: !1,
        renderNode: n
      },
      () => x
    );
  }
  function a(d, g, y) {
    const k = d.children.map(
      (x, U) => n({
        node: x._key ? x : { ...x, _key: `li-${g}-${U}` },
        index: U,
        isInline: !1,
        renderNode: n
      })
    ), T = e.list, B = (typeof T == "function" ? T : T[d.listItem]) || e.unknownList;
    if (B === e.unknownList) {
      const x = d.listItem || "bullet";
      t(eh(x), {
        nodeType: "listStyle",
        type: x
      });
    }
    return Ge(
      B,
      {
        key: y,
        value: d,
        index: g,
        isInline: !1,
        renderNode: n
      },
      () => k
    );
  }
  function i(d, g, y) {
    const { markDef: k, markType: T, markKey: B } = d, x = e.marks[T] || e.unknownMark, U = d.children.map(
      (Q, w) => n({ node: Q, index: w, isInline: !0, renderNode: n })
    );
    return x === e.unknownMark && t(Jp(T), {
      nodeType: "mark",
      type: T
    }), Ge(
      x,
      {
        key: y,
        text: _c(d),
        value: k,
        markType: T,
        markKey: B,
        renderNode: n
      },
      () => U
    );
  }
  function l(d, g, y, k) {
    const { _key: T, children: B, ...x } = Vl({
      node: d,
      index: g,
      isInline: k,
      renderNode: n
    }), U = x.node.style || "normal", Q = (typeof e.block == "function" ? e.block : e.block[U]) || e.unknownBlockStyle;
    return Q === e.unknownBlockStyle && t(Qp(U), {
      nodeType: "blockStyle",
      type: U
    }), Ge(Q, { key: y, ...x, value: x.node, renderNode: n }, () => B);
  }
  function s(d, g) {
    if (d.text === `
`) {
      const y = e.hardBreak;
      return y ? Ge(y, { key: g }) : `
`;
    }
    return d.text;
  }
  function f(d, g, y, k) {
    const T = {
      value: d,
      isInline: k,
      index: g,
      renderNode: n
    };
    t(kc(d._type), {
      nodeType: "block",
      type: d._type
    });
    const B = e.unknownType;
    return Ge(B, { key: y, ...T });
  }
  function u(d, g, y, k) {
    const T = {
      value: d,
      isInline: k,
      index: g,
      renderNode: n
    }, B = e.types[d._type];
    return B ? Ge(B, { key: y, ...T }) : void 0;
  }
  return n;
};
function Vl(e) {
  const { node: t, index: n, isInline: o, renderNode: r } = e, a = Dp(t).map(
    (i, l) => r({ node: i, isInline: !0, index: l, renderNode: r })
  );
  return {
    _key: t._key || `block-${n}`,
    children: a,
    index: n,
    isInline: o,
    node: t
  };
}
const ur = /* @__PURE__ */ Rs({
  __name: "vue-portable-text",
  props: {
    value: {},
    components: {},
    onMissingComponent: { type: [Function, Boolean], default: () => nh },
    listNestingMode: {}
  },
  setup(e) {
    function t() {
    }
    const n = e, o = () => {
      const r = n.onMissingComponent || t, a = Array.isArray(n.value) ? n.value : [n.value], i = jp(a, n.listNestingMode || qp), l = n.components ? Kp(Bl, n.components) : Bl, s = uh(l, r);
      return i.map(
        (f, u) => s({ node: f, index: u, isInline: !1, renderNode: s })
      );
    };
    return (r, a) => (C(), et(o));
  }
}), dh = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "tel:"]), Cc = "https://portable-text.invalid/", Sc = () => typeof window > "u" ? void 0 : window.location, Tc = (e, t = Sc()) => {
  if (typeof e != "string")
    return;
  const n = e.trim();
  if (n)
    try {
      const o = new URL(n, (t == null ? void 0 : t.href) || Cc);
      return dh.has(o.protocol) ? n : void 0;
    } catch {
      return;
    }
}, fh = (e, t = Sc()) => {
  const n = Tc(e, t);
  if (!n)
    return !1;
  try {
    const o = new URL(n, (t == null ? void 0 : t.href) || Cc);
    return o.protocol !== "http:" && o.protocol !== "https:" ? !1 : t ? o.origin !== t.origin : /^(?:https?:)?\/\//i.test(n);
  } catch {
    return !1;
  }
}, At = {
  __name: "ExpandedPortableText",
  props: {
    value: {
      type: [Array, Object],
      default: () => []
    }
  },
  setup(e) {
    const t = ({ value: o }, { slots: r }) => {
      var l, s;
      const a = Tc((o == null ? void 0 : o.href) || (o == null ? void 0 : o.link));
      if (!a)
        return (l = r.default) == null ? void 0 : l.call(r);
      const i = fh(a);
      return Ge(
        "a",
        {
          href: a,
          target: i ? "_blank" : void 0,
          rel: i ? "noopener noreferrer" : void 0
        },
        (s = r.default) == null ? void 0 : s.call(r)
      );
    }, n = {
      marks: {
        external: t,
        link: t
      }
    };
    return (o, r) => (C(), et(Bt(ur), {
      value: e.value,
      components: n
    }, null, 8, ["value"]));
  }
}, ph = {}, hh = {
  width: "8",
  height: "9",
  viewBox: "0 0 8 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function gh(e, t) {
  return C(), E("svg", hh, t[0] || (t[0] = [
    S("path", {
      d: "M1.94627 0.529297L0.807578 1.73766H5.41928L0.28125 7.19009L1.08593 8.044L6.22395 2.59158V7.48547L7.36265 6.2771V0.529297H1.94627Z",
      fill: "var(--white)"
    }, null, -1)
  ]));
}
const mh = /* @__PURE__ */ Eo(ph, [["render", gh]]), vh = { class: "border-stroke-light flex flex-nowrap justify-between border-t pt-[10px] sm:flex-wrap lg:flex-nowrap" }, yh = { class: "text-right" }, bh = ["href", "data-ph-entry", "onClick"], Nl = {
  __name: "JournalDescriptionCard",
  props: {
    description: {
      type: [Array, Object],
      default: () => []
    },
    externalLinks: {
      type: Array,
      default: () => []
    },
    entry: String,
    loaded: Boolean,
    naturalHeight: Boolean,
    expandedOpening: Boolean,
    expandedClosing: Boolean
  },
  emits: ["external-link-click"],
  setup(e, { emit: t }) {
    const n = t, o = (r, a, i = void 0) => {
      n("external-link-click", { linkKind: r, linkUrl: a, linkTitle: i });
    };
    return (r, a) => (C(), E("article", {
      class: ge(["anti-motion-fold border-stroke-light flex flex-col gap-[10px] overflow-hidden rounded-lg border bg-black p-[10px] text-m text-[rgb(244_244_244)]", [
        { "duration-[240ms]": e.expandedClosing, "duration-[200ms]": !e.expandedClosing },
        { "mt-0 max-h-0 opacity-0 -translate-y-[8px]": e.expandedOpening || e.expandedClosing || !e.loaded },
        {
          "mt-[10px] opacity-100 translate-y-0 delay-[40ms]": !e.expandedOpening && !e.expandedClosing && e.loaded,
          "max-h-[260px]": !e.naturalHeight && !e.expandedOpening && !e.expandedClosing && e.loaded,
          "max-h-[1200px]": e.naturalHeight && !e.expandedOpening && !e.expandedClosing && e.loaded
        }
      ]])
    }, [
      oe(At, { value: e.description }, null, 8, ["value"]),
      S("section", vh, [
        S("p", null, [
          S("a", {
            class: "group relative hover:opacity-60",
            target: "_blank",
            href: "https://www.journal.antikythera.org",
            "data-ph-capture": "",
            "data-ph-component": "antikythera-journal-footer-link",
            "data-ph-action": "external-link-click",
            "data-ph-link-kind": "antikythera-journal-home",
            onClick: a[0] || (a[0] = (i) => o("antikythera-journal-home", "https://www.journal.antikythera.org"))
          }, [
            a[1] || (a[1] = S("span", null, "journal.antikythera.org", -1)),
            oe(mh, { class: "absolute bottom-[.15em] -right-[.95em] h-[.7em] w-[.7em] sm:opacity-0 lg:group-hover:opacity-100" })
          ])
        ]),
        S("ul", yh, [
          (C(!0), E(be, null, _t(e.externalLinks, (i) => (C(), E("li", {
            key: i.linkUrl || i.linkTitle,
            class: "inline mx-1 first:ml-0 last:mr-0"
          }, [
            S("a", {
              href: i.linkUrl,
              target: "_blank",
              class: "hover:opacity-60",
              "data-ph-capture": "",
              "data-ph-component": "antikythera-footer-link",
              "data-ph-action": "external-link-click",
              "data-ph-link-kind": "settings-link",
              "data-ph-entry": e.entry,
              onClick: (l) => o("settings-link", i.linkUrl, i.linkTitle)
            }, de(i.linkTitle), 9, bh)
          ]))), 128))
        ])
      ])
    ], 2));
  }
}, wh = "cdn.sanity.io", xh = (e) => {
  if (!e)
    return e;
  try {
    const t = new URL(e);
    return t.hostname !== wh ? e : (t.searchParams.has("dl") || t.searchParams.set("dl", ""), t.toString());
  } catch {
    return e;
  }
}, Fl = {
  __name: "FileDownloadButton",
  props: {
    variant: { type: String, default: "dark" },
    entryUrl: { type: String, default: "" },
    label: { type: String, required: !0 },
    url: { type: String, default: "" },
    filename: { type: String, default: "" },
    fileType: { type: String, required: !0 }
  },
  emits: ["download"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Y(() => n.fileType.toLowerCase() === "markdown"), a = Y(() => r.value ? xh(n.url) : n.url), i = () => {
      n.url && o("download");
    };
    return (l, s) => (C(), et(To, {
      variant: e.variant,
      href: a.value,
      target: r.value ? "_self" : "_blank",
      download: r.value ? e.filename || !0 : !1,
      disabled: !e.url,
      "data-ph-capture": "",
      "data-ph-component": "antikythera-file",
      "data-ph-action": "file-download",
      "data-ph-entry": e.entryUrl,
      "data-ph-file-type": e.fileType,
      onClick: i
    }, {
      default: Gt(() => [
        Ue(de(e.label), 1)
      ]),
      _: 1
    }, 8, ["variant", "href", "target", "download", "disabled", "data-ph-entry", "data-ph-file-type"]));
  }
}, _h = "cdn.sanity.io", Cn = (e, { width: t = 1200 } = {}) => {
  if (!e || typeof e != "string")
    return "";
  try {
    const n = new URL(e);
    return n.protocol !== "https:" || n.hostname !== _h || !n.pathname.startsWith("/images/") ? e : (n.searchParams.has("w") || (n.searchParams.set("w", String(Math.max(1, Math.round(t)))), n.searchParams.set("fit", "max")), n.searchParams.has("auto") || n.searchParams.set("auto", "format"), n.toString());
  } catch {
    return e;
  }
}, Xo = (e, t, n) => {
  !n || t.has(n) || (t.add(n), e.push(n));
}, Dl = (e = {}, { includeRelatedPdf: t = !0 } = {}) => {
  var a, i, l, s, f, u;
  const n = [], o = [], r = /* @__PURE__ */ new Set();
  Xo(n, r, Cn((a = e == null ? void 0 : e.pdfPreview) == null ? void 0 : a.url, { width: 720 }));
  for (const d of (e == null ? void 0 : e.annotations) || []) {
    const g = ((i = d == null ? void 0 : d.featuredImageSquare) == null ? void 0 : i.url) || ((l = d == null ? void 0 : d.featuredImage) == null ? void 0 : l.url);
    Xo(o, r, Cn(g, { width: 1e3 }));
  }
  for (const d of (e == null ? void 0 : e.relatedEntries) || []) {
    const g = ((s = d == null ? void 0 : d.featuredImageSquare) == null ? void 0 : s.url) || ((f = d == null ? void 0 : d.featuredImage) == null ? void 0 : f.url);
    Xo(o, r, Cn(g, { width: 1200 })), t && Xo(o, r, Cn((u = d == null ? void 0 : d.pdfPreview) == null ? void 0 : u.url, { width: 720 }));
  }
  return { critical: n, deferred: o };
}, kh = ["src", "alt", "loading", "fetchpriority"], Ch = {
  key: 0,
  class: "mt-[10px] flex shrink-0 flex-col gap-[10px]"
}, Za = {
  __name: "PdfPreviewDownload",
  props: {
    entry: {
      type: Object,
      default: () => ({})
    },
    downloadFileType: {
      type: String,
      default: "pdf"
    },
    fill: {
      type: Boolean,
      default: !1
    },
    imageLoading: {
      type: String,
      default: "lazy"
    },
    imageFetchPriority: {
      type: String,
      default: "low"
    }
  },
  emits: ["download"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Y(() => {
      var w, z;
      return ((z = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : z.override) === !0;
    }), a = Y(() => {
      var w, z;
      return Cn((z = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : z.url, { width: 720 });
    }), i = Y(() => {
      var w, z, ee;
      return ((z = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : z.altText) || `${((ee = n.entry) == null ? void 0 : ee.title) || "Article"} PDF preview`;
    }), l = Y(() => {
      var w, z, ee, M;
      return r.value && ((z = (w = n.entry) == null ? void 0 : w.pdfPreview) != null && z.downloadUrl) ? n.entry.pdfPreview.downloadUrl : ((M = (ee = n.entry) == null ? void 0 : ee.pdf) == null ? void 0 : M.url) || "";
    }), s = Y(() => {
      var w, z;
      return ((z = (w = n.entry) == null ? void 0 : w.pdf) == null ? void 0 : z.pdfFilename) || "";
    }), f = Y(() => {
      var w, z;
      return ((z = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : z.downloadLabel) || `Download ${n.downloadFileType.toUpperCase()}`;
    }), u = Y(() => {
      var w, z;
      return ((z = (w = n.entry) == null ? void 0 : w.markdown) == null ? void 0 : z.url) || "";
    }), d = Y(() => {
      var w, z;
      return ((z = (w = n.entry) == null ? void 0 : w.markdown) == null ? void 0 : z.markdownFilename) || "";
    }), g = Y(() => {
      var w, z;
      return !!(l.value || (z = (w = n.entry) == null ? void 0 : w.pdfPreview) != null && z.downloadLabel);
    }), y = Y(() => !!u.value), k = Y(
      () => !!(r.value || a.value || g.value || y.value)
    ), T = Y(() => {
      var w, z;
      return {
        fileType: n.downloadFileType,
        fileName: s.value,
        mimeType: ((z = (w = n.entry) == null ? void 0 : w.pdf) == null ? void 0 : z.pdfMimeType) || "",
        url: l.value
      };
    }), B = Y(() => {
      var w, z;
      return {
        fileType: "markdown",
        fileName: d.value,
        mimeType: ((z = (w = n.entry) == null ? void 0 : w.markdown) == null ? void 0 : z.markdownMimeType) || "",
        url: u.value
      };
    }), x = {
      backgroundImage: "radial-gradient(circle, rgba(220, 220, 220, 0.7) 0.45px, transparent 0.55px)",
      backgroundPosition: "0 0, 1px 1px",
      backgroundSize: "2px 2px",
      opacity: 0.55
    }, U = {
      background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 28%, rgba(255, 255, 255, 0.38) 55%, rgba(255, 255, 255, 0.82) 76%, #fff 96%)"
    }, Q = (w) => {
      w != null && w.url && o("download", w);
    };
    return (w, z) => {
      var ee, M;
      return k.value ? (C(), E("div", {
        key: 0,
        class: ge(["flex w-full flex-col gap-[10px] text-m text-black lg:-mx-3 lg:w-[calc(100%+var(--fontSize)*1.5)]", { "h-full": e.fill }])
      }, [
        a.value || g.value ? (C(), E("aside", {
          key: 0,
          class: ge(["border-stroke-light flex w-full flex-col overflow-hidden rounded-lg border bg-white p-[10px]", { "h-full": e.fill }])
        }, [
          S("div", {
            class: ge(["relative w-full overflow-hidden rounded-[4px] bg-[#F2F2F2]", e.fill ? "min-h-0 flex-1" : "aspect-square"])
          }, [
            a.value ? (C(), E("img", {
              key: 0,
              src: a.value,
              alt: i.value,
              loading: e.imageLoading,
              fetchpriority: e.imageFetchPriority,
              decoding: "async",
              class: ge(["absolute inset-0 h-full w-full object-top", r.value ? "object-contain" : "object-cover"])
            }, null, 10, kh)) : re("", !0),
            r.value ? re("", !0) : (C(), E("div", {
              key: 1,
              class: "pointer-events-none absolute inset-0",
              style: x
            })),
            r.value ? re("", !0) : (C(), E("div", {
              key: 2,
              class: "pointer-events-none absolute inset-0",
              style: U
            }))
          ], 2),
          g.value ? (C(), E("div", Ch, [
            oe(Fl, {
              class: "shrink-0",
              "entry-url": (ee = e.entry) == null ? void 0 : ee.url,
              label: f.value,
              url: l.value,
              filename: s.value,
              "file-type": "pdf",
              onDownload: z[0] || (z[0] = (q) => Q(T.value))
            }, null, 8, ["entry-url", "label", "url", "filename"])
          ])) : re("", !0)
        ], 2)) : re("", !0),
        y.value ? (C(), et(Fl, {
          key: 1,
          class: "shrink-0",
          variant: "light",
          "entry-url": (M = e.entry) == null ? void 0 : M.url,
          label: "Export Markdown",
          url: u.value,
          filename: d.value,
          "file-type": "markdown",
          onDownload: z[1] || (z[1] = (q) => Q(B.value))
        }, null, 8, ["entry-url", "url", "filename"])) : re("", !0)
      ], 2)) : re("", !0);
    };
  }
}, Sh = { class: "hidden w-full min-w-0 basis-full flex-col text-m text-[rgb(244_244_244)] sm:flex sm:basis-col1" }, Th = {
  key: 0,
  class: "border-stroke-light w-full border-t pb-[10px] pt-[10px] uppercase"
}, Eh = {
  __name: "AnnotationsRelated",
  props: {
    entry: Object,
    loaded: { type: Boolean, default: !1 },
    loadError: { type: Boolean, default: !1 },
    downloadFileType: { type: String, default: "pdf" }
  },
  emits: ["download"],
  setup(e) {
    const t = e, n = Y(
      () => {
        var o, r, a, i, l, s, f, u, d, g;
        return !!(((r = (o = t.entry) == null ? void 0 : o.pdfPreview) == null ? void 0 : r.override) === !0 || (i = (a = t.entry) == null ? void 0 : a.pdfPreview) != null && i.url || (s = (l = t.entry) == null ? void 0 : l.pdf) != null && s.url || (u = (f = t.entry) == null ? void 0 : f.markdown) != null && u.url || (g = (d = t.entry) == null ? void 0 : d.pdfPreview) != null && g.downloadLabel);
      }
    );
    return (o, r) => (C(), E("section", Sh, [
      n.value ? (C(), E("h3", Th, "PDF")) : re("", !0),
      n.value ? (C(), et(Za, {
        key: 1,
        entry: e.entry,
        "download-file-type": e.downloadFileType,
        "image-loading": "eager",
        "image-fetch-priority": "high",
        class: "mb-[10px] shrink-0",
        onDownload: r[0] || (r[0] = (a) => o.$emit("download", a))
      }, null, 8, ["entry", "download-file-type"])) : re("", !0)
    ]));
  }
}, Ah = { class: "grid w-full grid-cols-1 lg:grid-cols-9 lg:gap-x-9" }, Ih = { class: "lg:-mx-3 lg:col-span-6 lg:col-start-1" }, $h = {
  __name: "ExploreAllArticlesButton",
  setup(e) {
    return (t, n) => (C(), E("div", Ah, [
      S("div", Ih, [
        oe(To, {
          variant: "light",
          size: "large",
          href: "https://journal.antikythera.org/articles",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-related-articles",
          "data-ph-action": "explore-all-articles-click"
        }, {
          default: Gt(() => n[0] || (n[0] = [
            Ue(" Explore All Articles ")
          ])),
          _: 1
        })
      ])
    ]));
  }
}, Ec = (e) => {
  if (!e) return "";
  const t = new Date(e);
  if (Number.isNaN(t.getTime())) return "";
  const n = String(t.getUTCMonth() + 1).padStart(2, "0"), o = String(t.getUTCDate()).padStart(2, "0");
  return `${n}.${o}.${t.getUTCFullYear()}`;
}, Rh = { class: "border-stroke-light relative flex h-full w-full flex-col gap-[10px] overflow-hidden rounded-lg border bg-black p-[10px] text-m text-[rgb(244_244_244)] lg:-mx-3 lg:w-[calc(100%+var(--fontSize)*1.5)]" }, Ph = ["href", "data-ph-related-entry"], zh = { class: "relative flex h-full w-full flex-col gap-[10px] lg:flex-row lg:items-stretch" }, Mh = {
  key: 0,
  class: "aspect-square w-full overflow-hidden rounded-[4px] bg-black lg:w-auto lg:flex-1"
}, Lh = ["src", "alt"], Oh = { class: "flex w-full flex-col gap-[10px] lg:flex-1" }, Hh = { class: "relative z-20 pointer-events-none flex min-h-[calc(1.28em*3)] flex-col" }, Bh = { class: "uppercase" }, Vh = { key: 0 }, Nh = ["href", "data-ph-related-entry", "onClick"], Fh = { key: 1 }, Dh = { key: 1 }, jh = { key: 2 }, Uh = ["href", "data-ph-related-entry", "onClick"], qh = { key: 1 }, Kh = {
  key: 0,
  class: "[&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:opacity-60 [&_p+p]:mt-[10px] lg:line-clamp-4 lg:min-h-[calc(1.28em*4)] xl:line-clamp-6 xl:min-h-[calc(1.28em*6)]"
}, Wh = { class: "relative z-20 mt-auto flex w-full flex-col gap-[10px]" }, Xh = {
  key: 0,
  class: "flex w-full items-center justify-between gap-2"
}, Yh = { class: "min-w-0 truncate whitespace-nowrap" }, Gh = ["href", "data-ph-related-entry"], Zh = { key: 1 }, Jh = {
  key: 0,
  class: "shrink-0 text-right text-[rgb(244_244_244_/_0.5)]"
}, Qh = {
  __name: "RelatedArticleCell",
  props: {
    entry: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = Y(
      () => {
        var g, y, k, T;
        return Cn(((y = (g = t.entry) == null ? void 0 : g.featuredImageSquare) == null ? void 0 : y.url) || ((T = (k = t.entry) == null ? void 0 : k.featuredImage) == null ? void 0 : T.url), { width: 1200 });
      }
    ), o = (g) => {
      if (g)
        try {
          return new URL(g, window.location.origin).hostname;
        } catch {
          return;
        }
    }, r = Y(() => {
      var g, y;
      return (g = t.entry) != null && g.externalLink ? t.entry.externalLink : (y = t.entry) != null && y.url ? `https://${t.entry.url}.antikythera.org` : void 0;
    }), a = (g) => !g || g._type !== "block" ? !1 : (g.children ?? []).every((k) => !(k != null && k.text) || k.text.trim() === ""), i = (g) => {
      if (!Array.isArray(g)) return [];
      let y = 0, k = g.length;
      for (; y < k && a(g[y]); ) y++;
      for (; k > y && a(g[k - 1]); ) k--;
      return g.slice(y, k);
    }, l = Y(
      () => {
        var g, y, k;
        return i(((y = (g = t.entry) == null ? void 0 : g.shortIntroduction) == null ? void 0 : y.length) > 0 ? t.entry.shortIntroduction : (k = t.entry) == null ? void 0 : k.introduction);
      }
    ), s = () => {
      var g, y, k, T, B, x, U;
      ce("antikythera related entry clicked", {
        related_entry_title: ((g = t.entry) == null ? void 0 : g.title) || void 0,
        related_entry_url: ((y = t.entry) == null ? void 0 : y.url) || void 0,
        related_entry_domain: o(r.value),
        related_entry_has_external_link: !!((k = t.entry) != null && k.externalLink),
        related_entry_authors_count: ((B = (T = t.entry) == null ? void 0 : T.authors) == null ? void 0 : B.length) || 0,
        related_entry_designers_count: ((U = (x = t.entry) == null ? void 0 : x.designers) == null ? void 0 : U.length) || 0
      });
    }, f = (g, y) => {
      var k, T;
      ce("antikythera related entry author link clicked", {
        related_entry_title: ((k = t.entry) == null ? void 0 : k.title) || void 0,
        related_entry_url: ((T = t.entry) == null ? void 0 : T.url) || void 0,
        author_name: (g == null ? void 0 : g.title) || void 0,
        author_role: y,
        author_external_domain: o(g == null ? void 0 : g.externalLink)
      });
    }, u = () => {
      var g, y, k, T;
      ce("antikythera related entry doi link clicked", {
        related_entry_title: ((g = t.entry) == null ? void 0 : g.title) || void 0,
        related_entry_url: ((y = t.entry) == null ? void 0 : y.url) || void 0,
        doi: ((k = t.entry) == null ? void 0 : k.doi) || void 0,
        doi_domain: o((T = t.entry) == null ? void 0 : T.doiUrl)
      });
    }, d = Y(() => {
      var g;
      return Ec((g = t.entry) == null ? void 0 : g.releaseDate);
    });
    return (g, y) => {
      var k, T, B, x, U, Q, w, z, ee, M, q, j;
      return C(), E("article", Rh, [
        S("a", {
          class: "absolute inset-0 z-10",
          href: r.value,
          target: "_blank",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-related-entry",
          "data-ph-action": "related-entry-click",
          "data-ph-related-entry": (k = e.entry) == null ? void 0 : k.url,
          onClick: s
        }, null, 8, Ph),
        S("div", zh, [
          e.entry.featuredImage || e.entry.featuredImageSquare ? (C(), E("figure", Mh, [
            n.value ? (C(), E("img", {
              key: 0,
              src: n.value,
              alt: ((B = (T = e.entry) == null ? void 0 : T.featuredImageSquare) == null ? void 0 : B.alt) || ((U = (x = e.entry) == null ? void 0 : x.featuredImage) == null ? void 0 : U.alt) || ((Q = e.entry) == null ? void 0 : Q.title) || "",
              class: "h-full w-full object-cover",
              loading: "lazy",
              decoding: "async",
              fetchpriority: "low"
            }, null, 8, Lh)) : re("", !0)
          ])) : re("", !0),
          S("div", Oh, [
            S("div", Hh, [
              S("h2", Bh, de(e.entry.title), 1),
              S("h3", null, [
                ((z = (w = e.entry) == null ? void 0 : w.authors) == null ? void 0 : z.length) > 0 ? (C(), E("span", Vh, [
                  y[0] || (y[0] = Ue(" by ")),
                  (C(!0), E(be, null, _t(e.entry.authors, (K, G) => {
                    var V;
                    return C(), E(be, {
                      key: `author-${K.title}-${G}`
                    }, [
                      K.externalLink && K.externalLink != "" ? (C(), E("a", {
                        key: 0,
                        target: "_blank",
                        class: "relative pointer-events-auto underline decoration-1 underline-offset-2 hover:opacity-60",
                        href: K.externalLink,
                        "data-ph-capture": "",
                        "data-ph-component": "antikythera-related-entry",
                        "data-ph-action": "related-author-link-click",
                        "data-ph-related-entry": (V = e.entry) == null ? void 0 : V.url,
                        "data-ph-person-role": "author",
                        onClick: Ko((te) => f(K, "author"), ["stop"])
                      }, de(K.title), 9, Nh)) : (C(), E("span", Fh, de(K.title), 1)),
                      Ue(de(e.entry.authors.length > 1 ? G == e.entry.authors.length - 2 ? " & " : G < e.entry.authors.length - 2 ? ", " : "" : ""), 1)
                    ], 64);
                  }), 128))
                ])) : (C(), E("span", Dh, y[1] || (y[1] = [
                  S("br", null, null, -1),
                  Ue(" ")
                ]))),
                ((M = (ee = e.entry) == null ? void 0 : ee.designers) == null ? void 0 : M.length) > 0 ? (C(), E("span", jh, [
                  y[2] || (y[2] = S("br", null, null, -1)),
                  y[3] || (y[3] = Ue(" with ")),
                  (C(!0), E(be, null, _t(e.entry.designers, (K, G) => {
                    var V;
                    return C(), E(be, {
                      key: `designer-${K.title}-${G}`
                    }, [
                      K.externalLink && K.externalLink != "" ? (C(), E("a", {
                        key: 0,
                        target: "_blank",
                        class: "pointer-events-auto underline decoration-1 underline-offset-2 hover:opacity-60",
                        href: K.externalLink,
                        "data-ph-capture": "",
                        "data-ph-component": "antikythera-related-entry",
                        "data-ph-action": "related-author-link-click",
                        "data-ph-related-entry": (V = e.entry) == null ? void 0 : V.url,
                        "data-ph-person-role": "designer",
                        onClick: Ko((te) => f(K, "designer"), ["stop"])
                      }, de(K.title), 9, Uh)) : (C(), E("span", qh, de(K.title), 1)),
                      Ue(de(e.entry.designers.length > 1 ? G == e.entry.designers.length - 2 ? " & " : G < e.entry.designers.length - 2 ? ", " : "" : ""), 1)
                    ], 64);
                  }), 128))
                ])) : re("", !0)
              ])
            ]),
            l.value.length > 0 ? (C(), E("section", Kh, [
              oe(At, { value: l.value }, null, 8, ["value"])
            ])) : re("", !0),
            S("div", Wh, [
              e.entry.doi && e.entry.doi != "" || d.value ? (C(), E("section", Xh, [
                S("section", {
                  class: ge(["flex min-w-0 items-center gap-2 pr-3", { "opacity-0": !e.entry.doi || e.entry.doi == "" }])
                }, [
                  oe(ba, { class: "h-6 w-4 shrink-0 text-[rgb(244_244_244)]" }),
                  S("p", Yh, [
                    y[4] || (y[4] = Ue(" DOI ")),
                    e.entry.doiUrl ? (C(), E("a", {
                      key: 0,
                      href: e.entry.doiUrl,
                      target: "_blank",
                      class: "pointer-events-auto cursor-crosshair hover:opacity-60",
                      "data-ph-capture": "",
                      "data-ph-component": "antikythera-related-entry",
                      "data-ph-action": "related-doi-link-click",
                      "data-ph-related-entry": (q = e.entry) == null ? void 0 : q.url,
                      onClick: Ko(u, ["stop"])
                    }, de(e.entry.doi ? e.entry.doi : " "), 9, Gh)) : (C(), E("span", Zh, de(e.entry.doi ? e.entry.doi : " "), 1))
                  ])
                ], 2),
                d.value ? (C(), E("p", Jh, de(d.value), 1)) : re("", !0)
              ])) : re("", !0),
              oe(To, {
                variant: "light",
                class: "relative pointer-events-auto",
                href: r.value,
                target: "_blank",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-related-entry",
                "data-ph-action": "related-entry-click",
                "data-ph-related-entry": (j = e.entry) == null ? void 0 : j.url,
                onClick: Ko(s, ["stop"])
              }, {
                default: Gt(() => y[5] || (y[5] = [
                  Ue(" Launch ")
                ])),
                _: 1
              }, 8, ["href", "data-ph-related-entry"])
            ])
          ])
        ])
      ]);
    };
  }
}, eg = {
  key: 0,
  class: "text-m text-[rgb(244_244_244)]"
}, tg = { class: "mobile-expanded-page-header grid w-full grid-cols-1 gap-[10px] pb-[10px] uppercase lg:grid-cols-9 lg:gap-x-9" }, ng = { class: "border-stroke-light border-t pt-[10px] lg:col-span-6 lg:col-start-1" }, og = ["aria-expanded", "data-ph-entry"], rg = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, ag = {
  key: 0,
  class: "border-stroke-light hidden border-t pt-[10px] lg:col-span-3 lg:col-start-7 lg:block"
}, ig = {
  __name: "RelatedArticlesSection",
  props: {
    entry: {
      type: Object,
      default: () => ({})
    },
    loaded: {
      type: Boolean,
      default: !1
    },
    loadError: {
      type: Boolean,
      default: !1
    },
    expanded: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Y(() => !n.loaded && !n.loadError), a = Y(() => {
      var f;
      return ((f = n.entry) == null ? void 0 : f.relatedEntries) || [];
    }), i = (f) => {
      var u, d, g, y, k;
      return !!(((u = f == null ? void 0 : f.pdfPreview) == null ? void 0 : u.override) === !0 || (d = f == null ? void 0 : f.pdfPreview) != null && d.url || (g = f == null ? void 0 : f.pdf) != null && g.url || (y = f == null ? void 0 : f.pdfPreview) != null && y.downloadLabel || (k = f == null ? void 0 : f.markdown) != null && k.url);
    }, l = Y(() => a.value.some(i)), s = () => {
      var u, d;
      const f = !n.expanded;
      o("toggle", { open: f }), ce("antikythera section toggled", {
        antikythera_entry: ((u = n.entry) == null ? void 0 : u.url) || void 0,
        entry_title: ((d = n.entry) == null ? void 0 : d.title) || void 0,
        section_name: "related-articles",
        section_open: f,
        related_entries_count: a.value.length
      });
    };
    return (f, u) => {
      var d;
      return r.value || a.value.length > 0 ? (C(), E("section", eg, [
        S("header", tg, [
          S("div", ng, [
            S("h3", null, [
              S("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                type: "button",
                "aria-expanded": e.expanded,
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "related-articles",
                "data-ph-entry": (d = e.entry) == null ? void 0 : d.url,
                onClick: s
              }, [
                u[0] || (u[0] = S("span", null, "Related Articles", -1)),
                S("span", rg, de(e.expanded ? "Collapse" : "Expand"), 1)
              ], 8, og)
            ])
          ]),
          l.value ? (C(), E("div", ag, u[1] || (u[1] = [
            S("h3", null, "Related PDFs", -1)
          ]))) : re("", !0)
        ]),
        a.value.length > 0 ? (C(), E("section", {
          key: 0,
          class: ge(["flex w-full flex-col gap-[10px]", { "hidden sm:flex": !e.expanded }])
        }, [
          (C(!0), E(be, null, _t(a.value, (g) => (C(), E("article", {
            key: g._id || g.url || g.title,
            class: "grid w-full grid-cols-1 gap-[10px] lg:grid-cols-9 lg:gap-x-9"
          }, [
            oe(Qh, {
              entry: g,
              class: "lg:col-span-6 lg:col-start-1"
            }, null, 8, ["entry"]),
            l.value ? (C(), et(Za, {
              key: 0,
              entry: g,
              fill: "",
              class: "hidden h-full min-h-[220px] lg:col-span-3 lg:col-start-7 lg:flex"
            }, null, 8, ["entry"])) : re("", !0)
          ]))), 128)),
          oe($h)
        ], 2)) : re("", !0),
        u[2] || (u[2] = S("div", { class: "min-h-0 flex-1" }, null, -1))
      ])) : re("", !0);
    };
  }
}, lg = {}, sg = {
  width: "26",
  height: "23",
  viewBox: "0 0 26 23",
  fill: "none",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg"
};
function cg(e, t) {
  return C(), E("svg", sg, t[0] || (t[0] = [
    S("path", {
      d: "M5.79833 10.35V23L15.88 17.3458L26 23V10.35H5.79833Z",
      fill: "currentColor"
    }, null, -1),
    S("path", {
      d: "M5.76 5.175V7.8775H26V5.175H5.76Z",
      fill: "currentColor"
    }, null, -1),
    S("path", {
      d: "M5.76 0V2.7025H26V0H5.76Z",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const ug = /* @__PURE__ */ Eo(lg, [["render", cg]]), dg = { class: "about-section relative w-full pt-[10px] text-m text-white sm:pt-0" }, fg = { class: "about-content grid w-full grid-cols-1 lg:grid-cols-9 lg:gap-x-9" }, pg = { class: "lg:col-span-6 lg:col-start-1 lg:pb-[48px]" }, hg = { class: "flex flex-col gap-y-[10px]" }, gg = { class: "border-stroke-light -mx-3 flex flex-col rounded-lg border bg-black p-3" }, mg = { class: "about-preview pb-[10px] uppercase" }, vg = { class: "hidden shrink-0 text-[rgb(244_244_244_/_0.5)] sm:inline" }, yg = { class: "richtext relative h-full w-full grow" }, bg = { class: "border-stroke-light -mx-3 flex h-full grow flex-col rounded-lg border bg-black p-3 lg:basis-[calc(70vh-7.5rem)]" }, wg = { class: "grid w-full grid-cols-1 grid-rows-[auto_auto] gap-6 md:grid-cols-[repeat(2,minmax(auto,1fr))]" }, xg = { class: "relative opacity-40" }, _g = { class: "min-h-[1.28em]" }, kg = { class: "grid grid-cols-2 gap-[10px] pt-[10px] lg:sticky lg:top-0 lg:col-span-3 lg:col-start-7 lg:flex lg:h-fit lg:flex-col lg:self-start lg:pt-0" }, Cg = { class: "w-full" }, Sg = { class: "flex justify-between pr-[48px]" }, Tg = {
  key: 0,
  class: "border-stroke-dark col-span-2 -mx-3 flex flex-col gap-[10px] overflow-hidden rounded-lg border bg-white p-[10px] text-black"
}, Eg = { class: "[&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:opacity-60 [&_p+p]:mt-5" }, Ag = {
  __name: "AboutSection",
  props: {
    about: {
      type: Object,
      default: () => ({ text: [], asideText: [], credits: [] })
    },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = () => {
      const f = !n.expanded;
      o("toggle", { open: f }), ce("antikythera section toggled", {
        section_name: "about",
        section_open: f
      });
    }, a = () => {
      ce("antikythera external link clicked", {
        link_kind: "antikythera-site",
        link_domain: "antikythera.org"
      });
    }, i = () => {
      ce("antikythera external link clicked", {
        link_kind: "read-more",
        link_title: "Read More",
        link_domain: "antikythera.org"
      });
    }, l = () => {
      ce("antikythera external link clicked", {
        link_kind: "substack",
        link_domain: "antikythera.substack.com"
      });
    }, s = (f, u) => {
      var d, g, y, k;
      return f.externalTitle && u === 0 ? f.externalTitle : u !== 0 && ((g = (d = f.creditLine) == null ? void 0 : d[u]) != null && g.title) ? f.creditLine[u].title : !f.externalTitle && u === 0 && ((k = (y = f.creditLine) == null ? void 0 : y[u]) == null ? void 0 : k.title) || "";
    };
    return (f, u) => {
      var d, g;
      return C(), E("section", dg, [
        S("div", fg, [
          S("section", pg, [
            S("div", hg, [
              S("article", gg, [
                S("header", mg, [
                  S("h3", null, [
                    S("button", {
                      class: "flex w-full items-center justify-between gap-[20px] text-left uppercase",
                      type: "button",
                      onClick: r
                    }, [
                      u[0] || (u[0] = S("span", null, "About", -1)),
                      S("span", vg, de(e.expanded ? "Collapse" : "Expand"), 1)
                    ])
                  ])
                ]),
                S("div", yg, [
                  ((d = e.about.text) == null ? void 0 : d.length) > 0 ? (C(), et(At, {
                    key: 0,
                    value: e.about.text
                  }, null, 8, ["value"])) : re("", !0)
                ])
              ]),
              S("article", bg, [
                u[1] || (u[1] = S("h3", { class: "mb-[10px] uppercase" }, "Contributors", -1)),
                S("div", wg, [
                  (C(!0), E(be, null, _t(e.about.credits, (y, k) => (C(), E("div", {
                    key: y._key || k,
                    class: "lg:last:pb-4"
                  }, [
                    (C(!0), E(be, null, _t(y.creditLine, (T, B) => (C(), E("div", {
                      key: T._key || B,
                      class: "grid grid-cols-2 gap-x-6"
                    }, [
                      S("p", xg, [
                        S("span", {
                          class: ge({
                            "absolute left-0 block w-full bg-black": B === 0 && y.externalTitle
                          })
                        }, de(s(y, B)), 3)
                      ]),
                      S("p", _g, de(T.name || " "), 1)
                    ]))), 128))
                  ]))), 128))
                ])
              ])
            ])
          ]),
          S("aside", kg, [
            S("a", {
              href: "https://antikythera.org/",
              target: "_blank",
              rel: "noopener noreferrer",
              class: "border-stroke-dark relative col-span-2 -mx-3 overflow-y-hidden rounded-lg border bg-white p-3 pb-0 text-black",
              onClick: a
            }, [
              S("header", Cg, [
                S("div", Sg, [
                  oe(mc, {
                    "show-journal": !1,
                    class: "h-[23px] w-[121px] shrink-0"
                  })
                ]),
                u[2] || (u[2] = S("section", { class: "pt-[20px] pb-[10px]" }, [
                  S("p", null, "A think tank for planetary computation"),
                  S("p", null, "& the evolution of intelligence")
                ], -1))
              ])
            ]),
            ((g = e.about.asideText) == null ? void 0 : g.length) > 0 ? (C(), E("article", Tg, [
              S("div", Eg, [
                oe(At, {
                  value: e.about.asideText
                }, null, 8, ["value"])
              ]),
              oe(To, {
                variant: "dark",
                href: "https://antikythera.org/",
                onClick: i
              }, {
                default: Gt(() => u[3] || (u[3] = [
                  Ue("Read More")
                ])),
                _: 1
              })
            ])) : re("", !0),
            S("a", {
              href: "https://antikythera.substack.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              class: "border-stroke-light col-span-2 -mx-3 flex items-center justify-between gap-[10px] overflow-hidden rounded-lg border bg-[#ff5a01] p-[10px] text-[#f4f4f4] transition-transform duration-300 ease-out hover:scale-[0.99] hover:duration-100",
              onClick: l
            }, [
              u[4] || (u[4] = S("p", { class: "uppercase" }, "Read Antikythera on Substack", -1)),
              oe(ug, { class: "h-[23px] w-auto shrink-0" })
            ])
          ])
        ])
      ]);
    };
  }
}, Ig = 220, $g = 360, Rg = 240, Pg = 320, zg = 180, Mg = 300, qt = X(!1), ln = X(1), Vn = X(1), Ac = X(1), er = X(1), tr = X(1);
let Wt = 0, Xt = 0;
const Lg = () => {
  Wt && (clearTimeout(Wt), Wt = 0), Xt && (clearTimeout(Xt), Xt = 0);
}, Og = (e, t = {}) => {
  if (!(qt.value && er.value == e)) {
    if (!qt.value && ln.value == e && Vn.value == e) {
      er.value = e;
      return;
    }
    if (Lg(), Ac.value = ln.value, er.value = e, e == 2 && (ln.value == 1 || ln.value == 0))
      Vn.value = 2, qt.value = !0, Wt = setTimeout(() => {
        Wt = 0, ln.value = e;
      }, Ig), Xt = setTimeout(() => {
        Xt = 0, qt.value = !1, tr.value = e;
      }, $g);
    else if (e < 2 && Vn.value == 2) {
      const n = t.collapseCommitMs ?? Rg, o = t.collapseEndMs ?? Math.max(n + 80, Pg);
      qt.value = !0, Wt = setTimeout(() => {
        Wt = 0, Vn.value = e, ln.value = e;
      }, n), Xt = setTimeout(() => {
        Xt = 0, qt.value = !1, tr.value = e;
      }, o);
    } else
      qt.value = !0, Wt = setTimeout(() => {
        Wt = 0, Vn.value = e, ln.value = e;
      }, zg), Xt = setTimeout(() => {
        Xt = 0, qt.value = !1, tr.value = e;
      }, Mg);
  }
};
function Ic() {
  return {
    view: ln,
    viewChange: tr,
    transitioning: qt,
    tempView: Vn,
    previousView: Ac,
    requestedView: er,
    setView: Og
  };
}
const Hg = { key: 0 }, Bg = ["href", "data-ph-annotation-id", "data-ph-annotation-type"], Vg = { key: 2 }, Ng = ["data-ph-annotation-id", "data-ph-annotation-type"], Fg = {
  key: 0,
  class: "mb-3"
}, Dg = ["src", "alt"], jg = {
  key: 0,
  class: "mt-1 text-m md:mt-2"
}, Ug = ["href", "data-ph-annotation-id", "data-ph-annotation-type"], qg = { key: 1 }, Kg = { class: "richtext pb-3" }, Wg = {
  key: 2,
  class: "pb-3"
}, Xg = ["src", "alt"], Yg = {
  key: 0,
  class: "text-s sm:text-m mt-1 sm:mt-2"
}, Gg = { class: "mb-3 font-bold" }, Zg = ["data-ph-annotation-id", "data-ph-annotation-type", "data-ph-annotation-index"], Jg = { class: "richtext pb-3" }, Qg = {
  key: 0,
  class: "pb-3"
}, $c = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
  __name: "AnnotationContent",
  props: {
    annotation: {
      type: Object,
      required: !0
    },
    articleAttributionVisibility: {
      type: [String, Boolean],
      default: !0
    },
    variant: {
      type: String,
      required: !0,
      validator: (e) => ["floating", "inline"].includes(e)
    },
    dismissible: {
      type: Boolean,
      default: !1
    },
    vertical: {
      type: Boolean,
      default: !1
    },
    index: {
      type: Number,
      default: void 0
    }
  },
  emits: ["close", "externalLinkClick", "titleClick"],
  setup(e, { emit: t }) {
    const n = e, o = Y(
      () => {
        var s, f, u;
        return (f = (s = n.annotation) == null ? void 0 : s.featuredImageSquare) != null && f.url ? n.annotation.featuredImageSquare : (u = n.annotation) == null ? void 0 : u.featuredImage;
      }
    ), r = Y(() => {
      var s;
      return Cn((s = o.value) == null ? void 0 : s.url, { width: 1e3 });
    }), a = Y(() => {
      var s;
      return ((s = o.value) == null ? void 0 : s.alt) || "";
    }), i = t, l = Y(() => {
      const s = n.annotation.attribution && n.annotation.attribution != "";
      if (n.annotation.annotationVisibility == "forceHide")
        return !1;
      if (n.annotation.annotationVisibility == "forceShow")
        return s;
      if (n.annotation.annotationVisibility == "default")
        return n.articleAttributionVisibility == "forceHide" ? !1 : s;
    });
    return (s, f) => {
      var u, d, g, y, k;
      return e.variant == "floating" ? (C(), E("div", ma({ key: 0 }, s.$attrs, { class: "relative overflow-hidden rounded-lg border border-stroke-light bg-black px-3 pt-3 text-m text-white" }), [
        S("h2", {
          class: ge(["mb-3 font-bold", { "pr-8": e.dismissible }])
        }, [
          e.annotation.annotationType == "related" ? (C(), E("span", Hg, "Related")) : e.annotation.externalLink && e.annotation.externalLink != "" ? (C(), E("a", {
            key: 1,
            href: e.annotation.externalLink,
            class: "underline",
            target: "_blank",
            "data-ph-capture": "",
            "data-ph-component": "antikythera-annotation",
            "data-ph-action": "annotation-external-link-click",
            "data-ph-annotation-id": e.annotation.id,
            "data-ph-annotation-type": e.annotation.annotationType,
            onClick: f[0] || (f[0] = (T) => i("externalLinkClick"))
          }, de(e.annotation.title), 9, Bg)) : (C(), E("span", Vg, de(e.annotation.title), 1))
        ], 2),
        e.dismissible ? (C(), E("button", {
          key: 0,
          class: "absolute top-3 right-3 z-10 text-s",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-annotation",
          "data-ph-action": "annotation-card-close",
          "data-ph-annotation-id": e.annotation.id,
          "data-ph-annotation-type": e.annotation.annotationType,
          onClick: f[1] || (f[1] = (T) => i("close"))
        }, " Close ", 8, Ng)) : re("", !0),
        S("div", null, [
          r.value ? (C(), E("figure", Fg, [
            S("img", {
              src: r.value,
              alt: a.value,
              loading: "lazy",
              decoding: "async",
              class: "max-h-[15svh] max-w-full lg:max-h-[20svh]"
            }, null, 8, Dg),
            e.annotation.featuredImage.caption && e.annotation.featuredImage.caption != "" ? (C(), E("figcaption", jg, [
              oe(At, {
                value: e.annotation.featuredImage.caption
              }, null, 8, ["value"])
            ])) : re("", !0)
          ])) : re("", !0),
          e.annotation.annotationType == "related" ? (C(), E("h3", {
            key: 1,
            class: ge(["font-bold", { "pr-8": e.dismissible }])
          }, [
            e.annotation.externalLink && e.annotation.externalLink != "" ? (C(), E("a", {
              key: 0,
              href: e.annotation.externalLink,
              class: "underline",
              target: "_blank",
              "data-ph-capture": "",
              "data-ph-component": "antikythera-annotation",
              "data-ph-action": "annotation-external-link-click",
              "data-ph-annotation-id": e.annotation.id,
              "data-ph-annotation-type": e.annotation.annotationType,
              onClick: f[2] || (f[2] = (T) => i("externalLinkClick"))
            }, de(e.annotation.title), 9, Ug)) : (C(), E("span", qg, de(e.annotation.title), 1))
          ], 2)) : re("", !0),
          S("div", Kg, [
            oe(Bt(ur), {
              value: e.annotation.content
            }, null, 8, ["value"])
          ]),
          l.value ? (C(), E("div", Wg, " — " + de(e.annotation.attribution), 1)) : re("", !0)
        ])
      ], 16)) : (C(), E("article", ma({ key: 1 }, s.$attrs, { class: "border-stroke-light relative mb-[10px] flex min-w-full flex-wrap overflow-hidden rounded-lg border bg-black px-3 pt-3 text-m text-white last:mb-0" }), [
        r.value ? (C(), E("figure", {
          key: 0,
          class: ge([{ "w-1/2 basis-1/2 pr-3 mb-4": !e.vertical }, { "w-3/4 basis-3/4 pr-3 mb-4": e.vertical }])
        }, [
          S("img", {
            src: r.value,
            alt: a.value,
            loading: "lazy",
            decoding: "async"
          }, null, 8, Xg),
          (u = e.annotation.featuredImage) != null && u.caption && e.annotation.featuredImage.caption != "" ? (C(), E("figcaption", Yg, [
            oe(At, {
              value: e.annotation.featuredImage.caption
            }, null, 8, ["value"])
          ])) : re("", !0)
        ], 2)) : re("", !0),
        S("section", {
          class: ge([
            { "w-1/2 basis-1/2 md:pl-3": (((d = e.annotation.featuredImage) == null ? void 0 : d.url) || ((g = e.annotation.featuredImageSquare) == null ? void 0 : g.url)) && !e.vertical },
            { "w-full basis-full": !((y = e.annotation.featuredImage) != null && y.url) && !((k = e.annotation.featuredImageSquare) != null && k.url) || e.vertical }
          ])
        }, [
          S("h2", Gg, [
            S("button", {
              class: "text-left cursor-pointer hover:opacity-60",
              "data-ph-capture": "",
              "data-ph-component": "antikythera-annotation",
              "data-ph-action": "annotation-inline-jump",
              "data-ph-annotation-id": e.annotation.id,
              "data-ph-annotation-type": e.annotation.annotationType,
              "data-ph-annotation-index": e.index,
              onClick: f[3] || (f[3] = (T) => i("titleClick", e.annotation))
            }, de(e.annotation.title), 9, Zg)
          ]),
          S("div", Jg, [
            oe(At, {
              value: e.annotation.content
            }, null, 8, ["value"])
          ]),
          l.value ? (C(), E("div", Qg, " — " + de(e.annotation.attribution), 1)) : re("", !0)
        ], 2)
      ], 16));
    };
  }
}), em = {
  __name: "AnnotationInline",
  props: {
    annotation: {
      type: Object,
      required: !0
    },
    articleAttributionVisibility: [String, Boolean],
    vertical: Boolean,
    index: Number
  },
  setup(e) {
    const t = e, { setView: n } = Ic(), o = (l) => {
      if (l)
        try {
          return new URL(l, window.location.origin).hostname;
        } catch {
          return;
        }
    }, r = (l) => {
      var s, f;
      return {
        annotation_id: l.id,
        annotation_title: l.title || void 0,
        annotation_type: l.annotationType || void 0,
        annotation_index: t.index,
        annotation_has_external_link: !!l.externalLink,
        annotation_external_domain: o(l.externalLink),
        annotation_has_featured_image: !!((s = l.featuredImage) != null && s.url || (f = l.featuredImageSquare) != null && f.url)
      };
    }, a = (l) => {
      var s;
      if (!l)
        return null;
      if ((s = window.CSS) != null && s.escape)
        return document.querySelector(`#${window.CSS.escape(l)}`);
      try {
        return document.querySelector(`#${l}`) || document.getElementById(l);
      } catch {
        return document.getElementById(l);
      }
    }, i = (l) => {
      ce("antikythera annotation inline jump clicked", r(l)), n(0), window.requestAnimationFrame(() => {
        const s = a(l.id);
        if (!s) {
          console.warn(`antikythera annotation jump skipped: #${l.id} was not found`), ce("antikythera annotation element not found", r(l));
          return;
        }
        const f = s.getBoundingClientRect().top + window.scrollY - 10;
        window.scrollTo({ top: f, behavior: "smooth" });
      });
    };
    return (l, s) => (C(), et($c, {
      annotation: e.annotation,
      articleAttributionVisibility: e.articleAttributionVisibility,
      index: e.index,
      vertical: e.vertical,
      variant: "inline",
      onTitleClick: i
    }, null, 8, ["annotation", "articleAttributionVisibility", "index", "vertical"]));
  }
}, tm = { class: "w-full min-w-0 basis-full text-m text-[rgb(244_244_244)] sm:basis-col2" }, nm = { class: "flex flex-col border-t border-stroke-light" }, om = {
  key: 0,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, rm = { class: "mobile-expanded-entry-header" }, am = ["data-ph-entry"], im = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, lm = {
  key: 0,
  class: "richtext pt-[10px]"
}, sm = {
  key: 1,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, cm = { class: "mobile-expanded-entry-header" }, um = ["data-ph-entry"], dm = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, fm = {
  key: 0,
  class: "richtext pt-[10px]"
}, pm = {
  key: 2,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, hm = { class: "mobile-expanded-entry-header" }, gm = ["data-ph-entry"], mm = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, vm = {
  key: 0,
  class: "pt-[10px]"
}, ym = {
  key: 3,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, bm = { class: "mobile-expanded-entry-header" }, wm = ["data-ph-entry"], xm = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, _m = {
  key: 0,
  class: "richtext pt-[10px]"
}, km = {
  key: 4,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, Cm = { class: "mobile-expanded-entry-header" }, Sm = ["data-ph-entry"], Tm = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Em = {
  key: 0,
  class: "richtext pt-[10px]"
}, Am = {
  __name: "EntryMain",
  props: {
    entry: Object,
    loaded: { type: Boolean, default: !1 },
    loadError: { type: Boolean, default: !1 }
  },
  emits: ["section-collapse"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = X(!0), a = X(!1), i = X(!1), l = X(!1), s = X(!0), f = Y(() => !n.loaded && !n.loadError), u = (w) => Array.isArray(w) && w.length > 0, d = (w) => f.value || u(w), g = Y(() => {
      var w, z, ee;
      return f.value || ((w = n.entry) == null ? void 0 : w.annotationsCount) > 0 || ((ee = (z = n.entry) == null ? void 0 : z.annotations) == null ? void 0 : ee.length) > 0;
    }), y = (w, z) => {
      var ee, M, q, j, K, G, V, te, J, le;
      return {
        antikythera_entry: ((ee = n.entry) == null ? void 0 : ee.url) || void 0,
        entry_title: ((M = n.entry) == null ? void 0 : M.title) || void 0,
        section_name: w,
        section_open: z,
        annotations_count: ((j = (q = n.entry) == null ? void 0 : q.annotations) == null ? void 0 : j.length) || 0,
        related_entries_count: ((G = (K = n.entry) == null ? void 0 : K.relatedEntries) == null ? void 0 : G.length) || 0,
        authors_count: ((te = (V = n.entry) == null ? void 0 : V.authors) == null ? void 0 : te.length) || 0,
        designers_count: ((le = (J = n.entry) == null ? void 0 : J.designers) == null ? void 0 : le.length) || 0
      };
    }, k = (w, z, ee) => {
      var j;
      const M = w.value, q = (j = ee == null ? void 0 : ee.currentTarget) == null ? void 0 : j.closest(".mobile-expanded-entry-header");
      w.value = !M, M && q && o("section-collapse", { header: q }), ce("antikythera section toggled", y(z, w.value));
    }, T = (w) => k(r, "abstract", w), B = (w) => k(a, "editorial", w), x = (w) => k(l, "bibliography", w), U = (w) => k(i, "annotations", w), Q = (w) => k(s, "credits", w);
    return (w, z) => {
      var ee, M, q, j, K, G, V, te, J, le, Z;
      return C(), E("main", tm, [
        S("div", nm, [
          d((ee = e.entry) == null ? void 0 : ee.introduction) ? (C(), E("section", om, [
            S("h3", rm, [
              S("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "abstract",
                "data-ph-entry": (M = e.entry) == null ? void 0 : M.url,
                onClick: T
              }, [
                z[0] || (z[0] = S("span", null, "Abstract", -1)),
                S("span", im, de(r.value ? "Collapse" : "Expand"), 1)
              ], 8, am)
            ]),
            r.value ? (C(), E("section", lm, [
              oe(At, {
                value: e.entry.introduction
              }, null, 8, ["value"])
            ])) : re("", !0)
          ])) : re("", !0),
          d((q = e.entry) == null ? void 0 : q.editorial) ? (C(), E("section", sm, [
            S("h3", cm, [
              S("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "editorial",
                "data-ph-entry": (j = e.entry) == null ? void 0 : j.url,
                onClick: B
              }, [
                z[1] || (z[1] = S("span", null, "Editorial", -1)),
                S("span", dm, de(a.value ? "Collapse" : "Expand"), 1)
              ], 8, um)
            ]),
            a.value ? (C(), E("section", fm, [
              oe(At, {
                value: e.entry.editorial
              }, null, 8, ["value"])
            ])) : re("", !0)
          ])) : re("", !0),
          g.value ? (C(), E("section", pm, [
            S("h3", hm, [
              S("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "annotations",
                "data-ph-entry": (K = e.entry) == null ? void 0 : K.url,
                onClick: U
              }, [
                z[2] || (z[2] = S("span", null, "Annotations", -1)),
                S("span", mm, de(i.value ? "Collapse" : "Expand"), 1)
              ], 8, gm)
            ]),
            i.value ? (C(), E("section", vm, [
              ((V = (G = e.entry) == null ? void 0 : G.annotations) == null ? void 0 : V.length) > 0 ? (C(!0), E(be, { key: 0 }, _t(e.entry.annotations, (ue, fe) => {
                var Ce;
                return C(), et(em, {
                  articleAttributionVisibility: ((Ce = e.entry) == null ? void 0 : Ce.annotationVisibility) ?? !0,
                  annotation: ue,
                  index: fe
                }, null, 8, ["articleAttributionVisibility", "annotation", "index"]);
              }), 256)) : re("", !0)
            ])) : re("", !0)
          ])) : re("", !0),
          d((te = e.entry) == null ? void 0 : te.bibliography) ? (C(), E("section", ym, [
            S("h3", bm, [
              S("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "bibliography",
                "data-ph-entry": (J = e.entry) == null ? void 0 : J.url,
                onClick: x
              }, [
                z[3] || (z[3] = S("span", null, "Bibliography", -1)),
                S("span", xm, de(l.value ? "Collapse" : "Expand"), 1)
              ], 8, wm)
            ]),
            l.value ? (C(), E("section", _m, [
              oe(At, {
                value: e.entry.bibliography
              }, null, 8, ["value"])
            ])) : re("", !0)
          ])) : re("", !0),
          d((le = e.entry) == null ? void 0 : le.credits) ? (C(), E("section", km, [
            S("h3", Cm, [
              S("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "credits",
                "data-ph-entry": (Z = e.entry) == null ? void 0 : Z.url,
                onClick: Q
              }, [
                z[4] || (z[4] = S("span", null, "Credits", -1)),
                S("span", Tm, de(s.value ? "Collapse" : "Expand"), 1)
              ], 8, Sm)
            ]),
            s.value ? (C(), E("section", Em, [
              oe(At, {
                value: e.entry.credits
              }, null, 8, ["value"])
            ])) : re("", !0)
          ])) : re("", !0)
        ])
      ]);
    };
  }
}, Im = { class: "annotation-card-slot__content min-h-0 overflow-hidden" }, $m = { class: "pb-3" }, Rm = {
  __name: "Annotation",
  props: {
    annotation: {
      type: Object,
      required: !0
    },
    articleAttributionVisibility: [String, Boolean],
    view: Number,
    isMobile: Boolean
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = X(null), a = X(!1), i = X(!1);
    let l = null, s = null;
    const f = (B) => {
      if (B)
        try {
          return new URL(B, window.location.origin).hostname;
        } catch {
          return;
        }
    }, u = () => {
      var B, x;
      return {
        annotation_id: n.annotation.id,
        annotation_title: n.annotation.title || void 0,
        annotation_type: n.annotation.annotationType || void 0,
        annotation_has_external_link: !!n.annotation.externalLink,
        annotation_external_domain: f(n.annotation.externalLink),
        annotation_has_featured_image: !!((B = n.annotation.featuredImage) != null && B.url || (x = n.annotation.featuredImageSquare) != null && x.url),
        annotation_word_count: y.value
      };
    }, d = () => {
      ce("antikythera annotation card closed", {
        ...u(),
        menu_view: n.view,
        is_mobile: n.isMobile
      }), o("close", n.annotation.id);
    }, g = () => {
      ce("antikythera annotation external link clicked", u());
    }, y = Y(() => {
      var U, Q;
      const B = (U = n.annotation) != null && U.content ? (Q = n.annotation) == null ? void 0 : Q.content : [];
      let x = 0;
      return B.forEach((w) => {
        if (w._type !== "block" || !w.children)
          return 0;
        x = x + w.children.map((z) => z.text).join("").split(" ").length;
      }), x;
    }), k = () => {
      if (!r.value || !l)
        return;
      const B = r.value.getBoundingClientRect().bottom, x = l.getBoundingClientRect().bottom, U = B <= x + 22;
      U && a.value ? (a.value = !1, i.value || (i.value = !0, ce("antikythera annotation fully read", u()))) : U || (a.value = !0);
    }, T = () => {
      if (!r.value || !l)
        return;
      const B = r.value.getBoundingClientRect().bottom, x = l.getBoundingClientRect().bottom;
      l.scrollHeight > l.clientHeight && B > x + 22 ? (a.value || ce("antikythera annotation content overflows", u()), a.value = !0) : a.value = !1;
    };
    return Co(async () => {
      var B;
      await gt(), l = ((B = r.value) == null ? void 0 : B.parentElement) ?? null, s = window.setTimeout(() => {
        T(), l == null || l.addEventListener("scroll", k, { passive: !0 }), window.addEventListener("resize", T);
      }, 50);
    }), ja(() => {
      s !== null && window.clearTimeout(s), l == null || l.removeEventListener("scroll", k), window.removeEventListener("resize", T);
    }), (B, x) => (C(), E("article", {
      ref_key: "AnnotationCard",
      ref: r,
      class: "annotation-card-slot pointer-events-auto grid w-full shrink-0"
    }, [
      S("div", Im, [
        S("div", $m, [
          oe($c, {
            annotation: e.annotation,
            articleAttributionVisibility: e.articleAttributionVisibility,
            dismissible: e.view == 0 || e.isMobile,
            variant: "floating",
            onClose: d,
            onExternalLinkClick: g
          }, null, 8, ["annotation", "articleAttributionVisibility", "dismissible"])
        ])
      ])
    ], 512));
  }
}, Pm = { class: "border-stroke-light pointer-events-auto w-sticker -translate-x-3 rounded-lg border bg-black p-3 text-m text-white" }, zm = { class: "flex w-full items-start justify-between gap-3" }, Mm = { class: "min-w-0 flex-1 leading-[1.25]" }, Lm = ["aria-checked", "aria-label"], Om = {
  __name: "AnnotationAttributionToggle",
  props: {
    label: {
      type: String,
      required: !0
    },
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "toggle"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = () => {
      const a = !n.modelValue;
      o("update:modelValue", a), o("toggle", a);
    };
    return (a, i) => (C(), E("article", Pm, [
      S("div", zm, [
        S("p", Mm, de(e.label), 1),
        S("button", {
          type: "button",
          role: "switch",
          class: ge(["relative h-[20px] w-[36px] shrink-0 rounded-full transition-colors duration-150", e.modelValue ? "bg-white" : "bg-[color-mix(in_srgb,var(--white)_16%,var(--black))]"]),
          "aria-checked": e.modelValue,
          "aria-label": e.modelValue ? "Hide annotations" : "Show annotations",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-annotation-attribution",
          "data-ph-action": "annotation-toggle",
          onClick: r
        }, [
          S("span", {
            class: ge(["absolute left-[2px] top-[2px] h-[16px] w-[16px] rounded-full transition-transform duration-150", e.modelValue ? "translate-x-[16px] bg-black" : "translate-x-0 bg-white"])
          }, null, 2)
        ], 10, Lm)
      ])
    ]));
  }
}, Hm = {
  key: 0,
  "aria-hidden": "true",
  class: "pointer-events-none fixed inset-0 z-[2000] grid h-[100dvh] w-full grid-cols-12 gap-x-3 px-6 opacity-50 sm:gap-x-9"
}, Bm = {
  __name: "DebugGrid",
  props: {
    visible: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => e.visible ? (C(), E("div", Hm, [
      (C(), E(be, null, _t(12, (o) => S("div", {
        key: o,
        class: "col-span-1 h-full bg-blue-200"
      })), 64))
    ])) : re("", !0);
  }
}, Vm = "cdn.sanity.io", Nm = Object.freeze([480, 720, 960, 1440, 1920]), Fm = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw", Dm = (e, t) => {
  if (!t)
    return e;
  try {
    const n = /^[a-z][a-z\d+.-]*:/i.test(e) || e.startsWith("//"), o = new URL(e, "https://antikythera.invalid");
    return o.searchParams.set("anti_retry", String(t)), n ? o.toString() : `${o.pathname}${o.search}${o.hash}`;
  } catch {
    return e;
  }
}, jl = (e, t, n) => {
  try {
    const o = new URL(e);
    return o.hostname !== Vm || !o.pathname.startsWith("/images/") ? null : (o.searchParams.set("w", String(t)), o.searchParams.set("h", String(t)), o.searchParams.set("fit", "crop"), o.searchParams.set("auto", "format"), n && o.searchParams.set("anti_retry", String(n)), o.toString());
  } catch {
    return null;
  }
}, jm = (e, { retry: t = 0 } = {}) => {
  if (!e)
    return { src: "", srcset: void 0, sizes: void 0 };
  const n = jl(e, 960, t);
  return n ? {
    src: n,
    srcset: Nm.map((o) => `${jl(e, o, t)} ${o}w`).join(", "),
    sizes: Fm
  } : { src: Dm(e, t), srcset: void 0, sizes: void 0 };
}, xa = " ", Um = (e = "") => e.trim().replace(/\s+/g, xa), qm = (e = []) => {
  const t = e.map(Um).filter(Boolean);
  return t.length < 2 ? t[0] || "" : t.length === 2 ? `${t[0]} &${xa}${t[1]}` : `${t.slice(0, -1).join(", ")} &${xa}${t[t.length - 1]}`;
}, Km = '.expanded-frame[data-v-5bbf1db8]{--expanded-frame-edge-inset: 5px;--mobile-expanded-header-inline-bleed: calc((var(--fontSize) * 1.5) - var(--expanded-frame-edge-inset))}.expanded-frame-underlay[data-v-5bbf1db8]{inset:var(--expanded-frame-edge-inset)}.expanded-frame-clip[data-v-5bbf1db8]{clip-path:inset(var(--expanded-frame-edge-inset) round 11px)}.expanded-scrollport[data-v-5bbf1db8]{--expanded-related-header-height: calc((var(--fontSize) * 1.28) + 21px);height:100dvh;margin-block:calc(var(--fontSize) * -.75);padding-block:calc(var(--fontSize) * .75)!important;scroll-padding-top:calc(var(--fontSize) * .75);scroll-padding-bottom:0}.expanded-before-related[data-v-5bbf1db8]{min-height:calc(100dvh - (var(--fontSize) * .75));margin-bottom:calc(var(--expanded-related-header-height) * -1);padding-bottom:var(--expanded-related-header-height)}.expanded-related-page[data-v-5bbf1db8]{min-height:calc(100dvh - (var(--fontSize) * .75));margin-bottom:0;padding-bottom:var(--expanded-related-header-height)}.expanded-about-page[data-v-5bbf1db8]{min-height:calc(100dvh - (var(--fontSize) * 1.5))}@media screen and (max-width: 639px){.expanded-frame-clip[data-v-5bbf1db8]{display:block!important;pointer-events:auto!important;overflow-x:hidden;overscroll-behavior-x:none}.expanded-scrollport.expanded-sticker-column[data-v-5bbf1db8],.expanded-scrollport.expanded-details-column[data-v-5bbf1db8]{height:auto;margin-block:0;padding-block:0!important;overflow:visible!important;scroll-padding-block:0}.expanded-scrollport.expanded-sticker-column[data-v-5bbf1db8]{position:sticky!important;top:calc(.75rem - var(--mobile-sticker-sticky-offset, 0px));z-index:20;align-self:start}.mobile-journal-description[data-v-5bbf1db8]{margin-top:.625rem!important;transition:margin-top .22s cubic-bezier(.25,.7,.25,1)}.mobile-journal-description.mobile-below-cta-exiting[data-v-5bbf1db8]{margin-top:0!important}.mobile-expanded-exit-content[data-v-5bbf1db8]{translate:0 0;transition-property:opacity,translate,margin!important;transition-duration:.22s!important;transition-delay:0ms!important;transition-timing-function:cubic-bezier(.25,.7,.25,1)!important}.mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-5bbf1db8]{pointer-events:none;opacity:0!important;translate:0 -12px;margin-top:0!important;transition-delay:40ms!important}.mobile-mid-scroll-reversing .mobile-expanded-exit-content[data-v-5bbf1db8]{transition-duration:.3s!important;transition-timing-function:cubic-bezier(.23,1,.32,1)!important}.mobile-mid-scroll-reversing .mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-5bbf1db8]{transition-delay:48ms!important}.mobile-mid-scroll-reversing .mobile-journal-description[data-v-5bbf1db8]{transition:margin-top .3s cubic-bezier(.23,1,.32,1)!important}.expanded-scrollport.expanded-details-column[data-v-5bbf1db8]{margin-top:.625rem}.expanded-details-column[data-v-5bbf1db8] .mobile-expanded-entry-header,.expanded-details-column[data-v-5bbf1db8] .mobile-expanded-page-header{position:sticky;top:calc(var(--mobile-expanded-section-sticky-top, 48px) - 1px);z-index:30;width:calc(100% + var(--mobile-expanded-header-inline-bleed) + var(--mobile-expanded-header-inline-bleed));margin-inline:calc(0px - var(--mobile-expanded-header-inline-bleed));padding-inline:var(--mobile-expanded-header-inline-bleed);background:var(--black)}.expanded-details-column[data-v-5bbf1db8] .mobile-expanded-entry-header{margin-block:-10px;padding-block:10px}.expanded-details-column[data-v-5bbf1db8] .mobile-expanded-entry-header:after,.expanded-details-column[data-v-5bbf1db8] .mobile-expanded-page-header:after{position:absolute;inset-inline:var(--mobile-expanded-header-inline-bleed);bottom:0;height:1px;content:"";pointer-events:none;background:var(--stroke-light);opacity:0;transition:opacity .16s ease}.expanded-details-column[data-v-5bbf1db8] .mobile-expanded-entry-header[data-stuck]:after,.expanded-details-column[data-v-5bbf1db8] .mobile-expanded-page-header[data-stuck]:after{opacity:1}.expanded-before-related[data-v-5bbf1db8],.expanded-related-page[data-v-5bbf1db8]{min-height:0;margin-bottom:0;padding-bottom:0}.expanded-about-page[data-v-5bbf1db8]{min-height:0}}@media (prefers-reduced-motion: reduce) and (max-width: 639px){.mobile-expanded-exit-content[data-v-5bbf1db8]{transition-duration:1ms!important}.mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-5bbf1db8]{translate:0 0}.expanded-details-column[data-v-5bbf1db8] .mobile-expanded-entry-header:after,.expanded-details-column[data-v-5bbf1db8] .mobile-expanded-page-header:after{transition-duration:1ms}}.annotation-card-slot[data-v-5bbf1db8]{position:relative;grid-template-rows:auto;overflow:hidden;border-radius:8px}.annotation-card-slot.annotation-list-enter-active[data-v-5bbf1db8]{grid-template-rows:1fr;transition:grid-template-rows .22s cubic-bezier(.32,.72,0,1) .14s,transform .22s cubic-bezier(.32,.72,0,1) .14s,opacity .22s cubic-bezier(.32,.72,0,1) .14s}.annotation-card-slot.annotation-list-leave-active[data-v-5bbf1db8]{grid-template-rows:1fr;pointer-events:none;transition:grid-template-rows .22s cubic-bezier(.32,.72,0,1),transform .22s cubic-bezier(.32,.72,0,1),opacity .22s cubic-bezier(.32,.72,0,1)}.annotation-card-slot.annotation-list-enter-from[data-v-5bbf1db8],.annotation-card-slot.annotation-list-leave-to[data-v-5bbf1db8]{grid-template-rows:0fr;opacity:0;transform:translateY(-6px)}@media (prefers-reduced-motion: reduce){.annotation-card-slot.annotation-list-enter-active[data-v-5bbf1db8],.annotation-card-slot.annotation-list-leave-active[data-v-5bbf1db8]{transition-duration:0ms;transition-delay:0ms}.annotation-card-slot.annotation-list-enter-from[data-v-5bbf1db8],.annotation-card-slot.annotation-list-leave-to[data-v-5bbf1db8]{transform:none}}', Wm = ".anti-motion-fade{transition-property:opacity;transition-timing-function:cubic-bezier(.23,1,.32,1)}.anti-motion-slide{transition-property:opacity,transform;transition-timing-function:cubic-bezier(.23,1,.32,1)}.anti-motion-fold{transition-property:opacity,transform,max-height,margin;transition-timing-function:cubic-bezier(.25,.7,.25,1)}.expanded-sticker-card.minimal-shell-expanding{position:relative}.expanded-sticker-card.minimal-shell-expanding>.sticker-primary-cta{position:absolute;right:10px;bottom:10px;left:10px;z-index:1}.anti-mobile-summary-fold{display:grid;grid-template-rows:1fr;opacity:1;transition-property:grid-template-rows,opacity;transition-timing-function:cubic-bezier(.25,.7,.25,1)}.anti-mobile-summary-fold-collapsed{grid-template-rows:0fr;pointer-events:none;opacity:0}.anti-mobile-summary-reveal{transition-property:grid-template-rows;opacity:1}@media (prefers-reduced-motion: reduce){.expanded-sticker-card .anti-motion-fold,.expanded-sticker-card .anti-mobile-summary-fold{transition-duration:0ms!important;transition-delay:0ms!important}}", Xm = { class: "flex w-full flex-col" }, Ym = { class: "relative flex w-full pt-[1px] pl-[1px] pr-12" }, Gm = {
  href: "https://journal.antikythera.org",
  target: "_blank",
  class: "block min-w-0"
}, Zm = ["src", "srcset", "sizes", "alt"], Jm = { class: "min-h-0 overflow-hidden" }, Qm = { class: "flex w-full flex-col pt-[20px] leading-[1.25] text-[rgb(244_244_244)]" }, e0 = { key: 0 }, t0 = { key: 1 }, n0 = ["href", "data-ph-entry", "onClick"], o0 = { key: 1 }, r0 = { key: 2 }, a0 = ["href", "data-ph-entry", "onClick"], i0 = { key: 1 }, l0 = { class: "flex min-w-0 items-center gap-2 pr-3" }, s0 = ["href", "data-ph-entry"], c0 = { key: 1 }, u0 = { class: "shrink-0 text-right text-[rgb(244_244_244_/_0.5)]" }, d0 = {
  key: 1,
  class: "w-full h-2 pointer-events-none"
}, f0 = { class: "grid min-h-full w-full grid-cols-1 lg:grid-cols-9" }, p0 = { class: "relative grid w-full grid-cols-1 gap-[10px] lg:grid-cols-9 lg:gap-x-9" }, h0 = { class: "lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[calc((100%-var(--fontSize)*18)/3+var(--fontSize)*4.5)]" }, g0 = {
  key: 0,
  class: "col-start-1 col-end-13 sm:col-end-7 lg:col-end-4 mt-3 sm:mt-0 pointer-events-none"
}, Ul = 320, ql = 110, aa = 340, Kl = 280, Wl = 240, Xl = 48, m0 = 240, v0 = 2, y0 = 1200, b0 = {
  __name: "AntikytheraMenuComponent.ce",
  props: {
    entry: String,
    environment: {
      type: String,
      default: "production"
    },
    apiUrl: String,
    theme: {
      type: String,
      default: "dark"
    },
    apiBackgroundColor: String,
    apiForegroundColor: String,
    activeannotation: String,
    inactiveannotation: String,
    forceopen: Boolean
  },
  emits: ["viewChange"],
  setup(e, { emit: t }) {
    const n = e, o = t, { getSettings: r, getEntry: a, getEntryMeta: i, getAnnotations: l } = Sa({ entry: n.entry, environment: n.environment, apiUrl: n.apiUrl }), { view: s, viewChange: f, previousView: u, requestedView: d, tempView: g, transitioning: y, setView: k } = Ic(), T = X(null), B = X(null), x = X(null), U = X(null), Q = X(null), w = X(null), z = X(null), ee = X(null), M = X(null), q = X(null), j = X(""), K = X({}), G = X(!1), V = X(!1), te = X(!1), J = X(!1), le = X(!1), Z = X(!1), ue = X(!1), fe = X(!1), Ce = X(!1), st = X(!1), Re = X(!0), Ae = X(!1), qe = X(0), ft = X(!1), yt = X(!1), Be = X(!1), Nt = X(!1), kt = X(!1), Jt = X(0), Ct = X(!1);
    let Qt = null, bt = null, p = null, m = 0, _ = null, P = 0, A = 0, $ = !1, F = null, N = null, O = 0, I = null, ne = 0, D = 0, W = null, ae = 0, he = 0, ve = "", ye = 0, Ve = 0, Me = Promise.resolve(), ct = "";
    const Oe = /* @__PURE__ */ new Set(), H = X({}), $n = Y(() => {
      var c, h, v, b;
      return (h = (c = H.value) == null ? void 0 : c.featuredImageSquare) != null && h.url && ((b = (v = H.value) == null ? void 0 : v.featuredImage) == null ? void 0 : b.url) || "";
    }), Xe = Y(
      () => {
        var c, h, v, b;
        return ((h = (c = H.value) == null ? void 0 : c.featuredImageSquare) == null ? void 0 : h.url) || ((b = (v = H.value) == null ? void 0 : v.featuredImage) == null ? void 0 : b.url) || "";
      }
    ), nt = Y(
      () => Ct.value ? $n.value : Xe.value
    ), yn = Y(() => jm(nt.value, { retry: Jt.value })), Yn = Y(() => yn.value.src), Pc = Y(() => yn.value.srcset), zc = Y(() => yn.value.sizes), Mc = Y(
      () => {
        var c, h, v, b, R, L, se;
        return (Ct.value ? (h = (c = H.value) == null ? void 0 : c.featuredImage) == null ? void 0 : h.alt : (b = (v = H.value) == null ? void 0 : v.featuredImageSquare) == null ? void 0 : b.alt) || ((L = (R = H.value) == null ? void 0 : R.featuredImage) == null ? void 0 : L.alt) || ((se = H.value) == null ? void 0 : se.title) || "";
      }
    ), Rn = X(!1), Sr = X(!1), Io = X(""), $o = X([]), Ja = X({ text: [], asideText: [], credits: [] }), pt = X([]), St = X(!1), Ye = X([]), en = X(!1), Tr = X(!1), Gn = X(""), Er = X(""), Zn = X(""), Ro = X(!1), Qa = X(!1);
    let Po = null, Ar = null;
    const Pn = {
      0: "minimal",
      1: "summary",
      2: "expanded"
    }, Se = Y(() => s.value == 2 || g.value == 2), ut = Y(
      () => y.value && d.value == 2 && g.value == 2 && s.value != 2
    ), ot = Y(
      () => y.value && d.value < 2 && g.value == 2
    ), Lc = Y(() => Be.value), Oc = Y(
      () => G.value && ft.value && (!Se.value && d.value == 0 || yt.value && !Be.value)
    ), ei = Y(() => s.value == 0 || G.value && s.value < 2 ? pt.value.filter((c) => St.value == c.id) : s.value == 1 && !G.value ? pt.value.filter((c) => Ye.value.includes(c.id)) : []), Pt = X(!1), zt = X(!1), tn = X(!1), Tt = Y(() => ot.value && !Pt.value), Ir = Y(() => yt.value ? !Nt.value : Pt.value || tn.value ? !1 : ut.value || ot.value), Hc = aa + Kl;
    let zn = 0, Jn = 0, Qn = null, eo = 0, to = null;
    const $r = Gc(0.32, 0.72, 0, 1), Rr = () => {
      ae && (window.clearTimeout(ae), ae = 0);
    }, ti = async (c, h, v) => {
      var R;
      try {
        await ((R = c.decode) == null ? void 0 : R.call(c));
      } catch {
      }
      if (v !== he || h !== Yn.value)
        return;
      ve = c.currentSrc || h;
      const b = M.value;
      (c === b || b != null && b.currentSrc && b.currentSrc === ve) && (Rr(), kt.value = !0), W === c && (W = null), gt(nn);
    }, Bc = ({ src: c, srcset: h, sizes: v }) => {
      kt.value = !1, ve = "", W && (W.onload = null, W.onerror = null), W = null;
      const b = ++he;
      if (!c || typeof window > "u" || !window.Image)
        return;
      const R = new window.Image();
      R.decoding = "async", R.fetchPriority = "high", v && (R.sizes = v), h && (R.srcset = h), R.onload = () => ti(R, c, b), R.onerror = () => ni(b), R.src = c, W = R;
    }, ni = (c) => {
      if (!(c !== he || ae)) {
        if (Jt.value >= v0) {
          !Ct.value && $n.value && $n.value !== nt.value && (Ct.value = !0);
          return;
        }
        kt.value = !1, ve = "", W = null, ae = window.setTimeout(() => {
          ae = 0, Jt.value += 1;
        }, 350 * (Jt.value + 1));
      }
    };
    Ot(Xe, () => {
      Ct.value = !1;
    }), Ot(
      nt,
      () => {
        Rr(), Jt.value = 0, kt.value = !1, ve = "";
      },
      { immediate: !0 }
    ), Ot(yn, Bc, { immediate: !0 });
    const oi = () => {
      var h;
      const c = (h = M.value) == null ? void 0 : h.currentSrc;
      c && (kt.value = c === ve);
    }, Vc = (c) => {
      var b;
      const h = c.currentTarget, v = (b = h == null ? void 0 : h.getAttribute) == null ? void 0 : b.call(h, "src");
      !h || v !== Yn.value || ti(h, v, he);
    }, Nc = (c) => {
      var v, b;
      ((b = (v = c.currentTarget) == null ? void 0 : v.getAttribute) == null ? void 0 : b.call(v, "src")) === Yn.value && (kt.value = !1, ve = "", ni(he));
    }, ri = (c, h = "low") => new Promise((v) => {
      if (!c || typeof window > "u" || !window.Image) {
        v(!1);
        return;
      }
      const b = new window.Image();
      Oe.add(b), b.decoding = "async", b.fetchPriority = h, b.onload = async () => {
        var R;
        try {
          await ((R = b.decode) == null ? void 0 : R.call(b));
        } catch {
        }
        Oe.delete(b), v(!0);
      }, b.onerror = () => {
        Oe.delete(b), v(!1);
      }, b.src = c;
    }), Fc = (c = H.value) => {
      const { critical: h } = Dl(c), v = h.join("|");
      return v === ct || (ct = v, Me = Promise.all(h.map((b) => ri(b, "high")))), Me;
    }, Dc = async () => {
      let c = 0;
      await Promise.race([
        Me,
        new Promise((h) => {
          c = window.setTimeout(h, y0);
        })
      ]), c && window.clearTimeout(c);
    }, Pr = async (c = H.value) => {
      const h = ++Ve;
      fe.value = !1, Fc(c), await Dc(), h === Ve && (Se.value || d.value == 2) && (fe.value = !0);
    }, jc = async (c = H.value) => {
      const h = ++ye, { deferred: v } = Dl(c, { includeRelatedPdf: window.innerWidth >= 1024 });
      for (const b of v) {
        if (h !== ye || !Se.value)
          return;
        await ri(b, "low");
      }
    }, Uc = () => {
      if (document.head.querySelector("link[data-antikythera-image-preconnect]"))
        return;
      const c = document.createElement("link");
      c.rel = "preconnect", c.href = "https://cdn.sanity.io", c.crossOrigin = "anonymous", c.dataset.antikytheraImagePreconnect = "", document.head.appendChild(c);
    }, Ke = () => window.innerWidth < 640, rt = () => Ke() ? B.value : x.value, ai = () => {
      if (!Ke())
        return !1;
      const c = rt();
      return !!(c && c.scrollTop > 2);
    }, ii = (c) => Math.round(Math.min(400, Math.max(Ul, 240 + c * 0.11))), li = () => {
      var b;
      if (!ai())
        return;
      const c = ((b = rt()) == null ? void 0 : b.scrollTop) || 0, h = ii(c), v = Ae.value ? h + ql + Hc : Math.max(h, aa) + Kl;
      return {
        collapseCommitMs: v,
        collapseEndMs: v + 100
      };
    }, zr = () => {
      zn && (window.cancelAnimationFrame(zn), zn = 0);
    }, si = () => {
      if (Jn && (window.clearTimeout(Jn), Jn = 0), Qn) {
        const c = Qn;
        Qn = null, c();
      }
    }, ci = () => {
      if (eo && (window.clearTimeout(eo), eo = 0), to) {
        const c = to;
        to = null, c();
      }
    }, qc = () => {
      var c, h;
      return (h = (c = window.matchMedia) == null ? void 0 : c.call(window, "(prefers-reduced-motion: reduce)")) != null && h.matches ? Promise.resolve() : new Promise((v) => {
        Qn = v, Jn = window.setTimeout(() => {
          Jn = 0, Qn = null, v();
        }, ql);
      });
    }, ui = () => {
      var c, h;
      return (h = (c = window.matchMedia) == null ? void 0 : c.call(window, "(prefers-reduced-motion: reduce)")) != null && h.matches ? Promise.resolve() : new Promise((v) => {
        to = v, eo = window.setTimeout(() => {
          eo = 0, to = null, v();
        }, aa);
      });
    }, di = (c = Ul, h = $r) => {
      var L, se;
      zr();
      const v = rt();
      if (!v || !Ke())
        return Promise.resolve();
      const b = v.scrollTop;
      if (b <= 2 || (se = (L = window.matchMedia) == null ? void 0 : L.call(window, "(prefers-reduced-motion: reduce)")) != null && se.matches)
        return v.scrollTop = 0, Promise.resolve();
      const R = performance.now();
      return new Promise((me) => {
        const Pe = (Ne) => {
          const _e = Math.min(1, (Ne - R) / c);
          if (v.scrollTop = b * (1 - h(_e)), _e < 1) {
            zn = window.requestAnimationFrame(Pe);
            return;
          }
          zn = 0, v.scrollTop = 0, me();
        };
        zn = window.requestAnimationFrame(Pe);
      });
    }, Kc = () => {
      const c = ee.value, h = c == null ? void 0 : c.parentElement;
      if (!c || !h)
        return 0;
      const v = c.cloneNode(!0), b = c.getBoundingClientRect().width;
      v.classList.remove("minimal-shell-expanding"), Object.assign(v.style, {
        position: "fixed",
        left: "-10000px",
        top: "0",
        width: `${b}px`,
        height: "auto",
        maxHeight: "none",
        visibility: "hidden",
        pointerEvents: "none",
        transition: "none"
      });
      const R = v.querySelector(".anti-mobile-summary-fold");
      R && (R.style.gridTemplateRows = "1fr", R.style.opacity = "1", R.style.transition = "none");
      const L = v.querySelector("figure");
      L && (L.style.marginTop = "20px", L.style.maxHeight = "none", L.style.opacity = "1", L.style.transition = "none", L.querySelectorAll("img").forEach((me) => {
        me.style.opacity = "1", me.style.transition = "none";
      })), h.appendChild(v);
      const se = v.getBoundingClientRect().height;
      return v.remove(), se;
    }, Ft = () => {
      var c;
      ne && (window.clearTimeout(ne), ne = 0), D && (window.clearTimeout(D), D = 0), I && (I.cancel(), I = null), (c = ee.value) == null || c.style.removeProperty("height"), yt.value = !1, Be.value = !1, Nt.value = !1, Se.value && nn();
    }, Wc = () => {
      var c;
      Be.value && (I && (I.cancel(), I = null), (c = ee.value) == null || c.style.removeProperty("height"), yt.value = !1, Be.value = !1, Nt.value = !1, D = 0, nn());
    }, Xc = async () => {
      var b, R;
      const c = ee.value;
      if (!c || !yt.value || !Se.value || d.value != 2 || !G.value) {
        Ft();
        return;
      }
      if ((R = (b = window.matchMedia) == null ? void 0 : b.call(window, "(prefers-reduced-motion: reduce)")) != null && R.matches) {
        Ft();
        return;
      }
      const h = c.getBoundingClientRect().height, v = Kc();
      if (v <= h) {
        Ft();
        return;
      }
      if (c.style.height = `${h}px`, Be.value = !0, await gt(), !Be.value || d.value != 2) {
        Ft();
        return;
      }
      I = c.animate(
        [{ height: `${h}px` }, { height: `${v}px` }],
        {
          duration: Wl,
          easing: "cubic-bezier(0.25, 0.7, 0.25, 1)",
          fill: "forwards"
        }
      ), I.onfinish = () => {
        Be.value && (c.style.height = `${v}px`, I == null || I.cancel(), I = null);
      }, ne = window.setTimeout(() => {
        ne = 0, Nt.value = !0;
      }, Xl), D = window.setTimeout(
        Wc,
        Math.max(Wl, Xl + m0)
      );
    }, no = () => {
      zr(), si(), ci(), Pt.value = !1, zt.value = !1, tn.value = !1;
    }, Yc = async () => {
      var b;
      no();
      const c = ((b = rt()) == null ? void 0 : b.scrollTop) || 0, h = ii(c);
      if (Ae.value) {
        if (Pt.value = !0, await di(h, $r), !ot.value) {
          Pt.value = !1;
          return;
        }
        if (await qc(), !ot.value) {
          Pt.value = !1;
          return;
        }
        zt.value = !0, tn.value = !0, Pt.value = !1;
      } else {
        if (zt.value = !0, tn.value = !0, await Promise.all([
          di(h, $r),
          ui()
        ]), !ot.value) {
          tn.value = !1;
          return;
        }
        tn.value = !1;
        return;
      }
      if (await ui(), !ot.value) {
        tn.value = !1;
        return;
      }
      tn.value = !1;
    };
    function Gc(c, h, v, b) {
      const R = 3 * c, L = 3 * (v - c) - R, se = 1 - R - L, me = 3 * h, Pe = 3 * (b - h) - me, Ne = 1 - me - Pe, _e = (Fe) => ((se * Fe + L) * Fe + R) * Fe, He = (Fe) => ((Ne * Fe + Pe) * Fe + me) * Fe, Le = (Fe) => (3 * se * Fe + 2 * L) * Fe + R, Cu = (Fe) => {
        let Et = Fe;
        for (let ao = 0; ao < 8; ao++) {
          const Bi = _e(Et) - Fe;
          if (Math.abs(Bi) < 1e-6)
            return Et;
          const Vi = Le(Et);
          if (Math.abs(Vi) < 1e-6)
            break;
          Et -= Bi / Vi;
        }
        let Vr = 0, Nr = 1;
        for (Et = Fe; Vr < Nr; ) {
          const ao = _e(Et);
          if (Math.abs(ao - Fe) < 1e-6)
            return Et;
          Fe > ao ? Vr = Et : Nr = Et, Et = (Nr + Vr) / 2;
        }
        return Et;
      };
      return (Fe) => He(Cu(Fe));
    }
    const oo = (c) => {
      if (c)
        try {
          return new URL(c, window.location.origin).hostname;
        } catch {
          return;
        }
    }, Zc = Y(() => {
      var v, b;
      const c = n.apiBackgroundColor || ((v = H.value) == null ? void 0 : v.apiBackgroundColor), h = n.apiForegroundColor || ((b = H.value) == null ? void 0 : b.apiForegroundColor);
      return gc({
        theme: Rn.value ? n.theme === "light" ? "dark" : "light" : n.theme,
        backgroundColor: Rn.value ? h : c,
        foregroundColor: Rn.value ? c : h
      });
    }), Mr = Y(() => {
      var c;
      return Ec((c = H.value) == null ? void 0 : c.releaseDate);
    }), zo = Y(() => {
      const c = [], h = /* @__PURE__ */ new Set();
      return pt.value.forEach((v) => {
        var L;
        const b = (L = v == null ? void 0 : v.attribution) == null ? void 0 : L.trim(), R = b == null ? void 0 : b.toLocaleLowerCase();
        !b || h.has(R) || (h.add(R), c.push(b));
      }), c;
    }), Lr = Y(() => zo.value.length === 0 ? "" : `Annotations by ${qm(zo.value)}`), Mo = Y(() => {
      var c;
      return V.value ? !1 : ((c = H.value) == null ? void 0 : c.annotationsCount) > 0 && !Ro.value || !!Lr.value;
    }), fi = Y(() => {
      var c, h, v, b;
      if (!H.value) return "";
      if (H.value.fileType) return H.value.fileType;
      if ((h = (c = H.value) == null ? void 0 : c.pdf) != null && h.pdfMimeType) {
        const R = H.value.pdf.pdfMimeType.split("/");
        if (R[1]) return R[1];
      }
      if ((b = (v = H.value) == null ? void 0 : v.pdf) != null && b.pdfFilename) {
        const R = H.value.pdf.pdfFilename.split(".");
        if (R.length > 1) return R.pop();
      }
      return "file";
    }), pi = Y(
      () => {
        var c, h, v, b, R, L, se, me, Pe, Ne;
        return !!(((h = (c = H.value) == null ? void 0 : c.pdfPreview) == null ? void 0 : h.override) === !0 || (b = (v = H.value) == null ? void 0 : v.pdfPreview) != null && b.url || (L = (R = H.value) == null ? void 0 : R.pdf) != null && L.url || (me = (se = H.value) == null ? void 0 : se.markdown) != null && me.url || (Ne = (Pe = H.value) == null ? void 0 : Pe.pdfPreview) != null && Ne.downloadLabel);
      }
    ), hi = Y(() => !0), Jc = Y(() => d.value == 2 ? "Return to Article" : "More Info"), Qc = () => {
      A = 0, $ = !1, Se.value && (_ !== Ke() ? Br() : nn());
    }, eu = () => {
      $ = !0, A && window.clearTimeout(A), A = window.setTimeout(Qc, 120);
    }, gi = () => {
      A && (window.clearTimeout(A), A = 0), $ = !1;
    }, tu = () => {
      var b, R, L;
      P = 0;
      const c = window.innerWidth, h = F !== null && c !== F;
      if (F = c, oi(), h && Be.value && Ft(), G.value = c < 769, V.value = c < 1024, !T.value)
        return;
      if (!Se.value) {
        const { height: se } = T.value.getBoundingClientRect(), me = ((R = (b = q.value) == null ? void 0 : b.$el) == null ? void 0 : R.getBoundingClientRect().height) || 0, Pe = me > 0 ? ` - ${me}px - (var(--fontSize) * 0.75)` : "", Ne = `calc(100dvh - ${se}px - (var(--fontSize) * 1.5)${Pe})`;
        ((L = j.value) == null ? void 0 : L["--sansSticker"]) !== Ne && (j.value = { "--sansSticker": Ne });
        return;
      }
      const v = Ke();
      _ !== v ? Br() : $ || nn();
    }, Mn = (c) => {
      (c == null ? void 0 : c.type) === "resize" && Se.value && eu(), !P && (P = window.requestAnimationFrame(tu));
    }, nu = (c) => {
      const h = c == null ? void 0 : c.target;
      if (!(h instanceof Element) || h === document.documentElement || h === document.body)
        return window.scrollY;
      const { top: v, bottom: b, height: R } = h.getBoundingClientRect(), L = R >= window.innerHeight * 0.8 && v <= window.innerHeight * 0.1 && b >= window.innerHeight * 0.9, se = h.scrollHeight > h.clientHeight + 2;
      return L && se ? h.scrollTop : null;
    }, Ln = (c) => {
      if (window.innerWidth > 768 || Se.value)
        return;
      const h = nu(c);
      if (h !== null) {
        if (ft.value) {
          h <= 2 && (ft.value = !1, (s.value == 0 || d.value == 0) && k(1));
          return;
        }
        h > 30 && (ft.value = !0, ce("antikythera mobile menu minimized", {
          antikythera_entry: n.entry || void 0,
          scroll_y: h,
          menu_view: s.value
        }), s.value != 0 && k(0));
      }
    };
    Ot(f, (c) => {
      o("viewChange", c), Mn();
    }), Ot(
      ut,
      (c) => {
        if (c) {
          Ft(), yt.value = G.value && ft.value;
          return;
        }
        yt.value && Se.value && d.value == 2 && gt(Xc);
      },
      { flush: "sync" }
    ), Ot(Se, (c) => {
      c ? (no(), Ce.value = Ke(), Pr(), Dt().then(() => {
        Se.value && jc();
      }), gt(() => {
        var h;
        oi(), O = ((h = rt()) == null ? void 0 : h.scrollTop) || 0, Br(), Ai(), Ii();
      })) : (ye += 1, Ve += 1, fe.value = !1, Ft(), no(), gi(), ft.value = !1, Hr(), bt && (window.clearTimeout(bt), bt = null), Oo(), B.value && (B.value.scrollTop = 0), Re.value = !0, Ce.value = !1, st.value = !1, O = 0);
    }), Ot(ot, (c) => {
      if (!c) {
        no();
        return;
      }
      if (Ft(), ft.value = !1, ai()) {
        Yc();
        return;
      }
      no();
    });
    const mi = (c) => {
      const h = Ye.value.indexOf(c);
      h >= 0 && Ye.value.splice(h, 1);
    }, vi = () => {
      St.value = !1, Ye.value = [];
    }, ou = (c) => {
      St.value == c && (St.value = !1), mi(c);
    }, yi = (c, h = "toggle", v = "") => {
      c ? gt(() => {
        Bo(h, v);
      }) : vi(), gt(() => {
        Mn();
      }), ce("antikythera annotations toggled", {
        antikythera_entry: n.entry || void 0,
        annotations_enabled: c,
        annotations_count: pt.value.length,
        annotation_attribution_count: zo.value.length,
        annotation_trigger: h,
        menu_view: s.value,
        menu_view_name: Pn[s.value]
      });
    }, bi = (c) => {
      c.code == "Escape" && (ce("antikythera keyboard shortcut used", {
        antikythera_entry: n.entry || void 0,
        key: "Escape",
        menu_view: s.value
      }), k(1, li()));
    }, ru = (c) => {
      var v;
      if (!c) return !1;
      const h = (v = c.tagName) == null ? void 0 : v.toLowerCase();
      return c.isContentEditable || h === "input" || h === "textarea" || h === "select";
    }, wi = (c) => {
      var h, v;
      c.defaultPrevented || c.repeat || c.metaKey || c.ctrlKey || c.altKey || ru(c.target) || (((h = c.key) == null ? void 0 : h.toLowerCase()) === "i" && (Rn.value = !Rn.value, ce("antikythera debug theme inverted", {
        antikythera_entry: n.entry || void 0,
        debug_theme_inverted: Rn.value,
        menu_view: s.value,
        menu_view_name: Pn[s.value]
      })), ((v = c.key) == null ? void 0 : v.toLowerCase()) === "g" && (Sr.value = !Sr.value));
    }, xi = () => {
      window.addEventListener("keydown", bi);
    }, Or = () => {
      window.removeEventListener("keydown", bi);
    }, au = () => {
      window.addEventListener("keydown", wi);
    }, iu = () => {
      window.removeEventListener("keydown", wi);
    }, _i = (c) => {
      var h, v, b;
      c != null && c.entry && (H.value = c.entry, Array.isArray((h = c.entry) == null ? void 0 : h.annotations) && (pt.value = c.entry.annotations, Ro.value = !0)), c != null && c.settings && !c.settings.error && (Io.value = (v = c.settings) == null ? void 0 : v.shortDescription, $o.value = (b = c.settings) == null ? void 0 : b.externalLinks, le.value = !0), c != null && c.about && (Ja.value = c.about);
    }, ki = async () => {
      await gt(), J.value = !0;
    }, lu = (c) => {
      var v, b;
      const h = pt.value.find((R) => R.id === c);
      return {
        antikythera_entry: n.entry || void 0,
        annotation_id: c,
        annotation_title: (h == null ? void 0 : h.title) || void 0,
        annotation_type: (h == null ? void 0 : h.annotationType) || void 0,
        annotation_has_external_link: !!(h != null && h.externalLink),
        annotation_external_domain: oo(h == null ? void 0 : h.externalLink),
        annotation_has_featured_image: !!((v = h == null ? void 0 : h.featuredImage) != null && v.url || (b = h == null ? void 0 : h.featuredImageSquare) != null && b.url),
        annotation_index: pt.value.findIndex((R) => R.id === c)
      };
    }, ro = (c, h) => {
      ce(
        "antikythera annotation card opened",
        {
          ...lu(c),
          annotation_trigger: h,
          menu_view: s.value,
          menu_view_name: Pn[s.value]
        },
        { onceKey: `annotation-card-opened:${n.entry}:${h}:${c}` }
      );
    }, Ci = ({ action: c, label: h, fromView: v, toView: b }) => {
      var R, L;
      ce(`antikythera menu ${c} clicked`, {
        antikythera_entry: n.entry || void 0,
        button_label: h,
        menu_from_view: v,
        menu_from_view_name: Pn[v],
        menu_to_view: b,
        menu_to_view_name: Pn[b],
        entry_title: ((R = H.value) == null ? void 0 : R.title) || void 0,
        annotations_count: pt.value.length,
        is_expandable: !!((L = H.value) != null && L.apiExpandable)
      });
    }, su = () => {
      var h;
      const c = ((h = H.value) == null ? void 0 : h.apiExpandable) === !1 ? 1 : 2;
      Ci({
        action: "expand",
        label: "More Info",
        fromView: s.value,
        toView: c
      }), c == 2 && (Pr(), Dt()), k(c);
    }, cu = () => {
      if (Se.value) {
        uu();
        return;
      }
      su();
    }, uu = () => {
      const c = u.value == 2 ? 1 : u.value, h = li();
      Ci({
        action: "collapse",
        label: "Return to Article",
        fromView: s.value,
        toView: c
      }), k(c, h);
    }, du = () => {
      var R;
      const c = rt(), h = (R = Q.value) == null ? void 0 : R.$el;
      if (!c || !h)
        return 0;
      const v = c.getBoundingClientRect(), b = h.getBoundingClientRect();
      return Math.max(0, c.scrollTop + b.top - v.top);
    }, Lo = () => {
      const c = rt();
      return c && Number.parseFloat(window.getComputedStyle(c).scrollPaddingTop) || 0;
    }, Si = () => Math.max(0, du() - Lo()), fu = () => {
      var L;
      const c = rt(), h = (L = w.value) == null ? void 0 : L.$el;
      if (!c || !h)
        return 0;
      const v = c.getBoundingClientRect(), b = h.getBoundingClientRect(), R = c.scrollTop + b.top - v.top;
      return Math.max(0, R - Lo());
    }, Ti = () => {
      if (!Se.value || !Ke()) {
        Ae.value = !1;
        return;
      }
      const c = rt();
      if (!c || qe.value <= 0) {
        Ae.value = !1;
        return;
      }
      Ae.value = c.scrollTop >= qe.value - 1;
    }, Oo = () => {
      (N !== null || Object.keys(K.value).length > 0) && (N = null, K.value = {}), qe.value !== 0 && (qe.value = 0), Ae.value && (Ae.value = !1);
    }, pu = () => {
      if (!Se.value || !Ke()) {
        Oo();
        return;
      }
      const c = ee.value, h = z.value;
      if (!c || !h) {
        Oo();
        return;
      }
      const v = c.getBoundingClientRect().top, b = h.getBoundingClientRect().top, R = Number.parseFloat(window.getComputedStyle(h).marginTop) || 0, L = Math.max(0, Math.round((b - v + R) * 100) / 100), me = (Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16) * 0.75 - L + c.getBoundingClientRect().height, Pe = Math.max(0, Math.round(me * 100) / 100);
      (N !== L || K.value["--mobile-expanded-section-sticky-top"] !== `${Pe}px`) && (N = L, qe.value = L, K.value = {
        "--mobile-sticker-sticky-offset": `${L}px`,
        "--mobile-expanded-section-sticky-top": `${Pe}px`
      }), Ti();
    }, Ei = () => {
      var Ne, _e;
      const c = rt(), h = U.value;
      if (!c || !h)
        return;
      if (Ke()) {
        Re.value = !1;
        return;
      }
      const v = [h, (Ne = Q.value) == null ? void 0 : Ne.$el, (_e = w.value) == null ? void 0 : _e.$el].filter(
        (He) => He instanceof Element
      );
      if (!v.length)
        return;
      const b = c.getBoundingClientRect().top + Lo(), L = v.map((He) => ({
        section: He,
        rect: He.getBoundingClientRect()
      })).reduce(
        (He, Le) => Le.rect.top <= b + 2 ? Le : He
      ), se = Number.parseFloat(window.getComputedStyle(L.section).minHeight) || 0, me = se > 0 && L.rect.height <= se + 1, Pe = Math.abs(L.rect.top - b) <= 2 || L.section === h && c.scrollTop <= 2;
      me ? Pe && (Re.value = !0) : Re.value = !1;
    }, hu = () => {
      if (m = 0, !(!Se.value || $)) {
        if (Ei(), Ke()) {
          Be.value || pu(), Ho();
          return;
        }
        Oo(), Ho();
      }
    }, nn = () => {
      m || (m = window.requestAnimationFrame(hu));
    }, Hr = () => {
      p == null || p.disconnect(), p = null, _ = null, m && (window.cancelAnimationFrame(m), m = 0);
    }, Br = () => {
      var L, se;
      if (Hr(), !Se.value)
        return;
      const c = Ke(), h = rt(), v = U.value, b = (L = Q.value) == null ? void 0 : L.$el, R = (se = w.value) == null ? void 0 : se.$el;
      if (_ = c, typeof ResizeObserver > "u") {
        $ || nn();
        return;
      }
      if (p = new ResizeObserver(() => {
        $ || c && Be.value || nn();
      }), c)
        ee.value && p.observe(ee.value), z.value && p.observe(z.value);
      else {
        h && p.observe(h);
        for (const me of [v, b, R])
          me instanceof Element && p.observe(me);
      }
      $ || nn();
    }, Ai = () => {
      var me;
      const c = rt(), h = (me = Q.value) == null ? void 0 : me.$el;
      if (!c || !h) {
        Ce.value = !1, O = 0;
        return;
      }
      if (Ke()) {
        O = c.scrollTop;
        return;
      }
      const v = c.scrollTop, b = v >= O, R = c.getBoundingClientRect(), L = h.getBoundingClientRect(), se = R.top + Lo();
      Ce.value = b ? v > 2 && L.top <= R.bottom - 2 : v > 2 && L.top <= se + 2, O = v;
    }, Ii = () => {
      var L, se;
      const c = rt(), h = (L = w.value) == null ? void 0 : L.$el;
      if (!c || !h || Ke()) {
        st.value = !1;
        return;
      }
      const v = c.scrollTop, b = c.getBoundingClientRect(), R = (se = h.querySelector(".about-preview")) == null ? void 0 : se.getBoundingClientRect();
      st.value = !!(R && v > 2 && R.bottom < b.bottom - 2);
    }, Ho = () => {
      const c = B.value, h = (c == null ? void 0 : c.querySelectorAll(".mobile-expanded-entry-header, .mobile-expanded-page-header")) || [];
      if (!c || !Ke()) {
        h.forEach((v) => v.removeAttribute("data-stuck"));
        return;
      }
      h.forEach((v) => {
        const b = v.closest("section");
        if (!b) {
          v.removeAttribute("data-stuck");
          return;
        }
        const R = v.getBoundingClientRect(), L = b.getBoundingClientRect(), se = R.top > L.top + 1, me = L.bottom > R.bottom + 1;
        v.toggleAttribute("data-stuck", se && me);
      });
    }, $i = () => {
      Ei(), Ti(), Ho(), Ii(), Ai();
    }, Ri = () => {
      bt && window.clearTimeout(bt), bt = window.setTimeout(() => {
        bt = null, $i();
      }, 120), !Qt && (Qt = window.requestAnimationFrame(() => {
        Qt = null, $i();
      }));
    }, gu = () => {
      Se.value && Ke() && Ri();
    }, Pi = (c) => {
      const h = B.value, v = ee.value;
      if (!c || !h || !v || !Ke())
        return;
      const b = c.getBoundingClientRect().top - v.getBoundingClientRect().bottom;
      gt(() => {
        if (!h || !c.isConnected)
          return;
        const R = c.getBoundingClientRect().top - h.getBoundingClientRect().top, L = v.getBoundingClientRect().bottom - h.getBoundingClientRect().top + b, se = Math.max(0, h.scrollTop + R - L);
        h.scrollTop = se, Ho();
      });
    }, mu = ({ header: c }) => {
      Pi(c);
    }, vu = ({ open: c }) => {
      var b, R;
      const h = rt();
      if (!h)
        return;
      if (Ke()) {
        const L = (R = (b = Q.value) == null ? void 0 : b.$el) == null ? void 0 : R.querySelector(".mobile-expanded-page-header");
        Ce.value = c, O = h.scrollTop, !c && L && Pi(L);
        return;
      }
      const v = c ? Si() : 0;
      Ce.value = c, O = h.scrollTop, h.scrollTo({ top: v, behavior: "smooth" });
    }, yu = ({ open: c }) => {
      const h = rt();
      if (!h)
        return;
      const v = c ? fu() : Si();
      st.value = c, h.scrollTo({ top: v, behavior: "smooth" });
    }, zi = (c = {}) => {
      var h;
      ce("antikythera file downloaded", {
        antikythera_entry: n.entry || void 0,
        entry_title: ((h = H.value) == null ? void 0 : h.title) || void 0,
        file_type: c.fileType || void 0,
        file_name: c.fileName || void 0,
        file_mime_type: c.mimeType || void 0,
        file_domain: oo(c.url)
      });
    }, bu = () => {
      var c, h, v, b;
      ce("antikythera doi link clicked", {
        antikythera_entry: n.entry || void 0,
        doi: ((c = H.value) == null ? void 0 : c.doi) || void 0,
        doi_url: ((h = H.value) == null ? void 0 : h.doiUrl) || void 0,
        doi_domain: oo((v = H.value) == null ? void 0 : v.doiUrl),
        entry_title: ((b = H.value) == null ? void 0 : b.title) || void 0
      });
    }, Mi = (c, h) => {
      var v;
      ce("antikythera author link clicked", {
        antikythera_entry: n.entry || void 0,
        author_name: (c == null ? void 0 : c.title) || void 0,
        author_role: h,
        author_external_domain: oo(c == null ? void 0 : c.externalLink),
        entry_title: ((v = H.value) == null ? void 0 : v.title) || void 0
      });
    }, wu = (c, h, v = void 0) => {
      var b;
      ce("antikythera external link clicked", {
        antikythera_entry: n.entry || void 0,
        entry_title: ((b = H.value) == null ? void 0 : b.title) || void 0,
        link_kind: c,
        link_title: v,
        link_domain: oo(h)
      });
    }, Li = ({ linkKind: c, linkUrl: h, linkTitle: v }) => {
      wu(c, h, v);
    }, Dt = async () => {
      var h, v, b, R, L, se, me;
      if (!n.entry || Qa.value)
        return;
      Po || (Z.value = !1, ue.value = !1, Po = a());
      const c = await Po;
      if (c != null && c.error || !(c != null && c.entry)) {
        Po = null, Z.value = !1, ue.value = !0, ce("antikythera entry load error", {
          antikythera_entry: n.entry || void 0,
          error_message: (c == null ? void 0 : c.error) || "missing entry payload"
        });
        return;
      }
      _i(c), Qa.value = !0, await gt(), (Se.value || d.value == 2) && await Pr(H.value), Z.value = !0, ue.value = !1, ce("antikythera entry loaded", {
        antikythera_entry: n.entry || void 0,
        entry_title: ((h = H.value) == null ? void 0 : h.title) || void 0,
        annotations_count: pt.value.length,
        authors_count: ((b = (v = H.value) == null ? void 0 : v.authors) == null ? void 0 : b.length) || 0,
        designers_count: ((L = (R = H.value) == null ? void 0 : R.designers) == null ? void 0 : L.length) || 0,
        related_entries_count: ((me = (se = H.value) == null ? void 0 : se.relatedEntries) == null ? void 0 : me.length) || 0
      });
    }, xu = async () => {
      if (!n.entry || Ro.value)
        return;
      Ar || (Ar = l());
      const c = await Ar;
      Array.isArray(c) ? (pt.value = c, Ro.value = !0, await gt(), Mn(), Bo("toggle")) : c != null && c.error && ce("antikythera annotations load error", {
        antikythera_entry: n.entry || void 0,
        error_message: c.error
      });
    };
    Co(async () => {
      var c, h, v, b, R, L, se, me, Pe, Ne, _e, He;
      if (au(), Uc(), n.entry) {
        const Le = await i();
        Le != null && Le.error && ce("antikythera entry metadata load error", {
          antikythera_entry: n.entry || void 0,
          error_message: Le.error
        }), _i(Le), te.value = !0, ce("antikythera entry metadata loaded", {
          antikythera_entry: n.entry || void 0,
          entry_title: ((c = H.value) == null ? void 0 : c.title) || void 0,
          annotations_count: (h = H.value) == null ? void 0 : h.annotationsCount,
          authors_count: ((b = (v = H.value) == null ? void 0 : v.authors) == null ? void 0 : b.length) || 0,
          designers_count: ((L = (R = H.value) == null ? void 0 : R.designers) == null ? void 0 : L.length) || 0,
          has_doi: !!((se = H.value) != null && se.doi),
          has_pdf: !!((Pe = (me = H.value) == null ? void 0 : me.pdf) != null && Pe.url),
          has_markdown: !!((_e = (Ne = H.value) == null ? void 0 : Ne.markdown) != null && _e.url)
        }), Mn(), ki(), ((He = H.value) == null ? void 0 : He.annotationsCount) > 0 && xu(), window.addEventListener("resize", Mn), window.addEventListener("scroll", Ln), document.addEventListener("scroll", Ln, { passive: !0, capture: !0 });
      } else {
        console.warn("antikythera menu skipped entry metadata: no entry slug provided");
        const Le = await r();
        Le != null && Le.error || (Io.value = Le.shortDescription, $o.value = Le.externalLinks, le.value = !0), ki(), window.addEventListener("scroll", Ln), document.addEventListener("scroll", Ln, { passive: !0, capture: !0 });
      }
    }), Ua(() => {
      Rr(), he += 1, ve = "", W && (W.onload = null, W.onerror = null), W = null, ye += 1, Ve += 1, Oe.forEach((c) => {
        c.onload = null, c.onerror = null;
      }), Oe.clear(), window.removeEventListener("resize", Mn), window.removeEventListener("scroll", Ln), document.removeEventListener("scroll", Ln, { capture: !0 }), gi(), Ft(), zr(), si(), ci(), Hr(), P && (window.cancelAnimationFrame(P), P = 0), Qt && window.cancelAnimationFrame(Qt), bt && window.clearTimeout(bt), Or(), iu();
    });
    const Oi = (c) => {
      var h;
      if (!c) return null;
      if ((h = window.CSS) != null && h.escape)
        return document.querySelector(`#${window.CSS.escape(c)}`);
      try {
        return document.querySelector(`#${c}`) || document.getElementById(c);
      } catch {
        return document.getElementById(c);
      }
    }, _u = () => {
      const c = [], h = /* @__PURE__ */ new Set(), { innerHeight: v } = window;
      return pt.value.forEach((b) => {
        const R = b == null ? void 0 : b.id, L = Oi(R);
        if (!L || h.has(R))
          return;
        const { top: se, bottom: me } = L.getBoundingClientRect();
        me > 0 && se < v && (h.add(R), c.push(R));
      }), c;
    }, Bo = (c = "viewport", h = "") => {
      if (!en.value || s.value == 2)
        return;
      const v = _u().filter((b) => b !== h);
      if (h && v.unshift(h), v.length !== 0) {
        if (Dt(), G.value || s.value == 0) {
          const b = h || v[0];
          St.value = b, ro(b, c);
          return;
        }
        s.value == 1 && v.slice(0, 2).forEach((b) => {
          Ye.value.includes(b) || (Ye.value.push(b), ro(b, c));
        });
      }
    }, Hi = () => {
      if (!Gn.value)
        return;
      const c = Gn.value, h = Er.value;
      if (Gn.value = "", Er.value = "", c === "annotation-click" && h) {
        Bo(c, h);
        return;
      }
      Bo(c);
    }, ku = () => {
      if (Ye.value.length === 0)
        return;
      const { innerHeight: c } = window, h = /* @__PURE__ */ new Set();
      Ye.value.forEach((v) => {
        const b = Oi(v);
        if (!b)
          return;
        const { top: R, bottom: L } = b.getBoundingClientRect();
        (L < 0 || R > c) && h.add(v);
      }), h.size > 0 && (Ye.value = Ye.value.filter((v) => !h.has(v)));
    };
    return Cf(() => {
      var c, h, v, b, R;
      if (n.forceopen == !0 && (Dt(), k(2)), Mo.value && !Tr.value && /^v[01]_/.test(n.activeannotation || "")) {
        const L = n.activeannotation.startsWith("v0_") ? "annotation-click" : "viewport";
        Tr.value = !0, en.value = !0, Gn.value = L, Er.value = n.activeannotation.replace(/^v[01]_/, ""), Zn.value = n.activeannotation, ce("antikythera annotations toggled", {
          antikythera_entry: n.entry || void 0,
          annotations_enabled: !0,
          annotations_count: pt.value.length,
          annotation_attribution_count: zo.value.length,
          annotation_trigger: L,
          menu_view: s.value,
          menu_view_name: Pn[s.value]
        });
      }
      if (!Gn.value) {
        if (Zn.value) {
          if (n.activeannotation === Zn.value)
            return;
          Zn.value = "";
        }
        if (Mo.value && !en.value && ((c = n.activeannotation) != null && c.startsWith("v0_"))) {
          const L = "annotation-click", se = n.activeannotation.replace("v0_", "");
          en.value = !0, Zn.value = n.activeannotation, yi(!0, L, se);
          return;
        }
        if (Mo.value && !en.value) {
          vi(), s.value == 2 ? (Dt(), xi()) : Or();
          return;
        }
        if (G.value && s.value < 2) {
          if ((h = n.activeannotation) != null && h.includes("v0_")) {
            Dt();
            const L = n.activeannotation.replace("v0_", "");
            St.value = L, ro(L, "click");
          }
          return;
        }
        if (s.value == 0) {
          if (Ye.value = [], (v = n.activeannotation) != null && v.includes("v0_")) {
            Dt();
            const L = n.activeannotation.replace("v0_", "");
            St.value = L, ro(L, "click");
            return;
          }
          if (n.inactiveannotation) {
            const L = n.inactiveannotation.replace("v0_", "").replace("v1_", "");
            St.value == L && (St.value = !1);
          }
          return;
        }
        if (s.value == 1) {
          if (St.value = !1, n.activeannotation && ((b = n.activeannotation) != null && b.includes("v1_"))) {
            Dt();
            const L = n.activeannotation.replace("v1_", "");
            Ye.value.includes(L) || (Ye.value.push(L), ro(L, "viewport"));
            return;
          }
          if ((R = n.inactiveannotation) != null && R.includes("v1_") && Ye.value.length > 0) {
            const L = n.inactiveannotation.replace("v1_", "");
            Ye.value.indexOf(L) >= 0 && (mi(L), ku());
          }
          return;
        }
        s.value == 2 ? (Dt(), Ye.value = [], St.value = !1, xi()) : Or();
      }
    }), (c, h) => {
      var v, b, R, L, se, me, Pe, Ne;
      return C(), E("div", {
        ref_key: "ExpandedFrame",
        ref: B,
        class: ge(["expanded-frame fixed top-0 left-0 grid w-full pointer-events-none grid-cols-12 gap-x-3 gap-y-3 px-6 py-3 sm:gap-x-9 z-[1000]", {
          "h-[100dvh] overflow-x-hidden overflow-y-auto overscroll-contain hidden_scroll sm:overflow-hidden expanded-frame-clip": Se.value,
          "mobile-mid-scroll-reversing": zt.value
        }]),
        style: Sn([Zc.value, K.value]),
        "data-version": "1.5.2",
        onScrollPassive: gu
      }, [
        S("div", {
          class: ge(["expanded-frame-underlay anti-motion-fade pointer-events-none fixed z-0 rounded-[11px] bg-black", [
            { "opacity-0": !Se.value || ot.value && !Pt.value },
            { "opacity-100": Se.value && (!ot.value || Pt.value) },
            { "duration-[220ms] delay-[40ms]": ut.value },
            { "duration-[260ms]": zt.value },
            { "duration-150": ot.value && !Pt.value && !zt.value },
            { "duration-200": !ut.value && !ot.value }
          ]])
        }, null, 2),
        S("article", {
          ref_key: "Menu",
          ref: T,
          class: ge(["anti-motion-fade pointer-events-auto relative z-10 w-sticker -translate-x-3 col-start-1 row-start-1 shrink duration-200", [
            { "opacity-0": !J.value },
            { "col-span-12 sm:col-span-6 lg:col-span-3": !Se.value },
            {
              "expanded-scrollport expanded-sticker-column col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col gap-[10px] !border-0 !bg-transparent !p-0 text-[rgb(244_244_244)] hidden_scroll !overflow-y-auto": Se.value
            }
          ]])
        }, [
          S("aside", Xm, [
            S("article", {
              ref_key: "StickerCard",
              ref: ee,
              class: ge(["expanded-sticker-card border-stroke-light flex w-full flex-col overflow-hidden rounded-lg border bg-black p-[10px] text-m text-[rgb(244_244_244)]", { "minimal-shell-expanding": Be.value }])
            }, [
              S("header", Ym, [
                S("a", Gm, [
                  oe(mc, { class: "h-[23px] w-[197px] max-w-full shrink-0 text-[rgb(244_244_244)]" })
                ]),
                oe(ba, { class: "absolute top-[-3px] right-[1px] h-8 w-[19px] text-[rgb(244_244_244)]" })
              ]),
              Bt(g) >= 2 && nt.value ? (C(), E("figure", {
                key: 0,
                class: ge(["anti-motion-fold block overflow-hidden rounded-[4px]", [
                  { "mt-0 max-h-0 opacity-0": Ir.value },
                  { "duration-[280ms]": zt.value, "duration-[240ms]": !zt.value },
                  { "mt-[20px] max-h-[500px] opacity-100 2xl:max-h-[900px]": !Ir.value }
                ]])
              }, [
                (C(), E("img", {
                  ref_key: "CoverImage",
                  ref: M,
                  key: Yn.value,
                  src: Yn.value,
                  srcset: Pc.value,
                  sizes: zc.value,
                  alt: Mc.value,
                  loading: "eager",
                  decoding: "async",
                  fetchpriority: "high",
                  class: ge(["anti-motion-fade aspect-square w-full rounded-[4px] object-cover", [
                    { "opacity-0": Ir.value || !kt.value },
                    { "duration-[220ms]": zt.value, "duration-150": !zt.value }
                  ]]),
                  onLoad: Vc,
                  onError: Nc
                }, null, 42, Zm))
              ], 2)) : re("", !0),
              S("section", {
                class: ge(["anti-mobile-summary-fold", [
                  { "anti-mobile-summary-fold-collapsed": Oc.value },
                  { "anti-mobile-summary-reveal": Lc.value },
                  { "duration-[280ms]": ut.value, "duration-[240ms]": !ut.value }
                ]])
              }, [
                S("div", Jm, [
                  S("div", Qm, [
                    S("h2", {
                      class: ge(["uppercase transition-opacity duration-200", { "opacity-0": !H.value.title }])
                    }, de((v = H.value) != null && v.title ? H.value.title : " "), 3),
                    S("p", {
                      class: ge(["transition-opacity duration-200", { "opacity-0": !H.value.title }])
                    }, [
                      te.value ? ((R = (b = H.value) == null ? void 0 : b.authors) == null ? void 0 : R.length) > 0 ? (C(), E("span", t0, [
                        h[2] || (h[2] = Ue(" by ")),
                        (C(!0), E(be, null, _t(H.value.authors, (_e, He) => (C(), E(be, null, [
                          _e.externalLink && _e.externalLink != "" ? (C(), E("a", {
                            key: 0,
                            target: "_blank",
                            class: "underline decoration-1 underline-offset-2 hover:opacity-60",
                            href: _e.externalLink,
                            "data-ph-capture": "",
                            "data-ph-component": "antikythera-author",
                            "data-ph-action": "author-link-click",
                            "data-ph-entry": n.entry,
                            "data-ph-person-role": "author",
                            onClick: (Le) => Mi(_e, "author")
                          }, de(_e.title), 9, n0)) : (C(), E("span", o0, de(_e.title), 1)),
                          Ue(de(H.value.authors.length > 1 ? He == H.value.authors.length - 2 ? " & " : He < H.value.authors.length - 2 ? ", " : "" : ""), 1)
                        ], 64))), 256))
                      ])) : re("", !0) : (C(), E("span", e0, h[1] || (h[1] = [
                        S("br", null, null, -1),
                        Ue("  ")
                      ]))),
                      ((se = (L = H.value) == null ? void 0 : L.designers) == null ? void 0 : se.length) > 0 ? (C(), E("span", r0, [
                        h[3] || (h[3] = S("br", null, null, -1)),
                        h[4] || (h[4] = Ue(" with ")),
                        (C(!0), E(be, null, _t(H.value.designers, (_e, He) => (C(), E(be, null, [
                          _e.externalLink && _e.externalLink != "" ? (C(), E("a", {
                            key: 0,
                            target: "_blank",
                            class: "underline decoration-1 underline-offset-2 hover:opacity-60",
                            href: _e.externalLink,
                            "data-ph-capture": "",
                            "data-ph-component": "antikythera-author",
                            "data-ph-action": "author-link-click",
                            "data-ph-entry": n.entry,
                            "data-ph-person-role": "designer",
                            onClick: (Le) => Mi(_e, "designer")
                          }, de(_e.title), 9, a0)) : (C(), E("span", i0, de(_e.title), 1)),
                          Ue(de(H.value.designers.length > 1 ? He == H.value.designers.length - 2 ? " & " : He < H.value.designers.length - 2 ? ", " : "" : ""), 1)
                        ], 64))), 256))
                      ])) : re("", !0)
                    ], 2)
                  ]),
                  !te.value || (me = H.value) != null && me.doi && ((Pe = H.value) == null ? void 0 : Pe.doi) != "" || Mr.value ? (C(), E("aside", {
                    key: 0,
                    class: ge(["anti-motion-fade text-m mt-[20px] flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1", [
                      { "pointer-events-none opacity-0": Ae.value && !ot.value },
                      { "duration-0": ot.value, "duration-[260ms]": !ot.value }
                    ]])
                  }, [
                    S("p", l0, [
                      oe(ba, { class: "h-6 w-4 shrink-0 text-[rgb(244_244_244)]" }),
                      S("span", {
                        class: ge(["min-w-0 truncate whitespace-nowrap transition-opacity duration-200", { "opacity-0": !H.value.title || !H.value.doi || H.value.doi == "" }])
                      }, [
                        h[5] || (h[5] = Ue(" DOI ")),
                        H.value.doiUrl ? (C(), E("a", {
                          key: 0,
                          href: H.value.doiUrl,
                          target: "_blank",
                          class: "hover:opacity-60 cursor-crosshair",
                          "data-ph-capture": "",
                          "data-ph-component": "antikythera-doi",
                          "data-ph-action": "doi-link-click",
                          "data-ph-entry": n.entry,
                          onClick: bu
                        }, de(H.value.doi ? H.value.doi : "XX.XXXX/XXXX.XXXX"), 9, s0)) : (C(), E("span", c0, de(H.value.doi ? H.value.doi : "XX.XXXX/XXXX.XXXX"), 1))
                      ], 2)
                    ]),
                    S("p", u0, de(Mr.value ? Mr.value : " "), 1)
                  ], 2)) : (C(), E("div", d0))
                ])
              ], 2),
              S("div", {
                ref_key: "PrimaryCtaButton",
                ref: z,
                class: ge(["sticker-primary-cta overflow-hidden transition-all duration-150 ease-out", [
                  { "mt-0 max-h-0 opacity-0 pointer-events-none": !hi.value },
                  { "mt-[10px] max-h-[40px] opacity-100 delay-[60ms]": hi.value }
                ]])
              }, [
                oe(To, {
                  variant: "light",
                  "data-ph-capture": "",
                  "data-ph-component": "antikythera-menu",
                  "data-ph-action": Se.value ? "return-to-article" : "menu-expand",
                  "data-ph-entry": n.entry,
                  "data-ph-menu-view": Bt(s),
                  onClick: cu
                }, {
                  default: Gt(() => [
                    Ue(de(Jc.value), 1)
                  ]),
                  _: 1
                }, 8, ["data-ph-action", "data-ph-entry", "data-ph-menu-view"])
              ], 2)
            ], 2),
            Se.value ? (C(), et(Nl, {
              key: 0,
              class: "hidden sm:flex",
              description: Io.value,
              "external-links": $o.value,
              entry: n.entry,
              loaded: le.value,
              "expanded-opening": ut.value,
              "expanded-closing": ot.value,
              onExternalLinkClick: Li
            }, null, 8, ["description", "external-links", "entry", "loaded", "expanded-opening", "expanded-closing"])) : re("", !0)
          ])
        ], 2),
        Se.value ? (C(), E(be, { key: 0 }, [
          oe(Nl, {
            class: ge(["mobile-journal-description mobile-expanded-exit-content col-start-1 col-end-13 row-start-2 w-sticker -translate-x-3 sm:hidden", { "mobile-below-cta-exiting": Tt.value }]),
            description: Io.value,
            "external-links": $o.value,
            entry: n.entry,
            loaded: le.value,
            "natural-height": "",
            "expanded-opening": ut.value,
            "expanded-closing": Tt.value,
            onExternalLinkClick: Li
          }, null, 8, ["class", "description", "external-links", "entry", "loaded", "expanded-opening", "expanded-closing"]),
          S("div", {
            class: ge(["mobile-pdf-preview mobile-expanded-exit-content anti-motion-fold col-start-1 col-end-13 row-start-3 w-sticker -translate-x-3 overflow-hidden sm:hidden", [
              {
                "mobile-below-cta-exiting": Tt.value,
                "duration-[240ms] delay-[24ms]": Tt.value,
                "duration-[220ms]": !Tt.value
              },
              {
                "mt-0 max-h-0 opacity-0 -translate-y-[8px]": ut.value || Tt.value || !Z.value || !fe.value || !pi.value
              },
              {
                "mt-[10px] max-h-[900px] opacity-100 translate-y-0 delay-[140ms]": !ut.value && !Tt.value && Z.value && fe.value && pi.value
              }
            ]])
          }, [
            oe(Za, {
              entry: H.value,
              "download-file-type": fi.value,
              "image-loading": "eager",
              "image-fetch-priority": "high",
              onDownload: zi
            }, null, 8, ["entry", "download-file-type"])
          ], 2),
          S("section", {
            ref_key: "ExpandedScrollport",
            ref: x,
            class: ge(["expanded-scrollport expanded-details-column mobile-expanded-exit-content anti-motion-slide pointer-events-auto z-10 col-start-1 col-end-13 row-start-4 min-w-0 overflow-y-scroll text-white hidden_scroll sm:col-start-7 sm:col-end-13 sm:row-start-1 sm:-ml-3 sm:w-[calc(100%+var(--fontSize)*1.5)] sm:px-3 lg:col-start-4 lg:col-end-13", [
              {
                "mobile-expanded-exit-content-closing": Tt.value,
                "duration-[220ms]": !Tt.value
              },
              { "opacity-0 -translate-y-[12px]": ut.value || !Z.value || !fe.value },
              { "sm:opacity-0 sm:-translate-y-[12px] sm:duration-[220ms] sm:delay-[32ms]": Tt.value },
              {
                "opacity-100 translate-y-0 delay-[80ms]": !ut.value && !Tt.value && Z.value && fe.value
              },
              { "snap-y snap-mandatory": Re.value, "snap-none": !Re.value }
            ]]),
            onScroll: Ri
          }, [
            S("div", f0, [
              S("div", {
                ref_key: "ExpandedBeforeRelated",
                ref: U,
                class: ge(["expanded-before-related flex w-full snap-start flex-col lg:col-span-9 lg:col-start-1", { "snap-always": Re.value }])
              }, [
                S("div", p0, [
                  oe(Am, {
                    entry: H.value,
                    loaded: Z.value,
                    "load-error": ue.value,
                    class: "lg:col-span-6 lg:col-start-1",
                    onSectionCollapse: mu
                  }, null, 8, ["entry", "loaded", "load-error"]),
                  S("div", h0, [
                    oe(Eh, {
                      entry: H.value,
                      loaded: Z.value,
                      "load-error": ue.value,
                      "download-file-type": fi.value,
                      class: "lg:sticky lg:top-0 lg:self-start",
                      onDownload: zi
                    }, null, 8, ["entry", "loaded", "load-error", "download-file-type"])
                  ])
                ]),
                h[6] || (h[6] = S("div", { class: "min-h-0 flex-1" }, null, -1))
              ], 2),
              oe(ig, {
                ref_key: "RelatedArticles",
                ref: Q,
                entry: H.value,
                loaded: Z.value,
                "load-error": ue.value,
                expanded: Ce.value,
                class: ge(["expanded-related-page flex snap-start flex-col lg:col-span-9 lg:col-start-1", { "snap-always": Re.value }]),
                onToggle: vu
              }, null, 8, ["entry", "loaded", "load-error", "expanded", "class"]),
              oe(Ag, {
                ref_key: "AboutSectionTarget",
                ref: w,
                about: Ja.value,
                expanded: st.value,
                class: ge(["expanded-about-page snap-start lg:col-span-9 lg:col-start-1", { "snap-always": Re.value }]),
                onToggle: yu
              }, null, 8, ["about", "expanded", "class"])
            ])
          ], 34)
        ], 64)) : re("", !0),
        oe(Gf, {
          appear: "",
          "enter-active-class": "anti-motion-slide duration-200",
          "enter-from-class": "opacity-0 -translate-y-[8px]",
          "enter-to-class": "opacity-100 translate-y-0",
          "leave-active-class": "anti-motion-slide duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 -translate-y-[6px]",
          onAfterEnter: Hi,
          onAfterAppear: Hi
        }, {
          default: Gt(() => [
            !Se.value && !V.value && Tr.value && Lr.value ? (C(), E("aside", g0, [
              oe(Om, {
                ref_key: "AnnotationAttributionCard",
                ref: q,
                modelValue: en.value,
                "onUpdate:modelValue": h[0] || (h[0] = (_e) => en.value = _e),
                label: Lr.value,
                onToggle: yi
              }, null, 8, ["modelValue", "label"])
            ])) : re("", !0)
          ]),
          _: 1
        }),
        Bt(s) != 2 && (!Mo.value || en.value) && ((Ne = pt.value) == null ? void 0 : Ne.length) > 0 ? (C(), et(bp, {
          key: 1,
          name: "annotation-list",
          tag: "section",
          style: Sn(j.value),
          class: ge(["anti-motion-slide col-start-1 col-end-13 sm:col-end-7 lg:col-end-4 w-sticker -translate-x-3 max-h-sansSticker overflow-y-auto overscroll-contain pointer-events-auto hidden_scroll rounded-t-[8px] flex flex-col duration-150", { "opacity-0 -translate-y-[6px]": ut.value, "opacity-100 translate-y-0": !ut.value }])
        }, {
          default: Gt(() => [
            (C(!0), E(be, null, _t(ei.value, (_e, He) => {
              var Le;
              return C(), et(Rm, {
                key: _e.id,
                annotation: _e,
                articleAttributionVisibility: ((Le = H.value) == null ? void 0 : Le.annotationVisibility) ?? !0,
                view: Bt(s),
                isMobile: G.value,
                style: Sn({ zIndex: ei.value.length - He }),
                onClose: ou
              }, null, 8, ["annotation", "articleAttributionVisibility", "view", "isMobile", "style"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["style", "class"])) : re("", !0),
        oe(Bm, { visible: Sr.value }, null, 8, ["visible"])
      ], 38);
    };
  }
}, w0 = /* @__PURE__ */ Eo(b0, [["styles", [Km, Wm]], ["__scopeId", "data-v-5bbf1db8"]]), x0 = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.richtext *+h1{margin-top:1.28em}.richtext *+h2{margin-top:1.28em}.richtext *+ol{margin-top:1.28em}.richtext *+p{margin-top:1.28em}.richtext *+ul{margin-top:1.28em}.richtext a:hover{opacity:.6}.richtext a{text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:2px}.richtext li{padding-left:0}.richtext ol{list-style-type:decimal;padding-left:calc(var(--fontSize) * 1)}.richtext ul{list-style-type:disc;padding-left:calc(var(--fontSize) * 1)}@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none){.richtext ol,.richtext ul{padding-left:calc(var(--fontSize) * 1.5)}}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.collapse{visibility:collapse}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-\\[\\.95em\\]{right:-.95em}.bottom-\\[\\.15em\\]{bottom:.15em}.left-0{left:0}.left-\\[2px\\]{left:2px}.right-3{right:calc(var(--fontSize) * .75)}.right-\\[1px\\]{right:1px}.top-0{top:0}.top-1\\/2{top:50%}.top-3{top:calc(var(--fontSize) * .75)}.top-\\[-3px\\]{top:-3px}.top-\\[2px\\]{top:2px}.isolate{isolation:isolate}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-\\[1000\\]{z-index:1000}.z-\\[2000\\]{z-index:2000}.z-\\[999\\]{z-index:999}.order-1{order:1}.order-2{order:2}.order-3{order:3}.col-span-1{grid-column:span 1 / span 1}.col-span-12{grid-column:span 12 / span 12}.col-span-2{grid-column:span 2 / span 2}.col-span-3{grid-column:span 3 / span 3}.col-span-6{grid-column:span 6 / span 6}.col-start-1{grid-column-start:1}.col-end-13{grid-column-end:13}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.row-start-4{grid-row-start:4}.-mx-3{margin-left:calc(calc(var(--fontSize) * .75) * -1);margin-right:calc(calc(var(--fontSize) * .75) * -1)}.mx-1{margin-left:calc(var(--fontSize) * .25);margin-right:calc(var(--fontSize) * .25)}.mx-auto{margin-left:auto;margin-right:auto}.-mb-3{margin-bottom:calc(calc(var(--fontSize) * .75) * -1)}.mb-3{margin-bottom:calc(var(--fontSize) * .75)}.mb-4{margin-bottom:calc(var(--fontSize) * 1)}.mb-\\[10px\\]{margin-bottom:10px}.ml-auto{margin-left:auto}.mr-0{margin-right:0}.mr-0\\.5{margin-right:.125rem}.mt-0{margin-top:0}.mt-1{margin-top:calc(var(--fontSize) * .25)}.mt-3{margin-top:calc(var(--fontSize) * .75)}.mt-\\[1\\.28em\\]{margin-top:1.28em}.mt-\\[10px\\]{margin-top:10px}.mt-\\[20px\\]{margin-top:20px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.\\!block{display:block!important}.block{display:block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.\\!hidden{display:none!important}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-10{height:calc(var(--fontSize) * 2.5)}.h-2{height:calc(var(--fontSize) * .5)}.h-6{height:calc(var(--fontSize) * 1.5)}.h-8{height:calc(var(--fontSize) * 2)}.h-\\[\\.7em\\]{height:.7em}.h-\\[100dvh\\]{height:100dvh}.h-\\[16px\\]{height:16px}.h-\\[20px\\]{height:20px}.h-\\[23px\\]{height:23px}.h-full{height:100%}.max-h-0{max-height:0}.max-h-\\[1200px\\]{max-height:1200px}.max-h-\\[15svh\\]{max-height:15svh}.max-h-\\[260px\\]{max-height:260px}.max-h-\\[40px\\]{max-height:40px}.max-h-\\[500px\\]{max-height:500px}.max-h-\\[900px\\]{max-height:900px}.max-h-sansSticker{max-height:var(--sansSticker)}.min-h-0{min-height:0}.min-h-\\[1\\.28em\\]{min-height:1.28em}.min-h-\\[220px\\]{min-height:220px}.min-h-\\[calc\\(1\\.28em\\*3\\)\\]{min-height:3.84em}.min-h-full{min-height:100%}.w-1\\/2{width:50%}.w-10{width:calc(var(--fontSize) * 2.5)}.w-12{width:calc(var(--fontSize) * 3)}.w-3\\/4{width:75%}.w-4{width:calc(var(--fontSize) * 1)}.w-\\[\\.7em\\]{width:.7em}.w-\\[121px\\]{width:121px}.w-\\[16px\\]{width:16px}.w-\\[197px\\]{width:197px}.w-\\[19px\\]{width:19px}.w-\\[36px\\]{width:36px}.w-auto{width:auto}.w-full{width:100%}.w-sticker{width:var(--sticker)}.min-w-0{min-width:0}.min-w-full{min-width:100%}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-3\\/4{flex-basis:75%}.basis-full{flex-basis:100%}.-translate-x-3{--tw-translate-x: calc(calc(var(--fontSize) * .75) * -1);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[11\\.25em\\]{--tw-translate-x: -11.25em;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[12px\\]{--tw-translate-y: -12px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[6px\\]{--tw-translate-y: -6px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[8px\\]{--tw-translate-y: -8px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[16px\\]{--tw-translate-x: 16px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-crosshair{cursor:crosshair}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.snap-none{scroll-snap-type:none}.snap-y{scroll-snap-type:y var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness: mandatory}.snap-start{scroll-snap-align:start}.snap-always{scroll-snap-stop:always}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-rows-\\[auto_auto\\]{grid-template-rows:auto auto}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:calc(var(--fontSize) * .5)}.gap-3{gap:calc(var(--fontSize) * .75)}.gap-6{gap:calc(var(--fontSize) * 1.5)}.gap-9{gap:calc(var(--fontSize) * 2.25)}.gap-\\[10px\\]{gap:10px}.gap-\\[20px\\]{gap:20px}.gap-x-3{-moz-column-gap:calc(var(--fontSize) * .75);column-gap:calc(var(--fontSize) * .75)}.gap-x-6{-moz-column-gap:calc(var(--fontSize) * 1.5);column-gap:calc(var(--fontSize) * 1.5)}.gap-y-1{row-gap:calc(var(--fontSize) * .25)}.gap-y-3{row-gap:calc(var(--fontSize) * .75)}.gap-y-\\[10px\\]{row-gap:10px}.overflow-hidden{overflow:hidden}.\\!overflow-y-auto{overflow-y:auto!important}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.overflow-y-scroll{overflow-y:scroll}.overscroll-contain{overscroll-behavior:contain}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded-\\[11px\\]{border-radius:11px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[8px\\]{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:calc(var(--fontSize) * .5)}.rounded-t-\\[8px\\]{border-top-left-radius:8px;border-top-right-radius:8px}.\\!border-0{border-width:0px!important}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-\\[rgba\\(204\\,204\\,204\\,0\\.2\\)\\]{border-color:#ccc3}.border-stroke-dark{border-color:var(--stroke-dark)}.border-stroke-light{border-color:var(--stroke-light)}.\\!bg-transparent{background-color:transparent!important}.bg-\\[\\#F2F2F2\\]{--tw-bg-opacity: 1;background-color:rgb(242 242 242 / var(--tw-bg-opacity, 1))}.bg-\\[\\#ff5a01\\]{--tw-bg-opacity: 1;background-color:rgb(255 90 1 / var(--tw-bg-opacity, 1))}.bg-\\[color-mix\\(in_srgb\\,var\\(--white\\)_16\\%\\,var\\(--black\\)\\)\\]{background-color:color-mix(in srgb,var(--white) 16%,var(--black))}.bg-\\[rgba\\(204\\,204\\,204\\,0\\.2\\)\\]{background-color:#ccc3}.bg-black{background-color:var(--black)}.bg-blue-200{--tw-bg-opacity: 1;background-color:rgb(191 219 254 / var(--tw-bg-opacity, 1))}.bg-white{background-color:var(--white)}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-top{-o-object-position:top;object-position:top}.\\!p-0{padding:0!important}.p-3{padding:calc(var(--fontSize) * .75)}.p-\\[10px\\]{padding:10px}.px-3{padding-left:calc(var(--fontSize) * .75);padding-right:calc(var(--fontSize) * .75)}.px-6{padding-left:calc(var(--fontSize) * 1.5);padding-right:calc(var(--fontSize) * 1.5)}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.py-3{padding-top:calc(var(--fontSize) * .75);padding-bottom:calc(var(--fontSize) * .75)}.py-\\[10px\\]{padding-top:10px;padding-bottom:10px}.py-\\[4px\\]{padding-top:4px;padding-bottom:4px}.pb-0{padding-bottom:0}.pb-3{padding-bottom:calc(var(--fontSize) * .75)}.pb-9{padding-bottom:calc(var(--fontSize) * 2.25)}.pb-\\[10px\\]{padding-bottom:10px}.pl-3{padding-left:calc(var(--fontSize) * .75)}.pl-\\[1px\\]{padding-left:1px}.pr-12{padding-right:calc(var(--fontSize) * 3)}.pr-2{padding-right:calc(var(--fontSize) * .5)}.pr-3{padding-right:calc(var(--fontSize) * .75)}.pr-8{padding-right:calc(var(--fontSize) * 2)}.pr-\\[48px\\]{padding-right:48px}.pt-3{padding-top:calc(var(--fontSize) * .75)}.pt-6{padding-top:calc(var(--fontSize) * 1.5)}.pt-\\[10px\\]{padding-top:10px}.pt-\\[1px\\]{padding-top:1px}.pt-\\[20px\\]{padding-top:20px}.text-left{text-align:left}.text-right{text-align:right}.font-sans{font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif}.text-m{font-size:var(--fontSize);line-height:1.28;letter-spacing:0em}.text-s{font-size:var(--smallFontSize);line-height:1.2;letter-spacing:0em}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.leading-\\[1\\.1\\]{line-height:1.1}.leading-\\[1\\.25\\]{line-height:1.25}.text-\\[\\#f4f4f4\\]{--tw-text-opacity: 1;color:rgb(244 244 244 / var(--tw-text-opacity, 1))}.text-\\[color-mix\\(in_srgb\\,var\\(--black\\)_50\\%\\,transparent\\)\\]{color:color-mix(in srgb,var(--black) 50%,transparent)}.text-\\[color-mix\\(in_srgb\\,var\\(--white\\)_50\\%\\,transparent\\)\\]{color:color-mix(in srgb,var(--white) 50%,transparent)}.text-\\[rgb\\(244_244_244\\)\\]{--tw-text-opacity: 1;color:rgb(244 244 244 / var(--tw-text-opacity, 1))}.text-\\[rgb\\(244_244_244_\\/_0\\.5\\)\\]{color:#f4f4f480}.text-black{color:var(--black)}.text-white{color:var(--white)}.underline{text-decoration-line:underline}.decoration-1{text-decoration-thickness:1px}.underline-offset-2{text-underline-offset:2px}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.delay-100{transition-delay:.1s}.delay-\\[140ms\\]{transition-delay:.14s}.delay-\\[24ms\\]{transition-delay:24ms}.delay-\\[40ms\\]{transition-delay:40ms}.delay-\\[60ms\\]{transition-delay:60ms}.delay-\\[80ms\\]{transition-delay:80ms}.duration-0{transition-duration:0s}.duration-100{transition-duration:.1s}.duration-150{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.duration-\\[200ms\\]{transition-duration:.2s}.duration-\\[220ms\\]{transition-duration:.22s}.duration-\\[240ms\\]{transition-duration:.24s}.duration-\\[260ms\\]{transition-duration:.26s}.duration-\\[280ms\\]{transition-duration:.28s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}:host{font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.2;--fontSize: 14px;--insetsvh: calc(100svh - (var(--fontSize) * 1.5));--insetsvw: calc(100vw - var(--fontSize));--fullwidth: calc(100% + var(--fontSize));--sticker: calc(100% + (var(--fontSize) * 1.5));--col1: calc((25% - ((var(--fontSize) * 6) / 4)));--col2: calc((50% - (var(--fontSize) * 2 / 2)));--col3: calc((100vw - (var(--fontSize) * 5)) * .75);--sansSticker: calc(100svh - (var(--fontSize) * 20));--smallFontSize: calc(.857 * var(--fontSize));--black: #000;--white: #fff;--gray: #e7e7e7;--darkgray: #444444;--graytext: #686868;--stroke-light: rgba(204, 204, 204, .2);--stroke-dark: rgba(204, 204, 204, .4);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media screen and (max-width: 768px){:host{--insetsvh: calc(100dvh - var(--fontSize))}}@media screen and (min-width: 1000px){:host{font-size:14px;--fontSize: 14px}}@media screen and (min-width: 1200px){:host{font-size:14px;--fontSize: 14px}}@media screen and (min-width: 1450px){:host{font-size:15px;--fontSize: 15px}}@media screen and (min-width: 1650px){:host{font-size:16px;--fontSize: 16px}}@media screen and (min-width: 1850px){:host{font-size:18px;--fontSize: 18px}}@media screen and (min-width: 2050px){:host{font-size:20px;--fontSize: 20px}}@media screen and (min-width: 2250px){:host{font-size:22px;--fontSize: 22px}}@media screen and (min-width: 2450px){:host{font-size:24px;--fontSize: 24px}}@media screen and (min-width: 2650px){:host{font-size:26px;--fontSize: 26px}}@media screen and (min-width: 2850px){:host{font-size:28px;--fontSize: 28px}}@media screen and (min-width: 3050px){:host{font-size:30px;--fontSize: 30px}}.hidden_scroll::-webkit-scrollbar{display:none}.hidden_scroll{scrollbar-width:none;-ms-overflow-style:none}.transition-allowdiscrete{transition-behavior:allow-discrete}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:-left-2:before{content:var(--tw-content);left:calc(calc(var(--fontSize) * .5) * -1)}.before\\:-top-6:before{content:var(--tw-content);top:calc(calc(var(--fontSize) * 1.5) * -1)}.before\\:h-16:before{content:var(--tw-content);height:calc(var(--fontSize) * 4)}.before\\:w-fullwidth:before{content:var(--tw-content);width:var(--fullwidth)}.before\\:bg-gradient-to-b:before{content:var(--tw-content);background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.before\\:from-black:before{content:var(--tw-content);--tw-gradient-from: var(--black) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:from-70\\%:before{content:var(--tw-content);--tw-gradient-from-position: 70%}.after\\:pointer-events-none:after{content:var(--tw-content);pointer-events:none}.after\\:invisible:after{content:var(--tw-content);visibility:hidden}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:right-0:after{content:var(--tw-content);right:0}.after\\:box-content:after{content:var(--tw-content);box-sizing:content-box}.after\\:bg-gradient-to-l:after{content:var(--tw-content);background-image:linear-gradient(to left,var(--tw-gradient-stops))}.after\\:from-black:after{content:var(--tw-content);--tw-gradient-from: var(--black) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\\:from-90\\%:after{content:var(--tw-content);--tw-gradient-from-position: 90%}.after\\:pl-2:after{content:var(--tw-content);padding-left:calc(var(--fontSize) * .5)}.first\\:ml-0:first-child{margin-left:0}.last\\:mb-0:last-child{margin-bottom:0}.last\\:mr-0:last-child{margin-right:0}.last\\:border-b-0:last-child{border-bottom-width:0px}@media (hover: hover) and (pointer: fine){.hover\\:scale-\\[0\\.99\\]:hover{--tw-scale-x: .99;--tw-scale-y: .99;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:opacity-60:hover{opacity:.6}.hover\\:duration-100:hover{transition-duration:.1s}.group:hover .group-hover\\:opacity-100{opacity:1}.group:hover .group-hover\\:delay-100{transition-delay:.1s}.peer:hover~.peer-hover\\:opacity-0{opacity:0}.peer:hover~.peer-hover\\:delay-0{transition-delay:0s}}@media (min-width: 640px){.sm\\:absolute{position:absolute}.sm\\:bottom-3{bottom:calc(var(--fontSize) * .75)}.sm\\:left-3{left:calc(var(--fontSize) * .75)}.sm\\:right-3{right:calc(var(--fontSize) * .75)}.sm\\:top-3{top:calc(var(--fontSize) * .75)}.sm\\:col-span-2{grid-column:span 2 / span 2}.sm\\:col-span-3{grid-column:span 3 / span 3}.sm\\:col-span-6{grid-column:span 6 / span 6}.sm\\:col-start-7{grid-column-start:7}.sm\\:col-end-13{grid-column-end:13}.sm\\:col-end-7{grid-column-end:7}.sm\\:row-start-1{grid-row-start:1}.sm\\:-ml-3{margin-left:calc(calc(var(--fontSize) * .75) * -1)}.sm\\:mb-0{margin-bottom:0}.sm\\:mt-0{margin-top:0}.sm\\:mt-2{margin-top:calc(var(--fontSize) * .5)}.sm\\:block{display:block}.sm\\:inline{display:inline}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:h-6{height:calc(var(--fontSize) * 1.5)}.sm\\:w-6{width:calc(var(--fontSize) * 1.5)}.sm\\:w-8{width:calc(var(--fontSize) * 2)}.sm\\:w-\\[calc\\(100\\%\\+var\\(--fontSize\\)\\*1\\.5\\)\\]{width:calc(100% + var(--fontSize) * 1.5)}.sm\\:w-auto{width:auto}.sm\\:basis-col1{flex-basis:var(--col1)}.sm\\:basis-col2{flex-basis:var(--col2)}.sm\\:-translate-y-\\[12px\\]{--tw-translate-y: -12px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sm\\:flex-wrap{flex-wrap:wrap}.sm\\:gap-2{gap:calc(var(--fontSize) * .5)}.sm\\:gap-x-9{-moz-column-gap:calc(var(--fontSize) * 2.25);column-gap:calc(var(--fontSize) * 2.25)}.sm\\:overflow-hidden{overflow:hidden}.sm\\:px-3{padding-left:calc(var(--fontSize) * .75);padding-right:calc(var(--fontSize) * .75)}.sm\\:pt-0{padding-top:0}.sm\\:text-m{font-size:var(--fontSize);line-height:1.28;letter-spacing:0em}.sm\\:decoration-2{text-decoration-thickness:2px}.sm\\:underline-offset-4{text-underline-offset:4px}.sm\\:opacity-0{opacity:0}.sm\\:delay-\\[32ms\\]{transition-delay:32ms}.sm\\:duration-\\[220ms\\]{transition-duration:.22s}.sm\\:before\\:hidden:before{content:var(--tw-content);display:none}.sm\\:after\\:visible:after{content:var(--tw-content);visibility:visible}.sm\\:after\\:h-8:after{content:var(--tw-content);height:calc(var(--fontSize) * 2)}.sm\\:after\\:w-full:after{content:var(--tw-content);width:100%}}@media (min-width: 768px){.md\\:mt-2{margin-top:calc(var(--fontSize) * .5)}.md\\:grid-cols-\\[repeat\\(2\\,minmax\\(auto\\,1fr\\)\\)\\]{grid-template-columns:repeat(2,minmax(auto,1fr))}.md\\:pl-3{padding-left:calc(var(--fontSize) * .75)}.md\\:opacity-0{opacity:0}}@media (min-width: 1024px){.lg\\:absolute{position:absolute}.lg\\:sticky{position:sticky}.lg\\:right-0{right:0}.lg\\:top-0{top:0}.lg\\:col-span-3{grid-column:span 3 / span 3}.lg\\:col-span-6{grid-column:span 6 / span 6}.lg\\:col-span-9{grid-column:span 9 / span 9}.lg\\:col-start-1{grid-column-start:1}.lg\\:col-start-4{grid-column-start:4}.lg\\:col-start-7{grid-column-start:7}.lg\\:col-end-13{grid-column-end:13}.lg\\:col-end-4{grid-column-end:4}.lg\\:-mx-3{margin-left:calc(calc(var(--fontSize) * .75) * -1);margin-right:calc(calc(var(--fontSize) * .75) * -1)}.lg\\:mr-1{margin-right:calc(var(--fontSize) * .25)}.lg\\:line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:h-8{height:calc(var(--fontSize) * 2)}.lg\\:h-fit{height:-moz-fit-content;height:fit-content}.lg\\:h-full{height:100%}.lg\\:max-h-\\[20svh\\]{max-height:20svh}.lg\\:min-h-\\[calc\\(1\\.28em\\*4\\)\\]{min-height:5.12em}.lg\\:w-10{width:calc(var(--fontSize) * 2.5)}.lg\\:w-8{width:calc(var(--fontSize) * 2)}.lg\\:w-\\[calc\\(\\(100\\%-var\\(--fontSize\\)\\*18\\)\\/3\\+var\\(--fontSize\\)\\*4\\.5\\)\\]{width:calc((100% - var(--fontSize) * 18) / 3 + var(--fontSize) * 4.5)}.lg\\:w-\\[calc\\(100\\%\\+var\\(--fontSize\\)\\*1\\.5\\)\\]{width:calc(100% + var(--fontSize) * 1.5)}.lg\\:w-\\[calc\\(50\\%-var\\(--fontSize\\)\\)\\]{width:calc(50% - var(--fontSize))}.lg\\:w-auto{width:auto}.lg\\:flex-1{flex:1 1 0%}.lg\\:basis-\\[calc\\(70vh-7\\.5rem\\)\\]{flex-basis:calc(70vh - 7.5rem)}.lg\\:grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:flex-col{flex-direction:column}.lg\\:flex-nowrap{flex-wrap:nowrap}.lg\\:items-stretch{align-items:stretch}.lg\\:gap-6{gap:calc(var(--fontSize) * 1.5)}.lg\\:gap-x-9{-moz-column-gap:calc(var(--fontSize) * 2.25);column-gap:calc(var(--fontSize) * 2.25)}.lg\\:self-start{align-self:flex-start}.lg\\:pb-\\[48px\\]{padding-bottom:48px}.lg\\:pt-0{padding-top:0}.lg\\:last\\:pb-4:last-child{padding-bottom:calc(var(--fontSize) * 1)}@media (hover: hover) and (pointer: fine){.group:hover .lg\\:group-hover\\:opacity-100{opacity:1}}}@media (min-width: 1280px){.xl\\:line-clamp-6{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6}.xl\\:h-10{height:calc(var(--fontSize) * 2.5)}.xl\\:min-h-\\[calc\\(1\\.28em\\*6\\)\\]{min-height:7.68em}.xl\\:w-10{width:calc(var(--fontSize) * 2.5)}.xl\\:w-12{width:calc(var(--fontSize) * 3)}.xl\\:gap-6{gap:calc(var(--fontSize) * 1.5)}}@media (min-width: 1536px){.\\32xl\\:max-h-\\[900px\\]{max-height:900px}}.\\[\\&_a\\:hover\\]\\:opacity-60 a:hover{opacity:.6}.\\[\\&_a\\]\\:underline a{text-decoration-line:underline}.\\[\\&_a\\]\\:decoration-1 a{text-decoration-thickness:1px}.\\[\\&_a\\]\\:underline-offset-2 a{text-underline-offset:2px}.\\[\\&_p\\+p\\]\\:mt-5 p+p{margin-top:calc(var(--fontSize) * 1.25)}.\\[\\&_p\\+p\\]\\:mt-\\[1\\.28em\\] p+p{margin-top:1.28em}.\\[\\&_p\\+p\\]\\:mt-\\[10px\\] p+p{margin-top:10px}', Rc = (e, t = 0) => {
  const n = Array.isArray(e.styles) ? [...e.styles] : [];
  return n.splice(t, 0, x0), e.styles = n, e;
}, _0 = /* @__PURE__ */ dc(Rc(w0, 1)), k0 = "", C0 = {
  key: 0,
  class: "grid grid-cols-6 w-full lg:w-[calc(50%-var(--fontSize))] gap-9 pt-6 justify-center mx-auto"
}, S0 = ["href", "data-ph-entry", "data-ph-credit-format", "onClick"], T0 = { key: 1 }, E0 = {
  key: 0,
  class: "[&_p+p]:mt-[1.28em] mt-[1.28em]"
}, A0 = {
  key: 0,
  class: "[&_p+p]:mt-[1.28em] mt-[1.28em]"
}, I0 = ["data-ph-entry"], $0 = {
  __name: "AntikytheraFooterComponent.ce",
  props: {
    entry: String,
    environment: {
      type: String,
      default: "production"
    },
    apiUrl: String,
    theme: {
      type: String,
      default: "dark"
    },
    apiBackgroundColor: String,
    apiForegroundColor: String,
    menuName: {
      type: String,
      default: "antikythera-menu"
    },
    scrollTop: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, { getSettings: n, getEntry: o } = Sa({ entry: t.entry, environment: t.environment, apiUrl: t.apiUrl }), r = X(!1), a = X(null), i = Y(() => {
      var u, d;
      return gc({
        theme: t.theme,
        backgroundColor: t.apiBackgroundColor || ((u = a.value) == null ? void 0 : u.apiBackgroundColor),
        foregroundColor: t.apiForegroundColor || ((d = a.value) == null ? void 0 : d.apiForegroundColor)
      });
    }), l = (u) => {
      if (u)
        try {
          return new URL(u, window.location.origin).hostname;
        } catch {
          return;
        }
    }, s = () => {
      ce("antikythera footer scroll top clicked", {
        antikythera_entry: t.entry || void 0
      }), window.scrollTo({ top: 0, behavior: "smooth" });
    }, f = (u) => {
      var d;
      ce("antikythera credit link clicked", {
        antikythera_entry: t.entry || void 0,
        credit_title: (u == null ? void 0 : u.title) || void 0,
        credit_format: (u == null ? void 0 : u.format) || void 0,
        credit_is_contributor: !!(u != null && u.isContributor),
        credit_person_name: ((d = u == null ? void 0 : u.person) == null ? void 0 : d.title) || void 0,
        credit_external_domain: l(u == null ? void 0 : u.externalLink)
      });
    };
    return Co(async () => {
      var u, d, g, y, k, T, B;
      if (t.entry) {
        const x = await o();
        x != null && x.error && ce("antikythera footer entry load error", {
          antikythera_entry: t.entry || void 0,
          error_message: x.error
        }), r.value = ((d = (u = x == null ? void 0 : x.entry) == null ? void 0 : u.annotations) == null ? void 0 : d.length) > 0, a.value = x == null ? void 0 : x.entry, ce("antikythera footer loaded", {
          antikythera_entry: t.entry || void 0,
          entry_title: ((g = x == null ? void 0 : x.entry) == null ? void 0 : g.title) || void 0,
          annotations_count: ((k = (y = x == null ? void 0 : x.entry) == null ? void 0 : y.annotations) == null ? void 0 : k.length) || 0,
          credits_count: ((B = (T = x == null ? void 0 : x.entry) == null ? void 0 : T.creditsList) == null ? void 0 : B.length) || 0
        });
      } else
        console.warn("antikythera footer skipped: no entry slug provided");
    }), (u, d) => {
      var g, y, k, T, B;
      return C(), E("footer", {
        class: ge(["relative w-full z-[999] bg-black text-white rounded-[8px] w-sticker py-3 px-3 -translate-x-3 border border-stroke-light mb-3 box-border", [{ "!hidden": !r.value && ((y = (g = a.value) == null ? void 0 : g.creditsList) == null ? void 0 : y.length) <= 0 }, { "pb-9": !r.value }]]),
        style: Sn(i.value)
      }, [
        ((T = (k = a.value) == null ? void 0 : k.creditsList) == null ? void 0 : T.length) > 0 ? (C(), E("section", C0, [
          (C(!0), E(be, null, _t((B = a.value) == null ? void 0 : B.creditsList, (x, U) => {
            var Q, w, z, ee, M;
            return C(), E("article", {
              class: ge(["", [{ "col-span-6 sm:col-span-3 w-full": x.format == "half" }, { "col-span-3 sm:col-span-2 w-full": x.format == "quarter" }]])
            }, [
              S("h2", null, de(x.title), 1),
              x.isContributor ? (C(), E(be, { key: 0 }, [
                S("h3", null, [
                  x.externalLink && x.externalLink != "" ? (C(), E("a", {
                    key: 0,
                    href: x.externalLink,
                    target: "_blank",
                    class: "underline underline-offset-4 decoration-1 sm:underline-offset-4 sm:decoration-2 hover:opacity-60",
                    "data-ph-capture": "",
                    "data-ph-component": "antikythera-footer",
                    "data-ph-action": "credit-link-click",
                    "data-ph-entry": t.entry,
                    "data-ph-credit-format": x.format,
                    onClick: (q) => f(x)
                  }, [
                    S("strong", null, de((Q = x == null ? void 0 : x.person) == null ? void 0 : Q.title), 1)
                  ], 8, S0)) : (C(), E("strong", T0, de((w = x == null ? void 0 : x.person) == null ? void 0 : w.title), 1))
                ]),
                (z = x == null ? void 0 : x.person) != null && z.biography ? (C(), E("div", E0, [
                  oe(Bt(ur), {
                    value: (ee = x == null ? void 0 : x.person) != null && ee.biography ? (M = x == null ? void 0 : x.person) == null ? void 0 : M.biography : []
                  }, null, 8, ["value"])
                ])) : re("", !0)
              ], 64)) : (C(), E(be, { key: 1 }, [
                x != null && x.custom ? (C(), E("div", A0, [
                  oe(Bt(ur), {
                    value: x != null && x.custom ? x == null ? void 0 : x.custom : []
                  }, null, 8, ["value"])
                ])) : re("", !0)
              ], 64))
            ], 2);
          }), 256))
        ])) : re("", !0),
        e.scrollTop ? (C(), E("button", {
          key: 1,
          onClick: s,
          class: "text-left col-span-12 sm:absolute sm:bottom-3 sm:left-3 text-xs text-black hover:opacity-60",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-footer",
          "data-ph-action": "scroll-top",
          "data-ph-entry": t.entry
        }, " ↑ Back to top ", 8, I0)) : re("", !0)
      ], 6);
    };
  }
}, R0 = /* @__PURE__ */ Eo($0, [["styles", [k0]]]), P0 = /* @__PURE__ */ dc(Rc(R0, 0)), _a = "2.0.3-rc.260722";
console.info(`Antikythera API v${_a}`);
class z0 {
  constructor({
    entry: t = "",
    token: n = "",
    // tbd
    menuName: o = "antikythera-menu",
    footerName: r = "antikythera-footer",
    annotationClass: a = ".annotation",
    manual: i = !1,
    environment: l = "production",
    apiUrl: s = void 0,
    customCss: f = !1,
    detectAnnotationsOnInit: u = !0,
    analytics: d = !0
  } = {}) {
    Gl({
      analytics: d,
      entry: t,
      environment: l,
      apiUrl: s,
      packageVersion: _a,
      explicit: !0
    }), customElements.get(o) || customElements.define(o, _0), customElements.get(r) || customElements.define(r, P0);
    const { entryId: g, getSettings: y, getEntry: k, getEntryMeta: T, getAnnotations: B, init: x, reinit: U, detectAnnotations: Q } = Sa({
      entry: t,
      environment: l,
      apiUrl: s,
      customCss: f,
      analytics: d,
      packageVersion: _a
    });
    this.entryId = g, this.getSettings = y, this.getEntry = k, this.getEntryMeta = T, this.getAnnotations = B, this.init = x, this.reinit = U, this.detectAnnotations = Q, this.captureAnalyticsEvent = ce, i || this.init({ menuName: o, annotationClass: a, detectAnnotationsOnInit: u });
  }
}
export {
  z0 as Antikythera,
  P0 as AntikytheraFooter,
  _0 as AntikytheraMenu
};
