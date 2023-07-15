import Stack from '../components/Stack';

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    numberOfChildren: {
      type: 'number',
    },
  },
  args: {
    numberOfChildren: 4,
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        key={n}
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
export const Vertical = Template.bind({});
export const NoSpacing = Template.bind({});
export const WrapOverflow = Template.bind({});
export const Empty = Template.bind({});

Horizontal.args = {
  direction: 'row',
  spacing: 2,
  wrap: false,
};

Vertical.args = {
  direction: 'columnç',
  spacing: 2,
  wrap: false,
};

NoSpacing.args = {
  direction: 'row',
  spacing: 0,
  wrap: false,
};

WrapOverflow.args = {
  numberOfChildren: 40,
  direction: 'row',
  spacing: 2,
  wrap: true,
};

Empty.args = {
  numberOfChildren: 0,
  direction: 'row',
  spacing: 2,
};
