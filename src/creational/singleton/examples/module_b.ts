import { MyDatabaseFunction } from '../db/my-database-function';

import { myDatabaseClassic as myDatabaseFromModuleA } from '../examples/module_a';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Spock', age: 24 });
myDatabaseClassic.add({ name: 'Eijiro', age: 30 });
myDatabaseClassic.add({ name: 'Kirk', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
