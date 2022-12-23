import * as icons from 'components/icons';
import iconData from 'components/icons/icon-data.json';
import { useLogo } from 'contexts/LogoProvider';

const Isotype = () => {
  const [logo, updateLogo] = useLogo();
  return (
    <div>
      <div>Isotype</div>
      <p>Sit amet dolor</p>
      {iconData.map(({ id, name }) => {
        const MyIcon = icons[id];
        return (
          <div key={id}>
            <p>{name}</p>
            <button onClick={() => updateLogo({ iconId: id })}>
              <MyIcon />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Isotype;
