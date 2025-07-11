import { useState, useEffect } from 'react';
import { fetchData } from './api';
import './style.scss';

interface Planet {
  id: string;
  name: string;
}

interface Place {
  id: string;
  name: string;
}

const Page = () => {
  const [planetList, setPlanetList] = useState<Planet[]>([]);
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState<Place[]>([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    (fetchData('/planets') as Promise<Planet[]>).then(result => {
      if (!ignore && result.length > 0) {
        console.log('获取了一个行星列表！')
        setPlanetList(result);
        setPlanetId(result[0].id); // 选择第一个行星
      }
    });
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    if (!planetId) return;
    
    let ignore = false;
    (fetchData(`/planets/${planetId}/places`) as Promise<Place[]>).then(result => {
      if (!ignore) {
        setPlaceList(result);
        setPlaceId(result[0]?.id || '');
      }
    });
    
    return () => {
      ignore = true;
    }
  }, [planetId]);

  return (
    <>
      <label>
        选择一个行星：
        <select value={planetId} onChange={e => setPlanetId(e.target.value)}>
          {
            planetList.map(planet => (
              <option key={planet.id} value={planet.id}>
                {planet.name}
              </option>
            ))
          }
        </select>
      </label>
      <label>
        选择一个地点：
        <select value={placeId} onChange={e => setPlaceId(e.target.value)}>
          {
            placeList.map(place => (
              <option key={place.id} value={place.id}>
                {place.name}
              </option>
            ))
          }
        </select>
      </label>
      <hr />
      <p>你将要前往：{planetId || '...'} 的 {placeId || '...'} </p>
    </>
  );
}

export default Page;