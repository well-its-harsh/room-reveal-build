import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ulzqcpceklkwxzceykbd.supabase.co';
const supabaseAnonKey = 'sb_publishable_-KnA9VtKNvf0uBm3LKxb8w_LGckjrZi';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const areaUpdates = [
  { slug: 'kitchen', url: '/images/areas/kitchen-area.png' },
  { slug: 'toilet', url: '/images/areas/toilet-area.png' },
  { slug: 'bathroom', url: '/images/areas/bathroom-area.png' },
  { slug: 'wash-basin', url: '/images/areas/wash-basin-area.png' },
  { slug: 'drains', url: '/images/areas/drain-area.png' },
  { slug: 'special-needs', url: '/images/areas/special-needs-area.png' },
];

const categoryUpdates = [
  { slug: 'kitchen-sink-taps', url: '/images/categories/kitchen-taps.png' },
  { slug: 'sanitaryware-toilets', url: '/images/categories/sanitaryware-toilets.png' },
  { slug: 'faucets', url: '/images/categories/faucets.png' },
  { slug: 'bathtub', url: '/images/categories/bathtub.png' },
  { slug: 'designer-drains', url: '/images/categories/designer-drains.png' },
  { slug: 'shower-systems', url: '/images/categories/shower-systems.png' },
  { slug: 'sink-fittings-accessories', url: '/images/categories/sink-fittings.png' },
];

async function run() {
  console.log('--- STARTING DATABASE IMAGE SYNC ---');
  
  for (const item of areaUpdates) {
    console.log(`Updating Area [${item.slug}]...`);
    const { error } = await supabase.from('areas').update({ image_url: item.url }).eq('slug', item.slug);
    if (error) console.error(`Failed:`, error.message);
  }

  for (const item of categoryUpdates) {
    console.log(`Updating Category [${item.slug}]...`);
    const { error } = await supabase.from('categories').update({ image_url: item.url }).eq('slug', item.slug);
    if (error) console.error(`Failed:`, error.message);
  }
  
  console.log('--- SYNC COMPLETE ---');
}

run();
