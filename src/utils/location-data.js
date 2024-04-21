const data = [
  {
    location: "New York",
    latitude: 40.7128,
    longitude: 74.006,
  },
  {
    location: "Dhaka",
    latitude: 23.8041,
    longitude: 90.4152,
  },
  {
    location: "Jeddah",
    latitude: 21.5292,
    longitude: 39.1611,
  },
  {
    location: "London",
    latitude: 51.5072,
    longitude: 0.1276,
  },
  {
    location: "Toronto",
    latitude: 43.6532,
    longitude: 79.3832,
  },
  {
    location: "Lahore",
    latitude: 31.5204,
    longitude: 74.3587,
  },
];

export function getData() {
  return data;
}

export function getLocationByName(location) {
  if (!location) {
    return null;
  }

  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };

    return defaultLocation;
  }
}
