import { useState, useEffect, useMemo } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

import { mapCoordinates } from "@unio/lib";
import world110m from "@/assets/world-110m.json";

export const useAnimatedMap = () => {
  const [land, setLand] = useState<any>(null);

  // 🌍 Projection for the world map
  const projection = useMemo(
    () => d3.geoNaturalEarth1().scale(150).translate([400, 225]),
    []
  );

  // 🗺️ Path generator — explicitly typed as a callable function
  const pathGenerator = useMemo(
    () =>
      (d3.geoPath().projection(projection) as unknown as (
        feature: any
      ) => string | undefined),
    [projection]
  );


  // 🌎 Convert TopoJSON → GeoJSON
  useEffect(() => {
    if (!world110m) return;

    const geojson = topojson.feature(
      world110m as any,
      (world110m as any).objects.countries
    );

    setLand(geojson);
  }, []);

  // 📍 Project markers onto the map
  const markers = useMemo(
    () =>
      mapCoordinates.map((coords: [number, number], i: number) => {
        const [x, y] = projection(coords) ?? [0, 0];
        return { id: `marker-${i}`, x, y };
      }),
    [projection]
  );

  return { land, markers, projection, pathGenerator };
};
