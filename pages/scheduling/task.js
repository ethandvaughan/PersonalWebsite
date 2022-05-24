export default class Task {
  constructor(taskName, timeToComplete, weight) {
    this.name = taskName;
    this.timeToComplete = timeToComplete;
    this.weight = weight;
    this.timeLeft = timeToComplete;
    this.working = false;
  }

  getName() {
    return this.name;
  }
  
  getTimeToComplete() {
    return this.timeToComplete;
  }

  getTimeLeft() {
    return this.timeLeft;
  }

  getWeight() {
    return this.weight;
  }

  setName(name) {
    this.name = name;
  }

  setTimeToComplete(time) {
    this.timeToComplete = time;
    this.timeLeft = time;
  }

  setTimeLeft(time) {
    this.timeLeft = time;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  workOnTask(working) {
    this.working = working;
    while (this.working == true && this.timeLeft >= 0) {
      setTimeout(() => { this.timeLeft = this.timeLeft - 1;
                         console.log("Working!");
                         console.log("Time left in task: ", this.timeLeft);
                        }, 1000)
    }
  }
}