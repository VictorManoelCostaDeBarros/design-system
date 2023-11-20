import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@vm-ignite-ui/react'

export default {
  title: 'Form/ToolTip',
  component: Tooltip,
  args: {
    content: '26 de Outubro - Disponível',
    children: <Text css={{ width: 'min-content' }}>HoverMe</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  decorators: [
    (Story) => {
      return (
        <Box
          as={'div'}
          css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          {Story()}
        </Box>
      )
    },
  ],
}

export const Opened: StoryObj<TooltipProps> = {
  args: { open: true },
}
