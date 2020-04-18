import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var YourLibService = /** @class */ (function () {
    function YourLibService() {
    }
    YourLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    YourLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ YourLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function YourLibService_Factory() { return new YourLibService(); }, token: YourLibService, providedIn: "root" });
    return YourLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var YourLibComponent = /** @class */ (function () {
    function YourLibComponent() {
    }
    /**
     * @return {?}
     */
    YourLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    YourLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-your-lib',
                    template: "\n    <p>\n      your-lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    YourLibComponent.ctorParameters = function () { return []; };
    return YourLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var YourLibModule = /** @class */ (function () {
    function YourLibModule() {
    }
    YourLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [YourLibComponent],
                    imports: [],
                    exports: [YourLibComponent]
                },] }
    ];
    return YourLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { YourLibComponent, YourLibModule, YourLibService };
//# sourceMappingURL=your-lib.js.map
