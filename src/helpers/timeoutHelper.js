//this is unbelievably simple, but I just want one place where I can change the timeouts for everything

//immutable timeout, so the time is constant
const immTimeout = (
  waitingFunc,
  arg = false,
  waitingFunc2 = false,
  arg2 = false
) => {
  setTimeout(() => {
    waitingFunc(arg && arg);
    waitingFunc2 && waitingFunc2(arg2 && arg2); //this probably looks like fucking nonsense to someone who doesn't use turnery
  }, 500);
};

//mutable timeout, meaing time can be specified
const muTimeout = (waitingFunc, arg, clock) => {
  setTimeout(() => {
    waitingFunc(arg);
  }, clock);
};

export { immTimeout, muTimeout };
