import * as icons from '@icons';
import iconData from '@icons/icon-data.json';
import { useLogo } from 'contexts/LogoProvider';

const Icon = () => {
  const [logo, updateLogo] = useLogo();
  return (
    <div>
      <div>Icon</div>
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

export default Icon;
