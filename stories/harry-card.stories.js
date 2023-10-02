import { html } from 'lit';
import '../src/harry-card.js';

export default {
  title: 'HarryCard',
  component: 'harry-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <harry-card
      style="--harry-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </harry-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
