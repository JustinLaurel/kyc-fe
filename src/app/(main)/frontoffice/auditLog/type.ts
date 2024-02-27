export type AuditRow = {
  timestamp: string,
  performedBy: string,
  userRole: string,
  applicationId: string,
  activity: string,
  reason: string,
  fromStatus: string,
  toStatus: string,
}