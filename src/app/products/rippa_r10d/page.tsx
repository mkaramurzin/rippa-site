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
      images={['/products/rippa_r10d/IMG_7771.jpg']}
      detailedSpecs={[
        { specification: "Operating Weight", details: "2,200 lbs (998 kg)" },
        { specification: "Engine", details: "Kubota Z482 Diesel, 3-Cylinder" },
        { specification: "Max Horsepower", details: "11 HP (8.2 kW) @ 3,000 RPM" },
        { specification: "Engine Displacement", details: "0.479 L" },
        { specification: "Cooling System", details: "Water-cooled" },
        { specification: "Fuel Type", details: "Diesel" },
        { specification: "Bucket Capacity", details: "0.014 m³" },
        { specification: "Maximum Digging Depth", details: "72\" (1.83 m)" },
        { specification: "Maximum Digging Reach", details: "127\" (3.23 m)" },
        { specification: "Maximum Digging Height", details: "119\" (3.02 m)" },
        { specification: "Maximum Dumping Height", details: "88\" (2.25 m)" },
        { specification: "Travel Speed", details: "0 - 0.93 mph (1.5 km/h)" },
        { specification: "Gradeability", details: "30%" },
        { specification: "Ground Pressure", details: "25.53 kPa" },
        { specification: "Track Extension Range", details: "36\" - 48\" (912-1212 mm)" },
        { specification: "Transport Length", details: "8.0 ft (2,430 mm)" },
        { specification: "Transport Width", details: "3.0 ft (912 mm)" },
        { specification: "Transport Height", details: "7.2 ft (2,201 mm)" },
        { specification: "Boom Length", details: "58\" (1,477 mm)" },
        { specification: "Arm Length", details: "31\" (800 mm)" },
        { specification: "Bulldozer Blade Width", details: "36\" - 48\" (912-1212 mm)" },
      ]}
    />
  );
}



