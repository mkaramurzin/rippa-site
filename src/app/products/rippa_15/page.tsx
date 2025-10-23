import ProductPage from '@/app/components/ProductPage';
import { promises as fs } from 'fs';
import path from 'path';

export default async function RippaR15Page() {
  // Read the description markdown file
  let description = '';
  try {
    const descriptionPath = path.join(process.cwd(), 'src/app/products/rippa_15/description.md');
    description = await fs.readFile(descriptionPath, 'utf8');
  } catch (error) {
    console.log('Description file not yet populated');
  }

  return (
    <ProductPage 
      name="Rippa R15"
      tonnage="1.5 Ton"
      power="12.8 kW"
      features={[
        "Versatile mid-range workhorse",
        "Optimized fuel economy",
        "Extended reach capability",
        "Comfortable operator station",
        "Perfect balance of power and portability"
      ]}
      specs={{
        depth: "2.5m",
        reach: "4.2m",
        width: "1.2m"
      }}
      description={description}
      images={[]}
    />
  );
}

