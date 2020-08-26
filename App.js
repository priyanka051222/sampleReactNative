import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import AutoInvestmentsIndicators from './AutoInvestmentsIndicators';
import AutoInvestmentsCarousel from './AutoInvestmentsCarousel';
import AutoInvestmentsSettings from './AutoInvestmentsSettings';

export default function App() {
  const [item, setItem] = useState(null);

  return (
    <ScrollView style={{ marginTop: 20, height:'100%', padding:20, backgroundColor: '#fcba03' }}>
      <AutoInvestmentsIndicators/>
      <AutoInvestmentsCarousel onChangeSetting = {(item) => {setItem(item)}}/>
      {item && <AutoInvestmentsSettings item={item}/>}
    </ScrollView>
  );
}
