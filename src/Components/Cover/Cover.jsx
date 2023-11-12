import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
  const parallaxStyles = {
    backgroundAttachment: 'fixed',
  };

  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
      bgImageStyle={parallaxStyles}
    >
      <div className="hero h-[700px] flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="py-24 mx-40 text-center bg-white opacity-100">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
