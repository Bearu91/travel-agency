import {Row,Col,Grid} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import React from 'react';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import { setOrderOption } from '../../../redux/orderRedux';

const OrderForm = ({tripCost, options}) => {

  return(
    <Grid>
      <Row>
        {pricing.map(option =>(
          <Col md={4} key={option.id}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
          </Col>
        )
        )
        }
        <Col xs={12}>
          <OrderSummary tripCost= {tripCost} options={options}/>
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;