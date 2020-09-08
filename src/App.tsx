import React from 'react';
import { Collapse } from 'antd';
import Card from './Card';

const { Panel } = Collapse;

export interface ItemInterface {
  image: string;
  name: string;
  description: string;
}
const items: ItemInterface[] = [
  {
    image: 'https://assets.afcdn.com/story/20190725/2017692_w980h638c1cx512cy341cxt0cyt0cxb1024cyb681.jpg',
    name: 'Ored Sjögren',
    description: 'Histoire des civilisations européenne'
  },
  {
    image: 'https://assets.afcdn.com/story/20190725/2017692_w980h638c1cx512cy341cxt0cyt0cxb1024cyb681.jpg',
    name: 'Emelda Scandroot',
    description: 'Histoire des civilisations européenne'
  },
];

const App = () => {
  return (
    <Collapse defaultActiveKey={['1']} ghost className="site-collapse-custom-collapse">
      <Panel 
      header="Voir les 20 conférenciers supplémentaires" key="1"
        className="site-collapse-custom-panel"
      >
        {items.map((item) => (
          <Card item={item} key={item.name} />
        ))}
      </Panel>
    </Collapse>
  )
};

export default App;