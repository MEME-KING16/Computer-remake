let computer = document.getElementById("computer");
class Computer {
    static on = false;
    static DesktopManager = new DesktopManager()
    static Boot = new Boot(Computer.DesktopManager.init);
    static TaskBar = new Taskbar()
    static boot() {
        Computer.Boot.start();
    }
}