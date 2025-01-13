import { PrayerTimes } from "adhan";
import { Moon, Sun } from "lucide-react";

import { Prayer } from "../Types/prayer";

export const buildPrayers = (prayerTimes: PrayerTimes | null): Prayer[] => {
  if (!prayerTimes) return [];

  const prayers: Prayer[] = [
    { name: "Fajr", time: prayerTimes?.fajr, icon: Moon },
    { name: "Sunrise", time: prayerTimes.sunrise, icon: Sun },
    { name: "Dhuhr", time: prayerTimes.dhuhr, icon: Sun },
    { name: "Asr", time: prayerTimes.asr, icon: Sun },
    { name: "Maghrib", time: prayerTimes.maghrib, icon: Sun },
    { name: "Isha", time: prayerTimes.isha, icon: Moon },
  ];

  return prayers;
};
