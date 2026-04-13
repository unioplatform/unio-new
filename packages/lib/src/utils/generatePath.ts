// -----------------------------------------------------------------------------
// generatePath.ts — Safe wrapper around D3 path generator
// -----------------------------------------------------------------------------
// - Prevents crashes when D3's geoPath() receives malformed data
// - Uses loose typing to stay flexible for all map features
// - Always returns a string so SVG never breaks
// -----------------------------------------------------------------------------

export const generatePath = (
  pathGenerator: ((feature: any) => string | undefined) | null | undefined,
  feature: any
): string => {
  if (!pathGenerator || !feature) return "";

  try {
    return pathGenerator(feature) || "";
  } catch {
    return "";
  }
};
