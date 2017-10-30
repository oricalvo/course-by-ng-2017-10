class NgIfDirective {
    constructor(exprFn, templateFn, scope, element, attrs) {
        this.exprFn = exprFn;
        this.templateFn = templateFn;
        this.scope = scope;
        this.element = element;
        this.attrs = attrs;
        this.templateElement = null;
        this.templateScope = null;
    }

    static compile($parse, $compile, element, attrs) {
        const expr = attrs["myIf"];
        const exprFn = $parse(expr);

        element.remove();
        element.removeAttr("my-if");
        element.before("<!-- myIf -->");

        const template = element[0].outerHTML;
        const templateFn = $compile(template);

        return function link(scope, element, attrs) {
            const directive = new NgIfDirective(exprFn, templateFn, scope, element, attrs);
            directive.link();
        }
    }

    link() {
        this.scope.$watch(this.exprFn, this.onExprChanged.bind(this));
    }

    onExprChanged(newValue) {
        if(newValue) {
            this.createTemplate();
        }
        else {
            this.destroyTemplate();
        }
    }

    createTemplate() {
        if(this.templateElement) {
            return;
        }

        this.templateScope = this.scope.$new();

        this.templateFn(this.templateScope, (clone) => {
            this.templateElement = clone;
            this.element.after(this.templateElement);
        });
    }

    destroyTemplate() {
        if(this.templateElement) {
            this.templateScope.$destroy();
            this.templateScope = null;

            this.templateElement.remove();
            this.templateElement = null;
        }
    }
}

myApp.directive("myIf", function($parse, $compile) {
    return {
        restrict: "A",
        terminal: true,
        compile: NgIfDirective.compile.bind(undefined, $parse, $compile),
    }
});
