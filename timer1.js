//retreive information from user and excluding the 2 default lines
const args = process.argv.slice(2);
const setAlarm = (timeInSeconds) => {
    setTimeout(() => {
      process.stdout.write('\x07'); // Beep sound
    }, timeInSeconds * 500);
  };
  
  for (const arg of args) {
    const time = parseInt(arg);
    if (!isNaN(time) && time > 0) {
      setAlarm(time);
    }
  }

  