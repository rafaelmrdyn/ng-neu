(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-neu', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ng-neu'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-neu.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgNeuService = /** @class */ (function () {
        function NgNeuService() {
        }
        NgNeuService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgNeuService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgNeuService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgNeuService_Factory() { return new NgNeuService(); }, token: NgNeuService, providedIn: "root" });
        return NgNeuService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-neu.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgNeuComponent = /** @class */ (function () {
        function NgNeuComponent() {
            this.type = 'flat';
        }
        /**
         * @return {?}
         */
        NgNeuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        NgNeuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-neu',
                        template: "<div \r\n    [hidden]=\"(type === 'convex')\" \r\n    class=\"element element-1\"\r\n    [style.width]=\"width ? width : '200px'\"\r\n    [style.height]=\"height ? height : '200px'\"\r\n    [style.lineHeight]=\"height ? height : '200px'\"\r\n    [style.fontSize]=\"fontSize ? fontSize : '14px'\"\r\n    [style.backgroundColor]=\"background ? background : 'white'\"\r\n    [style.color]=\"color ? color : 'black'\"\r\n    >\r\n    {{text}}\r\n</div>\r\n<div \r\n    [hidden]=\"!(type === 'convex')\" \r\n    class=\"element element-2\"\r\n    [style.width]=\"width ? width : '200px'\"\r\n    [style.height]=\"height ? height : '200px'\"\r\n    [style.lineHeight]=\"height ? height : '200px'\"\r\n    [style.fontSize]=\"fontSize ? fontSize : '14px'\"\r\n    [style.backgroundColor]=\"background ? background : 'white'\"\r\n    [style.color]=\"color ? color : 'black'\"\r\n>\r\n    {{text}}\r\n</div>",
                        styles: [".element{align-items:center;background:linear-gradient(-45deg,rgba(0,0,0,.22),rgba(255,255,255,.25));box-shadow:6px 6px 7px 0 rgba(0,0,0,.25),-8px -8px 12px 0 rgba(255,255,255,.3);border-radius:50px;height:200px;width:200px;line-height:200px;text-align:center}.element-1:active{box-shadow:inset 6px 6px 10px 0 rgba(0,0,0,.2),inset -6px -6px 10px 0 rgba(255,255,255,.5)}.element-2:active{background:linear-gradient(135deg,rgba(0,0,0,.22),rgba(255,255,255,.25))}.element-2{background:linear-gradient(-45deg,rgba(0,0,0,.22),rgba(255,255,255,.25))}"]
                    }] }
        ];
        /** @nocollapse */
        NgNeuComponent.ctorParameters = function () { return []; };
        NgNeuComponent.propDecorators = {
            type: [{ type: core.Input }],
            text: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            fontSize: [{ type: core.Input }],
            background: [{ type: core.Input }],
            color: [{ type: core.Input }]
        };
        return NgNeuComponent;
    }());
    if (false) {
        /** @type {?} */
        NgNeuComponent.prototype.type;
        /** @type {?} */
        NgNeuComponent.prototype.text;
        /** @type {?} */
        NgNeuComponent.prototype.width;
        /** @type {?} */
        NgNeuComponent.prototype.height;
        /** @type {?} */
        NgNeuComponent.prototype.fontSize;
        /** @type {?} */
        NgNeuComponent.prototype.background;
        /** @type {?} */
        NgNeuComponent.prototype.color;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-neu.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgNeuModule = /** @class */ (function () {
        function NgNeuModule() {
        }
        NgNeuModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgNeuComponent],
                        imports: [],
                        exports: [NgNeuComponent]
                    },] }
        ];
        return NgNeuModule;
    }());

    exports.NgNeuComponent = NgNeuComponent;
    exports.NgNeuModule = NgNeuModule;
    exports.NgNeuService = NgNeuService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-neu.umd.js.map
