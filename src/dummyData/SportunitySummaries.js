
import kind from '../enums/sportunityFilterKinds';

export default [{
  id: '1',
  title: 'Test sportunity 1 (normal)',
  price: 12,
  date: new Date(),
  level: 'Advanced',
  kind: kind.normal,
  status: 'FULL',
  place: 'Lausanne',
  location: { latitude: 46.81, longitude: 8.227 }
}, {
  id: '2',
  title: 'Test sportunity 2 (Booked example)',
  price: 17,
  date: new Date(),
  level: 'Advanced',
  kind: kind.booked,
  status: 'FULL',
  place: 'Lausanne',
  location: { latitude: 46.82, longitude: 8.237 }
}, {
  id: '3',
  title: 'Test sportunity 3 (another normal)',
  price: 50,
  date: new Date(),
  level: 'Advanced',
  kind: kind.normal,
  status: 'WAITING',
  place: 'Lausanne',
  location: { latitude: 46.815, longitude: 8.207 }
}, {
  id: '4',
  title: 'Draft of a sportunity',
  price: 12,
  date: new Date(),
  level: 'Advanced',
  kind: kind.organization,
  status: 'FULL',
  place: 'Lausanne',
  location: { latitude: 46.823, longitude: 8.237 }
}, {
  id: '5',
  title: 'My first organized sportunity',
  price: 12,
  date: new Date(),
  level: 'Advanced',
  kind: kind.organized,
  status: 'FULL',
  place: 'Lausanne',
  location: { latitude: 46.822, longitude: 8.227 }
}, {
  id: '6',
  title: 'Test sportunity 1 (normal) 2',
  price: 12,
  date: new Date(),
  level: 'Advanced',
  kind: kind.normal,
  status: 'FULL',
  place: 'Lausanne',
  location: { latitude: 46.81, longitude: 8.227 }
}, {
  id: '7',
  title: 'Test sportunity 2 (Booked example) 2',
  price: 17,
  date: new Date(),
  level: 'Advanced',
  kind: kind.booked,
  status: 'FULL',
  place: 'Lausanne',
  location: { latitude: 46.82, longitude: 8.237 }
}, {
  id: '8',
  title: 'Test sportunity 3 (another normal) 2',
  price: 50,
  date: new Date(),
  level: 'Advanced',
  kind: kind.normal,
  status: 'WAITING',
  place: 'Lausanne',
  location: { latitude: 46.815, longitude: 8.207 }
}];
