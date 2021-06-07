import React, {
  FC,
  useState,
  useRef,
  useEffect,
  ChangeEvent,
} from 'react'; // FC = functional component

// Protocols. var? = Swift optionals
interface obj {
  fName: string;
  lName: string;
}
interface Props {
  text: string;
  ok?: boolean;
  num?: number;
  fn?: (id: number) => string;
  obj?: obj;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

// Press control space to show available props in params
const Test: FC<Props> = ({ text, handleChange }) => {
  const [count, setCount] = useState<number | null>(0);
  // can pass interface, object, etc.
  const [dict, setDict] = useState<obj>({ fName: 'default', lName: 'default' });

  // useRefs
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCount(null);
    setDict({ ...dict, lName: 'Doctor' });
  }, []);

  // null and undefined not the same
  // setCount(undefined);

  return (
    <div ref={divRef}>
      <h1>Interface Component</h1>
      {text}
      <br />
      <input ref={inputRef} onChange={handleChange} />
      <br />
      Count =
      {' '}
      {count || 0}
      .
      {' '}
      <br />
      Name =
      {' '}
      {dict.fName}
      {' '}
      {dict.lName}
      <br />
    </div>
  );
};

export default Test;
