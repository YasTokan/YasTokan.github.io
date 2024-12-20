"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_home_home_module_ts"],{

/***/ 71005:
/*!*********************************************!*\
  !*** ./src/app/home/bags/bags.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BagsComponent": () => (/* binding */ BagsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_header_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header-two/header-two.component */ 63276);
/* harmony import */ var _shared_footer_footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer-two/footer-two.component */ 96017);
/* harmony import */ var _shared_components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/product/product-box-three/product-box-three.component */ 78533);
/* harmony import */ var _shared_components_product_product_box_five_product_box_five_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/product/product-box-five/product-box-five.component */ 19564);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 18358);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/slider/slider.component */ 45642);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/blog/blog.component */ 27301);














function BagsComponent_li_15_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-product-box-three", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("product", product_r8)("currency", ctx_r7.productService == null ? null : ctx_r7.productService.Currency);
} }
function BagsComponent_li_15_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BagsComponent_li_15_ng_template_3_ng_container_1_Template, 3, 2, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](2, 1, ctx_r6.getCollectionProducts(collection_r5), 0, 4));
} }
function BagsComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 47)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, BagsComponent_li_15_ng_template_3_Template, 3, 5, "ng-template", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", collection_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", collection_r5, " ");
} }
const _c0 = function () { return ["/shop/collection/left/sidebar"]; };
const _c1 = function () { return { category: "bags" }; };
function BagsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8)(1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", category_r10, " ");
} }
function BagsComponent_ng_container_49_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-product-box-five", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("product", product_r11)("currency", ctx_r12.productService == null ? null : ctx_r12.productService.Currency)("thumbnail", false)("onHowerChangeImage", false)("cartModal", true);
} }
function BagsComponent_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BagsComponent_ng_container_49_ng_template_1_Template, 3, 5, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function BagsComponent_ng_container_118_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-product-box-five", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("product", product_r14)("currency", ctx_r15.productService == null ? null : ctx_r15.productService.Currency)("thumbnail", false)("onHowerChangeImage", true)("cartModal", true);
} }
function BagsComponent_ng_container_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BagsComponent_ng_container_118_ng_template_1_Template, 2, 5, "ng-template", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
const _c2 = function () { return { "background-image": "url(assets/images/parallax/9.jpg)" }; };
class BagsComponent {
    constructor(productService) {
        this.productService = productService;
        this.themeLogo = 'assets/images/icon/logo-7.png'; // Change Logo
        this.themeLogoWhite = 'assets/images/icon/logo-8.png'; // Change Logo
        this.products = [];
        this.productCollections = [];
        this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
        this.ProductSliderOneConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductOneSlider;
        // Sliders
        this.sliders = [{
                title: 'summer sale',
                subTitle: 'the bag',
                image: 'assets/images/slider/25.jpg'
            }, {
                title: 'summer sale',
                subTitle: 'the bag',
                image: 'assets/images/slider/26.jpg'
            }, {
                title: 'summer sale',
                subTitle: 'the bag',
                image: 'assets/images/slider/27.jpg'
            }];
        // Categories
        this.categories = ['airbag', 'burn bag', 'briefcase', 'carpet', 'money bag', 'tucker'];
        // Blog
        this.blogs = [{
                image: 'assets/images/blog/37.jpg',
                date: '25 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/38.jpg',
                date: '26 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/39.jpg',
                date: '27 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/37.jpg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }];
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'bags');
            // Get Product Collection
            this.products.filter((item) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1)
                        this.productCollections.push(collection);
                });
            });
        });
    }
    ngOnInit() {
        // Change color for this layout
        document.documentElement.style.setProperty('--theme-deafult', '#f0b54d');
    }
    ngOnDestroy() {
        // Remove Color
        document.documentElement.style.removeProperty('--theme-deafult');
    }
    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find(i => i === collection)) {
                return item;
            }
        });
    }
}
BagsComponent.ɵfac = function BagsComponent_Factory(t) { return new (t || BagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
BagsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: BagsComponent, selectors: [["app-bags"]], decls: 131, vars: 81, consts: [[3, "themeLogo"], [1, "p-0"], [3, "sliders", "textClass", "category", "buttonText"], [1, "section-b-space"], [1, "container"], [1, "title2"], [1, "title-inner2"], [1, "row"], [1, "col"], [1, "theme-tab"], ["ngbNav", "", 1, "tabs", "tab-title", "justify-content-center", "nav", "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [1, "container", "category-button"], [1, "section-b-space", "border-section", "border-bottom-0"], [1, "row", "partition1"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "full-banner", "banner-layout-3", "parallax", "text-center", "p-center", 3, "ngStyle"], [1, "banner-contain"], [1, "color", "pt-0"], [1, "btn", "btn-solid", 3, "routerLink", "queryParams"], [1, "row", "partition3", "partition_3"], [1, "col-lg-4"], [1, "theme-card", "card-border"], [3, "title", "type"], [1, "col-lg-4", "center-slider", "border-0"], [1, "offer-slider", "slide-1", 3, "options"], [4, "ngFor", "ngForOf"], [1, "category-bg"], [1, "container-fluid", "p-0"], [1, "row", "order-section"], [1, "col-sm-4", "p-0"], [1, "image-block", 3, "routerLink", "queryParams"], ["src", "assets/images/categories/11.jpg", "alt", "", 1, "img-fluid"], [1, "contain-block", "even"], [3, "routerLink", "queryParams"], [1, "btn", "btn-solid", "category-btn", 3, "routerLink", "queryParams"], ["src", "assets/images/categories/12.jpg", "alt", "", 1, "img-fluid"], [1, "contain-block"], [1, "image-block", "even", 3, "routerLink", "queryParams"], ["src", "assets/images/categories/13.jpg", "alt", "", 1, "img-fluid"], [1, "section-b-space", "border-section", "border-top-0"], [1, "product-4", "product-m", "no-arrow", 3, "options"], [1, "blog", "section-b-space"], [1, "col-md-12"], [3, "blogs"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "no-slider", "row"], [1, "product-box"], [3, "product", "currency"], [1, "btn", "btn-outline", "btn-block", 3, "routerLink", "queryParams"], ["carouselSlide", ""], [1, "product-box", "product-wrap"], [3, "product", "currency", "thumbnail", "onHowerChangeImage", "cartModal"]], template: function BagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-header-two", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "new collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "trending products");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "ul", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("activeIdChange", function BagsComponent_Template_ul_activeIdChange_13_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, BagsComponent_li_15_Template, 4, 2, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 14)(18, "section", 15)(19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, BagsComponent_div_20_Template, 3, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "section", 1)(22, "div", 18)(23, "div", 4)(24, "div", 7)(25, "div", 8)(26, "div", 19)(27, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "special offer for you");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "leather bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "extra 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, " shop now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "section", 3)(36, "div", 4)(37, "div", 22)(38, "div", 23)(39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](40, "app-product-box-vertical-slider", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 26)(42, "div")(43, "div", 5)(44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "on sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "season sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "owl-carousel-o", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, BagsComponent_ng_container_49_Template, 2, 0, "ng-container", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](50, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 23)(52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "app-product-box-vertical-slider", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 29)(55, "div", 30)(56, "div", 31)(57, "div", 32)(58, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](59, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 32)(61, "div", 35)(62, "div")(63, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "new products");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "a", 36)(66, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "zipper storage bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, " -80% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "a", 36)(71, "h6")(72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "div", 32)(75, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](76, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "div", 32)(78, "div", 39)(79, "div")(80, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, "on sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "a", 36)(83, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "tucker bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, " save 30% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "a", 36)(88, "h6")(89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 32)(92, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](93, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div", 32)(95, "div", 39)(96, "div")(97, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](98, "summer sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "a", 36)(100, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, "gate check bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](103, " minimum 50% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "a", 36)(105, "h6")(106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](107, "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "div", 4)(109, "section", 42)(110, "div", 7)(111, "div", 8)(112, "div", 5)(113, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114, "trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116, "exclusive bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "owl-carousel-o", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](118, BagsComponent_ng_container_118_Template, 2, 0, "ng-container", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](119, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "section", 44)(121, "div", 4)(122, "div", 7)(123, "div", 45)(124, "div", 5)(125, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126, "recent story");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](128, "latest blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](129, "app-blog", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](130, "app-footer-two", 0);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center p-center")("category", "bags")("buttonText", "save up to 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.productCollections);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](54, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](55, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](56, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "New product")("type", "bags");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.ProductSliderOneConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](50, 46, ctx.products, 0, 8));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Feature product")("type", "bags");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](57, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](58, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](59, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](60, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](61, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](62, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](63, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](64, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](65, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](66, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](67, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](68, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](69, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](70, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](71, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](72, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](73, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](74, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](75, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](76, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](77, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](78, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](79, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](80, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](119, 50, ctx.products, 0, 8));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("blogs", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("themeLogo", ctx.themeLogoWhite);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavOutlet, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselSlideDirective, _shared_header_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_2__.HeaderTwoComponent, _shared_footer_footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_3__.FooterTwoComponent, _shared_components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxThreeComponent, _shared_components_product_product_box_five_product_box_five_component__WEBPACK_IMPORTED_MODULE_5__.ProductBoxFiveComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_6__.ProductBoxVerticalSliderComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__.SliderComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWdzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 40980:
/*!*************************************************!*\
  !*** ./src/app/home/beauty/beauty.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeautyComponent": () => (/* binding */ BeautyComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header-one/header-one.component */ 23618);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer-one/footer-one.component */ 71965);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/product/product-box-one/product-box-one.component */ 61572);
/* harmony import */ var _shared_components_modal_video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/modal/video-modal/video-modal.component */ 62542);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/slider/slider.component */ 45642);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/blog/blog.component */ 27301);











const _c0 = ["videoModal"];
function BeautyComponent_ng_container_54_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-product-box-one", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("product", product_r2)("currency", ctx_r3.productService == null ? null : ctx_r3.productService.Currency)("cartModal", true);
} }
function BeautyComponent_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BeautyComponent_ng_container_54_ng_template_1_Template, 2, 3, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
class BeautyComponent {
    constructor(productService) {
        this.productService = productService;
        this.themeLogo = 'assets/images/icon/logo-7.png'; // Change Logo
        this.products = [];
        this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
        // Sliders
        this.sliders = [{
                title: 'save upto 20%',
                subTitle: 'creative & decor',
                image: 'assets/images/slider/15.jpg'
            }, {
                title: 'save upto 10%',
                subTitle: 'pre-made & custom',
                image: 'assets/images/slider/16.jpg'
            }];
        // Blogs
        this.blogs = [{
                image: 'assets/images/blog/20.jpg',
                date: '25 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/21.jpg',
                date: '26 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/22.jpg',
                date: '27 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/23.jpg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }];
        this.productService.getProducts.subscribe(response => this.products = response.filter(item => item.type == 'beauty'));
    }
    ngOnInit() {
        // Change color for this layout
        document.documentElement.style.setProperty('--theme-deafult', '#f0b54d');
    }
    ngOnDestroy() {
        // Remove Color
        document.documentElement.style.removeProperty('--theme-deafult');
    }
}
BeautyComponent.ɵfac = function BeautyComponent_Factory(t) { return new (t || BeautyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
BeautyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: BeautyComponent, selectors: [["app-beauty"]], viewQuery: function BeautyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.VideoModal = _t.first);
    } }, decls: 86, vars: 13, consts: [[3, "themeLogo"], [1, "p-0"], [3, "sliders", "textClass", "category", "buttonText"], [1, "section-b-space", "beauty-about"], [1, "container"], [1, "row"], [1, "col-xl-5", "col-lg-6", "col-md-12", "offset-xl-1", "text-center"], ["src", "assets/images/about-main2.jpg", "alt", "", 1, "img-fluid"], [1, "col-xl-5", "col-lg-6", "col-md-12"], [1, "about-section"], [1, "about-text"], [1, "service", "small-section", "pb-0"], [1, "col-sm-4", "service-block1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -117 679.99892 679"], ["d", "m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0", "fill", "#ff4c3b"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Capa_1", "x", "0px", "y", "0px", "viewBox", "0 0 480 480", 0, "xml", "space", "preserve", "width", "512px", "height", "512px", 2, "enable-background", "new 0 0 480 480"], ["d", "M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z", "fill", "#ff4c3b"], ["d", "M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z", "fill", "#ff4c3b"], ["d", "M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z", "fill", "#ff4c3b"], ["d", "M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z", "fill", "#ff4c3b"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -14 512.00001 512"], ["d", "m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0", "fill", "#ff4c3b"], ["d", "m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0", "fill", "#ff4c3b"], ["d", "m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0", "fill", "#ff4c3b"], ["d", "m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0", "fill", "#ff4c3b"], ["d", "m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0", "fill", "#ff4c3b"], ["d", "m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0", "fill", "#ff4c3b"], [1, "title1"], [1, "title-inner1"], [1, "p-t-0"], [1, "col"], [1, "product-5", "product-m", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], [1, "video-section"], [1, "col-md-8", "offset-md-2"], ["href", "javascript:void(0)"], [1, "video-img"], ["src", "assets/images/video-modal.jpg", "alt", "", 1, "img-fluid"], [1, "play-btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-play"], [1, "blog", "p-t-0", "section-b-space"], [1, "title1", "section-t-space"], [1, "col-md-12"], [3, "blogs"], ["videoModal", ""], ["carouselSlide", ""], [1, "product-box"], [3, "product", "currency", "cartModal"]], template: function BeautyComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-header-one", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div")(11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "about us");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10)(14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.sit voluptatem accusantium doloremque laudantium,totam rem aperiam. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 11)(17, "div", 5)(18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "free shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "svg", 15)(25, "g")(26, "g")(27, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "path", 16)(29, "path", 17)(30, "path", 18)(31, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "24 X 7 service");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "path", 21)(37, "path", 22)(38, "path", 23)(39, "path", 24)(40, "path", 25)(41, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "festival offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 27)(45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "new products");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "section", 29)(50, "div", 4)(51, "div", 5)(52, "div", 30)(53, "owl-carousel-o", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, BeautyComponent_ng_container_54_Template, 2, 0, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](55, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "section", 33)(57, "div", 27)(58, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "product tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 4)(63, "div", 5)(64, "div", 34)(65, "a", 35)(66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](67, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BeautyComponent_Template_div_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](84); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r1.openModal()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](70, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "section", 40)(72, "div", 4)(73, "div", 5)(74, "div", 30)(75, "div", 41)(76, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "Recent Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "from the blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 5)(81, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](82, "app-blog", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](83, "app-video-modal", null, 44)(85, "app-footer-one", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center")("category", "beauty")("buttonText", "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](55, 9, ctx.products, 0, 16));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("blogs", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselSlideDirective, _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOneComponent, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_3__.FooterOneComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxOneComponent, _shared_components_modal_video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_5__.VideoModalComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__.SliderComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__.BlogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZWF1dHkuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 87185:
/*!***********************************************************!*\
  !*** ./src/app/home/electronics/electronics.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElectronicsComponent": () => (/* binding */ ElectronicsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/header/header-one/header-one.component */ 23618);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/footer/footer-one/footer-one.component */ 71965);
/* harmony import */ var _shared_components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/product/product-box-three/product-box-three.component */ 78533);
/* harmony import */ var _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/modal/cart-variation/cart-variation.component */ 39137);









