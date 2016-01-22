System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CarouselSelect;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CarouselSelect = (function () {
                function CarouselSelect() {
                    console.log('Yiha');
                }
                CarouselSelect = __decorate([
                    core_1.Component({
                        selector: 'carousel-select',
                        template: "\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n          <!-- Indicators -->\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n          </ol>\n\n          <!-- Wrapper for slides -->\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"item active\">\n              <img src=\"img_chania.jpg\" alt=\"Chania\">\n            </div>\n\n            <div class=\"item\">\n              <img src=\"img_chania2.jpg\" alt=\"Chania\">\n            </div>\n\n            <div class=\"item\">\n              <img src=\"img_flower.jpg\" alt=\"Flower\">\n            </div>\n\n            <div class=\"item\">\n              <img src=\"img_flower2.jpg\" alt=\"Flower\">\n            </div>\n          </div>\n\n          <!-- Left and right controls -->\n          <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n            <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n            <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CarouselSelect);
                return CarouselSelect;
            })();
            exports_1("CarouselSelect", CarouselSelect);
        }
    }
});
