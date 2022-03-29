import 'regenerator-runtime';
import '@styles';
import '@views/main';
import registerSW from '@utils/RegisterSW';

if (process.env.NODE_ENV === 'production') {
  window.addEventListener('DOMContentLoaded', async () => {
    await registerSW();
  });
}