const _c0 = function () { return ["/shop/collection/left/sidebar"]; };
const _c1 = function () { return { category: "electronics" }; };
function ElectronicsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "a", 8)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 26)(5, "div")(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const collection_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", collection_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](collection_r3.save);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](collection_r3.title);
} }
function ElectronicsComponent_li_24_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-product-box-three", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("product", product_r7)("currency", ctx_r6.productService == null ? null : ctx_r6.productService.Currency);
} }
function ElectronicsComponent_li_24_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ElectronicsComponent_li_24_ng_template_3_ng_container_1_Template, 3, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, ctx_r5.getCollectionProducts(collection_r4), 0, 8));
} }
function ElectronicsComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 27)(1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ElectronicsComponent_li_24_ng_template_3_Template, 3, 5, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavItem", collection_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", collection_r4, " ");
} }
class ElectronicsComponent {
    constructor(productService) {
        this.productService = productService;
        this.themeLogo = 'assets/images/icon/logo-10.png'; // Change Logo
        this.products = [];
        this.productCollections = [];
        // Collection banner
        this.collections = [{
                image: 'assets/images/collection/electronics/1.jpg',
                save: '10% off',
                title: 'speaker'
            }, {
                image: 'assets/images/collection/electronics/2.jpg',
                save: '10% off',
                title: 'earplug'
            },
            {
                image: 'assets/images/collection/electronics/3.jpg',
                save: '10% off',
                title: 'best deal'
            }];
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'electronics');
            // Get Product Collection
            this.products.filter((item) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1)
                        this.productCollections.push(collection);
                });
            });
        });
    }
    ngOnInit() {
        // Change color for this layout
        document.documentElement.style.setProperty('--theme-deafult', '#6d7e87');
    }
    ngOnDestroy() {
        // Remove Color
        document.documentElement.style.removeProperty('--theme-deafult');
    }
    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find(i => i === collection)) {
                return item;
            }
        });
    }
}
ElectronicsComponent.ɵfac = function ElectronicsComponent_Factory(t) { return new (t || ElectronicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
ElectronicsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ElectronicsComponent, selectors: [["app-electronics"]], decls: 28, vars: 15, consts: [[3, "themeLogo"], [1, "container", "banner-slider"], [1, "row"], [1, "col-md-7"], ["src", "assets/images/banner/1.jpg", "alt", "electronics", 1, "img-fluid", "height-banner"], [1, "col-md-5"], [1, "row", "home-banner"], [1, "col-12"], [3, "routerLink", "queryParams"], ["src", "assets/images/banner/2.jpg", "alt", "electronics", 1, "img-fluid"], ["src", "assets/images/banner/3.jpg", "alt", "electronics", 1, "img-fluid"], [1, "banner-padding", "banner-goggles"], [1, "container"], [1, "row", "partition3"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "section-b-space"], [1, "col"], [1, "theme-tab"], ["ngbNav", "", 1, "tabs", "tab-title", "justify-content-center", "nav", "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "direction"], [1, "col-md-4"], [1, "collection-banner", "p-right", "text-end"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "contain-banner", "banner-3"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "no-slider", "row"], [4, "ngFor", "ngForOf"], [1, "product-box"], [3, "product", "currency"]], template: function ElectronicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header-one", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "section", 11)(14, "div", 12)(15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ElectronicsComponent_div_16_Template, 10, 7, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "section", 15)(18, "div", 12)(19, "div", 2)(20, "div", 16)(21, "div", 17)(22, "ul", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activeIdChange", function ElectronicsComponent_Template_ul_activeIdChange_22_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ElectronicsComponent_li_24_Template, 4, 2, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "app-cart-variation", 22)(27, "app-footer-one", 0);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.productCollections);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavOutlet", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("direction", "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavOutlet, _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_1__.HeaderOneComponent, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_2__.FooterOneComponent, _shared_components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxThreeComponent, _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_4__.CartVariationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbGVjdHJvbmljcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 86705:
/*!*******************************************************************!*\
  !*** ./src/app/home/fashion/fashion-one/fashion-one.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FashionOneComponent": () => (/* binding */ FashionOneComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 53225);
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ 85378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/product.service */ 90773);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/header/header-one/header-one.component */ 23618);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/footer/footer-one/footer-one.component */ 71965);
/* harmony import */ var _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/services/services.component */ 29313);










const _c0 = function () { return ["/pages/projects"]; };
function FashionOneComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "a", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 16)(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", collection_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](collection_r1.title);
} }
(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_6__.marker)('FASHION_ONE.COLLECTIONS.FAIR.TITLE');
(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_6__.marker)('FASHION_ONE.COLLECTIONS.FAIR.DESC');
(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_6__.marker)('FASHION_ONE.COLLECTIONS.HAYAT.TITLE');
(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_6__.marker)('FASHION_ONE.COLLECTIONS.HAYAT.DESC');
(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_6__.marker)('FASHION_ONE.COLLECTIONS.NAK.TITLE');
(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_6__.marker)('FASHION_ONE.COLLECTIONS.NAK.DESC');
(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_6__.marker)('FASHION_ONE.COLLECTIONS.MARINA.TITLE');
(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_6__.marker)('FASHION_ONE.COLLECTIONS.MARINA.DESC');
class FashionOneComponent {
    constructor(productService, translate) {
        this.productService = productService;
        this.translate = translate;
        this.products = [];
        this.productCollections = [];
        this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
        this.sliders = [
            {
                title: 'welcome UAE',
                subTitle: 'Dubai',
                image: 'assets/images/slider/123/3.webp',
            },
            {
                title: 'According to your needs',
                subTitle: 'Nakhlat Deira',
                image: 'assets/images/slider/123/dubai-island.jpg',
            },
            {
                title: 'We will find you the best',
                subTitle: 'Marina',
                image: 'assets/images/slider/123/marina.avif',
            }
        ];
        // Collection banner
        this.collections = [
            {
                //image: 'assets/images/collection/hotels/gh310.jpg',
                save: 'Grand Hyatt Dubai',
                title: 'Dubai',
                subTitle: 'Nakhlat Deira',
                image: 'https://www.namasteui.com/wp-content/uploads/2018/08/front-end-web-development.jpg',
            },
            {
                //image: 'assets/images/collection/hotels/ajm310.jpg',
                save: 'Fairmont Ajman',
                title: 'Marina',
                subTitle: 'We will find you the best',
                image: 'https://saigontechnology.com/assets/media/Blog/typical-process-for-a-successful-mobile-development.jpeg',
            },
            {
                //image: 'assets/images/collection/hotels/ajm310.jpg',
                save: 'Fairmont Ajman',
                title: 'Marina',
                subTitle: 'We will find you the best',
                image: 'https://plopdo.com/wp-content/uploads/2021/10/What-is-back-end-development-2.jpg',
            },
            {
                //image: 'assets/images/collection/hotels/ajm310.jpg',
                save: 'Fairmont Ajman',
                title: 'Marina',
                subTitle: 'We will find you the best',
                image: 'https://ik.imagekit.io/mdzi40eohii/tsc/Full_Stack_Image_daa0e85929_mkCd6n2su.png?tr=w-3840,q-75',
            },
        ];
        // Blog
        this.blog = [
            {
                image: 'assets/images/blog/1.jpg',
                date: '25 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio',
            },
            {
                image: 'assets/images/blog/2.jpg',
                date: '26 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio',
            },
            {
                image: 'assets/images/blog/3.jpg',
                date: '27 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio',
            },
            {
                image: 'assets/images/blog/4.jpg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio',
            },
        ];
        // Logo
        this.logo = [
            {
                image: 'assets/images/logos/1.png',
            },
            {
                image: 'assets/images/logos/2.png',
            },
            {
                image: 'assets/images/logos/3.png',
            },
            {
                image: 'assets/images/logos/4.png',
            },
            {
                image: 'assets/images/logos/5.png',
            },
            {
                image: 'assets/images/logos/6.png',
            },
            {
                image: 'assets/images/logos/7.png',
            },
            {
                image: 'assets/images/logos/8.png',
            },
        ];
        this.syncTR();
        this.productService.getProducts.subscribe((response) => {
            this.products = response.filter((item) => item.type == 'fashion');
            // Get Product Collection
            this.products.filter((item) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1)
                        this.productCollections.push(collection);
                });
            });
        });
    }
    ngOnInit() { }
    syncTR() {
        this.sliders[0].title = this.translate.instant('HOME.WELCOME_UAE');
        this.sliders[1].title = this.translate.instant('HOME.FIND_BEST');
        this.sliders[2].title = this.translate.instant('HOME.ACC_NEEDS');
        this.sliders[0].subTitle = this.translate.instant('HOME.DUBAI');
        this.sliders[1].subTitle = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.TITLE');
        this.sliders[2].subTitle = this.translate.instant('FASHION_ONE.COLLECTIONS.MARINA.TITLE');
        this.collections[0].title = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.TITLE');
        this.collections[0].save = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.DESC');
        this.collections[1].title = this.translate.instant('FASHION_ONE.COLLECTIONS.HAYAT.TITLE');
        this.collections[1].save = this.translate.instant('FASHION_ONE.COLLECTIONS.HAYAT.DESC');
        this.collections[3].title = this.translate.instant('FASHION_ONE.COLLECTIONS.FAIR.TITLE');
        this.collections[3].save = this.translate.instant('FASHION_ONE.COLLECTIONS.FAIR.DESC');
        this.collections[2].title = this.translate.instant('FASHION_ONE.COLLECTIONS.MARINA.TITLE');
        this.collections[2].save = this.translate.instant('FASHION_ONE.COLLECTIONS.MARINA.DESC');
        this.trSub = this.translate.onLangChange.subscribe((data) => {
            this.sliders[0].title = this.translate.instant('HOME.WELCOME_UAE');
            this.sliders[1].title = this.translate.instant('HOME.FIND_BEST');
            this.sliders[2].title = this.translate.instant('HOME.ACC_NEEDS');
            this.sliders[0].subTitle = this.translate.instant('HOME.DUBAI');
            this.sliders[1].subTitle = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.TITLE');
            this.sliders[2].subTitle = this.translate.instant('FASHION_ONE.COLLECTIONS.MARINA.TITLE');
            this.collections[0].title = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.TITLE');
            this.collections[0].save = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.DESC');
            this.collections[2].title = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.TITLE');
            this.collections[2].save = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.DESC');
        });
    }
    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find((i) => i === collection)) {
                return item;
            }
        });
    }
    OnDestroy() {
        this.trSub = null;
    }
}
FashionOneComponent.ɵfac = function FashionOneComponent_Factory(t) { return new (t || FashionOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService)); };
FashionOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FashionOneComponent, selectors: [["app-fashion-one"]], decls: 25, vars: 5, consts: [[3, "sticky"], [1, "p-0"], [1, "title1", "section-t-space"], [1, "title-inner1"], [1, "container"], [1, "row"], [1, "col-lg-6", "offset-lg-3"], [1, "product-para"], [1, "text-center"], [1, "service", "border-section", "small-section"], [1, "pb-0"], [1, "row", "partition2"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [3, "routerLink"], [1, "collection-banner", "p-right", "text-center"], ["alt", "collection-banner", 1, "img-fluid", 2, "max-height", "300px", 3, "src"], [1, "contain-banner"], [2, "text-align", "center"]], template: function FashionOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header-one", 0)(1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " My Foundation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " I\u2019m Yasine Tokan, an Information Technology Engineer specializing in Software Engineering and Data Structures, with over nine years of experience as a Full Stack Developer. My background enables me to create high-impact web and mobile applications that drive business success, focusing on scalable, responsive solutions using modern frameworks like Angular, NodeJS, and Flutter. I\u2019m passionate about enhancing user experience and optimizing performance through advanced API integrations, real-time communication, and microservices architectures. In addition to my technical expertise, I have completed a business training camp, equipping me with a strong understanding of how to align technology solutions with strategic business goals. Throughout my career, I\u2019ve contributed to projects at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Top Spots FZE, ShoofBook LLC, and TechnoWave");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, ", collaborating within agile teams to deliver solutions that meet the needs of clients and users alike. Continuously expanding my technical skill set, I stay updated with industry trends to bring innovative and effective solutions to every project I undertake. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 4)(18, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "section", 10)(21, "div", 4)(22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, FashionOneComponent_div_23_Template, 8, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "app-footer-one");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, "HOME.GOAL.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.collections);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOneComponent, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_3__.FooterOneComponent, _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_4__.ServicesComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXNoaW9uLW9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 43384:
/*!***********************************************************************!*\
  !*** ./src/app/home/fashion/fashion-three/fashion-three.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FashionThreeComponent": () => (/* binding */ FashionThreeComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/footer/footer-one/footer-one.component */ 71965);
/* harmony import */ var _shared_header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/header/header-three/header-three.component */ 45888);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 61572);
/* harmony import */ var _shared_components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/modal/newsletter/newsletter.component */ 99078);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/slider/slider.component */ 45642);











function FashionThreeComponent_ng_container_19_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-product-box-one", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r3)("currency", ctx_r4.productService == null ? null : ctx_r4.productService.Currency)("onHowerChangeImage", true)("cartModal", true);
} }
function FashionThreeComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, FashionThreeComponent_ng_container_19_ng_template_1_Template, 2, 4, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function FashionThreeComponent_li_44_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r9)("currency", ctx_r8.productService == null ? null : ctx_r8.productService.Currency);
} }
function FashionThreeComponent_li_44_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, FashionThreeComponent_li_44_ng_template_3_ng_container_1_Template, 3, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, ctx_r7.getCollectionProducts(collection_r6), 0, 4));
} }
function FashionThreeComponent_li_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 26)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, FashionThreeComponent_li_44_ng_template_3_Template, 3, 5, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngbNavItem", collection_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", collection_r6, " ");
} }
const _c0 = function () { return { "background-image": "url(assets/images/bg-image.jpg)" }; };
const _c1 = function () { return { "background-image": "url(assets/images/parallax/3.jpg)" }; };
class FashionThreeComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
        this.productCollections = [];
        this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
        this.sliders = [{
                title: 'welcome to fashion',
                subTitle: 'Men fashion',
                image: 'assets/images/slider/5.jpg'
            }, {
                title: 'welcome to fashion',
                subTitle: 'Women fashion',
                image: 'assets/images/slider/6.jpg'
            }];
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'fashion');
            // Get Product Collection
            this.products.filter((item) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1)
                        this.productCollections.push(collection);
                });
            });
        });
    }
    ngOnInit() {
        document.body.classList.add('box-layout-body');
    }
    ngOnDestroy() {
        document.body.classList.remove('box-layout-body');
    }
    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find(i => i === collection)) {
                return item;
            }
        });
    }
}
FashionThreeComponent.ɵfac = function FashionThreeComponent_Factory(t) { return new (t || FashionThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
FashionThreeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FashionThreeComponent, selectors: [["app-fashion-three"]], decls: 48, vars: 17, consts: [[1, "p-0"], [3, "sliders", "textClass", "category", "buttonText"], [1, "container", "box-layout", "bg-image", 3, "ngStyle"], [1, "section-b-space"], [1, "container"], [1, "title1"], [1, "title-inner1"], [1, "row"], [1, "col-xl-6", "offset-xl-3"], [1, "product-para"], [1, "text-center"], [1, "col"], [1, "product-m", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], [1, "full-banner", "parallax-banner1", "parallax", "text-center", "p-left", 3, "ngStyle"], [1, "banner-contain"], [1, "title1", "section-t-space"], [1, "section-b-space", "p-t-0"], [1, "col", "theme-tab"], ["ngbNav", "", 1, "tabs", "tab-title", "justify-content-center", "nav", "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], ["carouselSlide", ""], [1, "product-box"], [3, "product", "currency", "onHowerChangeImage", "cartModal"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "no-slider", "row"], [3, "product", "currency"]], template: function FashionThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header-three");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "section", 3)(5, "div", 4)(6, "div", 5)(7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "top collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7)(17, "div", 11)(18, "owl-carousel-o", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, FashionThreeComponent_ng_container_19_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "section", 0)(22, "div", 14)(23, "div", 4)(24, "div", 7)(25, "div", 11)(26, "div", 15)(27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "fashion trends");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 16)(34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "exclusive products");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "special products");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "section", 17)(39, "div", 4)(40, "div", 7)(41, "div", 18)(42, "ul", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("activeIdChange", function FashionThreeComponent_Template_ul_activeIdChange_42_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, FashionThreeComponent_li_44_Template, 4, 2, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "app-newsletter")(47, "app-footer-one");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center")("category", "fashion")("buttonText", "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](20, 11, ctx.products, 0, 16));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.productCollections);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngbNavOutlet", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavOutlet, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselSlideDirective, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_2__.FooterOneComponent, _shared_header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_3__.HeaderThreeComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxOneComponent, _shared_components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_5__.NewsletterComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__.SliderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXNoaW9uLXRocmVlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 42711:
/*!*******************************************************************!*\
  !*** ./src/app/home/fashion/fashion-two/fashion-two.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FashionTwoComponent": () => (/* binding */ FashionTwoComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_header_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/header/header-two/header-two.component */ 63276);
/* harmony import */ var _shared_footer_footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/footer/footer-two/footer-two.component */ 96017);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 61572);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 18358);
/* harmony import */ var _shared_components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/modal/newsletter/newsletter.component */ 99078);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/slider/slider.component */ 45642);












