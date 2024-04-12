import getNewsSequence from './newsDataUpdate.js';

document.addEventListener('DOMContentLoaded', async () => {
    await getNewsSequence();
});
