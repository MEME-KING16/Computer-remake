class Boot {
    constructor(onBootComplete) {
        this.state = "POST";
        this.progress = 0;
        this.onBootComplete = onBootComplete;
    }

    start() {
        this.runPOST();
    }

    runPOST() {
        this.state = "POST";
        computer.innerHTML = `<div id="boot">Performing POST checks...<br>✓ CPU detected<br>✓ RAM OK<br>✓ Storage found</div>`;
        setTimeout(() => this.runBootloader(), 1500);
    }

    runBootloader() {
        this.state = "bootloader";
        computer.innerHTML = `<div id="boot">Bootloader: Loading OS from disk...</div>`;
        setTimeout(() => this.loadKernel(), 1500);
    }

    loadKernel() {
        this.state = "loadKernel";
        computer.innerHTML = `
            <div id="boot">
                <p>Loading OS Kernel...</p>
                <div id="progress-bar"><div id="progress-fill" style="width: 0%"></div></div>
            </div>`;
        this.loadProgress();
    }

    loadProgress() {
        const interval = setInterval(() => {
            this.progress += 4;
            document.querySelector('#progress-fill').style.width = `${this.progress}%`;

            if (this.progress === 40) {
                document.querySelector('#boot').insertAdjacentHTML('beforeend', `<p>Initializing device drivers...</p>`);
            } else if (this.progress === 70) {
                document.querySelector('#boot').insertAdjacentHTML('beforeend', `<p>Starting background services...</p>`);
            } else if (this.progress >= 100) {
                clearInterval(interval);
                this.finishBoot();
            }
        }, 120);
    }

    finishBoot() {
        this.state = "ready";
        setTimeout(() => this.onBootComplete(), 500); // small pause before desktop appears
    }
}
