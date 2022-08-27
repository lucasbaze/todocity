# Conventions

Collection of personal preferences for writing code withint the application

## Styling

### Prefer useColorModeValue

This is a simple hook that chakra provides when you need to toggle values between light and dark mode. Cleaner than having `colorMode === 'light'` everywhere. This is not applicable when using the ContextBridge hook within the canvas
