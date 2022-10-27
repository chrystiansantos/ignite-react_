// import { CoffeList } from './components/CoffeList';
import { CardCoffe } from './components/CardCoffe';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { CoffeList } from './styles';

export function Home() {
  const arrCoffe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <Header />
      <Intro />
      <CoffeList>
        <h1>Nossos café</h1>
        <div>
          {arrCoffe.map(coffe => (
            <CardCoffe key={coffe} />
          ))}
        </div>
      </CoffeList>
    </>
  );
}
