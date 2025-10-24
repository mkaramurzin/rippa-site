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
      detailedSpecs={[
        { specification: "Operating Weight", details: "7,055 lbs (3,200 kg)" },
        { specification: "Engine", details: "Kubota V1505, 4-Cylinder Diesel" },
        { specification: "Max Horsepower", details: "25 HP (18.5 kW)" },
        { specification: "Bucket Capacity", details: "0.08 m³" },
        { specification: "Maximum Digging Depth", details: "111.3\" (2,827 mm)" },
        { specification: "Maximum Digging Reach", details: "190.2\" (4,831 mm)" },
        { specification: "Maximum Digging Height", details: "189\" (4,800 mm)" },
        { specification: "Maximum Dumping Height", details: "135\" (3,430 mm)" },
        { specification: "Travel Speed (Low/High)", details: "1.1 - 1.7 mph (1.8 - 2.8 km/h)" },
        { specification: "Swing Speed", details: "9.5 rpm" },
        { specification: "Track Width", details: "19.7\" (500 mm)" },
        { specification: "Ground Pressure", details: "7.5 psi (0.52 bar)" },
        { specification: "Transport Length", details: "17.8 ft (5.4 m)" },
        { specification: "Transport Width", details: "7.2 ft (2.2 m)" },
        { specification: "Transport Height", details: "10.5 ft (3.2 m)" },
        { specification: "Hydraulic Flow", details: "21.1 gpm (80 lpm)" },
        { specification: "Fuel Tank Capacity", details: "13.2 gal (50 L)" },
        { specification: "Cooling System", details: "Liquid-cooled" },
        { specification: "Blade Width", details: "66\" (1,680 mm)" },
        { specification: "Operator Features", details: "Climate-controlled cab with LCD display" },
      ]}
    />
  );
}



