export const SUPABASE_URL = "https://kbkurzriqgddnepmlnnt.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtia3VyenJpcWdkZG5lcG1sbm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ5MzMwNzUsImV4cCI6MjExMDUwOTA3NX0.gSfPPmHOEC5Ej4vuJnvRLQjlXnNgqwrYKwZW7W86njU";

export async function submitInquiry(inquiryData) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/inquiries`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inquiryData)
    });

    if (!response.ok) {
      console.warn('Supabase post response status:', response.status);
    }
    return true;
  } catch (error) {
    console.error('Failed to submit inquiry to Supabase:', error);
    return false;
  }
}
