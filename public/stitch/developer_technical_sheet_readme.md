# Reef Property: Developer Technical Sheet & README

## Project Overview
Reef Property is a high-fidelity property management ecosystem built with a focus on "Aquatic Precision." This document serves as the technical reference for developers.

## 1. README: Quick Start
- **Design System:** Aquatic Precision (DESIGN_SYSTEM_1)
- **Primary Tech Stack:** Tailwind CSS, Google Material Symbols, Inter/Manrope Typography.
- **Architecture:** Role-based modular views (Resident, Guest, Owner).

## 2. Technical Architecture
### Shared Components
- **TopAppBar:** Fixed navigation with role-specific branding.
- **BottomNavBar:** Persistent navigation tailored to user permissions.
- **NavigationDrawer:** Extended menu for high-complexity owner views.

### Design Tokens
- **Primary Color:** #14B8A6 (Teal)
- **Typography:** Manrope (Headlines), Inter (Body).
- **Radius:** 4px (Soft precision).

## 3. Troubleshooting Guide
| Issue | Potential Cause | Resolution |
| :--- | :--- | :--- |
| Map Pins Not Loading | API Key Mismatch | Verify Mapbox/Google Maps API tokens in .env |
| Rate Predictor Empty | Insufficient Data | Ensure at least 3 months of historical booking data is ingested |
| Session Timeout | JWT Expiry | Check `AUTH_SESSION_TTL` settings in backend config |

## 4. Deployment Notes
- Ensure all SVG assets from the "Aquatic Precision" set are optimized.
- Verify WCAG 2.1 AA contrast compliance on all #14B8A6 action buttons.
