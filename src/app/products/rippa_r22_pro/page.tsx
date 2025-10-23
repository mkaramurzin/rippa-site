import ProductPage from '@/app/components/ProductPage';
import { promises as fs } from 'fs';
import path from 'path';

export default async function RippaR22ProPage() {
  // Read the description markdown file
  let description = '';
  try {
    const descriptionPath = path.join(process.cwd(), 'src/app/products/rippa_r22_pro/description.md');
    description = await fs.readFile(descriptionPath, 'utf8');
  } catch (error) {
    console.log('Description file not yet populated');
  }

  return (
    <ProductPage 
      name="Rippa R22 PRO"
      tonnage="2.2 Ton"
      power="18.0 kW"
      features={[
        "Most popular model in the lineup",
        "Maximum versatility for any job",
        "Heavy-duty construction",
        "Expandable tracks for stability",
        "Industry-leading hydraulics"
      ]}
      specs={{
        depth: "2.8m",
        reach: "4.8m",
        width: "1.5m"
      }}
      description={description}
      images={[]}
    />
  );
}
