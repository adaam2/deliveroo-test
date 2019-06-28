import { configure, addParameters } from '@storybook/react';

import storybookTheme from './theme';

addParameters({
  options: {
    theme: storybookTheme
  }
});

const req = require.context('../stories', true, /\.(stories|story)\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
