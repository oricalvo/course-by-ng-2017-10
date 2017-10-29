import {myApp} from "./app.module";

import "./app.store";

import "./components/app.component";
import "./components/clock/clock.component";
import "./components/settings/settings.component";

angular.bootstrap(document.querySelector("html"), [myApp.name]);
