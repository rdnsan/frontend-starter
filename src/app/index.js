import 'regenerator-runtime';
import '@views/main';
import registerSW from '@utils/RegisterSW';

window.addEventListener('DOMContentLoaded', async () => {
  await registerSW();
});
