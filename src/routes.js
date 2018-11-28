import userComponent from './components/InfoUser' 
import hello from './components/HelloWorld' 

const routes = [
  {
    path: '/',
    name: 'hello',
    componet: hello
  },
  {
    path: '/userInfo',
    name: 'user',
    componet: userComponent
  }
];

export default routes
