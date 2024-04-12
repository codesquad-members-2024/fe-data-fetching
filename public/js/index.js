import getNewsSequence from './newsDataUpdate.js';
import { autoUpdate } from './eventHandler.js';

document.addEventListener('DOMContentLoaded', async () => {
    await getNewsSequence();
    autoUpdate();
});
