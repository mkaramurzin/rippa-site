import ProductPage from '@/app/components/ProductPage';
import { promises as fs } from 'fs';
import path from 'path';

export default async function RippaR10GPage() {
  // Read the description markdown file
  let description = '';
  try {
    const descriptionPath = path.join(process.cwd(), 'src/app/products/rippa_r10g/description.md');
    description = await fs.readFile(descriptionPath, 'utf8');
  } catch (error) {
    console.log('Description file not yet populated');
  }

  return (
    <ProductPage 
      name="Rippa R10G"
      tonnage="1.0 Ton"
      power="7.5 kW"
      features={[
        "Gas-powered versatility",
        "Indoor and outdoor use",
        "Zero tail swing design",
        "Compact footprint",
        "Perfect for rental fleets"
      ]}
      specs={{
        depth: "1.8m",
        reach: "3.2m",
        width: "0.78m"
      }}
      description={description}
      images={[]}
    />
  );
}

