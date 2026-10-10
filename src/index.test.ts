import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { colors, cssCustomProperties, radius, theme } from './index.ts';

describe('@fikasio/styles', () => {
  it('keeps the web brand purple', () => {
    assert.equal(colors.brand, '#7E5B9A');
    assert.equal(theme.colors.brand, colors.brand);
  });

  it('uses square corners', () => {
    assert.equal(radius.none, 0);
  });

  it('emits CSS custom properties from the same values', () => {
    assert.match(cssCustomProperties, /--fikasio-color-brand: #7E5B9A;/);
    assert.match(cssCustomProperties, /--fikasio-color-brand-hover: #AC95BE;/);
    assert.match(cssCustomProperties, /--fikasio-space-md: 16px;/);
    assert.match(cssCustomProperties, /--fikasio-radius-none: 0px;/);
  });
});
