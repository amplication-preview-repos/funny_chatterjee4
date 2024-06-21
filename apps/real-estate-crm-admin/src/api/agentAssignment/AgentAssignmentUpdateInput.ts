import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agentId?: string | null;
  dateAssigned?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
