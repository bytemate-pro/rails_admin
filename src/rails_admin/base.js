import Rails from "@rails/ujs";
import "./jquery";
import moment from "moment";
import "./vendor/jquery.pjax";
import "./vendor/jquery_nested_form";
import "bootstrap-sass";
import "moment/min/locales.js";
import "eonasdan-bootstrap-datetimepicker";

import "./filter-box";
import "./filtering-multiselect";
import "./filtering-select";
import "./nested-form-hooks";
import "./remote-form";
import "./sidescroll";
import "./ui";
import "./widgets";

Rails.start();
window.moment = moment;
