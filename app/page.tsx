import Image from "next/image";
import { BarChart } from "./components/BarChart";

export default function Home() {
  return (
   <div className="container">
     Chart JS
     <div>
        <BarChart/>
     </div>
   </div>
  );
}
