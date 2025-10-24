import ProductPage from '@/app/components/ProductPage';
import { promises as fs } from 'fs';
import path from 'path';

export default async function RippaR13ProPage() {
  // Read the description markdown file
  let description = '';
  try {
    const descriptionPath = path.join(process.cwd(), 'src/app/products/rippa_r13_pro/description.md');
    description = await fs.readFile(descriptionPath, 'utf8');
  } catch (error) {
    console.log('Description file not yet populated');
  }

  return (
    <ProductPage 
      name="Rippa R13 PRO"
      tonnage="1.3 Ton"
      power="10.5 kW"
      features={[
        "Enhanced hydraulic system",
        "Expandable tracks for stability",
        "Kubota diesel reliability",
        "Professional-grade controls",
        "Superior maneuverability"
      ]}
      specs={{
        depth: "2.3m",
        reach: "3.8m",
        width: "1.0m"
      }}
      description={description}
      images={[]}
    />
  );
}



