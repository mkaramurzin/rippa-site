import ProductPage from '@/app/components/ProductPage';
import { promises as fs } from 'fs';
import path from 'path';

export default async function RippaR18ProPage() {
  // Read the description markdown file
  let description = '';
  try {
    const descriptionPath = path.join(process.cwd(), 'src/app/products/rippa_r18_pro/description.md');
    description = await fs.readFile(descriptionPath, 'utf8');
  } catch (error) {
    console.log('Description file not yet populated');
  }

  return (
    <ProductPage 
      name="Rippa R18 PRO"
      tonnage="1.8 Ton"
      power="15.2 kW"
      features={[
        "Professional-grade performance",
        "Advanced boom control system",
        "All-day operator comfort",
        "Superior digging force",
        "Built for demanding applications"
      ]}
      specs={{
        depth: "2.7m",
        reach: "4.6m",
        width: "1.45m"
      }}
      description={description}
      images={[]}
    />
  );
}

