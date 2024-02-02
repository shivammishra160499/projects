import { useCallback, useState } from 'react';

function App() {
  const [length, setLength] = useState(4);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [includeInt, setIncludeInt] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqertuvwxydQWERTYUIOPASDFGHJLKZXCVBNM";
    if (includeSpecial) str += "!@#$%^&*()_=";
    if (includeInt) str += "0123456789";

    for (let i = 0; i < length; i++) {
      let rnd = Math.floor(Math.random() * str.length);
      pass += str.charAt(rnd);
    }

    setPassword(pass);
  }, [length, includeSpecial, includeInt]);

  return (
    <div className="p-1 bg-green-400 ">
      <label className="block">
        Length: {length}
        <input
          type="range"
          min="0"
          max="20"
          value={length}
          onChange={(e) => {
            setLength(parseInt(e.target.value, 10));
            passwordGenerator();
          }}
          className="block mt-1 w-mid"
        />
      </label>

      <label className="block mt-4">
        Include Int:
        <input
          type="checkbox"
          name="includeInt"
          checked={includeInt}
          onChange={() => setIncludeInt(!includeInt)}
          className="ml-2"
        />
      </label>

      <label className="block mt-4">
        Include Special Char:
        <input
          type="checkbox"
          name="includeSpecialChar"
          checked={includeSpecial}
          onChange={() => setIncludeSpecial(!includeSpecial)}
          className="ml-2"
        />
      </label>

      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
      >
        Copy
      </button>

      <label>
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          className="outline-none w-70% py-1 px-3 mt-4 bg-grey-800"
        />
      </label>
    </div>
  );
}

export default App;
