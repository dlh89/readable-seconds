module.exports = function convert(seconds) {
  const convertedTime = convertSeconds(seconds);
  const timeStrings = getStrings(convertedTime, 2); // only include 2 units of time
  const timeString = applyDelimiters(timeStrings);

  return timeString;
};

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
  if (unitsToInclude != unitsToInclude.length) {
    relevantTime = truncateUnits(convertedTime, unitsToInclude);
  }

  timeStrings = relevantTime.reduce((result, time) => {
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

function truncateUnits(convertedTime, unitsToInclude) {
  // loop through convertedTime objects until value is not 0
  // add keep adding units while result is less than unitsToInclude
  relevantTime = convertedTime.reduce((result, time) => {
    if (time.value) {
      if (result.length < unitsToInclude) {
        result.push(time);
      }
    }
    return result;
  }, []);
  return relevantTime;
}

function applyDelimiters(timeStrings) {
  let timeString = "";

  for (var i = 0; i < timeStrings.length; i++) {
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
