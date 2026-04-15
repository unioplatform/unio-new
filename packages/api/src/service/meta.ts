/* packages/api/src/service/meta.ts */
import { getJSON } from "../core/client";
import { endpoints } from "../core/endpoints";
import type { CareerOption } from "@unio/types";

/**
 * ✅ getCareers
 * Fetches a list of careers for onboarding and profile setup.
 * Supports optional query filtering.
 */
export async function getCareers(query?: string): Promise<CareerOption[]> {
  // Note: Ensure your getJSON helper handles the second argument as query params
  const response = await getJSON<{ careers: CareerOption[] }>(
    endpoints.meta.careers(), 
    query ? { query } : {}
  );
  
  return response.careers;
}