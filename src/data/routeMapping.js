// Route mapping for Stitch screens based on deployment map
export const routeMapping = {
  // Resident App
  '/resident/shell': 'resident_app_shell_1',
  '/resident/dashboard': 'resident_dashboard_1',
  '/resident/billing': 'billing_overview_1',
  '/resident/methods': 'manage_payment_methods',
  '/resident/maintenance': 'new_request_category_1',
  '/resident/request-sent': 'request_sent_1',

  // Guest App
  '/guest/shell': 'guest_app_shell_1',
  '/guest/search': 'property_search_map_1',
  '/guest/book/dates': 'select_dates_guests',
  '/guest/book/summary': 'booking_summary',
  '/guest/success': 'payment_successful',
  '/guest/guide': 'welcome_arrival',

  // Owner & Manager App
  '/owner/shell': 'owner_app_shell_1',
  '/owner/dashboard': 'owner_dashboard_1',
  '/owner/radar': 'risk_radar_1',
  '/owner/reports': 'property_performance_report',
  '/manager/shell': 'manager_app_shell_1',
  '/manager/unified': 'unified_manager_dashboard_1',
  '/manager/predictor': 'smart_rate_predictor',
};