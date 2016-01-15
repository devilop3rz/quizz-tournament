System.register(['angular2/angular2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var HomeComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.titleName = "Hello from Home";
                }
                HomeComponent = __decorate([
                    angular2_1.Component({
                        template: '<h1>{{titleName}}</h1>',
                        selector: 'home'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
            alert('hey');
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSG9tZUNvbXBvbmVudCIsIkhvbWVDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQU1JQTtvQkFFSUMsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsaUJBQWlCQSxDQUFBQTtnQkFDdENBLENBQUNBO2dCQVRMRDtvQkFBQ0Esb0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSx3QkFBd0JBO3dCQUNsQ0EsUUFBUUEsRUFBRUEsTUFBTUE7cUJBQ25CQSxDQUFDQTs7a0NBUURBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FYQSxBQVdDQSxJQUFBO1lBWEQseUNBV0MsQ0FBQTtZQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogJzxoMT57e3RpdGxlTmFtZX19PC9oMT4nLFxyXG4gICAgc2VsZWN0b3I6ICdob21lJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcbiAgICB0aXRsZU5hbWU6IHN0cmluZ1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGl0bGVOYW1lID0gXCJIZWxsbyBmcm9tIEhvbWVcIlxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuYWxlcnQoJ2hleScpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
