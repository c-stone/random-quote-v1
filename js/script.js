document.getElementById('loadQuote').addEventListener("click", printQuote, false); //Add event listened to #loadQuote button, calls printQuote
document.getElementById('loadQuote').addEventListener("click", repeatPrintQuote, false); // once the user clicks, start swapping the quote every 30s

var quoteArray = [
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/20/09",
    "Company": "OZ Technology, Inc., Rathdrum, ID 83858",
    "Quote": "Decedent was working inside a mobile home, mixing propane and butane to make a substitute refrigerant. A fire occurred. The cause of death was determined to be carbon monoxide asphyxiation."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/21/09",
    "Company": "Dennis Powell Loggin, St. Maries, ID 83861",
    "Quote": "Decedent was driving a log truck uphill to pick up a load of logs. The truck left the road and went 200 feet down a hill. Decedent was thrown for the truck."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/23/09",
    "Company": "Hines Construction Company, Sparta, GA 31087",
    "Quote": "Employees were installing roof trusses 20 feet from ground level, when 50 trusses fell in a domino effect crushing the employees. One employee fatality and to employees were hospitalized."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/24/09",
    "Company": "U E Power Train dba Bucks Engines, Amarillo, TX 79109",
    "Quote": "Decedent was observed standing behind the parts counter, conscious but bleeding from the head."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/25/09",
    "Company": "Innovative Masonry, LLC, Hoboken, NJ 07030",
    "Quote": "Decedent fell 4-ft, 8-inches off a platform, striking his head."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/25/09",
    "Company": "St. Peter Catholic Church, Deland, FL 32720",
    "Quote": "Decedent was cleaning the grout on the walls with a pressure washer, containing water, and was overexposed to carbon monoxide."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/25/09",
    "Company": "Tyson Foods - River Valley Animal Foods, Scranton, AR 72863",
    "Quote": "Decedent was dumping a load of offal from a tractor trailer. He was in the process of dumping offal into a bin when the tailgate malfunctioned. Decedent was freeing the tailgate, it released, and the load swept the decedent into the offal bin. Decedent drowned in the bin."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/26/09",
    "Company": "Artistic Painting Company, Grand Praire, TX 75050",
    "Quote": "Decedent was using a scaffold above 10 to 15 feet while painting. Instead of extending the scaffold, he used a step ladder on the scaffold, and feel off the scaffold."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/26/09",
    "Company": "UPS, Louisville, KY 40202",
    "Quote": "The decedent returned from his break to his work area and was sitting when he fell over. He was transported to a local hospital where he was pronounced dead. It was determined the decedent died from natural causes."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/27/09",
    "Company": "Colorado Bell Hotel & Casino, Laughlin, NV 89028",
    "Quote": "The decedent was not feeling well and left work early. While he was sitting waiting for the bus he collapsed and was non-responsive from an apparent heart attack. He was transported to the hospital where he was pronounced dead."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/28/09",
    "Company": "B & C Auto Inc., Davenport, IA 52806",
    "Quote": "The decedent was removing a part from an elevated truck. The truck fell crushing the decedent."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/28/09",
    "Company": "Brinks, Inc., Evansville, IN 47711",
    "Quote": "Decedent was assisting in unloading material when he fell from the back of the truck, striking his head."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/28/09",
    "Company": "Jacoby Feed & Seed, Melvin, TX 76858",
    "Quote": "Employees were installing a tilt-wall into a trench. Decedent was inside the trench when the earth collapsed."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/28/09",
    "Company": "Nelson Brothers Construction Co., Eagle Mountain, UT 84005",
    "Quote": "Decedent was operating a roller compactor on a grade. The compactor tipped over and fell on the decedent resulting in the decedent's death."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/28/09",
    "Company": "Zachary Construction Corp., Mansfield, LA 71052",
    "Quote": "Decedent was walking across a tank and fell through a hatch into a tank of boiling water. He either drowned or died of thermal burns."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/29/09",
    "Company": "Macy's West, Las Vegas, NV 89107",
    "Quote": "Decedent collapsed in the Macy's West store. CPR was performed. The decedent passed away at the hospital."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/30/09",
    "Company": "Hoffman Sawmill, Jasper, IN 46546",
    "Quote": "Decedent was unloading logs from truck in sawmill yard. While releasing straps one of the logs rolled onto the employee."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "10/02/09",
    "date": "09/30/09",
    "Company": "Randy's Pro Landscaping Service, LLC, Milburn, NJ 07041",
    "Quote": "Decedent was trimming a tree and fell 60 feet to the ground."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/22/10",
    "Company": "Beth Abraham Family of Health Services, Inc., Bronx, NY 10467-8108",
    "Quote": "Worker died from an explosion."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/22/10",
    "Company": "Comcast of Georgia, Atlanta, GA 30331",
    "Quote": "Worker was doing a cable connection, working on a ladder 20 feet up, became unresponsive and fell to the asphalt."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/22/10",
    "Company": "Garden City Tire, Garden City, KS 67846",
    "Quote": "Worker was repairing tires on a front-end loader. Worker crawled under the loader with a bead bar to attempt to break the tire bead from the wheel rim. The equipment shifted and came off the jacks, crushing the worker under the rear of the loader."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/22/10",
    "Company": "Gleneagles Country Club, Plano, TX 75093",
    "Quote": "Worker was riding in a golf cart after a housekeeping assignment, collapsed and fell out of a moving golf cart, striking her head on the concrete cart trail."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/23/10",
    "Company": "Joe Cook Logging, Lewiston, ID 83501",
    "Quote": "Worker on the ground was struck by the boom of a tree delimber."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/23/10",
    "Company": "Rocke Overhead Doors Inc., Sullivan, IL 61951",
    "Quote": "Worker was repairing an overhead door motor. He had removed the cover of the motor exposing the electrical components to replace a component. Worker leaned over the motor after replacing the component to make an adjustment to the chain, and began to shak"
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/24/10",
    "Company": "AGCO Incorporated, Russell, KS 67665",
    "Quote": "Two workers were off-loading trucks on the exterior of the grain elevator and two elevator grain tubes collapsed. Both workers were buried under structure debris."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/24/10",
    "Company": "Arbor Tech, Doyline, LA 71023",
    "Quote": "Worker was cutting limbs from a tree and fell 50 feet."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/24/10",
    "Company": "Champion Communication, Philadelphia, PA 19107",
    "Quote": "Worker was working on a TV dish from a roof, lost his balance, and fell 9 stories to the ground."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/24/10",
    "Company": "Maxwell Heating & Cooling, Inc., Carrollton, GA 30117",
    "Quote": "Worker was installing an air conditioning unit. He was using a torch to sweat a pipe joint and was electrocuted."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/25/10",
    "Company": "Preferred Transit aka Brinker Enterprises, Brooklyn, NY 11230",
    "Quote": "Worker was struck by a load of wall panels that fell off his truck."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/25/10",
    "Company": "RG Installation, Longmont, CO 80504",
    "Quote": "Worker was on a scaffold and the scaffold tipped over. Worker fell off and hit his head."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "06/26/10",
    "date": "06/26/10",
    "Company": "Berlin Industries, Inc., Carol Stream, IL 60188-9401",
    "Quote": "Worker was found crushed in the paper baler."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "04/05/10",
    "Company": "Pipe Distributors, Ltd., Amelia, LA 70340",
    "Quote": "Worker was loading pipe onto a truck and was struck by pipe."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/10/10",
    "Company": "Francisco Campos dba Paco Painting, Clayton, NC 27520",
    "Quote": "Four workers were injured by electrical shock. One later died."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/13/10",
    "Company": "True Drilling LLC, Bonanza, UT 84008",
    "Quote": "Worker was fatally struck in the head by the kelly bushing, which broke free during rig-up procedures."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/16/10",
    "Company": "Sabre Steel LLC, West Valley City, UT 84115",
    "Quote": "Worker putting decking on roof joists was blown off roof by wind. He fell 17 feet and hit his head on a rock."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/22/10",
    "Company": "Tim Nicely dba Tim Nicely Construction, Bean Station, TN 37708",
    "Quote": "Worker fell 14 feet to the ground from the roof decking on a 10/12 pitch residential roof."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/23/10",
    "Company": "EPNM Inc., Electrical Products Co., Albuquerque, NM 87102",
    "Quote": "Worker died after falling to the ground when hydraulic ram elevating a telescoping ladder truck broke in half."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/24/10",
    "Company": "H. Schrier & Co., Inc., Brooklyn, NY 11234",
    "Quote": "Worker fell out of a man lift."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/24/10",
    "Company": "Smith Roofing Company, Brownwood, TX 76801",
    "Quote": "Worker was in the process of finishing a roofing contract and fell from the roof."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/25/10",
    "Company": "Thunder Valley Motocross, Morrison, CO 80401",
    "Quote": "Worker was setting up a camera and fell 20 feet."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/25/10",
    "Company": "Wilcin Enterprises, Inc., Fort Myers, FL 33907",
    "Quote": "Worker was cleaning out gutters and fell from a ladder."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/26/10",
    "Company": "Reel Brothers Timbering, Lumberport, WV 26386",
    "Quote": "Worker was felling a tree and was struck by another tree."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/27/10",
    "Company": "Texas Pack, Inc., Port Isabel, TX 78578",
    "Quote": "Worker was performing maintenance on a forklift truck battery charger and contacted live electrical parts of the battery charger."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/28/10",
    "Company": "ABECO, Rochester, MN 55904",
    "Quote": "Worker was crushed by a roller that tipped over."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/28/10",
    "Company": "Royal West Amusements Inc., West Valley City, UT 84120",
    "Quote": "Worker died when his head was impaled by metal from the drive section of a Ferris wheel. The employee slipped after acknowledging he was clear and the wheel began to turn, trapping his head."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/28/10",
    "Company": "Trees Are Us, Mishawaka, IN 46545",
    "Quote": "Tree trimmer struck in the head while walking under a tree on which employees were working; tree had been damaged by thunderstorms."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/29/10",
    "Company": "CBS, Inc., Weskan, KS 67662",
    "Quote": "Worker was working on the elevator bin deck area and fell into grain bin."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/29/10",
    "Company": "Comcast, Broomall, PA 19008",
    "Quote": "Worker was electrocuted after contacting a sagging 4000-volt power line."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/29/10",
    "Company": "Farm, San Joaquin County, CA 95321",
    "Quote": "Worker got off tractor, which then began to move. Then he tried to get back on to stop tractor, slipped, and was run over by tractor and trailer."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/29/10",
    "Company": "Las Vegas Paving Corporation, North Las Vegas, NV 89032",
    "Quote": "Worker was run over by a reversing loader which was moving dirt around a \"pork chop\" near an interstate entrance."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/29/10",
    "Company": "Securitas Security Services USA, St. Joseph, MO 64501-1738",
    "Quote": "Worker was waving a truck to cross a railroad track and struck by the train rolling the truck over, pinning the worker under the truck."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/30/10",
    "Company": "Atlas Roofing, Harrison, TN 37341",
    "Quote": "Worker apparently fell while stepping out of a cherry picker and onto a scaffold."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "06/30/10",
    "Company": "Clearwater Paper Corporation, Lewiston, ID 83501",
    "Quote": "Worker was removing a jam from the back of the machine and fell onto the conveyor in the paper pulper. Worker drowned or was scalded."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "07/01/10",
    "Company": "LM Glasfiber Inc., Grand Forks, ND 58206",
    "Quote": "Worker was working from a scissor lift removing a glass wagon and was struck by/crushed by an overhead gantry crane."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "07/01/10",
    "Company": "Priority Plastics Inc., North Las Vegas, NV 89030",
    "Quote": "Temporary worker sustained a fatal crushing head injury when his head was caught between two moving parts while removing purge from a blow molding and conditioning machine."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "07/01/10",
    "Company": "Utility Lines Construction Services, Augusta, GA 30907",
    "Quote": "Worker was working on a transformer came in contact with an energized 37 kV cable inside a transformer."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/03/10",
    "date": "07/03/10",
    "Company": "AT&T, Angleton, TX 71515",
    "Quote": "Worker was found unresponsive."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "06/28/10",
    "Company": "Diamond Links, Inc., dba Diamond Links Golf Club, Catlettsburg, KY 41129",
    "Quote": "Worker was operating a Bobcat machine while installing a culvert drain pipe. The worker was thrown from the seat when the machine slid off an embankment, and was killed when the machine rolled over him."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/01/10",
    "Company": "Larson Construction Company Inc., Independence, IA 50344",
    "Quote": "Worker was assisting with the setting of tilt-up precast wall panels and was struck in the head by a falling pipe brace."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/02/10",
    "Company": "Grays Tree Service, Alabaster, AL 35007",
    "Quote": "Worker was on top of a tree and was repelling down to make his cut, and hit the ground."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/02/10",
    "Company": "Keolohi Fishing Inc., Lahaina, HI 96761",
    "Quote": "Worker was diving for black coral and drowned."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/03/10",
    "Company": "Western Kentucky Correctional Complex, Fredonia, KY 42411",
    "Quote": "Worker was going to her car after work when she was struck by the vehicle of another worker pulling their truck out to leave."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/06/10",
    "Company": "Aerospace Manufacturing CT Systems LLC., Fredonia, KS 66736",
    "Quote": "Worker had installed a new tool and was making a dry run. The tool flew out of the machine and struck the worker on the head."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/06/10",
    "Company": "Kolat Construction, Rices Landing, PA 15357",
    "Quote": "Worker was working construction installing a swimming pool. Worker died from a heat stroke."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/07/10",
    "Company": "B & W Welding, Fremont, OH 43420",
    "Quote": "Three workers were repairing two vertical support columns. During this activity the roof collapsed. One worker fatality and two workers were hospitalized."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/07/10",
    "Company": "Hillside Manor Rehab and Extended Care Center LLC., Jamaica Estates, NY 11432",
    "Quote": "Worker was struck by flying metal debris."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/07/10",
    "Company": "Latham Hi Tech Seeds, Alexander, IA 50420",
    "Quote": "Worker fell from ladder while installing trim on the side of a warehouse (metal building)."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/07/10",
    "Company": "Marden Industries, Mulberry, FL 33860",
    "Quote": "Worker was renovating a piece of farm equipment. A piece of the equipment fell and crushed him."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/07/10",
    "Company": "Marriott Austin, Austin, TX 78744",
    "Quote": "Worker doing laundry work and became dizzy."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/08/10",
    "Company": "ABC Construction, Aurora, NE 68818",
    "Quote": "Worker was attaching sheet metal screws on a pre-fabricated metal building and fell from a scissor lift or a forklift platform."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/08/10",
    "Company": "ACI Services, Englewood, CO 80110",
    "Quote": "Worker was working on an oil and gas tank; the tank exploded."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/08/10",
    "Company": "Boyer's Nursery, Biglerville, PA 17303",
    "Quote": "Work collapsed in the field from heat exhaustion."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/08/10",
    "Company": "CW Greenwood, Tallapoosa, GA 30176",
    "Quote": "Worker was performing electrical wire replacement, placed electrical wire in mouth, then grabbed a metal scaffold. Worker was electrocuted."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/08/10",
    "Company": "Environmental Safety & Health Consulting Services, Freeport, TX 77542",
    "Quote": "Worker was inside a 212-foot diameter tank cleaning out sludge when the air line to the respirator popped off; worker collapsed."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/09/10",
    "Company": "Buenavista Construction Inc., Disney's ESPN Wild World Sport, 700 S. Victory Way, Kissimmee, FL 34747",
    "Quote": "Worker was working in a temporary transformer and was electrocuted."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/09/10",
    "Company": "Cedar Homes Inc., dba All Affordable Tree Service, Flanders, NJ 07836",
    "Quote": "Worker was struck on the head by a falling tree."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/09/10",
    "Company": "Halliburton Energy Services Inc., San Augustine, TX 75972",
    "Quote": "Worker was found unresponsive in the lab."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/09/10",
    "Company": "Nabors Well Services, Lambert, MT 59243",
    "Quote": "Worker was at the top of a four-tank group to gather readings and was found collapsed in the walkway."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/10/10",
    "date": "07/09/10",
    "Company": "Zartman Construction Inc., Northumberland, PA 17857",
    "Quote": "Worker was working in a roof truss for a winery. The roof truss collapsed and the worker fell."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "06/07/10",
    "Company": "Professional Sales Services Inc., Wichita, KS 67213",
    "Quote": "Worker was disassembling/disconnecting a vertical turning lathe and was struck by the 1200-pound head ram of the lathe."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "06/26/10",
    "Company": "Ironbound Enterprises LLP., dba Supreme Car Wash, Newark, NJ 07105",
    "Quote": "Two workers were struck by a customer's car. One worker fatality and one worker was hospitalized."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/01/10",
    "Company": "J. Pacheco Landscaping, Westerly, RI 02891",
    "Quote": "Worker was performing lawn care services and was struck by an oncoming car."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/06/10",
    "Company": "Sacramento Overnight Inc., Sacramento, CA 95811",
    "Quote": "Truck driver sustained fatal injuries as a result of being involved in a three-vehicle accident with company truck."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/07/10",
    "Company": "Canoyer Country Greenhouse, dba Canoyer Garden Center, Papillion, NE 68133",
    "Quote": "Worker was working on the roof of a greenhouse repairing a hole. Worker slipped and began to slide six feet down the roof until falling through the hole, landing on feet, then falling back, striking the ground with head."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/07/10",
    "Company": "City of Chicago Police Department, Chicago, IL 60636",
    "Quote": "Police officer was finishing his shift when an individual walked up to him in his personal vehicle. The individual reached for the officer's service revolver and fired three shots at him, striking him in the head."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/07/10",
    "Company": "Premier Bakers, Inc. dba Fresh Start Bakeries North America, 141 East Palm Lane, Phoenix, AZ 85004",
    "Quote": "Worker discovered by co-workers after falling from ladder. Died enroute to hospital."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/09/10",
    "Company": "Benham LLC, Naples, FL 34119",
    "Quote": "Working was using a lawn mower, it flipped over pinning him beneath the water, and worker drowned."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/10/10",
    "Company": "Alcon Transport Inc., Los Angeles, CA 90021",
    "Quote": "Worker was helping to hook up a trailer, when he was crushed by a truck backing into a dock."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/10/10",
    "Company": "Speedy Rooter Inc., North Sioux City, SD 57049",
    "Quote": "Two workers were fixing a clogged sewer and were overcome by sewer gases. One worker fatality and one worker was hospitalized."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/10/10",
    "Company": "Vee-Jay Cement Contracting, Springfield, IL 62794",
    "Quote": "Worker was setting anchor bolts into a 4-foot concrete-formed wall, collapsed, and fell backwards. Worker suffered from heat exposure."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/11/10",
    "Company": "Root Brothers Farm, Albion, NY 14411",
    "Quote": "Worker was run over by a flatbed truck."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/12/10",
    "Company": "Boston University, Boston, MA 02218",
    "Quote": "Worker was found on the floor with a mask on, connected to two hoses, one for air and the other for nitrogen."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/12/10",
    "Company": "Calvi Electric Company, Linwood, NJ 08221",
    "Quote": "Worker was working on an energized electrical cabinet and was electrocuted."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/12/10",
    "Company": "General Dynamics Ordinance and Tactical Systems, Carthage, MO 64839",
    "Quote": "Worker was engaged in welding activities on an overhead air pollution control unit and was struck by a small piece of welding equipment/tool that fell from overhead."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/12/10",
    "Company": "Phoenix Stamping Group LLC, Atlanta, GA 30336",
    "Quote": "Worker was on a scissor lift, stripping electrical wires, and was noticed lying on the floor of the bucket of the scissor lift. Worker was electrocuted."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/13/10",
    "Company": "Advance Pipe Bending & Fabricating Co., Huntington Park, CA 90255",
    "Quote": "Worker fell from a pallet that was elevated eight feet above the ground by a forklift."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/13/10",
    "Company": "Reid Gardner Power Plant, Moapa, NV 89025",
    "Quote": "Worker's left arm was amputated while working near a conveyor. Emergency assistance was called but the employee was pronounced dead at the scene."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/13/10",
    "Company": "Trinidad Drilling, Arlington, TX 76010",
    "Quote": "Worker was in the process of rigging up the cable that was holding up the rig. The cart and the top drive track fell. The cart struck the worker."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/14/10",
    "Company": "Donaldson Enterprises Inc., Tallahassee, FL 32314",
    "Quote": "Worker was changing a flat tire on a business trailer. Worker was jacking up the trailer and the trailer fell onto the worker."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/14/10",
    "Company": "Porter Cattle Co., Admire, KS 66830",
    "Quote": "Worker was in the process of moving between cattle pastures. Worker got out of the truck to open the gate and was struck by the truck."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/14/10",
    "Company": "Shelley and Sands, Columbus, OH 43215",
    "Quote": "Worker was working on the roadway, milling a joint in front of a bridge, and was struck by a vehicle."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/14/10",
    "Company": "Simcals Inc., Mount Miegs, AL 36057",
    "Quote": "Worker was doing electrical work on an overhead crane and was standing on the bridge of the crane by the control motors. Worker either had an electrical shock or a heart attack."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/14/10",
    "Company": "Unknown, Blackfoot, ID 83221",
    "Quote": "Worker was performing weed abatement using an all-terrain vehicle and was found on his back with the vehicle across his chest."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/15/10",
    "Company": "Bruce J. Koerner Crane & Equipment Inc., Rockaway, NJ 07866",
    "Quote": "Worker was working on the ground, contacted an energized wrecking ball, and was electrocuted."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/15/10",
    "Company": "Dansville Hauling Corporation, Forestville, MD 20747",
    "Quote": "Worker stepped out of driver's door of dump truck and was struck by another dump truck that was backing up within the lane closure."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/15/10",
    "Company": "MP Technologies, Bellville, TX 77418",
    "Quote": "Worker was installing a new wire for a 72 kV transmission line and was electrocuted."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/17/10",
    "date": "07/16/10",
    "Company": "Westerchil Construction, Alexandria, LA 71301",
    "Quote": "Worker was cleaning up the jobsite by picking up lumber and other debris. He was seen lying on the ground unconscious, possible heat stroke."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "04/22/10",
    "Company": "Tactical Cleaning, Commerce City, CO 80022",
    "Quote": "Worker was cleaning the inside of a rail car that previously had gas inside. A flash fire occurred and worker was burned."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "05/24/10",
    "Company": "Phillips Construction, Pewaukee, WI 53072",
    "Quote": "Worker was preparing and pouring a concrete patio. Worker began to show signs of heat exhaustion/heat stress, lost consciousness."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/04/10",
    "Company": "Whitestar Development Corporation, Niagara Falls, NY 14303",
    "Quote": "Worker fell into a compactor and was crushed."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/12/10",
    "Company": "Streb Construction Co. Inc., Iowa City, IA 52244",
    "Quote": "Worker was run over by a dump truck while working as a laborer on a road construction project."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/13/10",
    "Company": "TMK/IPSCO, Camanche, IA 52730",
    "Quote": "Truck driver was strapping down steel coils on his trailer when one of the coils fell off the truck and struck him."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/15/10",
    "Company": "Randy Clanton Farms Inc., Hermitage, AR 71647",
    "Quote": "Worker was removing stakes and strings from the fields, and collapsed."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/16/10",
    "Company": "Platinum Property Management, Ft. Myers Beach, FL 33931",
    "Quote": "Worker was standing on a ladder performing tree trimming and fell from the ladder."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/17/10",
    "Company": "C & C Transload LLC, Tyler, TX 75702",
    "Quote": "Worker was transferring sand from a rail car into a truck using a conveyor belt loading machine. Fell onto the rotating conveyor belt and was caught inside the machine."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/18/10",
    "Company": "Sunnybrook Golf Club, Plymouth Meeting, PA 19462",
    "Quote": "Worker fell off the back of a golf cart, hitting his head."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/19/10",
    "Company": "CR&R Inc., Stanton, CA 90680",
    "Quote": "Worker was adjusting an hydraulic front-end bucket with a clamping device on a truck, when he was crushed between the bucket and clamping arm."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/19/10",
    "Company": "Reclamation Sciences, LLC, Phoenix, AZ 85212",
    "Quote": "Worker was crushed between the boom of the backhoe and the stabilizer (outrigger) leg."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/19/10",
    "Company": "Sohnrey Farms, Chico, CA 95928",
    "Quote": "Worker shooting squirrels was killed when hit by a falling limb."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/20/10",
    "Company": "Newmar Corporation, Nappanee, IN 46550",
    "Quote": "Worker riding in the back of a pickup truck fell out of the truck and hit his head when the truck hit a bump."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/21/10",
    "Company": "Accelerated Courier Inc., Bensenville, IL 60106",
    "Quote": "Worker was loading a truck and passed out."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/21/10",
    "Company": "AEE Tecnica de Cayey, Cayey, PR 00737",
    "Quote": "Worker was servicing a utility pole to restore service to clients, came in contact with the energized part of an electric transmission line and was electrocuted."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/21/10",
    "Company": "Conco Concrete Specialists, Whiteriver, AZ 85941",
    "Quote": "Worker fell into a blocklayers mortar mixer and was killed by revolving paddles."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/22/10",
    "Company": "Arnolds Masonry Construction, Baton Rouge, LA 70808",
    "Quote": "Worker was climbing down from a scaffold to get water and fell from the scaffold."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/22/10",
    "Company": "DOD Directorate of Logistics, Fort Hood, TX 76544",
    "Quote": "Worker was working under a forklift. The front being supported by two jackstands. He was removing a hydraulic cylinder, it fell on his hand. The jackstands became dislodged and the forklift fell on the worker, crushing his head and chest."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/22/10",
    "Company": "Horsehead Corporation, Monaca, PA 15061",
    "Quote": "There was an explosion in B column. Two worker fatalities."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/22/10",
    "Company": "Nichols Construction Company, Welch, WV 24801",
    "Quote": "Worker was working to install a fiberoptic line and became unconcious, possible heat stress."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "07/24/10",
    "date": "07/23/10",
    "Company": "Northeast Energy Management Inc., Cheswick, PA 15024",
    "Quote": "Two workers were in the process of performing arc welding on a oil tank that contained 85 barrels of crude oil. The tank exploded. The workers were blown up to 60 feet from the pad of the oil tank, receiving fatal burns."
  },
  {
    "Fiscal Year": "FY 2010",
    "Summary Report Date": "09/25/10",
    "date": "09/25/10",
    "Company": "Pioneer Oilfield Trucking, Inc., Eagle Pass, TX",
    "Quote": "Worker was in the process of backing up a trailer to another trailer to unload a rig.  Worker was crushed after one of the trailers backed up pinning him against the opposite trailer."
  }
];
var usedQuotes = [];

