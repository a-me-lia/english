// components/CustomPage.tsx

import Head from 'next/head';

interface CustomPageProps {
  imageSrc: string;
  title: string;
  text: string;
}

const Lobby: React.FC<CustomPageProps> = ({ imageSrc, title, text }) => {
  return (
    <section>
    <div className="min-h-screen relative flex items-center justify-center" style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>



      <div className="absolute inset-0 flex items-center justify-center">
        <div className="border-2 max-w-screen-md mx-auto bg-gradient-to-b from-transparent to-opacity-40 backdrop-filter backdrop-blur-sm p-4 text-center text-white">
          <div className="mb-4">
            <h1 className="text-5xl font-bold">{title}</h1>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-end justify-end w-[768px] mx-auto mb-48">
        <div className=" border-2 max-w-[420px] bg-gradient-to-t from-opacity-40 to-transparent backdrop-filter backdrop-blur-sm p-4 text-right text-white">
          <div className="text-lg">{text}</div>
        </div>
      </div>

      <Head>
        <title>{title}</title>
      </Head>
    </div>
    </section>
  );
};

export default Lobby;
