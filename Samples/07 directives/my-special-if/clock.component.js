class ClockComponent {
    constructor($interval) {
        console.log("Clock.ctor");

        this.$interval = $interval;
        this.time = new Date();
    }

    $onInit() {
        this.$interval(()=> {
            this.time = new Date();
        }, 1000);
    }

    $onDestroy() {
        console.log("Clock.dtor");
    }
}

myApp.component("appClock", {
    controller: ClockComponent,
    template: "<span>{{$ctrl.time | date: 'HH:mm:ss'}}</span>",
});
