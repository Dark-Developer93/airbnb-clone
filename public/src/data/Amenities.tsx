import Ac from "../svg/ameneties/ac.svg";
import Bbq from "../svg/ameneties/bbq.svg";
import Beach from "../svg/ameneties/beach.svg";
import CarbonMonoxideAlarm from "../svg/ameneties/carbon-monoxide-alarm.svg";
import FireExt from "../svg/ameneties/fire-ext.svg";
import FirePit from "../svg/ameneties/fire-pit.svg";
import FirstAid from "../svg/ameneties/first-aid.svg";
import Gym from "../svg/ameneties/gym.svg";
import HotTub from "../svg/ameneties/hot-tub.svg";
import IndoorFirplace from "../svg/ameneties/indoor-firplace.svg";
import Kitchen from "../svg/ameneties/kitchen.svg";
import Lake from "../svg/ameneties/lake.svg";
import OutdoorDining from "../svg/ameneties/outdoor-dining.svg";
import OutdoorShower from "../svg/ameneties/outdoor-shower.svg";
import PaidParking from "../svg/ameneties/paid-parking.svg";
import Parking from "../svg/ameneties/parking.svg";
import Patio from "../svg/ameneties/patio.svg";
import Piano from "../svg/ameneties/piano.svg";
import Pool from "../svg/ameneties/pool.svg";
import PoolTable from "../svg/ameneties/pool-table.svg";
import Ski from "../svg/ameneties/ski.svg";
import SmokeAlarm from "../svg/ameneties/smoke-alarm.svg";
import Tv from "../svg/ameneties/tv.svg";
import WashingMachine from "../svg/ameneties/washing-machine.svg";
import Wifi from "../svg/ameneties/wifi.svg";
import Workplace from "../svg/ameneties/workplace.svg";

export const AmenetiesType = [
  {
    type: "basic",
    data: [
      { name: "Wifi", svgPath: <Wifi /> },
      { name: "TV", svgPath: <Tv /> },
      { name: "Kitchen", svgPath: <Kitchen /> },
      { name: "Washing Machine", svgPath: <WashingMachine /> },
      { name: "Free parking on premises", svgPath: <Parking /> },
      { name: "Paid parking on premises", svgPath: <PaidParking /> },
      { name: "Air conditioning", svgPath: <Ac /> },
      { name: "Dedicated workplace", svgPath: <Workplace /> },
    ],
  },
  {
    type: "advanced",
    data: [
      { name: "Pool", svgPath: <Pool /> },
      { name: "Hot tub", svgPath: <HotTub /> },
      { name: "Patio", svgPath: <Patio /> },
      { name: "BBQ grill", svgPath: <Bbq /> },
      { name: "Outdoor dining area", svgPath: <OutdoorDining /> },
      { name: "Fire pit", svgPath: <FirePit /> },
      { name: "Pool table", svgPath: <PoolTable /> },
      { name: "Indoor fireplace", svgPath: <IndoorFirplace /> },
      { name: "Piano", svgPath: <Piano /> },
      { name: "Exercise equipment", svgPath: <Gym /> },
      { name: "Lake access", svgPath: <Lake /> },
      { name: "Beach access", svgPath: <Beach /> },
      { name: "Ski-in/Ski-out", svgPath: <Ski /> },
      { name: "Outdoor shower", svgPath: <OutdoorShower /> },
    ],
  },
  {
    type: "safety",
    data: [
      { name: "Smoke alarm", svgPath: <SmokeAlarm /> },
      { name: "First aid kit", svgPath: <FirstAid /> },
      { name: "Fire extinguisher", svgPath: <FireExt /> },
      { name: "Carbon monoxide alarm", svgPath: <CarbonMonoxideAlarm /> },
    ],
  },
];
