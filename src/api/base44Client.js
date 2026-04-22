import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const appId = import.meta.env.VITE_BASE44_APP_ID;
const appBaseUrl = import.meta.env.VITE_BASE44_APP_BASE_URL;
const apiKey = import.meta.env.VITE_BASE44_API_KEY;
const functionsVersion = import.meta.env.VITE_BASE44_FUNCTIONS_VERSION;
const token = appParams.token;

if (!appId) {
  throw new Error('Missing required env var: VITE_BASE44_APP_ID');
}

if (!appBaseUrl) {
  throw new Error('Missing required env var: VITE_BASE44_APP_BASE_URL');
}

if (!apiKey && import.meta.env.MODE !== 'production') {
  console.warn(
    'VITE_BASE44_API_KEY is not set. Requests will continue using appBaseUrl and optional token auth if available.',
  );
}

export const base44 = createClient({
  appId,
  token,
  functionsVersion,
  appBaseUrl,
  requiresAuth: false,
  headers: apiKey ? { api_key: apiKey } : undefined,
});

// API functions for fetching data
export const getProperties = async () => {
  try {
    return await base44.entities.Properties.list();
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};

export const getUsers = async () => {
  try {
    return await base44.entities.Users.list();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const getMaintenanceRequests = async () => {
  try {
    return await base44.entities.MaintenanceRequests.list();
  } catch (error) {
    console.error('Error fetching maintenance requests:', error);
    return [];
  }
};

export const getPayments = async () => {
  try {
    return await base44.entities.Payments.list();
  } catch (error) {
    console.error('Error fetching payments:', error);
    return [];
  }
};

export const createMaintenanceRequest = async (data) => {
  try {
    return await base44.entities.MaintenanceRequests.create(data);
  } catch (error) {
    console.error('Error creating maintenance request:', error);
    throw error;
  }
};

export const createPayment = async (data) => {
  try {
    return await base44.entities.Payments.create(data);
  } catch (error) {
    console.error('Error creating payment:', error);
    throw error;
  }
};
