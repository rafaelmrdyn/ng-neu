import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-neu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgNeuService {
    constructor() { }
}
NgNeuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgNeuService.ctorParameters = () => [];
/** @nocollapse */ NgNeuService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgNeuService_Factory() { return new NgNeuService(); }, token: NgNeuService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-neu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgNeuComponent {
    constructor() {
        this.type = 'flat';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgNeuComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-neu',
                template: "<div \r\n    [hidden]=\"(type === 'convex')\" \r\n    class=\"element element-1\"\r\n    [style.width]=\"width ? width : '200px'\"\r\n    [style.height]=\"height ? height : '200px'\"\r\n    [style.lineHeight]=\"height ? height : '200px'\"\r\n    [style.fontSize]=\"fontSize ? fontSize : '14px'\"\r\n    [style.backgroundColor]=\"background ? background : 'white'\"\r\n    [style.color]=\"color ? color : 'black'\"\r\n    >\r\n    {{text}}\r\n</div>\r\n<div \r\n    [hidden]=\"!(type === 'convex')\" \r\n    class=\"element element-2\"\r\n    [style.width]=\"width ? width : '200px'\"\r\n    [style.height]=\"height ? height : '200px'\"\r\n    [style.lineHeight]=\"height ? height : '200px'\"\r\n    [style.fontSize]=\"fontSize ? fontSize : '14px'\"\r\n    [style.backgroundColor]=\"background ? background : 'white'\"\r\n    [style.color]=\"color ? color : 'black'\"\r\n>\r\n    {{text}}\r\n</div>",
                styles: [".element{align-items:center;box-shadow:6px 6px 7px 0 rgba(0,0,0,.25),-8px -8px 12px 0 rgba(255,255,255,.3);border-radius:50px;height:200px;width:200px;line-height:200px;text-align:center}.element-1:active{box-shadow:inset 6px 6px 10px 0 rgba(0,0,0,.2),inset -6px -6px 10px 0 rgba(255,255,255,.5)}.element-2:active{background:linear-gradient(135deg,rgba(0,0,0,.22),rgba(255,255,255,.25))}.element-2{background:linear-gradient(-45deg,rgba(0,0,0,.22),rgba(255,255,255,.25))}"]
            }] }
];
/** @nocollapse */
NgNeuComponent.ctorParameters = () => [];
NgNeuComponent.propDecorators = {
    type: [{ type: Input }],
    text: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    fontSize: [{ type: Input }],
    background: [{ type: Input }],
    color: [{ type: Input }]
};
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
class NgNeuModule {
}
NgNeuModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgNeuComponent],
                imports: [],
                exports: [NgNeuComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-neu.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgNeuComponent, NgNeuModule, NgNeuService };
//# sourceMappingURL=ng-neu.js.map
