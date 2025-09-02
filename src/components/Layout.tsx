import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import CallButton from './CallButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </div>
  );
};

export default Layout;