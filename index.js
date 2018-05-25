function truncateUnits(convertedTime, unitsToInclude) {
  // loop through convertedTime objects until value is not 0
  // add keep adding units while result is less than unitsToInclude
  const relevantTime = convertedTime.reduce((result, time) => {
    if (time.value) {
      if (result.length < unitsToInclude) {
        result.push(time);
      }
    }
    return result;
  }, []);
  return relevantTime;
}

function convertSeconds(seconds) {
  const MINSINADAY = 60 * 24;
  const MINSINAYEAR = MINSINADAY * 365;
  const minutes = seconds / 60; // For some units it will be easier to work in minutes

  const convertedTime = [
    {
      unit: "year",
      value: Math.floor(minutes / MINSINAYEAR)
    },
    {
      unit: "day",
      value: Math.floor((minutes % MINSINAYEAR) / MINSINADAY)
    },
    {
      unit: "hour",
      value: Math.floor((minutes % MINSINADAY) / 60)
    },
    {
      unit: "minute",
      value: Math.floor(minutes % 60)
    },
    {
      unit: "second",
      value: Math.floor(seconds % 60)
    }
  ];

  return convertedTime; // Return the array of objects
}

function getStrings(convertedTime, unitsToInclude = convertedTime.length) {
  let relevantTime = [];
  if (unitsToInclude !== convertedTime.length) {
    relevantTime = truncateUnits(convertedTime, unitsToInclude);
  } else {
    relevantTime = convertedTime;
  }

  const timeStrings = relevantTime.reduce((result, time) => {
    if (time.value) {
      if (time.value > 1) {
        result.push(`${time.value} ${time.unit}s`);
      } else {
        result.push(`${time.value} ${time.unit}`);
      }
    }
    return result;
  }, []);
  return timeStrings;
}

function applyDelimiters(timeStrings) {
  let timeString = "";

  for (let i = 0; i < timeStrings.length; i++) {
    if (i < timeStrings.length - 2) {
      timeString += `${timeStrings[i]}, `;
    } else if (i === timeStrings.length - 2) {
      timeString += `${timeStrings[i]} and `;
    } else {
      timeString += timeStrings[i];
    }
  }
  return timeString;
}

module.exports = function convert(seconds, units) {
  if (typeof seconds !== "number") {
    throw new Error("Expected seconds argument to be a number");
  }
  const convertedTime = convertSeconds(seconds);
  let unitsToInclude = 0;
  if (units) {
    unitsToInclude = units;
  } else {
    unitsToInclude = convertedTime.length;
  }
  const timeStrings = getStrings(convertedTime, unitsToInclude);
  const timeString = applyDelimiters(timeStrings);

  return timeString;
};
