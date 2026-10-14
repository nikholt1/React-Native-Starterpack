# React-Native-Starterpack

A copy/paste starterpack for React Native components and utility code.

This repository is intentionally simple: it is a collection of ready-to-use UI blocks and code snippets you can quickly drop into a project to get moving fast.

## What you can copy right away

### UI components

- `/starterpack/ui/PrimaryButton.tsx`
- `/starterpack/ui/ScreenContainer.tsx`
- `/starterpack/ui/EmptyState.tsx`

### Utility code

- `/starterpack/code/useAsyncState.ts`
- `/starterpack/code/storage.ts`

## Quick start

1. Copy any file(s) from `starterpack/ui` or `starterpack/code` into your app.
2. Adjust colors/text/styles to match your design system.
3. Import and use in your screen/component.

Example:

```tsx
import { ScreenContainer } from "./starterpack/ui/ScreenContainer";
import { PrimaryButton } from "./starterpack/ui/PrimaryButton";
import { useAsyncState } from "./starterpack/code/useAsyncState";

export const HomeScreen = () => {
  const { value, loading, error, run } = useAsyncState(async () => {
    return "Starterpack ready";
  });

  return (
    <ScreenContainer>
      <PrimaryButton title={loading ? "Loading..." : "Load"} onPress={run} />
    </ScreenContainer>
  );
};
```
