import React from 'react';
import { Row, Col } from 'antd';
import { ItemInterface } from './App';

type Props = { item: ItemInterface };
const Card = ({item}: Props) => (
      <Row className="card" align="middle">
        <Col span={4}>
          <div className="profile">
            <img alt="" src={item.image} />
          </div>
        </Col>
        <Col span={20} className="card-body">
          <h4 className="name">{item.name}</h4>
          <span className="description">{item.description}</span>
        </Col>
      </Row>
);

export default Card;