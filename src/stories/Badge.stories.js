import { createBadge } from './Badge'

export default {
  title: 'Example/Badge',
  argTypes: {
    label: { control: 'text' },
    style: {
      control: { type: 'select' },
      options: ['default', 'dark', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink'],
    },
  },
};

const Template = ({ label, ...args }) => {
  return createBadge({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  style: 'default',
  label: 'Default',
};
