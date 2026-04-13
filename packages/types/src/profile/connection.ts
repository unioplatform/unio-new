/**
 * ✅ CANONICAL CONNECTION STATUS
 * Defines the relationship state between the viewer and the profile owner.
 */
export type ConnectionStatus = "NONE" | "PENDING" | "CONNECTED" | "BLOCKED";

export interface ConnectionStats {
  connectionsCount: number;
  mutualConnections: number;
  engagementRate: string;
  discussionsCount: number;
  sharesCount: number;
}