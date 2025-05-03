class DesktopManager {
    constructor() {

    }

    init() {
        Computer.DesktopManager.login()
    }

    login() {
        //skip for now
        Computer.DesktopManager.setUp()
    }
    setUp() {
        computer.innerHTML = ""
        computer.style.backgroundColor = "lightblue"
        Computer.TaskBar.start()
    }
}