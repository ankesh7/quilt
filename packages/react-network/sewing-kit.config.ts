import {createPackage} from '@sewing-kit/config';

import {quiltPackage} from '../../config/sewing-kit';

export default createPackage(pkg => {
  pkg.entry({root: './src/index'});
  pkg.entry({name: 'server', root: './src/server'});
  pkg.use(quiltPackage({useReact: true}));
});
