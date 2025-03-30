function enhanceColor(color) {
  const normColor = color / 255.0;

  if (normColor > 0.04045) {
    return (normColor + 0.055) / (1 + 0.055) ** 2.4 ;
  }

  return normColor / 12.92;
}

export function rgbToXy({ r, g, b }) {
  const rFinal = enhanceColor(r);
  const gFinal = enhanceColor(g);
  const bFinal = enhanceColor(b);

  const X = rFinal * 0.649926 + gFinal * 0.103455 + bFinal * 0.197109;
  const Y = rFinal * 0.234327 + gFinal * 0.743075 + bFinal * 0.022598;
  const Z = rFinal * 0.000000 + gFinal * 0.053077 + bFinal * 1.035763;

  if (X + Y + Z === 0) return { x: 0, y: 0 };

  const xFinal = X / (X + Y + Z);
  const yFinal = Y / (X + Y + Z);

  return { x: xFinal, y: yFinal };
}
