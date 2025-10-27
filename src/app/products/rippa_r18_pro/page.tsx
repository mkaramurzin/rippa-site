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
      images={['/products/rippa_r18_pro/IMG_7815.jpg']}
      detailedSpecs={[
        { specification: "Operating Weight", details: "3,990 lbs (1,810 kg)" },
        { specification: "Engine", details: "Kubota D902, 3-Cylinder Diesel" },
        { specification: "Max Horsepower", details: "21 HP (15.2 kW)" },
        { specification: "Cooling System", details: "Water-cooled" },
        { specification: "Fuel Type", details: "Diesel" },
        { specification: "Bucket Capacity", details: "0.045 m³" },
        { specification: "Maximum Digging Depth", details: "106\" (2.7 m)" },
        { specification: "Maximum Digging Reach", details: "181\" (4.6 m)" },
        { specification: "Maximum Digging Height", details: "156\" (3.96 m)" },
        { specification: "Maximum Dumping Height", details: "115\" (2.92 m)" },
        { specification: "Swing Boom Feature", details: "Offset boom for parallel digging" },
        { specification: "Hydraulic Thumb", details: "Integrated hydraulic thumb capability" },
        { specification: "Track Width Adjustment", details: "38.9\" - 51.5\" (990-1310 mm)" },
        { specification: "Travel Speed (Low/High)", details: "0-1.1 mph / 0-2.8 mph (1.8-4.5 km/h)" },
        { specification: "Gradeability", details: "30%" },
        { specification: "Ground Pressure", details: "27.88 kPa" },
        { specification: "Hydraulic System", details: "Load-sensing plunger pump with 9-way valve" },
        { specification: "Transport Length", details: "13.5 ft (4,120 mm)" },
        { specification: "Transport Width (Retracted)", details: "3.2 ft (990 mm)" },
        { specification: "Transport Height", details: "8.2 ft (2,500 mm)" },
        { specification: "Boom Length", details: "81\" (2,050 mm)" },
        { specification: "Arm Length", details: "47\" (1,200 mm)" },
      ]}
    />
  );
}



