import {myApp} from "../../app.module";

class ClockComponent {
    constructor($interval) {
        this.time = new Date();

        $interval(()=> {
            this.time = new Date();

            this.onTick({time: this.time});
        }, 1000);
    }
}

myApp.component("appClock", {
    controller: ClockComponent,
    templateUrl: "app/components/clock/clock.component.html",
    bindings: {
        format: "<",
        onTick: "&",
    }
});
