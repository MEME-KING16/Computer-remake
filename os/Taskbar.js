class Taskbar {
    constructor() {
        this.taskbar = document.createElement("div")
    }

    start() {
        this.taskbar.id = "taskbar"
        computer.appendChild(this.taskbar)
        let clock = document.createElement("div");
        clock.id = "clock"
        this.taskbar.appendChild(clock)
        clock.innerHTML = "1:23 PM"
    }
}