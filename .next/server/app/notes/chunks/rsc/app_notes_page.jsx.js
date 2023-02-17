(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/rsc/app_notes_page.jsx.js", {

"[project-with-next]/app/notes/page.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>NotesPage
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$link$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$pocketbase$2f$dist$2f$pocketbase$2e$es$2e$mjs__ = __turbopack_import__("[project-with-next]/node_modules/pocketbase/dist/pocketbase.es.mjs (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
async function NotesPage() {
    const db = new __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$pocketbase$2f$dist$2f$pocketbase$2e$es$2e$mjs__["default"]("http://127.0.0.1:8090");
    const result = await db.collection("posts").getList(1, 10);
    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("h2", {
                children: "Notes"
            }, void 0, false, {
                fileName: "<app/notes/page.jsx>",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
                children: result.items.map((note)=>{
                    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"](Note, {
                        note: note
                    }, note.id, false, {
                        fileName: "<app/notes/page.jsx>",
                        lineNumber: 20,
                        columnNumber: 18
                    }, this);
                })
            }, void 0, false, {
                fileName: "<app/notes/page.jsx>",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<app/notes/page.jsx>",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function Note({ note  }) {
    const { id , title , content , created  } = note || {};
    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$link$2e$js__["default"], {
        href: `/notes/${id}`,
        children: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
            children: [
                __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("h3", {
                    children: title
                }, void 0, false, {
                    fileName: "<app/notes/page.jsx>",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("p", {
                    children: content
                }, void 0, false, {
                    fileName: "<app/notes/page.jsx>",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("p", {
                    children: created
                }, void 0, false, {
                    fileName: "<app/notes/page.jsx>",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<app/notes/page.jsx>",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<app/notes/page.jsx>",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}

})()),
}]);


//# sourceMappingURL=app_notes_page.jsx.js.map