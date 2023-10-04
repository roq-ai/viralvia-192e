const mapping: Record<string, string> = {
  companies: 'company',
  'company-discounts': 'company_discount',
  'company-ratings': 'company_rating',
  contents: 'content',
  'content-reviews': 'content_review',
  'content-types': 'content_type',
  contracts: 'contract',
  'discount-coupons': 'discount_coupon',
  payments: 'payment',
  users: 'user',
  'user-profiles': 'user_profile',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