const _c0 = function () { return ["/shop/collection/left/sidebar"]; };
const _c1 = function () { return { category: "fashion" }; };
function FashionTwoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "a", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 29)(5, "div")(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const collection_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", collection_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](collection_r4.save);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](collection_r4.title);
} }
function FashionTwoComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "a", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 29)(5, "div")(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const collection_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", collection_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](collection_r5.save);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](collection_r5.title);
} }
function FashionTwoComponent_li_22_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-product-box-one", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("product", product_r9)("currency", ctx_r8.productService == null ? null : ctx_r8.productService.Currency);
} }
function FashionTwoComponent_li_22_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FashionTwoComponent_li_22_ng_template_3_ng_container_1_Template, 3, 2, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](2, 1, ctx_r7.getCollectionProducts(collection_r6), 0, 4));
} }
function FashionTwoComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 30)(1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FashionTwoComponent_li_22_ng_template_3_Template, 3, 5, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngbNavItem", collection_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", collection_r6, " ");
} }
const _c2 = function () { return { "background-image": "url(assets/images/parallax/2.jpg)" }; };
class FashionTwoComponent {
    constructor(productService) {
        this.productService = productService;
        this.themeLogo = 'assets/images/icon/logo-5.png'; // Change Logo
        this.products = [];
        this.productCollections = [];
        this.HomeSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.HomeSlider;
        this.sliders = [{
                title: 'welcome to fashion',
                subTitle: 'Men fashion',
                image: 'assets/images/slider/3.jpg'
            }, {
                title: 'welcome to fashion',
                subTitle: 'Women fashion',
                image: 'assets/images/slider/4.jpg'
            }];
        // Collection banner
        this.collections1 = [{
                image: 'assets/images/collection/fashion/3.jpg',
                save: 'save 30%',
                title: 'Women'
            }, {
                image: 'assets/images/collection/fashion/4.jpg',
                save: 'save 50%',
                title: 'Watch'
            }];
        this.collections2 = [{
                image: 'assets/images/collection/fashion/5.jpg',
                save: 'save 30%',
                title: 'Sandle'
            }, {
                image: 'assets/images/collection/fashion/6.jpg',
                save: 'save 10%',
                title: 'Kids'
            }];
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'fashion');
            // Get Product Collection
            this.products.filter((item, i) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1)
                        this.productCollections.push(collection);
                });
            });
        });
    }
    ngOnInit() {
    }
    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find(i => i === collection)) {
                return item;
            }
        });
    }
}
FashionTwoComponent.ɵfac = function FashionTwoComponent_Factory(t) { return new (t || FashionTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
FashionTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: FashionTwoComponent, selectors: [["app-fashion-two"]], decls: 49, vars: 17, consts: [[3, "sticky"], [1, "p-0"], [3, "sliders", "textClass", "category", "buttonText"], [1, "banner-padding", "banner-furniture"], [1, "container-fluid"], [1, "row", "partition2"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "title1", "section-t-space"], [1, "title-inner1"], [1, "section-b-space", "p-t-0"], [1, "container"], [1, "row"], [1, "col", "theme-tab"], ["ngbNav", "", 1, "tabs", "tab-title", "justify-content-center", "nav", "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [1, "full-banner", "parallax-banner1", "parallax", "text-center", "p-left", 3, "ngStyle"], [1, "col"], [1, "banner-contain"], [1, "section-b-space"], [1, "row", "multiple-slider"], [1, "col-lg-3", "col-sm-6"], [3, "title"], [3, "themeLogo"], [1, "col-md-6"], [3, "routerLink", "queryParams"], [1, "collection-banner", "p-left", "text-start"], ["alt", "collection-banner", 1, "img-fluid", 3, "src"], [1, "contain-banner"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "no-slider", "row"], [4, "ngFor", "ngForOf"], [1, "product-box"], [3, "product", "currency"]], template: function FashionTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-header-two", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, FashionTwoComponent_div_6_Template, 10, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "section", 3)(8, "div", 4)(9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, FashionTwoComponent_div_10_Template, 10, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 7)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "exclusive products");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "special products");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "section", 9)(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "ul", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("activeIdChange", function FashionTwoComponent_Template_ul_activeIdChange_20_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, FashionTwoComponent_li_22_Template, 4, 2, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "section", 1)(25, "div", 17)(26, "div", 10)(27, "div", 11)(28, "div", 18)(29, "div", 19)(30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "fashion trends");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "section", 20)(37, "div", 10)(38, "div", 21)(39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "app-product-box-vertical-slider", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "app-product-box-vertical-slider", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "app-product-box-vertical-slider", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "app-product-box-vertical-slider", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "app-newsletter")(48, "app-footer-two", 24);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("sticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center")("category", "fashion")("buttonText", "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.collections1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.collections2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.productCollections);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngbNavOutlet", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "New product");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Sell product");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Feature Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Best Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavOutlet, _shared_header_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_2__.HeaderTwoComponent, _shared_footer_footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_3__.FooterTwoComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_5__.ProductBoxVerticalSliderComponent, _shared_components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__.NewsletterComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__.SliderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXNoaW9uLXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 22023:
/*!*************************************************!*\
  !*** ./src/app/home/flower/flower.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlowerComponent": () => (/* binding */ FlowerComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/footer/footer-one/footer-one.component */ 71965);
/* harmony import */ var _shared_header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/header/header-three/header-three.component */ 45888);
/* harmony import */ var _shared_components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/product/product-box-two/product-box-two.component */ 63603);
/* harmony import */ var _shared_components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/product/product-box-vertical/product-box-vertical.component */ 34864);
/* harmony import */ var _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/modal/cart-variation/cart-variation.component */ 39137);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/slider/slider.component */ 45642);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/blog/blog.component */ 27301);
/* harmony import */ var _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/services/services.component */ 29313);















function FlowerComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-product-box-vertical", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r6)("currency", ctx_r0.productService == null ? null : ctx_r0.productService.Currency);
} }
function FlowerComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-product-box-two", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r7)("currency", ctx_r1.productService == null ? null : ctx_r1.productService.Currency);
} }
function FlowerComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-product-box-vertical", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r8)("currency", ctx_r2.productService == null ? null : ctx_r2.productService.Currency);
} }
function FlowerComponent_li_60_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 51)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-product-box-vertical", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r12)("currency", ctx_r11.productService == null ? null : ctx_r11.productService.Currency);
} }
function FlowerComponent_li_60_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, FlowerComponent_li_60_ng_template_3_ng_container_1_Template, 4, 2, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](2, 1, ctx_r10.getCollectionProducts(collection_r9), 0, 8));
} }
function FlowerComponent_li_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 47)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, FlowerComponent_li_60_ng_template_3_Template, 3, 5, "ng-template", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", collection_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", collection_r9, " ");
} }
function FlowerComponent_ng_container_72_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-product-box-two", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r14)("currency", ctx_r15.productService == null ? null : ctx_r15.productService.Currency);
} }
function FlowerComponent_ng_container_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, FlowerComponent_ng_container_72_ng_template_1_Template, 2, 2, "ng-template", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return ["/shop/collection/left/sidebar"]; };
const _c1 = function () { return { category: "flower" }; };
const _c2 = function () { return { "background-image": "url(assets/images/flower-bg1.jpg)" }; };
const _c3 = function () { return { "background-image": "url(assets/images/flower-bg.jpg)" }; };
class FlowerComponent {
    constructor(productService) {
        this.productService = productService;
        this.themeLogo = 'assets/images/icon/logo-11.png'; // Change Logo
        this.products = [];
        this.productCollections = [];
        this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
        this.sliders = [{
                title: 'save upto 20%',
                subTitle: 'creative & decor',
                image: 'assets/images/slider/13.jpg'
            }, {
                title: 'save upto 10%',
                subTitle: 'pre-made & custom',
                image: 'assets/images/slider/14.jpg'
            }];
        // Blog
        this.blogs = [{
                image: 'assets/images/blog/17.jpg',
                date: '25 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/18.jpg',
                date: '26 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/19.jpg',
                date: '27 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/17.jpg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }];
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'flower');
            // Get Product Collection
            this.products.filter((item) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1)
                        this.productCollections.push(collection);
                });
            });
        });
    }
    ngOnInit() {
        // Change color for this layout
        document.documentElement.style.setProperty('--theme-deafult', '#fa869b');
    }
    ngOnDestroy() {
        // Remove Color
        document.documentElement.style.removeProperty('--theme-deafult');
    }
    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find(i => i === collection)) {
                return item;
            }
        });
    }
}
FlowerComponent.ɵfac = function FlowerComponent_Factory(t) { return new (t || FlowerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
FlowerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: FlowerComponent, selectors: [["app-flower"]], decls: 91, vars: 44, consts: [[3, "themeLogo"], [1, "p-0"], [3, "sliders", "textClass", "category", "buttonText"], [1, "banner-padding", "pb-0"], [1, "container"], [1, "row", "partition2"], [1, "col-md-4"], [3, "routerLink", "queryParams"], [1, "collection-banner", "p-left", "text-center"], ["src", "assets/images/collection/flower/1.jpg", "alt", "banner", 1, "img-fluid"], [1, "col-md-8"], [1, "collection-banner", "p-right", "text-end"], ["src", "assets/images/collection/flower/2.jpg", "alt", "banner", 1, "img-fluid"], [1, "contain-banner"], [1, "section-b-space"], [1, "full-box"], [1, "title4"], [1, "title-inner4"], [1, "line"], [1, "row"], [1, "theme-card", "center-align"], [1, "offer-slider"], [1, "sec-1"], ["class", "product-box2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "center-slider"], ["class", "product-box product-wrap text-center", 4, "ngFor", "ngForOf"], [1, "bg-block", 3, "ngStyle"], [1, "container-fluid"], [1, "col"], [1, "theme-tab"], ["ngbNav", "", 1, "tabs", "tab-title", "justify-content-center", "nav", "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [1, "product-4", "product-m", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], [1, "blog", "flower-bg", "section-b-space", 3, "ngStyle"], [1, "title1", "section-t-space"], [1, "title-inner1"], [1, "col-md-12"], [3, "blogs"], [1, "container", "section-t-space", "section-b-space"], [1, "service", "border-section", "small-section"], [3, "direction"], [1, "product-box2"], [3, "product", "currency"], [1, "product-box", "product-wrap", "text-center"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "row", "product-tab"], [1, "tab-box"], ["carouselSlide", ""], [1, "product-box", "product-wrap"]], template: function FlowerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-header-three", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 10)(11, "a", 7)(12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 13)(15, "div")(16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "save 30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "hot deal");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "section", 14)(21, "div", 15)(22, "div", 4)(23, "div", 16)(24, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "best selling products");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 19)(29, "div", 6)(30, "div", 20)(31, "div", 21)(32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, FlowerComponent_div_33_Template, 2, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](34, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 24)(36, "div")(37, "div", 21)(38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, FlowerComponent_div_39_Template, 2, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](40, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 6)(42, "div", 20)(43, "div", 21)(44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, FlowerComponent_div_45_Template, 2, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](46, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 26)(48, "section", 1)(49, "div", 27)(50, "div", 19)(51, "div", 28)(52, "div", 16)(53, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "trending products");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 29)(58, "ul", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("activeIdChange", function FlowerComponent_Template_ul_activeIdChange_58_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, FlowerComponent_li_60_Template, 4, 2, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "section", 14)(63, "div", 4)(64, "div", 19)(65, "div", 28)(66, "div", 16)(67, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "trending items");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "owl-carousel-o", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](72, FlowerComponent_ng_container_72_Template, 2, 0, "ng-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](73, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "section", 36)(75, "div", 4)(76, "div", 19)(77, "div", 28)(78, "div", 37)(79, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "Recent Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, "from the blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div", 19)(84, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](85, "app-blog", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "div", 41)(87, "section", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](88, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](89, "app-cart-variation", 43)(90, "app-footer-one", 0);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center")("category", "flower")("buttonText", "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](38, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](39, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](40, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](41, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](34, 22, ctx.products, 0, 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](40, 26, ctx.products, 4, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](46, 30, ctx.products, 2, 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](42, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.productCollections);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavOutlet", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](73, 34, ctx.products, 0, 16));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](43, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("blogs", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("direction", "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavOutlet, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__.CarouselSlideDirective, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_2__.FooterOneComponent, _shared_header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_3__.HeaderThreeComponent, _shared_components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxTwoComponent, _shared_components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_5__.ProductBoxVerticalComponent, _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_6__.CartVariationComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__.SliderComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent, _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbG93ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 41459:
/*!*******************************************************!*\
  !*** ./src/app/home/furniture/furniture.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FurnitureComponent": () => (/* binding */ FurnitureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/header/header-one/header-one.component */ 23618);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/footer/footer-one/footer-one.component */ 71965);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/product/product-box-one/product-box-one.component */ 61572);
/* harmony import */ var _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/modal/cart-variation/cart-variation.component */ 39137);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/slider/slider.component */ 45642);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/blog/blog.component */ 27301);











