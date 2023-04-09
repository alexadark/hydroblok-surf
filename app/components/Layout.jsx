import Footer from './Footer';
import Header from './Header';

export const Layout = ({children}) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <main className="mb-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
