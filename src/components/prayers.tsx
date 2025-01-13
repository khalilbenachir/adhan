import { format } from "date-fns";

import { Prayer } from "../Types/prayer";

interface PropsPrayers {
  prayers: Prayer[];
  nextPrayer: string;
}

const Prayers = ({ prayers, nextPrayer }: PropsPrayers) => {
  return (
    <div className="grid gap-4">
      {prayers?.map(({ name, time, icon: Icon }) => (
        <div
          key={name}
          className={`flex items-center justify-between p-4 rounded-lg ${
            name === nextPrayer
              ? "bg-emerald-100 text-emerald-800"
              : "bg-gray-50 text-gray-700"
          }`}
        >
          <div className="flex items-center">
            <Icon className="w-5 h-5 mr-3" />
            <span className="font-medium">{name}</span>
          </div>
          <span className="font-semibold">{format(time || "", "hh:mm a")}</span>
        </div>
      ))}
    </div>
  );
};

export default Prayers;
