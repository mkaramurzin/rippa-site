import ProductPage from '@/app/components/ProductPage';
import { promises as fs } from 'fs';
import path from 'path';

export default async function RippaR32ProPage() {
  // Read the description markdown file
  let description = '';
  try {
    const descriptionPath = path.join(process.cwd(), 'src/app/products/rippa_32_pro/description.md');
    description = await fs.readFile(descriptionPath, 'utf8');
  } catch (error) {
    console.log('Description file not yet populated');
  }

  return (
    <ProductPage 
      name="Rippa R32 PRO"
      tonnage="3.2 Ton"
      power="19.5 kW"
      features={[
        "Maximum digging force in the lineup",
        "Heavy-duty cast swing boom",
        "All-terrain capability",
        "Superior ground clearance",
        "Built for the toughest jobs"
      ]}
      specs={{
        depth: "3.2m",
        reach: "5.2m",
        width: "1.7m"
      }}
      description={description}
      images={[]}
    />
  );
}



