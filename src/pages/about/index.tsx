import AnimateComponentMount from '@/components/AnimateComponentMount';
import Head from 'next/head';
import { styled } from 'stitches.config';

const Home = () => {
  return (
    <>
      <Head>
        <title>x7ci - Full Stack Developer</title>
        <meta name="description" content="x7ci - about" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <AnimateComponentMount>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa mi, ullamcorper sit amet porta non, fermentum quis erat. Sed faucibus congue quam, non ultrices dui fermentum ut. Morbi imperdiet mi eget odio auctor vulputate. Morbi id lorem nec ex vehicula mollis. Donec rutrum lobortis risus vehicula tincidunt. Ut sit amet purus tempor, suscipit tortor sed, fringilla ligula. Fusce aliquet, neque at congue tempor, sem est eleifend orci, nec bibendum dolor sapien non ante. Fusce ultricies id ligula at varius. Phasellus tincidunt posuere justo eu malesuada. Cras porta sollicitudin nisl et tempor. Mauris semper semper tellus, in mattis urna sollicitudin ac. Curabitur at nisl eleifend, laoreet orci bibendum, rhoncus sapien. Sed in cursus justo. Etiam vulputate, odio nec sodales semper, augue nunc iaculis eros, in luctus enim libero quis dui. Donec malesuada imperdiet nulla vitae viverra. Aliquam aliquet justo et elit laoreet scelerisque.
          <br />
          <br />

          Integer tempus imperdiet nulla, eu elementum diam dapibus quis. Etiam elementum, urna quis accumsan sodales, ex nisl suscipit urna, a maximus ipsum nunc ut odio. Pellentesque mauris ipsum, gravida id eros quis, sagittis venenatis mi. Donec eget iaculis mi. Proin tincidunt quam justo, at tincidunt tortor hendrerit non. Maecenas et molestie justo, eu placerat purus. Ut sagittis orci ante. Mauris leo ligula, suscipit sed placerat vel, euismod in enim. Aenean id orci vel augue maximus lobortis in et arcu. Vivamus egestas facilisis urna sed ultricies. Proin sollicitudin dolor nec tincidunt vehicula. Phasellus quis lorem urna. Ut convallis velit lectus, ut finibus ipsum ullamcorper malesuada.
        </AnimateComponentMount>
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div', {

});

export default Home;
