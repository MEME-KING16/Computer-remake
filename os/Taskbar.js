class Taskbar {
    constructor() {
        this.taskbar = document.createElement("div");
        this.apps = []; //temp will change eventualy
        this.focusedApp = null;
    }

    start() {
        this.taskbar.id = "taskbar";
        computer.appendChild(this.taskbar);
        let clock = document.createElement("div");
        clock.id = "clock";
        this.taskbar.appendChild(clock);
        clock.innerHTML = "1:23 PM";
        let start = document.createElement("div");
        start.id = "start";
        this.taskbar.appendChild(start);
        start.innerHTML = "START";
    }

    addApp(name) {
         this.apps.push(name) //temp will change eventualy
         this.taskbar.innerHTML += `<span id="${name}">${name}</span>`;
    }

    focusApp(name) {
        document.getElementById(name).classList.add("focused");
        document.getElementById(this.focusedApp).classList.remove("focused");
        this.focusedApp = name;
    }
}