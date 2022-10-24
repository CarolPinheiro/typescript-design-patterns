import { MyDatabaseFunction } from '../db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Carol', age: 24 });
myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

export { myDatabaseClassic };
