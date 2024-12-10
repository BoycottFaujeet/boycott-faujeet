
import Image from 'next/image';

// Define the Product Type
// interface Product {
//     id: number;
//     name: string;
//     country: string;
//     reason: string;
//     alternatives: string[];
//     image: string;
//     category: (string | undefined)[];
//   }
export const boycottProducts = [
    {
      id: 1,
      name: 'Askari Cement',
      country: 'Pakistan',
      reason: 'Askari Cement is a military-operated business that dominates Pakistan\'s construction and cement industry. Leveraging military influence, it often benefits from unfair market advantages, undermining competition from independent cement manufacturers and monopolizing the sector.',
      alternatives: ['Bestway Cement', 'Maple Leaf Cement'],
      image: '/assets/Askari-Cement.jpeg',
      category: ['All', 'Construction']
    },
    {
      id: 2,
      name: 'Fauji Fertilizer Company Limited',
      country: 'Pakistan',
      reason: 'Fauji Fertilizer Company Limited (FFC) is a military-owned enterprise that dominates Pakistan\'s agriculture sector. Its market monopoly suppresses competition from local fertilizer companies, creating dependency on military-backed products and reducing opportunities for independent farmers.',
      alternatives: ['Fatima Fertilizer Company', 'Local and organic fertilizer manufacturers'],
      image: '/assets/FFC.png',
      category: ['All', 'Agriculture']
    },
    {
        id: 3,
        name: 'Sona Urea',
        country: 'Pakistan',
        reason: 'Sona Urea, produced by Fauji Fertilizer Company Limited, is a military-backed fertilizer brand. Its dominance in the agriculture sector reduces market competition, creating dependency on military enterprises and disadvantaging independent fertilizer manufacturers.',
        alternatives: ['Fatima Fertilizer Urea', 'Independent Farmers'],
        image: '/assets/Sona-Urea-P-1.jpg',
        category: ['All', 'Agriculture']
      },
      {
        id: 4,
        name: 'Sona DAP & FFC DAP',
        country: 'Pakistan',
        reason: 'Military-run enterprise dominating the agriculture sector.',
        alternatives: ['Local Fertilizer Companies', 'Independent Farmers'],
        image: '/assets/FFC-DAP.jpg',
        category: ['All', 'Agriculture']
      },
      {
        id: 5,
        name: 'FFC SOP',
        country: 'Pakistan',
        reason: 'Military-run enterprise dominating the agriculture sector.',
        alternatives: ['Local Fertilizer Companies', 'Independent Farmers'],
        image: '/assets/FFC-SOP-1.jpg',
        category: ['All', 'Agriculture']
      },
      {
        id: 6,
        name: 'FFC MOP',
        country: 'Pakistan',
        reason: 'Military-run enterprise dominating the agriculture sector.',
        alternatives: ['Local Fertilizer Companies', 'Independent Farmers'],
        image: '/assets/MOP-Murate.jpg',
        category: ['All', 'Agriculture']
      },
      {
        id: 7,
        name: 'Sona Boron',
        country: 'Pakistan',
        reason: 'Military-run enterprise dominating the agriculture sector.',
        alternatives: ['Local Fertilizer Companies', 'Independent Farmers'],
        image: '/assets/Sona-Boron-1.jpg',
        category: ['All', 'Agriculture']
      },
      {
        id: 8,
        name: 'Sona Zinc',
        country: 'Pakistan',
        reason: 'Military-run enterprise dominating the agriculture sector.',
        alternatives: ['Local Fertilizer Companies', 'Independent Farmers'],
        image: '/assets/SonaZinc.jpg',
        category: ['All', 'Agriculture']
      },
    {
      id: 9,
      name: 'Nurpur Dairy Products',
      country: 'Pakistan',
      reason: 'Nurpur Dairy Products, under Fauji Foods Limited, is a military-operated brand. It leverages military influence to dominate the dairy market, suppressing competition from local producers and limiting opportunities for independent dairy businesses.',
      alternatives: ['Haleeb Foods', 'Nestlé Pakistan'],
      image: '/assets/nurpur-products.jpeg',
      category: ['All', 'Food and Beverage']
    },
    {
      id: 10,
      name: 'Olper’s Milk',
      country: 'Israel',
      reason: 'Part of a military-owned enterprise impacting local dairy producers.',
      alternatives: ['Independent Dairy Farms', 'Ethical Local Brands'],
      image: '/assets/250ml_tetrapak.jpg',
      category: ['All', 'Food and Beverage']
    },
    {
      id: 11,
      name: 'OPA Products',
      country: 'Pakistan',
      reason: 'Military-affiliated food brand dominating the snacks market.',
      alternatives: ['Local Noodle Brands', 'Homemade Alternatives'],
      image: '/assets/OPA-112.png',
      category: ['All', 'Food and Beverage']
    },
    {
      id: 12,
      name: 'Fauji Foods',
      country: 'Pakistan',
      reason: 'Brands like Fauji Foods dominate the market using subsidies and privileges, sidelining local producers and reducing fair competition.',
      alternatives: ['Local Processed Foods', 'Ethical Food Brands'],
      image: '/assets/ffodds.jpeg',
      category: ['All', 'Food and Beverage']
    },
    {
      id: 13,
      name: 'Askari Bank',
      country: 'Pakistan',
      reason: 'Military-owned banks like Askari Bank benefit from preferential policies and government contracts, creating an unfair advantage over civilian financial institutions and monopolizing the banking sector.',
      alternatives: ['Local Banks', 'Cooperative Banking'],
      image: '/assets/ASKARI.jpg',
      category: ['All', 'Banking']
    },
    {
      id: 14,
      name: 'Shaheen Air International',
      country: 'Pakistan',
      reason: 'Military-operated aviation company impacting civilian airlines.',
      alternatives: ['PIA', 'Private Airlines'],
      image: '/assets/shaheen.png',
      category: ['All', 'Aviation']
    },
    {
      id: 15,
      name: 'Bahria University',
      country: 'Pakistan',
      reason: 'Military-owned educational institution using public resources.',
      alternatives: ['Independent Universities', 'Ethical Institutions'],
      image: '/assets/BU.png',
      category: ['All', 'Education']
    },
    {
      id: 16,
      name: 'Army Public Schools',
      country: 'Pakistan',
      reason: 'Military-operated school system monopolizing education.',
      alternatives: ['Private Schools', 'Independent Educational Systems'],
      image: '/assets/aps.png',
      category: ['All', 'Education']
    },
    {
      id: 17,
      name: 'Hum TV Network',
      country: 'Pakistan',
      reason: 'TV network with military influence affecting unbiased journalism.',
      alternatives: ['Independent Media Channels', 'Ethical News Networks'],
      image: '/assets/hum-network--600.png',
      category: ['All', 'Media']
    },
    {
      id: 18,
      name: 'Bol News',
      country: 'Pakistan',
      reason: 'Military-affiliated TV channel propagating state narratives.',
      alternatives: ['Independent News Channels', 'Ethical Media Outlets'],
      image: '/assets/bol.png',
      category: ['All', 'Media']
    },
    {
      id: 19,
      name: 'Foundation Gas',
      country: 'Pakistan',
      reason: 'Military-controlled gas distribution company affecting independent businesses.',
      alternatives: ['Local Gas Distributors', 'Renewable Energy Providers'],
      image: '/assets/fgas.png',
      category: ['All', 'Energy and Resources']
    },
    {
      id: 20,
      name: 'National Logistics Cell (NLC)',
      country: 'Pakistan',
      reason: 'The National Logistics Cell (NLC) is a military-operated logistics organization in Pakistan. It monopolizes the logistics and transportation sector, leveraging military influence to dominate the market and suppress fair competition.',
      alternatives: ['TCS (Tranzum Courier Services)', 'Leopard Courier'],
      image: '/assets/NLC.gif',
      category: ['All', 'Logistics']
    },
    {
      id: 21,
      name: 'Askari Housing Schemes',
      country: 'Pakistan',
      reason: 'Askari Housing Schemes are military-backed residential projects in Pakistan. These schemes exploit military influence to acquire prime land at subsidized rates, often sidelining civilian housing projects and contributing to urban inequality.',
      alternatives: ['Independent Housing Societies', 'Private Builders'],
      image: '/assets/askh.png',
      category: ['All', 'Real Estate']
    },
    {
      id: 22,
      name: 'Army Welfare Trust',
      country: 'Pakistan',
      reason: 'The Army Welfare Trust (AWT) operates across various industries, including real estate, financial services, and more. It utilizes military influence to dominate these sectors, gaining competitive advantages and sidelining civilian enterprises. Despite its welfare mandate, AWT contributes to economic centralization and monopoly practices.',
      alternatives: ['Private banks (e.g., Meezan Bank, Habib Bank Limited)', 'Local real estate developers'],
      image: '/assets/awtofficial_cover.jpg',
      category: ['All', 'Miscellaneous']
    },
    {
      id: 23,
      name: 'Jacaranda Family Club',
      country: 'Pakistan',
      reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
      alternatives: ['Local Clubs', 'Public Community Spaces'],
      image: 'https://placehold.co/100x100',
      category: ['All', 'Recreational Facility']
    },
    {
      id: 24,
      name: 'Fauji Fertilizer Bin Qasim Limited',
      country: 'Pakistan',
      reason: 'Military-run brand affecting fair competition in the edible oil market.',
      alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
      image: '/assets/FFBLLogo.png',
      category: ['All', 'Agriculture']
    },
    {
        id: 25,
        name: 'Foundation Securities',
        country: 'Pakistan',
        reason: 'Army-controlled financial institutions like Askari Bank invest heavily in military businesses, monopolizing economic growth and undermining fair market competition.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/FS.png',
        category: ['All', 'Stocks & Trading']
    },

    {
        id: 26,
        name: 'Roshan Equity Investment',
        country: 'Pakistan',
        reason: 'Army-controlled financial institutions like Askari Bank invest heavily in military businesses, monopolizing economic growth and undermining fair market competition.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/REI.png',
        category: ['All', 'Stocks & Trading']
    },
    {
        id: 27,
        name: 'Foundation Edge Online Stock Trading',
        country: 'Pakistan',
        reason: 'Army-controlled financial institutions like Askari Bank invest heavily in military businesses, monopolizing economic growth and undermining fair market competition.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/FEtrading.jpg',
        category: ['All', 'Stocks & Trading']
    },
    {
        id: 28,
        name: 'FonGrow',
        country: 'Pakistan',
        reason: 'Military-run brand affecting fair competition in the edible oil market.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/FonGrow.png',
        category: ['All', 'Agriculture']
    },
    {
        id: 29,
        name: 'Dostea',
        country: 'Pakistan',
        reason: 'Military-run brand affecting fair competition in the edible oil market.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/Dostea-products.jpeg',
        category: ['All', 'Food and Beverage']
    },
    {
        id: 30,
        name: 'Tara urea',
        country: 'Pakistan',
        reason: 'Military-run brand affecting fair competition in the edible oil market.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/TaraUrea-691x1024.jpg',
        category: ['All', 'Agriculture']
    },
    {
        id: 31,
        name: 'Green TV Entertainment',
        country: 'Pakistan',
        reason: 'Military-run brand affecting fair competition in the edible oil market.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/green.jpg',
        category: ['All', 'Media']
    },
    {
        id: 32,
        name: 'AWT Investments',
        country: 'Pakistan',
        reason: 'Army-controlled financial institutions like Askari Bank invest heavily in military businesses, monopolizing economic growth and undermining fair market competition.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/awt.jpg',
        category: ['All', 'Stocks & Trading']
    },
    {
        id: 33,
        name: 'Pak Emirates Military Hospital (PEMH)',
        country: 'Pakistan',
        reason: 'Pak Emirates Military Hospital (PEMH), operated under the military’s control, diverts public healthcare funding toward military-run facilities. These institutions prioritize military personnel, often sidelining civilian healthcare needs and creating a disparity in healthcare services.',
        alternatives: ['Shaukat Khanum', 'Shifa International Hospital'],
        image: '/assets/pake.jpg',
        category: ['All', 'Healthcare']
    },
    {
        id: 34,
        name: 'Raya Golf and Country Club',
        country: 'Pakistan',
        reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/raya.jpg',
        category: ['All', 'Recreational Facility']
    },
    {
        id: 35,
        name: 'Garrison Golf and Country Club',
        country: 'Pakistan',
        reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/gcc.jpg',
        category: ['All', 'Recreational Facility']
    },
    {
        id: 36,
        name: 'NDU Officers Mess',
        country: 'Pakistan',
        reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/NDU.jpg',
        category: ['All', 'Recreational Facility']
    },
    {
        id: 37,
        name: 'Papa John',
        country: 'Pakistan',
        reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
        alternatives: ['14th Street Pizza', 'Cheezious Pizza'],
        image: '/assets/papaJ.png',
        category: ['All', 'Food and Beverage']
    },
    {
        id: 38,
        name: 'Pak Military Academy (PMA) Mess (Kakul)',
        country: 'Pakistan',
        reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/PMA.jpg',
        category: ['All', 'Recreational Facility']
    },
    {
        id: 39,
        name: 'Logistics Mess',
        country: 'Pakistan',
        reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: 'https://placehold.co/100x100',
        category: ['All', 'Recreational Facility']
    },
    {
        id: 40,
        name: 'Blue Lagoon Mess',
        country: 'Pakistan',
        reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/bl_logo1.png',
        category: ['All', 'Recreational Facility']
    },
    {
        id: 41,
        name: 'Clifton Cantonment Club',
        country: 'Pakistan',
        reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: 'https://placehold.co/100x100',
        category: ['All', 'Recreational Facility']
    },
    {
        id: 42,
        name: 'Quetta Club',
        country: 'Pakistan',
        reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: 'https://placehold.co/100x100',
        category: ['All', 'Recreational Facility']
    },
    {
        id: 43,
        name: 'Combined Military Hospital (CMH) Messes',
        country: 'Pakistan',
        reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/cmh.png',
        category: ['All', 'Recreational Facility']
    },
    {
        id: 44,
        name: 'FFBL Power Company Limited',
        country: 'Pakistan',
        reason: 'The revenue from these messes and clubs funds non-defensive military activities and monopolizes recreational spaces, limiting public access.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/fpc.png',
        category: ['All', 'Energy and Resources']
    }, 
    {
        id: 45,
        name: 'Combined Military Hospital (CMH)',
        country: 'Pakistan',
        reason: 'Combined Military Hospital (CMH) is a military-operated healthcare network across Pakistan. These hospitals prioritize military personnel and their families, often overshadowing civilian healthcare needs and consuming a significant portion of public resources allocated for health services. This creates an inequitable healthcare environment and limits access to essential medical facilities for the general population.',
        alternatives: ['Shaukat Khanum', 'Shifa International Hospital', 'Aga Khan University Hospital'],
        image: '/assets/cmh.png',
        category: ['All', 'Healthcare']
    },
    {
        id: 46,
        name: 'FAUJI MEAT LTD',
        country: 'Pakistan',
        reason: 'Fauji Meat Limited, owned by the military, monopolizes the halal meat export industry, leveraging subsidies and privileges to outcompete local independent producers and farmers, undermining fair market practices.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/FMLHorizontalReverse.png',
        category: ['All', 'Miscellaneous', 'Food and Beverage']
    },
    {
        id: 47,
        name: 'DHA Housing Authority',
        country: 'Pakistan',
        reason: 'DHA Housing Authority uses military influence to acquire prime land at subsidized rates, monopolizing the real estate sector, inflating property prices, and prioritizing military personnel over the general public.',
        alternatives: ['Local Edible Oil Brands', 'Independent Producers'],
        image: '/assets/DHA.jpg',
        category: ['All', 'Real Estate']
    }, 
    {
        id: 48,
        name: 'Fresh N Freeze',
        country: 'Pakistan',
        reason: 'Fauji Fresh n Freeze, owned by the Pakistan Army, leverages subsidies and military influence to dominate the frozen food market, sidelining local farmers and independent producers, and discouraging fair competition.',
        alternatives: ['Seasons Foods', 'Shan Foods'],
        image: '/assets/fnf.png',
        category: ['All', 'Miscellaneous', 'Food and Beverage']
    },
    {
        id: 49,
        name: 'Canteen Stores Department (CSD)',
        country: 'Pakistan',
        reason: 'The Canteen Stores Department (CSD), owned by the Pakistan Army, enjoys tax exemptions and government subsidies, creating an unfair advantage over civilian retail businesses, while its profits fund military ventures rather than benefiting the general public.',
        alternatives: ['Imtiaz Supermarket', 'Metro Cash & Carry'],
        image: '/assets/CSD.png',
        category: ['All', , 'Food and Beverage']
    },
    {
        id: 50,
        name: 'Special Communication Organization (SCO)',
        country: 'Pakistan',
        reason: 'The Special Communications Organization (SCO), operated by the Pakistan Army, monopolizes telecommunications in regions like Azad Jammu & Kashmir (AJK) and Gilgit-Baltistan (GB), stifling competition and limiting better service options for the local population.',
        alternatives: ['StormFiber', 'PTCL'],
        image: '/assets/SCO.png',
        category: ['All', 'Miscellaneous', 'Media']
    },
    {
        id: 51,
        name: 'MedAsk Pharmacies',
        country: 'Pakistan',
        reason: 'MedAsk Pharmacies, operated under the military\'s business umbrella, leverages state-backed support to dominate the pharmaceutical retail sector, creating an unfair competitive landscape for independent pharmacies and small-scale businesses.',
        alternatives: ['D-Watson Pharmacy', 'Al-Fatah Pharmacy'],
        image: '/assets/medask.png',
        category: ['All', 'Healthcare']
    },
    {
        id: 52,
        name: 'Askari Life Assurance',
        country: 'Pakistan',
        reason: 'Askari Life Assurance, owned by the Pakistan Army, benefits from military influence and government contracts, sidelining private insurance companies and monopolizing the life assurance industry while channeling profits into military-controlled ventures.',
        alternatives: ['Jubilee Life Insurance', 'EFU Life Assurance'],
        image: '/assets/ALI.JPG',
        category: ['All', 'Miscellaneous', 'Real Estate']
    },
    {
        id: 53,
        name: 'Fauji Foundation',
        country: 'Pakistan',
        reason: 'Fauji Foundation operates as a military-controlled conglomerate, dominating multiple industries such as healthcare, education, construction, and food production. It utilizes public funds and military influence to monopolize markets, leaving minimal opportunities for fair competition and diverting profits to sustain military enterprises.',
        alternatives: ['The Citizens Foundation (TCF)', 'Indus Hospital'],
        image: '/assets/FF.png',
        category: ['All', 'Miscellaneous']
    },
    {
        id: 54,
        name: 'Attock Petroleum Limited (Attock Pump)',
        country: 'Pakistan',
        reason: 'Attock Petroleum, part of the Army-controlled Attock Group, dominates Pakistan’s fuel sector. Leveraging military backing, it sidelines independent fuel providers, creating an imbalanced market and driving a significant portion of profits back into military ventures.',
        alternatives: ['Shell Pakistan', 'Total Parco'],
        image: '/assets/attock-logo.png',
        category: ['All', 'Energy and Resources']
    },
    {
        id: 55,
        name: 'Frontier Works Organization (FWO)',
        country: 'Pakistan',
        reason: 'The Frontier Works Organization (FWO), a military-run construction and infrastructure company, monopolizes large-scale projects such as highways, dams, and urban development, sidelining civilian contractors and benefiting from preferential government contracts.',
        alternatives: ['National Engineering Services Pakistan (NESPAK)', 'ZKB Engineers & Constructors'],
        image: '/assets/FWO.jpg',
        category: ['All', 'Miscellaneous', 'Real Estate']
    },
    {
        id: 56,
        name: 'Askari Fuels',
        country: 'Pakistan',
        reason: 'Askari Fuels, operated under the military-controlled Askari Group, monopolizes the petroleum and fuel retail sector, leveraging subsidies, government contracts, and tax benefits to outcompete civilian fuel companies, while its profits are funneled into military ventures.',
        alternatives: ['Seasons Foods', 'Shan Foods'],
        image: '/assets/Askari-Small-853x1024.jpg',
        category: ['All', 'Energy and Resources']
    },
    {
        id: 57,
        name: 'National University of Sciences & Technology (NUST)',
        country: 'Pakistan',
        reason: 'NUST, controlled by the Pakistan Army, benefits from heavy government funding and preferential policies, monopolizing access to quality education resources while prioritizing military interests over civilian academic development.',
        alternatives: ['LUMS', 'COMSATS Institute of Information Technology'],
        image: '/assets/nust.png',
        category: ['All', 'Education']
    },
    {
        id: 58,
        name: 'National University of Modern Languages (NUML)',
        country: 'Pakistan',
        reason: 'NUML, a military-administered university, receives significant state support, overshadowing independent civilian institutions and limiting fair access to resources for non-military students.',
        alternatives: ['LUMS', 'COMSATS Institute of Information Technology'],
        image: '/assets/NUML.png',
        category: ['All', 'Education']
    },
    {
        id: 59,
        name: 'National Defence University (NDU)',
        country: 'Pakistan',
        reason: 'NDU, operated by the military, focuses on training military and bureaucratic elites, diverting public funds into an institution that primarily serves the strategic goals of the armed forces, rather than the general public.',
        alternatives: ['LUMS', 'COMSATS Institute of Information Technology'],
        image: '/assets/NDU.jpg',
        category: ['All', 'Education']
    },
    {
        id: 60,
        name: 'Askari Guards',
        country: 'Pakistan',
        reason: 'Askari Guards, a security service owned by the Pakistan Army, dominates the private security sector by leveraging military influence, preferential government contracts, and subsidized operations, sidelining civilian security firms and creating an unfair market environment.',
        alternatives: ['Phoenix Security Services', 'GHAZI Security Guards (Pvt) Ltd'],
        image: '/assets/AG.png',
        category: ['All', 'Miscellaneous']
    }
    
  ];

  
// React Component to Display Boycott Products (Default Export)
export default function BoycottList() {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {boycottProducts.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {/* Product Image */}
            <div className="relative w-full h-40">
              <Image
                src={product.image}
                alt={product.name}
                width={300} // Replace with actual dimensions
                height={200} // Replace with actual dimensions
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p>{product.reason}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  