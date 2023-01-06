import Typography from '@uitoolkit/Typography';

const Signature = () => {
  return (
    <>
      Created by&nbsp;
      <Typography
        component="a"
        href="https://twitter.com/moiseseduardohp"
        alt="link to twitter"
        target="_blank"
        rel="noreferrer"
      >
        <strong>Moisés Huaringa</strong>
      </Typography>
      . Source code on&nbsp;
      <Typography
        component="a"
        href="https://github.com/moiseshp/dummy-logo-maker"
        alt="link to github"
        target="_blank"
        rel="noreferrer"
      >
        <strong>github</strong>
      </Typography>
      .
    </>
  );
};

export default Signature;
