# @fikasio/styles

Design tokens shared by the fikas.io web app and the React Native app. The package has no React or DOM dependency. Each app applies the same values in its own styling system.

## Installation

```
npm install --save @fikasio/styles
```

## Tokens

Colors, spacing, type, radii, and border widths live in plain objects. Spacing, font sizes, radii, and border widths are pixels without a unit.

```ts
import { colors, fontSize, space } from '@fikasio/styles';

colors.brand; // #7E5B9A
space.md;     // 16
fontSize.body; // 15
```

## Web

Inject the generated custom properties once, then reference them from CSS.

```ts
import { cssCustomProperties } from '@fikasio/styles';

const style = document.createElement('style');
style.textContent = cssCustomProperties;
document.head.appendChild(style);
```

```css
.nav-tabs .nav-link.active {
  border-bottom: var(--fikasio-border-width-accent) solid var(--fikasio-color-brand);
}
```

## React Native

Use the numbers directly in `StyleSheet`. React Native does not read the CSS variables.

```ts
import { StyleSheet } from 'react-native';
import { colors, fontSize, radius, space } from '@fikasio/styles';

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: fontSize.title,
    marginBottom: space.sm,
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.none,
    borderWidth: 1,
    padding: space.md,
  },
});
```
