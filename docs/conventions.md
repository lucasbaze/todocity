# Conventions

Collection of personal preferences for writing code withint the application

## Components

### Links

Use next/link when wrapping something that needs a link. Use <Link> from `@todocity/ui/core` when wrapping text and want link styling

## Styling

### Prefer useColorModeValue

This is a simple hook that chakra provides when you need to toggle values between light and dark mode. Cleaner than having `colorMode === 'light'` everywhere. This is not applicable when using the ContextBridge hook within the canvas