const _c0 = function () { return ["/shop/collection/left/sidebar"]; };
const _c1 = function () { return { category: "furniture" }; };
function FurnitureComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "a", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 28)(5, "div")(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const collection_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", collection_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](collection_r3.save);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](collection_r3.title);
} }
function FurnitureComponent_li_18_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r7)("currency", ctx_r6.productService == null ? null : ctx_r6.productService.Currency);
} }
function FurnitureComponent_li_18_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, FurnitureComponent_li_18_ng_template_3_ng_container_1_Template, 3, 2, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, ctx_r5.getCollectionProducts(collection_r4), 0, 8));
} }
function FurnitureComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 29)(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, FurnitureComponent_li_18_ng_template_3_Template, 3, 5, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngbNavItem", collection_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", collection_r4, " ");
} }
const _c2 = function () { return { "background-image": "url(assets/images/parallax/5.jpg)" }; };
class FurnitureComponent {
    constructor(productService) {
        this.productService = productService;
        this.themeLogo = 'assets/images/icon/logo-12.png'; // Change Logo
        this.products = [];
        this.productCollections = [];
        this.sliders = [{
                title: 'furniture sofa',
                subTitle: 'harmony sofa',
                image: 'assets/images/slider/12.jpg'
            }, {
                title: 'furniture sofa',
                subTitle: 'harmony sofa',
                image: 'assets/images/slider/13.jpg'
            }];
        // Collection banner
        this.collections = [{
                image: 'assets/images/collection/furniture/1.jpg',
                save: 'save 50%',
                title: 'Sofa',
                link: '/home/left-sidebar/collection/furniture'
            }, {
                image: 'assets/images/collection/furniture/2.jpg',
                save: 'save 50%',
                title: 'Bean Bag',
                link: '/home/left-sidebar/collection/furniture'
            }, {
                image: 'assets/images/collection/furniture/3.jpg',
                save: 'save 50%',
                title: 'Chair',
                link: '/home/left-sidebar/collection/furniture'
            }];
        // Blog
        this.blogs = [{
                image: 'assets/images/blog/14.jpg',
                date: '25 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/15.jpg',
                date: '26 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/16.jpg',
                date: '27 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/14.jpg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }];
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'furniture');
            // Get Product Collection
            this.products.filter((item) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1)
                        this.productCollections.push(collection);
                });
            });
        });
    }
    ngOnInit() {
        // Change color for this layout
        document.documentElement.style.setProperty('--theme-deafult', '#d4b196');
    }
    ngOnDestroy() {
        // Remove Color
        document.documentElement.style.removeProperty('--theme-deafult');
    }
    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find(i => i === collection)) {
                return item;
            }
        });
    }
}
FurnitureComponent.ɵfac = function FurnitureComponent_Factory(t) { return new (t || FurnitureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
FurnitureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FurnitureComponent, selectors: [["app-furniture"]], decls: 46, vars: 14, consts: [[3, "themeLogo"], [1, "p-0"], [3, "sliders", "textClass", "category", "buttonText"], [1, "banner-padding", "banner-furniture"], [1, "container-fluid"], [1, "row", "partition3"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "title1", "section-t-space"], [1, "title-inner1"], [1, "section-b-space", "p-t-0"], [1, "container"], [1, "row"], [1, "col", "theme-tab"], ["ngbNav", "", 1, "tabs", "tab-title", "justify-content-center", "nav", "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [1, "full-banner", "parallax-banner3", "parallax", "text-center", "p-left", 3, "ngStyle"], [1, "col"], [1, "banner-contain"], [1, "blog", "p-t-0", "section-b-space"], [1, "col-md-12"], [3, "blogs"], [3, "direction"], [1, "col-md-4"], [3, "routerLink", "queryParams"], [1, "collection-banner", "p-right", "text-end"], ["alt", "collection", 1, "img-fluid", 3, "src"], [1, "contain-banner", "banner-3"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "no-slider", "row"], [4, "ngFor", "ngForOf"], [1, "product-box"], [3, "product", "currency"]], template: function FurnitureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header-one", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, FurnitureComponent_div_6_Template, 10, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 7)(8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "exclusive products");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "special products");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "section", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "ul", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("activeIdChange", function FurnitureComponent_Template_ul_activeIdChange_16_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, FurnitureComponent_li_18_Template, 4, 2, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "section", 1)(21, "div", 17)(22, "div", 10)(23, "div", 11)(24, "div", 18)(25, "div", 19)(26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "interior design in home");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "section", 20)(33, "div", 10)(34, "div", 11)(35, "div", 18)(36, "div", 7)(37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Recent Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "from the blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 11)(42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "app-blog", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "app-cart-variation", 23)(45, "app-footer-one", 0);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center")("category", "furniture")("buttonText", "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.productCollections);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngbNavOutlet", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("blogs", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("direction", "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavOutlet, _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_1__.HeaderOneComponent, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_2__.FooterOneComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_4__.CartVariationComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__.SliderComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__.BlogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdXJuaXR1cmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 56419:
/*!*******************************************!*\
  !*** ./src/app/home/gym/gym.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GymComponent": () => (/* binding */ GymComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/header/header-one/header-one.component */ 23618);
/* harmony import */ var _shared_footer_footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/footer/footer-two/footer-two.component */ 96017);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/product/product-box-one/product-box-one.component */ 61572);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/slider/slider.component */ 45642);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/blog/blog.component */ 27301);
/* harmony import */ var _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/logo/logo.component */ 93578);










function GymComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r2)("currency", ctx_r0.productService == null ? null : ctx_r0.productService.Currency)("cartModal", true);
} }
function GymComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r3)("currency", ctx_r1.productService == null ? null : ctx_r1.productService.Currency)("cartModal", true);
} }
const _c0 = function () { return ["/shop/collection/left/sidebar"]; };
const _c1 = function () { return { category: "gym" }; };
const _c2 = function () { return { "background-image": "url(assets/images/gym-bg.jpg)" }; };
class GymComponent {
    constructor(productService) {
        this.productService = productService;
        this.themeLogo = 'assets/images/icon/logo-2.png'; // Change Logo
        this.products = [];
        this.sliders = [{
                title: 'summer sale',
                subTitle: 'Protien Powder',
                image: 'assets/images/slider/19.jpg'
            }, {
                title: 'summer sale',
                subTitle: 'Protien Powder',
                image: 'assets/images/slider/20.jpg'
            }];
        // Blog
        this.blogs = [{
                image: 'assets/images/blog/28.jpg',
                date: '25 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/29.jpg',
                date: '26 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/30.jpg',
                date: '27 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/31.jpg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }];
        // Logo
        this.logos = [{
                image: 'assets/images/logos/1.png',
            }, {
                image: 'assets/images/logos/2.png',
            }, {
                image: 'assets/images/logos/3.png',
            }, {
                image: 'assets/images/logos/4.png',
            }, {
                image: 'assets/images/logos/5.png',
            }, {
                image: 'assets/images/logos/6.png',
            }, {
                image: 'assets/images/logos/7.png',
            }, {
                image: 'assets/images/logos/8.png',
            }];
        this.productService.getProducts.subscribe(response => this.products = response.filter(item => item.type == 'gym'));
    }
    ngOnInit() {
        // Change color for this layout
        document.documentElement.style.setProperty('--theme-deafult', '#3d72f1');
        document.documentElement.style.setProperty('--theme-gradient1', '#01effc');
        document.documentElement.style.setProperty('--theme-gradient2', '#485ff2');
    }
    ngOnDestroy() {
        // Remove Color
        document.documentElement.style.removeProperty('--theme-deafult');
        document.documentElement.style.removeProperty('--theme-gradient1');
        document.documentElement.style.removeProperty('--theme-gradient2');
    }
}
GymComponent.ɵfac = function GymComponent_Factory(t) { return new (t || GymComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
GymComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GymComponent, selectors: [["app-gym"]], decls: 70, vars: 32, consts: [[3, "themeLogo"], [1, "p-0", "gym-slider"], [3, "sliders", "textClass", "category", "buttonText"], [1, "banner-padding", "banner-furniture", "gym-banner"], [1, "container-fluid"], [1, "row", "partition2"], [1, "col-md-4"], [3, "routerLink", "queryParams"], [1, "collection-banner", "p-left", "text-start"], ["src", "assets/images/banner/4.jpg", "alt", "", 1, "img-fluid"], [1, "contain-banner"], [1, "col-md-8"], ["src", "assets/images/banner/5.jpg", "alt", "", 1, "img-fluid"], [1, "title1", "title-gradient", "section-t-space"], [1, "title-inner1"], [1, "p-t-0", "section-b-space", "gym-product"], [1, "container"], [1, "row", "partition-cls"], ["class", "col-xl-3 col-sm-6", 4, "ngFor", "ngForOf"], [1, "full-banner", "gym-parallax", "parallax-banner25", "parallax", "p-0", 3, "ngStyle"], [1, "section-t-space", "section-b-space", "gym-product"], [1, "title1", "title-gradient"], [1, "row"], [1, "col-lg-6", "offset-lg-3"], [1, "product-para"], [1, "text-center"], [1, "row", "part-cls"], [1, "blog", "p-t-0", "gym-blog"], [1, "col"], [1, "col-md-12"], [3, "blogs"], [1, "section-b-space"], [3, "logos"], [1, "col-xl-3", "col-sm-6"], [1, "product-box"], [3, "product", "currency", "cartModal"]], template: function GymComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header-one", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 10)(11, "div")(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "save 30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Gym");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 11)(17, "a", 7)(18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10)(21, "div")(22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "save 30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Protien Powder");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 13)(27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "top collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "section", 15)(32, "div", 16)(33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, GymComponent_div_34_Template, 3, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 19)(37, "div", 20)(38, "div", 16)(39, "div", 21)(40, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "top collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 22)(45, "div", 23)(46, "div", 24)(47, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, GymComponent_div_50_Template, 3, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](51, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "section", 27)(53, "div", 16)(54, "div", 22)(55, "div", 28)(56, "div", 13)(57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Recent Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "from the blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 22)(62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "app-blog", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "section", 31)(65, "div", 16)(66, "div", 22)(67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "app-logo", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "app-footer-two", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("header-gym");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-end p-right")("category", "gym")("buttonText", "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](27, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](28, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](29, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](30, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](35, 19, ctx.products, 0, 8));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](31, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](51, 23, ctx.products, 0, 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("blogs", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("logos", ctx.logos);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("bg-img-gym bg-size");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_1__.HeaderOneComponent, _shared_footer_footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_2__.FooterTwoComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_4__.SliderComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__.BlogComponent, _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__.LogoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJneW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fashion_fashion_one_fashion_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fashion/fashion-one/fashion-one.component */ 86705);
/* harmony import */ var _fashion_fashion_two_fashion_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fashion/fashion-two/fashion-two.component */ 42711);
/* harmony import */ var _fashion_fashion_three_fashion_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fashion/fashion-three/fashion-three.component */ 43384);
/* harmony import */ var _vegetable_vegetable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vegetable/vegetable.component */ 28798);
/* harmony import */ var _watch_watch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watch/watch.component */ 53472);
/* harmony import */ var _furniture_furniture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./furniture/furniture.component */ 41459);
/* harmony import */ var _flower_flower_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flower/flower.component */ 22023);
/* harmony import */ var _beauty_beauty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./beauty/beauty.component */ 40980);
/* harmony import */ var _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./electronics/electronics.component */ 87185);
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pets/pets.component */ 84914);
/* harmony import */ var _gym_gym_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gym/gym.component */ 56419);
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools/tools.component */ 17602);
/* harmony import */ var _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shoes/shoes.component */ 71681);
/* harmony import */ var _bags_bags_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bags/bags.component */ 71005);
/* harmony import */ var _marijuana_marijuana_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./marijuana/marijuana.component */ 90434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);


















const routes = [
    {
        path: '',
        component: _fashion_fashion_one_fashion_one_component__WEBPACK_IMPORTED_MODULE_0__.FashionOneComponent
    },
    {
        path: 'fashion-2',
        component: _fashion_fashion_two_fashion_two_component__WEBPACK_IMPORTED_MODULE_1__.FashionTwoComponent
    },
    {
        path: 'fashion-3',
        component: _fashion_fashion_three_fashion_three_component__WEBPACK_IMPORTED_MODULE_2__.FashionThreeComponent
    },
    {
        path: 'vegetable',
        component: _vegetable_vegetable_component__WEBPACK_IMPORTED_MODULE_3__.VegetableComponent
    },
    {
        path: 'watch',
        component: _watch_watch_component__WEBPACK_IMPORTED_MODULE_4__.WatchComponent
    },
    {
        path: 'furniture',
        component: _furniture_furniture_component__WEBPACK_IMPORTED_MODULE_5__.FurnitureComponent
    },
    {
        path: 'flower',
        component: _flower_flower_component__WEBPACK_IMPORTED_MODULE_6__.FlowerComponent
    },
    {
        path: 'beauty',
        component: _beauty_beauty_component__WEBPACK_IMPORTED_MODULE_7__.BeautyComponent
    },
    {
        path: 'electronics',
        component: _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_8__.ElectronicsComponent
    },
    {
        path: 'pets',
        component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_9__.PetsComponent
    },
    {
        path: 'gym',
        component: _gym_gym_component__WEBPACK_IMPORTED_MODULE_10__.GymComponent
    },
    {
        path: 'tools',
        component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_11__.ToolsComponent
    },
    {
        path: 'shoes',
        component: _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_12__.ShoesComponent
    },
    {
        path: 'bags',
        component: _bags_bags_component__WEBPACK_IMPORTED_MODULE_13__.BagsComponent
    },
    {
        path: 'marijuana',
        component: _marijuana_marijuana_component__WEBPACK_IMPORTED_MODULE_14__.MarijuanaComponent
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] }); })();


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _fashion_fashion_one_fashion_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fashion/fashion-one/fashion-one.component */ 86705);
/* harmony import */ var _fashion_fashion_two_fashion_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fashion/fashion-two/fashion-two.component */ 42711);
/* harmony import */ var _fashion_fashion_three_fashion_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fashion/fashion-three/fashion-three.component */ 43384);
/* harmony import */ var _vegetable_vegetable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vegetable/vegetable.component */ 28798);
/* harmony import */ var _watch_watch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./watch/watch.component */ 53472);
/* harmony import */ var _furniture_furniture_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./furniture/furniture.component */ 41459);
/* harmony import */ var _flower_flower_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flower/flower.component */ 22023);
/* harmony import */ var _beauty_beauty_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./beauty/beauty.component */ 40980);
/* harmony import */ var _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./electronics/electronics.component */ 87185);
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pets/pets.component */ 84914);
/* harmony import */ var _gym_gym_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gym/gym.component */ 56419);
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tools/tools.component */ 17602);
/* harmony import */ var _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shoes/shoes.component */ 71681);
/* harmony import */ var _bags_bags_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bags/bags.component */ 71005);
/* harmony import */ var _marijuana_marijuana_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./marijuana/marijuana.component */ 90434);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widgets/slider/slider.component */ 45642);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./widgets/blog/blog.component */ 27301);
/* harmony import */ var _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./widgets/logo/logo.component */ 93578);
/* harmony import */ var _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./widgets/services/services.component */ 29313);
/* harmony import */ var _widgets_collection_collection_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./widgets/collection/collection.component */ 42653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);


















// Widgest Components






class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_fashion_fashion_one_fashion_one_component__WEBPACK_IMPORTED_MODULE_2__.FashionOneComponent,
        _fashion_fashion_two_fashion_two_component__WEBPACK_IMPORTED_MODULE_3__.FashionTwoComponent,
        _fashion_fashion_three_fashion_three_component__WEBPACK_IMPORTED_MODULE_4__.FashionThreeComponent,
        _vegetable_vegetable_component__WEBPACK_IMPORTED_MODULE_5__.VegetableComponent,
        _watch_watch_component__WEBPACK_IMPORTED_MODULE_6__.WatchComponent,
        _furniture_furniture_component__WEBPACK_IMPORTED_MODULE_7__.FurnitureComponent,
        _flower_flower_component__WEBPACK_IMPORTED_MODULE_8__.FlowerComponent,
        _beauty_beauty_component__WEBPACK_IMPORTED_MODULE_9__.BeautyComponent,
        _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_10__.ElectronicsComponent,
        _pets_pets_component__WEBPACK_IMPORTED_MODULE_11__.PetsComponent,
        _gym_gym_component__WEBPACK_IMPORTED_MODULE_12__.GymComponent,
        _tools_tools_component__WEBPACK_IMPORTED_MODULE_13__.ToolsComponent,
        _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_14__.ShoesComponent,
        _bags_bags_component__WEBPACK_IMPORTED_MODULE_15__.BagsComponent,
        _marijuana_marijuana_component__WEBPACK_IMPORTED_MODULE_16__.MarijuanaComponent,
        // Widgest Components
        _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_17__.SliderComponent,
        _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__.BlogComponent,
        _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_19__.LogoComponent,
        _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_20__.ServicesComponent,
        _widgets_collection_collection_component__WEBPACK_IMPORTED_MODULE_21__.CollectionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 90434:
/*!*******************************************************!*\
  !*** ./src/app/home/marijuana/marijuana.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarijuanaComponent": () => (/* binding */ MarijuanaComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_footer_footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/footer/footer-two/footer-two.component */ 96017);
/* harmony import */ var _shared_header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/header/header-three/header-three.component */ 45888);
/* harmony import */ var _shared_components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/product/product-box-three/product-box-three.component */ 78533);
/* harmony import */ var _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/modal/cart-variation/cart-variation.component */ 39137);
/* harmony import */ var _shared_components_modal_age_verification_age_verification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/modal/age-verification/age-verification.component */ 60558);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/slider/slider.component */ 45642);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/blog/blog.component */ 27301);
/* harmony import */ var _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/logo/logo.component */ 93578);
/* harmony import */ var _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/services/services.component */ 29313);
















function MarijuanaComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 42)(1, "a", 43)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 46)(5, "div")(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const collection_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", collection_r4.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", collection_r4.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", collection_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](collection_r4.save);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](collection_r4.title);
} }
function MarijuanaComponent_ng_container_71_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-product-box-three", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("product", product_r5)("currency", ctx_r6.productService == null ? null : ctx_r6.productService.Currency);
} }
function MarijuanaComponent_ng_container_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, MarijuanaComponent_ng_container_71_ng_template_1_Template, 2, 2, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} }
function MarijuanaComponent_li_78_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-product-box-three", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("product", product_r11)("currency", ctx_r10.productService == null ? null : ctx_r10.productService.Currency);
} }
function MarijuanaComponent_li_78_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, MarijuanaComponent_li_78_ng_template_3_ng_container_1_Template, 3, 2, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](2, 1, ctx_r9.getCollectionProducts(collection_r8), 0, 4));
} }
function MarijuanaComponent_li_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 50)(1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, MarijuanaComponent_li_78_ng_template_3_Template, 3, 5, "ng-template", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngbNavItem", collection_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", collection_r8, " ");
} }
const _c0 = function () { return { "background-image": "url(assets/images/parallax/10.jpg)" }; };
class MarijuanaComponent {
    constructor(productService) {
        this.productService = productService;
        this.themeLogo = 'assets/images/icon/logo-3.png';
        this.themeFooterLogo = 'assets/images/icon/logo-9.png';
        this.products = [];
        this.productCollections = [];
        this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
        this.sliders = [{
                title: 'special offer',
                subTitle: 'Buy Marijuana',
                image: 'assets/images/slider/28.jpg'
            }, {
                title: 'special offer',
                subTitle: 'cannabis weed',
                image: 'assets/images/slider/29.jpg'
            }];
        // Collection banner
        this.collections = [{
                image: 'assets/images/collection/marijuana/1.jpg',
                save: 'save 50%',
                title: 'oils',
                link: '/home/left-sidebar/collection/marijuana',
                class: 'p-left'
            }, {
                image: 'assets/images/collection/marijuana/2.jpg',
                save: 'save 20%',
                title: 'liquid',
                link: '/home/left-sidebar/collection/marijuana',
                class: 'p-right'
            }];
        // Blog
        this.blogs = [{
                image: 'assets/images/blog/40.jpg',
                date: '25 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/41.jpg',
                date: '26 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/42.jpg',
                date: '27 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/40.jpg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }];
        // Logo
        this.logos = [{
                image: 'assets/images/logos/1.png',
            }, {
                image: 'assets/images/logos/2.png',
            }, {
                image: 'assets/images/logos/3.png',
            }, {
                image: 'assets/images/logos/4.png',
            }, {
                image: 'assets/images/logos/5.png',
            }, {
                image: 'assets/images/logos/6.png',
            }, {
                image: 'assets/images/logos/7.png',
            }, {
                image: 'assets/images/logos/8.png',
            }];
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'marijuana');
            // Get Product Collection
            this.products.filter((item) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1)
                        this.productCollections.push(collection);
                });
            });
        });
    }
    ngOnInit() {
        // Change color for this layout
        document.documentElement.style.setProperty('--theme-deafult', '#5d7227');
        document.documentElement.style.setProperty('--theme-gradient1', '#5d7227');
        document.documentElement.style.setProperty('--theme-gradient2', '#203f15');
    }
    ngOnDestroy() {
        // Remove Color
        document.documentElement.style.removeProperty('--theme-deafult');
        document.documentElement.style.removeProperty('--theme-gradient1');
        document.documentElement.style.removeProperty('--theme-gradient2');
    }
    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find(i => i === collection)) {
                return item;
            }
        });
    }
}
MarijuanaComponent.ɵfac = function MarijuanaComponent_Factory(t) { return new (t || MarijuanaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
MarijuanaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: MarijuanaComponent, selectors: [["app-marijuana"]], decls: 100, vars: 22, consts: [[3, "themeLogo"], [1, "p-0", "service_slide"], [3, "sliders", "textClass", "category", "buttonClass", "buttonText"], [1, "banner-padding", "absolute-banner", "pb-0", "tools-service"], [1, "container", "absolute-bg"], [1, "service", "p-0"], [1, "container"], [1, "row"], [1, "col-lg-8", "offset-lg-2"], [1, "title3"], [1, "title-inner3"], [1, "line"], [1, "about-text"], [1, "p-t-0", "section-b-space"], [1, "row", "partition2"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "section-b-space", "detail-cannabis", "bg-grey"], [1, "col-md-4"], [1, "detail_section"], ["viewBox", "-29 0 396 396.05387", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m244.53125 271.503906c-2.628906-.84375-5.445312.605469-6.289062 3.234375-.84375 2.628907.605468 5.445313 3.234374 6.289063 17.464844 5.945312 33.558594 15.34375 47.320313 27.632812-19.019531 2.972656-38.453125 1.882813-57.019531-3.199218-17.972656-5.644532-34.546875-15.023438-48.636719-27.523438-.8125-.703125-1.828125-1.125-2.902344-1.203125-7.023437-.496094-14.074219-.496094-21.097656 0-1.070313.078125-2.089844.5-2.902344 1.203125-14.089843 12.503906-30.664062 21.882812-48.636719 27.527344-18.566406 5.089844-38 6.179687-57.019531 3.199218 13.761719-12.289062 29.855469-21.6875 47.320313-27.632812 2.121094-.675781 3.539062-2.671875 3.476562-4.894531-.058594-2.222657-1.578125-4.140625-3.730468-4.703125-5.953126-1.554688-11.808594-3.46875-17.527344-5.730469-24.882813-10.507813-47.144532-26.367187-65.203125-46.453125 26.917969-2.222656 53.996093 1.523438 79.300781 10.960938 1.40625.5625 2.753906 1.164062 4.109375 1.765624l1.058594.472657c2.222656.980469 4.828125.226562 6.179687-1.792969 1.347656-2.019531 1.054688-4.71875-.703125-6.394531-9.792969-9.3125-18.691406-19.519531-26.574219-30.488281-28.636718-40.144532-38.039062-85.835938-40.84375-104.71875 16.921876 8.800781 57.027344 32.503906 85.707032 72.710937 2.355468 3.300781 4.726562 6.910156 7.46875 11.367187.921875 1.546876 2.605468 2.480469 4.410156 2.4375 1.804688-.039062 3.441406-1.050781 4.292969-2.640624.851562-1.589844.777343-3.515626-.1875-5.039063-2.859375-4.644531-5.351563-8.4375-7.84375-11.925781-38.671875-54.210938-95.554688-78.980469-97.957031-80-1.605469-.6875-3.449219-.484375-4.871094.527344-1.417969 1.011718-2.207032 2.691406-2.082032 4.433593.191407 2.601563 5.089844 64.449219 43.765626 118.664063 3.933593 5.519531 8.214843 10.9375 12.839843 16.25-25.621093-7.179688-52.4375-9.03125-78.800781-5.429688-1.71875.289063-3.164062 1.457032-3.808594 3.078125-.644531 1.625-.394531 3.464844.65625 4.855469 20.03125 24.859375 45.945313 44.332031 75.398438 56.65625 1.554687.617188 3.136718 1.214844 4.746094 1.792969-16.746094 7.664062-31.917969 18.378906-44.738282 31.597656-1.179687 1.289063-1.597656 3.101563-1.105468 4.773437.488281 1.675782 1.816406 2.972657 3.503906 3.425782 10.9375 2.570312 22.140625 3.828125 33.375 3.75 12.925781.074218 25.792968-1.710938 38.207031-5.292969 18.820313-5.867187 36.21875-15.566406 51.109375-28.484375.824219-.050781 1.703125-.078125 2.570312-.109375-1.222656 15.402344-1.414062 57.640625 27.792969 91.652344 1.800781 2.097656 4.960938 2.339843 7.058594.539062 2.097656-1.796875 2.34375-4.957031.542969-7.054687-27.074219-31.527344-26.363282-72.097656-25.308594-85.203125 1.261719.042969 2.5.09375 3.679688.164062 14.886718 12.910157 32.277343 22.601563 51.085937 28.46875 23.367187 6.460938 47.976563 6.992188 71.597656 1.542969 1.6875-.449219 3.015625-1.746094 3.507813-3.421875.488281-1.675781.070312-3.484375-1.105469-4.773437-16.269531-16.753907-36.292969-29.394532-58.421875-36.863282zm0 0"], ["d", "m339 213.476562c-.644531-1.621093-2.089844-2.789062-3.808594-3.082031-26.363281-3.59375-53.179687-1.746093-78.800781 5.433594 4.609375-5.296875 8.890625-10.710937 12.839844-16.246094 38.679687-54.21875 43.578125-116.046875 43.769531-118.667969.125-1.742187-.664062-3.421874-2.082031-4.433593-1.421875-1.015625-3.265625-1.214844-4.871094-.527344-37.171875 17.367187-69.679687 43.332031-94.835937 75.742187.203124-4 .304687-7.914062.304687-11.78125 0-75.140624-36-135.160156-37.554687-137.683593-.972657-1.398438-2.566407-2.230469-4.269532-2.230469s-3.300781.832031-4.273437 2.230469c-21.269531 37.734375-33.9375 79.703125-37.089844 122.90625-.167969 2.757812 1.925781 5.128906 4.683594 5.300781 2.734375.109375 5.074219-1.957031 5.300781-4.683594 3.003906-38.5625 13.671875-76.136718 31.378906-110.523437 9.554688 18.472656 31.824219 67.648437 31.824219 124.683593-.023437 10.019532-.683594 20.027344-1.972656 29.960938-.277344 2.324219 1.09375 4.53125 3.300781 5.308594 2.203125.78125 4.65625-.074219 5.898438-2.054688 2.738281-4.453125 5.113281-8.066406 7.46875-11.367187 28.632812-40.140625 68.777343-63.90625 85.714843-72.707031-2.796875 18.867187-12.167969 64.503906-40.851562 104.714843-7.882813 10.96875-16.78125 21.175781-26.574219 30.488281-1.757812 1.675782-2.050781 4.375-.703125 6.394532 1.351563 2.019531 3.957031 2.773437 6.179687 1.792968l1.058594-.472656c1.355469-.601562 2.707032-1.199218 4.105469-1.765625 25.308594-9.425781 52.382813-13.167969 79.300781-10.957031-15.886718 17.585938-34.957031 32.011719-56.203125 42.519531-2.492187 1.183594-3.554687 4.167969-2.367187 6.664063 1.1875 2.492187 4.171875 3.554687 6.664062 2.367187 25.507813-12.46875 47.96875-30.378906 65.808594-52.464843 1.050781-1.394532 1.300781-3.234376.65625-4.859376zm0 0"], ["d", "m211.195312 383.136719c-2.121093-1.769531-5.277343-1.480469-7.042968.644531-1.769532 2.121094-1.480469 5.277344.644531 7.042969 1.746094 1.453125 3.5625 2.875 5.449219 4.265625 2.230468 1.628906 5.359375 1.144531 6.992187-1.082032 1.632813-2.230468 1.144531-5.359374-1.082031-6.992187-1.714844-1.273437-3.371094-2.574219-4.960938-3.878906zm0 0"], [1, "title3", "section-t-space"], [1, "p-t-0", "section-b-space", "tools-grey", "border-box"], [1, "col"], [1, "product-5", "product-m", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], [1, "full-banner", "parallax", "tools-parallax-product", "tools-grey", "border-box", 3, "ngStyle"], [1, "col", "theme-tab"], ["ngbNav", "", 1, "tabs", "tab-title", "justify-content-center", "nav", "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [1, "blog", "pt-0", "section-b-space"], [1, "title1", "section-t-space"], [1, "title-inner1"], [1, "col-md-12"], [3, "blogs"], [1, "bg-grey", "section-b-space", "small-section"], [3, "logos"], [3, "direction"], [1, "col-md-6"], [3, "routerLink"], [1, "collection-banner", "text-center", 3, "ngClass"], ["alt", "collection-banner", 1, "img-fluid", 3, "src"], [1, "contain-banner"], ["carouselSlide", ""], [1, "product-box", "product-wrap"], [3, "product", "currency"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "no-slider", "row"], [1, "product-box"]], template: function MarijuanaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-header-three", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "section")(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "about us");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "welcome to multi store");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 12)(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "section", 13)(21, "div", 6)(22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, MarijuanaComponent_div_23_Template, 10, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "section", 16)(25, "div", 6)(26, "div", 7)(27, "div", 17)(28, "div", 18)(29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](31, "path", 20)(32, "path", 21)(33, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "19+ Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 17)(39, "div", 18)(40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](42, "path", 20)(43, "path", 21)(44, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "30g Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "div", 17)(50, "div", 18)(51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](53, "path", 20)(54, "path", 21)(55, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, "Trusted Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "div", 23)(61, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64, "new products");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "section", 24)(67, "div", 6)(68, "div", 7)(69, "div", 25)(70, "owl-carousel-o", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](71, MarijuanaComponent_ng_container_71_Template, 2, 0, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "section", 28)(73, "div", 6)(74, "div", 7)(75, "div", 29)(76, "ul", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("activeIdChange", function MarijuanaComponent_Template_ul_activeIdChange_76_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, MarijuanaComponent_li_78_Template, 4, 2, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "section", 34)(81, "div", 6)(82, "div", 7)(83, "div", 25)(84, "div", 35)(85, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, "Recent Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88, "from the blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "div", 7)(90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](91, "app-blog", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "section", 39)(93, "div", 6)(94, "div", 7)(95, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](96, "app-logo", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](97, "app-age-verification")(98, "app-cart-variation", 41)(99, "app-footer-two", 0);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("text-white");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center p-center")("category", "marijuana")("buttonClass", "btn-green")("buttonText", "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.productCollections);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngbNavOutlet", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("blogs", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("logos", ctx.logos);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("direction", "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("footer-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("themeLogo", ctx.themeFooterLogo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavOutlet, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselSlideDirective, _shared_footer_footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_2__.FooterTwoComponent, _shared_header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_3__.HeaderThreeComponent, _shared_components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxThreeComponent, _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_5__.CartVariationComponent, _shared_components_modal_age_verification_age_verification_component__WEBPACK_IMPORTED_MODULE_6__.AgeVerificationComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__.SliderComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent, _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_9__.LogoComponent, _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_10__.ServicesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXJpanVhbmEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 84914:
/*!*********************************************!*\
  !*** ./src/app/home/pets/pets.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetsComponent": () => (/* binding */ PetsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/slider */ 53225);
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ 85378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_header_header_four_header_four_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header-four/header-four.component */ 84690);
/* harmony import */ var _shared_footer_footer_four_footer_four_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer-four/footer-four.component */ 25832);
/* harmony import */ var _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/modal/cart-variation/cart-variation.component */ 39137);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/blog/blog.component */ 27301);











