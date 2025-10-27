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
      images={['/products/rippa_r22_pro/IMG_7836.jpg']}
      detailedSpecs={[
        { specification: "Operating Weight", details: "5,230 lbs (2,370 kg)" },
        { specification: "Engine", details: "Kubota D1105, 3-Cylinder Diesel" },
        { specification: "Max Horsepower", details: "24.75 HP (18 kW)" },
        { specification: "Cooling System", details: "Water-cooled" },
        { specification: "Fuel Type", details: "Diesel" },
        { specification: "Bucket Capacity", details: "0.06 m³" },
        { specification: "Maximum Digging Depth", details: "110\" (2.8 m)" },
        { specification: "Maximum Digging Reach", details: "189\" (4.8 m)" },
        { specification: "Maximum Digging Height", details: "163\" (4.14 m)" },
        { specification: "Maximum Dumping Height", details: "120\" (3.05 m)" },
        { specification: "Zero-Tail Swing", details: "Yes - Work along walls safely" },
        { specification: "Swing Boom Feature", details: "Offset boom for parallel digging" },
        { specification: "Hydraulic Quick Coupler", details: "Fast attachment changes from cab" },
        { specification: "Track Width Adjustment", details: "51.2\" - 59.1\" (1300-1500 mm)" },
        { specification: "Travel Speed (Low/High)", details: "0.93 mph / 1.74 mph (1.5-2.8 km/h)" },
        { specification: "Gradeability", details: "30%" },
        { specification: "Ground Pressure", details: "29.4 kPa" },
        { specification: "Hydraulic System", details: "Load-sensing variable piston pump with 9-way valve" },
        { specification: "Swing Speed", details: "10 rpm" },
        { specification: "Transport Length", details: "15.1 ft (4,600 mm)" },
        { specification: "Transport Width (Retracted)", details: "4.3 ft (1,300 mm)" },
        { specification: "Transport Height", details: "8.5 ft (2,600 mm)" },
        { specification: "Cab Option", details: "Fully enclosed with climate control available" },
      ]}
    />
  );
}
