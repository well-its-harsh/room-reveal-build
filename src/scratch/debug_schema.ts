import { supabase } from "./src/lib/supabase";

async function debugSchema() {
  const { data, error } = await supabase.from('enquiries').select('*').limit(1);
  if (error) {
    console.error("Error fetching enquiries:", error);
  } else if (data && data.length > 0) {
    console.log("Enquiry columns:", Object.keys(data[0]));
  } else {
    console.log("No enquiries found to inspect columns.");
  }
}

debugSchema();
