/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-neu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class NgNeuComponent {
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
                styles: [".element{align-items:center;background:linear-gradient(-45deg,rgba(0,0,0,.22),rgba(255,255,255,.25));box-shadow:6px 6px 7px 0 rgba(0,0,0,.25),-8px -8px 12px 0 rgba(255,255,255,.3);border-radius:50px;height:200px;width:200px;line-height:200px;text-align:center}.element-1:active{box-shadow:inset 6px 6px 10px 0 rgba(0,0,0,.2),inset -6px -6px 10px 0 rgba(255,255,255,.5)}.element-2:active{background:linear-gradient(135deg,rgba(0,0,0,.22),rgba(255,255,255,.25))}.element-2{background:linear-gradient(-45deg,rgba(0,0,0,.22),rgba(255,255,255,.25))}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbmV1LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW5ldS8iLCJzb3VyY2VzIjpbImxpYi9uZy1uZXUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLGNBQWM7SUFVekI7UUFSUyxTQUFJLEdBQVcsTUFBTSxDQUFDO0lBUWYsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsNjRCQUFzQzs7YUFFdkM7Ozs7O21CQUdFLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO29CQUNMLEtBQUs7Ozs7SUFOTiw4QkFBK0I7O0lBQy9CLDhCQUFzQjs7SUFDdEIsK0JBQXVCOztJQUN2QixnQ0FBd0I7O0lBQ3hCLGtDQUEwQjs7SUFDMUIsb0NBQTRCOztJQUM1QiwrQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctbmV1JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nLW5ldS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nLW5ldS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdOZXVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdmbGF0JztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nO1xuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgZm9udFNpemU6IHN0cmluZztcbiAgQElucHV0KCkgYmFja2dyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19