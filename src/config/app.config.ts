interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Content Creator', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Viralvia',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage company_rating',
    'Manage content_type',
    'Manage company_discount',
    'Manage user_profile',
    'Manage content_review',
    'Manage user',
    'Manage company',
    'Manage content',
    'Manage contract',
    'Manage payment',
    'Manage discount_coupon',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/d0c67416-d279-4af7-83e1-01baacd2efd1',
};
