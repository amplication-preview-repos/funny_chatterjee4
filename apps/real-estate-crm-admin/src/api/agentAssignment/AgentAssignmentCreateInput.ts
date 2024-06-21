import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentId?: string | null;
  dateAssigned?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
