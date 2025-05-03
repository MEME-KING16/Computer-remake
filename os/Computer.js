let computer = document.getElementById("computer");
class Computer {
    static on = false;
    static ds = new DesktopManager()
    static Boot = new Boot(Computer.ds.init);
    static boot() {
        Computer.Boot.start();
    }
}