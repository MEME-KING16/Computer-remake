class DesktopManager {
    constructor() {

    }

    init() {
        Computer.ds.login()
    }

    login() {
        //skip for now
        Computer.ds.setUp()
    }
    setUp() {
        computer.innerHTML = ""
        computer.style.backgroundColor = "white"
    }
}