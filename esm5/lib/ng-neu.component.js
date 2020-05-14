/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-neu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'ng-neu',
                    template: "<div \r\n    [hidden]=\"(type === 'convex')\" \r\n    class=\"element element-1\"\r\n    [style.width]=\"width ? width : '200px'\"\r\n    [style.height]=\"height ? height : '200px'\"\r\n    [style.lineHeight]=\"height ? height : '200px'\"\r\n    [style.fontSize]=\"fontSize ? fontSize : '14px'\"\r\n    [style.backgroundColor]=\"background ? background : 'white'\"\r\n    [style.color]=\"color ? color : 'black'\"\r\n    >\r\n    {{text}}\r\n</div>\r\n<div \r\n    [hidden]=\"!(type === 'convex')\" \r\n    class=\"element element-2\"\r\n    [style.width]=\"width ? width : '200px'\"\r\n    [style.height]=\"height ? height : '200px'\"\r\n    [style.lineHeight]=\"height ? height : '200px'\"\r\n    [style.fontSize]=\"fontSize ? fontSize : '14px'\"\r\n    [style.backgroundColor]=\"background ? background : 'white'\"\r\n    [style.color]=\"color ? color : 'black'\"\r\n>\r\n    {{text}}\r\n</div>",
                    styles: [".element{align-items:center;box-shadow:6px 6px 7px 0 rgba(0,0,0,.25),-8px -8px 12px 0 rgba(255,255,255,.3);border-radius:50px;height:200px;width:200px;line-height:200px;text-align:center}.element-1:active{box-shadow:inset 6px 6px 10px 0 rgba(0,0,0,.2),inset -6px -6px 10px 0 rgba(255,255,255,.5)}.element-2:active{background:linear-gradient(135deg,rgba(0,0,0,.22),rgba(255,255,255,.25))}.element-2{background:linear-gradient(-45deg,rgba(0,0,0,.22),rgba(255,255,255,.25))}"]
                }] }
    ];
    /** @nocollapse */
    NgNeuComponent.ctorParameters = function () { return []; };
    NgNeuComponent.propDecorators = {
        type: [{ type: Input }],
        text: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        fontSize: [{ type: Input }],
        background: [{ type: Input }],
        color: [{ type: Input }]
    };
    return NgNeuComponent;
}());
export { NgNeuComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbmV1LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW5ldS8iLCJzb3VyY2VzIjpbImxpYi9uZy1uZXUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFlRTtRQVJTLFNBQUksR0FBVyxNQUFNLENBQUM7SUFRZixDQUFDOzs7O0lBRWpCLGlDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLDY0QkFBc0M7O2lCQUV2Qzs7Ozs7dUJBR0UsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7SUFPUixxQkFBQztDQUFBLEFBcEJELElBb0JDO1NBZlksY0FBYzs7O0lBRXpCLDhCQUErQjs7SUFDL0IsOEJBQXNCOztJQUN0QiwrQkFBdUI7O0lBQ3ZCLGdDQUF3Qjs7SUFDeEIsa0NBQTBCOztJQUMxQixvQ0FBNEI7O0lBQzVCLCtCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1uZXUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctbmV1LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmctbmV1LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ05ldUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ2ZsYXQnO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBmb250U2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=