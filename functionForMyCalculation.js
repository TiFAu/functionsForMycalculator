const errorMessages = [
    "volumetric for low rate of the ejecting flow under operating conditions",
    "adiabatic exponent",
    "Something went wrong and the Reduced Is-entropic Velocity In The Range Of Subsonic Speeds was calculated incorrectly"
  ];
  
const validateArgument = (value, index) => {
  typeof value !== 'number' && console.log(`Validation error - The type of value for ${errorMessages[index]} '${value}'- must be number but was entered as '${typeof value}'`);
};
  
function calculateTheReducedIsentropicVelocityInTheRangeOfSubsonicSpeeds (volumentricFlowRateOfTheEjectingFlowUnderOperatingConditions, adiabaticExponent) {
  const args = [].slice.call(arguments);
  const errors = args.filter((arg, index) => validateArgument(arg, index));
  if (errors.length !== 0) return;
  try {
    for (zi = 0, reducedIsentropicVelocityInTheRangeOfSubsonicSpeeds = 0; zi <= 100000; zi++) {
      let li = zi / 100000;
      let reducedIsentropicVelocityInTheRangeOfSubsonicSpeeds = Math.pow((adiabaticExponent + 1) / 2, 1 / (adiabaticExponent - 1)) * li * Math.pow((1 - (adiabaticExponent - 1) / (adiabaticExponent + 1) * Math.pow(li, 2)), 1 / (adiabaticExponent - 1));
      if (Math.abs((reducedIsentropicVelocityInTheRangeOfSubsonicSpeeds - volumentricFlowRateOfTheEjectingFlowUnderOperatingConditions) / volumentricFlowRateOfTheEjectingFlowUnderOperatingConditions) < 0.0001) {
        return li;
      };
      if (zi === 100000) return 1;
    }
  } catch (error) {
    throw new Error(`${errorMessages[2]} - ${error}`)
  }
}

calculateTheReducedIsentropicVelocityInTheRangeOfSubsonicSpeeds ("cdfdg", 1.4)
calculateTheReducedIsentropicVelocityInTheRangeOfSubsonicSpeeds ( 1.4, "cdfdg")
calculateTheReducedIsentropicVelocityInTheRangeOfSubsonicSpeeds ( 0.4, 1.3)