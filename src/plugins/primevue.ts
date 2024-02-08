/*****************************************************************************/
/* PRIME VUE CSS */
/*****************************************************************************/
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "@/assets/primevue/themes/lara/lara-light/blue/theme.scss";

import type { App } from "vue";

/*****************************************************************************/
/* PRIME VUE - IMPORT COMPONENTS */
/*****************************************************************************/
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import AutoComplete from "primevue/autocomplete";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Badge from "primevue/badge";
import Breadcrumb from "primevue/breadcrumb";
import Button from "primevue/button";
import BlockUI from "primevue/blockui";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import Chips from "primevue/chips";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import DataView from "primevue/dataview";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import Galleria from "primevue/galleria";
import InlineMessage from "primevue/inlinemessage";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import Knob from "primevue/knob";
import Menu from "primevue/menu";
import Message from "primevue/message";
import MultiSelect from "primevue/multiselect";
import Password from "primevue/password";
import Panel from "primevue/panel";
import ProgressBar from "primevue/progressbar";
import ProgressSpinner from "primevue/progressspinner";
import RadioButton from "primevue/radiobutton";
import Rating from "primevue/rating";
import SelectButton from "primevue/selectbutton";
import ScrollPanel from "primevue/scrollpanel";
import Sidebar from "primevue/sidebar";
import Skeleton from "primevue/skeleton";
import Slider from "primevue/slider";
import TabMenu from "primevue/tabmenu";
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import Tag from "primevue/tag";
import Textarea from "primevue/textarea";
import ToggleButton from "primevue/togglebutton";
import Toast from "primevue/toast";
import Tooltip from "primevue/tooltip";
/*****************************************************************************/
/* PRIME VUE IMPORT DIRECTIVES */
/*****************************************************************************/
import StyleClass from "primevue/styleclass";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";
/*****************************************************************************/
/* PRIME VUE IMPORT SERVICES */
/*****************************************************************************/
import ToastService from "primevue/toastservice";

export default {
  install(app: App) {
    /*****************************************************************************/
    /* PRIME VUE - COMPONENTS */
    /*****************************************************************************/
    app.component("Accordion", Accordion);
    app.component("AccordionTab", AccordionTab);
    app.component("AutoComplete", AutoComplete);
    app.component("Avatar", Avatar);
    app.component("AvatarGroup", AvatarGroup);
    app.component("Badge", Badge);
    app.component("Breadcrumb", Breadcrumb);
    app.component("Button", Button);
    app.component("BlockUI", BlockUI);
    app.component("Calendar", Calendar);
    app.component("Card", Card);
    app.component("Carousel", Carousel);
    app.component("Checkbox", Checkbox);
    app.component("Chip", Chip);
    app.component("Chips", Chips);
    app.component("Column", Column);
    app.component("DataTable", DataTable);
    app.component("DataView", DataView);
    app.component("Dialog", Dialog);
    app.component("Divider", Divider);
    app.component("Dropdown", Dropdown);
    app.component("FileUpload", FileUpload);
    app.component("Galleria", Galleria);
    app.component("InlineMessage", InlineMessage);
    app.component("InputMask", InputMask);
    app.component("InputNumber", InputNumber);
    app.component("InputSwitch", InputSwitch);
    app.component("InputText", InputText);
    app.component("IconField", IconField);
    app.component("InputIcon", InputIcon);
    app.component("Knob", Knob);
    app.component("Menu", Menu);
    app.component("Message", Message);
    app.component("MultiSelect", MultiSelect);
    app.component("Panel", Panel);
    app.component("Password", Password);
    app.component("ProgressBar", ProgressBar);
    app.component("ProgressSpinner", ProgressSpinner);
    app.component("RadioButton", RadioButton);
    app.component("Rating", Rating);
    app.component("ScrollPanel", ScrollPanel);
    app.component("Sidebar", Sidebar);
    app.component("SelectButton", SelectButton);
    app.component("Skeleton", Skeleton);
    app.component("Slider", Slider);
    app.component("TabMenu", TabMenu);
    app.component("TabPanel", TabPanel);
    app.component("TabView", TabView);
    app.component("Tag", Tag);
    app.component("Textarea", Textarea);
    app.component("ToggleButton", ToggleButton);
    app.component("Toast", Toast);

    /*****************************************************************************/
    /* PRIME VUE - DIRECTIVES */
    /*****************************************************************************/
    app.directive("styleclass", StyleClass);
    app.directive("ripple", Ripple);
    app.directive("badge", BadgeDirective);
    app.directive("tooltip", Tooltip);

    /*****************************************************************************/
    /* PRIME VUE - SEVICES */
    /*****************************************************************************/
    app.use(ToastService);
  },
};
