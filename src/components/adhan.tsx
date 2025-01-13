import Card from "./card";
import CardHeader from "./card-header";
import Prayers from "./prayers";
import { useLocation } from "../hooks/use-location";
import { useGetLocationInfos } from "../hooks/use-get-location-infos";
import { usePrayerTimes } from "../hooks/use-prayer-times";

function Adhan() {
  const { location } = useLocation();
  const { locationName } = useGetLocationInfos({
    lat: location?.lat,
    lng: location?.lng,
  });
  const { prayerTimes, nextPrayer, timeUntilNext, prayers } =
    usePrayerTimes(location);

  if (!prayerTimes) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">
          Loading prayer times...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-700">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader locationName={locationName} />

            <div className="p-6 bg-emerald-50">
              <div className="text-center">
                <h2 className="text-lg text-emerald-600 font-semibold">
                  Next Prayer
                </h2>
                <div className="text-3xl font-bold text-emerald-800 mt-2">
                  {nextPrayer}
                </div>
                <div className="text-emerald-600 mt-1">in {timeUntilNext}</div>
              </div>
            </div>

            <div className="p-6">
              <Prayers prayers={prayers} nextPrayer={nextPrayer} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Adhan;