const _c0 = function () { return { "background-image": "url(assets/images/parallax/rent_trends.jpg)" }; };
const _c1 = function () { return ["/shop/collection/left/sidebar"]; };
const _c2 = function () { return { category: "pets" }; };
(0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_6__.marker)('HOME.DUBAI_BRANCH');
class PetsComponent {
    constructor(productService, translate) {
        this.productService = productService;
        this.translate = translate;
        this.themeLogo = 'assets/images/icon/logo_or.png'; // Change Logo
        this.products = [];
        this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
        this.sliders = [
            {
                title: 'every pet is different',
                subTitle: 'lets shop',
                image: 'assets/images/slider/17.jpg'
            }, {
                title: 'Any thing that pets want',
                subTitle: 'save 20%',
                image: 'assets/images/slider/18.jpg'
            }
        ];
        // Blog
        this.blogs = [{
                image: 'assets/images/yas/background_d.jpeg',
                date: '02 January 2019',
                title: 'Dubai',
                details: 'Dubai',
                by: ''
            },
            {
                image: 'assets/images/slider/123/sh.jpg',
                date: '07 Feb 2020',
                title: 'Sharjah',
                details: 'We will find you the best',
                by: ''
            },
            {
                image: 'assets/images/slider/123/Ajman_2.jpg',
                date: '27 January 2018',
                title: 'Ajman',
                details: 'According to your needs',
                by: ''
            }];
        // Logo
        this.logos = [{
                image: 'assets/images/yas/background_d.jpeg',
            },
            {
                image: 'assets/images/slider/123/sh.jpg',
            },
            {
                image: 'assets/images/slider/123/Ajman_2.jpg',
            }
        ];
        // Collection banner
        this.collections1 = [{
                image: 'assets/images/collection/pets/1.jpg',
                title: 'Clothes'
            },
            {
                image: 'assets/images/collection/pets/2.jpg',
                title: 'Groom'
            },
            {
                image: 'assets/images/collection/pets/3.jpg',
                title: 'food'
            }];
        this.collections2 = [{
                image: 'assets/images/collection/pets/4.jpg',
                title: 'Home'
            },
            {
                image: 'assets/images/collection/pets/5.jpg',
                title: 'cats'
            },
            {
                image: 'assets/images/collection/pets/6.jpg',
                title: 'bowls'
            }];
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'pets');
        });
        this.syncTR();
    }
    ngOnInit() {
        // Change color for this layout
        document.documentElement.style.setProperty('--theme-deafult', '#ff9944');
    }
    ngOnDestroy() {
        // Remove Color
        document.documentElement.style.removeProperty('--theme-deafult');
    }
    syncTR() {
        this.blogs[0].details = this.translate.instant('HOME.WELCOME_UAE');
        this.blogs[1].details = this.translate.instant('HOME.FIND_BEST');
        this.blogs[2].details = this.translate.instant('HOME.ACC_NEEDS');
        this.blogs[0].title = this.translate.instant('HOME.DUBAI');
        this.blogs[1].title = this.translate.instant('HOME.SHARJAH');
        this.blogs[2].title = this.translate.instant('HOME.AJMAN');
        this.trSub = this.translate.onLangChange.subscribe((data) => {
            this.blogs[0].details = this.translate.instant('HOME.WELCOME_UAE');
            this.blogs[1].details = this.translate.instant('HOME.FIND_BEST');
            this.blogs[2].details = this.translate.instant('HOME.ACC_NEEDS');
            this.blogs[0].title = this.translate.instant('HOME.DUBAI');
            this.blogs[1].title = this.translate.instant('HOME.SHARJAH');
            this.blogs[2].title = this.translate.instant('HOME.AJMAN');
        });
    }
}
PetsComponent.ɵfac = function PetsComponent_Factory(t) { return new (t || PetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService)); };
PetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PetsComponent, selectors: [["app-pets"]], decls: 48, vars: 36, consts: [[3, "themeLogo"], [1, "p-0", "pet-parallax"], [1, "full-banner", "parallax", "parallax-banner19", "text-center", "p-center", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col"], [1, "banner-contain"], [1, "btn", "btn-solid", "black-btn", 3, "routerLink", "queryParams"], [1, "pet-decor"], ["src", "assets/images/forrent_3.png", "alt", "", 1, "img-fluid"], [1, "title1", "section-t-space"], [1, "title-inner1"], [1, "col-lg-6", "offset-lg-3"], [1, "product-para"], [1, "text-center"], [1, "section-b-space", "blog", "p-t-0", "blog_box"], [1, "col-md-12"], [3, "blogs"], [3, "direction"]], template: function PetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header-four", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 10)(19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 3)(26, "div", 4)(27, "div", 12)(28, "div", 13)(29, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "section", 15)(33, "div", 3)(34, "div", 4)(35, "div", 5)(36, "div", 10)(37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 4)(44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "app-blog", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "app-cart-variation", 18)(47, "app-footer-four", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 17, "HOME.ACC_NEEDS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 19, "HOME.BEST_DEAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](34, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](35, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 21, "HOME.BTN_TXT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 23, "HOME.FOUND"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 25, "HOME.GOAL.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 27, "HOME.GOAL.DESC"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 29, "HOME.MAP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 31, "HOME.WHERE_WE_ARE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("blogs", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("direction", "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("footer-light pet-layout-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _shared_header_header_four_header_four_component__WEBPACK_IMPORTED_MODULE_2__.HeaderFourComponent, _shared_footer_footer_four_footer_four_component__WEBPACK_IMPORTED_MODULE_3__.FooterFourComponent, _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_4__.CartVariationComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__.BlogComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 71681:
/*!***********************************************!*\
  !*** ./src/app/home/shoes/shoes.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoesComponent": () => (/* binding */ ShoesComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header-three/header-three.component */ 45888);
/* harmony import */ var _shared_footer_footer_three_footer_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer-three/footer-three.component */ 72039);
/* harmony import */ var _shared_components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/product/product-box-three/product-box-three.component */ 78533);
/* harmony import */ var _shared_components_product_product_box_four_product_box_four_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/product/product-box-four/product-box-four.component */ 94135);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 18358);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/slider/slider.component */ 45642);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/blog/blog.component */ 27301);
/* harmony import */ var _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/logo/logo.component */ 93578);
/* harmony import */ var _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/services/services.component */ 29313);
















const _c0 = function () { return ["/shop/collection/left/sidebar"]; };
const _c1 = function () { return { category: "shoes" }; };
function ShoesComponent_ng_container_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 43)(1, "a", 44)(2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 47)(5, "a", 44)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const category_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", category_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](category_r7.title);
} }
function ShoesComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ShoesComponent_ng_container_9_ng_template_1_Template, 8, 10, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} }
function ShoesComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48)(1, "a", 44)(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 51)(5, "div")(6, "h4", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const collection_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", collection_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](collection_r10.save);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](collection_r10.title);
} }
function ShoesComponent_ng_container_38_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-product-box-four", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("product", product_r11)("currency", ctx_r12.productService == null ? null : ctx_r12.productService.Currency)("onHowerChangeImage", true)("cartModal", true);
} }
function ShoesComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ShoesComponent_ng_container_38_ng_template_1_Template, 2, 4, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} }
function ShoesComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 58)(5, "a", 44)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const collection_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", collection_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](collection_r14.title);
} }
function ShoesComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 6)(1, "a", 44)(2, "div", 59)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const size_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](size_r15);
} }
function ShoesComponent_li_70_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-product-box-three", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("product", product_r19)("currency", ctx_r18.productService == null ? null : ctx_r18.productService.Currency);
} }
function ShoesComponent_li_70_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ShoesComponent_li_70_ng_template_3_ng_container_1_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](2, 1, ctx_r17.getCollectionProducts(collection_r16), 0, 4));
} }
function ShoesComponent_li_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 60)(1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ShoesComponent_li_70_ng_template_3_Template, 3, 5, "ng-template", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngbNavItem", collection_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", collection_r16, " ");
} }
class ShoesComponent {
    constructor(productService) {
        this.productService = productService;
        this.themeLogo = 'assets/images/icon/logo-6.png'; // Change Logo
        this.products = [];
        this.productCollections = [];
        this.CategorySliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.CategorySlider;
        this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
        // sliders
        this.sliders = [{
                title: 'special offer',
                subTitle: 'men shoes',
                image: 'assets/images/slider/23.jpg'
            }, {
                title: 'special offer',
                subTitle: 'men shoes',
                image: 'assets/images/slider/24.jpg'
            }];
        this.sizes = ['size 06', 'size 07', 'size 08', 'size 09', 'size 10'];
        // Categories
        this.categories = [{
                image: 'assets/images/icon/cat1.png',
                title: 'sport shoes'
            }, {
                image: 'assets/images/icon/cat2.png',
                title: 'casual shoes'
            }, {
                image: 'assets/images/icon/cat3.png',
                title: 'formal shoes'
            }, {
                image: 'assets/images/icon/cat4.png',
                title: 'flat'
            }, {
                image: 'assets/images/icon/cat5.png',
                title: 'heels'
            }, {
                image: 'assets/images/icon/cat6.png',
                title: 'boots'
            }, {
                image: 'assets/images/icon/cat1.png',
                title: 'sport shoes'
            }];
        // Collection banner
        this.collections1 = [{
                image: 'assets/images/collection/shoes/1.png',
                save: 'save 50%',
                title: 'men'
            }, {
                image: 'assets/images/collection/shoes/2.png',
                save: 'save 50%',
                title: 'women'
            }];
        // Collection banner
        this.collections2 = [{
                image: 'assets/images/categories/14.png',
                title: 'men'
            }, {
                image: 'assets/images/categories/15.png',
                title: 'women'
            }, {
                image: 'assets/images/categories/16.png',
                title: 'kids'
            }];
        // Blog
        this.blogs = [{
                image: 'assets/images/blog/33.jpg',
                date: '25 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/34.jpg',
                date: '26 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/35.jpg',
                date: '27 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/36.jpg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }];
        // Logo
        this.logos = [{
                image: 'assets/images/logos/1.png',
            }, {
                image: 'assets/images/logos/2.png',
            }, {
                image: 'assets/images/logos/3.png',
            }, {
                image: 'assets/images/logos/4.png',
            }, {
                image: 'assets/images/logos/5.png',
            }, {
                image: 'assets/images/logos/6.png',
            }, {
                image: 'assets/images/logos/7.png',
            }, {
                image: 'assets/images/logos/8.png',
            }];
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'shoes');
            // Get Product Collection
            this.products.filter((item) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1)
                        this.productCollections.push(collection);
                });
            });
        });
    }
    ngOnInit() {
        // Change color for this layout
        document.documentElement.style.setProperty('--theme-deafult', '#3fdda7');
    }
    ngOnDestroy() {
        // Remove Color
        document.documentElement.style.removeProperty('--theme-deafult');
    }
    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find(i => i === collection)) {
                return item;
            }
        });
    }
}
ShoesComponent.ɵfac = function ShoesComponent_Factory(t) { return new (t || ShoesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
ShoesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ShoesComponent, selectors: [["app-shoes"]], decls: 93, vars: 32, consts: [[3, "themeLogo"], [1, "p-0"], [3, "sliders", "textClass", "category", "buttonClass", "buttonText"], [1, "container"], [1, "section-b-space", "border-section", "border-top-0"], [1, "row"], [1, "col"], [1, "slide-6", "no-arrow"], [3, "options"], [4, "ngFor", "ngForOf"], [1, "col-lg-8", "offset-lg-2"], [1, "title3"], [1, "title-inner3"], [1, "line"], [1, "about-text"], [1, "section-b-space", "p-t-0"], [1, "row", "partition2"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "product-4", "product-m", "no-arrow", 3, "options"], [1, "container-fluid"], [1, "row", "category-border"], ["class", "col-sm-4 border-padding", 4, "ngFor", "ngForOf"], [1, "section-b-space"], [1, "row", "multiple-slider"], [1, "col-lg-3", "col-sm-6"], [3, "title", "type"], [1, "row", "background"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "title1", "section-t-space"], [1, "title-inner1"], [1, "col", "theme-tab"], ["ngbNav", "", 1, "tabs", "tab-title", "justify-content-center", "nav", "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [1, "blog", "blog-bg", "section-b-space"], [1, "title1"], [1, "col-md-12"], [3, "blogs"], [1, "service", "border-section", "small-section", "border-top-0"], [3, "logos"], [3, "themeLogo", "subFooter"], ["carouselSlide", ""], [1, "category-block"], [3, "routerLink", "queryParams"], [1, "category-image"], ["alt", "", 1, "w-auto", 3, "src"], [1, "category-details"], [1, "col-md-6"], [1, "collection-banner", "p-right", "text-center"], ["alt", "collection-banner", 1, "img-fluid", 3, "src"], [1, "contain-banner"], [1, "text-white"], [1, "product-box"], [3, "product", "currency", "onHowerChangeImage", "cartModal"], [1, "col-sm-4", "border-padding"], [1, "category-banner"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "category-box"], [1, "contain-bg"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "no-slider", "row"], [3, "product", "currency"]], template: function ShoesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-header-three", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "owl-carousel-o", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ShoesComponent_ng_container_9_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "section")(11, "div", 3)(12, "div", 5)(13, "div", 10)(14, "div", 11)(15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "about us");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "welcome to multi store");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 14)(21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "section", 15)(24, "div", 3)(25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, ShoesComponent_div_26_Template, 10, 7, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "section", 15)(28, "div", 3)(29, "div", 11)(30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "our collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "special products");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 5)(36, "div", 6)(37, "owl-carousel-o", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, ShoesComponent_ng_container_38_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](39, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "section", 1)(41, "div", 19)(42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ShoesComponent_div_43_Template, 8, 6, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "section", 22)(45, "div", 3)(46, "div", 23)(47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "app-product-box-vertical-slider", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](50, "app-product-box-vertical-slider", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](52, "app-product-box-vertical-slider", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](54, "app-product-box-vertical-slider", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "section", 1)(56, "div", 3)(57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](58, ShoesComponent_div_58_Template, 5, 5, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 28)(60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, "exclusive products");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "special products");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "section", 15)(65, "div", 3)(66, "div", 5)(67, "div", 30)(68, "ul", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("activeIdChange", function ShoesComponent_Template_ul_activeIdChange_68_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](70, ShoesComponent_li_70_Template, 4, 2, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "section", 35)(73, "div", 3)(74, "div", 5)(75, "div", 6)(76, "div", 36)(77, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](78, "Recent Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](80, "from the blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "div", 5)(82, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](83, "app-blog", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "div", 3)(85, "section", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](86, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "section", 22)(88, "div", 3)(89, "div", 5)(90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](91, "app-logo", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](92, "app-footer-three", 41);
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center")("category", "shoes")("buttonClass", "black-btn")("buttonText", "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx.CategorySliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.collections1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](39, 28, ctx.products, 0, 16));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.collections2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "New product")("type", "shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Sell product")("type", "shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Feature Product")("type", "shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Best Product")("type", "shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.sizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.productCollections);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngbNavOutlet", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("blogs", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("logos", ctx.logos);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("themeLogo", ctx.themeLogo)("subFooter", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavOutlet, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselSlideDirective, _shared_header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_2__.HeaderThreeComponent, _shared_footer_footer_three_footer_three_component__WEBPACK_IMPORTED_MODULE_3__.FooterThreeComponent, _shared_components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxThreeComponent, _shared_components_product_product_box_four_product_box_four_component__WEBPACK_IMPORTED_MODULE_5__.ProductBoxFourComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_6__.ProductBoxVerticalSliderComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__.SliderComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent, _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_9__.LogoComponent, _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_10__.ServicesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9lcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 17602:
/*!***********************************************!*\
  !*** ./src/app/home/tools/tools.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsComponent": () => (/* binding */ ToolsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header-one/header-one.component */ 23618);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer-one/footer-one.component */ 71965);
/* harmony import */ var _shared_components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/product/product-box-three/product-box-three.component */ 78533);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 18358);
/* harmony import */ var _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/modal/cart-variation/cart-variation.component */ 39137);
/* harmony import */ var _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/logo/logo.component */ 93578);
/* harmony import */ var _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/services/services.component */ 29313);
/* harmony import */ var _widgets_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/collection/collection.component */ 42653);

















