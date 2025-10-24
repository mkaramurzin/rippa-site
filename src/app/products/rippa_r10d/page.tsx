import ProductPage from '@/app/components/ProductPage';
import { promises as fs } from 'fs';
import path from 'path';

export default async function RippaR10DPage() {
  // Read the description markdown file
  let description = '';
  try {
    const descriptionPath = path.join(process.cwd(), 'src/app/products/rippa_r10d/description.md');
    description = await fs.readFile(descriptionPath, 'utf8');
  } catch (error) {
    console.log('Description file not yet populated');
  }

  return (
    <ProductPage 
      name="Rippa R10D"
      tonnage="1.0 Ton"
      power="7.2 kW"
      features={[
        "Ultra-compact design for tight spaces",
        "Kubota diesel engine efficiency",
        "Zero tail swing for precision work",
        "Easy trailer transport",
        "Ideal for landscaping and residential projects"
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



