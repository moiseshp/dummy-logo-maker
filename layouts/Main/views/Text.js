import { useLogo } from 'contexts/LogoProvider';

const Text = () => {
  const [logo, updateLogo] = useLogo();
  return (
    <div>
      <div>Text</div>
      <input
        defaultValue={logo.text}
        onChange={(e) =>
          updateLogo({
            text: e.target.value,
          })
        }
        placeholder="type your text"
      />
      <br />
      <select defaultValue={logo.color} onChange={(e) => updateLogo({ color: e.target.value })}>
        <option value="yellow">Yellow</option>
        <option value="red">Red</option>
        <option value="black">Black</option>
        <option value="purple">Purple</option>
      </select>

      <select
        defaultValue={logo.fontFamily}
        onChange={(e) => updateLogo({ fontFamily: e.target.value })}
      >
        <option value="Ubuntu">Ubuntu</option>
        <option value="Arial">Arial</option>
        <option value="OpenSans">Open Sans</option>
      </select>
    </div>
  );
};

export default Text;