function getRandomQuote(array) {
	var maxNumber = array.length; 	//select a random number, not larger than length of array
	var randomSelection = Math.floor((Math.random() * maxNumber));
	return [array[randomSelection], randomSelection]; 	//return a random quote object based on randomSelection
}

function getRandomColor() {
	//randomly generate numbers between 0 and 225 for use with rgb CSS
	var r = Math.floor((Math.random() * 256)),
			g = 255, //keeping this consistent for a similar feeling color each time
			b = Math.floor((Math.random() * 256)),
			// combine the random numbers to create a complete rgb color code
			color = "rgb(" + r + "," + g + "," + b + ")";
	return color;
}

function printQuote() {
	//get a random quote, and the index of quoteArray used
	var quoteObject = getRandomQuote(quoteArray);
	usedQuotes.push(quoteObject[0]); //add the quote object used to an empty array
	quoteArray.splice(quoteObject[1], 1); //remove the quote object used from the quoteArray

	//if the quoteArray is empty, refill it with usedQuote. clear usedQuotes array.
	if ( !quoteArray.length ) {
		quoteArray = usedQuotes;
		usedQuotes = [];
	}

	var quoteString= ""; //create a string
	//concatenate strings to create HTML template using quote object
	quoteString += '<p class="quote">' + quoteObject[0].Quote + '</p>' +
								 '<p class="source">' + quoteObject[0].Company;
	//optionally add year and/or citation if they are present
	if ( quoteObject[0].citation ) { quoteString += '<span class="citation">' + quoteObject[0].citation + '</span>'; }
	if ( quoteObject[0].date ) { quoteString += '<span class="year">' + quoteObject[0].date + '</span>'; }
	quoteString += '</p>'; //complete the html string

	document.getElementById('quote-box').innerHTML = quoteString; //add completed html template string to page
	document.getElementById("random-color").style.background = getRandomColor();
}

function repeatPrintQuote() {
	window.setInterval(printQuote, 30000);
}

printQuote(); //call printQuote to add a random quote on page load
