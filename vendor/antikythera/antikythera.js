const _r = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_NITRO_SERVER_PORT: "3030", VITE_POSTHOG_HOST: "https://us.i.posthog.com", VITE_POSTHOG_PROJECT_API_KEY: "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz", VITE_POSTHOG_UI_HOST: "https://us.posthog.com" }, Kc = "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz", qc = "https://k.antikythera.org", Wc = "https://us.posthog.com", Xc = "https://api.antikythera.org", Yc = 100, mi = [
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
], Gc = {
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
}, Zc = "attr__data-ph-";
let je = null, Rn = null, Do = !1, xn = !1, vi = !1, be = null, aa = {}, yi = !1, Fn = null, Zo = null, ia = 0, kl = 0;
const kr = /* @__PURE__ */ new Set(), ao = [], zn = (e) => {
  if (!(typeof globalThis > "u"))
    return globalThis[e];
}, Lo = (e) => _r == null ? void 0 : _r[e], Jc = (e) => e || zn("__ANTIKYTHERA_API_URL__") || Lo("VITE_NITRO_SERVER") || zn("__ANTIKYTHERA_TEST_SERVER__") || Xc, Qc = () => typeof window > "u" ? !1 : new URLSearchParams(window.location.search).has("telemetry"), Cr = (e) => {
  if (e === "projectApiKey") return "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz";
  if (e === "host") return "https://k.antikythera.org";
  if (e === "uiHost") return "";
}, eu = (e, { timeout: t = 2500 } = {}) => {
  typeof window > "u" || (typeof window.requestIdleCallback == "function" ? window.requestIdleCallback(e, { timeout: t }) : window.setTimeout(e, 300));
}, bi = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      const t = new URL(e, typeof window < "u" ? window.location.origin : void 0);
      return `${t.origin}${t.pathname}`;
    } catch {
      return;
    }
}, tu = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      return new URL(e, typeof window < "u" ? window.location.origin : void 0).hostname;
    } catch {
      return;
    }
}, nu = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      const t = new URL(e);
      return !["http:", "https:"].includes(t.protocol) || t.username || t.password ? void 0 : t.hostname;
    } catch {
      return;
    }
}, ou = (e, t) => {
  const n = Object.prototype.hasOwnProperty.call(t, "tracingHeaders") ? t.tracingHeaders : t.tracing_headers;
  if (n === !1) return [];
  if (Array.isArray(n)) return n.filter(Boolean);
  const o = nu(Jc(e));
  return o ? [o] : [];
}, ru = (e, t) => {
  if (e === !1) return { enabled: !1 };
  const n = typeof e == "object" && e !== null ? e : {}, o = Qc() ? "full" : n.mode || n.analyticsMode || "cookieless", r = o === "full", a = !r && n.autocapture !== !1;
  return {
    enabled: !0,
    mode: o,
    fullTracking: r,
    anonymousAutocapture: a,
    projectApiKey: n.projectApiKey || n.posthogProjectApiKey || Lo("VITE_POSTHOG_PROJECT_API_KEY") || zn("__ANTIKYTHERA_POSTHOG_PROJECT_API_KEY__") || zn("__ANTIKYTHERA_POSTHOG_KEY__") || Cr("projectApiKey") || Kc,
    host: n.host || n.posthogHost || Lo("VITE_POSTHOG_HOST") || zn("__ANTIKYTHERA_POSTHOG_HOST__") || Cr("host") || qc,
    uiHost: n.uiHost || n.posthogUiHost || Lo("VITE_POSTHOG_UI_HOST") || zn("__ANTIKYTHERA_POSTHOG_UI_HOST__") || Cr("uiHost") || Wc,
    autocapture: r ? n.autocapture !== !1 : a ? Gc : !1,
    deadClicks: r && n.deadClicks !== !1 && n.dead_clicks !== !1,
    rageclick: r && n.rageclick !== !1,
    sessionReplay: r && n.sessionReplay !== !1,
    heatmaps: r && n.heatmaps !== !1,
    exceptions: r && n.exceptions !== !1,
    pageviews: n.pageviews !== !1,
    pageleave: n.pageleave !== !1,
    apiRequests: n.apiRequests !== !1,
    webVitals: n.webVitals !== !1,
    tracingHeaders: ou(t, n),
    personProfiles: n.personProfiles || n.person_profiles || (r ? "always" : "identified_only"),
    cookielessMode: n.cookielessMode || n.cookieless_mode || void 0,
    debug: n.debug === !0
  };
}, wi = (e = {}) => ({
  ...aa,
  ...e
}), au = (e) => (e != null && e.properties && (e.properties.$current_url && (e.properties.$current_url = bi(e.properties.$current_url)), e.properties.$referrer && (e.properties.$referrer = bi(e.properties.$referrer)), be != null && be.fullTracking || (e.properties.$host = e.properties.$host || tu(e.properties.$current_url), delete e.properties.$ip, delete e.properties.$raw_user_agent, delete e.properties.$element_text, delete e.properties.$el_text, delete e.properties.$elements_chain, Array.isArray(e.properties.$elements) && (e.properties.$elements = e.properties.$elements.map(
  (t) => Object.fromEntries(
    Object.entries(t).filter(([n]) => n === "tag_name" || n.startsWith(Zc))
  )
)))), e), iu = () => {
  var e;
  typeof window > "u" || !((e = window.performance) != null && e.getEntriesByType) || window.setTimeout(() => {
    const [t] = window.performance.getEntriesByType("navigation");
    t && se("antikythera page performance measured", {
      load_duration_ms: Math.round(t.loadEventEnd || t.duration || 0),
      dom_content_loaded_ms: Math.round(t.domContentLoadedEventEnd || 0),
      transfer_size: t.transferSize || void 0,
      encoded_body_size: t.encodedBodySize || void 0
    });
  }, 0);
}, ln = () => {
  var e, t, n, o, r;
  typeof globalThis > "u" || (globalThis.__ANTIKYTHERA_ANALYTICS__ = {
    enabled: xn,
    initialized: Do,
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
    posthog: Do && je ? {
      isCapturing: typeof je.is_capturing == "function" ? je.is_capturing() : void 0,
      distinctId: typeof je.get_distinct_id == "function" ? je.get_distinct_id() : void 0,
      analyticsEndpoint: je.analyticsDefaultEndpoint,
      requestBatching: (e = je.config) == null ? void 0 : e.request_batching,
      disableCompression: (t = je.config) == null ? void 0 : t.disable_compression,
      cookielessMode: (n = je.config) == null ? void 0 : n.cookieless_mode,
      persistence: (o = je.config) == null ? void 0 : o.persistence,
      personProfiles: (r = je.config) == null ? void 0 : r.person_profiles
    } : null,
    context: aa,
    lastError: Fn,
    lastCapture: Zo,
    captureAttemptCount: ia,
    postHogCaptureCount: kl,
    pendingCaptureCount: ao.length,
    posthogModuleRequested: !!Rn,
    capture: (a = "antikythera browser smoke test", i = {}) => se(a, i)
  });
}, lu = (e, t) => {
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
    custom_personal_data_properties: t.fullTracking ? [] : mi,
    property_denylist: t.fullTracking ? [] : mi,
    request_batching: !0,
    tracing_headers: t.tracingHeaders,
    respect_dnt: !0,
    cookieless_mode: t.fullTracking ? void 0 : t.cookielessMode,
    person_profiles: t.personProfiles,
    before_send: au,
    _onCapture: (n) => {
      kl += 1, Zo = {
        event: n,
        acceptedByPostHog: !0,
        at: (/* @__PURE__ */ new Date()).toISOString()
      }, ln();
    }
  }), t.debug && e.debug();
}, su = () => {
  if (je) {
    for (; ao.length > 0; ) {
      const e = ao.shift();
      try {
        ia += 1;
        const t = e.kind === "exception" ? je.captureException(e.error, e.properties) : je.capture(e.event, e.properties, { send_instantly: !0, timestamp: e.at });
        Zo = {
          event: e.event,
          acceptedByPostHog: !!t,
          at: (/* @__PURE__ */ new Date()).toISOString()
        };
      } catch (t) {
        Fn = (t == null ? void 0 : t.message) || "PostHog capture failed";
      }
    }
    ln();
  }
}, cu = () => Rn || (Rn = new Promise((e) => {
  eu(() => {
    import("./chunks/posthog-DRTLl3XD.js").then((t) => e(t.default || t.posthog || null)).catch((t) => {
      Rn = null, Fn = (t == null ? void 0 : t.message) || "PostHog failed to load", ln(), e(null);
    });
  });
}), Rn), uu = () => cu().then((e) => {
  if (!e) return null;
  if (!Do && xn && be)
    try {
      lu(e, be), je = e, Do = !0;
    } catch (t) {
      xn = !1, Fn = (t == null ? void 0 : t.message) || "PostHog initialization failed";
    }
  return ln(), su(), je;
}), Cl = ({
  analytics: e = !0,
  entry: t = "",
  environment: n = "production",
  apiUrl: o = void 0,
  packageVersion: r = void 0,
  explicit: a = !1
} = {}) => typeof window > "u" || typeof document > "u" ? { enabled: !1 } : ((a || !vi) && (be = ru(e, o), xn = be.enabled && !!be.projectApiKey, a && (vi = !0), Fn = null), aa = {
  antikythera_entry: t || void 0,
  antikythera_environment: n,
  antikythera_package_version: r,
  antikythera_api_host: o,
  site_origin: typeof window < "u" ? window.location.origin : void 0,
  site_hostname: typeof window < "u" ? window.location.hostname : void 0
}, ln(), xn ? (uu(), be.webVitals && iu(), yi || (se("antikythera package initialized"), yi = !0), { enabled: !0 }) : { enabled: !1 }), se = (e, t = {}, { onceKey: n = void 0 } = {}) => {
  if (!(!xn || !e) && !(n && kr.has(n))) {
    if (!je) {
      ao.length < Yc && (n && kr.add(n), ao.push({ kind: "event", event: e, properties: wi(t), at: /* @__PURE__ */ new Date() }), ln());
      return;
    }
    n && kr.add(n);
    try {
      ia += 1;
      const o = je.capture(e, wi(t), { send_instantly: !0 });
      Zo = {
        event: e,
        acceptedByPostHog: !!o,
        at: (/* @__PURE__ */ new Date()).toISOString()
      }, ln();
    } catch (o) {
      Fn = (o == null ? void 0 : o.message) || "PostHog capture failed", ln();
    }
  }
}, Sr = (e = {}) => {
  !xn || (be == null ? void 0 : be.apiRequests) === !1 || se("antikythera api request completed", e);
}, xi = "antikythera-fonts", _i = "https://api.antikythera.org/fonts", du = [
  ["ESAllianz-Book", "normal", 400],
  ["ESAllianz-BookItalic", "italic", 400],
  ["ESAllianz-Bold", "normal", 700],
  ["ESAllianz-BoldItalic", "italic", 700]
], fu = () => du.map(
  ([e, t, n]) => `@font-face{font-family:'ESAllianz-Book';font-style:${t};font-weight:${n};font-display:swap;src:url('${_i}/${e}.woff2') format('woff2'),url('${_i}/${e}.woff') format('woff');}`
).join(`
`), pu = () => {
  if (typeof document > "u" || document.getElementById(xi)) return;
  const e = document.createElement("style");
  e.id = xi, e.appendChild(document.createTextNode(fu()));
  const t = document.head || document.getElementsByTagName("head")[0];
  t.insertBefore(e, t.firstChild);
}, Tr = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_NITRO_SERVER_PORT: "3030", VITE_POSTHOG_HOST: "https://us.i.posthog.com", VITE_POSTHOG_PROJECT_API_KEY: "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz", VITE_POSTHOG_UI_HOST: "https://us.posthog.com" }, Er = /* @__PURE__ */ new Map(), la = ({
  entry: e = "",
  environment: t = "production",
  customCss: n = !1,
  apiUrl: o = void 0,
  analytics: r = !0,
  packageVersion: a = void 0
} = {}) => {
  Cl({
    analytics: r,
    entry: e,
    environment: t,
    apiUrl: o,
    packageVersion: a
  }), pu();
  const i = (z) => {
    if (!(!z || typeof z != "string"))
      try {
        const U = new URL(z);
        if (!["https:", "http:"].includes(U.protocol) || U.username || U.password)
          throw new Error("unsupported URL");
        return U.origin;
      } catch {
        console.warn("antikythera API URL override ignored: expected a valid http(s) origin");
        return;
      }
  }, l = i(o) || i(globalThis.__ANTIKYTHERA_API_URL__) || i(Tr == null ? void 0 : Tr.VITE_NITRO_SERVER) || i(globalThis.__ANTIKYTHERA_TEST_SERVER__) || "https://api.antikythera.org", s = `${l}/api/v1`;
  let f = e, c = null;
  const d = async (z, { textStyle: U = void 0 } = {}) => {
    const j = U ? "&textStyle=" + U : "", Y = `${s}${z}?env=${t}${j}`, oe = `${l}:${t}:${f}:${z}:${U || "portabletext"}`;
    if (Er.has(oe))
      Sr({
        api_path: z,
        api_environment: t,
        api_entry: f || void 0,
        api_text_style: U || "portabletext",
        api_success: !0,
        api_cache: "memory"
      });
    else {
      const F = typeof performance < "u" ? performance.now() : Date.now();
      Er.set(
        oe,
        fetch(Y).then((ee) => {
          const V = typeof performance < "u" ? performance.now() : Date.now(), G = Math.round(V - F);
          if (Sr({
            api_path: z,
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
          return ee.antikytheraAnalyticsCaptured || Sr({
            api_path: z,
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
    return Er.get(oe);
  }, h = async ({ textStyle: z = void 0 } = {}) => {
    try {
      return await d("/settings", { textStyle: z });
    } catch (U) {
      return { error: U.message };
    }
  }, y = async ({ textStyle: z = void 0 } = {}) => {
    try {
      return await d(`/entries/${f}`, { textStyle: z });
    } catch (U) {
      return { error: U.message };
    }
  }, T = async ({ textStyle: z = void 0 } = {}) => {
    try {
      return await d(`/entries/${f}/meta`, { textStyle: z });
    } catch (U) {
      return { error: U.message };
    }
  }, R = async ({ textStyle: z = void 0 } = {}) => {
    try {
      return await d(`/annotations/${f}`, { textStyle: z });
    } catch (U) {
      return { error: U.message };
    }
  }, O = (z, U = void 0) => {
    var j, Y, oe;
    return {
      annotation_id: (z == null ? void 0 : z.id) || U || void 0,
      annotation_title: (z == null ? void 0 : z.title) || void 0,
      annotation_type: (z == null ? void 0 : z.annotationType) || void 0,
      annotation_has_external_link: !!(z != null && z.externalLink),
      annotation_has_featured_image: !!((j = z == null ? void 0 : z.featuredImage) != null && j.url || (Y = z == null ? void 0 : z.featuredImageSquare) != null && Y.url),
      annotation_scan_enabled: !!((oe = z == null ? void 0 : z.scanText) != null && oe.enableScanText)
    };
  }, x = (z, U) => {
    !z || !U || (z.setAttribute("data-ph-capture", ""), z.setAttribute("data-ph-component", "antikythera-annotation"), z.setAttribute("data-ph-action", "annotation-click"), z.setAttribute("data-ph-annotation-id", U.id), z.setAttribute("data-ph-entry", f), U.annotationType && z.setAttribute("data-ph-annotation-type", U.annotationType));
  }, K = (z) => String(z || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), W = async ({ annotationClass: z = "annotation" }) => {
    const U = await R(), j = [], Y = [];
    if (!Array.isArray(U)) {
      console.warn("antikythera annotation scan skipped: annotations response is not an array", U);
      return;
    }
    U.forEach((V) => {
      var G, q;
      !((G = V.scanText) != null && G.enableScanText) || !Array.isArray((q = V.scanText) == null ? void 0 : q.scanSegments) || V.scanText.scanSegments.forEach((le) => {
        j.push({
          id: V.id,
          annotationPalette: V.annotationPalette ? `annotation_${V.annotationPalette}` : "annotation_inherit",
          annotationType: V.annotationType,
          keyword: le.scanKeyword,
          phrase: le.scanPhrase
        });
      });
    });
    const oe = (V) => {
      V.nodeType === Node.TEXT_NODE ? Y.push(V) : V.childNodes.forEach(oe);
    };
    oe(document.body);
    const F = (V) => {
      const G = (q) => q.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
      return j.forEach((q) => {
        const { keyword: le, phrase: pe, id: xe, annotationPalette: qe, annotationType: Ve } = q, $e = new RegExp(`(${G(pe)})`, "gi");
        $e.test(V) && (q.found = !0, V = V.replace($e, (Oe) => {
          const Ne = new RegExp(`(${G(le)})`, "gi");
          return Oe.replace(
            Ne,
            `<span class="${K(z)} ${K(qe)}" id="${K(xe)}" data-ph-capture data-ph-component="antikythera-annotation" data-ph-action="annotation-click" data-ph-entry="${K(f)}" data-ph-annotation-id="${K(xe)}" data-ph-annotation-type="${K(Ve)}">$1</span>`
          );
        }));
      }), V;
    };
    Y.forEach((V) => {
      const G = F(V.nodeValue);
      if (G !== V.nodeValue) {
        const q = document.createElement("span");
        q.innerHTML = G, V.replaceWith(...q.childNodes);
      }
    });
    let ee = 0;
    return j.forEach(({ id: V, phrase: G, found: q }) => {
      q || (ee++, console.error(`Annotation [${V}] with phrase "${G}" could not be found in the document.`), se("antikythera annotation scan missed", {
        antikythera_entry: f || void 0,
        annotation_id: V,
        annotation_phrase: G
      }));
    }), se("antikythera annotation scan completed", {
      antikythera_entry: f || void 0,
      scan_total: j.length,
      scan_found: j.length - ee,
      scan_missed: ee
    }), U;
  }, w = async ({ menuName: z = "antikythera-menu", annotationClass: U = "annotation" } = {}) => {
    let j = [];
    const Y = await W({ annotationClass: U });
    Array.isArray(Y) && (j = Y);
    const oe = new Map(j.map((G) => [G.id, G])), F = (G, q) => {
      const le = G.getAttribute("id"), pe = oe.get(le);
      x(G, pe || { id: le }), G.addEventListener("click", () => {
        var xe;
        se("antikythera annotation clicked", {
          antikythera_entry: f || void 0,
          ...O(pe, le),
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
      }, pe = (qe) => {
        qe.forEach((Ve) => {
          var Ot;
          const $e = Ve.target, Oe = $e.getAttribute("id"), Ne = oe.get(Oe);
          Ve.isIntersecting ? (se(
            "antikythera annotation viewed",
            {
              antikythera_entry: f || void 0,
              ...O(Ne, Oe),
              annotation_text: ((Ot = $e.textContent) == null ? void 0 : Ot.trim()) || void 0
            },
            { onceKey: `annotation-viewed:${f}:${Oe}` }
          ), q.setAttribute("activeannotation", "v1_" + Oe), setTimeout(() => {
            q.setAttribute("activeannotation", "");
          }, 150)) : (q.setAttribute("inactiveannotation", "v1_" + Oe), q.getAttribute("activeannotation") == "v1_" + Oe && q.setAttribute("activeannotation", ""), setTimeout(() => {
            q.setAttribute("inactiveannotation", "");
          }, 150));
        });
      };
      c = new IntersectionObserver(pe, le);
      for (var xe = 0; xe < G.length; xe++)
        c.observe(G[xe]);
    };
    if (document) {
      const G = document.querySelectorAll(`.${U}`), q = document.querySelector(z);
      if (!q) {
        console.warn(`antikythera annotation scan skipped: ${z} was not found`);
        return;
      }
      for (var V = 0; V < G.length; V++)
        F(G[V], q);
      ee(G, q);
    } else
      console.warn("antikythera initialization: no document present");
  }, P = async ({ menuName: z = "antikythera-menu", annotationClass: U = ".annotation", detectAnnotationsOnInit: j = !0 } = {}) => {
    console.log("antikythera initialization"), se("antikythera core initialized", {
      antikythera_entry: f || void 0,
      annotation_detection_enabled: j
    });
    const Y = () => {
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
    j && await w(), Y();
    const oe = new CustomEvent("antikythera:initComplete", {
      detail: { entry: f }
    });
    document.dispatchEvent(oe);
  }, J = async (z, U = "antikythera-menu", j = ".annotation", Y = !0) => {
    f = z, se("antikythera core reinitialized", {
      antikythera_entry: f || void 0
    }), await P({ menuName: U, annotationClass: j, detectAnnotationsOnInit: Y });
  };
  return {
    entryId: `Antikythera entryId ID: ${f}`,
    getSettings: h,
    getEntry: y,
    getEntryMeta: T,
    getAnnotations: R,
    detectAnnotations: w,
    init: P,
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
function sa(e, t) {
  const n = new Set(e.split(","));
  return (o) => n.has(o);
}
const Te = {}, Mn = [], Lt = () => {
}, hu = () => !1, Jo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ca = (e) => e.startsWith("onUpdate:"), Ie = Object.assign, ua = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, gu = Object.prototype.hasOwnProperty, ke = (e, t) => gu.call(e, t), ie = Array.isArray, Ln = (e) => Qo(e) === "[object Map]", Sl = (e) => Qo(e) === "[object Set]", fe = (e) => typeof e == "function", ze = (e) => typeof e == "string", un = (e) => typeof e == "symbol", Ae = (e) => e !== null && typeof e == "object", Tl = (e) => (Ae(e) || fe(e)) && fe(e.then) && fe(e.catch), El = Object.prototype.toString, Qo = (e) => El.call(e), mu = (e) => Qo(e).slice(8, -1), er = (e) => Qo(e) === "[object Object]", da = (e) => ze(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, to = /* @__PURE__ */ sa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), tr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, vu = /-(\w)/g, ct = tr(
  (e) => e.replace(vu, (t, n) => n ? n.toUpperCase() : "")
), yu = /\B([A-Z])/g, yt = tr(
  (e) => e.replace(yu, "-$1").toLowerCase()
), nr = tr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ar = tr(
  (e) => e ? `on${nr(e)}` : ""
), sn = (e, t) => !Object.is(e, t), $r = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Al = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, bu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Dr = (e) => {
  const t = ze(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ki;
const $l = () => ki || (ki = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function bn(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ze(o) ? ku(o) : bn(o);
      if (r)
        for (const a in r)
          t[a] = r[a];
    }
    return t;
  } else if (ze(e) || Ae(e))
    return e;
}
const wu = /;(?![^(]*\))/g, xu = /:([^]+)/, _u = /\/\*[^]*?\*\//g;
function ku(e) {
  const t = {};
  return e.replace(_u, "").split(wu).forEach((n) => {
    if (n) {
      const o = n.split(xu);
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
  else if (Ae(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Cu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Su = /* @__PURE__ */ sa(Cu);
function Rl(e) {
  return !!e || e === "";
}
const Il = (e) => !!(e && e.__v_isRef === !0), ue = (e) => ze(e) ? e : e == null ? "" : ie(e) || Ae(e) && (e.toString === El || !fe(e.toString)) ? Il(e) ? ue(e.value) : JSON.stringify(e, Pl, 2) : String(e), Pl = (e, t) => Il(t) ? Pl(e, t.value) : Ln(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], a) => (n[Rr(o, a) + " =>"] = r, n),
    {}
  )
} : Sl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Rr(n))
} : un(t) ? Rr(t) : Ae(t) && !ie(t) && !er(t) ? String(t) : t, Rr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    un(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let pt;
class Tu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = pt, !t && pt && (this.index = (pt.scopes || (pt.scopes = [])).push(
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
      const n = pt;
      try {
        return pt = this, t();
      } finally {
        pt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    pt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    pt = this.parent;
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
function Eu() {
  return pt;
}
let Se;
const Ir = /* @__PURE__ */ new WeakSet();
class zl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.nextEffect = void 0, this.cleanup = void 0, this.scheduler = void 0, pt && pt.active && pt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ir.has(this) && (Ir.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || (this.flags |= 8, this.nextEffect = no, no = this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ci(this), Ll(this);
    const t = Se, n = St;
    Se = this, St = !0;
    try {
      return this.fn();
    } finally {
      Ol(this), Se = t, St = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ha(t);
      this.deps = this.depsTail = void 0, Ci(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ir.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    jr(this) && this.run();
  }
  get dirty() {
    return jr(this);
  }
}
let Ml = 0, no;
function fa() {
  Ml++;
}
function pa() {
  if (--Ml > 0)
    return;
  let e;
  for (; no; ) {
    let t = no;
    for (no = void 0; t; ) {
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
function Ll(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ol(e) {
  let t, n = e.depsTail;
  for (let o = n; o; o = o.prevDep)
    o.version === -1 ? (o === n && (n = o.prevDep), ha(o), Au(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0;
  e.deps = t, e.depsTail = n;
}
function jr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && Hl(t.dep.computed) === !1 || t.dep.version !== t.version)
      return !0;
  return !!e._dirty;
}
function Hl(e) {
  if (e.flags & 2)
    return !1;
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === io))
    return;
  e.globalVersion = io;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && !jr(e)) {
    e.flags &= -3;
    return;
  }
  const n = Se, o = St;
  Se = e, St = !0;
  try {
    Ll(e);
    const r = e.fn(e._value);
    (t.version === 0 || sn(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Se = n, St = o, Ol(e), e.flags &= -3;
  }
}
function ha(e) {
  const { dep: t, prevSub: n, nextSub: o } = e;
  if (n && (n.nextSub = o, e.prevSub = void 0), o && (o.prevSub = n, e.nextSub = void 0), t.subs === e && (t.subs = n), !t.subs && t.computed) {
    t.computed.flags &= -5;
    for (let r = t.computed.deps; r; r = r.nextDep)
      ha(r);
  }
}
function Au(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let St = !0;
const Bl = [];
function dn() {
  Bl.push(St), St = !1;
}
function fn() {
  const e = Bl.pop();
  St = e === void 0 ? !0 : e;
}
function Ci(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Se;
    Se = void 0;
    try {
      t();
    } finally {
      Se = n;
    }
  }
}
let io = 0;
class ga {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0;
  }
  track(t) {
    if (!Se || !St || Se === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Se)
      n = this.activeLink = {
        dep: this,
        sub: Se,
        version: this.version,
        nextDep: void 0,
        prevDep: void 0,
        nextSub: void 0,
        prevSub: void 0,
        prevActiveLink: void 0
      }, Se.deps ? (n.prevDep = Se.depsTail, Se.depsTail.nextDep = n, Se.depsTail = n) : Se.deps = Se.depsTail = n, Se.flags & 4 && Vl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = Se.depsTail, n.nextDep = void 0, Se.depsTail.nextDep = n, Se.depsTail = n, Se.deps === n && (Se.deps = o);
    }
    return n;
  }
  trigger(t) {
    this.version++, io++, this.notify(t);
  }
  notify(t) {
    fa();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify();
    } finally {
      pa();
    }
  }
}
function Vl(e) {
  const t = e.dep.computed;
  if (t && !e.dep.subs) {
    t.flags |= 20;
    for (let o = t.deps; o; o = o.nextDep)
      Vl(o);
  }
  const n = e.dep.subs;
  n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
}
const Ur = /* @__PURE__ */ new WeakMap(), wn = Symbol(
  ""
), Kr = Symbol(
  ""
), lo = Symbol(
  ""
);
function tt(e, t, n) {
  if (St && Se) {
    let o = Ur.get(e);
    o || Ur.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = new ga()), r.track();
  }
}
function qt(e, t, n, o, r, a) {
  const i = Ur.get(e);
  if (!i) {
    io++;
    return;
  }
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else {
    const s = ie(e), f = s && da(n);
    if (s && n === "length") {
      const c = Number(o);
      i.forEach((d, h) => {
        (h === "length" || h === lo || !un(h) && h >= c) && l.push(d);
      });
    } else {
      const c = (d) => d && l.push(d);
      switch (n !== void 0 && c(i.get(n)), f && c(i.get(lo)), t) {
        case "add":
          s ? f && c(i.get("length")) : (c(i.get(wn)), Ln(e) && c(i.get(Kr)));
          break;
        case "delete":
          s || (c(i.get(wn)), Ln(e) && c(i.get(Kr)));
          break;
        case "set":
          Ln(e) && c(i.get(wn));
          break;
      }
    }
  }
  fa();
  for (const s of l)
    s.trigger();
  pa();
}
function $n(e) {
  const t = we(e);
  return t === e ? t : (tt(t, "iterate", lo), Tt(e) ? t : t.map(Ze));
}
function or(e) {
  return tt(e = we(e), "iterate", lo), e;
}
const $u = {
  __proto__: null,
  [Symbol.iterator]() {
    return Pr(this, Symbol.iterator, Ze);
  },
  concat(...e) {
    return $n(this).concat(
      ...e.map((t) => ie(t) ? $n(t) : t)
    );
  },
  entries() {
    return Pr(this, "entries", (e) => (e[1] = Ze(e[1]), e));
  },
  every(e, t) {
    return Nt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Nt(this, "filter", e, t, (n) => n.map(Ze), arguments);
  },
  find(e, t) {
    return Nt(this, "find", e, t, Ze, arguments);
  },
  findIndex(e, t) {
    return Nt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Nt(this, "findLast", e, t, Ze, arguments);
  },
  findLastIndex(e, t) {
    return Nt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Nt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return zr(this, "includes", e);
  },
  indexOf(...e) {
    return zr(this, "indexOf", e);
  },
  join(e) {
    return $n(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return zr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Nt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Zn(this, "pop");
  },
  push(...e) {
    return Zn(this, "push", e);
  },
  reduce(e, ...t) {
    return Si(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Si(this, "reduceRight", e, t);
  },
  shift() {
    return Zn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Nt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Zn(this, "splice", e);
  },
  toReversed() {
    return $n(this).toReversed();
  },
  toSorted(e) {
    return $n(this).toSorted(e);
  },
  toSpliced(...e) {
    return $n(this).toSpliced(...e);
  },
  unshift(...e) {
    return Zn(this, "unshift", e);
  },
  values() {
    return Pr(this, "values", Ze);
  }
};
function Pr(e, t, n) {
  const o = or(e), r = o[t]();
  return o !== e && !Tt(e) && (r._next = r.next, r.next = () => {
    const a = r._next();
    return a.value && (a.value = n(a.value)), a;
  }), r;
}
const Ru = Array.prototype;
function Nt(e, t, n, o, r, a) {
  const i = or(e), l = i !== e && !Tt(e), s = i[t];
  if (s !== Ru[t]) {
    const d = s.apply(e, a);
    return l ? Ze(d) : d;
  }
  let f = n;
  i !== e && (l ? f = function(d, h) {
    return n.call(this, Ze(d), h, e);
  } : n.length > 2 && (f = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const c = s.call(i, f, o);
  return l && r ? r(c) : c;
}
function Si(e, t, n, o) {
  const r = or(e);
  let a = n;
  return r !== e && (Tt(e) ? n.length > 3 && (a = function(i, l, s) {
    return n.call(this, i, l, s, e);
  }) : a = function(i, l, s) {
    return n.call(this, i, Ze(l), s, e);
  }), r[t](a, ...o);
}
function zr(e, t, n) {
  const o = we(e);
  tt(o, "iterate", lo);
  const r = o[t](...n);
  return (r === -1 || r === !1) && wa(n[0]) ? (n[0] = we(n[0]), o[t](...n)) : r;
}
function Zn(e, t, n = []) {
  dn(), fa();
  const o = we(e)[t].apply(e, n);
  return pa(), fn(), o;
}
const Iu = /* @__PURE__ */ sa("__proto__,__v_isRef,__isVue"), Nl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(un)
);
function Pu(e) {
  un(e) || (e = String(e));
  const t = we(this);
  return tt(t, "has", e), t.hasOwnProperty(e);
}
class Fl {
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
      return o === (r ? a ? Ku : Kl : a ? Ul : jl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = ie(t);
    if (!r) {
      let s;
      if (i && (s = $u[n]))
        return s;
      if (n === "hasOwnProperty")
        return Pu;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Qe(t) ? t : o
    );
    return (un(n) ? Nl.has(n) : Iu(n)) || (r || tt(t, "get", n), a) ? l : Qe(l) ? i && da(n) ? l : l.value : Ae(l) ? r ? ql(l) : ya(l) : l;
  }
}
class Dl extends Fl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let a = t[n];
    if (!this._isShallow) {
      const s = _n(a);
      if (!Tt(o) && !_n(o) && (a = we(a), o = we(o)), !ie(t) && Qe(a) && !Qe(o))
        return s ? !1 : (a.value = o, !0);
    }
    const i = ie(t) && da(n) ? Number(n) < t.length : ke(t, n), l = Reflect.set(
      t,
      n,
      o,
      Qe(t) ? t : r
    );
    return t === we(r) && (i ? sn(o, a) && qt(t, "set", n, o) : qt(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = ke(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && o && qt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!un(n) || !Nl.has(n)) && tt(t, "has", n), o;
  }
  ownKeys(t) {
    return tt(
      t,
      "iterate",
      ie(t) ? "length" : wn
    ), Reflect.ownKeys(t);
  }
}
class zu extends Fl {
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
const Mu = /* @__PURE__ */ new Dl(), Lu = /* @__PURE__ */ new zu(), Ou = /* @__PURE__ */ new Dl(!0);
const ma = (e) => e, rr = (e) => Reflect.getPrototypeOf(e);
function To(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = we(e), a = we(t);
  n || (sn(t, a) && tt(r, "get", t), tt(r, "get", a));
  const { has: i } = rr(r), l = o ? ma : n ? xa : Ze;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, a))
    return l(e.get(a));
  e !== r && e.get(t);
}
function Eo(e, t = !1) {
  const n = this.__v_raw, o = we(n), r = we(e);
  return t || (sn(e, r) && tt(o, "has", e), tt(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Ao(e, t = !1) {
  return e = e.__v_raw, !t && tt(we(e), "iterate", wn), Reflect.get(e, "size", e);
}
function Ti(e, t = !1) {
  !t && !Tt(e) && !_n(e) && (e = we(e));
  const n = we(this);
  return rr(n).has.call(n, e) || (n.add(e), qt(n, "add", e, e)), this;
}
function Ei(e, t, n = !1) {
  !n && !Tt(t) && !_n(t) && (t = we(t));
  const o = we(this), { has: r, get: a } = rr(o);
  let i = r.call(o, e);
  i || (e = we(e), i = r.call(o, e));
  const l = a.call(o, e);
  return o.set(e, t), i ? sn(t, l) && qt(o, "set", e, t) : qt(o, "add", e, t), this;
}
function Ai(e) {
  const t = we(this), { has: n, get: o } = rr(t);
  let r = n.call(t, e);
  r || (e = we(e), r = n.call(t, e)), o && o.call(t, e);
  const a = t.delete(e);
  return r && qt(t, "delete", e, void 0), a;
}
function $i() {
  const e = we(this), t = e.size !== 0, n = e.clear();
  return t && qt(e, "clear", void 0, void 0), n;
}
function $o(e, t) {
  return function(o, r) {
    const a = this, i = a.__v_raw, l = we(i), s = t ? ma : e ? xa : Ze;
    return !e && tt(l, "iterate", wn), i.forEach((f, c) => o.call(r, s(f), s(c), a));
  };
}
function Ro(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, a = we(r), i = Ln(a), l = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, f = r[e](...o), c = n ? ma : t ? xa : Ze;
    return !t && tt(
      a,
      "iterate",
      s ? Kr : wn
    ), {
      // iterator protocol
      next() {
        const { value: d, done: h } = f.next();
        return h ? { value: d, done: h } : {
          value: l ? [c(d[0]), c(d[1])] : c(d),
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
function Zt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hu() {
  const e = {
    get(a) {
      return To(this, a);
    },
    get size() {
      return Ao(this);
    },
    has: Eo,
    add: Ti,
    set: Ei,
    delete: Ai,
    clear: $i,
    forEach: $o(!1, !1)
  }, t = {
    get(a) {
      return To(this, a, !1, !0);
    },
    get size() {
      return Ao(this);
    },
    has: Eo,
    add(a) {
      return Ti.call(this, a, !0);
    },
    set(a, i) {
      return Ei.call(this, a, i, !0);
    },
    delete: Ai,
    clear: $i,
    forEach: $o(!1, !0)
  }, n = {
    get(a) {
      return To(this, a, !0);
    },
    get size() {
      return Ao(this, !0);
    },
    has(a) {
      return Eo.call(this, a, !0);
    },
    add: Zt("add"),
    set: Zt("set"),
    delete: Zt("delete"),
    clear: Zt("clear"),
    forEach: $o(!0, !1)
  }, o = {
    get(a) {
      return To(this, a, !0, !0);
    },
    get size() {
      return Ao(this, !0);
    },
    has(a) {
      return Eo.call(this, a, !0);
    },
    add: Zt("add"),
    set: Zt("set"),
    delete: Zt("delete"),
    clear: Zt("clear"),
    forEach: $o(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    e[a] = Ro(a, !1, !1), n[a] = Ro(a, !0, !1), t[a] = Ro(a, !1, !0), o[a] = Ro(
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
  Bu,
  Vu,
  Nu,
  Fu
] = /* @__PURE__ */ Hu();
function va(e, t) {
  const n = t ? e ? Fu : Nu : e ? Vu : Bu;
  return (o, r, a) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    ke(n, r) && r in o ? n : o,
    r,
    a
  );
}
const Du = {
  get: /* @__PURE__ */ va(!1, !1)
}, ju = {
  get: /* @__PURE__ */ va(!1, !0)
}, Uu = {
  get: /* @__PURE__ */ va(!0, !1)
};
const jl = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), Kl = /* @__PURE__ */ new WeakMap(), Ku = /* @__PURE__ */ new WeakMap();
function qu(e) {
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
function Wu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : qu(mu(e));
}
function ya(e) {
  return _n(e) ? e : ba(
    e,
    !1,
    Mu,
    Du,
    jl
  );
}
function Xu(e) {
  return ba(
    e,
    !1,
    Ou,
    ju,
    Ul
  );
}
function ql(e) {
  return ba(
    e,
    !0,
    Lu,
    Uu,
    Kl
  );
}
function ba(e, t, n, o, r) {
  if (!Ae(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = r.get(e);
  if (a)
    return a;
  const i = Wu(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, l), l;
}
function On(e) {
  return _n(e) ? On(e.__v_raw) : !!(e && e.__v_isReactive);
}
function _n(e) {
  return !!(e && e.__v_isReadonly);
}
function Tt(e) {
  return !!(e && e.__v_isShallow);
}
function wa(e) {
  return e ? !!e.__v_raw : !1;
}
function we(e) {
  const t = e && e.__v_raw;
  return t ? we(t) : e;
}
function Yu(e) {
  return Object.isExtensible(e) && Al(e, "__v_skip", !0), e;
}
const Ze = (e) => Ae(e) ? ya(e) : e, xa = (e) => Ae(e) ? ql(e) : e;
function Qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function X(e) {
  return Gu(e, !1);
}
function Gu(e, t) {
  return Qe(e) ? e : new Zu(e, t);
}
class Zu {
  constructor(t, n) {
    this.dep = new ga(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : we(t), this._value = n ? t : Ze(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || Tt(t) || _n(t);
    t = o ? t : we(t), sn(t, n) && (this._rawValue = t, this._value = o ? t : Ze(t), this.dep.trigger());
  }
}
function Mt(e) {
  return Qe(e) ? e.value : e;
}
const Ju = {
  get: (e, t, n) => t === "__v_raw" ? e : Mt(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Qe(r) && !Qe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Wl(e) {
  return On(e) ? e : new Proxy(e, Ju);
}
class Qu {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ga(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = io - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    Se !== this && (this.flags |= 16, this.dep.notify());
  }
  get value() {
    const t = this.dep.track();
    return Hl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ed(e, t, n = !1) {
  let o, r;
  return fe(e) ? o = e : (o = e.get, r = e.set), new Qu(o, r, n);
}
const Io = {}, jo = /* @__PURE__ */ new WeakMap();
let vn;
function td(e, t = !1, n = vn) {
  if (n) {
    let o = jo.get(n);
    o || jo.set(n, o = []), o.push(e);
  }
}
function nd(e, t, n = Te) {
  const { immediate: o, deep: r, once: a, scheduler: i, augmentJob: l, call: s } = n, f = (w) => r ? w : Tt(w) || r === !1 || r === 0 ? rn(w, 1) : rn(w);
  let c, d, h, y, T = !1, R = !1;
  if (Qe(e) ? (d = () => e.value, T = Tt(e)) : On(e) ? (d = () => f(e), T = !0) : ie(e) ? (R = !0, T = e.some((w) => On(w) || Tt(w)), d = () => e.map((w) => {
    if (Qe(w))
      return w.value;
    if (On(w))
      return f(w);
    if (fe(w))
      return s ? s(w, 2) : w();
  })) : fe(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (h) {
      dn();
      try {
        h();
      } finally {
        fn();
      }
    }
    const w = vn;
    vn = c;
    try {
      return s ? s(e, 3, [y]) : e(y);
    } finally {
      vn = w;
    }
  } : d = Lt, t && r) {
    const w = d, P = r === !0 ? 1 / 0 : r;
    d = () => rn(w(), P);
  }
  const O = Eu(), x = () => {
    c.stop(), O && ua(O.effects, c);
  };
  if (a)
    if (t) {
      const w = t;
      t = (...P) => {
        w(...P), x();
      };
    } else {
      const w = d;
      d = () => {
        w(), x();
      };
    }
  let K = R ? new Array(e.length).fill(Io) : Io;
  const W = (w) => {
    if (!(!(c.flags & 1) || !c.dirty && !w))
      if (t) {
        const P = c.run();
        if (r || T || (R ? P.some((J, z) => sn(J, K[z])) : sn(P, K))) {
          h && h();
          const J = vn;
          vn = c;
          try {
            const z = [
              P,
              // pass undefined as the old value when it's changed for the first time
              K === Io ? void 0 : R && K[0] === Io ? [] : K,
              y
            ];
            s ? s(t, 3, z) : (
              // @ts-expect-error
              t(...z)
            ), K = P;
          } finally {
            vn = J;
          }
        }
      } else
        c.run();
  };
  return l && l(W), c = new zl(d), c.scheduler = i ? () => i(W, !1) : W, y = (w) => td(w, !1, c), h = c.onStop = () => {
    const w = jo.get(c);
    if (w) {
      if (s)
        s(w, 4);
      else
        for (const P of w) P();
      jo.delete(c);
    }
  }, t ? o ? W(!0) : K = c.run() : i ? i(W.bind(null, !0), !0) : c.run(), x.pause = c.pause.bind(c), x.resume = c.resume.bind(c), x.stop = x, x;
}
function rn(e, t = 1 / 0, n) {
  if (t <= 0 || !Ae(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Qe(e))
    rn(e.value, t, n);
  else if (ie(e))
    for (let o = 0; o < e.length; o++)
      rn(e[o], t, n);
  else if (Sl(e) || Ln(e))
    e.forEach((o) => {
      rn(o, t, n);
    });
  else if (er(e)) {
    for (const o in e)
      rn(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && rn(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function po(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    ar(r, t, n);
  }
}
function Et(e, t, n, o) {
  if (fe(e)) {
    const r = po(e, t, n, o);
    return r && Tl(r) && r.catch((a) => {
      ar(a, t, n);
    }), r;
  }
  if (ie(e)) {
    const r = [];
    for (let a = 0; a < e.length; a++)
      r.push(Et(e[a], t, n, o));
    return r;
  }
}
function ar(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Te;
  if (t) {
    let l = t.parent;
    const s = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, s, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (a) {
      dn(), po(a, null, 10, [
        e,
        s,
        f
      ]), fn();
      return;
    }
  }
  od(e, n, r, o, i);
}
function od(e, t, n, o = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
let so = !1, qr = !1;
const it = [];
let Pt = 0;
const Hn = [];
let tn = null, In = 0;
const Xl = /* @__PURE__ */ Promise.resolve();
let _a = null;
function ft(e) {
  const t = _a || Xl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rd(e) {
  let t = so ? Pt + 1 : 0, n = it.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = it[o], a = co(r);
    a < e || a === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function ka(e) {
  if (!(e.flags & 1)) {
    const t = co(e), n = it[it.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= co(n) ? it.push(e) : it.splice(rd(t), 0, e), e.flags |= 1, Yl();
  }
}
function Yl() {
  !so && !qr && (qr = !0, _a = Xl.then(Zl));
}
function ad(e) {
  ie(e) ? Hn.push(...e) : tn && e.id === -1 ? tn.splice(In + 1, 0, e) : e.flags & 1 || (Hn.push(e), e.flags |= 1), Yl();
}
function Ri(e, t, n = so ? Pt + 1 : 0) {
  for (; n < it.length; n++) {
    const o = it[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid)
        continue;
      it.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags &= -2;
    }
  }
}
function Gl(e) {
  if (Hn.length) {
    const t = [...new Set(Hn)].sort(
      (n, o) => co(n) - co(o)
    );
    if (Hn.length = 0, tn) {
      tn.push(...t);
      return;
    }
    for (tn = t, In = 0; In < tn.length; In++) {
      const n = tn[In];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    tn = null, In = 0;
  }
}
const co = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Zl(e) {
  qr = !1, so = !0;
  try {
    for (Pt = 0; Pt < it.length; Pt++) {
      const t = it[Pt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), po(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags &= -2);
    }
  } finally {
    for (; Pt < it.length; Pt++) {
      const t = it[Pt];
      t && (t.flags &= -2);
    }
    Pt = 0, it.length = 0, Gl(), so = !1, _a = null, (it.length || Hn.length) && Zl();
  }
}
let Je = null, Jl = null;
function Uo(e) {
  const t = Je;
  return Je = e, Jl = e && e.type.__scopeId || null, t;
}
function Wt(e, t = Je, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Ni(-1);
    const a = Uo(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Uo(a), o._d && Ni(1);
    }
    return i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function hn(e, t, n, o) {
  const r = e.dirs, a = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    a && (l.oldValue = a[i].value);
    let s = l.dir[o];
    s && (dn(), Et(s, n, 8, [
      e.el,
      l,
      e,
      t
    ]), fn());
  }
}
const id = Symbol("_vte"), Ql = (e) => e.__isTeleport, nn = Symbol("_leaveCb"), Po = Symbol("_enterCb");
function es() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ho(() => {
    e.isMounted = !0;
  }), Sa(() => {
    e.isUnmounting = !0;
  }), e;
}
const vt = [Function, Array], ts = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: vt,
  onEnter: vt,
  onAfterEnter: vt,
  onEnterCancelled: vt,
  // leave
  onBeforeLeave: vt,
  onLeave: vt,
  onAfterLeave: vt,
  onLeaveCancelled: vt,
  // appear
  onBeforeAppear: vt,
  onAppear: vt,
  onAfterAppear: vt,
  onAppearCancelled: vt
}, ns = (e) => {
  const t = e.subTree;
  return t.component ? ns(t.component) : t;
}, ld = {
  name: "BaseTransition",
  props: ts,
  setup(e, { slots: t }) {
    const n = Rs(), o = es();
    return () => {
      const r = t.default && Ca(t.default(), !0);
      if (!r || !r.length)
        return;
      const a = os(r), i = we(e), { mode: l } = i;
      if (o.isLeaving)
        return Mr(a);
      const s = Ii(a);
      if (!s)
        return Mr(a);
      let f = uo(
        s,
        i,
        o,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => f = h
      );
      s.type !== lt && kn(s, f);
      const c = n.subTree, d = c && Ii(c);
      if (d && d.type !== lt && !yn(s, d) && ns(n).type !== lt) {
        const h = uo(
          d,
          i,
          o,
          n
        );
        if (kn(d, h), l === "out-in" && s.type !== lt)
          return o.isLeaving = !0, h.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave;
          }, Mr(a);
        l === "in-out" && s.type !== lt && (h.delayLeave = (y, T, R) => {
          const O = rs(
            o,
            d
          );
          O[String(d.key)] = d, y[nn] = () => {
            T(), y[nn] = void 0, delete f.delayedLeave;
          }, f.delayedLeave = R;
        });
      }
      return a;
    };
  }
};
function os(e) {
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
const sd = ld;
function rs(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function uo(e, t, n, o, r) {
  const {
    appear: a,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: s,
    onEnter: f,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: h,
    onLeave: y,
    onAfterLeave: T,
    onLeaveCancelled: R,
    onBeforeAppear: O,
    onAppear: x,
    onAfterAppear: K,
    onAppearCancelled: W
  } = t, w = String(e.key), P = rs(n, e), J = (j, Y) => {
    j && Et(
      j,
      o,
      9,
      Y
    );
  }, z = (j, Y) => {
    const oe = Y[1];
    J(j, Y), ie(j) ? j.every((F) => F.length <= 1) && oe() : j.length <= 1 && oe();
  }, U = {
    mode: i,
    persisted: l,
    beforeEnter(j) {
      let Y = s;
      if (!n.isMounted)
        if (a)
          Y = O || s;
        else
          return;
      j[nn] && j[nn](
        !0
        /* cancelled */
      );
      const oe = P[w];
      oe && yn(e, oe) && oe.el[nn] && oe.el[nn](), J(Y, [j]);
    },
    enter(j) {
      let Y = f, oe = c, F = d;
      if (!n.isMounted)
        if (a)
          Y = x || f, oe = K || c, F = W || d;
        else
          return;
      let ee = !1;
      const V = j[Po] = (G) => {
        ee || (ee = !0, G ? J(F, [j]) : J(oe, [j]), U.delayedLeave && U.delayedLeave(), j[Po] = void 0);
      };
      Y ? z(Y, [j, V]) : V();
    },
    leave(j, Y) {
      const oe = String(e.key);
      if (j[Po] && j[Po](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Y();
      J(h, [j]);
      let F = !1;
      const ee = j[nn] = (V) => {
        F || (F = !0, Y(), V ? J(R, [j]) : J(T, [j]), j[nn] = void 0, P[oe] === e && delete P[oe]);
      };
      P[oe] = e, y ? z(y, [j, ee]) : ee();
    },
    clone(j) {
      const Y = uo(
        j,
        t,
        n,
        o,
        r
      );
      return r && r(Y), Y;
    }
  };
  return U;
}
function Mr(e) {
  if (ir(e))
    return e = cn(e), e.children = null, e;
}
function Ii(e) {
  if (!ir(e))
    return Ql(e.type) && e.children ? os(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && fe(n.default))
      return n.default();
  }
}
function kn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ca(e, t = !1, n) {
  let o = [], r = 0;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
    i.type === ye ? (i.patchFlag & 128 && r++, o = o.concat(
      Ca(i.children, t, l)
    )) : (t || i.type !== lt) && o.push(l != null ? cn(i, { key: l }) : i);
  }
  if (r > 1)
    for (let a = 0; a < o.length; a++)
      o[a].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function as(e, t) {
  return fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function is(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Wr(e, t, n, o, r = !1) {
  if (ie(e)) {
    e.forEach(
      (T, R) => Wr(
        T,
        t && (ie(t) ? t[R] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Bn(o) && !r)
    return;
  const a = o.shapeFlag & 4 ? Ia(o.component) : o.el, i = r ? null : a, { i: l, r: s } = e, f = t && t.r, c = l.refs === Te ? l.refs = {} : l.refs, d = l.setupState, h = we(d), y = d === Te ? () => !1 : (T) => ke(h, T);
  if (f != null && f !== s && (ze(f) ? (c[f] = null, y(f) && (d[f] = null)) : Qe(f) && (f.value = null)), fe(s))
    po(s, l, 12, [i, c]);
  else {
    const T = ze(s), R = Qe(s);
    if (T || R) {
      const O = () => {
        if (e.f) {
          const x = T ? y(s) ? d[s] : c[s] : s.value;
          r ? ie(x) && ua(x, a) : ie(x) ? x.includes(a) || x.push(a) : T ? (c[s] = [a], y(s) && (d[s] = c[s])) : (s.value = [a], e.k && (c[e.k] = s.value));
        } else T ? (c[s] = i, y(s) && (d[s] = i)) : R && (s.value = i, e.k && (c[e.k] = i));
      };
      i ? (O.id = -1, dt(O, n)) : O();
    }
  }
}
const Bn = (e) => !!e.type.__asyncLoader, ir = (e) => e.type.__isKeepAlive;
function cd(e, t) {
  ls(e, "a", t);
}
function ud(e, t) {
  ls(e, "da", t);
}
function ls(e, t, n = Ye) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (lr(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ir(r.parent.vnode) && dd(o, t, n, r), r = r.parent;
  }
}
function dd(e, t, n, o) {
  const r = lr(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Ta(() => {
    ua(o[t], r);
  }, n);
}
function lr(e, t, n = Ye, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
      dn();
      const l = go(n), s = Et(t, n, e, i);
      return l(), fn(), s;
    });
    return o ? r.unshift(a) : r.push(a), a;
  }
}
const Xt = (e) => (t, n = Ye) => {
  (!ur || e === "sp") && lr(e, (...o) => t(...o), n);
}, fd = Xt("bm"), ho = Xt("m"), pd = Xt(
  "bu"
), ss = Xt("u"), Sa = Xt(
  "bum"
), Ta = Xt("um"), hd = Xt(
  "sp"
), gd = Xt("rtg"), md = Xt("rtc");
function vd(e, t = Ye) {
  lr("ec", e, t);
}
const yd = "components", cs = Symbol.for("v-ndc");
function bd(e) {
  return ze(e) ? wd(yd, e, !1) || e : e || cs;
}
function wd(e, t, n = !0, o = !1) {
  const r = Je || Ye;
  if (r) {
    const a = r.type;
    {
      const l = cf(
        a,
        !1
      );
      if (l && (l === t || l === ct(t) || l === nr(ct(t))))
        return a;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Pi(r[e] || a[e], t) || // global registration
      Pi(r.appContext[e], t)
    );
    return !i && o ? a : i;
  }
}
function Pi(e, t) {
  return e && (e[t] || e[ct(t)] || e[nr(ct(t))]);
}
function bt(e, t, n, o) {
  let r;
  const a = n, i = ie(e);
  if (i || ze(e)) {
    const l = i && On(e);
    l && (e = or(e)), r = new Array(e.length);
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
  } else if (Ae(e))
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
function xd(e, t, n = {}, o, r) {
  if (Je.ce || Je.parent && Bn(Je.parent) && Je.parent.ce)
    return k(), et(
      ye,
      null,
      [te("slot", n, o)],
      64
    );
  let a = e[t];
  a && a._c && (a._d = !1), k();
  const i = a && us(a(n)), l = et(
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
function us(e) {
  return e.some((t) => qo(t) ? !(t.type === lt || t.type === ye && !us(t.children)) : !0) ? e : null;
}
const Xr = (e) => e ? Is(e) ? Ia(e) : Xr(e.parent) : null, oo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Xr(e.parent),
    $root: (e) => Xr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ea(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ka(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ft.bind(e.proxy)),
    $watch: (e) => Ud.bind(e)
  })
), Lr = (e, t) => e !== Te && !e.__isScriptSetup && ke(e, t), _d = {
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
        if (Lr(o, t))
          return i[t] = 1, o[t];
        if (r !== Te && ke(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && ke(f, t)
        )
          return i[t] = 3, a[t];
        if (n !== Te && ke(n, t))
          return i[t] = 4, n[t];
        Yr && (i[t] = 0);
      }
    }
    const c = oo[t];
    let d, h;
    if (c)
      return t === "$attrs" && tt(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Te && ke(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = s.config.globalProperties, ke(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: a } = e;
    return Lr(r, t) ? (r[t] = n, !0) : o !== Te && ke(o, t) ? (o[t] = n, !0) : ke(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: a }
  }, i) {
    let l;
    return !!n[i] || e !== Te && ke(e, i) || Lr(t, i) || (l = a[0]) && ke(l, i) || ke(o, i) || ke(oo, i) || ke(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function zi(e) {
  return ie(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Yr = !0;
function kd(e) {
  const t = Ea(e), n = e.proxy, o = e.ctx;
  Yr = !1, t.beforeCreate && Mi(t.beforeCreate, e, "bc");
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
    beforeMount: d,
    mounted: h,
    beforeUpdate: y,
    updated: T,
    activated: R,
    deactivated: O,
    beforeDestroy: x,
    beforeUnmount: K,
    destroyed: W,
    unmounted: w,
    render: P,
    renderTracked: J,
    renderTriggered: z,
    errorCaptured: U,
    serverPrefetch: j,
    // public API
    expose: Y,
    inheritAttrs: oe,
    // assets
    components: F,
    directives: ee,
    filters: V
  } = t;
  if (f && Cd(f, o, null), i)
    for (const le in i) {
      const pe = i[le];
      fe(pe) && (o[le] = pe.bind(n));
    }
  if (r) {
    const le = r.call(n, n);
    Ae(le) && (e.data = ya(le));
  }
  if (Yr = !0, a)
    for (const le in a) {
      const pe = a[le], xe = fe(pe) ? pe.bind(n, n) : fe(pe.get) ? pe.get.bind(n, n) : Lt, qe = !fe(pe) && fe(pe.set) ? pe.set.bind(n) : Lt, Ve = Q({
        get: xe,
        set: qe
      });
      Object.defineProperty(o, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Ve.value,
        set: ($e) => Ve.value = $e
      });
    }
  if (l)
    for (const le in l)
      ds(l[le], o, n, le);
  if (s) {
    const le = fe(s) ? s.call(n) : s;
    Reflect.ownKeys(le).forEach((pe) => {
      Rd(pe, le[pe]);
    });
  }
  c && Mi(c, e, "c");
  function q(le, pe) {
    ie(pe) ? pe.forEach((xe) => le(xe.bind(n))) : pe && le(pe.bind(n));
  }
  if (q(fd, d), q(ho, h), q(pd, y), q(ss, T), q(cd, R), q(ud, O), q(vd, U), q(md, J), q(gd, z), q(Sa, K), q(Ta, w), q(hd, j), ie(Y))
    if (Y.length) {
      const le = e.exposed || (e.exposed = {});
      Y.forEach((pe) => {
        Object.defineProperty(le, pe, {
          get: () => n[pe],
          set: (xe) => n[pe] = xe
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === Lt && (e.render = P), oe != null && (e.inheritAttrs = oe), F && (e.components = F), ee && (e.directives = ee), j && is(e);
}
function Cd(e, t, n = Lt) {
  ie(e) && (e = Gr(e));
  for (const o in e) {
    const r = e[o];
    let a;
    Ae(r) ? "default" in r ? a = Oo(
      r.from || o,
      r.default,
      !0
    ) : a = Oo(r.from || o) : a = Oo(r), Qe(a) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (i) => a.value = i
    }) : t[o] = a;
  }
}
function Mi(e, t, n) {
  Et(
    ie(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ds(e, t, n, o) {
  let r = o.includes(".") ? Cs(n, o) : () => n[o];
  if (ze(e)) {
    const a = t[e];
    fe(a) && an(r, a);
  } else if (fe(e))
    an(r, e.bind(n));
  else if (Ae(e))
    if (ie(e))
      e.forEach((a) => ds(a, t, n, o));
    else {
      const a = fe(e.handler) ? e.handler.bind(n) : t[e.handler];
      fe(a) && an(r, a, e);
    }
}
function Ea(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: a,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = a.get(t);
  let s;
  return l ? s = l : !r.length && !n && !o ? s = t : (s = {}, r.length && r.forEach(
    (f) => Ko(s, f, i, !0)
  ), Ko(s, t, i)), Ae(t) && a.set(t, s), s;
}
function Ko(e, t, n, o = !1) {
  const { mixins: r, extends: a } = t;
  a && Ko(e, a, n, !0), r && r.forEach(
    (i) => Ko(e, i, n, !0)
  );
  for (const i in t)
    if (!(o && i === "expose")) {
      const l = Sd[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Sd = {
  data: Li,
  props: Oi,
  emits: Oi,
  // objects
  methods: eo,
  computed: eo,
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
  components: eo,
  directives: eo,
  // watch
  watch: Ed,
  // provide / inject
  provide: Li,
  inject: Td
};
function Li(e, t) {
  return t ? e ? function() {
    return Ie(
      fe(e) ? e.call(this, this) : e,
      fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Td(e, t) {
  return eo(Gr(e), Gr(t));
}
function Gr(e) {
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
function eo(e, t) {
  return e ? Ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Oi(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ie(
    /* @__PURE__ */ Object.create(null),
    zi(e),
    zi(t ?? {})
  ) : t;
}
function Ed(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ie(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = at(e[o], t[o]);
  return n;
}
function fs() {
  return {
    app: null,
    config: {
      isNativeTag: hu,
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
let Ad = 0;
function $d(e, t) {
  return function(o, r = null) {
    fe(o) || (o = Ie({}, o)), r != null && !Ae(r) && (r = null);
    const a = fs(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let s = !1;
    const f = a.app = {
      _uid: Ad++,
      _component: o,
      _props: r,
      _container: null,
      _context: a,
      _instance: null,
      version: df,
      get config() {
        return a.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return i.has(c) || (c && fe(c.install) ? (i.add(c), c.install(f, ...d)) : fe(c) && (i.add(c), c(f, ...d))), f;
      },
      mixin(c) {
        return a.mixins.includes(c) || a.mixins.push(c), f;
      },
      component(c, d) {
        return d ? (a.components[c] = d, f) : a.components[c];
      },
      directive(c, d) {
        return d ? (a.directives[c] = d, f) : a.directives[c];
      },
      mount(c, d, h) {
        if (!s) {
          const y = f._ceVNode || te(o, r);
          return y.appContext = a, h === !0 ? h = "svg" : h === !1 && (h = void 0), d && t ? t(y, c) : e(y, c, h), s = !0, f._container = c, c.__vue_app__ = f, Ia(y.component);
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
      provide(c, d) {
        return a.provides[c] = d, f;
      },
      runWithContext(c) {
        const d = Vn;
        Vn = f;
        try {
          return c();
        } finally {
          Vn = d;
        }
      }
    };
    return f;
  };
}
let Vn = null;
function Rd(e, t) {
  if (Ye) {
    let n = Ye.provides;
    const o = Ye.parent && Ye.parent.provides;
    o === n && (n = Ye.provides = Object.create(o)), n[e] = t;
  }
}
function Oo(e, t, n = !1) {
  const o = Ye || Je;
  if (o || Vn) {
    const r = Vn ? Vn._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && fe(t) ? t.call(o && o.proxy) : t;
  }
}
const ps = {}, hs = () => Object.create(ps), gs = (e) => Object.getPrototypeOf(e) === ps;
function Id(e, t, n, o = !1) {
  const r = {}, a = hs();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ms(e, t, r, a);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = o ? r : Xu(r) : e.type.props ? e.props = r : e.props = a, e.attrs = a;
}
function Pd(e, t, n, o) {
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
      for (let d = 0; d < c.length; d++) {
        let h = c[d];
        if (sr(e.emitsOptions, h))
          continue;
        const y = t[h];
        if (s)
          if (ke(a, h))
            y !== a[h] && (a[h] = y, f = !0);
          else {
            const T = ct(h);
            r[T] = Zr(
              s,
              l,
              T,
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
    ms(e, t, r, a) && (f = !0);
    let c;
    for (const d in l)
      (!t || // for camelCase
      !ke(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = yt(d)) === d || !ke(t, c))) && (s ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (r[d] = Zr(
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
  f && qt(e.attrs, "set", "");
}
function ms(e, t, n, o) {
  const [r, a] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let s in t) {
      if (to(s))
        continue;
      const f = t[s];
      let c;
      r && ke(r, c = ct(s)) ? !a || !a.includes(c) ? n[c] = f : (l || (l = {}))[c] = f : sr(e.emitsOptions, s) || (!(s in o) || f !== o[s]) && (o[s] = f, i = !0);
    }
  if (a) {
    const s = we(n), f = l || Te;
    for (let c = 0; c < a.length; c++) {
      const d = a[c];
      n[d] = Zr(
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
function Zr(e, t, n, o, r, a) {
  const i = e[n];
  if (i != null) {
    const l = ke(i, "default");
    if (l && o === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && fe(s)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const c = go(r);
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
    ] && (o === "" || o === yt(n)) && (o = !0));
  }
  return o;
}
const zd = /* @__PURE__ */ new WeakMap();
function vs(e, t, n = !1) {
  const o = n ? zd : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const a = e.props, i = {}, l = [];
  let s = !1;
  if (!fe(e)) {
    const c = (d) => {
      s = !0;
      const [h, y] = vs(d, t, !0);
      Ie(i, h), y && l.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!a && !s)
    return Ae(e) && o.set(e, Mn), Mn;
  if (ie(a))
    for (let c = 0; c < a.length; c++) {
      const d = ct(a[c]);
      Hi(d) && (i[d] = Te);
    }
  else if (a)
    for (const c in a) {
      const d = ct(c);
      if (Hi(d)) {
        const h = a[c], y = i[d] = ie(h) || fe(h) ? { type: h } : Ie({}, h), T = y.type;
        let R = !1, O = !0;
        if (ie(T))
          for (let x = 0; x < T.length; ++x) {
            const K = T[x], W = fe(K) && K.name;
            if (W === "Boolean") {
              R = !0;
              break;
            } else W === "String" && (O = !1);
          }
        else
          R = fe(T) && T.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = R, y[
          1
          /* shouldCastTrue */
        ] = O, (R || ke(y, "default")) && l.push(d);
      }
    }
  const f = [i, l];
  return Ae(e) && o.set(e, f), f;
}
function Hi(e) {
  return e[0] !== "$" && !to(e);
}
const ys = (e) => e[0] === "_" || e === "$stable", Aa = (e) => ie(e) ? e.map(zt) : [zt(e)], Md = (e, t, n) => {
  if (t._n)
    return t;
  const o = Wt((...r) => Aa(t(...r)), n);
  return o._c = !1, o;
}, bs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (ys(r)) continue;
    const a = e[r];
    if (fe(a))
      t[r] = Md(r, a, o);
    else if (a != null) {
      const i = Aa(a);
      t[r] = () => i;
    }
  }
}, ws = (e, t) => {
  const n = Aa(t);
  e.slots.default = () => n;
}, xs = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, Ld = (e, t, n) => {
  const o = e.slots = hs();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (xs(o, t, n), n && Al(o, "_", r, !0)) : bs(t, o);
  } else t && ws(e, t);
}, Od = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let a = !0, i = Te;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? a = !1 : xs(r, t, n) : (a = !t.$stable, bs(t, r)), i = t;
  } else t && (ws(e, t), i = { default: 1 });
  if (a)
    for (const l in r)
      !ys(l) && i[l] == null && delete r[l];
}, dt = Zd;
function Hd(e) {
  return Bd(e);
}
function Bd(e, t) {
  const n = $l();
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
    parentNode: d,
    nextSibling: h,
    setScopeId: y = Lt,
    insertStaticContent: T
  } = e, R = (p, m, _, M = null, A = null, $ = null, N = void 0, B = null, v = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !yn(p, m) && (M = At(p), $e(p, A, $, !0), p = null), m.patchFlag === -2 && (v = !1, m.dynamicChildren = null);
    const { type: I, ref: re, shapeFlag: D } = m;
    switch (I) {
      case cr:
        O(p, m, _, M);
        break;
      case lt:
        x(p, m, _, M);
        break;
      case Ho:
        p == null && K(m, _, M, N);
        break;
      case ye:
        F(
          p,
          m,
          _,
          M,
          A,
          $,
          N,
          B,
          v
        );
        break;
      default:
        D & 1 ? P(
          p,
          m,
          _,
          M,
          A,
          $,
          N,
          B,
          v
        ) : D & 6 ? ee(
          p,
          m,
          _,
          M,
          A,
          $,
          N,
          B,
          v
        ) : (D & 64 || D & 128) && I.process(
          p,
          m,
          _,
          M,
          A,
          $,
          N,
          B,
          v,
          mt
        );
    }
    re != null && A && Wr(re, p && p.ref, $, m || p, !m);
  }, O = (p, m, _, M) => {
    if (p == null)
      o(
        m.el = l(m.children),
        _,
        M
      );
    else {
      const A = m.el = p.el;
      m.children !== p.children && f(A, m.children);
    }
  }, x = (p, m, _, M) => {
    p == null ? o(
      m.el = s(m.children || ""),
      _,
      M
    ) : m.el = p.el;
  }, K = (p, m, _, M) => {
    [p.el, p.anchor] = T(
      p.children,
      m,
      _,
      M,
      p.el,
      p.anchor
    );
  }, W = ({ el: p, anchor: m }, _, M) => {
    let A;
    for (; p && p !== m; )
      A = h(p), o(p, _, M), p = A;
    o(m, _, M);
  }, w = ({ el: p, anchor: m }) => {
    let _;
    for (; p && p !== m; )
      _ = h(p), r(p), p = _;
    r(m);
  }, P = (p, m, _, M, A, $, N, B, v) => {
    m.type === "svg" ? N = "svg" : m.type === "math" && (N = "mathml"), p == null ? J(
      m,
      _,
      M,
      A,
      $,
      N,
      B,
      v
    ) : j(
      p,
      m,
      A,
      $,
      N,
      B,
      v
    );
  }, J = (p, m, _, M, A, $, N, B) => {
    let v, I;
    const { props: re, shapeFlag: D, transition: Z, dirs: ae } = p;
    if (v = p.el = i(
      p.type,
      $,
      re && re.is,
      re
    ), D & 8 ? c(v, p.children) : D & 16 && U(
      p.children,
      v,
      null,
      M,
      A,
      Or(p, $),
      N,
      B
    ), ae && hn(p, null, M, "created"), z(v, p, p.scopeId, N, M), re) {
      for (const Ce in re)
        Ce !== "value" && !to(Ce) && a(v, Ce, null, re[Ce], $, M);
      "value" in re && a(v, "value", null, re.value, $), (I = re.onVnodeBeforeMount) && It(I, M, p);
    }
    ae && hn(p, null, M, "beforeMount");
    const he = Vd(A, Z);
    he && Z.beforeEnter(v), o(v, m, _), ((I = re && re.onVnodeMounted) || he || ae) && dt(() => {
      I && It(I, M, p), he && Z.enter(v), ae && hn(p, null, M, "mounted");
    }, A);
  }, z = (p, m, _, M, A) => {
    if (_ && y(p, _), M)
      for (let $ = 0; $ < M.length; $++)
        y(p, M[$]);
    if (A) {
      let $ = A.subTree;
      if (m === $ || Ts($.type) && ($.ssContent === m || $.ssFallback === m)) {
        const N = A.vnode;
        z(
          p,
          N,
          N.scopeId,
          N.slotScopeIds,
          A.parent
        );
      }
    }
  }, U = (p, m, _, M, A, $, N, B, v = 0) => {
    for (let I = v; I < p.length; I++) {
      const re = p[I] = B ? on(p[I]) : zt(p[I]);
      R(
        null,
        re,
        m,
        _,
        M,
        A,
        $,
        N,
        B
      );
    }
  }, j = (p, m, _, M, A, $, N) => {
    const B = m.el = p.el;
    let { patchFlag: v, dynamicChildren: I, dirs: re } = m;
    v |= p.patchFlag & 16;
    const D = p.props || Te, Z = m.props || Te;
    let ae;
    if (_ && gn(_, !1), (ae = Z.onVnodeBeforeUpdate) && It(ae, _, m, p), re && hn(m, p, _, "beforeUpdate"), _ && gn(_, !0), (D.innerHTML && Z.innerHTML == null || D.textContent && Z.textContent == null) && c(B, ""), I ? Y(
      p.dynamicChildren,
      I,
      B,
      _,
      M,
      Or(m, A),
      $
    ) : N || pe(
      p,
      m,
      B,
      null,
      _,
      M,
      Or(m, A),
      $,
      !1
    ), v > 0) {
      if (v & 16)
        oe(B, D, Z, _, A);
      else if (v & 2 && D.class !== Z.class && a(B, "class", null, Z.class, A), v & 4 && a(B, "style", D.style, Z.style, A), v & 8) {
        const he = m.dynamicProps;
        for (let Ce = 0; Ce < he.length; Ce++) {
          const de = he[Ce], Ee = D[de], ve = Z[de];
          (ve !== Ee || de === "value") && a(B, de, Ee, ve, A, _);
        }
      }
      v & 1 && p.children !== m.children && c(B, m.children);
    } else !N && I == null && oe(B, D, Z, _, A);
    ((ae = Z.onVnodeUpdated) || re) && dt(() => {
      ae && It(ae, _, m, p), re && hn(m, p, _, "updated");
    }, M);
  }, Y = (p, m, _, M, A, $, N) => {
    for (let B = 0; B < m.length; B++) {
      const v = p[B], I = m[B], re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !yn(v, I) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? d(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      R(
        v,
        I,
        re,
        null,
        M,
        A,
        $,
        N,
        !0
      );
    }
  }, oe = (p, m, _, M, A) => {
    if (m !== _) {
      if (m !== Te)
        for (const $ in m)
          !to($) && !($ in _) && a(
            p,
            $,
            m[$],
            null,
            A,
            M
          );
      for (const $ in _) {
        if (to($)) continue;
        const N = _[$], B = m[$];
        N !== B && $ !== "value" && a(p, $, B, N, A, M);
      }
      "value" in _ && a(p, "value", m.value, _.value, A);
    }
  }, F = (p, m, _, M, A, $, N, B, v) => {
    const I = m.el = p ? p.el : l(""), re = m.anchor = p ? p.anchor : l("");
    let { patchFlag: D, dynamicChildren: Z, slotScopeIds: ae } = m;
    ae && (B = B ? B.concat(ae) : ae), p == null ? (o(I, _, M), o(re, _, M), U(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      re,
      A,
      $,
      N,
      B,
      v
    )) : D > 0 && D & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (Y(
      p.dynamicChildren,
      Z,
      _,
      A,
      $,
      N,
      B
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || A && m === A.subTree) && _s(
      p,
      m,
      !0
      /* shallow */
    )) : pe(
      p,
      m,
      _,
      re,
      A,
      $,
      N,
      B,
      v
    );
  }, ee = (p, m, _, M, A, $, N, B, v) => {
    m.slotScopeIds = B, p == null ? m.shapeFlag & 512 ? A.ctx.activate(
      m,
      _,
      M,
      N,
      v
    ) : V(
      m,
      _,
      M,
      A,
      $,
      N,
      v
    ) : G(p, m, v);
  }, V = (p, m, _, M, A, $, N) => {
    const B = p.component = of(
      p,
      M,
      A
    );
    if (ir(p) && (B.ctx.renderer = mt), rf(B, !1, N), B.asyncDep) {
      if (A && A.registerDep(B, q, N), !p.el) {
        const v = B.subTree = te(lt);
        x(null, v, m, _);
      }
    } else
      q(
        B,
        p,
        m,
        _,
        A,
        $,
        N
      );
  }, G = (p, m, _) => {
    const M = m.component = p.component;
    if (Yd(p, m, _))
      if (M.asyncDep && !M.asyncResolved) {
        le(M, m, _);
        return;
      } else
        M.next = m, M.update();
    else
      m.el = p.el, M.vnode = m;
  }, q = (p, m, _, M, A, $, N) => {
    const B = () => {
      if (p.isMounted) {
        let { next: D, bu: Z, u: ae, parent: he, vnode: Ce } = p;
        {
          const We = ks(p);
          if (We) {
            D && (D.el = Ce.el, le(p, D, N)), We.asyncDep.then(() => {
              p.isUnmounted || B();
            });
            return;
          }
        }
        let de = D, Ee;
        gn(p, !1), D ? (D.el = Ce.el, le(p, D, N)) : D = Ce, Z && $r(Z), (Ee = D.props && D.props.onVnodeBeforeUpdate) && It(Ee, he, D, Ce), gn(p, !0);
        const ve = Hr(p), Le = p.subTree;
        p.subTree = ve, R(
          Le,
          ve,
          // parent may have changed if it's in a teleport
          d(Le.el),
          // anchor may have changed if it's in a fragment
          At(Le),
          p,
          A,
          $
        ), D.el = ve.el, de === null && Gd(p, ve.el), ae && dt(ae, A), (Ee = D.props && D.props.onVnodeUpdated) && dt(
          () => It(Ee, he, D, Ce),
          A
        );
      } else {
        let D;
        const { el: Z, props: ae } = m, { bm: he, m: Ce, parent: de, root: Ee, type: ve } = p, Le = Bn(m);
        if (gn(p, !1), he && $r(he), !Le && (D = ae && ae.onVnodeBeforeMount) && It(D, de, m), gn(p, !0), Z && Ht) {
          const We = () => {
            p.subTree = Hr(p), Ht(
              Z,
              p.subTree,
              p,
              A,
              null
            );
          };
          Le && ve.__asyncHydrate ? ve.__asyncHydrate(
            Z,
            p,
            We
          ) : We();
        } else {
          Ee.ce && Ee.ce._injectChildStyle(ve);
          const We = p.subTree = Hr(p);
          R(
            null,
            We,
            _,
            M,
            p,
            A,
            $
          ), m.el = We.el;
        }
        if (Ce && dt(Ce, A), !Le && (D = ae && ae.onVnodeMounted)) {
          const We = m;
          dt(
            () => It(D, de, We),
            A
          );
        }
        (m.shapeFlag & 256 || de && Bn(de.vnode) && de.vnode.shapeFlag & 256) && p.a && dt(p.a, A), p.isMounted = !0, m = _ = M = null;
      }
    };
    p.scope.on();
    const v = p.effect = new zl(B);
    p.scope.off();
    const I = p.update = v.run.bind(v), re = p.job = v.runIfDirty.bind(v);
    re.i = p, re.id = p.uid, v.scheduler = () => ka(re), gn(p, !0), I();
  }, le = (p, m, _) => {
    m.component = p;
    const M = p.vnode.props;
    p.vnode = m, p.next = null, Pd(p, m.props, M, _), Od(p, m.children, _), dn(), Ri(p), fn();
  }, pe = (p, m, _, M, A, $, N, B, v = !1) => {
    const I = p && p.children, re = p ? p.shapeFlag : 0, D = m.children, { patchFlag: Z, shapeFlag: ae } = m;
    if (Z > 0) {
      if (Z & 128) {
        qe(
          I,
          D,
          _,
          M,
          A,
          $,
          N,
          B,
          v
        );
        return;
      } else if (Z & 256) {
        xe(
          I,
          D,
          _,
          M,
          A,
          $,
          N,
          B,
          v
        );
        return;
      }
    }
    ae & 8 ? (re & 16 && wt(I, A, $), D !== I && c(_, D)) : re & 16 ? ae & 16 ? qe(
      I,
      D,
      _,
      M,
      A,
      $,
      N,
      B,
      v
    ) : wt(I, A, $, !0) : (re & 8 && c(_, ""), ae & 16 && U(
      D,
      _,
      M,
      A,
      $,
      N,
      B,
      v
    ));
  }, xe = (p, m, _, M, A, $, N, B, v) => {
    p = p || Mn, m = m || Mn;
    const I = p.length, re = m.length, D = Math.min(I, re);
    let Z;
    for (Z = 0; Z < D; Z++) {
      const ae = m[Z] = v ? on(m[Z]) : zt(m[Z]);
      R(
        p[Z],
        ae,
        _,
        null,
        A,
        $,
        N,
        B,
        v
      );
    }
    I > re ? wt(
      p,
      A,
      $,
      !0,
      !1,
      D
    ) : U(
      m,
      _,
      M,
      A,
      $,
      N,
      B,
      v,
      D
    );
  }, qe = (p, m, _, M, A, $, N, B, v) => {
    let I = 0;
    const re = m.length;
    let D = p.length - 1, Z = re - 1;
    for (; I <= D && I <= Z; ) {
      const ae = p[I], he = m[I] = v ? on(m[I]) : zt(m[I]);
      if (yn(ae, he))
        R(
          ae,
          he,
          _,
          null,
          A,
          $,
          N,
          B,
          v
        );
      else
        break;
      I++;
    }
    for (; I <= D && I <= Z; ) {
      const ae = p[D], he = m[Z] = v ? on(m[Z]) : zt(m[Z]);
      if (yn(ae, he))
        R(
          ae,
          he,
          _,
          null,
          A,
          $,
          N,
          B,
          v
        );
      else
        break;
      D--, Z--;
    }
    if (I > D) {
      if (I <= Z) {
        const ae = Z + 1, he = ae < re ? m[ae].el : M;
        for (; I <= Z; )
          R(
            null,
            m[I] = v ? on(m[I]) : zt(m[I]),
            _,
            he,
            A,
            $,
            N,
            B,
            v
          ), I++;
      }
    } else if (I > Z)
      for (; I <= D; )
        $e(p[I], A, $, !0), I++;
    else {
      const ae = I, he = I, Ce = /* @__PURE__ */ new Map();
      for (I = he; I <= Z; I++) {
        const He = m[I] = v ? on(m[I]) : zt(m[I]);
        He.key != null && Ce.set(He.key, I);
      }
      let de, Ee = 0;
      const ve = Z - he + 1;
      let Le = !1, We = 0;
      const xt = new Array(ve);
      for (I = 0; I < ve; I++) xt[I] = 0;
      for (I = ae; I <= D; I++) {
        const He = p[I];
        if (Ee >= ve) {
          $e(He, A, $, !0);
          continue;
        }
        let nt;
        if (He.key != null)
          nt = Ce.get(He.key);
        else
          for (de = he; de <= Z; de++)
            if (xt[de - he] === 0 && yn(He, m[de])) {
              nt = de;
              break;
            }
        nt === void 0 ? $e(He, A, $, !0) : (xt[nt - he] = I + 1, nt >= We ? We = nt : Le = !0, R(
          He,
          m[nt],
          _,
          null,
          A,
          $,
          N,
          B,
          v
        ), Ee++);
      }
      const Cn = Le ? Nd(xt) : Mn;
      for (de = Cn.length - 1, I = ve - 1; I >= 0; I--) {
        const He = he + I, nt = m[He], Dn = He + 1 < re ? m[He + 1].el : M;
        xt[I] === 0 ? R(
          null,
          nt,
          _,
          Dn,
          A,
          $,
          N,
          B,
          v
        ) : Le && (de < 0 || I !== Cn[de] ? Ve(nt, _, Dn, 2) : de--);
      }
    }
  }, Ve = (p, m, _, M, A = null) => {
    const { el: $, type: N, transition: B, children: v, shapeFlag: I } = p;
    if (I & 6) {
      Ve(p.component.subTree, m, _, M);
      return;
    }
    if (I & 128) {
      p.suspense.move(m, _, M);
      return;
    }
    if (I & 64) {
      N.move(p, m, _, mt);
      return;
    }
    if (N === ye) {
      o($, m, _);
      for (let D = 0; D < v.length; D++)
        Ve(v[D], m, _, M);
      o(p.anchor, m, _);
      return;
    }
    if (N === Ho) {
      W(p, m, _);
      return;
    }
    if (M !== 2 && I & 1 && B)
      if (M === 0)
        B.beforeEnter($), o($, m, _), dt(() => B.enter($), A);
      else {
        const { leave: D, delayLeave: Z, afterLeave: ae } = B, he = () => o($, m, _), Ce = () => {
          D($, () => {
            he(), ae && ae();
          });
        };
        Z ? Z($, he, Ce) : Ce();
      }
    else
      o($, m, _);
  }, $e = (p, m, _, M = !1, A = !1) => {
    const {
      type: $,
      props: N,
      ref: B,
      children: v,
      dynamicChildren: I,
      shapeFlag: re,
      patchFlag: D,
      dirs: Z,
      cacheIndex: ae
    } = p;
    if (D === -2 && (A = !1), B != null && Wr(B, null, _, p, !0), ae != null && (m.renderCache[ae] = void 0), re & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const he = re & 1 && Z, Ce = !Bn(p);
    let de;
    if (Ce && (de = N && N.onVnodeBeforeUnmount) && It(de, m, p), re & 6)
      Ot(p.component, _, M);
    else {
      if (re & 128) {
        p.suspense.unmount(_, M);
        return;
      }
      he && hn(p, null, m, "beforeUnmount"), re & 64 ? p.type.remove(
        p,
        m,
        _,
        mt,
        M
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($ !== ye || D > 0 && D & 64) ? wt(
        I,
        m,
        _,
        !1,
        !0
      ) : ($ === ye && D & 384 || !A && re & 16) && wt(v, m, _), M && Oe(p);
    }
    (Ce && (de = N && N.onVnodeUnmounted) || he) && dt(() => {
      de && It(de, m, p), he && hn(p, null, m, "unmounted");
    }, _);
  }, Oe = (p) => {
    const { type: m, el: _, anchor: M, transition: A } = p;
    if (m === ye) {
      Ne(_, M);
      return;
    }
    if (m === Ho) {
      w(p);
      return;
    }
    const $ = () => {
      r(_), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (p.shapeFlag & 1 && A && !A.persisted) {
      const { leave: N, delayLeave: B } = A, v = () => N(_, $);
      B ? B(p.el, $, v) : v();
    } else
      $();
  }, Ne = (p, m) => {
    let _;
    for (; p !== m; )
      _ = h(p), r(p), p = _;
    r(m);
  }, Ot = (p, m, _) => {
    const { bum: M, scope: A, job: $, subTree: N, um: B, m: v, a: I } = p;
    Bi(v), Bi(I), M && $r(M), A.stop(), $ && ($.flags |= 8, $e(N, p, m, _)), B && dt(B, m), dt(() => {
      p.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve());
  }, wt = (p, m, _, M = !1, A = !1, $ = 0) => {
    for (let N = $; N < p.length; N++)
      $e(p[N], m, _, M, A);
  }, At = (p) => {
    if (p.shapeFlag & 6)
      return At(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = h(p.anchor || p.el), _ = m && m[id];
    return _ ? h(_) : m;
  };
  let ut = !1;
  const gt = (p, m, _) => {
    p == null ? m._vnode && $e(m._vnode, null, null, !0) : R(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = p, ut || (ut = !0, Ri(), Gl(), ut = !1);
  }, mt = {
    p: R,
    um: $e,
    m: Ve,
    r: Oe,
    mt: V,
    mc: U,
    pc: pe,
    pbc: Y,
    n: At,
    o: e
  };
  let pn, Ht;
  return {
    render: gt,
    hydrate: pn,
    createApp: $d(gt, pn)
  };
}
function Or({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function gn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Vd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function _s(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (ie(o) && ie(r))
    for (let a = 0; a < o.length; a++) {
      const i = o[a];
      let l = r[a];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[a] = on(r[a]), l.el = i.el), !n && l.patchFlag !== -2 && _s(i, l)), l.type === cr && (l.el = i.el);
    }
}
function Nd(e) {
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
function ks(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ks(t);
}
function Bi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Fd = Symbol.for("v-scx"), Dd = () => Oo(Fd);
function jd(e, t) {
  return $a(e, null, t);
}
function an(e, t, n) {
  return $a(e, t, n);
}
function $a(e, t, n = Te) {
  const { immediate: o, deep: r, flush: a, once: i } = n, l = Ie({}, n);
  let s;
  if (ur)
    if (a === "sync") {
      const h = Dd();
      s = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!t || o)
      l.once = !0;
    else
      return {
        stop: Lt,
        resume: Lt,
        pause: Lt
      };
  const f = Ye;
  l.call = (h, y, T) => Et(h, f, y, T);
  let c = !1;
  a === "post" ? l.scheduler = (h) => {
    dt(h, f && f.suspense);
  } : a !== "sync" && (c = !0, l.scheduler = (h, y) => {
    y ? h() : ka(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), c && (h.flags |= 2, f && (h.id = f.uid, h.i = f));
  };
  const d = nd(e, t, l);
  return s && s.push(d), d;
}
function Ud(e, t, n) {
  const o = this.proxy, r = ze(e) ? e.includes(".") ? Cs(o, e) : () => o[e] : e.bind(o, o);
  let a;
  fe(t) ? a = t : (a = t.handler, n = t);
  const i = go(this), l = $a(r, a.bind(o), n);
  return i(), l;
}
function Cs(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
const Kd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ct(t)}Modifiers`] || e[`${yt(t)}Modifiers`];
function qd(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Te;
  let r = n;
  const a = t.startsWith("update:"), i = a && Kd(o, t.slice(7));
  i && (i.trim && (r = n.map((c) => ze(c) ? c.trim() : c)), i.number && (r = n.map(bu)));
  let l, s = o[l = Ar(t)] || // also try camelCase event handler (#2249)
  o[l = Ar(ct(t))];
  !s && a && (s = o[l = Ar(yt(t))]), s && Et(
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
function Ss(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const a = e.emits;
  let i = {}, l = !1;
  if (!fe(e)) {
    const s = (f) => {
      const c = Ss(f, t, !0);
      c && (l = !0, Ie(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !a && !l ? (Ae(e) && o.set(e, null), null) : (ie(a) ? a.forEach((s) => i[s] = null) : Ie(i, a), Ae(e) && o.set(e, i), i);
}
function sr(e, t) {
  return !e || !Jo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ke(e, t[0].toLowerCase() + t.slice(1)) || ke(e, yt(t)) || ke(e, t));
}
function Hr(e) {
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
    props: d,
    data: h,
    setupState: y,
    ctx: T,
    inheritAttrs: R
  } = e, O = Uo(e);
  let x, K;
  try {
    if (n.shapeFlag & 4) {
      const w = r || o, P = w;
      x = zt(
        f.call(
          P,
          w,
          c,
          d,
          y,
          h,
          T
        )
      ), K = l;
    } else {
      const w = t;
      x = zt(
        w.length > 1 ? w(
          d,
          { attrs: l, slots: i, emit: s }
        ) : w(
          d,
          null
        )
      ), K = t.props ? l : Wd(l);
    }
  } catch (w) {
    ro.length = 0, ar(w, e, 1), x = te(lt);
  }
  let W = x;
  if (K && R !== !1) {
    const w = Object.keys(K), { shapeFlag: P } = W;
    w.length && P & 7 && (a && w.some(ca) && (K = Xd(
      K,
      a
    )), W = cn(W, K, !1, !0));
  }
  return n.dirs && (W = cn(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && kn(W, n.transition), x = W, Uo(O), x;
}
const Wd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Jo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Xd = (e, t) => {
  const n = {};
  for (const o in e)
    (!ca(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
};
function Yd(e, t, n) {
  const { props: o, children: r, component: a } = e, { props: i, children: l, patchFlag: s } = t, f = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return o ? Vi(o, i, f) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const h = c[d];
        if (i[h] !== o[h] && !sr(f, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Vi(o, i, f) : !0 : !!i;
  return !1;
}
function Vi(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const a = o[r];
    if (t[a] !== e[a] && !sr(n, a))
      return !0;
  }
  return !1;
}
function Gd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ts = (e) => e.__isSuspense;
function Zd(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : ad(e);
}
const ye = Symbol.for("v-fgt"), cr = Symbol.for("v-txt"), lt = Symbol.for("v-cmt"), Ho = Symbol.for("v-stc"), ro = [];
let ht = null;
function k(e = !1) {
  ro.push(ht = e ? null : []);
}
function Jd() {
  ro.pop(), ht = ro[ro.length - 1] || null;
}
let fo = 1;
function Ni(e) {
  fo += e, e < 0 && ht && (ht.hasOnce = !0);
}
function Es(e) {
  return e.dynamicChildren = fo > 0 ? ht || Mn : null, Jd(), fo > 0 && ht && ht.push(e), e;
}
function S(e, t, n, o, r, a) {
  return Es(
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
function et(e, t, n, o, r) {
  return Es(
    te(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function qo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const As = ({ key: e }) => e ?? null, Bo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ze(e) || Qe(e) || fe(e) ? { i: Je, r: e, k: t, f: !!n } : e : null);
function C(e, t = null, n = null, o = 0, r = null, a = e === ye ? 0 : 1, i = !1, l = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && As(t),
    ref: t && Bo(t),
    scopeId: Jl,
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
  return l ? (Ra(s, n), a & 128 && e.normalize(s)) : n && (s.shapeFlag |= ze(n) ? 8 : 16), fo > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ht && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && ht.push(s), s;
}
const te = Qd;
function Qd(e, t = null, n = null, o = 0, r = null, a = !1) {
  if ((!e || e === cs) && (e = lt), qo(e)) {
    const l = cn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ra(l, n), fo > 0 && !a && ht && (l.shapeFlag & 6 ? ht[ht.indexOf(e)] = l : ht.push(l)), l.patchFlag = -2, l;
  }
  if (uf(e) && (e = e.__vccOpts), t) {
    t = ef(t);
    let { class: l, style: s } = t;
    l && !ze(l) && (t.class = ge(l)), Ae(s) && (wa(s) && !ie(s) && (s = Ie({}, s)), t.style = bn(s));
  }
  const i = ze(e) ? 1 : Ts(e) ? 128 : Ql(e) ? 64 : Ae(e) ? 4 : fe(e) ? 2 : 0;
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
function ef(e) {
  return e ? wa(e) || gs(e) ? Ie({}, e) : e : null;
}
function cn(e, t, n = !1, o = !1) {
  const { props: r, ref: a, patchFlag: i, children: l, transition: s } = e, f = t ? Jr(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && As(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? ie(a) ? a.concat(Bo(t)) : [a, Bo(t)] : Bo(t)
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
    ssContent: e.ssContent && cn(e.ssContent),
    ssFallback: e.ssFallback && cn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return s && o && kn(
    c,
    s.clone(c)
  ), c;
}
function Ke(e = " ", t = 0) {
  return te(cr, null, e, t);
}
function $s(e, t) {
  const n = te(Ho, null, e);
  return n.staticCount = t, n;
}
function ne(e = "", t = !1) {
  return t ? (k(), et(lt, null, e)) : te(lt, null, e);
}
function zt(e) {
  return e == null || typeof e == "boolean" ? te(lt) : ie(e) ? te(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? on(e) : te(cr, null, String(e));
}
function on(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : cn(e);
}
function Ra(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (ie(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ra(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !gs(t) ? t._ctx = Je : r === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else fe(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ke(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Jr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = ge([t.class, o.class]));
      else if (r === "style")
        t.style = bn([t.style, o.style]);
      else if (Jo(r)) {
        const a = t[r], i = o[r];
        i && a !== i && !(ie(a) && a.includes(i)) && (t[r] = a ? [].concat(a, i) : i);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function It(e, t, n, o = null) {
  Et(e, t, 7, [
    n,
    o
  ]);
}
const tf = fs();
let nf = 0;
function of(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || tf, a = {
    uid: nf++,
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
    scope: new Tu(
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
    propsOptions: vs(o, r),
    emitsOptions: Ss(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Te,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: Te,
    data: Te,
    props: Te,
    attrs: Te,
    slots: Te,
    refs: Te,
    setupState: Te,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = qd.bind(null, a), e.ce && e.ce(a), a;
}
let Ye = null;
const Rs = () => Ye || Je;
let Wo, Qr;
{
  const e = $l(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (a) => {
      r.length > 1 ? r.forEach((i) => i(a)) : r[0](a);
    };
  };
  Wo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ye = n
  ), Qr = t(
    "__VUE_SSR_SETTERS__",
    (n) => ur = n
  );
}
const go = (e) => {
  const t = Ye;
  return Wo(e), e.scope.on(), () => {
    e.scope.off(), Wo(t);
  };
}, Fi = () => {
  Ye && Ye.scope.off(), Wo(null);
};
function Is(e) {
  return e.vnode.shapeFlag & 4;
}
let ur = !1;
function rf(e, t = !1, n = !1) {
  t && Qr(t);
  const { props: o, children: r } = e.vnode, a = Is(e);
  Id(e, o, a, t), Ld(e, r, n);
  const i = a ? af(e, t) : void 0;
  return t && Qr(!1), i;
}
function af(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, _d);
  const { setup: o } = n;
  if (o) {
    const r = e.setupContext = o.length > 1 ? sf(e) : null, a = go(e);
    dn();
    const i = po(
      o,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (fn(), a(), Tl(i)) {
      if (Bn(e) || is(e), i.then(Fi, Fi), t)
        return i.then((l) => {
          Di(e, l, t);
        }).catch((l) => {
          ar(l, e, 0);
        });
      e.asyncDep = i;
    } else
      Di(e, i, t);
  } else
    Ps(e, t);
}
function Di(e, t, n) {
  fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ae(t) && (e.setupState = Wl(t)), Ps(e, n);
}
let ji;
function Ps(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && ji && !o.render) {
      const r = o.template || Ea(e).template;
      if (r) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: s } = o, f = Ie(
          Ie(
            {
              isCustomElement: a,
              delimiters: l
            },
            i
          ),
          s
        );
        o.render = ji(r, f);
      }
    }
    e.render = o.render || Lt;
  }
  {
    const r = go(e);
    dn();
    try {
      kd(e);
    } finally {
      fn(), r();
    }
  }
}
const lf = {
  get(e, t) {
    return tt(e, "get", ""), e[t];
  }
};
function sf(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, lf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ia(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wl(Yu(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in oo)
        return oo[n](e);
    },
    has(t, n) {
      return n in t || n in oo;
    }
  })) : e.proxy;
}
function cf(e, t = !0) {
  return fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function uf(e) {
  return fe(e) && "__vccOpts" in e;
}
const Q = (e, t) => ed(e, t, ur);
function Ge(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Ae(t) && !ie(t) ? qo(t) ? te(e, null, [t]) : te(e, t) : te(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && qo(n) && (n = [n]), te(e, t, n));
}
const df = "3.5.3";
/**
* @vue/runtime-dom v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ea;
const Ui = typeof window < "u" && window.trustedTypes;
if (Ui)
  try {
    ea = /* @__PURE__ */ Ui.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const zs = ea ? (e) => ea.createHTML(e) : (e) => e, ff = "http://www.w3.org/2000/svg", pf = "http://www.w3.org/1998/Math/MathML", jt = typeof document < "u" ? document : null, Ki = jt && /* @__PURE__ */ jt.createElement("template"), hf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? jt.createElementNS(ff, e) : t === "mathml" ? jt.createElementNS(pf, e) : n ? jt.createElement(e, { is: n }) : jt.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => jt.createTextNode(e),
  createComment: (e) => jt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => jt.querySelector(e),
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
      Ki.innerHTML = zs(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ki.content;
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
}, Jt = "transition", Jn = "animation", Nn = Symbol("_vtc"), Ms = {
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
}, Ls = /* @__PURE__ */ Ie(
  {},
  ts,
  Ms
), gf = (e) => (e.displayName = "Transition", e.props = Ls, e), mf = /* @__PURE__ */ gf(
  (e, { slots: t }) => Ge(sd, Os(e), t)
), mn = (e, t = []) => {
  ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, qi = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Os(e) {
  const t = {};
  for (const F in e)
    F in Ms || (t[F] = e[F]);
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
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: y = `${n}-leave-to`
  } = e, T = vf(r), R = T && T[0], O = T && T[1], {
    onBeforeEnter: x,
    onEnter: K,
    onEnterCancelled: W,
    onLeave: w,
    onLeaveCancelled: P,
    onBeforeAppear: J = x,
    onAppear: z = K,
    onAppearCancelled: U = W
  } = t, j = (F, ee, V) => {
    Qt(F, ee ? c : l), Qt(F, ee ? f : i), V && V();
  }, Y = (F, ee) => {
    F._isLeaving = !1, Qt(F, d), Qt(F, y), Qt(F, h), ee && ee();
  }, oe = (F) => (ee, V) => {
    const G = F ? z : K, q = () => j(ee, F, V);
    mn(G, [ee, q]), Wi(() => {
      Qt(ee, F ? s : a), Ft(ee, F ? c : l), qi(G) || Xi(ee, o, R, q);
    });
  };
  return Ie(t, {
    onBeforeEnter(F) {
      mn(x, [F]), Ft(F, a), Ft(F, i);
    },
    onBeforeAppear(F) {
      mn(J, [F]), Ft(F, s), Ft(F, f);
    },
    onEnter: oe(!1),
    onAppear: oe(!0),
    onLeave(F, ee) {
      F._isLeaving = !0;
      const V = () => Y(F, ee);
      Ft(F, d), Ft(F, h), Bs(), Wi(() => {
        F._isLeaving && (Qt(F, d), Ft(F, y), qi(w) || Xi(F, o, O, V));
      }), mn(w, [F, V]);
    },
    onEnterCancelled(F) {
      j(F, !1), mn(W, [F]);
    },
    onAppearCancelled(F) {
      j(F, !0), mn(U, [F]);
    },
    onLeaveCancelled(F) {
      Y(F), mn(P, [F]);
    }
  });
}
function vf(e) {
  if (e == null)
    return null;
  if (Ae(e))
    return [Br(e.enter), Br(e.leave)];
  {
    const t = Br(e);
    return [t, t];
  }
}
function Br(e) {
  return Dr(e);
}
function Ft(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Nn] || (e[Nn] = /* @__PURE__ */ new Set())).add(t);
}
function Qt(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Nn];
  n && (n.delete(t), n.size || (e[Nn] = void 0));
}
function Wi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let yf = 0;
function Xi(e, t, n, o) {
  const r = e._endId = ++yf, a = () => {
    r === e._endId && o();
  };
  if (n)
    return setTimeout(a, n);
  const { type: i, timeout: l, propCount: s } = Hs(e, t);
  if (!i)
    return o();
  const f = i + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(f, h), a();
  }, h = (y) => {
    y.target === e && ++c >= s && d();
  };
  setTimeout(() => {
    c < s && d();
  }, l + 1), e.addEventListener(f, h);
}
function Hs(e, t) {
  const n = window.getComputedStyle(e), o = (T) => (n[T] || "").split(", "), r = o(`${Jt}Delay`), a = o(`${Jt}Duration`), i = Yi(r, a), l = o(`${Jn}Delay`), s = o(`${Jn}Duration`), f = Yi(l, s);
  let c = null, d = 0, h = 0;
  t === Jt ? i > 0 && (c = Jt, d = i, h = a.length) : t === Jn ? f > 0 && (c = Jn, d = f, h = s.length) : (d = Math.max(i, f), c = d > 0 ? i > f ? Jt : Jn : null, h = c ? c === Jt ? a.length : s.length : 0);
  const y = c === Jt && /\b(transform|all)(,|$)/.test(
    o(`${Jt}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: h,
    hasTransform: y
  };
}
function Yi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Gi(n) + Gi(e[o])));
}
function Gi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Bs() {
  return document.body.offsetHeight;
}
function bf(e, t, n) {
  const o = e[Nn];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zi = Symbol("_vod"), wf = Symbol("_vsh"), xf = Symbol(""), _f = /(^|;)\s*display\s*:/;
function kf(e, t, n) {
  const o = e.style, r = ze(n);
  let a = !1;
  if (n && !r) {
    if (t)
      if (ze(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Vo(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Vo(o, i, "");
    for (const i in n)
      i === "display" && (a = !0), Vo(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[xf];
      i && (n += ";" + i), o.cssText = n, a = _f.test(n);
    }
  } else t && e.removeAttribute("style");
  Zi in e && (e[Zi] = a ? o.display : "", e[wf] && (o.display = "none"));
}
const Ji = /\s*!important$/;
function Vo(e, t, n) {
  if (ie(n))
    n.forEach((o) => Vo(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Cf(e, t);
    Ji.test(n) ? e.setProperty(
      yt(o),
      n.replace(Ji, ""),
      "important"
    ) : e[o] = n;
  }
}
const Qi = ["Webkit", "Moz", "ms"], Vr = {};
function Cf(e, t) {
  const n = Vr[t];
  if (n)
    return n;
  let o = ct(t);
  if (o !== "filter" && o in e)
    return Vr[t] = o;
  o = nr(o);
  for (let r = 0; r < Qi.length; r++) {
    const a = Qi[r] + o;
    if (a in e)
      return Vr[t] = a;
  }
  return t;
}
const el = "http://www.w3.org/1999/xlink";
function tl(e, t, n, o, r, a = Su(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(el, t.slice(6, t.length)) : e.setAttributeNS(el, t, n) : n == null || a && !Rl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : un(n) ? String(n) : n
  );
}
function Sf(e, t, n, o) {
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
    i === "boolean" ? n = Rl(n) : n == null && i === "string" ? (n = "", a = !0) : i === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(t);
}
function Tf(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ef(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const nl = Symbol("_vei");
function Af(e, t, n, o, r = null) {
  const a = e[nl] || (e[nl] = {}), i = a[t];
  if (o && i)
    i.value = o;
  else {
    const [l, s] = $f(t);
    if (o) {
      const f = a[t] = Pf(
        o,
        r
      );
      Tf(e, l, f, s);
    } else i && (Ef(e, l, i, s), a[t] = void 0);
  }
}
const ol = /(?:Once|Passive|Capture)$/;
function $f(e) {
  let t;
  if (ol.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ol); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : yt(e.slice(2)), t];
}
let Nr = 0;
const Rf = /* @__PURE__ */ Promise.resolve(), If = () => Nr || (Rf.then(() => Nr = 0), Nr = Date.now());
function Pf(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Et(
      zf(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = If(), n;
}
function zf(e, t) {
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
const rl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Mf = (e, t, n, o, r, a) => {
  const i = r === "svg";
  t === "class" ? bf(e, o, i) : t === "style" ? kf(e, n, o) : Jo(t) ? ca(t) || Af(e, t, n, o, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Lf(e, t, o, i)) ? (Sf(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && tl(e, t, o, i, a, t !== "value")) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), tl(e, t, o, i));
};
function Lf(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && rl(t) && fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return rl(t) && ze(n) ? !1 : !!(t in e || e._isVueCE && (/[A-Z]/.test(t) || !ze(n)));
}
const al = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Vs(e, t, n) {
  const o = /* @__PURE__ */ as(e, t);
  er(o) && Ie(o, t);
  class r extends Pa {
    constructor(i) {
      super(o, i, n);
    }
  }
  return r.def = o, r;
}
const Of = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Pa extends Of {
  constructor(t, n = {}, o = sl) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== sl ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
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
    this._connected = !1, ft(() => {
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
          (f === Number || f && f.type === Number) && (s in this._props && (this._props[s] = Dr(this._props[s])), (l || (l = /* @__PURE__ */ Object.create(null)))[ct(s)] = !0);
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
          get: () => Mt(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = ie(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && o.includes(r) && this._setProp(r, this[r]);
    for (const r of o.map(ct))
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
    let o = n ? this.getAttribute(t) : al;
    const r = ct(t);
    n && this._numberProps && this._numberProps[r] && (o = Dr(o)), this._setProp(r, o, !1, !0);
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
    n !== this._props[t] && (n === al ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(yt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(yt(t), n + "") : n || this.removeAttribute(yt(t))));
  }
  _update() {
    Wf(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = te(this._def, Ie(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0;
      const r = (a, i) => {
        this.dispatchEvent(
          new CustomEvent(
            a,
            er(i[0]) ? Ie({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      o.emit = (a, ...i) => {
        r(a, i), yt(a) !== a && r(yt(a), i);
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
            let d;
            for (; d = c.nextNode(); )
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
const Ns = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakMap(), Xo = Symbol("_moveCb"), il = Symbol("_enterCb"), Hf = (e) => (delete e.props.mode, e), Bf = /* @__PURE__ */ Hf({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Ie({}, Ls, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Rs(), o = es();
    let r, a;
    return ss(() => {
      if (!r.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!jf(
        r[0].el,
        n.vnode.el,
        i
      ))
        return;
      r.forEach(Nf), r.forEach(Ff);
      const l = r.filter(Df);
      Bs(), l.forEach((s) => {
        const f = s.el, c = f.style;
        Ft(f, i), c.transform = c.webkitTransform = c.transitionDuration = "";
        const d = f[Xo] = (h) => {
          h && h.target !== f || (!h || /transform$/.test(h.propertyName)) && (f.removeEventListener("transitionend", d), f[Xo] = null, Qt(f, i));
        };
        f.addEventListener("transitionend", d);
      });
    }), () => {
      const i = we(e), l = Os(i);
      let s = i.tag || ye;
      if (r = [], a)
        for (let f = 0; f < a.length; f++) {
          const c = a[f];
          c.el && c.el instanceof Element && (r.push(c), kn(
            c,
            uo(
              c,
              l,
              o,
              n
            )
          ), Ns.set(
            c,
            c.el.getBoundingClientRect()
          ));
        }
      a = t.default ? Ca(t.default()) : [];
      for (let f = 0; f < a.length; f++) {
        const c = a[f];
        c.key != null && kn(
          c,
          uo(c, l, o, n)
        );
      }
      return te(s, null, a);
    };
  }
}), Vf = Bf;
function Nf(e) {
  const t = e.el;
  t[Xo] && t[Xo](), t[il] && t[il]();
}
function Ff(e) {
  Fs.set(e, e.el.getBoundingClientRect());
}
function Df(e) {
  const t = Ns.get(e), n = Fs.get(e), o = t.left - n.left, r = t.top - n.top;
  if (o || r) {
    const a = e.el.style;
    return a.transform = a.webkitTransform = `translate(${o}px,${r}px)`, a.transitionDuration = "0s", e;
  }
}
function jf(e, t, n) {
  const o = e.cloneNode(), r = e[Nn];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((s) => s && o.classList.remove(s));
  }), n.split(/\s+/).forEach((l) => l && o.classList.add(l)), o.style.display = "none";
  const a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(o);
  const { hasTransform: i } = Hs(o);
  return a.removeChild(o), i;
}
const Uf = ["ctrl", "shift", "alt", "meta"], Kf = {
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
  exact: (e, t) => Uf.some((n) => e[`${n}Key`] && !t.includes(n))
}, zo = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...a) => {
    for (let i = 0; i < t.length; i++) {
      const l = Kf[t[i]];
      if (l && l(r, t)) return;
    }
    return e(r, ...a);
  });
}, qf = /* @__PURE__ */ Ie({ patchProp: Mf }, hf);
let ll;
function Ds() {
  return ll || (ll = Hd(qf));
}
const Wf = (...e) => {
  Ds().render(...e);
}, sl = (...e) => {
  const t = Ds().createApp(...e), { mount: n } = t;
  return t.mount = (o) => {
    const r = Yf(o);
    if (!r) return;
    const a = t._component;
    !fe(a) && !a.render && !a.template && (a.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, Xf(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Xf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Yf(e) {
  return ze(e) ? document.querySelector(e) : e;
}
const cl = (e) => {
  if (!e || typeof e != "string") return !1;
  const t = e.trim();
  return !t || /[;{}]/.test(t) ? !1 : /^[0-9a-fA-F]{3,4}([0-9a-fA-F]{3,4})?$/.test(t) ? `#${t}` : typeof CSS > "u" || typeof CSS.supports != "function" || CSS.supports("color", t) ? t : !1;
}, js = ({ theme: e = "dark", backgroundColor: t, foregroundColor: n } = {}) => {
  const o = e === "light" ? "#fff" : "#000", r = e === "light" ? "#000" : "#fff", a = cl(t), i = cl(n);
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
}, Gf = ["width", "viewBox"], Zf = { fill: "currentColor" }, Jf = {
  key: 0,
  d: "M 1.572 23 C 0.948 23 0.299 22.9 0 22.776 L 0 20.43 C 0.125 20.48 0.374 20.505 0.624 20.505 C 1.771 20.505 2.37 20.031 2.37 18.784 L 2.37 5.288 L 5.413 5.288 L 5.413 19.358 C 5.413 21.328 4.316 23 1.572 23 Z M 13.5 17.911 C 9.832 17.911 7.262 15.466 7.262 11.425 C 7.262 7.434 9.857 4.889 13.499 4.889 C 17.166 4.889 19.761 7.434 19.761 11.425 C 19.761 15.466 17.166 17.911 13.499 17.911 Z M 10.356 11.425 C 10.356 14.02 11.603 15.516 13.499 15.516 C 15.395 15.516 16.667 14.02 16.667 11.426 C 16.667 8.781 15.37 7.309 13.499 7.309 C 11.653 7.309 10.356 8.781 10.356 11.425 Z M 25.492 17.911 C 23.047 17.911 21.127 16.24 21.127 13.021 L 21.127 5.289 L 24.195 5.289 L 24.195 12.549 C 24.195 14.245 24.943 15.467 26.415 15.467 C 27.962 15.467 29.06 14.32 29.06 12.524 L 29.06 5.288 L 32.103 5.288 L 32.103 17.462 L 29.084 17.462 L 29.084 16.963 C 29.084 16.589 29.134 16.165 29.209 15.791 C 28.586 16.963 27.513 17.911 25.492 17.911 Z M 34.174 17.462 L 34.174 5.288 L 37.218 5.288 L 37.218 6.211 C 37.218 6.661 37.193 7.035 37.118 7.484 C 37.766 6.112 38.864 4.889 40.685 4.889 C 40.935 4.889 41.135 4.914 41.334 4.964 L 41.334 7.908 C 41.134 7.858 40.86 7.808 40.461 7.808 C 38.59 7.808 37.218 8.756 37.218 11.425 L 37.218 17.462 Z M 42.977 17.462 L 42.977 5.29 L 46.02 5.29 L 46.02 5.838 C 46.02 6.188 45.995 6.562 45.92 7.036 C 46.594 5.813 47.742 4.89 49.662 4.89 C 52.357 4.89 53.953 6.786 53.953 9.78 L 53.953 17.463 L 50.91 17.463 L 50.91 10.229 C 50.91 8.433 50.037 7.31 48.615 7.31 C 47.118 7.31 46.02 8.632 46.02 10.329 L 46.02 17.463 L 42.977 17.463 Z M 60.112 17.912 C 57.992 17.912 55.922 16.515 55.922 14.12 C 55.922 11.376 58.042 10.428 60.662 10.078 L 62.408 9.854 C 63.405 9.729 63.755 9.354 63.755 8.756 C 63.755 7.908 63.056 7.16 61.759 7.16 C 60.337 7.16 59.439 7.958 59.314 9.23 L 56.171 9.23 C 56.371 6.686 58.441 4.89 61.584 4.89 C 65.301 4.89 66.798 6.885 66.798 10.303 L 66.798 17.463 L 63.98 17.463 L 63.98 16.963 C 63.98 16.564 64.03 16.19 64.105 15.791 C 63.456 16.988 62.209 17.911 60.113 17.911 Z M 59.015 13.995 C 59.015 15.068 59.863 15.666 60.935 15.666 C 62.557 15.666 63.855 14.469 63.855 12.748 L 63.855 11.425 C 63.58 11.675 63.156 11.8 62.408 11.949 L 61.41 12.149 C 59.988 12.423 59.015 12.897 59.015 13.995 Z M 68.93 17.463 L 68.93 0 L 71.973 0 L 71.973 17.463 Z",
  transform: "translate(125)"
}, Us = {
  __name: "AntikytheraJournalLogo",
  props: {
    showJournal: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return (t, n) => (k(), S("svg", {
      width: e.showJournal ? 197 : 121,
      height: "23",
      viewBox: e.showJournal ? "0 0 197 23" : "0 0 121 23",
      role: "img",
      "aria-label": "Antikythera Journal",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      C("g", Zf, [
        n[0] || (n[0] = $s('<path d="M 11.058 12.841 C 10.128 12.841 9.205 12.841 8.244 12.841 C 8.244 12.374 8.244 11.908 8.244 11.367 C 8.155 11.472 8.11 11.517 8.066 11.57 C 7.016 12.998 5.542 13.42 3.868 13.299 C 2.662 13.217 1.627 12.735 0.823 11.788 C -0.413 10.344 -0.398 7.359 1.85 6.164 C 2.855 5.63 3.935 5.405 5.044 5.262 C 5.617 5.187 6.197 5.119 6.771 5.036 C 7.463 4.938 7.85 4.645 7.962 4.141 C 8.073 3.608 7.746 2.938 7.217 2.623 C 5.743 1.751 3.905 2.517 3.488 4.187 C 3.466 4.277 3.354 4.42 3.279 4.42 C 2.289 4.435 1.299 4.427 0.28 4.427 C 0.362 3.352 0.726 2.457 1.419 1.69 C 2.349 0.653 3.547 0.149 4.895 0.036 C 5.714 -0.031 6.562 -0.009 7.366 0.142 C 9.554 0.548 10.805 2.036 11.006 4.314 C 11.013 4.412 11.051 4.502 11.073 4.593 C 11.058 7.344 11.058 10.096 11.058 12.841 Z M 8.073 6.826 C 7.433 6.984 6.8 7.134 6.175 7.299 C 5.475 7.487 4.753 7.638 4.083 7.916 C 3.361 8.217 3.079 8.811 3.16 9.54 C 3.235 10.209 3.696 10.765 4.396 10.923 C 5.542 11.186 6.555 10.916 7.359 10.014 C 8.215 9.074 8.088 7.908 8.073 6.826 Z" transform="translate(107.927 4.987)"></path><path d="M 0 17.819 C 0 11.864 0 5.947 0 0 C 1.02 0 2.032 0 3.052 0 C 3.052 2.316 3.052 4.632 3.052 6.955 C 3.268 6.692 3.469 6.406 3.707 6.165 C 4.66 5.188 5.858 4.88 7.168 4.977 C 9.721 5.18 10.987 7.007 11.084 9.271 C 11.195 12.075 11.121 14.887 11.121 17.699 C 11.121 17.737 11.099 17.767 11.084 17.819 C 10.086 17.819 9.089 17.819 8.032 17.819 C 8.032 17.669 8.032 17.526 8.032 17.376 C 8.024 14.925 8.039 12.481 8.002 10.03 C 7.995 9.571 7.861 9.083 7.667 8.669 C 6.938 7.098 4.786 7.007 3.707 8.489 C 3.305 9.037 3.097 9.654 3.097 10.338 C 3.089 12.684 3.089 15.037 3.089 17.383 C 3.089 17.518 3.089 17.654 3.089 17.812 C 2.047 17.819 1.035 17.819 0 17.819 Z" transform="translate(74.233 0)"></path><path d="M 3.059 17.827 C 2.017 17.827 1.02 17.827 0 17.827 C 0 11.88 0 5.955 0 0 C 1.005 0 2.002 0 3.052 0 C 3.052 3.391 3.052 6.789 3.052 10.248 C 3.714 9.511 4.325 8.827 4.943 8.158 C 5.739 7.286 6.543 6.421 7.354 5.556 C 7.429 5.474 7.555 5.383 7.66 5.383 C 8.88 5.368 10.108 5.376 11.433 5.376 C 9.721 7.188 8.069 8.932 6.402 10.699 C 8.218 13.068 10.027 15.421 11.873 17.827 C 11.679 17.834 11.567 17.849 11.448 17.849 C 10.421 17.849 9.386 17.834 8.359 17.857 C 8.054 17.864 7.868 17.774 7.689 17.518 C 6.692 16.09 5.672 14.677 4.66 13.263 C 4.563 13.135 4.466 13.007 4.362 12.872 C 3.945 13.278 3.528 13.661 3.141 14.075 C 3.067 14.158 3.067 14.331 3.067 14.458 C 3.052 15.564 3.059 16.676 3.059 17.827 Z" transform="translate(39.918 0)"></path><path d="M 12.109 8.827 C 11.841 10.73 10.859 12.03 9.199 12.76 C 7.226 13.624 5.217 13.602 3.266 12.677 C 1.45 11.805 0.49 10.233 0.155 8.294 C -0.15 6.512 -0.046 4.76 0.847 3.128 C 1.859 1.279 3.445 0.279 5.522 0.046 C 6.757 -0.09 7.948 0.068 9.057 0.632 C 10.829 1.534 11.7 3.091 12.027 4.985 C 12.161 5.767 12.169 6.564 12.236 7.406 C 9.177 7.406 6.199 7.406 3.184 7.406 C 3.244 8.662 3.609 9.715 4.651 10.391 C 5.656 11.045 6.72 11.075 7.785 10.519 C 8.365 10.218 8.723 9.722 8.909 9.098 C 8.938 8.993 9.057 8.835 9.132 8.835 C 10.107 8.827 11.082 8.827 12.109 8.827 Z M 8.99 5.136 C 8.916 3.316 7.755 2.264 5.924 2.346 C 4.495 2.406 3.125 3.812 3.207 5.136 C 5.135 5.136 7.063 5.136 8.99 5.136 Z" transform="translate(86.651 4.962)"></path><path d="M 0.28 4.5 C 0.437 2.913 1.114 1.695 2.439 0.928 C 4.426 -0.222 6.526 -0.275 8.61 0.612 C 10.069 1.229 10.701 2.522 10.955 4.026 C 11.029 4.47 11.059 4.921 11.059 5.364 C 11.066 7.778 11.066 10.184 11.066 12.597 C 11.066 12.695 11.059 12.793 11.051 12.905 C 10.106 12.905 9.183 12.905 8.208 12.905 C 8.23 12.394 8.253 11.905 8.275 11.357 C 7.784 12.124 7.173 12.672 6.377 13.011 C 4.583 13.778 2.342 13.402 1.084 12.116 C -0.851 10.139 -0.099 6.868 2.573 5.928 C 3.556 5.582 4.613 5.462 5.64 5.259 C 6.012 5.184 6.399 5.161 6.779 5.109 C 7.471 5.011 7.873 4.718 7.985 4.229 C 8.096 3.718 7.791 3.056 7.285 2.718 C 5.871 1.785 3.868 2.597 3.503 4.244 C 3.481 4.342 3.355 4.492 3.273 4.492 C 2.298 4.507 1.315 4.5 0.28 4.5 Z M 8.156 6.853 C 7.538 7.018 7.039 7.154 6.548 7.289 C 5.729 7.515 4.888 7.672 4.099 7.981 C 3.399 8.251 3.087 8.883 3.161 9.522 C 3.243 10.274 3.704 10.815 4.434 10.996 C 5.871 11.342 7.464 10.635 7.895 9.116 C 8.104 8.402 8.081 7.612 8.156 6.853 Z" transform="translate(0 4.92)"></path><path d="M 3.089 12.869 C 2.04 12.869 1.035 12.869 0 12.869 C 0 8.726 0 4.591 0 0.433 C 1.012 0.433 2.025 0.433 3.097 0.433 C 3.067 0.952 3.045 1.463 3.015 2.057 C 3.186 1.824 3.312 1.651 3.446 1.486 C 4.399 0.328 5.657 -0.078 7.086 0.012 C 9.64 0.178 10.816 1.959 11.054 4.005 C 11.106 4.463 11.121 4.922 11.121 5.38 C 11.128 7.726 11.121 10.072 11.121 12.418 C 11.121 12.553 11.121 12.689 11.121 12.854 C 10.086 12.854 9.081 12.854 8.024 12.854 C 8.024 12.704 8.024 12.553 8.024 12.41 C 8.024 10.05 8.039 7.689 8.017 5.335 C 8.009 4.899 7.928 4.441 7.793 4.02 C 7.22 2.238 5.263 2.177 4.25 2.974 C 3.513 3.553 3.119 4.335 3.104 5.268 C 3.082 7.636 3.089 10.012 3.089 12.38 C 3.089 12.531 3.089 12.681 3.089 12.869 Z" transform="translate(13.076 4.965)"></path><path d="M 0 0.001 C 1.124 0.001 2.203 -0.006 3.275 0.016 C 3.372 0.016 3.521 0.197 3.558 0.317 C 4.221 2.34 4.868 4.362 5.531 6.385 C 5.843 7.339 6.163 8.294 6.498 9.302 C 7.474 6.159 8.426 3.084 9.386 0.009 C 10.466 0.009 11.515 0.009 12.617 0.009 C 12.334 0.783 12.066 1.528 11.791 2.272 C 9.952 7.294 8.114 12.317 6.268 17.339 C 6.223 17.452 6.089 17.61 6 17.61 C 4.972 17.633 3.945 17.625 2.866 17.625 C 3.149 16.866 3.409 16.144 3.677 15.422 C 4.02 14.497 4.377 13.588 4.704 12.655 C 4.764 12.475 4.771 12.234 4.704 12.061 C 3.231 8.257 1.734 4.452 0.246 0.655 C 0.164 0.46 0.089 0.249 0 0.001 Z" transform="translate(51.492 5.374)"></path><path d="M 8.85 4.466 C 8.85 5.323 8.85 6.12 8.85 6.955 C 7.846 6.955 6.863 6.955 5.858 6.955 C 5.851 7.12 5.843 7.24 5.843 7.361 C 5.843 9.083 5.843 10.804 5.843 12.526 C 5.843 12.601 5.843 12.676 5.843 12.752 C 5.888 14.285 6.722 14.834 8.21 14.646 C 8.314 14.631 8.426 14.624 8.582 14.601 C 8.582 15.353 8.59 16.075 8.575 16.797 C 8.575 16.872 8.456 16.985 8.374 17 C 7.146 17.27 5.918 17.308 4.734 16.797 C 3.446 16.24 2.873 15.15 2.821 13.834 C 2.739 11.707 2.762 9.571 2.747 7.436 C 2.747 7.286 2.747 7.143 2.747 6.955 C 1.816 6.955 0.916 6.955 0 6.955 C 0 6.12 0 5.331 0 4.496 C 0.886 4.496 1.787 4.496 2.732 4.496 C 2.732 2.985 2.732 1.504 2.732 0 C 3.789 0 4.794 0 5.843 0 C 5.843 1.474 5.843 2.94 5.843 4.451 C 6.841 4.466 7.823 4.466 8.85 4.466 Z" transform="translate(64.347 0.888)"></path><path d="M 8.895 6.955 C 7.875 6.955 6.9 6.955 5.895 6.955 C 5.888 7.105 5.88 7.225 5.88 7.346 C 5.88 9.12 5.873 10.895 5.88 12.669 C 5.88 12.917 5.91 13.165 5.962 13.406 C 6.126 14.18 6.699 14.654 7.496 14.676 C 7.853 14.684 8.21 14.676 8.605 14.676 C 8.612 14.707 8.635 14.804 8.635 14.895 C 8.635 15.458 8.62 16.022 8.642 16.579 C 8.65 16.864 8.583 17.007 8.277 17.052 C 7.354 17.21 6.431 17.263 5.508 17.052 C 3.796 16.669 2.814 15.361 2.806 13.473 C 2.799 11.466 2.806 9.451 2.806 7.443 C 2.806 7.293 2.806 7.15 2.806 6.962 C 1.861 6.962 0.945 6.962 0 6.962 C 0 6.12 0 5.323 0 4.489 C 0.916 4.489 1.824 4.489 2.791 4.489 C 2.791 2.977 2.791 1.504 2.791 0 C 3.834 0 4.831 0 5.858 0 C 5.858 1.474 5.858 2.947 5.858 4.466 C 6.878 4.466 7.875 4.466 8.888 4.466 C 8.895 5.308 8.895 6.105 8.895 6.955 Z" transform="translate(24.875 0.903)"></path><path d="M 3.022 2.456 C 4.213 0.223 5.94 -0.221 7.22 0.087 C 7.22 1.065 7.22 2.042 7.22 3.042 C 6.729 3.042 6.245 2.997 5.761 3.05 C 4.242 3.208 3.305 4.162 3.118 5.704 C 3.074 6.072 3.059 6.448 3.059 6.824 C 3.051 8.824 3.059 10.816 3.059 12.847 C 2.039 12.847 1.027 12.847 0 12.847 C 0 8.726 0 4.599 0 0.441 C 0.997 0.441 2.002 0.441 3.029 0.441 C 3.022 1.11 3.022 1.779 3.022 2.456 Z" transform="translate(100.405 4.965)"></path><path d="M 0 0 C 1.027 0 2.025 0 3.052 0 C 3.052 4.143 3.052 8.271 3.052 12.428 C 2.04 12.428 1.035 12.428 0 12.428 C 0 8.293 0 4.173 0 0 Z" transform="translate(34.73 5.39)"></path>', 11)),
        e.showJournal ? (k(), S("path", Jf)) : ne("", !0)
      ])
    ], 8, Gf));
  }
}, Qf = "text-m font-sans flex w-full items-center justify-center border px-[16px] leading-[1.1] transition-transform duration-300 ease-out", mo = {
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
    const t = e, n = Q(() => typeof t.href == "string" && t.href.trim() !== ""), o = Q(() => t.disabled || t.variant === "disabled"), r = Q(() => n.value && !o.value ? "a" : "button"), a = Q(() => r.value === "a" ? t.href : void 0), i = Q(() => typeof t.download == "string" ? t.download : ""), l = Q(() => t.size === "large" ? "rounded-lg py-[10px]" : "rounded-[4px] py-[4px]"), s = Q(() => o.value ? "cursor-not-allowed" : "cursor-pointer hover:scale-[0.99] hover:duration-100"), f = Q(() => o.value ? `border-[rgba(204,204,204,0.2)] bg-[rgba(204,204,204,0.2)] ${t.variant === "dark" ? "text-[color-mix(in_srgb,var(--black)_50%,transparent)]" : "text-[color-mix(in_srgb,var(--white)_50%,transparent)]"}` : t.variant === "dark" ? "border-stroke-light bg-black text-white" : "border-stroke-dark bg-white text-black");
    return (c, d) => (k(), et(bd(r.value), {
      href: r.value === "a" ? a.value : void 0,
      target: r.value === "a" && e.target ? e.target : void 0,
      rel: r.value === "a" && e.target === "_blank" ? "noopener noreferrer" : e.rel,
      download: r.value === "a" && e.download ? i.value : void 0,
      type: r.value === "button" ? e.type : void 0,
      disabled: r.value === "button" ? o.value : void 0,
      "aria-disabled": o.value ? "true" : void 0,
      class: ge([Qf, l.value, s.value, f.value])
    }, {
      default: Wt(() => [
        xd(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "target", "rel", "download", "type", "disabled", "aria-disabled", "class"]));
  }
}, vo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, ep = {}, tp = {
  width: "14",
  height: "23",
  viewBox: "0 0 14 23",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
function np(e, t) {
  return k(), S("svg", tp, t[0] || (t[0] = [
    $s('<path d="M11.7937 4.1625V13.1813V22.2H11.1H10.4062V13.1813V4.1625H11.1H11.7937Z"></path><path d="M1.3875 4.1625V10.7531V17.3438H0.69375H0V10.7531V4.1625H0.69375H1.3875Z"></path><path d="M3.46875 4.1625V10.7531V17.3438H2.775H2.08125V10.7531V4.1625H2.775H3.46875Z"></path><path d="M5.55 4.1625V10.7531V17.3438H4.85625H4.1625V10.7531V4.1625H4.85625H5.55Z"></path><path d="M7.63125 4.1625V10.7531V17.3438H6.9375H6.24375V10.7531V4.1625H6.9375H7.63125Z"></path><path d="M9.7125 0V8.67188V17.3438H9.01875H8.325V8.67188V0H9.01875H9.7125Z"></path><path d="M13.875 4.1625V10.7531V17.3438H13.1813H12.4875V10.7531V4.1625H13.1813H13.875Z"></path>', 7)
  ]));
}
const ta = /* @__PURE__ */ vo(ep, [["render", np]]);
function ul(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ul(Object(n), !0).forEach(function(o) {
      op(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ul(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function op(e, t, n) {
  return t = rp(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function rp(e) {
  var t = ap(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ap(e, t) {
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
function Yo(e) {
  return e._type === "span" && "text" in e && typeof e.text == "string" && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every((t) => typeof t == "string"));
}
function Ks(e) {
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
function qs(e) {
  return Ks(e) && "listItem" in e && typeof e.listItem == "string" && (typeof e.level > "u" || typeof e.level == "number");
}
function Ws(e) {
  return e._type === "@list";
}
function Xs(e) {
  return e._type === "@span";
}
function Ys(e) {
  return e._type === "@text";
}
const fl = ["strong", "em", "code", "underline", "strike-through"];
function ip(e, t, n) {
  if (!Yo(e) || !e.marks)
    return [];
  if (!e.marks.length)
    return [];
  const o = e.marks.slice(), r = {};
  return o.forEach((a) => {
    r[a] = 1;
    for (let i = t + 1; i < n.length; i++) {
      const l = n[i];
      if (l && Yo(l) && Array.isArray(l.marks) && l.marks.indexOf(a) !== -1)
        r[a]++;
      else
        break;
    }
  }), o.sort((a, i) => lp(r, a, i));
}
function lp(e, t, n) {
  const o = e[t], r = e[n];
  if (o !== r)
    return r - o;
  const a = fl.indexOf(t), i = fl.indexOf(n);
  return a !== i ? a - i : t.localeCompare(n);
}
function sp(e) {
  var t;
  const {
    children: n,
    markDefs: o = []
  } = e;
  if (!n || !n.length)
    return [];
  const r = n.map(ip), a = {
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
    let d = i[i.length - 1];
    if (d) {
      for (const h of f) {
        const y = o.find((O) => O._key === h), T = y ? y._type : h, R = {
          _type: "@span",
          _key: s._key,
          children: [],
          markDef: y,
          markType: T,
          markKey: h
        };
        d.children.push(R), i.push(R), d = R;
      }
      if (Yo(s)) {
        const h = s.text.split(`
`);
        for (let y = h.length; y-- > 1; )
          h.splice(y, 0, `
`);
        d.children = d.children.concat(h.map((y) => ({
          _type: "@text",
          text: y
        })));
      } else
        d.children = d.children.concat(s);
    }
  }
  return a.children;
}
function cp(e, t) {
  const n = [];
  let o;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (a) {
      if (!qs(a)) {
        n.push(a), o = void 0;
        continue;
      }
      if (!o) {
        o = Mo(a, r, t), n.push(o);
        continue;
      }
      if (up(a, o)) {
        o.children.push(a);
        continue;
      }
      if ((a.level || 1) > o.level) {
        const i = Mo(a, r, t);
        if (t === "html") {
          const l = o.children[o.children.length - 1], s = dl(dl({}, l), {}, {
            children: [...l.children, i]
          });
          o.children[o.children.length - 1] = s;
        } else
          o.children.push(i);
        o = i;
        continue;
      }
      if ((a.level || 1) < o.level) {
        const i = n[n.length - 1], l = i && na(i, a);
        if (l) {
          o = l, o.children.push(a);
          continue;
        }
        o = Mo(a, r, t), n.push(o);
        continue;
      }
      if (a.listItem !== o.listItem) {
        const i = n[n.length - 1], l = i && na(i, {
          level: a.level || 1
        });
        if (l && l.listItem === a.listItem) {
          o = l, o.children.push(a);
          continue;
        } else {
          o = Mo(a, r, t), n.push(o);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", a), n.push(a);
    }
  }
  return n;
}
function up(e, t) {
  return (e.level || 1) === t.level && e.listItem === t.listItem;
}
function Mo(e, t, n) {
  return {
    _type: "@list",
    _key: `${e._key || `${t}`}-parent`,
    mode: n,
    level: e.level || 1,
    listItem: e.listItem,
    children: [e]
  };
}
function na(e, t) {
  const n = t.level || 1, o = t.listItem || "normal", r = typeof t.listItem == "string";
  if (Ws(e) && (e.level || 1) === n && r && (e.listItem || "normal") === o)
    return e;
  if (!("children" in e))
    return;
  const a = e.children[e.children.length - 1];
  return a && !Yo(a) ? na(a, t) : void 0;
}
function Gs(e) {
  let t = "";
  return e.children.forEach((n) => {
    Ys(n) ? t += n.text : Xs(n) && (t += Gs(n));
  }), t;
}
const dp = "html";
function fp(e, t) {
  const { block: n, list: o, listItem: r, marks: a, types: i, ...l } = t;
  return {
    ...e,
    block: Qn(e, t, "block"),
    list: Qn(e, t, "list"),
    listItem: Qn(e, t, "listItem"),
    marks: Qn(e, t, "marks"),
    types: Qn(e, t, "types"),
    ...l
  };
}
function Qn(e, t, n) {
  const o = t[n], r = e[n];
  return typeof o == "function" || o && typeof r == "function" ? o : o ? {
    ...r,
    ...o
  } : r;
}
const Ue = (e) => (t, { slots: n }) => {
  var o;
  return Ge(e, (o = n.default) == null ? void 0 : o.call(n));
}, pp = ({ value: e }, { slots: t }) => {
  var n;
  return Ge("a", { href: e == null ? void 0 : e.href }, (n = t.default) == null ? void 0 : n.call(t));
}, hp = { textDecoration: "underline" }, gp = {
  code: Ue("code"),
  em: Ue("em"),
  link: pp,
  "strike-through": Ue("del"),
  strong: Ue("strong"),
  underline: (e, { slots: t }) => {
    var n;
    return Ge("span", { style: hp }, (n = t.default) == null ? void 0 : n.call(t));
  }
}, mp = {
  number: Ue("ol"),
  bullet: Ue("ul")
}, vp = Ue("li"), yo = (e, t) => `[@portabletext/vue] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`, Zs = (e) => yo(`block type "${e}"`, "types"), yp = (e) => yo(`mark type "${e}"`, "marks"), bp = (e) => yo(`block style "${e}"`, "block"), wp = (e) => yo(`list style "${e}"`, "list"), xp = (e) => yo(`list item style "${e}"`, "listItem");
function _p(e) {
  console.warn(e);
}
const pl = { display: "none" }, kp = ({
  value: e,
  isInline: t
}) => {
  const n = Zs(e._type);
  return t ? Ge("span", { style: pl }, n) : Ge("div", { style: pl }, n);
}, Cp = ({ markType: e }, { slots: t }) => {
  var n;
  return Ge("span", { class: `unknown__pt__mark__${e}` }, (n = t.default) == null ? void 0 : n.call(t));
}, Sp = Ue("p"), Tp = Ue("ul"), Ep = Ue("li"), Ap = () => Ge("br"), $p = {
  normal: Ue("p"),
  blockquote: Ue("blockquote"),
  h1: Ue("h1"),
  h2: Ue("h2"),
  h3: Ue("h3"),
  h4: Ue("h4"),
  h5: Ue("h5"),
  h6: Ue("h6")
}, hl = {
  types: {},
  block: $p,
  marks: gp,
  list: mp,
  listItem: vp,
  hardBreak: Ap,
  unknownType: kp,
  unknownMark: Cp,
  unknownList: Tp,
  unknownListItem: Ep,
  unknownBlockStyle: Sp
}, Rp = (e, t) => {
  function n(d) {
    const { node: h, index: y, isInline: T } = d, R = h._key || `node-${y}`;
    return Ws(h) ? a(h, y, R) : qs(h) ? r(h, y, R) : Xs(h) ? i(h, y, R) : o(h) ? c(h, y, R, T) : Ks(h) ? l(h, y, R, T) : Ys(h) ? s(h, R) : f(h, y, R, T);
  }
  function o(d) {
    return d._type in e.types;
  }
  function r(d, h, y) {
    const T = gl({ node: d, index: h, isInline: !1, renderNode: n }), R = e.listItem, O = (typeof R == "function" ? R : R[d.listItem]) || e.unknownListItem;
    if (O === e.unknownListItem) {
      const K = d.listItem || "bullet";
      t(xp(K), {
        type: K,
        nodeType: "listItemStyle"
      });
    }
    let x = T.children;
    if (d.style && d.style !== "normal") {
      const { listItem: K, ...W } = d;
      x = n({
        node: W,
        index: h,
        isInline: !1,
        renderNode: n
      });
    }
    return Ge(
      O,
      {
        key: y,
        value: d,
        index: h,
        isInline: !1,
        renderNode: n
      },
      () => x
    );
  }
  function a(d, h, y) {
    const T = d.children.map(
      (x, K) => n({
        node: x._key ? x : { ...x, _key: `li-${h}-${K}` },
        index: K,
        isInline: !1,
        renderNode: n
      })
    ), R = e.list, O = (typeof R == "function" ? R : R[d.listItem]) || e.unknownList;
    if (O === e.unknownList) {
      const x = d.listItem || "bullet";
      t(wp(x), {
        nodeType: "listStyle",
        type: x
      });
    }
    return Ge(
      O,
      {
        key: y,
        value: d,
        index: h,
        isInline: !1,
        renderNode: n
      },
      () => T
    );
  }
  function i(d, h, y) {
    const { markDef: T, markType: R, markKey: O } = d, x = e.marks[R] || e.unknownMark, K = d.children.map(
      (W, w) => n({ node: W, index: w, isInline: !0, renderNode: n })
    );
    return x === e.unknownMark && t(yp(R), {
      nodeType: "mark",
      type: R
    }), Ge(
      x,
      {
        key: y,
        text: Gs(d),
        value: T,
        markType: R,
        markKey: O,
        renderNode: n
      },
      () => K
    );
  }
  function l(d, h, y, T) {
    const { _key: R, children: O, ...x } = gl({
      node: d,
      index: h,
      isInline: T,
      renderNode: n
    }), K = x.node.style || "normal", W = (typeof e.block == "function" ? e.block : e.block[K]) || e.unknownBlockStyle;
    return W === e.unknownBlockStyle && t(bp(K), {
      nodeType: "blockStyle",
      type: K
    }), Ge(W, { key: y, ...x, value: x.node, renderNode: n }, () => O);
  }
  function s(d, h) {
    if (d.text === `
`) {
      const y = e.hardBreak;
      return y ? Ge(y, { key: h }) : `
`;
    }
    return d.text;
  }
  function f(d, h, y, T) {
    const R = {
      value: d,
      isInline: T,
      index: h,
      renderNode: n
    };
    t(Zs(d._type), {
      nodeType: "block",
      type: d._type
    });
    const O = e.unknownType;
    return Ge(O, { key: y, ...R });
  }
  function c(d, h, y, T) {
    const R = {
      value: d,
      isInline: T,
      index: h,
      renderNode: n
    }, O = e.types[d._type];
    return O ? Ge(O, { key: y, ...R }) : void 0;
  }
  return n;
};
function gl(e) {
  const { node: t, index: n, isInline: o, renderNode: r } = e, a = sp(t).map(
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
const Go = /* @__PURE__ */ as({
  __name: "vue-portable-text",
  props: {
    value: {},
    components: {},
    onMissingComponent: { type: [Function, Boolean], default: () => _p },
    listNestingMode: {}
  },
  setup(e) {
    function t() {
    }
    const n = e, o = () => {
      const r = n.onMissingComponent || t, a = Array.isArray(n.value) ? n.value : [n.value], i = cp(a, n.listNestingMode || dp), l = n.components ? fp(hl, n.components) : hl, s = Rp(l, r);
      return i.map(
        (f, c) => s({ node: f, index: c, isInline: !1, renderNode: s })
      );
    };
    return (r, a) => (k(), et(o));
  }
}), Ip = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "tel:"]), Js = "https://portable-text.invalid/", Qs = () => typeof window > "u" ? void 0 : window.location, ec = (e, t = Qs()) => {
  if (typeof e != "string")
    return;
  const n = e.trim();
  if (n)
    try {
      const o = new URL(n, (t == null ? void 0 : t.href) || Js);
      return Ip.has(o.protocol) ? n : void 0;
    } catch {
      return;
    }
}, Pp = (e, t = Qs()) => {
  const n = ec(e, t);
  if (!n)
    return !1;
  try {
    const o = new URL(n, (t == null ? void 0 : t.href) || Js);
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
      const a = ec((o == null ? void 0 : o.href) || (o == null ? void 0 : o.link));
      if (!a)
        return (l = r.default) == null ? void 0 : l.call(r);
      const i = Pp(a);
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
    return (o, r) => (k(), et(Mt(Go), {
      value: e.value,
      components: n
    }, null, 8, ["value"]));
  }
}, zp = {}, Mp = {
  width: "8",
  height: "9",
  viewBox: "0 0 8 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Lp(e, t) {
  return k(), S("svg", Mp, t[0] || (t[0] = [
    C("path", {
      d: "M1.94627 0.529297L0.807578 1.73766H5.41928L0.28125 7.19009L1.08593 8.044L6.22395 2.59158V7.48547L7.36265 6.2771V0.529297H1.94627Z",
      fill: "var(--white)"
    }, null, -1)
  ]));
}
const Op = /* @__PURE__ */ vo(zp, [["render", Lp]]), Hp = { class: "border-stroke-light flex flex-nowrap justify-between border-t pt-[10px] sm:flex-wrap lg:flex-nowrap" }, Bp = { class: "text-right" }, Vp = ["href", "data-ph-entry", "onClick"], ml = {
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
    return (r, a) => (k(), S("article", {
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
      te(Ct, { value: e.description }, null, 8, ["value"]),
      C("section", Hp, [
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
            te(Op, { class: "absolute bottom-[.15em] -right-[.95em] h-[.7em] w-[.7em] sm:opacity-0 lg:group-hover:opacity-100" })
          ])
        ]),
        C("ul", Bp, [
          (k(!0), S(ye, null, bt(e.externalLinks, (i) => (k(), S("li", {
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
            }, ue(i.linkTitle), 9, Vp)
          ]))), 128))
        ])
      ])
    ], 2));
  }
}, Np = "cdn.sanity.io", Fp = (e) => {
  if (!e)
    return e;
  try {
    const t = new URL(e);
    return t.hostname !== Np ? e : (t.searchParams.has("dl") || t.searchParams.set("dl", ""), t.toString());
  } catch {
    return e;
  }
}, vl = {
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
    const n = e, o = t, r = Q(() => n.fileType.toLowerCase() === "markdown"), a = Q(() => r.value ? Fp(n.url) : n.url), i = () => {
      n.url && o("download");
    };
    return (l, s) => (k(), et(mo, {
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
      default: Wt(() => [
        Ke(ue(e.label), 1)
      ]),
      _: 1
    }, 8, ["variant", "href", "target", "download", "disabled", "data-ph-entry", "data-ph-file-type"]));
  }
}, Dp = ["src", "alt"], jp = {
  key: 0,
  class: "mt-[10px] flex shrink-0 flex-col gap-[10px]"
}, za = {
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
    const n = e, o = t, r = Q(() => {
      var w, P;
      return ((P = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : P.override) === !0;
    }), a = Q(() => {
      var w, P;
      return ((P = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : P.url) || "";
    }), i = Q(() => {
      var w, P, J;
      return ((P = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : P.altText) || `${((J = n.entry) == null ? void 0 : J.title) || "Article"} PDF preview`;
    }), l = Q(() => {
      var w, P, J, z;
      return r.value && ((P = (w = n.entry) == null ? void 0 : w.pdfPreview) != null && P.downloadUrl) ? n.entry.pdfPreview.downloadUrl : ((z = (J = n.entry) == null ? void 0 : J.pdf) == null ? void 0 : z.url) || "";
    }), s = Q(() => {
      var w, P;
      return ((P = (w = n.entry) == null ? void 0 : w.pdf) == null ? void 0 : P.pdfFilename) || "";
    }), f = Q(() => {
      var w, P;
      return ((P = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : P.downloadLabel) || `Download ${n.downloadFileType.toUpperCase()}`;
    }), c = Q(() => {
      var w, P;
      return ((P = (w = n.entry) == null ? void 0 : w.markdown) == null ? void 0 : P.url) || "";
    }), d = Q(() => {
      var w, P;
      return ((P = (w = n.entry) == null ? void 0 : w.markdown) == null ? void 0 : P.markdownFilename) || "";
    }), h = Q(() => {
      var w, P;
      return !!(l.value || (P = (w = n.entry) == null ? void 0 : w.pdfPreview) != null && P.downloadLabel);
    }), y = Q(() => !!c.value), T = Q(
      () => !!(r.value || a.value || h.value || y.value)
    ), R = Q(() => {
      var w, P;
      return {
        fileType: n.downloadFileType,
        fileName: s.value,
        mimeType: ((P = (w = n.entry) == null ? void 0 : w.pdf) == null ? void 0 : P.pdfMimeType) || "",
        url: l.value
      };
    }), O = Q(() => {
      var w, P;
      return {
        fileType: "markdown",
        fileName: d.value,
        mimeType: ((P = (w = n.entry) == null ? void 0 : w.markdown) == null ? void 0 : P.markdownMimeType) || "",
        url: c.value
      };
    }), x = {
      backgroundImage: "radial-gradient(circle, rgba(220, 220, 220, 0.7) 0.45px, transparent 0.55px)",
      backgroundPosition: "0 0, 1px 1px",
      backgroundSize: "2px 2px",
      opacity: 0.55
    }, K = {
      background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 28%, rgba(255, 255, 255, 0.38) 55%, rgba(255, 255, 255, 0.82) 76%, #fff 96%)"
    }, W = (w) => {
      w != null && w.url && o("download", w);
    };
    return (w, P) => {
      var J, z;
      return T.value ? (k(), S("div", {
        key: 0,
        class: ge(["flex w-full flex-col gap-[10px] text-m text-black lg:-mx-3 lg:w-[calc(100%+var(--fontSize)*1.5)]", { "h-full": e.fill }])
      }, [
        a.value || h.value ? (k(), S("aside", {
          key: 0,
          class: ge(["border-stroke-light flex w-full flex-col overflow-hidden rounded-lg border bg-white p-[10px]", { "h-full": e.fill }])
        }, [
          C("div", {
            class: ge(["relative w-full overflow-hidden rounded-[4px] bg-[#F2F2F2]", e.fill ? "min-h-0 flex-1" : "aspect-square"])
          }, [
            a.value ? (k(), S("img", {
              key: 0,
              src: a.value,
              alt: i.value,
              loading: "lazy",
              class: ge(["absolute inset-0 h-full w-full object-top", r.value ? "object-contain" : "object-cover"])
            }, null, 10, Dp)) : ne("", !0),
            r.value ? ne("", !0) : (k(), S("div", {
              key: 1,
              class: "pointer-events-none absolute inset-0",
              style: x
            })),
            r.value ? ne("", !0) : (k(), S("div", {
              key: 2,
              class: "pointer-events-none absolute inset-0",
              style: K
            }))
          ], 2),
          h.value ? (k(), S("div", jp, [
            te(vl, {
              class: "shrink-0",
              "entry-url": (J = e.entry) == null ? void 0 : J.url,
              label: f.value,
              url: l.value,
              filename: s.value,
              "file-type": "pdf",
              onDownload: P[0] || (P[0] = (U) => W(R.value))
            }, null, 8, ["entry-url", "label", "url", "filename"])
          ])) : ne("", !0)
        ], 2)) : ne("", !0),
        y.value ? (k(), et(vl, {
          key: 1,
          class: "shrink-0",
          variant: "light",
          "entry-url": (z = e.entry) == null ? void 0 : z.url,
          label: "Export Markdown",
          url: c.value,
          filename: d.value,
          "file-type": "markdown",
          onDownload: P[1] || (P[1] = (U) => W(O.value))
        }, null, 8, ["entry-url", "url", "filename"])) : ne("", !0)
      ], 2)) : ne("", !0);
    };
  }
}, Up = { class: "hidden w-full min-w-0 basis-full flex-col text-m text-[rgb(244_244_244)] sm:flex sm:basis-col1" }, Kp = {
  key: 0,
  class: "border-stroke-light w-full border-t pb-[10px] pt-[10px] uppercase"
}, qp = {
  __name: "AnnotationsRelated",
  props: {
    entry: Object,
    loaded: { type: Boolean, default: !1 },
    loadError: { type: Boolean, default: !1 },
    downloadFileType: { type: String, default: "pdf" }
  },
  emits: ["download"],
  setup(e) {
    const t = e, n = Q(
      () => {
        var o, r, a, i, l, s, f, c, d, h;
        return !!(((r = (o = t.entry) == null ? void 0 : o.pdfPreview) == null ? void 0 : r.override) === !0 || (i = (a = t.entry) == null ? void 0 : a.pdfPreview) != null && i.url || (s = (l = t.entry) == null ? void 0 : l.pdf) != null && s.url || (c = (f = t.entry) == null ? void 0 : f.markdown) != null && c.url || (h = (d = t.entry) == null ? void 0 : d.pdfPreview) != null && h.downloadLabel);
      }
    );
    return (o, r) => (k(), S("section", Up, [
      n.value ? (k(), S("h3", Kp, "PDF")) : ne("", !0),
      n.value ? (k(), et(za, {
        key: 1,
        entry: e.entry,
        "download-file-type": e.downloadFileType,
        class: "mb-[10px] shrink-0",
        onDownload: r[0] || (r[0] = (a) => o.$emit("download", a))
      }, null, 8, ["entry", "download-file-type"])) : ne("", !0)
    ]));
  }
}, Wp = { class: "grid w-full grid-cols-1 lg:grid-cols-9 lg:gap-x-9" }, Xp = { class: "lg:-mx-3 lg:col-span-6 lg:col-start-1" }, Yp = {
  __name: "ExploreAllArticlesButton",
  setup(e) {
    return (t, n) => (k(), S("div", Wp, [
      C("div", Xp, [
        te(mo, {
          variant: "light",
          size: "large",
          href: "https://journal.antikythera.org/articles",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-related-articles",
          "data-ph-action": "explore-all-articles-click"
        }, {
          default: Wt(() => n[0] || (n[0] = [
            Ke(" Explore All Articles ")
          ])),
          _: 1
        })
      ])
    ]));
  }
}, tc = (e) => {
  if (!e) return "";
  const t = new Date(e);
  if (Number.isNaN(t.getTime())) return "";
  const n = String(t.getUTCMonth() + 1).padStart(2, "0"), o = String(t.getUTCDate()).padStart(2, "0");
  return `${n}.${o}.${t.getUTCFullYear()}`;
}, Gp = { class: "border-stroke-light relative flex h-full w-full flex-col gap-[10px] overflow-hidden rounded-lg border bg-black p-[10px] text-m text-[rgb(244_244_244)] lg:-mx-3 lg:w-[calc(100%+var(--fontSize)*1.5)]" }, Zp = ["href", "data-ph-related-entry"], Jp = { class: "relative flex h-full w-full flex-col gap-[10px] lg:flex-row lg:items-stretch" }, Qp = {
  key: 0,
  class: "aspect-square w-full overflow-hidden rounded-[4px] bg-black lg:w-auto lg:flex-1"
}, eh = ["src", "alt"], th = ["src", "alt"], nh = { class: "flex w-full flex-col gap-[10px] lg:flex-1" }, oh = { class: "relative z-20 pointer-events-none flex min-h-[calc(1.28em*3)] flex-col" }, rh = { class: "uppercase" }, ah = { key: 0 }, ih = ["href", "data-ph-related-entry", "onClick"], lh = { key: 1 }, sh = { key: 1 }, ch = { key: 2 }, uh = ["href", "data-ph-related-entry", "onClick"], dh = { key: 1 }, fh = {
  key: 0,
  class: "[&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:opacity-60 [&_p+p]:mt-[10px] lg:line-clamp-4 lg:min-h-[calc(1.28em*4)] xl:line-clamp-6 xl:min-h-[calc(1.28em*6)]"
}, ph = { class: "relative z-20 mt-auto flex w-full flex-col gap-[10px]" }, hh = {
  key: 0,
  class: "flex w-full items-center justify-between gap-2"
}, gh = { class: "min-w-0 truncate whitespace-nowrap" }, mh = ["href", "data-ph-related-entry"], vh = { key: 1 }, yh = {
  key: 0,
  class: "shrink-0 text-right text-[rgb(244_244_244_/_0.5)]"
}, bh = {
  __name: "RelatedArticleCell",
  props: {
    entry: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = (d) => {
      if (d)
        try {
          return new URL(d, window.location.origin).hostname;
        } catch {
          return;
        }
    }, o = Q(() => {
      var d, h;
      return (d = t.entry) != null && d.externalLink ? t.entry.externalLink : (h = t.entry) != null && h.url ? `https://${t.entry.url}.antikythera.org` : void 0;
    }), r = (d) => !d || d._type !== "block" ? !1 : (d.children ?? []).every((y) => !(y != null && y.text) || y.text.trim() === ""), a = (d) => {
      if (!Array.isArray(d)) return [];
      let h = 0, y = d.length;
      for (; h < y && r(d[h]); ) h++;
      for (; y > h && r(d[y - 1]); ) y--;
      return d.slice(h, y);
    }, i = Q(
      () => {
        var d, h, y;
        return a(((h = (d = t.entry) == null ? void 0 : d.shortIntroduction) == null ? void 0 : h.length) > 0 ? t.entry.shortIntroduction : (y = t.entry) == null ? void 0 : y.introduction);
      }
    ), l = () => {
      var d, h, y, T, R, O, x;
      se("antikythera related entry clicked", {
        related_entry_title: ((d = t.entry) == null ? void 0 : d.title) || void 0,
        related_entry_url: ((h = t.entry) == null ? void 0 : h.url) || void 0,
        related_entry_domain: n(o.value),
        related_entry_has_external_link: !!((y = t.entry) != null && y.externalLink),
        related_entry_authors_count: ((R = (T = t.entry) == null ? void 0 : T.authors) == null ? void 0 : R.length) || 0,
        related_entry_designers_count: ((x = (O = t.entry) == null ? void 0 : O.designers) == null ? void 0 : x.length) || 0
      });
    }, s = (d, h) => {
      var y, T;
      se("antikythera related entry author link clicked", {
        related_entry_title: ((y = t.entry) == null ? void 0 : y.title) || void 0,
        related_entry_url: ((T = t.entry) == null ? void 0 : T.url) || void 0,
        author_name: (d == null ? void 0 : d.title) || void 0,
        author_role: h,
        author_external_domain: n(d == null ? void 0 : d.externalLink)
      });
    }, f = () => {
      var d, h, y, T;
      se("antikythera related entry doi link clicked", {
        related_entry_title: ((d = t.entry) == null ? void 0 : d.title) || void 0,
        related_entry_url: ((h = t.entry) == null ? void 0 : h.url) || void 0,
        doi: ((y = t.entry) == null ? void 0 : y.doi) || void 0,
        doi_domain: n((T = t.entry) == null ? void 0 : T.doiUrl)
      });
    }, c = Q(() => {
      var d;
      return tc((d = t.entry) == null ? void 0 : d.releaseDate);
    });
    return (d, h) => {
      var y, T, R, O, x, K, W, w, P, J, z, U, j, Y, oe, F, ee;
      return k(), S("article", Gp, [
        C("a", {
          class: "absolute inset-0 z-10",
          href: o.value,
          target: "_blank",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-related-entry",
          "data-ph-action": "related-entry-click",
          "data-ph-related-entry": (y = e.entry) == null ? void 0 : y.url,
          onClick: l
        }, null, 8, Zp),
        C("div", Jp, [
          e.entry.featuredImage || e.entry.featuredImageSquare ? (k(), S("figure", Qp, [
            (R = (T = e.entry) == null ? void 0 : T.featuredImageSquare) != null && R.url ? (k(), S("img", {
              key: 0,
              src: e.entry.featuredImageSquare.url,
              alt: ((x = (O = e.entry) == null ? void 0 : O.featuredImageSquare) == null ? void 0 : x.alt) || ((K = e.entry) == null ? void 0 : K.title) || "",
              class: "h-full w-full object-cover",
              loading: "lazy"
            }, null, 8, eh)) : (w = (W = e.entry) == null ? void 0 : W.featuredImage) != null && w.url ? (k(), S("img", {
              key: 1,
              src: e.entry.featuredImage.url,
              alt: ((J = (P = e.entry) == null ? void 0 : P.featuredImage) == null ? void 0 : J.alt) || ((z = e.entry) == null ? void 0 : z.title) || "",
              class: "h-full w-full object-cover",
              loading: "lazy"
            }, null, 8, th)) : ne("", !0)
          ])) : ne("", !0),
          C("div", nh, [
            C("div", oh, [
              C("h2", rh, ue(e.entry.title), 1),
              C("h3", null, [
                ((j = (U = e.entry) == null ? void 0 : U.authors) == null ? void 0 : j.length) > 0 ? (k(), S("span", ah, [
                  h[0] || (h[0] = Ke(" by ")),
                  (k(!0), S(ye, null, bt(e.entry.authors, (V, G) => {
                    var q;
                    return k(), S(ye, {
                      key: `author-${V.title}-${G}`
                    }, [
                      V.externalLink && V.externalLink != "" ? (k(), S("a", {
                        key: 0,
                        target: "_blank",
                        class: "relative pointer-events-auto underline decoration-1 underline-offset-2 hover:opacity-60",
                        href: V.externalLink,
                        "data-ph-capture": "",
                        "data-ph-component": "antikythera-related-entry",
                        "data-ph-action": "related-author-link-click",
                        "data-ph-related-entry": (q = e.entry) == null ? void 0 : q.url,
                        "data-ph-person-role": "author",
                        onClick: zo((le) => s(V, "author"), ["stop"])
                      }, ue(V.title), 9, ih)) : (k(), S("span", lh, ue(V.title), 1)),
                      Ke(ue(e.entry.authors.length > 1 ? G == e.entry.authors.length - 2 ? " & " : G < e.entry.authors.length - 2 ? ", " : "" : ""), 1)
                    ], 64);
                  }), 128))
                ])) : (k(), S("span", sh, h[1] || (h[1] = [
                  C("br", null, null, -1),
                  Ke(" ")
                ]))),
                ((oe = (Y = e.entry) == null ? void 0 : Y.designers) == null ? void 0 : oe.length) > 0 ? (k(), S("span", ch, [
                  h[2] || (h[2] = C("br", null, null, -1)),
                  h[3] || (h[3] = Ke(" with ")),
                  (k(!0), S(ye, null, bt(e.entry.designers, (V, G) => {
                    var q;
                    return k(), S(ye, {
                      key: `designer-${V.title}-${G}`
                    }, [
                      V.externalLink && V.externalLink != "" ? (k(), S("a", {
                        key: 0,
                        target: "_blank",
                        class: "pointer-events-auto underline decoration-1 underline-offset-2 hover:opacity-60",
                        href: V.externalLink,
                        "data-ph-capture": "",
                        "data-ph-component": "antikythera-related-entry",
                        "data-ph-action": "related-author-link-click",
                        "data-ph-related-entry": (q = e.entry) == null ? void 0 : q.url,
                        "data-ph-person-role": "designer",
                        onClick: zo((le) => s(V, "designer"), ["stop"])
                      }, ue(V.title), 9, uh)) : (k(), S("span", dh, ue(V.title), 1)),
                      Ke(ue(e.entry.designers.length > 1 ? G == e.entry.designers.length - 2 ? " & " : G < e.entry.designers.length - 2 ? ", " : "" : ""), 1)
                    ], 64);
                  }), 128))
                ])) : ne("", !0)
              ])
            ]),
            i.value.length > 0 ? (k(), S("section", fh, [
              te(Ct, { value: i.value }, null, 8, ["value"])
            ])) : ne("", !0),
            C("div", ph, [
              e.entry.doi && e.entry.doi != "" || c.value ? (k(), S("section", hh, [
                C("section", {
                  class: ge(["flex min-w-0 items-center gap-2 pr-3", { "opacity-0": !e.entry.doi || e.entry.doi == "" }])
                }, [
                  te(ta, { class: "h-6 w-4 shrink-0 text-[rgb(244_244_244)]" }),
                  C("p", gh, [
                    h[4] || (h[4] = Ke(" DOI ")),
                    e.entry.doiUrl ? (k(), S("a", {
                      key: 0,
                      href: e.entry.doiUrl,
                      target: "_blank",
                      class: "pointer-events-auto cursor-crosshair hover:opacity-60",
                      "data-ph-capture": "",
                      "data-ph-component": "antikythera-related-entry",
                      "data-ph-action": "related-doi-link-click",
                      "data-ph-related-entry": (F = e.entry) == null ? void 0 : F.url,
                      onClick: zo(f, ["stop"])
                    }, ue(e.entry.doi ? e.entry.doi : " "), 9, mh)) : (k(), S("span", vh, ue(e.entry.doi ? e.entry.doi : " "), 1))
                  ])
                ], 2),
                c.value ? (k(), S("p", yh, ue(c.value), 1)) : ne("", !0)
              ])) : ne("", !0),
              te(mo, {
                variant: "light",
                class: "relative pointer-events-auto",
                href: o.value,
                target: "_blank",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-related-entry",
                "data-ph-action": "related-entry-click",
                "data-ph-related-entry": (ee = e.entry) == null ? void 0 : ee.url,
                onClick: zo(l, ["stop"])
              }, {
                default: Wt(() => h[5] || (h[5] = [
                  Ke(" Launch ")
                ])),
                _: 1
              }, 8, ["href", "data-ph-related-entry"])
            ])
          ])
        ])
      ]);
    };
  }
}, wh = {
  key: 0,
  class: "text-m text-[rgb(244_244_244)]"
}, xh = { class: "mobile-expanded-page-header grid w-full grid-cols-1 gap-[10px] pb-[10px] uppercase lg:grid-cols-9 lg:gap-x-9" }, _h = { class: "border-stroke-light border-t pt-[10px] lg:col-span-6 lg:col-start-1" }, kh = ["aria-expanded", "data-ph-entry"], Ch = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Sh = {
  key: 0,
  class: "border-stroke-light hidden border-t pt-[10px] lg:col-span-3 lg:col-start-7 lg:block"
}, Th = {
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
    const n = e, o = t, r = Q(() => !n.loaded && !n.loadError), a = Q(() => {
      var f;
      return ((f = n.entry) == null ? void 0 : f.relatedEntries) || [];
    }), i = (f) => {
      var c, d, h, y, T;
      return !!(((c = f == null ? void 0 : f.pdfPreview) == null ? void 0 : c.override) === !0 || (d = f == null ? void 0 : f.pdfPreview) != null && d.url || (h = f == null ? void 0 : f.pdf) != null && h.url || (y = f == null ? void 0 : f.pdfPreview) != null && y.downloadLabel || (T = f == null ? void 0 : f.markdown) != null && T.url);
    }, l = Q(() => a.value.some(i)), s = () => {
      var c, d;
      const f = !n.expanded;
      o("toggle", { open: f }), se("antikythera section toggled", {
        antikythera_entry: ((c = n.entry) == null ? void 0 : c.url) || void 0,
        entry_title: ((d = n.entry) == null ? void 0 : d.title) || void 0,
        section_name: "related-articles",
        section_open: f,
        related_entries_count: a.value.length
      });
    };
    return (f, c) => {
      var d;
      return r.value || a.value.length > 0 ? (k(), S("section", wh, [
        C("header", xh, [
          C("div", _h, [
            C("h3", null, [
              C("button", {
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
                c[0] || (c[0] = C("span", null, "Related Articles", -1)),
                C("span", Ch, ue(e.expanded ? "Collapse" : "Expand"), 1)
              ], 8, kh)
            ])
          ]),
          l.value ? (k(), S("div", Sh, c[1] || (c[1] = [
            C("h3", null, "Related PDFs", -1)
          ]))) : ne("", !0)
        ]),
        a.value.length > 0 ? (k(), S("section", {
          key: 0,
          class: ge(["flex w-full flex-col gap-[10px]", { "hidden sm:flex": !e.expanded }])
        }, [
          (k(!0), S(ye, null, bt(a.value, (h) => (k(), S("article", {
            key: h._id || h.url || h.title,
            class: "grid w-full grid-cols-1 gap-[10px] lg:grid-cols-9 lg:gap-x-9"
          }, [
            te(bh, {
              entry: h,
              class: "lg:col-span-6 lg:col-start-1"
            }, null, 8, ["entry"]),
            l.value ? (k(), et(za, {
              key: 0,
              entry: h,
              fill: "",
              class: "hidden h-full min-h-[220px] lg:col-span-3 lg:col-start-7 lg:flex"
            }, null, 8, ["entry"])) : ne("", !0)
          ]))), 128)),
          te(Yp)
        ], 2)) : ne("", !0),
        c[2] || (c[2] = C("div", { class: "min-h-0 flex-1" }, null, -1))
      ])) : ne("", !0);
    };
  }
}, Eh = {}, Ah = {
  width: "26",
  height: "23",
  viewBox: "0 0 26 23",
  fill: "none",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg"
};
function $h(e, t) {
  return k(), S("svg", Ah, t[0] || (t[0] = [
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
const Rh = /* @__PURE__ */ vo(Eh, [["render", $h]]), Ih = { class: "about-section relative w-full pt-[10px] text-m text-white sm:pt-0" }, Ph = { class: "about-content grid w-full grid-cols-1 lg:grid-cols-9 lg:gap-x-9" }, zh = { class: "lg:col-span-6 lg:col-start-1 lg:pb-[48px]" }, Mh = { class: "flex flex-col gap-y-[10px]" }, Lh = { class: "border-stroke-light -mx-3 flex flex-col rounded-lg border bg-black p-3" }, Oh = { class: "about-preview pb-[10px] uppercase" }, Hh = { class: "hidden shrink-0 text-[rgb(244_244_244_/_0.5)] sm:inline" }, Bh = { class: "richtext relative h-full w-full grow" }, Vh = { class: "border-stroke-light -mx-3 flex h-full grow flex-col rounded-lg border bg-black p-3 lg:basis-[calc(70vh-7.5rem)]" }, Nh = { class: "grid w-full grid-cols-1 grid-rows-[auto_auto] gap-6 md:grid-cols-[repeat(2,minmax(auto,1fr))]" }, Fh = { class: "relative opacity-40" }, Dh = { class: "min-h-[1.28em]" }, jh = { class: "grid grid-cols-2 gap-[10px] pt-[10px] lg:sticky lg:top-0 lg:col-span-3 lg:col-start-7 lg:flex lg:h-fit lg:flex-col lg:self-start lg:pt-0" }, Uh = { class: "w-full" }, Kh = { class: "flex justify-between pr-[48px]" }, qh = {
  key: 0,
  class: "border-stroke-dark col-span-2 -mx-3 flex flex-col gap-[10px] overflow-hidden rounded-lg border bg-white p-[10px] text-black"
}, Wh = { class: "[&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:opacity-60 [&_p+p]:mt-5" }, Xh = {
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
      o("toggle", { open: f }), se("antikythera section toggled", {
        section_name: "about",
        section_open: f
      });
    }, a = () => {
      se("antikythera external link clicked", {
        link_kind: "antikythera-site",
        link_domain: "antikythera.org"
      });
    }, i = () => {
      se("antikythera external link clicked", {
        link_kind: "read-more",
        link_title: "Read More",
        link_domain: "antikythera.org"
      });
    }, l = () => {
      se("antikythera external link clicked", {
        link_kind: "substack",
        link_domain: "antikythera.substack.com"
      });
    }, s = (f, c) => {
      var d, h, y, T;
      return f.externalTitle && c === 0 ? f.externalTitle : c !== 0 && ((h = (d = f.creditLine) == null ? void 0 : d[c]) != null && h.title) ? f.creditLine[c].title : !f.externalTitle && c === 0 && ((T = (y = f.creditLine) == null ? void 0 : y[c]) == null ? void 0 : T.title) || "";
    };
    return (f, c) => {
      var d, h;
      return k(), S("section", Ih, [
        C("div", Ph, [
          C("section", zh, [
            C("div", Mh, [
              C("article", Lh, [
                C("header", Oh, [
                  C("h3", null, [
                    C("button", {
                      class: "flex w-full items-center justify-between gap-[20px] text-left uppercase",
                      type: "button",
                      onClick: r
                    }, [
                      c[0] || (c[0] = C("span", null, "About", -1)),
                      C("span", Hh, ue(e.expanded ? "Collapse" : "Expand"), 1)
                    ])
                  ])
                ]),
                C("div", Bh, [
                  ((d = e.about.text) == null ? void 0 : d.length) > 0 ? (k(), et(Ct, {
                    key: 0,
                    value: e.about.text
                  }, null, 8, ["value"])) : ne("", !0)
                ])
              ]),
              C("article", Vh, [
                c[1] || (c[1] = C("h3", { class: "mb-[10px] uppercase" }, "Contributors", -1)),
                C("div", Nh, [
                  (k(!0), S(ye, null, bt(e.about.credits, (y, T) => (k(), S("div", {
                    key: y._key || T,
                    class: "lg:last:pb-4"
                  }, [
                    (k(!0), S(ye, null, bt(y.creditLine, (R, O) => (k(), S("div", {
                      key: R._key || O,
                      class: "grid grid-cols-2 gap-x-6"
                    }, [
                      C("p", Fh, [
                        C("span", {
                          class: ge({
                            "absolute left-0 block w-full bg-black": O === 0 && y.externalTitle
                          })
                        }, ue(s(y, O)), 3)
                      ]),
                      C("p", Dh, ue(R.name || " "), 1)
                    ]))), 128))
                  ]))), 128))
                ])
              ])
            ])
          ]),
          C("aside", jh, [
            C("a", {
              href: "https://antikythera.org/",
              target: "_blank",
              rel: "noopener noreferrer",
              class: "border-stroke-dark relative col-span-2 -mx-3 overflow-y-hidden rounded-lg border bg-white p-3 pb-0 text-black",
              onClick: a
            }, [
              C("header", Uh, [
                C("div", Kh, [
                  te(Us, {
                    "show-journal": !1,
                    class: "h-[23px] w-[121px] shrink-0"
                  })
                ]),
                c[2] || (c[2] = C("section", { class: "pt-[20px] pb-[10px]" }, [
                  C("p", null, "A think tank for planetary computation"),
                  C("p", null, "& the evolution of intelligence")
                ], -1))
              ])
            ]),
            ((h = e.about.asideText) == null ? void 0 : h.length) > 0 ? (k(), S("article", qh, [
              C("div", Wh, [
                te(Ct, {
                  value: e.about.asideText
                }, null, 8, ["value"])
              ]),
              te(mo, {
                variant: "dark",
                href: "https://antikythera.org/",
                onClick: i
              }, {
                default: Wt(() => c[3] || (c[3] = [
                  Ke("Read More")
                ])),
                _: 1
              })
            ])) : ne("", !0),
            C("a", {
              href: "https://antikythera.substack.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              class: "border-stroke-light col-span-2 -mx-3 flex items-center justify-between gap-[10px] overflow-hidden rounded-lg border bg-[#ff5a01] p-[10px] text-[#f4f4f4] transition-transform duration-300 ease-out hover:scale-[0.99] hover:duration-100",
              onClick: l
            }, [
              c[4] || (c[4] = C("p", { class: "uppercase" }, "Read Antikythera on Substack", -1)),
              te(Rh, { class: "h-[23px] w-auto shrink-0" })
            ])
          ])
        ])
      ]);
    };
  }
}, Yh = 220, Gh = 360, Zh = 240, Jh = 320, Qh = 180, eg = 300, Dt = X(!1), en = X(1), Pn = X(1), nc = X(1), No = X(1), Fo = X(1);
let Ut = 0, Kt = 0;
const tg = () => {
  Ut && (clearTimeout(Ut), Ut = 0), Kt && (clearTimeout(Kt), Kt = 0);
}, ng = (e, t = {}) => {
  if (!(Dt.value && No.value == e)) {
    if (!Dt.value && en.value == e && Pn.value == e) {
      No.value = e;
      return;
    }
    if (tg(), nc.value = en.value, No.value = e, e == 2 && (en.value == 1 || en.value == 0))
      Pn.value = 2, Dt.value = !0, Ut = setTimeout(() => {
        Ut = 0, en.value = e;
      }, Yh), Kt = setTimeout(() => {
        Kt = 0, Dt.value = !1, Fo.value = e;
      }, Gh);
    else if (e < 2 && Pn.value == 2) {
      const n = t.collapseCommitMs ?? Zh, o = t.collapseEndMs ?? Math.max(n + 80, Jh);
      Dt.value = !0, Ut = setTimeout(() => {
        Ut = 0, Pn.value = e, en.value = e;
      }, n), Kt = setTimeout(() => {
        Kt = 0, Dt.value = !1, Fo.value = e;
      }, o);
    } else
      Dt.value = !0, Ut = setTimeout(() => {
        Ut = 0, Pn.value = e, en.value = e;
      }, Qh), Kt = setTimeout(() => {
        Kt = 0, Dt.value = !1, Fo.value = e;
      }, eg);
  }
};
function oc() {
  return {
    view: en,
    viewChange: Fo,
    transitioning: Dt,
    tempView: Pn,
    previousView: nc,
    requestedView: No,
    setView: ng
  };
}
const og = { key: 0 }, rg = ["href", "data-ph-annotation-id", "data-ph-annotation-type"], ag = { key: 2 }, ig = ["data-ph-annotation-id", "data-ph-annotation-type"], lg = {
  key: 0,
  class: "mb-3"
}, sg = ["src", "alt"], cg = {
  key: 0,
  class: "mt-1 text-m md:mt-2"
}, ug = ["href", "data-ph-annotation-id", "data-ph-annotation-type"], dg = { key: 1 }, fg = { class: "richtext pb-3" }, pg = {
  key: 2,
  class: "pb-3"
}, hg = ["src", "alt"], gg = {
  key: 0,
  class: "text-s sm:text-m mt-1 sm:mt-2"
}, mg = { class: "mb-3 font-bold" }, vg = ["data-ph-annotation-id", "data-ph-annotation-type", "data-ph-annotation-index"], yg = { class: "richtext pb-3" }, bg = {
  key: 0,
  class: "pb-3"
}, rc = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    const n = e, o = t, r = Q(() => {
      const a = n.annotation.attribution && n.annotation.attribution != "";
      if (n.annotation.annotationVisibility == "forceHide")
        return !1;
      if (n.annotation.annotationVisibility == "forceShow")
        return a;
      if (n.annotation.annotationVisibility == "default")
        return n.articleAttributionVisibility == "forceHide" ? !1 : a;
    });
    return (a, i) => {
      var l, s, f, c, d, h, y, T, R, O, x, K;
      return e.variant == "floating" ? (k(), S("div", Jr({ key: 0 }, a.$attrs, { class: "relative overflow-hidden rounded-lg border border-stroke-light bg-black px-3 pt-3 text-m text-white" }), [
        C("h2", {
          class: ge(["mb-3 font-bold", { "pr-8": e.dismissible }])
        }, [
          e.annotation.annotationType == "related" ? (k(), S("span", og, "Related")) : e.annotation.externalLink && e.annotation.externalLink != "" ? (k(), S("a", {
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
          }, ue(e.annotation.title), 9, rg)) : (k(), S("span", ag, ue(e.annotation.title), 1))
        ], 2),
        e.dismissible ? (k(), S("button", {
          key: 0,
          class: "absolute top-3 right-3 z-10 text-s",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-annotation",
          "data-ph-action": "annotation-card-close",
          "data-ph-annotation-id": e.annotation.id,
          "data-ph-annotation-type": e.annotation.annotationType,
          onClick: i[1] || (i[1] = (W) => o("close"))
        }, " Close ", 8, ig)) : ne("", !0),
        C("div", null, [
          (l = e.annotation.featuredImage) != null && l.url ? (k(), S("figure", lg, [
            C("img", {
              src: e.annotation.featuredImage.url,
              alt: e.annotation.featuredImage.alt,
              class: "max-h-[15svh] max-w-full lg:max-h-[20svh]"
            }, null, 8, sg),
            e.annotation.featuredImage.caption && e.annotation.featuredImage.caption != "" ? (k(), S("figcaption", cg, [
              te(Ct, {
                value: e.annotation.featuredImage.caption
              }, null, 8, ["value"])
            ])) : ne("", !0)
          ])) : ne("", !0),
          e.annotation.annotationType == "related" ? (k(), S("h3", {
            key: 1,
            class: ge(["font-bold", { "pr-8": e.dismissible }])
          }, [
            e.annotation.externalLink && e.annotation.externalLink != "" ? (k(), S("a", {
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
            }, ue(e.annotation.title), 9, ug)) : (k(), S("span", dg, ue(e.annotation.title), 1))
          ], 2)) : ne("", !0),
          C("div", fg, [
            te(Mt(Go), {
              value: e.annotation.content
            }, null, 8, ["value"])
          ]),
          r.value ? (k(), S("div", pg, " — " + ue(e.annotation.attribution), 1)) : ne("", !0)
        ])
      ], 16)) : (k(), S("article", Jr({ key: 1 }, a.$attrs, { class: "border-stroke-light relative mb-[10px] flex min-w-full flex-wrap overflow-hidden rounded-lg border bg-black px-3 pt-3 text-m text-white last:mb-0" }), [
        (s = e.annotation.featuredImage) != null && s.url || (f = e.annotation.featuredImageSquare) != null && f.url ? (k(), S("figure", {
          key: 0,
          class: ge([{ "w-1/2 basis-1/2 pr-3 mb-4": !e.vertical }, { "w-3/4 basis-3/4 pr-3 mb-4": e.vertical }])
        }, [
          C("img", {
            src: ((c = e.annotation.featuredImageSquare) == null ? void 0 : c.url) ?? ((d = e.annotation.featuredImage) == null ? void 0 : d.url),
            alt: ((h = e.annotation.featuredImageSquare) == null ? void 0 : h.alt) ?? ((y = e.annotation.featuredImage) == null ? void 0 : y.alt)
          }, null, 8, hg),
          (T = e.annotation.featuredImage) != null && T.caption && e.annotation.featuredImage.caption != "" ? (k(), S("figcaption", gg, [
            te(Ct, {
              value: e.annotation.featuredImage.caption
            }, null, 8, ["value"])
          ])) : ne("", !0)
        ], 2)) : ne("", !0),
        C("section", {
          class: ge([
            { "w-1/2 basis-1/2 md:pl-3": (((R = e.annotation.featuredImage) == null ? void 0 : R.url) || ((O = e.annotation.featuredImageSquare) == null ? void 0 : O.url)) && !e.vertical },
            { "w-full basis-full": !((x = e.annotation.featuredImage) != null && x.url) && !((K = e.annotation.featuredImageSquare) != null && K.url) || e.vertical }
          ])
        }, [
          C("h2", mg, [
            C("button", {
              class: "text-left cursor-pointer hover:opacity-60",
              "data-ph-capture": "",
              "data-ph-component": "antikythera-annotation",
              "data-ph-action": "annotation-inline-jump",
              "data-ph-annotation-id": e.annotation.id,
              "data-ph-annotation-type": e.annotation.annotationType,
              "data-ph-annotation-index": e.index,
              onClick: i[3] || (i[3] = (W) => o("titleClick", e.annotation))
            }, ue(e.annotation.title), 9, vg)
          ]),
          C("div", yg, [
            te(Ct, {
              value: e.annotation.content
            }, null, 8, ["value"])
          ]),
          r.value ? (k(), S("div", bg, " — " + ue(e.annotation.attribution), 1)) : ne("", !0)
        ], 2)
      ], 16));
    };
  }
}), wg = {
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
    const t = e, { setView: n } = oc(), o = (l) => {
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
      se("antikythera annotation inline jump clicked", r(l)), n(0), window.requestAnimationFrame(() => {
        const s = a(l.id);
        if (!s) {
          console.warn(`antikythera annotation jump skipped: #${l.id} was not found`), se("antikythera annotation element not found", r(l));
          return;
        }
        const f = s.getBoundingClientRect().top + window.scrollY - 10;
        window.scrollTo({ top: f, behavior: "smooth" });
      });
    };
    return (l, s) => (k(), et(rc, {
      annotation: e.annotation,
      articleAttributionVisibility: e.articleAttributionVisibility,
      index: e.index,
      vertical: e.vertical,
      variant: "inline",
      onTitleClick: i
    }, null, 8, ["annotation", "articleAttributionVisibility", "index", "vertical"]));
  }
}, xg = { class: "w-full min-w-0 basis-full text-m text-[rgb(244_244_244)] sm:basis-col2" }, _g = { class: "flex flex-col border-t border-stroke-light" }, kg = {
  key: 0,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, Cg = { class: "mobile-expanded-entry-header" }, Sg = ["data-ph-entry"], Tg = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Eg = {
  key: 0,
  class: "richtext pt-[10px]"
}, Ag = {
  key: 1,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, $g = { class: "mobile-expanded-entry-header" }, Rg = ["data-ph-entry"], Ig = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Pg = {
  key: 0,
  class: "richtext pt-[10px]"
}, zg = {
  key: 2,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, Mg = { class: "mobile-expanded-entry-header" }, Lg = ["data-ph-entry"], Og = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Hg = {
  key: 0,
  class: "pt-[10px]"
}, Bg = {
  key: 3,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, Vg = { class: "mobile-expanded-entry-header" }, Ng = ["data-ph-entry"], Fg = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Dg = {
  key: 0,
  class: "richtext pt-[10px]"
}, jg = {
  key: 4,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, Ug = { class: "mobile-expanded-entry-header" }, Kg = ["data-ph-entry"], qg = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Wg = {
  key: 0,
  class: "richtext pt-[10px]"
}, Xg = {
  __name: "EntryMain",
  props: {
    entry: Object,
    loaded: { type: Boolean, default: !1 },
    loadError: { type: Boolean, default: !1 }
  },
  emits: ["section-collapse"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = X(!0), a = X(!1), i = X(!1), l = X(!1), s = X(!0), f = Q(() => !n.loaded && !n.loadError), c = (w) => Array.isArray(w) && w.length > 0, d = (w) => f.value || c(w), h = Q(() => {
      var w, P, J;
      return f.value || ((w = n.entry) == null ? void 0 : w.annotationsCount) > 0 || ((J = (P = n.entry) == null ? void 0 : P.annotations) == null ? void 0 : J.length) > 0;
    }), y = (w, P) => {
      var J, z, U, j, Y, oe, F, ee, V, G;
      return {
        antikythera_entry: ((J = n.entry) == null ? void 0 : J.url) || void 0,
        entry_title: ((z = n.entry) == null ? void 0 : z.title) || void 0,
        section_name: w,
        section_open: P,
        annotations_count: ((j = (U = n.entry) == null ? void 0 : U.annotations) == null ? void 0 : j.length) || 0,
        related_entries_count: ((oe = (Y = n.entry) == null ? void 0 : Y.relatedEntries) == null ? void 0 : oe.length) || 0,
        authors_count: ((ee = (F = n.entry) == null ? void 0 : F.authors) == null ? void 0 : ee.length) || 0,
        designers_count: ((G = (V = n.entry) == null ? void 0 : V.designers) == null ? void 0 : G.length) || 0
      };
    }, T = (w, P, J) => {
      var j;
      const z = w.value, U = (j = J == null ? void 0 : J.currentTarget) == null ? void 0 : j.closest(".mobile-expanded-entry-header");
      w.value = !z, z && U && o("section-collapse", { header: U }), se("antikythera section toggled", y(P, w.value));
    }, R = (w) => T(r, "abstract", w), O = (w) => T(a, "editorial", w), x = (w) => T(l, "bibliography", w), K = (w) => T(i, "annotations", w), W = (w) => T(s, "credits", w);
    return (w, P) => {
      var J, z, U, j, Y, oe, F, ee, V, G, q;
      return k(), S("main", xg, [
        C("div", _g, [
          d((J = e.entry) == null ? void 0 : J.introduction) ? (k(), S("section", kg, [
            C("h3", Cg, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "abstract",
                "data-ph-entry": (z = e.entry) == null ? void 0 : z.url,
                onClick: R
              }, [
                P[0] || (P[0] = C("span", null, "Abstract", -1)),
                C("span", Tg, ue(r.value ? "Collapse" : "Expand"), 1)
              ], 8, Sg)
            ]),
            r.value ? (k(), S("section", Eg, [
              te(Ct, {
                value: e.entry.introduction
              }, null, 8, ["value"])
            ])) : ne("", !0)
          ])) : ne("", !0),
          d((U = e.entry) == null ? void 0 : U.editorial) ? (k(), S("section", Ag, [
            C("h3", $g, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "editorial",
                "data-ph-entry": (j = e.entry) == null ? void 0 : j.url,
                onClick: O
              }, [
                P[1] || (P[1] = C("span", null, "Editorial", -1)),
                C("span", Ig, ue(a.value ? "Collapse" : "Expand"), 1)
              ], 8, Rg)
            ]),
            a.value ? (k(), S("section", Pg, [
              te(Ct, {
                value: e.entry.editorial
              }, null, 8, ["value"])
            ])) : ne("", !0)
          ])) : ne("", !0),
          h.value ? (k(), S("section", zg, [
            C("h3", Mg, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "annotations",
                "data-ph-entry": (Y = e.entry) == null ? void 0 : Y.url,
                onClick: K
              }, [
                P[2] || (P[2] = C("span", null, "Annotations", -1)),
                C("span", Og, ue(i.value ? "Collapse" : "Expand"), 1)
              ], 8, Lg)
            ]),
            i.value ? (k(), S("section", Hg, [
              ((F = (oe = e.entry) == null ? void 0 : oe.annotations) == null ? void 0 : F.length) > 0 ? (k(!0), S(ye, { key: 0 }, bt(e.entry.annotations, (le, pe) => {
                var xe;
                return k(), et(wg, {
                  articleAttributionVisibility: ((xe = e.entry) == null ? void 0 : xe.annotationVisibility) ?? !0,
                  annotation: le,
                  index: pe
                }, null, 8, ["articleAttributionVisibility", "annotation", "index"]);
              }), 256)) : ne("", !0)
            ])) : ne("", !0)
          ])) : ne("", !0),
          d((ee = e.entry) == null ? void 0 : ee.bibliography) ? (k(), S("section", Bg, [
            C("h3", Vg, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "bibliography",
                "data-ph-entry": (V = e.entry) == null ? void 0 : V.url,
                onClick: x
              }, [
                P[3] || (P[3] = C("span", null, "Bibliography", -1)),
                C("span", Fg, ue(l.value ? "Collapse" : "Expand"), 1)
              ], 8, Ng)
            ]),
            l.value ? (k(), S("section", Dg, [
              te(Ct, {
                value: e.entry.bibliography
              }, null, 8, ["value"])
            ])) : ne("", !0)
          ])) : ne("", !0),
          d((G = e.entry) == null ? void 0 : G.credits) ? (k(), S("section", jg, [
            C("h3", Ug, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "credits",
                "data-ph-entry": (q = e.entry) == null ? void 0 : q.url,
                onClick: W
              }, [
                P[4] || (P[4] = C("span", null, "Credits", -1)),
                C("span", qg, ue(s.value ? "Collapse" : "Expand"), 1)
              ], 8, Kg)
            ]),
            s.value ? (k(), S("section", Wg, [
              te(Ct, {
                value: e.entry.credits
              }, null, 8, ["value"])
            ])) : ne("", !0)
          ])) : ne("", !0)
        ])
      ]);
    };
  }
}, Yg = { class: "annotation-card-slot__content min-h-0 overflow-hidden" }, Gg = { class: "pb-3" }, Zg = {
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
    const f = (O) => {
      if (O)
        try {
          return new URL(O, window.location.origin).hostname;
        } catch {
          return;
        }
    }, c = () => {
      var O, x;
      return {
        annotation_id: n.annotation.id,
        annotation_title: n.annotation.title || void 0,
        annotation_type: n.annotation.annotationType || void 0,
        annotation_has_external_link: !!n.annotation.externalLink,
        annotation_external_domain: f(n.annotation.externalLink),
        annotation_has_featured_image: !!((O = n.annotation.featuredImage) != null && O.url || (x = n.annotation.featuredImageSquare) != null && x.url),
        annotation_word_count: y.value
      };
    }, d = () => {
      se("antikythera annotation card closed", {
        ...c(),
        menu_view: n.view,
        is_mobile: n.isMobile
      }), o("close", n.annotation.id);
    }, h = () => {
      se("antikythera annotation external link clicked", c());
    }, y = Q(() => {
      var K, W;
      const O = (K = n.annotation) != null && K.content ? (W = n.annotation) == null ? void 0 : W.content : [];
      let x = 0;
      return O.forEach((w) => {
        if (w._type !== "block" || !w.children)
          return 0;
        x = x + w.children.map((P) => P.text).join("").split(" ").length;
      }), x;
    }), T = () => {
      if (!r.value || !l)
        return;
      const O = r.value.getBoundingClientRect().bottom, x = l.getBoundingClientRect().bottom, K = O <= x + 22;
      K && a.value ? (a.value = !1, i.value || (i.value = !0, se("antikythera annotation fully read", c()))) : K || (a.value = !0);
    }, R = () => {
      if (!r.value || !l)
        return;
      const O = r.value.getBoundingClientRect().bottom, x = l.getBoundingClientRect().bottom;
      l.scrollHeight > l.clientHeight && O > x + 22 ? (a.value || se("antikythera annotation content overflows", c()), a.value = !0) : a.value = !1;
    };
    return ho(async () => {
      var O;
      await ft(), l = ((O = r.value) == null ? void 0 : O.parentElement) ?? null, s = window.setTimeout(() => {
        R(), l == null || l.addEventListener("scroll", T, { passive: !0 }), window.addEventListener("resize", R);
      }, 50);
    }), Sa(() => {
      s !== null && window.clearTimeout(s), l == null || l.removeEventListener("scroll", T), window.removeEventListener("resize", R);
    }), (O, x) => (k(), S("article", {
      ref_key: "AnnotationCard",
      ref: r,
      class: "annotation-card-slot pointer-events-auto grid w-full shrink-0"
    }, [
      C("div", Yg, [
        C("div", Gg, [
          te(rc, {
            annotation: e.annotation,
            articleAttributionVisibility: e.articleAttributionVisibility,
            dismissible: e.view == 0 || e.isMobile,
            variant: "floating",
            onClose: d,
            onExternalLinkClick: h
          }, null, 8, ["annotation", "articleAttributionVisibility", "dismissible"])
        ])
      ])
    ], 512));
  }
}, Jg = { class: "border-stroke-light pointer-events-auto w-sticker -translate-x-3 rounded-lg border bg-black p-3 text-m text-white" }, Qg = { class: "flex w-full items-start justify-between gap-3" }, em = { class: "min-w-0 flex-1 leading-[1.25]" }, tm = ["aria-checked", "aria-label"], nm = {
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
    return (a, i) => (k(), S("article", Jg, [
      C("div", Qg, [
        C("p", em, ue(e.label), 1),
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
        ], 10, tm)
      ])
    ]));
  }
}, om = {
  key: 0,
  "aria-hidden": "true",
  class: "pointer-events-none fixed inset-0 z-[2000] grid h-[100dvh] w-full grid-cols-12 gap-x-3 px-6 opacity-50 sm:gap-x-9"
}, rm = {
  __name: "DebugGrid",
  props: {
    visible: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => e.visible ? (k(), S("div", om, [
      (k(), S(ye, null, bt(12, (o) => C("div", {
        key: o,
        class: "col-span-1 h-full bg-blue-200"
      })), 64))
    ])) : ne("", !0);
  }
}, oa = " ", am = (e = "") => e.trim().replace(/\s+/g, oa), im = (e = []) => {
  const t = e.map(am).filter(Boolean);
  return t.length < 2 ? t[0] || "" : t.length === 2 ? `${t[0]} &${oa}${t[1]}` : `${t.slice(0, -1).join(", ")} &${oa}${t[t.length - 1]}`;
}, lm = '.expanded-frame[data-v-a24fe66f]{--expanded-frame-edge-inset: 5px;--mobile-expanded-header-inline-bleed: calc((var(--fontSize) * 1.5) - var(--expanded-frame-edge-inset))}.expanded-frame-underlay[data-v-a24fe66f]{inset:var(--expanded-frame-edge-inset)}.expanded-frame-clip[data-v-a24fe66f]{clip-path:inset(var(--expanded-frame-edge-inset) round 11px)}.expanded-scrollport[data-v-a24fe66f]{--expanded-related-header-height: calc((var(--fontSize) * 1.28) + 21px);height:100dvh;margin-block:calc(var(--fontSize) * -.75);padding-block:calc(var(--fontSize) * .75)!important;scroll-padding-top:calc(var(--fontSize) * .75);scroll-padding-bottom:0}.expanded-before-related[data-v-a24fe66f]{min-height:calc(100dvh - (var(--fontSize) * .75));margin-bottom:calc(var(--expanded-related-header-height) * -1);padding-bottom:var(--expanded-related-header-height)}.expanded-related-page[data-v-a24fe66f]{min-height:calc(100dvh - (var(--fontSize) * .75));margin-bottom:0;padding-bottom:var(--expanded-related-header-height)}.expanded-about-page[data-v-a24fe66f]{min-height:calc(100dvh - (var(--fontSize) * 1.5))}@media screen and (max-width: 639px){.expanded-frame-clip[data-v-a24fe66f]{display:block!important;pointer-events:auto!important;overflow-x:hidden;overscroll-behavior-x:none}.expanded-scrollport.expanded-sticker-column[data-v-a24fe66f],.expanded-scrollport.expanded-details-column[data-v-a24fe66f]{height:auto;margin-block:0;padding-block:0!important;overflow:visible!important;scroll-padding-block:0}.expanded-scrollport.expanded-sticker-column[data-v-a24fe66f]{position:sticky!important;top:calc(.75rem - var(--mobile-sticker-sticky-offset, 0px));z-index:20;align-self:start}.mobile-journal-description[data-v-a24fe66f]{margin-top:.625rem!important;transition:margin-top .22s cubic-bezier(.25,.7,.25,1)}.mobile-journal-description.mobile-below-cta-exiting[data-v-a24fe66f]{margin-top:0!important}.mobile-expanded-exit-content[data-v-a24fe66f]{translate:0 0;transition-property:opacity,translate,margin!important;transition-duration:.22s!important;transition-delay:0ms!important;transition-timing-function:cubic-bezier(.25,.7,.25,1)!important}.mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-a24fe66f]{pointer-events:none;opacity:0!important;translate:0 -12px;margin-top:0!important;transition-delay:40ms!important}.mobile-mid-scroll-reversing .mobile-expanded-exit-content[data-v-a24fe66f]{transition-duration:.3s!important;transition-timing-function:cubic-bezier(.23,1,.32,1)!important}.mobile-mid-scroll-reversing .mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-a24fe66f]{transition-delay:48ms!important}.mobile-mid-scroll-reversing .mobile-journal-description[data-v-a24fe66f]{transition:margin-top .3s cubic-bezier(.23,1,.32,1)!important}.expanded-scrollport.expanded-details-column[data-v-a24fe66f]{margin-top:.625rem}.expanded-details-column[data-v-a24fe66f] .mobile-expanded-entry-header,.expanded-details-column[data-v-a24fe66f] .mobile-expanded-page-header{position:sticky;top:calc(var(--mobile-expanded-section-sticky-top, 48px) - 1px);z-index:30;width:calc(100% + var(--mobile-expanded-header-inline-bleed) + var(--mobile-expanded-header-inline-bleed));margin-inline:calc(0px - var(--mobile-expanded-header-inline-bleed));padding-inline:var(--mobile-expanded-header-inline-bleed);background:var(--black)}.expanded-details-column[data-v-a24fe66f] .mobile-expanded-entry-header{margin-block:-10px;padding-block:10px}.expanded-details-column[data-v-a24fe66f] .mobile-expanded-entry-header:after,.expanded-details-column[data-v-a24fe66f] .mobile-expanded-page-header:after{position:absolute;inset-inline:var(--mobile-expanded-header-inline-bleed);bottom:0;height:1px;content:"";pointer-events:none;background:var(--stroke-light);opacity:0;transition:opacity .16s ease}.expanded-details-column[data-v-a24fe66f] .mobile-expanded-entry-header[data-stuck]:after,.expanded-details-column[data-v-a24fe66f] .mobile-expanded-page-header[data-stuck]:after{opacity:1}.expanded-before-related[data-v-a24fe66f],.expanded-related-page[data-v-a24fe66f]{min-height:0;margin-bottom:0;padding-bottom:0}.expanded-about-page[data-v-a24fe66f]{min-height:0}}@media (prefers-reduced-motion: reduce) and (max-width: 639px){.mobile-expanded-exit-content[data-v-a24fe66f]{transition-duration:1ms!important}.mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-a24fe66f]{translate:0 0}.expanded-details-column[data-v-a24fe66f] .mobile-expanded-entry-header:after,.expanded-details-column[data-v-a24fe66f] .mobile-expanded-page-header:after{transition-duration:1ms}}.annotation-card-slot[data-v-a24fe66f]{position:relative;grid-template-rows:1fr;overflow:hidden;border-radius:8px}.annotation-card-slot.annotation-list-enter-active[data-v-a24fe66f]{transition:grid-template-rows .22s cubic-bezier(.32,.72,0,1) .14s,transform .22s cubic-bezier(.32,.72,0,1) .14s,opacity .22s cubic-bezier(.32,.72,0,1) .14s}.annotation-card-slot.annotation-list-leave-active[data-v-a24fe66f]{pointer-events:none;transition:grid-template-rows .22s cubic-bezier(.32,.72,0,1),transform .22s cubic-bezier(.32,.72,0,1),opacity .22s cubic-bezier(.32,.72,0,1)}.annotation-card-slot.annotation-list-enter-from[data-v-a24fe66f],.annotation-card-slot.annotation-list-leave-to[data-v-a24fe66f]{grid-template-rows:0fr;opacity:0;transform:translateY(-6px)}@media (prefers-reduced-motion: reduce){.annotation-card-slot.annotation-list-enter-active[data-v-a24fe66f],.annotation-card-slot.annotation-list-leave-active[data-v-a24fe66f]{transition-duration:0ms;transition-delay:0ms}.annotation-card-slot.annotation-list-enter-from[data-v-a24fe66f],.annotation-card-slot.annotation-list-leave-to[data-v-a24fe66f]{transform:none}}', sm = ".anti-motion-fade{transition-property:opacity;transition-timing-function:cubic-bezier(.23,1,.32,1)}.anti-motion-slide{transition-property:opacity,transform;transition-timing-function:cubic-bezier(.23,1,.32,1)}.anti-motion-fold{transition-property:opacity,transform,max-height,margin;transition-timing-function:cubic-bezier(.25,.7,.25,1)}.expanded-sticker-card.minimal-shell-expanding{position:relative}.expanded-sticker-card.minimal-shell-expanding>.sticker-primary-cta{position:absolute;right:10px;bottom:10px;left:10px;z-index:1}.anti-mobile-summary-fold{display:grid;grid-template-rows:1fr;opacity:1;transition-property:grid-template-rows,opacity;transition-timing-function:cubic-bezier(.25,.7,.25,1)}.anti-mobile-summary-fold-collapsed{grid-template-rows:0fr;pointer-events:none;opacity:0}.anti-mobile-summary-reveal{transition-property:grid-template-rows;opacity:1}@media (prefers-reduced-motion: reduce){.expanded-sticker-card .anti-motion-fold,.expanded-sticker-card .anti-mobile-summary-fold{transition-duration:0ms!important;transition-delay:0ms!important}}", cm = { class: "flex w-full flex-col" }, um = { class: "relative flex w-full pt-[1px] pl-[1px] pr-12" }, dm = {
  href: "https://journal.antikythera.org",
  target: "_blank",
  class: "block min-w-0"
}, fm = ["src", "alt"], pm = { class: "min-h-0 overflow-hidden" }, hm = { class: "flex w-full flex-col pt-[20px] leading-[1.25] text-[rgb(244_244_244)]" }, gm = { key: 0 }, mm = { key: 1 }, vm = ["href", "data-ph-entry", "onClick"], ym = { key: 1 }, bm = { key: 2 }, wm = ["href", "data-ph-entry", "onClick"], xm = { key: 1 }, _m = { class: "flex min-w-0 items-center gap-2 pr-3" }, km = ["href", "data-ph-entry"], Cm = { key: 1 }, Sm = { class: "shrink-0 text-right text-[rgb(244_244_244_/_0.5)]" }, Tm = {
  key: 1,
  class: "w-full h-2 pointer-events-none"
}, Em = { class: "grid min-h-full w-full grid-cols-1 lg:grid-cols-9" }, Am = { class: "relative grid w-full grid-cols-1 gap-[10px] lg:grid-cols-9 lg:gap-x-9" }, $m = { class: "lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[calc((100%-var(--fontSize)*18)/3+var(--fontSize)*4.5)]" }, Rm = {
  key: 0,
  class: "col-start-1 col-end-13 sm:col-end-7 lg:col-end-4 mt-3 sm:mt-0 pointer-events-none"
}, yl = 320, bl = 110, Fr = 340, wl = 280, xl = 240, _l = 48, Im = 240, Pm = {
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
    const n = e, o = t, { getSettings: r, getEntry: a, getEntryMeta: i, getAnnotations: l } = la({ entry: n.entry, environment: n.environment, apiUrl: n.apiUrl }), { view: s, viewChange: f, previousView: c, requestedView: d, tempView: h, transitioning: y, setView: T } = oc(), R = X(null), O = X(null), x = X(null), K = X(null), W = X(null), w = X(null), P = X(null), J = X(null), z = X(null), U = X(""), j = X({}), Y = X(!1), oe = X(!1), F = X(!1), ee = X(!1), V = X(!1), G = X(!1), q = X(!1), le = X(!1), pe = X(!1), xe = X(!0), qe = X(!1), Ve = X(0), $e = X(!1), Oe = X(!1), Ne = X(!1), Ot = X(!1), wt = X(!1);
    let At = null, ut = null, gt = null, mt = 0, pn = null, Ht = 0, p = 0, m = !1, _ = null, M = null, A = 0, $ = null, N = 0, B = 0;
    const v = X({}), I = Q(
      () => {
        var u, g, b, E;
        return ((g = (u = v.value) == null ? void 0 : u.featuredImageSquare) == null ? void 0 : g.url) || ((E = (b = v.value) == null ? void 0 : b.featuredImage) == null ? void 0 : E.url) || "";
      }
    ), re = Q(
      () => {
        var u, g, b, E, H;
        return ((g = (u = v.value) == null ? void 0 : u.featuredImageSquare) == null ? void 0 : g.alt) || ((E = (b = v.value) == null ? void 0 : b.featuredImage) == null ? void 0 : E.alt) || ((H = v.value) == null ? void 0 : H.title) || "";
      }
    ), D = X(!1), Z = X(!1), ae = X(""), he = X([]), Ce = X({ text: [], asideText: [], credits: [] }), de = X([]), Ee = X(!1), ve = X([]), Le = X(!1), We = X(!1), xt = X(""), Cn = X(""), He = X(""), nt = X(!1), Dn = X(!1);
    let bo = null, dr = null;
    const Sn = {
      0: "minimal",
      1: "summary",
      2: "expanded"
    }, Re = Q(() => s.value == 2 || h.value == 2), st = Q(
      () => y.value && d.value == 2 && h.value == 2 && s.value != 2
    ), ot = Q(
      () => y.value && d.value < 2 && h.value == 2
    ), ic = Q(() => Ne.value), lc = Q(
      () => Y.value && $e.value && (!Re.value && d.value == 0 || Oe.value && !Ne.value)
    ), Ma = Q(() => s.value == 0 || Y.value && s.value < 2 ? de.value.filter((u) => Ee.value == u.id) : s.value == 1 && !Y.value ? de.value.filter((u) => ve.value.includes(u.id)) : []), $t = X(!1), Rt = X(!1), Yt = X(!1), _t = Q(() => ot.value && !$t.value), fr = Q(() => I.value && !wt.value ? !0 : Oe.value ? !Ot.value : $t.value || Yt.value ? !1 : st.value || ot.value), sc = Fr + wl;
    let Tn = 0, jn = 0, Un = null, Kn = 0, qn = null;
    const pr = mc(0.32, 0.72, 0, 1);
    an(I, (u) => {
      if (wt.value = !1, !u || typeof window > "u" || !window.Image)
        return;
      const g = new window.Image();
      g.decoding = "async", g.fetchPriority = "low", g.src = u;
    }, { immediate: !0 });
    const cc = async (u) => {
      var E, H;
      const g = u.currentTarget, b = (E = g == null ? void 0 : g.getAttribute) == null ? void 0 : E.call(g, "src");
      if (!(!g || b !== I.value)) {
        try {
          await ((H = g.decode) == null ? void 0 : H.call(g));
        } catch {
        }
        b === I.value && (wt.value = !0, ft(Gt));
      }
    }, uc = (u) => {
      var g, b;
      ((b = (g = u.currentTarget) == null ? void 0 : g.getAttribute) == null ? void 0 : b.call(g, "src")) === I.value && (wt.value = !1);
    }, Xe = () => window.innerWidth < 640, rt = () => Xe() ? O.value : x.value, La = () => {
      if (!Xe())
        return !1;
      const u = rt();
      return !!(u && u.scrollTop > 2);
    }, Oa = (u) => Math.round(Math.min(400, Math.max(yl, 240 + u * 0.11))), Ha = () => {
      var E;
      if (!La())
        return;
      const u = ((E = rt()) == null ? void 0 : E.scrollTop) || 0, g = Oa(u), b = qe.value ? g + bl + sc : Math.max(g, Fr) + wl;
      return {
        collapseCommitMs: b,
        collapseEndMs: b + 100
      };
    }, hr = () => {
      Tn && (window.cancelAnimationFrame(Tn), Tn = 0);
    }, Ba = () => {
      if (jn && (window.clearTimeout(jn), jn = 0), Un) {
        const u = Un;
        Un = null, u();
      }
    }, Va = () => {
      if (Kn && (window.clearTimeout(Kn), Kn = 0), qn) {
        const u = qn;
        qn = null, u();
      }
    }, dc = () => {
      var u, g;
      return (g = (u = window.matchMedia) == null ? void 0 : u.call(window, "(prefers-reduced-motion: reduce)")) != null && g.matches ? Promise.resolve() : new Promise((b) => {
        Un = b, jn = window.setTimeout(() => {
          jn = 0, Un = null, b();
        }, bl);
      });
    }, Na = () => {
      var u, g;
      return (g = (u = window.matchMedia) == null ? void 0 : u.call(window, "(prefers-reduced-motion: reduce)")) != null && g.matches ? Promise.resolve() : new Promise((b) => {
        qn = b, Kn = window.setTimeout(() => {
          Kn = 0, qn = null, b();
        }, Fr);
      });
    }, Fa = (u = yl, g = pr) => {
      var L, ce;
      hr();
      const b = rt();
      if (!b || !Xe())
        return Promise.resolve();
      const E = b.scrollTop;
      if (E <= 2 || (ce = (L = window.matchMedia) == null ? void 0 : L.call(window, "(prefers-reduced-motion: reduce)")) != null && ce.matches)
        return b.scrollTop = 0, Promise.resolve();
      const H = performance.now();
      return new Promise((me) => {
        const Pe = (Fe) => {
          const _e = Math.min(1, (Fe - H) / u);
          if (b.scrollTop = E * (1 - g(_e)), _e < 1) {
            Tn = window.requestAnimationFrame(Pe);
            return;
          }
          Tn = 0, b.scrollTop = 0, me();
        };
        Tn = window.requestAnimationFrame(Pe);
      });
    }, fc = () => {
      const u = J.value, g = u == null ? void 0 : u.parentElement;
      if (!u || !g)
        return 0;
      const b = u.cloneNode(!0), E = u.getBoundingClientRect().width;
      b.classList.remove("minimal-shell-expanding"), Object.assign(b.style, {
        position: "fixed",
        left: "-10000px",
        top: "0",
        width: `${E}px`,
        height: "auto",
        maxHeight: "none",
        visibility: "hidden",
        pointerEvents: "none",
        transition: "none"
      });
      const H = b.querySelector(".anti-mobile-summary-fold");
      H && (H.style.gridTemplateRows = "1fr", H.style.opacity = "1", H.style.transition = "none");
      const L = b.querySelector("figure");
      L && (L.style.marginTop = "20px", L.style.maxHeight = "none", L.style.opacity = "1", L.style.transition = "none", L.querySelectorAll("img").forEach((me) => {
        me.style.opacity = "1", me.style.transition = "none";
      })), g.appendChild(b);
      const ce = b.getBoundingClientRect().height;
      return b.remove(), ce;
    }, Bt = () => {
      var u;
      N && (window.clearTimeout(N), N = 0), B && (window.clearTimeout(B), B = 0), $ && ($.cancel(), $ = null), (u = J.value) == null || u.style.removeProperty("height"), Oe.value = !1, Ne.value = !1, Ot.value = !1, Re.value && Gt();
    }, pc = () => {
      var u;
      Ne.value && ($ && ($.cancel(), $ = null), (u = J.value) == null || u.style.removeProperty("height"), Oe.value = !1, Ne.value = !1, Ot.value = !1, B = 0, Gt());
    }, hc = async () => {
      var E, H;
      const u = J.value;
      if (!u || !Oe.value || !Re.value || d.value != 2 || !Y.value) {
        Bt();
        return;
      }
      if ((H = (E = window.matchMedia) == null ? void 0 : E.call(window, "(prefers-reduced-motion: reduce)")) != null && H.matches) {
        Bt();
        return;
      }
      const g = u.getBoundingClientRect().height, b = fc();
      if (b <= g) {
        Bt();
        return;
      }
      if (u.style.height = `${g}px`, Ne.value = !0, await ft(), !Ne.value || d.value != 2) {
        Bt();
        return;
      }
      $ = u.animate(
        [{ height: `${g}px` }, { height: `${b}px` }],
        {
          duration: xl,
          easing: "cubic-bezier(0.25, 0.7, 0.25, 1)",
          fill: "forwards"
        }
      ), $.onfinish = () => {
        Ne.value && (u.style.height = `${b}px`, $ == null || $.cancel(), $ = null);
      }, N = window.setTimeout(() => {
        N = 0, Ot.value = !0;
      }, _l), B = window.setTimeout(
        pc,
        Math.max(xl, _l + Im)
      );
    }, Wn = () => {
      hr(), Ba(), Va(), $t.value = !1, Rt.value = !1, Yt.value = !1;
    }, gc = async () => {
      var E;
      Wn();
      const u = ((E = rt()) == null ? void 0 : E.scrollTop) || 0, g = Oa(u);
      if (qe.value) {
        if ($t.value = !0, await Fa(g, pr), !ot.value) {
          $t.value = !1;
          return;
        }
        if (await dc(), !ot.value) {
          $t.value = !1;
          return;
        }
        Rt.value = !0, Yt.value = !0, $t.value = !1;
      } else {
        if (Rt.value = !0, Yt.value = !0, await Promise.all([
          Fa(g, pr),
          Na()
        ]), !ot.value) {
          Yt.value = !1;
          return;
        }
        Yt.value = !1;
        return;
      }
      if (await Na(), !ot.value) {
        Yt.value = !1;
        return;
      }
      Yt.value = !1;
    };
    function mc(u, g, b, E) {
      const H = 3 * u, L = 3 * (b - u) - H, ce = 1 - H - L, me = 3 * g, Pe = 3 * (E - g) - me, Fe = 1 - me - Pe, _e = (De) => ((ce * De + L) * De + H) * De, Be = (De) => ((Fe * De + Pe) * De + me) * De, Me = (De) => (3 * ce * De + 2 * L) * De + H, Uc = (De) => {
        let kt = De;
        for (let Gn = 0; Gn < 8; Gn++) {
          const hi = _e(kt) - De;
          if (Math.abs(hi) < 1e-6)
            return kt;
          const gi = Me(kt);
          if (Math.abs(gi) < 1e-6)
            break;
          kt -= hi / gi;
        }
        let wr = 0, xr = 1;
        for (kt = De; wr < xr; ) {
          const Gn = _e(kt);
          if (Math.abs(Gn - De) < 1e-6)
            return kt;
          De > Gn ? wr = kt : xr = kt, kt = (xr + wr) / 2;
        }
        return kt;
      };
      return (De) => Be(Uc(De));
    }
    const Xn = (u) => {
      if (u)
        try {
          return new URL(u, window.location.origin).hostname;
        } catch {
          return;
        }
    }, vc = Q(() => {
      var b, E;
      const u = n.apiBackgroundColor || ((b = v.value) == null ? void 0 : b.apiBackgroundColor), g = n.apiForegroundColor || ((E = v.value) == null ? void 0 : E.apiForegroundColor);
      return js({
        theme: D.value ? n.theme === "light" ? "dark" : "light" : n.theme,
        backgroundColor: D.value ? g : u,
        foregroundColor: D.value ? u : g
      });
    }), gr = Q(() => {
      var u;
      return tc((u = v.value) == null ? void 0 : u.releaseDate);
    }), wo = Q(() => {
      const u = [], g = /* @__PURE__ */ new Set();
      return de.value.forEach((b) => {
        var L;
        const E = (L = b == null ? void 0 : b.attribution) == null ? void 0 : L.trim(), H = E == null ? void 0 : E.toLocaleLowerCase();
        !E || g.has(H) || (g.add(H), u.push(E));
      }), u;
    }), mr = Q(() => wo.value.length === 0 ? "" : `Annotations by ${im(wo.value)}`), xo = Q(() => {
      var u;
      return oe.value ? !1 : ((u = v.value) == null ? void 0 : u.annotationsCount) > 0 && !nt.value || !!mr.value;
    }), Da = Q(() => {
      var u, g, b, E;
      if (!v.value) return "";
      if (v.value.fileType) return v.value.fileType;
      if ((g = (u = v.value) == null ? void 0 : u.pdf) != null && g.pdfMimeType) {
        const H = v.value.pdf.pdfMimeType.split("/");
        if (H[1]) return H[1];
      }
      if ((E = (b = v.value) == null ? void 0 : b.pdf) != null && E.pdfFilename) {
        const H = v.value.pdf.pdfFilename.split(".");
        if (H.length > 1) return H.pop();
      }
      return "file";
    }), ja = Q(
      () => {
        var u, g, b, E, H, L, ce, me, Pe, Fe;
        return !!(((g = (u = v.value) == null ? void 0 : u.pdfPreview) == null ? void 0 : g.override) === !0 || (E = (b = v.value) == null ? void 0 : b.pdfPreview) != null && E.url || (L = (H = v.value) == null ? void 0 : H.pdf) != null && L.url || (me = (ce = v.value) == null ? void 0 : ce.markdown) != null && me.url || (Fe = (Pe = v.value) == null ? void 0 : Pe.pdfPreview) != null && Fe.downloadLabel);
      }
    ), Ua = Q(() => !0), yc = Q(() => d.value == 2 ? "Return to Article" : "More Info"), bc = () => {
      p = 0, m = !1, Re.value && (pn !== Xe() ? br() : Gt());
    }, wc = () => {
      m = !0, p && window.clearTimeout(p), p = window.setTimeout(bc, 120);
    }, Ka = () => {
      p && (window.clearTimeout(p), p = 0), m = !1;
    }, xc = () => {
      var E, H, L;
      Ht = 0;
      const u = window.innerWidth, g = _ !== null && u !== _;
      if (_ = u, g && Ne.value && Bt(), Y.value = u < 769, oe.value = u < 1024, !R.value)
        return;
      if (!Re.value) {
        const { height: ce } = R.value.getBoundingClientRect(), me = ((H = (E = z.value) == null ? void 0 : E.$el) == null ? void 0 : H.getBoundingClientRect().height) || 0, Pe = me > 0 ? ` - ${me}px - (var(--fontSize) * 0.75)` : "", Fe = `calc(100dvh - ${ce}px - (var(--fontSize) * 1.5)${Pe})`;
        ((L = U.value) == null ? void 0 : L["--sansSticker"]) !== Fe && (U.value = { "--sansSticker": Fe });
        return;
      }
      const b = Xe();
      pn !== b ? br() : m || Gt();
    }, En = (u) => {
      (u == null ? void 0 : u.type) === "resize" && Re.value && wc(), !Ht && (Ht = window.requestAnimationFrame(xc));
    }, _c = (u) => {
      const g = u == null ? void 0 : u.target;
      if (!(g instanceof Element) || g === document.documentElement || g === document.body)
        return window.scrollY;
      const { top: b, bottom: E, height: H } = g.getBoundingClientRect(), L = H >= window.innerHeight * 0.8 && b <= window.innerHeight * 0.1 && E >= window.innerHeight * 0.9, ce = g.scrollHeight > g.clientHeight + 2;
      return L && ce ? g.scrollTop : null;
    }, An = (u) => {
      if (window.innerWidth > 768 || Re.value)
        return;
      const g = _c(u);
      if (g !== null) {
        if ($e.value) {
          g <= 2 && ($e.value = !1, (s.value == 0 || d.value == 0) && T(1));
          return;
        }
        g > 30 && ($e.value = !0, se("antikythera mobile menu minimized", {
          antikythera_entry: n.entry || void 0,
          scroll_y: g,
          menu_view: s.value
        }), s.value != 0 && T(0));
      }
    };
    an(f, (u) => {
      o("viewChange", u), En();
    }), an(
      st,
      (u) => {
        if (u) {
          Bt(), Oe.value = Y.value && $e.value;
          return;
        }
        Oe.value && Re.value && d.value == 2 && ft(hc);
      },
      { flush: "sync" }
    ), an(Re, (u) => {
      u ? (Wn(), le.value = Xe(), Vt(), ft(() => {
        var g;
        A = ((g = rt()) == null ? void 0 : g.scrollTop) || 0, br(), ri(), ai();
      })) : (Bt(), Wn(), Ka(), $e.value = !1, yr(), ut && (window.clearTimeout(ut), ut = null), ko(), O.value && (O.value.scrollTop = 0), xe.value = !0, le.value = !1, pe.value = !1, A = 0);
    }), an(ot, (u) => {
      if (!u) {
        Wn();
        return;
      }
      if (Bt(), $e.value = !1, La()) {
        gc();
        return;
      }
      Wn();
    });
    const qa = (u) => {
      const g = ve.value.indexOf(u);
      g >= 0 && ve.value.splice(g, 1);
    }, Wa = () => {
      Ee.value = !1, ve.value = [];
    }, kc = (u) => {
      Ee.value == u && (Ee.value = !1), qa(u);
    }, Xa = (u, g = "toggle", b = "") => {
      u ? ft(() => {
        So(g, b);
      }) : Wa(), ft(() => {
        En();
      }), se("antikythera annotations toggled", {
        antikythera_entry: n.entry || void 0,
        annotations_enabled: u,
        annotations_count: de.value.length,
        annotation_attribution_count: wo.value.length,
        annotation_trigger: g,
        menu_view: s.value,
        menu_view_name: Sn[s.value]
      });
    }, Ya = (u) => {
      u.code == "Escape" && (se("antikythera keyboard shortcut used", {
        antikythera_entry: n.entry || void 0,
        key: "Escape",
        menu_view: s.value
      }), T(1, Ha()));
    }, Cc = (u) => {
      var b;
      if (!u) return !1;
      const g = (b = u.tagName) == null ? void 0 : b.toLowerCase();
      return u.isContentEditable || g === "input" || g === "textarea" || g === "select";
    }, Ga = (u) => {
      var g, b;
      u.defaultPrevented || u.repeat || u.metaKey || u.ctrlKey || u.altKey || Cc(u.target) || (((g = u.key) == null ? void 0 : g.toLowerCase()) === "i" && (D.value = !D.value, se("antikythera debug theme inverted", {
        antikythera_entry: n.entry || void 0,
        debug_theme_inverted: D.value,
        menu_view: s.value,
        menu_view_name: Sn[s.value]
      })), ((b = u.key) == null ? void 0 : b.toLowerCase()) === "g" && (Z.value = !Z.value));
    }, Za = () => {
      window.addEventListener("keydown", Ya);
    }, vr = () => {
      window.removeEventListener("keydown", Ya);
    }, Sc = () => {
      window.addEventListener("keydown", Ga);
    }, Tc = () => {
      window.removeEventListener("keydown", Ga);
    }, Ja = (u) => {
      var g, b, E;
      u != null && u.entry && (v.value = u.entry, Array.isArray((g = u.entry) == null ? void 0 : g.annotations) && (de.value = u.entry.annotations, nt.value = !0)), u != null && u.settings && !u.settings.error && (ae.value = (b = u.settings) == null ? void 0 : b.shortDescription, he.value = (E = u.settings) == null ? void 0 : E.externalLinks, V.value = !0), u != null && u.about && (Ce.value = u.about);
    }, Qa = async () => {
      await ft(), ee.value = !0;
    }, Ec = (u) => {
      var b, E;
      const g = de.value.find((H) => H.id === u);
      return {
        antikythera_entry: n.entry || void 0,
        annotation_id: u,
        annotation_title: (g == null ? void 0 : g.title) || void 0,
        annotation_type: (g == null ? void 0 : g.annotationType) || void 0,
        annotation_has_external_link: !!(g != null && g.externalLink),
        annotation_external_domain: Xn(g == null ? void 0 : g.externalLink),
        annotation_has_featured_image: !!((b = g == null ? void 0 : g.featuredImage) != null && b.url || (E = g == null ? void 0 : g.featuredImageSquare) != null && E.url),
        annotation_index: de.value.findIndex((H) => H.id === u)
      };
    }, Yn = (u, g) => {
      se(
        "antikythera annotation card opened",
        {
          ...Ec(u),
          annotation_trigger: g,
          menu_view: s.value,
          menu_view_name: Sn[s.value]
        },
        { onceKey: `annotation-card-opened:${n.entry}:${g}:${u}` }
      );
    }, ei = ({ action: u, label: g, fromView: b, toView: E }) => {
      var H, L;
      se(`antikythera menu ${u} clicked`, {
        antikythera_entry: n.entry || void 0,
        button_label: g,
        menu_from_view: b,
        menu_from_view_name: Sn[b],
        menu_to_view: E,
        menu_to_view_name: Sn[E],
        entry_title: ((H = v.value) == null ? void 0 : H.title) || void 0,
        annotations_count: de.value.length,
        is_expandable: !!((L = v.value) != null && L.apiExpandable)
      });
    }, Ac = () => {
      var g;
      const u = ((g = v.value) == null ? void 0 : g.apiExpandable) === !1 ? 1 : 2;
      ei({
        action: "expand",
        label: "More Info",
        fromView: s.value,
        toView: u
      }), u == 2 && Vt(), T(u);
    }, $c = () => {
      if (Re.value) {
        Rc();
        return;
      }
      Ac();
    }, Rc = () => {
      const u = c.value == 2 ? 1 : c.value, g = Ha();
      ei({
        action: "collapse",
        label: "Return to Article",
        fromView: s.value,
        toView: u
      }), T(u, g);
    }, Ic = () => {
      var H;
      const u = rt(), g = (H = W.value) == null ? void 0 : H.$el;
      if (!u || !g)
        return 0;
      const b = u.getBoundingClientRect(), E = g.getBoundingClientRect();
      return Math.max(0, u.scrollTop + E.top - b.top);
    }, _o = () => {
      const u = rt();
      return u && Number.parseFloat(window.getComputedStyle(u).scrollPaddingTop) || 0;
    }, ti = () => Math.max(0, Ic() - _o()), Pc = () => {
      var L;
      const u = rt(), g = (L = w.value) == null ? void 0 : L.$el;
      if (!u || !g)
        return 0;
      const b = u.getBoundingClientRect(), E = g.getBoundingClientRect(), H = u.scrollTop + E.top - b.top;
      return Math.max(0, H - _o());
    }, ni = () => {
      if (!Re.value || !Xe()) {
        qe.value = !1;
        return;
      }
      const u = rt();
      if (!u || Ve.value <= 0) {
        qe.value = !1;
        return;
      }
      qe.value = u.scrollTop >= Ve.value - 1;
    }, ko = () => {
      (M !== null || Object.keys(j.value).length > 0) && (M = null, j.value = {}), Ve.value !== 0 && (Ve.value = 0), qe.value && (qe.value = !1);
    }, zc = () => {
      if (!Re.value || !Xe()) {
        ko();
        return;
      }
      const u = J.value, g = P.value;
      if (!u || !g) {
        ko();
        return;
      }
      const b = u.getBoundingClientRect().top, E = g.getBoundingClientRect().top, H = Number.parseFloat(window.getComputedStyle(g).marginTop) || 0, L = Math.max(0, Math.round((E - b + H) * 100) / 100), me = (Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16) * 0.75 - L + u.getBoundingClientRect().height, Pe = Math.max(0, Math.round(me * 100) / 100);
      (M !== L || j.value["--mobile-expanded-section-sticky-top"] !== `${Pe}px`) && (M = L, Ve.value = L, j.value = {
        "--mobile-sticker-sticky-offset": `${L}px`,
        "--mobile-expanded-section-sticky-top": `${Pe}px`
      }), ni();
    }, oi = () => {
      var Fe, _e;
      const u = rt(), g = K.value;
      if (!u || !g)
        return;
      if (Xe()) {
        xe.value = !1;
        return;
      }
      const b = [g, (Fe = W.value) == null ? void 0 : Fe.$el, (_e = w.value) == null ? void 0 : _e.$el].filter(
        (Be) => Be instanceof Element
      );
      if (!b.length)
        return;
      const E = u.getBoundingClientRect().top + _o(), L = b.map((Be) => ({
        section: Be,
        rect: Be.getBoundingClientRect()
      })).reduce(
        (Be, Me) => Me.rect.top <= E + 2 ? Me : Be
      ), ce = Number.parseFloat(window.getComputedStyle(L.section).minHeight) || 0, me = ce > 0 && L.rect.height <= ce + 1, Pe = Math.abs(L.rect.top - E) <= 2 || L.section === g && u.scrollTop <= 2;
      me ? Pe && (xe.value = !0) : xe.value = !1;
    }, Mc = () => {
      if (mt = 0, !(!Re.value || m)) {
        if (oi(), Xe()) {
          Ne.value || zc(), Co();
          return;
        }
        ko(), Co();
      }
    }, Gt = () => {
      mt || (mt = window.requestAnimationFrame(Mc));
    }, yr = () => {
      gt == null || gt.disconnect(), gt = null, pn = null, mt && (window.cancelAnimationFrame(mt), mt = 0);
    }, br = () => {
      var L, ce;
      if (yr(), !Re.value)
        return;
      const u = Xe(), g = rt(), b = K.value, E = (L = W.value) == null ? void 0 : L.$el, H = (ce = w.value) == null ? void 0 : ce.$el;
      if (pn = u, typeof ResizeObserver > "u") {
        m || Gt();
        return;
      }
      if (gt = new ResizeObserver(() => {
        m || u && Ne.value || Gt();
      }), u)
        J.value && gt.observe(J.value), P.value && gt.observe(P.value);
      else {
        g && gt.observe(g);
        for (const me of [b, E, H])
          me instanceof Element && gt.observe(me);
      }
      m || Gt();
    }, ri = () => {
      var me;
      const u = rt(), g = (me = W.value) == null ? void 0 : me.$el;
      if (!u || !g) {
        le.value = !1, A = 0;
        return;
      }
      if (Xe()) {
        A = u.scrollTop;
        return;
      }
      const b = u.scrollTop, E = b >= A, H = u.getBoundingClientRect(), L = g.getBoundingClientRect(), ce = H.top + _o();
      le.value = E ? b > 2 && L.top <= H.bottom - 2 : b > 2 && L.top <= ce + 2, A = b;
    }, ai = () => {
      var L, ce;
      const u = rt(), g = (L = w.value) == null ? void 0 : L.$el;
      if (!u || !g || Xe()) {
        pe.value = !1;
        return;
      }
      const b = u.scrollTop, E = u.getBoundingClientRect(), H = (ce = g.querySelector(".about-preview")) == null ? void 0 : ce.getBoundingClientRect();
      pe.value = !!(H && b > 2 && H.bottom < E.bottom - 2);
    }, Co = () => {
      const u = O.value, g = (u == null ? void 0 : u.querySelectorAll(".mobile-expanded-entry-header, .mobile-expanded-page-header")) || [];
      if (!u || !Xe()) {
        g.forEach((b) => b.removeAttribute("data-stuck"));
        return;
      }
      g.forEach((b) => {
        const E = b.closest("section");
        if (!E) {
          b.removeAttribute("data-stuck");
          return;
        }
        const H = b.getBoundingClientRect(), L = E.getBoundingClientRect(), ce = H.top > L.top + 1, me = L.bottom > H.bottom + 1;
        b.toggleAttribute("data-stuck", ce && me);
      });
    }, ii = () => {
      oi(), ni(), Co(), ai(), ri();
    }, li = () => {
      ut && window.clearTimeout(ut), ut = window.setTimeout(() => {
        ut = null, ii();
      }, 120), !At && (At = window.requestAnimationFrame(() => {
        At = null, ii();
      }));
    }, Lc = () => {
      Re.value && Xe() && li();
    }, si = (u) => {
      const g = O.value, b = J.value;
      if (!u || !g || !b || !Xe())
        return;
      const E = u.getBoundingClientRect().top - b.getBoundingClientRect().bottom;
      ft(() => {
        if (!g || !u.isConnected)
          return;
        const H = u.getBoundingClientRect().top - g.getBoundingClientRect().top, L = b.getBoundingClientRect().bottom - g.getBoundingClientRect().top + E, ce = Math.max(0, g.scrollTop + H - L);
        g.scrollTop = ce, Co();
      });
    }, Oc = ({ header: u }) => {
      si(u);
    }, Hc = ({ open: u }) => {
      var E, H;
      const g = rt();
      if (!g)
        return;
      if (Xe()) {
        const L = (H = (E = W.value) == null ? void 0 : E.$el) == null ? void 0 : H.querySelector(".mobile-expanded-page-header");
        le.value = u, A = g.scrollTop, !u && L && si(L);
        return;
      }
      const b = u ? ti() : 0;
      le.value = u, A = g.scrollTop, g.scrollTo({ top: b, behavior: "smooth" });
    }, Bc = ({ open: u }) => {
      const g = rt();
      if (!g)
        return;
      const b = u ? Pc() : ti();
      pe.value = u, g.scrollTo({ top: b, behavior: "smooth" });
    }, ci = (u = {}) => {
      var g;
      se("antikythera file downloaded", {
        antikythera_entry: n.entry || void 0,
        entry_title: ((g = v.value) == null ? void 0 : g.title) || void 0,
        file_type: u.fileType || void 0,
        file_name: u.fileName || void 0,
        file_mime_type: u.mimeType || void 0,
        file_domain: Xn(u.url)
      });
    }, Vc = () => {
      var u, g, b, E;
      se("antikythera doi link clicked", {
        antikythera_entry: n.entry || void 0,
        doi: ((u = v.value) == null ? void 0 : u.doi) || void 0,
        doi_url: ((g = v.value) == null ? void 0 : g.doiUrl) || void 0,
        doi_domain: Xn((b = v.value) == null ? void 0 : b.doiUrl),
        entry_title: ((E = v.value) == null ? void 0 : E.title) || void 0
      });
    }, ui = (u, g) => {
      var b;
      se("antikythera author link clicked", {
        antikythera_entry: n.entry || void 0,
        author_name: (u == null ? void 0 : u.title) || void 0,
        author_role: g,
        author_external_domain: Xn(u == null ? void 0 : u.externalLink),
        entry_title: ((b = v.value) == null ? void 0 : b.title) || void 0
      });
    }, Nc = (u, g, b = void 0) => {
      var E;
      se("antikythera external link clicked", {
        antikythera_entry: n.entry || void 0,
        entry_title: ((E = v.value) == null ? void 0 : E.title) || void 0,
        link_kind: u,
        link_title: b,
        link_domain: Xn(g)
      });
    }, di = ({ linkKind: u, linkUrl: g, linkTitle: b }) => {
      Nc(u, g, b);
    }, Vt = async () => {
      var g, b, E, H, L, ce, me;
      if (!n.entry || Dn.value)
        return;
      bo || (G.value = !1, q.value = !1, bo = a());
      const u = await bo;
      if (u != null && u.error || !(u != null && u.entry)) {
        bo = null, G.value = !1, q.value = !0, se("antikythera entry load error", {
          antikythera_entry: n.entry || void 0,
          error_message: (u == null ? void 0 : u.error) || "missing entry payload"
        });
        return;
      }
      Ja(u), Dn.value = !0, await ft(), G.value = !0, q.value = !1, se("antikythera entry loaded", {
        antikythera_entry: n.entry || void 0,
        entry_title: ((g = v.value) == null ? void 0 : g.title) || void 0,
        annotations_count: de.value.length,
        authors_count: ((E = (b = v.value) == null ? void 0 : b.authors) == null ? void 0 : E.length) || 0,
        designers_count: ((L = (H = v.value) == null ? void 0 : H.designers) == null ? void 0 : L.length) || 0,
        related_entries_count: ((me = (ce = v.value) == null ? void 0 : ce.relatedEntries) == null ? void 0 : me.length) || 0
      });
    }, Fc = async () => {
      if (!n.entry || nt.value)
        return;
      dr || (dr = l());
      const u = await dr;
      Array.isArray(u) ? (de.value = u, nt.value = !0, await ft(), En(), So("toggle")) : u != null && u.error && se("antikythera annotations load error", {
        antikythera_entry: n.entry || void 0,
        error_message: u.error
      });
    };
    ho(async () => {
      var u, g, b, E, H, L, ce, me, Pe, Fe, _e, Be;
      if (Sc(), n.entry) {
        const Me = await i();
        Me != null && Me.error && se("antikythera entry metadata load error", {
          antikythera_entry: n.entry || void 0,
          error_message: Me.error
        }), Ja(Me), F.value = !0, se("antikythera entry metadata loaded", {
          antikythera_entry: n.entry || void 0,
          entry_title: ((u = v.value) == null ? void 0 : u.title) || void 0,
          annotations_count: (g = v.value) == null ? void 0 : g.annotationsCount,
          authors_count: ((E = (b = v.value) == null ? void 0 : b.authors) == null ? void 0 : E.length) || 0,
          designers_count: ((L = (H = v.value) == null ? void 0 : H.designers) == null ? void 0 : L.length) || 0,
          has_doi: !!((ce = v.value) != null && ce.doi),
          has_pdf: !!((Pe = (me = v.value) == null ? void 0 : me.pdf) != null && Pe.url),
          has_markdown: !!((_e = (Fe = v.value) == null ? void 0 : Fe.markdown) != null && _e.url)
        }), En(), Qa(), ((Be = v.value) == null ? void 0 : Be.annotationsCount) > 0 && Fc(), window.addEventListener("resize", En), window.addEventListener("scroll", An), document.addEventListener("scroll", An, { passive: !0, capture: !0 });
      } else {
        console.warn("antikythera menu skipped entry metadata: no entry slug provided");
        const Me = await r();
        Me != null && Me.error || (ae.value = Me.shortDescription, he.value = Me.externalLinks, V.value = !0), Qa(), window.addEventListener("scroll", An), document.addEventListener("scroll", An, { passive: !0, capture: !0 });
      }
    }), Ta(() => {
      window.removeEventListener("resize", En), window.removeEventListener("scroll", An), document.removeEventListener("scroll", An, { capture: !0 }), Ka(), Bt(), hr(), Ba(), Va(), yr(), Ht && (window.cancelAnimationFrame(Ht), Ht = 0), At && window.cancelAnimationFrame(At), ut && window.clearTimeout(ut), vr(), Tc();
    });
    const fi = (u) => {
      var g;
      if (!u) return null;
      if ((g = window.CSS) != null && g.escape)
        return document.querySelector(`#${window.CSS.escape(u)}`);
      try {
        return document.querySelector(`#${u}`) || document.getElementById(u);
      } catch {
        return document.getElementById(u);
      }
    }, Dc = () => {
      const u = [], g = /* @__PURE__ */ new Set(), { innerHeight: b } = window;
      return de.value.forEach((E) => {
        const H = E == null ? void 0 : E.id, L = fi(H);
        if (!L || g.has(H))
          return;
        const { top: ce, bottom: me } = L.getBoundingClientRect();
        me > 0 && ce < b && (g.add(H), u.push(H));
      }), u;
    }, So = (u = "viewport", g = "") => {
      if (!Le.value || s.value == 2)
        return;
      const b = Dc().filter((E) => E !== g);
      if (g && b.unshift(g), b.length !== 0) {
        if (Vt(), Y.value || s.value == 0) {
          const E = g || b[0];
          Ee.value = E, Yn(E, u);
          return;
        }
        s.value == 1 && b.slice(0, 2).forEach((E) => {
          ve.value.includes(E) || (ve.value.push(E), Yn(E, u));
        });
      }
    }, pi = () => {
      if (!xt.value)
        return;
      const u = xt.value, g = Cn.value;
      if (xt.value = "", Cn.value = "", u === "annotation-click" && g) {
        So(u, g);
        return;
      }
      So(u);
    }, jc = () => {
      if (ve.value.length === 0)
        return;
      const { innerHeight: u } = window, g = /* @__PURE__ */ new Set();
      ve.value.forEach((b) => {
        const E = fi(b);
        if (!E)
          return;
        const { top: H, bottom: L } = E.getBoundingClientRect();
        (L < 0 || H > u) && g.add(b);
      }), g.size > 0 && (ve.value = ve.value.filter((b) => !g.has(b)));
    };
    return jd(() => {
      var u, g, b, E, H;
      if (n.forceopen == !0 && (Vt(), T(2)), xo.value && !We.value && /^v[01]_/.test(n.activeannotation || "")) {
        const L = n.activeannotation.startsWith("v0_") ? "annotation-click" : "viewport";
        We.value = !0, Le.value = !0, xt.value = L, Cn.value = n.activeannotation.replace(/^v[01]_/, ""), He.value = n.activeannotation, se("antikythera annotations toggled", {
          antikythera_entry: n.entry || void 0,
          annotations_enabled: !0,
          annotations_count: de.value.length,
          annotation_attribution_count: wo.value.length,
          annotation_trigger: L,
          menu_view: s.value,
          menu_view_name: Sn[s.value]
        });
      }
      if (!xt.value) {
        if (He.value) {
          if (n.activeannotation === He.value)
            return;
          He.value = "";
        }
        if (xo.value && !Le.value && ((u = n.activeannotation) != null && u.startsWith("v0_"))) {
          const L = "annotation-click", ce = n.activeannotation.replace("v0_", "");
          Le.value = !0, He.value = n.activeannotation, Xa(!0, L, ce);
          return;
        }
        if (xo.value && !Le.value) {
          Wa(), s.value == 2 ? (Vt(), Za()) : vr();
          return;
        }
        if (Y.value && s.value < 2) {
          if ((g = n.activeannotation) != null && g.includes("v0_")) {
            Vt();
            const L = n.activeannotation.replace("v0_", "");
            Ee.value = L, Yn(L, "click");
          }
          return;
        }
        if (s.value == 0) {
          if (ve.value = [], (b = n.activeannotation) != null && b.includes("v0_")) {
            Vt();
            const L = n.activeannotation.replace("v0_", "");
            Ee.value = L, Yn(L, "click");
            return;
          }
          if (n.inactiveannotation) {
            const L = n.inactiveannotation.replace("v0_", "").replace("v1_", "");
            Ee.value == L && (Ee.value = !1);
          }
          return;
        }
        if (s.value == 1) {
          if (Ee.value = !1, n.activeannotation && ((E = n.activeannotation) != null && E.includes("v1_"))) {
            Vt();
            const L = n.activeannotation.replace("v1_", "");
            ve.value.includes(L) || (ve.value.push(L), Yn(L, "viewport"));
            return;
          }
          if ((H = n.inactiveannotation) != null && H.includes("v1_") && ve.value.length > 0) {
            const L = n.inactiveannotation.replace("v1_", "");
            ve.value.indexOf(L) >= 0 && (qa(L), jc());
          }
          return;
        }
        s.value == 2 ? (Vt(), ve.value = [], Ee.value = !1, Za()) : vr();
      }
    }), (u, g) => {
      var b, E, H, L, ce, me, Pe, Fe;
      return k(), S("div", {
        ref_key: "ExpandedFrame",
        ref: O,
        class: ge(["expanded-frame fixed top-0 left-0 grid w-full pointer-events-none grid-cols-12 gap-x-3 gap-y-3 px-6 py-3 sm:gap-x-9 z-[1000]", {
          "h-[100dvh] overflow-x-hidden overflow-y-auto overscroll-contain hidden_scroll sm:overflow-hidden expanded-frame-clip": Re.value,
          "mobile-mid-scroll-reversing": Rt.value
        }]),
        style: bn([vc.value, j.value]),
        "data-version": "1.5.2",
        onScrollPassive: Lc
      }, [
        C("div", {
          class: ge(["expanded-frame-underlay anti-motion-fade pointer-events-none fixed z-0 rounded-[11px] bg-black", [
            { "opacity-0": !Re.value || ot.value && !$t.value },
            { "opacity-100": Re.value && (!ot.value || $t.value) },
            { "duration-[220ms] delay-[40ms]": st.value },
            { "duration-[260ms]": Rt.value },
            { "duration-150": ot.value && !$t.value && !Rt.value },
            { "duration-200": !st.value && !ot.value }
          ]])
        }, null, 2),
        C("article", {
          ref_key: "Menu",
          ref: R,
          class: ge(["anti-motion-fade pointer-events-auto relative z-10 w-sticker -translate-x-3 col-start-1 row-start-1 shrink duration-200", [
            { "opacity-0": !ee.value },
            { "col-span-12 sm:col-span-6 lg:col-span-3": !Re.value },
            {
              "expanded-scrollport expanded-sticker-column col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col gap-[10px] !border-0 !bg-transparent !p-0 text-[rgb(244_244_244)] hidden_scroll !overflow-y-auto": Re.value
            }
          ]])
        }, [
          C("aside", cm, [
            C("article", {
              ref_key: "StickerCard",
              ref: J,
              class: ge(["expanded-sticker-card border-stroke-light flex w-full flex-col overflow-hidden rounded-lg border bg-black p-[10px] text-m text-[rgb(244_244_244)]", { "minimal-shell-expanding": Ne.value }])
            }, [
              C("header", um, [
                C("a", dm, [
                  te(Us, { class: "h-[23px] w-[197px] max-w-full shrink-0 text-[rgb(244_244_244)]" })
                ]),
                te(ta, { class: "absolute top-[-3px] right-[1px] h-8 w-[19px] text-[rgb(244_244_244)]" })
              ]),
              Mt(h) >= 2 && I.value ? (k(), S("figure", {
                key: 0,
                class: ge(["anti-motion-fold block overflow-hidden rounded-[4px]", [
                  { "mt-0 max-h-0 opacity-0": fr.value },
                  { "duration-[280ms]": Rt.value, "duration-[240ms]": !Rt.value },
                  { "mt-[20px] max-h-[500px] opacity-100 2xl:max-h-[900px]": !fr.value }
                ]])
              }, [
                (k(), S("img", {
                  key: I.value,
                  src: I.value,
                  alt: re.value,
                  loading: "eager",
                  decoding: "async",
                  fetchpriority: "high",
                  class: ge(["anti-motion-fade aspect-square w-full rounded-[4px] object-cover", [
                    { "opacity-0": fr.value || !wt.value },
                    { "duration-[220ms]": Rt.value, "duration-150": !Rt.value }
                  ]]),
                  onLoad: cc,
                  onError: uc
                }, null, 42, fm))
              ], 2)) : ne("", !0),
              C("section", {
                class: ge(["anti-mobile-summary-fold", [
                  { "anti-mobile-summary-fold-collapsed": lc.value },
                  { "anti-mobile-summary-reveal": ic.value },
                  { "duration-[280ms]": st.value, "duration-[240ms]": !st.value }
                ]])
              }, [
                C("div", pm, [
                  C("div", hm, [
                    C("h2", {
                      class: ge(["uppercase transition-opacity duration-200", { "opacity-0": !v.value.title }])
                    }, ue((b = v.value) != null && b.title ? v.value.title : " "), 3),
                    C("p", {
                      class: ge(["transition-opacity duration-200", { "opacity-0": !v.value.title }])
                    }, [
                      F.value ? ((H = (E = v.value) == null ? void 0 : E.authors) == null ? void 0 : H.length) > 0 ? (k(), S("span", mm, [
                        g[2] || (g[2] = Ke(" by ")),
                        (k(!0), S(ye, null, bt(v.value.authors, (_e, Be) => (k(), S(ye, null, [
                          _e.externalLink && _e.externalLink != "" ? (k(), S("a", {
                            key: 0,
                            target: "_blank",
                            class: "underline decoration-1 underline-offset-2 hover:opacity-60",
                            href: _e.externalLink,
                            "data-ph-capture": "",
                            "data-ph-component": "antikythera-author",
                            "data-ph-action": "author-link-click",
                            "data-ph-entry": n.entry,
                            "data-ph-person-role": "author",
                            onClick: (Me) => ui(_e, "author")
                          }, ue(_e.title), 9, vm)) : (k(), S("span", ym, ue(_e.title), 1)),
                          Ke(ue(v.value.authors.length > 1 ? Be == v.value.authors.length - 2 ? " & " : Be < v.value.authors.length - 2 ? ", " : "" : ""), 1)
                        ], 64))), 256))
                      ])) : ne("", !0) : (k(), S("span", gm, g[1] || (g[1] = [
                        C("br", null, null, -1),
                        Ke("  ")
                      ]))),
                      ((ce = (L = v.value) == null ? void 0 : L.designers) == null ? void 0 : ce.length) > 0 ? (k(), S("span", bm, [
                        g[3] || (g[3] = C("br", null, null, -1)),
                        g[4] || (g[4] = Ke(" with ")),
                        (k(!0), S(ye, null, bt(v.value.designers, (_e, Be) => (k(), S(ye, null, [
                          _e.externalLink && _e.externalLink != "" ? (k(), S("a", {
                            key: 0,
                            target: "_blank",
                            class: "underline decoration-1 underline-offset-2 hover:opacity-60",
                            href: _e.externalLink,
                            "data-ph-capture": "",
                            "data-ph-component": "antikythera-author",
                            "data-ph-action": "author-link-click",
                            "data-ph-entry": n.entry,
                            "data-ph-person-role": "designer",
                            onClick: (Me) => ui(_e, "designer")
                          }, ue(_e.title), 9, wm)) : (k(), S("span", xm, ue(_e.title), 1)),
                          Ke(ue(v.value.designers.length > 1 ? Be == v.value.designers.length - 2 ? " & " : Be < v.value.designers.length - 2 ? ", " : "" : ""), 1)
                        ], 64))), 256))
                      ])) : ne("", !0)
                    ], 2)
                  ]),
                  !F.value || (me = v.value) != null && me.doi && ((Pe = v.value) == null ? void 0 : Pe.doi) != "" || gr.value ? (k(), S("aside", {
                    key: 0,
                    class: ge(["anti-motion-fade text-m mt-[20px] flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1", [
                      { "pointer-events-none opacity-0": qe.value && !ot.value },
                      { "duration-0": ot.value, "duration-[260ms]": !ot.value }
                    ]])
                  }, [
                    C("p", _m, [
                      te(ta, { class: "h-6 w-4 shrink-0 text-[rgb(244_244_244)]" }),
                      C("span", {
                        class: ge(["min-w-0 truncate whitespace-nowrap transition-opacity duration-200", { "opacity-0": !v.value.title || !v.value.doi || v.value.doi == "" }])
                      }, [
                        g[5] || (g[5] = Ke(" DOI ")),
                        v.value.doiUrl ? (k(), S("a", {
                          key: 0,
                          href: v.value.doiUrl,
                          target: "_blank",
                          class: "hover:opacity-60 cursor-crosshair",
                          "data-ph-capture": "",
                          "data-ph-component": "antikythera-doi",
                          "data-ph-action": "doi-link-click",
                          "data-ph-entry": n.entry,
                          onClick: Vc
                        }, ue(v.value.doi ? v.value.doi : "XX.XXXX/XXXX.XXXX"), 9, km)) : (k(), S("span", Cm, ue(v.value.doi ? v.value.doi : "XX.XXXX/XXXX.XXXX"), 1))
                      ], 2)
                    ]),
                    C("p", Sm, ue(gr.value ? gr.value : " "), 1)
                  ], 2)) : (k(), S("div", Tm))
                ])
              ], 2),
              C("div", {
                ref_key: "PrimaryCtaButton",
                ref: P,
                class: ge(["sticker-primary-cta overflow-hidden transition-all duration-150 ease-out", [
                  { "mt-0 max-h-0 opacity-0 pointer-events-none": !Ua.value },
                  { "mt-[10px] max-h-[40px] opacity-100 delay-[60ms]": Ua.value }
                ]])
              }, [
                te(mo, {
                  variant: "light",
                  "data-ph-capture": "",
                  "data-ph-component": "antikythera-menu",
                  "data-ph-action": Re.value ? "return-to-article" : "menu-expand",
                  "data-ph-entry": n.entry,
                  "data-ph-menu-view": Mt(s),
                  onClick: $c
                }, {
                  default: Wt(() => [
                    Ke(ue(yc.value), 1)
                  ]),
                  _: 1
                }, 8, ["data-ph-action", "data-ph-entry", "data-ph-menu-view"])
              ], 2)
            ], 2),
            Re.value ? (k(), et(ml, {
              key: 0,
              class: "hidden sm:flex",
              description: ae.value,
              "external-links": he.value,
              entry: n.entry,
              loaded: V.value,
              "expanded-opening": st.value,
              "expanded-closing": ot.value,
              onExternalLinkClick: di
            }, null, 8, ["description", "external-links", "entry", "loaded", "expanded-opening", "expanded-closing"])) : ne("", !0)
          ])
        ], 2),
        Re.value ? (k(), S(ye, { key: 0 }, [
          te(ml, {
            class: ge(["mobile-journal-description mobile-expanded-exit-content col-start-1 col-end-13 row-start-2 w-sticker -translate-x-3 sm:hidden", { "mobile-below-cta-exiting": _t.value }]),
            description: ae.value,
            "external-links": he.value,
            entry: n.entry,
            loaded: V.value,
            "natural-height": "",
            "expanded-opening": st.value,
            "expanded-closing": _t.value,
            onExternalLinkClick: di
          }, null, 8, ["class", "description", "external-links", "entry", "loaded", "expanded-opening", "expanded-closing"]),
          C("div", {
            class: ge(["mobile-pdf-preview mobile-expanded-exit-content anti-motion-fold col-start-1 col-end-13 row-start-3 w-sticker -translate-x-3 overflow-hidden sm:hidden", [
              {
                "mobile-below-cta-exiting": _t.value,
                "duration-[240ms] delay-[24ms]": _t.value,
                "duration-[220ms]": !_t.value
              },
              {
                "mt-0 max-h-0 opacity-0 -translate-y-[8px]": st.value || _t.value || !G.value || !ja.value
              },
              {
                "mt-[10px] max-h-[900px] opacity-100 translate-y-0 delay-[140ms]": !st.value && !_t.value && G.value && ja.value
              }
            ]])
          }, [
            te(za, {
              entry: v.value,
              "download-file-type": Da.value,
              onDownload: ci
            }, null, 8, ["entry", "download-file-type"])
          ], 2),
          C("section", {
            ref_key: "ExpandedScrollport",
            ref: x,
            class: ge(["expanded-scrollport expanded-details-column mobile-expanded-exit-content anti-motion-slide pointer-events-auto z-10 col-start-1 col-end-13 row-start-4 min-w-0 overflow-y-scroll text-white hidden_scroll sm:col-start-7 sm:col-end-13 sm:row-start-1 lg:col-start-4 lg:col-end-13 lg:-ml-3 lg:w-[calc(100%+var(--fontSize)*1.5)] lg:px-3", [
              {
                "mobile-expanded-exit-content-closing": _t.value,
                "duration-[220ms]": !_t.value
              },
              { "opacity-0 -translate-y-[12px]": st.value || !G.value },
              { "sm:opacity-0 sm:-translate-y-[12px] sm:duration-[220ms] sm:delay-[32ms]": _t.value },
              {
                "opacity-100 translate-y-0 delay-[80ms]": !st.value && !_t.value && G.value
              },
              { "snap-y snap-mandatory": xe.value, "snap-none": !xe.value }
            ]]),
            onScroll: li
          }, [
            C("div", Em, [
              C("div", {
                ref_key: "ExpandedBeforeRelated",
                ref: K,
                class: ge(["expanded-before-related flex w-full snap-start flex-col lg:col-span-9 lg:col-start-1", { "snap-always": xe.value }])
              }, [
                C("div", Am, [
                  te(Xg, {
                    entry: v.value,
                    loaded: G.value,
                    "load-error": q.value,
                    class: "lg:col-span-6 lg:col-start-1",
                    onSectionCollapse: Oc
                  }, null, 8, ["entry", "loaded", "load-error"]),
                  C("div", $m, [
                    te(qp, {
                      entry: v.value,
                      loaded: G.value,
                      "load-error": q.value,
                      "download-file-type": Da.value,
                      class: "lg:sticky lg:top-0 lg:self-start",
                      onDownload: ci
                    }, null, 8, ["entry", "loaded", "load-error", "download-file-type"])
                  ])
                ]),
                g[6] || (g[6] = C("div", { class: "min-h-0 flex-1" }, null, -1))
              ], 2),
              te(Th, {
                ref_key: "RelatedArticles",
                ref: W,
                entry: v.value,
                loaded: G.value,
                "load-error": q.value,
                expanded: le.value,
                class: ge(["expanded-related-page flex snap-start flex-col lg:col-span-9 lg:col-start-1", { "snap-always": xe.value }]),
                onToggle: Hc
              }, null, 8, ["entry", "loaded", "load-error", "expanded", "class"]),
              te(Xh, {
                ref_key: "AboutSectionTarget",
                ref: w,
                about: Ce.value,
                expanded: pe.value,
                class: ge(["expanded-about-page snap-start lg:col-span-9 lg:col-start-1", { "snap-always": xe.value }]),
                onToggle: Bc
              }, null, 8, ["about", "expanded", "class"])
            ])
          ], 34)
        ], 64)) : ne("", !0),
        te(mf, {
          appear: "",
          "enter-active-class": "anti-motion-slide duration-200",
          "enter-from-class": "opacity-0 -translate-y-[8px]",
          "enter-to-class": "opacity-100 translate-y-0",
          "leave-active-class": "anti-motion-slide duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 -translate-y-[6px]",
          onAfterEnter: pi,
          onAfterAppear: pi
        }, {
          default: Wt(() => [
            !Re.value && !oe.value && We.value && mr.value ? (k(), S("aside", Rm, [
              te(nm, {
                ref_key: "AnnotationAttributionCard",
                ref: z,
                modelValue: Le.value,
                "onUpdate:modelValue": g[0] || (g[0] = (_e) => Le.value = _e),
                label: mr.value,
                onToggle: Xa
              }, null, 8, ["modelValue", "label"])
            ])) : ne("", !0)
          ]),
          _: 1
        }),
        Mt(s) != 2 && (!xo.value || Le.value) && ((Fe = de.value) == null ? void 0 : Fe.length) > 0 ? (k(), et(Vf, {
          key: 1,
          name: "annotation-list",
          tag: "section",
          style: bn(U.value),
          class: ge(["anti-motion-slide col-start-1 col-end-13 sm:col-end-7 lg:col-end-4 w-sticker -translate-x-3 max-h-sansSticker overflow-y-auto overscroll-contain pointer-events-auto hidden_scroll rounded-t-[8px] flex flex-col duration-150", { "opacity-0 -translate-y-[6px]": st.value, "opacity-100 translate-y-0": !st.value }])
        }, {
          default: Wt(() => [
            (k(!0), S(ye, null, bt(Ma.value, (_e, Be) => {
              var Me;
              return k(), et(Zg, {
                key: _e.id,
                annotation: _e,
                articleAttributionVisibility: ((Me = v.value) == null ? void 0 : Me.annotationVisibility) ?? !0,
                view: Mt(s),
                isMobile: Y.value,
                style: bn({ zIndex: Ma.value.length - Be }),
                onClose: kc
              }, null, 8, ["annotation", "articleAttributionVisibility", "view", "isMobile", "style"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["style", "class"])) : ne("", !0),
        te(rm, { visible: Z.value }, null, 8, ["visible"])
      ], 38);
    };
  }
}, zm = /* @__PURE__ */ vo(Pm, [["styles", [lm, sm]], ["__scopeId", "data-v-a24fe66f"]]), Mm = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.richtext *+h1{margin-top:1.28em}.richtext *+h2{margin-top:1.28em}.richtext *+ol{margin-top:1.28em}.richtext *+p{margin-top:1.28em}.richtext *+ul{margin-top:1.28em}.richtext a:hover{opacity:.6}.richtext a{text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:2px}.richtext li{padding-left:0}.richtext ol{list-style-type:decimal;padding-left:calc(var(--fontSize) * 1)}.richtext ul{list-style-type:disc;padding-left:calc(var(--fontSize) * 1)}@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none){.richtext ol,.richtext ul{padding-left:calc(var(--fontSize) * 1.5)}}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.collapse{visibility:collapse}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-\\[\\.95em\\]{right:-.95em}.bottom-\\[\\.15em\\]{bottom:.15em}.left-0{left:0}.left-\\[2px\\]{left:2px}.right-3{right:calc(var(--fontSize) * .75)}.right-\\[1px\\]{right:1px}.top-0{top:0}.top-1\\/2{top:50%}.top-3{top:calc(var(--fontSize) * .75)}.top-\\[-3px\\]{top:-3px}.top-\\[2px\\]{top:2px}.isolate{isolation:isolate}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-\\[1000\\]{z-index:1000}.z-\\[2000\\]{z-index:2000}.z-\\[999\\]{z-index:999}.order-1{order:1}.order-2{order:2}.order-3{order:3}.col-span-1{grid-column:span 1 / span 1}.col-span-12{grid-column:span 12 / span 12}.col-span-2{grid-column:span 2 / span 2}.col-span-3{grid-column:span 3 / span 3}.col-span-6{grid-column:span 6 / span 6}.col-start-1{grid-column-start:1}.col-end-13{grid-column-end:13}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.row-start-4{grid-row-start:4}.-mx-3{margin-left:calc(calc(var(--fontSize) * .75) * -1);margin-right:calc(calc(var(--fontSize) * .75) * -1)}.mx-1{margin-left:calc(var(--fontSize) * .25);margin-right:calc(var(--fontSize) * .25)}.mx-auto{margin-left:auto;margin-right:auto}.-mb-3{margin-bottom:calc(calc(var(--fontSize) * .75) * -1)}.mb-3{margin-bottom:calc(var(--fontSize) * .75)}.mb-4{margin-bottom:calc(var(--fontSize) * 1)}.mb-\\[10px\\]{margin-bottom:10px}.ml-auto{margin-left:auto}.mr-0{margin-right:0}.mr-0\\.5{margin-right:.125rem}.mt-0{margin-top:0}.mt-1{margin-top:calc(var(--fontSize) * .25)}.mt-3{margin-top:calc(var(--fontSize) * .75)}.mt-\\[1\\.28em\\]{margin-top:1.28em}.mt-\\[10px\\]{margin-top:10px}.mt-\\[20px\\]{margin-top:20px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.\\!block{display:block!important}.block{display:block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.\\!hidden{display:none!important}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-10{height:calc(var(--fontSize) * 2.5)}.h-2{height:calc(var(--fontSize) * .5)}.h-6{height:calc(var(--fontSize) * 1.5)}.h-8{height:calc(var(--fontSize) * 2)}.h-\\[\\.7em\\]{height:.7em}.h-\\[100dvh\\]{height:100dvh}.h-\\[16px\\]{height:16px}.h-\\[20px\\]{height:20px}.h-\\[23px\\]{height:23px}.h-full{height:100%}.max-h-0{max-height:0}.max-h-\\[1200px\\]{max-height:1200px}.max-h-\\[15svh\\]{max-height:15svh}.max-h-\\[260px\\]{max-height:260px}.max-h-\\[40px\\]{max-height:40px}.max-h-\\[500px\\]{max-height:500px}.max-h-\\[900px\\]{max-height:900px}.max-h-sansSticker{max-height:var(--sansSticker)}.min-h-0{min-height:0}.min-h-\\[1\\.28em\\]{min-height:1.28em}.min-h-\\[220px\\]{min-height:220px}.min-h-\\[calc\\(1\\.28em\\*3\\)\\]{min-height:3.84em}.min-h-full{min-height:100%}.w-1\\/2{width:50%}.w-10{width:calc(var(--fontSize) * 2.5)}.w-12{width:calc(var(--fontSize) * 3)}.w-3\\/4{width:75%}.w-4{width:calc(var(--fontSize) * 1)}.w-\\[\\.7em\\]{width:.7em}.w-\\[121px\\]{width:121px}.w-\\[16px\\]{width:16px}.w-\\[197px\\]{width:197px}.w-\\[19px\\]{width:19px}.w-\\[36px\\]{width:36px}.w-auto{width:auto}.w-full{width:100%}.w-sticker{width:var(--sticker)}.min-w-0{min-width:0}.min-w-full{min-width:100%}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-3\\/4{flex-basis:75%}.basis-full{flex-basis:100%}.-translate-x-3{--tw-translate-x: calc(calc(var(--fontSize) * .75) * -1);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[11\\.25em\\]{--tw-translate-x: -11.25em;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[12px\\]{--tw-translate-y: -12px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[6px\\]{--tw-translate-y: -6px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[8px\\]{--tw-translate-y: -8px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[16px\\]{--tw-translate-x: 16px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-crosshair{cursor:crosshair}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.snap-none{scroll-snap-type:none}.snap-y{scroll-snap-type:y var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness: mandatory}.snap-start{scroll-snap-align:start}.snap-always{scroll-snap-stop:always}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-rows-\\[auto_auto\\]{grid-template-rows:auto auto}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:calc(var(--fontSize) * .5)}.gap-3{gap:calc(var(--fontSize) * .75)}.gap-6{gap:calc(var(--fontSize) * 1.5)}.gap-9{gap:calc(var(--fontSize) * 2.25)}.gap-\\[10px\\]{gap:10px}.gap-\\[20px\\]{gap:20px}.gap-x-3{-moz-column-gap:calc(var(--fontSize) * .75);column-gap:calc(var(--fontSize) * .75)}.gap-x-6{-moz-column-gap:calc(var(--fontSize) * 1.5);column-gap:calc(var(--fontSize) * 1.5)}.gap-y-1{row-gap:calc(var(--fontSize) * .25)}.gap-y-3{row-gap:calc(var(--fontSize) * .75)}.gap-y-\\[10px\\]{row-gap:10px}.overflow-hidden{overflow:hidden}.\\!overflow-y-auto{overflow-y:auto!important}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.overflow-y-scroll{overflow-y:scroll}.overscroll-contain{overscroll-behavior:contain}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded-\\[11px\\]{border-radius:11px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[8px\\]{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:calc(var(--fontSize) * .5)}.rounded-t-\\[8px\\]{border-top-left-radius:8px;border-top-right-radius:8px}.\\!border-0{border-width:0px!important}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-\\[rgba\\(204\\,204\\,204\\,0\\.2\\)\\]{border-color:#ccc3}.border-stroke-dark{border-color:var(--stroke-dark)}.border-stroke-light{border-color:var(--stroke-light)}.\\!bg-transparent{background-color:transparent!important}.bg-\\[\\#F2F2F2\\]{--tw-bg-opacity: 1;background-color:rgb(242 242 242 / var(--tw-bg-opacity, 1))}.bg-\\[\\#ff5a01\\]{--tw-bg-opacity: 1;background-color:rgb(255 90 1 / var(--tw-bg-opacity, 1))}.bg-\\[color-mix\\(in_srgb\\,var\\(--white\\)_16\\%\\,var\\(--black\\)\\)\\]{background-color:color-mix(in srgb,var(--white) 16%,var(--black))}.bg-\\[rgba\\(204\\,204\\,204\\,0\\.2\\)\\]{background-color:#ccc3}.bg-black{background-color:var(--black)}.bg-blue-200{--tw-bg-opacity: 1;background-color:rgb(191 219 254 / var(--tw-bg-opacity, 1))}.bg-white{background-color:var(--white)}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-top{-o-object-position:top;object-position:top}.\\!p-0{padding:0!important}.p-3{padding:calc(var(--fontSize) * .75)}.p-\\[10px\\]{padding:10px}.px-3{padding-left:calc(var(--fontSize) * .75);padding-right:calc(var(--fontSize) * .75)}.px-6{padding-left:calc(var(--fontSize) * 1.5);padding-right:calc(var(--fontSize) * 1.5)}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.py-3{padding-top:calc(var(--fontSize) * .75);padding-bottom:calc(var(--fontSize) * .75)}.py-\\[10px\\]{padding-top:10px;padding-bottom:10px}.py-\\[4px\\]{padding-top:4px;padding-bottom:4px}.pb-0{padding-bottom:0}.pb-3{padding-bottom:calc(var(--fontSize) * .75)}.pb-9{padding-bottom:calc(var(--fontSize) * 2.25)}.pb-\\[10px\\]{padding-bottom:10px}.pl-3{padding-left:calc(var(--fontSize) * .75)}.pl-\\[1px\\]{padding-left:1px}.pr-12{padding-right:calc(var(--fontSize) * 3)}.pr-2{padding-right:calc(var(--fontSize) * .5)}.pr-3{padding-right:calc(var(--fontSize) * .75)}.pr-8{padding-right:calc(var(--fontSize) * 2)}.pr-\\[48px\\]{padding-right:48px}.pt-3{padding-top:calc(var(--fontSize) * .75)}.pt-6{padding-top:calc(var(--fontSize) * 1.5)}.pt-\\[10px\\]{padding-top:10px}.pt-\\[1px\\]{padding-top:1px}.pt-\\[20px\\]{padding-top:20px}.text-left{text-align:left}.text-right{text-align:right}.font-sans{font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif}.text-m{font-size:var(--fontSize);line-height:1.28;letter-spacing:0em}.text-s{font-size:var(--smallFontSize);line-height:1.2;letter-spacing:0em}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.leading-\\[1\\.1\\]{line-height:1.1}.leading-\\[1\\.25\\]{line-height:1.25}.text-\\[\\#f4f4f4\\]{--tw-text-opacity: 1;color:rgb(244 244 244 / var(--tw-text-opacity, 1))}.text-\\[color-mix\\(in_srgb\\,var\\(--black\\)_50\\%\\,transparent\\)\\]{color:color-mix(in srgb,var(--black) 50%,transparent)}.text-\\[color-mix\\(in_srgb\\,var\\(--white\\)_50\\%\\,transparent\\)\\]{color:color-mix(in srgb,var(--white) 50%,transparent)}.text-\\[rgb\\(244_244_244\\)\\]{--tw-text-opacity: 1;color:rgb(244 244 244 / var(--tw-text-opacity, 1))}.text-\\[rgb\\(244_244_244_\\/_0\\.5\\)\\]{color:#f4f4f480}.text-black{color:var(--black)}.text-white{color:var(--white)}.underline{text-decoration-line:underline}.decoration-1{text-decoration-thickness:1px}.underline-offset-2{text-underline-offset:2px}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.delay-100{transition-delay:.1s}.delay-\\[140ms\\]{transition-delay:.14s}.delay-\\[24ms\\]{transition-delay:24ms}.delay-\\[40ms\\]{transition-delay:40ms}.delay-\\[60ms\\]{transition-delay:60ms}.delay-\\[80ms\\]{transition-delay:80ms}.duration-0{transition-duration:0s}.duration-100{transition-duration:.1s}.duration-150{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.duration-\\[200ms\\]{transition-duration:.2s}.duration-\\[220ms\\]{transition-duration:.22s}.duration-\\[240ms\\]{transition-duration:.24s}.duration-\\[260ms\\]{transition-duration:.26s}.duration-\\[280ms\\]{transition-duration:.28s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}:host{font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.2;--fontSize: 14px;--insetsvh: calc(100svh - (var(--fontSize) * 1.5));--insetsvw: calc(100vw - var(--fontSize));--fullwidth: calc(100% + var(--fontSize));--sticker: calc(100% + (var(--fontSize) * 1.5));--col1: calc((25% - ((var(--fontSize) * 6) / 4)));--col2: calc((50% - (var(--fontSize) * 2 / 2)));--col3: calc((100vw - (var(--fontSize) * 5)) * .75);--sansSticker: calc(100svh - (var(--fontSize) * 20));--smallFontSize: calc(.857 * var(--fontSize));--black: #000;--white: #fff;--gray: #e7e7e7;--darkgray: #444444;--graytext: #686868;--stroke-light: rgba(204, 204, 204, .2);--stroke-dark: rgba(204, 204, 204, .4);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media screen and (max-width: 768px){:host{--insetsvh: calc(100dvh - var(--fontSize))}}@media screen and (min-width: 1000px){:host{font-size:14px;--fontSize: 14px}}@media screen and (min-width: 1200px){:host{font-size:14px;--fontSize: 14px}}@media screen and (min-width: 1450px){:host{font-size:15px;--fontSize: 15px}}@media screen and (min-width: 1650px){:host{font-size:16px;--fontSize: 16px}}@media screen and (min-width: 1850px){:host{font-size:18px;--fontSize: 18px}}@media screen and (min-width: 2050px){:host{font-size:20px;--fontSize: 20px}}@media screen and (min-width: 2250px){:host{font-size:22px;--fontSize: 22px}}@media screen and (min-width: 2450px){:host{font-size:24px;--fontSize: 24px}}@media screen and (min-width: 2650px){:host{font-size:26px;--fontSize: 26px}}@media screen and (min-width: 2850px){:host{font-size:28px;--fontSize: 28px}}@media screen and (min-width: 3050px){:host{font-size:30px;--fontSize: 30px}}.hidden_scroll::-webkit-scrollbar{display:none}.hidden_scroll{scrollbar-width:none;-ms-overflow-style:none}.transition-allowdiscrete{transition-behavior:allow-discrete}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:-left-2:before{content:var(--tw-content);left:calc(calc(var(--fontSize) * .5) * -1)}.before\\:-top-6:before{content:var(--tw-content);top:calc(calc(var(--fontSize) * 1.5) * -1)}.before\\:h-16:before{content:var(--tw-content);height:calc(var(--fontSize) * 4)}.before\\:w-fullwidth:before{content:var(--tw-content);width:var(--fullwidth)}.before\\:bg-gradient-to-b:before{content:var(--tw-content);background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.before\\:from-black:before{content:var(--tw-content);--tw-gradient-from: var(--black) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:from-70\\%:before{content:var(--tw-content);--tw-gradient-from-position: 70%}.after\\:pointer-events-none:after{content:var(--tw-content);pointer-events:none}.after\\:invisible:after{content:var(--tw-content);visibility:hidden}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:right-0:after{content:var(--tw-content);right:0}.after\\:box-content:after{content:var(--tw-content);box-sizing:content-box}.after\\:bg-gradient-to-l:after{content:var(--tw-content);background-image:linear-gradient(to left,var(--tw-gradient-stops))}.after\\:from-black:after{content:var(--tw-content);--tw-gradient-from: var(--black) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\\:from-90\\%:after{content:var(--tw-content);--tw-gradient-from-position: 90%}.after\\:pl-2:after{content:var(--tw-content);padding-left:calc(var(--fontSize) * .5)}.first\\:ml-0:first-child{margin-left:0}.last\\:mb-0:last-child{margin-bottom:0}.last\\:mr-0:last-child{margin-right:0}.last\\:border-b-0:last-child{border-bottom-width:0px}@media (hover: hover) and (pointer: fine){.hover\\:scale-\\[0\\.99\\]:hover{--tw-scale-x: .99;--tw-scale-y: .99;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:opacity-60:hover{opacity:.6}.hover\\:duration-100:hover{transition-duration:.1s}.group:hover .group-hover\\:opacity-100{opacity:1}.group:hover .group-hover\\:delay-100{transition-delay:.1s}.peer:hover~.peer-hover\\:opacity-0{opacity:0}.peer:hover~.peer-hover\\:delay-0{transition-delay:0s}}@media (min-width: 640px){.sm\\:absolute{position:absolute}.sm\\:bottom-3{bottom:calc(var(--fontSize) * .75)}.sm\\:left-3{left:calc(var(--fontSize) * .75)}.sm\\:right-3{right:calc(var(--fontSize) * .75)}.sm\\:top-3{top:calc(var(--fontSize) * .75)}.sm\\:col-span-2{grid-column:span 2 / span 2}.sm\\:col-span-3{grid-column:span 3 / span 3}.sm\\:col-span-6{grid-column:span 6 / span 6}.sm\\:col-start-7{grid-column-start:7}.sm\\:col-end-13{grid-column-end:13}.sm\\:col-end-7{grid-column-end:7}.sm\\:row-start-1{grid-row-start:1}.sm\\:mb-0{margin-bottom:0}.sm\\:mt-0{margin-top:0}.sm\\:mt-2{margin-top:calc(var(--fontSize) * .5)}.sm\\:block{display:block}.sm\\:inline{display:inline}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:h-6{height:calc(var(--fontSize) * 1.5)}.sm\\:w-6{width:calc(var(--fontSize) * 1.5)}.sm\\:w-8{width:calc(var(--fontSize) * 2)}.sm\\:w-auto{width:auto}.sm\\:basis-col1{flex-basis:var(--col1)}.sm\\:basis-col2{flex-basis:var(--col2)}.sm\\:-translate-y-\\[12px\\]{--tw-translate-y: -12px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sm\\:flex-wrap{flex-wrap:wrap}.sm\\:gap-2{gap:calc(var(--fontSize) * .5)}.sm\\:gap-x-9{-moz-column-gap:calc(var(--fontSize) * 2.25);column-gap:calc(var(--fontSize) * 2.25)}.sm\\:overflow-hidden{overflow:hidden}.sm\\:pt-0{padding-top:0}.sm\\:text-m{font-size:var(--fontSize);line-height:1.28;letter-spacing:0em}.sm\\:decoration-2{text-decoration-thickness:2px}.sm\\:underline-offset-4{text-underline-offset:4px}.sm\\:opacity-0{opacity:0}.sm\\:delay-\\[32ms\\]{transition-delay:32ms}.sm\\:duration-\\[220ms\\]{transition-duration:.22s}.sm\\:before\\:hidden:before{content:var(--tw-content);display:none}.sm\\:after\\:visible:after{content:var(--tw-content);visibility:visible}.sm\\:after\\:h-8:after{content:var(--tw-content);height:calc(var(--fontSize) * 2)}.sm\\:after\\:w-full:after{content:var(--tw-content);width:100%}}@media (min-width: 768px){.md\\:mt-2{margin-top:calc(var(--fontSize) * .5)}.md\\:grid-cols-\\[repeat\\(2\\,minmax\\(auto\\,1fr\\)\\)\\]{grid-template-columns:repeat(2,minmax(auto,1fr))}.md\\:pl-3{padding-left:calc(var(--fontSize) * .75)}.md\\:opacity-0{opacity:0}}@media (min-width: 1024px){.lg\\:absolute{position:absolute}.lg\\:sticky{position:sticky}.lg\\:right-0{right:0}.lg\\:top-0{top:0}.lg\\:col-span-3{grid-column:span 3 / span 3}.lg\\:col-span-6{grid-column:span 6 / span 6}.lg\\:col-span-9{grid-column:span 9 / span 9}.lg\\:col-start-1{grid-column-start:1}.lg\\:col-start-4{grid-column-start:4}.lg\\:col-start-7{grid-column-start:7}.lg\\:col-end-13{grid-column-end:13}.lg\\:col-end-4{grid-column-end:4}.lg\\:-mx-3{margin-left:calc(calc(var(--fontSize) * .75) * -1);margin-right:calc(calc(var(--fontSize) * .75) * -1)}.lg\\:-ml-3{margin-left:calc(calc(var(--fontSize) * .75) * -1)}.lg\\:mr-1{margin-right:calc(var(--fontSize) * .25)}.lg\\:line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:h-8{height:calc(var(--fontSize) * 2)}.lg\\:h-fit{height:-moz-fit-content;height:fit-content}.lg\\:h-full{height:100%}.lg\\:max-h-\\[20svh\\]{max-height:20svh}.lg\\:min-h-\\[calc\\(1\\.28em\\*4\\)\\]{min-height:5.12em}.lg\\:w-10{width:calc(var(--fontSize) * 2.5)}.lg\\:w-8{width:calc(var(--fontSize) * 2)}.lg\\:w-\\[calc\\(\\(100\\%-var\\(--fontSize\\)\\*18\\)\\/3\\+var\\(--fontSize\\)\\*4\\.5\\)\\]{width:calc((100% - var(--fontSize) * 18) / 3 + var(--fontSize) * 4.5)}.lg\\:w-\\[calc\\(100\\%\\+var\\(--fontSize\\)\\*1\\.5\\)\\]{width:calc(100% + var(--fontSize) * 1.5)}.lg\\:w-\\[calc\\(50\\%-var\\(--fontSize\\)\\)\\]{width:calc(50% - var(--fontSize))}.lg\\:w-auto{width:auto}.lg\\:flex-1{flex:1 1 0%}.lg\\:basis-\\[calc\\(70vh-7\\.5rem\\)\\]{flex-basis:calc(70vh - 7.5rem)}.lg\\:grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:flex-col{flex-direction:column}.lg\\:flex-nowrap{flex-wrap:nowrap}.lg\\:items-stretch{align-items:stretch}.lg\\:gap-6{gap:calc(var(--fontSize) * 1.5)}.lg\\:gap-x-9{-moz-column-gap:calc(var(--fontSize) * 2.25);column-gap:calc(var(--fontSize) * 2.25)}.lg\\:self-start{align-self:flex-start}.lg\\:px-3{padding-left:calc(var(--fontSize) * .75);padding-right:calc(var(--fontSize) * .75)}.lg\\:pb-\\[48px\\]{padding-bottom:48px}.lg\\:pt-0{padding-top:0}.lg\\:last\\:pb-4:last-child{padding-bottom:calc(var(--fontSize) * 1)}@media (hover: hover) and (pointer: fine){.group:hover .lg\\:group-hover\\:opacity-100{opacity:1}}}@media (min-width: 1280px){.xl\\:line-clamp-6{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6}.xl\\:h-10{height:calc(var(--fontSize) * 2.5)}.xl\\:min-h-\\[calc\\(1\\.28em\\*6\\)\\]{min-height:7.68em}.xl\\:w-10{width:calc(var(--fontSize) * 2.5)}.xl\\:w-12{width:calc(var(--fontSize) * 3)}.xl\\:gap-6{gap:calc(var(--fontSize) * 1.5)}}@media (min-width: 1536px){.\\32xl\\:max-h-\\[900px\\]{max-height:900px}}.\\[\\&_a\\:hover\\]\\:opacity-60 a:hover{opacity:.6}.\\[\\&_a\\]\\:underline a{text-decoration-line:underline}.\\[\\&_a\\]\\:decoration-1 a{text-decoration-thickness:1px}.\\[\\&_a\\]\\:underline-offset-2 a{text-underline-offset:2px}.\\[\\&_p\\+p\\]\\:mt-5 p+p{margin-top:calc(var(--fontSize) * 1.25)}.\\[\\&_p\\+p\\]\\:mt-\\[1\\.28em\\] p+p{margin-top:1.28em}.\\[\\&_p\\+p\\]\\:mt-\\[10px\\] p+p{margin-top:10px}', ac = (e, t = 0) => {
  const n = Array.isArray(e.styles) ? [...e.styles] : [];
  return n.splice(t, 0, Mm), e.styles = n, e;
}, Lm = /* @__PURE__ */ Vs(ac(zm, 1)), Om = "", Hm = {
  key: 0,
  class: "grid grid-cols-6 w-full lg:w-[calc(50%-var(--fontSize))] gap-9 pt-6 justify-center mx-auto"
}, Bm = ["href", "data-ph-entry", "data-ph-credit-format", "onClick"], Vm = { key: 1 }, Nm = {
  key: 0,
  class: "[&_p+p]:mt-[1.28em] mt-[1.28em]"
}, Fm = {
  key: 0,
  class: "[&_p+p]:mt-[1.28em] mt-[1.28em]"
}, Dm = ["data-ph-entry"], jm = {
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
    const t = e, { getSettings: n, getEntry: o } = la({ entry: t.entry, environment: t.environment, apiUrl: t.apiUrl }), r = X(!1), a = X(null), i = Q(() => {
      var c, d;
      return js({
        theme: t.theme,
        backgroundColor: t.apiBackgroundColor || ((c = a.value) == null ? void 0 : c.apiBackgroundColor),
        foregroundColor: t.apiForegroundColor || ((d = a.value) == null ? void 0 : d.apiForegroundColor)
      });
    }), l = (c) => {
      if (c)
        try {
          return new URL(c, window.location.origin).hostname;
        } catch {
          return;
        }
    }, s = () => {
      se("antikythera footer scroll top clicked", {
        antikythera_entry: t.entry || void 0
      }), window.scrollTo({ top: 0, behavior: "smooth" });
    }, f = (c) => {
      var d;
      se("antikythera credit link clicked", {
        antikythera_entry: t.entry || void 0,
        credit_title: (c == null ? void 0 : c.title) || void 0,
        credit_format: (c == null ? void 0 : c.format) || void 0,
        credit_is_contributor: !!(c != null && c.isContributor),
        credit_person_name: ((d = c == null ? void 0 : c.person) == null ? void 0 : d.title) || void 0,
        credit_external_domain: l(c == null ? void 0 : c.externalLink)
      });
    };
    return ho(async () => {
      var c, d, h, y, T, R, O;
      if (t.entry) {
        const x = await o();
        x != null && x.error && se("antikythera footer entry load error", {
          antikythera_entry: t.entry || void 0,
          error_message: x.error
        }), r.value = ((d = (c = x == null ? void 0 : x.entry) == null ? void 0 : c.annotations) == null ? void 0 : d.length) > 0, a.value = x == null ? void 0 : x.entry, se("antikythera footer loaded", {
          antikythera_entry: t.entry || void 0,
          entry_title: ((h = x == null ? void 0 : x.entry) == null ? void 0 : h.title) || void 0,
          annotations_count: ((T = (y = x == null ? void 0 : x.entry) == null ? void 0 : y.annotations) == null ? void 0 : T.length) || 0,
          credits_count: ((O = (R = x == null ? void 0 : x.entry) == null ? void 0 : R.creditsList) == null ? void 0 : O.length) || 0
        });
      } else
        console.warn("antikythera footer skipped: no entry slug provided");
    }), (c, d) => {
      var h, y, T, R, O;
      return k(), S("footer", {
        class: ge(["relative w-full z-[999] bg-black text-white rounded-[8px] w-sticker py-3 px-3 -translate-x-3 border border-stroke-light mb-3 box-border", [{ "!hidden": !r.value && ((y = (h = a.value) == null ? void 0 : h.creditsList) == null ? void 0 : y.length) <= 0 }, { "pb-9": !r.value }]]),
        style: bn(i.value)
      }, [
        ((R = (T = a.value) == null ? void 0 : T.creditsList) == null ? void 0 : R.length) > 0 ? (k(), S("section", Hm, [
          (k(!0), S(ye, null, bt((O = a.value) == null ? void 0 : O.creditsList, (x, K) => {
            var W, w, P, J, z;
            return k(), S("article", {
              class: ge(["", [{ "col-span-6 sm:col-span-3 w-full": x.format == "half" }, { "col-span-3 sm:col-span-2 w-full": x.format == "quarter" }]])
            }, [
              C("h2", null, ue(x.title), 1),
              x.isContributor ? (k(), S(ye, { key: 0 }, [
                C("h3", null, [
                  x.externalLink && x.externalLink != "" ? (k(), S("a", {
                    key: 0,
                    href: x.externalLink,
                    target: "_blank",
                    class: "underline underline-offset-4 decoration-1 sm:underline-offset-4 sm:decoration-2 hover:opacity-60",
                    "data-ph-capture": "",
                    "data-ph-component": "antikythera-footer",
                    "data-ph-action": "credit-link-click",
                    "data-ph-entry": t.entry,
                    "data-ph-credit-format": x.format,
                    onClick: (U) => f(x)
                  }, [
                    C("strong", null, ue((W = x == null ? void 0 : x.person) == null ? void 0 : W.title), 1)
                  ], 8, Bm)) : (k(), S("strong", Vm, ue((w = x == null ? void 0 : x.person) == null ? void 0 : w.title), 1))
                ]),
                (P = x == null ? void 0 : x.person) != null && P.biography ? (k(), S("div", Nm, [
                  te(Mt(Go), {
                    value: (J = x == null ? void 0 : x.person) != null && J.biography ? (z = x == null ? void 0 : x.person) == null ? void 0 : z.biography : []
                  }, null, 8, ["value"])
                ])) : ne("", !0)
              ], 64)) : (k(), S(ye, { key: 1 }, [
                x != null && x.custom ? (k(), S("div", Fm, [
                  te(Mt(Go), {
                    value: x != null && x.custom ? x == null ? void 0 : x.custom : []
                  }, null, 8, ["value"])
                ])) : ne("", !0)
              ], 64))
            ], 2);
          }), 256))
        ])) : ne("", !0),
        e.scrollTop ? (k(), S("button", {
          key: 1,
          onClick: s,
          class: "text-left col-span-12 sm:absolute sm:bottom-3 sm:left-3 text-xs text-black hover:opacity-60",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-footer",
          "data-ph-action": "scroll-top",
          "data-ph-entry": t.entry
        }, " ↑ Back to top ", 8, Dm)) : ne("", !0)
      ], 6);
    };
  }
}, Um = /* @__PURE__ */ vo(jm, [["styles", [Om]]]), Km = /* @__PURE__ */ Vs(ac(Um, 0)), ra = "2.0.2-rc.260721";
console.info(`Antikythera API v${ra}`);
class Wm {
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
    analytics: d = !0
  } = {}) {
    Cl({
      analytics: d,
      entry: t,
      environment: l,
      apiUrl: s,
      packageVersion: ra,
      explicit: !0
    }), customElements.get(o) || customElements.define(o, Lm), customElements.get(r) || customElements.define(r, Km);
    const { entryId: h, getSettings: y, getEntry: T, getEntryMeta: R, getAnnotations: O, init: x, reinit: K, detectAnnotations: W } = la({
      entry: t,
      environment: l,
      apiUrl: s,
      customCss: f,
      analytics: d,
      packageVersion: ra
    });
    this.entryId = h, this.getSettings = y, this.getEntry = T, this.getEntryMeta = R, this.getAnnotations = O, this.init = x, this.reinit = K, this.detectAnnotations = W, this.captureAnalyticsEvent = se, i || this.init({ menuName: o, annotationClass: a, detectAnnotationsOnInit: c });
  }
}
export {
  Wm as Antikythera,
  Km as AntikytheraFooter,
  Lm as AntikytheraMenu
};
