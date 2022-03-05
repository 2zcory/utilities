import { formatPostalCode7 } from '../../filters/postal-code.js';
import { testExpectOuput } from '../expect-output.js';

const testMachine = new testExpectOuput(formatPostalCode7);
testMachine.addSample({ input: '1500031', expect: '₸150-0031' });
testMachine.addSample({ input: '1300453', expect: '₸130-0453' });
testMachine.addSample({ input: '1200015', expect: '₸120-0015' });
testMachine.addSample({ input: '1200005', expect: '₸120-0005' });
testMachine.addSample({ input: '1230861', expect: '₸123-0861' });
testMachine.addSample({ input: '1200046', expect: '₸120-0046' });
testMachine.addSample({ input: '1200026', expect: '₸120-0026' });
testMachine.addSample({ input: '1230851', expect: '₸123-0851' });
testMachine.addSample({ input: '1350064', expect: '₸135-0064' });

export default testMachine;