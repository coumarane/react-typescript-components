import { configure } from "@storybook/react";
import 'bootstrap/dist/css/bootstrap.css';

configure(require.context('../src', true, /\.stories\.tsx$/), module);

// const req = require.context('../src', true, /\.stories.tsx$/);

// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);