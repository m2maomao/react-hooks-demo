import { useState, useEffect } from 'react';
import { fetchData } from './Api';

interface ListItem {
  id: string;
  name: string;
}

const useSelectOptions = (url: string | null): [ListItem[] | null, string, React.Dispatch<React.SetStateAction<string>>] => {
  const [list, setList] = useState<ListItem[] | null>(null);
  const [selectedId, setSelectedId] = useState<string>('');

  useEffect(() => {
    if (url === null) {
      return;
    }
    let ignore = false;
    fetchData(url).then(result => {
      if (!ignore) {
        setList(result);
        setSelectedId(result[0]?.id);
      }
    });
    return () => {
      ignore = true;
    }
  }, [url]);
  return [list, selectedId, setSelectedId];
}

export {
  useSelectOptions
}