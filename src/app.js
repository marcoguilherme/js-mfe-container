import { registerApplication, start } from 'single-spa';

const app = {
    async bootstrap(props) {

    },

    async mount(props) {
        console.log('[APP Mounted]: Success');
    },

    async unmount(props) {
        console.log('[APP Unmounted]: Success');
    }
};

registerApplication({
    appName: 'app-mfe-container',
    app,
    activeWhen: ['/']
});
start();