import { html } from 'lit';
import '../src/project-3.js';

export default {
  title: 'Project3',
  component: 'project-3',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project-3
      style="--project-3-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project-3>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
