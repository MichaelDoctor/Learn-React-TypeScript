import { useEffect } from 'react';

/**
 * This function removes the script from the document
 * if it is already in the body.
 * @param url of script
 */
const removeScript = (url: string):void => {
  // gets all the scripts with the className = useScript

  // eslint-disable-next-line max-len
  const scripts: HTMLCollectionOf<Element> = document.getElementsByClassName('useScript');

  // for each element in the scripts constant,
  // remove the script if it already exists in the array
  Array.from(scripts).forEach((elem) => {
    const scriptElem = elem as HTMLScriptElement;
    if (scriptElem.src === url) {
      document.body.removeChild(elem);
    }
  });
};

/**
 * This function loads a script tag into the body.
 * @param url of external script
 */
const useScript = (url: string):void => {
  // useEffect is called whenever the component is mounted
  useEffect(() => {
    // calls removeScript function
    removeScript(url);

    // This creates a script element
    const script = document.createElement('script');
    // set properties for script tag
    script.type = 'text/javascript';
    script.className = 'useScript';
    script.src = url;
    // used to ensure sequential script loading
    script.defer = true;

    // add to bottom of body
    document.body.appendChild(script);

    // called when the component dismounts
    return () => {
      removeScript(url);
    };
  }, [url]);
};

export default useScript;
