(function d(c, e, t) {
  function r(i, s) {
    if (!e[i]) {
      if (!c[i]) {
        var o = "function" == typeof require && require;
        if (!s && o) return o(i, !0);
        if (n) return n(i, !0);
        var a = new Error("Cannot find module '" + i +
          "'");
        throw a.code = "MODULE_NOT_FOUND", a
      }
      var p = e[i] = {
        exports: {}
      };
      c[i][0].call(p.exports, function (t) {
        var e = c[i][1][t];
        return r(e ? e : t)
      }, p, p.exports, d, c, e, t)
    }
    return e[i].exports
  }
  for (var n = "function" == typeof require && require, i =
    0; i < t.length; i++) r(t[i]);
  return r
})({
  1: [function (e) {
    let t = e("distjs")
      .loadjs;
    ((n) => {
      ((e) => {
        if (e) return !0;
        var t = navigator.userAgent.match(
          /Chrom(e|ium)\/([0-9]+)\./
        );
        return !!t && 59 < parseInt(t[2],
          10)
      })() && e("./"), window.addEventListener(
        "WebComponentsReady", () => {
          let t = new CustomEvent(
            `${n}-ready`, e("./"));
          window.dispatchEvent(t)
        });
      t([{
        async: !0
        , url: "https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.12/webcomponents-loader.js"
      }])
    })(e("./package.json")
      .name)
  }, {
    "./": 3
    , "./package.json": 12
    , distjs: 5
  }]
  , 2: [function (e, t, n) {
    ! function (i) {
      var e = "object" == typeof window && window ||
        "object" == typeof self && self;
      "undefined" == typeof n ? e && (e.hljs =
        i({}), "function" == typeof define &&
        define.amd && define([], function () {
          return e.hljs
        })) : i(n)
    }(function (g) {
      function h(t) {
        return t.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
      }

      function y(t) {
        return t.nodeName.toLowerCase()
      }

      function v(n, e) {
        var t = n && n.exec(e);
        return t && 0 === t.index
      }

      function S(t) {
        return k.test(t)
      }

      function n(n) {
        var e, t, r, a, d = n.className + " ";
        if (d += n.parentNode ? n.parentNode
          .className : "", t = x.exec(d))
          return u(t[1]) ? t[1] :
            "no-highlight";
        for (d = d.split(/\s+/), e = 0, r = d
          .length; r > e; e++)
          if (a = d[e], S(a) || u(a))
            return a
      }

      function i(n) {
        var i, t = {}
          , e = Array.prototype.slice.call(
            arguments, 1);
        for (i in n) t[i] = n[i];
        return e.forEach(function (n) {
          for (i in n) t[i] = n[i]
        }), t
      }

      function A(n) {
        var r = [];
        return function t(a, e) {
          for (var s = a
            .firstChild; s; s = s
              .nextSibling) 3 === s
                .nodeType ? e += s
                  .nodeValue.length : 1 ===
                  s.nodeType && (r.push({
                    event: "start"
                    , offset: e
                    , node: s
                  }), e = t(s, e), y(s)
                    .match(
                      /br|hr|img|input/
                    ) || r.push({
                      event: "stop"
                      , offset: e
                      , node: s
                    }));
          return e
        }(n, 0), r
      }

      function c(t, e, r) {
        function n() {
          return t.length && e.length ? t[0]
            .offset === e[0].offset ?
            "start" === e[0].event ? t :
              e : t[0].offset < e[0]
                .offset ? t : e : t.length ?
            t : e
        }

        function i(t) {
          f += "<" + y(t) + l.map.call(t
            .attributes
            , function (t) {
              return " " + t
                .nodeName +
                "=\"" + h(t.value)
                  .replace("\"",
                    "&quot;") +
                "\""
            })
            .join("") + ">"
        }

        function a(t) {
          f += "</" + y(t) + ">"
        }

        function s(t) {
          ("start" === t.event ? i : a)(t
            .node)
        }
        for (var c, p = 0, f = "", u = []; t
          .length || e.length;)
          if (c = n(), f += h(r.substring(p,
            c[0].offset)), p = c[0]
              .offset, c === t) {
            u.reverse()
              .forEach(a);
            do s(c.splice(0, 1)[0]), c =
              n(); while (c === t && c
                .length && c[0].offset ===
              p);
            u.reverse()
              .forEach(i)
          } else "start" === c[0].event ? u
            .push(c[0].node) : u.pop(), s(
              c.splice(0, 1)[0]);
        return f + h(r.substr(p))
      }

      function t(n) {
        return n.v && !n.cached_variants && (n
          .cached_variants = n.v.map(
            function (e) {
              return i(n, {
                v: null
              }, e)
            })), n.cached_variants ||
            n.eW && [i(n)] || [n]
      }

      function a(n) {
        function e(t) {
          return t && t.source || t
        }

        function d(t, i) {
          return new RegExp(e(t), "m" + (n
            .cI ? "i" : "") + (i ?
              "g" : ""))
        }

        function r(a, l) {
          if (!a.compiled) {
            if (a.compiled = !0, a.k = a
              .k || a.bK, a.k) {
              var i = {}
                , s = function (a,
                  e) {
                  n.cI && (e = e
                    .toLowerCase()
                  ), e
                    .split(" ")
                    .forEach(
                      function (
                        t) {
                        var e =
                          t
                            .split(
                              "|"
                            );
                        i[e[0]] = [
                          a,
                          e[
                            1] ?
                            +
                            e[
                            1] :
                            1
                        ]
                      })
                };
              "string" == typeof a.k ?
                s("keyword", a.k) : f(
                  a.k)
                  .forEach(function (
                    t) {
                    s(t, a.k[t])
                  }), a.k = i
            }
            a.lR = d(a.l || /\w+/, !0),
              l && (a.bK && (a.b =
                "\\b(" + a.bK
                  .split(" ")
                  .join("|") +
                ")\\b"), a.b || (a
                  .b = /\B|\b/), a
                    .bR = d(a.b), a.e || a
                      .eW || (a.e =
                        /\B|\b/), a.e && (a
                          .eR = d(a.e)), a
                            .tE = e(a.e) || "", a
                              .eW && l.tE && (a
                                .tE += (a.e ?
                                  "|" : "") + l
                                  .tE)), a.i && (a
                                    .iR = d(a.i)), null ==
                                    a.r && (a.r = 1), a.c || (
                                      a.c = []), a.c = Array
                                        .prototype.concat.apply(
                                          [], a.c.map(function (n) {
                                            return t(
                                              "self" ===
                                                n ?
                                                a : n)
                                          })), a.c.forEach(
                                            function (t) {
                                              r(t, a)
                                            }), a.starts && r(a
                                              .starts, l);
            var c = a.c.map(function (t) {
              return t.bK ?
                "\\.?(" + t
                  .b + ")\\.?" :
                t.b
            })
              .concat([a.tE, a.i])
              .map(e)
              .filter(Boolean);
            a.t = c.length ? d(c.join(
              "|"), !0) : {
              exec: function () {
                return null
              }
            }
          }
        }
        r(n)
      }

      function o(t, b, r, x) {
        function i(i, e) {
          var t, r;
          for (t = 0, r = e.c.length; r >
            t; t++)
            if (v(e.c[t].bR, i)) return e
              .c[t]
        }

        function s(n, e) {
          if (v(n.eR, e)) {
            for (; n.endsParent && n
              .parent;) n = n.parent;
            return n
          }
          return n.eW ? s(n.parent, e) :
            void 0
        }

        function c(i, e) {
          return !r && v(e.iR, i)
        }

        function L(n, e) {
          var t = R.cI ? e[0]
            .toLowerCase() : e[0];
          return n.k.hasOwnProperty(t) && n
            .k[t]
        }

        function l(d, e, t, r) {
          var a = r ? "" : C.classPrefix
            , n = "<span class=\"" + a
            , i = t ? "" : w;
          return n += d + "\">", n + e + i
        }

        function p() {
          var t, e, i, r;
          if (!y.k) return h(I);
          for (r = "", e = 0, y.lR
            .lastIndex = 0, i = y.lR.exec(
              I); i;) r += h(I
                .substring(e, i.index)),
                t = L(y, i), t ? (E += t[1],
                  r += l(t[0], h(i[0]))) :
                  r += h(i[0]), e = y.lR
                    .lastIndex, i = y.lR.exec(I);
          return r + h(I.substr(e))
        }

        function A() {
          var t = "string" == typeof y.sL;
          if (t && !m[y.sL]) return h(I);
          var e = t ? o(y.sL, I, !0, q[y
            .sL]) : d(I, y.sL.length ?
              y.sL : void 0);
          return 0 < y.r && (E += e.r), t &&
            (q[y.sL] = e.top), l(e
              .language, e.value, !1, !0
            )
        }

        function f() {
          k += null == y.sL ? p() : A(), I =
            ""
        }

        function g(t) {
          k += t.cN ? l(t.cN, "", !0) : "",
            y = Object.create(t, {
              parent: {
                value: y
              }
            })
        }

        function _(d, e) {
          if (I += d, null == e) return f(),
            0;
          var t = i(e, y);
          if (t) return t.skip ? I += e : (t
            .eB && (I += e), f(),
            t.rB || t.eB || (I =
              e)), g(t, e), t
                .rB ? 0 : e.length;
          var r = s(y, e);
          if (r) {
            var a = y;
            a.skip ? I += e : (a.rE || a
              .eE || (I += e), f(),
              a.eE && (I = e));
            do y.cN && (k += w), y.skip ||
              (E += y.r), y = y
                .parent; while (y !== r
                  .parent);
            return r.starts && g(r.starts,
              ""), a.rE ? 0 : e
                .length
          }
          if (c(e, y)) throw new Error(
            "Illegal lexeme \"" +
            e + "\" for mode \"" +
            (y.cN ||
              "<unnamed>") + "\"");
          return I += e, e.length || 1
        }
        var R = u(t);
        if (!R) throw new Error(
          "Unknown language: \"" +
          t + "\"");
        a(R);
        var z, y = x || R
          , q = {}
          , k = "";
        for (z = y; z !== R; z = z.parent) z
          .cN && (k = l(z.cN, "", !0) + k);
        var I = ""
          , E = 0;
        try {
          for (var j, T, S = 0; ;) {
            if (y.t.lastIndex = S, j = y.t
              .exec(b), !j) break;
            T = _(b.substring(S, j.index),
              j[0]), S = j.index + T
          }
          for (_(b.substr(S)), z = y; z
            .parent; z = z.parent) z.cN &&
              (k += w);
          return {
            r: E
            , value: k
            , language: t
            , top: y
          }
        } catch (e) {
          if (e.message && -1 !== e.message
            .indexOf("Illegal")) return {
              r: 0
              , value: h(b)
            };
          throw e
        }
      }

      function d(i, e) {
        e = e || C.languages || f(m);
        var s = {
          r: 0
          , value: h(i)
        }
          , a = s;
        return e.filter(u)
          .forEach(function (e) {
            var t = o(e, i, !1);
            t.language = e, t.r > a
              .r && (a = t), t.r > s
                .r && (a = s, s = t)
          }), a.language && (s.second_best =
            a), s
      }

      function b(t) {
        return C.tabReplace || C.useBR ? t
          .replace(N, function (n, e) {
            return C.useBR && "\n" ===
              n ? "<br>" : C
                .tabReplace ? e
                  .replace(/\t/g, C
                    .tabReplace) : ""
          }) : t
      }

      function p(i, e, t) {
        var r = e ? _[e] : t
          , a = [i.trim()];
        return i.match(/\bhljs\b/) || a.push(
          "hljs"), -1 === i.indexOf(
            r) && a.push(r), a.join(" ")
              .trim()
      }

      function r(i) {
        var e, t, r, a, s, l = n(i);
        S(l) || (C.useBR ? (e = document
          .createElementNS(
            "http://www.w3.org/1999/xhtml",
            "div"), e.innerHTML =
          i.innerHTML.replace(/\n/g,
            "")
            .replace(/<br[ \/]*>/g,
              "\n")) : e = i, s = e
                .textContent, r = l ? o(l, s,
                  !0) : d(s), t = A(e), t
                    .length && (a = document
                      .createElementNS(
                        "http://www.w3.org/1999/xhtml",
                        "div"), a.innerHTML =
                      r.value, r.value = c(t, A(
                        a), s)), r.value = b(r
                          .value), i.innerHTML = r
                            .value, i.className = p(i
                              .className, l, r.language
                            ), i.result = {
                              language: r.language
                              , re: r.r
                            }, r.second_best && (i
                              .second_best = {
                              language: r
                                .second_best
                                .language
                              , re: r.second_best.r
                            }))
      }

      function s() {
        if (!s.called) {
          s.called = !0;
          var t = document.querySelectorAll(
            "pre code");
          l.forEach.call(t, r)
        }
      }

      function u(t) {
        return t = (t || "")
          .toLowerCase(), m[t] || m[_[t]]
      }
      var l = []
        , f = Object.keys
        , m = {}
        , _ = {}
        , k = /^(no-?highlight|plain|text)$/i
        , x = /\blang(?:uage)?-([\w-]+)\b/i
        , N = /((^(<[^>]+>|\t|)+|(?:\n)))/gm
        , w = "</span>"
        , C = {
          classPrefix: "hljs-"
          , tabReplace: null
          , useBR: !1
          , languages: void 0
        };
      return g.highlight = o, g.highlightAuto =
        d, g.fixMarkup = b, g.highlightBlock =
        r, g.configure = function (t) {
          C = i(C, t)
        }, g.initHighlighting = s, g
          .initHighlightingOnLoad =
        function () {
          addEventListener(
            "DOMContentLoaded", s, !1
          ), addEventListener(
            "load", s, !1)
        }, g.registerLanguage = function (n,
          e) {
          var t = m[n] = e(g);
          t.aliases && t.aliases.forEach(
            function (t) {
              _[t] = n
            })
        }, g.listLanguages = function () {
          return f(m)
        }, g.getLanguage = u, g.inherit = i, g
          .IR = "[a-zA-Z]\\w*", g.UIR =
        "[a-zA-Z_]\\w*", g.NR =
        "\\b\\d+(\\.\\d+)?", g.CNR =
        "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        g.BNR = "\\b(0b[01]+)", g.RSR =
        "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        g.BE = {
          b: "\\\\[\\s\\S]"
          , r: 0
        }, g.ASM = {
          cN: "string"
          , b: "'"
          , e: "'"
          , i: "\\n"
          , c: [g.BE]
        }, g.QSM = {
          cN: "string"
          , b: "\""
          , e: "\""
          , i: "\\n"
          , c: [g.BE]
        }, g.PWM = {
          b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        }, g.C = function (e, i, s) {
          var a = g.inherit({
            cN: "comment"
            , b: e
            , e: i
            , c: []
          }, s || {});
          return a.c.push(g.PWM), a.c.push({
            cN: "doctag"
            , b: "(?:TODO|FIXME|NOTE|BUG|XXX):"
            , r: 0
          }), a
        }, g.CLCM = g.C("//", "$"), g.CBCM = g
          .C("/\\*", "\\*/"), g.HCM = g.C("#",
            "$"), g.NM = {
              cN: "number"
              , b: g.NR
              , r: 0
            }, g.CNM = {
              cN: "number"
              , b: g.CNR
              , r: 0
            }, g.BNM = {
              cN: "number"
              , b: g.BNR
              , r: 0
            }, g.CSSNM = {
              cN: "number"
              , b: g.NR +
                "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?"
              , r: 0
            }, g.RM = {
              cN: "regexp"
              , b: /\//
              , e: /\/[gimuy]*/
              , i: /\n/
              , c: [g.BE, {
                b: /\[/
                , e: /\]/
                , r: 0
                , c: [g.BE]
              }]
            }, g.TM = {
              cN: "title"
              , b: g.IR
              , r: 0
            }, g.UTM = {
              cN: "title"
              , b: g.UIR
              , r: 0
            }, g.METHOD_GUARD = {
              b: "\\.\\s*" + g.UIR
              , r: 0
            }, g.registerLanguage("apache",
              function (n) {
                var e = {
                  cN: "number"
                  , b: "[\\$%]\\d+"
                };
                return {
                  aliases: ["apacheconf"]
                  , cI: !0
                  , c: [n.HCM, {
                    cN: "section"
                    , b: "</?"
                    , e: ">"
                  }, {
                    cN: "attribute"
                    , b: /\w+/
                    , r: 0
                    , k: {
                      nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
                    }
                    , starts: {
                      e: /$/
                      , r: 0
                      , k: {
                        literal: "on off all"
                      }
                      , c: [{
                        cN: "meta"
                        , b: "\\s\\["
                        , e: "\\]$"
                      }, {
                        cN: "variable"
                        , b: "[\\$%]\\{"
                        , e: "\\}"
                        , c: ["self",
                          e
                        ]
                      }, e, n.QSM]
                    }
                  }]
                  , i: /\S/
                }
              }), g.registerLanguage("bash",
                function (n) {
                  var e = {
                    cN: "variable"
                    , v: [{
                      b: /\$[\w\d#@][\w\d_]*/
                    }, {
                      b: /\$\{(.*?)}/
                    }]
                  }
                    , t = {
                      cN: "string"
                      , b: /"/
                      , e: /"/
                      , c: [n.BE, e, {
                        cN: "variable"
                        , b: /\$\(/
                        , e: /\)/
                        , c: [n
                          .BE]
                      }]
                    }
                    , i = {
                      cN: "string"
                      , b: /'/
                      , e: /'/
                    };
                  return {
                    aliases: ["sh", "zsh"]
                    , l: /\b-?[a-z\._]+\b/
                    , k: {
                      keyword: "if then else elif fi for while in do done case esac function"
                      , literal: "true false"
                      , built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
                      , _: "-ne -eq -lt -gt -f -d -e -s -l -a"
                    }
                    , c: [{
                      cN: "meta"
                      , b: /^#![^\n]+sh\s*$/
                      , r: 10
                    }, {
                      cN: "function"
                      , b: /\w[\w\d_]*\s*\(\s*\)\s*\{/
                      , rB: !0
                      , c: [n.inherit(
                        n
                          .TM,
                        {
                          b: /\w[\w\d_]*/
                        }
                      )]
                      , r: 0
                    }, n.HCM, t, i, e]
                  }
                }), g.registerLanguage(
                  "coffeescript"
                  , function (d) {
                    var e = {
                      keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not"
                      , literal: "true false null undefined yes no on off"
                      , built_in: "npm require console print module global window document"
                    }
                      , o =
                        "[A-Za-z$_][0-9A-Za-z$_]*"
                      , l = {
                        cN: "subst"
                        , b: /#\{/
                        , e: /}/
                        , k: e
                      }
                      , a = [d.BNM, d.inherit(d
                        .CNM, {
                        starts: {
                          e: "(\\s*/)?"
                          , r: 0
                        }
                      }), {
                        cN: "string"
                        , v: [{
                          b: /'''/
                          , e: /'''/
                          , c: [d
                            .BE]
                        }, {
                          b: /'/
                          , e: /'/
                          , c: [d
                            .BE]
                        }, {
                          b: /"""/
                          , e: /"""/
                          , c: [d.BE,
                            l
                          ]
                        }, {
                          b: /"/
                          , e: /"/
                          , c: [d.BE,
                            l
                          ]
                        }]
                      }, {
                        cN: "regexp"
                        , v: [{
                          b: "///"
                          , e: "///"
                          , c: [l, d
                            .HCM
                          ]
                        }, {
                          b: "//[gim]*"
                          , r: 0
                        }, {
                          b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
                        }]
                      }, {
                        b: "@" + o
                      }, {
                        sL: "javascript"
                        , eB: !0
                        , eE: !0
                        , v: [{
                          b: "```"
                          , e: "```"
                        }, {
                          b: "`"
                          , e: "`"
                        }]
                      }];
                    l.c = a;
                    var n = d.inherit(d.TM, {
                      b: o
                    })
                      , i =
                        "(\\(.*\\))?\\s*\\B[-=]>"
                      , u = {
                        cN: "params"
                        , b: "\\([^\\(]"
                        , rB: !0
                        , c: [{
                          b: /\(/
                          , e: /\)/
                          , k: e
                          , c: [
                            "self"]
                            .concat(
                              a)
                        }]
                      };
                    return {
                      aliases: ["coffee",
                        "cson", "iced"]
                      , k: e
                      , i: /\/\*/
                      , c: a.concat([d.C("###",
                        "###"), d
                        .HCM, {
                        cN: "function"
                        , b: "^\\s*" +
                          o +
                          "\\s*=\\s*" +
                          i
                        , e: "[-=]>"
                        , rB: !0
                        , c: [n,
                          u]
                      }, {
                        b: /[:\(,=]\s*/
                        , r: 0
                        , c: [{
                          cN: "function"
                          , b: i
                          , e: "[-=]>"
                          , rB:
                            !
                            0
                          , c: [
                            u]
                        }]
                      }, {
                        cN: "class"
                        , bK: "class"
                        , e: "$"
                        , i: /[:="\[\]]/
                        , c: [{
                          bK: "extends"
                          , eW:
                            !
                            0
                          , i: /[:="\[\]]/
                          , c: [
                            n]
                        }, n]
                      }, {
                        b: o +
                          ":"
                        , e: ":"
                        , rB: !0
                        , rE: !0
                        , r: 0
                      }])
                    }
                  }), g.registerLanguage("cpp",
                    function (d) {
                      var e = {
                        cN: "keyword"
                        , b: "\\b[a-z\\d_]*_t\\b"
                      }
                        , t = {
                          cN: "string"
                          , v: [{
                            b: "(u8?|U)?L?\""
                            , e: "\""
                            , i: "\\n"
                            , c: [d
                              .BE]
                          }, {
                            b: "(u8?|U)?R\""
                            , e: "\""
                            , c: [d
                              .BE]
                          }, {
                            b: "'\\\\?."
                            , e: "'"
                            , i: "."
                          }]
                        }
                        , o = {
                          cN: "number"
                          , v: [{
                            b: "\\b(0b[01']+)"
                          }, {
                            b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
                          }, {
                            b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                          }]
                          , r: 0
                        }
                        , a = {
                          cN: "meta"
                          , b: /#\s*[a-z]+\b/
                          , e: /$/
                          , k: {
                            "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
                          }
                          , c: [{
                            b: /\\\n/
                            , r: 0
                          }, d.inherit(t, {
                            cN: "meta-string"
                          }), {
                            cN: "meta-string"
                            , b: /<[^\n>]*>/
                            , e: /$/
                            , i: "\\n"
                          }, d.CLCM, d.CBCM]
                        }
                        , l = d.IR + "\\s*\\("
                        , u = {
                          keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not"
                          , built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
                          , literal: "true false nullptr NULL"
                        }
                        , p = [e, d.CLCM, d.CBCM,
                          o, t];
                      return {
                        aliases: ["c", "cc", "h",
                          "c++", "h++",
                          "hpp"]
                        , k: u
                        , i: "</"
                        , c: p.concat([a, {
                          b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<"
                          , e: ">"
                          , k: u
                          , c: ["self",
                            e]
                        }, {
                            b: d.IR +
                              "::"
                            , k: u
                          }, {
                            v: [{
                              b: /=/
                              , e: /;/
                            }, {
                              b: /\(/
                              , e: /\)/
                            }, {
                              bK: "new throw return else"
                              , e: /;/
                            }]
                            , k: u
                            , c: p
                              .concat(
                                [{
                                  b: /\(/
                                  , e: /\)/
                                  , k: u
                                  , c: p
                                    .concat(
                                      [
                                        "self"]
                                    )
                                  , r: 0
                                }])
                            , r: 0
                          }, {
                            cN: "function"
                            , b: "(" +
                              d.IR +
                              "[\\*&\\s]+)+" +
                              l
                            , rB: !0
                            , e: /[{;=]/
                            , eE: !0
                            , k: u
                            , i: /[^\w\s\*&]/
                            , c: [{
                              b: l
                              , rB:
                                !
                                0
                              , c: [d
                                .TM]
                              , r: 0
                            }, {
                              cN: "params"
                              , b: /\(/
                              , e: /\)/
                              , k: u
                              , r: 0
                              , c: [d.CLCM,
                              d
                                .CBCM,
                                t,
                                o,
                                e
                              ]
                            }, d.CLCM, d.CBCM, a]
                          }, {
                            cN: "class"
                            , bK: "class struct"
                            , e: /[{;:]/
                            , c: [{
                              b: /</
                              , e: />/
                              , c: [
                                "self"]
                            }, d.TM]
                          }])
                        , exports: {
                          preprocessor: a
                          , strings: t
                          , k: u
                        }
                      }
                    }), g.registerLanguage("cs",
                      function (d) {
                        var e = {
                          keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield"
                          , literal: "null false true"
                        }
                          , p = {
                            cN: "string"
                            , b: "@\""
                            , e: "\""
                            , c: [{
                              b: "\"\""
                            }]
                          }
                          , r = d.inherit(p, {
                            i: /\n/
                          })
                          , a = {
                            cN: "subst"
                            , b: "{"
                            , e: "}"
                            , k: e
                          }
                          , n = d.inherit(a, {
                            i: /\n/
                          })
                          , i = {
                            cN: "string"
                            , b: /\$"/
                            , e: "\""
                            , i: /\n/
                            , c: [{
                              b: "{{"
                            }, {
                              b: "}}"
                            }, d.BE, n]
                          }
                          , s = {
                            cN: "string"
                            , b: /\$@"/
                            , e: "\""
                            , c: [{
                              b: "{{"
                            }, {
                              b: "}}"
                            }, {
                              b: "\"\""
                            }, a]
                          }
                          , c = d.inherit(s, {
                            i: /\n/
                            , c: [{
                              b: "{{"
                            }, {
                              b: "}}"
                            }, {
                              b: "\"\""
                            }, n]
                          });
                        a.c = [s, i, p, d.ASM, d.QSM,
                          d.CNM, d.CBCM], n
                            .c = [c, i, r, d.ASM, d
                              .QSM, d.CNM, d
                                .inherit(d.CBCM, {
                                  i: /\n/
                                })];
                        var o = {
                          v: [s, i, p, d.ASM, d
                            .QSM]
                        }
                          , l = d.IR + "(<" + d.IR +
                            "(\\s*,\\s*" + d.IR +
                            ")*>)?(\\[\\])?";
                        return {
                          aliases: ["csharp"]
                          , k: e
                          , i: /::/
                          , c: [d.C("///", "$", {
                            rB: !0
                            , c: [{
                              cN: "doctag"
                              , v: [{
                                b: "///"
                                , r: 0
                              }, {
                                b: "<!--|-->"
                              }, {
                                b: "</?"
                                , e: ">"
                              }]
                            }]
                          }), d.CLCM, d
                            .CBCM, {
                            cN: "meta"
                            , b: "#"
                            , e: "$"
                            , k: {
                              "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
                            }
                          }
                            , o, d.CNM, {
                            bK: "class interface"
                            , e: /[{;=]/
                            , i: /[^\s:]/
                            , c: [d.TM, d
                              .CLCM,
                            d.CBCM
                            ]
                          }, {
                            bK: "namespace"
                            , e: /[{;=]/
                            , i: /[^\s:]/
                            , c: [d.inherit(
                              d
                                .TM,
                              {
                                b: "[a-zA-Z](\\.?\\w)*"
                              }
                            ),
                            d
                              .CLCM,
                            d.CBCM
                            ]
                          }, {
                            cN: "meta"
                            , b: "^\\s*\\["
                            , eB: !0
                            , e: "\\]"
                            , eE: !0
                            , c: [{
                              cN: "meta-string"
                              , b: /"/
                              , e: /"/
                            }]
                          }, {
                            bK: "new return throw await else"
                            , r: 0
                          }, {
                            cN: "function"
                            , b: "(" + l +
                              "\\s+)+" +
                              d.IR +
                              "\\s*\\("
                            , rB: !0
                            , e: /[{;=]/
                            , eE: !0
                            , k: e
                            , c: [{
                              b: d.IR +
                                "\\s*\\("
                              , rB:
                                !
                                0
                              , c: [d
                                .TM]
                              , r: 0
                            }, {
                              cN: "params"
                              , b: /\(/
                              , e: /\)/
                              , eB:
                                !
                                0
                              , eE:
                                !
                                0
                              , k: e
                              , r: 0
                              , c: [o, d
                                .CNM,
                                d
                                  .CBCM
                              ]
                            }, d.CLCM, d.CBCM]
                          }]
                        }
                      }), g.registerLanguage("css",
                        function (t) {
                          var e = {
                            b: /[A-Z\_\.\-]+\s*:/
                            , rB: !0
                            , e: ";"
                            , eW: !0
                            , c: [{
                              cN: "attribute"
                              , b: /\S/
                              , e: ":"
                              , eE: !0
                              , starts: {
                                eW: !
                                  0
                                , eE:
                                  !
                                  0
                                , c: [{
                                  b: /[\w-]+\(/
                                  , rB:
                                    !
                                    0
                                  , c: [{
                                    cN: "built_in"
                                    , b: /[\w-]+/
                                  }, {
                                    b: /\(/
                                    , e: /\)/
                                    , c: [t.ASM,
                                    t
                                      .QSM
                                    ]
                                  }]
                                }, t.CSSNM, t.QSM, t.ASM, t.CBCM, {
                                  cN: "number"
                                  , b: "#[0-9A-Fa-f]+"
                                }, {
                                  cN: "meta"
                                  , b: "!important"
                                }]
                              }
                            }]
                          };
                          return {
                            cI: !0
                            , i: /[=\/|'\$]/
                            , c: [t.CBCM, {
                              cN: "selector-id"
                              , b: /#[A-Za-z0-9_-]+/
                            }, {
                              cN: "selector-class"
                              , b: /\.[A-Za-z0-9_-]+/
                            }, {
                              cN: "selector-attr"
                              , b: /\[/
                              , e: /\]/
                              , i: "$"
                            }, {
                              cN: "selector-pseudo"
                              , b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
                            }, {
                              b: "@(font-face|page)"
                              , l: "[a-z-]+"
                              , k: "font-face page"
                            }, {
                              b: "@"
                              , e: "[{;]"
                              , i: /:/
                              , c: [{
                                cN: "keyword"
                                , b: /\w+/
                              }, {
                                b: /\s/
                                , eW:
                                  !
                                  0
                                , eE:
                                  !
                                  0
                                , r: 0
                                , c: [t.ASM,
                                t
                                  .QSM,
                                t
                                  .CSSNM
                                ]
                              }]
                            }, {
                              cN: "selector-tag"
                              , b: "[a-zA-Z-][a-zA-Z0-9_-]*"
                              , r: 0
                            }, {
                              b: "{"
                              , e: "}"
                              , i: /\S/
                              , c: [t.CBCM,
                                e]
                            }]
                          }
                        }), g.registerLanguage("diff",
                          function () {
                            return {
                              aliases: ["patch"]
                              , c: [{
                                cN: "meta"
                                , r: 10
                                , v: [{
                                  b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
                                }, {
                                  b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
                                }, {
                                  b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
                                }]
                              }, {
                                cN: "comment"
                                , v: [{
                                  b: /Index: /
                                  , e: /$/
                                }, {
                                  b: /={3,}/
                                  , e: /$/
                                }, {
                                  b: /^\-{3}/
                                  , e: /$/
                                }, {
                                  b: /^\*{3} /
                                  , e: /$/
                                }, {
                                  b: /^\+{3}/
                                  , e: /$/
                                }, {
                                  b: /\*{5}/
                                  , e: /\*{5}$/
                                }]
                              }, {
                                cN: "addition"
                                , b: "^\\+"
                                , e: "$"
                              }, {
                                cN: "deletion"
                                , b: "^\\-"
                                , e: "$"
                              }, {
                                cN: "addition"
                                , b: "^\\!"
                                , e: "$"
                              }]
                            }
                          }), g.registerLanguage("http",
                            function () {
                              var e = "HTTP/[0-9\\.]+";
                              return {
                                aliases: ["https"]
                                , i: "\\S"
                                , c: [{
                                  b: "^" + e
                                  , e: "$"
                                  , c: [{
                                    cN: "number"
                                    , b: "\\b\\d{3}\\b"
                                  }]
                                }, {
                                  b: "^[A-Z]+ (.*?) " +
                                    e + "$"
                                  , rB: !0
                                  , e: "$"
                                  , c: [{
                                    cN: "string"
                                    , b: " "
                                    , e: " "
                                    , eB:
                                      !
                                      0
                                    , eE:
                                      !
                                      0
                                  }, {
                                    b: e
                                  }, {
                                    cN: "keyword"
                                    , b: "[A-Z]+"
                                  }]
                                }, {
                                  cN: "attribute"
                                  , b: "^\\w"
                                  , e: ": "
                                  , eE: !0
                                  , i: "\\n|\\s|="
                                  , starts: {
                                    e: "$"
                                    , r: 0
                                  }
                                }, {
                                  b: "\\n\\n"
                                  , starts: {
                                    sL: []
                                    , eW: !0
                                  }
                                }]
                              }
                            }), g.registerLanguage("ini",
                              function (n) {
                                var e = {
                                  cN: "string"
                                  , c: [n.BE]
                                  , v: [{
                                    b: "'''"
                                    , e: "'''"
                                    , r: 10
                                  }, {
                                    b: "\"\"\""
                                    , e: "\"\"\""
                                    , r: 10
                                  }, {
                                    b: "\""
                                    , e: "\""
                                  }, {
                                    b: "'"
                                    , e: "'"
                                  }]
                                };
                                return {
                                  aliases: ["toml"]
                                  , cI: !0
                                  , i: /\S/
                                  , c: [n.C(";", "$"), n
                                    .HCM, {
                                    cN: "section"
                                    , b: /^\s*\[+/
                                    , e: /\]+/
                                  }, {
                                    b: /^[a-z0-9\[\]_-]+\s*=\s*/
                                    , e: "$"
                                    , rB: !0
                                    , c: [{
                                      cN: "attr"
                                      , b: /[a-z0-9\[\]_-]+/
                                    }, {
                                      b: /=/
                                      , eW:
                                        !
                                        0
                                      , r: 0
                                      , c: [{
                                        cN: "literal"
                                        , b: /\bon|off|true|false|yes|no\b/
                                      }, {
                                        cN: "variable"
                                        , v: [{
                                          b: /\$[\w\d"][\w\d_]*/
                                        }, {
                                          b: /\$\{(.*?)}/
                                        }]
                                      }, e, {
                                        cN: "number"
                                        , b: /([\+\-]+)?[\d]+_[\d_]+/
                                      }, n.NM]
                                    }]
                                  }]
                                }
                              }), g.registerLanguage("java",
                                function (n) {
                                  var e =
                                    "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*"
                                    , t =
                                      "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do";
                                  return {
                                    aliases: ["jsp"]
                                    , k: t
                                    , i: /<\/|#/
                                    , c: [n.C("/\\*\\*",
                                      "\\*/", {
                                      r: 0
                                      , c: [{
                                        b: /\w+@/
                                        , r: 0
                                      }, {
                                        cN: "doctag"
                                        , b: "@[A-Za-z]+"
                                      }]
                                    }), n.CLCM, n
                                      .CBCM, n.ASM, n
                                      .QSM, {
                                      cN: "class"
                                      , bK: "class interface"
                                      , e: /[{;=]/
                                      , eE: !0
                                      , k: "class interface"
                                      , i: /[:"\[\]]/
                                      , c: [{
                                        bK: "extends implements"
                                      }, n.UTM]
                                    }, {
                                      bK: "new throw return else"
                                      , r: 0
                                    }, {
                                      cN: "function"
                                      , b: "(" + (
                                        e +
                                        "(<" +
                                        e +
                                        "(\\s*,\\s*" +
                                        e +
                                        ")*>)?"
                                      ) +
                                        "\\s+)+" +
                                        n.UIR +
                                        "\\s*\\("
                                      , rB: !0
                                      , e: /[{;=]/
                                      , eE: !0
                                      , k: t
                                      , c: [{
                                        b: n.UIR +
                                          "\\s*\\("
                                        , rB:
                                          !
                                          0
                                        , r: 0
                                        , c: [n
                                          .UTM]
                                      }, {
                                        cN: "params"
                                        , b: /\(/
                                        , e: /\)/
                                        , k: t
                                        , r: 0
                                        , c: [n.ASM,
                                        n
                                          .QSM,
                                        n
                                          .CNM,
                                        n
                                          .CBCM
                                        ]
                                      }, n.CLCM, n.CBCM]
                                    }, {
                                      cN: "number"
                                      , b: "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?"
                                      , r: 0
                                    }, {
                                      cN: "meta"
                                      , b: "@[A-Za-z]+"
                                    }]
                                  }
                                }), g.registerLanguage(
                                  "javascript"
                                  , function (d) {
                                    var e =
                                      "[A-Za-z$_][0-9A-Za-z$_]*"
                                      , o = {
                                        keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as"
                                        , literal: "true false null undefined NaN Infinity"
                                        , built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
                                      }
                                      , l = {
                                        cN: "number"
                                        , v: [{
                                          b: "\\b(0[bB][01]+)"
                                        }, {
                                          b: "\\b(0[oO][0-7]+)"
                                        }, {
                                          b: d.CNR
                                        }]
                                        , r: 0
                                      }
                                      , a = {
                                        cN: "subst"
                                        , b: "\\$\\{"
                                        , e: "\\}"
                                        , k: o
                                        , c: []
                                      }
                                      , n = {
                                        cN: "string"
                                        , b: "`"
                                        , e: "`"
                                        , c: [d.BE, a]
                                      };
                                    a.c = [d.ASM, d.QSM, n, l, d
                                      .RM];
                                    var i = a.c.concat([d.CBCM, d
                                      .CLCM]);
                                    return {
                                      aliases: ["js", "jsx"]
                                      , k: o
                                      , c: [{
                                        cN: "meta"
                                        , r: 10
                                        , b: /^\s*['"]use (strict|asm)['"]/
                                      }, {
                                        cN: "meta"
                                        , b: /^#!/
                                        , e: /$/
                                      }, d.ASM, d.QSM, n, d.CLCM, d.CBCM, l, {
                                        b: /[{,]\s*/
                                        , r: 0
                                        , c: [{
                                          b: e +
                                            "\\s*:"
                                          , rB:
                                            !
                                            0
                                          , r: 0
                                          , c: [{
                                            cN: "attr"
                                            , b: e
                                            , r: 0
                                          }]
                                        }]
                                      }, {
                                        b: "(" + d
                                          .RSR +
                                          "|\\b(case|return|throw)\\b)\\s*"
                                        , k: "return throw case"
                                        , c: [d.CLCM,
                                        d
                                          .CBCM,
                                        d.RM,
                                        {
                                          cN: "function"
                                          , b: "(\\(.*?\\)|" +
                                            e +
                                            ")\\s*=>"
                                          , rB:
                                            !
                                            0
                                          , e: "\\s*=>"
                                          , c: [{
                                            cN: "params"
                                            , v: [{
                                              b: e
                                            }, {
                                              b: /\(\s*\)/
                                            }, {
                                              b: /\(/
                                              , e: /\)/
                                              , eB:
                                                !
                                                0
                                              , eE:
                                                !
                                                0
                                              , k: o
                                              , c: i
                                            }]
                                          }]
                                        }, {
                                          b: /</
                                          , e: /(\/\w+|\w+\/)>/
                                          , sL: "xml"
                                          , c: [{
                                            b: /<\w+\s*\/>/
                                            , skip:
                                              !
                                              0
                                          }, {
                                            b: /<\w+/
                                            , e: /(\/\w+|\w+\/)>/
                                            , skip:
                                              !
                                              0
                                            , c: [{
                                              b: /<\w+\s*\/>/
                                              , skip:
                                                !
                                                0
                                            }, "self"]
                                          }]
                                        }]
                                        , r: 0
                                      }, {
                                        cN: "function"
                                        , bK: "function"
                                        , e: /\{/
                                        , eE: !0
                                        , c: [d.inherit(
                                          d
                                            .TM,
                                          {
                                            b: e
                                          }
                                        ),
                                        {
                                          cN: "params"
                                          , b: /\(/
                                          , e: /\)/
                                          , eB:
                                            !
                                            0
                                          , eE:
                                            !
                                            0
                                          , c: i
                                        }]
                                        , i: /\[|%/
                                      }, {
                                        b: /\$[(.]/
                                      }, d.METHOD_GUARD, {
                                        cN: "class"
                                        , bK: "class"
                                        , e: /[{;=]/
                                        , eE: !0
                                        , i: /[:"\[\]]/
                                        , c: [{
                                          bK: "extends"
                                        }, d.UTM]
                                      }, {
                                        bK: "constructor"
                                        , e: /\{/
                                        , eE: !0
                                      }]
                                      , i: /#(?!!)/
                                    }
                                  }), g.registerLanguage("json",
                                    function (s) {
                                      var e = {
                                        literal: "true false null"
                                      }
                                        , d = [s.QSM, s.CNM]
                                        , o = {
                                          e: ","
                                          , eW: !0
                                          , eE: !0
                                          , c: d
                                          , k: e
                                        }
                                        , a = {
                                          b: "{"
                                          , e: "}"
                                          , c: [{
                                            cN: "attr"
                                            , b: /"/
                                            , e: /"/
                                            , c: [s
                                              .BE]
                                            , i: "\\n"
                                          }, s.inherit(o, {
                                            b: /:/
                                          })]
                                          , i: "\\S"
                                        }
                                        , n = {
                                          b: "\\["
                                          , e: "\\]"
                                          , c: [s.inherit(o)]
                                          , i: "\\S"
                                        };
                                      return d.splice(d.length, 0,
                                        a, n), {
                                        c: d
                                        , k: e
                                        , i: "\\S"
                                      }
                                    }), g.registerLanguage("makefile",
                                      function (d) {
                                        var e = {
                                          cN: "variable"
                                          , v: [{
                                            b: "\\$\\(" +
                                              d
                                                .UIR +
                                              "\\)"
                                            , c: [d
                                              .BE]
                                          }, {
                                            b: /\$[@%<?\^\+\*]/
                                          }]
                                        }
                                          , t = {
                                            cN: "string"
                                            , b: /"/
                                            , e: /"/
                                            , c: [d.BE, e]
                                          }
                                          , r = {
                                            cN: "variable"
                                            , b: /\$\([\w-]+\s/
                                            , e: /\)/
                                            , k: {
                                              built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
                                            }
                                            , c: [e]
                                          }
                                          , a = {
                                            b: "^" + d.UIR +
                                              "\\s*[:+?]?="
                                            , i: "\\n"
                                            , rB: !0
                                            , c: [{
                                              b: "^" + d
                                                .UIR
                                              , e: "[:+?]?="
                                              , eE: !0
                                            }]
                                          }
                                          , n = {
                                            cN: "meta"
                                            , b: /^\.PHONY:/
                                            , e: /$/
                                            , k: {
                                              "meta-keyword": ".PHONY"
                                            }
                                            , l: /[\.\w]+/
                                          }
                                          , i = {
                                            cN: "section"
                                            , b: /^[^\s]+:/
                                            , e: /$/
                                            , c: [e]
                                          };
                                        return {
                                          aliases: ["mk", "mak"]
                                          , k: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
                                          , l: /[\w-]+/
                                          , c: [d.HCM, e, t, r, a,
                                            n, i]
                                        }
                                      }), g.registerLanguage("xml",
                                        function (t) {
                                          var e = {
                                            eW: !0
                                            , i: /</
                                            , r: 0
                                            , c: [{
                                              cN: "attr"
                                              , b: "[A-Za-z0-9\\._:-]+"
                                              , r: 0
                                            }, {
                                              b: /=\s*/
                                              , r: 0
                                              , c: [{
                                                cN: "string"
                                                , endsParent:
                                                  !
                                                  0
                                                , v: [{
                                                  b: /"/
                                                  , e: /"/
                                                }, {
                                                  b: /'/
                                                  , e: /'/
                                                }, {
                                                  b: /[^\s"'=<>`]+/
                                                }]
                                              }]
                                            }]
                                          };
                                          return {
                                            aliases: ["html", "xhtml",
                                              "rss", "atom",
                                              "xjb", "xsd",
                                              "xsl", "plist"]
                                            , cI: !0
                                            , c: [{
                                              cN: "meta"
                                              , b: "<!DOCTYPE"
                                              , e: ">"
                                              , r: 10
                                              , c: [{
                                                b: "\\["
                                                , e: "\\]"
                                              }]
                                            }, t.C("<!--", "-->", {
                                              r: 10
                                            }), {
                                              b: "<\\!\\[CDATA\\["
                                              , e: "\\]\\]>"
                                              , r: 10
                                            }, {
                                              b: /<\?(php)?/
                                              , e: /\?>/
                                              , sL: "php"
                                              , c: [{
                                                b: "/\\*"
                                                , e: "\\*/"
                                                , skip:
                                                  !
                                                  0
                                              }]
                                            }, {
                                              cN: "tag"
                                              , b: "<style(?=\\s|>|$)"
                                              , e: ">"
                                              , k: {
                                                name: "style"
                                              }
                                              , c: [e]
                                              , starts: {
                                                e: "</style>"
                                                , rE: !0
                                                , sL: ["css",
                                                  "xml"
                                                ]
                                              }
                                            }, {
                                              cN: "tag"
                                              , b: "<script(?=\\s|>|$)"
                                              , e: ">"
                                              , k: {
                                                name: "script"
                                              }
                                              , c: [e]
                                              , starts: {
                                                e: "</script>"
                                                , rE: !0
                                                , sL: ["actionscript",
                                                  "javascript",
                                                  "handlebars",
                                                  "xml"
                                                ]
                                              }
                                            }, {
                                              cN: "meta"
                                              , v: [{
                                                b: /<\?xml/
                                                , e: /\?>/
                                                , r: 10
                                              }, {
                                                b: /<\?\w+/
                                                , e: /\?>/
                                              }]
                                            }, {
                                              cN: "tag"
                                              , b: "</?"
                                              , e: "/?>"
                                              , c: [{
                                                cN: "name"
                                                , b: /[^\/><\s]+/
                                                , r: 0
                                              }, e]
                                            }]
                                          }
                                        }), g.registerLanguage("markdown",
                                          function () {
                                            return {
                                              aliases: ["md", "mkdown",
                                                "mkd"]
                                              , c: [{
                                                cN: "section"
                                                , v: [{
                                                  b: "^#{1,6}"
                                                  , e: "$"
                                                }, {
                                                  b: "^.+?\\n[=-]{2,}$"
                                                }]
                                              }, {
                                                b: "<"
                                                , e: ">"
                                                , sL: "xml"
                                                , r: 0
                                              }, {
                                                cN: "bullet"
                                                , b: "^([*+-]|(\\d+\\.))\\s+"
                                              }, {
                                                cN: "strong"
                                                , b: "[*_]{2}.+?[*_]{2}"
                                              }, {
                                                cN: "emphasis"
                                                , v: [{
                                                  b: "\\*.+?\\*"
                                                }, {
                                                  b: "_.+?_"
                                                  , r: 0
                                                }]
                                              }, {
                                                cN: "quote"
                                                , b: "^>\\s+"
                                                , e: "$"
                                              }, {
                                                cN: "code"
                                                , v: [{
                                                  b: "^```w*s*$"
                                                  , e: "^```s*$"
                                                }, {
                                                  b: "`.+?`"
                                                }, {
                                                  b: "^( {4}|\t)"
                                                  , e: "$"
                                                  , r: 0
                                                }]
                                              }, {
                                                b: "^[-\\*]{3,}"
                                                , e: "$"
                                              }, {
                                                b: "\\[.+?\\][\\(\\[].*?[\\)\\]]"
                                                , rB: !0
                                                , c: [{
                                                  cN: "string"
                                                  , b: "\\["
                                                  , e: "\\]"
                                                  , eB:
                                                    !
                                                    0
                                                  , rE:
                                                    !
                                                    0
                                                  , r: 0
                                                }, {
                                                  cN: "link"
                                                  , b: "\\]\\("
                                                  , e: "\\)"
                                                  , eB:
                                                    !
                                                    0
                                                  , eE:
                                                    !
                                                    0
                                                }, {
                                                  cN: "symbol"
                                                  , b: "\\]\\["
                                                  , e: "\\]"
                                                  , eB:
                                                    !
                                                    0
                                                  , eE:
                                                    !
                                                    0
                                                }]
                                                , r: 10
                                              }, {
                                                b: /^\[[^\n]+\]:/
                                                , rB: !0
                                                , c: [{
                                                  cN: "symbol"
                                                  , b: /\[/
                                                  , e: /\]/
                                                  , eB:
                                                    !
                                                    0
                                                  , eE:
                                                    !
                                                    0
                                                }, {
                                                  cN: "link"
                                                  , b: /:\s*/
                                                  , e: /$/
                                                  , eB:
                                                    !
                                                    0
                                                }]
                                              }]
                                            }
                                          }), g.registerLanguage("nginx",
                                            function (n) {
                                              var e = {
                                                cN: "variable"
                                                , v: [{
                                                  b: /\$\d+/
                                                }, {
                                                  b: /\$\{/
                                                  , e: /}/
                                                }, {
                                                  b: "[\\$\\@]" +
                                                    n.UIR
                                                }]
                                              }
                                                , t = {
                                                  eW: !0
                                                  , l: "[a-z/_]+"
                                                  , k: {
                                                    literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
                                                  }
                                                  , r: 0
                                                  , i: "=>"
                                                  , c: [n.HCM, {
                                                    cN: "string"
                                                    , c: [n.BE,
                                                      e
                                                    ]
                                                    , v: [{
                                                      b: /"/
                                                      , e: /"/
                                                    }, {
                                                      b: /'/
                                                      , e: /'/
                                                    }]
                                                  }, {
                                                    b: "([a-z]+):/"
                                                    , e: "\\s"
                                                    , eW: !0
                                                    , eE: !0
                                                    , c: [e]
                                                  }, {
                                                    cN: "regexp"
                                                    , c: [n.BE,
                                                      e
                                                    ]
                                                    , v: [{
                                                      b: "\\s\\^"
                                                      , e: "\\s|{|;"
                                                      , rE:
                                                        !
                                                        0
                                                    }, {
                                                      b: "~\\*?\\s+"
                                                      , e: "\\s|{|;"
                                                      , rE:
                                                        !
                                                        0
                                                    }, {
                                                      b: "\\*(\\.[a-z\\-]+)+"
                                                    }, {
                                                      b: "([a-z\\-]+\\.)+\\*"
                                                    }]
                                                  }, {
                                                    cN: "number"
                                                    , b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
                                                  }, {
                                                    cN: "number"
                                                    , b: "\\b\\d+[kKmMgGdshdwy]*\\b"
                                                    , r: 0
                                                  }, e]
                                                };
                                              return {
                                                aliases: ["nginxconf"]
                                                , c: [n.HCM, {
                                                  b: n.UIR +
                                                    "\\s+{"
                                                  , rB: !0
                                                  , e: "{"
                                                  , c: [{
                                                    cN: "section"
                                                    , b: n
                                                      .UIR
                                                  }]
                                                  , r: 0
                                                }, {
                                                  b: n.UIR +
                                                    "\\s"
                                                  , e: ";|{"
                                                  , rB: !0
                                                  , c: [{
                                                    cN: "attribute"
                                                    , b: n
                                                      .UIR
                                                    , starts: t
                                                  }]
                                                  , r: 0
                                                }]
                                                , i: "[^\\s\\}]"
                                              }
                                            }), g.registerLanguage(
                                              "objectivec"
                                              , function (t) {
                                                var e =
                                                  /[a-zA-Z@][a-zA-Z0-9_]*/
                                                  , i =
                                                    "@interface @class @protocol @implementation";
                                                return {
                                                  aliases: ["mm", "objc",
                                                    "obj-c"]
                                                  , k: {
                                                    keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN"
                                                    , literal: "false true FALSE TRUE nil YES NO NULL"
                                                    , built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
                                                  }
                                                  , l: e
                                                  , i: "</"
                                                  , c: [{
                                                    cN: "built_in"
                                                    , b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
                                                  }, t.CLCM, t.CBCM, t.CNM, t.QSM, {
                                                    cN: "string"
                                                    , v: [{
                                                      b: "@\""
                                                      , e: "\""
                                                      , i: "\\n"
                                                      , c: [t
                                                        .BE]
                                                    }, {
                                                      b: "'"
                                                      , e: "[^\\\\]'"
                                                      , i: "[^\\\\][^']"
                                                    }]
                                                  }, {
                                                    cN: "meta"
                                                    , b: "#"
                                                    , e: "$"
                                                    , c: [{
                                                      cN: "meta-string"
                                                      , v: [{
                                                        b: "\""
                                                        , e: "\""
                                                      }, {
                                                        b: "<"
                                                        , e: ">"
                                                      }]
                                                    }]
                                                  }, {
                                                    cN: "class"
                                                    , b: "(" + i
                                                      .split(
                                                        " ")
                                                      .join(
                                                        "|") +
                                                      ")\\b"
                                                    , e: "({|$)"
                                                    , eE: !0
                                                    , k: i
                                                    , l: e
                                                    , c: [t.UTM]
                                                  }, {
                                                    b: "\\." + t
                                                      .UIR
                                                    , r: 0
                                                  }]
                                                }
                                              }), g.registerLanguage("perl",
                                                function (d) {
                                                  var e =
                                                    "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"
                                                    , o = {
                                                      cN: "subst"
                                                      , b: "[$@]\\{"
                                                      , e: "\\}"
                                                      , k: e
                                                    }
                                                    , r = {
                                                      b: "->{"
                                                      , e: "}"
                                                    }
                                                    , a = {
                                                      v: [{
                                                        b: /\$\d/
                                                      }, {
                                                        b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
                                                      }, {
                                                        b: /[\$%@][^\s\w{]/
                                                        , r: 0
                                                      }]
                                                    }
                                                    , n = [d.BE, o, a]
                                                    , l = [a, d.HCM, d.C(
                                                      "^\\=\\w",
                                                      "\\=cut", {
                                                      eW: !0
                                                    }), r, {
                                                        cN: "string"
                                                        , c: n
                                                        , v: [{
                                                          b: "q[qwxr]?\\s*\\("
                                                          , e: "\\)"
                                                          , r: 5
                                                        }, {
                                                          b: "q[qwxr]?\\s*\\["
                                                          , e: "\\]"
                                                          , r: 5
                                                        }, {
                                                          b: "q[qwxr]?\\s*\\{"
                                                          , e: "\\}"
                                                          , r: 5
                                                        }, {
                                                          b: "q[qwxr]?\\s*\\|"
                                                          , e: "\\|"
                                                          , r: 5
                                                        }, {
                                                          b: "q[qwxr]?\\s*\\<"
                                                          , e: "\\>"
                                                          , r: 5
                                                        }, {
                                                          b: "qw\\s+q"
                                                          , e: "q"
                                                          , r: 5
                                                        }, {
                                                          b: "'"
                                                          , e: "'"
                                                          , c: [d
                                                            .BE]
                                                        }, {
                                                          b: "\""
                                                          , e: "\""
                                                        }, {
                                                          b: "`"
                                                          , e: "`"
                                                          , c: [d
                                                            .BE]
                                                        }, {
                                                          b: "{\\w+}"
                                                          , c: []
                                                          , r: 0
                                                        }, {
                                                          b: "-?\\w+\\s*\\=\\>"
                                                          , c: []
                                                          , r: 0
                                                        }]
                                                      }, {
                                                        cN: "number"
                                                        , b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b"
                                                        , r: 0
                                                      }, {
                                                        b: "(\\/\\/|" + d
                                                          .RSR +
                                                          "|\\b(split|return|print|reverse|grep)\\b)\\s*"
                                                        , k: "split return print reverse grep"
                                                        , r: 0
                                                        , c: [d.HCM, {
                                                          cN: "regexp"
                                                          , b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*"
                                                          , r: 10
                                                        }, {
                                                          cN: "regexp"
                                                          , b: "(m|qr)?/"
                                                          , e: "/[a-z]*"
                                                          , c: [d
                                                            .BE]
                                                          , r: 0
                                                        }]
                                                      }, {
                                                        cN: "function"
                                                        , bK: "sub"
                                                        , e: "(\\s*\\(.*?\\))?[;{]"
                                                        , eE: !0
                                                        , r: 5
                                                        , c: [d.TM]
                                                      }, {
                                                        b: "-\\w\\b"
                                                        , r: 0
                                                      }, {
                                                        b: "^__DATA__$"
                                                        , e: "^__END__$"
                                                        , sL: "mojolicious"
                                                        , c: [{
                                                          b: "^@@.*"
                                                          , e: "$"
                                                          , cN: "comment"
                                                        }]
                                                      }];
                                                  return o.c = l, r.c = l, {
                                                    aliases: ["pl", "pm"]
                                                    , l: /[\w\.]+/
                                                    , k: e
                                                    , c: l
                                                  }
                                                }), g.registerLanguage("php",
                                                  function (i) {
                                                    var e = {
                                                      b: "\\$+[a-zA-Z_\x7F-\xFF][a-zA-Z0-9_\x7F-\xFF]*"
                                                    }
                                                      , t = {
                                                        cN: "meta"
                                                        , b: /<\?(php)?|\?>/
                                                      }
                                                      , r = {
                                                        cN: "string"
                                                        , c: [i.BE, t]
                                                        , v: [{
                                                          b: "b\""
                                                          , e: "\""
                                                        }, {
                                                          b: "b'"
                                                          , e: "'"
                                                        }, i.inherit(i.ASM, {
                                                          i: null
                                                        }), i.inherit(
                                                          i.QSM, {
                                                          i: null
                                                        })]
                                                      }
                                                      , a = {
                                                        v: [i.BNM, i.CNM]
                                                      };
                                                    return {
                                                      aliases: ["php3", "php4",
                                                        "php5", "php6"]
                                                      , cI: !0
                                                      , k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally"
                                                      , c: [i.HCM, i.C("//",
                                                        "$", {
                                                        c: [t]
                                                      }), i.C(
                                                        "/\\*",
                                                        "\\*/", {
                                                        c: [{
                                                          cN: "doctag"
                                                          , b: "@[A-Za-z]+"
                                                        }]
                                                      }), i.C(
                                                        "__halt_compiler.+?;",
                                                        !1, {
                                                        eW: !0
                                                        , k: "__halt_compiler"
                                                        , l: i.UIR
                                                      }), {
                                                        cN: "string"
                                                        , b: /<<<['"]?\w+['"]?$/
                                                        , e: /^\w+;?$/
                                                        , c: [i.BE, {
                                                          cN: "subst"
                                                          , v: [{
                                                            b: /\$\w+/
                                                          }, {
                                                            b: /\{\$/
                                                            , e: /\}/
                                                          }]
                                                        }]
                                                      }, t, {
                                                        cN: "keyword"
                                                        , b: /\$this\b/
                                                      }, e, {
                                                        b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
                                                      }, {
                                                        cN: "function"
                                                        , bK: "function"
                                                        , e: /[;{]/
                                                        , eE: !0
                                                        , i: "\\$|\\[|%"
                                                        , c: [i.UTM, {
                                                          cN: "params"
                                                          , b: "\\("
                                                          , e: "\\)"
                                                          , c: ["self",
                                                            e,
                                                            i
                                                              .CBCM,
                                                            r,
                                                            a
                                                          ]
                                                        }]
                                                      }, {
                                                        cN: "class"
                                                        , bK: "class interface"
                                                        , e: "{"
                                                        , eE: !0
                                                        , i: /[:\(\$"]/
                                                        , c: [{
                                                          bK: "extends implements"
                                                        }, i.UTM]
                                                      }, {
                                                        bK: "namespace"
                                                        , e: ";"
                                                        , i: /[\.']/
                                                        , c: [i.UTM]
                                                      }, {
                                                        bK: "use"
                                                        , e: ";"
                                                        , c: [i.UTM]
                                                      }, {
                                                        b: "=>"
                                                      }, r, a]
                                                    }
                                                  }), g.registerLanguage("python",
                                                    function (d) {
                                                      var e = {
                                                        keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False"
                                                        , built_in: "Ellipsis NotImplemented"
                                                      }
                                                        , o = {
                                                          cN: "meta"
                                                          , b: /^(>>>|\.\.\.) /
                                                        }
                                                        , r = {
                                                          cN: "subst"
                                                          , b: /\{/
                                                          , e: /\}/
                                                          , k: e
                                                          , i: /#/
                                                        }
                                                        , a = {
                                                          cN: "string"
                                                          , c: [d.BE]
                                                          , v: [{
                                                            b: /(u|b)?r?'''/
                                                            , e: /'''/
                                                            , c: [o]
                                                            , r: 10
                                                          }, {
                                                            b: /(u|b)?r?"""/
                                                            , e: /"""/
                                                            , c: [o]
                                                            , r: 10
                                                          }, {
                                                            b: /(fr|rf|f)'''/
                                                            , e: /'''/
                                                            , c: [o,
                                                              r]
                                                          }, {
                                                            b: /(fr|rf|f)"""/
                                                            , e: /"""/
                                                            , c: [o,
                                                              r]
                                                          }, {
                                                            b: /(u|r|ur)'/
                                                            , e: /'/
                                                            , r: 10
                                                          }, {
                                                            b: /(u|r|ur)"/
                                                            , e: /"/
                                                            , r: 10
                                                          }, {
                                                            b: /(b|br)'/
                                                            , e: /'/
                                                          }, {
                                                            b: /(b|br)"/
                                                            , e: /"/
                                                          }, {
                                                            b: /(fr|rf|f)'/
                                                            , e: /'/
                                                            , c: [r]
                                                          }, {
                                                            b: /(fr|rf|f)"/
                                                            , e: /"/
                                                            , c: [r]
                                                          }, d.ASM, d.QSM]
                                                        }
                                                        , n = {
                                                          cN: "number"
                                                          , r: 0
                                                          , v: [{
                                                            b: d.BNR +
                                                              "[lLjJ]?"
                                                          }, {
                                                            b: "\\b(0o[0-7]+)[lLjJ]?"
                                                          }, {
                                                            b: d.CNR +
                                                              "[lLjJ]?"
                                                          }]
                                                        }
                                                        , i = {
                                                          cN: "params"
                                                          , b: /\(/
                                                          , e: /\)/
                                                          , c: ["self", o, n, a]
                                                        };
                                                      return r.c = [a, n, o], {
                                                        aliases: ["py",
                                                          "gyp"]
                                                        , k: e
                                                        , i: /(<\/|->|\?)|=>/
                                                        , c: [o, n, a, d.HCM,
                                                          {
                                                            v: [{
                                                              cN: "function"
                                                              , bK: "def"
                                                            }, {
                                                              cN: "class"
                                                              , bK: "class"
                                                            }]
                                                            , e: /:/
                                                            , i: /[${=;\n,]/
                                                            , c: [d.UTM,
                                                              i,
                                                            {
                                                              b: /->/
                                                              , eW:
                                                                !
                                                                0
                                                              , k: "None"
                                                            }]
                                                          }, {
                                                            cN: "meta"
                                                            , b: /^[\t ]*@/
                                                            , e: /$/
                                                          }, {
                                                            b: /\b(print|exec)\(/
                                                          }]
                                                      }
                                                    }), g.registerLanguage("ruby",
                                                      function (d) {
                                                        var e =
                                                          "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
                                                          , u = {
                                                            keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor"
                                                            , literal: "true false nil"
                                                          }
                                                          , f = {
                                                            cN: "doctag"
                                                            , b: "@[A-Za-z]+"
                                                          }
                                                          , a = {
                                                            b: "#<"
                                                            , e: ">"
                                                          }
                                                          , n = [d.C("#", "$", {
                                                            c: [f]
                                                          }), d.C("^\\=begin",
                                                            "^\\=end", {
                                                            c: [f]
                                                            , r: 10
                                                          }), d.C(
                                                            "^__END__", "\\n$"
                                                          )]
                                                          , i = {
                                                            cN: "subst"
                                                            , b: "#\\{"
                                                            , e: "}"
                                                            , k: u
                                                          }
                                                          , s = {
                                                            cN: "string"
                                                            , c: [d.BE, i]
                                                            , v: [{
                                                              b: /'/
                                                              , e: /'/
                                                            }, {
                                                              b: /"/
                                                              , e: /"/
                                                            }, {
                                                              b: /`/
                                                              , e: /`/
                                                            }, {
                                                              b: "%[qQwWx]?\\("
                                                              , e: "\\)"
                                                            }, {
                                                              b: "%[qQwWx]?\\["
                                                              , e: "\\]"
                                                            }, {
                                                              b: "%[qQwWx]?{"
                                                              , e: "}"
                                                            }, {
                                                              b: "%[qQwWx]?<"
                                                              , e: ">"
                                                            }, {
                                                              b: "%[qQwWx]?/"
                                                              , e: "/"
                                                            }, {
                                                              b: "%[qQwWx]?%"
                                                              , e: "%"
                                                            }, {
                                                              b: "%[qQwWx]?-"
                                                              , e: "-"
                                                            }, {
                                                              b: "%[qQwWx]?\\|"
                                                              , e: "\\|"
                                                            }, {
                                                              b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
                                                            }, {
                                                              b: /<<(-?)\w+$/
                                                              , e: /^\s*\w+$/
                                                            }]
                                                          }
                                                          , c = {
                                                            cN: "params"
                                                            , b: "\\("
                                                            , e: "\\)"
                                                            , endsParent: !0
                                                            , k: u
                                                          }
                                                          , o = [s, a, {
                                                            cN: "class"
                                                            , bK: "class module"
                                                            , e: "$|;"
                                                            , i: /=/
                                                            , c: [d.inherit(d
                                                              .TM, {
                                                              b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
                                                            }), {
                                                              b: "<\\s*"
                                                              , c: [{
                                                                b: "(" +
                                                                  d
                                                                    .IR +
                                                                  "::)?" +
                                                                  d
                                                                    .IR
                                                              }]
                                                            }].concat(n)
                                                          }, {
                                                              cN: "function"
                                                              , bK: "def"
                                                              , e: "$|;"
                                                              , c: [d.inherit(d
                                                                .TM, {
                                                                b: e
                                                              }), c]
                                                                .concat(n)
                                                            }, {
                                                              b: d.IR + "::"
                                                            }, {
                                                              cN: "symbol"
                                                              , b: d.UIR +
                                                                "(\\!|\\?)?:"
                                                              , r: 0
                                                            }, {
                                                              cN: "symbol"
                                                              , b: ":(?!\\s)"
                                                              , c: [s, {
                                                                b: e
                                                              }]
                                                              , r: 0
                                                            }, {
                                                              cN: "number"
                                                              , b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b"
                                                              , r: 0
                                                            }, {
                                                              b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
                                                            }, {
                                                              cN: "params"
                                                              , b: /\|/
                                                              , e: /\|/
                                                              , k: u
                                                            }, {
                                                              b: "(" + d.RSR +
                                                                "|unless)\\s*"
                                                              , k: "unless"
                                                              , c: [a, {
                                                                cN: "regexp"
                                                                , c: [d.BE,
                                                                  i
                                                                ]
                                                                , i: /\n/
                                                                , v: [{
                                                                  b: "/"
                                                                  , e: "/[a-z]*"
                                                                }, {
                                                                  b: "%r{"
                                                                  , e: "}[a-z]*"
                                                                }, {
                                                                  b: "%r\\("
                                                                  , e: "\\)[a-z]*"
                                                                }, {
                                                                  b: "%r!"
                                                                  , e: "![a-z]*"
                                                                }, {
                                                                  b: "%r\\["
                                                                  , e: "\\][a-z]*"
                                                                }]
                                                              }].concat(n)
                                                              , r: 0
                                                            }].concat(n);
                                                        i.c = o, c.c = o;
                                                        var b = [{
                                                          b: /^\s*=>/
                                                          , starts: {
                                                            e: "$"
                                                            , c: o
                                                          }
                                                        }, {
                                                          cN: "meta"
                                                          , b: "^(" +
                                                            "[>?]>" +
                                                            "|" +
                                                            "[\\w#]+\\(\\w+\\):\\d+:\\d+>" +
                                                            "|" +
                                                            "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>" +
                                                            ")"
                                                          , starts: {
                                                            e: "$"
                                                            , c: o
                                                          }
                                                        }];
                                                        return {
                                                          aliases: ["rb", "gemspec",
                                                            "podspec", "thor",
                                                            "irb"]
                                                          , k: u
                                                          , i: /\/\*/
                                                          , c: n.concat(b)
                                                            .concat(o)
                                                        }
                                                      }), g.registerLanguage("shell",
                                                        function () {
                                                          return {
                                                            aliases: ["console"]
                                                            , c: [{
                                                              cN: "meta"
                                                              , b: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]"
                                                              , starts: {
                                                                e: "$"
                                                                , sL: "bash"
                                                              }
                                                            }]
                                                          }
                                                        }), g.registerLanguage("sql",
                                                          function (n) {
                                                            var e = n.C("--", "$");
                                                            return {
                                                              cI: !0
                                                              , i: /[<>{}*#]/
                                                              , c: [{
                                                                bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment"
                                                                , e: /;/
                                                                , eW: !0
                                                                , l: /[\w\.]+/
                                                                , k: {
                                                                  keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek"
                                                                  , literal: "true false null"
                                                                  , built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
                                                                }
                                                                , c: [{
                                                                  cN: "string"
                                                                  , b: "'"
                                                                  , e: "'"
                                                                  , c: [n.BE,
                                                                  {
                                                                    b: "''"
                                                                  }]
                                                                }, {
                                                                  cN: "string"
                                                                  , b: "\""
                                                                  , e: "\""
                                                                  , c: [n.BE,
                                                                  {
                                                                    b: "\"\""
                                                                  }]
                                                                }, {
                                                                  cN: "string"
                                                                  , b: "`"
                                                                  , e: "`"
                                                                  , c: [n
                                                                    .BE]
                                                                }, n.CNM, n.CBCM, e]
                                                              }, n.CBCM, e]
                                                            }
                                                          }), g
    })
  }, {}]
  , 3: [function (e, t) {
    const n = e("gza")
      , i = e("marked")
      , r = e("loadcss")
      , a = e("./highlight.min.js");
    i.setOptions({
      highlight: (e) => a.highlightAuto(e)
        .value
    });
    r(
      "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/styles/default.min.css");
    const s = (e) => {
      let t = e.split("\n")
        , n = 0;
      t[n].length || (n += 1);
      let i = t[n];
      for (n = 0; n < i.length && " " === i[n];)
        n++;
      return t.map((e) => {
        let t = 0;
        for (; t < n && t < e
          .length && " " === e[t];)
          t++;
        return e.slice(t)
      })
        .join("\n")
    }
      , d =
        `https://cdn.jsdelivr.net/npm/highlight.js@latest/styles/`;
    t.exports = n`
<mark-down ${{ noGFM: !1, noTables: !1, breaks: !1, pedantic: !1, noHighlight: !1, noSanitize: !1, noSmartLists: !1, smartypants: !1, loadcss: "default.css" }}>
  ${(e, t) => { r(d + e.loadcss); let n = { gfm: !e.noGFM, tables: !e.noTables, breaks: e.breaks, pedantic: e.pedantic, highlight: !e.noHighlight, sanitize: !e.noSanitize, smartLists: !e.noSmartLists, smartypants: e.smartyPants }; return n.highlight && delete n.highlight, t.length ? i(s(t), n) : "" }}
</mark-down>
`
  }, {
    "./highlight.min.js": 2
    , gza: 6
    , loadcss: 9
    , marked: 10
  }]
  , 4: [function (e, t) {
    t.exports = function (e) {
      n.push(e), 0 == i && (i = setTimeout(r,
        0))
    };
    var n = []
      , i = 0
      , r = function () {
        var e = -1
          , t = n.length
          , r = n;
        for (n = [], i = 0; ++e < t;) r[e]()
      }
  }, {}]
  , 5: [function (e, t, n) {
    n.loadjs = e("load-js")
  }, {
    "load-js": 8
  }]
  , 6: [function (e, t) {
    const n = e("rza")
      , i = e("./lib/parser")
      , a = () => Math.random()
        .toString(36)
        .substring(7)
      , r = async (e, t, n, i) => {
        let r = t.map((e) => {
          if ("string" == typeof e)
            return e;
          if ("function" ==
            typeof e) return e(n,
              i);
          if (
            e instanceof HTMLElement)
            return e;
          throw new Error(
            `Unknown type in template: ${e}`
          )
        })
          , s = await Promise.all(r)
          , d = {}
          , o = s.map((e) => {
            if ("string" == typeof e)
              return e;
            if ("undefined" ==
              typeof e) return "";
            if ("number" == typeof e)
              return e.toString();
            if ("boolean" == typeof e)
              return e.toString();
            if (null === e) return "";
            if (
              e instanceof HTMLElement) {
              let t = a();
              return d[t] = e,
                `<span rza="${t}"></span>`
            }
            throw new Error(
              `Unknown type in template return: ${typeof e}.`
            )
          });
        for (let r in e.innerHTML = o.join(
          ""), d) {
          let t = e.querySelector(
            `span[rza="${r}"`)
            , n = d[r];
          n.parentNode && n.parentNode
            .removeChild(n), t.parentNode
              .replaceChild(n, t)
        }
      }, s = (e) => e.replace(/\n/g, "")
        .replace(/ /g, "");
    t.exports = (e, ...t) => {
      let a = i(e, t);
      class d extends n {
        async render(e, t) {
          this._constructed || (this
            ._constructed = !0,
            await Promise.all(a
              .constructors.map(
                (e) => e(this)
              )), this
                ._rerender = !1, e =
            Object.assign({}, this
              ._settings));
          let n = this.renderElement;
          return await r(n, a.template,
            e, t), a.shadow
              .filter((e) =>
                "function" == typeof e
              )
              .length && (await r(this
                .shadowRoot, a
                .shadow, e, t)), n
        }
        get defaults() {
          return a.defaults
        }
        get shadow() {
          return a.shadow.filter((e) =>
            "function" == typeof e
          )
            .length ?
            "<style>:host {margin: 0 0 0 0; padding: 0 0 0 0;}</style>" :
            1 < s(a.shadow.join(""))
              .length ? a.shadow.join(
                "") : super.shadow
        }
      }
      let o = a.tagName.split("-")
        .map((e) => e[0].toUpperCase() + e
          .slice(1))
        .join("");
      return Object.defineProperty(d, "name", {
        value: o
      }), window.customElements.define(a
        .tagName, d), d
    }
  }, {
    "./lib/parser": 7
    , rza: 11
  }]
  , 7: [function (e, t) {
    const n = (e) => e.replace(/ /g, "")
      , r = (e, t) => {
        for (let r = e.indexOf("<"); - 1 !== r;) {
          let i = n(e.slice(r, e.indexOf(">",
            r)));
          if (`</${t}` === i) return r;
          r = e.indexOf("<", r + 1)
        }
        throw new Error(
          `Cannot find close position for tagName: ${t}`
        )
      };
    t.exports = (e, t) => {
      let a = e.join("")
        , s = a.indexOf("<")
        , d = a.indexOf(">")
        , o = n(a.slice(s + 1, d))
        , l = r(a, o)
        , c = a.indexOf(">", l + 1) + 1
        , u = {}
        , p = []
        , f = []
        , b = []
        , g = 0;
      for (let n = 0; n < t.length; n++) g += e[
        n].length, g <= s ? p.push(t[n]) :
          g <= d ? u = t[n] : g <= c ? f.push([
            g, t[n]]) : b.push([g, t[n]]);
      let m = []
        , h = []
        , _ = d + 1;
      for (; f.length;) {
        let [e, t] = f.shift();
        m.push(a.slice(_, e)), m.push(t), _ =
          e
      }
      for (m.push(a.slice(_, l)), _ = c; b
        .length;) {
        let [e, t] = b.shift();
        h.push(a.slice(_, e)), h.push(t), _ =
          e
      }
      return h.push(a.slice(_)), {
        constructors: p
        , tagName: o
        , defaults: u
        , template: m
        , shadow: h
      }
    }
  }, {}]
  , 8: [function (e, t, n) {
    (function (i, r) {
      "function" == typeof e && "object" ==
        typeof n && "object" == typeof t ? t
          .exports = r() : "function" ==
            typeof define && define.amd ? define([
              "loadJS"], r) : i.loadJS = r()
    })(this, function () {
      function e(e) {
        "string" == typeof e && (e = {
          url: e
        });
        var o = e.id || e.url
          , l = s[o];
        if (l) return console.log(
          "load-js: cache hit", o),
          l;
        if (!1 !== e.allowExternal) {
          var c = r(e.id) || a(e.url);
          if (c) {
            var u = Promise.resolve(c);
            return o && (s[o] = u), u
          }
        }
        if (!e.url && !e.text)
          throw new Error(
            "load-js: must provide a url or text to load"
          );
        var p = (e.url ? n : t)(d, i(e));
        return o && !1 !== e.cache && (s[o] =
          p), p
      }

      function t(e, t) {
        return e.appendChild(t), Promise
          .resolve(t)
      }

      function n(e, t) {
        return new Promise(function (n, i) {
          var r = !1;
          t.onload = t
            .onreadystatechange =
            function () {
              r || t
                .readyState &&
                "loaded" !== t
                  .readyState &&
                "complete" !==
                t
                  .readyState ||
                (r = !0, t
                  .onload =
                  t
                    .onreadystatechange =
                  null, n(t)
                )
            }, t.onerror = i, e
              .appendChild(t)
        })
      }

      function i(e) {
        var t = document.createElement(
          "script");
        return t.charset = e.charset ||
          "utf-8", t.type = e.type ||
          "text/javascript", t.async = !!e
            .async, t.id = e.id || e.url, t
              .loadJS = "watermark", e.url && (t
                .src = e.url), e.text && (t
                  .text = e.text), t
      }

      function r(e) {
        var t = e && document.getElementById(
          e);
        if (t && "watermark" !== t.loadJS)
          return console.warn(
            "load-js: duplicate script with id:",
            e), t
      }

      function a(e) {
        var t = e && document.querySelector(
          "script[src='" + e + "']");
        if (t && "watermark" !== t.loadJS)
          return console.warn(
            "load-js: duplicate script with url:",
            e), t
      }
      var s = {}
        , d = document.getElementsByTagName(
          "head")[0] || document
            .documentElement;
      return function (t) {
        return t instanceof Array ?
          Promise.all(t.map(e)) : e(t)
      }
    })
  }, {}]
  , 9: [function (e, t) {
    var n = e("callasync");
    t.exports = function (e, t) {
      function i(e) {
        return d.body ? e() : void n(
          function () {
            i(e)
          })
      }

      function r() {
        for (var e = 0, t = -1, i = p
          .length; ++t < i;)
          if (a(p[t].href) && ++e === i)
            return u(p);
        n(r)
      }

      function a(e) {
        for (var t = -1, n = o.length; ++t <
          n;)
          if (null !== o[t].href && 0 !== o[
            t].href.length && o[t]
              .href === e) return !0
      }
      t || (t = {}), "[object Function]" === {}
        .toString.call(t) && (t = {
          complete: t
        });
      var s, d = document
        , o = d.styleSheets
        , l = "[object Array]" === {}.toString
          .call(e) ? e : [e]
        , c = t.media ? t.media : "all"
        , u = t.complete || function () { }
        , p = [];
      if (t.before) s = t.before;
      else {
        var f = (d.body || d
          .getElementsByTagName("head")[
          0])
          .childNodes;
        s = f[f.length - 1]
      }
      return i(function () {
        for (var e = -1, i = l.length,
          a = t.before ? s : s
            .nextSibling; ++e <
          i;) p[e] = d
            .createElement("link"), p[
              e].rel = "stylesheet",
            p[e].href = l[e], p[e]
              .media = c, s.parentNode
                .insertBefore(p[e], a);
        n(r)
      }), p
    }
  }, {
    callasync: 4
  }]
  , 10: [function (e, t, n) {
    (function (e) {
      (function () {
        function e(e) {
          this.tokens = [], this.tokens
            .links = {}, this
              .options = e || u
                .defaults, this.rules = p
                  .normal, this.options
                    .gfm && (this.options
                      .tables ? this.rules =
                    p.tables : this
                      .rules = p.gfm)
        }

        function i(e, t) {
          if (this.options = t || u
            .defaults, this.links = e,
            this.rules = f.normal,
            this.renderer = this
              .options.renderer ||
            new r, this.renderer
              .options = this.options, !
            this.links)
            throw new Error(
              "Tokens array requires a `links` property."
            );
          this.options.gfm ? this
            .options.breaks ? this
              .rules = f.breaks : this
                .rules = f.gfm : this
                  .options.pedantic && (this
                    .rules = f.pedantic)
        }

        function r(e) {
          this.options = e || {}
        }

        function a(e) {
          this.tokens = [], this.token =
            null, this.options = e ||
            u.defaults, this.options
              .renderer = this.options
                .renderer || new r, this
                  .renderer = this.options
              .renderer, this.renderer
                .options = this.options
        }

        function s(e, t) {
          return e.replace(t ? /&/g :
            /&(?!#?\w+;)/g,
            "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
        }

        function d(e) {
          return e.replace(
            /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g
            , function (e, t) {
              var n = String
                .fromCharCode;
              return t = t
                .toLowerCase(),
                "colon" ===
                  t ? ":" :
                  "#" === t
                    .charAt(0) ?
                    "x" === t
                      .charAt(1) ?
                      n(parseInt(t
                        .substring(
                          2
                        ),
                        16)) : n(+
                          t
                            .substring(
                              1)) :
                    ""
            })
        }

        function o(e, t) {
          return e = e.source, t = t ||
            ""
            , function n(i, r) {
              return i ? (r = r
                .source || r,
                r = r.replace(
                  /(^|[^\[])\^/g,
                  "$1"), e =
                e.replace(i,
                  r), n) :
                new RegExp(e, t)
            }
        }

        function l() { }

        function c(e) {
          for (var t, n, r = 1; r <
            arguments.length; r++)
            for (n in t = arguments[
              r], t) Object
                .prototype
                .hasOwnProperty.call(
                  t, n) && (e[n] =
                    t[n]);
          return e
        }

        function u(t, n, r) {
          if (r || "function" ==
            typeof n) {
            r || (r = n, n = null),
              n = c({}, u.defaults,
                n || {});
            var d, o, l = n.highlight
              , p = 0;
            try {
              d = e.lex(t, n)
            } catch (t) {
              return r(t)
            }
            o = d.length;
            var i = function (t) {
              if (t) return n
                .highlight =
                l, r(t);
              var e;
              try {
                e = a.parse(d,
                  n)
              } catch (n) {
                t = n
              }
              return n
                .highlight =
                l, t ? r(t) :
                  r(null, e)
            };
            if (!l || 3 > l.length)
              return i();
            if (delete n.highlight, !
              o) return i();
            for (; p < d.length; p++)(
              function (e) {
                return "code" ===
                  e.type ?
                  l(e.text,
                    e
                      .lang
                    , function (
                      t,
                      n
                    ) {
                      return t ?
                        i(
                          t) :
                        null ==
                          n ||
                          n ===
                          e
                            .text ?
                          --
                          o ||
                          i() :
                          void (
                            e
                              .text =
                            n,
                            e
                              .escaped = !
                            0,
                            --
                            o ||
                            i()
                          )
                    }) :
                  --o || i()
              })(d[p]);
            return
          }
          try {
            return n && (n = c({}, u
              .defaults, n)), a
                .parse(e.lex(t, n), n)
          } catch (t) {
            if (t.message +=
              "\nPlease report this to https://github.com/chjj/marked.",
              (n || u.defaults)
                .silent)
              return "<p>An error occured:</p><pre>" +
                s(t.message + "",
                  !0) + "</pre>";
            throw t
          }
        }
        var p = {
          newline: /^\n+/
          , code: /^( {4}[^\n]+\n*)+/
          , fences: l
          , hr: /^( *[-*_]){3,} *(?:\n+|$)/
          , heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/
          , nptable: l
          , lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/
          , blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/
          , list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/
          , html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/
          , def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/
          , table: l
          , paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/
          , text: /^[^\n]+/
        };
        p.bullet = /(?:[*+-]|\d+\.)/, p
          .item =
          /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,
          p.item = o(p.item, "gm")(
            /bull/g, p.bullet)(), p
              .list = o(p.list)(/bull/g, p
                .bullet)("hr",
                  "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))"
                )("def", "\\n+(?=" + p.def
                  .source + ")")(), p
                    .blockquote = o(p.blockquote)(
                      "def", p.def)(), p._tag =
          "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",
          p.html = o(p.html)("comment",
            /<!--[\s\S]*?-->/)(
              "closed",
              /<(tag)[\s\S]+?<\/\1>/)(
                "closing",
                /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/
              )(/tag/g, p._tag)(), p
                .paragraph = o(p.paragraph)(
                  "hr", p.hr)("heading", p
                    .heading)("lheading", p
                      .lheading)("blockquote", p
                        .blockquote)("tag", "<" +
                          p._tag)("def", p.def)(), p
                            .normal = c({}, p), p.gfm =
          c({}, p.normal, {
            fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/
            , paragraph: /^/
            , heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
          }), p.gfm.paragraph = o(p
            .paragraph)("(?!", "(?!" +
              p.gfm.fences.source
                .replace("\\1", "\\2") +
              "|" + p.list.source
                .replace("\\1", "\\3") +
              "|")(), p.tables = c({}, p
                .gfm, {
                nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
                , table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
              }), e.rules = p, e.lex =
          function (t, n) {
            var i = new e(n);
            return i.lex(t)
          }, e.prototype.lex =
          function (e) {
            return e = e.replace(
              /\r\n|\r/g, "\n")
              .replace(/\t/g,
                "    ")
              .replace(/\u00a0/g,
                " ")
              .replace(/\u2424/g,
                "\n"), this.token(
                  e, !0)
          }, e.prototype.token =
          function (e, t, n) {
            for (var r, a, s, d, o, c,
              u, f, i, e = e
                .replace(/^ +$/gm,
                  ""); e;) {
              if ((s = this.rules
                .newline.exec(
                  e)) && (
                  e = e
                    .substring(s[
                      0]
                      .length),
                  1 < s[0]
                    .length &&
                  this.tokens
                    .push({
                      type: "space"
                    })), s = this
                      .rules.code.exec(
                        e)) {
                e = e.substring(s[
                  0]
                  .length),
                  s = s[0]
                    .replace(
                      /^ {4}/gm,
                      ""), this
                        .tokens.push({
                          type: "code"
                          , text: this
                            .options
                            .pedantic ?
                            s :
                            s
                              .replace(
                                /\n+$/,
                                ""
                              )
                        });
                continue
              }
              if (s = this.rules
                .fences.exec(e)) {
                e = e.substring(s[
                  0]
                  .length),
                  this.tokens
                    .push({
                      type: "code"
                      , lang: s[
                        2
                      ]
                      , text: s[
                        3
                      ] ||
                        ""
                    });
                continue
              }
              if (s = this.rules
                .heading.exec(e)
              ) {
                e = e.substring(s[
                  0]
                  .length),
                  this.tokens
                    .push({
                      type: "heading"
                      , depth: s[
                        1
                      ]
                        .length
                      , text: s[
                        2
                      ]
                    });
                continue
              }
              if (t && (s = this
                .rules.nptable
                .exec(e))) {
                for (e = e
                  .substring(s[
                    0]
                    .length),
                  c = {
                    type: "table"
                    , header: s[
                      1]
                      .replace(
                        /^ *| *\| *$/g,
                        ""
                      )
                      .split(
                        / *\| */
                      )
                    , align: s[
                      2]
                      .replace(
                        /^ *|\| *$/g,
                        ""
                      )
                      .split(
                        / *\| */
                      )
                    , cells: s[
                      3]
                      .replace(
                        /\n$/,
                        ""
                      )
                      .split(
                        "\n"
                      )
                  }, f = 0; f <
                  c.align
                    .length; f++)
                  c.align[f] =
                    /^ *-+: *$/
                      .test(c.align[
                        f]) ?
                      "right" :
                      /^ *:-+: *$/
                        .test(c.align[
                          f]) ?
                        "center" :
                        /^ *:-+ *$/
                          .test(c.align[
                            f]) ?
                          "left" : null;
                for (f = 0; f < c
                  .cells
                  .length; f++)
                  c.cells[f] = c
                    .cells[f]
                    .split(
                      / *\| */);
                this.tokens.push(
                  c);
                continue
              }
              if (s = this.rules
                .lheading.exec(e)
              ) {
                e = e.substring(s[
                  0]
                  .length),
                  this.tokens
                    .push({
                      type: "heading"
                      , depth: "=" ===
                        s[
                        2] ?
                        1 :
                        2
                      , text: s[
                        1
                      ]
                    });
                continue
              }
              if (s = this.rules.hr
                .exec(e)) {
                e = e.substring(s[
                  0]
                  .length),
                  this.tokens
                    .push({
                      type: "hr"
                    });
                continue
              }
              if (s = this.rules
                .blockquote.exec(
                  e)) {
                e = e.substring(s[
                  0]
                  .length),
                  this.tokens
                    .push({
                      type: "blockquote_start"
                    }), s = s[0]
                      .replace(
                        /^ *> ?/gm,
                        ""), this
                          .token(s, t, !
                            0), this
                              .tokens.push({
                                type: "blockquote_end"
                              });
                continue
              }
              if (s = this.rules
                .list.exec(e)) {
                for (e = e
                  .substring(s[
                    0]
                    .length),
                  d = s[2], this
                    .tokens.push({
                      type: "list_start"
                      , ordered: 1 <
                        d
                          .length
                    }), s = s[0]
                      .match(this
                        .rules
                        .item),
                  r = !1, i = s
                    .length, f =
                  0; f < i; f++)
                  c = s[f], u =
                    c.length, c =
                    c.replace(
                      /^ *([*+-]|\d+\.) +/,
                      ""), ~c
                        .indexOf(
                          "\n ") &&
                    (u -= c
                      .length,
                      c = this
                        .options
                        .pedantic ?
                        c.replace(
                          /^ {1,4}/gm,
                          "") :
                        c.replace(
                          new RegExp(
                            "^ {1," +
                            u +
                            "}",
                            "gm"
                          ),
                          "")),
                    this.options
                      .smartLists &&
                    f !== i - 1 &&
                    (o = p.bullet
                      .exec(s[f +
                        1
                      ])[
                      0],
                      d !== o &&
                      !(1 < d
                        .length &&
                        1 < o
                          .length
                      ) && (
                        e = s
                          .slice(
                            f +
                            1)
                          .join(
                            "\n"
                          ) +
                        e, f =
                        i - 1)
                    ), a =
                    r ||
                    /\n\n(?!\s*$)/
                      .test(c),
                    f !== i - 1 &&
                    (r = "\n" ===
                      c.charAt(c
                        .length -
                        1), !
                        a && (a =
                          r)),
                    this.tokens
                      .push({
                        type: a ?
                          "loose_item_start" :
                          "list_item_start"
                      }), this
                        .token(c, !1,
                          n), this
                            .tokens.push({
                              type: "list_item_end"
                            });
                this.tokens.push({
                  type: "list_end"
                });
                continue
              }
              if (s = this.rules
                .html.exec(e)) {
                e = e.substring(s[
                  0]
                  .length),
                  this.tokens
                    .push({
                      type: this
                        .options
                        .sanitize ?
                        "paragraph" :
                        "html"
                      , pre:
                        !
                        this
                          .options
                          .sanitizer &&
                        ("pre" ===
                          s[
                          1] ||
                          "script" ===
                          s[
                          1] ||
                          "style" ===
                          s[
                          1]
                        )
                      , text: s[
                        0
                      ]
                    });
                continue
              }
              if (!n && t && (s =
                this.rules.def
                  .exec(e))) {
                e = e.substring(s[
                  0]
                  .length),
                  this.tokens
                    .links[s[1]
                      .toLowerCase()
                  ] = {
                    href: s[
                      2]
                    , title: s[
                      3]
                  };
                continue
              }
              if (t && (s = this
                .rules.table
                .exec(e))) {
                for (e = e
                  .substring(s[
                    0]
                    .length),
                  c = {
                    type: "table"
                    , header: s[
                      1]
                      .replace(
                        /^ *| *\| *$/g,
                        ""
                      )
                      .split(
                        / *\| */
                      )
                    , align: s[
                      2]
                      .replace(
                        /^ *|\| *$/g,
                        ""
                      )
                      .split(
                        / *\| */
                      )
                    , cells: s[
                      3]
                      .replace(
                        /(?: *\| *)?\n$/,
                        ""
                      )
                      .split(
                        "\n"
                      )
                  }, f = 0; f <
                  c.align
                    .length; f++)
                  c.align[f] =
                    /^ *-+: *$/
                      .test(c.align[
                        f]) ?
                      "right" :
                      /^ *:-+: *$/
                        .test(c.align[
                          f]) ?
                        "center" :
                        /^ *:-+ *$/
                          .test(c.align[
                            f]) ?
                          "left" : null;
                for (f = 0; f < c
                  .cells
                  .length; f++)
                  c.cells[f] = c
                    .cells[f]
                    .replace(
                      /^ *\| *| *\| *$/g,
                      "")
                    .split(
                      / *\| */);
                this.tokens.push(
                  c);
                continue
              }
              if (t && (s = this
                .rules
                .paragraph
                .exec(e))) {
                e = e.substring(s[
                  0]
                  .length),
                  this.tokens
                    .push({
                      type: "paragraph"
                      , text: "\n" ===
                        s[
                          1]
                          .charAt(
                            s[
                              1]
                              .length -
                            1
                          ) ?
                        s[
                          1]
                          .slice(
                            0,
                            -
                            1
                          ) :
                        s[
                        1]
                    });
                continue
              }
              if (s = this.rules
                .text.exec(e)) {
                e = e.substring(s[
                  0]
                  .length),
                  this.tokens
                    .push({
                      type: "text"
                      , text: s[
                        0
                      ]
                    });
                continue
              }
              if (e) throw new Error(
                "Infinite loop on byte: " +
                e
                  .charCodeAt(
                    0))
            }
            return this.tokens
          };
        var f = {
          escape: /^\\([\\`*{}\[\]()#+\-.!_>])/
          , autolink: /^<([^ >]+(@|:\/)[^ >]+)>/
          , url: l
          , tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/
          , link: /^!?\[(inside)\]\(href\)/
          , reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/
          , nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/
          , strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/
          , em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/
          , code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/
          , br: /^ {2,}\n(?!\s*$)/
          , del: l
          , text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
        };
        f._inside =
          /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,
          f._href =
          /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,
          f.link = o(f.link)("inside", f
            ._inside)("href", f._href)
            (), f.reflink = o(f.reflink)(
              "inside", f._inside)(), f
                .normal = c({}, f), f
                  .pedantic = c({}, f.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/
                    , em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
                  }), f.gfm = c({}, f.normal, {
                    escape: o(f.escape)(
                      "])", "~|])")
                      ()
                    , url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/
                    , del: /^~~(?=\S)([\s\S]*?\S)~~/
                    , text: o(f.text)(
                      "]|", "~]|")(
                        "|",
                        "|https?://|")
                      ()
                  }), f.breaks = c({}, f.gfm, {
                    br: o(f.br)("{2,}",
                      "*")()
                    , text: o(f.gfm.text)(
                      "{2,}", "*")()
                  }), i.rules = f, i.output =
          function (e, t, n) {
            var r = new i(t, n);
            return r.output(e)
          }, i.prototype.output =
          function (e) {
            for (var t, n, i, r, a =
              ""; e;) {
              if (r = this.rules
                .escape.exec(e)) {
                e = e.substring(r[
                  0]
                  .length),
                  a += r[1];
                continue
              }
              if (r = this.rules
                .autolink.exec(e)
              ) {
                e = e.substring(r[
                  0]
                  .length),
                  "@" === r[2] ?
                    (n = ":" ===
                      r[1]
                        .charAt(
                          6) ? this
                            .mangle(r[
                              1]
                              .substring(
                                7)
                            ) :
                      this
                        .mangle(r[
                          1
                        ]),
                      i = this
                        .mangle(
                          "mailto:"
                        ) + n
                    ) : (n =
                      s(r[1]),
                      i = n),
                  a += this
                    .renderer
                    .link(i, null,
                      n);
                continue
              }
              if (!this.inLink && (
                r = this.rules
                  .url.exec(e)
              )) {
                e = e.substring(r[
                  0]
                  .length),
                  n = s(r[1]),
                  i = n, a +=
                  this.renderer
                    .link(i, null,
                      n);
                continue
              }
              if (r = this.rules.tag
                .exec(e)) {
                !this.inLink &&
                  /^<a /i.test(
                    r[0]) ?
                  this
                    .inLink = !0 :
                  this.inLink &&
                  /^<\/a>/i
                    .test(r[0]) &&
                  (this
                    .inLink = !
                    1), e = e
                      .substring(r[
                        0]
                        .length),
                  a += this
                    .options
                    .sanitize ?
                    this.options
                      .sanitizer ?
                      this.options
                        .sanitizer(r[
                          0]) : s(r[
                            0]) : r[
                    0];
                continue
              }
              if (r = this.rules
                .link.exec(e)) {
                e = e.substring(r[
                  0]
                  .length),
                  this
                    .inLink = !0,
                  a += this
                    .outputLink(r,
                      {
                        href: r[
                          2]
                        , title: r[
                          3
                        ]
                      }), this
                        .inLink = !1;
                continue
              }
              if ((r = this.rules
                .reflink.exec(
                  e)) || (
                  r = this.rules
                    .nolink.exec(
                      e))) {
                if (e = e
                  .substring(r[
                    0]
                    .length),
                  t = (r[2] ||
                    r[1])
                    .replace(
                      /\s+/g,
                      " "), t =
                  this.links[t
                    .toLowerCase()
                  ], !t || !
                  t.href) {
                  a += r[0]
                    .charAt(
                      0), e = r[
                        0]
                        .substring(
                          1) +
                      e;
                  continue
                }
                this.inLink = !0,
                  a += this
                    .outputLink(r,
                      t), this
                        .inLink = !1;
                continue
              }
              if (r = this.rules
                .strong.exec(e)) {
                e = e.substring(r[
                  0]
                  .length),
                  a += this
                    .renderer
                    .strong(this
                      .output(r[
                        2
                      ] ||
                        r[1])
                    );
                continue
              }
              if (r = this.rules.em
                .exec(e)) {
                e = e.substring(r[
                  0]
                  .length),
                  a += this
                    .renderer.em(
                      this
                        .output(r[
                          2
                        ] ||
                          r[1])
                    );
                continue
              }
              if (r = this.rules
                .code.exec(e)) {
                e = e.substring(r[
                  0]
                  .length),
                  a += this
                    .renderer
                    .codespan(s(r[
                      2
                    ],
                      !0));
                continue
              }
              if (r = this.rules.br
                .exec(e)) {
                e = e.substring(r[
                  0]
                  .length),
                  a += this
                    .renderer
                    .br();
                continue
              }
              if (r = this.rules.del
                .exec(e)) {
                e = e.substring(r[
                  0]
                  .length),
                  a += this
                    .renderer.del(
                      this
                        .output(r[
                          1
                        ])
                    );
                continue
              }
              if (r = this.rules
                .text.exec(e)) {
                e = e.substring(r[
                  0]
                  .length),
                  a += this
                    .renderer
                    .text(s(this
                      .smartypants(
                        r[
                        0]
                      )
                    ));
                continue
              }
              if (e) throw new Error(
                "Infinite loop on byte: " +
                e
                  .charCodeAt(
                    0))
            }
            return a
          }, i.prototype.outputLink =
          function (e, t) {
            var n = s(t.href)
              , i = t.title ? s(t
                .title) : null;
            return "!" === e[0]
              .charAt(0) ? this
                .renderer.image(n, i,
                  s(e[1])) : this
                    .renderer.link(n, i,
                      this.output(e[1]))
          }, i.prototype.smartypants =
          function (e) {
            return this.options
              .smartypants ? e
                .replace(/---/g, "—")
                .replace(/--/g, "–")
                .replace(
                  /(^|[-\u2014/(\[{"\s])'/g,
                  "$1‘")
                .replace(/'/g, "’")
                .replace(
                  /(^|[-\u2014/(\[{\u2018\s])"/g,
                  "$1“")
                .replace(/"/g, "”")
                .replace(/\.{3}/g,
                  "…") : e
          }, i.prototype.mangle =
          function (e) {
            if (!this.options.mangle)
              return e;
            for (var t, n = "", r = e
              .length, a =
                0; a < r; a++) t =
                  e.charCodeAt(a), 0.5 <
                  Math.random() && (t =
                    "x" + t.toString(
                      16)), n +=
                  "&#" + t + ";";
            return n
          }, r.prototype.code =
          function (e, t, n) {
            if (this.options
              .highlight) {
              var i = this.options
                .highlight(e, t);
              null != i && i !==
                e && (n = !0, e =
                  i)
            }
            return t ?
              "<pre><code class=\"" +
              this.options
                .langPrefix + s(t, !
                  0) + "\">" + (n ? e :
                    s(e, !0)) +
              "\n</code></pre>\n" :
              "<pre><code>" + (n ?
                e : s(e, !0)) +
              "\n</code></pre>"
          }, r.prototype.blockquote =
          function (e) {
            return "<blockquote>\n" +
              e + "</blockquote>\n"
          }, r.prototype.html =
          function (e) {
            return e
          }, r.prototype.heading =
          function (e, t, n) {
            return "<h" + t +
              " id=\"" + this
                .options
                .headerPrefix + n
                  .toLowerCase()
                  .replace(/[^\w]+/g,
                    "-") + "\">" + e +
              "</h" + t + ">\n"
          }, r.prototype.hr =
          function () {
            return this.options
              .xhtml ? "<hr/>\n" :
              "<hr>\n"
          }, r.prototype.list =
          function (e, t) {
            var n = t ? "ol" : "ul";
            return "<" + n + ">\n" +
              e + "</" + n + ">\n"
          }, r.prototype.listitem =
          function (e) {
            return "<li>" + e +
              "</li>\n"
          }, r.prototype.paragraph =
          function (e) {
            return "<p>" + e +
              "</p>\n"
          }, r.prototype.table =
          function (e, t) {
            return "<table>\n<thead>\n" +
              e +
              "</thead>\n<tbody>\n" +
              t +
              "</tbody>\n</table>\n"
          }, r.prototype.tablerow =
          function (e) {
            return "<tr>\n" + e +
              "</tr>\n"
          }, r.prototype.tablecell =
          function (e, t) {
            var n = t.header ? "th" :
              "td"
              , i = t.align ? "<" +
                n +
                " style=\"text-align:" +
                t.align + "\">" :
                "<" + n + ">";
            return i + e + "</" + n +
              ">\n"
          }, r.prototype.strong =
          function (e) {
            return "<strong>" + e +
              "</strong>"
          }, r.prototype.em = function (
            e) {
            return "<em>" + e +
              "</em>"
          }, r.prototype.codespan =
          function (e) {
            return "<code>" + e +
              "</code>"
          }, r.prototype.br =
          function () {
            return this.options
              .xhtml ? "<br/>" :
              "<br>"
          }, r.prototype.del =
          function (e) {
            return "<del>" + e +
              "</del>"
          }, r.prototype.link =
          function (e, t, n) {
            if (this.options
              .sanitize) {
              try {
                var i =
                  decodeURIComponent(
                    d(e))
                    .replace(
                      /[^\w:]/g,
                      "")
                    .toLowerCase()
              } catch (t) {
                return ""
              }
              if (0 === i.indexOf(
                "javascript:"
              ) || 0 === i
                .indexOf(
                  "vbscript:"))
                return ""
            }
            var r = "<a href=\"" + e +
              "\"";
            return t && (r +=
              " title=\"" + t +
              "\""), r += ">" +
              n + "</a>", r
          }, r.prototype.image =
          function (e, t, n) {
            var i = "<img src=\"" +
              e + "\" alt=\"" + n +
              "\"";
            return t && (i +=
              " title=\"" + t +
              "\""), i += this
                .options.xhtml ?
                "/>" : ">", i
          }, r.prototype.text =
          function (e) {
            return e
          }, a.parse = function (e, t,
            n) {
            var i = new a(t, n);
            return i.parse(e)
          }, a.prototype.parse =
          function (e) {
            this.inline = new i(e
              .links, this
              .options, this
              .renderer), this
                .tokens = e.reverse();
            for (var t = ""; this
              .next();) t += this
                .tok();
            return t
          }, a.prototype.next =
          function () {
            return this.token = this
              .tokens.pop()
          }, a.prototype.peek =
          function () {
            return this.tokens[this
              .tokens.length - 1
            ] || 0
          }, a.prototype.parseText =
          function () {
            for (var e = this.token
              .text;
              "text" === this.peek()
                .type;) e += "\n" +
                  this.next()
                    .text;
            return this.inline.output(
              e)
          }, a.prototype.tok =
          function () {
            switch (this.token.type) {
              case "space":
                return "";
              case "hr":
                return this.renderer
                  .hr();
              case "heading":
                return this.renderer
                  .heading(this
                    .inline
                    .output(this
                      .token
                      .text),
                    this.token
                      .depth, this
                        .token.text);
              case "code":
                return this.renderer
                  .code(this.token
                    .text, this
                      .token.lang,
                    this.token
                      .escaped);
              case "table": {
                var e, t, n, i, r, a =
                  ""
                  , s = "";
                for (n = "", e =
                  0; e < this.token
                    .header
                    .length; e++)
                  i = {
                    header: !0
                    , align: this
                      .token
                      .align[e]
                  }, n += this
                    .renderer
                    .tablecell(this
                      .inline
                      .output(this
                        .token
                        .header[e]
                      ), {
                      header: !
                        0
                      , align: this
                        .token
                        .align[
                        e]
                    });
                for (a += this
                  .renderer
                  .tablerow(n), e =
                  0; e < this.token
                    .cells.length; e++
                ) {
                  for (t = this
                    .token.cells[
                    e], n =
                    "", r = 0; r <
                    t.length; r++)
                    n += this
                      .renderer
                      .tablecell(
                        this
                          .inline
                          .output(t[
                            r
                          ]),
                        {
                          header:
                            !
                            1
                          , align: this
                            .token
                            .align[
                            r
                          ]
                        });
                  s += this.renderer
                    .tablerow(n)
                }
                return this.renderer
                  .table(a, s)
              }
              case "blockquote_start": {
                for (var s = "";
                  "blockquote_end" !==
                  this.next()
                    .type;) s += this
                      .tok();
                return this.renderer
                  .blockquote(s)
              }
              case "list_start": {
                for (var s = "", d =
                  this.token
                    .ordered;
                  "list_end" !==
                  this.next()
                    .type;) s += this
                      .tok();
                return this.renderer
                  .list(s, d)
              }
              case "list_item_start": {
                for (var s = "";
                  "list_item_end" !==
                  this.next()
                    .type;) s +=
                      "text" === this
                        .token.type ? this
                          .parseText() :
                        this.tok();
                return this.renderer
                  .listitem(s)
              }
              case "loose_item_start": {
                for (var s = "";
                  "list_item_end" !==
                  this.next()
                    .type;) s += this
                      .tok();
                return this.renderer
                  .listitem(s)
              }
              case "html": {
                var o = this.token
                  .pre || this
                    .options
                    .pedantic ? this
                      .token.text : this
                        .inline.output(
                          this.token
                            .text);
                return this.renderer
                  .html(o)
              }
              case "paragraph":
                return this.renderer
                  .paragraph(this
                    .inline
                    .output(this
                      .token
                      .text));
              case "text":
                return this.renderer
                  .paragraph(this
                    .parseText());
            }
          }, l.exec = l, u.options = u
            .setOptions = function (e) {
              return c(u.defaults, e), u
            }, u.defaults = {
              gfm: !0
              , tables: !0
              , breaks: !1
              , pedantic: !1
              , sanitize: !1
              , sanitizer: null
              , mangle: !0
              , smartLists: !1
              , silent: !1
              , highlight: null
              , langPrefix: "lang-"
              , smartypants: !1
              , headerPrefix: ""
              , renderer: new r
              , xhtml: !1
            }, u.Parser = a, u.parser = a
              .parse, u.Renderer = r, u
                .Lexer = e, u.lexer = e.lex, u
                  .InlineLexer = i, u
                    .inlineLexer = i.output, u
                      .parse = u, "undefined" !=
                        typeof t && "object" ==
                        typeof n ? t.exports = u :
            "function" == typeof define &&
              define.amd ? define(
                function () {
                  return u
                }) : this.marked = u
      })
        .call(function () {
          return this || ("undefined" ==
            typeof window ? e :
            window)
        }())
    })
      .call(this, "undefined" == typeof global ?
        "undefined" == typeof self ?
          "undefined" == typeof window ? {} :
            window : self : global)
  }, {}]
  , 11: [function (e, t) {
    const n = (e) => Object.keys(e)
      .map((t) => e[t])
      , i = (e, t) => {
        var n = new MutationObserver((n) => {
          if (n = Array.from(n)
            .filter((t) => t
              .target === e && (!e
                ._render || e
                  ._rendering ? !1 :
                "render" !== t
                  .target
                  .getAttribute(
                    "slot"))), !!n
                      .length) {
            let i = n.filter((e) =>
              "attributes" === e
                .type);
            i.length && t(Object
              .assign({}, ...i
                .filter((e) =>
                  "attributes" ===
                  e.type)
                .map((e) => e
                  .attributeName
                )
                .map((t) => {
                  let
                    n = {};
                  return n[
                    t
                  ] =
                    e
                      .getAttribute(
                        t
                      ),
                    n
                }))), n
                  .filter((e) =>
                    "characterData" ===
                    e.type)
                  .forEach(() => {
                    e._render()
                  }), n.filter((e) =>
                    "childList" === e
                      .type)
                    .forEach((t) => {
                      t.addedNodes
                        .length &&
                        e
                          ._render()
                    })
          }
        });
        return n.observe(e, {
          attributes: !0
          , childList: !0
          , subtree: !0
          , characterData: !0
        }), n
      };
    class r extends HTMLElement {
      constructor() {
        super(), setTimeout(async () => {
          let e, t = {};
          Array.isArray(this
            .defaults) ?
            e = this
              .defaults :
            "object" ==
              typeof this
                .defaults ? (e =
                  Object.keys(
                    this
                      .defaults
                  ), t =
                  this.defaults
            ) : !this
              .defaults && (
              e = []), this
                ._settings =
            Object.assign({},
              this
                .defaults ||
              {});
          let r = {}
            , a = {}
            , s = {}
            , d = (e) => {
              this[e] ? a[
                e] = this[
                e] : !
                this
                  .hasAttribute(
                    e) &&
                "function" ==
                typeof this
                  ._settings[
                e] &&
              (this
                ._settings[
                e
              ] =
                this
                  ._settings[
                  e]
                  (), s[
                  e
                  ] =
                this
                  ._settings[
                e]
              ),
                Object
                  .defineProperty(
                    this,
                    e, {
                    get: () =>
                      this
                        ._settings[
                      e
                      ]
                    , set: (
                      n) => {
                      if ("boolean" ==
                        typeof t[
                        e
                        ] &&
                        ("true" ===
                          n &&
                          (n = !
                            0
                          ),
                          "false" ===
                          n &&
                          (n = !
                            1
                          )
                        ),
                        this
                          ._settings[
                        e
                        ] =
                        n,
                        r[
                        e]
                      )
                        for (; r[
                          e
                        ]
                          .length;
                        ) {
                          let [
                            t
                          ] =
                            r[e]
                              .shift();
                          t(n)
                        }
                      this._render()
                    }
                  }),
                "boolean" ==
                  typeof t[
                  e] ?
                  this
                    .hasAttribute(
                      e) &&
                  ("false" !==
                    this
                      .getAttribute(
                        e
                      ) &&
                    !1 !==
                    this
                      .getAttribute(
                        e
                      ) ?
                    this[
                    e] = !
                    0 :
                    this[
                    e] = !
                    1) :
                  this
                    .hasAttribute(
                      e) &&
                  (this[e] =
                    this
                      .getAttribute(
                        e)
                  )
            };
          for (let t in e
            .forEach(d),
            a) this[t] =
              a[t];
          for (let t in i(this,
            (t) => {
              for (
                let n in
                t
              )
                e
                  .includes(
                    n
                  ) &&
                  (this[
                    n] =
                    t[
                    n]
                  )
            }),
            await Promise
              .all(n(s)), s)
            this[t] = await s[
              t];
          let o = (t) => (e
            .includes(
              t) || (d(t), e
                .push(t)),
            "undefined" ==
              typeof this[
              t] ?
              new Promise((
                e, n
              ) => {
                r[t] ||
                  (r[
                    t] = []),
                  r[
                    t]
                    .push(
                      [e,
                        n]
                    )
              }) :
              Promise
                .resolve(this[
                  t]));
          this.addSetting = (t,
            n) => {
            e.includes(
              t) || (d(
                t),
                e
                  .push(
                    t)
              ),
              "undefined" !=
              typeof n &&
              (this[t] =
                n)
          }, this.waitFor =
            o, this._settings
              .waitFor = o, this
                ._render()
        });
        let e = this.attachShadow({
          mode: "open"
        });
        e.innerHTML = this.shadow
      }
      setAttribute(e, t) {
        this.setAttributeNS(null, e, t)
      }
      getAttribute(e) {
        for (let t of this.attributes)
          if (t.nodeName === e) return t
            .nodeValue
      }
      set shadow(e) {
        this.shadowRoot.innerHTML = e
      }
      async _render() {
        return this._timeout ? void 0 : this
          ._rendering ? void (this
            ._rerender = !0) : void (this
              ._timeout = setTimeout(
                async () => {
                  this._timeout =
                    null, this
                      ._rendering = !
                    0, this
                      .renderElement ||
                    (this
                      .renderElement =
                      document
                        .createElement(
                          "render"
                        ),
                      this
                        .renderElement
                        .setAttribute(
                          "slot",
                          "render"
                        ),
                      this
                        .appendChild(
                          this
                            .renderElement
                        )),
                    this.contains(
                      this
                        .renderElement
                    ) && this
                      .removeChild(
                        this
                          .renderElement
                      );
                  let e = this
                    .innerHTML;
                  this.appendChild(
                    this
                      .renderElement
                  );
                  let t = Object
                    .assign({},
                      this
                        ._settings
                    )
                    , n =
                      await this
                        .render(t, e);
                  return this
                    ._rerender ? (
                    this
                      ._rerender = !
                    1, this
                      ._rendering = !
                    1, this
                      ._render()
                  ) : void (
                    this
                      .renderElement ===
                    n || (
                      n instanceof HTMLElement ?
                        (n.setAttribute(
                          "slot",
                          "render"
                        ),
                          this
                            .renderElement
                            .parentNode
                            .removeChild(
                              this
                                .renderElement
                            ),
                          this
                            .appendChild(
                              n
                            ),
                          this
                            .renderElement =
                          n
                        ) :
                        "string" ==
                        typeof n &&
                        (this
                          .renderElement
                          .innerHTML =
                          n)
                    ),
                    this
                      ._rendering = !
                    1)
                }, 0))
      }
      get shadow() {
        return `
    <style>
    :host {
      margin: 0 0 0 0;
      padding: 0 0 0 0;
    }
    ::slotted([slot="render"]) {
      margin: 0 0 0 0;
      padding: 0 0 0 0;
    }
    </style>
    <slot name="render"></slot>
    `
      }
    }
    t.exports = r
  }, {}]
  , 12: [function (e, t) {
    t.exports = {
      name: "markdown-element"
      , version: "2.0.2"
      , description: ""
      , main: "index.js"
      , scripts: {
        commit: "git-cz"
        , test: "tap tests/test-*.js"
        , posttest: "standard"
        , start: "budo dist.js:bundle.js"
        , precommit: "npm test"
        , prepush: "npm test"
        , prepublishOnly: "distjs"
        , commitmsg: "validate-commit-msg"
        , "semantic-release": "semantic-release pre && npm publish && semantic-release post"
      }
      , standard: {
        ignore: ["dist"]
      }
      , config: {
        commitizen: {
          path: "./node_modules/cz-conventional-changelog"
        }
      }
      , keywords: []
      , author: "Mikeal Rogers <mikeal.rogers@gmail.com> (http://www.mikealrogers.com)"
      , license: "Apache-2.0"
      , dependencies: {
        distjs: "^1.0.0"
        , gza: "^1.3.0"
        , loadcss: "0.0.2"
        , marked: "^0.3.6"
      }
      , devDependencies: {
        "babel-minify": "^0.2.0"
        , bl: "^1.2.1"
        , browserify: "^14.4.0"
        , budo: "^10.0.4"
        , commitizen: "^2.9.6"
        , "cz-conventional-changelog": "^2.0.0"
        , husky: "^0.14.3"
        , "load-js": "^2.0.0"
        , puppeteer: "^0.12.0"
        , "semantic-release": "^8.0.3"
        , standard: "^10.0.3"
        , tap: "^10.7.2"
        , "validate-commit-msg": "^2.14.0"
      }
      , repository: {
        type: "git"
        , url: "https://github.com/mikeal/markdown-element.git"
      }
    }
  }, {}]
}, {}, [1]);