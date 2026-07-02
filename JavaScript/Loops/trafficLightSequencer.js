const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence( config, cycles)
{
  if(!config.phases || config.phases.length === 0){
    console.log("No phases found");
    return;
  }

  for(let i=0;i<cycles;i++)
  {
    if(config.fault){
      console.log("Faulted phase!");
      return;
    }

    for(const phase of config.phases){
      if(config.fault){
        console.log("Faulted phase!");
        return;
      }

      if(phase.duration <=0){
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }

}

function generateTimeline(config, cycles) {
  const timeline = [];
  let runningTotal = 0;

  if (!config.phases || config.phases.length === 0) {
    return timeline;
  }

  // Iterate across the given number of cycles
  for (let i = 0; i < cycles; i++) {
    for (const phase of config.phases) {
      // Process all phases without validation (ignore fault and duration <= 0 rules)
      runningTotal += phase.duration;
      timeline.push(runningTotal);
    }
  }

  return timeline;
}