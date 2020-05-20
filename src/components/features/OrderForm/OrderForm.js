import {Row,Col,Grid} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import React from 'react';
import PropTypes from 'prop-types';

const OrderForm = ({tripCost, options}) => {

  return(
    <Grid>
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost= {tripCost} options={options}/>
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.string,
};

export default OrderForm;