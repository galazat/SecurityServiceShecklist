(function(t) {
    function e(e) {
        for (var a, n, o = e[0], c = e[1], l = e[2], d = 0, m = []; d < o.length; d++) n = o[d], Object.prototype.hasOwnProperty.call(i, n) && i[n] && m.push(i[n][0]), i[n] = 0;
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
        u && u(e);
        while (m.length) m.shift()();
        return r.push.apply(r, l || []), s()
    }

    function s() {
        for (var t, e = 0; e < r.length; e++) {
            for (var s = r[e], a = !0, o = 1; o < s.length; o++) {
                var c = s[o];
                0 !== i[c] && (a = !1)
            }
            a && (r.splice(e--, 1), t = n(n.s = s[0]))
        }
        return t
    }
    var a = {},
        i = {
            app: 0
        },
        r = [];

    function n(e) {
        if (a[e]) return a[e].exports;
        var s = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }
    n.m = t, n.c = a, n.d = function(t, e, s) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, n.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (n.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) n.d(s, a, function(e) {
                return t[e]
            }.bind(null, a));
        return s
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var l = 0; l < o.length; l++) e(o[l]);
    var u = c;
    r.push([0, "chunk-vendors"]), s()
})({
    0: function(t, e, s) {
        t.exports = s("56d7")
    },
    "10d9": function(t, e, s) {
        t.exports = s.p + "img/load.13c5003b.svg"
    },
    "1ae4": function(t, e, s) {
        t.exports = s.p + "img/logo.6b63e529.svg"
    },
    "33d2": function(t) {
        t.exports = JSON.parse('{"Home":"Главная","Categories":"Категории","contact us":"Контакты","Define your app functionality":"Services security checklist","Get requirements":"Get checklist","Security requirements generator":"AppSec security checklist service","Security Assessment":"Security Assessment","Test cases":"Test cases","Export":"Export","Download PDF":"Download PDF","Requirement":"Requirement","Make export again":"Make export again","Failed":"Failed","Something":"Something","went wrong":"went wrong","Ooops!!!":"Ooops!!!","THAT PAGE DOES NOT EXIST OR IS UNAVAILABLE":"THAT PAGE DOES NOT EXIST OR IS UNAVAILABLE ","go back to home":"go back to home","show details":"show details","you may mark it as important":"Вы можете отметить это как важное","Make requirement as important or not":"Отметить требование как важное","Copy a link to these categories":"Копировать ссылку на эти категории","Success!":"Успех!","Link copied to the clipboard":"Ссылка скопирована в буфер обмена"}')
    },
    "50c1": function(t, e, s) {
        t.exports = s.p + "img/info.624fef92.svg"
    },
    "56d7": function(t, e, s) {
        "use strict";
        s.r(e);
        s("e260"), s("e6cf"), s("cca6"), s("a79d"), s("0cdd");
        var a = s("a026"),
            i = s("2f62"),
            r = s("bc3a"),
            n = s.n(r);
        a["default"].use(i["a"]);
        var o = new i["a"].Store({
                state: {
                    categories: [],
                    selectedCategoriesIds: []
                },
                mutations: {
                    setCategoriesIds: function(t, e) {
                        t.selectedCategoriesIds = e
                    },
                    loadCategories: function(t) {
                        r["get"]("category").then((function(e) {
                            t.categories = e.data.results
                        })).catch((function(t) {
                            console.error(t)
                        }))
                    }
                },
                actions: {
                    loadCategories: function(t) {
                        t.commit("loadCategories")
                    },
                    setCategoriesIds: function(t, e) {
                        t.commit("setCategoriesIds", e)
                    }
                },
                getters: {
                    getCategories: function(t) {
                        return t.categories
                    },
                    getSelectedCategoriesIds: function(t) {
                        return t.selectedCategoriesIds
                    }
                }
            }),
            c = o,
            l = s("5f5b");
        s("ab8b"), s("2dd8");
        a["default"].use(l["a"]);
        s("d3b7"), s("8a79");
        var u = s("d2d7"),
            d = s("a925"),
            m = s("bb69"),
            p = s("33d2");
        a["default"].use(d["a"]);
        var g = new d["a"]({
            locale: "en",
            fallbackLocale: "en",
            messages: {
                en: m,
                ru: p
            }
        });
        n.a.defaults.xsrfHeaderName = "X-CSRFToken", n.a.defaults.xsrfCookieName = "csrftoken", n.a.defaults.baseURL = "/api/v1", n.a.interceptors.request.use((function(t) {
            return t.url.endsWith("/") || (t.url += "/"), t.headers.common["ACCEPT-LANGUAGE"] = g.locale, t
        }), (function(t) {
            return Promise.reject(t)
        })), a["default"].prototype.$axios = n.a, a["default"].use(u["a"], {});
        var f = s("7602"),
            h = s.n(f);
        s("0ae1");
        a["default"].use(h.a);
        var v = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "app"
                    }
                }, [a("header", {
                    staticClass: "ml-auto mr-auto pr-md-0 pl-md-0"
                }, [a("div", {
                    staticClass: "container mt-3"
                }, [a("div", {
                    staticClass: "row justify-content-between align-items-center"
                }, [a("div", {
                    staticClass: "row"
                }, [a("a", {
                    staticClass: "d-flex align-items-center top-link",
                    attrs: {
                        href: "/"
                    }
                }, [a("img", {
                    attrs: {
                        src: s("1ae4"),
                        alt: "logo"
                    }
                }), a("div", {
                    staticClass: "ml-3 logo-text d-none d-md-block"
                }, [a("div", {
                    staticClass: "logo-title"
                }, [t._v("AppSec service")]), a("div", {
                    staticClass: "logo-subtitle"
                }, [t._v(t._s(t.$t("Security requirements generator")))])])]), t._l(t.additionalLogos, (function(t) {
                    return a("div", {
                        staticClass: "d-flex align-items-center"
                    }, [a("a", {
                        staticClass: "d-flex top-link"
                    }, [a("img", {
                        attrs: {
                            src: t.logo,
                            alt: "additional logo"
                        }
                    })])])
                }))], 2), a("div", {
                    staticClass: "d-flex align-items-center mb-1"
                }, [a("div", {
                    staticClass: "mb-1"
                }, [a("span", {
                    staticClass: "languges",
                    class: {
                        "languges-active": "en" === t.$i18n.locale
                    },
                    on: {
                        click: function(e) {
                            return t.selectLang("en")
                        }
                    }
                }, [t._v("EN")]), a("span", {
                    staticClass: "languges",
                    class: {
                        "languges-active": "ru" === t.$i18n.locale
                    },
                    on: {
                        click: function(e) {
                            return t.selectLang("ru")
                        }
                    }
                }, [t._v("RU")])]), t._l(t.assessmentButton, (function(e) {
                    return a("div", {
                        staticClass: "d-none d-md-block"
                    }, [a("a", {
                        staticClass: "btn-outline-red pt-1 pb-1",
                        attrs: {
                            href: e.button_link,
                            target: "_blank"
                        }
                    }, [t._v(t._s(e.button_value))])])
                }))], 2)])])]), a("router-view")], 1)
            },
            b = [],
            C = (s("caad"), s("b64b"), s("2532"), {
                data: function() {
                    return {
                        assessmentButton: null,
                        additionalLogos: null
                    }
                },
                mounted: function() {
                    var t = this;
                    r["get"]("assessment_button/").then((function(e) {
                        return t.assessmentButton = e.data.results
                    })).catch((function(t) {
                        return console.log(t)
                    })), r["get"]("additional_logo/").then((function(e) {
                        return t.additionalLogos = e.data.results
                    })).catch((function(t) {
                        return console.log(t)
                    }))
                },
                methods: {
                    selectLang: function(t) {
                        this.$i18n.locale = t, localStorage.setItem("locale", t);
                        var e = this.$router.resolve({
                            params: {
                                locale: t
                            }
                        });
                        this.$router.push(e.location), this.$router.go()
                    }
                },
                created: function() {
                    var t = localStorage.getItem("locale");
                    Object.keys(g.messages).includes(t) || (t = g.fallbackLocale), this.$i18n.locale = t
                }
            }),
            _ = C,
            x = (s("5c0b"), s("2877")),
            k = Object(x["a"])(_, v, b, !1, null, null, null),
            y = k.exports,
            w = s("8c4f"),
            q = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("main", {
                    staticClass: "ml-auto mr-auto"
                }, [a("b-container", [a("div", {
                    staticClass: "row row-cont pl-md-0 pr-md-0"
                }, [a("div", {
                    staticClass: "col-md-6 col-sm-12 p-0 main-title"
                }, [t._v(" " + t._s(t.$t("Define your app functionality")) + " ")])]), a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "col-md-6 col-12 p-0 left-container"
                }, [a("div", {
                    staticClass: "row row-cont pl-md-0 pr-md-0"
                }, [a("div", {
                    staticClass: "col-md-5 col-12"
                }, t._l(t.getCategories, (function(e, s) {
                    return s % 2 === 0 ? a("div", {
                        staticClass: "input-cont d-flex align-items-center"
                    }, [a("b-form-checkbox", {
                        key: s,
                        attrs: {
                            value: e.id,
                            switch: ""
                        },
                        on: {
                            change: t.toggle
                        },
                        model: {
                            value: t.selected,
                            callback: function(e) {
                                t.selected = e
                            },
                            expression: "selected"
                        }
                    }, [t._v(" " + t._s(e.name) + " ")])], 1) : t._e()
                })), 0), a("div", {
                    staticClass: "col-md-5 col-12 right-input"
                }, t._l(t.getCategories, (function(e, s) {
                    return s % 2 === 1 ? a("div", {
                        staticClass: "input-cont d-flex align-items-center"
                    }, [a("b-form-checkbox", {
                        key: s,
                        attrs: {
                            value: e.id,
                            switch: ""
                        },
                        on: {
                            change: t.toggle
                        },
                        model: {
                            value: t.selected,
                            callback: function(e) {
                                t.selected = e
                            },
                            expression: "selected"
                        }
                    }, [t._v(" " + t._s(e.name) + " ")])], 1) : t._e()
                })), 0), a("div", {
                    staticClass: "col-md-5 col-12 pr-md-0 cta-cont"
                }, [a("router-link", {
                    staticClass: "w-100 btn pt-md-4 pb-md-4 pt-3 pb-3 cta",
                    attrs: {
                        disabled: 0 === t.selected.length,
                        to: {
                            name: "Export",
                            params: {
                                locale: this.$i18n.locale
                            }
                        },
                        tag: "button"
                    }
                }, [t._v(" " + t._s(t.$t("Get requirements")) + " ")])], 1)])]), a("div", {
                    staticClass: "col-6 p-0 right-cont d-md-block d-none"
                }, [a("img", {
                    attrs: {
                        src: s("e491"),
                        alt: "main"
                    }
                })])])])], 1)
            },
            S = [],
            O = (s("4de4"), s("4160"), s("159b"), s("5530")),
            I = {
                name: "HomePage",
                data: function() {
                    return {
                        selected: [],
                        categories: []
                    }
                },
                computed: Object(O["a"])({}, Object(i["c"])(["getCategories"])),
                created: function() {
                    var t = this;
                    if (this.loadCategories(), Array.isArray(this.$route.query.cat)) {
                        var e = [];
                        this.$route.query.cat.forEach((function(t) {
                            return e.push(parseInt(t))
                        }));
                        var s = e.filter((function(t) {
                            return t
                        }));
                        s.forEach((function(e) {
                            return t.selected.push(e)
                        })), this.setCategoriesIds(this.selected)
                    } else this.$route.query.cat && parseInt(this.$route.query.cat) && (this.selected.push(parseInt(this.$route.query.cat)), this.setCategoriesIds(this.selected))
                },
                methods: Object(O["a"])(Object(O["a"])({}, Object(i["b"])(["loadCategories", "setCategoriesIds"])), {}, {
                    toggle: function() {
                        this.setCategoriesIds(this.selected)
                    }
                })
            },
            $ = I,
            E = Object(x["a"])($, q, S, !1, null, "bd3c5b9e", null),
            R = E.exports,
            A = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("main", {
                    staticClass: "p-0"
                }, [a("b-container", [a("div", {
                    staticClass: "row justify-content-between align-items-center main-row"
                }, [a("div", {
                    staticClass: "col-fluid p-md-0 px-3"
                }, [t.isResultSent || t.isDone ? t._e() : a("button", {
                    staticClass: "btn d-flex export cta py-md-3 px-md-4",
                    on: {
                        click: t.makeExport
                    }
                }, [t._v(" " + t._s(t.$t("Export")) + " ")]), t.isResultSent && !t.isDone ? a("div", {
                    staticClass: "wait d-flex align-items-start"
                }, [a("img", {
                    staticClass: "wait-img",
                    attrs: {
                        src: s("e1dd"),
                        alt: "wait"
                    }
                }), a("div", [a("div", {
                    staticClass: "message-title d-flex"
                }, [t._v(t._s(t.$t("In progress")))]), a("div", {
                    staticClass: "message-subtitle d-flex"
                }, [t._v(t._s(t.$t("Update in 10 sec")))])])]) : t._e(), t.isDone ? a("div", {
                    staticClass: "load d-flex align-items-center"
                }, [a("a", {
                    staticClass: "message-title d-md-block px-3",
                    attrs: {
                        target: "_blank",
                        href: "/media/exports/" + t.exportId + ".pdf"
                    }
                }, [a("img", {
                    staticClass: "link-img",
                    attrs: {
                        src: s("10d9"),
                        alt: "load"
                    }
                }), t._v(" " + t._s(t.$t("Download PDF")) + " ")]), a("button", {
                    staticClass: "btn btn-outline-red pt-1 pb-1 disabled-message",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: t.exportAgain
                    }
                }, [t._v(" " + t._s(t.$t("Make export again")) + " ")])]) : t._e(), t.hasError ? a("div", {
                    staticClass: "alert-cont d-flex align-items-start"
                }, [a("img", {
                    staticClass: "alert-img",
                    attrs: {
                        src: s("8d14"),
                        alt: "alert"
                    }
                }), a("div", [a("div", {
                    staticClass: "message-title"
                }, [t._v(t._s(t.$t("Failed")))]), a("div", {
                    staticClass: "message-subtitle"
                }, [t._v(t._s(t.$t("Something")) + " "), a("br", {
                    staticClass: "d-md-none"
                }), t._v(" " + t._s(t.$t("went wrong")))])])]) : t._e()]), a("b-button", {
                    staticClass: "btn float-right b-btn-outline-blue pt-1 pb-1 d-none d-md-block",
                    attrs: {
                        variant: "b-btn-outline-blue"
                    },
                    on: {
                        click: function(e) {
                            t.createURL(t.$t("Success!"), t.$t("Link copied to the clipboard"))
                        }
                    }
                }, [t._v(" " + t._s(t.$t("Copy a link to these categories")) + " ")])], 1), a("div", {
                    staticClass: "row content-row"
                }, [a("div", {
                    staticClass: "col-4 d-none d-md-block pl-0"
                }, [a("div", {
                    staticClass: "card list-group",
                    attrs: {
                        id: "list"
                    }
                }, t._l(t.getCategories, (function(e, s) {
                    return t.getSelectedCategoriesIds.includes(e.id) ? a("a", {
                        staticClass: "list-group-item list-group-item-action",
                        attrs: {
                            href: "#cat-" + s
                        }
                    }, [t._v(" " + t._s(e.name) + " ")]) : t._e()
                })), 0), a("div", {
                    staticClass: "card disabled-card list-group"
                }, t._l(t.getCategories, (function(e, s) {
                    return t.getSelectedCategoriesIds.includes(e.id) ? t._e() : a("a", {
                        staticClass: "list-group-item list-group-item-action",
                        staticStyle: {
                            cursor: "default"
                        }
                    }, [t._v(" " + t._s(e.name) + " ")])
                })), 0)]), a("div", {
                    staticClass: "col-12 col-md-8 pr-md-0 "
                }, [a("div", {
                    staticClass: "sc",
                    attrs: {
                        "data-spy": "scroll",
                        "data-target": "#list",
                        "data-offset": "0"
                    }
                }, t._l(t.getCategories, (function(e, i) {
                    return t.getSelectedCategoriesIds.includes(e.id) ? a("div", {
                        staticClass: "card",
                        attrs: {
                            id: "cat-" + i
                        }
                    }, [a("div", {
                        staticClass: "col-12 col-md-8"
                    }, [a("div", {
                        staticClass: "card-title"
                    }, [t._v(t._s(e.name))]), a("p", {
                        staticClass: "p-text"
                    }, [a("vue-simple-markdown", {
                        attrs: {
                            source: e.summary
                        }
                    })], 1), t._l(e.requirements, (function(i, r) {
                        return a("div", {
                            staticClass: "card-group"
                        }, [a("div", {
                            staticClass: "d-flex align-items-center"
                        }, [a("b-form-checkbox", {
                            key: r,
                            attrs: {
                                model: t.getSelectedCategoriesIds[e.id],
                                value: i.id,
                                switch: ""
                            },
                            on: {
                                change: function(s) {
                                    return t.turnSwitcher(s, e.id, i.id)
                                }
                            }
                        }, [a("span", {
                            directives: [{
                                name: "b-popover",
                                rawName: "v-b-popover.hover",
                                value: t.$t("Make requirement as important or not"),
                                expression: "$t('Make requirement as important or not')",
                                modifiers: {
                                    hover: !0
                                }
                            }]
                        }, [t._v(t._s(i.title))])])], 1), a("button", {
                            directives: [{
                                name: "b-modal",
                                rawName: "v-b-modal",
                                value: "requirementModal",
                                expression: "'requirementModal'"
                            }],
                            staticClass: "btn show-btn",
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(e) {
                                    return t.loadRequirement(i.id)
                                }
                            }
                        }, [a("img", {
                            staticClass: "info-img",
                            attrs: {
                                src: s("50c1"),
                                alt: "info"
                            }
                        }), t._v(" " + t._s(t.$t("show details")) + " ")])])
                    }))], 2)]) : t._e()
                })), 0)])])]), a("b-modal", {
                    attrs: {
                        id: "requirementModal",
                        "hide-footer": !0,
                        size: "lg"
                    },
                    on: {
                        hidden: t.closeModal
                    },
                    scopedSlots: t._u([{
                        key: "modal-title",
                        fn: function() {
                            return [t._v(t._s(t.$t("Requirement")))]
                        },
                        proxy: !0
                    }])
                }, ["{}" !== JSON.stringify(t.currentRequirement) ? a("div", {
                    staticClass: "col-12 security-card"
                }, [a("div", {
                    staticClass: "d-flex justify-content-between align-items-start"
                }, [a("h2", {
                    staticClass: "card-title"
                }, [t._v(t._s(t.currentRequirement.title))])]), t.currentRequirement.text ? a("p", {
                    staticClass: "p-text"
                }, [a("vue-simple-markdown", {
                    attrs: {
                        source: t.currentRequirement.text
                    }
                })], 1) : t._e(), t.currentRequirement.test_cases.length ? a("div", [a("h3", {
                    staticClass: "ul-title"
                }, [t._v(t._s(t.$t("Test cases")))]), a("ul", {
                    staticClass: "card-list p-0 pl-3"
                }, t._l(t.currentRequirement.test_cases, (function(e, s) {
                    return a("li", {
                        staticClass: "card-list--item pl-2"
                    }, [a("h4", {
                        staticClass: "li-title"
                    }, [t._v(t._s(e.title))]), a("p", {
                        staticClass: "p-text"
                    }, [a("vue-simple-markdown", {
                        attrs: {
                            source: e.text
                        }
                    })], 1)])
                })), 0)]) : t._e()]) : t._e()])], 1)
            },
            T = [],
            j = (s("99af"), s("a15b"), s("d81d"), {
                name: "ExportPage",
                data: function() {
                    return {
                        selectedIds: [],
                        selectedReq: {},
                        isResultSent: !1,
                        hasError: !1,
                        isDone: !1,
                        exportId: null,
                        currentRequirement: {},
                        url: null
                    }
                },
                computed: Object(O["a"])({}, Object(i["c"])(["getCategories", "getSelectedCategoriesIds"])),
                created: function() {
                    var t = this;
                    0 === this.getSelectedCategoriesIds.length && this.$router.push({
                        name: "Home"
                    }), this.getSelectedCategoriesIds.map((function(e) {
                        t.selectedReq[e] = []
                    }))
                },
                methods: {
                    turnSwitcher: function(t, e, s) {
                        !1 === t ? this.selectedReq[e] = this.selectedReq[e].filter((function(t) {})) : this.selectedReq[e].push(s)
                    },
                    makeExport: function() {
                        for (var t, e = this, s = [], a = 0, i = Object.keys(this.selectedReq); a < i.length; a++) {
                            var n = i[a];
                            s.push({
                                category_id: n,
                                requirements_ids: this.selectedReq[n]
                            })
                        }
                        r["post"]("export", {
                            data: s,
                            language: this.$i18n.locale
                        }).then((function(s) {
                            e.isResultSent = !0, e.exportId = s.data.uuid;
                            var a = e;
                            t = setTimeout((function() {
                                r["get"]("export/".concat(a.exportId)).then((function(e) {
                                    switch (e.data.status) {
                                        case "finished":
                                            a.isDone = !0, clearTimeout(t);
                                            break;
                                        case "failed":
                                            a.isDone = !1, a.isResultSent = !0, a.hasError = !0, clearTimeout(t);
                                            break
                                    }
                                })).catch((function(t) {
                                    console.error(t)
                                }))
                            }), 1e4)
                        })).catch((function(t) {
                            e.hasError = !1, console.error(t)
                        }))
                    },
                    closeModal: function() {
                        this.currentRequirement = {}
                    },
                    loadRequirement: function(t) {
                        var e = this;
                        r["get"]("requirement/".concat(t)).then((function(t) {
                            e.currentRequirement = t.data
                        })).catch((function(t) {
                            console.error(t)
                        }))
                    },
                    exportAgain: function() {
                        this.exportId = null, this.isDone = !1, this.isResultSent = !1
                    },
                    createURL: function(t, e) {
                        for (var s = [], a = 0, i = Object.keys(this.selectedReq); a < i.length; a++) {
                            var r = i[a];
                            s.push(r)
                        }
                        var n = "/?cat=".concat(s.join("&cat="));
                        var t = this;
                        this.url = window.location.origin.concat(n),
                        console.log(this.url),
                        navigator.clipboard.writeText(this.url),
                        this.$bvToast.toast("".concat(e), {
                            title: "".concat(t),
                            toaster: "b-toaster-bottom-right",
                            solid: !1,
                            appendToast: !0
                        })
                    }
                }
            }),
            L = j,
            D = Object(x["a"])(L, A, T, !1, null, "733bf6d0", null),
            P = D.exports,
            M = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("main", {
                    staticClass: "p-0 pb-5"
                }, [t.requirement ? s("div", {
                    staticClass: "container"
                }, [s("div", {
                    staticClass: "row p-md-0 security-row"
                }, [s("div", {
                    staticClass: "card w-100 mt-3 mt-md-5 pl-1 pl-md-2"
                }, [s("div", {
                    staticClass: "col-12 col-md-8 security-card"
                }, [s("h2", {
                    staticClass: "card-title"
                }, [t._v(t._s(t.requirement.title))]), s("p", {
                    staticClass: "p-text"
                }, [s("vue-simple-markdown", {
                    attrs: {
                        source: t.requirement.text
                    }
                })], 1), t.requirement && t.requirement.test_cases.length ? s("h3", {
                    staticClass: "ul-title"
                }, [t._v(t._s(t.$t("Test cases")))]) : t._e(), t.requirement && t.requirement.test_cases.length ? s("ul", {
                    staticClass: "card-list sec-list"
                }, t._l(t.requirement.test_cases, (function(e) {
                    return s("li", {
                        staticClass: "card-list--item pl-1"
                    }, [s("h4", {
                        staticClass: "li-title"
                    }, [t._v(t._s(e.title))]), s("p", {
                        staticClass: "p-text"
                    }, [s("vue-simple-markdown", {
                        attrs: {
                            source: e.text
                        }
                    })], 1)])
                })), 0) : t._e()])])])]) : t._e()])
            },
            N = [],
            F = {
                name: "RequirementPage",
                data: function() {
                    return {
                        requirement: null
                    }
                },
                created: function() {
                    var t = this;
                    r["get"]("requirement/".concat(this.$route.params.requirementId)).then((function(e) {
                        t.requirement = e.data
                    })).catch((function(e) {
                        switch (e.response.status) {
                            case 404:
                                t.$router.push({
                                    name: "Page404"
                                });
                                break
                        }
                    }))
                }
            },
            G = F,
            H = Object(x["a"])(G, M, N, !1, null, null, null),
            U = H.exports,
            B = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("main", [s("div", {
                    staticClass: "container"
                }, [s("div", {
                    staticClass: "ml-auto mr-auto text-center"
                }, [s("div", {
                    staticClass: "number"
                }, [t._v("404")]), s("div", {
                    staticClass: "number-title"
                }, [t._v(t._s(t.$t("Ooops!!!")))]), s("div", {
                    staticClass: "number-subtitle"
                }, [t._v(t._s(t.$t("THAT PAGE DOES NOT EXIST OR IS UNAVAILABLE")))]), s("a", {
                    staticClass: "cta cta-link",
                    attrs: {
                        href: "/"
                    }
                }, [t._v(t._s(t.$t("go back to home")))])])])])
            },
            X = [],
            J = {
                name: "NotFoundPage"
            },
            V = J,
            W = Object(x["a"])(V, B, X, !1, null, null, null),
            z = W.exports;
        a["default"].use(w["a"]);
        var Y = [{
                path: "/:locale",
                component: {
                    template: "<router-view></router-view>"
                },
                beforeEnter: function(t, e, s) {
                    var a = t.params.locale;
                    return localStorage.setItem("locale", a), Object.keys(g.messages).includes(a) ? (g.locale = a, s()) : s(g.fallbackLocale)
                },
                children: [{
                    path: "",
                    name: "Home",
                    component: R
                }, {
                    path: "export",
                    name: "Export",
                    component: P
                }, {
                    path: "requirement/:requirementId",
                    name: "Requirement",
                    component: U
                }, {
                    path: "/404",
                    component: z,
                    name: "Page404"
                }]
            }, {
                path: "/",
                redirect: function() {
                    var t = localStorage.getItem("locale");
                    return Object.keys(g.messages).includes(t) || (t = g.fallbackLocale), t
                }
            }, {
                path: "/:pathMatch(.*)*",
                component: z
            }],
            K = new w["a"]({
                mode: "history",
                base: "/",
                routes: Y
            }),
            Q = K;
        new a["default"]({
            router: Q,
            i18n: g,
            render: function(t) {
                return t(y)
            },
            store: c
        }).$mount("#app")
    },
    "5c0b": function(t, e, s) {
        "use strict";
        s("9c0c")
    },
    "8d14": function(t, e, s) {
        t.exports = s.p + "img/alert.e95d0077.svg"
    },
    "9c0c": function(t, e, s) {},
    bb69: function(t) {
        t.exports = JSON.parse('{"Home":"Home","Categories":"Categories","contact us":"Contact us","Define your app functionality":"Services security checklist","Get requirements":"Get requirements","Security requirements generator":"AppSec security checklist service","Security Assessment":"Security Assessment","Test cases":"Test cases","Export":"Export","Download PDF":"Download PDF","Requirement":"Requirement","Make export again":"Make export again","Failed":"Failed","Something":"Something","went wrong":"went wrong","Ooops!!!":"Ooops!!!","THAT PAGE DOES NOT EXIST OR IS UNAVAILABLE":"THAT PAGE DOES NOT EXIST OR IS UNAVAILABLE ","go back to home":"go back to home","show details":"show details","you may mark it as important":"You may mark it as important","Make requirement as important or not":"Make requirement as important or not","Copy a link to these categories":"Copy a link to these categories","Success!":"Success!","Link copied to the clipboard":"Link copied to the clipboard"}')
    },
    e1dd: function(t, e, s) {
        t.exports = s.p + "img/wait.7e7f612e.svg"
    },
    e491: function(t, e, s) {
        t.exports = s.p + "img/main-img.cc01df31.svg"
    }
});
//# sourceMappingURL=app.6fb9b1ce.js.map