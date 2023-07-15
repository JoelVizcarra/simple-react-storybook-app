import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
export const Green = Template.bind({});
export const Small = Template.bind({});
export const Large = Template.bind({});

Red.args = {
  label: 'Red Button',
  backgroundColor: 'red',
  size: 'md',
};

Green.args = {
  label: 'Green Button',
  backgroundColor: 'green',
  size: 'md',
};

Small.args = {
  label: 'Green Button',
  size: 'sm',
};

Large.args = {
  label: 'Green Button',
  size: 'lg',
};