const _c0 = function () { return { "background-image": "url(assets/images/slider/21.jpg)" }; };
const _c1 = function () { return ["/shop/collection/left/sidebar"]; };
const _c2 = function () { return { category: "tools" }; };
function ToolsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 55)(1, "div", 6)(2, "div", 7)(3, "div", 14)(4, "div", 56)(5, "div")(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "welcome to tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "auto parts");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "shop now");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c2));
} }
const _c3 = function () { return { "background-image": "url(assets/images/slider/22.jpg)" }; };
function ToolsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 55)(1, "div", 6)(2, "div", 7)(3, "div", 14)(4, "div", 56)(5, "div")(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "welcome to tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "auto parts");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "shop now");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c2));
} }
function ToolsComponent_ng_container_34_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-product-box-three", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r6)("currency", ctx_r7.productService == null ? null : ctx_r7.productService.Currency);
} }
function ToolsComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ToolsComponent_ng_container_34_ng_template_1_Template, 2, 2, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function ToolsComponent_ng_container_75_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-product-box-three", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r9)("currency", ctx_r10.productService == null ? null : ctx_r10.productService.Currency);
} }
function ToolsComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ToolsComponent_ng_container_75_ng_template_1_Template, 2, 2, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function ToolsComponent_li_85_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-product-box-three", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r15)("currency", ctx_r14.productService == null ? null : ctx_r14.productService.Currency);
} }
function ToolsComponent_li_85_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ToolsComponent_li_85_ng_template_3_ng_container_1_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](2, 1, ctx_r13.getCollectionProducts(collection_r12), 0, 4));
} }
function ToolsComponent_li_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 66)(1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ToolsComponent_li_85_ng_template_3_Template, 3, 5, "ng-template", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", collection_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", collection_r12, " ");
} }
const _c4 = function () { return { "background-image": "url(assets/images/parallax/8.jpg)" }; };
const _c5 = function () { return { category: "shoes" }; };
class ToolsComponent {
    constructor(_sanitizer, productService) {
        this._sanitizer = _sanitizer;
        this.productService = productService;
        this.themeLogo = 'assets/images/icon/logo-5.png';
        this.products = [];
        this.productCollections = [];
        this.tabs = [1, 2, 3, 4, 5];
        this.HomeSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.HomeSlider;
        this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
        // services
        this.categories = [{
                image: 'assets/images/categories/6.jpg',
                title: 'auto parts',
                text: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'),
            }, {
                image: 'assets/images/categories/7.jpg',
                title: 'brakes & steering',
                text: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'),
            }, {
                image: 'assets/images/categories/8.jpg',
                title: 'engine & drivetrain',
                text: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'),
            }, {
                image: 'assets/images/categories/9.jpg',
                title: 'exterior accesories',
                text: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'),
            }, {
                image: 'assets/images/categories/10.jpg',
                title: 'other parts',
                text: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant parts</a></li><li><a href="#">Skeleton parts</a></li><li><a href="#">Slow parts</a></li><li><a href="#">Solar-powered parts</a></li>'),
            }];
        // Logo
        this.logos = [{
                image: 'assets/images/logos/1.png',
            }, {
                image: 'assets/images/logos/2.png',
            }, {
                image: 'assets/images/logos/3.png',
            }, {
                image: 'assets/images/logos/4.png',
            }, {
                image: 'assets/images/logos/5.png',
            }, {
                image: 'assets/images/logos/6.png',
            }, {
                image: 'assets/images/logos/7.png',
            }, {
                image: 'assets/images/logos/8.png',
            }];
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'tools');
            // Get Product Collection
            this.products.filter((item) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1)
                        this.productCollections.push(collection);
                });
            });
            console.log("this.products", this.products);
        });
    }
    ngOnInit() {
        // Add class in body
        document.body.classList.add("tools-bg");
    }
    ngOnDestroy() {
        // Remove class in body
        document.body.classList.remove("tools-bg");
    }
    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find(i => i === collection)) {
                return item;
            }
        });
    }
}
ToolsComponent.ɵfac = function ToolsComponent_Factory(t) { return new (t || ToolsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
ToolsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ToolsComponent, selectors: [["app-tools"]], decls: 96, vars: 28, consts: [[1, "p-0", "height-85", "tools_slider"], [1, "home-slider", 3, "options"], ["carouselSlide", ""], [1, "banner-padding", "absolute-banner", "pb-0", "tools-service"], [1, "container", "absolute-bg"], [1, "service", "p-0"], [1, "container"], [1, "row"], [1, "col-lg-8", "offset-lg-2"], [1, "title3"], [1, "title-inner3"], [1, "line"], [1, "about-text"], [1, "pt-0", "category-tools"], [1, "col"], [3, "categories", "category"], [1, "section-b-space", "tools-grey"], [1, "product-5", "product-m", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], [1, "full-banner", "parallax-banner21", "parallax", "small-slider", "tools-parallax-product", 3, "ngStyle"], [1, "col-lg-4", "col-12"], [1, "tools-description"], [1, "tools-form"], [1, "search-box"], [1, "form-control"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["name", "model", 1, "form-control"], ["name", "engine", 1, "form-control"], ["name", "year", 1, "form-control"], [1, "search-button"], [1, "btn", "btn-solid", "btn-find", 3, "routerLink", "queryParams"], [1, "col-lg-8", "col-12", "tools-grey"], [1, "tools-product-4", "product-m", 3, "options"], [1, "tools_product"], [1, "row", "multiple-slider"], [1, "col-xl-3", "col-lg-4", "col-md-12"], [3, "title", "type"], [1, "col-xl-9", "col-lg-8", "col-md-12", "tools-grey"], [1, "theme-tab"], ["ngbNav", "", 1, "tabs", "tab-title", "justify-content-center", "nav", "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [1, "banner-tools"], ["src", "assets/images/offer-banner-4.jpg", "alt", "banner", 1, "img-fluid"], [1, "section-b-space", "tools-brand"], [1, "col-md-12"], [3, "logos"], [3, "direction"], [3, "newsletter", "themeLogo"], [1, "home", "text-center", 3, "ngStyle"], [1, "slider-contain"], [1, "btn", "btn-solid", 3, "routerLink", "queryParams"], ["id", "tools-move", 1, "tools-parts"], ["src", "assets/images/tools-2.png", "alt", "", 1, "img-fluid"], ["id", "tools-move1", 1, "tools-parts1"], ["src", "assets/images/tools-3.png", "alt", "", 1, "img-fluid"], ["id", "tools-move2", 1, "tools-parts"], ["src", "assets/images/tools-1.png", "alt", "", 1, "img-fluid"], [1, "product-box", "product-wrap"], [3, "product", "currency"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "no-slider", "row"], [1, "product-box"]], template: function ToolsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-header-one");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "section", 0)(2, "owl-carousel-o", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ToolsComponent_ng_template_3_Template, 16, 6, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ToolsComponent_ng_template_4_Template, 14, 6, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "section", 3)(6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "section")(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "welcome to tool store");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 12)(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "section", 13)(21, "div", 6)(22, "div", 7)(23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "app-collection", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "section", 16)(26, "div", 6)(27, "div", 7)(28, "div", 14)(29, "div", 9)(30, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Popular products");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "owl-carousel-o", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, ToolsComponent_ng_container_34_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "section", 19)(36, "div", 6)(37, "div", 7)(38, "div", 20)(39, "div", 21)(40, "div")(41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "select your vehical");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 22)(44, "div", 23)(45, "select", 24)(46, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Select Make");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Audi");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "BMW");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Fiat");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Hyndai");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Skoda");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 23)(59, "select", 31)(60, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Select Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 23)(63, "select", 32)(64, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Select category");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "div", 23)(67, "select", 33)(68, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Select Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div", 34)(71, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, "find my part");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "div", 36)(74, "owl-carousel-o", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](75, ToolsComponent_ng_container_75_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "section", 38)(77, "div", 6)(78, "div", 39)(79, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](80, "app-product-box-vertical-slider", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 42)(82, "div", 43)(83, "ul", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("activeIdChange", function ToolsComponent_Template_ul_activeIdChange_83_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](85, ToolsComponent_li_85_Template, 4, 2, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](86, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](88, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "section", 50)(90, "div", 6)(91, "div", 7)(92, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](93, "app-logo", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](94, "app-cart-variation", 53)(95, "app-footer-one", 54);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("header-tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.HomeSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("pt-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("categories", ctx.categories)("category", "tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](25, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](26, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](27, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", "new products")("type", "tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.productCollections);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavOutlet", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("logos", ctx.logos);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("direction", "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("sticky-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("newsletter", false)("themeLogo", ctx.themeLogo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavOutlet, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselSlideDirective, _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOneComponent, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_3__.FooterOneComponent, _shared_components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxThreeComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_5__.ProductBoxVerticalSliderComponent, _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_6__.CartVariationComponent, _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_7__.LogoComponent, _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_8__.ServicesComponent, _widgets_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__.CollectionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29scy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 28798:
/*!*******************************************************!*\
  !*** ./src/app/home/vegetable/vegetable.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VegetableComponent": () => (/* binding */ VegetableComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/footer/footer-one/footer-one.component */ 71965);
/* harmony import */ var _shared_header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/header/header-three/header-three.component */ 45888);
/* harmony import */ var _shared_components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/product/product-box-two/product-box-two.component */ 63603);
/* harmony import */ var _shared_components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/product/product-box-vertical/product-box-vertical.component */ 34864);
/* harmony import */ var _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/modal/cart-variation/cart-variation.component */ 39137);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/slider/slider.component */ 45642);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/blog/blog.component */ 27301);
/* harmony import */ var _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/services/services.component */ 29313);













function VegetableComponent_ng_container_17_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-product-box-two", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r4)("currency", ctx_r5.productService == null ? null : ctx_r5.productService.Currency);
} }
function VegetableComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, VegetableComponent_ng_container_17_ng_template_1_Template, 2, 2, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function VegetableComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-product-box-vertical", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r7)("currency", ctx_r1.productService == null ? null : ctx_r1.productService.Currency);
} }
function VegetableComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-product-box-two", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r8)("currency", ctx_r2.productService == null ? null : ctx_r2.productService.Currency);
} }
function VegetableComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-product-box-vertical", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", product_r9)("currency", ctx_r3.productService == null ? null : ctx_r3.productService.Currency);
} }
const _c0 = function () { return { "background-image": "url(assets/images/parallax/4.jpg)" }; };
class VegetableComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
        this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
        // Sliders
        this.sliders = [{
                title: 'save 10%',
                subTitle: 'fresh vegetables',
                image: 'assets/images/slider/7.jpg'
            }, {
                title: 'save 10%',
                subTitle: 'fresh vegetables',
                image: 'assets/images/slider/8.jpg'
            }];
        // Blogs
        this.blogs = [{
                image: 'assets/images/blog/6.jpg',
                date: '25 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/7.jpg',
                date: '26 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/8.jpg',
                date: '27 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/9.jpg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }];
        this.productService.getProducts.subscribe(response => this.products = response.filter(item => item.type == 'vegetables'));
    }
    ngOnInit() {
    }
}
VegetableComponent.ɵfac = function VegetableComponent_Factory(t) { return new (t || VegetableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
VegetableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: VegetableComponent, selectors: [["app-vegetable"]], decls: 72, vars: 29, consts: [[1, "p-0"], [3, "sliders", "textClass", "category", "buttonText"], [1, "banner-padding", "absolute-banner", "pb-0"], [1, "container", "absolute-bg"], [1, "service", "p-0"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "col"], [1, "title4"], [1, "title-inner4"], [1, "line"], [1, "product-5", "product-m", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], [1, "full-banner", "parallax-banner15", "parallax", "text-start", "p-left", 3, "ngStyle"], [1, "banner-contain"], [1, "full-box"], [1, "col-md-4"], [1, "theme-card", "center-align"], [1, "offer-slider"], [1, "sec-1"], ["class", "product-box2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "center-slider"], ["class", "product-box product-wrap", 4, "ngFor", "ngForOf"], [1, "blog", "section-b-space", "pt-0"], [1, "title1", "section-t-space"], [1, "title-inner1"], [1, "col-md-12"], [3, "blogs"], [3, "direction"], ["carouselSlide", ""], [1, "product-box", "product-wrap"], [3, "product", "currency"], [1, "product-box2"]], template: function VegetableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-header-three");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "section", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "section", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "trending products");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "owl-carousel-o", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, VegetableComponent_ng_container_17_Template, 2, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "section", 0)(20, "div", 14)(21, "div", 6)(22, "div", 7)(23, "div", 8)(24, "div", 15)(25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "food market");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "section")(32, "div", 16)(33, "div", 6)(34, "div", 9)(35, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "special products");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 7)(40, "div", 17)(41, "div", 18)(42, "div", 19)(43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, VegetableComponent_div_44_Template, 2, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](45, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 22)(47, "div")(48, "div", 19)(49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, VegetableComponent_div_50_Template, 2, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](51, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 17)(53, "div", 18)(54, "div", 19)(55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](56, VegetableComponent_div_56_Template, 2, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](57, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "section", 24)(59, "div", 6)(60, "div", 7)(61, "div", 8)(62, "div", 25)(63, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Recent Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "from the blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 7)(68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](69, "app-blog", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](70, "app-cart-variation", 29)(71, "app-footer-one");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center")("category", "vegetables")("buttonText", "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](18, 12, ctx.products, 0, 8));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](45, 16, ctx.products, 0, 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](51, 20, ctx.products, 1, 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](57, 24, ctx.products, 2, 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("blogs", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("direction", "right");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselSlideDirective, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_2__.FooterOneComponent, _shared_header_header_three_header_three_component__WEBPACK_IMPORTED_MODULE_3__.HeaderThreeComponent, _shared_components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxTwoComponent, _shared_components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_5__.ProductBoxVerticalComponent, _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_6__.CartVariationComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__.SliderComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent, _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWdldGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 53472:
/*!***********************************************!*\
  !*** ./src/app/home/watch/watch.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WatchComponent": () => (/* binding */ WatchComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ 90773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header-one/header-one.component */ 23618);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/footer/footer-one/footer-one.component */ 71965);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/product/product-box-one/product-box-one.component */ 61572);
/* harmony import */ var _shared_components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/product/product-box-two/product-box-two.component */ 63603);
/* harmony import */ var _shared_components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/product/product-box-vertical/product-box-vertical.component */ 34864);
/* harmony import */ var _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/modal/cart-variation/cart-variation.component */ 39137);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/slider/slider.component */ 45642);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/blog/blog.component */ 27301);
/* harmony import */ var _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/logo/logo.component */ 93578);
/* harmony import */ var _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/services/services.component */ 29313);
/* harmony import */ var _widgets_collection_collection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../widgets/collection/collection.component */ 42653);



















