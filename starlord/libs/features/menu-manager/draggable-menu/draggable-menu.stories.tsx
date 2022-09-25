import { Meta, Story } from '@storybook/react';

import { DraggableMenu, IDraggableMenuProps } from './draggable-menu';

export default {
  component: DraggableMenu,
  title: 'Components/DraggableMenu',
  parameters: {
    docs: {
      description: {
        component: 'DraggableMenu',
      },
    },
  },
} as Meta;

const Template: Story<IDraggableMenuProps> = (args) => (
  <DraggableMenu {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  position: { left: 5, top: 5 },
  header: <div>Header</div>,
  body: (
    <div>
      Content that can be moved and should end up wrapping around if I did this
      corectly
    </div>
  ),
  onClose: () => alert('Closed Draggable Menu'),
};
