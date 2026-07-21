const kr = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_NITRO_SERVER_PORT: "3030", VITE_POSTHOG_HOST: "https://us.i.posthog.com", VITE_POSTHOG_PROJECT_API_KEY: "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz" }, Fc = "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz", Dc = "https://k.antikythera.org", jc = "https://us.posthog.com", Uc = "https://api.antikythera.org", Kc = 100, gi = [
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
], qc = {
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
}, Wc = "attr__data-ph-";
let Fe = null, Mn = null, Wo = !1, Sn = !1, mi = !1, be = null, ia = {}, vi = !1, Kn = null, nr = null, la = 0, _l = 0;
const Cr = /* @__PURE__ */ new Set(), so = [], Hn = (e) => {
  if (!(typeof globalThis > "u"))
    return globalThis[e];
}, No = (e) => kr == null ? void 0 : kr[e], Xc = (e) => e || Hn("__ANTIKYTHERA_API_URL__") || No("VITE_NITRO_SERVER") || Hn("__ANTIKYTHERA_TEST_SERVER__") || Uc, Yc = () => typeof window > "u" ? !1 : new URLSearchParams(window.location.search).has("telemetry"), Sr = (e) => {
  if (e === "projectApiKey") return "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz";
  if (e === "host") return "https://k.antikythera.org";
  if (e === "uiHost") return "";
}, Gc = (e, { timeout: t = 2500 } = {}) => {
  typeof window > "u" || (typeof window.requestIdleCallback == "function" ? window.requestIdleCallback(e, { timeout: t }) : window.setTimeout(e, 300));
}, yi = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      const t = new URL(e, typeof window < "u" ? window.location.origin : void 0);
      return `${t.origin}${t.pathname}`;
    } catch {
      return;
    }
}, Zc = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      return new URL(e, typeof window < "u" ? window.location.origin : void 0).hostname;
    } catch {
      return;
    }
}, Jc = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      const t = new URL(e);
      return !["http:", "https:"].includes(t.protocol) || t.username || t.password ? void 0 : t.hostname;
    } catch {
      return;
    }
}, Qc = (e, t) => {
  const n = Object.prototype.hasOwnProperty.call(t, "tracingHeaders") ? t.tracingHeaders : t.tracing_headers;
  if (n === !1) return [];
  if (Array.isArray(n)) return n.filter(Boolean);
  const o = Jc(Xc(e));
  return o ? [o] : [];
}, eu = (e, t) => {
  if (e === !1) return { enabled: !1 };
  const n = typeof e == "object" && e !== null ? e : {}, o = Yc() ? "full" : n.mode || n.analyticsMode || "cookieless", r = o === "full", a = !r && n.autocapture !== !1;
  return {
    enabled: !0,
    mode: o,
    fullTracking: r,
    anonymousAutocapture: a,
    projectApiKey: n.projectApiKey || n.posthogProjectApiKey || No("VITE_POSTHOG_PROJECT_API_KEY") || Hn("__ANTIKYTHERA_POSTHOG_PROJECT_API_KEY__") || Hn("__ANTIKYTHERA_POSTHOG_KEY__") || Sr("projectApiKey") || Fc,
    host: n.host || n.posthogHost || No("VITE_POSTHOG_HOST") || Hn("__ANTIKYTHERA_POSTHOG_HOST__") || Sr("host") || Dc,
    uiHost: n.uiHost || n.posthogUiHost || No("VITE_POSTHOG_UI_HOST") || Hn("__ANTIKYTHERA_POSTHOG_UI_HOST__") || Sr("uiHost") || jc,
    autocapture: r ? n.autocapture !== !1 : a ? qc : !1,
    deadClicks: r && n.deadClicks !== !1 && n.dead_clicks !== !1,
    rageclick: r && n.rageclick !== !1,
    sessionReplay: r && n.sessionReplay !== !1,
    heatmaps: r && n.heatmaps !== !1,
    exceptions: r && n.exceptions !== !1,
    pageviews: n.pageviews !== !1,
    pageleave: n.pageleave !== !1,
    apiRequests: n.apiRequests !== !1,
    webVitals: n.webVitals !== !1,
    tracingHeaders: Qc(t, n),
    personProfiles: n.personProfiles || n.person_profiles || (r ? "always" : "identified_only"),
    cookielessMode: n.cookielessMode || n.cookieless_mode || void 0,
    debug: n.debug === !0
  };
}, bi = (e = {}) => ({
  ...ia,
  ...e
}), tu = (e) => (e != null && e.properties && (e.properties.$current_url && (e.properties.$current_url = yi(e.properties.$current_url)), e.properties.$referrer && (e.properties.$referrer = yi(e.properties.$referrer)), be != null && be.fullTracking || (e.properties.$host = e.properties.$host || Zc(e.properties.$current_url), delete e.properties.$ip, delete e.properties.$raw_user_agent, delete e.properties.$element_text, delete e.properties.$el_text, delete e.properties.$elements_chain, Array.isArray(e.properties.$elements) && (e.properties.$elements = e.properties.$elements.map(
  (t) => Object.fromEntries(
    Object.entries(t).filter(([n]) => n === "tag_name" || n.startsWith(Wc))
  )
)))), e), nu = () => {
  var e;
  typeof window > "u" || !((e = window.performance) != null && e.getEntriesByType) || window.setTimeout(() => {
    const [t] = window.performance.getEntriesByType("navigation");
    t && pe("antikythera page performance measured", {
      load_duration_ms: Math.round(t.loadEventEnd || t.duration || 0),
      dom_content_loaded_ms: Math.round(t.domContentLoadedEventEnd || 0),
      transfer_size: t.transferSize || void 0,
      encoded_body_size: t.encodedBodySize || void 0
    });
  }, 0);
}, un = () => {
  var e, t, n, o, r;
  typeof globalThis > "u" || (globalThis.__ANTIKYTHERA_ANALYTICS__ = {
    enabled: Sn,
    initialized: Wo,
    config: be ? {
      host: be.host,
      uiHost: be.uiHost,
      mode: be.mode,
      fullTracking: be.fullTracking,
      pageviews: be.pageviews,
      pageleave: be.pageleave,
      apiRequests: be.apiRequests,
      webVitals: be.webVitals,
      autocapture: be.autocapture,
      anonymousAutocapture: be.anonymousAutocapture,
      deadClicks: be.deadClicks,
      rageclick: be.rageclick,
      sessionReplay: be.sessionReplay,
      heatmaps: be.heatmaps,
      exceptions: be.exceptions,
      tracingHeaders: be.tracingHeaders,
      cookielessMode: be.cookielessMode,
      personProfiles: be.personProfiles,
      hasProjectApiKey: !!be.projectApiKey
    } : null,
    posthog: Wo && Fe ? {
      isCapturing: typeof Fe.is_capturing == "function" ? Fe.is_capturing() : void 0,
      distinctId: typeof Fe.get_distinct_id == "function" ? Fe.get_distinct_id() : void 0,
      analyticsEndpoint: Fe.analyticsDefaultEndpoint,
      requestBatching: (e = Fe.config) == null ? void 0 : e.request_batching,
      disableCompression: (t = Fe.config) == null ? void 0 : t.disable_compression,
      cookielessMode: (n = Fe.config) == null ? void 0 : n.cookieless_mode,
      persistence: (o = Fe.config) == null ? void 0 : o.persistence,
      personProfiles: (r = Fe.config) == null ? void 0 : r.person_profiles
    } : null,
    context: ia,
    lastError: Kn,
    lastCapture: nr,
    captureAttemptCount: la,
    postHogCaptureCount: _l,
    pendingCaptureCount: so.length,
    posthogModuleRequested: !!Mn,
    capture: (a = "antikythera browser smoke test", i = {}) => pe(a, i)
  });
}, ou = (e, t) => {
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
    custom_personal_data_properties: t.fullTracking ? [] : gi,
    property_denylist: t.fullTracking ? [] : gi,
    request_batching: !0,
    tracing_headers: t.tracingHeaders,
    respect_dnt: !0,
    cookieless_mode: t.fullTracking ? void 0 : t.cookielessMode,
    person_profiles: t.personProfiles,
    before_send: tu,
    _onCapture: (n) => {
      _l += 1, nr = {
        event: n,
        acceptedByPostHog: !0,
        at: (/* @__PURE__ */ new Date()).toISOString()
      }, un();
    }
  }), t.debug && e.debug();
}, ru = () => {
  if (Fe) {
    for (; so.length > 0; ) {
      const e = so.shift();
      try {
        la += 1;
        const t = e.kind === "exception" ? Fe.captureException(e.error, e.properties) : Fe.capture(e.event, e.properties, { send_instantly: !0, timestamp: e.at });
        nr = {
          event: e.event,
          acceptedByPostHog: !!t,
          at: (/* @__PURE__ */ new Date()).toISOString()
        };
      } catch (t) {
        Kn = (t == null ? void 0 : t.message) || "PostHog capture failed";
      }
    }
    un();
  }
}, au = () => Mn || (Mn = new Promise((e) => {
  Gc(() => {
    import("./chunks/posthog-DRTLl3XD.js").then((t) => e(t.default || t.posthog || null)).catch((t) => {
      Mn = null, Kn = (t == null ? void 0 : t.message) || "PostHog failed to load", un(), e(null);
    });
  });
}), Mn), iu = () => au().then((e) => {
  if (!e) return null;
  if (!Wo && Sn && be)
    try {
      ou(e, be), Fe = e, Wo = !0;
    } catch (t) {
      Sn = !1, Kn = (t == null ? void 0 : t.message) || "PostHog initialization failed";
    }
  return un(), ru(), Fe;
}), kl = ({
  analytics: e = !0,
  entry: t = "",
  environment: n = "production",
  apiUrl: o = void 0,
  packageVersion: r = void 0,
  explicit: a = !1
} = {}) => typeof window > "u" || typeof document > "u" ? { enabled: !1 } : ((a || !mi) && (be = eu(e, o), Sn = be.enabled && !!be.projectApiKey, a && (mi = !0), Kn = null), ia = {
  antikythera_entry: t || void 0,
  antikythera_environment: n,
  antikythera_package_version: r,
  antikythera_api_host: o,
  site_origin: typeof window < "u" ? window.location.origin : void 0,
  site_hostname: typeof window < "u" ? window.location.hostname : void 0
}, un(), Sn ? (iu(), be.webVitals && nu(), vi || (pe("antikythera package initialized"), vi = !0), { enabled: !0 }) : { enabled: !1 }), pe = (e, t = {}, { onceKey: n = void 0 } = {}) => {
  if (!(!Sn || !e) && !(n && Cr.has(n))) {
    if (!Fe) {
      so.length < Kc && (n && Cr.add(n), so.push({ kind: "event", event: e, properties: bi(t), at: /* @__PURE__ */ new Date() }), un());
      return;
    }
    n && Cr.add(n);
    try {
      la += 1;
      const o = Fe.capture(e, bi(t), { send_instantly: !0 });
      nr = {
        event: e,
        acceptedByPostHog: !!o,
        at: (/* @__PURE__ */ new Date()).toISOString()
      }, un();
    } catch (o) {
      Kn = (o == null ? void 0 : o.message) || "PostHog capture failed", un();
    }
  }
}, Tr = (e = {}) => {
  !Sn || (be == null ? void 0 : be.apiRequests) === !1 || pe("antikythera api request completed", e);
}, wi = "antikythera-fonts", xi = "https://api.antikythera.org/fonts", lu = [
  ["ESAllianz-Book", "normal", 400],
  ["ESAllianz-BookItalic", "italic", 400],
  ["ESAllianz-Bold", "normal", 700],
  ["ESAllianz-BoldItalic", "italic", 700]
], su = () => lu.map(
  ([e, t, n]) => `@font-face{font-family:'ESAllianz-Book';font-style:${t};font-weight:${n};font-display:swap;src:url('${xi}/${e}.woff2') format('woff2'),url('${xi}/${e}.woff') format('woff');}`
).join(`
`), cu = () => {
  if (typeof document > "u" || document.getElementById(wi)) return;
  const e = document.createElement("style");
  e.id = wi, e.appendChild(document.createTextNode(su()));
  const t = document.head || document.getElementsByTagName("head")[0];
  t.insertBefore(e, t.firstChild);
}, Er = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_NITRO_SERVER_PORT: "3030", VITE_POSTHOG_HOST: "https://us.i.posthog.com", VITE_POSTHOG_PROJECT_API_KEY: "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz" }, Ar = /* @__PURE__ */ new Map(), sa = ({
  entry: e = "",
  environment: t = "production",
  customCss: n = !1,
  apiUrl: o = void 0,
  analytics: r = !0,
  packageVersion: a = void 0
} = {}) => {
  kl({
    analytics: r,
    entry: e,
    environment: t,
    apiUrl: o,
    packageVersion: a
  }), cu();
  const i = (P) => {
    if (!(!P || typeof P != "string"))
      try {
        const U = new URL(P);
        if (!["https:", "http:"].includes(U.protocol) || U.username || U.password)
          throw new Error("unsupported URL");
        return U.origin;
      } catch {
        console.warn("antikythera API URL override ignored: expected a valid http(s) origin");
        return;
      }
  }, l = i(o) || i(globalThis.__ANTIKYTHERA_API_URL__) || i(Er == null ? void 0 : Er.VITE_NITRO_SERVER) || i(globalThis.__ANTIKYTHERA_TEST_SERVER__) || "https://api.antikythera.org", s = `${l}/api/v1`;
  let f = e, c = null;
  const u = async (P, { textStyle: U = void 0 } = {}) => {
    const D = U ? "&textStyle=" + U : "", X = `${s}${P}?env=${t}${D}`, ae = `${l}:${t}:${f}:${P}:${U || "portabletext"}`;
    if (Ar.has(ae))
      Tr({
        api_path: P,
        api_environment: t,
        api_entry: f || void 0,
        api_text_style: U || "portabletext",
        api_success: !0,
        api_cache: "memory"
      });
    else {
      const F = typeof performance < "u" ? performance.now() : Date.now();
      Ar.set(
        ae,
        fetch(X).then((ee) => {
          const V = typeof performance < "u" ? performance.now() : Date.now(), G = Math.round(V - F);
          if (Tr({
            api_path: P,
            api_environment: t,
            api_entry: f || void 0,
            api_text_style: U || "portabletext",
            api_status: ee.status,
            api_success: ee.ok,
            api_duration_ms: G,
            api_cache: "miss"
          }), !ee.ok) {
            const q = new Error(`HTTP error! status: ${ee.status}`);
            throw q.antikytheraAnalyticsCaptured = !0, q;
          }
          return ee.json() ?? {};
        }).catch((ee) => {
          const V = typeof performance < "u" ? performance.now() : Date.now();
          return ee.antikytheraAnalyticsCaptured || Tr({
            api_path: P,
            api_environment: t,
            api_entry: f || void 0,
            api_text_style: U || "portabletext",
            api_success: !1,
            api_duration_ms: Math.round(V - F),
            api_cache: "miss",
            api_error: ee.message
          }), { error: ee.message };
        })
      );
    }
    return Ar.get(ae);
  }, h = async ({ textStyle: P = void 0 } = {}) => {
    try {
      return await u("/settings", { textStyle: P });
    } catch (U) {
      return { error: U.message };
    }
  }, y = async ({ textStyle: P = void 0 } = {}) => {
    try {
      return await u(`/entries/${f}`, { textStyle: P });
    } catch (U) {
      return { error: U.message };
    }
  }, E = async ({ textStyle: P = void 0 } = {}) => {
    try {
      return await u(`/entries/${f}/meta`, { textStyle: P });
    } catch (U) {
      return { error: U.message };
    }
  }, I = async ({ textStyle: P = void 0 } = {}) => {
    try {
      return await u(`/annotations/${f}`, { textStyle: P });
    } catch (U) {
      return { error: U.message };
    }
  }, H = (P, U = void 0) => {
    var D, X, ae;
    return {
      annotation_id: (P == null ? void 0 : P.id) || U || void 0,
      annotation_title: (P == null ? void 0 : P.title) || void 0,
      annotation_type: (P == null ? void 0 : P.annotationType) || void 0,
      annotation_has_external_link: !!(P != null && P.externalLink),
      annotation_has_featured_image: !!((D = P == null ? void 0 : P.featuredImage) != null && D.url || (X = P == null ? void 0 : P.featuredImageSquare) != null && X.url),
      annotation_scan_enabled: !!((ae = P == null ? void 0 : P.scanText) != null && ae.enableScanText)
    };
  }, w = (P, U) => {
    !P || !U || (P.setAttribute("data-ph-capture", ""), P.setAttribute("data-ph-component", "antikythera-annotation"), P.setAttribute("data-ph-action", "annotation-click"), P.setAttribute("data-ph-annotation-id", U.id), P.setAttribute("data-ph-entry", f), U.annotationType && P.setAttribute("data-ph-annotation-type", U.annotationType));
  }, K = (P) => String(P || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), W = async ({ annotationClass: P = "annotation" }) => {
    const U = await I(), D = [], X = [];
    if (!Array.isArray(U)) {
      console.warn("antikythera annotation scan skipped: annotations response is not an array", U);
      return;
    }
    U.forEach((V) => {
      var G, q;
      !((G = V.scanText) != null && G.enableScanText) || !Array.isArray((q = V.scanText) == null ? void 0 : q.scanSegments) || V.scanText.scanSegments.forEach((le) => {
        D.push({
          id: V.id,
          annotationPalette: V.annotationPalette ? `annotation_${V.annotationPalette}` : "annotation_inherit",
          annotationType: V.annotationType,
          keyword: le.scanKeyword,
          phrase: le.scanPhrase
        });
      });
    });
    const ae = (V) => {
      V.nodeType === Node.TEXT_NODE ? X.push(V) : V.childNodes.forEach(ae);
    };
    ae(document.body);
    const F = (V) => {
      const G = (q) => q.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
      return D.forEach((q) => {
        const { keyword: le, phrase: he, id: xe, annotationPalette: Ue, annotationType: He } = q, Te = new RegExp(`(${G(he)})`, "gi");
        Te.test(V) && (q.found = !0, V = V.replace(Te, (Me) => {
          const Be = new RegExp(`(${G(le)})`, "gi");
          return Me.replace(
            Be,
            `<span class="${K(P)} ${K(Ue)}" id="${K(xe)}" data-ph-capture data-ph-component="antikythera-annotation" data-ph-action="annotation-click" data-ph-entry="${K(f)}" data-ph-annotation-id="${K(xe)}" data-ph-annotation-type="${K(He)}">$1</span>`
          );
        }));
      }), V;
    };
    X.forEach((V) => {
      const G = F(V.nodeValue);
      if (G !== V.nodeValue) {
        const q = document.createElement("span");
        q.innerHTML = G, V.replaceWith(...q.childNodes);
      }
    });
    let ee = 0;
    return D.forEach(({ id: V, phrase: G, found: q }) => {
      q || (ee++, console.error(`Annotation [${V}] with phrase "${G}" could not be found in the document.`), pe("antikythera annotation scan missed", {
        antikythera_entry: f || void 0,
        annotation_id: V,
        annotation_phrase: G
      }));
    }), pe("antikythera annotation scan completed", {
      antikythera_entry: f || void 0,
      scan_total: D.length,
      scan_found: D.length - ee,
      scan_missed: ee
    }), U;
  }, b = async ({ menuName: P = "antikythera-menu", annotationClass: U = "annotation" } = {}) => {
    let D = [];
    const X = await W({ annotationClass: U });
    Array.isArray(X) && (D = X);
    const ae = new Map(D.map((G) => [G.id, G])), F = (G, q) => {
      const le = G.getAttribute("id"), he = ae.get(le);
      w(G, he || { id: le }), G.addEventListener("click", () => {
        var xe;
        pe("antikythera annotation clicked", {
          antikythera_entry: f || void 0,
          ...H(he, le),
          annotation_text: ((xe = G.textContent) == null ? void 0 : xe.trim()) || void 0
        }), q && (q.setAttribute("activeannotation", "v0_" + le), setTimeout(() => {
          q.setAttribute("activeannotation", "");
        }, 150));
      });
    }, ee = (G = [], q) => {
      c && c.disconnect();
      const le = {
        root: null,
        rootMargin: "0% 0% 0% 0%",
        // top right bottom left
        threshold: 1
      }, he = (Ue) => {
        Ue.forEach((He) => {
          var Bt;
          const Te = He.target, Me = Te.getAttribute("id"), Be = ae.get(Me);
          He.isIntersecting ? (pe(
            "antikythera annotation viewed",
            {
              antikythera_entry: f || void 0,
              ...H(Be, Me),
              annotation_text: ((Bt = Te.textContent) == null ? void 0 : Bt.trim()) || void 0
            },
            { onceKey: `annotation-viewed:${f}:${Me}` }
          ), q.setAttribute("activeannotation", "v1_" + Me), setTimeout(() => {
            q.setAttribute("activeannotation", "");
          }, 150)) : (q.setAttribute("inactiveannotation", "v1_" + Me), q.getAttribute("activeannotation") == "v1_" + Me && q.setAttribute("activeannotation", ""), setTimeout(() => {
            q.setAttribute("inactiveannotation", "");
          }, 150));
        });
      };
      c = new IntersectionObserver(he, le);
      for (var xe = 0; xe < G.length; xe++)
        c.observe(G[xe]);
    };
    if (document) {
      const G = document.querySelectorAll(`.${U}`), q = document.querySelector(P);
      if (!q) {
        console.warn(`antikythera annotation scan skipped: ${P} was not found`);
        return;
      }
      for (var V = 0; V < G.length; V++)
        F(G[V], q);
      ee(G, q);
    } else
      console.warn("antikythera initialization: no document present");
  }, z = async ({ menuName: P = "antikythera-menu", annotationClass: U = ".annotation", detectAnnotationsOnInit: D = !0 } = {}) => {
    console.log("antikythera initialization"), pe("antikythera core initialized", {
      antikythera_entry: f || void 0,
      annotation_detection_enabled: D
    });
    const X = () => {
      if (n)
        return;
      const F = `
				${U}{background:black;color:white;border-radius:0.125rem;padding-left:.25rem;padding-right:.25rem;cursor:crosshair;}
				.annotation_whiteOnBlack{background:black;color:white;}
				.annotation_blackOnWhite{background:white;color:black;}
			`;
      if (document) {
        const ee = document.head || document.getElementsByTagName("head")[0], V = document.createElement("style");
        ee.appendChild(V), V.type = "text/css", V.appendChild(document.createTextNode(F));
      }
    };
    D && await b(), X();
    const ae = new CustomEvent("antikythera:initComplete", {
      detail: { entry: f }
    });
    document.dispatchEvent(ae);
  }, J = async (P, U = "antikythera-menu", D = ".annotation", X = !0) => {
    f = P, pe("antikythera core reinitialized", {
      antikythera_entry: f || void 0
    }), await z({ menuName: U, annotationClass: D, detectAnnotationsOnInit: X });
  };
  return {
    entryId: `Antikythera entryId ID: ${f}`,
    getSettings: h,
    getEntry: y,
    getEntryMeta: E,
    getAnnotations: I,
    detectAnnotations: b,
    init: z,
    reinit: J
  };
};
/**
* @vue/shared v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ca(e, t) {
  const n = new Set(e.split(","));
  return (o) => n.has(o);
}
const Ce = {}, Bn = [], Ht = () => {
}, uu = () => !1, or = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ua = (e) => e.startsWith("onUpdate:"), Ae = Object.assign, da = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, du = Object.prototype.hasOwnProperty, _e = (e, t) => du.call(e, t), ie = Array.isArray, Vn = (e) => rr(e) === "[object Map]", Cl = (e) => rr(e) === "[object Set]", fe = (e) => typeof e == "function", Ie = (e) => typeof e == "string", pn = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", Sl = (e) => (Se(e) || fe(e)) && fe(e.then) && fe(e.catch), Tl = Object.prototype.toString, rr = (e) => Tl.call(e), fu = (e) => rr(e).slice(8, -1), ar = (e) => rr(e) === "[object Object]", fa = (e) => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ro = /* @__PURE__ */ ca(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ir = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pu = /-(\w)/g, ft = ir(
  (e) => e.replace(pu, (t, n) => n ? n.toUpperCase() : "")
), hu = /\B([A-Z])/g, wt = ir(
  (e) => e.replace(hu, "-$1").toLowerCase()
), lr = ir((e) => e.charAt(0).toUpperCase() + e.slice(1)), $r = ir(
  (e) => e ? `on${lr(e)}` : ""
), dn = (e, t) => !Object.is(e, t), Rr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, El = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, gu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, jr = (e) => {
  const t = Ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let _i;
const Al = () => _i || (_i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kn(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = Ie(o) ? bu(o) : kn(o);
      if (r)
        for (const a in r)
          t[a] = r[a];
    }
    return t;
  } else if (Ie(e) || Se(e))
    return e;
}
const mu = /;(?![^(]*\))/g, vu = /:([^]+)/, yu = /\/\*[^]*?\*\//g;
function bu(e) {
  const t = {};
  return e.replace(yu, "").split(mu).forEach((n) => {
    if (n) {
      const o = n.split(vu);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ge(e) {
  let t = "";
  if (Ie(e))
    t = e;
  else if (ie(e))
    for (let n = 0; n < e.length; n++) {
      const o = ge(e[n]);
      o && (t += o + " ");
    }
  else if (Se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const wu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xu = /* @__PURE__ */ ca(wu);
function $l(e) {
  return !!e || e === "";
}
const Rl = (e) => !!(e && e.__v_isRef === !0), ue = (e) => Ie(e) ? e : e == null ? "" : ie(e) || Se(e) && (e.toString === Tl || !fe(e.toString)) ? Rl(e) ? ue(e.value) : JSON.stringify(e, Il, 2) : String(e), Il = (e, t) => Rl(t) ? Il(e, t.value) : Vn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], a) => (n[Ir(o, a) + " =>"] = r, n),
    {}
  )
} : Cl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ir(n))
} : pn(t) ? Ir(t) : Se(t) && !ie(t) && !ar(t) ? String(t) : t, Ir = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    pn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let gt;
class _u {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = gt, !t && gt && (this.index = (gt.scopes || (gt.scopes = [])).push(
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
      const n = gt;
      try {
        return gt = this, t();
      } finally {
        gt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    gt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    gt = this.parent;
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
function ku() {
  return gt;
}
let ke;
const zr = /* @__PURE__ */ new WeakSet();
class zl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.nextEffect = void 0, this.cleanup = void 0, this.scheduler = void 0, gt && gt.active && gt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, zr.has(this) && (zr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || (this.flags |= 8, this.nextEffect = ao, ao = this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ki(this), Ml(this);
    const t = ke, n = St;
    ke = this, St = !0;
    try {
      return this.fn();
    } finally {
      Ll(this), ke = t, St = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ga(t);
      this.deps = this.depsTail = void 0, ki(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? zr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ur(this) && this.run();
  }
  get dirty() {
    return Ur(this);
  }
}
let Pl = 0, ao;
function pa() {
  Pl++;
}
function ha() {
  if (--Pl > 0)
    return;
  let e;
  for (; ao; ) {
    let t = ao;
    for (ao = void 0; t; ) {
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
function Ml(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ll(e) {
  let t, n = e.depsTail;
  for (let o = n; o; o = o.prevDep)
    o.version === -1 ? (o === n && (n = o.prevDep), ga(o), Cu(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0;
  e.deps = t, e.depsTail = n;
}
function Ur(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && Ol(t.dep.computed) === !1 || t.dep.version !== t.version)
      return !0;
  return !!e._dirty;
}
function Ol(e) {
  if (e.flags & 2)
    return !1;
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === co))
    return;
  e.globalVersion = co;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && !Ur(e)) {
    e.flags &= -3;
    return;
  }
  const n = ke, o = St;
  ke = e, St = !0;
  try {
    Ml(e);
    const r = e.fn(e._value);
    (t.version === 0 || dn(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ke = n, St = o, Ll(e), e.flags &= -3;
  }
}
function ga(e) {
  const { dep: t, prevSub: n, nextSub: o } = e;
  if (n && (n.nextSub = o, e.prevSub = void 0), o && (o.prevSub = n, e.nextSub = void 0), t.subs === e && (t.subs = n), !t.subs && t.computed) {
    t.computed.flags &= -5;
    for (let r = t.computed.deps; r; r = r.nextDep)
      ga(r);
  }
}
function Cu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let St = !0;
const Hl = [];
function hn() {
  Hl.push(St), St = !1;
}
function gn() {
  const e = Hl.pop();
  St = e === void 0 ? !0 : e;
}
function ki(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ke;
    ke = void 0;
    try {
      t();
    } finally {
      ke = n;
    }
  }
}
let co = 0;
class ma {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0;
  }
  track(t) {
    if (!ke || !St || ke === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ke)
      n = this.activeLink = {
        dep: this,
        sub: ke,
        version: this.version,
        nextDep: void 0,
        prevDep: void 0,
        nextSub: void 0,
        prevSub: void 0,
        prevActiveLink: void 0
      }, ke.deps ? (n.prevDep = ke.depsTail, ke.depsTail.nextDep = n, ke.depsTail = n) : ke.deps = ke.depsTail = n, ke.flags & 4 && Bl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = ke.depsTail, n.nextDep = void 0, ke.depsTail.nextDep = n, ke.depsTail = n, ke.deps === n && (ke.deps = o);
    }
    return n;
  }
  trigger(t) {
    this.version++, co++, this.notify(t);
  }
  notify(t) {
    pa();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify();
    } finally {
      ha();
    }
  }
}
function Bl(e) {
  const t = e.dep.computed;
  if (t && !e.dep.subs) {
    t.flags |= 20;
    for (let o = t.deps; o; o = o.nextDep)
      Bl(o);
  }
  const n = e.dep.subs;
  n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
}
const Kr = /* @__PURE__ */ new WeakMap(), Cn = Symbol(
  ""
), qr = Symbol(
  ""
), uo = Symbol(
  ""
);
function Qe(e, t, n) {
  if (St && ke) {
    let o = Kr.get(e);
    o || Kr.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = new ma()), r.track();
  }
}
function Gt(e, t, n, o, r, a) {
  const i = Kr.get(e);
  if (!i) {
    co++;
    return;
  }
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else {
    const s = ie(e), f = s && fa(n);
    if (s && n === "length") {
      const c = Number(o);
      i.forEach((u, h) => {
        (h === "length" || h === uo || !pn(h) && h >= c) && l.push(u);
      });
    } else {
      const c = (u) => u && l.push(u);
      switch (n !== void 0 && c(i.get(n)), f && c(i.get(uo)), t) {
        case "add":
          s ? f && c(i.get("length")) : (c(i.get(Cn)), Vn(e) && c(i.get(qr)));
          break;
        case "delete":
          s || (c(i.get(Cn)), Vn(e) && c(i.get(qr)));
          break;
        case "set":
          Vn(e) && c(i.get(Cn));
          break;
      }
    }
  }
  pa();
  for (const s of l)
    s.trigger();
  ha();
}
function Pn(e) {
  const t = we(e);
  return t === e ? t : (Qe(t, "iterate", uo), Tt(e) ? t : t.map(Ye));
}
function sr(e) {
  return Qe(e = we(e), "iterate", uo), e;
}
const Su = {
  __proto__: null,
  [Symbol.iterator]() {
    return Pr(this, Symbol.iterator, Ye);
  },
  concat(...e) {
    return Pn(this).concat(
      ...e.map((t) => ie(t) ? Pn(t) : t)
    );
  },
  entries() {
    return Pr(this, "entries", (e) => (e[1] = Ye(e[1]), e));
  },
  every(e, t) {
    return Ut(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ut(this, "filter", e, t, (n) => n.map(Ye), arguments);
  },
  find(e, t) {
    return Ut(this, "find", e, t, Ye, arguments);
  },
  findIndex(e, t) {
    return Ut(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ut(this, "findLast", e, t, Ye, arguments);
  },
  findLastIndex(e, t) {
    return Ut(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ut(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Mr(this, "includes", e);
  },
  indexOf(...e) {
    return Mr(this, "indexOf", e);
  },
  join(e) {
    return Pn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Mr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ut(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return eo(this, "pop");
  },
  push(...e) {
    return eo(this, "push", e);
  },
  reduce(e, ...t) {
    return Ci(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ci(this, "reduceRight", e, t);
  },
  shift() {
    return eo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ut(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return eo(this, "splice", e);
  },
  toReversed() {
    return Pn(this).toReversed();
  },
  toSorted(e) {
    return Pn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pn(this).toSpliced(...e);
  },
  unshift(...e) {
    return eo(this, "unshift", e);
  },
  values() {
    return Pr(this, "values", Ye);
  }
};
function Pr(e, t, n) {
  const o = sr(e), r = o[t]();
  return o !== e && !Tt(e) && (r._next = r.next, r.next = () => {
    const a = r._next();
    return a.value && (a.value = n(a.value)), a;
  }), r;
}
const Tu = Array.prototype;
function Ut(e, t, n, o, r, a) {
  const i = sr(e), l = i !== e && !Tt(e), s = i[t];
  if (s !== Tu[t]) {
    const u = s.apply(e, a);
    return l ? Ye(u) : u;
  }
  let f = n;
  i !== e && (l ? f = function(u, h) {
    return n.call(this, Ye(u), h, e);
  } : n.length > 2 && (f = function(u, h) {
    return n.call(this, u, h, e);
  }));
  const c = s.call(i, f, o);
  return l && r ? r(c) : c;
}
function Ci(e, t, n, o) {
  const r = sr(e);
  let a = n;
  return r !== e && (Tt(e) ? n.length > 3 && (a = function(i, l, s) {
    return n.call(this, i, l, s, e);
  }) : a = function(i, l, s) {
    return n.call(this, i, Ye(l), s, e);
  }), r[t](a, ...o);
}
function Mr(e, t, n) {
  const o = we(e);
  Qe(o, "iterate", uo);
  const r = o[t](...n);
  return (r === -1 || r === !1) && xa(n[0]) ? (n[0] = we(n[0]), o[t](...n)) : r;
}
function eo(e, t, n = []) {
  hn(), pa();
  const o = we(e)[t].apply(e, n);
  return ha(), gn(), o;
}
const Eu = /* @__PURE__ */ ca("__proto__,__v_isRef,__isVue"), Vl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pn)
);
function Au(e) {
  pn(e) || (e = String(e));
  const t = we(this);
  return Qe(t, "has", e), t.hasOwnProperty(e);
}
class Nl {
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
      return o === (r ? a ? Fu : Ul : a ? jl : Dl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = ie(t);
    if (!r) {
      let s;
      if (i && (s = Su[n]))
        return s;
      if (n === "hasOwnProperty")
        return Au;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ze(t) ? t : o
    );
    return (pn(n) ? Vl.has(n) : Eu(n)) || (r || Qe(t, "get", n), a) ? l : Ze(l) ? i && fa(n) ? l : l.value : Se(l) ? r ? Kl(l) : ba(l) : l;
  }
}
class Fl extends Nl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let a = t[n];
    if (!this._isShallow) {
      const s = Tn(a);
      if (!Tt(o) && !Tn(o) && (a = we(a), o = we(o)), !ie(t) && Ze(a) && !Ze(o))
        return s ? !1 : (a.value = o, !0);
    }
    const i = ie(t) && fa(n) ? Number(n) < t.length : _e(t, n), l = Reflect.set(
      t,
      n,
      o,
      Ze(t) ? t : r
    );
    return t === we(r) && (i ? dn(o, a) && Gt(t, "set", n, o) : Gt(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = _e(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && o && Gt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!pn(n) || !Vl.has(n)) && Qe(t, "has", n), o;
  }
  ownKeys(t) {
    return Qe(
      t,
      "iterate",
      ie(t) ? "length" : Cn
    ), Reflect.ownKeys(t);
  }
}
class $u extends Nl {
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
const Ru = /* @__PURE__ */ new Fl(), Iu = /* @__PURE__ */ new $u(), zu = /* @__PURE__ */ new Fl(!0);
const va = (e) => e, cr = (e) => Reflect.getPrototypeOf(e);
function Io(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = we(e), a = we(t);
  n || (dn(t, a) && Qe(r, "get", t), Qe(r, "get", a));
  const { has: i } = cr(r), l = o ? va : n ? _a : Ye;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, a))
    return l(e.get(a));
  e !== r && e.get(t);
}
function zo(e, t = !1) {
  const n = this.__v_raw, o = we(n), r = we(e);
  return t || (dn(e, r) && Qe(o, "has", e), Qe(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Po(e, t = !1) {
  return e = e.__v_raw, !t && Qe(we(e), "iterate", Cn), Reflect.get(e, "size", e);
}
function Si(e, t = !1) {
  !t && !Tt(e) && !Tn(e) && (e = we(e));
  const n = we(this);
  return cr(n).has.call(n, e) || (n.add(e), Gt(n, "add", e, e)), this;
}
function Ti(e, t, n = !1) {
  !n && !Tt(t) && !Tn(t) && (t = we(t));
  const o = we(this), { has: r, get: a } = cr(o);
  let i = r.call(o, e);
  i || (e = we(e), i = r.call(o, e));
  const l = a.call(o, e);
  return o.set(e, t), i ? dn(t, l) && Gt(o, "set", e, t) : Gt(o, "add", e, t), this;
}
function Ei(e) {
  const t = we(this), { has: n, get: o } = cr(t);
  let r = n.call(t, e);
  r || (e = we(e), r = n.call(t, e)), o && o.call(t, e);
  const a = t.delete(e);
  return r && Gt(t, "delete", e, void 0), a;
}
function Ai() {
  const e = we(this), t = e.size !== 0, n = e.clear();
  return t && Gt(e, "clear", void 0, void 0), n;
}
function Mo(e, t) {
  return function(o, r) {
    const a = this, i = a.__v_raw, l = we(i), s = t ? va : e ? _a : Ye;
    return !e && Qe(l, "iterate", Cn), i.forEach((f, c) => o.call(r, s(f), s(c), a));
  };
}
function Lo(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, a = we(r), i = Vn(a), l = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, f = r[e](...o), c = n ? va : t ? _a : Ye;
    return !t && Qe(
      a,
      "iterate",
      s ? qr : Cn
    ), {
      // iterator protocol
      next() {
        const { value: u, done: h } = f.next();
        return h ? { value: u, done: h } : {
          value: l ? [c(u[0]), c(u[1])] : c(u),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function tn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Pu() {
  const e = {
    get(a) {
      return Io(this, a);
    },
    get size() {
      return Po(this);
    },
    has: zo,
    add: Si,
    set: Ti,
    delete: Ei,
    clear: Ai,
    forEach: Mo(!1, !1)
  }, t = {
    get(a) {
      return Io(this, a, !1, !0);
    },
    get size() {
      return Po(this);
    },
    has: zo,
    add(a) {
      return Si.call(this, a, !0);
    },
    set(a, i) {
      return Ti.call(this, a, i, !0);
    },
    delete: Ei,
    clear: Ai,
    forEach: Mo(!1, !0)
  }, n = {
    get(a) {
      return Io(this, a, !0);
    },
    get size() {
      return Po(this, !0);
    },
    has(a) {
      return zo.call(this, a, !0);
    },
    add: tn("add"),
    set: tn("set"),
    delete: tn("delete"),
    clear: tn("clear"),
    forEach: Mo(!0, !1)
  }, o = {
    get(a) {
      return Io(this, a, !0, !0);
    },
    get size() {
      return Po(this, !0);
    },
    has(a) {
      return zo.call(this, a, !0);
    },
    add: tn("add"),
    set: tn("set"),
    delete: tn("delete"),
    clear: tn("clear"),
    forEach: Mo(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    e[a] = Lo(a, !1, !1), n[a] = Lo(a, !0, !1), t[a] = Lo(a, !1, !0), o[a] = Lo(
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
  Mu,
  Lu,
  Ou,
  Hu
] = /* @__PURE__ */ Pu();
function ya(e, t) {
  const n = t ? e ? Hu : Ou : e ? Lu : Mu;
  return (o, r, a) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    _e(n, r) && r in o ? n : o,
    r,
    a
  );
}
const Bu = {
  get: /* @__PURE__ */ ya(!1, !1)
}, Vu = {
  get: /* @__PURE__ */ ya(!1, !0)
}, Nu = {
  get: /* @__PURE__ */ ya(!0, !1)
};
const Dl = /* @__PURE__ */ new WeakMap(), jl = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), Fu = /* @__PURE__ */ new WeakMap();
function Du(e) {
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
function ju(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Du(fu(e));
}
function ba(e) {
  return Tn(e) ? e : wa(
    e,
    !1,
    Ru,
    Bu,
    Dl
  );
}
function Uu(e) {
  return wa(
    e,
    !1,
    zu,
    Vu,
    jl
  );
}
function Kl(e) {
  return wa(
    e,
    !0,
    Iu,
    Nu,
    Ul
  );
}
function wa(e, t, n, o, r) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = r.get(e);
  if (a)
    return a;
  const i = ju(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, l), l;
}
function Nn(e) {
  return Tn(e) ? Nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Tn(e) {
  return !!(e && e.__v_isReadonly);
}
function Tt(e) {
  return !!(e && e.__v_isShallow);
}
function xa(e) {
  return e ? !!e.__v_raw : !1;
}
function we(e) {
  const t = e && e.__v_raw;
  return t ? we(t) : e;
}
function Ku(e) {
  return Object.isExtensible(e) && El(e, "__v_skip", !0), e;
}
const Ye = (e) => Se(e) ? ba(e) : e, _a = (e) => Se(e) ? Kl(e) : e;
function Ze(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Y(e) {
  return qu(e, !1);
}
function qu(e, t) {
  return Ze(e) ? e : new Wu(e, t);
}
class Wu {
  constructor(t, n) {
    this.dep = new ma(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : we(t), this._value = n ? t : Ye(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || Tt(t) || Tn(t);
    t = o ? t : we(t), dn(t, n) && (this._rawValue = t, this._value = o ? t : Ye(t), this.dep.trigger());
  }
}
function Ot(e) {
  return Ze(e) ? e.value : e;
}
const Xu = {
  get: (e, t, n) => t === "__v_raw" ? e : Ot(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Ze(r) && !Ze(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ql(e) {
  return Nn(e) ? e : new Proxy(e, Xu);
}
class Yu {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ma(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = co - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    ke !== this && (this.flags |= 16, this.dep.notify());
  }
  get value() {
    const t = this.dep.track();
    return Ol(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Gu(e, t, n = !1) {
  let o, r;
  return fe(e) ? o = e : (o = e.get, r = e.set), new Yu(o, r, n);
}
const Oo = {}, Xo = /* @__PURE__ */ new WeakMap();
let wn;
function Zu(e, t = !1, n = wn) {
  if (n) {
    let o = Xo.get(n);
    o || Xo.set(n, o = []), o.push(e);
  }
}
function Ju(e, t, n = Ce) {
  const { immediate: o, deep: r, once: a, scheduler: i, augmentJob: l, call: s } = n, f = (b) => r ? b : Tt(b) || r === !1 || r === 0 ? cn(b, 1) : cn(b);
  let c, u, h, y, E = !1, I = !1;
  if (Ze(e) ? (u = () => e.value, E = Tt(e)) : Nn(e) ? (u = () => f(e), E = !0) : ie(e) ? (I = !0, E = e.some((b) => Nn(b) || Tt(b)), u = () => e.map((b) => {
    if (Ze(b))
      return b.value;
    if (Nn(b))
      return f(b);
    if (fe(b))
      return s ? s(b, 2) : b();
  })) : fe(e) ? t ? u = s ? () => s(e, 2) : e : u = () => {
    if (h) {
      hn();
      try {
        h();
      } finally {
        gn();
      }
    }
    const b = wn;
    wn = c;
    try {
      return s ? s(e, 3, [y]) : e(y);
    } finally {
      wn = b;
    }
  } : u = Ht, t && r) {
    const b = u, z = r === !0 ? 1 / 0 : r;
    u = () => cn(b(), z);
  }
  const H = ku(), w = () => {
    c.stop(), H && da(H.effects, c);
  };
  if (a)
    if (t) {
      const b = t;
      t = (...z) => {
        b(...z), w();
      };
    } else {
      const b = u;
      u = () => {
        b(), w();
      };
    }
  let K = I ? new Array(e.length).fill(Oo) : Oo;
  const W = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const z = c.run();
        if (r || E || (I ? z.some((J, P) => dn(J, K[P])) : dn(z, K))) {
          h && h();
          const J = wn;
          wn = c;
          try {
            const P = [
              z,
              // pass undefined as the old value when it's changed for the first time
              K === Oo ? void 0 : I && K[0] === Oo ? [] : K,
              y
            ];
            s ? s(t, 3, P) : (
              // @ts-expect-error
              t(...P)
            ), K = z;
          } finally {
            wn = J;
          }
        }
      } else
        c.run();
  };
  return l && l(W), c = new zl(u), c.scheduler = i ? () => i(W, !1) : W, y = (b) => Zu(b, !1, c), h = c.onStop = () => {
    const b = Xo.get(c);
    if (b) {
      if (s)
        s(b, 4);
      else
        for (const z of b) z();
      Xo.delete(c);
    }
  }, t ? o ? W(!0) : K = c.run() : i ? i(W.bind(null, !0), !0) : c.run(), w.pause = c.pause.bind(c), w.resume = c.resume.bind(c), w.stop = w, w;
}
function cn(e, t = 1 / 0, n) {
  if (t <= 0 || !Se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ze(e))
    cn(e.value, t, n);
  else if (ie(e))
    for (let o = 0; o < e.length; o++)
      cn(e[o], t, n);
  else if (Cl(e) || Vn(e))
    e.forEach((o) => {
      cn(o, t, n);
    });
  else if (ar(e)) {
    for (const o in e)
      cn(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && cn(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function mo(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    ur(r, t, n);
  }
}
function Et(e, t, n, o) {
  if (fe(e)) {
    const r = mo(e, t, n, o);
    return r && Sl(r) && r.catch((a) => {
      ur(a, t, n);
    }), r;
  }
  if (ie(e)) {
    const r = [];
    for (let a = 0; a < e.length; a++)
      r.push(Et(e[a], t, n, o));
    return r;
  }
}
function ur(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Ce;
  if (t) {
    let l = t.parent;
    const s = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, s, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (a) {
      hn(), mo(a, null, 10, [
        e,
        s,
        f
      ]), gn();
      return;
    }
  }
  Qu(e, n, r, o, i);
}
function Qu(e, t, n, o = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
let fo = !1, Wr = !1;
const rt = [];
let Mt = 0;
const Fn = [];
let an = null, Ln = 0;
const Wl = /* @__PURE__ */ Promise.resolve();
let ka = null;
function bt(e) {
  const t = ka || Wl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ed(e) {
  let t = fo ? Mt + 1 : 0, n = rt.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = rt[o], a = po(r);
    a < e || a === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Ca(e) {
  if (!(e.flags & 1)) {
    const t = po(e), n = rt[rt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= po(n) ? rt.push(e) : rt.splice(ed(t), 0, e), e.flags |= 1, Xl();
  }
}
function Xl() {
  !fo && !Wr && (Wr = !0, ka = Wl.then(Gl));
}
function td(e) {
  ie(e) ? Fn.push(...e) : an && e.id === -1 ? an.splice(Ln + 1, 0, e) : e.flags & 1 || (Fn.push(e), e.flags |= 1), Xl();
}
function $i(e, t, n = fo ? Mt + 1 : 0) {
  for (; n < rt.length; n++) {
    const o = rt[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid)
        continue;
      rt.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags &= -2;
    }
  }
}
function Yl(e) {
  if (Fn.length) {
    const t = [...new Set(Fn)].sort(
      (n, o) => po(n) - po(o)
    );
    if (Fn.length = 0, an) {
      an.push(...t);
      return;
    }
    for (an = t, Ln = 0; Ln < an.length; Ln++) {
      const n = an[Ln];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    an = null, Ln = 0;
  }
}
const po = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Gl(e) {
  Wr = !1, fo = !0;
  try {
    for (Mt = 0; Mt < rt.length; Mt++) {
      const t = rt[Mt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), mo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags &= -2);
    }
  } finally {
    for (; Mt < rt.length; Mt++) {
      const t = rt[Mt];
      t && (t.flags &= -2);
    }
    Mt = 0, rt.length = 0, Yl(), fo = !1, ka = null, (rt.length || Fn.length) && Gl();
  }
}
let Ge = null, Zl = null;
function Yo(e) {
  const t = Ge;
  return Ge = e, Zl = e && e.type.__scopeId || null, t;
}
function Zt(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Vi(-1);
    const a = Yo(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Yo(a), o._d && Vi(1);
    }
    return i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function vn(e, t, n, o) {
  const r = e.dirs, a = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    a && (l.oldValue = a[i].value);
    let s = l.dir[o];
    s && (hn(), Et(s, n, 8, [
      e.el,
      l,
      e,
      t
    ]), gn());
  }
}
const nd = Symbol("_vte"), Jl = (e) => e.__isTeleport, ln = Symbol("_leaveCb"), Ho = Symbol("_enterCb");
function Ql() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return vo(() => {
    e.isMounted = !0;
  }), Ta(() => {
    e.isUnmounting = !0;
  }), e;
}
const yt = [Function, Array], es = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: yt,
  onEnter: yt,
  onAfterEnter: yt,
  onEnterCancelled: yt,
  // leave
  onBeforeLeave: yt,
  onLeave: yt,
  onAfterLeave: yt,
  onLeaveCancelled: yt,
  // appear
  onBeforeAppear: yt,
  onAppear: yt,
  onAfterAppear: yt,
  onAppearCancelled: yt
}, ts = (e) => {
  const t = e.subTree;
  return t.component ? ts(t.component) : t;
}, od = {
  name: "BaseTransition",
  props: es,
  setup(e, { slots: t }) {
    const n = $s(), o = Ql();
    return () => {
      const r = t.default && Sa(t.default(), !0);
      if (!r || !r.length)
        return;
      const a = ns(r), i = we(e), { mode: l } = i;
      if (o.isLeaving)
        return Lr(a);
      const s = Ri(a);
      if (!s)
        return Lr(a);
      let f = ho(
        s,
        i,
        o,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => f = h
      );
      s.type !== at && En(s, f);
      const c = n.subTree, u = c && Ri(c);
      if (u && u.type !== at && !xn(s, u) && ts(n).type !== at) {
        const h = ho(
          u,
          i,
          o,
          n
        );
        if (En(u, h), l === "out-in" && s.type !== at)
          return o.isLeaving = !0, h.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave;
          }, Lr(a);
        l === "in-out" && s.type !== at && (h.delayLeave = (y, E, I) => {
          const H = os(
            o,
            u
          );
          H[String(u.key)] = u, y[ln] = () => {
            E(), y[ln] = void 0, delete f.delayedLeave;
          }, f.delayedLeave = I;
        });
      }
      return a;
    };
  }
};
function ns(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== at) {
        t = n;
        break;
      }
  }
  return t;
}
const rd = od;
function os(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function ho(e, t, n, o, r) {
  const {
    appear: a,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: s,
    onEnter: f,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: h,
    onLeave: y,
    onAfterLeave: E,
    onLeaveCancelled: I,
    onBeforeAppear: H,
    onAppear: w,
    onAfterAppear: K,
    onAppearCancelled: W
  } = t, b = String(e.key), z = os(n, e), J = (D, X) => {
    D && Et(
      D,
      o,
      9,
      X
    );
  }, P = (D, X) => {
    const ae = X[1];
    J(D, X), ie(D) ? D.every((F) => F.length <= 1) && ae() : D.length <= 1 && ae();
  }, U = {
    mode: i,
    persisted: l,
    beforeEnter(D) {
      let X = s;
      if (!n.isMounted)
        if (a)
          X = H || s;
        else
          return;
      D[ln] && D[ln](
        !0
        /* cancelled */
      );
      const ae = z[b];
      ae && xn(e, ae) && ae.el[ln] && ae.el[ln](), J(X, [D]);
    },
    enter(D) {
      let X = f, ae = c, F = u;
      if (!n.isMounted)
        if (a)
          X = w || f, ae = K || c, F = W || u;
        else
          return;
      let ee = !1;
      const V = D[Ho] = (G) => {
        ee || (ee = !0, G ? J(F, [D]) : J(ae, [D]), U.delayedLeave && U.delayedLeave(), D[Ho] = void 0);
      };
      X ? P(X, [D, V]) : V();
    },
    leave(D, X) {
      const ae = String(e.key);
      if (D[Ho] && D[Ho](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return X();
      J(h, [D]);
      let F = !1;
      const ee = D[ln] = (V) => {
        F || (F = !0, X(), V ? J(I, [D]) : J(E, [D]), D[ln] = void 0, z[ae] === e && delete z[ae]);
      };
      z[ae] = e, y ? P(y, [D, ee]) : ee();
    },
    clone(D) {
      const X = ho(
        D,
        t,
        n,
        o,
        r
      );
      return r && r(X), X;
    }
  };
  return U;
}
function Lr(e) {
  if (dr(e))
    return e = fn(e), e.children = null, e;
}
function Ri(e) {
  if (!dr(e))
    return Jl(e.type) && e.children ? ns(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && fe(n.default))
      return n.default();
  }
}
function En(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, En(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Sa(e, t = !1, n) {
  let o = [], r = 0;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
    i.type === ye ? (i.patchFlag & 128 && r++, o = o.concat(
      Sa(i.children, t, l)
    )) : (t || i.type !== at) && o.push(l != null ? fn(i, { key: l }) : i);
  }
  if (r > 1)
    for (let a = 0; a < o.length; a++)
      o[a].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function rs(e, t) {
  return fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function as(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Xr(e, t, n, o, r = !1) {
  if (ie(e)) {
    e.forEach(
      (E, I) => Xr(
        E,
        t && (ie(t) ? t[I] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Dn(o) && !r)
    return;
  const a = o.shapeFlag & 4 ? za(o.component) : o.el, i = r ? null : a, { i: l, r: s } = e, f = t && t.r, c = l.refs === Ce ? l.refs = {} : l.refs, u = l.setupState, h = we(u), y = u === Ce ? () => !1 : (E) => _e(h, E);
  if (f != null && f !== s && (Ie(f) ? (c[f] = null, y(f) && (u[f] = null)) : Ze(f) && (f.value = null)), fe(s))
    mo(s, l, 12, [i, c]);
  else {
    const E = Ie(s), I = Ze(s);
    if (E || I) {
      const H = () => {
        if (e.f) {
          const w = E ? y(s) ? u[s] : c[s] : s.value;
          r ? ie(w) && da(w, a) : ie(w) ? w.includes(a) || w.push(a) : E ? (c[s] = [a], y(s) && (u[s] = c[s])) : (s.value = [a], e.k && (c[e.k] = s.value));
        } else E ? (c[s] = i, y(s) && (u[s] = i)) : I && (s.value = i, e.k && (c[e.k] = i));
      };
      i ? (H.id = -1, ht(H, n)) : H();
    }
  }
}
const Dn = (e) => !!e.type.__asyncLoader, dr = (e) => e.type.__isKeepAlive;
function ad(e, t) {
  is(e, "a", t);
}
function id(e, t) {
  is(e, "da", t);
}
function is(e, t, n = We) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (fr(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      dr(r.parent.vnode) && ld(o, t, n, r), r = r.parent;
  }
}
function ld(e, t, n, o) {
  const r = fr(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Ea(() => {
    da(o[t], r);
  }, n);
}
function fr(e, t, n = We, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
      hn();
      const l = yo(n), s = Et(t, n, e, i);
      return l(), gn(), s;
    });
    return o ? r.unshift(a) : r.push(a), a;
  }
}
const Jt = (e) => (t, n = We) => {
  (!gr || e === "sp") && fr(e, (...o) => t(...o), n);
}, sd = Jt("bm"), vo = Jt("m"), cd = Jt(
  "bu"
), ls = Jt("u"), Ta = Jt(
  "bum"
), Ea = Jt("um"), ud = Jt(
  "sp"
), dd = Jt("rtg"), fd = Jt("rtc");
function pd(e, t = We) {
  fr("ec", e, t);
}
const hd = "components", ss = Symbol.for("v-ndc");
function gd(e) {
  return Ie(e) ? md(hd, e, !1) || e : e || ss;
}
function md(e, t, n = !0, o = !1) {
  const r = Ge || We;
  if (r) {
    const a = r.type;
    {
      const l = rf(
        a,
        !1
      );
      if (l && (l === t || l === ft(t) || l === lr(ft(t))))
        return a;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ii(r[e] || a[e], t) || // global registration
      Ii(r.appContext[e], t)
    );
    return !i && o ? a : i;
  }
}
function Ii(e, t) {
  return e && (e[t] || e[ft(t)] || e[lr(ft(t))]);
}
function xt(e, t, n, o) {
  let r;
  const a = n, i = ie(e);
  if (i || Ie(e)) {
    const l = i && Nn(e);
    l && (e = sr(e)), r = new Array(e.length);
    for (let s = 0, f = e.length; s < f; s++)
      r[s] = t(
        l ? Ye(e[s]) : e[s],
        s,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, a);
  } else if (Se(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, s) => t(l, s, void 0, a)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let s = 0, f = l.length; s < f; s++) {
        const c = l[s];
        r[s] = t(e[c], c, s, a);
      }
    }
  else
    r = [];
  return r;
}
function vd(e, t, n = {}, o, r) {
  if (Ge.ce || Ge.parent && Dn(Ge.parent) && Ge.parent.ce)
    return k(), Je(
      ye,
      null,
      [ne("slot", n, o)],
      64
    );
  let a = e[t];
  a && a._c && (a._d = !1), k();
  const i = a && cs(a(n)), l = Je(
    ye,
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
function cs(e) {
  return e.some((t) => Zo(t) ? !(t.type === at || t.type === ye && !cs(t.children)) : !0) ? e : null;
}
const Yr = (e) => e ? Rs(e) ? za(e) : Yr(e.parent) : null, io = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Yr(e.parent),
    $root: (e) => Yr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Aa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ca(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = bt.bind(e.proxy)),
    $watch: (e) => Nd.bind(e)
  })
), Or = (e, t) => e !== Ce && !e.__isScriptSetup && _e(e, t), yd = {
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
        if (Or(o, t))
          return i[t] = 1, o[t];
        if (r !== Ce && _e(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && _e(f, t)
        )
          return i[t] = 3, a[t];
        if (n !== Ce && _e(n, t))
          return i[t] = 4, n[t];
        Gr && (i[t] = 0);
      }
    }
    const c = io[t];
    let u, h;
    if (c)
      return t === "$attrs" && Qe(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ce && _e(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = s.config.globalProperties, _e(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: a } = e;
    return Or(r, t) ? (r[t] = n, !0) : o !== Ce && _e(o, t) ? (o[t] = n, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: a }
  }, i) {
    let l;
    return !!n[i] || e !== Ce && _e(e, i) || Or(t, i) || (l = a[0]) && _e(l, i) || _e(o, i) || _e(io, i) || _e(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function zi(e) {
  return ie(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Gr = !0;
function bd(e) {
  const t = Aa(e), n = e.proxy, o = e.ctx;
  Gr = !1, t.beforeCreate && Pi(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: a,
    methods: i,
    watch: l,
    provide: s,
    inject: f,
    // lifecycle
    created: c,
    beforeMount: u,
    mounted: h,
    beforeUpdate: y,
    updated: E,
    activated: I,
    deactivated: H,
    beforeDestroy: w,
    beforeUnmount: K,
    destroyed: W,
    unmounted: b,
    render: z,
    renderTracked: J,
    renderTriggered: P,
    errorCaptured: U,
    serverPrefetch: D,
    // public API
    expose: X,
    inheritAttrs: ae,
    // assets
    components: F,
    directives: ee,
    filters: V
  } = t;
  if (f && wd(f, o, null), i)
    for (const le in i) {
      const he = i[le];
      fe(he) && (o[le] = he.bind(n));
    }
  if (r) {
    const le = r.call(n, n);
    Se(le) && (e.data = ba(le));
  }
  if (Gr = !0, a)
    for (const le in a) {
      const he = a[le], xe = fe(he) ? he.bind(n, n) : fe(he.get) ? he.get.bind(n, n) : Ht, Ue = !fe(he) && fe(he.set) ? he.set.bind(n) : Ht, He = re({
        get: xe,
        set: Ue
      });
      Object.defineProperty(o, le, {
        enumerable: !0,
        configurable: !0,
        get: () => He.value,
        set: (Te) => He.value = Te
      });
    }
  if (l)
    for (const le in l)
      us(l[le], o, n, le);
  if (s) {
    const le = fe(s) ? s.call(n) : s;
    Reflect.ownKeys(le).forEach((he) => {
      Td(he, le[he]);
    });
  }
  c && Pi(c, e, "c");
  function q(le, he) {
    ie(he) ? he.forEach((xe) => le(xe.bind(n))) : he && le(he.bind(n));
  }
  if (q(sd, u), q(vo, h), q(cd, y), q(ls, E), q(ad, I), q(id, H), q(pd, U), q(fd, J), q(dd, P), q(Ta, K), q(Ea, b), q(ud, D), ie(X))
    if (X.length) {
      const le = e.exposed || (e.exposed = {});
      X.forEach((he) => {
        Object.defineProperty(le, he, {
          get: () => n[he],
          set: (xe) => n[he] = xe
        });
      });
    } else e.exposed || (e.exposed = {});
  z && e.render === Ht && (e.render = z), ae != null && (e.inheritAttrs = ae), F && (e.components = F), ee && (e.directives = ee), D && as(e);
}
function wd(e, t, n = Ht) {
  ie(e) && (e = Zr(e));
  for (const o in e) {
    const r = e[o];
    let a;
    Se(r) ? "default" in r ? a = Fo(
      r.from || o,
      r.default,
      !0
    ) : a = Fo(r.from || o) : a = Fo(r), Ze(a) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (i) => a.value = i
    }) : t[o] = a;
  }
}
function Pi(e, t, n) {
  Et(
    ie(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function us(e, t, n, o) {
  let r = o.includes(".") ? ks(n, o) : () => n[o];
  if (Ie(e)) {
    const a = t[e];
    fe(a) && _n(r, a);
  } else if (fe(e))
    _n(r, e.bind(n));
  else if (Se(e))
    if (ie(e))
      e.forEach((a) => us(a, t, n, o));
    else {
      const a = fe(e.handler) ? e.handler.bind(n) : t[e.handler];
      fe(a) && _n(r, a, e);
    }
}
function Aa(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: a,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = a.get(t);
  let s;
  return l ? s = l : !r.length && !n && !o ? s = t : (s = {}, r.length && r.forEach(
    (f) => Go(s, f, i, !0)
  ), Go(s, t, i)), Se(t) && a.set(t, s), s;
}
function Go(e, t, n, o = !1) {
  const { mixins: r, extends: a } = t;
  a && Go(e, a, n, !0), r && r.forEach(
    (i) => Go(e, i, n, !0)
  );
  for (const i in t)
    if (!(o && i === "expose")) {
      const l = xd[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const xd = {
  data: Mi,
  props: Li,
  emits: Li,
  // objects
  methods: oo,
  computed: oo,
  // lifecycle
  beforeCreate: ot,
  created: ot,
  beforeMount: ot,
  mounted: ot,
  beforeUpdate: ot,
  updated: ot,
  beforeDestroy: ot,
  beforeUnmount: ot,
  destroyed: ot,
  unmounted: ot,
  activated: ot,
  deactivated: ot,
  errorCaptured: ot,
  serverPrefetch: ot,
  // assets
  components: oo,
  directives: oo,
  // watch
  watch: kd,
  // provide / inject
  provide: Mi,
  inject: _d
};
function Mi(e, t) {
  return t ? e ? function() {
    return Ae(
      fe(e) ? e.call(this, this) : e,
      fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function _d(e, t) {
  return oo(Zr(e), Zr(t));
}
function Zr(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ot(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function oo(e, t) {
  return e ? Ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Li(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ae(
    /* @__PURE__ */ Object.create(null),
    zi(e),
    zi(t ?? {})
  ) : t;
}
function kd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ae(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ot(e[o], t[o]);
  return n;
}
function ds() {
  return {
    app: null,
    config: {
      isNativeTag: uu,
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
let Cd = 0;
function Sd(e, t) {
  return function(o, r = null) {
    fe(o) || (o = Ae({}, o)), r != null && !Se(r) && (r = null);
    const a = ds(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let s = !1;
    const f = a.app = {
      _uid: Cd++,
      _component: o,
      _props: r,
      _container: null,
      _context: a,
      _instance: null,
      version: lf,
      get config() {
        return a.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return i.has(c) || (c && fe(c.install) ? (i.add(c), c.install(f, ...u)) : fe(c) && (i.add(c), c(f, ...u))), f;
      },
      mixin(c) {
        return a.mixins.includes(c) || a.mixins.push(c), f;
      },
      component(c, u) {
        return u ? (a.components[c] = u, f) : a.components[c];
      },
      directive(c, u) {
        return u ? (a.directives[c] = u, f) : a.directives[c];
      },
      mount(c, u, h) {
        if (!s) {
          const y = f._ceVNode || ne(o, r);
          return y.appContext = a, h === !0 ? h = "svg" : h === !1 && (h = void 0), u && t ? t(y, c) : e(y, c, h), s = !0, f._container = c, c.__vue_app__ = f, za(y.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        s && (Et(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(c, u) {
        return a.provides[c] = u, f;
      },
      runWithContext(c) {
        const u = jn;
        jn = f;
        try {
          return c();
        } finally {
          jn = u;
        }
      }
    };
    return f;
  };
}
let jn = null;
function Td(e, t) {
  if (We) {
    let n = We.provides;
    const o = We.parent && We.parent.provides;
    o === n && (n = We.provides = Object.create(o)), n[e] = t;
  }
}
function Fo(e, t, n = !1) {
  const o = We || Ge;
  if (o || jn) {
    const r = jn ? jn._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && fe(t) ? t.call(o && o.proxy) : t;
  }
}
const fs = {}, ps = () => Object.create(fs), hs = (e) => Object.getPrototypeOf(e) === fs;
function Ed(e, t, n, o = !1) {
  const r = {}, a = ps();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), gs(e, t, r, a);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = o ? r : Uu(r) : e.type.props ? e.props = r : e.props = a, e.attrs = a;
}
function Ad(e, t, n, o) {
  const {
    props: r,
    attrs: a,
    vnode: { patchFlag: i }
  } = e, l = we(r), [s] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let h = c[u];
        if (pr(e.emitsOptions, h))
          continue;
        const y = t[h];
        if (s)
          if (_e(a, h))
            y !== a[h] && (a[h] = y, f = !0);
          else {
            const E = ft(h);
            r[E] = Jr(
              s,
              l,
              E,
              y,
              e,
              !1
            );
          }
        else
          y !== a[h] && (a[h] = y, f = !0);
      }
    }
  } else {
    gs(e, t, r, a) && (f = !0);
    let c;
    for (const u in l)
      (!t || // for camelCase
      !_e(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = wt(u)) === u || !_e(t, c))) && (s ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[c] !== void 0) && (r[u] = Jr(
        s,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete r[u]);
    if (a !== l)
      for (const u in a)
        (!t || !_e(t, u)) && (delete a[u], f = !0);
  }
  f && Gt(e.attrs, "set", "");
}
function gs(e, t, n, o) {
  const [r, a] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let s in t) {
      if (ro(s))
        continue;
      const f = t[s];
      let c;
      r && _e(r, c = ft(s)) ? !a || !a.includes(c) ? n[c] = f : (l || (l = {}))[c] = f : pr(e.emitsOptions, s) || (!(s in o) || f !== o[s]) && (o[s] = f, i = !0);
    }
  if (a) {
    const s = we(n), f = l || Ce;
    for (let c = 0; c < a.length; c++) {
      const u = a[c];
      n[u] = Jr(
        r,
        s,
        u,
        f[u],
        e,
        !_e(f, u)
      );
    }
  }
  return i;
}
function Jr(e, t, n, o, r, a) {
  const i = e[n];
  if (i != null) {
    const l = _e(i, "default");
    if (l && o === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && fe(s)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const c = yo(r);
          o = f[n] = s.call(
            null,
            t
          ), c();
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
    ] && (o === "" || o === wt(n)) && (o = !0));
  }
  return o;
}
const $d = /* @__PURE__ */ new WeakMap();
function ms(e, t, n = !1) {
  const o = n ? $d : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const a = e.props, i = {}, l = [];
  let s = !1;
  if (!fe(e)) {
    const c = (u) => {
      s = !0;
      const [h, y] = ms(u, t, !0);
      Ae(i, h), y && l.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!a && !s)
    return Se(e) && o.set(e, Bn), Bn;
  if (ie(a))
    for (let c = 0; c < a.length; c++) {
      const u = ft(a[c]);
      Oi(u) && (i[u] = Ce);
    }
  else if (a)
    for (const c in a) {
      const u = ft(c);
      if (Oi(u)) {
        const h = a[c], y = i[u] = ie(h) || fe(h) ? { type: h } : Ae({}, h), E = y.type;
        let I = !1, H = !0;
        if (ie(E))
          for (let w = 0; w < E.length; ++w) {
            const K = E[w], W = fe(K) && K.name;
            if (W === "Boolean") {
              I = !0;
              break;
            } else W === "String" && (H = !1);
          }
        else
          I = fe(E) && E.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = I, y[
          1
          /* shouldCastTrue */
        ] = H, (I || _e(y, "default")) && l.push(u);
      }
    }
  const f = [i, l];
  return Se(e) && o.set(e, f), f;
}
function Oi(e) {
  return e[0] !== "$" && !ro(e);
}
const vs = (e) => e[0] === "_" || e === "$stable", $a = (e) => ie(e) ? e.map(Lt) : [Lt(e)], Rd = (e, t, n) => {
  if (t._n)
    return t;
  const o = Zt((...r) => $a(t(...r)), n);
  return o._c = !1, o;
}, ys = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (vs(r)) continue;
    const a = e[r];
    if (fe(a))
      t[r] = Rd(r, a, o);
    else if (a != null) {
      const i = $a(a);
      t[r] = () => i;
    }
  }
}, bs = (e, t) => {
  const n = $a(t);
  e.slots.default = () => n;
}, ws = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, Id = (e, t, n) => {
  const o = e.slots = ps();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (ws(o, t, n), n && El(o, "_", r, !0)) : ys(t, o);
  } else t && bs(e, t);
}, zd = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let a = !0, i = Ce;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? a = !1 : ws(r, t, n) : (a = !t.$stable, ys(t, r)), i = t;
  } else t && (bs(e, t), i = { default: 1 });
  if (a)
    for (const l in r)
      !vs(l) && i[l] == null && delete r[l];
}, ht = Wd;
function Pd(e) {
  return Md(e);
}
function Md(e, t) {
  const n = Al();
  n.__VUE__ = !0;
  const {
    insert: o,
    remove: r,
    patchProp: a,
    createElement: i,
    createText: l,
    createComment: s,
    setText: f,
    setElementText: c,
    parentNode: u,
    nextSibling: h,
    setScopeId: y = Ht,
    insertStaticContent: E
  } = e, I = (p, g, _, A = null, S = null, R = null, N = void 0, v = null, O = !!g.dynamicChildren) => {
    if (p === g)
      return;
    p && !xn(p, g) && (A = it(p), Te(p, S, R, !0), p = null), g.patchFlag === -2 && (O = !1, g.dynamicChildren = null);
    const { type: M, ref: te, shapeFlag: j } = g;
    switch (M) {
      case hr:
        H(p, g, _, A);
        break;
      case at:
        w(p, g, _, A);
        break;
      case Do:
        p == null && K(g, _, A, N);
        break;
      case ye:
        F(
          p,
          g,
          _,
          A,
          S,
          R,
          N,
          v,
          O
        );
        break;
      default:
        j & 1 ? z(
          p,
          g,
          _,
          A,
          S,
          R,
          N,
          v,
          O
        ) : j & 6 ? ee(
          p,
          g,
          _,
          A,
          S,
          R,
          N,
          v,
          O
        ) : (j & 64 || j & 128) && M.process(
          p,
          g,
          _,
          A,
          S,
          R,
          N,
          v,
          O,
          At
        );
    }
    te != null && S && Xr(te, p && p.ref, R, g || p, !g);
  }, H = (p, g, _, A) => {
    if (p == null)
      o(
        g.el = l(g.children),
        _,
        A
      );
    else {
      const S = g.el = p.el;
      g.children !== p.children && f(S, g.children);
    }
  }, w = (p, g, _, A) => {
    p == null ? o(
      g.el = s(g.children || ""),
      _,
      A
    ) : g.el = p.el;
  }, K = (p, g, _, A) => {
    [p.el, p.anchor] = E(
      p.children,
      g,
      _,
      A,
      p.el,
      p.anchor
    );
  }, W = ({ el: p, anchor: g }, _, A) => {
    let S;
    for (; p && p !== g; )
      S = h(p), o(p, _, A), p = S;
    o(g, _, A);
  }, b = ({ el: p, anchor: g }) => {
    let _;
    for (; p && p !== g; )
      _ = h(p), r(p), p = _;
    r(g);
  }, z = (p, g, _, A, S, R, N, v, O) => {
    g.type === "svg" ? N = "svg" : g.type === "math" && (N = "mathml"), p == null ? J(
      g,
      _,
      A,
      S,
      R,
      N,
      v,
      O
    ) : D(
      p,
      g,
      S,
      R,
      N,
      v,
      O
    );
  }, J = (p, g, _, A, S, R, N, v) => {
    let O, M;
    const { props: te, shapeFlag: j, transition: Q, dirs: Z } = p;
    if (O = p.el = i(
      p.type,
      R,
      te && te.is,
      te
    ), j & 8 ? c(O, p.children) : j & 16 && U(
      p.children,
      O,
      null,
      A,
      S,
      Hr(p, R),
      N,
      v
    ), Z && vn(p, null, A, "created"), P(O, p, p.scopeId, N, A), te) {
      for (const de in te)
        de !== "value" && !ro(de) && a(O, de, null, te[de], R, A);
      "value" in te && a(O, "value", null, te.value, R), (M = te.onVnodeBeforeMount) && Pt(M, A, p);
    }
    Z && vn(p, null, A, "beforeMount");
    const se = Ld(S, Q);
    se && Q.beforeEnter(O), o(O, g, _), ((M = te && te.onVnodeMounted) || se || Z) && ht(() => {
      M && Pt(M, A, p), se && Q.enter(O), Z && vn(p, null, A, "mounted");
    }, S);
  }, P = (p, g, _, A, S) => {
    if (_ && y(p, _), A)
      for (let R = 0; R < A.length; R++)
        y(p, A[R]);
    if (S) {
      let R = S.subTree;
      if (g === R || Ss(R.type) && (R.ssContent === g || R.ssFallback === g)) {
        const N = S.vnode;
        P(
          p,
          N,
          N.scopeId,
          N.slotScopeIds,
          S.parent
        );
      }
    }
  }, U = (p, g, _, A, S, R, N, v, O = 0) => {
    for (let M = O; M < p.length; M++) {
      const te = p[M] = v ? sn(p[M]) : Lt(p[M]);
      I(
        null,
        te,
        g,
        _,
        A,
        S,
        R,
        N,
        v
      );
    }
  }, D = (p, g, _, A, S, R, N) => {
    const v = g.el = p.el;
    let { patchFlag: O, dynamicChildren: M, dirs: te } = g;
    O |= p.patchFlag & 16;
    const j = p.props || Ce, Q = g.props || Ce;
    let Z;
    if (_ && yn(_, !1), (Z = Q.onVnodeBeforeUpdate) && Pt(Z, _, g, p), te && vn(g, p, _, "beforeUpdate"), _ && yn(_, !0), (j.innerHTML && Q.innerHTML == null || j.textContent && Q.textContent == null) && c(v, ""), M ? X(
      p.dynamicChildren,
      M,
      v,
      _,
      A,
      Hr(g, S),
      R
    ) : N || he(
      p,
      g,
      v,
      null,
      _,
      A,
      Hr(g, S),
      R,
      !1
    ), O > 0) {
      if (O & 16)
        ae(v, j, Q, _, S);
      else if (O & 2 && j.class !== Q.class && a(v, "class", null, Q.class, S), O & 4 && a(v, "style", j.style, Q.style, S), O & 8) {
        const se = g.dynamicProps;
        for (let de = 0; de < se.length; de++) {
          const me = se[de], Ke = j[me], $e = Q[me];
          ($e !== Ke || me === "value") && a(v, me, Ke, $e, S, _);
        }
      }
      O & 1 && p.children !== g.children && c(v, g.children);
    } else !N && M == null && ae(v, j, Q, _, S);
    ((Z = Q.onVnodeUpdated) || te) && ht(() => {
      Z && Pt(Z, _, g, p), te && vn(g, p, _, "updated");
    }, A);
  }, X = (p, g, _, A, S, R, N) => {
    for (let v = 0; v < g.length; v++) {
      const O = p[v], M = g[v], te = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(O, M) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? u(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      I(
        O,
        M,
        te,
        null,
        A,
        S,
        R,
        N,
        !0
      );
    }
  }, ae = (p, g, _, A, S) => {
    if (g !== _) {
      if (g !== Ce)
        for (const R in g)
          !ro(R) && !(R in _) && a(
            p,
            R,
            g[R],
            null,
            S,
            A
          );
      for (const R in _) {
        if (ro(R)) continue;
        const N = _[R], v = g[R];
        N !== v && R !== "value" && a(p, R, v, N, S, A);
      }
      "value" in _ && a(p, "value", g.value, _.value, S);
    }
  }, F = (p, g, _, A, S, R, N, v, O) => {
    const M = g.el = p ? p.el : l(""), te = g.anchor = p ? p.anchor : l("");
    let { patchFlag: j, dynamicChildren: Q, slotScopeIds: Z } = g;
    Z && (v = v ? v.concat(Z) : Z), p == null ? (o(M, _, A), o(te, _, A), U(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      _,
      te,
      S,
      R,
      N,
      v,
      O
    )) : j > 0 && j & 64 && Q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (X(
      p.dynamicChildren,
      Q,
      _,
      S,
      R,
      N,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || S && g === S.subTree) && xs(
      p,
      g,
      !0
      /* shallow */
    )) : he(
      p,
      g,
      _,
      te,
      S,
      R,
      N,
      v,
      O
    );
  }, ee = (p, g, _, A, S, R, N, v, O) => {
    g.slotScopeIds = v, p == null ? g.shapeFlag & 512 ? S.ctx.activate(
      g,
      _,
      A,
      N,
      O
    ) : V(
      g,
      _,
      A,
      S,
      R,
      N,
      O
    ) : G(p, g, O);
  }, V = (p, g, _, A, S, R, N) => {
    const v = p.component = Qd(
      p,
      A,
      S
    );
    if (dr(p) && (v.ctx.renderer = At), ef(v, !1, N), v.asyncDep) {
      if (S && S.registerDep(v, q, N), !p.el) {
        const O = v.subTree = ne(at);
        w(null, O, g, _);
      }
    } else
      q(
        v,
        p,
        g,
        _,
        S,
        R,
        N
      );
  }, G = (p, g, _) => {
    const A = g.component = p.component;
    if (Kd(p, g, _))
      if (A.asyncDep && !A.asyncResolved) {
        le(A, g, _);
        return;
      } else
        A.next = g, A.update();
    else
      g.el = p.el, A.vnode = g;
  }, q = (p, g, _, A, S, R, N) => {
    const v = () => {
      if (p.isMounted) {
        let { next: j, bu: Q, u: Z, parent: se, vnode: de } = p;
        {
          const Le = _s(p);
          if (Le) {
            j && (j.el = de.el, le(p, j, N)), Le.asyncDep.then(() => {
              p.isUnmounted || v();
            });
            return;
          }
        }
        let me = j, Ke;
        yn(p, !1), j ? (j.el = de.el, le(p, j, N)) : j = de, Q && Rr(Q), (Ke = j.props && j.props.onVnodeBeforeUpdate) && Pt(Ke, se, j, de), yn(p, !0);
        const $e = Br(p), et = p.subTree;
        p.subTree = $e, I(
          et,
          $e,
          // parent may have changed if it's in a teleport
          u(et.el),
          // anchor may have changed if it's in a fragment
          it(et),
          p,
          S,
          R
        ), j.el = $e.el, me === null && qd(p, $e.el), Z && ht(Z, S), (Ke = j.props && j.props.onVnodeUpdated) && ht(
          () => Pt(Ke, se, j, de),
          S
        );
      } else {
        let j;
        const { el: Q, props: Z } = g, { bm: se, m: de, parent: me, root: Ke, type: $e } = p, et = Dn(g);
        if (yn(p, !1), se && Rr(se), !et && (j = Z && Z.onVnodeBeforeMount) && Pt(j, me, g), yn(p, !0), Q && $t) {
          const Le = () => {
            p.subTree = Br(p), $t(
              Q,
              p.subTree,
              p,
              S,
              null
            );
          };
          et && $e.__asyncHydrate ? $e.__asyncHydrate(
            Q,
            p,
            Le
          ) : Le();
        } else {
          Ke.ce && Ke.ce._injectChildStyle($e);
          const Le = p.subTree = Br(p);
          I(
            null,
            Le,
            _,
            A,
            p,
            S,
            R
          ), g.el = Le.el;
        }
        if (de && ht(de, S), !et && (j = Z && Z.onVnodeMounted)) {
          const Le = g;
          ht(
            () => Pt(j, me, Le),
            S
          );
        }
        (g.shapeFlag & 256 || me && Dn(me.vnode) && me.vnode.shapeFlag & 256) && p.a && ht(p.a, S), p.isMounted = !0, g = _ = A = null;
      }
    };
    p.scope.on();
    const O = p.effect = new zl(v);
    p.scope.off();
    const M = p.update = O.run.bind(O), te = p.job = O.runIfDirty.bind(O);
    te.i = p, te.id = p.uid, O.scheduler = () => Ca(te), yn(p, !0), M();
  }, le = (p, g, _) => {
    g.component = p;
    const A = p.vnode.props;
    p.vnode = g, p.next = null, Ad(p, g.props, A, _), zd(p, g.children, _), hn(), $i(p), gn();
  }, he = (p, g, _, A, S, R, N, v, O = !1) => {
    const M = p && p.children, te = p ? p.shapeFlag : 0, j = g.children, { patchFlag: Q, shapeFlag: Z } = g;
    if (Q > 0) {
      if (Q & 128) {
        Ue(
          M,
          j,
          _,
          A,
          S,
          R,
          N,
          v,
          O
        );
        return;
      } else if (Q & 256) {
        xe(
          M,
          j,
          _,
          A,
          S,
          R,
          N,
          v,
          O
        );
        return;
      }
    }
    Z & 8 ? (te & 16 && _t(M, S, R), j !== M && c(_, j)) : te & 16 ? Z & 16 ? Ue(
      M,
      j,
      _,
      A,
      S,
      R,
      N,
      v,
      O
    ) : _t(M, S, R, !0) : (te & 8 && c(_, ""), Z & 16 && U(
      j,
      _,
      A,
      S,
      R,
      N,
      v,
      O
    ));
  }, xe = (p, g, _, A, S, R, N, v, O) => {
    p = p || Bn, g = g || Bn;
    const M = p.length, te = g.length, j = Math.min(M, te);
    let Q;
    for (Q = 0; Q < j; Q++) {
      const Z = g[Q] = O ? sn(g[Q]) : Lt(g[Q]);
      I(
        p[Q],
        Z,
        _,
        null,
        S,
        R,
        N,
        v,
        O
      );
    }
    M > te ? _t(
      p,
      S,
      R,
      !0,
      !1,
      j
    ) : U(
      g,
      _,
      A,
      S,
      R,
      N,
      v,
      O,
      j
    );
  }, Ue = (p, g, _, A, S, R, N, v, O) => {
    let M = 0;
    const te = g.length;
    let j = p.length - 1, Q = te - 1;
    for (; M <= j && M <= Q; ) {
      const Z = p[M], se = g[M] = O ? sn(g[M]) : Lt(g[M]);
      if (xn(Z, se))
        I(
          Z,
          se,
          _,
          null,
          S,
          R,
          N,
          v,
          O
        );
      else
        break;
      M++;
    }
    for (; M <= j && M <= Q; ) {
      const Z = p[j], se = g[Q] = O ? sn(g[Q]) : Lt(g[Q]);
      if (xn(Z, se))
        I(
          Z,
          se,
          _,
          null,
          S,
          R,
          N,
          v,
          O
        );
      else
        break;
      j--, Q--;
    }
    if (M > j) {
      if (M <= Q) {
        const Z = Q + 1, se = Z < te ? g[Z].el : A;
        for (; M <= Q; )
          I(
            null,
            g[M] = O ? sn(g[M]) : Lt(g[M]),
            _,
            se,
            S,
            R,
            N,
            v,
            O
          ), M++;
      }
    } else if (M > Q)
      for (; M <= j; )
        Te(p[M], S, R, !0), M++;
    else {
      const Z = M, se = M, de = /* @__PURE__ */ new Map();
      for (M = se; M <= Q; M++) {
        const Ve = g[M] = O ? sn(g[M]) : Lt(g[M]);
        Ve.key != null && de.set(Ve.key, M);
      }
      let me, Ke = 0;
      const $e = Q - se + 1;
      let et = !1, Le = 0;
      const Rt = new Array($e);
      for (M = 0; M < $e; M++) Rt[M] = 0;
      for (M = Z; M <= j; M++) {
        const Ve = p[M];
        if (Ke >= $e) {
          Te(Ve, S, R, !0);
          continue;
        }
        let lt;
        if (Ve.key != null)
          lt = de.get(Ve.key);
        else
          for (me = se; me <= Q; me++)
            if (Rt[me - se] === 0 && xn(Ve, g[me])) {
              lt = me;
              break;
            }
        lt === void 0 ? Te(Ve, S, R, !0) : (Rt[lt - se] = M + 1, lt >= Le ? Le = lt : et = !0, I(
          Ve,
          g[lt],
          _,
          null,
          S,
          R,
          N,
          v,
          O
        ), Ke++);
      }
      const qn = et ? Od(Rt) : Bn;
      for (me = qn.length - 1, M = $e - 1; M >= 0; M--) {
        const Ve = se + M, lt = g[Ve], Ft = Ve + 1 < te ? g[Ve + 1].el : A;
        Rt[M] === 0 ? I(
          null,
          lt,
          _,
          Ft,
          S,
          R,
          N,
          v,
          O
        ) : et && (me < 0 || M !== qn[me] ? He(lt, _, Ft, 2) : me--);
      }
    }
  }, He = (p, g, _, A, S = null) => {
    const { el: R, type: N, transition: v, children: O, shapeFlag: M } = p;
    if (M & 6) {
      He(p.component.subTree, g, _, A);
      return;
    }
    if (M & 128) {
      p.suspense.move(g, _, A);
      return;
    }
    if (M & 64) {
      N.move(p, g, _, At);
      return;
    }
    if (N === ye) {
      o(R, g, _);
      for (let j = 0; j < O.length; j++)
        He(O[j], g, _, A);
      o(p.anchor, g, _);
      return;
    }
    if (N === Do) {
      W(p, g, _);
      return;
    }
    if (A !== 2 && M & 1 && v)
      if (A === 0)
        v.beforeEnter(R), o(R, g, _), ht(() => v.enter(R), S);
      else {
        const { leave: j, delayLeave: Q, afterLeave: Z } = v, se = () => o(R, g, _), de = () => {
          j(R, () => {
            se(), Z && Z();
          });
        };
        Q ? Q(R, se, de) : de();
      }
    else
      o(R, g, _);
  }, Te = (p, g, _, A = !1, S = !1) => {
    const {
      type: R,
      props: N,
      ref: v,
      children: O,
      dynamicChildren: M,
      shapeFlag: te,
      patchFlag: j,
      dirs: Q,
      cacheIndex: Z
    } = p;
    if (j === -2 && (S = !1), v != null && Xr(v, null, _, p, !0), Z != null && (g.renderCache[Z] = void 0), te & 256) {
      g.ctx.deactivate(p);
      return;
    }
    const se = te & 1 && Q, de = !Dn(p);
    let me;
    if (de && (me = N && N.onVnodeBeforeUnmount) && Pt(me, g, p), te & 6)
      Bt(p.component, _, A);
    else {
      if (te & 128) {
        p.suspense.unmount(_, A);
        return;
      }
      se && vn(p, null, g, "beforeUnmount"), te & 64 ? p.type.remove(
        p,
        g,
        _,
        At,
        A
      ) : M && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !M.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== ye || j > 0 && j & 64) ? _t(
        M,
        g,
        _,
        !1,
        !0
      ) : (R === ye && j & 384 || !S && te & 16) && _t(O, g, _), A && Me(p);
    }
    (de && (me = N && N.onVnodeUnmounted) || se) && ht(() => {
      me && Pt(me, g, p), se && vn(p, null, g, "unmounted");
    }, _);
  }, Me = (p) => {
    const { type: g, el: _, anchor: A, transition: S } = p;
    if (g === ye) {
      Be(_, A);
      return;
    }
    if (g === Do) {
      b(p);
      return;
    }
    const R = () => {
      r(_), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (p.shapeFlag & 1 && S && !S.persisted) {
      const { leave: N, delayLeave: v } = S, O = () => N(_, R);
      v ? v(p.el, R, O) : O();
    } else
      R();
  }, Be = (p, g) => {
    let _;
    for (; p !== g; )
      _ = h(p), r(p), p = _;
    r(g);
  }, Bt = (p, g, _) => {
    const { bum: A, scope: S, job: R, subTree: N, um: v, m: O, a: M } = p;
    Hi(O), Hi(M), A && Rr(A), S.stop(), R && (R.flags |= 8, Te(N, p, g, _)), v && ht(v, g), ht(() => {
      p.isUnmounted = !0;
    }, g), g && g.pendingBranch && !g.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve());
  }, _t = (p, g, _, A = !1, S = !1, R = 0) => {
    for (let N = R; N < p.length; N++)
      Te(p[N], g, _, A, S);
  }, it = (p) => {
    if (p.shapeFlag & 6)
      return it(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const g = h(p.anchor || p.el), _ = g && g[nd];
    return _ ? h(_) : g;
  };
  let pt = !1;
  const Vt = (p, g, _) => {
    p == null ? g._vnode && Te(g._vnode, null, null, !0) : I(
      g._vnode || null,
      p,
      g,
      null,
      null,
      null,
      _
    ), g._vnode = p, pt || (pt = !0, $i(), Yl(), pt = !1);
  }, At = {
    p: I,
    um: Te,
    m: He,
    r: Me,
    mt: V,
    mc: U,
    pc: he,
    pbc: X,
    n: it,
    o: e
  };
  let Nt, $t;
  return {
    render: Vt,
    hydrate: Nt,
    createApp: Sd(Vt, Nt)
  };
}
function Hr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function yn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ld(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function xs(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (ie(o) && ie(r))
    for (let a = 0; a < o.length; a++) {
      const i = o[a];
      let l = r[a];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[a] = sn(r[a]), l.el = i.el), !n && l.patchFlag !== -2 && xs(i, l)), l.type === hr && (l.el = i.el);
    }
}
function Od(e) {
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
function _s(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _s(t);
}
function Hi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Hd = Symbol.for("v-scx"), Bd = () => Fo(Hd);
function Vd(e, t) {
  return Ra(e, null, t);
}
function _n(e, t, n) {
  return Ra(e, t, n);
}
function Ra(e, t, n = Ce) {
  const { immediate: o, deep: r, flush: a, once: i } = n, l = Ae({}, n);
  let s;
  if (gr)
    if (a === "sync") {
      const h = Bd();
      s = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!t || o)
      l.once = !0;
    else
      return {
        stop: Ht,
        resume: Ht,
        pause: Ht
      };
  const f = We;
  l.call = (h, y, E) => Et(h, f, y, E);
  let c = !1;
  a === "post" ? l.scheduler = (h) => {
    ht(h, f && f.suspense);
  } : a !== "sync" && (c = !0, l.scheduler = (h, y) => {
    y ? h() : Ca(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), c && (h.flags |= 2, f && (h.id = f.uid, h.i = f));
  };
  const u = Ju(e, t, l);
  return s && s.push(u), u;
}
function Nd(e, t, n) {
  const o = this.proxy, r = Ie(e) ? e.includes(".") ? ks(o, e) : () => o[e] : e.bind(o, o);
  let a;
  fe(t) ? a = t : (a = t.handler, n = t);
  const i = yo(this), l = Ra(r, a.bind(o), n);
  return i(), l;
}
function ks(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
const Fd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ft(t)}Modifiers`] || e[`${wt(t)}Modifiers`];
function Dd(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Ce;
  let r = n;
  const a = t.startsWith("update:"), i = a && Fd(o, t.slice(7));
  i && (i.trim && (r = n.map((c) => Ie(c) ? c.trim() : c)), i.number && (r = n.map(gu)));
  let l, s = o[l = $r(t)] || // also try camelCase event handler (#2249)
  o[l = $r(ft(t))];
  !s && a && (s = o[l = $r(wt(t))]), s && Et(
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
    e.emitted[l] = !0, Et(
      f,
      e,
      6,
      r
    );
  }
}
function Cs(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const a = e.emits;
  let i = {}, l = !1;
  if (!fe(e)) {
    const s = (f) => {
      const c = Cs(f, t, !0);
      c && (l = !0, Ae(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !a && !l ? (Se(e) && o.set(e, null), null) : (ie(a) ? a.forEach((s) => i[s] = null) : Ae(i, a), Se(e) && o.set(e, i), i);
}
function pr(e, t) {
  return !e || !or(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, wt(t)) || _e(e, t));
}
function Br(e) {
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
    renderCache: c,
    props: u,
    data: h,
    setupState: y,
    ctx: E,
    inheritAttrs: I
  } = e, H = Yo(e);
  let w, K;
  try {
    if (n.shapeFlag & 4) {
      const b = r || o, z = b;
      w = Lt(
        f.call(
          z,
          b,
          c,
          u,
          y,
          h,
          E
        )
      ), K = l;
    } else {
      const b = t;
      w = Lt(
        b.length > 1 ? b(
          u,
          { attrs: l, slots: i, emit: s }
        ) : b(
          u,
          null
        )
      ), K = t.props ? l : jd(l);
    }
  } catch (b) {
    lo.length = 0, ur(b, e, 1), w = ne(at);
  }
  let W = w;
  if (K && I !== !1) {
    const b = Object.keys(K), { shapeFlag: z } = W;
    b.length && z & 7 && (a && b.some(ua) && (K = Ud(
      K,
      a
    )), W = fn(W, K, !1, !0));
  }
  return n.dirs && (W = fn(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && En(W, n.transition), w = W, Yo(H), w;
}
const jd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || or(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ud = (e, t) => {
  const n = {};
  for (const o in e)
    (!ua(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
};
function Kd(e, t, n) {
  const { props: o, children: r, component: a } = e, { props: i, children: l, patchFlag: s } = t, f = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return o ? Bi(o, i, f) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const h = c[u];
        if (i[h] !== o[h] && !pr(f, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Bi(o, i, f) : !0 : !!i;
  return !1;
}
function Bi(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const a = o[r];
    if (t[a] !== e[a] && !pr(n, a))
      return !0;
  }
  return !1;
}
function qd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ss = (e) => e.__isSuspense;
function Wd(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : td(e);
}
const ye = Symbol.for("v-fgt"), hr = Symbol.for("v-txt"), at = Symbol.for("v-cmt"), Do = Symbol.for("v-stc"), lo = [];
let mt = null;
function k(e = !1) {
  lo.push(mt = e ? null : []);
}
function Xd() {
  lo.pop(), mt = lo[lo.length - 1] || null;
}
let go = 1;
function Vi(e) {
  go += e, e < 0 && mt && (mt.hasOnce = !0);
}
function Ts(e) {
  return e.dynamicChildren = go > 0 ? mt || Bn : null, Xd(), go > 0 && mt && mt.push(e), e;
}
function T(e, t, n, o, r, a) {
  return Ts(
    C(
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
function Je(e, t, n, o, r) {
  return Ts(
    ne(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function Zo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Es = ({ key: e }) => e ?? null, jo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ie(e) || Ze(e) || fe(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function C(e, t = null, n = null, o = 0, r = null, a = e === ye ? 0 : 1, i = !1, l = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Es(t),
    ref: t && jo(t),
    scopeId: Zl,
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
    ctx: Ge
  };
  return l ? (Ia(s, n), a & 128 && e.normalize(s)) : n && (s.shapeFlag |= Ie(n) ? 8 : 16), go > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  mt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && mt.push(s), s;
}
const ne = Yd;
function Yd(e, t = null, n = null, o = 0, r = null, a = !1) {
  if ((!e || e === ss) && (e = at), Zo(e)) {
    const l = fn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ia(l, n), go > 0 && !a && mt && (l.shapeFlag & 6 ? mt[mt.indexOf(e)] = l : mt.push(l)), l.patchFlag = -2, l;
  }
  if (af(e) && (e = e.__vccOpts), t) {
    t = Gd(t);
    let { class: l, style: s } = t;
    l && !Ie(l) && (t.class = ge(l)), Se(s) && (xa(s) && !ie(s) && (s = Ae({}, s)), t.style = kn(s));
  }
  const i = Ie(e) ? 1 : Ss(e) ? 128 : Jl(e) ? 64 : Se(e) ? 4 : fe(e) ? 2 : 0;
  return C(
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
function Gd(e) {
  return e ? xa(e) || hs(e) ? Ae({}, e) : e : null;
}
function fn(e, t, n = !1, o = !1) {
  const { props: r, ref: a, patchFlag: i, children: l, transition: s } = e, f = t ? Qr(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Es(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? ie(a) ? a.concat(jo(t)) : [a, jo(t)] : jo(t)
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
    patchFlag: t && e.type !== ye ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && fn(e.ssContent),
    ssFallback: e.ssFallback && fn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return s && o && En(
    c,
    s.clone(c)
  ), c;
}
function je(e = " ", t = 0) {
  return ne(hr, null, e, t);
}
function As(e, t) {
  const n = ne(Do, null, e);
  return n.staticCount = t, n;
}
function oe(e = "", t = !1) {
  return t ? (k(), Je(at, null, e)) : ne(at, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? ne(at) : ie(e) ? ne(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? sn(e) : ne(hr, null, String(e));
}
function sn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : fn(e);
}
function Ia(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (ie(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ia(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !hs(t) ? t._ctx = Ge : r === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else fe(t) ? (t = { default: t, _ctx: Ge }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [je(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Qr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = ge([t.class, o.class]));
      else if (r === "style")
        t.style = kn([t.style, o.style]);
      else if (or(r)) {
        const a = t[r], i = o[r];
        i && a !== i && !(ie(a) && a.includes(i)) && (t[r] = a ? [].concat(a, i) : i);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Pt(e, t, n, o = null) {
  Et(e, t, 7, [
    n,
    o
  ]);
}
const Zd = ds();
let Jd = 0;
function Qd(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Zd, a = {
    uid: Jd++,
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
    scope: new _u(
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
    propsOptions: ms(o, r),
    emitsOptions: Cs(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ce,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Ce,
    data: Ce,
    props: Ce,
    attrs: Ce,
    slots: Ce,
    refs: Ce,
    setupState: Ce,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Dd.bind(null, a), e.ce && e.ce(a), a;
}
let We = null;
const $s = () => We || Ge;
let Jo, ea;
{
  const e = Al(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (a) => {
      r.length > 1 ? r.forEach((i) => i(a)) : r[0](a);
    };
  };
  Jo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => We = n
  ), ea = t(
    "__VUE_SSR_SETTERS__",
    (n) => gr = n
  );
}
const yo = (e) => {
  const t = We;
  return Jo(e), e.scope.on(), () => {
    e.scope.off(), Jo(t);
  };
}, Ni = () => {
  We && We.scope.off(), Jo(null);
};
function Rs(e) {
  return e.vnode.shapeFlag & 4;
}
let gr = !1;
function ef(e, t = !1, n = !1) {
  t && ea(t);
  const { props: o, children: r } = e.vnode, a = Rs(e);
  Ed(e, o, a, t), Id(e, r, n);
  const i = a ? tf(e, t) : void 0;
  return t && ea(!1), i;
}
function tf(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, yd);
  const { setup: o } = n;
  if (o) {
    const r = e.setupContext = o.length > 1 ? of(e) : null, a = yo(e);
    hn();
    const i = mo(
      o,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (gn(), a(), Sl(i)) {
      if (Dn(e) || as(e), i.then(Ni, Ni), t)
        return i.then((l) => {
          Fi(e, l, t);
        }).catch((l) => {
          ur(l, e, 0);
        });
      e.asyncDep = i;
    } else
      Fi(e, i, t);
  } else
    Is(e, t);
}
function Fi(e, t, n) {
  fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = ql(t)), Is(e, n);
}
let Di;
function Is(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Di && !o.render) {
      const r = o.template || Aa(e).template;
      if (r) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: s } = o, f = Ae(
          Ae(
            {
              isCustomElement: a,
              delimiters: l
            },
            i
          ),
          s
        );
        o.render = Di(r, f);
      }
    }
    e.render = o.render || Ht;
  }
  {
    const r = yo(e);
    hn();
    try {
      bd(e);
    } finally {
      gn(), r();
    }
  }
}
const nf = {
  get(e, t) {
    return Qe(e, "get", ""), e[t];
  }
};
function of(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, nf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function za(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ql(Ku(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in io)
        return io[n](e);
    },
    has(t, n) {
      return n in t || n in io;
    }
  })) : e.proxy;
}
function rf(e, t = !0) {
  return fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function af(e) {
  return fe(e) && "__vccOpts" in e;
}
const re = (e, t) => Gu(e, t, gr);
function Xe(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Se(t) && !ie(t) ? Zo(t) ? ne(e, null, [t]) : ne(e, t) : ne(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Zo(n) && (n = [n]), ne(e, t, n));
}
const lf = "3.5.3";
/**
* @vue/runtime-dom v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ta;
const ji = typeof window < "u" && window.trustedTypes;
if (ji)
  try {
    ta = /* @__PURE__ */ ji.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const zs = ta ? (e) => ta.createHTML(e) : (e) => e, sf = "http://www.w3.org/2000/svg", cf = "http://www.w3.org/1998/Math/MathML", Wt = typeof document < "u" ? document : null, Ui = Wt && /* @__PURE__ */ Wt.createElement("template"), uf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Wt.createElementNS(sf, e) : t === "mathml" ? Wt.createElementNS(cf, e) : n ? Wt.createElement(e, { is: n }) : Wt.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Wt.createTextNode(e),
  createComment: (e) => Wt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Wt.querySelector(e),
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
      Ui.innerHTML = zs(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ui.content;
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
}, nn = "transition", to = "animation", Un = Symbol("_vtc"), Ps = {
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
}, Ms = /* @__PURE__ */ Ae(
  {},
  es,
  Ps
), df = (e) => (e.displayName = "Transition", e.props = Ms, e), ff = /* @__PURE__ */ df(
  (e, { slots: t }) => Xe(rd, Ls(e), t)
), bn = (e, t = []) => {
  ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ki = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ls(e) {
  const t = {};
  for (const F in e)
    F in Ps || (t[F] = e[F]);
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
    appearToClass: c = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: y = `${n}-leave-to`
  } = e, E = pf(r), I = E && E[0], H = E && E[1], {
    onBeforeEnter: w,
    onEnter: K,
    onEnterCancelled: W,
    onLeave: b,
    onLeaveCancelled: z,
    onBeforeAppear: J = w,
    onAppear: P = K,
    onAppearCancelled: U = W
  } = t, D = (F, ee, V) => {
    on(F, ee ? c : l), on(F, ee ? f : i), V && V();
  }, X = (F, ee) => {
    F._isLeaving = !1, on(F, u), on(F, y), on(F, h), ee && ee();
  }, ae = (F) => (ee, V) => {
    const G = F ? P : K, q = () => D(ee, F, V);
    bn(G, [ee, q]), qi(() => {
      on(ee, F ? s : a), Kt(ee, F ? c : l), Ki(G) || Wi(ee, o, I, q);
    });
  };
  return Ae(t, {
    onBeforeEnter(F) {
      bn(w, [F]), Kt(F, a), Kt(F, i);
    },
    onBeforeAppear(F) {
      bn(J, [F]), Kt(F, s), Kt(F, f);
    },
    onEnter: ae(!1),
    onAppear: ae(!0),
    onLeave(F, ee) {
      F._isLeaving = !0;
      const V = () => X(F, ee);
      Kt(F, u), Kt(F, h), Hs(), qi(() => {
        F._isLeaving && (on(F, u), Kt(F, y), Ki(b) || Wi(F, o, H, V));
      }), bn(b, [F, V]);
    },
    onEnterCancelled(F) {
      D(F, !1), bn(W, [F]);
    },
    onAppearCancelled(F) {
      D(F, !0), bn(U, [F]);
    },
    onLeaveCancelled(F) {
      X(F), bn(z, [F]);
    }
  });
}
function pf(e) {
  if (e == null)
    return null;
  if (Se(e))
    return [Vr(e.enter), Vr(e.leave)];
  {
    const t = Vr(e);
    return [t, t];
  }
}
function Vr(e) {
  return jr(e);
}
function Kt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Un] || (e[Un] = /* @__PURE__ */ new Set())).add(t);
}
function on(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Un];
  n && (n.delete(t), n.size || (e[Un] = void 0));
}
function qi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hf = 0;
function Wi(e, t, n, o) {
  const r = e._endId = ++hf, a = () => {
    r === e._endId && o();
  };
  if (n)
    return setTimeout(a, n);
  const { type: i, timeout: l, propCount: s } = Os(e, t);
  if (!i)
    return o();
  const f = i + "end";
  let c = 0;
  const u = () => {
    e.removeEventListener(f, h), a();
  }, h = (y) => {
    y.target === e && ++c >= s && u();
  };
  setTimeout(() => {
    c < s && u();
  }, l + 1), e.addEventListener(f, h);
}
function Os(e, t) {
  const n = window.getComputedStyle(e), o = (E) => (n[E] || "").split(", "), r = o(`${nn}Delay`), a = o(`${nn}Duration`), i = Xi(r, a), l = o(`${to}Delay`), s = o(`${to}Duration`), f = Xi(l, s);
  let c = null, u = 0, h = 0;
  t === nn ? i > 0 && (c = nn, u = i, h = a.length) : t === to ? f > 0 && (c = to, u = f, h = s.length) : (u = Math.max(i, f), c = u > 0 ? i > f ? nn : to : null, h = c ? c === nn ? a.length : s.length : 0);
  const y = c === nn && /\b(transform|all)(,|$)/.test(
    o(`${nn}Property`).toString()
  );
  return {
    type: c,
    timeout: u,
    propCount: h,
    hasTransform: y
  };
}
function Xi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Yi(n) + Yi(e[o])));
}
function Yi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Hs() {
  return document.body.offsetHeight;
}
function gf(e, t, n) {
  const o = e[Un];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Gi = Symbol("_vod"), mf = Symbol("_vsh"), vf = Symbol(""), yf = /(^|;)\s*display\s*:/;
function bf(e, t, n) {
  const o = e.style, r = Ie(n);
  let a = !1;
  if (n && !r) {
    if (t)
      if (Ie(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Uo(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Uo(o, i, "");
    for (const i in n)
      i === "display" && (a = !0), Uo(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[vf];
      i && (n += ";" + i), o.cssText = n, a = yf.test(n);
    }
  } else t && e.removeAttribute("style");
  Gi in e && (e[Gi] = a ? o.display : "", e[mf] && (o.display = "none"));
}
const Zi = /\s*!important$/;
function Uo(e, t, n) {
  if (ie(n))
    n.forEach((o) => Uo(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = wf(e, t);
    Zi.test(n) ? e.setProperty(
      wt(o),
      n.replace(Zi, ""),
      "important"
    ) : e[o] = n;
  }
}
const Ji = ["Webkit", "Moz", "ms"], Nr = {};
function wf(e, t) {
  const n = Nr[t];
  if (n)
    return n;
  let o = ft(t);
  if (o !== "filter" && o in e)
    return Nr[t] = o;
  o = lr(o);
  for (let r = 0; r < Ji.length; r++) {
    const a = Ji[r] + o;
    if (a in e)
      return Nr[t] = a;
  }
  return t;
}
const Qi = "http://www.w3.org/1999/xlink";
function el(e, t, n, o, r, a = xu(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Qi, t.slice(6, t.length)) : e.setAttributeNS(Qi, t, n) : n == null || a && !$l(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : pn(n) ? String(n) : n
  );
}
function xf(e, t, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? zs(n) : n);
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
    i === "boolean" ? n = $l(n) : n == null && i === "string" ? (n = "", a = !0) : i === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(t);
}
function _f(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function kf(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const tl = Symbol("_vei");
function Cf(e, t, n, o, r = null) {
  const a = e[tl] || (e[tl] = {}), i = a[t];
  if (o && i)
    i.value = o;
  else {
    const [l, s] = Sf(t);
    if (o) {
      const f = a[t] = Af(
        o,
        r
      );
      _f(e, l, f, s);
    } else i && (kf(e, l, i, s), a[t] = void 0);
  }
}
const nl = /(?:Once|Passive|Capture)$/;
function Sf(e) {
  let t;
  if (nl.test(e)) {
    t = {};
    let o;
    for (; o = e.match(nl); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : wt(e.slice(2)), t];
}
let Fr = 0;
const Tf = /* @__PURE__ */ Promise.resolve(), Ef = () => Fr || (Tf.then(() => Fr = 0), Fr = Date.now());
function Af(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Et(
      $f(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Ef(), n;
}
function $f(e, t) {
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
const ol = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Rf = (e, t, n, o, r, a) => {
  const i = r === "svg";
  t === "class" ? gf(e, o, i) : t === "style" ? bf(e, n, o) : or(t) ? ua(t) || Cf(e, t, n, o, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : If(e, t, o, i)) ? (xf(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && el(e, t, o, i, a, t !== "value")) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), el(e, t, o, i));
};
function If(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ol(t) && fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ol(t) && Ie(n) ? !1 : !!(t in e || e._isVueCE && (/[A-Z]/.test(t) || !Ie(n)));
}
const rl = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bs(e, t, n) {
  const o = /* @__PURE__ */ rs(e, t);
  ar(o) && Ae(o, t);
  class r extends Pa {
    constructor(i) {
      super(o, i, n);
    }
  }
  return r.def = o, r;
}
const zf = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Pa extends zf {
  constructor(t, n = {}, o = ll) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== ll ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Pa) {
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
    this._connected = !1, bt(() => {
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
          (f === Number || f && f.type === Number) && (s in this._props && (this._props[s] = jr(this._props[s])), (l || (l = /* @__PURE__ */ Object.create(null)))[ft(s)] = !0);
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
        _e(this, o) || Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Ot(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = ie(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && o.includes(r) && this._setProp(r, this[r]);
    for (const r of o.map(ft))
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
    let o = n ? this.getAttribute(t) : rl;
    const r = ft(t);
    n && this._numberProps && this._numberProps[r] && (o = jr(o)), this._setProp(r, o, !1, !0);
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
    n !== this._props[t] && (n === rl ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(wt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(wt(t), n + "") : n || this.removeAttribute(wt(t))));
  }
  _update() {
    jf(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ne(this._def, Ae(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0;
      const r = (a, i) => {
        this.dispatchEvent(
          new CustomEvent(
            a,
            ar(i[0]) ? Ae({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      o.emit = (a, ...i) => {
        r(a, i), wt(a) !== a && r(wt(a), i);
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
            const f = n + "-s", c = document.createTreeWalker(s, 1);
            s.setAttribute(f, "");
            let u;
            for (; u = c.nextNode(); )
              u.setAttribute(f, "");
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
const Vs = /* @__PURE__ */ new WeakMap(), Ns = /* @__PURE__ */ new WeakMap(), Qo = Symbol("_moveCb"), al = Symbol("_enterCb"), Pf = (e) => (delete e.props.mode, e), Mf = /* @__PURE__ */ Pf({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Ae({}, Ms, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = $s(), o = Ql();
    let r, a;
    return ls(() => {
      if (!r.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!Vf(
        r[0].el,
        n.vnode.el,
        i
      ))
        return;
      r.forEach(Of), r.forEach(Hf);
      const l = r.filter(Bf);
      Hs(), l.forEach((s) => {
        const f = s.el, c = f.style;
        Kt(f, i), c.transform = c.webkitTransform = c.transitionDuration = "";
        const u = f[Qo] = (h) => {
          h && h.target !== f || (!h || /transform$/.test(h.propertyName)) && (f.removeEventListener("transitionend", u), f[Qo] = null, on(f, i));
        };
        f.addEventListener("transitionend", u);
      });
    }), () => {
      const i = we(e), l = Ls(i);
      let s = i.tag || ye;
      if (r = [], a)
        for (let f = 0; f < a.length; f++) {
          const c = a[f];
          c.el && c.el instanceof Element && (r.push(c), En(
            c,
            ho(
              c,
              l,
              o,
              n
            )
          ), Vs.set(
            c,
            c.el.getBoundingClientRect()
          ));
        }
      a = t.default ? Sa(t.default()) : [];
      for (let f = 0; f < a.length; f++) {
        const c = a[f];
        c.key != null && En(
          c,
          ho(c, l, o, n)
        );
      }
      return ne(s, null, a);
    };
  }
}), Lf = Mf;
function Of(e) {
  const t = e.el;
  t[Qo] && t[Qo](), t[al] && t[al]();
}
function Hf(e) {
  Ns.set(e, e.el.getBoundingClientRect());
}
function Bf(e) {
  const t = Vs.get(e), n = Ns.get(e), o = t.left - n.left, r = t.top - n.top;
  if (o || r) {
    const a = e.el.style;
    return a.transform = a.webkitTransform = `translate(${o}px,${r}px)`, a.transitionDuration = "0s", e;
  }
}
function Vf(e, t, n) {
  const o = e.cloneNode(), r = e[Un];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((s) => s && o.classList.remove(s));
  }), n.split(/\s+/).forEach((l) => l && o.classList.add(l)), o.style.display = "none";
  const a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(o);
  const { hasTransform: i } = Os(o);
  return a.removeChild(o), i;
}
const Nf = ["ctrl", "shift", "alt", "meta"], Ff = {
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
  exact: (e, t) => Nf.some((n) => e[`${n}Key`] && !t.includes(n))
}, Bo = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...a) => {
    for (let i = 0; i < t.length; i++) {
      const l = Ff[t[i]];
      if (l && l(r, t)) return;
    }
    return e(r, ...a);
  });
}, Df = /* @__PURE__ */ Ae({ patchProp: Rf }, uf);
let il;
function Fs() {
  return il || (il = Pd(Df));
}
const jf = (...e) => {
  Fs().render(...e);
}, ll = (...e) => {
  const t = Fs().createApp(...e), { mount: n } = t;
  return t.mount = (o) => {
    const r = Kf(o);
    if (!r) return;
    const a = t._component;
    !fe(a) && !a.render && !a.template && (a.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, Uf(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Uf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Kf(e) {
  return Ie(e) ? document.querySelector(e) : e;
}
const sl = (e) => {
  if (!e || typeof e != "string") return !1;
  const t = e.trim();
  return !t || /[;{}]/.test(t) ? !1 : /^[0-9a-fA-F]{3,4}([0-9a-fA-F]{3,4})?$/.test(t) ? `#${t}` : typeof CSS > "u" || typeof CSS.supports != "function" || CSS.supports("color", t) ? t : !1;
}, Ds = ({ theme: e = "dark", backgroundColor: t, foregroundColor: n } = {}) => {
  const o = e === "light" ? "#fff" : "#000", r = e === "light" ? "#000" : "#fff", a = sl(t), i = sl(n);
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
}, qf = ["width", "viewBox"], Wf = { fill: "currentColor" }, Xf = {
  key: 0,
  d: "M 1.572 23 C 0.948 23 0.299 22.9 0 22.776 L 0 20.43 C 0.125 20.48 0.374 20.505 0.624 20.505 C 1.771 20.505 2.37 20.031 2.37 18.784 L 2.37 5.288 L 5.413 5.288 L 5.413 19.358 C 5.413 21.328 4.316 23 1.572 23 Z M 13.5 17.911 C 9.832 17.911 7.262 15.466 7.262 11.425 C 7.262 7.434 9.857 4.889 13.499 4.889 C 17.166 4.889 19.761 7.434 19.761 11.425 C 19.761 15.466 17.166 17.911 13.499 17.911 Z M 10.356 11.425 C 10.356 14.02 11.603 15.516 13.499 15.516 C 15.395 15.516 16.667 14.02 16.667 11.426 C 16.667 8.781 15.37 7.309 13.499 7.309 C 11.653 7.309 10.356 8.781 10.356 11.425 Z M 25.492 17.911 C 23.047 17.911 21.127 16.24 21.127 13.021 L 21.127 5.289 L 24.195 5.289 L 24.195 12.549 C 24.195 14.245 24.943 15.467 26.415 15.467 C 27.962 15.467 29.06 14.32 29.06 12.524 L 29.06 5.288 L 32.103 5.288 L 32.103 17.462 L 29.084 17.462 L 29.084 16.963 C 29.084 16.589 29.134 16.165 29.209 15.791 C 28.586 16.963 27.513 17.911 25.492 17.911 Z M 34.174 17.462 L 34.174 5.288 L 37.218 5.288 L 37.218 6.211 C 37.218 6.661 37.193 7.035 37.118 7.484 C 37.766 6.112 38.864 4.889 40.685 4.889 C 40.935 4.889 41.135 4.914 41.334 4.964 L 41.334 7.908 C 41.134 7.858 40.86 7.808 40.461 7.808 C 38.59 7.808 37.218 8.756 37.218 11.425 L 37.218 17.462 Z M 42.977 17.462 L 42.977 5.29 L 46.02 5.29 L 46.02 5.838 C 46.02 6.188 45.995 6.562 45.92 7.036 C 46.594 5.813 47.742 4.89 49.662 4.89 C 52.357 4.89 53.953 6.786 53.953 9.78 L 53.953 17.463 L 50.91 17.463 L 50.91 10.229 C 50.91 8.433 50.037 7.31 48.615 7.31 C 47.118 7.31 46.02 8.632 46.02 10.329 L 46.02 17.463 L 42.977 17.463 Z M 60.112 17.912 C 57.992 17.912 55.922 16.515 55.922 14.12 C 55.922 11.376 58.042 10.428 60.662 10.078 L 62.408 9.854 C 63.405 9.729 63.755 9.354 63.755 8.756 C 63.755 7.908 63.056 7.16 61.759 7.16 C 60.337 7.16 59.439 7.958 59.314 9.23 L 56.171 9.23 C 56.371 6.686 58.441 4.89 61.584 4.89 C 65.301 4.89 66.798 6.885 66.798 10.303 L 66.798 17.463 L 63.98 17.463 L 63.98 16.963 C 63.98 16.564 64.03 16.19 64.105 15.791 C 63.456 16.988 62.209 17.911 60.113 17.911 Z M 59.015 13.995 C 59.015 15.068 59.863 15.666 60.935 15.666 C 62.557 15.666 63.855 14.469 63.855 12.748 L 63.855 11.425 C 63.58 11.675 63.156 11.8 62.408 11.949 L 61.41 12.149 C 59.988 12.423 59.015 12.897 59.015 13.995 Z M 68.93 17.463 L 68.93 0 L 71.973 0 L 71.973 17.463 Z",
  transform: "translate(125)"
}, js = {
  __name: "AntikytheraJournalLogo",
  props: {
    showJournal: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return (t, n) => (k(), T("svg", {
      width: e.showJournal ? 197 : 121,
      height: "23",
      viewBox: e.showJournal ? "0 0 197 23" : "0 0 121 23",
      role: "img",
      "aria-label": "Antikythera Journal",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      C("g", Wf, [
        n[0] || (n[0] = As('<path d="M 11.058 12.841 C 10.128 12.841 9.205 12.841 8.244 12.841 C 8.244 12.374 8.244 11.908 8.244 11.367 C 8.155 11.472 8.11 11.517 8.066 11.57 C 7.016 12.998 5.542 13.42 3.868 13.299 C 2.662 13.217 1.627 12.735 0.823 11.788 C -0.413 10.344 -0.398 7.359 1.85 6.164 C 2.855 5.63 3.935 5.405 5.044 5.262 C 5.617 5.187 6.197 5.119 6.771 5.036 C 7.463 4.938 7.85 4.645 7.962 4.141 C 8.073 3.608 7.746 2.938 7.217 2.623 C 5.743 1.751 3.905 2.517 3.488 4.187 C 3.466 4.277 3.354 4.42 3.279 4.42 C 2.289 4.435 1.299 4.427 0.28 4.427 C 0.362 3.352 0.726 2.457 1.419 1.69 C 2.349 0.653 3.547 0.149 4.895 0.036 C 5.714 -0.031 6.562 -0.009 7.366 0.142 C 9.554 0.548 10.805 2.036 11.006 4.314 C 11.013 4.412 11.051 4.502 11.073 4.593 C 11.058 7.344 11.058 10.096 11.058 12.841 Z M 8.073 6.826 C 7.433 6.984 6.8 7.134 6.175 7.299 C 5.475 7.487 4.753 7.638 4.083 7.916 C 3.361 8.217 3.079 8.811 3.16 9.54 C 3.235 10.209 3.696 10.765 4.396 10.923 C 5.542 11.186 6.555 10.916 7.359 10.014 C 8.215 9.074 8.088 7.908 8.073 6.826 Z" transform="translate(107.927 4.987)"></path><path d="M 0 17.819 C 0 11.864 0 5.947 0 0 C 1.02 0 2.032 0 3.052 0 C 3.052 2.316 3.052 4.632 3.052 6.955 C 3.268 6.692 3.469 6.406 3.707 6.165 C 4.66 5.188 5.858 4.88 7.168 4.977 C 9.721 5.18 10.987 7.007 11.084 9.271 C 11.195 12.075 11.121 14.887 11.121 17.699 C 11.121 17.737 11.099 17.767 11.084 17.819 C 10.086 17.819 9.089 17.819 8.032 17.819 C 8.032 17.669 8.032 17.526 8.032 17.376 C 8.024 14.925 8.039 12.481 8.002 10.03 C 7.995 9.571 7.861 9.083 7.667 8.669 C 6.938 7.098 4.786 7.007 3.707 8.489 C 3.305 9.037 3.097 9.654 3.097 10.338 C 3.089 12.684 3.089 15.037 3.089 17.383 C 3.089 17.518 3.089 17.654 3.089 17.812 C 2.047 17.819 1.035 17.819 0 17.819 Z" transform="translate(74.233 0)"></path><path d="M 3.059 17.827 C 2.017 17.827 1.02 17.827 0 17.827 C 0 11.88 0 5.955 0 0 C 1.005 0 2.002 0 3.052 0 C 3.052 3.391 3.052 6.789 3.052 10.248 C 3.714 9.511 4.325 8.827 4.943 8.158 C 5.739 7.286 6.543 6.421 7.354 5.556 C 7.429 5.474 7.555 5.383 7.66 5.383 C 8.88 5.368 10.108 5.376 11.433 5.376 C 9.721 7.188 8.069 8.932 6.402 10.699 C 8.218 13.068 10.027 15.421 11.873 17.827 C 11.679 17.834 11.567 17.849 11.448 17.849 C 10.421 17.849 9.386 17.834 8.359 17.857 C 8.054 17.864 7.868 17.774 7.689 17.518 C 6.692 16.09 5.672 14.677 4.66 13.263 C 4.563 13.135 4.466 13.007 4.362 12.872 C 3.945 13.278 3.528 13.661 3.141 14.075 C 3.067 14.158 3.067 14.331 3.067 14.458 C 3.052 15.564 3.059 16.676 3.059 17.827 Z" transform="translate(39.918 0)"></path><path d="M 12.109 8.827 C 11.841 10.73 10.859 12.03 9.199 12.76 C 7.226 13.624 5.217 13.602 3.266 12.677 C 1.45 11.805 0.49 10.233 0.155 8.294 C -0.15 6.512 -0.046 4.76 0.847 3.128 C 1.859 1.279 3.445 0.279 5.522 0.046 C 6.757 -0.09 7.948 0.068 9.057 0.632 C 10.829 1.534 11.7 3.091 12.027 4.985 C 12.161 5.767 12.169 6.564 12.236 7.406 C 9.177 7.406 6.199 7.406 3.184 7.406 C 3.244 8.662 3.609 9.715 4.651 10.391 C 5.656 11.045 6.72 11.075 7.785 10.519 C 8.365 10.218 8.723 9.722 8.909 9.098 C 8.938 8.993 9.057 8.835 9.132 8.835 C 10.107 8.827 11.082 8.827 12.109 8.827 Z M 8.99 5.136 C 8.916 3.316 7.755 2.264 5.924 2.346 C 4.495 2.406 3.125 3.812 3.207 5.136 C 5.135 5.136 7.063 5.136 8.99 5.136 Z" transform="translate(86.651 4.962)"></path><path d="M 0.28 4.5 C 0.437 2.913 1.114 1.695 2.439 0.928 C 4.426 -0.222 6.526 -0.275 8.61 0.612 C 10.069 1.229 10.701 2.522 10.955 4.026 C 11.029 4.47 11.059 4.921 11.059 5.364 C 11.066 7.778 11.066 10.184 11.066 12.597 C 11.066 12.695 11.059 12.793 11.051 12.905 C 10.106 12.905 9.183 12.905 8.208 12.905 C 8.23 12.394 8.253 11.905 8.275 11.357 C 7.784 12.124 7.173 12.672 6.377 13.011 C 4.583 13.778 2.342 13.402 1.084 12.116 C -0.851 10.139 -0.099 6.868 2.573 5.928 C 3.556 5.582 4.613 5.462 5.64 5.259 C 6.012 5.184 6.399 5.161 6.779 5.109 C 7.471 5.011 7.873 4.718 7.985 4.229 C 8.096 3.718 7.791 3.056 7.285 2.718 C 5.871 1.785 3.868 2.597 3.503 4.244 C 3.481 4.342 3.355 4.492 3.273 4.492 C 2.298 4.507 1.315 4.5 0.28 4.5 Z M 8.156 6.853 C 7.538 7.018 7.039 7.154 6.548 7.289 C 5.729 7.515 4.888 7.672 4.099 7.981 C 3.399 8.251 3.087 8.883 3.161 9.522 C 3.243 10.274 3.704 10.815 4.434 10.996 C 5.871 11.342 7.464 10.635 7.895 9.116 C 8.104 8.402 8.081 7.612 8.156 6.853 Z" transform="translate(0 4.92)"></path><path d="M 3.089 12.869 C 2.04 12.869 1.035 12.869 0 12.869 C 0 8.726 0 4.591 0 0.433 C 1.012 0.433 2.025 0.433 3.097 0.433 C 3.067 0.952 3.045 1.463 3.015 2.057 C 3.186 1.824 3.312 1.651 3.446 1.486 C 4.399 0.328 5.657 -0.078 7.086 0.012 C 9.64 0.178 10.816 1.959 11.054 4.005 C 11.106 4.463 11.121 4.922 11.121 5.38 C 11.128 7.726 11.121 10.072 11.121 12.418 C 11.121 12.553 11.121 12.689 11.121 12.854 C 10.086 12.854 9.081 12.854 8.024 12.854 C 8.024 12.704 8.024 12.553 8.024 12.41 C 8.024 10.05 8.039 7.689 8.017 5.335 C 8.009 4.899 7.928 4.441 7.793 4.02 C 7.22 2.238 5.263 2.177 4.25 2.974 C 3.513 3.553 3.119 4.335 3.104 5.268 C 3.082 7.636 3.089 10.012 3.089 12.38 C 3.089 12.531 3.089 12.681 3.089 12.869 Z" transform="translate(13.076 4.965)"></path><path d="M 0 0.001 C 1.124 0.001 2.203 -0.006 3.275 0.016 C 3.372 0.016 3.521 0.197 3.558 0.317 C 4.221 2.34 4.868 4.362 5.531 6.385 C 5.843 7.339 6.163 8.294 6.498 9.302 C 7.474 6.159 8.426 3.084 9.386 0.009 C 10.466 0.009 11.515 0.009 12.617 0.009 C 12.334 0.783 12.066 1.528 11.791 2.272 C 9.952 7.294 8.114 12.317 6.268 17.339 C 6.223 17.452 6.089 17.61 6 17.61 C 4.972 17.633 3.945 17.625 2.866 17.625 C 3.149 16.866 3.409 16.144 3.677 15.422 C 4.02 14.497 4.377 13.588 4.704 12.655 C 4.764 12.475 4.771 12.234 4.704 12.061 C 3.231 8.257 1.734 4.452 0.246 0.655 C 0.164 0.46 0.089 0.249 0 0.001 Z" transform="translate(51.492 5.374)"></path><path d="M 8.85 4.466 C 8.85 5.323 8.85 6.12 8.85 6.955 C 7.846 6.955 6.863 6.955 5.858 6.955 C 5.851 7.12 5.843 7.24 5.843 7.361 C 5.843 9.083 5.843 10.804 5.843 12.526 C 5.843 12.601 5.843 12.676 5.843 12.752 C 5.888 14.285 6.722 14.834 8.21 14.646 C 8.314 14.631 8.426 14.624 8.582 14.601 C 8.582 15.353 8.59 16.075 8.575 16.797 C 8.575 16.872 8.456 16.985 8.374 17 C 7.146 17.27 5.918 17.308 4.734 16.797 C 3.446 16.24 2.873 15.15 2.821 13.834 C 2.739 11.707 2.762 9.571 2.747 7.436 C 2.747 7.286 2.747 7.143 2.747 6.955 C 1.816 6.955 0.916 6.955 0 6.955 C 0 6.12 0 5.331 0 4.496 C 0.886 4.496 1.787 4.496 2.732 4.496 C 2.732 2.985 2.732 1.504 2.732 0 C 3.789 0 4.794 0 5.843 0 C 5.843 1.474 5.843 2.94 5.843 4.451 C 6.841 4.466 7.823 4.466 8.85 4.466 Z" transform="translate(64.347 0.888)"></path><path d="M 8.895 6.955 C 7.875 6.955 6.9 6.955 5.895 6.955 C 5.888 7.105 5.88 7.225 5.88 7.346 C 5.88 9.12 5.873 10.895 5.88 12.669 C 5.88 12.917 5.91 13.165 5.962 13.406 C 6.126 14.18 6.699 14.654 7.496 14.676 C 7.853 14.684 8.21 14.676 8.605 14.676 C 8.612 14.707 8.635 14.804 8.635 14.895 C 8.635 15.458 8.62 16.022 8.642 16.579 C 8.65 16.864 8.583 17.007 8.277 17.052 C 7.354 17.21 6.431 17.263 5.508 17.052 C 3.796 16.669 2.814 15.361 2.806 13.473 C 2.799 11.466 2.806 9.451 2.806 7.443 C 2.806 7.293 2.806 7.15 2.806 6.962 C 1.861 6.962 0.945 6.962 0 6.962 C 0 6.12 0 5.323 0 4.489 C 0.916 4.489 1.824 4.489 2.791 4.489 C 2.791 2.977 2.791 1.504 2.791 0 C 3.834 0 4.831 0 5.858 0 C 5.858 1.474 5.858 2.947 5.858 4.466 C 6.878 4.466 7.875 4.466 8.888 4.466 C 8.895 5.308 8.895 6.105 8.895 6.955 Z" transform="translate(24.875 0.903)"></path><path d="M 3.022 2.456 C 4.213 0.223 5.94 -0.221 7.22 0.087 C 7.22 1.065 7.22 2.042 7.22 3.042 C 6.729 3.042 6.245 2.997 5.761 3.05 C 4.242 3.208 3.305 4.162 3.118 5.704 C 3.074 6.072 3.059 6.448 3.059 6.824 C 3.051 8.824 3.059 10.816 3.059 12.847 C 2.039 12.847 1.027 12.847 0 12.847 C 0 8.726 0 4.599 0 0.441 C 0.997 0.441 2.002 0.441 3.029 0.441 C 3.022 1.11 3.022 1.779 3.022 2.456 Z" transform="translate(100.405 4.965)"></path><path d="M 0 0 C 1.027 0 2.025 0 3.052 0 C 3.052 4.143 3.052 8.271 3.052 12.428 C 2.04 12.428 1.035 12.428 0 12.428 C 0 8.293 0 4.173 0 0 Z" transform="translate(34.73 5.39)"></path>', 11)),
        e.showJournal ? (k(), T("path", Xf)) : oe("", !0)
      ])
    ], 8, qf));
  }
}, Yf = "text-m font-sans flex w-full items-center justify-center border px-[16px] leading-[1.1] transition-transform duration-300 ease-out", bo = {
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
    const t = e, n = re(() => typeof t.href == "string" && t.href.trim() !== ""), o = re(() => t.disabled || t.variant === "disabled"), r = re(() => n.value && !o.value ? "a" : "button"), a = re(() => r.value === "a" ? t.href : void 0), i = re(() => typeof t.download == "string" ? t.download : ""), l = re(() => t.size === "large" ? "rounded-lg py-[10px]" : "rounded-[4px] py-[4px]"), s = re(() => o.value ? "cursor-not-allowed" : "cursor-pointer hover:scale-[0.99] hover:duration-100"), f = re(() => o.value ? `border-stroke-light bg-stroke-light ${t.variant === "dark" ? "text-black/50" : "text-white/50"}` : t.variant === "dark" ? "border-stroke-light bg-black text-white" : "border-stroke-dark bg-white text-black");
    return (c, u) => (k(), Je(gd(r.value), {
      href: r.value === "a" ? a.value : void 0,
      target: r.value === "a" && e.target ? e.target : void 0,
      rel: r.value === "a" && e.target === "_blank" ? "noopener noreferrer" : e.rel,
      download: r.value === "a" && e.download ? i.value : void 0,
      type: r.value === "button" ? e.type : void 0,
      disabled: r.value === "button" ? o.value : void 0,
      "aria-disabled": o.value ? "true" : void 0,
      class: ge([Yf, l.value, s.value, f.value])
    }, {
      default: Zt(() => [
        vd(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "target", "rel", "download", "type", "disabled", "aria-disabled", "class"]));
  }
}, wo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Gf = {}, Zf = {
  width: "14",
  height: "23",
  viewBox: "0 0 14 23",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
function Jf(e, t) {
  return k(), T("svg", Zf, t[0] || (t[0] = [
    As('<path d="M11.7937 4.1625V13.1813V22.2H11.1H10.4062V13.1813V4.1625H11.1H11.7937Z"></path><path d="M1.3875 4.1625V10.7531V17.3438H0.69375H0V10.7531V4.1625H0.69375H1.3875Z"></path><path d="M3.46875 4.1625V10.7531V17.3438H2.775H2.08125V10.7531V4.1625H2.775H3.46875Z"></path><path d="M5.55 4.1625V10.7531V17.3438H4.85625H4.1625V10.7531V4.1625H4.85625H5.55Z"></path><path d="M7.63125 4.1625V10.7531V17.3438H6.9375H6.24375V10.7531V4.1625H6.9375H7.63125Z"></path><path d="M9.7125 0V8.67188V17.3438H9.01875H8.325V8.67188V0H9.01875H9.7125Z"></path><path d="M13.875 4.1625V10.7531V17.3438H13.1813H12.4875V10.7531V4.1625H13.1813H13.875Z"></path>', 7)
  ]));
}
const na = /* @__PURE__ */ wo(Gf, [["render", Jf]]);
function cl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cl(Object(n), !0).forEach(function(o) {
      Qf(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cl(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Qf(e, t, n) {
  return t = ep(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ep(e) {
  var t = tp(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tp(e, t) {
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
function er(e) {
  return e._type === "span" && "text" in e && typeof e.text == "string" && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every((t) => typeof t == "string"));
}
function Us(e) {
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
function Ks(e) {
  return Us(e) && "listItem" in e && typeof e.listItem == "string" && (typeof e.level > "u" || typeof e.level == "number");
}
function qs(e) {
  return e._type === "@list";
}
function Ws(e) {
  return e._type === "@span";
}
function Xs(e) {
  return e._type === "@text";
}
const dl = ["strong", "em", "code", "underline", "strike-through"];
function np(e, t, n) {
  if (!er(e) || !e.marks)
    return [];
  if (!e.marks.length)
    return [];
  const o = e.marks.slice(), r = {};
  return o.forEach((a) => {
    r[a] = 1;
    for (let i = t + 1; i < n.length; i++) {
      const l = n[i];
      if (l && er(l) && Array.isArray(l.marks) && l.marks.indexOf(a) !== -1)
        r[a]++;
      else
        break;
    }
  }), o.sort((a, i) => op(r, a, i));
}
function op(e, t, n) {
  const o = e[t], r = e[n];
  if (o !== r)
    return r - o;
  const a = dl.indexOf(t), i = dl.indexOf(n);
  return a !== i ? a - i : t.localeCompare(n);
}
function rp(e) {
  var t;
  const {
    children: n,
    markDefs: o = []
  } = e;
  if (!n || !n.length)
    return [];
  const r = n.map(np), a = {
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
    let c = 1;
    if (i.length > 1)
      for (c; c < i.length; c++) {
        const h = ((t = i[c]) == null ? void 0 : t.markKey) || "", y = f.indexOf(h);
        if (y === -1)
          break;
        f.splice(y, 1);
      }
    i = i.slice(0, c);
    let u = i[i.length - 1];
    if (u) {
      for (const h of f) {
        const y = o.find((H) => H._key === h), E = y ? y._type : h, I = {
          _type: "@span",
          _key: s._key,
          children: [],
          markDef: y,
          markType: E,
          markKey: h
        };
        u.children.push(I), i.push(I), u = I;
      }
      if (er(s)) {
        const h = s.text.split(`
`);
        for (let y = h.length; y-- > 1; )
          h.splice(y, 0, `
`);
        u.children = u.children.concat(h.map((y) => ({
          _type: "@text",
          text: y
        })));
      } else
        u.children = u.children.concat(s);
    }
  }
  return a.children;
}
function ap(e, t) {
  const n = [];
  let o;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (a) {
      if (!Ks(a)) {
        n.push(a), o = void 0;
        continue;
      }
      if (!o) {
        o = Vo(a, r, t), n.push(o);
        continue;
      }
      if (ip(a, o)) {
        o.children.push(a);
        continue;
      }
      if ((a.level || 1) > o.level) {
        const i = Vo(a, r, t);
        if (t === "html") {
          const l = o.children[o.children.length - 1], s = ul(ul({}, l), {}, {
            children: [...l.children, i]
          });
          o.children[o.children.length - 1] = s;
        } else
          o.children.push(i);
        o = i;
        continue;
      }
      if ((a.level || 1) < o.level) {
        const i = n[n.length - 1], l = i && oa(i, a);
        if (l) {
          o = l, o.children.push(a);
          continue;
        }
        o = Vo(a, r, t), n.push(o);
        continue;
      }
      if (a.listItem !== o.listItem) {
        const i = n[n.length - 1], l = i && oa(i, {
          level: a.level || 1
        });
        if (l && l.listItem === a.listItem) {
          o = l, o.children.push(a);
          continue;
        } else {
          o = Vo(a, r, t), n.push(o);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", a), n.push(a);
    }
  }
  return n;
}
function ip(e, t) {
  return (e.level || 1) === t.level && e.listItem === t.listItem;
}
function Vo(e, t, n) {
  return {
    _type: "@list",
    _key: `${e._key || `${t}`}-parent`,
    mode: n,
    level: e.level || 1,
    listItem: e.listItem,
    children: [e]
  };
}
function oa(e, t) {
  const n = t.level || 1, o = t.listItem || "normal", r = typeof t.listItem == "string";
  if (qs(e) && (e.level || 1) === n && r && (e.listItem || "normal") === o)
    return e;
  if (!("children" in e))
    return;
  const a = e.children[e.children.length - 1];
  return a && !er(a) ? oa(a, t) : void 0;
}
function Ys(e) {
  let t = "";
  return e.children.forEach((n) => {
    Xs(n) ? t += n.text : Ws(n) && (t += Ys(n));
  }), t;
}
const lp = "html";
function sp(e, t) {
  const { block: n, list: o, listItem: r, marks: a, types: i, ...l } = t;
  return {
    ...e,
    block: no(e, t, "block"),
    list: no(e, t, "list"),
    listItem: no(e, t, "listItem"),
    marks: no(e, t, "marks"),
    types: no(e, t, "types"),
    ...l
  };
}
function no(e, t, n) {
  const o = t[n], r = e[n];
  return typeof o == "function" || o && typeof r == "function" ? o : o ? {
    ...r,
    ...o
  } : r;
}
const De = (e) => (t, { slots: n }) => {
  var o;
  return Xe(e, (o = n.default) == null ? void 0 : o.call(n));
}, cp = ({ value: e }, { slots: t }) => {
  var n;
  return Xe("a", { href: e == null ? void 0 : e.href }, (n = t.default) == null ? void 0 : n.call(t));
}, up = { textDecoration: "underline" }, dp = {
  code: De("code"),
  em: De("em"),
  link: cp,
  "strike-through": De("del"),
  strong: De("strong"),
  underline: (e, { slots: t }) => {
    var n;
    return Xe("span", { style: up }, (n = t.default) == null ? void 0 : n.call(t));
  }
}, fp = {
  number: De("ol"),
  bullet: De("ul")
}, pp = De("li"), xo = (e, t) => `[@portabletext/vue] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`, Gs = (e) => xo(`block type "${e}"`, "types"), hp = (e) => xo(`mark type "${e}"`, "marks"), gp = (e) => xo(`block style "${e}"`, "block"), mp = (e) => xo(`list style "${e}"`, "list"), vp = (e) => xo(`list item style "${e}"`, "listItem");
function yp(e) {
  console.warn(e);
}
const fl = { display: "none" }, bp = ({
  value: e,
  isInline: t
}) => {
  const n = Gs(e._type);
  return t ? Xe("span", { style: fl }, n) : Xe("div", { style: fl }, n);
}, wp = ({ markType: e }, { slots: t }) => {
  var n;
  return Xe("span", { class: `unknown__pt__mark__${e}` }, (n = t.default) == null ? void 0 : n.call(t));
}, xp = De("p"), _p = De("ul"), kp = De("li"), Cp = () => Xe("br"), Sp = {
  normal: De("p"),
  blockquote: De("blockquote"),
  h1: De("h1"),
  h2: De("h2"),
  h3: De("h3"),
  h4: De("h4"),
  h5: De("h5"),
  h6: De("h6")
}, pl = {
  types: {},
  block: Sp,
  marks: dp,
  list: fp,
  listItem: pp,
  hardBreak: Cp,
  unknownType: bp,
  unknownMark: wp,
  unknownList: _p,
  unknownListItem: kp,
  unknownBlockStyle: xp
}, Tp = (e, t) => {
  function n(u) {
    const { node: h, index: y, isInline: E } = u, I = h._key || `node-${y}`;
    return qs(h) ? a(h, y, I) : Ks(h) ? r(h, y, I) : Ws(h) ? i(h, y, I) : o(h) ? c(h, y, I, E) : Us(h) ? l(h, y, I, E) : Xs(h) ? s(h, I) : f(h, y, I, E);
  }
  function o(u) {
    return u._type in e.types;
  }
  function r(u, h, y) {
    const E = hl({ node: u, index: h, isInline: !1, renderNode: n }), I = e.listItem, H = (typeof I == "function" ? I : I[u.listItem]) || e.unknownListItem;
    if (H === e.unknownListItem) {
      const K = u.listItem || "bullet";
      t(vp(K), {
        type: K,
        nodeType: "listItemStyle"
      });
    }
    let w = E.children;
    if (u.style && u.style !== "normal") {
      const { listItem: K, ...W } = u;
      w = n({
        node: W,
        index: h,
        isInline: !1,
        renderNode: n
      });
    }
    return Xe(
      H,
      {
        key: y,
        value: u,
        index: h,
        isInline: !1,
        renderNode: n
      },
      () => w
    );
  }
  function a(u, h, y) {
    const E = u.children.map(
      (w, K) => n({
        node: w._key ? w : { ...w, _key: `li-${h}-${K}` },
        index: K,
        isInline: !1,
        renderNode: n
      })
    ), I = e.list, H = (typeof I == "function" ? I : I[u.listItem]) || e.unknownList;
    if (H === e.unknownList) {
      const w = u.listItem || "bullet";
      t(mp(w), {
        nodeType: "listStyle",
        type: w
      });
    }
    return Xe(
      H,
      {
        key: y,
        value: u,
        index: h,
        isInline: !1,
        renderNode: n
      },
      () => E
    );
  }
  function i(u, h, y) {
    const { markDef: E, markType: I, markKey: H } = u, w = e.marks[I] || e.unknownMark, K = u.children.map(
      (W, b) => n({ node: W, index: b, isInline: !0, renderNode: n })
    );
    return w === e.unknownMark && t(hp(I), {
      nodeType: "mark",
      type: I
    }), Xe(
      w,
      {
        key: y,
        text: Ys(u),
        value: E,
        markType: I,
        markKey: H,
        renderNode: n
      },
      () => K
    );
  }
  function l(u, h, y, E) {
    const { _key: I, children: H, ...w } = hl({
      node: u,
      index: h,
      isInline: E,
      renderNode: n
    }), K = w.node.style || "normal", W = (typeof e.block == "function" ? e.block : e.block[K]) || e.unknownBlockStyle;
    return W === e.unknownBlockStyle && t(gp(K), {
      nodeType: "blockStyle",
      type: K
    }), Xe(W, { key: y, ...w, value: w.node, renderNode: n }, () => H);
  }
  function s(u, h) {
    if (u.text === `
`) {
      const y = e.hardBreak;
      return y ? Xe(y, { key: h }) : `
`;
    }
    return u.text;
  }
  function f(u, h, y, E) {
    const I = {
      value: u,
      isInline: E,
      index: h,
      renderNode: n
    };
    t(Gs(u._type), {
      nodeType: "block",
      type: u._type
    });
    const H = e.unknownType;
    return Xe(H, { key: y, ...I });
  }
  function c(u, h, y, E) {
    const I = {
      value: u,
      isInline: E,
      index: h,
      renderNode: n
    }, H = e.types[u._type];
    return H ? Xe(H, { key: y, ...I }) : void 0;
  }
  return n;
};
function hl(e) {
  const { node: t, index: n, isInline: o, renderNode: r } = e, a = rp(t).map(
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
const tr = /* @__PURE__ */ rs({
  __name: "vue-portable-text",
  props: {
    value: {},
    components: {},
    onMissingComponent: { type: [Function, Boolean], default: () => yp },
    listNestingMode: {}
  },
  setup(e) {
    function t() {
    }
    const n = e, o = () => {
      const r = n.onMissingComponent || t, a = Array.isArray(n.value) ? n.value : [n.value], i = ap(a, n.listNestingMode || lp), l = n.components ? sp(pl, n.components) : pl, s = Tp(l, r);
      return i.map(
        (f, c) => s({ node: f, index: c, isInline: !1, renderNode: s })
      );
    };
    return (r, a) => (k(), Je(o));
  }
}), Ep = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "tel:"]), Zs = "https://portable-text.invalid/", Js = () => typeof window > "u" ? void 0 : window.location, Qs = (e, t = Js()) => {
  if (typeof e != "string")
    return;
  const n = e.trim();
  if (n)
    try {
      const o = new URL(n, (t == null ? void 0 : t.href) || Zs);
      return Ep.has(o.protocol) ? n : void 0;
    } catch {
      return;
    }
}, Ap = (e, t = Js()) => {
  const n = Qs(e, t);
  if (!n)
    return !1;
  try {
    const o = new URL(n, (t == null ? void 0 : t.href) || Zs);
    return o.protocol !== "http:" && o.protocol !== "https:" ? !1 : t ? o.origin !== t.origin : /^(?:https?:)?\/\//i.test(n);
  } catch {
    return !1;
  }
}, Ct = {
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
      const a = Qs((o == null ? void 0 : o.href) || (o == null ? void 0 : o.link));
      if (!a)
        return (l = r.default) == null ? void 0 : l.call(r);
      const i = Ap(a);
      return Xe(
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
    return (o, r) => (k(), Je(Ot(tr), {
      value: e.value,
      components: n
    }, null, 8, ["value"]));
  }
}, $p = {}, Rp = {
  width: "8",
  height: "9",
  viewBox: "0 0 8 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Ip(e, t) {
  return k(), T("svg", Rp, t[0] || (t[0] = [
    C("path", {
      d: "M1.94627 0.529297L0.807578 1.73766H5.41928L0.28125 7.19009L1.08593 8.044L6.22395 2.59158V7.48547L7.36265 6.2771V0.529297H1.94627Z",
      fill: "var(--white)"
    }, null, -1)
  ]));
}
const zp = /* @__PURE__ */ wo($p, [["render", Ip]]), Pp = { class: "border-stroke-light flex flex-nowrap justify-between border-t pt-[10px] sm:flex-wrap lg:flex-nowrap" }, Mp = { class: "text-right" }, Lp = ["href", "data-ph-entry", "onClick"], gl = {
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
    return (r, a) => (k(), T("article", {
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
      ne(Ct, { value: e.description }, null, 8, ["value"]),
      C("section", Pp, [
        C("p", null, [
          C("a", {
            class: "group relative hover:opacity-60",
            target: "_blank",
            href: "https://www.antikythera.org",
            "data-ph-capture": "",
            "data-ph-component": "antikythera-footer-link",
            "data-ph-action": "external-link-click",
            "data-ph-link-kind": "antikythera-site",
            onClick: a[0] || (a[0] = (i) => o("antikythera-site", "https://www.antikythera.org"))
          }, [
            a[1] || (a[1] = C("span", null, "antikythera.org", -1)),
            ne(zp, { class: "absolute bottom-[.15em] -right-[.95em] h-[.7em] w-[.7em] sm:opacity-0 lg:group-hover:opacity-100" })
          ])
        ]),
        C("ul", Mp, [
          (k(!0), T(ye, null, xt(e.externalLinks, (i) => (k(), T("li", {
            key: i.linkUrl || i.linkTitle,
            class: "inline mx-1 first:ml-0 last:mr-0"
          }, [
            C("a", {
              href: i.linkUrl,
              target: "_blank",
              class: "hover:opacity-60",
              "data-ph-capture": "",
              "data-ph-component": "antikythera-footer-link",
              "data-ph-action": "external-link-click",
              "data-ph-link-kind": "settings-link",
              "data-ph-entry": e.entry,
              onClick: (l) => o("settings-link", i.linkUrl, i.linkTitle)
            }, ue(i.linkTitle), 9, Lp)
          ]))), 128))
        ])
      ])
    ], 2));
  }
}, Op = "cdn.sanity.io", Hp = (e) => {
  if (!e)
    return e;
  try {
    const t = new URL(e);
    return t.hostname !== Op ? e : (t.searchParams.has("dl") || t.searchParams.set("dl", ""), t.toString());
  } catch {
    return e;
  }
}, ml = {
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
    const n = e, o = t, r = re(() => n.fileType.toLowerCase() === "markdown"), a = re(() => r.value ? Hp(n.url) : n.url), i = () => {
      n.url && o("download");
    };
    return (l, s) => (k(), Je(bo, {
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
      default: Zt(() => [
        je(ue(e.label), 1)
      ]),
      _: 1
    }, 8, ["variant", "href", "target", "download", "disabled", "data-ph-entry", "data-ph-file-type"]));
  }
}, Bp = ["src", "alt"], Vp = {
  key: 0,
  class: "mt-[10px] flex shrink-0 flex-col gap-[10px]"
}, Ma = {
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
    }
  },
  emits: ["download"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = re(() => {
      var b, z;
      return ((z = (b = n.entry) == null ? void 0 : b.pdfPreview) == null ? void 0 : z.override) === !0;
    }), a = re(() => {
      var b, z;
      return ((z = (b = n.entry) == null ? void 0 : b.pdfPreview) == null ? void 0 : z.url) || "";
    }), i = re(() => {
      var b, z, J;
      return ((z = (b = n.entry) == null ? void 0 : b.pdfPreview) == null ? void 0 : z.altText) || `${((J = n.entry) == null ? void 0 : J.title) || "Article"} PDF preview`;
    }), l = re(() => {
      var b, z, J, P;
      return r.value && ((z = (b = n.entry) == null ? void 0 : b.pdfPreview) != null && z.downloadUrl) ? n.entry.pdfPreview.downloadUrl : ((P = (J = n.entry) == null ? void 0 : J.pdf) == null ? void 0 : P.url) || "";
    }), s = re(() => {
      var b, z;
      return ((z = (b = n.entry) == null ? void 0 : b.pdf) == null ? void 0 : z.pdfFilename) || "";
    }), f = re(() => {
      var b, z;
      return ((z = (b = n.entry) == null ? void 0 : b.pdfPreview) == null ? void 0 : z.downloadLabel) || `Download ${n.downloadFileType.toUpperCase()}`;
    }), c = re(() => {
      var b, z;
      return ((z = (b = n.entry) == null ? void 0 : b.markdown) == null ? void 0 : z.url) || "";
    }), u = re(() => {
      var b, z;
      return ((z = (b = n.entry) == null ? void 0 : b.markdown) == null ? void 0 : z.markdownFilename) || "";
    }), h = re(() => {
      var b, z;
      return !!(l.value || (z = (b = n.entry) == null ? void 0 : b.pdfPreview) != null && z.downloadLabel);
    }), y = re(() => !!c.value), E = re(
      () => !!(r.value || a.value || h.value || y.value)
    ), I = re(() => {
      var b, z;
      return {
        fileType: n.downloadFileType,
        fileName: s.value,
        mimeType: ((z = (b = n.entry) == null ? void 0 : b.pdf) == null ? void 0 : z.pdfMimeType) || "",
        url: l.value
      };
    }), H = re(() => {
      var b, z;
      return {
        fileType: "markdown",
        fileName: u.value,
        mimeType: ((z = (b = n.entry) == null ? void 0 : b.markdown) == null ? void 0 : z.markdownMimeType) || "",
        url: c.value
      };
    }), w = {
      backgroundImage: "radial-gradient(circle, rgba(220, 220, 220, 0.7) 0.45px, transparent 0.55px)",
      backgroundPosition: "0 0, 1px 1px",
      backgroundSize: "2px 2px",
      opacity: 0.55
    }, K = {
      background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 28%, rgba(255, 255, 255, 0.38) 55%, rgba(255, 255, 255, 0.82) 76%, #fff 96%)"
    }, W = (b) => {
      b != null && b.url && o("download", b);
    };
    return (b, z) => {
      var J, P;
      return E.value ? (k(), T("div", {
        key: 0,
        class: ge(["flex w-full flex-col gap-[10px] text-m text-black lg:-mx-3 lg:w-[calc(100%+var(--fontSize)*1.5)]", { "h-full": e.fill }])
      }, [
        a.value || h.value ? (k(), T("aside", {
          key: 0,
          class: ge(["border-stroke-light flex w-full flex-col overflow-hidden rounded-lg border bg-white p-[10px]", { "h-full": e.fill }])
        }, [
          C("div", {
            class: ge(["relative w-full overflow-hidden rounded-[4px] bg-[#F2F2F2]", e.fill ? "min-h-0 flex-1" : "aspect-square"])
          }, [
            a.value ? (k(), T("img", {
              key: 0,
              src: a.value,
              alt: i.value,
              loading: "lazy",
              class: ge(["absolute inset-0 h-full w-full object-top", r.value ? "object-contain" : "object-cover"])
            }, null, 10, Bp)) : oe("", !0),
            r.value ? oe("", !0) : (k(), T("div", {
              key: 1,
              class: "pointer-events-none absolute inset-0",
              style: w
            })),
            r.value ? oe("", !0) : (k(), T("div", {
              key: 2,
              class: "pointer-events-none absolute inset-0",
              style: K
            }))
          ], 2),
          h.value ? (k(), T("div", Vp, [
            ne(ml, {
              class: "shrink-0",
              "entry-url": (J = e.entry) == null ? void 0 : J.url,
              label: f.value,
              url: l.value,
              filename: s.value,
              "file-type": "pdf",
              onDownload: z[0] || (z[0] = (U) => W(I.value))
            }, null, 8, ["entry-url", "label", "url", "filename"])
          ])) : oe("", !0)
        ], 2)) : oe("", !0),
        y.value ? (k(), Je(ml, {
          key: 1,
          class: "shrink-0",
          variant: "light",
          "entry-url": (P = e.entry) == null ? void 0 : P.url,
          label: "Export Markdown",
          url: c.value,
          filename: u.value,
          "file-type": "markdown",
          onDownload: z[1] || (z[1] = (U) => W(H.value))
        }, null, 8, ["entry-url", "url", "filename"])) : oe("", !0)
      ], 2)) : oe("", !0);
    };
  }
}, Np = { class: "hidden w-full min-w-0 basis-full flex-col text-m text-[rgb(244_244_244)] sm:flex sm:basis-col1" }, Fp = {
  key: 0,
  class: "border-stroke-light w-full border-t pb-[10px] pt-[10px] uppercase"
}, Dp = {
  __name: "AnnotationsRelated",
  props: {
    entry: Object,
    loaded: { type: Boolean, default: !1 },
    loadError: { type: Boolean, default: !1 },
    downloadFileType: { type: String, default: "pdf" }
  },
  emits: ["download"],
  setup(e) {
    const t = e, n = re(
      () => {
        var o, r, a, i, l, s, f, c, u, h;
        return !!(((r = (o = t.entry) == null ? void 0 : o.pdfPreview) == null ? void 0 : r.override) === !0 || (i = (a = t.entry) == null ? void 0 : a.pdfPreview) != null && i.url || (s = (l = t.entry) == null ? void 0 : l.pdf) != null && s.url || (c = (f = t.entry) == null ? void 0 : f.markdown) != null && c.url || (h = (u = t.entry) == null ? void 0 : u.pdfPreview) != null && h.downloadLabel);
      }
    );
    return (o, r) => (k(), T("section", Np, [
      n.value ? (k(), T("h3", Fp, "PDF")) : oe("", !0),
      n.value ? (k(), Je(Ma, {
        key: 1,
        entry: e.entry,
        "download-file-type": e.downloadFileType,
        class: "mb-[10px] shrink-0",
        onDownload: r[0] || (r[0] = (a) => o.$emit("download", a))
      }, null, 8, ["entry", "download-file-type"])) : oe("", !0)
    ]));
  }
}, jp = { class: "grid w-full grid-cols-1 lg:grid-cols-9 lg:gap-x-9" }, Up = { class: "lg:-mx-3 lg:col-span-6 lg:col-start-1" }, Kp = {
  __name: "ExploreAllArticlesButton",
  setup(e) {
    return (t, n) => (k(), T("div", jp, [
      C("div", Up, [
        ne(bo, {
          variant: "light",
          size: "large",
          href: "https://journal.antikythera.org/articles",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-related-articles",
          "data-ph-action": "explore-all-articles-click"
        }, {
          default: Zt(() => n[0] || (n[0] = [
            je(" Explore All Articles ")
          ])),
          _: 1
        })
      ])
    ]));
  }
}, ec = (e) => {
  if (!e) return "";
  const t = new Date(e);
  if (Number.isNaN(t.getTime())) return "";
  const n = String(t.getUTCMonth() + 1).padStart(2, "0"), o = String(t.getUTCDate()).padStart(2, "0");
  return `${n}.${o}.${t.getUTCFullYear()}`;
}, qp = { class: "border-stroke-light relative flex h-full w-full flex-col gap-[10px] overflow-hidden rounded-lg border bg-black p-[10px] text-m text-[rgb(244_244_244)] lg:-mx-3 lg:w-[calc(100%+var(--fontSize)*1.5)]" }, Wp = ["href", "data-ph-related-entry"], Xp = { class: "relative flex h-full w-full flex-col gap-[10px] lg:flex-row lg:items-stretch" }, Yp = {
  key: 0,
  class: "aspect-square w-full overflow-hidden rounded-[4px] bg-black lg:w-auto lg:flex-1"
}, Gp = ["src", "alt"], Zp = ["src", "alt"], Jp = { class: "flex w-full flex-col gap-[10px] lg:flex-1" }, Qp = { class: "relative z-20 pointer-events-none flex min-h-[calc(1.28em*3)] flex-col" }, eh = { class: "uppercase" }, th = { key: 0 }, nh = ["href", "data-ph-related-entry", "onClick"], oh = { key: 1 }, rh = { key: 1 }, ah = { key: 2 }, ih = ["href", "data-ph-related-entry", "onClick"], lh = { key: 1 }, sh = {
  key: 0,
  class: "[&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:opacity-60 [&_p+p]:mt-[10px] lg:line-clamp-4 lg:min-h-[calc(1.28em*4)] xl:line-clamp-6 xl:min-h-[calc(1.28em*6)]"
}, ch = { class: "relative z-20 mt-auto flex w-full flex-col gap-[10px]" }, uh = {
  key: 0,
  class: "flex w-full items-center justify-between gap-2"
}, dh = { class: "min-w-0 truncate whitespace-nowrap" }, fh = ["href", "data-ph-related-entry"], ph = { key: 1 }, hh = {
  key: 0,
  class: "shrink-0 text-right text-[rgb(244_244_244_/_0.5)]"
}, gh = {
  __name: "RelatedArticleCell",
  props: {
    entry: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = (u) => {
      if (u)
        try {
          return new URL(u, window.location.origin).hostname;
        } catch {
          return;
        }
    }, o = re(() => {
      var u, h;
      return (u = t.entry) != null && u.externalLink ? t.entry.externalLink : (h = t.entry) != null && h.url ? `https://${t.entry.url}.antikythera.org` : void 0;
    }), r = (u) => !u || u._type !== "block" ? !1 : (u.children ?? []).every((y) => !(y != null && y.text) || y.text.trim() === ""), a = (u) => {
      if (!Array.isArray(u)) return [];
      let h = 0, y = u.length;
      for (; h < y && r(u[h]); ) h++;
      for (; y > h && r(u[y - 1]); ) y--;
      return u.slice(h, y);
    }, i = re(
      () => {
        var u, h, y;
        return a(((h = (u = t.entry) == null ? void 0 : u.shortIntroduction) == null ? void 0 : h.length) > 0 ? t.entry.shortIntroduction : (y = t.entry) == null ? void 0 : y.introduction);
      }
    ), l = () => {
      var u, h, y, E, I, H, w;
      pe("antikythera related entry clicked", {
        related_entry_title: ((u = t.entry) == null ? void 0 : u.title) || void 0,
        related_entry_url: ((h = t.entry) == null ? void 0 : h.url) || void 0,
        related_entry_domain: n(o.value),
        related_entry_has_external_link: !!((y = t.entry) != null && y.externalLink),
        related_entry_authors_count: ((I = (E = t.entry) == null ? void 0 : E.authors) == null ? void 0 : I.length) || 0,
        related_entry_designers_count: ((w = (H = t.entry) == null ? void 0 : H.designers) == null ? void 0 : w.length) || 0
      });
    }, s = (u, h) => {
      var y, E;
      pe("antikythera related entry author link clicked", {
        related_entry_title: ((y = t.entry) == null ? void 0 : y.title) || void 0,
        related_entry_url: ((E = t.entry) == null ? void 0 : E.url) || void 0,
        author_name: (u == null ? void 0 : u.title) || void 0,
        author_role: h,
        author_external_domain: n(u == null ? void 0 : u.externalLink)
      });
    }, f = () => {
      var u, h, y, E;
      pe("antikythera related entry doi link clicked", {
        related_entry_title: ((u = t.entry) == null ? void 0 : u.title) || void 0,
        related_entry_url: ((h = t.entry) == null ? void 0 : h.url) || void 0,
        doi: ((y = t.entry) == null ? void 0 : y.doi) || void 0,
        doi_domain: n((E = t.entry) == null ? void 0 : E.doiUrl)
      });
    }, c = re(() => {
      var u;
      return ec((u = t.entry) == null ? void 0 : u.releaseDate);
    });
    return (u, h) => {
      var y, E, I, H, w, K, W, b, z, J, P, U, D, X, ae, F, ee;
      return k(), T("article", qp, [
        C("a", {
          class: "absolute inset-0 z-10",
          href: o.value,
          target: "_blank",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-related-entry",
          "data-ph-action": "related-entry-click",
          "data-ph-related-entry": (y = e.entry) == null ? void 0 : y.url,
          onClick: l
        }, null, 8, Wp),
        C("div", Xp, [
          e.entry.featuredImage || e.entry.featuredImageSquare ? (k(), T("figure", Yp, [
            (I = (E = e.entry) == null ? void 0 : E.featuredImageSquare) != null && I.url ? (k(), T("img", {
              key: 0,
              src: e.entry.featuredImageSquare.url,
              alt: ((w = (H = e.entry) == null ? void 0 : H.featuredImageSquare) == null ? void 0 : w.alt) || ((K = e.entry) == null ? void 0 : K.title) || "",
              class: "h-full w-full object-cover",
              loading: "lazy"
            }, null, 8, Gp)) : (b = (W = e.entry) == null ? void 0 : W.featuredImage) != null && b.url ? (k(), T("img", {
              key: 1,
              src: e.entry.featuredImage.url,
              alt: ((J = (z = e.entry) == null ? void 0 : z.featuredImage) == null ? void 0 : J.alt) || ((P = e.entry) == null ? void 0 : P.title) || "",
              class: "h-full w-full object-cover",
              loading: "lazy"
            }, null, 8, Zp)) : oe("", !0)
          ])) : oe("", !0),
          C("div", Jp, [
            C("div", Qp, [
              C("h2", eh, ue(e.entry.title), 1),
              C("h3", null, [
                ((D = (U = e.entry) == null ? void 0 : U.authors) == null ? void 0 : D.length) > 0 ? (k(), T("span", th, [
                  h[0] || (h[0] = je(" by ")),
                  (k(!0), T(ye, null, xt(e.entry.authors, (V, G) => {
                    var q;
                    return k(), T(ye, {
                      key: `author-${V.title}-${G}`
                    }, [
                      V.externalLink && V.externalLink != "" ? (k(), T("a", {
                        key: 0,
                        target: "_blank",
                        class: "relative pointer-events-auto underline decoration-1 underline-offset-2 hover:opacity-60",
                        href: V.externalLink,
                        "data-ph-capture": "",
                        "data-ph-component": "antikythera-related-entry",
                        "data-ph-action": "related-author-link-click",
                        "data-ph-related-entry": (q = e.entry) == null ? void 0 : q.url,
                        "data-ph-person-role": "author",
                        onClick: Bo((le) => s(V, "author"), ["stop"])
                      }, ue(V.title), 9, nh)) : (k(), T("span", oh, ue(V.title), 1)),
                      je(ue(e.entry.authors.length > 1 ? G == e.entry.authors.length - 2 ? " & " : G < e.entry.authors.length - 2 ? ", " : "" : ""), 1)
                    ], 64);
                  }), 128))
                ])) : (k(), T("span", rh, h[1] || (h[1] = [
                  C("br", null, null, -1),
                  je(" ")
                ]))),
                ((ae = (X = e.entry) == null ? void 0 : X.designers) == null ? void 0 : ae.length) > 0 ? (k(), T("span", ah, [
                  h[2] || (h[2] = C("br", null, null, -1)),
                  h[3] || (h[3] = je(" with ")),
                  (k(!0), T(ye, null, xt(e.entry.designers, (V, G) => {
                    var q;
                    return k(), T(ye, {
                      key: `designer-${V.title}-${G}`
                    }, [
                      V.externalLink && V.externalLink != "" ? (k(), T("a", {
                        key: 0,
                        target: "_blank",
                        class: "pointer-events-auto underline decoration-1 underline-offset-2 hover:opacity-60",
                        href: V.externalLink,
                        "data-ph-capture": "",
                        "data-ph-component": "antikythera-related-entry",
                        "data-ph-action": "related-author-link-click",
                        "data-ph-related-entry": (q = e.entry) == null ? void 0 : q.url,
                        "data-ph-person-role": "designer",
                        onClick: Bo((le) => s(V, "designer"), ["stop"])
                      }, ue(V.title), 9, ih)) : (k(), T("span", lh, ue(V.title), 1)),
                      je(ue(e.entry.designers.length > 1 ? G == e.entry.designers.length - 2 ? " & " : G < e.entry.designers.length - 2 ? ", " : "" : ""), 1)
                    ], 64);
                  }), 128))
                ])) : oe("", !0)
              ])
            ]),
            i.value.length > 0 ? (k(), T("section", sh, [
              ne(Ct, { value: i.value }, null, 8, ["value"])
            ])) : oe("", !0),
            C("div", ch, [
              e.entry.doi && e.entry.doi != "" || c.value ? (k(), T("section", uh, [
                C("section", {
                  class: ge(["flex min-w-0 items-center gap-2 pr-3", { "opacity-0": !e.entry.doi || e.entry.doi == "" }])
                }, [
                  ne(na, { class: "h-6 w-4 shrink-0 text-[rgb(244_244_244)]" }),
                  C("p", dh, [
                    h[4] || (h[4] = je(" DOI ")),
                    e.entry.doiUrl ? (k(), T("a", {
                      key: 0,
                      href: e.entry.doiUrl,
                      target: "_blank",
                      class: "pointer-events-auto cursor-crosshair hover:opacity-60",
                      "data-ph-capture": "",
                      "data-ph-component": "antikythera-related-entry",
                      "data-ph-action": "related-doi-link-click",
                      "data-ph-related-entry": (F = e.entry) == null ? void 0 : F.url,
                      onClick: Bo(f, ["stop"])
                    }, ue(e.entry.doi ? e.entry.doi : " "), 9, fh)) : (k(), T("span", ph, ue(e.entry.doi ? e.entry.doi : " "), 1))
                  ])
                ], 2),
                c.value ? (k(), T("p", hh, ue(c.value), 1)) : oe("", !0)
              ])) : oe("", !0),
              ne(bo, {
                variant: "light",
                class: "relative pointer-events-auto",
                href: o.value,
                target: "_blank",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-related-entry",
                "data-ph-action": "related-entry-click",
                "data-ph-related-entry": (ee = e.entry) == null ? void 0 : ee.url,
                onClick: Bo(l, ["stop"])
              }, {
                default: Zt(() => h[5] || (h[5] = [
                  je(" Launch ")
                ])),
                _: 1
              }, 8, ["href", "data-ph-related-entry"])
            ])
          ])
        ])
      ]);
    };
  }
}, mh = {
  key: 0,
  class: "text-m text-[rgb(244_244_244)]"
}, vh = { class: "mobile-expanded-page-header grid w-full grid-cols-1 gap-[10px] pb-[10px] uppercase lg:grid-cols-9 lg:gap-x-9" }, yh = { class: "border-stroke-light border-t pt-[10px] lg:col-span-6 lg:col-start-1" }, bh = ["aria-expanded", "data-ph-entry"], wh = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, xh = {
  key: 0,
  class: "border-stroke-light hidden border-t pt-[10px] lg:col-span-3 lg:col-start-7 lg:block"
}, _h = {
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
    const n = e, o = t, r = re(() => !n.loaded && !n.loadError), a = re(() => {
      var f;
      return ((f = n.entry) == null ? void 0 : f.relatedEntries) || [];
    }), i = (f) => {
      var c, u, h, y, E;
      return !!(((c = f == null ? void 0 : f.pdfPreview) == null ? void 0 : c.override) === !0 || (u = f == null ? void 0 : f.pdfPreview) != null && u.url || (h = f == null ? void 0 : f.pdf) != null && h.url || (y = f == null ? void 0 : f.pdfPreview) != null && y.downloadLabel || (E = f == null ? void 0 : f.markdown) != null && E.url);
    }, l = re(() => a.value.some(i)), s = () => {
      var c, u;
      const f = !n.expanded;
      o("toggle", { open: f }), pe("antikythera section toggled", {
        antikythera_entry: ((c = n.entry) == null ? void 0 : c.url) || void 0,
        entry_title: ((u = n.entry) == null ? void 0 : u.title) || void 0,
        section_name: "related-articles",
        section_open: f,
        related_entries_count: a.value.length
      });
    };
    return (f, c) => {
      var u;
      return r.value || a.value.length > 0 ? (k(), T("section", mh, [
        C("header", vh, [
          C("div", yh, [
            C("h3", null, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                type: "button",
                "aria-expanded": e.expanded,
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "related-articles",
                "data-ph-entry": (u = e.entry) == null ? void 0 : u.url,
                onClick: s
              }, [
                c[0] || (c[0] = C("span", null, "Related Articles", -1)),
                C("span", wh, ue(e.expanded ? "Collapse" : "Expand"), 1)
              ], 8, bh)
            ])
          ]),
          l.value ? (k(), T("div", xh, c[1] || (c[1] = [
            C("h3", null, "Related PDFs", -1)
          ]))) : oe("", !0)
        ]),
        a.value.length > 0 ? (k(), T("section", {
          key: 0,
          class: ge(["flex w-full flex-col gap-[10px]", { "hidden sm:flex": !e.expanded }])
        }, [
          (k(!0), T(ye, null, xt(a.value, (h) => (k(), T("article", {
            key: h._id || h.url || h.title,
            class: "grid w-full grid-cols-1 gap-[10px] lg:grid-cols-9 lg:gap-x-9"
          }, [
            ne(gh, {
              entry: h,
              class: "lg:col-span-6 lg:col-start-1"
            }, null, 8, ["entry"]),
            l.value ? (k(), Je(Ma, {
              key: 0,
              entry: h,
              fill: "",
              class: "hidden h-full min-h-[220px] lg:col-span-3 lg:col-start-7 lg:flex"
            }, null, 8, ["entry"])) : oe("", !0)
          ]))), 128)),
          ne(Kp)
        ], 2)) : oe("", !0),
        c[2] || (c[2] = C("div", { class: "min-h-0 flex-1" }, null, -1))
      ])) : oe("", !0);
    };
  }
}, kh = {}, Ch = {
  width: "26",
  height: "23",
  viewBox: "0 0 26 23",
  fill: "none",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg"
};
function Sh(e, t) {
  return k(), T("svg", Ch, t[0] || (t[0] = [
    C("path", {
      d: "M5.79833 10.35V23L15.88 17.3458L26 23V10.35H5.79833Z",
      fill: "currentColor"
    }, null, -1),
    C("path", {
      d: "M5.76 5.175V7.8775H26V5.175H5.76Z",
      fill: "currentColor"
    }, null, -1),
    C("path", {
      d: "M5.76 0V2.7025H26V0H5.76Z",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const Th = /* @__PURE__ */ wo(kh, [["render", Sh]]), Eh = { class: "about-section relative w-full pt-[10px] text-m text-white sm:pt-0" }, Ah = { class: "about-content grid w-full grid-cols-1 lg:grid-cols-9 lg:gap-x-9" }, $h = { class: "lg:col-span-6 lg:col-start-1 lg:pb-[48px]" }, Rh = { class: "flex flex-col gap-y-[10px]" }, Ih = { class: "border-stroke-light -mx-3 flex flex-col rounded-lg border bg-black p-3" }, zh = { class: "about-preview pb-[10px] uppercase" }, Ph = { class: "hidden shrink-0 text-[rgb(244_244_244_/_0.5)] sm:inline" }, Mh = { class: "richtext relative h-full w-full grow" }, Lh = { class: "border-stroke-light -mx-3 flex h-full grow flex-col rounded-lg border bg-black p-3 lg:basis-[calc(70vh-7.5rem)]" }, Oh = { class: "grid w-full grid-cols-1 grid-rows-[auto_auto] gap-6 md:grid-cols-[repeat(2,minmax(auto,1fr))]" }, Hh = { class: "relative opacity-40" }, Bh = { class: "min-h-[1.28em]" }, Vh = { class: "grid grid-cols-2 gap-[10px] pt-[10px] lg:sticky lg:top-0 lg:col-span-3 lg:col-start-7 lg:flex lg:h-fit lg:flex-col lg:self-start lg:pt-0" }, Nh = {
  href: "https://antikythera.org/",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "border-stroke-dark relative col-span-2 -mx-3 overflow-y-hidden rounded-lg border bg-white p-3 pb-0 text-black"
}, Fh = { class: "w-full" }, Dh = { class: "flex justify-between pr-[48px]" }, jh = {
  key: 0,
  class: "border-stroke-dark col-span-2 -mx-3 flex flex-col gap-[10px] overflow-hidden rounded-lg border bg-white p-[10px] text-black"
}, Uh = { class: "[&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:opacity-60 [&_p+p]:mt-5" }, Kh = {
  href: "https://antikythera.substack.com/",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "border-stroke-light col-span-2 -mx-3 flex items-center justify-between gap-[10px] overflow-hidden rounded-lg border bg-[#ff5a01] p-[10px] text-[#f4f4f4] transition-transform duration-300 ease-out hover:scale-[0.99] hover:duration-100"
}, qh = {
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
      o("toggle", { open: !n.expanded });
    }, a = (i, l) => {
      var s, f, c, u;
      return i.externalTitle && l === 0 ? i.externalTitle : l !== 0 && ((f = (s = i.creditLine) == null ? void 0 : s[l]) != null && f.title) ? i.creditLine[l].title : !i.externalTitle && l === 0 && ((u = (c = i.creditLine) == null ? void 0 : c[l]) == null ? void 0 : u.title) || "";
    };
    return (i, l) => {
      var s, f;
      return k(), T("section", Eh, [
        C("div", Ah, [
          C("section", $h, [
            C("div", Rh, [
              C("article", Ih, [
                C("header", zh, [
                  C("h3", null, [
                    C("button", {
                      class: "flex w-full items-center justify-between gap-[20px] text-left uppercase",
                      type: "button",
                      onClick: r
                    }, [
                      l[0] || (l[0] = C("span", null, "About", -1)),
                      C("span", Ph, ue(e.expanded ? "Collapse" : "Expand"), 1)
                    ])
                  ])
                ]),
                C("div", Mh, [
                  ((s = e.about.text) == null ? void 0 : s.length) > 0 ? (k(), Je(Ct, {
                    key: 0,
                    value: e.about.text
                  }, null, 8, ["value"])) : oe("", !0)
                ])
              ]),
              C("article", Lh, [
                l[1] || (l[1] = C("h3", { class: "mb-[10px] uppercase" }, "Contributors", -1)),
                C("div", Oh, [
                  (k(!0), T(ye, null, xt(e.about.credits, (c, u) => (k(), T("div", {
                    key: c._key || u,
                    class: "lg:last:pb-4"
                  }, [
                    (k(!0), T(ye, null, xt(c.creditLine, (h, y) => (k(), T("div", {
                      key: h._key || y,
                      class: "grid grid-cols-2 gap-x-6"
                    }, [
                      C("p", Hh, [
                        C("span", {
                          class: ge({
                            "absolute left-0 block w-full bg-black": y === 0 && c.externalTitle
                          })
                        }, ue(a(c, y)), 3)
                      ]),
                      C("p", Bh, ue(h.name || " "), 1)
                    ]))), 128))
                  ]))), 128))
                ])
              ])
            ])
          ]),
          C("aside", Vh, [
            C("a", Nh, [
              C("header", Fh, [
                C("div", Dh, [
                  ne(js, {
                    "show-journal": !1,
                    class: "h-[23px] w-[121px] shrink-0"
                  })
                ]),
                l[2] || (l[2] = C("section", { class: "pt-[20px] pb-[10px]" }, [
                  C("p", null, "A think tank for planetary computation"),
                  C("p", null, "& the evolution of intelligence")
                ], -1))
              ])
            ]),
            ((f = e.about.asideText) == null ? void 0 : f.length) > 0 ? (k(), T("article", jh, [
              C("div", Uh, [
                ne(Ct, {
                  value: e.about.asideText
                }, null, 8, ["value"])
              ]),
              ne(bo, {
                variant: "dark",
                href: "https://antikythera.org/"
              }, {
                default: Zt(() => l[3] || (l[3] = [
                  je("Read More")
                ])),
                _: 1
              })
            ])) : oe("", !0),
            C("a", Kh, [
              l[4] || (l[4] = C("p", { class: "uppercase" }, "Read Antikythera on Substack", -1)),
              ne(Th, { class: "h-[23px] w-auto shrink-0" })
            ])
          ])
        ])
      ]);
    };
  }
}, Wh = 220, Xh = 360, Yh = 240, Gh = 320, Zh = 180, Jh = 300, qt = Y(!1), rn = Y(1), On = Y(1), tc = Y(1), Ko = Y(1), qo = Y(1);
let Xt = 0, Yt = 0;
const Qh = () => {
  Xt && (clearTimeout(Xt), Xt = 0), Yt && (clearTimeout(Yt), Yt = 0);
}, eg = (e, t = {}) => {
  if (!(qt.value && Ko.value == e)) {
    if (!qt.value && rn.value == e && On.value == e) {
      Ko.value = e;
      return;
    }
    if (Qh(), tc.value = rn.value, Ko.value = e, e == 2 && (rn.value == 1 || rn.value == 0))
      On.value = 2, qt.value = !0, Xt = setTimeout(() => {
        Xt = 0, rn.value = e;
      }, Wh), Yt = setTimeout(() => {
        Yt = 0, qt.value = !1, qo.value = e;
      }, Xh);
    else if (e < 2 && On.value == 2) {
      const n = t.collapseCommitMs ?? Yh, o = t.collapseEndMs ?? Math.max(n + 80, Gh);
      qt.value = !0, Xt = setTimeout(() => {
        Xt = 0, On.value = e, rn.value = e;
      }, n), Yt = setTimeout(() => {
        Yt = 0, qt.value = !1, qo.value = e;
      }, o);
    } else
      qt.value = !0, Xt = setTimeout(() => {
        Xt = 0, On.value = e, rn.value = e;
      }, Zh), Yt = setTimeout(() => {
        Yt = 0, qt.value = !1, qo.value = e;
      }, Jh);
  }
};
function nc() {
  return {
    view: rn,
    viewChange: qo,
    transitioning: qt,
    tempView: On,
    previousView: tc,
    requestedView: Ko,
    setView: eg
  };
}
const tg = { key: 0 }, ng = ["href", "data-ph-annotation-id", "data-ph-annotation-type"], og = { key: 2 }, rg = ["data-ph-annotation-id", "data-ph-annotation-type"], ag = {
  key: 0,
  class: "mb-3"
}, ig = ["src", "alt"], lg = {
  key: 0,
  class: "mt-1 text-m md:mt-2"
}, sg = ["href", "data-ph-annotation-id", "data-ph-annotation-type"], cg = { key: 1 }, ug = { class: "richtext pb-3" }, dg = {
  key: 2,
  class: "pb-3"
}, fg = ["src", "alt"], pg = {
  key: 0,
  class: "text-s sm:text-m mt-1 sm:mt-2"
}, hg = { class: "mb-3 font-bold" }, gg = ["data-ph-annotation-id", "data-ph-annotation-type", "data-ph-annotation-index"], mg = { class: "richtext pb-3" }, vg = {
  key: 0,
  class: "pb-3"
}, oc = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    const n = e, o = t, r = re(() => {
      const a = n.annotation.attribution && n.annotation.attribution != "";
      if (n.annotation.annotationVisibility == "forceHide")
        return !1;
      if (n.annotation.annotationVisibility == "forceShow")
        return a;
      if (n.annotation.annotationVisibility == "default")
        return n.articleAttributionVisibility == "forceHide" ? !1 : a;
    });
    return (a, i) => {
      var l, s, f, c, u, h, y, E, I, H, w, K;
      return e.variant == "floating" ? (k(), T("div", Qr({ key: 0 }, a.$attrs, { class: "relative overflow-hidden rounded-lg border border-stroke-light bg-black px-3 pt-3 text-m text-white" }), [
        C("h2", {
          class: ge(["mb-3 font-bold", { "pr-8": e.dismissible }])
        }, [
          e.annotation.annotationType == "related" ? (k(), T("span", tg, "Related")) : e.annotation.externalLink && e.annotation.externalLink != "" ? (k(), T("a", {
            key: 1,
            href: e.annotation.externalLink,
            class: "underline",
            target: "_blank",
            "data-ph-capture": "",
            "data-ph-component": "antikythera-annotation",
            "data-ph-action": "annotation-external-link-click",
            "data-ph-annotation-id": e.annotation.id,
            "data-ph-annotation-type": e.annotation.annotationType,
            onClick: i[0] || (i[0] = (W) => o("externalLinkClick"))
          }, ue(e.annotation.title), 9, ng)) : (k(), T("span", og, ue(e.annotation.title), 1))
        ], 2),
        e.dismissible ? (k(), T("button", {
          key: 0,
          class: "absolute top-3 right-3 z-10 text-s",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-annotation",
          "data-ph-action": "annotation-card-close",
          "data-ph-annotation-id": e.annotation.id,
          "data-ph-annotation-type": e.annotation.annotationType,
          onClick: i[1] || (i[1] = (W) => o("close"))
        }, " Close ", 8, rg)) : oe("", !0),
        C("div", null, [
          (l = e.annotation.featuredImage) != null && l.url ? (k(), T("figure", ag, [
            C("img", {
              src: e.annotation.featuredImage.url,
              alt: e.annotation.featuredImage.alt,
              class: "max-h-[15svh] max-w-full lg:max-h-[20svh]"
            }, null, 8, ig),
            e.annotation.featuredImage.caption && e.annotation.featuredImage.caption != "" ? (k(), T("figcaption", lg, [
              ne(Ct, {
                value: e.annotation.featuredImage.caption
              }, null, 8, ["value"])
            ])) : oe("", !0)
          ])) : oe("", !0),
          e.annotation.annotationType == "related" ? (k(), T("h3", {
            key: 1,
            class: ge(["font-bold", { "pr-8": e.dismissible }])
          }, [
            e.annotation.externalLink && e.annotation.externalLink != "" ? (k(), T("a", {
              key: 0,
              href: e.annotation.externalLink,
              class: "underline",
              target: "_blank",
              "data-ph-capture": "",
              "data-ph-component": "antikythera-annotation",
              "data-ph-action": "annotation-external-link-click",
              "data-ph-annotation-id": e.annotation.id,
              "data-ph-annotation-type": e.annotation.annotationType,
              onClick: i[2] || (i[2] = (W) => o("externalLinkClick"))
            }, ue(e.annotation.title), 9, sg)) : (k(), T("span", cg, ue(e.annotation.title), 1))
          ], 2)) : oe("", !0),
          C("div", ug, [
            ne(Ot(tr), {
              value: e.annotation.content
            }, null, 8, ["value"])
          ]),
          r.value ? (k(), T("div", dg, " — " + ue(e.annotation.attribution), 1)) : oe("", !0)
        ])
      ], 16)) : (k(), T("article", Qr({ key: 1 }, a.$attrs, { class: "border-stroke-light relative mb-[10px] flex min-w-full flex-wrap overflow-hidden rounded-lg border bg-black px-3 pt-3 text-m text-white last:mb-0" }), [
        (s = e.annotation.featuredImage) != null && s.url || (f = e.annotation.featuredImageSquare) != null && f.url ? (k(), T("figure", {
          key: 0,
          class: ge([{ "w-1/2 basis-1/2 pr-3 mb-4": !e.vertical }, { "w-3/4 basis-3/4 pr-3 mb-4": e.vertical }])
        }, [
          C("img", {
            src: ((c = e.annotation.featuredImageSquare) == null ? void 0 : c.url) ?? ((u = e.annotation.featuredImage) == null ? void 0 : u.url),
            alt: ((h = e.annotation.featuredImageSquare) == null ? void 0 : h.alt) ?? ((y = e.annotation.featuredImage) == null ? void 0 : y.alt)
          }, null, 8, fg),
          (E = e.annotation.featuredImage) != null && E.caption && e.annotation.featuredImage.caption != "" ? (k(), T("figcaption", pg, [
            ne(Ct, {
              value: e.annotation.featuredImage.caption
            }, null, 8, ["value"])
          ])) : oe("", !0)
        ], 2)) : oe("", !0),
        C("section", {
          class: ge([
            { "w-1/2 basis-1/2 md:pl-3": (((I = e.annotation.featuredImage) == null ? void 0 : I.url) || ((H = e.annotation.featuredImageSquare) == null ? void 0 : H.url)) && !e.vertical },
            { "w-full basis-full": !((w = e.annotation.featuredImage) != null && w.url) && !((K = e.annotation.featuredImageSquare) != null && K.url) || e.vertical }
          ])
        }, [
          C("h2", hg, [
            C("button", {
              class: "text-left cursor-pointer hover:opacity-60",
              "data-ph-capture": "",
              "data-ph-component": "antikythera-annotation",
              "data-ph-action": "annotation-inline-jump",
              "data-ph-annotation-id": e.annotation.id,
              "data-ph-annotation-type": e.annotation.annotationType,
              "data-ph-annotation-index": e.index,
              onClick: i[3] || (i[3] = (W) => o("titleClick", e.annotation))
            }, ue(e.annotation.title), 9, gg)
          ]),
          C("div", mg, [
            ne(Ct, {
              value: e.annotation.content
            }, null, 8, ["value"])
          ]),
          r.value ? (k(), T("div", vg, " — " + ue(e.annotation.attribution), 1)) : oe("", !0)
        ], 2)
      ], 16));
    };
  }
}), yg = {
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
    const t = e, { setView: n } = nc(), o = (l) => {
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
      pe("antikythera annotation inline jump clicked", r(l)), n(0), window.requestAnimationFrame(() => {
        const s = a(l.id);
        if (!s) {
          console.warn(`antikythera annotation jump skipped: #${l.id} was not found`), pe("antikythera annotation element not found", r(l));
          return;
        }
        const f = s.getBoundingClientRect().top + window.scrollY - 10;
        window.scrollTo({ top: f, behavior: "smooth" });
      });
    };
    return (l, s) => (k(), Je(oc, {
      annotation: e.annotation,
      articleAttributionVisibility: e.articleAttributionVisibility,
      index: e.index,
      vertical: e.vertical,
      variant: "inline",
      onTitleClick: i
    }, null, 8, ["annotation", "articleAttributionVisibility", "index", "vertical"]));
  }
}, bg = { class: "w-full min-w-0 basis-full text-m text-[rgb(244_244_244)] sm:basis-col2" }, wg = { class: "flex flex-col border-t border-stroke-light" }, xg = {
  key: 0,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, _g = { class: "mobile-expanded-entry-header" }, kg = ["data-ph-entry"], Cg = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Sg = {
  key: 0,
  class: "richtext pt-[10px]"
}, Tg = {
  key: 1,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, Eg = { class: "mobile-expanded-entry-header" }, Ag = ["data-ph-entry"], $g = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Rg = {
  key: 0,
  class: "richtext pt-[10px]"
}, Ig = {
  key: 2,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, zg = { class: "mobile-expanded-entry-header" }, Pg = ["data-ph-entry"], Mg = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Lg = {
  key: 0,
  class: "pt-[10px]"
}, Og = {
  key: 3,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, Hg = { class: "mobile-expanded-entry-header" }, Bg = ["data-ph-entry"], Vg = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Ng = {
  key: 0,
  class: "richtext pt-[10px]"
}, Fg = {
  key: 4,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, Dg = { class: "mobile-expanded-entry-header" }, jg = ["data-ph-entry"], Ug = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Kg = {
  key: 0,
  class: "richtext pt-[10px]"
}, qg = {
  __name: "EntryMain",
  props: {
    entry: Object,
    loaded: { type: Boolean, default: !1 },
    loadError: { type: Boolean, default: !1 }
  },
  emits: ["section-collapse"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Y(!0), a = Y(!1), i = Y(!1), l = Y(!1), s = Y(!0), f = re(() => !n.loaded && !n.loadError), c = (b) => Array.isArray(b) && b.length > 0, u = (b) => f.value || c(b), h = re(() => {
      var b, z, J;
      return f.value || ((b = n.entry) == null ? void 0 : b.annotationsCount) > 0 || ((J = (z = n.entry) == null ? void 0 : z.annotations) == null ? void 0 : J.length) > 0;
    }), y = (b, z) => {
      var J, P, U, D, X, ae, F, ee, V, G;
      return {
        antikythera_entry: ((J = n.entry) == null ? void 0 : J.url) || void 0,
        entry_title: ((P = n.entry) == null ? void 0 : P.title) || void 0,
        section_name: b,
        section_open: z,
        annotations_count: ((D = (U = n.entry) == null ? void 0 : U.annotations) == null ? void 0 : D.length) || 0,
        related_entries_count: ((ae = (X = n.entry) == null ? void 0 : X.relatedEntries) == null ? void 0 : ae.length) || 0,
        authors_count: ((ee = (F = n.entry) == null ? void 0 : F.authors) == null ? void 0 : ee.length) || 0,
        designers_count: ((G = (V = n.entry) == null ? void 0 : V.designers) == null ? void 0 : G.length) || 0
      };
    }, E = (b, z, J) => {
      var D;
      const P = b.value, U = (D = J == null ? void 0 : J.currentTarget) == null ? void 0 : D.closest(".mobile-expanded-entry-header");
      b.value = !P, P && U && o("section-collapse", { header: U }), pe("antikythera section toggled", y(z, b.value));
    }, I = (b) => E(r, "abstract", b), H = (b) => E(a, "editorial", b), w = (b) => E(l, "bibliography", b), K = (b) => E(i, "annotations", b), W = (b) => E(s, "credits", b);
    return (b, z) => {
      var J, P, U, D, X, ae, F, ee, V, G, q;
      return k(), T("main", bg, [
        C("div", wg, [
          u((J = e.entry) == null ? void 0 : J.introduction) ? (k(), T("section", xg, [
            C("h3", _g, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "abstract",
                "data-ph-entry": (P = e.entry) == null ? void 0 : P.url,
                onClick: I
              }, [
                z[0] || (z[0] = C("span", null, "Abstract", -1)),
                C("span", Cg, ue(r.value ? "Collapse" : "Expand"), 1)
              ], 8, kg)
            ]),
            r.value ? (k(), T("section", Sg, [
              ne(Ct, {
                value: e.entry.introduction
              }, null, 8, ["value"])
            ])) : oe("", !0)
          ])) : oe("", !0),
          u((U = e.entry) == null ? void 0 : U.editorial) ? (k(), T("section", Tg, [
            C("h3", Eg, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "editorial",
                "data-ph-entry": (D = e.entry) == null ? void 0 : D.url,
                onClick: H
              }, [
                z[1] || (z[1] = C("span", null, "Editorial", -1)),
                C("span", $g, ue(a.value ? "Collapse" : "Expand"), 1)
              ], 8, Ag)
            ]),
            a.value ? (k(), T("section", Rg, [
              ne(Ct, {
                value: e.entry.editorial
              }, null, 8, ["value"])
            ])) : oe("", !0)
          ])) : oe("", !0),
          h.value ? (k(), T("section", Ig, [
            C("h3", zg, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "annotations",
                "data-ph-entry": (X = e.entry) == null ? void 0 : X.url,
                onClick: K
              }, [
                z[2] || (z[2] = C("span", null, "Annotations", -1)),
                C("span", Mg, ue(i.value ? "Collapse" : "Expand"), 1)
              ], 8, Pg)
            ]),
            i.value ? (k(), T("section", Lg, [
              ((F = (ae = e.entry) == null ? void 0 : ae.annotations) == null ? void 0 : F.length) > 0 ? (k(!0), T(ye, { key: 0 }, xt(e.entry.annotations, (le, he) => {
                var xe;
                return k(), Je(yg, {
                  articleAttributionVisibility: ((xe = e.entry) == null ? void 0 : xe.annotationVisibility) ?? !0,
                  annotation: le,
                  index: he
                }, null, 8, ["articleAttributionVisibility", "annotation", "index"]);
              }), 256)) : oe("", !0)
            ])) : oe("", !0)
          ])) : oe("", !0),
          u((ee = e.entry) == null ? void 0 : ee.bibliography) ? (k(), T("section", Og, [
            C("h3", Hg, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "bibliography",
                "data-ph-entry": (V = e.entry) == null ? void 0 : V.url,
                onClick: w
              }, [
                z[3] || (z[3] = C("span", null, "Bibliography", -1)),
                C("span", Vg, ue(l.value ? "Collapse" : "Expand"), 1)
              ], 8, Bg)
            ]),
            l.value ? (k(), T("section", Ng, [
              ne(Ct, {
                value: e.entry.bibliography
              }, null, 8, ["value"])
            ])) : oe("", !0)
          ])) : oe("", !0),
          u((G = e.entry) == null ? void 0 : G.credits) ? (k(), T("section", Fg, [
            C("h3", Dg, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "credits",
                "data-ph-entry": (q = e.entry) == null ? void 0 : q.url,
                onClick: W
              }, [
                z[4] || (z[4] = C("span", null, "Credits", -1)),
                C("span", Ug, ue(s.value ? "Collapse" : "Expand"), 1)
              ], 8, jg)
            ]),
            s.value ? (k(), T("section", Kg, [
              ne(Ct, {
                value: e.entry.credits
              }, null, 8, ["value"])
            ])) : oe("", !0)
          ])) : oe("", !0)
        ])
      ]);
    };
  }
}, Wg = { class: "annotation-card-slot__content min-h-0 overflow-hidden" }, Xg = { class: "pb-3" }, Yg = {
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
    const n = e, o = t, r = Y(null), a = Y(!1), i = Y(!1);
    let l = null, s = null;
    const f = (H) => {
      if (H)
        try {
          return new URL(H, window.location.origin).hostname;
        } catch {
          return;
        }
    }, c = () => {
      var H, w;
      return {
        annotation_id: n.annotation.id,
        annotation_title: n.annotation.title || void 0,
        annotation_type: n.annotation.annotationType || void 0,
        annotation_has_external_link: !!n.annotation.externalLink,
        annotation_external_domain: f(n.annotation.externalLink),
        annotation_has_featured_image: !!((H = n.annotation.featuredImage) != null && H.url || (w = n.annotation.featuredImageSquare) != null && w.url),
        annotation_word_count: y.value
      };
    }, u = () => {
      pe("antikythera annotation card closed", {
        ...c(),
        menu_view: n.view,
        is_mobile: n.isMobile
      }), o("close", n.annotation.id);
    }, h = () => {
      pe("antikythera annotation external link clicked", c());
    }, y = re(() => {
      var K, W;
      const H = (K = n.annotation) != null && K.content ? (W = n.annotation) == null ? void 0 : W.content : [];
      let w = 0;
      return H.forEach((b) => {
        if (b._type !== "block" || !b.children)
          return 0;
        w = w + b.children.map((z) => z.text).join("").split(" ").length;
      }), w;
    }), E = () => {
      if (!r.value || !l)
        return;
      const H = r.value.getBoundingClientRect().bottom, w = l.getBoundingClientRect().bottom, K = H <= w + 22;
      K && a.value ? (a.value = !1, i.value || (i.value = !0, pe("antikythera annotation fully read", c()))) : K || (a.value = !0);
    }, I = () => {
      if (!r.value || !l)
        return;
      const H = r.value.getBoundingClientRect().bottom, w = l.getBoundingClientRect().bottom;
      l.scrollHeight > l.clientHeight && H > w + 22 ? (a.value || pe("antikythera annotation content overflows", c()), a.value = !0) : a.value = !1;
    };
    return vo(async () => {
      var H;
      await bt(), l = ((H = r.value) == null ? void 0 : H.parentElement) ?? null, s = window.setTimeout(() => {
        I(), l == null || l.addEventListener("scroll", E, { passive: !0 }), window.addEventListener("resize", I);
      }, 50);
    }), Ta(() => {
      s !== null && window.clearTimeout(s), l == null || l.removeEventListener("scroll", E), window.removeEventListener("resize", I);
    }), (H, w) => (k(), T("article", {
      ref_key: "AnnotationCard",
      ref: r,
      class: "annotation-card-slot pointer-events-auto grid w-full shrink-0"
    }, [
      C("div", Wg, [
        C("div", Xg, [
          ne(oc, {
            annotation: e.annotation,
            articleAttributionVisibility: e.articleAttributionVisibility,
            dismissible: e.view == 0 || e.isMobile,
            variant: "floating",
            onClose: u,
            onExternalLinkClick: h
          }, null, 8, ["annotation", "articleAttributionVisibility", "dismissible"])
        ])
      ])
    ], 512));
  }
}, Gg = { class: "border-stroke-light pointer-events-auto w-sticker -translate-x-3 rounded-lg border bg-black p-3 text-m text-white" }, Zg = { class: "flex w-full items-start justify-between gap-3" }, Jg = { class: "min-w-0 flex-1 leading-[1.25]" }, Qg = ["aria-checked", "aria-label"], em = {
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
    return (a, i) => (k(), T("article", Gg, [
      C("div", Zg, [
        C("p", Jg, ue(e.label), 1),
        C("button", {
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
          C("span", {
            class: ge(["absolute left-[2px] top-[2px] h-[16px] w-[16px] rounded-full transition-transform duration-150", e.modelValue ? "translate-x-[16px] bg-black" : "translate-x-0 bg-white"])
          }, null, 2)
        ], 10, Qg)
      ])
    ]));
  }
}, tm = {
  key: 0,
  "aria-hidden": "true",
  class: "pointer-events-none fixed inset-0 z-[2000] grid h-[100dvh] w-full grid-cols-12 gap-x-3 px-6 opacity-50 sm:gap-x-9"
}, nm = {
  __name: "DebugGrid",
  props: {
    visible: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => e.visible ? (k(), T("div", tm, [
      (k(), T(ye, null, xt(12, (o) => C("div", {
        key: o,
        class: "col-span-1 h-full bg-blue-200"
      })), 64))
    ])) : oe("", !0);
  }
}, ra = " ", om = (e = "") => e.trim().replace(/\s+/g, ra), rm = (e = []) => {
  const t = e.map(om).filter(Boolean);
  return t.length < 2 ? t[0] || "" : t.length === 2 ? `${t[0]} &${ra}${t[1]}` : `${t.slice(0, -1).join(", ")} &${ra}${t[t.length - 1]}`;
}, am = '.expanded-frame[data-v-2f950b6e]{--expanded-frame-edge-inset: 5px;--mobile-expanded-header-inline-bleed: calc((var(--fontSize) * 1.5) - var(--expanded-frame-edge-inset))}.expanded-frame-underlay[data-v-2f950b6e]{inset:var(--expanded-frame-edge-inset)}.expanded-frame-clip[data-v-2f950b6e]{clip-path:inset(var(--expanded-frame-edge-inset) round 11px)}.expanded-scrollport[data-v-2f950b6e]{--expanded-related-header-height: calc((var(--fontSize) * 1.28) + 21px);height:100dvh;margin-block:calc(var(--fontSize) * -.75);padding-block:calc(var(--fontSize) * .75)!important;scroll-padding-top:calc(var(--fontSize) * .75);scroll-padding-bottom:0}.expanded-before-related[data-v-2f950b6e]{min-height:calc(100dvh - (var(--fontSize) * .75));margin-bottom:calc(var(--expanded-related-header-height) * -1);padding-bottom:var(--expanded-related-header-height)}.expanded-related-page[data-v-2f950b6e]{min-height:calc(100dvh - (var(--fontSize) * .75));margin-bottom:0;padding-bottom:var(--expanded-related-header-height)}.expanded-about-page[data-v-2f950b6e]{min-height:calc(100dvh - (var(--fontSize) * 1.5))}@media screen and (max-width: 639px){.expanded-frame-clip[data-v-2f950b6e]{display:block!important;pointer-events:auto!important;overflow-x:hidden;overscroll-behavior-x:none}.expanded-scrollport.expanded-sticker-column[data-v-2f950b6e],.expanded-scrollport.expanded-details-column[data-v-2f950b6e]{height:auto;margin-block:0;padding-block:0!important;overflow:visible!important;scroll-padding-block:0}.expanded-scrollport.expanded-sticker-column[data-v-2f950b6e]{position:sticky!important;top:calc(.75rem - var(--mobile-sticker-sticky-offset, 0px));z-index:20;align-self:start}.mobile-journal-description[data-v-2f950b6e]{margin-top:.625rem!important;transition:margin-top .22s cubic-bezier(.25,.7,.25,1)}.mobile-journal-description.mobile-below-cta-exiting[data-v-2f950b6e]{margin-top:0!important}.mobile-expanded-exit-content[data-v-2f950b6e]{translate:0 0;transition-property:opacity,translate,margin!important;transition-duration:.22s!important;transition-delay:0ms!important;transition-timing-function:cubic-bezier(.25,.7,.25,1)!important}.mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-2f950b6e]{pointer-events:none;opacity:0!important;translate:0 -12px;margin-top:0!important;transition-delay:40ms!important}.mobile-mid-scroll-reversing .mobile-expanded-exit-content[data-v-2f950b6e]{transition-duration:.3s!important;transition-timing-function:cubic-bezier(.23,1,.32,1)!important}.mobile-mid-scroll-reversing .mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-2f950b6e]{transition-delay:48ms!important}.mobile-mid-scroll-reversing .mobile-journal-description[data-v-2f950b6e]{transition:margin-top .3s cubic-bezier(.23,1,.32,1)!important}.expanded-scrollport.expanded-details-column[data-v-2f950b6e]{margin-top:.625rem}.expanded-details-column[data-v-2f950b6e] .mobile-expanded-entry-header,.expanded-details-column[data-v-2f950b6e] .mobile-expanded-page-header{position:sticky;top:calc(var(--mobile-expanded-section-sticky-top, 48px) - 1px);z-index:30;width:calc(100% + var(--mobile-expanded-header-inline-bleed) + var(--mobile-expanded-header-inline-bleed));margin-inline:calc(0px - var(--mobile-expanded-header-inline-bleed));padding-inline:var(--mobile-expanded-header-inline-bleed);background:var(--black)}.expanded-details-column[data-v-2f950b6e] .mobile-expanded-entry-header{margin-block:-10px;padding-block:10px}.expanded-details-column[data-v-2f950b6e] .mobile-expanded-entry-header:after,.expanded-details-column[data-v-2f950b6e] .mobile-expanded-page-header:after{position:absolute;inset-inline:var(--mobile-expanded-header-inline-bleed);bottom:0;height:1px;content:"";pointer-events:none;background:var(--stroke-light);opacity:0;transition:opacity .16s ease}.expanded-details-column[data-v-2f950b6e] .mobile-expanded-entry-header[data-stuck]:after,.expanded-details-column[data-v-2f950b6e] .mobile-expanded-page-header[data-stuck]:after{opacity:1}.expanded-before-related[data-v-2f950b6e],.expanded-related-page[data-v-2f950b6e]{min-height:0;margin-bottom:0;padding-bottom:0}.expanded-about-page[data-v-2f950b6e]{min-height:0}}@media (prefers-reduced-motion: reduce) and (max-width: 639px){.mobile-expanded-exit-content[data-v-2f950b6e]{transition-duration:1ms!important}.mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-2f950b6e]{translate:0 0}.expanded-details-column[data-v-2f950b6e] .mobile-expanded-entry-header:after,.expanded-details-column[data-v-2f950b6e] .mobile-expanded-page-header:after{transition-duration:1ms}}.annotation-card-slot[data-v-2f950b6e]{position:relative;grid-template-rows:1fr;overflow:hidden;border-radius:8px}.annotation-card-slot.annotation-list-enter-active[data-v-2f950b6e]{transition:grid-template-rows .22s cubic-bezier(.32,.72,0,1) .14s,transform .22s cubic-bezier(.32,.72,0,1) .14s,opacity .22s cubic-bezier(.32,.72,0,1) .14s}.annotation-card-slot.annotation-list-leave-active[data-v-2f950b6e]{pointer-events:none;transition:grid-template-rows .22s cubic-bezier(.32,.72,0,1),transform .22s cubic-bezier(.32,.72,0,1),opacity .22s cubic-bezier(.32,.72,0,1)}.annotation-card-slot.annotation-list-enter-from[data-v-2f950b6e],.annotation-card-slot.annotation-list-leave-to[data-v-2f950b6e]{grid-template-rows:0fr;opacity:0;transform:translateY(-6px)}@media (prefers-reduced-motion: reduce){.annotation-card-slot.annotation-list-enter-active[data-v-2f950b6e],.annotation-card-slot.annotation-list-leave-active[data-v-2f950b6e]{transition-duration:0ms;transition-delay:0ms}.annotation-card-slot.annotation-list-enter-from[data-v-2f950b6e],.annotation-card-slot.annotation-list-leave-to[data-v-2f950b6e]{transform:none}}', im = ".anti-motion-fade{transition-property:opacity;transition-timing-function:cubic-bezier(.23,1,.32,1)}.anti-motion-slide{transition-property:opacity,transform;transition-timing-function:cubic-bezier(.23,1,.32,1)}.anti-motion-fold{transition-property:opacity,transform,max-height,margin;transition-timing-function:cubic-bezier(.25,.7,.25,1)}.expanded-sticker-card.minimal-shell-expanding{position:relative}.expanded-sticker-card.minimal-shell-expanding>.sticker-primary-cta{position:absolute;right:10px;bottom:10px;left:10px;z-index:1}.anti-mobile-summary-fold{display:grid;grid-template-rows:1fr;opacity:1;transition-property:grid-template-rows,opacity;transition-timing-function:cubic-bezier(.25,.7,.25,1)}.anti-mobile-summary-fold-collapsed{grid-template-rows:0fr;pointer-events:none;opacity:0}.anti-mobile-summary-reveal{transition-property:grid-template-rows;opacity:1}@media (prefers-reduced-motion: reduce){.expanded-sticker-card .anti-motion-fold,.expanded-sticker-card .anti-mobile-summary-fold{transition-duration:0ms!important;transition-delay:0ms!important}}", lm = { class: "flex w-full flex-col" }, sm = { class: "relative flex w-full pt-[1px] pl-[1px] pr-12" }, cm = {
  href: "https://journal.antikythera.org",
  target: "_blank",
  class: "block min-w-0"
}, um = ["src"], dm = ["src"], fm = { class: "min-h-0 overflow-hidden" }, pm = { class: "flex w-full flex-col pt-[20px] leading-[1.25] text-[rgb(244_244_244)]" }, hm = { key: 0 }, gm = { key: 1 }, mm = ["href", "data-ph-entry", "onClick"], vm = { key: 1 }, ym = { key: 2 }, bm = ["href", "data-ph-entry", "onClick"], wm = { key: 1 }, xm = { class: "flex min-w-0 items-center gap-2 pr-3" }, _m = ["href", "data-ph-entry"], km = { key: 1 }, Cm = { class: "shrink-0 text-right text-[rgb(244_244_244_/_0.5)]" }, Sm = {
  key: 1,
  class: "w-full h-2 pointer-events-none"
}, Tm = { class: "grid min-h-full w-full grid-cols-1 lg:grid-cols-9" }, Em = { class: "relative grid w-full grid-cols-1 gap-[10px] lg:grid-cols-9 lg:gap-x-9" }, Am = { class: "lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[calc((100%-var(--fontSize)*18)/3+var(--fontSize)*4.5)]" }, $m = {
  key: 0,
  class: "col-start-1 col-end-13 sm:col-end-7 lg:col-end-4 mt-3 sm:mt-0 pointer-events-none"
}, vl = 320, yl = 110, Dr = 340, bl = 280, wl = 240, xl = 48, Rm = 240, Im = {
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
    const n = e, o = t, { getSettings: r, getEntry: a, getEntryMeta: i, getAnnotations: l } = sa({ entry: n.entry, environment: n.environment, apiUrl: n.apiUrl }), { view: s, viewChange: f, previousView: c, requestedView: u, tempView: h, transitioning: y, setView: E } = nc(), I = Y(null), H = Y(null), w = Y(null), K = Y(null), W = Y(null), b = Y(null), z = Y(null), J = Y(null), P = Y(null), U = Y(""), D = Y({}), X = Y(!1), ae = Y(!1), F = Y(!1), ee = Y(!1), V = Y(!1), G = Y(!1), q = Y(!1), le = Y(!1), he = Y(!1), xe = Y(!0), Ue = Y(!1), He = Y(0), Te = Y(!1), Me = Y(!1), Be = Y(!1), Bt = Y(!1);
    let _t = null, it = null, pt = null, Vt = 0, At = null, Nt = 0, $t = 0, p = !1, g = null, _ = null, A = 0, S = null, R = 0, N = 0;
    const v = Y({}), O = Y(!1), M = Y(!1), te = Y(""), j = Y([]), Q = Y({ text: [], asideText: [], credits: [] }), Z = Y([]), se = Y(!1), de = Y([]), me = Y(!1), Ke = Y(!1), $e = Y(""), et = Y(""), Le = Y(""), Rt = Y(!1), qn = Y(!1);
    let Ve = null, lt = null;
    const Ft = {
      0: "minimal",
      1: "summary",
      2: "expanded"
    }, Ee = re(() => s.value == 2 || h.value == 2), st = re(
      () => y.value && u.value == 2 && h.value == 2 && s.value != 2
    ), tt = re(
      () => y.value && u.value < 2 && h.value == 2
    ), ac = re(() => Be.value), ic = re(
      () => X.value && Te.value && (!Ee.value && u.value == 0 || Me.value && !Be.value)
    ), La = re(() => s.value == 0 || X.value && s.value < 2 ? Z.value.filter((d) => se.value == d.id) : s.value == 1 && !X.value ? Z.value.filter((d) => de.value.includes(d.id)) : []), It = Y(!1), vt = Y(!1), Qt = Y(!1), kt = re(() => tt.value && !It.value), _o = re(() => Me.value ? !Bt.value : It.value || Qt.value ? !1 : st.value || tt.value), lc = Dr + bl;
    let An = 0, Wn = 0, Xn = null, Yn = 0, Gn = null;
    const mr = pc(0.32, 0.72, 0, 1), qe = () => window.innerWidth < 640, nt = () => qe() ? H.value : w.value, Oa = () => {
      if (!qe())
        return !1;
      const d = nt();
      return !!(d && d.scrollTop > 2);
    }, Ha = (d) => Math.round(Math.min(400, Math.max(vl, 240 + d * 0.11))), Ba = () => {
      var $;
      if (!Oa())
        return;
      const d = (($ = nt()) == null ? void 0 : $.scrollTop) || 0, m = Ha(d), x = Ue.value ? m + yl + lc : Math.max(m, Dr) + bl;
      return {
        collapseCommitMs: x,
        collapseEndMs: x + 100
      };
    }, vr = () => {
      An && (window.cancelAnimationFrame(An), An = 0);
    }, Va = () => {
      if (Wn && (window.clearTimeout(Wn), Wn = 0), Xn) {
        const d = Xn;
        Xn = null, d();
      }
    }, Na = () => {
      if (Yn && (window.clearTimeout(Yn), Yn = 0), Gn) {
        const d = Gn;
        Gn = null, d();
      }
    }, sc = () => {
      var d, m;
      return (m = (d = window.matchMedia) == null ? void 0 : d.call(window, "(prefers-reduced-motion: reduce)")) != null && m.matches ? Promise.resolve() : new Promise((x) => {
        Xn = x, Wn = window.setTimeout(() => {
          Wn = 0, Xn = null, x();
        }, yl);
      });
    }, Fa = () => {
      var d, m;
      return (m = (d = window.matchMedia) == null ? void 0 : d.call(window, "(prefers-reduced-motion: reduce)")) != null && m.matches ? Promise.resolve() : new Promise((x) => {
        Gn = x, Yn = window.setTimeout(() => {
          Yn = 0, Gn = null, x();
        }, Dr);
      });
    }, Da = (d = vl, m = mr) => {
      var L, ce;
      vr();
      const x = nt();
      if (!x || !qe())
        return Promise.resolve();
      const $ = x.scrollTop;
      if ($ <= 2 || (ce = (L = window.matchMedia) == null ? void 0 : L.call(window, "(prefers-reduced-motion: reduce)")) != null && ce.matches)
        return x.scrollTop = 0, Promise.resolve();
      const B = performance.now();
      return new Promise((ve) => {
        const Re = (Ne) => {
          const ct = Math.min(1, (Ne - B) / d);
          if (x.scrollTop = $ * (1 - m(ct)), ct < 1) {
            An = window.requestAnimationFrame(Re);
            return;
          }
          An = 0, x.scrollTop = 0, ve();
        };
        An = window.requestAnimationFrame(Re);
      });
    }, cc = () => {
      const d = J.value, m = d == null ? void 0 : d.parentElement;
      if (!d || !m)
        return 0;
      const x = d.cloneNode(!0), $ = d.getBoundingClientRect().width;
      x.classList.remove("minimal-shell-expanding"), Object.assign(x.style, {
        position: "fixed",
        left: "-10000px",
        top: "0",
        width: `${$}px`,
        height: "auto",
        maxHeight: "none",
        visibility: "hidden",
        pointerEvents: "none",
        transition: "none"
      });
      const B = x.querySelector(".anti-mobile-summary-fold");
      B && (B.style.gridTemplateRows = "1fr", B.style.opacity = "1", B.style.transition = "none");
      const L = x.querySelector("figure");
      L && (L.style.marginTop = "20px", L.style.maxHeight = "none", L.style.opacity = "1", L.style.transition = "none", L.querySelectorAll("img").forEach((ve) => {
        ve.style.opacity = "1", ve.style.transition = "none";
      })), m.appendChild(x);
      const ce = x.getBoundingClientRect().height;
      return x.remove(), ce;
    }, Dt = () => {
      var d;
      R && (window.clearTimeout(R), R = 0), N && (window.clearTimeout(N), N = 0), S && (S.cancel(), S = null), (d = J.value) == null || d.style.removeProperty("height"), Me.value = !1, Be.value = !1, Bt.value = !1, Ee.value && mn();
    }, uc = () => {
      var d;
      Be.value && (S && (S.cancel(), S = null), (d = J.value) == null || d.style.removeProperty("height"), Me.value = !1, Be.value = !1, Bt.value = !1, N = 0, mn());
    }, dc = async () => {
      var $, B;
      const d = J.value;
      if (!d || !Me.value || !Ee.value || u.value != 2 || !X.value) {
        Dt();
        return;
      }
      if ((B = ($ = window.matchMedia) == null ? void 0 : $.call(window, "(prefers-reduced-motion: reduce)")) != null && B.matches) {
        Dt();
        return;
      }
      const m = d.getBoundingClientRect().height, x = cc();
      if (x <= m) {
        Dt();
        return;
      }
      if (d.style.height = `${m}px`, Be.value = !0, await bt(), !Be.value || u.value != 2) {
        Dt();
        return;
      }
      S = d.animate(
        [{ height: `${m}px` }, { height: `${x}px` }],
        {
          duration: wl,
          easing: "cubic-bezier(0.25, 0.7, 0.25, 1)",
          fill: "forwards"
        }
      ), S.onfinish = () => {
        Be.value && (d.style.height = `${x}px`, S == null || S.cancel(), S = null);
      }, R = window.setTimeout(() => {
        R = 0, Bt.value = !0;
      }, xl), N = window.setTimeout(
        uc,
        Math.max(wl, xl + Rm)
      );
    }, Zn = () => {
      vr(), Va(), Na(), It.value = !1, vt.value = !1, Qt.value = !1;
    }, fc = async () => {
      var $;
      Zn();
      const d = (($ = nt()) == null ? void 0 : $.scrollTop) || 0, m = Ha(d);
      if (Ue.value) {
        if (It.value = !0, await Da(m, mr), !tt.value) {
          It.value = !1;
          return;
        }
        if (await sc(), !tt.value) {
          It.value = !1;
          return;
        }
        vt.value = !0, Qt.value = !0, It.value = !1;
      } else {
        if (vt.value = !0, Qt.value = !0, await Promise.all([
          Da(m, mr),
          Fa()
        ]), !tt.value) {
          Qt.value = !1;
          return;
        }
        Qt.value = !1;
        return;
      }
      if (await Fa(), !tt.value) {
        Qt.value = !1;
        return;
      }
      Qt.value = !1;
    };
    function pc(d, m, x, $) {
      const B = 3 * d, L = 3 * (x - d) - B, ce = 1 - B - L, ve = 3 * m, Re = 3 * ($ - m) - ve, Ne = 1 - ve - Re, ct = (ze) => ((ce * ze + L) * ze + B) * ze, ut = (ze) => ((Ne * ze + Re) * ze + ve) * ze, Oe = (ze) => (3 * ce * ze + 2 * L) * ze + B, $o = (ze) => {
        let dt = ze;
        for (let en = 0; en < 8; en++) {
          const Pe = ct(dt) - ze;
          if (Math.abs(Pe) < 1e-6)
            return dt;
          const zt = Oe(dt);
          if (Math.abs(zt) < 1e-6)
            break;
          dt -= Pe / zt;
        }
        let In = 0, zn = 1;
        for (dt = ze; In < zn; ) {
          const en = ct(dt);
          if (Math.abs(en - ze) < 1e-6)
            return dt;
          ze > en ? In = dt : zn = dt, dt = (zn + In) / 2;
        }
        return dt;
      };
      return (ze) => ut($o(ze));
    }
    const Jn = (d) => {
      if (d)
        try {
          return new URL(d, window.location.origin).hostname;
        } catch {
          return;
        }
    }, hc = re(() => {
      var x, $;
      const d = n.apiBackgroundColor || ((x = v.value) == null ? void 0 : x.apiBackgroundColor), m = n.apiForegroundColor || (($ = v.value) == null ? void 0 : $.apiForegroundColor);
      return Ds({
        theme: O.value ? n.theme === "light" ? "dark" : "light" : n.theme,
        backgroundColor: O.value ? m : d,
        foregroundColor: O.value ? d : m
      });
    }), yr = re(() => {
      var d;
      return ec((d = v.value) == null ? void 0 : d.releaseDate);
    }), ko = re(() => {
      const d = [], m = /* @__PURE__ */ new Set();
      return Z.value.forEach((x) => {
        var L;
        const $ = (L = x == null ? void 0 : x.attribution) == null ? void 0 : L.trim(), B = $ == null ? void 0 : $.toLocaleLowerCase();
        !$ || m.has(B) || (m.add(B), d.push($));
      }), d;
    }), br = re(() => ko.value.length === 0 ? "" : `Annotations by ${rm(ko.value)}`), Co = re(() => {
      var d;
      return ae.value ? !1 : ((d = v.value) == null ? void 0 : d.annotationsCount) > 0 && !Rt.value || !!br.value;
    }), ja = re(() => {
      var d, m, x, $;
      if (!v.value) return "";
      if (v.value.fileType) return v.value.fileType;
      if ((m = (d = v.value) == null ? void 0 : d.pdf) != null && m.pdfMimeType) {
        const B = v.value.pdf.pdfMimeType.split("/");
        if (B[1]) return B[1];
      }
      if (($ = (x = v.value) == null ? void 0 : x.pdf) != null && $.pdfFilename) {
        const B = v.value.pdf.pdfFilename.split(".");
        if (B.length > 1) return B.pop();
      }
      return "file";
    }), Ua = re(
      () => {
        var d, m, x, $, B, L, ce, ve, Re, Ne;
        return !!(((m = (d = v.value) == null ? void 0 : d.pdfPreview) == null ? void 0 : m.override) === !0 || ($ = (x = v.value) == null ? void 0 : x.pdfPreview) != null && $.url || (L = (B = v.value) == null ? void 0 : B.pdf) != null && L.url || (ve = (ce = v.value) == null ? void 0 : ce.markdown) != null && ve.url || (Ne = (Re = v.value) == null ? void 0 : Re.pdfPreview) != null && Ne.downloadLabel);
      }
    ), Ka = re(() => !0), gc = re(() => u.value == 2 ? "Return to Article" : "More Info"), mc = () => {
      $t = 0, p = !1, Ee.value && (At !== qe() ? _r() : mn());
    }, vc = () => {
      p = !0, $t && window.clearTimeout($t), $t = window.setTimeout(mc, 120);
    }, qa = () => {
      $t && (window.clearTimeout($t), $t = 0), p = !1;
    }, yc = () => {
      var $, B, L;
      Nt = 0;
      const d = window.innerWidth, m = g !== null && d !== g;
      if (g = d, m && Be.value && Dt(), X.value = d < 769, ae.value = d < 1024, !I.value)
        return;
      if (!Ee.value) {
        const { height: ce } = I.value.getBoundingClientRect(), ve = ((B = ($ = P.value) == null ? void 0 : $.$el) == null ? void 0 : B.getBoundingClientRect().height) || 0, Re = ve > 0 ? ` - ${ve}px - (var(--fontSize) * 0.75)` : "", Ne = `calc(100dvh - ${ce}px - (var(--fontSize) * 1.5)${Re})`;
        ((L = U.value) == null ? void 0 : L["--sansSticker"]) !== Ne && (U.value = { "--sansSticker": Ne });
        return;
      }
      const x = qe();
      At !== x ? _r() : p || mn();
    }, $n = (d) => {
      (d == null ? void 0 : d.type) === "resize" && Ee.value && vc(), !Nt && (Nt = window.requestAnimationFrame(yc));
    }, bc = (d) => {
      const m = d == null ? void 0 : d.target;
      if (!(m instanceof Element) || m === document.documentElement || m === document.body)
        return window.scrollY;
      const { top: x, bottom: $, height: B } = m.getBoundingClientRect(), L = B >= window.innerHeight * 0.8 && x <= window.innerHeight * 0.1 && $ >= window.innerHeight * 0.9, ce = m.scrollHeight > m.clientHeight + 2;
      return L && ce ? m.scrollTop : null;
    }, Rn = (d) => {
      if (window.innerWidth > 768 || Ee.value)
        return;
      const m = bc(d);
      if (m !== null) {
        if (Te.value) {
          m <= 2 && (Te.value = !1, (s.value == 0 || u.value == 0) && E(1));
          return;
        }
        m > 30 && (Te.value = !0, pe("antikythera mobile menu minimized", {
          antikythera_entry: n.entry || void 0,
          scroll_y: m,
          menu_view: s.value
        }), s.value != 0 && E(0));
      }
    };
    _n(f, (d) => {
      o("viewChange", d), $n();
    }), _n(
      st,
      (d) => {
        if (d) {
          Dt(), Me.value = X.value && Te.value;
          return;
        }
        Me.value && Ee.value && u.value == 2 && bt(dc);
      },
      { flush: "sync" }
    ), _n(Ee, (d) => {
      d ? (Zn(), le.value = qe(), jt(), bt(() => {
        var m;
        A = ((m = nt()) == null ? void 0 : m.scrollTop) || 0, _r(), ai(), ii();
      })) : (Dt(), Zn(), qa(), Te.value = !1, xr(), it && (window.clearTimeout(it), it = null), To(), H.value && (H.value.scrollTop = 0), xe.value = !0, le.value = !1, he.value = !1, A = 0);
    }), _n(tt, (d) => {
      if (!d) {
        Zn();
        return;
      }
      if (Dt(), Te.value = !1, Oa()) {
        fc();
        return;
      }
      Zn();
    });
    const Wa = (d) => {
      const m = de.value.indexOf(d);
      m >= 0 && de.value.splice(m, 1);
    }, Xa = () => {
      se.value = !1, de.value = [];
    }, wc = (d) => {
      se.value == d && (se.value = !1), Wa(d);
    }, Ya = (d, m = "toggle", x = "") => {
      d ? bt(() => {
        Ao(m, x);
      }) : Xa(), bt(() => {
        $n();
      }), pe("antikythera annotations toggled", {
        antikythera_entry: n.entry || void 0,
        annotations_enabled: d,
        annotations_count: Z.value.length,
        annotation_attribution_count: ko.value.length,
        annotation_trigger: m,
        menu_view: s.value,
        menu_view_name: Ft[s.value]
      });
    }, Ga = (d) => {
      d.code == "Escape" && (pe("antikythera keyboard shortcut used", {
        antikythera_entry: n.entry || void 0,
        key: "Escape",
        menu_view: s.value
      }), E(1, Ba()));
    }, xc = (d) => {
      var x;
      if (!d) return !1;
      const m = (x = d.tagName) == null ? void 0 : x.toLowerCase();
      return d.isContentEditable || m === "input" || m === "textarea" || m === "select";
    }, Za = (d) => {
      var m, x;
      d.defaultPrevented || d.repeat || d.metaKey || d.ctrlKey || d.altKey || xc(d.target) || (((m = d.key) == null ? void 0 : m.toLowerCase()) === "i" && (O.value = !O.value, pe("antikythera debug theme inverted", {
        antikythera_entry: n.entry || void 0,
        debug_theme_inverted: O.value,
        menu_view: s.value,
        menu_view_name: Ft[s.value]
      })), ((x = d.key) == null ? void 0 : x.toLowerCase()) === "g" && (M.value = !M.value));
    }, Ja = () => {
      window.addEventListener("keydown", Ga);
    }, wr = () => {
      window.removeEventListener("keydown", Ga);
    }, _c = () => {
      window.addEventListener("keydown", Za);
    }, kc = () => {
      window.removeEventListener("keydown", Za);
    }, Qa = (d) => {
      var m, x, $;
      d != null && d.entry && (v.value = d.entry, Array.isArray((m = d.entry) == null ? void 0 : m.annotations) && (Z.value = d.entry.annotations, Rt.value = !0)), d != null && d.settings && !d.settings.error && (te.value = (x = d.settings) == null ? void 0 : x.shortDescription, j.value = ($ = d.settings) == null ? void 0 : $.externalLinks, V.value = !0), d != null && d.about && (Q.value = d.about);
    }, ei = async () => {
      await bt(), ee.value = !0;
    }, Cc = (d) => {
      var x, $;
      const m = Z.value.find((B) => B.id === d);
      return {
        antikythera_entry: n.entry || void 0,
        annotation_id: d,
        annotation_title: (m == null ? void 0 : m.title) || void 0,
        annotation_type: (m == null ? void 0 : m.annotationType) || void 0,
        annotation_has_external_link: !!(m != null && m.externalLink),
        annotation_external_domain: Jn(m == null ? void 0 : m.externalLink),
        annotation_has_featured_image: !!((x = m == null ? void 0 : m.featuredImage) != null && x.url || ($ = m == null ? void 0 : m.featuredImageSquare) != null && $.url),
        annotation_index: Z.value.findIndex((B) => B.id === d)
      };
    }, Qn = (d, m) => {
      pe(
        "antikythera annotation card opened",
        {
          ...Cc(d),
          annotation_trigger: m,
          menu_view: s.value,
          menu_view_name: Ft[s.value]
        },
        { onceKey: `annotation-card-opened:${n.entry}:${m}:${d}` }
      );
    }, ti = ({ action: d, label: m, fromView: x, toView: $ }) => {
      var B, L;
      pe(`antikythera menu ${d} clicked`, {
        antikythera_entry: n.entry || void 0,
        button_label: m,
        menu_from_view: x,
        menu_from_view_name: Ft[x],
        menu_to_view: $,
        menu_to_view_name: Ft[$],
        entry_title: ((B = v.value) == null ? void 0 : B.title) || void 0,
        annotations_count: Z.value.length,
        is_expandable: !!((L = v.value) != null && L.apiExpandable)
      });
    }, Sc = () => {
      var m;
      const d = ((m = v.value) == null ? void 0 : m.apiExpandable) === !1 ? 1 : 2;
      ti({
        action: "expand",
        label: "More Info",
        fromView: s.value,
        toView: d
      }), d == 2 && jt(), E(d);
    }, Tc = () => {
      if (Ee.value) {
        Ec();
        return;
      }
      Sc();
    }, Ec = () => {
      const d = c.value == 2 ? 1 : c.value, m = Ba();
      ti({
        action: "collapse",
        label: "Return to Article",
        fromView: s.value,
        toView: d
      }), E(d, m);
    }, Ac = () => {
      var B;
      const d = nt(), m = (B = W.value) == null ? void 0 : B.$el;
      if (!d || !m)
        return 0;
      const x = d.getBoundingClientRect(), $ = m.getBoundingClientRect();
      return Math.max(0, d.scrollTop + $.top - x.top);
    }, So = () => {
      const d = nt();
      return d && Number.parseFloat(window.getComputedStyle(d).scrollPaddingTop) || 0;
    }, ni = () => Math.max(0, Ac() - So()), $c = () => {
      var L;
      const d = nt(), m = (L = b.value) == null ? void 0 : L.$el;
      if (!d || !m)
        return 0;
      const x = d.getBoundingClientRect(), $ = m.getBoundingClientRect(), B = d.scrollTop + $.top - x.top;
      return Math.max(0, B - So());
    }, oi = () => {
      if (!Ee.value || !qe()) {
        Ue.value = !1;
        return;
      }
      const d = nt();
      if (!d || He.value <= 0) {
        Ue.value = !1;
        return;
      }
      Ue.value = d.scrollTop >= He.value - 1;
    }, To = () => {
      (_ !== null || Object.keys(D.value).length > 0) && (_ = null, D.value = {}), He.value !== 0 && (He.value = 0), Ue.value && (Ue.value = !1);
    }, Rc = () => {
      if (!Ee.value || !qe()) {
        To();
        return;
      }
      const d = J.value, m = z.value;
      if (!d || !m) {
        To();
        return;
      }
      const x = d.getBoundingClientRect().top, $ = m.getBoundingClientRect().top, B = Number.parseFloat(window.getComputedStyle(m).marginTop) || 0, L = Math.max(0, Math.round(($ - x + B) * 100) / 100), ve = (Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16) * 0.75 - L + d.getBoundingClientRect().height, Re = Math.max(0, Math.round(ve * 100) / 100);
      (_ !== L || D.value["--mobile-expanded-section-sticky-top"] !== `${Re}px`) && (_ = L, He.value = L, D.value = {
        "--mobile-sticker-sticky-offset": `${L}px`,
        "--mobile-expanded-section-sticky-top": `${Re}px`
      }), oi();
    }, ri = () => {
      var Ne, ct;
      const d = nt(), m = K.value;
      if (!d || !m)
        return;
      if (qe()) {
        xe.value = !1;
        return;
      }
      const x = [m, (Ne = W.value) == null ? void 0 : Ne.$el, (ct = b.value) == null ? void 0 : ct.$el].filter(
        (ut) => ut instanceof Element
      );
      if (!x.length)
        return;
      const $ = d.getBoundingClientRect().top + So(), L = x.map((ut) => ({
        section: ut,
        rect: ut.getBoundingClientRect()
      })).reduce(
        (ut, Oe) => Oe.rect.top <= $ + 2 ? Oe : ut
      ), ce = Number.parseFloat(window.getComputedStyle(L.section).minHeight) || 0, ve = ce > 0 && L.rect.height <= ce + 1, Re = Math.abs(L.rect.top - $) <= 2 || L.section === m && d.scrollTop <= 2;
      ve ? Re && (xe.value = !0) : xe.value = !1;
    }, Ic = () => {
      if (Vt = 0, !(!Ee.value || p)) {
        if (ri(), qe()) {
          Be.value || Rc(), Eo();
          return;
        }
        To(), Eo();
      }
    }, mn = () => {
      Vt || (Vt = window.requestAnimationFrame(Ic));
    }, xr = () => {
      pt == null || pt.disconnect(), pt = null, At = null, Vt && (window.cancelAnimationFrame(Vt), Vt = 0);
    }, _r = () => {
      var L, ce;
      if (xr(), !Ee.value)
        return;
      const d = qe(), m = nt(), x = K.value, $ = (L = W.value) == null ? void 0 : L.$el, B = (ce = b.value) == null ? void 0 : ce.$el;
      if (At = d, typeof ResizeObserver > "u") {
        p || mn();
        return;
      }
      if (pt = new ResizeObserver(() => {
        p || d && Be.value || mn();
      }), d)
        J.value && pt.observe(J.value), z.value && pt.observe(z.value);
      else {
        m && pt.observe(m);
        for (const ve of [x, $, B])
          ve instanceof Element && pt.observe(ve);
      }
      p || mn();
    }, ai = () => {
      var ve;
      const d = nt(), m = (ve = W.value) == null ? void 0 : ve.$el;
      if (!d || !m) {
        le.value = !1, A = 0;
        return;
      }
      if (qe()) {
        A = d.scrollTop;
        return;
      }
      const x = d.scrollTop, $ = x >= A, B = d.getBoundingClientRect(), L = m.getBoundingClientRect(), ce = B.top + So();
      le.value = $ ? x > 2 && L.top <= B.bottom - 2 : x > 2 && L.top <= ce + 2, A = x;
    }, ii = () => {
      var L, ce;
      const d = nt(), m = (L = b.value) == null ? void 0 : L.$el;
      if (!d || !m || qe()) {
        he.value = !1;
        return;
      }
      const x = d.scrollTop, $ = d.getBoundingClientRect(), B = (ce = m.querySelector(".about-preview")) == null ? void 0 : ce.getBoundingClientRect();
      he.value = !!(B && x > 2 && B.bottom < $.bottom - 2);
    }, Eo = () => {
      const d = H.value, m = (d == null ? void 0 : d.querySelectorAll(".mobile-expanded-entry-header, .mobile-expanded-page-header")) || [];
      if (!d || !qe()) {
        m.forEach((x) => x.removeAttribute("data-stuck"));
        return;
      }
      m.forEach((x) => {
        const $ = x.closest("section");
        if (!$) {
          x.removeAttribute("data-stuck");
          return;
        }
        const B = x.getBoundingClientRect(), L = $.getBoundingClientRect(), ce = B.top > L.top + 1, ve = L.bottom > B.bottom + 1;
        x.toggleAttribute("data-stuck", ce && ve);
      });
    }, li = () => {
      ri(), oi(), Eo(), ii(), ai();
    }, si = () => {
      it && window.clearTimeout(it), it = window.setTimeout(() => {
        it = null, li();
      }, 120), !_t && (_t = window.requestAnimationFrame(() => {
        _t = null, li();
      }));
    }, zc = () => {
      Ee.value && qe() && si();
    }, ci = (d) => {
      const m = H.value, x = J.value;
      if (!d || !m || !x || !qe())
        return;
      const $ = d.getBoundingClientRect().top - x.getBoundingClientRect().bottom;
      bt(() => {
        if (!m || !d.isConnected)
          return;
        const B = d.getBoundingClientRect().top - m.getBoundingClientRect().top, L = x.getBoundingClientRect().bottom - m.getBoundingClientRect().top + $, ce = Math.max(0, m.scrollTop + B - L);
        m.scrollTop = ce, Eo();
      });
    }, Pc = ({ header: d }) => {
      ci(d);
    }, Mc = ({ open: d }) => {
      var $, B;
      const m = nt();
      if (!m)
        return;
      if (qe()) {
        const L = (B = ($ = W.value) == null ? void 0 : $.$el) == null ? void 0 : B.querySelector(".mobile-expanded-page-header");
        le.value = d, A = m.scrollTop, !d && L && ci(L);
        return;
      }
      const x = d ? ni() : 0;
      le.value = d, A = m.scrollTop, m.scrollTo({ top: x, behavior: "smooth" });
    }, Lc = ({ open: d }) => {
      const m = nt();
      if (!m)
        return;
      const x = d ? $c() : ni();
      he.value = d, m.scrollTo({ top: x, behavior: "smooth" });
    }, ui = (d = {}) => {
      var m;
      pe("antikythera file downloaded", {
        antikythera_entry: n.entry || void 0,
        entry_title: ((m = v.value) == null ? void 0 : m.title) || void 0,
        file_type: d.fileType || void 0,
        file_name: d.fileName || void 0,
        file_mime_type: d.mimeType || void 0,
        file_domain: Jn(d.url)
      });
    }, Oc = () => {
      var d, m, x, $;
      pe("antikythera doi link clicked", {
        antikythera_entry: n.entry || void 0,
        doi: ((d = v.value) == null ? void 0 : d.doi) || void 0,
        doi_url: ((m = v.value) == null ? void 0 : m.doiUrl) || void 0,
        doi_domain: Jn((x = v.value) == null ? void 0 : x.doiUrl),
        entry_title: (($ = v.value) == null ? void 0 : $.title) || void 0
      });
    }, di = (d, m) => {
      var x;
      pe("antikythera author link clicked", {
        antikythera_entry: n.entry || void 0,
        author_name: (d == null ? void 0 : d.title) || void 0,
        author_role: m,
        author_external_domain: Jn(d == null ? void 0 : d.externalLink),
        entry_title: ((x = v.value) == null ? void 0 : x.title) || void 0
      });
    }, Hc = (d, m, x = void 0) => {
      var $;
      pe("antikythera external link clicked", {
        antikythera_entry: n.entry || void 0,
        entry_title: (($ = v.value) == null ? void 0 : $.title) || void 0,
        link_kind: d,
        link_title: x,
        link_domain: Jn(m)
      });
    }, fi = ({ linkKind: d, linkUrl: m, linkTitle: x }) => {
      Hc(d, m, x);
    }, jt = async () => {
      var m, x, $, B, L, ce, ve;
      if (!n.entry || qn.value)
        return;
      Ve || (G.value = !1, q.value = !1, Ve = a());
      const d = await Ve;
      if (d != null && d.error || !(d != null && d.entry)) {
        Ve = null, G.value = !1, q.value = !0, pe("antikythera entry load error", {
          antikythera_entry: n.entry || void 0,
          error_message: (d == null ? void 0 : d.error) || "missing entry payload"
        });
        return;
      }
      Qa(d), qn.value = !0, await bt(), G.value = !0, q.value = !1, pe("antikythera entry loaded", {
        antikythera_entry: n.entry || void 0,
        entry_title: ((m = v.value) == null ? void 0 : m.title) || void 0,
        annotations_count: Z.value.length,
        authors_count: (($ = (x = v.value) == null ? void 0 : x.authors) == null ? void 0 : $.length) || 0,
        designers_count: ((L = (B = v.value) == null ? void 0 : B.designers) == null ? void 0 : L.length) || 0,
        related_entries_count: ((ve = (ce = v.value) == null ? void 0 : ce.relatedEntries) == null ? void 0 : ve.length) || 0
      });
    }, Bc = async () => {
      if (!n.entry || Rt.value)
        return;
      lt || (lt = l());
      const d = await lt;
      Array.isArray(d) ? (Z.value = d, Rt.value = !0, await bt(), $n(), Ao("toggle")) : d != null && d.error && pe("antikythera annotations load error", {
        antikythera_entry: n.entry || void 0,
        error_message: d.error
      });
    };
    vo(async () => {
      var d, m, x, $, B, L, ce, ve, Re, Ne, ct, ut;
      if (_c(), n.entry) {
        const Oe = await i();
        Oe != null && Oe.error && pe("antikythera entry metadata load error", {
          antikythera_entry: n.entry || void 0,
          error_message: Oe.error
        }), Qa(Oe), F.value = !0, pe("antikythera entry metadata loaded", {
          antikythera_entry: n.entry || void 0,
          entry_title: ((d = v.value) == null ? void 0 : d.title) || void 0,
          annotations_count: (m = v.value) == null ? void 0 : m.annotationsCount,
          authors_count: (($ = (x = v.value) == null ? void 0 : x.authors) == null ? void 0 : $.length) || 0,
          designers_count: ((L = (B = v.value) == null ? void 0 : B.designers) == null ? void 0 : L.length) || 0,
          has_doi: !!((ce = v.value) != null && ce.doi),
          has_pdf: !!((Re = (ve = v.value) == null ? void 0 : ve.pdf) != null && Re.url),
          has_markdown: !!((ct = (Ne = v.value) == null ? void 0 : Ne.markdown) != null && ct.url)
        }), $n(), ei(), ((ut = v.value) == null ? void 0 : ut.annotationsCount) > 0 && Bc(), window.addEventListener("resize", $n), window.addEventListener("scroll", Rn), document.addEventListener("scroll", Rn, { passive: !0, capture: !0 });
      } else {
        console.warn("antikythera menu skipped entry metadata: no entry slug provided");
        const Oe = await r();
        Oe != null && Oe.error || (te.value = Oe.shortDescription, j.value = Oe.externalLinks, V.value = !0), ei(), window.addEventListener("scroll", Rn), document.addEventListener("scroll", Rn, { passive: !0, capture: !0 });
      }
    }), Ea(() => {
      window.removeEventListener("resize", $n), window.removeEventListener("scroll", Rn), document.removeEventListener("scroll", Rn, { capture: !0 }), qa(), Dt(), vr(), Va(), Na(), xr(), Nt && (window.cancelAnimationFrame(Nt), Nt = 0), _t && window.cancelAnimationFrame(_t), it && window.clearTimeout(it), wr(), kc();
    });
    const pi = (d) => {
      var m;
      if (!d) return null;
      if ((m = window.CSS) != null && m.escape)
        return document.querySelector(`#${window.CSS.escape(d)}`);
      try {
        return document.querySelector(`#${d}`) || document.getElementById(d);
      } catch {
        return document.getElementById(d);
      }
    }, Vc = () => {
      const d = [], m = /* @__PURE__ */ new Set(), { innerHeight: x } = window;
      return Z.value.forEach(($) => {
        const B = $ == null ? void 0 : $.id, L = pi(B);
        if (!L || m.has(B))
          return;
        const { top: ce, bottom: ve } = L.getBoundingClientRect();
        ve > 0 && ce < x && (m.add(B), d.push(B));
      }), d;
    }, Ao = (d = "viewport", m = "") => {
      if (!me.value || s.value == 2)
        return;
      const x = Vc().filter(($) => $ !== m);
      if (m && x.unshift(m), x.length !== 0) {
        if (jt(), X.value || s.value == 0) {
          const $ = m || x[0];
          se.value = $, Qn($, d);
          return;
        }
        s.value == 1 && x.slice(0, 2).forEach(($) => {
          de.value.includes($) || (de.value.push($), Qn($, d));
        });
      }
    }, hi = () => {
      if (!$e.value)
        return;
      const d = $e.value, m = et.value;
      if ($e.value = "", et.value = "", d === "annotation-click" && m) {
        Ao(d, m);
        return;
      }
      Ao(d);
    }, Nc = () => {
      if (de.value.length === 0)
        return;
      const { innerHeight: d } = window, m = /* @__PURE__ */ new Set();
      de.value.forEach((x) => {
        const $ = pi(x);
        if (!$)
          return;
        const { top: B, bottom: L } = $.getBoundingClientRect();
        (L < 0 || B > d) && m.add(x);
      }), m.size > 0 && (de.value = de.value.filter((x) => !m.has(x)));
    };
    return Vd(() => {
      var d, m, x, $, B;
      if (n.forceopen == !0 && (jt(), E(2)), Co.value && !Ke.value && /^v[01]_/.test(n.activeannotation || "")) {
        const L = n.activeannotation.startsWith("v0_") ? "annotation-click" : "viewport";
        Ke.value = !0, me.value = !0, $e.value = L, et.value = n.activeannotation.replace(/^v[01]_/, ""), Le.value = n.activeannotation, pe("antikythera annotations toggled", {
          antikythera_entry: n.entry || void 0,
          annotations_enabled: !0,
          annotations_count: Z.value.length,
          annotation_attribution_count: ko.value.length,
          annotation_trigger: L,
          menu_view: s.value,
          menu_view_name: Ft[s.value]
        });
      }
      if (!$e.value) {
        if (Le.value) {
          if (n.activeannotation === Le.value)
            return;
          Le.value = "";
        }
        if (Co.value && !me.value && ((d = n.activeannotation) != null && d.startsWith("v0_"))) {
          const L = "annotation-click", ce = n.activeannotation.replace("v0_", "");
          me.value = !0, Le.value = n.activeannotation, Ya(!0, L, ce);
          return;
        }
        if (Co.value && !me.value) {
          Xa(), s.value == 2 ? (jt(), Ja()) : wr();
          return;
        }
        if (X.value && s.value < 2) {
          if ((m = n.activeannotation) != null && m.includes("v0_")) {
            jt();
            const L = n.activeannotation.replace("v0_", "");
            se.value = L, Qn(L, "click");
          }
          return;
        }
        if (s.value == 0) {
          if (de.value = [], (x = n.activeannotation) != null && x.includes("v0_")) {
            jt();
            const L = n.activeannotation.replace("v0_", "");
            se.value = L, Qn(L, "click");
            return;
          }
          if (n.inactiveannotation) {
            const L = n.inactiveannotation.replace("v0_", "").replace("v1_", "");
            se.value == L && (se.value = !1);
          }
          return;
        }
        if (s.value == 1) {
          if (se.value = !1, n.activeannotation && (($ = n.activeannotation) != null && $.includes("v1_"))) {
            jt();
            const L = n.activeannotation.replace("v1_", "");
            de.value.includes(L) || (de.value.push(L), Qn(L, "viewport"));
            return;
          }
          if ((B = n.inactiveannotation) != null && B.includes("v1_") && de.value.length > 0) {
            const L = n.inactiveannotation.replace("v1_", "");
            de.value.indexOf(L) >= 0 && (Wa(L), Nc());
          }
          return;
        }
        s.value == 2 ? (jt(), de.value = [], se.value = !1, Ja()) : wr();
      }
    }), (d, m) => {
      var x, $, B, L, ce, ve, Re, Ne, ct, ut, Oe, $o, ze, dt, In, zn, en;
      return k(), T("div", {
        ref_key: "ExpandedFrame",
        ref: H,
        class: ge(["expanded-frame fixed top-0 left-0 grid w-full pointer-events-none grid-cols-12 gap-x-3 gap-y-3 px-6 py-3 sm:gap-x-9 z-[1000]", {
          "h-[100dvh] overflow-x-hidden overflow-y-auto overscroll-contain hidden_scroll sm:overflow-hidden expanded-frame-clip": Ee.value,
          "mobile-mid-scroll-reversing": vt.value
        }]),
        style: kn([hc.value, D.value]),
        "data-version": "1.5.2",
        onScrollPassive: zc
      }, [
        C("div", {
          class: ge(["expanded-frame-underlay anti-motion-fade pointer-events-none fixed z-0 rounded-[11px] bg-black", [
            { "opacity-0": !Ee.value || tt.value && !It.value },
            { "opacity-100": Ee.value && (!tt.value || It.value) },
            { "duration-[220ms] delay-[40ms]": st.value },
            { "duration-[260ms]": vt.value },
            { "duration-150": tt.value && !It.value && !vt.value },
            { "duration-200": !st.value && !tt.value }
          ]])
        }, null, 2),
        C("article", {
          ref_key: "Menu",
          ref: I,
          class: ge(["anti-motion-fade pointer-events-auto relative z-10 w-sticker -translate-x-3 col-start-1 row-start-1 shrink duration-200", [
            { "opacity-0": !ee.value },
            { "col-span-12 sm:col-span-6 lg:col-span-3": !Ee.value },
            {
              "expanded-scrollport expanded-sticker-column col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col gap-[10px] !border-0 !bg-transparent !p-0 text-[rgb(244_244_244)] hidden_scroll !overflow-y-auto": Ee.value
            }
          ]])
        }, [
          C("aside", lm, [
            C("article", {
              ref_key: "StickerCard",
              ref: J,
              class: ge(["expanded-sticker-card border-stroke-light flex w-full flex-col overflow-hidden rounded-lg border bg-black p-[10px] text-m text-[rgb(244_244_244)]", { "minimal-shell-expanding": Be.value }])
            }, [
              C("header", sm, [
                C("a", cm, [
                  ne(js, { class: "h-[23px] w-[197px] max-w-full shrink-0 text-[rgb(244_244_244)]" })
                ]),
                ne(na, { class: "absolute top-[-3px] right-[1px] h-8 w-[19px] text-[rgb(244_244_244)]" })
              ]),
              Ot(h) >= 2 && ((x = v.value) != null && x.featuredImage || v.value.featuredImageSquare) ? (k(), T("figure", {
                key: 0,
                class: ge(["anti-motion-fold block overflow-hidden rounded-[4px]", [
                  { "mt-0 max-h-0 opacity-0": _o.value },
                  { "duration-[280ms]": vt.value, "duration-[240ms]": !vt.value },
                  { "mt-[20px] max-h-[500px] opacity-100 2xl:max-h-[900px]": !_o.value }
                ]])
              }, [
                (B = ($ = v.value) == null ? void 0 : $.featuredImageSquare) != null && B.url ? (k(), T("img", {
                  key: 0,
                  src: (ce = (L = v.value) == null ? void 0 : L.featuredImageSquare) == null ? void 0 : ce.url,
                  class: ge(["anti-motion-fade aspect-square w-full rounded-[4px] object-cover", [
                    { "opacity-0": _o.value },
                    { "duration-[220ms]": vt.value, "duration-150": !vt.value }
                  ]])
                }, null, 10, um)) : (Re = (ve = v.value) == null ? void 0 : ve.featuredImage) != null && Re.url ? (k(), T("img", {
                  key: 1,
                  src: (ct = (Ne = v.value) == null ? void 0 : Ne.featuredImage) == null ? void 0 : ct.url,
                  class: ge(["anti-motion-fade aspect-square w-full rounded-[4px] object-cover", [
                    { "opacity-0": _o.value },
                    { "duration-[220ms]": vt.value, "duration-150": !vt.value }
                  ]])
                }, null, 10, dm)) : oe("", !0)
              ], 2)) : oe("", !0),
              C("section", {
                class: ge(["anti-mobile-summary-fold", [
                  { "anti-mobile-summary-fold-collapsed": ic.value },
                  { "anti-mobile-summary-reveal": ac.value },
                  { "duration-[280ms]": st.value, "duration-[240ms]": !st.value }
                ]])
              }, [
                C("div", fm, [
                  C("div", pm, [
                    C("h2", {
                      class: ge(["uppercase transition-opacity duration-200", { "opacity-0": !v.value.title }])
                    }, ue((ut = v.value) != null && ut.title ? v.value.title : " "), 3),
                    C("p", {
                      class: ge(["transition-opacity duration-200", { "opacity-0": !v.value.title }])
                    }, [
                      F.value ? (($o = (Oe = v.value) == null ? void 0 : Oe.authors) == null ? void 0 : $o.length) > 0 ? (k(), T("span", gm, [
                        m[2] || (m[2] = je(" by ")),
                        (k(!0), T(ye, null, xt(v.value.authors, (Pe, zt) => (k(), T(ye, null, [
                          Pe.externalLink && Pe.externalLink != "" ? (k(), T("a", {
                            key: 0,
                            target: "_blank",
                            class: "underline decoration-1 underline-offset-2 hover:opacity-60",
                            href: Pe.externalLink,
                            "data-ph-capture": "",
                            "data-ph-component": "antikythera-author",
                            "data-ph-action": "author-link-click",
                            "data-ph-entry": n.entry,
                            "data-ph-person-role": "author",
                            onClick: (Ro) => di(Pe, "author")
                          }, ue(Pe.title), 9, mm)) : (k(), T("span", vm, ue(Pe.title), 1)),
                          je(ue(v.value.authors.length > 1 ? zt == v.value.authors.length - 2 ? " & " : zt < v.value.authors.length - 2 ? ", " : "" : ""), 1)
                        ], 64))), 256))
                      ])) : oe("", !0) : (k(), T("span", hm, m[1] || (m[1] = [
                        C("br", null, null, -1),
                        je("  ")
                      ]))),
                      ((dt = (ze = v.value) == null ? void 0 : ze.designers) == null ? void 0 : dt.length) > 0 ? (k(), T("span", ym, [
                        m[3] || (m[3] = C("br", null, null, -1)),
                        m[4] || (m[4] = je(" with ")),
                        (k(!0), T(ye, null, xt(v.value.designers, (Pe, zt) => (k(), T(ye, null, [
                          Pe.externalLink && Pe.externalLink != "" ? (k(), T("a", {
                            key: 0,
                            target: "_blank",
                            class: "underline decoration-1 underline-offset-2 hover:opacity-60",
                            href: Pe.externalLink,
                            "data-ph-capture": "",
                            "data-ph-component": "antikythera-author",
                            "data-ph-action": "author-link-click",
                            "data-ph-entry": n.entry,
                            "data-ph-person-role": "designer",
                            onClick: (Ro) => di(Pe, "designer")
                          }, ue(Pe.title), 9, bm)) : (k(), T("span", wm, ue(Pe.title), 1)),
                          je(ue(v.value.designers.length > 1 ? zt == v.value.designers.length - 2 ? " & " : zt < v.value.designers.length - 2 ? ", " : "" : ""), 1)
                        ], 64))), 256))
                      ])) : oe("", !0)
                    ], 2)
                  ]),
                  !F.value || (In = v.value) != null && In.doi && ((zn = v.value) == null ? void 0 : zn.doi) != "" || yr.value ? (k(), T("aside", {
                    key: 0,
                    class: ge(["anti-motion-fade text-m mt-[20px] flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1", [
                      { "pointer-events-none opacity-0": Ue.value && !tt.value },
                      { "duration-0": tt.value, "duration-[260ms]": !tt.value }
                    ]])
                  }, [
                    C("p", xm, [
                      ne(na, { class: "h-6 w-4 shrink-0 text-[rgb(244_244_244)]" }),
                      C("span", {
                        class: ge(["min-w-0 truncate whitespace-nowrap transition-opacity duration-200", { "opacity-0": !v.value.title || !v.value.doi || v.value.doi == "" }])
                      }, [
                        m[5] || (m[5] = je(" DOI ")),
                        v.value.doiUrl ? (k(), T("a", {
                          key: 0,
                          href: v.value.doiUrl,
                          target: "_blank",
                          class: "hover:opacity-60 cursor-crosshair",
                          "data-ph-capture": "",
                          "data-ph-component": "antikythera-doi",
                          "data-ph-action": "doi-link-click",
                          "data-ph-entry": n.entry,
                          onClick: Oc
                        }, ue(v.value.doi ? v.value.doi : "XX.XXXX/XXXX.XXXX"), 9, _m)) : (k(), T("span", km, ue(v.value.doi ? v.value.doi : "XX.XXXX/XXXX.XXXX"), 1))
                      ], 2)
                    ]),
                    C("p", Cm, ue(yr.value ? yr.value : " "), 1)
                  ], 2)) : (k(), T("div", Sm))
                ])
              ], 2),
              C("div", {
                ref_key: "PrimaryCtaButton",
                ref: z,
                class: ge(["sticker-primary-cta overflow-hidden transition-all duration-150 ease-out", [
                  { "mt-0 max-h-0 opacity-0 pointer-events-none": !Ka.value },
                  { "mt-[10px] max-h-[40px] opacity-100 delay-[60ms]": Ka.value }
                ]])
              }, [
                ne(bo, {
                  variant: "light",
                  "data-ph-capture": "",
                  "data-ph-component": "antikythera-menu",
                  "data-ph-action": Ee.value ? "return-to-article" : "menu-expand",
                  "data-ph-entry": n.entry,
                  "data-ph-menu-view": Ot(s),
                  onClick: Tc
                }, {
                  default: Zt(() => [
                    je(ue(gc.value), 1)
                  ]),
                  _: 1
                }, 8, ["data-ph-action", "data-ph-entry", "data-ph-menu-view"])
              ], 2)
            ], 2),
            Ee.value ? (k(), Je(gl, {
              key: 0,
              class: "hidden sm:flex",
              description: te.value,
              "external-links": j.value,
              entry: n.entry,
              loaded: V.value,
              "expanded-opening": st.value,
              "expanded-closing": tt.value,
              onExternalLinkClick: fi
            }, null, 8, ["description", "external-links", "entry", "loaded", "expanded-opening", "expanded-closing"])) : oe("", !0)
          ])
        ], 2),
        Ee.value ? (k(), T(ye, { key: 0 }, [
          ne(gl, {
            class: ge(["mobile-journal-description mobile-expanded-exit-content col-start-1 col-end-13 row-start-2 w-sticker -translate-x-3 sm:hidden", { "mobile-below-cta-exiting": kt.value }]),
            description: te.value,
            "external-links": j.value,
            entry: n.entry,
            loaded: V.value,
            "natural-height": "",
            "expanded-opening": st.value,
            "expanded-closing": kt.value,
            onExternalLinkClick: fi
          }, null, 8, ["class", "description", "external-links", "entry", "loaded", "expanded-opening", "expanded-closing"]),
          C("div", {
            class: ge(["mobile-pdf-preview mobile-expanded-exit-content anti-motion-fold col-start-1 col-end-13 row-start-3 w-sticker -translate-x-3 overflow-hidden sm:hidden", [
              {
                "mobile-below-cta-exiting": kt.value,
                "duration-[240ms] delay-[24ms]": kt.value,
                "duration-[220ms]": !kt.value
              },
              {
                "mt-0 max-h-0 opacity-0 -translate-y-[8px]": st.value || kt.value || !G.value || !Ua.value
              },
              {
                "mt-[10px] max-h-[900px] opacity-100 translate-y-0 delay-[140ms]": !st.value && !kt.value && G.value && Ua.value
              }
            ]])
          }, [
            ne(Ma, {
              entry: v.value,
              "download-file-type": ja.value,
              onDownload: ui
            }, null, 8, ["entry", "download-file-type"])
          ], 2),
          C("section", {
            ref_key: "ExpandedScrollport",
            ref: w,
            class: ge(["expanded-scrollport expanded-details-column mobile-expanded-exit-content anti-motion-slide pointer-events-auto z-10 col-start-1 col-end-13 row-start-4 min-w-0 overflow-y-scroll text-white hidden_scroll sm:col-start-7 sm:col-end-13 sm:row-start-1 lg:col-start-4 lg:col-end-13 lg:-ml-3 lg:w-[calc(100%+var(--fontSize)*1.5)] lg:px-3", [
              {
                "mobile-expanded-exit-content-closing": kt.value,
                "duration-[220ms]": !kt.value
              },
              { "opacity-0 -translate-y-[12px]": st.value || !G.value },
              { "sm:opacity-0 sm:-translate-y-[12px] sm:duration-[220ms] sm:delay-[32ms]": kt.value },
              {
                "opacity-100 translate-y-0 delay-[80ms]": !st.value && !kt.value && G.value
              },
              { "snap-y snap-mandatory": xe.value, "snap-none": !xe.value }
            ]]),
            onScroll: si
          }, [
            C("div", Tm, [
              C("div", {
                ref_key: "ExpandedBeforeRelated",
                ref: K,
                class: ge(["expanded-before-related flex w-full snap-start flex-col lg:col-span-9 lg:col-start-1", { "snap-always": xe.value }])
              }, [
                C("div", Em, [
                  ne(qg, {
                    entry: v.value,
                    loaded: G.value,
                    "load-error": q.value,
                    class: "lg:col-span-6 lg:col-start-1",
                    onSectionCollapse: Pc
                  }, null, 8, ["entry", "loaded", "load-error"]),
                  C("div", Am, [
                    ne(Dp, {
                      entry: v.value,
                      loaded: G.value,
                      "load-error": q.value,
                      "download-file-type": ja.value,
                      class: "lg:sticky lg:top-0 lg:self-start",
                      onDownload: ui
                    }, null, 8, ["entry", "loaded", "load-error", "download-file-type"])
                  ])
                ]),
                m[6] || (m[6] = C("div", { class: "min-h-0 flex-1" }, null, -1))
              ], 2),
              ne(_h, {
                ref_key: "RelatedArticles",
                ref: W,
                entry: v.value,
                loaded: G.value,
                "load-error": q.value,
                expanded: le.value,
                class: ge(["expanded-related-page flex snap-start flex-col lg:col-span-9 lg:col-start-1", { "snap-always": xe.value }]),
                onToggle: Mc
              }, null, 8, ["entry", "loaded", "load-error", "expanded", "class"]),
              ne(qh, {
                ref_key: "AboutSectionTarget",
                ref: b,
                about: Q.value,
                expanded: he.value,
                class: ge(["expanded-about-page snap-start lg:col-span-9 lg:col-start-1", { "snap-always": xe.value }]),
                onToggle: Lc
              }, null, 8, ["about", "expanded", "class"])
            ])
          ], 34)
        ], 64)) : oe("", !0),
        ne(ff, {
          appear: "",
          "enter-active-class": "anti-motion-slide duration-200",
          "enter-from-class": "opacity-0 -translate-y-[8px]",
          "enter-to-class": "opacity-100 translate-y-0",
          "leave-active-class": "anti-motion-slide duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 -translate-y-[6px]",
          onAfterEnter: hi,
          onAfterAppear: hi
        }, {
          default: Zt(() => [
            !Ee.value && !ae.value && Ke.value && br.value ? (k(), T("aside", $m, [
              ne(em, {
                ref_key: "AnnotationAttributionCard",
                ref: P,
                modelValue: me.value,
                "onUpdate:modelValue": m[0] || (m[0] = (Pe) => me.value = Pe),
                label: br.value,
                onToggle: Ya
              }, null, 8, ["modelValue", "label"])
            ])) : oe("", !0)
          ]),
          _: 1
        }),
        Ot(s) != 2 && (!Co.value || me.value) && ((en = Z.value) == null ? void 0 : en.length) > 0 ? (k(), Je(Lf, {
          key: 1,
          name: "annotation-list",
          tag: "section",
          style: kn(U.value),
          class: ge(["anti-motion-slide col-start-1 col-end-13 sm:col-end-7 lg:col-end-4 w-sticker -translate-x-3 max-h-sansSticker overflow-y-auto overscroll-contain pointer-events-auto hidden_scroll rounded-t-[8px] flex flex-col duration-150", { "opacity-0 -translate-y-[6px]": st.value, "opacity-100 translate-y-0": !st.value }])
        }, {
          default: Zt(() => [
            (k(!0), T(ye, null, xt(La.value, (Pe, zt) => {
              var Ro;
              return k(), Je(Yg, {
                key: Pe.id,
                annotation: Pe,
                articleAttributionVisibility: ((Ro = v.value) == null ? void 0 : Ro.annotationVisibility) ?? !0,
                view: Ot(s),
                isMobile: X.value,
                style: kn({ zIndex: La.value.length - zt }),
                onClose: wc
              }, null, 8, ["annotation", "articleAttributionVisibility", "view", "isMobile", "style"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["style", "class"])) : oe("", !0),
        ne(nm, { visible: M.value }, null, 8, ["visible"])
      ], 38);
    };
  }
}, zm = /* @__PURE__ */ wo(Im, [["styles", [am, im]], ["__scopeId", "data-v-2f950b6e"]]), Pm = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.richtext *+h1{margin-top:1.28em}.richtext *+h2{margin-top:1.28em}.richtext *+ol{margin-top:1.28em}.richtext *+p{margin-top:1.28em}.richtext *+ul{margin-top:1.28em}.richtext a:hover{opacity:.6}.richtext a{text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:2px}.richtext li{padding-left:0}.richtext ol{list-style-type:decimal;padding-left:calc(var(--fontSize) * 1)}.richtext ul{list-style-type:disc;padding-left:calc(var(--fontSize) * 1)}@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none){.richtext ol,.richtext ul{padding-left:calc(var(--fontSize) * 1.5)}}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.collapse{visibility:collapse}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-\\[\\.95em\\]{right:-.95em}.bottom-\\[\\.15em\\]{bottom:.15em}.left-0{left:0}.left-\\[2px\\]{left:2px}.right-3{right:calc(var(--fontSize) * .75)}.right-\\[1px\\]{right:1px}.top-0{top:0}.top-1\\/2{top:50%}.top-3{top:calc(var(--fontSize) * .75)}.top-\\[-3px\\]{top:-3px}.top-\\[2px\\]{top:2px}.isolate{isolation:isolate}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-\\[1000\\]{z-index:1000}.z-\\[2000\\]{z-index:2000}.z-\\[999\\]{z-index:999}.order-1{order:1}.order-2{order:2}.order-3{order:3}.col-span-1{grid-column:span 1 / span 1}.col-span-12{grid-column:span 12 / span 12}.col-span-2{grid-column:span 2 / span 2}.col-span-3{grid-column:span 3 / span 3}.col-span-6{grid-column:span 6 / span 6}.col-start-1{grid-column-start:1}.col-end-13{grid-column-end:13}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.row-start-4{grid-row-start:4}.-mx-3{margin-left:calc(calc(var(--fontSize) * .75) * -1);margin-right:calc(calc(var(--fontSize) * .75) * -1)}.mx-1{margin-left:calc(var(--fontSize) * .25);margin-right:calc(var(--fontSize) * .25)}.mx-auto{margin-left:auto;margin-right:auto}.-mb-3{margin-bottom:calc(calc(var(--fontSize) * .75) * -1)}.mb-3{margin-bottom:calc(var(--fontSize) * .75)}.mb-4{margin-bottom:calc(var(--fontSize) * 1)}.mb-\\[10px\\]{margin-bottom:10px}.ml-auto{margin-left:auto}.mr-0{margin-right:0}.mr-0\\.5{margin-right:.125rem}.mt-0{margin-top:0}.mt-1{margin-top:calc(var(--fontSize) * .25)}.mt-3{margin-top:calc(var(--fontSize) * .75)}.mt-\\[1\\.28em\\]{margin-top:1.28em}.mt-\\[10px\\]{margin-top:10px}.mt-\\[20px\\]{margin-top:20px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.\\!block{display:block!important}.block{display:block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.\\!hidden{display:none!important}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-10{height:calc(var(--fontSize) * 2.5)}.h-2{height:calc(var(--fontSize) * .5)}.h-6{height:calc(var(--fontSize) * 1.5)}.h-8{height:calc(var(--fontSize) * 2)}.h-\\[\\.7em\\]{height:.7em}.h-\\[100dvh\\]{height:100dvh}.h-\\[16px\\]{height:16px}.h-\\[20px\\]{height:20px}.h-\\[23px\\]{height:23px}.h-full{height:100%}.max-h-0{max-height:0}.max-h-\\[1200px\\]{max-height:1200px}.max-h-\\[15svh\\]{max-height:15svh}.max-h-\\[260px\\]{max-height:260px}.max-h-\\[40px\\]{max-height:40px}.max-h-\\[500px\\]{max-height:500px}.max-h-\\[900px\\]{max-height:900px}.max-h-sansSticker{max-height:var(--sansSticker)}.min-h-0{min-height:0}.min-h-\\[1\\.28em\\]{min-height:1.28em}.min-h-\\[220px\\]{min-height:220px}.min-h-\\[calc\\(1\\.28em\\*3\\)\\]{min-height:3.84em}.min-h-full{min-height:100%}.w-1\\/2{width:50%}.w-10{width:calc(var(--fontSize) * 2.5)}.w-12{width:calc(var(--fontSize) * 3)}.w-3\\/4{width:75%}.w-4{width:calc(var(--fontSize) * 1)}.w-\\[\\.7em\\]{width:.7em}.w-\\[121px\\]{width:121px}.w-\\[16px\\]{width:16px}.w-\\[197px\\]{width:197px}.w-\\[19px\\]{width:19px}.w-\\[36px\\]{width:36px}.w-auto{width:auto}.w-full{width:100%}.w-sticker{width:var(--sticker)}.min-w-0{min-width:0}.min-w-full{min-width:100%}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-3\\/4{flex-basis:75%}.basis-full{flex-basis:100%}.-translate-x-3{--tw-translate-x: calc(calc(var(--fontSize) * .75) * -1);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[11\\.25em\\]{--tw-translate-x: -11.25em;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[12px\\]{--tw-translate-y: -12px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[6px\\]{--tw-translate-y: -6px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[8px\\]{--tw-translate-y: -8px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[16px\\]{--tw-translate-x: 16px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-crosshair{cursor:crosshair}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.snap-none{scroll-snap-type:none}.snap-y{scroll-snap-type:y var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness: mandatory}.snap-start{scroll-snap-align:start}.snap-always{scroll-snap-stop:always}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-rows-\\[auto_auto\\]{grid-template-rows:auto auto}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:calc(var(--fontSize) * .5)}.gap-3{gap:calc(var(--fontSize) * .75)}.gap-6{gap:calc(var(--fontSize) * 1.5)}.gap-9{gap:calc(var(--fontSize) * 2.25)}.gap-\\[10px\\]{gap:10px}.gap-\\[20px\\]{gap:20px}.gap-x-3{-moz-column-gap:calc(var(--fontSize) * .75);column-gap:calc(var(--fontSize) * .75)}.gap-x-6{-moz-column-gap:calc(var(--fontSize) * 1.5);column-gap:calc(var(--fontSize) * 1.5)}.gap-y-1{row-gap:calc(var(--fontSize) * .25)}.gap-y-3{row-gap:calc(var(--fontSize) * .75)}.gap-y-\\[10px\\]{row-gap:10px}.overflow-hidden{overflow:hidden}.\\!overflow-y-auto{overflow-y:auto!important}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.overflow-y-scroll{overflow-y:scroll}.overscroll-contain{overscroll-behavior:contain}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded-\\[11px\\]{border-radius:11px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[8px\\]{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:calc(var(--fontSize) * .5)}.rounded-t-\\[8px\\]{border-top-left-radius:8px;border-top-right-radius:8px}.\\!border-0{border-width:0px!important}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-stroke-dark{border-color:var(--stroke-dark)}.border-stroke-light{border-color:var(--stroke-light)}.\\!bg-transparent{background-color:transparent!important}.bg-\\[\\#F2F2F2\\]{--tw-bg-opacity: 1;background-color:rgb(242 242 242 / var(--tw-bg-opacity, 1))}.bg-\\[\\#ff5a01\\]{--tw-bg-opacity: 1;background-color:rgb(255 90 1 / var(--tw-bg-opacity, 1))}.bg-\\[color-mix\\(in_srgb\\,var\\(--white\\)_16\\%\\,var\\(--black\\)\\)\\]{background-color:color-mix(in srgb,var(--white) 16%,var(--black))}.bg-black{background-color:var(--black)}.bg-blue-200{--tw-bg-opacity: 1;background-color:rgb(191 219 254 / var(--tw-bg-opacity, 1))}.bg-stroke-light{background-color:var(--stroke-light)}.bg-white{background-color:var(--white)}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-top{-o-object-position:top;object-position:top}.\\!p-0{padding:0!important}.p-3{padding:calc(var(--fontSize) * .75)}.p-\\[10px\\]{padding:10px}.px-3{padding-left:calc(var(--fontSize) * .75);padding-right:calc(var(--fontSize) * .75)}.px-6{padding-left:calc(var(--fontSize) * 1.5);padding-right:calc(var(--fontSize) * 1.5)}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.py-3{padding-top:calc(var(--fontSize) * .75);padding-bottom:calc(var(--fontSize) * .75)}.py-\\[10px\\]{padding-top:10px;padding-bottom:10px}.py-\\[4px\\]{padding-top:4px;padding-bottom:4px}.pb-0{padding-bottom:0}.pb-3{padding-bottom:calc(var(--fontSize) * .75)}.pb-9{padding-bottom:calc(var(--fontSize) * 2.25)}.pb-\\[10px\\]{padding-bottom:10px}.pl-3{padding-left:calc(var(--fontSize) * .75)}.pl-\\[1px\\]{padding-left:1px}.pr-12{padding-right:calc(var(--fontSize) * 3)}.pr-2{padding-right:calc(var(--fontSize) * .5)}.pr-3{padding-right:calc(var(--fontSize) * .75)}.pr-8{padding-right:calc(var(--fontSize) * 2)}.pr-\\[48px\\]{padding-right:48px}.pt-3{padding-top:calc(var(--fontSize) * .75)}.pt-6{padding-top:calc(var(--fontSize) * 1.5)}.pt-\\[10px\\]{padding-top:10px}.pt-\\[1px\\]{padding-top:1px}.pt-\\[20px\\]{padding-top:20px}.text-left{text-align:left}.text-right{text-align:right}.font-sans{font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif}.text-m{font-size:var(--fontSize);line-height:1.28;letter-spacing:0em}.text-s{font-size:var(--smallFontSize);line-height:1.2;letter-spacing:0em}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.leading-\\[1\\.1\\]{line-height:1.1}.leading-\\[1\\.25\\]{line-height:1.25}.text-\\[\\#f4f4f4\\],.text-\\[rgb\\(244_244_244\\)\\]{--tw-text-opacity: 1;color:rgb(244 244 244 / var(--tw-text-opacity, 1))}.text-\\[rgb\\(244_244_244_\\/_0\\.5\\)\\]{color:#f4f4f480}.text-black{color:var(--black)}.text-white{color:var(--white)}.underline{text-decoration-line:underline}.decoration-1{text-decoration-thickness:1px}.underline-offset-2{text-underline-offset:2px}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.delay-100{transition-delay:.1s}.delay-\\[140ms\\]{transition-delay:.14s}.delay-\\[24ms\\]{transition-delay:24ms}.delay-\\[40ms\\]{transition-delay:40ms}.delay-\\[60ms\\]{transition-delay:60ms}.delay-\\[80ms\\]{transition-delay:80ms}.duration-0{transition-duration:0s}.duration-100{transition-duration:.1s}.duration-150{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.duration-\\[200ms\\]{transition-duration:.2s}.duration-\\[220ms\\]{transition-duration:.22s}.duration-\\[240ms\\]{transition-duration:.24s}.duration-\\[260ms\\]{transition-duration:.26s}.duration-\\[280ms\\]{transition-duration:.28s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}:host{font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.2;--fontSize: 14px;--insetsvh: calc(100svh - (var(--fontSize) * 1.5));--insetsvw: calc(100vw - var(--fontSize));--fullwidth: calc(100% + var(--fontSize));--sticker: calc(100% + (var(--fontSize) * 1.5));--col1: calc((25% - ((var(--fontSize) * 6) / 4)));--col2: calc((50% - (var(--fontSize) * 2 / 2)));--col3: calc((100vw - (var(--fontSize) * 5)) * .75);--sansSticker: calc(100svh - (var(--fontSize) * 20));--smallFontSize: calc(.857 * var(--fontSize));--black: #000;--white: #fff;--gray: #e7e7e7;--darkgray: #444444;--graytext: #686868;--stroke-light: rgba(204, 204, 204, .2);--stroke-dark: rgba(204, 204, 204, .4);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media screen and (max-width: 768px){:host{--insetsvh: calc(100dvh - var(--fontSize))}}@media screen and (min-width: 1000px){:host{font-size:14px;--fontSize: 14px}}@media screen and (min-width: 1200px){:host{font-size:14px;--fontSize: 14px}}@media screen and (min-width: 1450px){:host{font-size:15px;--fontSize: 15px}}@media screen and (min-width: 1650px){:host{font-size:16px;--fontSize: 16px}}@media screen and (min-width: 1850px){:host{font-size:18px;--fontSize: 18px}}@media screen and (min-width: 2050px){:host{font-size:20px;--fontSize: 20px}}@media screen and (min-width: 2250px){:host{font-size:22px;--fontSize: 22px}}@media screen and (min-width: 2450px){:host{font-size:24px;--fontSize: 24px}}@media screen and (min-width: 2650px){:host{font-size:26px;--fontSize: 26px}}@media screen and (min-width: 2850px){:host{font-size:28px;--fontSize: 28px}}@media screen and (min-width: 3050px){:host{font-size:30px;--fontSize: 30px}}.hidden_scroll::-webkit-scrollbar{display:none}.hidden_scroll{scrollbar-width:none;-ms-overflow-style:none}.transition-allowdiscrete{transition-behavior:allow-discrete}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:-left-2:before{content:var(--tw-content);left:calc(calc(var(--fontSize) * .5) * -1)}.before\\:-top-6:before{content:var(--tw-content);top:calc(calc(var(--fontSize) * 1.5) * -1)}.before\\:h-16:before{content:var(--tw-content);height:calc(var(--fontSize) * 4)}.before\\:w-fullwidth:before{content:var(--tw-content);width:var(--fullwidth)}.before\\:bg-gradient-to-b:before{content:var(--tw-content);background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.before\\:from-black:before{content:var(--tw-content);--tw-gradient-from: var(--black) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:from-70\\%:before{content:var(--tw-content);--tw-gradient-from-position: 70%}.after\\:pointer-events-none:after{content:var(--tw-content);pointer-events:none}.after\\:invisible:after{content:var(--tw-content);visibility:hidden}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:right-0:after{content:var(--tw-content);right:0}.after\\:box-content:after{content:var(--tw-content);box-sizing:content-box}.after\\:bg-gradient-to-l:after{content:var(--tw-content);background-image:linear-gradient(to left,var(--tw-gradient-stops))}.after\\:from-black:after{content:var(--tw-content);--tw-gradient-from: var(--black) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\\:from-90\\%:after{content:var(--tw-content);--tw-gradient-from-position: 90%}.after\\:pl-2:after{content:var(--tw-content);padding-left:calc(var(--fontSize) * .5)}.first\\:ml-0:first-child{margin-left:0}.last\\:mb-0:last-child{margin-bottom:0}.last\\:mr-0:last-child{margin-right:0}.last\\:border-b-0:last-child{border-bottom-width:0px}@media (hover: hover) and (pointer: fine){.hover\\:scale-\\[0\\.99\\]:hover{--tw-scale-x: .99;--tw-scale-y: .99;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:opacity-60:hover{opacity:.6}.hover\\:duration-100:hover{transition-duration:.1s}.group:hover .group-hover\\:opacity-100{opacity:1}.group:hover .group-hover\\:delay-100{transition-delay:.1s}.peer:hover~.peer-hover\\:opacity-0{opacity:0}.peer:hover~.peer-hover\\:delay-0{transition-delay:0s}}@media (min-width: 640px){.sm\\:absolute{position:absolute}.sm\\:bottom-3{bottom:calc(var(--fontSize) * .75)}.sm\\:left-3{left:calc(var(--fontSize) * .75)}.sm\\:right-3{right:calc(var(--fontSize) * .75)}.sm\\:top-3{top:calc(var(--fontSize) * .75)}.sm\\:col-span-2{grid-column:span 2 / span 2}.sm\\:col-span-3{grid-column:span 3 / span 3}.sm\\:col-span-6{grid-column:span 6 / span 6}.sm\\:col-start-7{grid-column-start:7}.sm\\:col-end-13{grid-column-end:13}.sm\\:col-end-7{grid-column-end:7}.sm\\:row-start-1{grid-row-start:1}.sm\\:mb-0{margin-bottom:0}.sm\\:mt-0{margin-top:0}.sm\\:mt-2{margin-top:calc(var(--fontSize) * .5)}.sm\\:block{display:block}.sm\\:inline{display:inline}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:h-6{height:calc(var(--fontSize) * 1.5)}.sm\\:w-6{width:calc(var(--fontSize) * 1.5)}.sm\\:w-8{width:calc(var(--fontSize) * 2)}.sm\\:w-auto{width:auto}.sm\\:basis-col1{flex-basis:var(--col1)}.sm\\:basis-col2{flex-basis:var(--col2)}.sm\\:-translate-y-\\[12px\\]{--tw-translate-y: -12px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sm\\:flex-wrap{flex-wrap:wrap}.sm\\:gap-2{gap:calc(var(--fontSize) * .5)}.sm\\:gap-x-9{-moz-column-gap:calc(var(--fontSize) * 2.25);column-gap:calc(var(--fontSize) * 2.25)}.sm\\:overflow-hidden{overflow:hidden}.sm\\:pt-0{padding-top:0}.sm\\:text-m{font-size:var(--fontSize);line-height:1.28;letter-spacing:0em}.sm\\:decoration-2{text-decoration-thickness:2px}.sm\\:underline-offset-4{text-underline-offset:4px}.sm\\:opacity-0{opacity:0}.sm\\:delay-\\[32ms\\]{transition-delay:32ms}.sm\\:duration-\\[220ms\\]{transition-duration:.22s}.sm\\:before\\:hidden:before{content:var(--tw-content);display:none}.sm\\:after\\:visible:after{content:var(--tw-content);visibility:visible}.sm\\:after\\:h-8:after{content:var(--tw-content);height:calc(var(--fontSize) * 2)}.sm\\:after\\:w-full:after{content:var(--tw-content);width:100%}}@media (min-width: 768px){.md\\:mt-2{margin-top:calc(var(--fontSize) * .5)}.md\\:grid-cols-\\[repeat\\(2\\,minmax\\(auto\\,1fr\\)\\)\\]{grid-template-columns:repeat(2,minmax(auto,1fr))}.md\\:pl-3{padding-left:calc(var(--fontSize) * .75)}.md\\:opacity-0{opacity:0}}@media (min-width: 1024px){.lg\\:absolute{position:absolute}.lg\\:sticky{position:sticky}.lg\\:right-0{right:0}.lg\\:top-0{top:0}.lg\\:col-span-3{grid-column:span 3 / span 3}.lg\\:col-span-6{grid-column:span 6 / span 6}.lg\\:col-span-9{grid-column:span 9 / span 9}.lg\\:col-start-1{grid-column-start:1}.lg\\:col-start-4{grid-column-start:4}.lg\\:col-start-7{grid-column-start:7}.lg\\:col-end-13{grid-column-end:13}.lg\\:col-end-4{grid-column-end:4}.lg\\:-mx-3{margin-left:calc(calc(var(--fontSize) * .75) * -1);margin-right:calc(calc(var(--fontSize) * .75) * -1)}.lg\\:-ml-3{margin-left:calc(calc(var(--fontSize) * .75) * -1)}.lg\\:mr-1{margin-right:calc(var(--fontSize) * .25)}.lg\\:line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:h-8{height:calc(var(--fontSize) * 2)}.lg\\:h-fit{height:-moz-fit-content;height:fit-content}.lg\\:h-full{height:100%}.lg\\:max-h-\\[20svh\\]{max-height:20svh}.lg\\:min-h-\\[calc\\(1\\.28em\\*4\\)\\]{min-height:5.12em}.lg\\:w-10{width:calc(var(--fontSize) * 2.5)}.lg\\:w-8{width:calc(var(--fontSize) * 2)}.lg\\:w-\\[calc\\(\\(100\\%-var\\(--fontSize\\)\\*18\\)\\/3\\+var\\(--fontSize\\)\\*4\\.5\\)\\]{width:calc((100% - var(--fontSize) * 18) / 3 + var(--fontSize) * 4.5)}.lg\\:w-\\[calc\\(100\\%\\+var\\(--fontSize\\)\\*1\\.5\\)\\]{width:calc(100% + var(--fontSize) * 1.5)}.lg\\:w-\\[calc\\(50\\%-var\\(--fontSize\\)\\)\\]{width:calc(50% - var(--fontSize))}.lg\\:w-auto{width:auto}.lg\\:flex-1{flex:1 1 0%}.lg\\:basis-\\[calc\\(70vh-7\\.5rem\\)\\]{flex-basis:calc(70vh - 7.5rem)}.lg\\:grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:flex-col{flex-direction:column}.lg\\:flex-nowrap{flex-wrap:nowrap}.lg\\:items-stretch{align-items:stretch}.lg\\:gap-6{gap:calc(var(--fontSize) * 1.5)}.lg\\:gap-x-9{-moz-column-gap:calc(var(--fontSize) * 2.25);column-gap:calc(var(--fontSize) * 2.25)}.lg\\:self-start{align-self:flex-start}.lg\\:px-3{padding-left:calc(var(--fontSize) * .75);padding-right:calc(var(--fontSize) * .75)}.lg\\:pb-\\[48px\\]{padding-bottom:48px}.lg\\:pt-0{padding-top:0}.lg\\:last\\:pb-4:last-child{padding-bottom:calc(var(--fontSize) * 1)}@media (hover: hover) and (pointer: fine){.group:hover .lg\\:group-hover\\:opacity-100{opacity:1}}}@media (min-width: 1280px){.xl\\:line-clamp-6{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6}.xl\\:h-10{height:calc(var(--fontSize) * 2.5)}.xl\\:min-h-\\[calc\\(1\\.28em\\*6\\)\\]{min-height:7.68em}.xl\\:w-10{width:calc(var(--fontSize) * 2.5)}.xl\\:w-12{width:calc(var(--fontSize) * 3)}.xl\\:gap-6{gap:calc(var(--fontSize) * 1.5)}}@media (min-width: 1536px){.\\32xl\\:max-h-\\[900px\\]{max-height:900px}}.\\[\\&_a\\:hover\\]\\:opacity-60 a:hover{opacity:.6}.\\[\\&_a\\]\\:underline a{text-decoration-line:underline}.\\[\\&_a\\]\\:decoration-1 a{text-decoration-thickness:1px}.\\[\\&_a\\]\\:underline-offset-2 a{text-underline-offset:2px}.\\[\\&_p\\+p\\]\\:mt-5 p+p{margin-top:calc(var(--fontSize) * 1.25)}.\\[\\&_p\\+p\\]\\:mt-\\[1\\.28em\\] p+p{margin-top:1.28em}.\\[\\&_p\\+p\\]\\:mt-\\[10px\\] p+p{margin-top:10px}', rc = (e, t = 0) => {
  const n = Array.isArray(e.styles) ? [...e.styles] : [];
  return n.splice(t, 0, Pm), e.styles = n, e;
}, Mm = /* @__PURE__ */ Bs(rc(zm, 1)), Lm = "", Om = {
  key: 0,
  class: "grid grid-cols-6 w-full lg:w-[calc(50%-var(--fontSize))] gap-9 pt-6 justify-center mx-auto"
}, Hm = ["href", "data-ph-entry", "data-ph-credit-format", "onClick"], Bm = { key: 1 }, Vm = {
  key: 0,
  class: "[&_p+p]:mt-[1.28em] mt-[1.28em]"
}, Nm = {
  key: 0,
  class: "[&_p+p]:mt-[1.28em] mt-[1.28em]"
}, Fm = ["data-ph-entry"], Dm = {
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
    const t = e, { getSettings: n, getEntry: o } = sa({ entry: t.entry, environment: t.environment, apiUrl: t.apiUrl }), r = Y(!1), a = Y(null), i = re(() => {
      var c, u;
      return Ds({
        theme: t.theme,
        backgroundColor: t.apiBackgroundColor || ((c = a.value) == null ? void 0 : c.apiBackgroundColor),
        foregroundColor: t.apiForegroundColor || ((u = a.value) == null ? void 0 : u.apiForegroundColor)
      });
    }), l = (c) => {
      if (c)
        try {
          return new URL(c, window.location.origin).hostname;
        } catch {
          return;
        }
    }, s = () => {
      pe("antikythera footer scroll top clicked", {
        antikythera_entry: t.entry || void 0
      }), window.scrollTo({ top: 0, behavior: "smooth" });
    }, f = (c) => {
      var u;
      pe("antikythera credit link clicked", {
        antikythera_entry: t.entry || void 0,
        credit_title: (c == null ? void 0 : c.title) || void 0,
        credit_format: (c == null ? void 0 : c.format) || void 0,
        credit_is_contributor: !!(c != null && c.isContributor),
        credit_person_name: ((u = c == null ? void 0 : c.person) == null ? void 0 : u.title) || void 0,
        credit_external_domain: l(c == null ? void 0 : c.externalLink)
      });
    };
    return vo(async () => {
      var c, u, h, y, E, I, H;
      if (t.entry) {
        const w = await o();
        w != null && w.error && pe("antikythera footer entry load error", {
          antikythera_entry: t.entry || void 0,
          error_message: w.error
        }), r.value = ((u = (c = w == null ? void 0 : w.entry) == null ? void 0 : c.annotations) == null ? void 0 : u.length) > 0, a.value = w == null ? void 0 : w.entry, pe("antikythera footer loaded", {
          antikythera_entry: t.entry || void 0,
          entry_title: ((h = w == null ? void 0 : w.entry) == null ? void 0 : h.title) || void 0,
          annotations_count: ((E = (y = w == null ? void 0 : w.entry) == null ? void 0 : y.annotations) == null ? void 0 : E.length) || 0,
          credits_count: ((H = (I = w == null ? void 0 : w.entry) == null ? void 0 : I.creditsList) == null ? void 0 : H.length) || 0
        });
      } else
        console.warn("antikythera footer skipped: no entry slug provided");
    }), (c, u) => {
      var h, y, E, I, H;
      return k(), T("footer", {
        class: ge(["relative w-full z-[999] bg-black text-white rounded-[8px] w-sticker py-3 px-3 -translate-x-3 border border-stroke-light mb-3 box-border", [{ "!hidden": !r.value && ((y = (h = a.value) == null ? void 0 : h.creditsList) == null ? void 0 : y.length) <= 0 }, { "pb-9": !r.value }]]),
        style: kn(i.value)
      }, [
        ((I = (E = a.value) == null ? void 0 : E.creditsList) == null ? void 0 : I.length) > 0 ? (k(), T("section", Om, [
          (k(!0), T(ye, null, xt((H = a.value) == null ? void 0 : H.creditsList, (w, K) => {
            var W, b, z, J, P;
            return k(), T("article", {
              class: ge(["", [{ "col-span-6 sm:col-span-3 w-full": w.format == "half" }, { "col-span-3 sm:col-span-2 w-full": w.format == "quarter" }]])
            }, [
              C("h2", null, ue(w.title), 1),
              w.isContributor ? (k(), T(ye, { key: 0 }, [
                C("h3", null, [
                  w.externalLink && w.externalLink != "" ? (k(), T("a", {
                    key: 0,
                    href: w.externalLink,
                    target: "_blank",
                    class: "underline underline-offset-4 decoration-1 sm:underline-offset-4 sm:decoration-2 hover:opacity-60",
                    "data-ph-capture": "",
                    "data-ph-component": "antikythera-footer",
                    "data-ph-action": "credit-link-click",
                    "data-ph-entry": t.entry,
                    "data-ph-credit-format": w.format,
                    onClick: (U) => f(w)
                  }, [
                    C("strong", null, ue((W = w == null ? void 0 : w.person) == null ? void 0 : W.title), 1)
                  ], 8, Hm)) : (k(), T("strong", Bm, ue((b = w == null ? void 0 : w.person) == null ? void 0 : b.title), 1))
                ]),
                (z = w == null ? void 0 : w.person) != null && z.biography ? (k(), T("div", Vm, [
                  ne(Ot(tr), {
                    value: (J = w == null ? void 0 : w.person) != null && J.biography ? (P = w == null ? void 0 : w.person) == null ? void 0 : P.biography : []
                  }, null, 8, ["value"])
                ])) : oe("", !0)
              ], 64)) : (k(), T(ye, { key: 1 }, [
                w != null && w.custom ? (k(), T("div", Nm, [
                  ne(Ot(tr), {
                    value: w != null && w.custom ? w == null ? void 0 : w.custom : []
                  }, null, 8, ["value"])
                ])) : oe("", !0)
              ], 64))
            ], 2);
          }), 256))
        ])) : oe("", !0),
        e.scrollTop ? (k(), T("button", {
          key: 1,
          onClick: s,
          class: "text-left col-span-12 sm:absolute sm:bottom-3 sm:left-3 text-xs text-black hover:opacity-60",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-footer",
          "data-ph-action": "scroll-top",
          "data-ph-entry": t.entry
        }, " ↑ Back to top ", 8, Fm)) : oe("", !0)
      ], 6);
    };
  }
}, jm = /* @__PURE__ */ wo(Dm, [["styles", [Lm]]]), Um = /* @__PURE__ */ Bs(rc(jm, 0)), aa = "2.0.1";
console.info(`Antikythera API v${aa}`);
class Km {
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
    detectAnnotationsOnInit: c = !0,
    analytics: u = !0
  } = {}) {
    kl({
      analytics: u,
      entry: t,
      environment: l,
      apiUrl: s,
      packageVersion: aa,
      explicit: !0
    }), customElements.get(o) || customElements.define(o, Mm), customElements.get(r) || customElements.define(r, Um);
    const { entryId: h, getSettings: y, getEntry: E, getEntryMeta: I, getAnnotations: H, init: w, reinit: K, detectAnnotations: W } = sa({
      entry: t,
      environment: l,
      apiUrl: s,
      customCss: f,
      analytics: u,
      packageVersion: aa
    });
    this.entryId = h, this.getSettings = y, this.getEntry = E, this.getEntryMeta = I, this.getAnnotations = H, this.init = w, this.reinit = K, this.detectAnnotations = W, this.captureAnalyticsEvent = pe, i || this.init({ menuName: o, annotationClass: a, detectAnnotationsOnInit: c });
  }
}
export {
  Km as Antikythera,
  Um as AntikytheraFooter,
  Mm as AntikytheraMenu
};