function WatchComponent_li_63_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-product-box-one", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("product", product_r10)("currency", ctx_r9.productService == null ? null : ctx_r9.productService.Currency);
} }
function WatchComponent_li_63_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, WatchComponent_li_63_ng_template_3_ng_container_1_Template, 3, 2, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](2, 1, ctx_r8.getCollectionProducts(collection_r7), 0, 8));
} }
function WatchComponent_li_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "li", 45)(1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, WatchComponent_li_63_ng_template_3_Template, 3, 5, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngbNavItem", collection_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", collection_r7, " ");
} }
function WatchComponent_ng_container_75_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-product-box-two", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("product", product_r12)("currency", ctx_r13.productService == null ? null : ctx_r13.productService.Currency);
} }
function WatchComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, WatchComponent_ng_container_75_ng_template_1_Template, 2, 2, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} }
function WatchComponent_div_79_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 57)(1, "div")(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const collection_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](collection_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](collection_r15.text);
} }
const _c0 = function () { return ["/shop/collection/left/sidebar"]; };
const _c1 = function () { return { category: "watch" }; };
function WatchComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 33)(1, "a", 53)(2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, WatchComponent_div_79_div_4_Template, 6, 2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const collection_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", collection_r15.image, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", collection_r15.title && collection_r15.text);
} }
function WatchComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-product-box-vertical", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r18 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("product", product_r18)("currency", ctx_r4.productService == null ? null : ctx_r4.productService.Currency);
} }
function WatchComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-product-box-two", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r19 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("product", product_r19)("currency", ctx_r5.productService == null ? null : ctx_r5.productService.Currency);
} }
function WatchComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-product-box-vertical", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r20 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("product", product_r20)("currency", ctx_r6.productService == null ? null : ctx_r6.productService.Currency);
} }
const _c2 = function () { return { "background-image": "url(assets/images/offer-banner-2.jpg)" }; };
class WatchComponent {
    constructor(_sanitizer, productService) {
        this._sanitizer = _sanitizer;
        this.productService = productService;
        this.themeLogo = 'assets/images/icon/logo-14.png'; // Change Logo
        this.products = [];
        this.productCollections = [];
        this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
        this.CollectionSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.CollectionSlider;
        this.sliders = [{
                title: 'every time',
                subTitle: 'mittnalier',
                image: 'assets/images/slider/9.jpg'
            }, {
                title: 'welcome to fashion',
                subTitle: 'Men Watch',
                image: 'assets/images/slider/10.jpg'
            }];
        // Logo
        this.logos = [{
                image: 'assets/images/logos/1.png',
            }, {
                image: 'assets/images/logos/2.png',
            }, {
                image: 'assets/images/logos/3.png',
            }, {
                image: 'assets/images/logos/4.png',
            }, {
                image: 'assets/images/logos/5.png',
            }, {
                image: 'assets/images/logos/6.png',
            }, {
                image: 'assets/images/logos/7.png',
            }, {
                image: 'assets/images/logos/8.png',
            }];
        // Collection
        this.categories = [{
                image: 'assets/images/categories/1.png',
                title: 'watch models',
                text: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">d1 milano</a></li><li><a href="#">damaskeening</a></li><li><a href="#">diving watch</a></li><li><a href="#">dollar watch</a></li>'),
            }, {
                image: 'assets/images/categories/2.png',
                title: 'calculator watch',
                text: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant watch</a></li><li><a href="#">Skeleton watch</a></li><li><a href="#">Slow watch</a></li><li><a href="#">Solar-powered watch</a></li>'),
            }, {
                image: 'assets/images/categories/3.png',
                title: 'Antimagnetic watch',
                text: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li>'),
            }, {
                image: 'assets/images/categories/4.png',
                title: 'History of watches',
                text: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Manufacture dhorlogerie</a></li><li><a href="#">Mechanical watch</a></li><li><a href="#">Microbrand watches</a></li><li><a href="#">MIL-W-46374</a></li>'),
            }, {
                image: 'assets/images/categories/1.png',
                title: 'watch models',
                text: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">d1 milano</a></li><li><a href="#">damaskeening</a></li><li><a href="#">diving watch</a></li><li><a href="#">dollar watch</a></li>'),
            }];
        // collection
        this.collections = [{
                image: 'assets/images/collection/watch/1.jpg',
                title: 'minimum 10% off',
                text: 'new watch'
            }, {
                image: 'assets/images/collection/watch/2.jpg',
            }, {
                image: 'assets/images/collection/watch/3.jpg',
                title: 'minimum 10% off',
                text: 'gold watch`'
            }];
        // Blog
        this.blogs = [{
                image: 'assets/images/blog/10.jpg',
                date: '25 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/11.jpg',
                date: '26 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/12.jpg',
                date: '27 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }, {
                image: 'assets/images/blog/13.jpg',
                date: '28 January 2018',
                title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
                by: 'John Dio'
            }];
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'watch');
            // Get Product Collection
            this.products.filter((item) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1)
                        this.productCollections.push(collection);
                });
            });
        });
    }
    ngOnInit() {
        // Change color for this layout
        document.documentElement.style.setProperty('--theme-deafult', '#e4604a');
    }
    ngOnDestroy() {
        // Remove Color
        document.documentElement.style.removeProperty('--theme-deafult');
    }
    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find(i => i === collection)) {
                return item;
            }
        });
    }
}
WatchComponent.ɵfac = function WatchComponent_Factory(t) { return new (t || WatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
WatchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: WatchComponent, selectors: [["app-watch"]], decls: 122, vars: 34, consts: [[3, "themeLogo"], [1, "p-0"], [3, "sliders", "textClass", "category", "buttonText"], [1, "container"], [1, "row"], [1, "col-md-12"], [3, "logos"], [1, "banner-timer", 3, "ngStyle"], [1, "col-md-6"], [1, "banner-text"], [1, "timer-box"], [1, "timer"], ["id", "demo"], [1, "padding-l"], [1, "timer-cal"], [1, "section-b-space"], [1, "col"], [3, "categories", "category"], [1, "tab-bg"], [1, "container-fluid"], [1, "title4"], [1, "title-inner4"], [1, "line"], [1, "theme-tab"], ["ngbNav", "", 1, "tabs", "tab-title", "justify-content-center", "nav", "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [1, "product-4", "product-m", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], [1, "row", "partition3"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "full-box"], [1, "col-md-4"], [1, "theme-card", "center-align"], [1, "offer-slider"], [1, "sec-1"], ["class", "product-box2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "center-slider"], ["class", "product-box product-wrap", 4, "ngFor", "ngForOf"], [1, "blog", "blog-bg", "section-b-space"], [3, "blogs"], [1, "container", "section-t-space", "section-b-space"], [1, "service", "border-section", "small-section"], [3, "direction"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "no-slider", "row"], [1, "product-box"], [3, "product", "currency"], ["carouselSlide", ""], [1, "product-box", "product-wrap"], [3, "routerLink", "queryParams"], [1, "collection-banner", "p-left"], ["alt", "", 1, "img-fluid", 3, "src"], ["class", "contain-banner banner-3", 4, "ngIf"], [1, "contain-banner", "banner-3"], [1, "product-box2"]], template: function WatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-header-one", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "section")(4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "app-logo", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "section")(9, "div", 3)(10, "div", 7)(11, "div", 4)(12, "div", 8)(13, "div", 9)(14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "30% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, " Digital Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 8)(20, "div", 10)(21, "div", 11)(22, "p", 12)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, " 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, " 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, " 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, " 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "Sec");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "section", 15)(46, "div", 3)(47, "div", 4)(48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](49, "app-collection", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "section", 1)(51, "div", 18)(52, "div", 19)(53, "div", 4)(54, "div", 16)(55, "div", 20)(56, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](57, "trending products");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "div", 23)(61, "ul", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("activeIdChange", function WatchComponent_Template_ul_activeIdChange_61_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](63, WatchComponent_li_63_Template, 4, 2, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "section")(66, "div", 3)(67, "div", 4)(68, "div", 16)(69, "div", 20)(70, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71, "trending products");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "owl-carousel-o", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](75, WatchComponent_ng_container_75_Template, 2, 0, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "section")(77, "div", 3)(78, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](79, WatchComponent_div_79_Template, 5, 6, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "section", 15)(81, "div", 32)(82, "div", 3)(83, "div", 20)(84, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](85, "special products");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](88, "div", 4)(89, "div", 33)(90, "div", 34)(91, "div", 35)(92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](93, WatchComponent_div_93_Template, 2, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](94, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "div", 38)(96, "div")(97, "div", 35)(98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](99, WatchComponent_div_99_Template, 2, 2, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](100, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "div", 33)(102, "div", 34)(103, "div", 35)(104, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](105, WatchComponent_div_105_Template, 2, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](106, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "section", 40)(108, "div", 3)(109, "div", 20)(110, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](111, "Recent Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](114, "div", 4)(115, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](116, "app-blog", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "div", 42)(118, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](119, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](120, "app-cart-variation", 44)(121, "app-footer-one", 0);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center")("category", "watch")("buttonText", "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("logos", ctx.logos);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](33, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("categories", ctx.categories)("category", "watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.productCollections);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngbNavOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](94, 21, ctx.products, 0, 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](100, 25, ctx.products, 4, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](106, 29, ctx.products, 2, 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("blogs", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("direction", "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("themeLogo", ctx.themeLogo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavOutlet, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_18__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_18__.CarouselSlideDirective, _shared_header_header_one_header_one_component__WEBPACK_IMPORTED_MODULE_2__.HeaderOneComponent, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_3__.FooterOneComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxOneComponent, _shared_components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_5__.ProductBoxTwoComponent, _shared_components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_6__.ProductBoxVerticalComponent, _shared_components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_7__.CartVariationComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__.SliderComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__.BlogComponent, _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_10__.LogoComponent, _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_11__.ServicesComponent, _widgets_collection_collection_component__WEBPACK_IMPORTED_MODULE_12__.CollectionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXRjaC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 27301:
/*!*****************************************************!*\
  !*** ./src/app/home/widgets/blog/blog.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);






function BlogComponent_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "a", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 6)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 4)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const blog_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/home/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", blog_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, "HOME.STARTED"), "", blog_r1.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/home/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blog_r1.details);
} }
function BlogComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BlogComponent_ng_container_1_ng_template_1_Template, 14, 9, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
class BlogComponent {
    constructor() {
        this.blogs = [];
        this.BlogSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.BlogSlider;
    }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], inputs: { blogs: "blogs" }, decls: 2, vars: 2, consts: [[1, "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "col-md-12"], [3, "routerLink"], [1, "classic-effect"], ["alt", "blog", 1, "img-fluid", 3, "src"], [1, "blog-details"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BlogComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.BlogSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.blogs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 42653:
/*!*****************************************************************!*\
  !*** ./src/app/home/widgets/collection/collection.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionComponent": () => (/* binding */ CollectionComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);





const _c0 = function () { return ["/shop/collection/left/sidebar"]; };
const _c1 = function (a0) { return { category: a0 }; };
function CollectionComponent_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " view more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const cats_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", cats_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cats_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", cats_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx_r2.category));
} }
function CollectionComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CollectionComponent_ng_container_1_ng_template_1_Template, 9, 9, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
class CollectionComponent {
    constructor() {
        this.CollectionSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.CollectionSlider;
    }
    ngOnInit() {
    }
}
CollectionComponent.ɵfac = function CollectionComponent_Factory(t) { return new (t || CollectionComponent)(); };
CollectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CollectionComponent, selectors: [["app-collection"]], inputs: { categories: "categories", category: "category", class: "class" }, decls: 2, vars: 2, consts: [[1, "category-m", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "category-wrapper", 3, "ngClass"], ["alt", "", 1, "img-fluid", "w-auto", 3, "src"], [1, "category-link", 3, "innerHTML"], [1, "btn", "btn-outline", 3, "routerLink", "queryParams"]], template: function CollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CollectionComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.CollectionSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 93578:
/*!*****************************************************!*\
  !*** ./src/app/home/widgets/logo/logo.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);





function LogoComponent_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const logo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/home/fashion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", logo_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function LogoComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LogoComponent_ng_container_1_ng_template_1_Template, 4, 2, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
class LogoComponent {
    constructor() {
        this.logos = [];
        this.LogoSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.LogoSlider;
    }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], inputs: { logos: "logos" }, decls: 2, vars: 2, consts: [[1, "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "logo-block"], [3, "routerLink"], ["alt", "logo", 1, "w-auto", 3, "src"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LogoComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.LogoSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.logos);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 29313:
/*!*************************************************************!*\
  !*** ./src/app/home/widgets/services/services.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



const _c0 = function (a0) { return { mr2: a0 }; };
class ServicesComponent {
    constructor(translate) {
        this.translate = translate;
        this.lang = 'en';
        this.syncTR();
    }
    ngOnInit() {
    }
    syncTR() {
        this.trSub = this.translate.onLangChange.subscribe((data) => {
            console.log(data, data.lang);
            this.lang = data.lang;
        });
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
ServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 50, vars: 18, consts: [[1, "row"], [1, "col-md-4", "service-block"], [1, "media"], [1, "pi", "pi-chart-line", "spservice"], [1, "media-body", 3, "ngClass"], [1, "pi", "pi-globe", "spservice"], [1, "pi", "pi-link", "spservice"], [1, "pi", "pi-android", "spservice"], [1, "pi", "pi-slack", "spservice"], [1, "pi", "pi-cloud", "spservice", "iconSize"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Performance Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Enhance Site Speed & Efficiency. By optimizing backend systems, implementing best practices, and using effective debugging, I help boost application speed and performance for a smooth user experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4)(14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Custom Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Bring Ideas to Life with High-Quality Web Solutions. I develop dynamic, responsive websites tailored to clients' needs, using modern frameworks like Angular and NodeJS to enhance user experience and functionality.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1)(19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4)(22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " API Integrations & Automation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Seamlessly Integrate Essential Services. From payment gateways to AI frameworks like OpenAI, I provide advanced API integrations that streamline operations and add value to digital platforms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1)(27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4)(30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Mobile App Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Deliver Cross-Platform Mobile Experiences. I design and develop mobile applications using Flutter, Ionic, and NativeScript, ensuring a seamless experience across devices for maximum reach and impact.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1)(35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4)(38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Technical Mentorship & Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Empower Teams with Knowledge Sharing. With a background in teaching web development, I offer mentorship and training to junior developers, helping them grow their skills and excel in projects.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1)(43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4)(46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Real-Time Communication Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Implement Real-Time Features with WebSockets and MQTT. Leveraging WebSockets and MQTT, I create interactive applications that respond instantly, providing a more engaging and responsive user experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.lang == "ar"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: [".mr2[_ngcontent-%COMP%] {\n  margin-right: 1rem !important;\n}\n\n.iconSize[_ngcontent-%COMP%] {\n  \n  font-size: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFQTtFQUNHLGtCQUFBO0VBQ0EsZUFBQTtBQUNIIiwiZmlsZSI6InNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1yMntcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmljb25TaXple1xuICAgLyogIHdpZHRoOiAyMHB4OyAqL1xuICAgZm9udC1zaXplOiA0cmVtXG59Il19 */"] });


/***/ }),

/***/ 45642:
/*!*********************************************************!*\
  !*** ./src/app/home/widgets/slider/slider.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderComponent": () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 53225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







const _c0 = function (a0) { return { "background-image": a0 }; };
const _c1 = function () { return ["/pages/contact"]; };
const _c2 = function (a0) { return { category: a0 }; };
function SliderComponent_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div")(6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "form")(18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const slider_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.textClass)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c0, "url(" + slider_r1.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slider_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slider_r1.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c2, ctx_r2.category))("ngClass", ctx_r2.buttonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.buttonText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 14, "CONTACT.FORM.REG_UR_INT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 16, "CONTACT.FORM.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 18, "CONTACT.FORM.TEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 20, "CONTACT.FORM.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 22, "CONTACT.FORM.WRITE_MSG"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 24, "CONTACT.FORM.SEND_MSG"));
} }
function SliderComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SliderComponent_ng_container_1_ng_template_1_Template, 33, 31, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
class SliderComponent {
    constructor() {
        this.HomeSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.HomeSlider;
    }
    ngOnInit() {
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], inputs: { sliders: "sliders", class: "class", textClass: "textClass", category: "category", buttonText: "buttonText", buttonClass: "buttonClass" }, decls: 2, vars: 3, consts: [[1, "home-slider", 3, "options", "ngClass"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "home", 3, "ngClass", "ngStyle"], [1, "container"], [1, "row"], [1, "col-lg-8", "col-md-6", "col-sm-2", "col-xs-2"], [1, "slider-contain"], [1, "title"], [1, "sub-title"], [1, "btn", "btn-solid", 3, "routerLink", "queryParams", "ngClass"], [1, "col-4", "col-lg-4", "col-md-6", "col-sm-10", "dis-xs-none"], [1, "form-container"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "placeholder"], ["type", "tel", 1, "form-control", 3, "placeholder"], ["type", "email", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-primary"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SliderComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.HomeSliderConfig)("ngClass", ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sliders);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselSlideDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".home[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  background-position: center;\n  padding: 100px 0;\n  color: #fff;\n  display: flex;\n  align-items: center;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7); \n  padding: 20px;\n  border-radius: 8px;\n  color: #fff;\n  margin-bottom: 5px;\n}\n\n.form-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: #007bff;\n  width: 100%;\n}\n\n@media (max-width: 480px) {\n  .form-container[_ngcontent-%COMP%] {\n    padding: 2px;\n    border-radius: 2px;\n    color: #fff;\n  }\n  .form-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNFO0VBQ0Esb0NBQUEsRUFBQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFFO0VBQ0EsbUJBQUE7QUFHRjs7QUFERTtFQUNBLG1CQUFBO0FBSUY7O0FBRkU7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhFO0VBQ0E7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VBTUE7RUFKQTtJQUNBLGtCQUFBO0VBTUE7QUFDRiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7IFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbiAgcGFkZGluZzogMTAwcHggMDsgXG4gIGNvbG9yOiAjZmZmOyBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfSBcbiAgLmZvcm0tY29udGFpbmVyIHsgXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogRGFyayBiYWNrZ3JvdW5kIGZvciBjb250cmFzdCAqLyBcbiAgcGFkZGluZzogMjBweDsgXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgXG4gIGNvbG9yOiAjZmZmOyBcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9IFxuICAuZm9ybS1jb250YWluZXIgaDMgeyBcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgXG4gIH0gXG4gIC5mb3JtLWNvbnRyb2wgeyBcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgXG4gIH0gXG4gIC5idG4tcHJpbWFyeSB7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyBcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmOyBcbiAgd2lkdGg6IDEwMCU7IFxuICB9IFxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHsgXG4gIC5mb3JtLWNvbnRhaW5lciB7IFxuICBwYWRkaW5nOiAycHg7IFxuICBib3JkZXItcmFkaXVzOiAycHg7IFxuICBjb2xvcjogI2ZmZjsgXG4gIH0gXG4gIC5mb3JtLWNvbnRhaW5lciBoMyB7IFxuICBtYXJnaW4tYm90dG9tOiAycHg7IFxuICB9IFxuICB9XG4gICJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map