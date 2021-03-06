System.register(['angular2/core', './population-list/population_list.component', './population-chart/population_chart.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, population_list_component_1, population_chart_component_1;
    var PopulationApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (population_list_component_1_1) {
                population_list_component_1 = population_list_component_1_1;
            },
            function (population_chart_component_1_1) {
                population_chart_component_1 = population_chart_component_1_1;
            }],
        execute: function() {
            PopulationApp = (function () {
                function PopulationApp() {
                }
                PopulationApp = __decorate([
                    core_1.Component({
                        selector: 'population-app',
                        template: "\n      <population-list></population-list>\n      <population-chart></population-chart>\n    ",
                        directives: [population_list_component_1.PopulationList, population_chart_component_1.PopulationChart]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PopulationApp);
                return PopulationApp;
            }());
            exports_1("PopulationApp", PopulationApp);
        }
    }
});
//# sourceMappingURL=population_app.component.js.map