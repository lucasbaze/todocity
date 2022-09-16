import { AnalButton } from './anal-button';

export default {
  component: AnalButton,
  title: 'Components/Anal Button',
};

export const Default = () => {
  return (
    <AnalButton
      variant="solid"
      colorScheme="purple"
      size="sm"
      aria-label="Button"
      analytics={{ buttonName: 'Storybook Button' }}
    >
      Button
    </AnalButton>
  );
};
