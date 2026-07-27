const Fr = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_NITRO_SERVER_PORT: "3030", VITE_POSTHOG_HOST: "https://us.i.posthog.com", VITE_POSTHOG_PROJECT_API_KEY: "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz", VITE_POSTHOG_UI_HOST: "https://us.posthog.com" }, _u = "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz", ku = "https://k.antikythera.org", Cu = "https://us.posthog.com", Su = "https://api.antikythera.org", Tu = 100, Vi = [
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
], Eu = {
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
}, Au = "attr__data-ph-";
let De = null, Mn = null, or = !1, En = !1, Ni = !1, be = null, ka = {}, Fi = !1, qn = null, fr = null, Ca = 0, Xl = 0;
const Dr = /* @__PURE__ */ new Set(), go = [], Hn = (e) => {
  if (!(typeof globalThis > "u"))
    return globalThis[e];
}, Go = (e) => Fr == null ? void 0 : Fr[e], Iu = (e) => e || Hn("__ANTIKYTHERA_API_URL__") || Go("VITE_NITRO_SERVER") || Hn("__ANTIKYTHERA_TEST_SERVER__") || Su, $u = () => typeof window > "u" ? !1 : new URLSearchParams(window.location.search).has("telemetry"), jr = (e) => {
  if (e === "projectApiKey") return "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz";
  if (e === "host") return "https://k.antikythera.org";
  if (e === "uiHost") return "";
}, Ru = (e, { timeout: t = 2500 } = {}) => {
  typeof window > "u" || (typeof window.requestIdleCallback == "function" ? window.requestIdleCallback(e, { timeout: t }) : window.setTimeout(e, 300));
}, Di = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      const t = new URL(e, typeof window < "u" ? window.location.origin : void 0);
      return `${t.origin}${t.pathname}`;
    } catch {
      return;
    }
}, Pu = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      return new URL(e, typeof window < "u" ? window.location.origin : void 0).hostname;
    } catch {
      return;
    }
}, zu = (e) => {
  if (!(!e || typeof e != "string"))
    try {
      const t = new URL(e);
      return !["http:", "https:"].includes(t.protocol) || t.username || t.password ? void 0 : t.hostname;
    } catch {
      return;
    }
}, Mu = (e, t) => {
  const n = Object.prototype.hasOwnProperty.call(t, "tracingHeaders") ? t.tracingHeaders : t.tracing_headers;
  if (n === !1) return [];
  if (Array.isArray(n)) return n.filter(Boolean);
  const o = zu(Iu(e));
  return o ? [o] : [];
}, Lu = (e, t) => {
  if (e === !1) return { enabled: !1 };
  const n = typeof e == "object" && e !== null ? e : {}, o = $u() ? "full" : n.mode || n.analyticsMode || "cookieless", r = o === "full", a = !r && n.autocapture !== !1;
  return {
    enabled: !0,
    mode: o,
    fullTracking: r,
    anonymousAutocapture: a,
    projectApiKey: n.projectApiKey || n.posthogProjectApiKey || Go("VITE_POSTHOG_PROJECT_API_KEY") || Hn("__ANTIKYTHERA_POSTHOG_PROJECT_API_KEY__") || Hn("__ANTIKYTHERA_POSTHOG_KEY__") || jr("projectApiKey") || _u,
    host: n.host || n.posthogHost || Go("VITE_POSTHOG_HOST") || Hn("__ANTIKYTHERA_POSTHOG_HOST__") || jr("host") || ku,
    uiHost: n.uiHost || n.posthogUiHost || Go("VITE_POSTHOG_UI_HOST") || Hn("__ANTIKYTHERA_POSTHOG_UI_HOST__") || jr("uiHost") || Cu,
    autocapture: r ? n.autocapture !== !1 : a ? Eu : !1,
    deadClicks: r && n.deadClicks !== !1 && n.dead_clicks !== !1,
    rageclick: r && n.rageclick !== !1,
    sessionReplay: r && n.sessionReplay !== !1,
    heatmaps: r && n.heatmaps !== !1,
    exceptions: r && n.exceptions !== !1,
    pageviews: n.pageviews !== !1,
    pageleave: n.pageleave !== !1,
    apiRequests: n.apiRequests !== !1,
    webVitals: n.webVitals !== !1,
    tracingHeaders: Mu(t, n),
    personProfiles: n.personProfiles || n.person_profiles || (r ? "always" : "identified_only"),
    cookielessMode: n.cookielessMode || n.cookieless_mode || void 0,
    debug: n.debug === !0
  };
}, ji = (e = {}) => ({
  ...ka,
  ...e
}), Ou = (e) => (e != null && e.properties && (e.properties.$current_url && (e.properties.$current_url = Di(e.properties.$current_url)), e.properties.$referrer && (e.properties.$referrer = Di(e.properties.$referrer)), be != null && be.fullTracking || (e.properties.$host = e.properties.$host || Pu(e.properties.$current_url), delete e.properties.$ip, delete e.properties.$raw_user_agent, delete e.properties.$element_text, delete e.properties.$el_text, delete e.properties.$elements_chain, Array.isArray(e.properties.$elements) && (e.properties.$elements = e.properties.$elements.map(
  (t) => Object.fromEntries(
    Object.entries(t).filter(([n]) => n === "tag_name" || n.startsWith(Au))
  )
)))), e), Hu = () => {
  var e;
  typeof window > "u" || !((e = window.performance) != null && e.getEntriesByType) || window.setTimeout(() => {
    const [t] = window.performance.getEntriesByType("navigation");
    t && de("antikythera page performance measured", {
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
    initialized: or,
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
    posthog: or && De ? {
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
    lastError: qn,
    lastCapture: fr,
    captureAttemptCount: Ca,
    postHogCaptureCount: Xl,
    pendingCaptureCount: go.length,
    posthogModuleRequested: !!Mn,
    capture: (a = "antikythera browser smoke test", i = {}) => de(a, i)
  });
}, Bu = (e, t) => {
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
    custom_personal_data_properties: t.fullTracking ? [] : Vi,
    property_denylist: t.fullTracking ? [] : Vi,
    request_batching: !0,
    tracing_headers: t.tracingHeaders,
    respect_dnt: !0,
    cookieless_mode: t.fullTracking ? void 0 : t.cookielessMode,
    person_profiles: t.personProfiles,
    before_send: Ou,
    _onCapture: (n) => {
      Xl += 1, fr = {
        event: n,
        acceptedByPostHog: !0,
        at: (/* @__PURE__ */ new Date()).toISOString()
      }, fn();
    }
  }), t.debug && e.debug();
}, Vu = () => {
  if (De) {
    for (; go.length > 0; ) {
      const e = go.shift();
      try {
        Ca += 1;
        const t = e.kind === "exception" ? De.captureException(e.error, e.properties) : De.capture(e.event, e.properties, { send_instantly: !0, timestamp: e.at });
        fr = {
          event: e.event,
          acceptedByPostHog: !!t,
          at: (/* @__PURE__ */ new Date()).toISOString()
        };
      } catch (t) {
        qn = (t == null ? void 0 : t.message) || "PostHog capture failed";
      }
    }
    fn();
  }
}, Nu = () => Mn || (Mn = new Promise((e) => {
  Ru(() => {
    import("./chunks/posthog-DRTLl3XD.js").then((t) => e(t.default || t.posthog || null)).catch((t) => {
      Mn = null, qn = (t == null ? void 0 : t.message) || "PostHog failed to load", fn(), e(null);
    });
  });
}), Mn), Fu = () => Nu().then((e) => {
  if (!e) return null;
  if (!or && En && be)
    try {
      Bu(e, be), De = e, or = !0;
    } catch (t) {
      En = !1, qn = (t == null ? void 0 : t.message) || "PostHog initialization failed";
    }
  return fn(), Vu(), De;
}), Yl = ({
  analytics: e = !0,
  entry: t = "",
  environment: n = "production",
  apiUrl: o = void 0,
  packageVersion: r = void 0,
  explicit: a = !1
} = {}) => typeof window > "u" || typeof document > "u" ? { enabled: !1 } : ((a || !Ni) && (be = Lu(e, o), En = be.enabled && !!be.projectApiKey, a && (Ni = !0), qn = null), ka = {
  antikythera_entry: t || void 0,
  antikythera_environment: n,
  antikythera_package_version: r,
  antikythera_api_host: o,
  site_origin: typeof window < "u" ? window.location.origin : void 0,
  site_hostname: typeof window < "u" ? window.location.hostname : void 0
}, fn(), En ? (Fu(), be.webVitals && Hu(), Fi || (de("antikythera package initialized"), Fi = !0), { enabled: !0 }) : { enabled: !1 }), de = (e, t = {}, { onceKey: n = void 0 } = {}) => {
  if (!(!En || !e) && !(n && Dr.has(n))) {
    if (!De) {
      go.length < Tu && (n && Dr.add(n), go.push({ kind: "event", event: e, properties: ji(t), at: /* @__PURE__ */ new Date() }), fn());
      return;
    }
    n && Dr.add(n);
    try {
      Ca += 1;
      const o = De.capture(e, ji(t), { send_instantly: !0 });
      fr = {
        event: e,
        acceptedByPostHog: !!o,
        at: (/* @__PURE__ */ new Date()).toISOString()
      }, fn();
    } catch (o) {
      qn = (o == null ? void 0 : o.message) || "PostHog capture failed", fn();
    }
  }
}, Ur = (e = {}) => {
  !En || (be == null ? void 0 : be.apiRequests) === !1 || de("antikythera api request completed", e);
}, Ui = "antikythera-fonts", qi = "https://api.antikythera.org/fonts", Du = [
  ["ESAllianz-Book", "normal", 400],
  ["ESAllianz-BookItalic", "italic", 400],
  ["ESAllianz-Bold", "normal", 700],
  ["ESAllianz-BoldItalic", "italic", 700]
], ju = () => Du.map(
  ([e, t, n]) => `@font-face{font-family:'ESAllianz-Book';font-style:${t};font-weight:${n};font-display:swap;src:url('${qi}/${e}.woff2') format('woff2'),url('${qi}/${e}.woff') format('woff');}`
).join(`
`), Uu = () => {
  if (typeof document > "u" || document.getElementById(Ui)) return;
  const e = document.createElement("style");
  e.id = Ui, e.appendChild(document.createTextNode(ju()));
  const t = document.head || document.getElementsByTagName("head")[0];
  t.insertBefore(e, t.firstChild);
}, qr = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_NITRO_SERVER_PORT: "3030", VITE_POSTHOG_HOST: "https://us.i.posthog.com", VITE_POSTHOG_PROJECT_API_KEY: "phc_y4P4gHasX7yvUUyXo4RhsWj4TQQ7tCwGVv8mmVPTkfGz", VITE_POSTHOG_UI_HOST: "https://us.posthog.com" }, ao = /* @__PURE__ */ new Map(), Sa = ({
  entry: e = "",
  environment: t = "production",
  customCss: n = !1,
  apiUrl: o = void 0,
  analytics: r = !0,
  packageVersion: a = void 0
} = {}) => {
  Yl({
    analytics: r,
    entry: e,
    environment: t,
    apiUrl: o,
    packageVersion: a
  }), Uu();
  const i = (P) => {
    if (!(!P || typeof P != "string"))
      try {
        const j = new URL(P);
        if (!["https:", "http:"].includes(j.protocol) || j.username || j.password)
          throw new Error("unsupported URL");
        return j.origin;
      } catch {
        console.warn("antikythera API URL override ignored: expected a valid http(s) origin");
        return;
      }
  }, l = i(o) || i(globalThis.__ANTIKYTHERA_API_URL__) || i(qr == null ? void 0 : qr.VITE_NITRO_SERVER) || i(globalThis.__ANTIKYTHERA_TEST_SERVER__) || "https://api.antikythera.org", u = `${l}/api/v1`;
  let d = e, s = null;
  const f = async (P, { textStyle: j = void 0 } = {}) => {
    const q = j ? "&textStyle=" + j : "", K = `${u}${P}?env=${t}${q}`, J = `${l}:${t}:${d}:${P}:${j || "portabletext"}`;
    if (ao.has(J)) {
      const H = await ao.get(J);
      return Ur({
        api_path: P,
        api_environment: t,
        api_entry: d || void 0,
        api_text_style: j || "portabletext",
        api_success: !(H != null && H.error),
        api_cache: "memory"
      }), H;
    } else {
      const H = typeof performance < "u" ? performance.now() : Date.now();
      ao.set(
        J,
        fetch(K).then((Y) => {
          const G = typeof performance < "u" ? performance.now() : Date.now(), ce = Math.round(G - H);
          if (Ur({
            api_path: P,
            api_environment: t,
            api_entry: d || void 0,
            api_text_style: j || "portabletext",
            api_status: Y.status,
            api_success: Y.ok,
            api_duration_ms: ce,
            api_cache: "miss"
          }), !Y.ok) {
            const ee = new Error(`HTTP error! status: ${Y.status}`);
            throw ee.antikytheraAnalyticsCaptured = !0, ee.retryable = Y.status === 408 || Y.status === 429 || Y.status >= 500, ee;
          }
          return Y.json() ?? {};
        }).catch((Y) => {
          const G = typeof performance < "u" ? performance.now() : Date.now();
          return Y.antikytheraAnalyticsCaptured || Ur({
            api_path: P,
            api_environment: t,
            api_entry: d || void 0,
            api_text_style: j || "portabletext",
            api_success: !1,
            api_duration_ms: Math.round(G - H),
            api_cache: "miss",
            api_error: Y.message
          }), Y.retryable !== !1 && ao.delete(J), { error: Y.message };
        })
      );
    }
    return ao.get(J);
  }, h = async ({ textStyle: P = void 0 } = {}) => {
    try {
      return await f("/settings", { textStyle: P });
    } catch (j) {
      return { error: j.message };
    }
  }, v = async ({ textStyle: P = void 0 } = {}) => {
    try {
      return await f(`/entries/${d}`, { textStyle: P });
    } catch (j) {
      return { error: j.message };
    }
  }, S = async ({ textStyle: P = void 0 } = {}) => {
    try {
      return await f(`/entries/${d}/meta`, { textStyle: P });
    } catch (j) {
      return { error: j.message };
    }
  }, T = async ({ textStyle: P = void 0 } = {}) => {
    try {
      return await f(`/annotations/${d}`, { textStyle: P });
    } catch (j) {
      return { error: j.message };
    }
  }, V = (P, j = void 0) => {
    var q, K, J;
    return {
      annotation_id: (P == null ? void 0 : P.id) || j || void 0,
      annotation_title: (P == null ? void 0 : P.title) || void 0,
      annotation_type: (P == null ? void 0 : P.annotationType) || void 0,
      annotation_has_external_link: !!(P != null && P.externalLink),
      annotation_has_featured_image: !!((q = P == null ? void 0 : P.featuredImage) != null && q.url || (K = P == null ? void 0 : P.featuredImageSquare) != null && K.url),
      annotation_scan_enabled: !!((J = P == null ? void 0 : P.scanText) != null && J.enableScanText)
    };
  }, _ = (P, j) => {
    !P || !j || (P.setAttribute("data-ph-capture", ""), P.setAttribute("data-ph-component", "antikythera-annotation"), P.setAttribute("data-ph-action", "annotation-click"), P.setAttribute("data-ph-annotation-id", j.id), P.setAttribute("data-ph-entry", d), j.annotationType && P.setAttribute("data-ph-annotation-type", j.annotationType));
  }, U = (P) => String(P || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), te = async ({ annotationClass: P = "annotation" }) => {
    const j = await T(), q = [], K = [];
    if (!Array.isArray(j)) {
      console.warn("antikythera annotation scan skipped: annotations response is not an array", j);
      return;
    }
    j.forEach((G) => {
      var ce, ee;
      !((ce = G.scanText) != null && ce.enableScanText) || !Array.isArray((ee = G.scanText) == null ? void 0 : ee.scanSegments) || G.scanText.scanSegments.forEach((he) => {
        q.push({
          id: G.id,
          annotationPalette: G.annotationPalette ? `annotation_${G.annotationPalette}` : "annotation_inherit",
          annotationType: G.annotationType,
          keyword: he.scanKeyword,
          phrase: he.scanPhrase
        });
      });
    });
    const J = (G) => {
      G.nodeType === Node.TEXT_NODE ? K.push(G) : G.childNodes.forEach(J);
    };
    J(document.body);
    const H = (G) => {
      const ce = (ee) => ee.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
      return q.forEach((ee) => {
        const { keyword: he, phrase: ue, id: Se, annotationPalette: Xe, annotationType: He } = ee, $e = new RegExp(`(${ce(ue)})`, "gi");
        $e.test(G) && (ee.found = !0, G = G.replace($e, (Me) => {
          const st = new RegExp(`(${ce(he)})`, "gi");
          return Me.replace(
            st,
            `<span class="${U(P)} ${U(Xe)}" id="${U(Se)}" data-ph-capture data-ph-component="antikythera-annotation" data-ph-action="annotation-click" data-ph-entry="${U(d)}" data-ph-annotation-id="${U(Se)}" data-ph-annotation-type="${U(He)}">$1</span>`
          );
        }));
      }), G;
    };
    K.forEach((G) => {
      const ce = H(G.nodeValue);
      if (ce !== G.nodeValue) {
        const ee = document.createElement("span");
        ee.innerHTML = ce, G.replaceWith(...ee.childNodes);
      }
    });
    let Y = 0;
    return q.forEach(({ id: G, phrase: ce, found: ee }) => {
      ee || (Y++, console.error(`Annotation [${G}] with phrase "${ce}" could not be found in the document.`), de("antikythera annotation scan missed", {
        antikythera_entry: d || void 0,
        annotation_id: G,
        annotation_phrase: ce
      }));
    }), de("antikythera annotation scan completed", {
      antikythera_entry: d || void 0,
      scan_total: q.length,
      scan_found: q.length - Y,
      scan_missed: Y
    }), j;
  }, w = async ({ menuName: P = "antikythera-menu", annotationClass: j = "annotation" } = {}) => {
    let q = [];
    const K = await te({ annotationClass: j });
    Array.isArray(K) && (q = K);
    const J = new Map(q.map((ce) => [ce.id, ce])), H = (ce, ee) => {
      const he = ce.getAttribute("id"), ue = J.get(he);
      _(ce, ue || { id: he }), ce.addEventListener("click", () => {
        var Se;
        de("antikythera annotation clicked", {
          antikythera_entry: d || void 0,
          ...V(ue, he),
          annotation_text: ((Se = ce.textContent) == null ? void 0 : Se.trim()) || void 0
        }), ee && (ee.setAttribute("activeannotation", "v0_" + he), setTimeout(() => {
          ee.setAttribute("activeannotation", "");
        }, 150));
      });
    }, Y = (ce = [], ee) => {
      s && s.disconnect();
      const he = {
        root: null,
        rootMargin: "0% 0% 0% 0%",
        // top right bottom left
        threshold: 1
      }, ue = (Xe) => {
        Xe.forEach((He) => {
          var Rt;
          const $e = He.target, Me = $e.getAttribute("id"), st = J.get(Me);
          He.isIntersecting ? (de(
            "antikythera annotation viewed",
            {
              antikythera_entry: d || void 0,
              ...V(st, Me),
              annotation_text: ((Rt = $e.textContent) == null ? void 0 : Rt.trim()) || void 0
            },
            { onceKey: `annotation-viewed:${d}:${Me}` }
          ), ee.setAttribute("activeannotation", "v1_" + Me), setTimeout(() => {
            ee.setAttribute("activeannotation", "");
          }, 150)) : (ee.setAttribute("inactiveannotation", "v1_" + Me), ee.getAttribute("activeannotation") == "v1_" + Me && ee.setAttribute("activeannotation", ""), setTimeout(() => {
            ee.setAttribute("inactiveannotation", "");
          }, 150));
        });
      };
      s = new IntersectionObserver(ue, he);
      for (var Se = 0; Se < ce.length; Se++)
        s.observe(ce[Se]);
    };
    if (document) {
      const ce = document.querySelectorAll(`.${j}`), ee = document.querySelector(P);
      if (!ee) {
        console.warn(`antikythera annotation scan skipped: ${P} was not found`);
        return;
      }
      for (var G = 0; G < ce.length; G++)
        H(ce[G], ee);
      Y(ce, ee);
    } else
      console.warn("antikythera initialization: no document present");
  }, $ = async ({ menuName: P = "antikythera-menu", annotationClass: j = ".annotation", detectAnnotationsOnInit: q = !0 } = {}) => {
    console.log("antikythera initialization"), de("antikythera core initialized", {
      antikythera_entry: d || void 0,
      annotation_detection_enabled: q
    });
    const K = () => {
      if (n)
        return;
      const H = `
				${j}{background:black;color:white;border-radius:0.125rem;padding-left:.25rem;padding-right:.25rem;cursor:crosshair;}
				.annotation_whiteOnBlack{background:black;color:white;}
				.annotation_blackOnWhite{background:white;color:black;}
			`;
      if (document) {
        const Y = document.head || document.getElementsByTagName("head")[0], G = document.createElement("style");
        Y.appendChild(G), G.type = "text/css", G.appendChild(document.createTextNode(H));
      }
    };
    q && await w(), K();
    const J = new CustomEvent("antikythera:initComplete", {
      detail: { entry: d }
    });
    document.dispatchEvent(J);
  }, ne = async (P, j = "antikythera-menu", q = ".annotation", K = !0) => {
    d = P, de("antikythera core reinitialized", {
      antikythera_entry: d || void 0
    }), await $({ menuName: j, annotationClass: q, detectAnnotationsOnInit: K });
  };
  return {
    entryId: `Antikythera entryId ID: ${d}`,
    getSettings: h,
    getEntry: v,
    getEntryMeta: S,
    getAnnotations: T,
    detectAnnotations: w,
    init: $,
    reinit: ne
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
const Ee = {}, Bn = [], Bt = () => {
}, qu = () => !1, pr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ea = (e) => e.startsWith("onUpdate:"), Ie = Object.assign, Aa = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ku = Object.prototype.hasOwnProperty, ke = (e, t) => Ku.call(e, t), ie = Array.isArray, Vn = (e) => hr(e) === "[object Map]", Gl = (e) => hr(e) === "[object Set]", pe = (e) => typeof e == "function", ze = (e) => typeof e == "string", gn = (e) => typeof e == "symbol", Ae = (e) => e !== null && typeof e == "object", Zl = (e) => (Ae(e) || pe(e)) && pe(e.then) && pe(e.catch), Jl = Object.prototype.toString, hr = (e) => Jl.call(e), Wu = (e) => hr(e).slice(8, -1), gr = (e) => hr(e) === "[object Object]", Ia = (e) => ze(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, uo = /* @__PURE__ */ Ta(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), mr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Xu = /-(\w)/g, dt = mr(
  (e) => e.replace(Xu, (t, n) => n ? n.toUpperCase() : "")
), Yu = /\B([A-Z])/g, _t = mr(
  (e) => e.replace(Yu, "-$1").toLowerCase()
), vr = mr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kr = mr(
  (e) => e ? `on${vr(e)}` : ""
), pn = (e, t) => !Object.is(e, t), Wr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ql = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Gu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ia = (e) => {
  const t = ze(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ki;
const es = () => Ki || (Ki = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Sn(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ze(o) ? ed(o) : Sn(o);
      if (r)
        for (const a in r)
          t[a] = r[a];
    }
    return t;
  } else if (ze(e) || Ae(e))
    return e;
}
const Zu = /;(?![^(]*\))/g, Ju = /:([^]+)/, Qu = /\/\*[^]*?\*\//g;
function ed(e) {
  const t = {};
  return e.replace(Qu, "").split(Zu).forEach((n) => {
    if (n) {
      const o = n.split(Ju);
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
const td = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nd = /* @__PURE__ */ Ta(td);
function ts(e) {
  return !!e || e === "";
}
const ns = (e) => !!(e && e.__v_isRef === !0), fe = (e) => ze(e) ? e : e == null ? "" : ie(e) || Ae(e) && (e.toString === Jl || !pe(e.toString)) ? ns(e) ? fe(e.value) : JSON.stringify(e, os, 2) : String(e), os = (e, t) => ns(t) ? os(e, t.value) : Vn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], a) => (n[Xr(o, a) + " =>"] = r, n),
    {}
  )
} : Gl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Xr(n))
} : gn(t) ? Xr(t) : Ae(t) && !ie(t) && !gr(t) ? String(t) : t, Xr = (e, t = "") => {
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
let vt;
class od {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = vt, !t && vt && (this.index = (vt.scopes || (vt.scopes = [])).push(
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
      const n = vt;
      try {
        return vt = this, t();
      } finally {
        vt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    vt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    vt = this.parent;
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
function rd() {
  return vt;
}
let Te;
const Yr = /* @__PURE__ */ new WeakSet();
class rs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.nextEffect = void 0, this.cleanup = void 0, this.scheduler = void 0, vt && vt.active && vt.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || (this.flags |= 8, this.nextEffect = fo, fo = this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Wi(this), is(this);
    const t = Te, n = Et;
    Te = this, Et = !0;
    try {
      return this.fn();
    } finally {
      ls(this), Te = t, Et = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Pa(t);
      this.deps = this.depsTail = void 0, Wi(this), this.onStop && this.onStop(), this.flags &= -2;
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
let as = 0, fo;
function $a() {
  as++;
}
function Ra() {
  if (--as > 0)
    return;
  let e;
  for (; fo; ) {
    let t = fo;
    for (fo = void 0; t; ) {
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
function is(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ls(e) {
  let t, n = e.depsTail;
  for (let o = n; o; o = o.prevDep)
    o.version === -1 ? (o === n && (n = o.prevDep), Pa(o), ad(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0;
  e.deps = t, e.depsTail = n;
}
function la(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ss(t.dep.computed) === !1 || t.dep.version !== t.version)
      return !0;
  return !!e._dirty;
}
function ss(e) {
  if (e.flags & 2)
    return !1;
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === mo))
    return;
  e.globalVersion = mo;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && !la(e)) {
    e.flags &= -3;
    return;
  }
  const n = Te, o = Et;
  Te = e, Et = !0;
  try {
    is(e);
    const r = e.fn(e._value);
    (t.version === 0 || pn(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Te = n, Et = o, ls(e), e.flags &= -3;
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
function ad(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Et = !0;
const cs = [];
function mn() {
  cs.push(Et), Et = !1;
}
function vn() {
  const e = cs.pop();
  Et = e === void 0 ? !0 : e;
}
function Wi(e) {
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
let mo = 0;
class za {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0;
  }
  track(t) {
    if (!Te || !Et || Te === this.computed)
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
      }, Te.deps ? (n.prevDep = Te.depsTail, Te.depsTail.nextDep = n, Te.depsTail = n) : Te.deps = Te.depsTail = n, Te.flags & 4 && us(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = Te.depsTail, n.nextDep = void 0, Te.depsTail.nextDep = n, Te.depsTail = n, Te.deps === n && (Te.deps = o);
    }
    return n;
  }
  trigger(t) {
    this.version++, mo++, this.notify(t);
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
function us(e) {
  const t = e.dep.computed;
  if (t && !e.dep.subs) {
    t.flags |= 20;
    for (let o = t.deps; o; o = o.nextDep)
      us(o);
  }
  const n = e.dep.subs;
  n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
}
const sa = /* @__PURE__ */ new WeakMap(), Tn = Symbol(
  ""
), ca = Symbol(
  ""
), vo = Symbol(
  ""
);
function nt(e, t, n) {
  if (Et && Te) {
    let o = sa.get(e);
    o || sa.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = new za()), r.track();
  }
}
function Wt(e, t, n, o, r, a) {
  const i = sa.get(e);
  if (!i) {
    mo++;
    return;
  }
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else {
    const u = ie(e), d = u && Ia(n);
    if (u && n === "length") {
      const s = Number(o);
      i.forEach((f, h) => {
        (h === "length" || h === vo || !gn(h) && h >= s) && l.push(f);
      });
    } else {
      const s = (f) => f && l.push(f);
      switch (n !== void 0 && s(i.get(n)), d && s(i.get(vo)), t) {
        case "add":
          u ? d && s(i.get("length")) : (s(i.get(Tn)), Vn(e) && s(i.get(ca)));
          break;
        case "delete":
          u || (s(i.get(Tn)), Vn(e) && s(i.get(ca)));
          break;
        case "set":
          Vn(e) && s(i.get(Tn));
          break;
      }
    }
  }
  $a();
  for (const u of l)
    u.trigger();
  Ra();
}
function zn(e) {
  const t = xe(e);
  return t === e ? t : (nt(t, "iterate", vo), At(e) ? t : t.map(Qe));
}
function yr(e) {
  return nt(e = xe(e), "iterate", vo), e;
}
const id = {
  __proto__: null,
  [Symbol.iterator]() {
    return Gr(this, Symbol.iterator, Qe);
  },
  concat(...e) {
    return zn(this).concat(
      ...e.map((t) => ie(t) ? zn(t) : t)
    );
  },
  entries() {
    return Gr(this, "entries", (e) => (e[1] = Qe(e[1]), e));
  },
  every(e, t) {
    return Ft(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ft(this, "filter", e, t, (n) => n.map(Qe), arguments);
  },
  find(e, t) {
    return Ft(this, "find", e, t, Qe, arguments);
  },
  findIndex(e, t) {
    return Ft(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ft(this, "findLast", e, t, Qe, arguments);
  },
  findLastIndex(e, t) {
    return Ft(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ft(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zr(this, "includes", e);
  },
  indexOf(...e) {
    return Zr(this, "indexOf", e);
  },
  join(e) {
    return zn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Zr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ft(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return io(this, "pop");
  },
  push(...e) {
    return io(this, "push", e);
  },
  reduce(e, ...t) {
    return Xi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Xi(this, "reduceRight", e, t);
  },
  shift() {
    return io(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ft(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return io(this, "splice", e);
  },
  toReversed() {
    return zn(this).toReversed();
  },
  toSorted(e) {
    return zn(this).toSorted(e);
  },
  toSpliced(...e) {
    return zn(this).toSpliced(...e);
  },
  unshift(...e) {
    return io(this, "unshift", e);
  },
  values() {
    return Gr(this, "values", Qe);
  }
};
function Gr(e, t, n) {
  const o = yr(e), r = o[t]();
  return o !== e && !At(e) && (r._next = r.next, r.next = () => {
    const a = r._next();
    return a.value && (a.value = n(a.value)), a;
  }), r;
}
const ld = Array.prototype;
function Ft(e, t, n, o, r, a) {
  const i = yr(e), l = i !== e && !At(e), u = i[t];
  if (u !== ld[t]) {
    const f = u.apply(e, a);
    return l ? Qe(f) : f;
  }
  let d = n;
  i !== e && (l ? d = function(f, h) {
    return n.call(this, Qe(f), h, e);
  } : n.length > 2 && (d = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const s = u.call(i, d, o);
  return l && r ? r(s) : s;
}
function Xi(e, t, n, o) {
  const r = yr(e);
  let a = n;
  return r !== e && (At(e) ? n.length > 3 && (a = function(i, l, u) {
    return n.call(this, i, l, u, e);
  }) : a = function(i, l, u) {
    return n.call(this, i, Qe(l), u, e);
  }), r[t](a, ...o);
}
function Zr(e, t, n) {
  const o = xe(e);
  nt(o, "iterate", vo);
  const r = o[t](...n);
  return (r === -1 || r === !1) && Ba(n[0]) ? (n[0] = xe(n[0]), o[t](...n)) : r;
}
function io(e, t, n = []) {
  mn(), $a();
  const o = xe(e)[t].apply(e, n);
  return Ra(), vn(), o;
}
const sd = /* @__PURE__ */ Ta("__proto__,__v_isRef,__isVue"), ds = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gn)
);
function cd(e) {
  gn(e) || (e = String(e));
  const t = xe(this);
  return nt(t, "has", e), t.hasOwnProperty(e);
}
class fs {
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
      return o === (r ? a ? _d : ms : a ? gs : hs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = ie(t);
    if (!r) {
      let u;
      if (i && (u = id[n]))
        return u;
      if (n === "hasOwnProperty")
        return cd;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      tt(t) ? t : o
    );
    return (gn(n) ? ds.has(n) : sd(n)) || (r || nt(t, "get", n), a) ? l : tt(l) ? i && Ia(n) ? l : l.value : Ae(l) ? r ? vs(l) : Oa(l) : l;
  }
}
class ps extends fs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let a = t[n];
    if (!this._isShallow) {
      const u = An(a);
      if (!At(o) && !An(o) && (a = xe(a), o = xe(o)), !ie(t) && tt(a) && !tt(o))
        return u ? !1 : (a.value = o, !0);
    }
    const i = ie(t) && Ia(n) ? Number(n) < t.length : ke(t, n), l = Reflect.set(
      t,
      n,
      o,
      tt(t) ? t : r
    );
    return t === xe(r) && (i ? pn(o, a) && Wt(t, "set", n, o) : Wt(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = ke(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && o && Wt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!gn(n) || !ds.has(n)) && nt(t, "has", n), o;
  }
  ownKeys(t) {
    return nt(
      t,
      "iterate",
      ie(t) ? "length" : Tn
    ), Reflect.ownKeys(t);
  }
}
class ud extends fs {
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
const dd = /* @__PURE__ */ new ps(), fd = /* @__PURE__ */ new ud(), pd = /* @__PURE__ */ new ps(!0);
const Ma = (e) => e, br = (e) => Reflect.getPrototypeOf(e);
function No(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = xe(e), a = xe(t);
  n || (pn(t, a) && nt(r, "get", t), nt(r, "get", a));
  const { has: i } = br(r), l = o ? Ma : n ? Va : Qe;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, a))
    return l(e.get(a));
  e !== r && e.get(t);
}
function Fo(e, t = !1) {
  const n = this.__v_raw, o = xe(n), r = xe(e);
  return t || (pn(e, r) && nt(o, "has", e), nt(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Do(e, t = !1) {
  return e = e.__v_raw, !t && nt(xe(e), "iterate", Tn), Reflect.get(e, "size", e);
}
function Yi(e, t = !1) {
  !t && !At(e) && !An(e) && (e = xe(e));
  const n = xe(this);
  return br(n).has.call(n, e) || (n.add(e), Wt(n, "add", e, e)), this;
}
function Gi(e, t, n = !1) {
  !n && !At(t) && !An(t) && (t = xe(t));
  const o = xe(this), { has: r, get: a } = br(o);
  let i = r.call(o, e);
  i || (e = xe(e), i = r.call(o, e));
  const l = a.call(o, e);
  return o.set(e, t), i ? pn(t, l) && Wt(o, "set", e, t) : Wt(o, "add", e, t), this;
}
function Zi(e) {
  const t = xe(this), { has: n, get: o } = br(t);
  let r = n.call(t, e);
  r || (e = xe(e), r = n.call(t, e)), o && o.call(t, e);
  const a = t.delete(e);
  return r && Wt(t, "delete", e, void 0), a;
}
function Ji() {
  const e = xe(this), t = e.size !== 0, n = e.clear();
  return t && Wt(e, "clear", void 0, void 0), n;
}
function jo(e, t) {
  return function(o, r) {
    const a = this, i = a.__v_raw, l = xe(i), u = t ? Ma : e ? Va : Qe;
    return !e && nt(l, "iterate", Tn), i.forEach((d, s) => o.call(r, u(d), u(s), a));
  };
}
function Uo(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, a = xe(r), i = Vn(a), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, d = r[e](...o), s = n ? Ma : t ? Va : Qe;
    return !t && nt(
      a,
      "iterate",
      u ? ca : Tn
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = d.next();
        return h ? { value: f, done: h } : {
          value: l ? [s(f[0]), s(f[1])] : s(f),
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
function on(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function hd() {
  const e = {
    get(a) {
      return No(this, a);
    },
    get size() {
      return Do(this);
    },
    has: Fo,
    add: Yi,
    set: Gi,
    delete: Zi,
    clear: Ji,
    forEach: jo(!1, !1)
  }, t = {
    get(a) {
      return No(this, a, !1, !0);
    },
    get size() {
      return Do(this);
    },
    has: Fo,
    add(a) {
      return Yi.call(this, a, !0);
    },
    set(a, i) {
      return Gi.call(this, a, i, !0);
    },
    delete: Zi,
    clear: Ji,
    forEach: jo(!1, !0)
  }, n = {
    get(a) {
      return No(this, a, !0);
    },
    get size() {
      return Do(this, !0);
    },
    has(a) {
      return Fo.call(this, a, !0);
    },
    add: on("add"),
    set: on("set"),
    delete: on("delete"),
    clear: on("clear"),
    forEach: jo(!0, !1)
  }, o = {
    get(a) {
      return No(this, a, !0, !0);
    },
    get size() {
      return Do(this, !0);
    },
    has(a) {
      return Fo.call(this, a, !0);
    },
    add: on("add"),
    set: on("set"),
    delete: on("delete"),
    clear: on("clear"),
    forEach: jo(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    e[a] = Uo(a, !1, !1), n[a] = Uo(a, !0, !1), t[a] = Uo(a, !1, !0), o[a] = Uo(
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
  gd,
  md,
  vd,
  yd
] = /* @__PURE__ */ hd();
function La(e, t) {
  const n = t ? e ? yd : vd : e ? md : gd;
  return (o, r, a) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    ke(n, r) && r in o ? n : o,
    r,
    a
  );
}
const bd = {
  get: /* @__PURE__ */ La(!1, !1)
}, wd = {
  get: /* @__PURE__ */ La(!1, !0)
}, xd = {
  get: /* @__PURE__ */ La(!0, !1)
};
const hs = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), _d = /* @__PURE__ */ new WeakMap();
function kd(e) {
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
function Cd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kd(Wu(e));
}
function Oa(e) {
  return An(e) ? e : Ha(
    e,
    !1,
    dd,
    bd,
    hs
  );
}
function Sd(e) {
  return Ha(
    e,
    !1,
    pd,
    wd,
    gs
  );
}
function vs(e) {
  return Ha(
    e,
    !0,
    fd,
    xd,
    ms
  );
}
function Ha(e, t, n, o, r) {
  if (!Ae(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = r.get(e);
  if (a)
    return a;
  const i = Cd(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, l), l;
}
function Nn(e) {
  return An(e) ? Nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function An(e) {
  return !!(e && e.__v_isReadonly);
}
function At(e) {
  return !!(e && e.__v_isShallow);
}
function Ba(e) {
  return e ? !!e.__v_raw : !1;
}
function xe(e) {
  const t = e && e.__v_raw;
  return t ? xe(t) : e;
}
function Td(e) {
  return Object.isExtensible(e) && Ql(e, "__v_skip", !0), e;
}
const Qe = (e) => Ae(e) ? Oa(e) : e, Va = (e) => Ae(e) ? vs(e) : e;
function tt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function W(e) {
  return Ed(e, !1);
}
function Ed(e, t) {
  return tt(e) ? e : new Ad(e, t);
}
class Ad {
  constructor(t, n) {
    this.dep = new za(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : xe(t), this._value = n ? t : Qe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || At(t) || An(t);
    t = o ? t : xe(t), pn(t, n) && (this._rawValue = t, this._value = o ? t : Qe(t), this.dep.trigger());
  }
}
function xt(e) {
  return tt(e) ? e.value : e;
}
const Id = {
  get: (e, t, n) => t === "__v_raw" ? e : xt(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return tt(r) && !tt(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ys(e) {
  return Nn(e) ? e : new Proxy(e, Id);
}
class $d {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new za(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = mo - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    Te !== this && (this.flags |= 16, this.dep.notify());
  }
  get value() {
    const t = this.dep.track();
    return ss(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Rd(e, t, n = !1) {
  let o, r;
  return pe(e) ? o = e : (o = e.get, r = e.set), new $d(o, r, n);
}
const qo = {}, rr = /* @__PURE__ */ new WeakMap();
let _n;
function Pd(e, t = !1, n = _n) {
  if (n) {
    let o = rr.get(n);
    o || rr.set(n, o = []), o.push(e);
  }
}
function zd(e, t, n = Ee) {
  const { immediate: o, deep: r, once: a, scheduler: i, augmentJob: l, call: u } = n, d = (w) => r ? w : At(w) || r === !1 || r === 0 ? dn(w, 1) : dn(w);
  let s, f, h, v, S = !1, T = !1;
  if (tt(e) ? (f = () => e.value, S = At(e)) : Nn(e) ? (f = () => d(e), S = !0) : ie(e) ? (T = !0, S = e.some((w) => Nn(w) || At(w)), f = () => e.map((w) => {
    if (tt(w))
      return w.value;
    if (Nn(w))
      return d(w);
    if (pe(w))
      return u ? u(w, 2) : w();
  })) : pe(e) ? t ? f = u ? () => u(e, 2) : e : f = () => {
    if (h) {
      mn();
      try {
        h();
      } finally {
        vn();
      }
    }
    const w = _n;
    _n = s;
    try {
      return u ? u(e, 3, [v]) : e(v);
    } finally {
      _n = w;
    }
  } : f = Bt, t && r) {
    const w = f, $ = r === !0 ? 1 / 0 : r;
    f = () => dn(w(), $);
  }
  const V = rd(), _ = () => {
    s.stop(), V && Aa(V.effects, s);
  };
  if (a)
    if (t) {
      const w = t;
      t = (...$) => {
        w(...$), _();
      };
    } else {
      const w = f;
      f = () => {
        w(), _();
      };
    }
  let U = T ? new Array(e.length).fill(qo) : qo;
  const te = (w) => {
    if (!(!(s.flags & 1) || !s.dirty && !w))
      if (t) {
        const $ = s.run();
        if (r || S || (T ? $.some((ne, P) => pn(ne, U[P])) : pn($, U))) {
          h && h();
          const ne = _n;
          _n = s;
          try {
            const P = [
              $,
              // pass undefined as the old value when it's changed for the first time
              U === qo ? void 0 : T && U[0] === qo ? [] : U,
              v
            ];
            u ? u(t, 3, P) : (
              // @ts-expect-error
              t(...P)
            ), U = $;
          } finally {
            _n = ne;
          }
        }
      } else
        s.run();
  };
  return l && l(te), s = new rs(f), s.scheduler = i ? () => i(te, !1) : te, v = (w) => Pd(w, !1, s), h = s.onStop = () => {
    const w = rr.get(s);
    if (w) {
      if (u)
        u(w, 4);
      else
        for (const $ of w) $();
      rr.delete(s);
    }
  }, t ? o ? te(!0) : U = s.run() : i ? i(te.bind(null, !0), !0) : s.run(), _.pause = s.pause.bind(s), _.resume = s.resume.bind(s), _.stop = _, _;
}
function dn(e, t = 1 / 0, n) {
  if (t <= 0 || !Ae(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, tt(e))
    dn(e.value, t, n);
  else if (ie(e))
    for (let o = 0; o < e.length; o++)
      dn(e[o], t, n);
  else if (Gl(e) || Vn(e))
    e.forEach((o) => {
      dn(o, t, n);
    });
  else if (gr(e)) {
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
function _o(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    wr(r, t, n);
  }
}
function $t(e, t, n, o) {
  if (pe(e)) {
    const r = _o(e, t, n, o);
    return r && Zl(r) && r.catch((a) => {
      wr(a, t, n);
    }), r;
  }
  if (ie(e)) {
    const r = [];
    for (let a = 0; a < e.length; a++)
      r.push($t(e[a], t, n, o));
    return r;
  }
}
function wr(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Ee;
  if (t) {
    let l = t.parent;
    const u = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const s = l.ec;
      if (s) {
        for (let f = 0; f < s.length; f++)
          if (s[f](e, u, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (a) {
      mn(), _o(a, null, 10, [
        e,
        u,
        d
      ]), vn();
      return;
    }
  }
  Md(e, n, r, o, i);
}
function Md(e, t, n, o = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
let yo = !1, ua = !1;
const it = [];
let Lt = 0;
const Fn = [];
let sn = null, Ln = 0;
const bs = /* @__PURE__ */ Promise.resolve();
let Na = null;
function mt(e) {
  const t = Na || bs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ld(e) {
  let t = yo ? Lt + 1 : 0, n = it.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = it[o], a = bo(r);
    a < e || a === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Fa(e) {
  if (!(e.flags & 1)) {
    const t = bo(e), n = it[it.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= bo(n) ? it.push(e) : it.splice(Ld(t), 0, e), e.flags |= 1, ws();
  }
}
function ws() {
  !yo && !ua && (ua = !0, Na = bs.then(_s));
}
function Od(e) {
  ie(e) ? Fn.push(...e) : sn && e.id === -1 ? sn.splice(Ln + 1, 0, e) : e.flags & 1 || (Fn.push(e), e.flags |= 1), ws();
}
function Qi(e, t, n = yo ? Lt + 1 : 0) {
  for (; n < it.length; n++) {
    const o = it[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid)
        continue;
      it.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags &= -2;
    }
  }
}
function xs(e) {
  if (Fn.length) {
    const t = [...new Set(Fn)].sort(
      (n, o) => bo(n) - bo(o)
    );
    if (Fn.length = 0, sn) {
      sn.push(...t);
      return;
    }
    for (sn = t, Ln = 0; Ln < sn.length; Ln++) {
      const n = sn[Ln];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    sn = null, Ln = 0;
  }
}
const bo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _s(e) {
  ua = !1, yo = !0;
  try {
    for (Lt = 0; Lt < it.length; Lt++) {
      const t = it[Lt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), _o(
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
    Lt = 0, it.length = 0, xs(), yo = !1, Na = null, (it.length || Fn.length) && _s();
  }
}
let et = null, ks = null;
function ar(e) {
  const t = et;
  return et = e, ks = e && e.type.__scopeId || null, t;
}
function Xt(e, t = et, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && cl(-1);
    const a = ar(t);
    let i;
    try {
      i = e(...r);
    } finally {
      ar(a), o._d && cl(1);
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
    let u = l.dir[o];
    u && (mn(), $t(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), vn());
  }
}
const Hd = Symbol("_vte"), Cs = (e) => e.__isTeleport, cn = Symbol("_leaveCb"), Ko = Symbol("_enterCb");
function Ss() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ko(() => {
    e.isMounted = !0;
  }), ja(() => {
    e.isUnmounting = !0;
  }), e;
}
const wt = [Function, Array], Ts = {
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
}, Es = (e) => {
  const t = e.subTree;
  return t.component ? Es(t.component) : t;
}, Bd = {
  name: "BaseTransition",
  props: Ts,
  setup(e, { slots: t }) {
    const n = tc(), o = Ss();
    return () => {
      const r = t.default && Da(t.default(), !0);
      if (!r || !r.length)
        return;
      const a = As(r), i = xe(e), { mode: l } = i;
      if (o.isLeaving)
        return Jr(a);
      const u = el(a);
      if (!u)
        return Jr(a);
      let d = wo(
        u,
        i,
        o,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      u.type !== lt && In(u, d);
      const s = n.subTree, f = s && el(s);
      if (f && f.type !== lt && !kn(u, f) && Es(n).type !== lt) {
        const h = wo(
          f,
          i,
          o,
          n
        );
        if (In(f, h), l === "out-in" && u.type !== lt)
          return o.isLeaving = !0, h.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave;
          }, Jr(a);
        l === "in-out" && u.type !== lt && (h.delayLeave = (v, S, T) => {
          const V = Is(
            o,
            f
          );
          V[String(f.key)] = f, v[cn] = () => {
            S(), v[cn] = void 0, delete d.delayedLeave;
          }, d.delayedLeave = T;
        });
      }
      return a;
    };
  }
};
function As(e) {
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
const Vd = Bd;
function Is(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function wo(e, t, n, o, r) {
  const {
    appear: a,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: u,
    onEnter: d,
    onAfterEnter: s,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: v,
    onAfterLeave: S,
    onLeaveCancelled: T,
    onBeforeAppear: V,
    onAppear: _,
    onAfterAppear: U,
    onAppearCancelled: te
  } = t, w = String(e.key), $ = Is(n, e), ne = (q, K) => {
    q && $t(
      q,
      o,
      9,
      K
    );
  }, P = (q, K) => {
    const J = K[1];
    ne(q, K), ie(q) ? q.every((H) => H.length <= 1) && J() : q.length <= 1 && J();
  }, j = {
    mode: i,
    persisted: l,
    beforeEnter(q) {
      let K = u;
      if (!n.isMounted)
        if (a)
          K = V || u;
        else
          return;
      q[cn] && q[cn](
        !0
        /* cancelled */
      );
      const J = $[w];
      J && kn(e, J) && J.el[cn] && J.el[cn](), ne(K, [q]);
    },
    enter(q) {
      let K = d, J = s, H = f;
      if (!n.isMounted)
        if (a)
          K = _ || d, J = U || s, H = te || f;
        else
          return;
      let Y = !1;
      const G = q[Ko] = (ce) => {
        Y || (Y = !0, ce ? ne(H, [q]) : ne(J, [q]), j.delayedLeave && j.delayedLeave(), q[Ko] = void 0);
      };
      K ? P(K, [q, G]) : G();
    },
    leave(q, K) {
      const J = String(e.key);
      if (q[Ko] && q[Ko](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      ne(h, [q]);
      let H = !1;
      const Y = q[cn] = (G) => {
        H || (H = !0, K(), G ? ne(T, [q]) : ne(S, [q]), q[cn] = void 0, $[J] === e && delete $[J]);
      };
      $[J] = e, v ? P(v, [q, Y]) : Y();
    },
    clone(q) {
      const K = wo(
        q,
        t,
        n,
        o,
        r
      );
      return r && r(K), K;
    }
  };
  return j;
}
function Jr(e) {
  if (xr(e))
    return e = hn(e), e.children = null, e;
}
function el(e) {
  if (!xr(e))
    return Cs(e.type) && e.children ? As(e.children) : e;
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
    i.type === we ? (i.patchFlag & 128 && r++, o = o.concat(
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
function $s(e, t) {
  return pe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function Rs(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function da(e, t, n, o, r = !1) {
  if (ie(e)) {
    e.forEach(
      (S, T) => da(
        S,
        t && (ie(t) ? t[T] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Dn(o) && !r)
    return;
  const a = o.shapeFlag & 4 ? Ya(o.component) : o.el, i = r ? null : a, { i: l, r: u } = e, d = t && t.r, s = l.refs === Ee ? l.refs = {} : l.refs, f = l.setupState, h = xe(f), v = f === Ee ? () => !1 : (S) => ke(h, S);
  if (d != null && d !== u && (ze(d) ? (s[d] = null, v(d) && (f[d] = null)) : tt(d) && (d.value = null)), pe(u))
    _o(u, l, 12, [i, s]);
  else {
    const S = ze(u), T = tt(u);
    if (S || T) {
      const V = () => {
        if (e.f) {
          const _ = S ? v(u) ? f[u] : s[u] : u.value;
          r ? ie(_) && Aa(_, a) : ie(_) ? _.includes(a) || _.push(a) : S ? (s[u] = [a], v(u) && (f[u] = s[u])) : (u.value = [a], e.k && (s[e.k] = u.value));
        } else S ? (s[u] = i, v(u) && (f[u] = i)) : T && (u.value = i, e.k && (s[e.k] = i));
      };
      i ? (V.id = -1, gt(V, n)) : V();
    }
  }
}
const Dn = (e) => !!e.type.__asyncLoader, xr = (e) => e.type.__isKeepAlive;
function Nd(e, t) {
  Ps(e, "a", t);
}
function Fd(e, t) {
  Ps(e, "da", t);
}
function Ps(e, t, n = Ke) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (_r(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      xr(r.parent.vnode) && Dd(o, t, n, r), r = r.parent;
  }
}
function Dd(e, t, n, o) {
  const r = _r(
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
function _r(e, t, n = Ke, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
      mn();
      const l = Co(n), u = $t(t, n, e, i);
      return l(), vn(), u;
    });
    return o ? r.unshift(a) : r.push(a), a;
  }
}
const Yt = (e) => (t, n = Ke) => {
  (!Sr || e === "sp") && _r(e, (...o) => t(...o), n);
}, jd = Yt("bm"), ko = Yt("m"), Ud = Yt(
  "bu"
), zs = Yt("u"), ja = Yt(
  "bum"
), Ua = Yt("um"), qd = Yt(
  "sp"
), Kd = Yt("rtg"), Wd = Yt("rtc");
function Xd(e, t = Ke) {
  _r("ec", e, t);
}
const Yd = "components", Ms = Symbol.for("v-ndc");
function Gd(e) {
  return ze(e) ? Zd(Yd, e, !1) || e : e || Ms;
}
function Zd(e, t, n = !0, o = !1) {
  const r = et || Ke;
  if (r) {
    const a = r.type;
    {
      const l = Nf(
        a,
        !1
      );
      if (l && (l === t || l === dt(t) || l === vr(dt(t))))
        return a;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      tl(r[e] || a[e], t) || // global registration
      tl(r.appContext[e], t)
    );
    return !i && o ? a : i;
  }
}
function tl(e, t) {
  return e && (e[t] || e[dt(t)] || e[vr(dt(t))]);
}
function It(e, t, n, o) {
  let r;
  const a = n, i = ie(e);
  if (i || ze(e)) {
    const l = i && Nn(e);
    l && (e = yr(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        l ? Qe(e[u]) : e[u],
        u,
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
        (l, u) => t(l, u, void 0, a)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let u = 0, d = l.length; u < d; u++) {
        const s = l[u];
        r[u] = t(e[s], s, u, a);
      }
    }
  else
    r = [];
  return r;
}
function Jd(e, t, n = {}, o, r) {
  if (et.ce || et.parent && Dn(et.parent) && et.parent.ce)
    return k(), We(
      we,
      null,
      [oe("slot", n, o)],
      64
    );
  let a = e[t];
  a && a._c && (a._d = !1), k();
  const i = a && Ls(a(n)), l = We(
    we,
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
function Ls(e) {
  return e.some((t) => lr(t) ? !(t.type === lt || t.type === we && !Ls(t.children)) : !0) ? e : null;
}
const fa = (e) => e ? nc(e) ? Ya(e) : fa(e.parent) : null, po = (
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
    $parent: (e) => fa(e.parent),
    $root: (e) => fa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => qa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = mt.bind(e.proxy)),
    $watch: (e) => _f.bind(e)
  })
), Qr = (e, t) => e !== Ee && !e.__isScriptSetup && ke(e, t), Qd = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: a, accessCache: i, type: l, appContext: u } = e;
    let d;
    if (t[0] !== "$") {
      const v = i[t];
      if (v !== void 0)
        switch (v) {
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
          (d = e.propsOptions[0]) && ke(d, t)
        )
          return i[t] = 3, a[t];
        if (n !== Ee && ke(n, t))
          return i[t] = 4, n[t];
        pa && (i[t] = 0);
      }
    }
    const s = po[t];
    let f, h;
    if (s)
      return t === "$attrs" && nt(e.attrs, "get", ""), s(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Ee && ke(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = u.config.globalProperties, ke(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: a } = e;
    return Qr(r, t) ? (r[t] = n, !0) : o !== Ee && ke(o, t) ? (o[t] = n, !0) : ke(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: a }
  }, i) {
    let l;
    return !!n[i] || e !== Ee && ke(e, i) || Qr(t, i) || (l = a[0]) && ke(l, i) || ke(o, i) || ke(po, i) || ke(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function nl(e) {
  return ie(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let pa = !0;
function ef(e) {
  const t = qa(e), n = e.proxy, o = e.ctx;
  pa = !1, t.beforeCreate && ol(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: a,
    methods: i,
    watch: l,
    provide: u,
    inject: d,
    // lifecycle
    created: s,
    beforeMount: f,
    mounted: h,
    beforeUpdate: v,
    updated: S,
    activated: T,
    deactivated: V,
    beforeDestroy: _,
    beforeUnmount: U,
    destroyed: te,
    unmounted: w,
    render: $,
    renderTracked: ne,
    renderTriggered: P,
    errorCaptured: j,
    serverPrefetch: q,
    // public API
    expose: K,
    inheritAttrs: J,
    // assets
    components: H,
    directives: Y,
    filters: G
  } = t;
  if (d && tf(d, o, null), i)
    for (const he in i) {
      const ue = i[he];
      pe(ue) && (o[he] = ue.bind(n));
    }
  if (r) {
    const he = r.call(n, n);
    Ae(he) && (e.data = Oa(he));
  }
  if (pa = !0, a)
    for (const he in a) {
      const ue = a[he], Se = pe(ue) ? ue.bind(n, n) : pe(ue.get) ? ue.get.bind(n, n) : Bt, Xe = !pe(ue) && pe(ue.set) ? ue.set.bind(n) : Bt, He = X({
        get: Se,
        set: Xe
      });
      Object.defineProperty(o, he, {
        enumerable: !0,
        configurable: !0,
        get: () => He.value,
        set: ($e) => He.value = $e
      });
    }
  if (l)
    for (const he in l)
      Os(l[he], o, n, he);
  if (u) {
    const he = pe(u) ? u.call(n) : u;
    Reflect.ownKeys(he).forEach((ue) => {
      sf(ue, he[ue]);
    });
  }
  s && ol(s, e, "c");
  function ee(he, ue) {
    ie(ue) ? ue.forEach((Se) => he(Se.bind(n))) : ue && he(ue.bind(n));
  }
  if (ee(jd, f), ee(ko, h), ee(Ud, v), ee(zs, S), ee(Nd, T), ee(Fd, V), ee(Xd, j), ee(Wd, ne), ee(Kd, P), ee(ja, U), ee(Ua, w), ee(qd, q), ie(K))
    if (K.length) {
      const he = e.exposed || (e.exposed = {});
      K.forEach((ue) => {
        Object.defineProperty(he, ue, {
          get: () => n[ue],
          set: (Se) => n[ue] = Se
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === Bt && (e.render = $), J != null && (e.inheritAttrs = J), H && (e.components = H), Y && (e.directives = Y), q && Rs(e);
}
function tf(e, t, n = Bt) {
  ie(e) && (e = ha(e));
  for (const o in e) {
    const r = e[o];
    let a;
    Ae(r) ? "default" in r ? a = Zo(
      r.from || o,
      r.default,
      !0
    ) : a = Zo(r.from || o) : a = Zo(r), tt(a) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (i) => a.value = i
    }) : t[o] = a;
  }
}
function ol(e, t, n) {
  $t(
    ie(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Os(e, t, n, o) {
  let r = o.includes(".") ? Ys(n, o) : () => n[o];
  if (ze(e)) {
    const a = t[e];
    pe(a) && Ot(r, a);
  } else if (pe(e))
    Ot(r, e.bind(n));
  else if (Ae(e))
    if (ie(e))
      e.forEach((a) => Os(a, t, n, o));
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
  let u;
  return l ? u = l : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach(
    (d) => ir(u, d, i, !0)
  ), ir(u, t, i)), Ae(t) && a.set(t, u), u;
}
function ir(e, t, n, o = !1) {
  const { mixins: r, extends: a } = t;
  a && ir(e, a, n, !0), r && r.forEach(
    (i) => ir(e, i, n, !0)
  );
  for (const i in t)
    if (!(o && i === "expose")) {
      const l = nf[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const nf = {
  data: rl,
  props: al,
  emits: al,
  // objects
  methods: co,
  computed: co,
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
  components: co,
  directives: co,
  // watch
  watch: rf,
  // provide / inject
  provide: rl,
  inject: of
};
function rl(e, t) {
  return t ? e ? function() {
    return Ie(
      pe(e) ? e.call(this, this) : e,
      pe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function of(e, t) {
  return co(ha(e), ha(t));
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
function co(e, t) {
  return e ? Ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function al(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ie(
    /* @__PURE__ */ Object.create(null),
    nl(e),
    nl(t ?? {})
  ) : t;
}
function rf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ie(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = at(e[o], t[o]);
  return n;
}
function Hs() {
  return {
    app: null,
    config: {
      isNativeTag: qu,
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
let af = 0;
function lf(e, t) {
  return function(o, r = null) {
    pe(o) || (o = Ie({}, o)), r != null && !Ae(r) && (r = null);
    const a = Hs(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const d = a.app = {
      _uid: af++,
      _component: o,
      _props: r,
      _container: null,
      _context: a,
      _instance: null,
      version: Df,
      get config() {
        return a.config;
      },
      set config(s) {
      },
      use(s, ...f) {
        return i.has(s) || (s && pe(s.install) ? (i.add(s), s.install(d, ...f)) : pe(s) && (i.add(s), s(d, ...f))), d;
      },
      mixin(s) {
        return a.mixins.includes(s) || a.mixins.push(s), d;
      },
      component(s, f) {
        return f ? (a.components[s] = f, d) : a.components[s];
      },
      directive(s, f) {
        return f ? (a.directives[s] = f, d) : a.directives[s];
      },
      mount(s, f, h) {
        if (!u) {
          const v = d._ceVNode || oe(o, r);
          return v.appContext = a, h === !0 ? h = "svg" : h === !1 && (h = void 0), f && t ? t(v, s) : e(v, s, h), u = !0, d._container = s, s.__vue_app__ = d, Ya(v.component);
        }
      },
      onUnmount(s) {
        l.push(s);
      },
      unmount() {
        u && ($t(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(s, f) {
        return a.provides[s] = f, d;
      },
      runWithContext(s) {
        const f = jn;
        jn = d;
        try {
          return s();
        } finally {
          jn = f;
        }
      }
    };
    return d;
  };
}
let jn = null;
function sf(e, t) {
  if (Ke) {
    let n = Ke.provides;
    const o = Ke.parent && Ke.parent.provides;
    o === n && (n = Ke.provides = Object.create(o)), n[e] = t;
  }
}
function Zo(e, t, n = !1) {
  const o = Ke || et;
  if (o || jn) {
    const r = jn ? jn._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && pe(t) ? t.call(o && o.proxy) : t;
  }
}
const Bs = {}, Vs = () => Object.create(Bs), Ns = (e) => Object.getPrototypeOf(e) === Bs;
function cf(e, t, n, o = !1) {
  const r = {}, a = Vs();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fs(e, t, r, a);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = o ? r : Sd(r) : e.type.props ? e.props = r : e.props = a, e.attrs = a;
}
function uf(e, t, n, o) {
  const {
    props: r,
    attrs: a,
    vnode: { patchFlag: i }
  } = e, l = xe(r), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const s = e.vnode.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        let h = s[f];
        if (kr(e.emitsOptions, h))
          continue;
        const v = t[h];
        if (u)
          if (ke(a, h))
            v !== a[h] && (a[h] = v, d = !0);
          else {
            const S = dt(h);
            r[S] = ga(
              u,
              l,
              S,
              v,
              e,
              !1
            );
          }
        else
          v !== a[h] && (a[h] = v, d = !0);
      }
    }
  } else {
    Fs(e, t, r, a) && (d = !0);
    let s;
    for (const f in l)
      (!t || // for camelCase
      !ke(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((s = _t(f)) === f || !ke(t, s))) && (u ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[s] !== void 0) && (r[f] = ga(
        u,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (a !== l)
      for (const f in a)
        (!t || !ke(t, f)) && (delete a[f], d = !0);
  }
  d && Wt(e.attrs, "set", "");
}
function Fs(e, t, n, o) {
  const [r, a] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (uo(u))
        continue;
      const d = t[u];
      let s;
      r && ke(r, s = dt(u)) ? !a || !a.includes(s) ? n[s] = d : (l || (l = {}))[s] = d : kr(e.emitsOptions, u) || (!(u in o) || d !== o[u]) && (o[u] = d, i = !0);
    }
  if (a) {
    const u = xe(n), d = l || Ee;
    for (let s = 0; s < a.length; s++) {
      const f = a[s];
      n[f] = ga(
        r,
        u,
        f,
        d[f],
        e,
        !ke(d, f)
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
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && pe(u)) {
        const { propsDefaults: d } = r;
        if (n in d)
          o = d[n];
        else {
          const s = Co(r);
          o = d[n] = u.call(
            null,
            t
          ), s();
        }
      } else
        o = u;
      r.ce && r.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (a && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === _t(n)) && (o = !0));
  }
  return o;
}
const df = /* @__PURE__ */ new WeakMap();
function Ds(e, t, n = !1) {
  const o = n ? df : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const a = e.props, i = {}, l = [];
  let u = !1;
  if (!pe(e)) {
    const s = (f) => {
      u = !0;
      const [h, v] = Ds(f, t, !0);
      Ie(i, h), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  if (!a && !u)
    return Ae(e) && o.set(e, Bn), Bn;
  if (ie(a))
    for (let s = 0; s < a.length; s++) {
      const f = dt(a[s]);
      il(f) && (i[f] = Ee);
    }
  else if (a)
    for (const s in a) {
      const f = dt(s);
      if (il(f)) {
        const h = a[s], v = i[f] = ie(h) || pe(h) ? { type: h } : Ie({}, h), S = v.type;
        let T = !1, V = !0;
        if (ie(S))
          for (let _ = 0; _ < S.length; ++_) {
            const U = S[_], te = pe(U) && U.name;
            if (te === "Boolean") {
              T = !0;
              break;
            } else te === "String" && (V = !1);
          }
        else
          T = pe(S) && S.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = T, v[
          1
          /* shouldCastTrue */
        ] = V, (T || ke(v, "default")) && l.push(f);
      }
    }
  const d = [i, l];
  return Ae(e) && o.set(e, d), d;
}
function il(e) {
  return e[0] !== "$" && !uo(e);
}
const js = (e) => e[0] === "_" || e === "$stable", Ka = (e) => ie(e) ? e.map(Ht) : [Ht(e)], ff = (e, t, n) => {
  if (t._n)
    return t;
  const o = Xt((...r) => Ka(t(...r)), n);
  return o._c = !1, o;
}, Us = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (js(r)) continue;
    const a = e[r];
    if (pe(a))
      t[r] = ff(r, a, o);
    else if (a != null) {
      const i = Ka(a);
      t[r] = () => i;
    }
  }
}, qs = (e, t) => {
  const n = Ka(t);
  e.slots.default = () => n;
}, Ks = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, pf = (e, t, n) => {
  const o = e.slots = Vs();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ks(o, t, n), n && Ql(o, "_", r, !0)) : Us(t, o);
  } else t && qs(e, t);
}, hf = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let a = !0, i = Ee;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? a = !1 : Ks(r, t, n) : (a = !t.$stable, Us(t, r)), i = t;
  } else t && (qs(e, t), i = { default: 1 });
  if (a)
    for (const l in r)
      !js(l) && i[l] == null && delete r[l];
}, gt = If;
function gf(e) {
  return mf(e);
}
function mf(e, t) {
  const n = es();
  n.__VUE__ = !0;
  const {
    insert: o,
    remove: r,
    patchProp: a,
    createElement: i,
    createText: l,
    createComment: u,
    setText: d,
    setElementText: s,
    parentNode: f,
    nextSibling: h,
    setScopeId: v = Bt,
    insertStaticContent: S
  } = e, T = (p, m, x, z = null, A = null, I = null, D = void 0, B = null, N = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !kn(p, m) && (z = bt(p), $e(p, A, I, !0), p = null), m.patchFlag === -2 && (N = !1, m.dynamicChildren = null);
    const { type: M, ref: Q, shapeFlag: F } = m;
    switch (M) {
      case Cr:
        V(p, m, x, z);
        break;
      case lt:
        _(p, m, x, z);
        break;
      case Jo:
        p == null && U(m, x, z, D);
        break;
      case we:
        H(
          p,
          m,
          x,
          z,
          A,
          I,
          D,
          B,
          N
        );
        break;
      default:
        F & 1 ? $(
          p,
          m,
          x,
          z,
          A,
          I,
          D,
          B,
          N
        ) : F & 6 ? Y(
          p,
          m,
          x,
          z,
          A,
          I,
          D,
          B,
          N
        ) : (F & 64 || F & 128) && M.process(
          p,
          m,
          x,
          z,
          A,
          I,
          D,
          B,
          N,
          pt
        );
    }
    Q != null && A && da(Q, p && p.ref, I, m || p, !m);
  }, V = (p, m, x, z) => {
    if (p == null)
      o(
        m.el = l(m.children),
        x,
        z
      );
    else {
      const A = m.el = p.el;
      m.children !== p.children && d(A, m.children);
    }
  }, _ = (p, m, x, z) => {
    p == null ? o(
      m.el = u(m.children || ""),
      x,
      z
    ) : m.el = p.el;
  }, U = (p, m, x, z) => {
    [p.el, p.anchor] = S(
      p.children,
      m,
      x,
      z,
      p.el,
      p.anchor
    );
  }, te = ({ el: p, anchor: m }, x, z) => {
    let A;
    for (; p && p !== m; )
      A = h(p), o(p, x, z), p = A;
    o(m, x, z);
  }, w = ({ el: p, anchor: m }) => {
    let x;
    for (; p && p !== m; )
      x = h(p), r(p), p = x;
    r(m);
  }, $ = (p, m, x, z, A, I, D, B, N) => {
    m.type === "svg" ? D = "svg" : m.type === "math" && (D = "mathml"), p == null ? ne(
      m,
      x,
      z,
      A,
      I,
      D,
      B,
      N
    ) : q(
      p,
      m,
      A,
      I,
      D,
      B,
      N
    );
  }, ne = (p, m, x, z, A, I, D, B) => {
    let N, M;
    const { props: Q, shapeFlag: F, transition: Z, dirs: ae } = p;
    if (N = p.el = i(
      p.type,
      I,
      Q && Q.is,
      Q
    ), F & 8 ? s(N, p.children) : F & 16 && j(
      p.children,
      N,
      null,
      z,
      A,
      ea(p, I),
      D,
      B
    ), ae && bn(p, null, z, "created"), P(N, p, p.scopeId, D, z), Q) {
      for (const ye in Q)
        ye !== "value" && !uo(ye) && a(N, ye, null, Q[ye], I, z);
      "value" in Q && a(N, "value", null, Q.value, I), (M = Q.onVnodeBeforeMount) && Mt(M, z, p);
    }
    ae && bn(p, null, z, "beforeMount");
    const le = vf(A, Z);
    le && Z.beforeEnter(N), o(N, m, x), ((M = Q && Q.onVnodeMounted) || le || ae) && gt(() => {
      M && Mt(M, z, p), le && Z.enter(N), ae && bn(p, null, z, "mounted");
    }, A);
  }, P = (p, m, x, z, A) => {
    if (x && v(p, x), z)
      for (let I = 0; I < z.length; I++)
        v(p, z[I]);
    if (A) {
      let I = A.subTree;
      if (m === I || Zs(I.type) && (I.ssContent === m || I.ssFallback === m)) {
        const D = A.vnode;
        P(
          p,
          D,
          D.scopeId,
          D.slotScopeIds,
          A.parent
        );
      }
    }
  }, j = (p, m, x, z, A, I, D, B, N = 0) => {
    for (let M = N; M < p.length; M++) {
      const Q = p[M] = B ? un(p[M]) : Ht(p[M]);
      T(
        null,
        Q,
        m,
        x,
        z,
        A,
        I,
        D,
        B
      );
    }
  }, q = (p, m, x, z, A, I, D) => {
    const B = m.el = p.el;
    let { patchFlag: N, dynamicChildren: M, dirs: Q } = m;
    N |= p.patchFlag & 16;
    const F = p.props || Ee, Z = m.props || Ee;
    let ae;
    if (x && wn(x, !1), (ae = Z.onVnodeBeforeUpdate) && Mt(ae, x, m, p), Q && bn(m, p, x, "beforeUpdate"), x && wn(x, !0), (F.innerHTML && Z.innerHTML == null || F.textContent && Z.textContent == null) && s(B, ""), M ? K(
      p.dynamicChildren,
      M,
      B,
      x,
      z,
      ea(m, A),
      I
    ) : D || ue(
      p,
      m,
      B,
      null,
      x,
      z,
      ea(m, A),
      I,
      !1
    ), N > 0) {
      if (N & 16)
        J(B, F, Z, x, A);
      else if (N & 2 && F.class !== Z.class && a(B, "class", null, Z.class, A), N & 4 && a(B, "style", F.style, Z.style, A), N & 8) {
        const le = m.dynamicProps;
        for (let ye = 0; ye < le.length; ye++) {
          const ve = le[ye], Re = F[ve], Le = Z[ve];
          (Le !== Re || ve === "value") && a(B, ve, Re, Le, A, x);
        }
      }
      N & 1 && p.children !== m.children && s(B, m.children);
    } else !D && M == null && J(B, F, Z, x, A);
    ((ae = Z.onVnodeUpdated) || Q) && gt(() => {
      ae && Mt(ae, x, m, p), Q && bn(m, p, x, "updated");
    }, z);
  }, K = (p, m, x, z, A, I, D) => {
    for (let B = 0; B < m.length; B++) {
      const N = p[B], M = m[B], Q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !kn(N, M) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 70) ? f(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      T(
        N,
        M,
        Q,
        null,
        z,
        A,
        I,
        D,
        !0
      );
    }
  }, J = (p, m, x, z, A) => {
    if (m !== x) {
      if (m !== Ee)
        for (const I in m)
          !uo(I) && !(I in x) && a(
            p,
            I,
            m[I],
            null,
            A,
            z
          );
      for (const I in x) {
        if (uo(I)) continue;
        const D = x[I], B = m[I];
        D !== B && I !== "value" && a(p, I, B, D, A, z);
      }
      "value" in x && a(p, "value", m.value, x.value, A);
    }
  }, H = (p, m, x, z, A, I, D, B, N) => {
    const M = m.el = p ? p.el : l(""), Q = m.anchor = p ? p.anchor : l("");
    let { patchFlag: F, dynamicChildren: Z, slotScopeIds: ae } = m;
    ae && (B = B ? B.concat(ae) : ae), p == null ? (o(M, x, z), o(Q, x, z), j(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      x,
      Q,
      A,
      I,
      D,
      B,
      N
    )) : F > 0 && F & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (K(
      p.dynamicChildren,
      Z,
      x,
      A,
      I,
      D,
      B
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || A && m === A.subTree) && Ws(
      p,
      m,
      !0
      /* shallow */
    )) : ue(
      p,
      m,
      x,
      Q,
      A,
      I,
      D,
      B,
      N
    );
  }, Y = (p, m, x, z, A, I, D, B, N) => {
    m.slotScopeIds = B, p == null ? m.shapeFlag & 512 ? A.ctx.activate(
      m,
      x,
      z,
      D,
      N
    ) : G(
      m,
      x,
      z,
      A,
      I,
      D,
      N
    ) : ce(p, m, N);
  }, G = (p, m, x, z, A, I, D) => {
    const B = p.component = Lf(
      p,
      z,
      A
    );
    if (xr(p) && (B.ctx.renderer = pt), Of(B, !1, D), B.asyncDep) {
      if (A && A.registerDep(B, ee, D), !p.el) {
        const N = B.subTree = oe(lt);
        _(null, N, m, x);
      }
    } else
      ee(
        B,
        p,
        m,
        x,
        A,
        I,
        D
      );
  }, ce = (p, m, x) => {
    const z = m.component = p.component;
    if (Ef(p, m, x))
      if (z.asyncDep && !z.asyncResolved) {
        he(z, m, x);
        return;
      } else
        z.next = m, z.update();
    else
      m.el = p.el, z.vnode = m;
  }, ee = (p, m, x, z, A, I, D) => {
    const B = () => {
      if (p.isMounted) {
        let { next: F, bu: Z, u: ae, parent: le, vnode: ye } = p;
        {
          const Ve = Xs(p);
          if (Ve) {
            F && (F.el = ye.el, he(p, F, D)), Ve.asyncDep.then(() => {
              p.isUnmounted || B();
            });
            return;
          }
        }
        let ve = F, Re;
        wn(p, !1), F ? (F.el = ye.el, he(p, F, D)) : F = ye, Z && Wr(Z), (Re = F.props && F.props.onVnodeBeforeUpdate) && Mt(Re, le, F, ye), wn(p, !0);
        const Le = ta(p), Ge = p.subTree;
        p.subTree = Le, T(
          Ge,
          Le,
          // parent may have changed if it's in a teleport
          f(Ge.el),
          // anchor may have changed if it's in a fragment
          bt(Ge),
          p,
          A,
          I
        ), F.el = Le.el, ve === null && Af(p, Le.el), ae && gt(ae, A), (Re = F.props && F.props.onVnodeUpdated) && gt(
          () => Mt(Re, le, F, ye),
          A
        );
      } else {
        let F;
        const { el: Z, props: ae } = m, { bm: le, m: ye, parent: ve, root: Re, type: Le } = p, Ge = Dn(m);
        if (wn(p, !1), le && Wr(le), !Ge && (F = ae && ae.onVnodeBeforeMount) && Mt(F, ve, m), wn(p, !0), Z && Zt) {
          const Ve = () => {
            p.subTree = ta(p), Zt(
              Z,
              p.subTree,
              p,
              A,
              null
            );
          };
          Ge && Le.__asyncHydrate ? Le.__asyncHydrate(
            Z,
            p,
            Ve
          ) : Ve();
        } else {
          Re.ce && Re.ce._injectChildStyle(Le);
          const Ve = p.subTree = ta(p);
          T(
            null,
            Ve,
            x,
            z,
            p,
            A,
            I
          ), m.el = Ve.el;
        }
        if (ye && gt(ye, A), !Ge && (F = ae && ae.onVnodeMounted)) {
          const Ve = m;
          gt(
            () => Mt(F, ve, Ve),
            A
          );
        }
        (m.shapeFlag & 256 || ve && Dn(ve.vnode) && ve.vnode.shapeFlag & 256) && p.a && gt(p.a, A), p.isMounted = !0, m = x = z = null;
      }
    };
    p.scope.on();
    const N = p.effect = new rs(B);
    p.scope.off();
    const M = p.update = N.run.bind(N), Q = p.job = N.runIfDirty.bind(N);
    Q.i = p, Q.id = p.uid, N.scheduler = () => Fa(Q), wn(p, !0), M();
  }, he = (p, m, x) => {
    m.component = p;
    const z = p.vnode.props;
    p.vnode = m, p.next = null, uf(p, m.props, z, x), hf(p, m.children, x), mn(), Qi(p), vn();
  }, ue = (p, m, x, z, A, I, D, B, N = !1) => {
    const M = p && p.children, Q = p ? p.shapeFlag : 0, F = m.children, { patchFlag: Z, shapeFlag: ae } = m;
    if (Z > 0) {
      if (Z & 128) {
        Xe(
          M,
          F,
          x,
          z,
          A,
          I,
          D,
          B,
          N
        );
        return;
      } else if (Z & 256) {
        Se(
          M,
          F,
          x,
          z,
          A,
          I,
          D,
          B,
          N
        );
        return;
      }
    }
    ae & 8 ? (Q & 16 && ft(M, A, I), F !== M && s(x, F)) : Q & 16 ? ae & 16 ? Xe(
      M,
      F,
      x,
      z,
      A,
      I,
      D,
      B,
      N
    ) : ft(M, A, I, !0) : (Q & 8 && s(x, ""), ae & 16 && j(
      F,
      x,
      z,
      A,
      I,
      D,
      B,
      N
    ));
  }, Se = (p, m, x, z, A, I, D, B, N) => {
    p = p || Bn, m = m || Bn;
    const M = p.length, Q = m.length, F = Math.min(M, Q);
    let Z;
    for (Z = 0; Z < F; Z++) {
      const ae = m[Z] = N ? un(m[Z]) : Ht(m[Z]);
      T(
        p[Z],
        ae,
        x,
        null,
        A,
        I,
        D,
        B,
        N
      );
    }
    M > Q ? ft(
      p,
      A,
      I,
      !0,
      !1,
      F
    ) : j(
      m,
      x,
      z,
      A,
      I,
      D,
      B,
      N,
      F
    );
  }, Xe = (p, m, x, z, A, I, D, B, N) => {
    let M = 0;
    const Q = m.length;
    let F = p.length - 1, Z = Q - 1;
    for (; M <= F && M <= Z; ) {
      const ae = p[M], le = m[M] = N ? un(m[M]) : Ht(m[M]);
      if (kn(ae, le))
        T(
          ae,
          le,
          x,
          null,
          A,
          I,
          D,
          B,
          N
        );
      else
        break;
      M++;
    }
    for (; M <= F && M <= Z; ) {
      const ae = p[F], le = m[Z] = N ? un(m[Z]) : Ht(m[Z]);
      if (kn(ae, le))
        T(
          ae,
          le,
          x,
          null,
          A,
          I,
          D,
          B,
          N
        );
      else
        break;
      F--, Z--;
    }
    if (M > F) {
      if (M <= Z) {
        const ae = Z + 1, le = ae < Q ? m[ae].el : z;
        for (; M <= Z; )
          T(
            null,
            m[M] = N ? un(m[M]) : Ht(m[M]),
            x,
            le,
            A,
            I,
            D,
            B,
            N
          ), M++;
      }
    } else if (M > Z)
      for (; M <= F; )
        $e(p[M], A, I, !0), M++;
    else {
      const ae = M, le = M, ye = /* @__PURE__ */ new Map();
      for (M = le; M <= Z; M++) {
        const L = m[M] = N ? un(m[M]) : Ht(m[M]);
        L.key != null && ye.set(L.key, M);
      }
      let ve, Re = 0;
      const Le = Z - le + 1;
      let Ge = !1, Ve = 0;
      const Jt = new Array(Le);
      for (M = 0; M < Le; M++) Jt[M] = 0;
      for (M = ae; M <= F; M++) {
        const L = p[M];
        if (Re >= Le) {
          $e(L, A, I, !0);
          continue;
        }
        let ct;
        if (L.key != null)
          ct = ye.get(L.key);
        else
          for (ve = le; ve <= Z; ve++)
            if (Jt[ve - le] === 0 && kn(L, m[ve])) {
              ct = ve;
              break;
            }
        ct === void 0 ? $e(L, A, I, !0) : (Jt[ct - le] = M + 1, ct >= Ve ? Ve = ct : Ge = !0, T(
          L,
          m[ct],
          x,
          null,
          A,
          I,
          D,
          B,
          N
        ), Re++);
      }
      const Qt = Ge ? yf(Jt) : Bn;
      for (ve = Qt.length - 1, M = Le - 1; M >= 0; M--) {
        const L = le + M, ct = m[L], Kn = L + 1 < Q ? m[L + 1].el : z;
        Jt[M] === 0 ? T(
          null,
          ct,
          x,
          Kn,
          A,
          I,
          D,
          B,
          N
        ) : Ge && (ve < 0 || M !== Qt[ve] ? He(ct, x, Kn, 2) : ve--);
      }
    }
  }, He = (p, m, x, z, A = null) => {
    const { el: I, type: D, transition: B, children: N, shapeFlag: M } = p;
    if (M & 6) {
      He(p.component.subTree, m, x, z);
      return;
    }
    if (M & 128) {
      p.suspense.move(m, x, z);
      return;
    }
    if (M & 64) {
      D.move(p, m, x, pt);
      return;
    }
    if (D === we) {
      o(I, m, x);
      for (let F = 0; F < N.length; F++)
        He(N[F], m, x, z);
      o(p.anchor, m, x);
      return;
    }
    if (D === Jo) {
      te(p, m, x);
      return;
    }
    if (z !== 2 && M & 1 && B)
      if (z === 0)
        B.beforeEnter(I), o(I, m, x), gt(() => B.enter(I), A);
      else {
        const { leave: F, delayLeave: Z, afterLeave: ae } = B, le = () => o(I, m, x), ye = () => {
          F(I, () => {
            le(), ae && ae();
          });
        };
        Z ? Z(I, le, ye) : ye();
      }
    else
      o(I, m, x);
  }, $e = (p, m, x, z = !1, A = !1) => {
    const {
      type: I,
      props: D,
      ref: B,
      children: N,
      dynamicChildren: M,
      shapeFlag: Q,
      patchFlag: F,
      dirs: Z,
      cacheIndex: ae
    } = p;
    if (F === -2 && (A = !1), B != null && da(B, null, x, p, !0), ae != null && (m.renderCache[ae] = void 0), Q & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const le = Q & 1 && Z, ye = !Dn(p);
    let ve;
    if (ye && (ve = D && D.onVnodeBeforeUnmount) && Mt(ve, m, p), Q & 6)
      Rt(p.component, x, z);
    else {
      if (Q & 128) {
        p.suspense.unmount(x, z);
        return;
      }
      le && bn(p, null, m, "beforeUnmount"), Q & 64 ? p.type.remove(
        p,
        m,
        x,
        pt,
        z
      ) : M && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !M.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== we || F > 0 && F & 64) ? ft(
        M,
        m,
        x,
        !1,
        !0
      ) : (I === we && F & 384 || !A && Q & 16) && ft(N, m, x), z && Me(p);
    }
    (ye && (ve = D && D.onVnodeUnmounted) || le) && gt(() => {
      ve && Mt(ve, m, p), le && bn(p, null, m, "unmounted");
    }, x);
  }, Me = (p) => {
    const { type: m, el: x, anchor: z, transition: A } = p;
    if (m === we) {
      st(x, z);
      return;
    }
    if (m === Jo) {
      w(p);
      return;
    }
    const I = () => {
      r(x), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (p.shapeFlag & 1 && A && !A.persisted) {
      const { leave: D, delayLeave: B } = A, N = () => D(x, I);
      B ? B(p.el, I, N) : N();
    } else
      I();
  }, st = (p, m) => {
    let x;
    for (; p !== m; )
      x = h(p), r(p), p = x;
    r(m);
  }, Rt = (p, m, x) => {
    const { bum: z, scope: A, job: I, subTree: D, um: B, m: N, a: M } = p;
    ll(N), ll(M), z && Wr(z), A.stop(), I && (I.flags |= 8, $e(D, p, m, x)), B && gt(B, m), gt(() => {
      p.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve());
  }, ft = (p, m, x, z = !1, A = !1, I = 0) => {
    for (let D = I; D < p.length; D++)
      $e(p[D], m, x, z, A);
  }, bt = (p) => {
    if (p.shapeFlag & 6)
      return bt(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = h(p.anchor || p.el), x = m && m[Hd];
    return x ? h(x) : m;
  };
  let Ye = !1;
  const yn = (p, m, x) => {
    p == null ? m._vnode && $e(m._vnode, null, null, !0) : T(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      x
    ), m._vnode = p, Ye || (Ye = !0, Qi(), xs(), Ye = !1);
  }, pt = {
    p: T,
    um: $e,
    m: He,
    r: Me,
    mt: G,
    mc: j,
    pc: ue,
    pbc: K,
    n: bt,
    o: e
  };
  let Gt, Zt;
  return {
    render: yn,
    hydrate: Gt,
    createApp: lf(yn, Gt)
  };
}
function ea({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function wn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ws(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (ie(o) && ie(r))
    for (let a = 0; a < o.length; a++) {
      const i = o[a];
      let l = r[a];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[a] = un(r[a]), l.el = i.el), !n && l.patchFlag !== -2 && Ws(i, l)), l.type === Cr && (l.el = i.el);
    }
}
function yf(e) {
  const t = e.slice(), n = [0];
  let o, r, a, i, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const d = e[o];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[o] = r, n.push(o);
        continue;
      }
      for (a = 0, i = n.length - 1; a < i; )
        l = a + i >> 1, e[n[l]] < d ? a = l + 1 : i = l;
      d < e[n[a]] && (a > 0 && (t[o] = n[a - 1]), n[a] = o);
    }
  }
  for (a = n.length, i = n[a - 1]; a-- > 0; )
    n[a] = i, i = t[i];
  return n;
}
function Xs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Xs(t);
}
function ll(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const bf = Symbol.for("v-scx"), wf = () => Zo(bf);
function xf(e, t) {
  return Wa(e, null, t);
}
function Ot(e, t, n) {
  return Wa(e, t, n);
}
function Wa(e, t, n = Ee) {
  const { immediate: o, deep: r, flush: a, once: i } = n, l = Ie({}, n);
  let u;
  if (Sr)
    if (a === "sync") {
      const h = wf();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!t || o)
      l.once = !0;
    else
      return {
        stop: Bt,
        resume: Bt,
        pause: Bt
      };
  const d = Ke;
  l.call = (h, v, S) => $t(h, d, v, S);
  let s = !1;
  a === "post" ? l.scheduler = (h) => {
    gt(h, d && d.suspense);
  } : a !== "sync" && (s = !0, l.scheduler = (h, v) => {
    v ? h() : Fa(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), s && (h.flags |= 2, d && (h.id = d.uid, h.i = d));
  };
  const f = zd(e, t, l);
  return u && u.push(f), f;
}
function _f(e, t, n) {
  const o = this.proxy, r = ze(e) ? e.includes(".") ? Ys(o, e) : () => o[e] : e.bind(o, o);
  let a;
  pe(t) ? a = t : (a = t.handler, n = t);
  const i = Co(this), l = Wa(r, a.bind(o), n);
  return i(), l;
}
function Ys(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
const kf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${dt(t)}Modifiers`] || e[`${_t(t)}Modifiers`];
function Cf(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Ee;
  let r = n;
  const a = t.startsWith("update:"), i = a && kf(o, t.slice(7));
  i && (i.trim && (r = n.map((s) => ze(s) ? s.trim() : s)), i.number && (r = n.map(Gu)));
  let l, u = o[l = Kr(t)] || // also try camelCase event handler (#2249)
  o[l = Kr(dt(t))];
  !u && a && (u = o[l = Kr(_t(t))]), u && $t(
    u,
    e,
    6,
    r
  );
  const d = o[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, $t(
      d,
      e,
      6,
      r
    );
  }
}
function Gs(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const a = e.emits;
  let i = {}, l = !1;
  if (!pe(e)) {
    const u = (d) => {
      const s = Gs(d, t, !0);
      s && (l = !0, Ie(i, s));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !a && !l ? (Ae(e) && o.set(e, null), null) : (ie(a) ? a.forEach((u) => i[u] = null) : Ie(i, a), Ae(e) && o.set(e, i), i);
}
function kr(e, t) {
  return !e || !pr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ke(e, t[0].toLowerCase() + t.slice(1)) || ke(e, _t(t)) || ke(e, t));
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
    emit: u,
    render: d,
    renderCache: s,
    props: f,
    data: h,
    setupState: v,
    ctx: S,
    inheritAttrs: T
  } = e, V = ar(e);
  let _, U;
  try {
    if (n.shapeFlag & 4) {
      const w = r || o, $ = w;
      _ = Ht(
        d.call(
          $,
          w,
          s,
          f,
          v,
          h,
          S
        )
      ), U = l;
    } else {
      const w = t;
      _ = Ht(
        w.length > 1 ? w(
          f,
          { attrs: l, slots: i, emit: u }
        ) : w(
          f,
          null
        )
      ), U = t.props ? l : Sf(l);
    }
  } catch (w) {
    ho.length = 0, wr(w, e, 1), _ = oe(lt);
  }
  let te = _;
  if (U && T !== !1) {
    const w = Object.keys(U), { shapeFlag: $ } = te;
    w.length && $ & 7 && (a && w.some(Ea) && (U = Tf(
      U,
      a
    )), te = hn(te, U, !1, !0));
  }
  return n.dirs && (te = hn(te, null, !1, !0), te.dirs = te.dirs ? te.dirs.concat(n.dirs) : n.dirs), n.transition && In(te, n.transition), _ = te, ar(V), _;
}
const Sf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || pr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Tf = (e, t) => {
  const n = {};
  for (const o in e)
    (!Ea(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
};
function Ef(e, t, n) {
  const { props: o, children: r, component: a } = e, { props: i, children: l, patchFlag: u } = t, d = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? sl(o, i, d) : !!i;
    if (u & 8) {
      const s = t.dynamicProps;
      for (let f = 0; f < s.length; f++) {
        const h = s[f];
        if (i[h] !== o[h] && !kr(d, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? sl(o, i, d) : !0 : !!i;
  return !1;
}
function sl(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const a = o[r];
    if (t[a] !== e[a] && !kr(n, a))
      return !0;
  }
  return !1;
}
function Af({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Zs = (e) => e.__isSuspense;
function If(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : Od(e);
}
const we = Symbol.for("v-fgt"), Cr = Symbol.for("v-txt"), lt = Symbol.for("v-cmt"), Jo = Symbol.for("v-stc"), ho = [];
let yt = null;
function k(e = !1) {
  ho.push(yt = e ? null : []);
}
function $f() {
  ho.pop(), yt = ho[ho.length - 1] || null;
}
let xo = 1;
function cl(e) {
  xo += e, e < 0 && yt && (yt.hasOnce = !0);
}
function Js(e) {
  return e.dynamicChildren = xo > 0 ? yt || Bn : null, $f(), xo > 0 && yt && yt.push(e), e;
}
function E(e, t, n, o, r, a) {
  return Js(
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
function We(e, t, n, o, r) {
  return Js(
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
function lr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function kn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Qs = ({ key: e }) => e ?? null, Qo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ze(e) || tt(e) || pe(e) ? { i: et, r: e, k: t, f: !!n } : e : null);
function C(e, t = null, n = null, o = 0, r = null, a = e === we ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qs(t),
    ref: t && Qo(t),
    scopeId: ks,
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
    ctx: et
  };
  return l ? (Xa(u, n), a & 128 && e.normalize(u)) : n && (u.shapeFlag |= ze(n) ? 8 : 16), xo > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  yt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && yt.push(u), u;
}
const oe = Rf;
function Rf(e, t = null, n = null, o = 0, r = null, a = !1) {
  if ((!e || e === Ms) && (e = lt), lr(e)) {
    const l = hn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Xa(l, n), xo > 0 && !a && yt && (l.shapeFlag & 6 ? yt[yt.indexOf(e)] = l : yt.push(l)), l.patchFlag = -2, l;
  }
  if (Ff(e) && (e = e.__vccOpts), t) {
    t = Pf(t);
    let { class: l, style: u } = t;
    l && !ze(l) && (t.class = ge(l)), Ae(u) && (Ba(u) && !ie(u) && (u = Ie({}, u)), t.style = Sn(u));
  }
  const i = ze(e) ? 1 : Zs(e) ? 128 : Cs(e) ? 64 : Ae(e) ? 4 : pe(e) ? 2 : 0;
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
function Pf(e) {
  return e ? Ba(e) || Ns(e) ? Ie({}, e) : e : null;
}
function hn(e, t, n = !1, o = !1) {
  const { props: r, ref: a, patchFlag: i, children: l, transition: u } = e, d = t ? ma(r || {}, t) : r, s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Qs(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? ie(a) ? a.concat(Qo(t)) : [a, Qo(t)] : Qo(t)
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
    patchFlag: t && e.type !== we ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
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
  return u && o && In(
    s,
    u.clone(s)
  ), s;
}
function Ue(e = " ", t = 0) {
  return oe(Cr, null, e, t);
}
function ec(e, t) {
  const n = oe(Jo, null, e);
  return n.staticCount = t, n;
}
function re(e = "", t = !1) {
  return t ? (k(), We(lt, null, e)) : oe(lt, null, e);
}
function Ht(e) {
  return e == null || typeof e == "boolean" ? oe(lt) : ie(e) ? oe(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? un(e) : oe(Cr, null, String(e));
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
      !r && !Ns(t) ? t._ctx = et : r === 3 && et && (et.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else pe(t) ? (t = { default: t, _ctx: et }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ue(t)]) : n = 8);
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
      else if (pr(r)) {
        const a = t[r], i = o[r];
        i && a !== i && !(ie(a) && a.includes(i)) && (t[r] = a ? [].concat(a, i) : i);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Mt(e, t, n, o = null) {
  $t(e, t, 7, [
    n,
    o
  ]);
}
const zf = Hs();
let Mf = 0;
function Lf(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || zf, a = {
    uid: Mf++,
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
    scope: new od(
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
    propsOptions: Ds(o, r),
    emitsOptions: Gs(o, r),
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Cf.bind(null, a), e.ce && e.ce(a), a;
}
let Ke = null;
const tc = () => Ke || et;
let sr, va;
{
  const e = es(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (a) => {
      r.length > 1 ? r.forEach((i) => i(a)) : r[0](a);
    };
  };
  sr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ke = n
  ), va = t(
    "__VUE_SSR_SETTERS__",
    (n) => Sr = n
  );
}
const Co = (e) => {
  const t = Ke;
  return sr(e), e.scope.on(), () => {
    e.scope.off(), sr(t);
  };
}, ul = () => {
  Ke && Ke.scope.off(), sr(null);
};
function nc(e) {
  return e.vnode.shapeFlag & 4;
}
let Sr = !1;
function Of(e, t = !1, n = !1) {
  t && va(t);
  const { props: o, children: r } = e.vnode, a = nc(e);
  cf(e, o, a, t), pf(e, r, n);
  const i = a ? Hf(e, t) : void 0;
  return t && va(!1), i;
}
function Hf(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qd);
  const { setup: o } = n;
  if (o) {
    const r = e.setupContext = o.length > 1 ? Vf(e) : null, a = Co(e);
    mn();
    const i = _o(
      o,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (vn(), a(), Zl(i)) {
      if (Dn(e) || Rs(e), i.then(ul, ul), t)
        return i.then((l) => {
          dl(e, l, t);
        }).catch((l) => {
          wr(l, e, 0);
        });
      e.asyncDep = i;
    } else
      dl(e, i, t);
  } else
    oc(e, t);
}
function dl(e, t, n) {
  pe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ae(t) && (e.setupState = ys(t)), oc(e, n);
}
let fl;
function oc(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && fl && !o.render) {
      const r = o.template || qa(e).template;
      if (r) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = o, d = Ie(
          Ie(
            {
              isCustomElement: a,
              delimiters: l
            },
            i
          ),
          u
        );
        o.render = fl(r, d);
      }
    }
    e.render = o.render || Bt;
  }
  {
    const r = Co(e);
    mn();
    try {
      ef(e);
    } finally {
      vn(), r();
    }
  }
}
const Bf = {
  get(e, t) {
    return nt(e, "get", ""), e[t];
  }
};
function Vf(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Bf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ya(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ys(Td(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in po)
        return po[n](e);
    },
    has(t, n) {
      return n in t || n in po;
    }
  })) : e.proxy;
}
function Nf(e, t = !0) {
  return pe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ff(e) {
  return pe(e) && "__vccOpts" in e;
}
const X = (e, t) => Rd(e, t, Sr);
function Je(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Ae(t) && !ie(t) ? lr(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && lr(n) && (n = [n]), oe(e, t, n));
}
const Df = "3.5.3";
/**
* @vue/runtime-dom v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ya;
const pl = typeof window < "u" && window.trustedTypes;
if (pl)
  try {
    ya = /* @__PURE__ */ pl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const rc = ya ? (e) => ya.createHTML(e) : (e) => e, jf = "http://www.w3.org/2000/svg", Uf = "http://www.w3.org/1998/Math/MathML", Ut = typeof document < "u" ? document : null, hl = Ut && /* @__PURE__ */ Ut.createElement("template"), qf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Ut.createElementNS(jf, e) : t === "mathml" ? Ut.createElementNS(Uf, e) : n ? Ut.createElement(e, { is: n }) : Ut.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Ut.createTextNode(e),
  createComment: (e) => Ut.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ut.querySelector(e),
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
      hl.innerHTML = rc(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = hl.content;
      if (o === "svg" || o === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
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
}, rn = "transition", lo = "animation", Un = Symbol("_vtc"), ac = {
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
}, ic = /* @__PURE__ */ Ie(
  {},
  Ts,
  ac
), Kf = (e) => (e.displayName = "Transition", e.props = ic, e), Wf = /* @__PURE__ */ Kf(
  (e, { slots: t }) => Je(Vd, lc(e), t)
), xn = (e, t = []) => {
  ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, gl = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function lc(e) {
  const t = {};
  for (const H in e)
    H in ac || (t[H] = e[H]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: r,
    enterFromClass: a = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: u = a,
    appearActiveClass: d = i,
    appearToClass: s = l,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: v = `${n}-leave-to`
  } = e, S = Xf(r), T = S && S[0], V = S && S[1], {
    onBeforeEnter: _,
    onEnter: U,
    onEnterCancelled: te,
    onLeave: w,
    onLeaveCancelled: $,
    onBeforeAppear: ne = _,
    onAppear: P = U,
    onAppearCancelled: j = te
  } = t, q = (H, Y, G) => {
    an(H, Y ? s : l), an(H, Y ? d : i), G && G();
  }, K = (H, Y) => {
    H._isLeaving = !1, an(H, f), an(H, v), an(H, h), Y && Y();
  }, J = (H) => (Y, G) => {
    const ce = H ? P : U, ee = () => q(Y, H, G);
    xn(ce, [Y, ee]), ml(() => {
      an(Y, H ? u : a), Dt(Y, H ? s : l), gl(ce) || vl(Y, o, T, ee);
    });
  };
  return Ie(t, {
    onBeforeEnter(H) {
      xn(_, [H]), Dt(H, a), Dt(H, i);
    },
    onBeforeAppear(H) {
      xn(ne, [H]), Dt(H, u), Dt(H, d);
    },
    onEnter: J(!1),
    onAppear: J(!0),
    onLeave(H, Y) {
      H._isLeaving = !0;
      const G = () => K(H, Y);
      Dt(H, f), Dt(H, h), cc(), ml(() => {
        H._isLeaving && (an(H, f), Dt(H, v), gl(w) || vl(H, o, V, G));
      }), xn(w, [H, G]);
    },
    onEnterCancelled(H) {
      q(H, !1), xn(te, [H]);
    },
    onAppearCancelled(H) {
      q(H, !0), xn(j, [H]);
    },
    onLeaveCancelled(H) {
      K(H), xn($, [H]);
    }
  });
}
function Xf(e) {
  if (e == null)
    return null;
  if (Ae(e))
    return [na(e.enter), na(e.leave)];
  {
    const t = na(e);
    return [t, t];
  }
}
function na(e) {
  return ia(e);
}
function Dt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Un] || (e[Un] = /* @__PURE__ */ new Set())).add(t);
}
function an(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Un];
  n && (n.delete(t), n.size || (e[Un] = void 0));
}
function ml(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Yf = 0;
function vl(e, t, n, o) {
  const r = e._endId = ++Yf, a = () => {
    r === e._endId && o();
  };
  if (n)
    return setTimeout(a, n);
  const { type: i, timeout: l, propCount: u } = sc(e, t);
  if (!i)
    return o();
  const d = i + "end";
  let s = 0;
  const f = () => {
    e.removeEventListener(d, h), a();
  }, h = (v) => {
    v.target === e && ++s >= u && f();
  };
  setTimeout(() => {
    s < u && f();
  }, l + 1), e.addEventListener(d, h);
}
function sc(e, t) {
  const n = window.getComputedStyle(e), o = (S) => (n[S] || "").split(", "), r = o(`${rn}Delay`), a = o(`${rn}Duration`), i = yl(r, a), l = o(`${lo}Delay`), u = o(`${lo}Duration`), d = yl(l, u);
  let s = null, f = 0, h = 0;
  t === rn ? i > 0 && (s = rn, f = i, h = a.length) : t === lo ? d > 0 && (s = lo, f = d, h = u.length) : (f = Math.max(i, d), s = f > 0 ? i > d ? rn : lo : null, h = s ? s === rn ? a.length : u.length : 0);
  const v = s === rn && /\b(transform|all)(,|$)/.test(
    o(`${rn}Property`).toString()
  );
  return {
    type: s,
    timeout: f,
    propCount: h,
    hasTransform: v
  };
}
function yl(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => bl(n) + bl(e[o])));
}
function bl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function cc() {
  return document.body.offsetHeight;
}
function Gf(e, t, n) {
  const o = e[Un];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const wl = Symbol("_vod"), Zf = Symbol("_vsh"), Jf = Symbol(""), Qf = /(^|;)\s*display\s*:/;
function ep(e, t, n) {
  const o = e.style, r = ze(n);
  let a = !1;
  if (n && !r) {
    if (t)
      if (ze(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && er(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && er(o, i, "");
    for (const i in n)
      i === "display" && (a = !0), er(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[Jf];
      i && (n += ";" + i), o.cssText = n, a = Qf.test(n);
    }
  } else t && e.removeAttribute("style");
  wl in e && (e[wl] = a ? o.display : "", e[Zf] && (o.display = "none"));
}
const xl = /\s*!important$/;
function er(e, t, n) {
  if (ie(n))
    n.forEach((o) => er(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = tp(e, t);
    xl.test(n) ? e.setProperty(
      _t(o),
      n.replace(xl, ""),
      "important"
    ) : e[o] = n;
  }
}
const _l = ["Webkit", "Moz", "ms"], oa = {};
function tp(e, t) {
  const n = oa[t];
  if (n)
    return n;
  let o = dt(t);
  if (o !== "filter" && o in e)
    return oa[t] = o;
  o = vr(o);
  for (let r = 0; r < _l.length; r++) {
    const a = _l[r] + o;
    if (a in e)
      return oa[t] = a;
  }
  return t;
}
const kl = "http://www.w3.org/1999/xlink";
function Cl(e, t, n, o, r, a = nd(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(kl, t.slice(6, t.length)) : e.setAttributeNS(kl, t, n) : n == null || a && !ts(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : gn(n) ? String(n) : n
  );
}
function np(e, t, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? rc(n) : n);
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
    i === "boolean" ? n = ts(n) : n == null && i === "string" ? (n = "", a = !0) : i === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(t);
}
function op(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function rp(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Sl = Symbol("_vei");
function ap(e, t, n, o, r = null) {
  const a = e[Sl] || (e[Sl] = {}), i = a[t];
  if (o && i)
    i.value = o;
  else {
    const [l, u] = ip(t);
    if (o) {
      const d = a[t] = cp(
        o,
        r
      );
      op(e, l, d, u);
    } else i && (rp(e, l, i, u), a[t] = void 0);
  }
}
const Tl = /(?:Once|Passive|Capture)$/;
function ip(e) {
  let t;
  if (Tl.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Tl); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : _t(e.slice(2)), t];
}
let ra = 0;
const lp = /* @__PURE__ */ Promise.resolve(), sp = () => ra || (lp.then(() => ra = 0), ra = Date.now());
function cp(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    $t(
      up(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = sp(), n;
}
function up(e, t) {
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
const El = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dp = (e, t, n, o, r, a) => {
  const i = r === "svg";
  t === "class" ? Gf(e, o, i) : t === "style" ? ep(e, n, o) : pr(t) ? Ea(t) || ap(e, t, n, o, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fp(e, t, o, i)) ? (np(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Cl(e, t, o, i, a, t !== "value")) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Cl(e, t, o, i));
};
function fp(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && El(t) && pe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return El(t) && ze(n) ? !1 : !!(t in e || e._isVueCE && (/[A-Z]/.test(t) || !ze(n)));
}
const Al = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function uc(e, t, n) {
  const o = /* @__PURE__ */ $s(e, t);
  gr(o) && Ie(o, t);
  class r extends Ga {
    constructor(i) {
      super(o, i, n);
    }
  }
  return r.def = o, r;
}
const pp = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ga extends pp {
  constructor(t, n = {}, o = Rl) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== Rl ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
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
    this._connected = !1, mt(() => {
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
        for (const u in a) {
          const d = a[u];
          (d === Number || d && d.type === Number) && (u in this._props && (this._props[u] = ia(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[dt(u)] = !0);
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
          get: () => xt(n[o])
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
    let o = n ? this.getAttribute(t) : Al;
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
    n !== this._props[t] && (n === Al ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(_t(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(_t(t), n + "") : n || this.removeAttribute(_t(t))));
  }
  _update() {
    Cp(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = oe(this._def, Ie(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0;
      const r = (a, i) => {
        this.dispatchEvent(
          new CustomEvent(
            a,
            gr(i[0]) ? Ie({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      o.emit = (a, ...i) => {
        r(a, i), _t(a) !== a && r(_t(a), i);
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
        for (const u of i) {
          if (n && u.nodeType === 1) {
            const d = n + "-s", s = document.createTreeWalker(u, 1);
            u.setAttribute(d, "");
            let f;
            for (; f = s.nextNode(); )
              f.setAttribute(d, "");
          }
          l.insertBefore(u, r);
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
const dc = /* @__PURE__ */ new WeakMap(), fc = /* @__PURE__ */ new WeakMap(), cr = Symbol("_moveCb"), Il = Symbol("_enterCb"), hp = (e) => (delete e.props.mode, e), gp = /* @__PURE__ */ hp({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Ie({}, ic, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = tc(), o = Ss();
    let r, a;
    return zs(() => {
      if (!r.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!wp(
        r[0].el,
        n.vnode.el,
        i
      ))
        return;
      r.forEach(vp), r.forEach(yp);
      const l = r.filter(bp);
      cc(), l.forEach((u) => {
        const d = u.el, s = d.style;
        Dt(d, i), s.transform = s.webkitTransform = s.transitionDuration = "";
        const f = d[cr] = (h) => {
          h && h.target !== d || (!h || /transform$/.test(h.propertyName)) && (d.removeEventListener("transitionend", f), d[cr] = null, an(d, i));
        };
        d.addEventListener("transitionend", f);
      });
    }), () => {
      const i = xe(e), l = lc(i);
      let u = i.tag || we;
      if (r = [], a)
        for (let d = 0; d < a.length; d++) {
          const s = a[d];
          s.el && s.el instanceof Element && (r.push(s), In(
            s,
            wo(
              s,
              l,
              o,
              n
            )
          ), dc.set(
            s,
            s.el.getBoundingClientRect()
          ));
        }
      a = t.default ? Da(t.default()) : [];
      for (let d = 0; d < a.length; d++) {
        const s = a[d];
        s.key != null && In(
          s,
          wo(s, l, o, n)
        );
      }
      return oe(u, null, a);
    };
  }
}), mp = gp;
function vp(e) {
  const t = e.el;
  t[cr] && t[cr](), t[Il] && t[Il]();
}
function yp(e) {
  fc.set(e, e.el.getBoundingClientRect());
}
function bp(e) {
  const t = dc.get(e), n = fc.get(e), o = t.left - n.left, r = t.top - n.top;
  if (o || r) {
    const a = e.el.style;
    return a.transform = a.webkitTransform = `translate(${o}px,${r}px)`, a.transitionDuration = "0s", e;
  }
}
function wp(e, t, n) {
  const o = e.cloneNode(), r = e[Un];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((u) => u && o.classList.remove(u));
  }), n.split(/\s+/).forEach((l) => l && o.classList.add(l)), o.style.display = "none";
  const a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(o);
  const { hasTransform: i } = sc(o);
  return a.removeChild(o), i;
}
const xp = ["ctrl", "shift", "alt", "meta"], _p = {
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
  exact: (e, t) => xp.some((n) => e[`${n}Key`] && !t.includes(n))
}, Wo = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...a) => {
    for (let i = 0; i < t.length; i++) {
      const l = _p[t[i]];
      if (l && l(r, t)) return;
    }
    return e(r, ...a);
  });
}, kp = /* @__PURE__ */ Ie({ patchProp: dp }, qf);
let $l;
function pc() {
  return $l || ($l = gf(kp));
}
const Cp = (...e) => {
  pc().render(...e);
}, Rl = (...e) => {
  const t = pc().createApp(...e), { mount: n } = t;
  return t.mount = (o) => {
    const r = Tp(o);
    if (!r) return;
    const a = t._component;
    !pe(a) && !a.render && !a.template && (a.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, Sp(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Sp(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Tp(e) {
  return ze(e) ? document.querySelector(e) : e;
}
const Pl = (e) => {
  if (!e || typeof e != "string") return !1;
  const t = e.trim();
  return !t || /[;{}]/.test(t) ? !1 : /^[0-9a-fA-F]{3,4}([0-9a-fA-F]{3,4})?$/.test(t) ? `#${t}` : typeof CSS > "u" || typeof CSS.supports != "function" || CSS.supports("color", t) ? t : !1;
}, hc = ({ theme: e = "dark", backgroundColor: t, foregroundColor: n } = {}) => {
  const o = e === "light" ? "#fff" : "#000", r = e === "light" ? "#000" : "#fff", a = Pl(t), i = Pl(n);
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
}, Ep = ["width", "viewBox"], Ap = { fill: "currentColor" }, Ip = {
  key: 0,
  d: "M 1.572 23 C 0.948 23 0.299 22.9 0 22.776 L 0 20.43 C 0.125 20.48 0.374 20.505 0.624 20.505 C 1.771 20.505 2.37 20.031 2.37 18.784 L 2.37 5.288 L 5.413 5.288 L 5.413 19.358 C 5.413 21.328 4.316 23 1.572 23 Z M 13.5 17.911 C 9.832 17.911 7.262 15.466 7.262 11.425 C 7.262 7.434 9.857 4.889 13.499 4.889 C 17.166 4.889 19.761 7.434 19.761 11.425 C 19.761 15.466 17.166 17.911 13.499 17.911 Z M 10.356 11.425 C 10.356 14.02 11.603 15.516 13.499 15.516 C 15.395 15.516 16.667 14.02 16.667 11.426 C 16.667 8.781 15.37 7.309 13.499 7.309 C 11.653 7.309 10.356 8.781 10.356 11.425 Z M 25.492 17.911 C 23.047 17.911 21.127 16.24 21.127 13.021 L 21.127 5.289 L 24.195 5.289 L 24.195 12.549 C 24.195 14.245 24.943 15.467 26.415 15.467 C 27.962 15.467 29.06 14.32 29.06 12.524 L 29.06 5.288 L 32.103 5.288 L 32.103 17.462 L 29.084 17.462 L 29.084 16.963 C 29.084 16.589 29.134 16.165 29.209 15.791 C 28.586 16.963 27.513 17.911 25.492 17.911 Z M 34.174 17.462 L 34.174 5.288 L 37.218 5.288 L 37.218 6.211 C 37.218 6.661 37.193 7.035 37.118 7.484 C 37.766 6.112 38.864 4.889 40.685 4.889 C 40.935 4.889 41.135 4.914 41.334 4.964 L 41.334 7.908 C 41.134 7.858 40.86 7.808 40.461 7.808 C 38.59 7.808 37.218 8.756 37.218 11.425 L 37.218 17.462 Z M 42.977 17.462 L 42.977 5.29 L 46.02 5.29 L 46.02 5.838 C 46.02 6.188 45.995 6.562 45.92 7.036 C 46.594 5.813 47.742 4.89 49.662 4.89 C 52.357 4.89 53.953 6.786 53.953 9.78 L 53.953 17.463 L 50.91 17.463 L 50.91 10.229 C 50.91 8.433 50.037 7.31 48.615 7.31 C 47.118 7.31 46.02 8.632 46.02 10.329 L 46.02 17.463 L 42.977 17.463 Z M 60.112 17.912 C 57.992 17.912 55.922 16.515 55.922 14.12 C 55.922 11.376 58.042 10.428 60.662 10.078 L 62.408 9.854 C 63.405 9.729 63.755 9.354 63.755 8.756 C 63.755 7.908 63.056 7.16 61.759 7.16 C 60.337 7.16 59.439 7.958 59.314 9.23 L 56.171 9.23 C 56.371 6.686 58.441 4.89 61.584 4.89 C 65.301 4.89 66.798 6.885 66.798 10.303 L 66.798 17.463 L 63.98 17.463 L 63.98 16.963 C 63.98 16.564 64.03 16.19 64.105 15.791 C 63.456 16.988 62.209 17.911 60.113 17.911 Z M 59.015 13.995 C 59.015 15.068 59.863 15.666 60.935 15.666 C 62.557 15.666 63.855 14.469 63.855 12.748 L 63.855 11.425 C 63.58 11.675 63.156 11.8 62.408 11.949 L 61.41 12.149 C 59.988 12.423 59.015 12.897 59.015 13.995 Z M 68.93 17.463 L 68.93 0 L 71.973 0 L 71.973 17.463 Z",
  transform: "translate(125)"
}, gc = {
  __name: "AntikytheraJournalLogo",
  props: {
    showJournal: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return (t, n) => (k(), E("svg", {
      width: e.showJournal ? 197 : 121,
      height: "23",
      viewBox: e.showJournal ? "0 0 197 23" : "0 0 121 23",
      role: "img",
      "aria-label": "Antikythera Journal",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      C("g", Ap, [
        n[0] || (n[0] = ec('<path d="M 11.058 12.841 C 10.128 12.841 9.205 12.841 8.244 12.841 C 8.244 12.374 8.244 11.908 8.244 11.367 C 8.155 11.472 8.11 11.517 8.066 11.57 C 7.016 12.998 5.542 13.42 3.868 13.299 C 2.662 13.217 1.627 12.735 0.823 11.788 C -0.413 10.344 -0.398 7.359 1.85 6.164 C 2.855 5.63 3.935 5.405 5.044 5.262 C 5.617 5.187 6.197 5.119 6.771 5.036 C 7.463 4.938 7.85 4.645 7.962 4.141 C 8.073 3.608 7.746 2.938 7.217 2.623 C 5.743 1.751 3.905 2.517 3.488 4.187 C 3.466 4.277 3.354 4.42 3.279 4.42 C 2.289 4.435 1.299 4.427 0.28 4.427 C 0.362 3.352 0.726 2.457 1.419 1.69 C 2.349 0.653 3.547 0.149 4.895 0.036 C 5.714 -0.031 6.562 -0.009 7.366 0.142 C 9.554 0.548 10.805 2.036 11.006 4.314 C 11.013 4.412 11.051 4.502 11.073 4.593 C 11.058 7.344 11.058 10.096 11.058 12.841 Z M 8.073 6.826 C 7.433 6.984 6.8 7.134 6.175 7.299 C 5.475 7.487 4.753 7.638 4.083 7.916 C 3.361 8.217 3.079 8.811 3.16 9.54 C 3.235 10.209 3.696 10.765 4.396 10.923 C 5.542 11.186 6.555 10.916 7.359 10.014 C 8.215 9.074 8.088 7.908 8.073 6.826 Z" transform="translate(107.927 4.987)"></path><path d="M 0 17.819 C 0 11.864 0 5.947 0 0 C 1.02 0 2.032 0 3.052 0 C 3.052 2.316 3.052 4.632 3.052 6.955 C 3.268 6.692 3.469 6.406 3.707 6.165 C 4.66 5.188 5.858 4.88 7.168 4.977 C 9.721 5.18 10.987 7.007 11.084 9.271 C 11.195 12.075 11.121 14.887 11.121 17.699 C 11.121 17.737 11.099 17.767 11.084 17.819 C 10.086 17.819 9.089 17.819 8.032 17.819 C 8.032 17.669 8.032 17.526 8.032 17.376 C 8.024 14.925 8.039 12.481 8.002 10.03 C 7.995 9.571 7.861 9.083 7.667 8.669 C 6.938 7.098 4.786 7.007 3.707 8.489 C 3.305 9.037 3.097 9.654 3.097 10.338 C 3.089 12.684 3.089 15.037 3.089 17.383 C 3.089 17.518 3.089 17.654 3.089 17.812 C 2.047 17.819 1.035 17.819 0 17.819 Z" transform="translate(74.233 0)"></path><path d="M 3.059 17.827 C 2.017 17.827 1.02 17.827 0 17.827 C 0 11.88 0 5.955 0 0 C 1.005 0 2.002 0 3.052 0 C 3.052 3.391 3.052 6.789 3.052 10.248 C 3.714 9.511 4.325 8.827 4.943 8.158 C 5.739 7.286 6.543 6.421 7.354 5.556 C 7.429 5.474 7.555 5.383 7.66 5.383 C 8.88 5.368 10.108 5.376 11.433 5.376 C 9.721 7.188 8.069 8.932 6.402 10.699 C 8.218 13.068 10.027 15.421 11.873 17.827 C 11.679 17.834 11.567 17.849 11.448 17.849 C 10.421 17.849 9.386 17.834 8.359 17.857 C 8.054 17.864 7.868 17.774 7.689 17.518 C 6.692 16.09 5.672 14.677 4.66 13.263 C 4.563 13.135 4.466 13.007 4.362 12.872 C 3.945 13.278 3.528 13.661 3.141 14.075 C 3.067 14.158 3.067 14.331 3.067 14.458 C 3.052 15.564 3.059 16.676 3.059 17.827 Z" transform="translate(39.918 0)"></path><path d="M 12.109 8.827 C 11.841 10.73 10.859 12.03 9.199 12.76 C 7.226 13.624 5.217 13.602 3.266 12.677 C 1.45 11.805 0.49 10.233 0.155 8.294 C -0.15 6.512 -0.046 4.76 0.847 3.128 C 1.859 1.279 3.445 0.279 5.522 0.046 C 6.757 -0.09 7.948 0.068 9.057 0.632 C 10.829 1.534 11.7 3.091 12.027 4.985 C 12.161 5.767 12.169 6.564 12.236 7.406 C 9.177 7.406 6.199 7.406 3.184 7.406 C 3.244 8.662 3.609 9.715 4.651 10.391 C 5.656 11.045 6.72 11.075 7.785 10.519 C 8.365 10.218 8.723 9.722 8.909 9.098 C 8.938 8.993 9.057 8.835 9.132 8.835 C 10.107 8.827 11.082 8.827 12.109 8.827 Z M 8.99 5.136 C 8.916 3.316 7.755 2.264 5.924 2.346 C 4.495 2.406 3.125 3.812 3.207 5.136 C 5.135 5.136 7.063 5.136 8.99 5.136 Z" transform="translate(86.651 4.962)"></path><path d="M 0.28 4.5 C 0.437 2.913 1.114 1.695 2.439 0.928 C 4.426 -0.222 6.526 -0.275 8.61 0.612 C 10.069 1.229 10.701 2.522 10.955 4.026 C 11.029 4.47 11.059 4.921 11.059 5.364 C 11.066 7.778 11.066 10.184 11.066 12.597 C 11.066 12.695 11.059 12.793 11.051 12.905 C 10.106 12.905 9.183 12.905 8.208 12.905 C 8.23 12.394 8.253 11.905 8.275 11.357 C 7.784 12.124 7.173 12.672 6.377 13.011 C 4.583 13.778 2.342 13.402 1.084 12.116 C -0.851 10.139 -0.099 6.868 2.573 5.928 C 3.556 5.582 4.613 5.462 5.64 5.259 C 6.012 5.184 6.399 5.161 6.779 5.109 C 7.471 5.011 7.873 4.718 7.985 4.229 C 8.096 3.718 7.791 3.056 7.285 2.718 C 5.871 1.785 3.868 2.597 3.503 4.244 C 3.481 4.342 3.355 4.492 3.273 4.492 C 2.298 4.507 1.315 4.5 0.28 4.5 Z M 8.156 6.853 C 7.538 7.018 7.039 7.154 6.548 7.289 C 5.729 7.515 4.888 7.672 4.099 7.981 C 3.399 8.251 3.087 8.883 3.161 9.522 C 3.243 10.274 3.704 10.815 4.434 10.996 C 5.871 11.342 7.464 10.635 7.895 9.116 C 8.104 8.402 8.081 7.612 8.156 6.853 Z" transform="translate(0 4.92)"></path><path d="M 3.089 12.869 C 2.04 12.869 1.035 12.869 0 12.869 C 0 8.726 0 4.591 0 0.433 C 1.012 0.433 2.025 0.433 3.097 0.433 C 3.067 0.952 3.045 1.463 3.015 2.057 C 3.186 1.824 3.312 1.651 3.446 1.486 C 4.399 0.328 5.657 -0.078 7.086 0.012 C 9.64 0.178 10.816 1.959 11.054 4.005 C 11.106 4.463 11.121 4.922 11.121 5.38 C 11.128 7.726 11.121 10.072 11.121 12.418 C 11.121 12.553 11.121 12.689 11.121 12.854 C 10.086 12.854 9.081 12.854 8.024 12.854 C 8.024 12.704 8.024 12.553 8.024 12.41 C 8.024 10.05 8.039 7.689 8.017 5.335 C 8.009 4.899 7.928 4.441 7.793 4.02 C 7.22 2.238 5.263 2.177 4.25 2.974 C 3.513 3.553 3.119 4.335 3.104 5.268 C 3.082 7.636 3.089 10.012 3.089 12.38 C 3.089 12.531 3.089 12.681 3.089 12.869 Z" transform="translate(13.076 4.965)"></path><path d="M 0 0.001 C 1.124 0.001 2.203 -0.006 3.275 0.016 C 3.372 0.016 3.521 0.197 3.558 0.317 C 4.221 2.34 4.868 4.362 5.531 6.385 C 5.843 7.339 6.163 8.294 6.498 9.302 C 7.474 6.159 8.426 3.084 9.386 0.009 C 10.466 0.009 11.515 0.009 12.617 0.009 C 12.334 0.783 12.066 1.528 11.791 2.272 C 9.952 7.294 8.114 12.317 6.268 17.339 C 6.223 17.452 6.089 17.61 6 17.61 C 4.972 17.633 3.945 17.625 2.866 17.625 C 3.149 16.866 3.409 16.144 3.677 15.422 C 4.02 14.497 4.377 13.588 4.704 12.655 C 4.764 12.475 4.771 12.234 4.704 12.061 C 3.231 8.257 1.734 4.452 0.246 0.655 C 0.164 0.46 0.089 0.249 0 0.001 Z" transform="translate(51.492 5.374)"></path><path d="M 8.85 4.466 C 8.85 5.323 8.85 6.12 8.85 6.955 C 7.846 6.955 6.863 6.955 5.858 6.955 C 5.851 7.12 5.843 7.24 5.843 7.361 C 5.843 9.083 5.843 10.804 5.843 12.526 C 5.843 12.601 5.843 12.676 5.843 12.752 C 5.888 14.285 6.722 14.834 8.21 14.646 C 8.314 14.631 8.426 14.624 8.582 14.601 C 8.582 15.353 8.59 16.075 8.575 16.797 C 8.575 16.872 8.456 16.985 8.374 17 C 7.146 17.27 5.918 17.308 4.734 16.797 C 3.446 16.24 2.873 15.15 2.821 13.834 C 2.739 11.707 2.762 9.571 2.747 7.436 C 2.747 7.286 2.747 7.143 2.747 6.955 C 1.816 6.955 0.916 6.955 0 6.955 C 0 6.12 0 5.331 0 4.496 C 0.886 4.496 1.787 4.496 2.732 4.496 C 2.732 2.985 2.732 1.504 2.732 0 C 3.789 0 4.794 0 5.843 0 C 5.843 1.474 5.843 2.94 5.843 4.451 C 6.841 4.466 7.823 4.466 8.85 4.466 Z" transform="translate(64.347 0.888)"></path><path d="M 8.895 6.955 C 7.875 6.955 6.9 6.955 5.895 6.955 C 5.888 7.105 5.88 7.225 5.88 7.346 C 5.88 9.12 5.873 10.895 5.88 12.669 C 5.88 12.917 5.91 13.165 5.962 13.406 C 6.126 14.18 6.699 14.654 7.496 14.676 C 7.853 14.684 8.21 14.676 8.605 14.676 C 8.612 14.707 8.635 14.804 8.635 14.895 C 8.635 15.458 8.62 16.022 8.642 16.579 C 8.65 16.864 8.583 17.007 8.277 17.052 C 7.354 17.21 6.431 17.263 5.508 17.052 C 3.796 16.669 2.814 15.361 2.806 13.473 C 2.799 11.466 2.806 9.451 2.806 7.443 C 2.806 7.293 2.806 7.15 2.806 6.962 C 1.861 6.962 0.945 6.962 0 6.962 C 0 6.12 0 5.323 0 4.489 C 0.916 4.489 1.824 4.489 2.791 4.489 C 2.791 2.977 2.791 1.504 2.791 0 C 3.834 0 4.831 0 5.858 0 C 5.858 1.474 5.858 2.947 5.858 4.466 C 6.878 4.466 7.875 4.466 8.888 4.466 C 8.895 5.308 8.895 6.105 8.895 6.955 Z" transform="translate(24.875 0.903)"></path><path d="M 3.022 2.456 C 4.213 0.223 5.94 -0.221 7.22 0.087 C 7.22 1.065 7.22 2.042 7.22 3.042 C 6.729 3.042 6.245 2.997 5.761 3.05 C 4.242 3.208 3.305 4.162 3.118 5.704 C 3.074 6.072 3.059 6.448 3.059 6.824 C 3.051 8.824 3.059 10.816 3.059 12.847 C 2.039 12.847 1.027 12.847 0 12.847 C 0 8.726 0 4.599 0 0.441 C 0.997 0.441 2.002 0.441 3.029 0.441 C 3.022 1.11 3.022 1.779 3.022 2.456 Z" transform="translate(100.405 4.965)"></path><path d="M 0 0 C 1.027 0 2.025 0 3.052 0 C 3.052 4.143 3.052 8.271 3.052 12.428 C 2.04 12.428 1.035 12.428 0 12.428 C 0 8.293 0 4.173 0 0 Z" transform="translate(34.73 5.39)"></path>', 11)),
        e.showJournal ? (k(), E("path", Ip)) : re("", !0)
      ])
    ], 8, Ep));
  }
}, $p = "text-m font-sans flex w-full items-center justify-center border px-[16px] leading-[1.1] transition-transform duration-300 ease-out", So = {
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
    const t = e, n = X(() => typeof t.href == "string" && t.href.trim() !== ""), o = X(() => t.disabled || t.variant === "disabled"), r = X(() => n.value && !o.value ? "a" : "button"), a = X(() => r.value === "a" ? t.href : void 0), i = X(() => typeof t.download == "string" ? t.download : ""), l = X(() => t.size === "large" ? "rounded-lg py-[10px]" : "rounded-[4px] py-[4px]"), u = X(() => o.value ? "cursor-not-allowed" : "cursor-pointer hover:scale-[0.99] hover:duration-100"), d = X(() => o.value ? `border-[rgba(204,204,204,0.2)] bg-[rgba(204,204,204,0.2)] ${t.variant === "dark" ? "text-[color-mix(in_srgb,var(--black)_50%,transparent)]" : "text-[color-mix(in_srgb,var(--white)_50%,transparent)]"}` : t.variant === "dark" ? "border-stroke-light bg-black text-white" : "border-stroke-dark bg-white text-black");
    return (s, f) => (k(), We(Gd(r.value), {
      href: r.value === "a" ? a.value : void 0,
      target: r.value === "a" && e.target ? e.target : void 0,
      rel: r.value === "a" && e.target === "_blank" ? "noopener noreferrer" : e.rel,
      download: r.value === "a" && e.download ? i.value : void 0,
      type: r.value === "button" ? e.type : void 0,
      disabled: r.value === "button" ? o.value : void 0,
      "aria-disabled": o.value ? "true" : void 0,
      class: ge([$p, l.value, u.value, d.value])
    }, {
      default: Xt(() => [
        Jd(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "target", "rel", "download", "type", "disabled", "aria-disabled", "class"]));
  }
}, To = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Rp = {}, Pp = {
  width: "14",
  height: "23",
  viewBox: "0 0 14 23",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
function zp(e, t) {
  return k(), E("svg", Pp, t[0] || (t[0] = [
    ec('<path d="M11.7937 4.1625V13.1813V22.2H11.1H10.4062V13.1813V4.1625H11.1H11.7937Z"></path><path d="M1.3875 4.1625V10.7531V17.3438H0.69375H0V10.7531V4.1625H0.69375H1.3875Z"></path><path d="M3.46875 4.1625V10.7531V17.3438H2.775H2.08125V10.7531V4.1625H2.775H3.46875Z"></path><path d="M5.55 4.1625V10.7531V17.3438H4.85625H4.1625V10.7531V4.1625H4.85625H5.55Z"></path><path d="M7.63125 4.1625V10.7531V17.3438H6.9375H6.24375V10.7531V4.1625H6.9375H7.63125Z"></path><path d="M9.7125 0V8.67188V17.3438H9.01875H8.325V8.67188V0H9.01875H9.7125Z"></path><path d="M13.875 4.1625V10.7531V17.3438H13.1813H12.4875V10.7531V4.1625H13.1813H13.875Z"></path>', 7)
  ]));
}
const ba = /* @__PURE__ */ To(Rp, [["render", zp]]);
function zl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Ml(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zl(Object(n), !0).forEach(function(o) {
      Mp(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zl(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Mp(e, t, n) {
  return t = Lp(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Lp(e) {
  var t = Op(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Op(e, t) {
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
function ur(e) {
  return e._type === "span" && "text" in e && typeof e.text == "string" && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every((t) => typeof t == "string"));
}
function mc(e) {
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
function vc(e) {
  return mc(e) && "listItem" in e && typeof e.listItem == "string" && (typeof e.level > "u" || typeof e.level == "number");
}
function yc(e) {
  return e._type === "@list";
}
function bc(e) {
  return e._type === "@span";
}
function wc(e) {
  return e._type === "@text";
}
const Ll = ["strong", "em", "code", "underline", "strike-through"];
function Hp(e, t, n) {
  if (!ur(e) || !e.marks)
    return [];
  if (!e.marks.length)
    return [];
  const o = e.marks.slice(), r = {};
  return o.forEach((a) => {
    r[a] = 1;
    for (let i = t + 1; i < n.length; i++) {
      const l = n[i];
      if (l && ur(l) && Array.isArray(l.marks) && l.marks.indexOf(a) !== -1)
        r[a]++;
      else
        break;
    }
  }), o.sort((a, i) => Bp(r, a, i));
}
function Bp(e, t, n) {
  const o = e[t], r = e[n];
  if (o !== r)
    return r - o;
  const a = Ll.indexOf(t), i = Ll.indexOf(n);
  return a !== i ? a - i : t.localeCompare(n);
}
function Vp(e) {
  var t;
  const {
    children: n,
    markDefs: o = []
  } = e;
  if (!n || !n.length)
    return [];
  const r = n.map(Hp), a = {
    _type: "@span",
    children: [],
    markType: "<unknown>"
  };
  let i = [a];
  for (let l = 0; l < n.length; l++) {
    const u = n[l];
    if (!u)
      continue;
    const d = r[l] || [];
    let s = 1;
    if (i.length > 1)
      for (s; s < i.length; s++) {
        const h = ((t = i[s]) == null ? void 0 : t.markKey) || "", v = d.indexOf(h);
        if (v === -1)
          break;
        d.splice(v, 1);
      }
    i = i.slice(0, s);
    let f = i[i.length - 1];
    if (f) {
      for (const h of d) {
        const v = o.find((V) => V._key === h), S = v ? v._type : h, T = {
          _type: "@span",
          _key: u._key,
          children: [],
          markDef: v,
          markType: S,
          markKey: h
        };
        f.children.push(T), i.push(T), f = T;
      }
      if (ur(u)) {
        const h = u.text.split(`
`);
        for (let v = h.length; v-- > 1; )
          h.splice(v, 0, `
`);
        f.children = f.children.concat(h.map((v) => ({
          _type: "@text",
          text: v
        })));
      } else
        f.children = f.children.concat(u);
    }
  }
  return a.children;
}
function Np(e, t) {
  const n = [];
  let o;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (a) {
      if (!vc(a)) {
        n.push(a), o = void 0;
        continue;
      }
      if (!o) {
        o = Xo(a, r, t), n.push(o);
        continue;
      }
      if (Fp(a, o)) {
        o.children.push(a);
        continue;
      }
      if ((a.level || 1) > o.level) {
        const i = Xo(a, r, t);
        if (t === "html") {
          const l = o.children[o.children.length - 1], u = Ml(Ml({}, l), {}, {
            children: [...l.children, i]
          });
          o.children[o.children.length - 1] = u;
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
        o = Xo(a, r, t), n.push(o);
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
          o = Xo(a, r, t), n.push(o);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", a), n.push(a);
    }
  }
  return n;
}
function Fp(e, t) {
  return (e.level || 1) === t.level && e.listItem === t.listItem;
}
function Xo(e, t, n) {
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
  if (yc(e) && (e.level || 1) === n && r && (e.listItem || "normal") === o)
    return e;
  if (!("children" in e))
    return;
  const a = e.children[e.children.length - 1];
  return a && !ur(a) ? wa(a, t) : void 0;
}
function xc(e) {
  let t = "";
  return e.children.forEach((n) => {
    wc(n) ? t += n.text : bc(n) && (t += xc(n));
  }), t;
}
const Dp = "html";
function jp(e, t) {
  const { block: n, list: o, listItem: r, marks: a, types: i, ...l } = t;
  return {
    ...e,
    block: so(e, t, "block"),
    list: so(e, t, "list"),
    listItem: so(e, t, "listItem"),
    marks: so(e, t, "marks"),
    types: so(e, t, "types"),
    ...l
  };
}
function so(e, t, n) {
  const o = t[n], r = e[n];
  return typeof o == "function" || o && typeof r == "function" ? o : o ? {
    ...r,
    ...o
  } : r;
}
const je = (e) => (t, { slots: n }) => {
  var o;
  return Je(e, (o = n.default) == null ? void 0 : o.call(n));
}, Up = ({ value: e }, { slots: t }) => {
  var n;
  return Je("a", { href: e == null ? void 0 : e.href }, (n = t.default) == null ? void 0 : n.call(t));
}, qp = { textDecoration: "underline" }, Kp = {
  code: je("code"),
  em: je("em"),
  link: Up,
  "strike-through": je("del"),
  strong: je("strong"),
  underline: (e, { slots: t }) => {
    var n;
    return Je("span", { style: qp }, (n = t.default) == null ? void 0 : n.call(t));
  }
}, Wp = {
  number: je("ol"),
  bullet: je("ul")
}, Xp = je("li"), Eo = (e, t) => `[@portabletext/vue] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`, _c = (e) => Eo(`block type "${e}"`, "types"), Yp = (e) => Eo(`mark type "${e}"`, "marks"), Gp = (e) => Eo(`block style "${e}"`, "block"), Zp = (e) => Eo(`list style "${e}"`, "list"), Jp = (e) => Eo(`list item style "${e}"`, "listItem");
function Qp(e) {
  console.warn(e);
}
const Ol = { display: "none" }, eh = ({
  value: e,
  isInline: t
}) => {
  const n = _c(e._type);
  return t ? Je("span", { style: Ol }, n) : Je("div", { style: Ol }, n);
}, th = ({ markType: e }, { slots: t }) => {
  var n;
  return Je("span", { class: `unknown__pt__mark__${e}` }, (n = t.default) == null ? void 0 : n.call(t));
}, nh = je("p"), oh = je("ul"), rh = je("li"), ah = () => Je("br"), ih = {
  normal: je("p"),
  blockquote: je("blockquote"),
  h1: je("h1"),
  h2: je("h2"),
  h3: je("h3"),
  h4: je("h4"),
  h5: je("h5"),
  h6: je("h6")
}, Hl = {
  types: {},
  block: ih,
  marks: Kp,
  list: Wp,
  listItem: Xp,
  hardBreak: ah,
  unknownType: eh,
  unknownMark: th,
  unknownList: oh,
  unknownListItem: rh,
  unknownBlockStyle: nh
}, lh = (e, t) => {
  function n(f) {
    const { node: h, index: v, isInline: S } = f, T = h._key || `node-${v}`;
    return yc(h) ? a(h, v, T) : vc(h) ? r(h, v, T) : bc(h) ? i(h, v, T) : o(h) ? s(h, v, T, S) : mc(h) ? l(h, v, T, S) : wc(h) ? u(h, T) : d(h, v, T, S);
  }
  function o(f) {
    return f._type in e.types;
  }
  function r(f, h, v) {
    const S = Bl({ node: f, index: h, isInline: !1, renderNode: n }), T = e.listItem, V = (typeof T == "function" ? T : T[f.listItem]) || e.unknownListItem;
    if (V === e.unknownListItem) {
      const U = f.listItem || "bullet";
      t(Jp(U), {
        type: U,
        nodeType: "listItemStyle"
      });
    }
    let _ = S.children;
    if (f.style && f.style !== "normal") {
      const { listItem: U, ...te } = f;
      _ = n({
        node: te,
        index: h,
        isInline: !1,
        renderNode: n
      });
    }
    return Je(
      V,
      {
        key: v,
        value: f,
        index: h,
        isInline: !1,
        renderNode: n
      },
      () => _
    );
  }
  function a(f, h, v) {
    const S = f.children.map(
      (_, U) => n({
        node: _._key ? _ : { ..._, _key: `li-${h}-${U}` },
        index: U,
        isInline: !1,
        renderNode: n
      })
    ), T = e.list, V = (typeof T == "function" ? T : T[f.listItem]) || e.unknownList;
    if (V === e.unknownList) {
      const _ = f.listItem || "bullet";
      t(Zp(_), {
        nodeType: "listStyle",
        type: _
      });
    }
    return Je(
      V,
      {
        key: v,
        value: f,
        index: h,
        isInline: !1,
        renderNode: n
      },
      () => S
    );
  }
  function i(f, h, v) {
    const { markDef: S, markType: T, markKey: V } = f, _ = e.marks[T] || e.unknownMark, U = f.children.map(
      (te, w) => n({ node: te, index: w, isInline: !0, renderNode: n })
    );
    return _ === e.unknownMark && t(Yp(T), {
      nodeType: "mark",
      type: T
    }), Je(
      _,
      {
        key: v,
        text: xc(f),
        value: S,
        markType: T,
        markKey: V,
        renderNode: n
      },
      () => U
    );
  }
  function l(f, h, v, S) {
    const { _key: T, children: V, ..._ } = Bl({
      node: f,
      index: h,
      isInline: S,
      renderNode: n
    }), U = _.node.style || "normal", te = (typeof e.block == "function" ? e.block : e.block[U]) || e.unknownBlockStyle;
    return te === e.unknownBlockStyle && t(Gp(U), {
      nodeType: "blockStyle",
      type: U
    }), Je(te, { key: v, ..._, value: _.node, renderNode: n }, () => V);
  }
  function u(f, h) {
    if (f.text === `
`) {
      const v = e.hardBreak;
      return v ? Je(v, { key: h }) : `
`;
    }
    return f.text;
  }
  function d(f, h, v, S) {
    const T = {
      value: f,
      isInline: S,
      index: h,
      renderNode: n
    };
    t(_c(f._type), {
      nodeType: "block",
      type: f._type
    });
    const V = e.unknownType;
    return Je(V, { key: v, ...T });
  }
  function s(f, h, v, S) {
    const T = {
      value: f,
      isInline: S,
      index: h,
      renderNode: n
    }, V = e.types[f._type];
    return V ? Je(V, { key: v, ...T }) : void 0;
  }
  return n;
};
function Bl(e) {
  const { node: t, index: n, isInline: o, renderNode: r } = e, a = Vp(t).map(
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
const dr = /* @__PURE__ */ $s({
  __name: "vue-portable-text",
  props: {
    value: {},
    components: {},
    onMissingComponent: { type: [Function, Boolean], default: () => Qp },
    listNestingMode: {}
  },
  setup(e) {
    function t() {
    }
    const n = e, o = () => {
      const r = n.onMissingComponent || t, a = Array.isArray(n.value) ? n.value : [n.value], i = Np(a, n.listNestingMode || Dp), l = n.components ? jp(Hl, n.components) : Hl, u = lh(l, r);
      return i.map(
        (d, s) => u({ node: d, index: s, isInline: !1, renderNode: u })
      );
    };
    return (r, a) => (k(), We(o));
  }
}), sh = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "tel:"]), kc = "https://portable-text.invalid/", Cc = () => typeof window > "u" ? void 0 : window.location, Sc = (e, t = Cc()) => {
  if (typeof e != "string")
    return;
  const n = e.trim();
  if (n)
    try {
      const o = new URL(n, (t == null ? void 0 : t.href) || kc);
      return sh.has(o.protocol) ? n : void 0;
    } catch {
      return;
    }
}, ch = (e, t = Cc()) => {
  const n = Sc(e, t);
  if (!n)
    return !1;
  try {
    const o = new URL(n, (t == null ? void 0 : t.href) || kc);
    return o.protocol !== "http:" && o.protocol !== "https:" ? !1 : t ? o.origin !== t.origin : /^(?:https?:)?\/\//i.test(n);
  } catch {
    return !1;
  }
}, Tt = {
  __name: "ExpandedPortableText",
  props: {
    value: {
      type: [Array, Object],
      default: () => []
    }
  },
  setup(e) {
    const t = ({ value: o }, { slots: r }) => {
      var l, u;
      const a = Sc((o == null ? void 0 : o.href) || (o == null ? void 0 : o.link));
      if (!a)
        return (l = r.default) == null ? void 0 : l.call(r);
      const i = ch(a);
      return Je(
        "a",
        {
          href: a,
          target: i ? "_blank" : void 0,
          rel: i ? "noopener noreferrer" : void 0
        },
        (u = r.default) == null ? void 0 : u.call(r)
      );
    }, n = {
      marks: {
        external: t,
        link: t
      }
    };
    return (o, r) => (k(), We(xt(dr), {
      value: e.value,
      components: n
    }, null, 8, ["value"]));
  }
}, uh = {}, dh = {
  width: "8",
  height: "9",
  viewBox: "0 0 8 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function fh(e, t) {
  return k(), E("svg", dh, t[0] || (t[0] = [
    C("path", {
      d: "M1.94627 0.529297L0.807578 1.73766H5.41928L0.28125 7.19009L1.08593 8.044L6.22395 2.59158V7.48547L7.36265 6.2771V0.529297H1.94627Z",
      fill: "var(--white)"
    }, null, -1)
  ]));
}
const ph = /* @__PURE__ */ To(uh, [["render", fh]]), hh = { class: "border-stroke-light flex flex-nowrap justify-between border-t pt-[10px] sm:flex-wrap lg:flex-nowrap" }, gh = { class: "text-right" }, mh = ["href", "data-ph-entry", "onClick"], Vl = {
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
    return (r, a) => (k(), E("article", {
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
      oe(Tt, { value: e.description }, null, 8, ["value"]),
      C("section", hh, [
        C("p", null, [
          C("a", {
            class: "group relative hover:opacity-60",
            target: "_blank",
            href: "https://www.journal.antikythera.org",
            "data-ph-capture": "",
            "data-ph-component": "antikythera-journal-footer-link",
            "data-ph-action": "external-link-click",
            "data-ph-link-kind": "antikythera-journal-home",
            onClick: a[0] || (a[0] = (i) => o("antikythera-journal-home", "https://www.journal.antikythera.org"))
          }, [
            a[1] || (a[1] = C("span", null, "journal.antikythera.org", -1)),
            oe(ph, { class: "absolute bottom-[.15em] -right-[.95em] h-[.7em] w-[.7em] sm:opacity-0 lg:group-hover:opacity-100" })
          ])
        ]),
        C("ul", gh, [
          (k(!0), E(we, null, It(e.externalLinks, (i) => (k(), E("li", {
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
            }, fe(i.linkTitle), 9, mh)
          ]))), 128))
        ])
      ])
    ], 2));
  }
}, vh = "cdn.sanity.io", yh = (e) => {
  if (!e)
    return e;
  try {
    const t = new URL(e);
    return t.hostname !== vh ? e : (t.searchParams.has("dl") || t.searchParams.set("dl", ""), t.toString());
  } catch {
    return e;
  }
}, Nl = {
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
    const n = e, o = t, r = X(() => n.fileType.toLowerCase() === "markdown"), a = X(() => r.value ? yh(n.url) : n.url), i = () => {
      n.url && o("download");
    };
    return (l, u) => (k(), We(So, {
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
      default: Xt(() => [
        Ue(fe(e.label), 1)
      ]),
      _: 1
    }, 8, ["variant", "href", "target", "download", "disabled", "data-ph-entry", "data-ph-file-type"]));
  }
}, bh = "cdn.sanity.io", Cn = (e, { width: t = 1200 } = {}) => {
  if (!e || typeof e != "string")
    return "";
  try {
    const n = new URL(e);
    return n.protocol !== "https:" || n.hostname !== bh || !n.pathname.startsWith("/images/") ? e : (n.searchParams.has("w") || (n.searchParams.set("w", String(Math.max(1, Math.round(t)))), n.searchParams.set("fit", "max")), n.searchParams.has("auto") || n.searchParams.set("auto", "format"), n.toString());
  } catch {
    return e;
  }
}, Yo = (e, t, n) => {
  !n || t.has(n) || (t.add(n), e.push(n));
}, Fl = (e = {}, { includeRelatedPdf: t = !0 } = {}) => {
  var a, i, l, u, d, s;
  const n = [], o = [], r = /* @__PURE__ */ new Set();
  Yo(n, r, Cn((a = e == null ? void 0 : e.pdfPreview) == null ? void 0 : a.url, { width: 720 }));
  for (const f of (e == null ? void 0 : e.annotations) || []) {
    const h = ((i = f == null ? void 0 : f.featuredImageSquare) == null ? void 0 : i.url) || ((l = f == null ? void 0 : f.featuredImage) == null ? void 0 : l.url);
    Yo(o, r, Cn(h, { width: 1e3 }));
  }
  for (const f of (e == null ? void 0 : e.relatedEntries) || []) {
    const h = ((u = f == null ? void 0 : f.featuredImageSquare) == null ? void 0 : u.url) || ((d = f == null ? void 0 : f.featuredImage) == null ? void 0 : d.url);
    Yo(o, r, Cn(h, { width: 1200 })), t && Yo(o, r, Cn((s = f == null ? void 0 : f.pdfPreview) == null ? void 0 : s.url, { width: 720 }));
  }
  return { critical: n, deferred: o };
}, wh = ["src", "alt", "loading", "fetchpriority"], xh = {
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
    },
    showMarkdown: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["download"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = X(() => {
      var w, $;
      return (($ = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : $.override) === !0;
    }), a = X(() => {
      var w, $;
      return Cn(($ = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : $.url, { width: 720 });
    }), i = X(() => {
      var w, $, ne;
      return (($ = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : $.altText) || `${((ne = n.entry) == null ? void 0 : ne.title) || "Article"} PDF preview`;
    }), l = X(() => {
      var w, $, ne, P;
      return r.value && (($ = (w = n.entry) == null ? void 0 : w.pdfPreview) != null && $.downloadUrl) ? n.entry.pdfPreview.downloadUrl : ((P = (ne = n.entry) == null ? void 0 : ne.pdf) == null ? void 0 : P.url) || "";
    }), u = X(() => {
      var w, $;
      return (($ = (w = n.entry) == null ? void 0 : w.pdf) == null ? void 0 : $.pdfFilename) || "";
    }), d = X(() => {
      var w, $;
      return (($ = (w = n.entry) == null ? void 0 : w.pdfPreview) == null ? void 0 : $.downloadLabel) || `Download ${n.downloadFileType.toUpperCase()}`;
    }), s = X(() => {
      var w, $;
      return (($ = (w = n.entry) == null ? void 0 : w.markdown) == null ? void 0 : $.url) || "";
    }), f = X(() => {
      var w, $;
      return (($ = (w = n.entry) == null ? void 0 : w.markdown) == null ? void 0 : $.markdownFilename) || "";
    }), h = X(() => {
      var w, $;
      return !!(l.value || ($ = (w = n.entry) == null ? void 0 : w.pdfPreview) != null && $.downloadLabel);
    }), v = X(() => !!s.value), S = X(
      () => !!(r.value || a.value || h.value || n.showMarkdown && v.value)
    ), T = X(() => {
      var w, $;
      return {
        fileType: n.downloadFileType,
        fileName: u.value,
        mimeType: (($ = (w = n.entry) == null ? void 0 : w.pdf) == null ? void 0 : $.pdfMimeType) || "",
        url: l.value
      };
    }), V = X(() => {
      var w, $;
      return {
        fileType: "markdown",
        fileName: f.value,
        mimeType: (($ = (w = n.entry) == null ? void 0 : w.markdown) == null ? void 0 : $.markdownMimeType) || "",
        url: s.value
      };
    }), _ = {
      backgroundImage: "radial-gradient(circle, rgba(220, 220, 220, 0.7) 0.45px, transparent 0.55px)",
      backgroundPosition: "0 0, 1px 1px",
      backgroundSize: "2px 2px",
      opacity: 0.55
    }, U = {
      background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 28%, rgba(255, 255, 255, 0.38) 55%, rgba(255, 255, 255, 0.82) 76%, #fff 96%)"
    }, te = (w) => {
      w != null && w.url && o("download", w);
    };
    return (w, $) => {
      var ne, P;
      return S.value ? (k(), E("div", {
        key: 0,
        class: ge(["flex w-full flex-col gap-[10px] text-m text-black lg:-mx-3 lg:w-[calc(100%+var(--fontSize)*1.5)]", { "h-full": e.fill }])
      }, [
        a.value || h.value ? (k(), E("aside", {
          key: 0,
          class: ge(["border-stroke-light flex w-full flex-col overflow-hidden rounded-lg border bg-white p-[10px]", { "h-full": e.fill }])
        }, [
          C("div", {
            class: ge(["relative w-full overflow-hidden rounded-[4px] bg-[#F2F2F2]", e.fill ? "min-h-0 flex-1" : "aspect-square"])
          }, [
            a.value ? (k(), E("img", {
              key: 0,
              src: a.value,
              alt: i.value,
              loading: e.imageLoading,
              fetchpriority: e.imageFetchPriority,
              decoding: "async",
              class: ge(["absolute inset-0 h-full w-full object-top", r.value ? "object-contain" : "object-cover"])
            }, null, 10, wh)) : re("", !0),
            r.value ? re("", !0) : (k(), E("div", {
              key: 1,
              class: "pointer-events-none absolute inset-0",
              style: _
            })),
            r.value ? re("", !0) : (k(), E("div", {
              key: 2,
              class: "pointer-events-none absolute inset-0",
              style: U
            }))
          ], 2),
          h.value ? (k(), E("div", xh, [
            oe(Nl, {
              class: "shrink-0",
              "entry-url": (ne = e.entry) == null ? void 0 : ne.url,
              label: d.value,
              url: l.value,
              filename: u.value,
              "file-type": "pdf",
              onDownload: $[0] || ($[0] = (j) => te(T.value))
            }, null, 8, ["entry-url", "label", "url", "filename"])
          ])) : re("", !0)
        ], 2)) : re("", !0),
        e.showMarkdown && v.value ? (k(), We(Nl, {
          key: 1,
          class: "shrink-0",
          variant: "light",
          "entry-url": (P = e.entry) == null ? void 0 : P.url,
          label: "Export Markdown",
          url: s.value,
          filename: f.value,
          "file-type": "markdown",
          onDownload: $[1] || ($[1] = (j) => te(V.value))
        }, null, 8, ["entry-url", "url", "filename"])) : re("", !0)
      ], 2)) : re("", !0);
    };
  }
}, _h = { class: "hidden w-full min-w-0 basis-full flex-col text-m text-[rgb(244_244_244)] sm:flex sm:basis-col1" }, kh = {
  key: 0,
  class: "border-stroke-light w-full border-t pb-[10px] pt-[10px] uppercase"
}, Ch = {
  __name: "AnnotationsRelated",
  props: {
    entry: Object,
    loaded: { type: Boolean, default: !1 },
    loadError: { type: Boolean, default: !1 },
    downloadFileType: { type: String, default: "pdf" }
  },
  emits: ["download"],
  setup(e) {
    const t = e, n = X(
      () => {
        var o, r, a, i, l, u, d, s, f, h;
        return !!(((r = (o = t.entry) == null ? void 0 : o.pdfPreview) == null ? void 0 : r.override) === !0 || (i = (a = t.entry) == null ? void 0 : a.pdfPreview) != null && i.url || (u = (l = t.entry) == null ? void 0 : l.pdf) != null && u.url || (s = (d = t.entry) == null ? void 0 : d.markdown) != null && s.url || (h = (f = t.entry) == null ? void 0 : f.pdfPreview) != null && h.downloadLabel);
      }
    );
    return (o, r) => (k(), E("section", _h, [
      n.value ? (k(), E("h3", kh, "PDF")) : re("", !0),
      n.value ? (k(), We(Za, {
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
}, Sh = { class: "grid w-full grid-cols-1 lg:grid-cols-9 lg:gap-x-9" }, Th = { class: "lg:-mx-3 lg:col-span-6 lg:col-start-1" }, Eh = {
  __name: "ExploreAllArticlesButton",
  setup(e) {
    return (t, n) => (k(), E("div", Sh, [
      C("div", Th, [
        oe(So, {
          variant: "light",
          size: "large",
          href: "https://journal.antikythera.org/articles",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-related-articles",
          "data-ph-action": "explore-all-articles-click"
        }, {
          default: Xt(() => n[0] || (n[0] = [
            Ue(" Explore All Articles ")
          ])),
          _: 1
        })
      ])
    ]));
  }
}, Tc = (e) => {
  if (!e) return "";
  const t = new Date(e);
  if (Number.isNaN(t.getTime())) return "";
  const n = String(t.getUTCMonth() + 1).padStart(2, "0"), o = String(t.getUTCDate()).padStart(2, "0");
  return `${n}.${o}.${t.getUTCFullYear()}`;
}, Ah = { class: "border-stroke-light relative flex h-full w-full flex-col gap-[10px] overflow-hidden rounded-lg border bg-black p-[10px] text-m text-[rgb(244_244_244)] lg:-mx-3 lg:w-[calc(100%+var(--fontSize)*1.5)]" }, Ih = ["href", "data-ph-related-entry"], $h = { class: "relative flex h-full w-full flex-col gap-[10px] lg:flex-row lg:items-stretch" }, Rh = {
  key: 0,
  class: "aspect-square w-full overflow-hidden rounded-[4px] bg-black lg:w-auto lg:flex-1"
}, Ph = ["src", "alt"], zh = { class: "flex w-full flex-col gap-[10px] lg:flex-1" }, Mh = { class: "relative z-20 pointer-events-none flex min-h-[calc(1.28em*3)] flex-col" }, Lh = { class: "uppercase" }, Oh = { key: 0 }, Hh = ["href", "data-ph-related-entry", "onClick"], Bh = { key: 1 }, Vh = { key: 1 }, Nh = { key: 2 }, Fh = ["href", "data-ph-related-entry", "onClick"], Dh = { key: 1 }, jh = {
  key: 0,
  class: "[&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:opacity-60 [&_p+p]:mt-[10px] lg:line-clamp-4 lg:min-h-[calc(1.28em*4)] xl:line-clamp-6 xl:min-h-[calc(1.28em*6)]"
}, Uh = { class: "relative z-20 mt-auto flex w-full flex-col gap-[10px]" }, qh = {
  key: 0,
  class: "flex w-full items-center justify-between gap-2"
}, Kh = { class: "min-w-0 truncate whitespace-nowrap" }, Wh = ["href", "data-ph-related-entry"], Xh = { key: 1 }, Yh = {
  key: 0,
  class: "shrink-0 text-right text-[rgb(244_244_244_/_0.5)]"
}, Gh = {
  __name: "RelatedArticleCell",
  props: {
    entry: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = X(
      () => {
        var h, v, S, T;
        return Cn(((v = (h = t.entry) == null ? void 0 : h.featuredImageSquare) == null ? void 0 : v.url) || ((T = (S = t.entry) == null ? void 0 : S.featuredImage) == null ? void 0 : T.url), { width: 1200 });
      }
    ), o = (h) => {
      if (h)
        try {
          return new URL(h, window.location.origin).hostname;
        } catch {
          return;
        }
    }, r = X(() => {
      var h, v;
      return (h = t.entry) != null && h.externalLink ? t.entry.externalLink : (v = t.entry) != null && v.url ? `https://${t.entry.url}.antikythera.org` : void 0;
    }), a = (h) => !h || h._type !== "block" ? !1 : (h.children ?? []).every((S) => !(S != null && S.text) || S.text.trim() === ""), i = (h) => {
      if (!Array.isArray(h)) return [];
      let v = 0, S = h.length;
      for (; v < S && a(h[v]); ) v++;
      for (; S > v && a(h[S - 1]); ) S--;
      return h.slice(v, S);
    }, l = X(
      () => {
        var h, v, S;
        return i(((v = (h = t.entry) == null ? void 0 : h.shortIntroduction) == null ? void 0 : v.length) > 0 ? t.entry.shortIntroduction : (S = t.entry) == null ? void 0 : S.introduction);
      }
    ), u = () => {
      var h, v, S, T, V, _, U;
      de("antikythera related entry clicked", {
        related_entry_title: ((h = t.entry) == null ? void 0 : h.title) || void 0,
        related_entry_url: ((v = t.entry) == null ? void 0 : v.url) || void 0,
        related_entry_domain: o(r.value),
        related_entry_has_external_link: !!((S = t.entry) != null && S.externalLink),
        related_entry_authors_count: ((V = (T = t.entry) == null ? void 0 : T.authors) == null ? void 0 : V.length) || 0,
        related_entry_designers_count: ((U = (_ = t.entry) == null ? void 0 : _.designers) == null ? void 0 : U.length) || 0
      });
    }, d = (h, v) => {
      var S, T;
      de("antikythera related entry author link clicked", {
        related_entry_title: ((S = t.entry) == null ? void 0 : S.title) || void 0,
        related_entry_url: ((T = t.entry) == null ? void 0 : T.url) || void 0,
        author_name: (h == null ? void 0 : h.title) || void 0,
        author_role: v,
        author_external_domain: o(h == null ? void 0 : h.externalLink)
      });
    }, s = () => {
      var h, v, S, T;
      de("antikythera related entry doi link clicked", {
        related_entry_title: ((h = t.entry) == null ? void 0 : h.title) || void 0,
        related_entry_url: ((v = t.entry) == null ? void 0 : v.url) || void 0,
        doi: ((S = t.entry) == null ? void 0 : S.doi) || void 0,
        doi_domain: o((T = t.entry) == null ? void 0 : T.doiUrl)
      });
    }, f = X(() => {
      var h;
      return Tc((h = t.entry) == null ? void 0 : h.releaseDate);
    });
    return (h, v) => {
      var S, T, V, _, U, te, w, $, ne, P, j, q;
      return k(), E("article", Ah, [
        C("a", {
          class: "absolute inset-0 z-10",
          href: r.value,
          target: "_blank",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-related-entry",
          "data-ph-action": "related-entry-click",
          "data-ph-related-entry": (S = e.entry) == null ? void 0 : S.url,
          onClick: u
        }, null, 8, Ih),
        C("div", $h, [
          e.entry.featuredImage || e.entry.featuredImageSquare ? (k(), E("figure", Rh, [
            n.value ? (k(), E("img", {
              key: 0,
              src: n.value,
              alt: ((V = (T = e.entry) == null ? void 0 : T.featuredImageSquare) == null ? void 0 : V.alt) || ((U = (_ = e.entry) == null ? void 0 : _.featuredImage) == null ? void 0 : U.alt) || ((te = e.entry) == null ? void 0 : te.title) || "",
              class: "h-full w-full object-cover",
              loading: "lazy",
              decoding: "async",
              fetchpriority: "low"
            }, null, 8, Ph)) : re("", !0)
          ])) : re("", !0),
          C("div", zh, [
            C("div", Mh, [
              C("h2", Lh, fe(e.entry.title), 1),
              C("h3", null, [
                (($ = (w = e.entry) == null ? void 0 : w.authors) == null ? void 0 : $.length) > 0 ? (k(), E("span", Oh, [
                  v[0] || (v[0] = Ue(" by ")),
                  (k(!0), E(we, null, It(e.entry.authors, (K, J) => {
                    var H;
                    return k(), E(we, {
                      key: `author-${K.title}-${J}`
                    }, [
                      K.externalLink && K.externalLink != "" ? (k(), E("a", {
                        key: 0,
                        target: "_blank",
                        class: "relative pointer-events-auto underline decoration-1 underline-offset-2 hover:opacity-60",
                        href: K.externalLink,
                        "data-ph-capture": "",
                        "data-ph-component": "antikythera-related-entry",
                        "data-ph-action": "related-author-link-click",
                        "data-ph-related-entry": (H = e.entry) == null ? void 0 : H.url,
                        "data-ph-person-role": "author",
                        onClick: Wo((Y) => d(K, "author"), ["stop"])
                      }, fe(K.title), 9, Hh)) : (k(), E("span", Bh, fe(K.title), 1)),
                      Ue(fe(e.entry.authors.length > 1 ? J == e.entry.authors.length - 2 ? " & " : J < e.entry.authors.length - 2 ? ", " : "" : ""), 1)
                    ], 64);
                  }), 128))
                ])) : (k(), E("span", Vh, v[1] || (v[1] = [
                  C("br", null, null, -1),
                  Ue(" ")
                ]))),
                ((P = (ne = e.entry) == null ? void 0 : ne.designers) == null ? void 0 : P.length) > 0 ? (k(), E("span", Nh, [
                  v[2] || (v[2] = C("br", null, null, -1)),
                  v[3] || (v[3] = Ue(" with ")),
                  (k(!0), E(we, null, It(e.entry.designers, (K, J) => {
                    var H;
                    return k(), E(we, {
                      key: `designer-${K.title}-${J}`
                    }, [
                      K.externalLink && K.externalLink != "" ? (k(), E("a", {
                        key: 0,
                        target: "_blank",
                        class: "pointer-events-auto underline decoration-1 underline-offset-2 hover:opacity-60",
                        href: K.externalLink,
                        "data-ph-capture": "",
                        "data-ph-component": "antikythera-related-entry",
                        "data-ph-action": "related-author-link-click",
                        "data-ph-related-entry": (H = e.entry) == null ? void 0 : H.url,
                        "data-ph-person-role": "designer",
                        onClick: Wo((Y) => d(K, "designer"), ["stop"])
                      }, fe(K.title), 9, Fh)) : (k(), E("span", Dh, fe(K.title), 1)),
                      Ue(fe(e.entry.designers.length > 1 ? J == e.entry.designers.length - 2 ? " & " : J < e.entry.designers.length - 2 ? ", " : "" : ""), 1)
                    ], 64);
                  }), 128))
                ])) : re("", !0)
              ])
            ]),
            l.value.length > 0 ? (k(), E("section", jh, [
              oe(Tt, { value: l.value }, null, 8, ["value"])
            ])) : re("", !0),
            C("div", Uh, [
              e.entry.doi && e.entry.doi != "" || f.value ? (k(), E("section", qh, [
                C("section", {
                  class: ge(["flex min-w-0 items-center gap-2 pr-3", { "opacity-0": !e.entry.doi || e.entry.doi == "" }])
                }, [
                  oe(ba, { class: "h-6 w-4 shrink-0 text-[rgb(244_244_244)]" }),
                  C("p", Kh, [
                    v[4] || (v[4] = Ue(" DOI ")),
                    e.entry.doiUrl ? (k(), E("a", {
                      key: 0,
                      href: e.entry.doiUrl,
                      target: "_blank",
                      class: "pointer-events-auto cursor-crosshair hover:opacity-60",
                      "data-ph-capture": "",
                      "data-ph-component": "antikythera-related-entry",
                      "data-ph-action": "related-doi-link-click",
                      "data-ph-related-entry": (j = e.entry) == null ? void 0 : j.url,
                      onClick: Wo(s, ["stop"])
                    }, fe(e.entry.doi ? e.entry.doi : " "), 9, Wh)) : (k(), E("span", Xh, fe(e.entry.doi ? e.entry.doi : " "), 1))
                  ])
                ], 2),
                f.value ? (k(), E("p", Yh, fe(f.value), 1)) : re("", !0)
              ])) : re("", !0),
              oe(So, {
                variant: "light",
                class: "relative pointer-events-auto",
                href: r.value,
                target: "_blank",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-related-entry",
                "data-ph-action": "related-entry-click",
                "data-ph-related-entry": (q = e.entry) == null ? void 0 : q.url,
                onClick: Wo(u, ["stop"])
              }, {
                default: Xt(() => v[5] || (v[5] = [
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
}, Zh = {
  key: 0,
  class: "text-m text-[rgb(244_244_244)]"
}, Jh = { class: "mobile-expanded-page-header grid w-full grid-cols-1 gap-[10px] pb-[10px] uppercase lg:grid-cols-9 lg:gap-x-9" }, Qh = { class: "border-stroke-light border-t pt-[10px] lg:col-span-6 lg:col-start-1" }, eg = ["aria-expanded", "data-ph-entry"], tg = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, ng = {
  key: 0,
  class: "border-stroke-light hidden border-t pt-[10px] lg:col-span-3 lg:col-start-7 lg:block"
}, og = {
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
    const n = e, o = t, r = X(() => !n.loaded && !n.loadError), a = X(() => {
      var d;
      return ((d = n.entry) == null ? void 0 : d.relatedEntries) || [];
    }), i = (d) => {
      var s, f, h, v;
      return !!(((s = d == null ? void 0 : d.pdfPreview) == null ? void 0 : s.override) === !0 || (f = d == null ? void 0 : d.pdfPreview) != null && f.url || (h = d == null ? void 0 : d.pdf) != null && h.url || (v = d == null ? void 0 : d.pdfPreview) != null && v.downloadLabel);
    }, l = X(() => a.value.some(i)), u = () => {
      var s, f;
      const d = !n.expanded;
      o("toggle", { open: d }), de("antikythera section toggled", {
        antikythera_entry: ((s = n.entry) == null ? void 0 : s.url) || void 0,
        entry_title: ((f = n.entry) == null ? void 0 : f.title) || void 0,
        section_name: "related-articles",
        section_open: d,
        related_entries_count: a.value.length
      });
    };
    return (d, s) => {
      var f;
      return r.value || a.value.length > 0 ? (k(), E("section", Zh, [
        C("header", Jh, [
          C("div", Qh, [
            C("h3", null, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                type: "button",
                "aria-expanded": e.expanded,
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "related-articles",
                "data-ph-entry": (f = e.entry) == null ? void 0 : f.url,
                onClick: u
              }, [
                s[0] || (s[0] = C("span", null, "Related Articles", -1)),
                C("span", tg, fe(e.expanded ? "Collapse" : "Expand"), 1)
              ], 8, eg)
            ])
          ]),
          l.value ? (k(), E("div", ng, s[1] || (s[1] = [
            C("h3", null, "Related PDFs", -1)
          ]))) : re("", !0)
        ]),
        a.value.length > 0 ? (k(), E("section", {
          key: 0,
          class: ge(["flex w-full flex-col gap-[10px]", { "hidden sm:flex": !e.expanded }])
        }, [
          (k(!0), E(we, null, It(a.value, (h) => (k(), E("article", {
            key: h._id || h.url || h.title,
            class: "grid w-full grid-cols-1 gap-[10px] lg:grid-cols-9 lg:gap-x-9"
          }, [
            oe(Gh, {
              entry: h,
              class: "lg:col-span-6 lg:col-start-1"
            }, null, 8, ["entry"]),
            l.value ? (k(), We(Za, {
              key: 0,
              entry: h,
              "show-markdown": !1,
              fill: "",
              class: "hidden h-full min-h-[220px] lg:col-span-3 lg:col-start-7 lg:flex"
            }, null, 8, ["entry"])) : re("", !0)
          ]))), 128)),
          oe(Eh)
        ], 2)) : re("", !0),
        s[2] || (s[2] = C("div", { class: "min-h-0 flex-1" }, null, -1))
      ])) : re("", !0);
    };
  }
}, rg = {}, ag = {
  width: "26",
  height: "23",
  viewBox: "0 0 26 23",
  fill: "none",
  preserveAspectRatio: "xMidYMid meet",
  xmlns: "http://www.w3.org/2000/svg"
};
function ig(e, t) {
  return k(), E("svg", ag, t[0] || (t[0] = [
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
const lg = /* @__PURE__ */ To(rg, [["render", ig]]), sg = { class: "about-section relative w-full pt-[10px] text-m text-white sm:pt-0" }, cg = { class: "about-content grid w-full grid-cols-1 lg:grid-cols-9 lg:gap-x-9" }, ug = { class: "lg:col-span-6 lg:col-start-1 lg:pb-[10px]" }, dg = { class: "flex flex-col gap-y-[10px]" }, fg = { class: "border-stroke-light -mx-3 flex flex-col rounded-lg border bg-black p-3" }, pg = { class: "about-preview pb-[10px] uppercase" }, hg = { class: "hidden shrink-0 text-[rgb(244_244_244_/_0.5)] sm:inline" }, gg = { class: "richtext relative h-full w-full grow" }, mg = { class: "border-stroke-light -mx-3 flex h-full grow flex-col rounded-lg border bg-black p-3 lg:basis-[calc(70vh-7.5rem)]" }, vg = { class: "grid w-full grid-cols-1 grid-rows-[auto_auto] gap-6 md:grid-cols-[repeat(2,minmax(auto,1fr))]" }, yg = { class: "relative opacity-40" }, bg = { class: "min-h-[1.28em]" }, wg = { class: "grid grid-cols-2 gap-[10px] pt-[10px] lg:sticky lg:top-0 lg:col-span-3 lg:col-start-7 lg:flex lg:h-fit lg:flex-col lg:self-start lg:pt-0" }, xg = { class: "w-full" }, _g = { class: "flex justify-between pr-[48px]" }, kg = {
  key: 0,
  class: "border-stroke-dark col-span-2 -mx-3 flex flex-col gap-[10px] overflow-hidden rounded-lg border bg-white p-[10px] text-black"
}, Cg = { class: "[&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:opacity-60 [&_p+p]:mt-5" }, Sg = {
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
      const d = !n.expanded;
      o("toggle", { open: d }), de("antikythera section toggled", {
        section_name: "about",
        section_open: d
      });
    }, a = () => {
      de("antikythera external link clicked", {
        link_kind: "antikythera-site",
        link_domain: "antikythera.org"
      });
    }, i = () => {
      de("antikythera external link clicked", {
        link_kind: "read-more",
        link_title: "Read More",
        link_domain: "antikythera.org"
      });
    }, l = () => {
      de("antikythera external link clicked", {
        link_kind: "substack",
        link_domain: "antikythera.substack.com"
      });
    }, u = (d, s) => {
      var f, h, v, S;
      return d.externalTitle && s === 0 ? d.externalTitle : s !== 0 && ((h = (f = d.creditLine) == null ? void 0 : f[s]) != null && h.title) ? d.creditLine[s].title : !d.externalTitle && s === 0 && ((S = (v = d.creditLine) == null ? void 0 : v[s]) == null ? void 0 : S.title) || "";
    };
    return (d, s) => {
      var f, h;
      return k(), E("section", sg, [
        C("div", cg, [
          C("section", ug, [
            C("div", dg, [
              C("article", fg, [
                C("header", pg, [
                  C("h3", null, [
                    C("button", {
                      class: "flex w-full items-center justify-between gap-[20px] text-left uppercase",
                      type: "button",
                      onClick: r
                    }, [
                      s[0] || (s[0] = C("span", null, "About", -1)),
                      C("span", hg, fe(e.expanded ? "Collapse" : "Expand"), 1)
                    ])
                  ])
                ]),
                C("div", gg, [
                  ((f = e.about.text) == null ? void 0 : f.length) > 0 ? (k(), We(Tt, {
                    key: 0,
                    value: e.about.text
                  }, null, 8, ["value"])) : re("", !0)
                ])
              ]),
              C("article", mg, [
                s[1] || (s[1] = C("h3", { class: "mb-[10px] uppercase" }, "Contributors", -1)),
                C("div", vg, [
                  (k(!0), E(we, null, It(e.about.credits, (v, S) => (k(), E("div", {
                    key: v._key || S,
                    class: "lg:last:pb-4"
                  }, [
                    (k(!0), E(we, null, It(v.creditLine, (T, V) => (k(), E("div", {
                      key: T._key || V,
                      class: "grid grid-cols-2 gap-x-6"
                    }, [
                      C("p", yg, [
                        C("span", {
                          class: ge({
                            "absolute left-0 block w-full bg-black": V === 0 && v.externalTitle
                          })
                        }, fe(u(v, V)), 3)
                      ]),
                      C("p", bg, fe(T.name || " "), 1)
                    ]))), 128))
                  ]))), 128))
                ])
              ])
            ])
          ]),
          C("aside", wg, [
            C("a", {
              href: "https://antikythera.org/",
              target: "_blank",
              rel: "noopener noreferrer",
              class: "border-stroke-dark relative col-span-2 -mx-3 overflow-y-hidden rounded-lg border bg-white p-3 pb-0 text-black",
              onClick: a
            }, [
              C("header", xg, [
                C("div", _g, [
                  oe(gc, {
                    "show-journal": !1,
                    class: "h-[23px] w-[121px] shrink-0"
                  })
                ]),
                s[2] || (s[2] = C("section", { class: "pt-[20px] pb-[10px]" }, [
                  C("p", null, "A think tank for planetary computation"),
                  C("p", null, "& the evolution of intelligence")
                ], -1))
              ])
            ]),
            ((h = e.about.asideText) == null ? void 0 : h.length) > 0 ? (k(), E("article", kg, [
              C("div", Cg, [
                oe(Tt, {
                  value: e.about.asideText
                }, null, 8, ["value"])
              ]),
              oe(So, {
                variant: "dark",
                href: "https://antikythera.org/",
                onClick: i
              }, {
                default: Xt(() => s[3] || (s[3] = [
                  Ue("Read More")
                ])),
                _: 1
              })
            ])) : re("", !0),
            C("a", {
              href: "https://antikythera.substack.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              class: "border-stroke-light col-span-2 -mx-3 flex items-center justify-between gap-[10px] overflow-hidden rounded-lg border bg-[#ff5a01] p-[10px] text-[#f4f4f4] transition-transform duration-300 ease-out hover:scale-[0.99] hover:duration-100",
              onClick: l
            }, [
              s[4] || (s[4] = C("p", { class: "uppercase" }, "Read Antikythera on Substack", -1)),
              oe(lg, { class: "h-[23px] w-auto shrink-0" })
            ])
          ])
        ])
      ]);
    };
  }
}, Tg = 220, Eg = 360, Ag = 240, Ig = 320, $g = 180, Rg = 300, jt = W(!1), ln = W(1), On = W(1), Ec = W(1), tr = W(1), nr = W(1);
let qt = 0, Kt = 0;
const Pg = () => {
  qt && (clearTimeout(qt), qt = 0), Kt && (clearTimeout(Kt), Kt = 0);
}, zg = (e, t = {}) => {
  if (!(jt.value && tr.value == e)) {
    if (!jt.value && ln.value == e && On.value == e) {
      tr.value = e;
      return;
    }
    if (Pg(), Ec.value = ln.value, tr.value = e, e == 2 && (ln.value == 1 || ln.value == 0))
      On.value = 2, jt.value = !0, qt = setTimeout(() => {
        qt = 0, ln.value = e;
      }, Tg), Kt = setTimeout(() => {
        Kt = 0, jt.value = !1, nr.value = e;
      }, Eg);
    else if (e < 2 && On.value == 2) {
      const n = t.collapseCommitMs ?? Ag, o = t.collapseEndMs ?? Math.max(n + 80, Ig);
      jt.value = !0, qt = setTimeout(() => {
        qt = 0, On.value = e, ln.value = e;
      }, n), Kt = setTimeout(() => {
        Kt = 0, jt.value = !1, nr.value = e;
      }, o);
    } else
      jt.value = !0, qt = setTimeout(() => {
        qt = 0, On.value = e, ln.value = e;
      }, $g), Kt = setTimeout(() => {
        Kt = 0, jt.value = !1, nr.value = e;
      }, Rg);
  }
};
function Ac() {
  return {
    view: ln,
    viewChange: nr,
    transitioning: jt,
    tempView: On,
    previousView: Ec,
    requestedView: tr,
    setView: zg
  };
}
const Mg = { key: 0 }, Lg = ["href", "data-ph-annotation-id", "data-ph-annotation-type"], Og = { key: 2 }, Hg = ["data-ph-annotation-id", "data-ph-annotation-type"], Bg = {
  key: 0,
  class: "mb-3"
}, Vg = ["src", "alt"], Ng = {
  key: 0,
  class: "mt-1 text-m md:mt-2"
}, Fg = ["href", "data-ph-annotation-id", "data-ph-annotation-type"], Dg = { key: 1 }, jg = { class: "richtext pb-3" }, Ug = {
  key: 2,
  class: "pb-3"
}, qg = ["src", "alt"], Kg = {
  key: 0,
  class: "text-s sm:text-m mt-1 sm:mt-2"
}, Wg = { class: "mb-3 font-bold" }, Xg = ["data-ph-annotation-id", "data-ph-annotation-type", "data-ph-annotation-index"], Yg = { class: "richtext pb-3" }, Gg = {
  key: 0,
  class: "pb-3"
}, Ic = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    const n = e, o = X(
      () => {
        var u, d, s;
        return (d = (u = n.annotation) == null ? void 0 : u.featuredImageSquare) != null && d.url ? n.annotation.featuredImageSquare : (s = n.annotation) == null ? void 0 : s.featuredImage;
      }
    ), r = X(() => {
      var u;
      return Cn((u = o.value) == null ? void 0 : u.url, { width: 1e3 });
    }), a = X(() => {
      var u;
      return ((u = o.value) == null ? void 0 : u.alt) || "";
    }), i = t, l = X(() => {
      const u = n.annotation.attribution && n.annotation.attribution != "";
      if (n.annotation.annotationVisibility == "forceHide")
        return !1;
      if (n.annotation.annotationVisibility == "forceShow")
        return u;
      if (n.annotation.annotationVisibility == "default")
        return n.articleAttributionVisibility == "forceHide" ? !1 : u;
    });
    return (u, d) => {
      var s, f, h, v, S;
      return e.variant == "floating" ? (k(), E("div", ma({ key: 0 }, u.$attrs, { class: "relative overflow-hidden rounded-lg border border-stroke-light bg-black px-3 pt-3 text-m text-white" }), [
        C("h2", {
          class: ge(["mb-3 font-bold", { "pr-8": e.dismissible }])
        }, [
          e.annotation.annotationType == "related" ? (k(), E("span", Mg, "Related")) : e.annotation.externalLink && e.annotation.externalLink != "" ? (k(), E("a", {
            key: 1,
            href: e.annotation.externalLink,
            class: "underline",
            target: "_blank",
            "data-ph-capture": "",
            "data-ph-component": "antikythera-annotation",
            "data-ph-action": "annotation-external-link-click",
            "data-ph-annotation-id": e.annotation.id,
            "data-ph-annotation-type": e.annotation.annotationType,
            onClick: d[0] || (d[0] = (T) => i("externalLinkClick"))
          }, fe(e.annotation.title), 9, Lg)) : (k(), E("span", Og, fe(e.annotation.title), 1))
        ], 2),
        e.dismissible ? (k(), E("button", {
          key: 0,
          class: "absolute top-3 right-3 z-10 text-s",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-annotation",
          "data-ph-action": "annotation-card-close",
          "data-ph-annotation-id": e.annotation.id,
          "data-ph-annotation-type": e.annotation.annotationType,
          onClick: d[1] || (d[1] = (T) => i("close"))
        }, " Close ", 8, Hg)) : re("", !0),
        C("div", null, [
          r.value ? (k(), E("figure", Bg, [
            C("img", {
              src: r.value,
              alt: a.value,
              loading: "lazy",
              decoding: "async",
              class: "max-h-[15svh] max-w-full lg:max-h-[20svh]"
            }, null, 8, Vg),
            e.annotation.featuredImage.caption && e.annotation.featuredImage.caption != "" ? (k(), E("figcaption", Ng, [
              oe(Tt, {
                value: e.annotation.featuredImage.caption
              }, null, 8, ["value"])
            ])) : re("", !0)
          ])) : re("", !0),
          e.annotation.annotationType == "related" ? (k(), E("h3", {
            key: 1,
            class: ge(["font-bold", { "pr-8": e.dismissible }])
          }, [
            e.annotation.externalLink && e.annotation.externalLink != "" ? (k(), E("a", {
              key: 0,
              href: e.annotation.externalLink,
              class: "underline",
              target: "_blank",
              "data-ph-capture": "",
              "data-ph-component": "antikythera-annotation",
              "data-ph-action": "annotation-external-link-click",
              "data-ph-annotation-id": e.annotation.id,
              "data-ph-annotation-type": e.annotation.annotationType,
              onClick: d[2] || (d[2] = (T) => i("externalLinkClick"))
            }, fe(e.annotation.title), 9, Fg)) : (k(), E("span", Dg, fe(e.annotation.title), 1))
          ], 2)) : re("", !0),
          C("div", jg, [
            oe(xt(dr), {
              value: e.annotation.content
            }, null, 8, ["value"])
          ]),
          l.value ? (k(), E("div", Ug, " — " + fe(e.annotation.attribution), 1)) : re("", !0)
        ])
      ], 16)) : (k(), E("article", ma({ key: 1 }, u.$attrs, { class: "border-stroke-light relative mb-[10px] flex min-w-full flex-wrap overflow-hidden rounded-lg border bg-black px-3 pt-3 text-m text-white last:mb-0" }), [
        r.value ? (k(), E("figure", {
          key: 0,
          class: ge([{ "w-1/2 basis-1/2 pr-3 mb-4": !e.vertical }, { "w-3/4 basis-3/4 pr-3 mb-4": e.vertical }])
        }, [
          C("img", {
            src: r.value,
            alt: a.value,
            loading: "lazy",
            decoding: "async"
          }, null, 8, qg),
          (s = e.annotation.featuredImage) != null && s.caption && e.annotation.featuredImage.caption != "" ? (k(), E("figcaption", Kg, [
            oe(Tt, {
              value: e.annotation.featuredImage.caption
            }, null, 8, ["value"])
          ])) : re("", !0)
        ], 2)) : re("", !0),
        C("section", {
          class: ge([
            { "w-1/2 basis-1/2 md:pl-3": (((f = e.annotation.featuredImage) == null ? void 0 : f.url) || ((h = e.annotation.featuredImageSquare) == null ? void 0 : h.url)) && !e.vertical },
            { "w-full basis-full": !((v = e.annotation.featuredImage) != null && v.url) && !((S = e.annotation.featuredImageSquare) != null && S.url) || e.vertical }
          ])
        }, [
          C("h2", Wg, [
            C("button", {
              class: "text-left cursor-pointer hover:opacity-60",
              "data-ph-capture": "",
              "data-ph-component": "antikythera-annotation",
              "data-ph-action": "annotation-inline-jump",
              "data-ph-annotation-id": e.annotation.id,
              "data-ph-annotation-type": e.annotation.annotationType,
              "data-ph-annotation-index": e.index,
              onClick: d[3] || (d[3] = (T) => i("titleClick", e.annotation))
            }, fe(e.annotation.title), 9, Xg)
          ]),
          C("div", Yg, [
            oe(Tt, {
              value: e.annotation.content
            }, null, 8, ["value"])
          ]),
          l.value ? (k(), E("div", Gg, " — " + fe(e.annotation.attribution), 1)) : re("", !0)
        ], 2)
      ], 16));
    };
  }
}), Zg = {
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
    const t = e, { setView: n } = Ac(), o = (l) => {
      if (l)
        try {
          return new URL(l, window.location.origin).hostname;
        } catch {
          return;
        }
    }, r = (l) => {
      var u, d;
      return {
        annotation_id: l.id,
        annotation_title: l.title || void 0,
        annotation_type: l.annotationType || void 0,
        annotation_index: t.index,
        annotation_has_external_link: !!l.externalLink,
        annotation_external_domain: o(l.externalLink),
        annotation_has_featured_image: !!((u = l.featuredImage) != null && u.url || (d = l.featuredImageSquare) != null && d.url)
      };
    }, a = (l) => {
      var u;
      if (!l)
        return null;
      if ((u = window.CSS) != null && u.escape)
        return document.querySelector(`#${window.CSS.escape(l)}`);
      try {
        return document.querySelector(`#${l}`) || document.getElementById(l);
      } catch {
        return document.getElementById(l);
      }
    }, i = (l) => {
      de("antikythera annotation inline jump clicked", r(l)), n(0), window.requestAnimationFrame(() => {
        const u = a(l.id);
        if (!u) {
          console.warn(`antikythera annotation jump skipped: #${l.id} was not found`), de("antikythera annotation element not found", r(l));
          return;
        }
        const d = u.getBoundingClientRect().top + window.scrollY - 10;
        window.scrollTo({ top: d, behavior: "smooth" });
      });
    };
    return (l, u) => (k(), We(Ic, {
      annotation: e.annotation,
      articleAttributionVisibility: e.articleAttributionVisibility,
      index: e.index,
      vertical: e.vertical,
      variant: "inline",
      onTitleClick: i
    }, null, 8, ["annotation", "articleAttributionVisibility", "index", "vertical"]));
  }
}, Jg = { class: "w-full min-w-0 basis-full text-m text-[rgb(244_244_244)] sm:basis-col2" }, Qg = { class: "flex flex-col border-t border-stroke-light" }, em = {
  key: 0,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, tm = { class: "mobile-expanded-entry-header" }, nm = ["data-ph-entry"], om = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, rm = {
  key: 0,
  class: "richtext pt-[10px]"
}, am = {
  key: 1,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, im = { class: "mobile-expanded-entry-header" }, lm = ["data-ph-entry"], sm = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, cm = {
  key: 0,
  class: "richtext pt-[10px]"
}, um = {
  key: 2,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, dm = { class: "mobile-expanded-entry-header" }, fm = ["data-ph-entry"], pm = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, hm = {
  key: 0,
  class: "pt-[10px]"
}, gm = {
  key: 3,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, mm = { class: "mobile-expanded-entry-header" }, vm = ["data-ph-entry"], ym = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, bm = {
  key: 0,
  class: "richtext pt-[10px]"
}, wm = {
  key: 4,
  class: "border-b border-stroke-light pb-[10px] pt-[10px] last:border-b-0"
}, xm = { class: "mobile-expanded-entry-header" }, _m = ["data-ph-entry"], km = { class: "shrink-0 text-[rgb(244_244_244_/_0.5)]" }, Cm = {
  key: 0,
  class: "richtext pt-[10px]"
}, Sm = {
  __name: "EntryMain",
  props: {
    entry: Object,
    loaded: { type: Boolean, default: !1 },
    loadError: { type: Boolean, default: !1 }
  },
  emits: ["section-collapse"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = W(!0), a = W(!1), i = W(!1), l = W(!1), u = W(!0), d = X(() => !n.loaded && !n.loadError), s = (w) => Array.isArray(w) && w.length > 0, f = (w) => d.value || s(w), h = X(() => {
      var w, $, ne;
      return d.value || ((w = n.entry) == null ? void 0 : w.annotationsCount) > 0 || ((ne = ($ = n.entry) == null ? void 0 : $.annotations) == null ? void 0 : ne.length) > 0;
    }), v = (w, $) => {
      var ne, P, j, q, K, J, H, Y, G, ce;
      return {
        antikythera_entry: ((ne = n.entry) == null ? void 0 : ne.url) || void 0,
        entry_title: ((P = n.entry) == null ? void 0 : P.title) || void 0,
        section_name: w,
        section_open: $,
        annotations_count: ((q = (j = n.entry) == null ? void 0 : j.annotations) == null ? void 0 : q.length) || 0,
        related_entries_count: ((J = (K = n.entry) == null ? void 0 : K.relatedEntries) == null ? void 0 : J.length) || 0,
        authors_count: ((Y = (H = n.entry) == null ? void 0 : H.authors) == null ? void 0 : Y.length) || 0,
        designers_count: ((ce = (G = n.entry) == null ? void 0 : G.designers) == null ? void 0 : ce.length) || 0
      };
    }, S = (w, $, ne) => {
      var q;
      const P = w.value, j = (q = ne == null ? void 0 : ne.currentTarget) == null ? void 0 : q.closest(".mobile-expanded-entry-header");
      w.value = !P, P && j && o("section-collapse", { header: j }), de("antikythera section toggled", v($, w.value));
    }, T = (w) => S(r, "abstract", w), V = (w) => S(a, "editorial", w), _ = (w) => S(l, "bibliography", w), U = (w) => S(i, "annotations", w), te = (w) => S(u, "credits", w);
    return (w, $) => {
      var ne, P, j, q, K, J, H, Y, G, ce, ee;
      return k(), E("main", Jg, [
        C("div", Qg, [
          f((ne = e.entry) == null ? void 0 : ne.introduction) ? (k(), E("section", em, [
            C("h3", tm, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "abstract",
                "data-ph-entry": (P = e.entry) == null ? void 0 : P.url,
                onClick: T
              }, [
                $[0] || ($[0] = C("span", null, "Abstract", -1)),
                C("span", om, fe(r.value ? "Collapse" : "Expand"), 1)
              ], 8, nm)
            ]),
            r.value ? (k(), E("section", rm, [
              oe(Tt, {
                value: e.entry.introduction
              }, null, 8, ["value"])
            ])) : re("", !0)
          ])) : re("", !0),
          f((j = e.entry) == null ? void 0 : j.editorial) ? (k(), E("section", am, [
            C("h3", im, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "editorial",
                "data-ph-entry": (q = e.entry) == null ? void 0 : q.url,
                onClick: V
              }, [
                $[1] || ($[1] = C("span", null, "Editorial", -1)),
                C("span", sm, fe(a.value ? "Collapse" : "Expand"), 1)
              ], 8, lm)
            ]),
            a.value ? (k(), E("section", cm, [
              oe(Tt, {
                value: e.entry.editorial
              }, null, 8, ["value"])
            ])) : re("", !0)
          ])) : re("", !0),
          h.value ? (k(), E("section", um, [
            C("h3", dm, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "annotations",
                "data-ph-entry": (K = e.entry) == null ? void 0 : K.url,
                onClick: U
              }, [
                $[2] || ($[2] = C("span", null, "Annotations", -1)),
                C("span", pm, fe(i.value ? "Collapse" : "Expand"), 1)
              ], 8, fm)
            ]),
            i.value ? (k(), E("section", hm, [
              ((H = (J = e.entry) == null ? void 0 : J.annotations) == null ? void 0 : H.length) > 0 ? (k(!0), E(we, { key: 0 }, It(e.entry.annotations, (he, ue) => {
                var Se;
                return k(), We(Zg, {
                  articleAttributionVisibility: ((Se = e.entry) == null ? void 0 : Se.annotationVisibility) ?? !0,
                  annotation: he,
                  index: ue
                }, null, 8, ["articleAttributionVisibility", "annotation", "index"]);
              }), 256)) : re("", !0)
            ])) : re("", !0)
          ])) : re("", !0),
          f((Y = e.entry) == null ? void 0 : Y.bibliography) ? (k(), E("section", gm, [
            C("h3", mm, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "bibliography",
                "data-ph-entry": (G = e.entry) == null ? void 0 : G.url,
                onClick: _
              }, [
                $[3] || ($[3] = C("span", null, "Bibliography", -1)),
                C("span", ym, fe(l.value ? "Collapse" : "Expand"), 1)
              ], 8, vm)
            ]),
            l.value ? (k(), E("section", bm, [
              oe(Tt, {
                value: e.entry.bibliography
              }, null, 8, ["value"])
            ])) : re("", !0)
          ])) : re("", !0),
          f((ce = e.entry) == null ? void 0 : ce.credits) ? (k(), E("section", wm, [
            C("h3", xm, [
              C("button", {
                class: "flex w-full items-center justify-between gap-[20px] text-left text-m uppercase",
                "data-ph-capture": "",
                "data-ph-component": "antikythera-section",
                "data-ph-action": "section-toggle",
                "data-ph-section": "credits",
                "data-ph-entry": (ee = e.entry) == null ? void 0 : ee.url,
                onClick: te
              }, [
                $[4] || ($[4] = C("span", null, "Credits", -1)),
                C("span", km, fe(u.value ? "Collapse" : "Expand"), 1)
              ], 8, _m)
            ]),
            u.value ? (k(), E("section", Cm, [
              oe(Tt, {
                value: e.entry.credits
              }, null, 8, ["value"])
            ])) : re("", !0)
          ])) : re("", !0)
        ])
      ]);
    };
  }
}, Tm = { class: "annotation-card-slot__content min-h-0 overflow-hidden" }, Em = { class: "pb-3" }, Am = {
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
    const n = e, o = t, r = W(null), a = W(!1), i = W(!1);
    let l = null, u = null;
    const d = (V) => {
      if (V)
        try {
          return new URL(V, window.location.origin).hostname;
        } catch {
          return;
        }
    }, s = () => {
      var V, _;
      return {
        annotation_id: n.annotation.id,
        annotation_title: n.annotation.title || void 0,
        annotation_type: n.annotation.annotationType || void 0,
        annotation_has_external_link: !!n.annotation.externalLink,
        annotation_external_domain: d(n.annotation.externalLink),
        annotation_has_featured_image: !!((V = n.annotation.featuredImage) != null && V.url || (_ = n.annotation.featuredImageSquare) != null && _.url),
        annotation_word_count: v.value
      };
    }, f = () => {
      de("antikythera annotation card closed", {
        ...s(),
        menu_view: n.view,
        is_mobile: n.isMobile
      }), o("close", n.annotation.id);
    }, h = () => {
      de("antikythera annotation external link clicked", s());
    }, v = X(() => {
      var U, te;
      const V = (U = n.annotation) != null && U.content ? (te = n.annotation) == null ? void 0 : te.content : [];
      let _ = 0;
      return V.forEach((w) => {
        if (w._type !== "block" || !w.children)
          return 0;
        _ = _ + w.children.map(($) => $.text).join("").split(" ").length;
      }), _;
    }), S = () => {
      if (!r.value || !l)
        return;
      const V = r.value.getBoundingClientRect().bottom, _ = l.getBoundingClientRect().bottom, U = V <= _ + 22;
      U && a.value ? (a.value = !1, i.value || (i.value = !0, de("antikythera annotation fully read", s()))) : U || (a.value = !0);
    }, T = () => {
      if (!r.value || !l)
        return;
      const V = r.value.getBoundingClientRect().bottom, _ = l.getBoundingClientRect().bottom;
      l.scrollHeight > l.clientHeight && V > _ + 22 ? (a.value || de("antikythera annotation content overflows", s()), a.value = !0) : a.value = !1;
    };
    return ko(async () => {
      var V;
      await mt(), l = ((V = r.value) == null ? void 0 : V.parentElement) ?? null, u = window.setTimeout(() => {
        T(), l == null || l.addEventListener("scroll", S, { passive: !0 }), window.addEventListener("resize", T);
      }, 50);
    }), ja(() => {
      u !== null && window.clearTimeout(u), l == null || l.removeEventListener("scroll", S), window.removeEventListener("resize", T);
    }), (V, _) => (k(), E("article", {
      ref_key: "AnnotationCard",
      ref: r,
      class: "annotation-card-slot pointer-events-auto grid w-full shrink-0"
    }, [
      C("div", Tm, [
        C("div", Em, [
          oe(Ic, {
            annotation: e.annotation,
            articleAttributionVisibility: e.articleAttributionVisibility,
            dismissible: e.view == 0 || e.isMobile,
            variant: "floating",
            onClose: f,
            onExternalLinkClick: h
          }, null, 8, ["annotation", "articleAttributionVisibility", "dismissible"])
        ])
      ])
    ], 512));
  }
}, Im = { class: "border-stroke-light pointer-events-auto w-sticker -translate-x-3 rounded-lg border bg-black p-3 text-m text-white" }, $m = { class: "flex w-full items-start justify-between gap-3" }, Rm = { class: "min-w-0 flex-1 leading-[1.25]" }, Pm = ["aria-checked", "aria-label"], zm = {
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
    return (a, i) => (k(), E("article", Im, [
      C("div", $m, [
        C("p", Rm, fe(e.label), 1),
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
        ], 10, Pm)
      ])
    ]));
  }
}, Mm = "cdn.sanity.io", Lm = Object.freeze([480, 720, 960, 1440, 1920]), Om = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw", Hm = (e, t) => {
  if (!t)
    return e;
  try {
    const n = /^[a-z][a-z\d+.-]*:/i.test(e) || e.startsWith("//"), o = new URL(e, "https://antikythera.invalid");
    return o.searchParams.set("anti_retry", String(t)), n ? o.toString() : `${o.pathname}${o.search}${o.hash}`;
  } catch {
    return e;
  }
}, Dl = (e, t, n) => {
  try {
    const o = new URL(e);
    return o.hostname !== Mm || !o.pathname.startsWith("/images/") ? null : (o.searchParams.set("w", String(t)), o.searchParams.set("h", String(t)), o.searchParams.set("fit", "crop"), o.searchParams.set("auto", "format"), n && o.searchParams.set("anti_retry", String(n)), o.toString());
  } catch {
    return null;
  }
}, Bm = (e, { retry: t = 0 } = {}) => {
  if (!e)
    return { src: "", srcset: void 0, sizes: void 0 };
  const n = Dl(e, 960, t);
  return n ? {
    src: n,
    srcset: Lm.map((o) => `${Dl(e, o, t)} ${o}w`).join(", "),
    sizes: Om
  } : { src: Hm(e, t), srcset: void 0, sizes: void 0 };
}, xa = " ", Vm = (e = "") => e.trim().replace(/\s+/g, xa), Nm = (e = []) => {
  const t = e.map(Vm).filter(Boolean);
  return t.length < 2 ? t[0] || "" : t.length === 2 ? `${t[0]} &${xa}${t[1]}` : `${t.slice(0, -1).join(", ")} &${xa}${t[t.length - 1]}`;
}, Fm = '.expanded-frame[data-v-47e13101]{--expanded-frame-edge-inset: 5px;--mobile-expanded-header-inline-bleed: calc((var(--fontSize) * 1.5) - var(--expanded-frame-edge-inset))}.expanded-frame-underlay[data-v-47e13101]{inset:var(--expanded-frame-edge-inset)}.expanded-frame-clip[data-v-47e13101]{clip-path:inset(var(--expanded-frame-edge-inset) round 11px)}.expanded-scrollport[data-v-47e13101]{--expanded-related-header-height: calc((var(--fontSize) * 1.28) + 21px);height:100dvh;margin-block:calc(var(--fontSize) * -.75);padding-block:calc(var(--fontSize) * .75)!important;scroll-padding-top:calc(var(--fontSize) * .75);scroll-padding-bottom:0}.expanded-before-related[data-v-47e13101]{min-height:calc(100dvh - (var(--fontSize) * .75));margin-bottom:calc(var(--expanded-related-header-height) * -1);padding-bottom:var(--expanded-related-header-height)}.expanded-related-page[data-v-47e13101]{min-height:calc(100dvh - (var(--fontSize) * .75));margin-bottom:0;padding-bottom:var(--expanded-related-header-height)}.expanded-about-page[data-v-47e13101]{min-height:calc(100dvh - (var(--fontSize) * 1.5))}@media screen and (max-width: 639px){.expanded-frame-clip[data-v-47e13101]{display:block!important;pointer-events:auto!important;overflow-x:hidden;overscroll-behavior-x:none}.expanded-scrollport.expanded-sticker-column[data-v-47e13101],.expanded-scrollport.expanded-details-column[data-v-47e13101]{height:auto;margin-block:0;padding-block:0!important;overflow:visible!important;scroll-padding-block:0}.expanded-scrollport.expanded-sticker-column[data-v-47e13101]{position:sticky!important;top:calc(.75rem - var(--mobile-sticker-sticky-offset, 0px));z-index:20;align-self:start}.mobile-journal-description[data-v-47e13101]{margin-top:.625rem!important;transition:margin-top .22s cubic-bezier(.25,.7,.25,1)}.mobile-journal-description.mobile-below-cta-exiting[data-v-47e13101]{margin-top:0!important}.mobile-expanded-exit-content[data-v-47e13101]{translate:0 0;transition-property:opacity,translate,margin!important;transition-duration:.22s!important;transition-delay:0ms!important;transition-timing-function:cubic-bezier(.25,.7,.25,1)!important}.mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-47e13101]{pointer-events:none;opacity:0!important;translate:0 -12px;margin-top:0!important;transition-delay:40ms!important}.mobile-mid-scroll-reversing .mobile-expanded-exit-content[data-v-47e13101]{transition-duration:.3s!important;transition-timing-function:cubic-bezier(.23,1,.32,1)!important}.mobile-mid-scroll-reversing .mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-47e13101]{transition-delay:48ms!important}.mobile-mid-scroll-reversing .mobile-journal-description[data-v-47e13101]{transition:margin-top .3s cubic-bezier(.23,1,.32,1)!important}.expanded-scrollport.expanded-details-column[data-v-47e13101]{margin-top:.625rem}.expanded-details-column[data-v-47e13101] .mobile-expanded-entry-header,.expanded-details-column[data-v-47e13101] .mobile-expanded-page-header{position:sticky;top:calc(var(--mobile-expanded-section-sticky-top, 48px) - 1px);z-index:30;width:calc(100% + var(--mobile-expanded-header-inline-bleed) + var(--mobile-expanded-header-inline-bleed));margin-inline:calc(0px - var(--mobile-expanded-header-inline-bleed));padding-inline:var(--mobile-expanded-header-inline-bleed);background:var(--black)}.expanded-details-column[data-v-47e13101] .mobile-expanded-entry-header{margin-block:-10px;padding-block:10px}.expanded-details-column[data-v-47e13101] .mobile-expanded-entry-header:after,.expanded-details-column[data-v-47e13101] .mobile-expanded-page-header:after{position:absolute;inset-inline:var(--mobile-expanded-header-inline-bleed);bottom:0;height:1px;content:"";pointer-events:none;background:var(--stroke-light);opacity:0;transition:opacity .16s ease}.expanded-details-column[data-v-47e13101] .mobile-expanded-entry-header[data-stuck]:after,.expanded-details-column[data-v-47e13101] .mobile-expanded-page-header[data-stuck]:after{opacity:1}.expanded-before-related[data-v-47e13101],.expanded-related-page[data-v-47e13101]{min-height:0;margin-bottom:0;padding-bottom:0}.expanded-about-page[data-v-47e13101]{min-height:0}}@media (prefers-reduced-motion: reduce) and (max-width: 639px){.mobile-expanded-exit-content[data-v-47e13101]{transition-duration:1ms!important}.mobile-expanded-exit-content.mobile-expanded-exit-content-closing[data-v-47e13101]{translate:0 0}.expanded-details-column[data-v-47e13101] .mobile-expanded-entry-header:after,.expanded-details-column[data-v-47e13101] .mobile-expanded-page-header:after{transition-duration:1ms}}.annotation-card-slot[data-v-47e13101]{position:relative;grid-template-rows:auto;overflow:hidden;border-radius:8px}.annotation-card-slot.annotation-list-enter-active[data-v-47e13101]{grid-template-rows:1fr;transition:grid-template-rows .22s cubic-bezier(.32,.72,0,1) .14s,transform .22s cubic-bezier(.32,.72,0,1) .14s,opacity .22s cubic-bezier(.32,.72,0,1) .14s}.annotation-card-slot.annotation-list-leave-active[data-v-47e13101]{grid-template-rows:1fr;pointer-events:none;transition:grid-template-rows .22s cubic-bezier(.32,.72,0,1),transform .22s cubic-bezier(.32,.72,0,1),opacity .22s cubic-bezier(.32,.72,0,1)}.annotation-card-slot.annotation-list-enter-from[data-v-47e13101],.annotation-card-slot.annotation-list-leave-to[data-v-47e13101]{grid-template-rows:0fr;opacity:0;transform:translateY(-6px)}@media (prefers-reduced-motion: reduce){.annotation-card-slot.annotation-list-enter-active[data-v-47e13101],.annotation-card-slot.annotation-list-leave-active[data-v-47e13101]{transition-duration:0ms;transition-delay:0ms}.annotation-card-slot.annotation-list-enter-from[data-v-47e13101],.annotation-card-slot.annotation-list-leave-to[data-v-47e13101]{transform:none}}', Dm = ".anti-motion-fade{transition-property:opacity;transition-timing-function:cubic-bezier(.23,1,.32,1)}.anti-motion-slide{transition-property:opacity,transform;transition-timing-function:cubic-bezier(.23,1,.32,1)}.anti-motion-fold{transition-property:opacity,transform,max-height,margin;transition-timing-function:cubic-bezier(.25,.7,.25,1)}.expanded-sticker-card.minimal-shell-expanding{position:relative}.expanded-sticker-card.minimal-shell-expanding>.sticker-primary-cta{position:absolute;right:10px;bottom:10px;left:10px;z-index:1}.anti-mobile-summary-fold{display:grid;grid-template-rows:1fr;opacity:1;transition-property:grid-template-rows,opacity;transition-timing-function:cubic-bezier(.25,.7,.25,1)}.anti-mobile-summary-fold-collapsed{grid-template-rows:0fr;pointer-events:none;opacity:0}.anti-mobile-summary-reveal{transition-property:grid-template-rows;opacity:1}@media (prefers-reduced-motion: reduce){.expanded-sticker-card .anti-motion-fold,.expanded-sticker-card .anti-mobile-summary-fold{transition-duration:0ms!important;transition-delay:0ms!important}}", jm = { class: "flex w-full flex-col" }, Um = { class: "relative flex w-full pt-[1px] pl-[1px] pr-12" }, qm = {
  href: "https://journal.antikythera.org",
  target: "_blank",
  class: "block min-w-0"
}, Km = ["src", "srcset", "sizes", "alt"], Wm = { class: "min-h-0 overflow-hidden" }, Xm = { class: "flex w-full flex-col pt-[20px] leading-[1.25] text-[rgb(244_244_244)]" }, Ym = { key: 0 }, Gm = { key: 1 }, Zm = ["href", "data-ph-entry", "onClick"], Jm = { key: 1 }, Qm = { key: 2 }, e0 = ["href", "data-ph-entry", "onClick"], t0 = { key: 1 }, n0 = { class: "flex min-w-0 items-center gap-2 pr-3" }, o0 = ["href", "data-ph-entry"], r0 = { key: 1 }, a0 = { class: "shrink-0 text-right text-[rgb(244_244_244_/_0.5)]" }, i0 = {
  key: 1,
  class: "w-full h-2 pointer-events-none"
}, l0 = { class: "grid min-h-full w-full grid-cols-1 lg:grid-cols-9" }, s0 = { class: "relative grid w-full grid-cols-1 gap-[10px] lg:grid-cols-9 lg:gap-x-9" }, c0 = { class: "lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[calc((100%-var(--fontSize)*18)/3+var(--fontSize)*4.5)]" }, u0 = {
  key: 0,
  class: "col-start-1 col-end-13 sm:col-end-7 lg:col-end-4 mt-3 sm:mt-0 pointer-events-none"
}, jl = 320, Ul = 110, aa = 340, ql = 280, Kl = 240, Wl = 48, d0 = 240, f0 = 2, p0 = 1200, h0 = {
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
    const n = e, o = t, r = !1, a = null, { getSettings: i, getEntry: l, getEntryMeta: u, getAnnotations: d } = Sa({ entry: n.entry, environment: n.environment, apiUrl: n.apiUrl }), { view: s, viewChange: f, previousView: h, requestedView: v, tempView: S, transitioning: T, setView: V } = Ac(), _ = W(null), U = W(null), te = W(null), w = W(null), $ = W(null), ne = W(null), P = W(null), j = W(null), q = W(null), K = W(null), J = W(""), H = W({}), Y = W(!1), G = W(!1), ce = W(!1), ee = W(!1), he = W(!1), ue = W(!1), Se = W(!1), Xe = W(!1), He = W(!1), $e = W(!1), Me = W(!0), st = W(!1), Rt = W(0), ft = W(!1), bt = W(!1), Ye = W(!1), yn = W(!1), pt = W(!1), Gt = W(0), Zt = W(!1);
    let p = null, m = null, x = null, z = 0, A = null, I = 0, D = 0, B = !1, N = null, M = null, Q = 0, F = null, Z = 0, ae = 0, le = null, ye = 0, ve = 0, Re = "", Le = 0, Ge = 0, Ve = Promise.resolve(), Jt = "";
    const Qt = /* @__PURE__ */ new Set(), L = W({}), ct = X(() => {
      var c, g, y, b;
      return (g = (c = L.value) == null ? void 0 : c.featuredImageSquare) != null && g.url && ((b = (y = L.value) == null ? void 0 : y.featuredImage) == null ? void 0 : b.url) || "";
    }), Kn = X(
      () => {
        var c, g, y, b;
        return ((g = (c = L.value) == null ? void 0 : c.featuredImageSquare) == null ? void 0 : g.url) || ((b = (y = L.value) == null ? void 0 : y.featuredImage) == null ? void 0 : b.url) || "";
      }
    ), Ao = X(
      () => Zt.value ? ct.value : Kn.value
    ), Io = X(() => Bm(Ao.value, { retry: Gt.value })), Wn = X(() => Io.value.src), Rc = X(() => Io.value.srcset), Pc = X(() => Io.value.sizes), zc = X(
      () => {
        var c, g, y, b, R, O, se;
        return (Zt.value ? (g = (c = L.value) == null ? void 0 : c.featuredImage) == null ? void 0 : g.alt : (b = (y = L.value) == null ? void 0 : y.featuredImageSquare) == null ? void 0 : b.alt) || ((O = (R = L.value) == null ? void 0 : R.featuredImage) == null ? void 0 : O.alt) || ((se = L.value) == null ? void 0 : se.title) || "";
      }
    );
    W(!1);
    const Mc = W(!1), $o = W(""), Ro = W([]), Ja = W({ text: [], asideText: [], credits: [] }), ht = W([]), kt = W(!1), Ze = W([]), en = W(!1), Tr = W(!1), Xn = W(""), Er = W(""), Yn = W(""), Po = W(!1), Qa = W(!1);
    let zo = null, Ar = null;
    const Gn = {
      0: "minimal",
      1: "summary",
      2: "expanded"
    }, Ce = X(() => s.value == 2 || S.value == 2), ut = X(
      () => T.value && v.value == 2 && S.value == 2 && s.value != 2
    ), ot = X(
      () => T.value && v.value < 2 && S.value == 2
    ), Lc = X(() => Ye.value), Oc = X(
      () => Y.value && ft.value && (!Ce.value && v.value == 0 || bt.value && !Ye.value)
    ), ei = X(() => s.value == 0 || Y.value && s.value < 2 ? ht.value.filter((c) => kt.value == c.id) : s.value == 1 && !Y.value ? ht.value.filter((c) => Ze.value.includes(c.id)) : []), Pt = W(!1), zt = W(!1), tn = W(!1), Ct = X(() => ot.value && !Pt.value), Ir = X(() => bt.value ? !yn.value : Pt.value || tn.value ? !1 : ut.value || ot.value), Hc = aa + ql;
    let $n = 0, Zn = 0, Jn = null, Qn = 0, eo = null;
    const $r = Gc(0.32, 0.72, 0, 1), Rr = () => {
      ye && (window.clearTimeout(ye), ye = 0);
    }, ti = async (c, g, y) => {
      var R;
      try {
        await ((R = c.decode) == null ? void 0 : R.call(c));
      } catch {
      }
      if (y !== ve || g !== Wn.value)
        return;
      Re = c.currentSrc || g;
      const b = q.value;
      (c === b || b != null && b.currentSrc && b.currentSrc === Re) && (Rr(), pt.value = !0), le === c && (le = null), mt(nn);
    }, Bc = ({ src: c, srcset: g, sizes: y }) => {
      pt.value = !1, Re = "", le && (le.onload = null, le.onerror = null), le = null;
      const b = ++ve;
      if (!c || typeof window > "u" || !window.Image)
        return;
      const R = new window.Image();
      R.decoding = "async", R.fetchPriority = "high", y && (R.sizes = y), g && (R.srcset = g), R.onload = () => ti(R, c, b), R.onerror = () => ni(b), R.src = c, le = R;
    }, ni = (c) => {
      if (!(c !== ve || ye)) {
        if (Gt.value >= f0) {
          !Zt.value && ct.value && ct.value !== Ao.value && (Zt.value = !0);
          return;
        }
        pt.value = !1, Re = "", le = null, ye = window.setTimeout(() => {
          ye = 0, Gt.value += 1;
        }, 350 * (Gt.value + 1));
      }
    };
    Ot(Kn, () => {
      Zt.value = !1;
    }), Ot(
      Ao,
      () => {
        Rr(), Gt.value = 0, pt.value = !1, Re = "";
      },
      { immediate: !0 }
    ), Ot(Io, Bc, { immediate: !0 });
    const oi = () => {
      var g;
      const c = (g = q.value) == null ? void 0 : g.currentSrc;
      c && (pt.value = c === Re);
    }, Vc = (c) => {
      var b;
      const g = c.currentTarget, y = (b = g == null ? void 0 : g.getAttribute) == null ? void 0 : b.call(g, "src");
      !g || y !== Wn.value || ti(g, y, ve);
    }, Nc = (c) => {
      var y, b;
      ((b = (y = c.currentTarget) == null ? void 0 : y.getAttribute) == null ? void 0 : b.call(y, "src")) === Wn.value && (pt.value = !1, Re = "", ni(ve));
    }, ri = (c, g = "low") => new Promise((y) => {
      if (!c || typeof window > "u" || !window.Image) {
        y(!1);
        return;
      }
      const b = new window.Image();
      Qt.add(b), b.decoding = "async", b.fetchPriority = g, b.onload = async () => {
        var R;
        try {
          await ((R = b.decode) == null ? void 0 : R.call(b));
        } catch {
        }
        Qt.delete(b), y(!0);
      }, b.onerror = () => {
        Qt.delete(b), y(!1);
      }, b.src = c;
    }), Fc = (c = L.value) => {
      const { critical: g } = Fl(c), y = g.join("|");
      return y === Jt || (Jt = y, Ve = Promise.all(g.map((b) => ri(b, "high")))), Ve;
    }, Dc = async () => {
      let c = 0;
      await Promise.race([
        Ve,
        new Promise((g) => {
          c = window.setTimeout(g, p0);
        })
      ]), c && window.clearTimeout(c);
    }, Pr = async (c = L.value) => {
      const g = ++Ge;
      Xe.value = !1, Fc(c), await Dc(), g === Ge && (Ce.value || v.value == 2) && (Xe.value = !0);
    }, jc = async (c = L.value) => {
      const g = ++Le, { deferred: y } = Fl(c, { includeRelatedPdf: window.innerWidth >= 1024 });
      for (const b of y) {
        if (g !== Le || !Ce.value)
          return;
        await ri(b, "low");
      }
    }, Uc = () => {
      if (document.head.querySelector("link[data-antikythera-image-preconnect]"))
        return;
      const c = document.createElement("link");
      c.rel = "preconnect", c.href = "https://cdn.sanity.io", c.crossOrigin = "anonymous", c.dataset.antikytheraImagePreconnect = "", document.head.appendChild(c);
    }, qe = () => window.innerWidth < 640, rt = () => qe() ? U.value : te.value, ai = () => {
      if (!qe())
        return !1;
      const c = rt();
      return !!(c && c.scrollTop > 2);
    }, ii = (c) => Math.round(Math.min(400, Math.max(jl, 240 + c * 0.11))), li = () => {
      var b;
      if (!ai())
        return;
      const c = ((b = rt()) == null ? void 0 : b.scrollTop) || 0, g = ii(c), y = st.value ? g + Ul + Hc : Math.max(g, aa) + ql;
      return {
        collapseCommitMs: y,
        collapseEndMs: y + 100
      };
    }, zr = () => {
      $n && (window.cancelAnimationFrame($n), $n = 0);
    }, si = () => {
      if (Zn && (window.clearTimeout(Zn), Zn = 0), Jn) {
        const c = Jn;
        Jn = null, c();
      }
    }, ci = () => {
      if (Qn && (window.clearTimeout(Qn), Qn = 0), eo) {
        const c = eo;
        eo = null, c();
      }
    }, qc = () => {
      var c, g;
      return (g = (c = window.matchMedia) == null ? void 0 : c.call(window, "(prefers-reduced-motion: reduce)")) != null && g.matches ? Promise.resolve() : new Promise((y) => {
        Jn = y, Zn = window.setTimeout(() => {
          Zn = 0, Jn = null, y();
        }, Ul);
      });
    }, ui = () => {
      var c, g;
      return (g = (c = window.matchMedia) == null ? void 0 : c.call(window, "(prefers-reduced-motion: reduce)")) != null && g.matches ? Promise.resolve() : new Promise((y) => {
        eo = y, Qn = window.setTimeout(() => {
          Qn = 0, eo = null, y();
        }, aa);
      });
    }, di = (c = jl, g = $r) => {
      var O, se;
      zr();
      const y = rt();
      if (!y || !qe())
        return Promise.resolve();
      const b = y.scrollTop;
      if (b <= 2 || (se = (O = window.matchMedia) == null ? void 0 : O.call(window, "(prefers-reduced-motion: reduce)")) != null && se.matches)
        return y.scrollTop = 0, Promise.resolve();
      const R = performance.now();
      return new Promise((me) => {
        const Pe = (Ne) => {
          const _e = Math.min(1, (Ne - R) / c);
          if (y.scrollTop = b * (1 - g(_e)), _e < 1) {
            $n = window.requestAnimationFrame(Pe);
            return;
          }
          $n = 0, y.scrollTop = 0, me();
        };
        $n = window.requestAnimationFrame(Pe);
      });
    }, Kc = () => {
      const c = j.value, g = c == null ? void 0 : c.parentElement;
      if (!c || !g)
        return 0;
      const y = c.cloneNode(!0), b = c.getBoundingClientRect().width;
      y.classList.remove("minimal-shell-expanding"), Object.assign(y.style, {
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
      const R = y.querySelector(".anti-mobile-summary-fold");
      R && (R.style.gridTemplateRows = "1fr", R.style.opacity = "1", R.style.transition = "none");
      const O = y.querySelector("figure");
      O && (O.style.marginTop = "20px", O.style.maxHeight = "none", O.style.opacity = "1", O.style.transition = "none", O.querySelectorAll("img").forEach((me) => {
        me.style.opacity = "1", me.style.transition = "none";
      })), g.appendChild(y);
      const se = y.getBoundingClientRect().height;
      return y.remove(), se;
    }, Vt = () => {
      var c;
      Z && (window.clearTimeout(Z), Z = 0), ae && (window.clearTimeout(ae), ae = 0), F && (F.cancel(), F = null), (c = j.value) == null || c.style.removeProperty("height"), bt.value = !1, Ye.value = !1, yn.value = !1, Ce.value && nn();
    }, Wc = () => {
      var c;
      Ye.value && (F && (F.cancel(), F = null), (c = j.value) == null || c.style.removeProperty("height"), bt.value = !1, Ye.value = !1, yn.value = !1, ae = 0, nn());
    }, Xc = async () => {
      var b, R;
      const c = j.value;
      if (!c || !bt.value || !Ce.value || v.value != 2 || !Y.value) {
        Vt();
        return;
      }
      if ((R = (b = window.matchMedia) == null ? void 0 : b.call(window, "(prefers-reduced-motion: reduce)")) != null && R.matches) {
        Vt();
        return;
      }
      const g = c.getBoundingClientRect().height, y = Kc();
      if (y <= g) {
        Vt();
        return;
      }
      if (c.style.height = `${g}px`, Ye.value = !0, await mt(), !Ye.value || v.value != 2) {
        Vt();
        return;
      }
      F = c.animate(
        [{ height: `${g}px` }, { height: `${y}px` }],
        {
          duration: Kl,
          easing: "cubic-bezier(0.25, 0.7, 0.25, 1)",
          fill: "forwards"
        }
      ), F.onfinish = () => {
        Ye.value && (c.style.height = `${y}px`, F == null || F.cancel(), F = null);
      }, Z = window.setTimeout(() => {
        Z = 0, yn.value = !0;
      }, Wl), ae = window.setTimeout(
        Wc,
        Math.max(Kl, Wl + d0)
      );
    }, to = () => {
      zr(), si(), ci(), Pt.value = !1, zt.value = !1, tn.value = !1;
    }, Yc = async () => {
      var b;
      to();
      const c = ((b = rt()) == null ? void 0 : b.scrollTop) || 0, g = ii(c);
      if (st.value) {
        if (Pt.value = !0, await di(g, $r), !ot.value) {
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
          di(g, $r),
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
    function Gc(c, g, y, b) {
      const R = 3 * c, O = 3 * (y - c) - R, se = 1 - R - O, me = 3 * g, Pe = 3 * (b - g) - me, Ne = 1 - me - Pe, _e = (Fe) => ((se * Fe + O) * Fe + R) * Fe, Be = (Fe) => ((Ne * Fe + Pe) * Fe + me) * Fe, Oe = (Fe) => (3 * se * Fe + 2 * O) * Fe + R, xu = (Fe) => {
        let St = Fe;
        for (let ro = 0; ro < 8; ro++) {
          const Hi = _e(St) - Fe;
          if (Math.abs(Hi) < 1e-6)
            return St;
          const Bi = Oe(St);
          if (Math.abs(Bi) < 1e-6)
            break;
          St -= Hi / Bi;
        }
        let Vr = 0, Nr = 1;
        for (St = Fe; Vr < Nr; ) {
          const ro = _e(St);
          if (Math.abs(ro - Fe) < 1e-6)
            return St;
          Fe > ro ? Vr = St : Nr = St, St = (Nr + Vr) / 2;
        }
        return St;
      };
      return (Fe) => Be(xu(Fe));
    }
    const no = (c) => {
      if (c)
        try {
          return new URL(c, window.location.origin).hostname;
        } catch {
          return;
        }
    }, Zc = X(() => {
      var y, b;
      const c = n.apiBackgroundColor || ((y = L.value) == null ? void 0 : y.apiBackgroundColor), g = n.apiForegroundColor || ((b = L.value) == null ? void 0 : b.apiForegroundColor);
      return hc({
        theme: n.theme,
        backgroundColor: c,
        foregroundColor: g
      });
    }), Mr = X(() => {
      var c;
      return Tc((c = L.value) == null ? void 0 : c.releaseDate);
    }), Mo = X(() => {
      const c = [], g = /* @__PURE__ */ new Set();
      return ht.value.forEach((y) => {
        var O;
        const b = (O = y == null ? void 0 : y.attribution) == null ? void 0 : O.trim(), R = b == null ? void 0 : b.toLocaleLowerCase();
        !b || g.has(R) || (g.add(R), c.push(b));
      }), c;
    }), Lr = X(() => Mo.value.length === 0 ? "" : `Annotations by ${Nm(Mo.value)}`), Lo = X(() => {
      var c;
      return G.value ? !1 : ((c = L.value) == null ? void 0 : c.annotationsCount) > 0 && !Po.value || !!Lr.value;
    }), fi = X(() => {
      var c, g, y, b;
      if (!L.value) return "";
      if (L.value.fileType) return L.value.fileType;
      if ((g = (c = L.value) == null ? void 0 : c.pdf) != null && g.pdfMimeType) {
        const R = L.value.pdf.pdfMimeType.split("/");
        if (R[1]) return R[1];
      }
      if ((b = (y = L.value) == null ? void 0 : y.pdf) != null && b.pdfFilename) {
        const R = L.value.pdf.pdfFilename.split(".");
        if (R.length > 1) return R.pop();
      }
      return "file";
    }), pi = X(
      () => {
        var c, g, y, b, R, O, se, me, Pe, Ne;
        return !!(((g = (c = L.value) == null ? void 0 : c.pdfPreview) == null ? void 0 : g.override) === !0 || (b = (y = L.value) == null ? void 0 : y.pdfPreview) != null && b.url || (O = (R = L.value) == null ? void 0 : R.pdf) != null && O.url || (me = (se = L.value) == null ? void 0 : se.markdown) != null && me.url || (Ne = (Pe = L.value) == null ? void 0 : Pe.pdfPreview) != null && Ne.downloadLabel);
      }
    ), hi = X(() => !0), Jc = X(() => v.value == 2 ? "Return to Article" : "More Info"), Qc = () => {
      D = 0, B = !1, Ce.value && (A !== qe() ? Br() : nn());
    }, eu = () => {
      B = !0, D && window.clearTimeout(D), D = window.setTimeout(Qc, 120);
    }, gi = () => {
      D && (window.clearTimeout(D), D = 0), B = !1;
    }, tu = () => {
      var b, R, O;
      I = 0;
      const c = window.innerWidth, g = N !== null && c !== N;
      if (N = c, oi(), g && Ye.value && Vt(), Y.value = c < 769, G.value = c < 1024, !_.value)
        return;
      if (!Ce.value) {
        const { height: se } = _.value.getBoundingClientRect(), me = ((R = (b = K.value) == null ? void 0 : b.$el) == null ? void 0 : R.getBoundingClientRect().height) || 0, Pe = me > 0 ? ` - ${me}px - (var(--fontSize) * 0.75)` : "", Ne = `calc(100dvh - ${se}px - (var(--fontSize) * 1.5)${Pe})`;
        ((O = J.value) == null ? void 0 : O["--sansSticker"]) !== Ne && (J.value = { "--sansSticker": Ne });
        return;
      }
      const y = qe();
      A !== y ? Br() : B || nn();
    }, Rn = (c) => {
      (c == null ? void 0 : c.type) === "resize" && Ce.value && eu(), !I && (I = window.requestAnimationFrame(tu));
    }, nu = (c) => {
      const g = c == null ? void 0 : c.target;
      if (!(g instanceof Element) || g === document.documentElement || g === document.body)
        return window.scrollY;
      const { top: y, bottom: b, height: R } = g.getBoundingClientRect(), O = R >= window.innerHeight * 0.8 && y <= window.innerHeight * 0.1 && b >= window.innerHeight * 0.9, se = g.scrollHeight > g.clientHeight + 2;
      return O && se ? g.scrollTop : null;
    }, Pn = (c) => {
      if (window.innerWidth > 768 || Ce.value)
        return;
      const g = nu(c);
      if (g !== null) {
        if (ft.value) {
          g <= 2 && (ft.value = !1, (s.value == 0 || v.value == 0) && V(1));
          return;
        }
        g > 30 && (ft.value = !0, de("antikythera mobile menu minimized", {
          antikythera_entry: n.entry || void 0,
          scroll_y: g,
          menu_view: s.value
        }), s.value != 0 && V(0));
      }
    };
    Ot(f, (c) => {
      o("viewChange", c), Rn();
    }), Ot(
      ut,
      (c) => {
        if (c) {
          Vt(), bt.value = Y.value && ft.value;
          return;
        }
        bt.value && Ce.value && v.value == 2 && mt(Xc);
      },
      { flush: "sync" }
    ), Ot(Ce, (c) => {
      c ? (to(), He.value = qe(), Pr(), Nt().then(() => {
        Ce.value && jc();
      }), mt(() => {
        var g;
        oi(), Q = ((g = rt()) == null ? void 0 : g.scrollTop) || 0, Br(), Ei(), Ai();
      })) : (Le += 1, Ge += 1, Xe.value = !1, Vt(), to(), gi(), ft.value = !1, Hr(), m && (window.clearTimeout(m), m = null), Ho(), U.value && (U.value.scrollTop = 0), Me.value = !0, He.value = !1, $e.value = !1, Q = 0);
    }), Ot(ot, (c) => {
      if (!c) {
        to();
        return;
      }
      if (Vt(), ft.value = !1, ai()) {
        Yc();
        return;
      }
      to();
    });
    const mi = (c) => {
      const g = Ze.value.indexOf(c);
      g >= 0 && Ze.value.splice(g, 1);
    }, vi = () => {
      kt.value = !1, Ze.value = [];
    }, ou = (c) => {
      kt.value == c && (kt.value = !1), mi(c);
    }, yi = (c, g = "toggle", y = "") => {
      c ? mt(() => {
        Vo(g, y);
      }) : vi(), mt(() => {
        Rn();
      }), de("antikythera annotations toggled", {
        antikythera_entry: n.entry || void 0,
        annotations_enabled: c,
        annotations_count: ht.value.length,
        annotation_attribution_count: Mo.value.length,
        annotation_trigger: g,
        menu_view: s.value,
        menu_view_name: Gn[s.value]
      });
    }, bi = (c) => {
      c.code == "Escape" && (de("antikythera keyboard shortcut used", {
        antikythera_entry: n.entry || void 0,
        key: "Escape",
        menu_view: s.value
      }), V(1, li()));
    }, wi = () => {
      window.addEventListener("keydown", bi);
    }, Or = () => {
      window.removeEventListener("keydown", bi);
    }, xi = (c) => {
      var g, y, b;
      c != null && c.entry && (L.value = c.entry, Array.isArray((g = c.entry) == null ? void 0 : g.annotations) && (ht.value = c.entry.annotations, Po.value = !0)), c != null && c.settings && !c.settings.error && ($o.value = (y = c.settings) == null ? void 0 : y.shortDescription, Ro.value = (b = c.settings) == null ? void 0 : b.externalLinks, he.value = !0), c != null && c.about && (Ja.value = c.about);
    }, _i = async () => {
      await mt(), ee.value = !0;
    }, ru = (c) => {
      var y, b;
      const g = ht.value.find((R) => R.id === c);
      return {
        antikythera_entry: n.entry || void 0,
        annotation_id: c,
        annotation_title: (g == null ? void 0 : g.title) || void 0,
        annotation_type: (g == null ? void 0 : g.annotationType) || void 0,
        annotation_has_external_link: !!(g != null && g.externalLink),
        annotation_external_domain: no(g == null ? void 0 : g.externalLink),
        annotation_has_featured_image: !!((y = g == null ? void 0 : g.featuredImage) != null && y.url || (b = g == null ? void 0 : g.featuredImageSquare) != null && b.url),
        annotation_index: ht.value.findIndex((R) => R.id === c)
      };
    }, oo = (c, g) => {
      de(
        "antikythera annotation card opened",
        {
          ...ru(c),
          annotation_trigger: g,
          menu_view: s.value,
          menu_view_name: Gn[s.value]
        },
        { onceKey: `annotation-card-opened:${n.entry}:${g}:${c}` }
      );
    }, ki = ({ action: c, label: g, fromView: y, toView: b }) => {
      var R, O;
      de(`antikythera menu ${c} clicked`, {
        antikythera_entry: n.entry || void 0,
        button_label: g,
        menu_from_view: y,
        menu_from_view_name: Gn[y],
        menu_to_view: b,
        menu_to_view_name: Gn[b],
        entry_title: ((R = L.value) == null ? void 0 : R.title) || void 0,
        annotations_count: ht.value.length,
        is_expandable: !!((O = L.value) != null && O.apiExpandable)
      });
    }, au = () => {
      var g;
      const c = ((g = L.value) == null ? void 0 : g.apiExpandable) === !1 ? 1 : 2;
      ki({
        action: "expand",
        label: "More Info",
        fromView: s.value,
        toView: c
      }), c == 2 && (Pr(), Nt()), V(c);
    }, iu = () => {
      if (Ce.value) {
        lu();
        return;
      }
      au();
    }, lu = () => {
      const c = h.value == 2 ? 1 : h.value, g = li();
      ki({
        action: "collapse",
        label: "Return to Article",
        fromView: s.value,
        toView: c
      }), V(c, g);
    }, su = () => {
      var R;
      const c = rt(), g = (R = $.value) == null ? void 0 : R.$el;
      if (!c || !g)
        return 0;
      const y = c.getBoundingClientRect(), b = g.getBoundingClientRect();
      return Math.max(0, c.scrollTop + b.top - y.top);
    }, Oo = () => {
      const c = rt();
      return c && Number.parseFloat(window.getComputedStyle(c).scrollPaddingTop) || 0;
    }, Ci = () => Math.max(0, su() - Oo()), cu = () => {
      var O;
      const c = rt(), g = (O = ne.value) == null ? void 0 : O.$el;
      if (!c || !g)
        return 0;
      const y = c.getBoundingClientRect(), b = g.getBoundingClientRect(), R = c.scrollTop + b.top - y.top;
      return Math.max(0, R - Oo());
    }, Si = () => {
      if (!Ce.value || !qe()) {
        st.value = !1;
        return;
      }
      const c = rt();
      if (!c || Rt.value <= 0) {
        st.value = !1;
        return;
      }
      st.value = c.scrollTop >= Rt.value - 1;
    }, Ho = () => {
      (M !== null || Object.keys(H.value).length > 0) && (M = null, H.value = {}), Rt.value !== 0 && (Rt.value = 0), st.value && (st.value = !1);
    }, uu = () => {
      if (!Ce.value || !qe()) {
        Ho();
        return;
      }
      const c = j.value, g = P.value;
      if (!c || !g) {
        Ho();
        return;
      }
      const y = c.getBoundingClientRect().top, b = g.getBoundingClientRect().top, R = Number.parseFloat(window.getComputedStyle(g).marginTop) || 0, O = Math.max(0, Math.round((b - y + R) * 100) / 100), me = (Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16) * 0.75 - O + c.getBoundingClientRect().height, Pe = Math.max(0, Math.round(me * 100) / 100);
      (M !== O || H.value["--mobile-expanded-section-sticky-top"] !== `${Pe}px`) && (M = O, Rt.value = O, H.value = {
        "--mobile-sticker-sticky-offset": `${O}px`,
        "--mobile-expanded-section-sticky-top": `${Pe}px`
      }), Si();
    }, Ti = () => {
      var Ne, _e;
      const c = rt(), g = w.value;
      if (!c || !g)
        return;
      if (qe()) {
        Me.value = !1;
        return;
      }
      const y = [g, (Ne = $.value) == null ? void 0 : Ne.$el, (_e = ne.value) == null ? void 0 : _e.$el].filter(
        (Be) => Be instanceof Element
      );
      if (!y.length)
        return;
      const b = c.getBoundingClientRect().top + Oo(), O = y.map((Be) => ({
        section: Be,
        rect: Be.getBoundingClientRect()
      })).reduce(
        (Be, Oe) => Oe.rect.top <= b + 2 ? Oe : Be
      ), se = Number.parseFloat(window.getComputedStyle(O.section).minHeight) || 0, me = se > 0 && O.rect.height <= se + 1, Pe = Math.abs(O.rect.top - b) <= 2 || O.section === g && c.scrollTop <= 2;
      me ? Pe && (Me.value = !0) : Me.value = !1;
    }, du = () => {
      if (z = 0, !(!Ce.value || B)) {
        if (Ti(), qe()) {
          Ye.value || uu(), Bo();
          return;
        }
        Ho(), Bo();
      }
    }, nn = () => {
      z || (z = window.requestAnimationFrame(du));
    }, Hr = () => {
      x == null || x.disconnect(), x = null, A = null, z && (window.cancelAnimationFrame(z), z = 0);
    }, Br = () => {
      var O, se;
      if (Hr(), !Ce.value)
        return;
      const c = qe(), g = rt(), y = w.value, b = (O = $.value) == null ? void 0 : O.$el, R = (se = ne.value) == null ? void 0 : se.$el;
      if (A = c, typeof ResizeObserver > "u") {
        B || nn();
        return;
      }
      if (x = new ResizeObserver(() => {
        B || c && Ye.value || nn();
      }), c)
        j.value && x.observe(j.value), P.value && x.observe(P.value);
      else {
        g && x.observe(g);
        for (const me of [y, b, R])
          me instanceof Element && x.observe(me);
      }
      B || nn();
    }, Ei = () => {
      var me;
      const c = rt(), g = (me = $.value) == null ? void 0 : me.$el;
      if (!c || !g) {
        He.value = !1, Q = 0;
        return;
      }
      if (qe()) {
        Q = c.scrollTop;
        return;
      }
      const y = c.scrollTop, b = y >= Q, R = c.getBoundingClientRect(), O = g.getBoundingClientRect(), se = R.top + Oo();
      He.value = b ? y > 2 && O.top <= R.bottom - 2 : y > 2 && O.top <= se + 2, Q = y;
    }, Ai = () => {
      var O, se;
      const c = rt(), g = (O = ne.value) == null ? void 0 : O.$el;
      if (!c || !g || qe()) {
        $e.value = !1;
        return;
      }
      const y = c.scrollTop, b = c.getBoundingClientRect(), R = (se = g.querySelector(".about-preview")) == null ? void 0 : se.getBoundingClientRect();
      $e.value = !!(R && y > 2 && R.bottom < b.bottom - 2);
    }, Bo = () => {
      const c = U.value, g = (c == null ? void 0 : c.querySelectorAll(".mobile-expanded-entry-header, .mobile-expanded-page-header")) || [];
      if (!c || !qe()) {
        g.forEach((y) => y.removeAttribute("data-stuck"));
        return;
      }
      g.forEach((y) => {
        const b = y.closest("section");
        if (!b) {
          y.removeAttribute("data-stuck");
          return;
        }
        const R = y.getBoundingClientRect(), O = b.getBoundingClientRect(), se = R.top > O.top + 1, me = O.bottom > R.bottom + 1;
        y.toggleAttribute("data-stuck", se && me);
      });
    }, Ii = () => {
      Ti(), Si(), Bo(), Ai(), Ei();
    }, $i = () => {
      m && window.clearTimeout(m), m = window.setTimeout(() => {
        m = null, Ii();
      }, 120), !p && (p = window.requestAnimationFrame(() => {
        p = null, Ii();
      }));
    }, fu = () => {
      Ce.value && qe() && $i();
    }, Ri = (c) => {
      const g = U.value, y = j.value;
      if (!c || !g || !y || !qe())
        return;
      const b = c.getBoundingClientRect().top - y.getBoundingClientRect().bottom;
      mt(() => {
        if (!g || !c.isConnected)
          return;
        const R = c.getBoundingClientRect().top - g.getBoundingClientRect().top, O = y.getBoundingClientRect().bottom - g.getBoundingClientRect().top + b, se = Math.max(0, g.scrollTop + R - O);
        g.scrollTop = se, Bo();
      });
    }, pu = ({ header: c }) => {
      Ri(c);
    }, hu = ({ open: c }) => {
      var b, R;
      const g = rt();
      if (!g)
        return;
      if (qe()) {
        const O = (R = (b = $.value) == null ? void 0 : b.$el) == null ? void 0 : R.querySelector(".mobile-expanded-page-header");
        He.value = c, Q = g.scrollTop, !c && O && Ri(O);
        return;
      }
      const y = c ? Ci() : 0;
      He.value = c, Q = g.scrollTop, g.scrollTo({ top: y, behavior: "smooth" });
    }, gu = ({ open: c }) => {
      const g = rt();
      if (!g)
        return;
      const y = c ? cu() : Ci();
      $e.value = c, g.scrollTo({ top: y, behavior: "smooth" });
    }, Pi = (c = {}) => {
      var g;
      de("antikythera file downloaded", {
        antikythera_entry: n.entry || void 0,
        entry_title: ((g = L.value) == null ? void 0 : g.title) || void 0,
        file_type: c.fileType || void 0,
        file_name: c.fileName || void 0,
        file_mime_type: c.mimeType || void 0,
        file_domain: no(c.url)
      });
    }, mu = () => {
      var c, g, y, b;
      de("antikythera doi link clicked", {
        antikythera_entry: n.entry || void 0,
        doi: ((c = L.value) == null ? void 0 : c.doi) || void 0,
        doi_url: ((g = L.value) == null ? void 0 : g.doiUrl) || void 0,
        doi_domain: no((y = L.value) == null ? void 0 : y.doiUrl),
        entry_title: ((b = L.value) == null ? void 0 : b.title) || void 0
      });
    }, zi = (c, g) => {
      var y;
      de("antikythera author link clicked", {
        antikythera_entry: n.entry || void 0,
        author_name: (c == null ? void 0 : c.title) || void 0,
        author_role: g,
        author_external_domain: no(c == null ? void 0 : c.externalLink),
        entry_title: ((y = L.value) == null ? void 0 : y.title) || void 0
      });
    }, vu = (c, g, y = void 0) => {
      var b;
      de("antikythera external link clicked", {
        antikythera_entry: n.entry || void 0,
        entry_title: ((b = L.value) == null ? void 0 : b.title) || void 0,
        link_kind: c,
        link_title: y,
        link_domain: no(g)
      });
    }, Mi = ({ linkKind: c, linkUrl: g, linkTitle: y }) => {
      vu(c, g, y);
    }, Nt = async () => {
      var g, y, b, R, O, se, me;
      if (!n.entry || Qa.value)
        return;
      zo || (ue.value = !1, Se.value = !1, zo = l());
      const c = await zo;
      if (c != null && c.error || !(c != null && c.entry)) {
        zo = null, ue.value = !1, Se.value = !0, de("antikythera entry load error", {
          antikythera_entry: n.entry || void 0,
          error_message: (c == null ? void 0 : c.error) || "missing entry payload"
        });
        return;
      }
      xi(c), Qa.value = !0, await mt(), (Ce.value || v.value == 2) && await Pr(L.value), ue.value = !0, Se.value = !1, de("antikythera entry loaded", {
        antikythera_entry: n.entry || void 0,
        entry_title: ((g = L.value) == null ? void 0 : g.title) || void 0,
        annotations_count: ht.value.length,
        authors_count: ((b = (y = L.value) == null ? void 0 : y.authors) == null ? void 0 : b.length) || 0,
        designers_count: ((O = (R = L.value) == null ? void 0 : R.designers) == null ? void 0 : O.length) || 0,
        related_entries_count: ((me = (se = L.value) == null ? void 0 : se.relatedEntries) == null ? void 0 : me.length) || 0
      });
    }, yu = async () => {
      if (!n.entry || Po.value)
        return;
      Ar || (Ar = d());
      const c = await Ar;
      Array.isArray(c) ? (ht.value = c, Po.value = !0, await mt(), Rn(), Vo("toggle")) : c != null && c.error && de("antikythera annotations load error", {
        antikythera_entry: n.entry || void 0,
        error_message: c.error
      });
    };
    ko(async () => {
      var c, g, y, b, R, O, se, me, Pe, Ne, _e, Be;
      if (Uc(), n.entry) {
        const Oe = await u();
        Oe != null && Oe.error && de("antikythera entry metadata load error", {
          antikythera_entry: n.entry || void 0,
          error_message: Oe.error
        }), xi(Oe), ce.value = !0, de("antikythera entry metadata loaded", {
          antikythera_entry: n.entry || void 0,
          entry_title: ((c = L.value) == null ? void 0 : c.title) || void 0,
          annotations_count: (g = L.value) == null ? void 0 : g.annotationsCount,
          authors_count: ((b = (y = L.value) == null ? void 0 : y.authors) == null ? void 0 : b.length) || 0,
          designers_count: ((O = (R = L.value) == null ? void 0 : R.designers) == null ? void 0 : O.length) || 0,
          has_doi: !!((se = L.value) != null && se.doi),
          has_pdf: !!((Pe = (me = L.value) == null ? void 0 : me.pdf) != null && Pe.url),
          has_markdown: !!((_e = (Ne = L.value) == null ? void 0 : Ne.markdown) != null && _e.url)
        }), Rn(), _i(), ((Be = L.value) == null ? void 0 : Be.annotationsCount) > 0 && yu(), window.addEventListener("resize", Rn), window.addEventListener("scroll", Pn), document.addEventListener("scroll", Pn, { passive: !0, capture: !0 });
      } else {
        console.warn("antikythera menu skipped entry metadata: no entry slug provided");
        const Oe = await i();
        Oe != null && Oe.error || ($o.value = Oe.shortDescription, Ro.value = Oe.externalLinks, he.value = !0), _i(), window.addEventListener("scroll", Pn), document.addEventListener("scroll", Pn, { passive: !0, capture: !0 });
      }
    }), Ua(() => {
      Rr(), ve += 1, Re = "", le && (le.onload = null, le.onerror = null), le = null, Le += 1, Ge += 1, Qt.forEach((c) => {
        c.onload = null, c.onerror = null;
      }), Qt.clear(), window.removeEventListener("resize", Rn), window.removeEventListener("scroll", Pn), document.removeEventListener("scroll", Pn, { capture: !0 }), gi(), Vt(), zr(), si(), ci(), Hr(), I && (window.cancelAnimationFrame(I), I = 0), p && window.cancelAnimationFrame(p), m && window.clearTimeout(m), Or();
    });
    const Li = (c) => {
      var g;
      if (!c) return null;
      if ((g = window.CSS) != null && g.escape)
        return document.querySelector(`#${window.CSS.escape(c)}`);
      try {
        return document.querySelector(`#${c}`) || document.getElementById(c);
      } catch {
        return document.getElementById(c);
      }
    }, bu = () => {
      const c = [], g = /* @__PURE__ */ new Set(), { innerHeight: y } = window;
      return ht.value.forEach((b) => {
        const R = b == null ? void 0 : b.id, O = Li(R);
        if (!O || g.has(R))
          return;
        const { top: se, bottom: me } = O.getBoundingClientRect();
        me > 0 && se < y && (g.add(R), c.push(R));
      }), c;
    }, Vo = (c = "viewport", g = "") => {
      if (!en.value || s.value == 2)
        return;
      const y = bu().filter((b) => b !== g);
      if (g && y.unshift(g), y.length !== 0) {
        if (Nt(), Y.value || s.value == 0) {
          const b = g || y[0];
          kt.value = b, oo(b, c);
          return;
        }
        s.value == 1 && y.slice(0, 2).forEach((b) => {
          Ze.value.includes(b) || (Ze.value.push(b), oo(b, c));
        });
      }
    }, Oi = () => {
      if (!Xn.value)
        return;
      const c = Xn.value, g = Er.value;
      if (Xn.value = "", Er.value = "", c === "annotation-click" && g) {
        Vo(c, g);
        return;
      }
      Vo(c);
    }, wu = () => {
      if (Ze.value.length === 0)
        return;
      const { innerHeight: c } = window, g = /* @__PURE__ */ new Set();
      Ze.value.forEach((y) => {
        const b = Li(y);
        if (!b)
          return;
        const { top: R, bottom: O } = b.getBoundingClientRect();
        (O < 0 || R > c) && g.add(y);
      }), g.size > 0 && (Ze.value = Ze.value.filter((y) => !g.has(y)));
    };
    return xf(() => {
      var c, g, y, b, R;
      if (n.forceopen == !0 && (Nt(), V(2)), Lo.value && !Tr.value && /^v[01]_/.test(n.activeannotation || "")) {
        const O = n.activeannotation.startsWith("v0_") ? "annotation-click" : "viewport";
        Tr.value = !0, en.value = !0, Xn.value = O, Er.value = n.activeannotation.replace(/^v[01]_/, ""), Yn.value = n.activeannotation, de("antikythera annotations toggled", {
          antikythera_entry: n.entry || void 0,
          annotations_enabled: !0,
          annotations_count: ht.value.length,
          annotation_attribution_count: Mo.value.length,
          annotation_trigger: O,
          menu_view: s.value,
          menu_view_name: Gn[s.value]
        });
      }
      if (!Xn.value) {
        if (Yn.value) {
          if (n.activeannotation === Yn.value)
            return;
          Yn.value = "";
        }
        if (Lo.value && !en.value && ((c = n.activeannotation) != null && c.startsWith("v0_"))) {
          const O = "annotation-click", se = n.activeannotation.replace("v0_", "");
          en.value = !0, Yn.value = n.activeannotation, yi(!0, O, se);
          return;
        }
        if (Lo.value && !en.value) {
          vi(), s.value == 2 ? (Nt(), wi()) : Or();
          return;
        }
        if (Y.value && s.value < 2) {
          if ((g = n.activeannotation) != null && g.includes("v0_")) {
            Nt();
            const O = n.activeannotation.replace("v0_", "");
            kt.value = O, oo(O, "click");
          }
          return;
        }
        if (s.value == 0) {
          if (Ze.value = [], (y = n.activeannotation) != null && y.includes("v0_")) {
            Nt();
            const O = n.activeannotation.replace("v0_", "");
            kt.value = O, oo(O, "click");
            return;
          }
          if (n.inactiveannotation) {
            const O = n.inactiveannotation.replace("v0_", "").replace("v1_", "");
            kt.value == O && (kt.value = !1);
          }
          return;
        }
        if (s.value == 1) {
          if (kt.value = !1, n.activeannotation && ((b = n.activeannotation) != null && b.includes("v1_"))) {
            Nt();
            const O = n.activeannotation.replace("v1_", "");
            Ze.value.includes(O) || (Ze.value.push(O), oo(O, "viewport"));
            return;
          }
          if ((R = n.inactiveannotation) != null && R.includes("v1_") && Ze.value.length > 0) {
            const O = n.inactiveannotation.replace("v1_", "");
            Ze.value.indexOf(O) >= 0 && (mi(O), wu());
          }
          return;
        }
        s.value == 2 ? (Nt(), Ze.value = [], kt.value = !1, wi()) : Or();
      }
    }), (c, g) => {
      var y, b, R, O, se, me, Pe, Ne;
      return k(), E("div", {
        ref_key: "ExpandedFrame",
        ref: U,
        class: ge(["expanded-frame fixed top-0 left-0 grid w-full pointer-events-none grid-cols-12 gap-x-3 gap-y-3 px-6 py-3 sm:gap-x-9 z-[1000]", {
          "h-[100dvh] overflow-x-hidden overflow-y-auto overscroll-contain hidden_scroll sm:overflow-hidden expanded-frame-clip": Ce.value,
          "mobile-mid-scroll-reversing": zt.value
        }]),
        style: Sn([Zc.value, H.value]),
        "data-version": "1.5.2",
        onScrollPassive: fu
      }, [
        C("div", {
          class: ge(["expanded-frame-underlay anti-motion-fade pointer-events-none fixed z-0 rounded-[11px] bg-black", [
            { "opacity-0": !Ce.value || ot.value && !Pt.value },
            { "opacity-100": Ce.value && (!ot.value || Pt.value) },
            { "duration-[220ms] delay-[40ms]": ut.value },
            { "duration-[260ms]": zt.value },
            { "duration-150": ot.value && !Pt.value && !zt.value },
            { "duration-200": !ut.value && !ot.value }
          ]])
        }, null, 2),
        C("article", {
          ref_key: "Menu",
          ref: _,
          class: ge(["anti-motion-fade pointer-events-auto relative z-10 w-sticker -translate-x-3 col-start-1 row-start-1 shrink duration-200", [
            { "opacity-0": !ee.value },
            { "col-span-12 sm:col-span-6 lg:col-span-3": !Ce.value },
            {
              "expanded-scrollport expanded-sticker-column col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col gap-[10px] !border-0 !bg-transparent !p-0 text-[rgb(244_244_244)] hidden_scroll !overflow-y-auto": Ce.value
            }
          ]])
        }, [
          C("aside", jm, [
            C("article", {
              ref_key: "StickerCard",
              ref: j,
              class: ge(["expanded-sticker-card border-stroke-light flex w-full flex-col overflow-hidden rounded-lg border bg-black p-[10px] text-m text-[rgb(244_244_244)]", { "minimal-shell-expanding": Ye.value }])
            }, [
              C("header", Um, [
                C("a", qm, [
                  oe(gc, { class: "h-[23px] w-[197px] max-w-full shrink-0 text-[rgb(244_244_244)]" })
                ]),
                oe(ba, { class: "absolute top-[-3px] right-[1px] h-8 w-[19px] text-[rgb(244_244_244)]" })
              ]),
              xt(S) >= 2 && Ao.value ? (k(), E("figure", {
                key: 0,
                class: ge(["anti-motion-fold block overflow-hidden rounded-[4px]", [
                  { "mt-0 max-h-0 opacity-0": Ir.value },
                  { "duration-[280ms]": zt.value, "duration-[240ms]": !zt.value },
                  { "mt-[20px] max-h-[500px] opacity-100 2xl:max-h-[900px]": !Ir.value }
                ]])
              }, [
                (k(), E("img", {
                  ref_key: "CoverImage",
                  ref: q,
                  key: Wn.value,
                  src: Wn.value,
                  srcset: Rc.value,
                  sizes: Pc.value,
                  alt: zc.value,
                  loading: "eager",
                  decoding: "async",
                  fetchpriority: "high",
                  class: ge(["anti-motion-fade aspect-square w-full rounded-[4px] object-cover", [
                    { "opacity-0": Ir.value || !pt.value },
                    { "duration-[220ms]": zt.value, "duration-150": !zt.value }
                  ]]),
                  onLoad: Vc,
                  onError: Nc
                }, null, 42, Km))
              ], 2)) : re("", !0),
              C("section", {
                class: ge(["anti-mobile-summary-fold", [
                  { "anti-mobile-summary-fold-collapsed": Oc.value },
                  { "anti-mobile-summary-reveal": Lc.value },
                  { "duration-[280ms]": ut.value, "duration-[240ms]": !ut.value }
                ]])
              }, [
                C("div", Wm, [
                  C("div", Xm, [
                    C("h2", {
                      class: ge(["uppercase transition-opacity duration-200", { "opacity-0": !L.value.title }])
                    }, fe((y = L.value) != null && y.title ? L.value.title : " "), 3),
                    C("p", {
                      class: ge(["transition-opacity duration-200", { "opacity-0": !L.value.title }])
                    }, [
                      ce.value ? ((R = (b = L.value) == null ? void 0 : b.authors) == null ? void 0 : R.length) > 0 ? (k(), E("span", Gm, [
                        g[2] || (g[2] = Ue(" by ")),
                        (k(!0), E(we, null, It(L.value.authors, (_e, Be) => (k(), E(we, null, [
                          _e.externalLink && _e.externalLink != "" ? (k(), E("a", {
                            key: 0,
                            target: "_blank",
                            class: "underline decoration-1 underline-offset-2 hover:opacity-60",
                            href: _e.externalLink,
                            "data-ph-capture": "",
                            "data-ph-component": "antikythera-author",
                            "data-ph-action": "author-link-click",
                            "data-ph-entry": n.entry,
                            "data-ph-person-role": "author",
                            onClick: (Oe) => zi(_e, "author")
                          }, fe(_e.title), 9, Zm)) : (k(), E("span", Jm, fe(_e.title), 1)),
                          Ue(fe(L.value.authors.length > 1 ? Be == L.value.authors.length - 2 ? " & " : Be < L.value.authors.length - 2 ? ", " : "" : ""), 1)
                        ], 64))), 256))
                      ])) : re("", !0) : (k(), E("span", Ym, g[1] || (g[1] = [
                        C("br", null, null, -1),
                        Ue("  ")
                      ]))),
                      ((se = (O = L.value) == null ? void 0 : O.designers) == null ? void 0 : se.length) > 0 ? (k(), E("span", Qm, [
                        g[3] || (g[3] = C("br", null, null, -1)),
                        g[4] || (g[4] = Ue(" with ")),
                        (k(!0), E(we, null, It(L.value.designers, (_e, Be) => (k(), E(we, null, [
                          _e.externalLink && _e.externalLink != "" ? (k(), E("a", {
                            key: 0,
                            target: "_blank",
                            class: "underline decoration-1 underline-offset-2 hover:opacity-60",
                            href: _e.externalLink,
                            "data-ph-capture": "",
                            "data-ph-component": "antikythera-author",
                            "data-ph-action": "author-link-click",
                            "data-ph-entry": n.entry,
                            "data-ph-person-role": "designer",
                            onClick: (Oe) => zi(_e, "designer")
                          }, fe(_e.title), 9, e0)) : (k(), E("span", t0, fe(_e.title), 1)),
                          Ue(fe(L.value.designers.length > 1 ? Be == L.value.designers.length - 2 ? " & " : Be < L.value.designers.length - 2 ? ", " : "" : ""), 1)
                        ], 64))), 256))
                      ])) : re("", !0)
                    ], 2)
                  ]),
                  !ce.value || (me = L.value) != null && me.doi && ((Pe = L.value) == null ? void 0 : Pe.doi) != "" || Mr.value ? (k(), E("aside", {
                    key: 0,
                    class: ge(["anti-motion-fade text-m mt-[20px] flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1", [
                      { "pointer-events-none opacity-0": st.value && !ot.value },
                      { "duration-0": ot.value, "duration-[260ms]": !ot.value }
                    ]])
                  }, [
                    C("p", n0, [
                      oe(ba, { class: "h-6 w-4 shrink-0 text-[rgb(244_244_244)]" }),
                      C("span", {
                        class: ge(["min-w-0 truncate whitespace-nowrap transition-opacity duration-200", { "opacity-0": !L.value.title || !L.value.doi || L.value.doi == "" }])
                      }, [
                        g[5] || (g[5] = Ue(" DOI ")),
                        L.value.doiUrl ? (k(), E("a", {
                          key: 0,
                          href: L.value.doiUrl,
                          target: "_blank",
                          class: "hover:opacity-60 cursor-crosshair",
                          "data-ph-capture": "",
                          "data-ph-component": "antikythera-doi",
                          "data-ph-action": "doi-link-click",
                          "data-ph-entry": n.entry,
                          onClick: mu
                        }, fe(L.value.doi ? L.value.doi : "XX.XXXX/XXXX.XXXX"), 9, o0)) : (k(), E("span", r0, fe(L.value.doi ? L.value.doi : "XX.XXXX/XXXX.XXXX"), 1))
                      ], 2)
                    ]),
                    C("p", a0, fe(Mr.value ? Mr.value : " "), 1)
                  ], 2)) : (k(), E("div", i0))
                ])
              ], 2),
              C("div", {
                ref_key: "PrimaryCtaButton",
                ref: P,
                class: ge(["sticker-primary-cta overflow-hidden transition-all duration-150 ease-out", [
                  { "mt-0 max-h-0 opacity-0 pointer-events-none": !hi.value },
                  { "mt-[10px] max-h-[40px] opacity-100 delay-[60ms]": hi.value }
                ]])
              }, [
                oe(So, {
                  variant: "light",
                  "data-ph-capture": "",
                  "data-ph-component": "antikythera-menu",
                  "data-ph-action": Ce.value ? "return-to-article" : "menu-expand",
                  "data-ph-entry": n.entry,
                  "data-ph-menu-view": xt(s),
                  onClick: iu
                }, {
                  default: Xt(() => [
                    Ue(fe(Jc.value), 1)
                  ]),
                  _: 1
                }, 8, ["data-ph-action", "data-ph-entry", "data-ph-menu-view"])
              ], 2)
            ], 2),
            Ce.value ? (k(), We(Vl, {
              key: 0,
              class: "hidden sm:flex",
              description: $o.value,
              "external-links": Ro.value,
              entry: n.entry,
              loaded: he.value,
              "expanded-opening": ut.value,
              "expanded-closing": ot.value,
              onExternalLinkClick: Mi
            }, null, 8, ["description", "external-links", "entry", "loaded", "expanded-opening", "expanded-closing"])) : re("", !0)
          ])
        ], 2),
        Ce.value ? (k(), E(we, { key: 0 }, [
          oe(Vl, {
            class: ge(["mobile-journal-description mobile-expanded-exit-content col-start-1 col-end-13 row-start-2 w-sticker -translate-x-3 sm:hidden", { "mobile-below-cta-exiting": Ct.value }]),
            description: $o.value,
            "external-links": Ro.value,
            entry: n.entry,
            loaded: he.value,
            "natural-height": "",
            "expanded-opening": ut.value,
            "expanded-closing": Ct.value,
            onExternalLinkClick: Mi
          }, null, 8, ["class", "description", "external-links", "entry", "loaded", "expanded-opening", "expanded-closing"]),
          C("div", {
            class: ge(["mobile-pdf-preview mobile-expanded-exit-content anti-motion-fold col-start-1 col-end-13 row-start-3 w-sticker -translate-x-3 overflow-hidden sm:hidden", [
              {
                "mobile-below-cta-exiting": Ct.value,
                "duration-[240ms] delay-[24ms]": Ct.value,
                "duration-[220ms]": !Ct.value
              },
              {
                "mt-0 max-h-0 opacity-0 -translate-y-[8px]": ut.value || Ct.value || !ue.value || !Xe.value || !pi.value
              },
              {
                "mt-[10px] max-h-[900px] opacity-100 translate-y-0 delay-[140ms]": !ut.value && !Ct.value && ue.value && Xe.value && pi.value
              }
            ]])
          }, [
            oe(Za, {
              entry: L.value,
              "download-file-type": fi.value,
              "image-loading": "eager",
              "image-fetch-priority": "high",
              onDownload: Pi
            }, null, 8, ["entry", "download-file-type"])
          ], 2),
          C("section", {
            ref_key: "ExpandedScrollport",
            ref: te,
            class: ge(["expanded-scrollport expanded-details-column mobile-expanded-exit-content anti-motion-slide pointer-events-auto z-10 col-start-1 col-end-13 row-start-4 min-w-0 overflow-y-scroll text-white hidden_scroll sm:col-start-7 sm:col-end-13 sm:row-start-1 sm:-ml-3 sm:w-[calc(100%+var(--fontSize)*1.5)] sm:px-3 lg:col-start-4 lg:col-end-13", [
              {
                "mobile-expanded-exit-content-closing": Ct.value,
                "duration-[220ms]": !Ct.value
              },
              { "opacity-0 -translate-y-[12px]": ut.value || !ue.value || !Xe.value },
              { "sm:opacity-0 sm:-translate-y-[12px] sm:duration-[220ms] sm:delay-[32ms]": Ct.value },
              {
                "opacity-100 translate-y-0 delay-[80ms]": !ut.value && !Ct.value && ue.value && Xe.value
              },
              { "snap-y snap-mandatory": Me.value, "snap-none": !Me.value }
            ]]),
            onScroll: $i
          }, [
            C("div", l0, [
              C("div", {
                ref_key: "ExpandedBeforeRelated",
                ref: w,
                class: ge(["expanded-before-related flex w-full snap-start flex-col lg:col-span-9 lg:col-start-1", { "snap-always": Me.value }])
              }, [
                C("div", s0, [
                  oe(Sm, {
                    entry: L.value,
                    loaded: ue.value,
                    "load-error": Se.value,
                    class: "lg:col-span-6 lg:col-start-1",
                    onSectionCollapse: pu
                  }, null, 8, ["entry", "loaded", "load-error"]),
                  C("div", c0, [
                    oe(Ch, {
                      entry: L.value,
                      loaded: ue.value,
                      "load-error": Se.value,
                      "download-file-type": fi.value,
                      class: "lg:sticky lg:top-0 lg:self-start",
                      onDownload: Pi
                    }, null, 8, ["entry", "loaded", "load-error", "download-file-type"])
                  ])
                ]),
                g[6] || (g[6] = C("div", { class: "min-h-0 flex-1" }, null, -1))
              ], 2),
              oe(og, {
                ref_key: "RelatedArticles",
                ref: $,
                entry: L.value,
                loaded: ue.value,
                "load-error": Se.value,
                expanded: He.value,
                class: ge(["expanded-related-page flex snap-start flex-col lg:col-span-9 lg:col-start-1", { "snap-always": Me.value }]),
                onToggle: hu
              }, null, 8, ["entry", "loaded", "load-error", "expanded", "class"]),
              oe(Sg, {
                ref_key: "AboutSectionTarget",
                ref: ne,
                about: Ja.value,
                expanded: $e.value,
                class: ge(["expanded-about-page snap-start lg:col-span-9 lg:col-start-1", { "snap-always": Me.value }]),
                onToggle: gu
              }, null, 8, ["about", "expanded", "class"])
            ])
          ], 34)
        ], 64)) : re("", !0),
        oe(Wf, {
          appear: "",
          "enter-active-class": "anti-motion-slide duration-200",
          "enter-from-class": "opacity-0 -translate-y-[8px]",
          "enter-to-class": "opacity-100 translate-y-0",
          "leave-active-class": "anti-motion-slide duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 -translate-y-[6px]",
          onAfterEnter: Oi,
          onAfterAppear: Oi
        }, {
          default: Xt(() => [
            !Ce.value && !G.value && Tr.value && Lr.value ? (k(), E("aside", u0, [
              oe(zm, {
                ref_key: "AnnotationAttributionCard",
                ref: K,
                modelValue: en.value,
                "onUpdate:modelValue": g[0] || (g[0] = (_e) => en.value = _e),
                label: Lr.value,
                onToggle: yi
              }, null, 8, ["modelValue", "label"])
            ])) : re("", !0)
          ]),
          _: 1
        }),
        xt(s) != 2 && (!Lo.value || en.value) && ((Ne = ht.value) == null ? void 0 : Ne.length) > 0 ? (k(), We(mp, {
          key: 1,
          name: "annotation-list",
          tag: "section",
          style: Sn(J.value),
          class: ge(["anti-motion-slide col-start-1 col-end-13 sm:col-end-7 lg:col-end-4 w-sticker -translate-x-3 max-h-sansSticker overflow-y-auto overscroll-contain pointer-events-auto hidden_scroll rounded-t-[8px] flex flex-col duration-150", { "opacity-0 -translate-y-[6px]": ut.value, "opacity-100 translate-y-0": !ut.value }])
        }, {
          default: Xt(() => [
            (k(!0), E(we, null, It(ei.value, (_e, Be) => {
              var Oe;
              return k(), We(Am, {
                key: _e.id,
                annotation: _e,
                articleAttributionVisibility: ((Oe = L.value) == null ? void 0 : Oe.annotationVisibility) ?? !0,
                view: xt(s),
                isMobile: Y.value,
                style: Sn({ zIndex: ei.value.length - Be }),
                onClose: ou
              }, null, 8, ["annotation", "articleAttributionVisibility", "view", "isMobile", "style"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["style", "class"])) : re("", !0),
        xt(r) ? (k(), We(xt(a), {
          key: 2,
          visible: Mc.value
        }, null, 8, ["visible"])) : re("", !0)
      ], 38);
    };
  }
}, g0 = /* @__PURE__ */ To(h0, [["styles", [Fm, Dm]], ["__scopeId", "data-v-47e13101"]]), m0 = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.richtext *+h1{margin-top:1.28em}.richtext *+h2{margin-top:1.28em}.richtext *+ol{margin-top:1.28em}.richtext *+p{margin-top:1.28em}.richtext *+ul{margin-top:1.28em}.richtext a:hover{opacity:.6}.richtext a{text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:2px}.richtext li{padding-left:0}.richtext ol{list-style-type:decimal;padding-left:calc(var(--fontSize) * 1)}.richtext ul{list-style-type:disc;padding-left:calc(var(--fontSize) * 1)}@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none){.richtext ol,.richtext ul{padding-left:calc(var(--fontSize) * 1.5)}}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.collapse{visibility:collapse}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.-right-\\[\\.95em\\]{right:-.95em}.bottom-\\[\\.15em\\]{bottom:.15em}.left-0{left:0}.left-\\[2px\\]{left:2px}.right-3{right:calc(var(--fontSize) * .75)}.right-\\[1px\\]{right:1px}.top-0{top:0}.top-1\\/2{top:50%}.top-3{top:calc(var(--fontSize) * .75)}.top-\\[-3px\\]{top:-3px}.top-\\[2px\\]{top:2px}.isolate{isolation:isolate}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-\\[1000\\]{z-index:1000}.z-\\[999\\]{z-index:999}.order-1{order:1}.order-2{order:2}.order-3{order:3}.col-span-12{grid-column:span 12 / span 12}.col-span-2{grid-column:span 2 / span 2}.col-span-3{grid-column:span 3 / span 3}.col-span-6{grid-column:span 6 / span 6}.col-start-1{grid-column-start:1}.col-end-13{grid-column-end:13}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.row-start-4{grid-row-start:4}.-mx-3{margin-left:calc(calc(var(--fontSize) * .75) * -1);margin-right:calc(calc(var(--fontSize) * .75) * -1)}.mx-1{margin-left:calc(var(--fontSize) * .25);margin-right:calc(var(--fontSize) * .25)}.mx-auto{margin-left:auto;margin-right:auto}.-mb-3{margin-bottom:calc(calc(var(--fontSize) * .75) * -1)}.mb-3{margin-bottom:calc(var(--fontSize) * .75)}.mb-4{margin-bottom:calc(var(--fontSize) * 1)}.mb-\\[10px\\]{margin-bottom:10px}.ml-auto{margin-left:auto}.mr-0{margin-right:0}.mr-0\\.5{margin-right:.125rem}.mt-0{margin-top:0}.mt-1{margin-top:calc(var(--fontSize) * .25)}.mt-3{margin-top:calc(var(--fontSize) * .75)}.mt-\\[1\\.28em\\]{margin-top:1.28em}.mt-\\[10px\\]{margin-top:10px}.mt-\\[20px\\]{margin-top:20px}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.\\!block{display:block!important}.block{display:block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.\\!hidden{display:none!important}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-10{height:calc(var(--fontSize) * 2.5)}.h-2{height:calc(var(--fontSize) * .5)}.h-6{height:calc(var(--fontSize) * 1.5)}.h-8{height:calc(var(--fontSize) * 2)}.h-\\[\\.7em\\]{height:.7em}.h-\\[100dvh\\]{height:100dvh}.h-\\[16px\\]{height:16px}.h-\\[20px\\]{height:20px}.h-\\[23px\\]{height:23px}.h-full{height:100%}.max-h-0{max-height:0}.max-h-\\[1200px\\]{max-height:1200px}.max-h-\\[15svh\\]{max-height:15svh}.max-h-\\[260px\\]{max-height:260px}.max-h-\\[40px\\]{max-height:40px}.max-h-\\[500px\\]{max-height:500px}.max-h-\\[900px\\]{max-height:900px}.max-h-sansSticker{max-height:var(--sansSticker)}.min-h-0{min-height:0}.min-h-\\[1\\.28em\\]{min-height:1.28em}.min-h-\\[220px\\]{min-height:220px}.min-h-\\[calc\\(1\\.28em\\*3\\)\\]{min-height:3.84em}.min-h-full{min-height:100%}.w-1\\/2{width:50%}.w-10{width:calc(var(--fontSize) * 2.5)}.w-12{width:calc(var(--fontSize) * 3)}.w-3\\/4{width:75%}.w-4{width:calc(var(--fontSize) * 1)}.w-\\[\\.7em\\]{width:.7em}.w-\\[121px\\]{width:121px}.w-\\[16px\\]{width:16px}.w-\\[197px\\]{width:197px}.w-\\[19px\\]{width:19px}.w-\\[36px\\]{width:36px}.w-auto{width:auto}.w-full{width:100%}.w-sticker{width:var(--sticker)}.min-w-0{min-width:0}.min-w-full{min-width:100%}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-3\\/4{flex-basis:75%}.basis-full{flex-basis:100%}.-translate-x-3{--tw-translate-x: calc(calc(var(--fontSize) * .75) * -1);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-\\[11\\.25em\\]{--tw-translate-x: -11.25em;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[12px\\]{--tw-translate-y: -12px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[6px\\]{--tw-translate-y: -6px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[8px\\]{--tw-translate-y: -8px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[16px\\]{--tw-translate-x: 16px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y: 0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-crosshair{cursor:crosshair}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.snap-none{scroll-snap-type:none}.snap-y{scroll-snap-type:y var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness: mandatory}.snap-start{scroll-snap-align:start}.snap-always{scroll-snap-stop:always}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-rows-\\[auto_auto\\]{grid-template-rows:auto auto}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:calc(var(--fontSize) * .5)}.gap-3{gap:calc(var(--fontSize) * .75)}.gap-6{gap:calc(var(--fontSize) * 1.5)}.gap-9{gap:calc(var(--fontSize) * 2.25)}.gap-\\[10px\\]{gap:10px}.gap-\\[20px\\]{gap:20px}.gap-x-3{-moz-column-gap:calc(var(--fontSize) * .75);column-gap:calc(var(--fontSize) * .75)}.gap-x-6{-moz-column-gap:calc(var(--fontSize) * 1.5);column-gap:calc(var(--fontSize) * 1.5)}.gap-y-1{row-gap:calc(var(--fontSize) * .25)}.gap-y-3{row-gap:calc(var(--fontSize) * .75)}.gap-y-\\[10px\\]{row-gap:10px}.overflow-hidden{overflow:hidden}.\\!overflow-y-auto{overflow-y:auto!important}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.overflow-y-scroll{overflow-y:scroll}.overscroll-contain{overscroll-behavior:contain}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.rounded-\\[11px\\]{border-radius:11px}.rounded-\\[4px\\]{border-radius:4px}.rounded-\\[8px\\]{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:calc(var(--fontSize) * .5)}.rounded-t-\\[8px\\]{border-top-left-radius:8px;border-top-right-radius:8px}.\\!border-0{border-width:0px!important}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-\\[rgba\\(204\\,204\\,204\\,0\\.2\\)\\]{border-color:#ccc3}.border-stroke-dark{border-color:var(--stroke-dark)}.border-stroke-light{border-color:var(--stroke-light)}.\\!bg-transparent{background-color:transparent!important}.bg-\\[\\#F2F2F2\\]{--tw-bg-opacity: 1;background-color:rgb(242 242 242 / var(--tw-bg-opacity, 1))}.bg-\\[\\#ff5a01\\]{--tw-bg-opacity: 1;background-color:rgb(255 90 1 / var(--tw-bg-opacity, 1))}.bg-\\[color-mix\\(in_srgb\\,var\\(--white\\)_16\\%\\,var\\(--black\\)\\)\\]{background-color:color-mix(in srgb,var(--white) 16%,var(--black))}.bg-\\[rgba\\(204\\,204\\,204\\,0\\.2\\)\\]{background-color:#ccc3}.bg-black{background-color:var(--black)}.bg-white{background-color:var(--white)}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-top{-o-object-position:top;object-position:top}.\\!p-0{padding:0!important}.p-3{padding:calc(var(--fontSize) * .75)}.p-\\[10px\\]{padding:10px}.px-3{padding-left:calc(var(--fontSize) * .75);padding-right:calc(var(--fontSize) * .75)}.px-6{padding-left:calc(var(--fontSize) * 1.5);padding-right:calc(var(--fontSize) * 1.5)}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.py-3{padding-top:calc(var(--fontSize) * .75);padding-bottom:calc(var(--fontSize) * .75)}.py-\\[10px\\]{padding-top:10px;padding-bottom:10px}.py-\\[4px\\]{padding-top:4px;padding-bottom:4px}.pb-0{padding-bottom:0}.pb-3{padding-bottom:calc(var(--fontSize) * .75)}.pb-9{padding-bottom:calc(var(--fontSize) * 2.25)}.pb-\\[10px\\]{padding-bottom:10px}.pl-3{padding-left:calc(var(--fontSize) * .75)}.pl-\\[1px\\]{padding-left:1px}.pr-12{padding-right:calc(var(--fontSize) * 3)}.pr-2{padding-right:calc(var(--fontSize) * .5)}.pr-3{padding-right:calc(var(--fontSize) * .75)}.pr-8{padding-right:calc(var(--fontSize) * 2)}.pr-\\[48px\\]{padding-right:48px}.pt-3{padding-top:calc(var(--fontSize) * .75)}.pt-6{padding-top:calc(var(--fontSize) * 1.5)}.pt-\\[10px\\]{padding-top:10px}.pt-\\[1px\\]{padding-top:1px}.pt-\\[20px\\]{padding-top:20px}.text-left{text-align:left}.text-right{text-align:right}.font-sans{font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif}.text-m{font-size:var(--fontSize);line-height:1.28;letter-spacing:0em}.text-s{font-size:var(--smallFontSize);line-height:1.2;letter-spacing:0em}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.leading-\\[1\\.1\\]{line-height:1.1}.leading-\\[1\\.25\\]{line-height:1.25}.text-\\[\\#f4f4f4\\]{--tw-text-opacity: 1;color:rgb(244 244 244 / var(--tw-text-opacity, 1))}.text-\\[color-mix\\(in_srgb\\,var\\(--black\\)_50\\%\\,transparent\\)\\]{color:color-mix(in srgb,var(--black) 50%,transparent)}.text-\\[color-mix\\(in_srgb\\,var\\(--white\\)_50\\%\\,transparent\\)\\]{color:color-mix(in srgb,var(--white) 50%,transparent)}.text-\\[rgb\\(244_244_244\\)\\]{--tw-text-opacity: 1;color:rgb(244 244 244 / var(--tw-text-opacity, 1))}.text-\\[rgb\\(244_244_244_\\/_0\\.5\\)\\]{color:#f4f4f480}.text-black{color:var(--black)}.text-white{color:var(--white)}.underline{text-decoration-line:underline}.decoration-1{text-decoration-thickness:1px}.underline-offset-2{text-underline-offset:2px}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.delay-100{transition-delay:.1s}.delay-\\[140ms\\]{transition-delay:.14s}.delay-\\[24ms\\]{transition-delay:24ms}.delay-\\[40ms\\]{transition-delay:40ms}.delay-\\[60ms\\]{transition-delay:60ms}.delay-\\[80ms\\]{transition-delay:80ms}.duration-0{transition-duration:0s}.duration-100{transition-duration:.1s}.duration-150{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.duration-\\[200ms\\]{transition-duration:.2s}.duration-\\[220ms\\]{transition-duration:.22s}.duration-\\[240ms\\]{transition-duration:.24s}.duration-\\[260ms\\]{transition-duration:.26s}.duration-\\[280ms\\]{transition-duration:.28s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}:host{font-family:ESAllianz-Book,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.2;--fontSize: 14px;--insetsvh: calc(100svh - (var(--fontSize) * 1.5));--insetsvw: calc(100vw - var(--fontSize));--fullwidth: calc(100% + var(--fontSize));--sticker: calc(100% + (var(--fontSize) * 1.5));--col1: calc((25% - ((var(--fontSize) * 6) / 4)));--col2: calc((50% - (var(--fontSize) * 2 / 2)));--col3: calc((100vw - (var(--fontSize) * 5)) * .75);--sansSticker: calc(100svh - (var(--fontSize) * 20));--smallFontSize: calc(.857 * var(--fontSize));--black: #000;--white: #fff;--gray: #e7e7e7;--darkgray: #444444;--graytext: #686868;--stroke-light: rgba(204, 204, 204, .2);--stroke-dark: rgba(204, 204, 204, .4);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media screen and (max-width: 768px){:host{--insetsvh: calc(100dvh - var(--fontSize))}}@media screen and (min-width: 1000px){:host{font-size:14px;--fontSize: 14px}}@media screen and (min-width: 1200px){:host{font-size:14px;--fontSize: 14px}}@media screen and (min-width: 1450px){:host{font-size:15px;--fontSize: 15px}}@media screen and (min-width: 1650px){:host{font-size:16px;--fontSize: 16px}}@media screen and (min-width: 1850px){:host{font-size:18px;--fontSize: 18px}}@media screen and (min-width: 2050px){:host{font-size:20px;--fontSize: 20px}}@media screen and (min-width: 2250px){:host{font-size:22px;--fontSize: 22px}}@media screen and (min-width: 2450px){:host{font-size:24px;--fontSize: 24px}}@media screen and (min-width: 2650px){:host{font-size:26px;--fontSize: 26px}}@media screen and (min-width: 2850px){:host{font-size:28px;--fontSize: 28px}}@media screen and (min-width: 3050px){:host{font-size:30px;--fontSize: 30px}}.hidden_scroll::-webkit-scrollbar{display:none}.hidden_scroll{scrollbar-width:none;-ms-overflow-style:none}.transition-allowdiscrete{transition-behavior:allow-discrete}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:-left-2:before{content:var(--tw-content);left:calc(calc(var(--fontSize) * .5) * -1)}.before\\:-top-6:before{content:var(--tw-content);top:calc(calc(var(--fontSize) * 1.5) * -1)}.before\\:h-16:before{content:var(--tw-content);height:calc(var(--fontSize) * 4)}.before\\:w-fullwidth:before{content:var(--tw-content);width:var(--fullwidth)}.before\\:bg-gradient-to-b:before{content:var(--tw-content);background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.before\\:from-black:before{content:var(--tw-content);--tw-gradient-from: var(--black) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:from-70\\%:before{content:var(--tw-content);--tw-gradient-from-position: 70%}.after\\:pointer-events-none:after{content:var(--tw-content);pointer-events:none}.after\\:invisible:after{content:var(--tw-content);visibility:hidden}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:right-0:after{content:var(--tw-content);right:0}.after\\:box-content:after{content:var(--tw-content);box-sizing:content-box}.after\\:bg-gradient-to-l:after{content:var(--tw-content);background-image:linear-gradient(to left,var(--tw-gradient-stops))}.after\\:from-black:after{content:var(--tw-content);--tw-gradient-from: var(--black) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\\:from-90\\%:after{content:var(--tw-content);--tw-gradient-from-position: 90%}.after\\:pl-2:after{content:var(--tw-content);padding-left:calc(var(--fontSize) * .5)}.first\\:ml-0:first-child{margin-left:0}.last\\:mb-0:last-child{margin-bottom:0}.last\\:mr-0:last-child{margin-right:0}.last\\:border-b-0:last-child{border-bottom-width:0px}@media (hover: hover) and (pointer: fine){.hover\\:scale-\\[0\\.99\\]:hover{--tw-scale-x: .99;--tw-scale-y: .99;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:opacity-60:hover{opacity:.6}.hover\\:duration-100:hover{transition-duration:.1s}.group:hover .group-hover\\:opacity-100{opacity:1}.group:hover .group-hover\\:delay-100{transition-delay:.1s}.peer:hover~.peer-hover\\:opacity-0{opacity:0}.peer:hover~.peer-hover\\:delay-0{transition-delay:0s}}@media (min-width: 640px){.sm\\:absolute{position:absolute}.sm\\:bottom-3{bottom:calc(var(--fontSize) * .75)}.sm\\:left-3{left:calc(var(--fontSize) * .75)}.sm\\:right-3{right:calc(var(--fontSize) * .75)}.sm\\:top-3{top:calc(var(--fontSize) * .75)}.sm\\:col-span-2{grid-column:span 2 / span 2}.sm\\:col-span-3{grid-column:span 3 / span 3}.sm\\:col-span-6{grid-column:span 6 / span 6}.sm\\:col-start-7{grid-column-start:7}.sm\\:col-end-13{grid-column-end:13}.sm\\:col-end-7{grid-column-end:7}.sm\\:row-start-1{grid-row-start:1}.sm\\:-ml-3{margin-left:calc(calc(var(--fontSize) * .75) * -1)}.sm\\:mb-0{margin-bottom:0}.sm\\:mt-0{margin-top:0}.sm\\:mt-2{margin-top:calc(var(--fontSize) * .5)}.sm\\:block{display:block}.sm\\:inline{display:inline}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:h-6{height:calc(var(--fontSize) * 1.5)}.sm\\:w-6{width:calc(var(--fontSize) * 1.5)}.sm\\:w-8{width:calc(var(--fontSize) * 2)}.sm\\:w-\\[calc\\(100\\%\\+var\\(--fontSize\\)\\*1\\.5\\)\\]{width:calc(100% + var(--fontSize) * 1.5)}.sm\\:w-auto{width:auto}.sm\\:basis-col1{flex-basis:var(--col1)}.sm\\:basis-col2{flex-basis:var(--col2)}.sm\\:-translate-y-\\[12px\\]{--tw-translate-y: -12px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sm\\:flex-wrap{flex-wrap:wrap}.sm\\:gap-2{gap:calc(var(--fontSize) * .5)}.sm\\:gap-x-9{-moz-column-gap:calc(var(--fontSize) * 2.25);column-gap:calc(var(--fontSize) * 2.25)}.sm\\:overflow-hidden{overflow:hidden}.sm\\:px-3{padding-left:calc(var(--fontSize) * .75);padding-right:calc(var(--fontSize) * .75)}.sm\\:pt-0{padding-top:0}.sm\\:text-m{font-size:var(--fontSize);line-height:1.28;letter-spacing:0em}.sm\\:decoration-2{text-decoration-thickness:2px}.sm\\:underline-offset-4{text-underline-offset:4px}.sm\\:opacity-0{opacity:0}.sm\\:delay-\\[32ms\\]{transition-delay:32ms}.sm\\:duration-\\[220ms\\]{transition-duration:.22s}.sm\\:before\\:hidden:before{content:var(--tw-content);display:none}.sm\\:after\\:visible:after{content:var(--tw-content);visibility:visible}.sm\\:after\\:h-8:after{content:var(--tw-content);height:calc(var(--fontSize) * 2)}.sm\\:after\\:w-full:after{content:var(--tw-content);width:100%}}@media (min-width: 768px){.md\\:mt-2{margin-top:calc(var(--fontSize) * .5)}.md\\:grid-cols-\\[repeat\\(2\\,minmax\\(auto\\,1fr\\)\\)\\]{grid-template-columns:repeat(2,minmax(auto,1fr))}.md\\:pl-3{padding-left:calc(var(--fontSize) * .75)}.md\\:opacity-0{opacity:0}}@media (min-width: 1024px){.lg\\:absolute{position:absolute}.lg\\:sticky{position:sticky}.lg\\:right-0{right:0}.lg\\:top-0{top:0}.lg\\:col-span-3{grid-column:span 3 / span 3}.lg\\:col-span-6{grid-column:span 6 / span 6}.lg\\:col-span-9{grid-column:span 9 / span 9}.lg\\:col-start-1{grid-column-start:1}.lg\\:col-start-4{grid-column-start:4}.lg\\:col-start-7{grid-column-start:7}.lg\\:col-end-13{grid-column-end:13}.lg\\:col-end-4{grid-column-end:4}.lg\\:-mx-3{margin-left:calc(calc(var(--fontSize) * .75) * -1);margin-right:calc(calc(var(--fontSize) * .75) * -1)}.lg\\:mr-1{margin-right:calc(var(--fontSize) * .25)}.lg\\:line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:h-8{height:calc(var(--fontSize) * 2)}.lg\\:h-fit{height:-moz-fit-content;height:fit-content}.lg\\:h-full{height:100%}.lg\\:max-h-\\[20svh\\]{max-height:20svh}.lg\\:min-h-\\[calc\\(1\\.28em\\*4\\)\\]{min-height:5.12em}.lg\\:w-10{width:calc(var(--fontSize) * 2.5)}.lg\\:w-8{width:calc(var(--fontSize) * 2)}.lg\\:w-\\[calc\\(\\(100\\%-var\\(--fontSize\\)\\*18\\)\\/3\\+var\\(--fontSize\\)\\*4\\.5\\)\\]{width:calc((100% - var(--fontSize) * 18) / 3 + var(--fontSize) * 4.5)}.lg\\:w-\\[calc\\(100\\%\\+var\\(--fontSize\\)\\*1\\.5\\)\\]{width:calc(100% + var(--fontSize) * 1.5)}.lg\\:w-\\[calc\\(50\\%-var\\(--fontSize\\)\\)\\]{width:calc(50% - var(--fontSize))}.lg\\:w-auto{width:auto}.lg\\:flex-1{flex:1 1 0%}.lg\\:basis-\\[calc\\(70vh-7\\.5rem\\)\\]{flex-basis:calc(70vh - 7.5rem)}.lg\\:grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:flex-col{flex-direction:column}.lg\\:flex-nowrap{flex-wrap:nowrap}.lg\\:items-stretch{align-items:stretch}.lg\\:gap-6{gap:calc(var(--fontSize) * 1.5)}.lg\\:gap-x-9{-moz-column-gap:calc(var(--fontSize) * 2.25);column-gap:calc(var(--fontSize) * 2.25)}.lg\\:self-start{align-self:flex-start}.lg\\:pb-\\[10px\\]{padding-bottom:10px}.lg\\:pt-0{padding-top:0}.lg\\:last\\:pb-4:last-child{padding-bottom:calc(var(--fontSize) * 1)}@media (hover: hover) and (pointer: fine){.group:hover .lg\\:group-hover\\:opacity-100{opacity:1}}}@media (min-width: 1280px){.xl\\:line-clamp-6{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6}.xl\\:h-10{height:calc(var(--fontSize) * 2.5)}.xl\\:min-h-\\[calc\\(1\\.28em\\*6\\)\\]{min-height:7.68em}.xl\\:w-10{width:calc(var(--fontSize) * 2.5)}.xl\\:w-12{width:calc(var(--fontSize) * 3)}.xl\\:gap-6{gap:calc(var(--fontSize) * 1.5)}}@media (min-width: 1536px){.\\32xl\\:max-h-\\[900px\\]{max-height:900px}}.\\[\\&_a\\:hover\\]\\:opacity-60 a:hover{opacity:.6}.\\[\\&_a\\]\\:underline a{text-decoration-line:underline}.\\[\\&_a\\]\\:decoration-1 a{text-decoration-thickness:1px}.\\[\\&_a\\]\\:underline-offset-2 a{text-underline-offset:2px}.\\[\\&_p\\+p\\]\\:mt-5 p+p{margin-top:calc(var(--fontSize) * 1.25)}.\\[\\&_p\\+p\\]\\:mt-\\[1\\.28em\\] p+p{margin-top:1.28em}.\\[\\&_p\\+p\\]\\:mt-\\[10px\\] p+p{margin-top:10px}', $c = (e, t = 0) => {
  const n = Array.isArray(e.styles) ? [...e.styles] : [];
  return n.splice(t, 0, m0), e.styles = n, e;
}, v0 = /* @__PURE__ */ uc($c(g0, 1)), y0 = "", b0 = {
  key: 0,
  class: "grid grid-cols-6 w-full lg:w-[calc(50%-var(--fontSize))] gap-9 pt-6 justify-center mx-auto"
}, w0 = ["href", "data-ph-entry", "data-ph-credit-format", "onClick"], x0 = { key: 1 }, _0 = {
  key: 0,
  class: "[&_p+p]:mt-[1.28em] mt-[1.28em]"
}, k0 = {
  key: 0,
  class: "[&_p+p]:mt-[1.28em] mt-[1.28em]"
}, C0 = ["data-ph-entry"], S0 = {
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
    const t = e, { getSettings: n, getEntry: o } = Sa({ entry: t.entry, environment: t.environment, apiUrl: t.apiUrl }), r = W(!1), a = W(null), i = X(() => {
      var s, f;
      return hc({
        theme: t.theme,
        backgroundColor: t.apiBackgroundColor || ((s = a.value) == null ? void 0 : s.apiBackgroundColor),
        foregroundColor: t.apiForegroundColor || ((f = a.value) == null ? void 0 : f.apiForegroundColor)
      });
    }), l = (s) => {
      if (s)
        try {
          return new URL(s, window.location.origin).hostname;
        } catch {
          return;
        }
    }, u = () => {
      de("antikythera footer scroll top clicked", {
        antikythera_entry: t.entry || void 0
      }), window.scrollTo({ top: 0, behavior: "smooth" });
    }, d = (s) => {
      var f;
      de("antikythera credit link clicked", {
        antikythera_entry: t.entry || void 0,
        credit_title: (s == null ? void 0 : s.title) || void 0,
        credit_format: (s == null ? void 0 : s.format) || void 0,
        credit_is_contributor: !!(s != null && s.isContributor),
        credit_person_name: ((f = s == null ? void 0 : s.person) == null ? void 0 : f.title) || void 0,
        credit_external_domain: l(s == null ? void 0 : s.externalLink)
      });
    };
    return ko(async () => {
      var s, f, h, v, S, T, V;
      if (t.entry) {
        const _ = await o();
        _ != null && _.error && de("antikythera footer entry load error", {
          antikythera_entry: t.entry || void 0,
          error_message: _.error
        }), r.value = ((f = (s = _ == null ? void 0 : _.entry) == null ? void 0 : s.annotations) == null ? void 0 : f.length) > 0, a.value = _ == null ? void 0 : _.entry, de("antikythera footer loaded", {
          antikythera_entry: t.entry || void 0,
          entry_title: ((h = _ == null ? void 0 : _.entry) == null ? void 0 : h.title) || void 0,
          annotations_count: ((S = (v = _ == null ? void 0 : _.entry) == null ? void 0 : v.annotations) == null ? void 0 : S.length) || 0,
          credits_count: ((V = (T = _ == null ? void 0 : _.entry) == null ? void 0 : T.creditsList) == null ? void 0 : V.length) || 0
        });
      } else
        console.warn("antikythera footer skipped: no entry slug provided");
    }), (s, f) => {
      var h, v, S, T, V;
      return k(), E("footer", {
        class: ge(["relative w-full z-[999] bg-black text-white rounded-[8px] w-sticker py-3 px-3 -translate-x-3 border border-stroke-light mb-3 box-border", [{ "!hidden": !r.value && ((v = (h = a.value) == null ? void 0 : h.creditsList) == null ? void 0 : v.length) <= 0 }, { "pb-9": !r.value }]]),
        style: Sn(i.value)
      }, [
        ((T = (S = a.value) == null ? void 0 : S.creditsList) == null ? void 0 : T.length) > 0 ? (k(), E("section", b0, [
          (k(!0), E(we, null, It((V = a.value) == null ? void 0 : V.creditsList, (_, U) => {
            var te, w, $, ne, P;
            return k(), E("article", {
              class: ge(["", [{ "col-span-6 sm:col-span-3 w-full": _.format == "half" }, { "col-span-3 sm:col-span-2 w-full": _.format == "quarter" }]])
            }, [
              C("h2", null, fe(_.title), 1),
              _.isContributor ? (k(), E(we, { key: 0 }, [
                C("h3", null, [
                  _.externalLink && _.externalLink != "" ? (k(), E("a", {
                    key: 0,
                    href: _.externalLink,
                    target: "_blank",
                    class: "underline underline-offset-4 decoration-1 sm:underline-offset-4 sm:decoration-2 hover:opacity-60",
                    "data-ph-capture": "",
                    "data-ph-component": "antikythera-footer",
                    "data-ph-action": "credit-link-click",
                    "data-ph-entry": t.entry,
                    "data-ph-credit-format": _.format,
                    onClick: (j) => d(_)
                  }, [
                    C("strong", null, fe((te = _ == null ? void 0 : _.person) == null ? void 0 : te.title), 1)
                  ], 8, w0)) : (k(), E("strong", x0, fe((w = _ == null ? void 0 : _.person) == null ? void 0 : w.title), 1))
                ]),
                ($ = _ == null ? void 0 : _.person) != null && $.biography ? (k(), E("div", _0, [
                  oe(xt(dr), {
                    value: (ne = _ == null ? void 0 : _.person) != null && ne.biography ? (P = _ == null ? void 0 : _.person) == null ? void 0 : P.biography : []
                  }, null, 8, ["value"])
                ])) : re("", !0)
              ], 64)) : (k(), E(we, { key: 1 }, [
                _ != null && _.custom ? (k(), E("div", k0, [
                  oe(xt(dr), {
                    value: _ != null && _.custom ? _ == null ? void 0 : _.custom : []
                  }, null, 8, ["value"])
                ])) : re("", !0)
              ], 64))
            ], 2);
          }), 256))
        ])) : re("", !0),
        e.scrollTop ? (k(), E("button", {
          key: 1,
          onClick: u,
          class: "text-left col-span-12 sm:absolute sm:bottom-3 sm:left-3 text-xs text-black hover:opacity-60",
          "data-ph-capture": "",
          "data-ph-component": "antikythera-footer",
          "data-ph-action": "scroll-top",
          "data-ph-entry": t.entry
        }, " ↑ Back to top ", 8, C0)) : re("", !0)
      ], 6);
    };
  }
}, T0 = /* @__PURE__ */ To(S0, [["styles", [y0]]]), E0 = /* @__PURE__ */ uc($c(T0, 0)), _a = "2.0.5";
console.info(`Antikythera API v${_a}`);
class A0 {
  constructor({
    entry: t = "",
    token: n = "",
    // tbd
    menuName: o = "antikythera-menu",
    footerName: r = "antikythera-footer",
    annotationClass: a = ".annotation",
    manual: i = !1,
    environment: l = "production",
    apiUrl: u = void 0,
    customCss: d = !1,
    detectAnnotationsOnInit: s = !0,
    analytics: f = !0
  } = {}) {
    Yl({
      analytics: f,
      entry: t,
      environment: l,
      apiUrl: u,
      packageVersion: _a,
      explicit: !0
    }), customElements.get(o) || customElements.define(o, v0), customElements.get(r) || customElements.define(r, E0);
    const { entryId: h, getSettings: v, getEntry: S, getEntryMeta: T, getAnnotations: V, init: _, reinit: U, detectAnnotations: te } = Sa({
      entry: t,
      environment: l,
      apiUrl: u,
      customCss: d,
      analytics: f,
      packageVersion: _a
    });
    this.entryId = h, this.getSettings = v, this.getEntry = S, this.getEntryMeta = T, this.getAnnotations = V, this.init = _, this.reinit = U, this.detectAnnotations = te, this.captureAnalyticsEvent = de, i || this.init({ menuName: o, annotationClass: a, detectAnnotationsOnInit: s });
  }
}
export {
  A0 as Antikythera,
  E0 as AntikytheraFooter,
  v0 as AntikytheraMenu
};
