import Vue from "vue";
import { library, config, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAngleDoubleUp,
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowUp,
  faBookmark as fasBookmark,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faCog,
  faExchangeAlt,
  faExclamation,
  faExclamationCircle,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faFileImport,
  faFile,
  faInfo,
  faInfoCircle,
  faLanguage,
  faLink,
  faLock,
  faLockOpen,
  faMinus,
  faPlus,
  faPlusSquare,
  faQuestion,
  faSortAlphaDown,
  faTimes,
  faTimesCircle,
  faTrash,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBookmark as farBookmark, faBuilding, faCopy, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faAngleDoubleUp,
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowUp,
  faBuilding,
  faCheck,
  faCheckCircle,
  faCog,
  faCopy,
  faExchangeAlt,
  faExclamation,
  faExclamationCircle,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faFileImport,
  faFile,
  faGithub,
  faInfo,
  faInfoCircle,
  faLanguage,
  faLink,
  faLock,
  faLockOpen,
  faMinus,
  faPlus,
  faPlusSquare,
  faQuestion,
  faQuestionCircle,
  faSortAlphaDown,
  faTimes,
  faTimesCircle,
  faTrash,
  faUser,
  faUserPlus,
  farBookmark,
  fasBookmark,
  faChevronDown
);

// Register the component globally
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

dom.watch();
