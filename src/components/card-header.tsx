import { Clock, MapPin, Pen } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PropsCardHeader {
  locationName: string;
}

const CardHeader = ({ locationName }: PropsCardHeader) => {
  return (
    <div className="bg-emerald-600 text-white p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Prayer Times</h1>
        <Clock className="w-8 h-8" />
      </div>
      <div className="flex items-center text-emerald-100">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{locationName}</span>
        <Button variant="default" className="ml-2" size="icon">
          <Pen className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CardHeader;
