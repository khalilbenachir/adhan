import { useEffect, useMemo, useState } from "react";
import { CalculationMethod, Coordinates, PrayerTimes } from "adhan";

import { Location } from "../Types/location";
import { buildPrayers } from "../utils/build-prayers";

export const usePrayerTimes = (location: Location) => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [nextPrayer, setNextPrayer] = useState<string>("");
  const [timeUntilNext, setTimeUntilNext] = useState<string>("");

  const prayers = useMemo(() => buildPrayers(prayerTimes), [prayerTimes]);

  useEffect(() => {
    if (location.lat && location.lng) {
      const coordinates = new Coordinates(location.lat, location.lng);
      const date = new Date();
      const params = CalculationMethod.MuslimWorldLeague();
      const prayerTimes = new PrayerTimes(coordinates, date, params);
      setPrayerTimes(prayerTimes);
    }
  }, [location.lat, location.lng]);

  useEffect(() => {
    if (prayerTimes) {
      const prayers = {
        Fajr: prayerTimes.fajr,
        Sunrise: prayerTimes.sunrise,
        Dhuhr: prayerTimes.dhuhr,
        Asr: prayerTimes.asr,
        Maghrib: prayerTimes.maghrib,
        Isha: prayerTimes.isha,
      };

      const updateNextPrayer = () => {
        const now = new Date();
        let nextPrayerName = "";
        let nextPrayerTime = null;

        for (const [name, time] of Object.entries(prayers)) {
          if (time > now) {
            nextPrayerName = name;
            nextPrayerTime = time;
            break;
          }
        }

        if (!nextPrayerName) {
          nextPrayerName = "Fajr";
          nextPrayerTime = new Date(prayers.Fajr);
          nextPrayerTime.setDate(nextPrayerTime.getDate() + 1);
        }

        setNextPrayer(nextPrayerName);

        if (nextPrayerTime) {
          const diff = nextPrayerTime.getTime() - now.getTime();
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          setTimeUntilNext(`${hours}h ${minutes}m`);
        }
      };

      updateNextPrayer();
      const interval = setInterval(updateNextPrayer, 60000);
      return () => clearInterval(interval);
    }
  }, [prayerTimes]);

  return {
    prayerTimes,
    nextPrayer,
    timeUntilNext,
    prayers,
  };
};
