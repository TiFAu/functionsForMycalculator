function viewingFunctionErrors ( functionName, messageFromFunction) {
    console.log (`Execution errors of ${functionName}  method because: ${messageFromFunction}`)
}

function checkingReceivedArgumentValues (argumentValues, ErrorMessages) {
    let errorMessage = null;
    for ( let i = 0;  i < argumentValues.length;  i++ ) {
        (typeof(argumentValues [ i ]) !== 'number') ? errorMessage = `The value '${argumentValues [ i ]}' was entered as the '${ ( i + "'" ).padEnd ( 2 ) } argument, and therefore: ${ErrorMessages[i]}` : null;
        //console.log ( `The value ${argumentValues [ i ]} was entered as the '${ ( i + "'" ).padEnd ( 2 ) } argument, and therefore: ${ErrorMessages[i]}` )
    }
    errorMessage == null ? errorMessage = `${ErrorMessages[ErrorMessages.length-1]}` : null
    return errorMessage
}

function calculateTheReducedIsentropicVelocityInTheRangeOfSubsonicSpeeds (volumentricFlowRateOfTheEjectingFlowUnderOperatingConditions, adiabaticExponent) { //метод вычисления приведенной изоэнтропной скорости в диапазоне дозвуковых скоростей;
    let arrayOfErrorMessages = ["value volumentric for low rate of the ejecting flow under operating conditions is incorrect", "Adiabatic exponent is incorrect", "Something went wrong and the Reduced Isentropic Velocity In The Range Of Subsonic Speeds was calculated incorrectly"]
    let errorMessage = checkingReceivedArgumentValues (arguments, arrayOfErrorMessages)
    try {
        //if ( (volumentricFlowRateOfTheEjectingFlowUnderOperatingConditions != 'number') || (adiabaticExponent != 'number')) {throw new SyntaxError('Data is incorrect');}
        //if ( !volumentricFlowRateOfTheEjectingFlowUnderOperatingConditions || !adiabaticExponent ||(volumentricFlowRateOfTheEjectingFlowUnderOperatingConditions !== 'number') || (adiabaticExponent !== 'number')) {throw new SyntaxError('Data is incorrect');}
        for (zi = 0, reducedIsentropicVelocityInTheRangeOfSubsonicSpeeds = 0; zi <= 100000; zi++) {
            let li = zi / 100000;
            let reducedIsentropicVelocityInTheRangeOfSubsonicSpeeds = Math.pow((adiabaticExponent + 1) / 2, 1 / (adiabaticExponent - 1)) * li * Math.pow((1 - (adiabaticExponent - 1) / (adiabaticExponent + 1) * Math.pow(li, 2)), 1 / (adiabaticExponent - 1));
            if (Math.abs((reducedIsentropicVelocityInTheRangeOfSubsonicSpeeds - volumentricFlowRateOfTheEjectingFlowUnderOperatingConditions) / volumentricFlowRateOfTheEjectingFlowUnderOperatingConditions) < 0.0001) {
            //if ( !reducedIsentropicVelocityInTheRangeOfSubsonicSpeeds) {throw new SyntaxError('Data is incorrect');}
            
            return li;
            break;
            };
            if (zi == 100000) { return 1 }
            //if ( (volumentricFlowRateOfTheEjectingFlowUnderOperatingConditions !== 'number') || (adiabaticExponent !== 'number')) {throw new SyntaxError('Data is incorrect');}
        }
        
    } catch (e){viewingFunctionErrors(calculateTheReducedIsentropicVelocityInTheRangeOfSubsonicSpeeds.name, errorMessage)}
}

calculateTheReducedIsentropicVelocityInTheRangeOfSubsonicSpeeds ("cdfdg", 1.4)
calculateTheReducedIsentropicVelocityInTheRangeOfSubsonicSpeeds ( 1.4, "cdfdg")
calculateTheReducedIsentropicVelocityInTheRangeOfSubsonicSpeeds ( 0.4, 1.3)
