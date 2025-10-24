import ProductPage from '@/app/components/ProductPage';
import { promises as fs } from 'fs';
import path from 'path';

export default async function RippaR15Page() {
  // Read the description markdown file
  let description = '';
  try {
    const descriptionPath = path.join(process.cwd(), 'src/app/products/rippa_15/description.md');
    description = await fs.readFile(descriptionPath, 'utf8');
  } catch (error) {
    console.log('Description file not yet populated');
  }

  return (
    <ProductPage 
      name="Rippa R15"
      tonnage="1.5 Ton"
      power="12.8 kW"
      features={[
        "Versatile mid-range workhorse",
        "Optimized fuel economy",
        "Extended reach capability",
        "Comfortable operator station",
        "Perfect balance of power and portability"
      ]}
      specs={{
        depth: "2.5m",
        reach: "4.2m",
        width: "1.2m"
      }}
      description={description}
      images={[]}
      detailedSpecs={[
        { specification: "Operating Weight", details: "3,300 lbs (1.5 tonnes)" },
        { specification: "Engine", details: "Kubota D722 Diesel" },
        { specification: "Max Horsepower", details: "14 HP" },
        { specification: "Track Type", details: "Telescopic Rubber Tracks" },
        { specification: "Track Width Adjustment", details: "35\" – 46.9\"" },
        { specification: "Travel Speed (Low/High)", details: "1.5 mph / 2.8 mph" },
        { specification: "Maximum Digging Force", details: "10.4 kN" },
        { specification: "Maximum Digging Depth", details: "71\"" },
        { specification: "Maximum Digging Height", details: "120\"" },
        { specification: "Maximum Dumping Height", details: "90\"" },
        { specification: "Blade Width", details: "35\" – 47\"" },
        { specification: "Boom Length", details: "58\"" },
        { specification: "Arm Length", details: "31\"" },
        { specification: "Main Pump Flow", details: "6.6 gal/min" },
        { specification: "Cooling System", details: "Liquid-cooled" },
        { specification: "Fuel Tank Capacity", details: "3.5 gal" },
        { specification: "Counterweight Ground Clearance", details: "17\"" },
      ]}
    />
  );
}



