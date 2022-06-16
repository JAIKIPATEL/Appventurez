
// Rewrite it in the "class" syntax.

class Clock {

  constructor({template}) {
      this.template = template;
  }

  // method to render time
  render = () => {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);

      console.log(output);
  }

  // method to stop the clock
  stop = () => {
      this.render();
      clearInterval(this.timer)
  }

  // method to start the clock
  start = () => {
      this.render();
      this.timer = setInterval(this.render, 1000);
  };

}

let clock = new Clock({template: 'h:m:s'});

clock.start(); 
setTimeout(clock.stop, 5000); 