const pixels = {
  ledger: ['11111111', '10000001', '10111101', '10000001', '10101101', '10101101', '10000001', '11111111'],
  practice: ['01111110', '01000010', '01011010', '01000010', '01011010', '01000010', '01011010', '01111110'],
  tools: ['00011000', '00111100', '01111110', '11011011', '00011000', '00011000', '00111100', '00111100'],
}
export default function PixelIcon({ kind = 'ledger' }) {
  return <svg className="pixel-icon" viewBox="0 0 8 8" aria-hidden="true" shapeRendering="crispEdges">
    {pixels[kind].flatMap((row, y) => [...row].map((pixel, x) => pixel === '1' &&
      <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="currentColor" />))}
  </svg>
}
