interface InAppPurchasePayload {
  planId: string;
}

/**
 * Mocks the Whop internal SDK function for in-app purchases.
 * In a real Whop app, this function would be provided by the native environment.
 * @param command The command to execute, e.g., 'inAppPurchase'.
 * @param payload The data for the command, e.g., { planId: '...' }.
 * @returns A promise that resolves with the result of the operation.
 */
export const __internal_execAsync = async (
  command: 'inAppPurchase',
  payload: InAppPurchasePayload
): Promise<{ success: boolean }> => {
  console.log(`[WHOP SDK MOCK] Executing command: ${command}`);
  console.log(`[WHOP SDK MOCK] Payload:`, payload);

  // Simulate network delay for a more realistic feel
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In this mock, we always simulate a successful purchase
  console.log(`[WHOP SDK MOCK] Purchase successful for planId: ${payload.planId}`);
  return { success: true };
};