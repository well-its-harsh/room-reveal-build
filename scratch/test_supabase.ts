import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function testFetch() {
  const joins = ['categories', 'product_media', 'inventory', 'ar_assets', 'reviews']
  for (const join of joins) {
    console.log(`Testing join: ${join}`)
    const { data, error } = await supabase.from('products').select(`*, ${join}(*)`).limit(1)
    if (error) {
      console.error(`Error with join ${join}:`, error)
    } else {
      console.log(`Success with join ${join}`)
    }
  }
}

testFetch()
