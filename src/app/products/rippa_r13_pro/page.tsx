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
      detailedSpecs={[
        { specification: "Operating Weight", details: "2,580 lbs (1,170 kg)" },
        { specification: "Engine", details: "Kubota D722, 3-Cylinder Diesel" },
        { specification: "Max Horsepower", details: "14 HP (10.5 kW)" },
        { specification: "Cooling System", details: "Water-cooled" },
        { specification: "Fuel Type", details: "Diesel" },
        { specification: "Maximum Digging Depth", details: "90\" (2.29 m)" },
        { specification: "Maximum Digging Reach", details: "150\" (3.81 m)" },
        { specification: "Maximum Digging Height", details: "128\" (3.25 m)" },
        { specification: "Maximum Dumping Height", details: "95\" (2.41 m)" },
        { specification: "Swing Boom Feature", details: "Offset boom for parallel digging" },
        { specification: "Track Width Adjustment", details: "29.5\" - 39\" (750-990 mm)" },
        { specification: "Travel Speed", details: "Dual-speed: 0-1.7 mph (2.8 km/h)" },
        { specification: "Gradeability", details: "30%" },
        { specification: "Hydraulic System", details: "Gear pump with 4-way control" },
        { specification: "Bucket Capacity", details: "0.025 m³" },
        { specification: "Transport Length", details: "11.2 ft (3,420 mm)" },
        { specification: "Transport Width (Retracted)", details: "2.5 ft (750 mm)" },
        { specification: "Transport Height", details: "7.9 ft (2,400 mm)" },
        { specification: "Boom Length", details: "67\" (1,700 mm)" },
        { specification: "Arm Length", details: "39\" (1,000 mm)" },
      ]}
    />
  );
}



