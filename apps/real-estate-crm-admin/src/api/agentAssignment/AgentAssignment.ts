import { Property } from "../property/Property";

export type AgentAssignment = {
  agentId: string | null;
  createdAt: Date;
  dateAssigned: Date | null;
  id: string;
  property?: Property | null;
  updatedAt: Date;
};
